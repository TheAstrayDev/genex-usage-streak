import { createRequire } from "node:module";
import { mkdir, readFile, writeFile, mkdtemp } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { spawn } from "node:child_process";
import { build } from "../node_modules/esbuild/lib/main.js";
import { pathToFileURL } from "node:url";
const root = path.resolve(import.meta.dirname, ".."),
	host = path.resolve(process.env.GENEX_HOST_DIR || path.resolve(root, "../genex-plugin-host-local")),
	out = path.join(root, ".evidence");
const { fixtureElectronEnv } = await import(pathToFileURL(path.join(host, "scripts/electron-runtime.mjs")).href);
await mkdir(out, { recursive: true });
const profile = await mkdtemp(path.join(os.tmpdir(), "genex-streak-ui-"));
await build({
	entryPoints: [path.join(root, "tests/ui-fixture.tsx")],
	bundle: true,
	platform: "browser",
	format: "esm",
	jsx: "automatic",
	nodePaths: [path.join(host, "node_modules")],
	alias: { "@genex-host": host },
	outfile: path.join(out, "fixture.js"),
	define: { "process.env.NODE_ENV": '"production"' },
});
await writeFile(
	path.join(out, "index.html"),
	`<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="${path.join(host, "dist/renderer/theme.css")}"><style>body{margin:0;background:#0f0f10;color:var(--foreground)}.dashboard-frame{width:100%;height:1100px;border:0}.mock-composer{position:absolute;top:35%;left:20%;width:60%;text-align:center;font:24px system-ui;display:flex;flex-direction:column;gap:6px}.mock-prompt{font-size:16px;padding:24px;text-align:left;margin-top:24px}.mock-compose-row{display:flex;justify-content:space-between;font-size:11px;height:28px;align-items:center}section{display:none}body.mounted section{display:block}body.mounted>.dashboard-frame{display:none}</style><div id="root"></div><script type="module" src="fixture.js"></script>`,
);
const pages = Object.fromEntries(
	await Promise.all(
		["streak", "dashboard"].map(async (p) => [
			p,
			await readFile(path.join(root, "dist", p + ".html"), "utf8"),
		]),
	),
);
await writeFile(
	path.join(out, "runner.cjs"),
	`
const {app,BrowserWindow,protocol}=require('electron'),fs=require('node:fs'),{setTimeout:sleep}=require('node:timers/promises');
app.disableHardwareAcceleration();app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');app.setPath('userData',${JSON.stringify(profile)});app.setPath('sessionData',${JSON.stringify(path.join(profile, "session"))});protocol.registerSchemesAsPrivileged([{scheme:'studio-plugin',privileges:{secure:true,standard:true}}]);
const pages=${JSON.stringify(pages)},checks=[],errors=[];let win;
const check=(name,ok)=>{checks.push({name,ok:!!ok});if(!ok)throw new Error(name)};
app.whenReady().then(async()=>{protocol.handle('studio-plugin',request=>new Response(pages[new URL(request.url).pathname.slice(1)]||'',{headers:{'Content-Type':'text/html','Content-Security-Policy':"default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'"}}));win=new BrowserWindow({show:false,width:1440,height:1100,webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true,backgroundThrottling:false,offscreen:true}});const wc=win.webContents;wc.on('console-message',(_e,level,message)=>{if(level>=3)errors.push(message)});wc.on('render-process-gone',(_e,details)=>errors.push(JSON.stringify(details)));const js=s=>wc.executeJavaScript(s);
let panel;const until=async fn=>{for(let i=0;i<100;i++){if(await fn())return;await sleep(40)}throw Error('Timeout')};const run=s=>panel.executeJavaScript(s);const click=action=>run('document.querySelector("[data-action='+action+']").click()');
try{await win.loadFile(${JSON.stringify(path.join(out, "index.html"))});await until(async()=>{panel=wc.mainFrame.frames.find(f=>f.url.endsWith('/dashboard'));return panel&&await run('!!document.querySelector(".heatmap")')});
check('isolated panel has no host preload or Node',await run('self.origin==="null"&&typeof require==="undefined"&&typeof window.studio==="undefined"'));
check('year calendar has 7 rows and at least 365 accessible days',await run('document.querySelectorAll(".day").length>=365&&getComputedStyle(document.querySelector(".heatmap")).gridTemplateRows.split(" ").length===7'));
check('renders only synthetic reported model names',await run('document.querySelector("#model").textContent.includes("GPT 6.1")&&document.querySelector("#model").textContent.includes("Claude Opus")'));
const before=await run('document.querySelector(".summary").textContent');await run('document.querySelector("#project").value="car-evolve";document.querySelector("#project").dispatchEvent(new Event("change",{bubbles:true}))');await until(()=>run('document.querySelector(".summary").textContent!=='+JSON.stringify(before)));check('game filter changes real aggregate',await run('document.querySelectorAll(".game").length===1'));
await click('reset-filters');await until(()=>run('document.querySelectorAll(".game").length===2'));
await run('document.querySelector("[data-tab=models]").click()');check('model table includes input output cache and totals',await run('document.querySelectorAll(".model-row").length===3&&document.querySelector(".model-table").textContent.includes("Cache")'));
await run('document.querySelector("[data-tab=changes]").click()');check('file activity labels requested edits without invented diffs',await run('document.querySelector(".files").textContent.includes("src/car.ts")&&document.querySelector(".hint").textContent.includes("does not prove")'));
await run('document.querySelector("[data-tab=activity]").click()');check('tree exposes observed worker summary',await run('document.querySelector(".event-tree").textContent.includes("Adjusted steering")'));
await run('Array.from(document.querySelectorAll(".day")).find(d=>d.tabIndex===0).focus();document.activeElement.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowLeft",bubbles:true}))');check('heatmap supports arrow-key navigation and focus',await run('document.activeElement.classList.contains("day")&&document.activeElement.tabIndex===0'));
await run('document.querySelector(".day:last-child").click()');await until(()=>run('!!document.querySelector("[data-action=clear-day]")'));check('day selection filters dashboard',true);await click('clear-day');
await until(()=>run('!document.querySelector("[data-action=clear-day]")'));await run('document.querySelector(".dashboard").scrollTop=0');await sleep(250);fs.writeFileSync(${JSON.stringify(path.join(out, "dashboard.png"))},(await wc.capturePage(undefined,{stayHidden:true,stayAwake:true})).toPNG());
await js('document.querySelector(".dashboard-frame").style.width="390px"');check('dashboard fits a narrow panel',await run('document.documentElement.scrollWidth<=innerWidth+1'));await js('document.querySelector(".dashboard-frame").style.width="100%"');
await click('mount');await until(()=>js('!!streakTest.profile()'));check('composition changes no theme or background',await js('Object.keys(streakTest.profile().dark).length===0&&Object.keys(streakTest.profile().surfaces).length===0'));
await js('document.body.classList.add("mounted");document.querySelector(".dashboard-frame").style.display="none"');await until(async()=>{panel=wc.mainFrame.frames.find(f=>f.url.endsWith('/streak'));return panel&&await run('!!document.querySelector(".compact .heatmap")')});
check('compact widget is mounted on New Chat',await js('!!document.querySelector("[data-customization-widget=usage-streak]")'));check('widget stays below composer at reference height',await js('document.querySelector("[data-customization-widget=usage-streak]").getBoundingClientRect().top>document.querySelector(".mock-compose-row").getBoundingClientRect().bottom'));
check('widget contains only counters and recent calendar',await run('!document.querySelector("header,.game,.tabs,.head-actions")&&document.querySelectorAll(".day").length<190'));
check('widget numbers and month labels stay English',await run('!/[А-Яа-яЁё]/.test(document.body.textContent)&&document.querySelector(".streak-total").textContent.includes("M")'));
check('card matches composer width, stays compact, rounded and equally padded',await js('(()=>{const card=document.querySelector("[data-customization-widget]"),frame=card.querySelector("iframe"),parent=document.querySelector(".mock-composer"),r=card.getBoundingClientRect(),f=frame.getBoundingClientRect(),p=parent.getBoundingClientRect(),c=getComputedStyle(card),prompt=getComputedStyle(document.querySelector(".mock-prompt"));return Math.abs(r.width-p.width)<1&&r.height===160&&Math.abs((r.left+r.right-p.left-p.right)/2)<1&&c.borderRadius===prompt.borderRadius&&c.borderTopWidth===prompt.borderTopWidth&&c.borderTopStyle===prompt.borderTopStyle&&c.borderTopColor===prompt.borderTopColor&&[f.left-r.left,r.right-f.right,f.top-r.top,r.bottom-f.bottom].every(n=>Math.abs(n+7)<1)})()'));
await until(()=>run('parseInt(document.querySelector("#root").style.getPropertyValue("--weeks"))===13'));check('reference layout places streak at left and Monday-first calendar at right',await run('(()=>{const info=document.querySelector(".streak-overview").getBoundingClientRect(),grid=document.querySelector(".widget-calendar").getBoundingClientRect();return info.right<grid.left&&document.querySelector(".streak-count strong").textContent.includes("days")&&document.querySelector(".streak-eyebrow").textContent==="CURRENT STREAK"&&document.querySelector(".weekdays").textContent==="MonWedFriSun"&&document.querySelector(".day").getBoundingClientRect().height>=11})()'));
check('widget reveals exactly the composer surface without a gradient',await js('getComputedStyle(document.querySelector("[data-customization-widget]")).backgroundColor===getComputedStyle(document.querySelector(".mock-prompt")).backgroundColor')&&await run('(()=>{const body=getComputedStyle(document.body),root=document.querySelector("#root"),style=getComputedStyle(root),before=getComputedStyle(root,"::before");return [body,style,before].every(s=>s.backgroundImage==="none"&&s.backgroundColor==="rgba(0, 0, 0, 0)")})()'));
check('primary widget text uses Genex foreground',await run('getComputedStyle(document.querySelector("#root")).color')===await js('getComputedStyle(document.body).color'));
const surfaceProof=async()=>{const points=await js('(()=>{const p=document.querySelector(".mock-prompt").getBoundingClientRect(),w=document.querySelector("[data-customization-widget]").getBoundingClientRect();return [p,w].map(r=>({x:Math.floor(r.right-28),y:Math.floor(r.top+16),width:1,height:1}))})()');const colors=[];for(const p of points)colors.push((await wc.capturePage(p,{stayHidden:true,stayAwake:true})).toBitmap().toString('hex'));return colors[0]===colors[1]};
check('rendered widget and prompt background pixels match',await surfaceProof());
const originalSurface=await js('({surface:document.documentElement.style.getPropertyValue("--surface"),composer:document.documentElement.style.getPropertyValue("--composer")})');
await js('document.documentElement.style.setProperty("--surface","#252525");document.documentElement.style.setProperty("--composer","#252525")');await sleep(60);
check('backgrounds still match after host surface changes',await surfaceProof());
await js('document.documentElement.style.setProperty("--surface",'+JSON.stringify(originalSurface.surface)+');document.documentElement.style.setProperty("--composer",'+JSON.stringify(originalSurface.composer)+')');
check('halo has a bounded overscan and panel isolation remains intact',await js('getComputedStyle(document.querySelector("[data-customization-widget]")).overflow==="visible"')&&await run('self.origin==="null"&&typeof require==="undefined"'));
for(const width of [760,390,280]){await js('document.querySelector(".mock-composer").style.width='+JSON.stringify(width+'px'));await sleep(100);check('widget has no horizontal or vertical scrolling at container '+width+'px',await run('document.documentElement.scrollWidth<=innerWidth+1&&document.documentElement.scrollHeight<=innerHeight+1&&document.querySelector(".streak-overview").getBoundingClientRect().right<document.querySelector(".widget-calendar").getBoundingClientRect().left')&&await js('Math.abs(document.querySelector("[data-customization-widget]").getBoundingClientRect().width-document.querySelector(".mock-prompt").getBoundingClientRect().width)<1'));}
await js('document.querySelector(".mock-composer").style.width="60%"');await sleep(250);fs.writeFileSync(${JSON.stringify(path.join(out, "widget.png"))},(await wc.capturePage(undefined,{stayHidden:true,stayAwake:true})).toPNG());
for(const [days,tier] of [[0,'rest'],[1,'ember'],[3,'flame'],[7,'coral'],[14,'violet'],[30,'aurora'],[90,'solar']]){
 await js('streakTest.streak('+days+')');await run('document.dispatchEvent(new Event("visibilitychange"))');await until(()=>run('document.querySelector("#root").dataset.aura==='+JSON.stringify(tier)));check('current streak selects '+tier+' aura',await run('document.querySelector(".streak-count strong").textContent.trim().startsWith('+JSON.stringify(String(days))+')'));await sleep(100);fs.writeFileSync(${JSON.stringify(out)}+'/aura-'+days+'.png',(await wc.capturePage(undefined,{stayHidden:true,stayAwake:true})).toPNG());const bounds=await js('(()=>{const r=document.querySelector("[data-customization-widget]").getBoundingClientRect();return {x:Math.floor(r.x)-8,y:Math.floor(r.y)-8,width:Math.ceil(r.width)+16,height:Math.ceil(r.height)+16}})()');fs.writeFileSync(${JSON.stringify(out)}+'/tile-aura-'+days+'.png',(await wc.capturePage(bounds,{stayHidden:true,stayAwake:true})).toPNG());
}
check('aura loops are finite-cost CSS animations with matching endpoints',await run('(()=>{const animations=document.getAnimations().filter(a=>["streak-breathe","streak-drift"].includes(a.animationName));return animations.length===2&&animations.every(a=>{const f=a.effect.getKeyframes(),first=f[0],last=f[f.length-1];return a.effect.getTiming().iterations===Infinity&&first.opacity===last.opacity&&first.transform===last.transform&&a.playState==="running"})})()'));
check('vector flame actually advances while lit',await run('(async()=>{const path=document.querySelector(".flame-outer"),a=getComputedStyle(path).d;await new Promise(r=>setTimeout(r,140));return getComputedStyle(path).d!==a&&document.getAnimations().filter(a=>a.animationName?.startsWith("streak-flame-")).every(a=>a.playState==="running")})()'));
await run('Object.defineProperty(document,"hidden",{configurable:true,value:true});document.dispatchEvent(new Event("visibilitychange"))');
check('hidden widget pauses all flame and halo animations',await run('(async()=>{const animations=document.getAnimations().filter(a=>a.animationName?.startsWith("streak-"));await Promise.all(animations.map(a=>a.ready));const path=document.querySelector(".flame-outer"),before=getComputedStyle(path).d;await new Promise(r=>setTimeout(r,150));return animations.length===4&&animations.every(a=>a.playState==="paused")&&getComputedStyle(path).d===before})()'));
await run('delete document.hidden;document.dispatchEvent(new Event("visibilitychange"))');
check('visible widget resumes vector playback',await run('document.getAnimations().filter(a=>a.animationName?.startsWith("streak-flame-")).every(a=>a.playState==="running")'));
// Seek only after lifecycle checks: WAAPI play() overrides subsequent CSS play-state.
check('both flame contours are sampled at 24 FPS with a seamless loop',await run('(()=>{const animations=document.getAnimations().filter(a=>a.animationName?.startsWith("streak-flame-"));return animations.length===2&&animations.every(a=>{const frames=a.effect.getKeyframes(),t=a.effect.getTiming(),path=a.effect.target;a.pause();a.effect.updateTiming({delay:0});a.currentTime=0;const start=getComputedStyle(path).d;a.currentTime=20;const held=getComputedStyle(path).d;a.currentTime=43;const next=getComputedStyle(path).d;a.currentTime=2000;const loop=getComputedStyle(path).d;a.effect.updateTiming({delay:t.delay});a.play();return frames.length===49&&t.duration===2000&&t.iterations===Infinity&&frames.slice(0,-1).every(f=>f.easing==="steps(1)")&&start===held&&start!==next&&start===loop})})()'));
await js('streakTest.streak(0)');await run('document.dispatchEvent(new Event("visibilitychange"))');await until(()=>run('document.querySelector("#root").dataset.aura==="rest"'));
check('unlit flame is static and runs no animations',await run('(async()=>{const path=document.querySelector(".flame-outer"),before=getComputedStyle(path).d;await new Promise(r=>setTimeout(r,150));return document.getAnimations().filter(a=>a.animationName?.startsWith("streak-")).length===0&&getComputedStyle(path).d===before})()'));
await js('streakTest.streak(30)');await run('document.dispatchEvent(new Event("visibilitychange"))');await until(()=>run('document.querySelector("#root").dataset.aura==="aurora"'));
wc.debugger.attach('1.3');const targets=await wc.debugger.sendCommand('Target.getTargets');const iframeTarget=targets.targetInfos.find(t=>t.type==='iframe'&&t.url.endsWith('/streak'));const mediaSession=iframeTarget?(await wc.debugger.sendCommand('Target.attachToTarget',{targetId:iframeTarget.targetId,flatten:true})).sessionId:undefined;await wc.debugger.sendCommand('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]},mediaSession);await until(()=>run('matchMedia("(prefers-reduced-motion: reduce)").matches'));check('reduced motion makes the flame and halo static',await run('document.getAnimations().filter(a=>a.animationName?.startsWith("streak-")).length===0'));await wc.debugger.sendCommand('Emulation.setEmulatedMedia',{features:[]},mediaSession);wc.debugger.detach();
const chosen=await run('Array.from(document.querySelectorAll("button.day")).at(-1).dataset.date');await run('Array.from(document.querySelectorAll("button.day")).at(-1).click()');await until(async()=>{panel=wc.mainFrame.frames.find(f=>f.url.endsWith('/dashboard'));return panel&&await run('!!document.querySelector("[data-action=clear-day]")')});check('day click opens real Plugins page with that day selected',await js('Array.from(document.querySelectorAll("[aria-label]")).some(el=>el.getAttribute("aria-label")==="Studio plugins")')&&await run('document.querySelector(".summary").textContent.includes('+JSON.stringify(chosen)+')'));check('day click never expands New Chat composition',await js('streakTest.profile().widgets[0].target==="newChatFooter"&&streakTest.profile().widgets[0].rowSpan===24'));
await js('streakTest.error(true)');await click('refresh');await until(()=>run('!!document.querySelector(".warning")'));check('read failure stays visible and preserves last data',await run('document.querySelector(".warning")?.textContent.includes("Fixture read failed")&&!!document.querySelector(".heatmap")'));await js('streakTest.error(false)');await click('refresh');await until(()=>run('!document.querySelector(".warning")'));
await js('streakTest.empty(true)');await click('refresh');await until(()=>run('document.querySelector(".summary>strong").textContent.trim().startsWith("0 reported")'));check('empty history does not fabricate usage or screenshots',await run('document.querySelectorAll(".game").length===0&&document.querySelector(".empty").textContent.includes("No reported tokens")'));
await js('streakTest.home()');await js('streakTest.enable(false)');await until(()=>js('!document.querySelector("[data-customization-widget]")'));check('disable removes widget',true);
check('no renderer exceptions',errors.length===0);
}catch(err){checks.push({name:'completed',ok:false,error:String(err.stack)})}fs.writeFileSync(${JSON.stringify(path.join(out, "ui-report.json"))},JSON.stringify({checks,errors,provider:'synthetic fixture',electron:process.versions.electron},null,2));win.destroy();app.exit(checks.some(c=>!c.ok)?1:0)});
`,
);
const electron = createRequire(path.join(host, "package.json"))("electron"),
	child = spawn(electron, [path.join(out, "runner.cjs")], {
		env: fixtureElectronEnv(),
		stdio: ["ignore", "pipe", "pipe"],
	});
child.stdout.on("data", (d) => process.stdout.write(d));
child.stderr.on("data", (d) => process.stderr.write(d));
const timer = setTimeout(() => child.kill("SIGKILL"), 45000);
try {
	const code = await new Promise((resolve, reject) => {
		child.once("exit", resolve);
		child.once("error", reject);
	});
	console.log(await readFile(path.join(out, "ui-report.json"), "utf8"));
	if (code !== 0) process.exitCode = 1;
} finally {
	clearTimeout(timer);
	const { removeTree } = await import(
		pathToFileURL(path.join(host, "tests/helpers/tmp.ts")).href
	);
	await removeTree(profile);
}
