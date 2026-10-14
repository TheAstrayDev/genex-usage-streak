import {test} from 'node:test';
import assert from 'node:assert/strict';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile);
test('distributed backend loads and activates in a pure ESM process without a parent require',async()=>{
 const url=new URL('../dist/backend.mjs',import.meta.url).href;
 const {stdout}=await exec(process.execPath,['--input-type=module','-e',`if(typeof require!=='undefined')throw Error('Test must run in pure ESM');const {activate}=await import(${JSON.stringify(url)});const plugin=await activate();if(typeof plugin.action!=='function')throw Error('Plugin did not activate');console.log('activated');`],{windowsHide:true,timeout:10000});
 assert.equal(stdout.trim(),'activated');
});
