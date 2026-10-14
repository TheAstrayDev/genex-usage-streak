import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,cp,rm} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const source=path.resolve(import.meta.dirname,'../dist');
const host=path.resolve(process.env.GENEX_HOST_DIR || path.resolve(import.meta.dirname,'../../genex-plugin-host-local'));
const {PluginRegistry}=await import(pathToFileURL(path.join(host,'src/substrate/plugins/registry.ts')).href);
const root=await mkdtemp(path.join(os.tmpdir(),'usage-streak-release-'));
const profile=path.join(root,'Genex'),plugins=path.join(profile,'engine-homes/plugins'),seeds=path.join(root,'seeds');
await mkdir(path.join(profile,'exoharness/agents/studio/conversations'),{recursive:true});await mkdir(seeds,{recursive:true});
await writeFile(path.join(profile,'projects.json'),JSON.stringify({recents:[]}));
const registry=new PluginRegistry(plugins,seeds,path.join(host,'src/plugin-sdk/backend.mjs'),async(id,method)=>{
 assert.equal(id,'usage-streak');assert.equal(method,'storage.root');return path.join(plugins,'data',id);
});
const checks=[];
try {
 await registry.init();const manifest=JSON.parse(await readFile(path.join(source,'plugin.json'),'utf8'));
 await registry.installLocal(source,'local',manifest.capabilities,source);assert.equal(registry.list().find(p=>p.manifest.id===manifest.id).enabled,false);checks.push('fresh local install stays disabled');
 await registry.setEnabled(manifest.id,true);await registry.setSetting(manifest.id,'profile',profile);
 const answer=await registry.action(manifest.id,'analytics',{zone:'UTC'});assert.equal(answer.callCount,0);assert.deepEqual(answer.projects,[]);checks.push('harmless real backend analytics action succeeds immediately after enable');
 const update=path.join(root,'update');await cp(source,update,{recursive:true});manifest.version='1.0.5';await writeFile(path.join(update,'plugin.json'),JSON.stringify(manifest,null,2));
 await registry.installLocal(update,'local',manifest.capabilities,source);assert.equal((await registry.settings(manifest.id)).profile,profile);checks.push('settings survive same-identity update');
 await registry.setEnabled(manifest.id,false);await assert.rejects(registry.action(manifest.id,'analytics',{zone:'UTC'}));checks.push('disabled plugin cannot run actions');
 await registry.setEnabled(manifest.id,true);await registry.remove(manifest.id);assert.equal(registry.list().find(p=>p.manifest.id===manifest.id).removed,true);await assert.rejects(registry.action(manifest.id,'analytics',{zone:'UTC'}));checks.push('removed plugin cannot run actions');
 console.log(JSON.stringify({checks,provider:'disposable synthetic profile, no account, no chat tools declared'},null,2));
} finally {
 registry.cancel();assert.ok(path.resolve(root).startsWith(path.resolve(os.tmpdir())+path.sep)&&path.basename(root).startsWith('usage-streak-release-'));await rm(root,{recursive:true,force:true,maxRetries:8,retryDelay:100});
}
