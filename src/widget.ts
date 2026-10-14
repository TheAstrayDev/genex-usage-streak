/** Visual milestones are based on the current streak, never the lifetime record. */
export function streakAura(days: number): string {
 if(!Number.isFinite(days)||days<1)return 'rest';
 if(days>=90)return 'solar';
 if(days>=30)return 'aurora';
 if(days>=14)return 'violet';
 if(days>=7)return 'coral';
 if(days>=3)return 'flame';
 return 'ember';
}
export interface WidgetDay {date:string;tokens:number;projects:number;future?:boolean}
/** A recent Monday-first window; future slots are decorative placeholders, not usage records. */
export function widgetDays(days: WidgetDay[],today:string,weeks:number):WidgetDay[]{
 const count=Math.max(1,Math.min(13,Math.floor(weeks)));
 const current=new Date(today+'T12:00:00Z');
 const first=new Date(current);first.setUTCDate(first.getUTCDate()-(first.getUTCDay()+6)%7-7*(count-1));
 const byDate=new Map(days.map(day=>[day.date,day]));
 return Array.from({length:count*7},(_,i)=>{
  const date=new Date(first);date.setUTCDate(date.getUTCDate()+i);const key=date.toISOString().slice(0,10);
  const future=key>today;const saved=byDate.get(key);
  return {date:key,tokens:future?0:saved?.tokens??0,projects:future?0:saved?.projects??0,future};
 });
}
