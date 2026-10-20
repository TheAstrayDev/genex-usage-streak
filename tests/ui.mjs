import { createRequire } from "node:module";
import { mkdir, readFile, writeFile, mkdtemp, rm } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { spawn } from "node:child_process";
import { build } from "esbuild";
import { pathToFileURL } from "node:url";
const root = path.resolve(import.meta.dirname, ".."),
  host = path.resolve(process.env.GENEX_HOST_DIR || path.resolve(root, "../genex-plugin-0.1.12")),
  out = path.join(root, ".evidence");
const { fixtureElectronEnv } = await import(pathToFileURL(path.join(host, "scripts/electron-runtime.mjs")).href);
await mkdir(out, { recursive: true });
const profile = await mkdtemp(path.join(os.tmpdir(), "genex-streak-ui-"));
await build({ entryPoints: [path.join(root, "tests/ui-fixture.tsx")], bundle: true, platform: "browser", format: "esm",
  jsx: "automatic", nodePaths: [path.join(host, "node_modules")], alias: { "@genex-host": host },
  outfile: path.join(out, "fixture.js"), define: { "process.env.NODE_ENV": '"production"' } });
await writeFile(path.join(out, "index.html"), `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="${pathToFileURL(path.join(host, "dist/renderer/theme.css")).href}"><style>:root{--background:#0f0f10;--foreground:#eeeeef;--accent-primary:#6071db;--accent-fill:#4759c2}body{margin:0;background:var(--background);color:var(--foreground)}nav{padding:12px;display:flex;gap:16px}.plugin-frame{width:100%;height:900px;border:0}button{cursor:pointer}</style></head><body><div id="root"></div><script type="module" src="fixture.js"></script></body></html>`);
const pages = Object.fromEntries(await Promise.all(["streak", "dashboard"].map(async p => [p, await readFile(path.join(root, "dist", p + ".html"), "utf8")])));
await writeFile(path.join(out, "runner.cjs"), `
const {app,BrowserWindow,protocol}=require('electron'),fs=require('node:fs'),{setTimeout:sleep}=require('node:timers/promises');
app.disableHardwareAcceleration();app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');app.setPath('userData',${JSON.stringify(profile)});protocol.registerSchemesAsPrivileged([{scheme:'studio-plugin',privileges:{secure:true,standard:true}}]);
const pages=${JSON.stringify(pages)},checks=[],errors=[];let win;
const check=(name,ok)=>{checks.push({name,ok:!!ok});if(!ok)throw Error(name)};
app.whenReady().then(async()=>{protocol.handle('studio-plugin',request=>new Response(pages[new URL(request.url).pathname.slice(1)]||'',{headers:{'Content-Type':'text/html','Content-Security-Policy':"default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'"}}));
 win=new BrowserWindow({show:false,width:1100,height:1000,webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true,backgroundThrottling:false,offscreen:true}});const wc=win.webContents;wc.on('console-message',event=>{if(event.level==='error')errors.push(event.message)});const js=s=>wc.executeJavaScript(s);
 let panel;const until=async fn=>{for(let i=0;i<125;i++){if(await fn())return;await sleep(40)}throw Error('condition timed out')};const run=s=>panel.executeJavaScript(s);
 const selected=async name=>{await until(async()=>{panel=wc.mainFrame.frames.find(f=>f.url.endsWith('/'+name));return panel&&await run('!!document.querySelector(".summary,.streak-count")')})};
 try{
 await win.loadFile(${JSON.stringify(path.join(out, "index.html"))});await selected('dashboard');
 check('dashboard loads through the unmodified released PluginPanelHost',await run('document.querySelector("h1").textContent==="Usage-Streak"'));
 check('reported usage and both games are visible',await run('document.querySelector(".summary").textContent.includes("reported tokens")&&document.querySelectorAll(".game").length===2'));
 check('calendar month labels stay above the day cells',await run('(()=>{const row=document.querySelector(".month-row").getBoundingClientRect();return [...document.querySelectorAll(".month-row span")].every(e=>e.getBoundingClientRect().bottom<=row.bottom+1)})()'));
 check('panel stays isolated with no Node access',await run('self.origin==="null"&&typeof require==="undefined"&&typeof window.studio==="undefined"'));
 check('unsupported New Chat controls are absent',await run('!document.querySelector("[data-action=mount]")'));
 await run('[...document.querySelectorAll("[data-date]")].find(e=>e.dataset.date==="2026-10-20").click()');await until(()=>run('!!document.querySelector("[data-action=clear-day]")'));
 check('dashboard day selection filters in the panel',await run('document.querySelector(".summary").textContent.includes("2026-10-20")'));
 await run('document.querySelector("[data-action=reset-filters]").click()');await until(()=>run('!document.querySelector("[data-action=clear-day]")'));
 await run('document.querySelector("[data-tab=models]").click()');check('model breakdown remains available',await run('document.querySelectorAll(".model-table .model-row").length===3'));
 await run('document.querySelector("[data-tab=changes]").click()');await run('document.querySelector("#project").value="Racing";document.querySelector("#project").dispatchEvent(new Event("change",{bubbles:true}))');await until(()=>run('!!document.querySelector("[data-action=compare]")'));
 await run('document.querySelector("[data-action=compare]").click()');await until(()=>run('document.body.textContent.includes("No saved checkpoints in this fixture.")'));
 check('checkpoint comparison uses a declared action',true);
 await js('streakTest.panel("streak")');await selected('streak');
 check('compact overview has two weeks and a visible flame',await run('document.querySelectorAll(".day").length===14&&!!document.querySelector(".flame-outer")'));
 await run('[...document.querySelectorAll("[data-date]")].find(e=>e.dataset.date==="2026-10-20").click()');await until(()=>run('!!document.querySelector(".dashboard")'));
 check('overview opens the selected day locally without host navigation',await run('document.querySelector(".summary").textContent.includes("2026-10-20")&&!!document.querySelector("[data-action=back]")'));
 await run('document.querySelector("[data-action=back]").click()');await until(()=>run('!!document.querySelector(".compact")'));
 check('Back returns to the same compact panel',panel.url.endsWith('/streak'));
 for(const width of [1100,600,400]){win.setContentSize(width,900);await sleep(80);check('overview fits '+width+'px',await run('document.documentElement.scrollWidth<=innerWidth+1'))}
 wc.setZoomFactor(1.25);await sleep(80);check('overview fits at 125 percent zoom',await run('document.documentElement.scrollWidth<=innerWidth+1'));wc.setZoomFactor(1);win.setContentSize(1100,1000);
 for(const [days,tier] of [[0,'rest'],[1,'ember'],[3,'flame'],[7,'coral'],[14,'violet'],[30,'aurora'],[90,'solar']]){await js('streakTest.streak('+days+')');await run('document.dispatchEvent(new Event("visibilitychange"))');await until(()=>run('document.querySelector("#root").dataset.aura==='+JSON.stringify(tier)));check('streak aura '+tier,true)}
 check('lit flame has vector animations',await run('document.getAnimations().some(a=>a.animationName?.startsWith("streak-flame-"))'));
 await run('Object.defineProperty(document,"hidden",{configurable:true,value:true});document.dispatchEvent(new Event("visibilitychange"))');check('hidden overview pauses motion',await run('document.getAnimations().filter(a=>a.animationName?.startsWith("streak-")).every(a=>a.playState==="paused")'));
 await run('delete document.hidden;document.dispatchEvent(new Event("visibilitychange"))');
 wc.debugger.attach('1.3');
 // The sandboxed plugin is an out-of-process iframe: emulate on its target, not the parent.
 const {targetInfos}=await wc.debugger.sendCommand('Target.getTargets');
 const target=targetInfos.find(t=>t.type==='iframe'&&t.url===panel.url);
 check('isolated panel has a DevTools target',!!target);
 const {sessionId}=await wc.debugger.sendCommand('Target.attachToTarget',{targetId:target.targetId,flatten:true});
 await wc.debugger.sendCommand('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]},sessionId);
 await until(()=>run('matchMedia("(prefers-reduced-motion: reduce)").matches'));
 await until(()=>run('document.getAnimations().filter(a=>a.animationName?.startsWith("streak-")).length===0'));
 check('reduced motion stops animated flame',true);
 await wc.debugger.sendCommand('Emulation.setEmulatedMedia',{features:[]},sessionId);wc.debugger.detach();
 await js('streakTest.streak(30)');await run('document.dispatchEvent(new Event("visibilitychange"))');await until(()=>run('document.querySelector("#root").dataset.aura==="aurora"'));
 fs.writeFileSync(${JSON.stringify(path.join(out, "streak-overview.png"))},(await wc.capturePage()).toPNG());
 await js('streakTest.panel("dashboard")');await selected('dashboard');await js('streakTest.error(true)');await run('document.querySelector("[data-action=refresh]").click()');await until(()=>run('document.body.textContent.includes("Fixture read failed")'));check('backend errors remain visible',true);
 await js('streakTest.error(false);streakTest.empty(true)');await run('document.querySelector("[data-action=refresh]").click()');await until(()=>run('document.body.textContent.includes("No reported tokens yet")'));check('empty data is an honest empty state',true);
 await js('streakTest.empty(false)');await run('document.querySelector("[data-action=refresh]").click()');await until(()=>run('document.querySelectorAll(".game").length===2'));
 fs.writeFileSync(${JSON.stringify(path.join(out, "dashboard.png"))},(await wc.capturePage()).toPNG());
 const methods=await js('streakTest.requests()');check('all panel calls use released APIs',methods.every(m=>['context','action','settings','chooseFile'].includes(m)));
 await js('streakTest.enable(false)');await until(()=>js('!document.querySelector("iframe")'));const reads=await js('streakTest.reads()');await sleep(5200);check('disable removes the panel and stops its polling',await js('streakTest.reads()')===reads);
 check('no renderer errors',errors.length===0);fs.writeFileSync(${JSON.stringify(path.join(out, "ui-report.json"))},JSON.stringify({checks,errors,host:'stock Genex v0.1.12 panel code',providers:'fixture IPC, no model calls'},null,2));app.exit(0);
 }catch(e){fs.writeFileSync(${JSON.stringify(path.join(out, "ui-report.json"))},JSON.stringify({checks,errors,error:String(e)},null,2));console.error(e);app.exit(1)}
});
`);
const require = createRequire(path.join(host, "package.json"));
const child = spawn(require("electron"), [path.join(out, "runner.cjs")], { env: fixtureElectronEnv(), stdio: "inherit" });
const timeout = setTimeout(() => child.kill(), 90_000);
try { const code = await new Promise((resolve, reject) => { child.once("exit", resolve);child.once("error", reject); }); process.exitCode = code ?? 1; }
finally { clearTimeout(timeout); await rm(profile, { recursive: true, force: true, maxRetries: 8, retryDelay: 100 }); }
