/** Documentation asset only; reuses the plugin's real vector frames, with no screenshot data. */
import { mkdir, writeFile } from 'node:fs/promises';
import { flameAnimationCSS, flameIcon } from '../src/flame.ts';
import { streakAura } from '../src/widget.ts';

const variants = [
 { days:0, label:'0 days', name:'Dormant', color:'#b8b8b8', echo:'#b8b8b8', cycle:8.8 },
 { days:1, label:'1-2 days', name:'Ember', color:'#e8bb85', echo:'#d49963', cycle:8.8 },
 { days:3, label:'3-6 days', name:'Flame', color:'#f3a677', echo:'#de795d', cycle:7.6 },
 { days:7, label:'7-13 days', name:'Coral', color:'#f2a0ad', echo:'#ce7caa', cycle:8.4 },
 { days:14, label:'14-29 days', name:'Violet', color:'#c2adf5', echo:'#8e8ae3', cycle:10 },
 { days:30, label:'30-89 days', name:'Aurora', color:'#a0c6f5', echo:'#8bdbce', cycle:9.6 },
 { days:90, label:'90+ days', name:'Solar', color:'#f2dfb3', echo:'#dcb584', cycle:8 },
];
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="238" viewBox="0 0 1000 238" role="img" aria-labelledby="title description">
<title id="title">Usage-Streak: all streak auras</title>
<desc id="description">Dormant at zero days. Ember at one, Flame at three, Coral at seven, Violet at fourteen, Aurora at thirty, Solar at ninety. Active vector flames run at 24 frames per second. Slow looping halos follow their colors. These are illustrative milestones, not account data.</desc>
<style>
text{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;fill:#d9d9d9}
.caption{font-size:12px;fill:#aaa;letter-spacing:.2px}.name{font-size:15px;font-weight:500}.days{font-size:12px;fill:#aaa}
.halo{transform-box:fill-box;transform-origin:center;animation:gallery-breathe var(--cycle) cubic-bezier(.45,0,.55,1) infinite}
.echo{animation-name:gallery-drift;animation-duration:calc(var(--cycle) + 2.8s)}
.streak-flame{fill:none;stroke:var(--aura);stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;overflow:visible}
@keyframes gallery-breathe{0%,100%{opacity:.5;transform:translate(-1px,2px) scale(.92)}50%{opacity:.9;transform:translate(1px,-2px) scale(1.07)}}
@keyframes gallery-drift{0%,100%{opacity:.45;transform:translate(2px,1px) scale(.94,.98)}50%{opacity:.8;transform:translate(-2px,-2px) scale(1.04,1.08)}}
${flameAnimationCSS()}
@media(prefers-reduced-motion:reduce){.halo{animation:none;opacity:.6}}
</style>
<defs><filter id="soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="5"/></filter>
${variants.filter(v=>v.days>0).map(v=>`<radialGradient id="glow-${v.days}"><stop stop-color="${v.color}" stop-opacity=".34"/><stop offset=".5" stop-color="${v.echo}" stop-opacity=".12"/><stop offset="1" stop-color="${v.echo}" stop-opacity="0"/></radialGradient>`).join('\n')}</defs>
<rect x=".5" y=".5" width="999" height="237" rx="24" fill="#0f0f10" stroke="#292929"/>
<text x="24" y="32" font-size="16" font-weight="500">Usage-Streak</text>
<text x="976" y="32" text-anchor="end" class="caption">24 FPS vector flame · looping auras</text>
${variants.map((v,i)=>`<g class="compact" data-aura="${streakAura(v.days)}" transform="translate(${23+i*138},54)" style="--aura:${v.color};--cycle:${v.cycle}s">
<rect x=".5" y=".5" width="125" height="155" rx="17" fill="#141414" stroke="#292929"/>
${v.days?`<ellipse class="halo" cx="63" cy="48" rx="42" ry="37" fill="url(#glow-${v.days})" filter="url(#soft)"/><ellipse class="halo echo" cx="63" cy="48" rx="24" ry="27" fill="url(#glow-${v.days})"/>`:''}
${flameIcon.replace('<svg ', '<svg class="streak-flame" x="44" y="23" width="38" height="44" ')}
<text x="63" y="105" text-anchor="middle" class="name">${v.name}</text><text x="63" y="129" text-anchor="middle" class="days">${v.label}</text></g>`).join('\n')}
<text x="24" y="225" class="caption">Current streak sets the aura. Zero stays still. Reduced motion is respected.</text>
</svg>\n`;
await mkdir(new URL('../docs/',import.meta.url),{recursive:true});
await writeFile(new URL('../docs/streak-auras.svg',import.meta.url),svg);
console.log('Generated docs/streak-auras.svg from the plugin vector frames');
