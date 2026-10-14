import assert from "node:assert/strict";
import {readFile,readdir} from "node:fs/promises";
import path from "node:path";
const root=path.resolve(import.meta.dirname,"..");
const files=(await readdir(path.join(root,"dist"))).sort();
assert.deepEqual((await readdir(path.join(root,"plugin"))).sort(),files);
for(const file of files)assert.ok((await readFile(path.join(root,"dist",file))).equals(await readFile(path.join(root,"plugin",file))),`Rebuild plugin/${file} before tagging`);
console.log("Prebuilt package matches a clean build");
