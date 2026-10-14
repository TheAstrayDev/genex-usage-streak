/** Sampled SVG contours: two seconds at 24 FPS, generated once when packaging. */
export const FLAME_FPS = 24;
export const FLAME_SECONDS = 2;
export const FLAME_FRAMES = FLAME_FPS * FLAME_SECONDS;
const outer = [
 [18.5,2.5], [19.5,9.5,13,10.7,13.4,16], [11.3,14.9,10.3,12.7,10.6,10.7],
 [6,15.5,3.7,19.5,4.6,24.7], [5.5,30.1,10.3,33,15.6,33],
 [22.2,33,27.6,28.6,27.6,22.3], [27.6,18.1,25.1,13.5,21.8,10.7],
 [22.3,15,21,16.3,19.7,17.5], [21.1,11.2,21.9,7.1,18.5,2.5],
];
const inner = [
 [16.2,20.1], [16.7,23.1,13.1,23.4,13,25.9], [12.9,27.7,14.2,29,16,29],
 [18.2,29,20.1,27.5,20.1,25.4], [20.1,23.7,18.7,21.9,17.8,21.3],
 [17.9,22.9,17.2,23.5,16.5,23.9], [17,22.5,17,21.2,16.2,20.1],
];
export function flamePath(part: "outer" | "inner", frame = 0): string {
 const phase = ((frame % FLAME_FRAMES) / FLAME_FRAMES) * Math.PI * 2;
 const core = part === "inner";
 return (core ? inner : outer).map((segment, index) => {
  const points: number[] = [];
  for (let i = 0; i < segment.length; i += 2) {
   const x = segment[i], y = segment[i+1];
   // Keep the base anchored; the tip bends most, with a smaller counter-moving tongue.
   const weight = Math.max(0, (core ? 29-y : 33-y) / (core ? 9 : 30.5));
   const sway = core ? -.65*Math.sin(phase)+.2*Math.sin(3*phase) : 1.6*Math.sin(phase)+.35*Math.sin(2*phase);
   const lift = core ? .55*Math.sin(2*phase)+.15*(Math.cos(phase)-1) : -.65*Math.sin(2*phase)+.2*Math.sin(3*phase)+.25*(Math.cos(phase)-1);
   points.push(Number((x+sway*weight*weight).toFixed(3)), Number((y+lift*weight).toFixed(3)));
  }
  return (index === 0 ? "M" : "C") + points.join(" ");
 }).join("") + "Z";
}
export const flameIcon = `<svg viewBox="0 0 32 36" fill="none" aria-hidden="true"><path class="flame-outer" d="${flamePath("outer")}"/><path class="flame-inner" d="${flamePath("inner")}"/></svg>`;

/** CSS owns playback: no timer, RAF loop, SVG script, or per-frame DOM writes. */
export function flameAnimationCSS(): string {
 return (["outer", "inner"] as const).map(part => `
.compact:not([data-aura="rest"]) .flame-${part} {
 animation: streak-flame-${part} ${FLAME_SECONDS}s steps(1,end) infinite;
 animation-delay: var(--aura-delay,0s);
}
@keyframes streak-flame-${part} {
${Array.from({length: FLAME_FRAMES+1}, (_,frame) => `${Number((frame/FLAME_FRAMES*100).toFixed(8))}% { d: path("${flamePath(part,frame)}"); }`).join("\n")}
}`).join("\n") + `
.motion-paused .streak-flame path { animation-play-state: paused !important; }
@media (prefers-reduced-motion: reduce) { .streak-flame path { animation: none !important; } }
`;
}
