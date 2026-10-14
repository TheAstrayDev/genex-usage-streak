import { mkdir, readFile, writeFile, cp, readdir } from "node:fs/promises";
import path from "node:path";
import { flameAnimationCSS } from "./src/flame.ts";
const root = import.meta.dirname,
	out = path.join(root, "dist");
const { build } = await import("esbuild");
await mkdir(out, { recursive: true });
const sdk = await readFile(path.join(root, "vendor/panel.js"), "utf8"),
	css = await readFile(path.join(root, "src/style.css"), "utf8");
for (const panel of ["streak", "dashboard"]) {
	const result = await build({
		entryPoints: [path.join(root, "src/panel.ts")],
		bundle: true,
		platform: "browser",
		format: "iife",
		write: false,
		charset: "utf8",
		define: { __EMBEDDED__: String(panel === "streak") },
	});
	await writeFile(
		path.join(out, panel + ".html"),
		`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Usage-Streak</title><style>${css}${panel === "streak" ? flameAnimationCSS() : ""}</style></head><body><main id="root"></main><script>${sdk}</script><script>${result.outputFiles[0].text.replace(/<\/script/gi, "<\\/script")}</script></body></html>`,
	);
}
const backendBuild = await build({
	entryPoints: [path.join(root, "src/backend.ts")],
	bundle: true,
	platform: "node",
	format: "esm",
	outfile: path.join(out, "backend.mjs"),
	target: "node22",
	charset: "utf8",
	// Bundled CommonJS dependencies still require Node built-ins inside this ESM entry.
	banner: { js: 'import { createRequire as nodeCreateRequire } from "node:module"; const require = nodeCreateRequire(import.meta.url);' },
	alias: {
		"isomorphic-git": path.join(root, "node_modules/isomorphic-git/index.js"),
	},
	metafile: true,
});
const packages = new Set();
for (const output of Object.values(backendBuild.metafile.outputs))
	for (const [file, info] of Object.entries(output.inputs))
		if (info.bytesInOutput && file.includes("node_modules/")) {
			const start = file.lastIndexOf("node_modules/") + 13,
				parts = file.slice(start).split("/");
			packages.add(
				parts[0].startsWith("@") ? parts.slice(0, 2).join("/") : parts[0],
			);
		}
let notices = "Bundled third-party code\n\n";
for (const name of [...packages].sort()) {
	const dir = path.join(root, "node_modules", name),
		pkg = JSON.parse(await readFile(path.join(dir, "package.json"), "utf8"));
	notices += `${name} ${pkg.version} (${pkg.license || "see license"})\n`;
	const licenseFiles = await readdir(dir);
	for (const candidate of [
		"LICENSE",
		"LICENSE.md",
		"LICENSE.txt",
		"LICENSE-MIT",
		"LICENSE-MIT.txt",
	])
		try {
			const file = licenseFiles.find((name) => name.toLowerCase() === candidate.toLowerCase());
			if (!file) continue;
			notices += await readFile(path.join(dir, file), "utf8");
			break;
		} catch {}
	notices += "\n\n";
}
await writeFile(path.join(out, "THIRD_PARTY_NOTICES.txt"), notices.replace(/\r\n/g, "\n").trimEnd() + "\n");
const version = JSON.parse(await readFile(path.join(root, "package.json"), "utf8")).version;
const manifest = {
	apiVersion: 3,
	id: "usage-streak",
	version,
	publisher: "TheAstrayDev",
	name: "Usage-Streak",
	description:
		"Local token activity by day, game and model, with saved Studio captures and a recorded activity tree. Requires unmerged customization API #112 plus footer/navigation hooks; incompatible with stock Genex.",
	backend: "backend.mjs",
	icon: "icon.svg",
	capabilities: ["ui.customization"],
	tools: [],
	skills: [],
	settings: [
		{
			key: "profile",
			label: "Genex profile directory (optional)",
			type: "string",
			default: "",
		},
	],
	panels: [
		{
			id: "dashboard",
			title: "Usage-Streak",
			placement: "settings",
			file: "dashboard.html",
		},
		{
			id: "streak",
			title: "New Chat widget",
			placement: "settings",
			file: "streak.html",
		},
	],
	actions: [
		{ name: "analytics", label: "Read local token activity" },
		{ name: "screenshot", label: "Read saved Studio screenshot" },
		{ name: "changes", label: "Compare saved game checkpoints" },
	],
};
await writeFile(
	path.join(out, "plugin.json"),
	JSON.stringify(manifest, null, 2),
);
await writeFile(
	path.join(out, "icon.svg"),
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#151516"/><g fill="#4759c2"><rect x="12" y="34" width="10" height="18" rx="2"/><rect x="27" y="23" width="10" height="29" rx="2"/><rect x="42" y="12" width="10" height="40" rx="2"/></g></svg>',
);
for (const file of ["README.md", "LICENSE"])
	await cp(path.join(root, file), path.join(out, file));
console.log("Prebuilt plugin: " + out);
