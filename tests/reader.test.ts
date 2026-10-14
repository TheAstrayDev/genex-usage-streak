import { test } from "node:test";
import assert from "node:assert/strict";
import {
	mkdtemp,
	mkdir,
	writeFile,
	readFile,
	rm,
	symlink,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { AnalyticsReader, readBounded, profileRoot } from "../src/reader.ts";
import { callsOf, total } from "../src/model.ts";
const id = (n: number) =>
	`01999999-0000-7000-8000-${String(n).padStart(12, "0")}`;
async function fixture(run: (root: string, events: string) => Promise<void>) {
	const root = await mkdtemp(path.join(os.tmpdir(), "genex-streak-test-"));
	try {
		const events = path.join(
			root,
			"exoharness/agents/studio/conversations/thread/events",
		);
		await mkdir(events, { recursive: true });
		await writeFile(
			path.join(root, "projects.json"),
			JSON.stringify({ recents: [{ name: "game" }] }),
		);
		await writeFile(
			path.join(events, "../record.json"),
			JSON.stringify({ latest_event_id: id(2), metadata: { project: "game" } }),
		);
		await run(root, events);
	} finally {
		const resolved = path.resolve(root);
		assert.ok(
			resolved.startsWith(path.resolve(os.tmpdir()) + path.sep) &&
				path.basename(resolved).startsWith("genex-streak-test-"),
		);
		await rm(resolved, { recursive: true, force: true });
	}
}
const ev = (n: number) => ({
	id: id(n),
	thread_id: "thread",
	created_at: "2026-10-14T10:00:00Z",
	data: { type: "messages", usage: { input_tokens: 10, output_tokens: 5 } },
});
test("read only committed events, cache stable heads, leave source unchanged", () =>
	fixture(async (root, folder) => {
		await writeFile(path.join(folder, id(1) + ".json"), JSON.stringify(ev(1)));
		await writeFile(path.join(folder, id(3) + ".json"), JSON.stringify(ev(3)));
		const before = await readFile(path.join(folder, "../record.json"), "utf8");
		const reader = new AnalyticsReader(root),
			a = await reader.snapshot(),
			b = await reader.snapshot();
		assert.equal(a, b);
		assert.equal(a.entries.length, 1);
		assert.equal(total(callsOf(a.entries)[0].counts), 15);
		assert.equal(
			await readFile(path.join(folder, "../record.json"), "utf8"),
			before,
		);
	}));
test("malformed events yield a visible coverage warning", () =>
	fixture(async (root, folder) => {
		await writeFile(path.join(folder, id(1) + ".json"), "{torn");
		const data = await new AnalyticsReader(root).snapshot();
		assert.equal(data.entries.length, 0);
		assert.ok(data.warnings.length);
	}));
test("forked prefixes do not recount inherited spending", () =>
	fixture(async (root, folder) => {
		await writeFile(path.join(folder, id(1) + ".json"), JSON.stringify(ev(1)));
		await writeFile(path.join(folder, id(2) + ".json"), JSON.stringify(ev(2)));
		await writeFile(
			path.join(folder, "../record.json"),
			JSON.stringify({
				latest_event_id: id(2),
				metadata: { project: "game" },
				parent: { thread_id: "original", up_to_inclusive: id(1) },
			}),
		);
		assert.equal(
			(await new AnalyticsReader(root).snapshot()).entries.length,
			1,
		);
	}));
test("bounded reads reject traversal, directories, oversized files and outside junctions", () =>
	fixture(async (root, folder) => {
		await assert.rejects(readBounded(root, "../nope", 1024));
		await assert.rejects(readBounded(root, "exoharness", 1024));
		await writeFile(path.join(root, "large"), "0123456789");
		await assert.rejects(readBounded(root, "large", 4));
		await symlink(
			os.tmpdir(),
			path.join(root, "escape"),
			process.platform === "win32" ? "junction" : "dir",
		);
		await assert.rejects(readBounded(root, "escape/some-file", 1024));
	}));
test("missing Genex profile gives a useful error", () =>
	fixture(async (root) => {
		await assert.rejects(
			new AnalyticsReader(path.join(root, "absent")).snapshot(),
			/projects.json/,
		);
	}));
test("default profile derives from standard storage root and rejects unknown layout", () => {
	const root = path.resolve(os.tmpdir(), "Genex");
	assert.equal(
		profileRoot(
			path.join(root, "engine-homes/plugins/data/usage-streak"),
		),
		root,
	);
	assert.throws(() => profileRoot(root));
});
test("screenshots need a persisted observer reference and a raster signature", () =>
	fixture(async (root, folder) => {
		const image = path.join(root, "runs/run/observers/shot.png");
		await mkdir(path.dirname(image), { recursive: true });
		await writeFile(image, Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
		await writeFile(
			path.join(folder, id(1) + ".json"),
			JSON.stringify({
				...ev(1),
				data: {
					type: "custom",
					event_type: "observer_capture",
					payload: { images: [{ file: image, name: "frame" }] },
				},
			}),
		);
		const reader = new AnalyticsReader(root),
			data = await reader.snapshot();
		assert.ok(data.screenshots.game);
		assert.equal(data.screenshots.game.data, undefined);
		assert.ok(
			(
				await reader.image(path.join(root, "runs"), "run/observers/shot.png")
			)?.startsWith("data:image/png"),
		);
		await writeFile(image, "not a real raster");
		assert.equal(
			await reader.image(path.join(root, "runs"), "run/observers/shot.png"),
			null,
		);
	}));
test("older Studio build screenshots are attributed through the saved run report", () =>
	fixture(async (root) => {
		const run = path.join(root, "runs/run_test/director/judge_1/screenshots");
		await mkdir(run, { recursive: true });
		await writeFile(
			path.join(root, "runs/run_test/report.json"),
			JSON.stringify({ project: "game", goal: "never returned" }),
		);
		await writeFile(
			path.join(run, "default.jpg"),
			Buffer.from([255, 216, 255, 0]),
		);
		const data = await new AnalyticsReader(root).snapshot();
		assert.equal(data.screenshots.game.source, "Studio build capture");
		assert.ok(!JSON.stringify(data).includes("never returned"));
	}));
