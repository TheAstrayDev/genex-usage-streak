import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FLAME_FPS, FLAME_SECONDS, FLAME_FRAMES, flamePath, flameAnimationCSS } from '../src/flame.ts';

test('vector flame has 48 distinct frames at 24 FPS and an exact closed loop', () => {
 assert.equal(FLAME_FPS,24);assert.equal(FLAME_SECONDS,2);assert.equal(FLAME_FRAMES,48);
 for(const part of ['outer','inner'] as const){
  const frames: string[]=Array.from({length:FLAME_FRAMES},(_,i)=>flamePath(part,i));
  assert.equal(new Set(frames).size,48);
  assert.equal(flamePath(part,48),flamePath(part,0));
  const numbers=(s:string)=>s.match(/-?\d+(?:\.\d+)?/g)!.map(Number);
  for(let i=0;i<frames.length;i++){
   const current=numbers(frames[i]),next=numbers(frames[(i+1)%frames.length]);
   assert.equal(current.length,next.length);
   // Includes the wraparound: no sudden tip jump, clipping or changing path topology.
   assert.ok(current.every((n,j)=>Math.abs(n-next[j])<.4));
   assert.ok(current.every((n,j)=>n>0&&n<(j%2?36:32)));
   assert.equal(frames[i].replace(/[\d. -]/g,''),frames[0].replace(/[\d. -]/g,''));
  }
 }
});

test('CSS uses discrete vector frames only for burning streaks and supports pause/reduced motion',()=>{
 const css=flameAnimationCSS();
 assert.equal((css.match(/d: path\(/g)||[]).length,98);
 for(const part of ['outer','inner'])assert.ok(css.includes(`.compact:not([data-aura="rest"]) .flame-${part}`));
 assert.ok(css.includes('2s steps(1,end) infinite'));
 assert.ok(css.includes('animation-play-state: paused'));
 assert.ok(css.includes('prefers-reduced-motion: reduce'));
});
