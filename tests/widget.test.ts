import {test} from 'node:test';
import assert from 'node:assert/strict';
import {streakAura,widgetDays} from '../src/widget.ts';
test('auras follow current streak milestones and invalid counts stay dormant',()=>{
 for(const [days,name] of [[0,'rest'],[1,'ember'],[2,'ember'],[3,'flame'],[6,'flame'],[7,'coral'],[13,'coral'],[14,'violet'],[29,'violet'],[30,'aurora'],[89,'aurora'],[90,'solar'],[365,'solar']] as const)assert.equal(streakAura(days),name);
 for(const days of [-1,NaN,Infinity])assert.equal(streakAura(days),'rest');
});
test('widget starts on Monday, ends on Sunday and marks future cells without inventing usage',()=>{
 const cells=widgetDays([{date:'2026-10-12',tokens:42,projects:1}], '2026-10-14',13);
 assert.equal(cells.length,91);assert.equal(cells[0].date,'2026-07-20');assert.equal(cells.at(-1)!.date,'2026-10-18');
 assert.equal(cells.filter(d=>d.future).length,4);assert.equal(cells.find(d=>d.date==='2026-10-12')!.tokens,42);
 assert.ok(cells.filter(d=>d.future).every(d=>d.tokens===0&&d.projects===0));
});
test('compact weeks cross year and leap-day boundaries without modifying source records',()=>{
 const source=[{date:'2024-02-29',tokens:8,projects:1}];const copy=JSON.stringify(source);
 const cells=widgetDays(source,'2024-03-01',5);assert.equal(cells.length,35);assert.equal(cells[0].date,'2024-01-29');assert.equal(cells.at(-1)!.date,'2024-03-03');assert.equal(JSON.stringify(source),copy);
});
