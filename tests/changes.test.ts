import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { checkpointChanges } from "../src/changes.ts";
import { projectEvent } from "../src/model.ts";
const exec = promisify(execFile);
test("checkpoint comparison returns verified file changes and preserves working files", async () => {
	const root = await mkdtemp(path.join(os.tmpdir(), "genex-streak-git-"));
	try {
		const project = path.join(root, "game");
		await mkdir(project);
		const git = (args: string[]) =>
			exec(
				"git",
				[
					"-C",
					project,
					"-c",
					"core.hooksPath=",
					"-c",
					"user.name=Fixture",
					"-c",
					"user.email=fixture@example.invalid",
					...args,
				],
				{ windowsHide: true },
			);
		await git(["init", "--quiet"]);
		await writeFile(path.join(project, "car.txt"), "one\n");
		await git(["add", "car.txt"]);
		await git(["commit", "--quiet", "-m", "first"]);
		const from = (await git(["rev-parse", "HEAD"])).stdout.trim();
		await writeFile(path.join(project, "car.txt"), "one\ntwo\n");
		await git(["add", "car.txt"]);
		await git(["commit", "--quiet", "-m", "second"]);
		const to = (await git(["rev-parse", "HEAD"])).stdout.trim();
		await writeFile(path.join(project, "car.txt"), "uncommitted, preserve me");
		await writeFile(
			path.join(root, "projects.json"),
			JSON.stringify({ recents: [{ name: "game", dir: project }] }),
		);
		const event = (ref: string, day: string) =>
			projectEvent(
				{
					id: day,
					created_at: day + "T12:00:00Z",
					data: {
						type: "snapshot_created",
						snapshot_id: day,
						git: { game: ref },
					},
				},
				"game",
			)!;
		const result = await checkpointChanges(
			root,
			[event(from, "2026-10-13"), event(to, "2026-10-14")],
			"game",
			"UTC",
		);
		assert.equal(result.available, true);
		assert.deepEqual(result.files, [{ path: "car.txt", status: "modified" }]);
		assert.equal(
			await readFile(path.join(project, "car.txt"), "utf8"),
			"uncommitted, preserve me",
		);
		const earlier = await checkpointChanges(
			root,
			[event(from, "2026-10-13"), event(to, "2026-10-14")],
			"game",
			"UTC",
			"2026-10-13",
		);
		assert.equal(earlier.available, false);
	} finally {
		assert.ok(
			path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep) &&
				path.basename(root).startsWith("genex-streak-git-"),
		);
		await rm(root, { recursive: true, force: true });
	}
});
test("checkpoint parser rejects injected git arguments", () => {
	const event = projectEvent(
		{
			id: "a",
			created_at: "2026-10-14",
			data: { type: "snapshot_created", git: { game: "--output=somewhere" } },
		},
		"game",
	)!;
	assert.equal(event.snapshot, undefined);
});
