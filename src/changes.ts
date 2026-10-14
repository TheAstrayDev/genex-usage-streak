import fs from "node:fs";
import { readTree } from "isomorphic-git";
import path from "node:path";
import { readBounded } from "./reader.ts";
import { object, words, dayKey, type Entry } from "./model.ts";
const HASH = /^[a-f0-9]{40}$/i;
/** Compare only two commit ids actually recorded by Studio, in a project already in its index. */
export async function checkpointChanges(
	root: string,
	entries: Entry[],
	project: string,
	zone: string,
	day?: string,
) {
	const snapshots = entries
		.filter(
			(e) =>
				e.project === project &&
				e.snapshot &&
				(!day || dayKey(e.at, zone) <= day),
		)
		.sort((a, b) => b.at.localeCompare(a.at) || b.id.localeCompare(a.id));
	const seen = new Set<string>(),
		unique = snapshots.filter((e) => {
			if (seen.has(e.snapshot!.ref)) return false;
			seen.add(e.snapshot!.ref);
			return true;
		});
	if (unique.length < 2)
		return {
			available: false,
			message: "Two saved game checkpoints are needed to compare changes.",
		};
	const [to, from] = unique;
	if (!HASH.test(to.snapshot!.ref) || !HASH.test(from.snapshot!.ref))
		throw new Error("Unsupported checkpoint ref");
	const index = object(
		JSON.parse(
			(await readBounded(root, "projects.json", 2 * 1024 * 1024)).toString(
				"utf8",
			),
		),
	);
	const recent = (Array.isArray(index.recents) ? index.recents : [])
		.map(object)
		.find((row) => row.name === project);
	if (!recent || typeof recent.dir !== "string" || !path.isAbsolute(recent.dir))
		return {
			available: false,
			message: "This game is no longer in the local project index.",
		};
	try {
		// Read Git objects in JavaScript. No executable, shell, hooks, text conversion or network.
		const gitdir = await fs.promises.realpath(path.join(recent.dir, ".git"));
		if (!(await fs.promises.stat(gitdir)).isDirectory())
			throw Error("Unsupported Git directory");
		const guard = async (file: string) => {
			const absolute = path.resolve(file),
				rel = path.relative(gitdir, absolute);
			if (
				rel === ".." ||
				rel.startsWith(".." + path.sep) ||
				path.isAbsolute(rel)
			)
				throw Error("Git read outside object database");
			const canonical = await fs.promises.realpath(absolute),
				realRel = path.relative(gitdir, canonical);
			if (
				realRel === ".." ||
				realRel.startsWith(".." + path.sep) ||
				path.isAbsolute(realRel)
			)
				throw Error("Linked Git path outside object database");
			return canonical;
		};
		const deny = async () => {
			throw Error("Checkpoint analysis cannot write files");
		};
		const readOnlyFs = {
			promises: {
				writeFile: deny,
				mkdir: deny,
				rmdir: deny,
				unlink: deny,
				symlink: deny,
				rm: deny,
				cp: deny,
				readFile: async (file: string, options?: any) => {
					const safe = await guard(file);
					if ((await fs.promises.stat(safe)).size > 128 * 1024 * 1024)
						throw Error("Git object pack is too large");
					return fs.promises.readFile(safe, options);
				},
				stat: async (file: string) => fs.promises.stat(await guard(file)),
				lstat: async (file: string) => fs.promises.lstat(await guard(file)),
				readdir: async (file: string) => fs.promises.readdir(await guard(file)),
				readlink: async (file: string) =>
					fs.promises.readlink(await guard(file)),
			},
		};
		const options = {
			fs: readOnlyFs as any,
			dir: recent.dir,
			gitdir,
			cache: {},
		};
		let visited = 0;
		const until = Date.now() + 8000;
		const flatten = async (
			oid: string,
			prefix = "",
			depth = 0,
		): Promise<Map<string, string>> => {
			if (depth > 40 || visited++ > 20000 || Date.now() > until)
				throw Error("Checkpoint tree limit reached");
			const { tree } = await readTree({ ...options, oid }),
				result = new Map<string, string>();
			for (const item of tree) {
				if (
					!item.path ||
					item.path === ".." ||
					item.path === "." ||
					/[\\/]/.test(item.path)
				)
					throw Error("Unsupported tree path");
				const name = prefix + item.path;
				if (item.type === "tree") {
					for (const [file, value] of await flatten(
						item.oid,
						name + "/",
						depth + 1,
					))
						result.set(file, value);
				} else result.set(name, item.oid + " " + item.mode);
				if (result.size > 20000) throw Error("Checkpoint file limit reached");
			}
			return result;
		};
		const old = await flatten(from.snapshot!.ref),
			next = await flatten(to.snapshot!.ref),
			all = [...new Set([...old.keys(), ...next.keys()])].sort();
		const changed = all.filter((file) => old.get(file) !== next.get(file)),
			files = changed
				.slice(0, 200)
				.map((file) => ({
					path: words(file, 400),
					status: !old.has(file)
						? "added"
						: !next.has(file)
							? "deleted"
							: "modified",
				}));
		return {
			available: true,
			from: { id: from.snapshot!.id, ref: from.snapshot!.ref, at: from.at },
			to: { id: to.snapshot!.id, ref: to.snapshot!.ref, at: to.at },
			files,
			truncated: changed.length > 200,
		};
	} catch {
		return {
			available: false,
			message:
				"These saved Git checkpoints could not be read within the supported limits. The game files were left unchanged.",
		};
	}
}
