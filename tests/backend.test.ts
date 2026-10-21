import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { activate } from "../src/backend.ts";
import { profileRoot } from "../src/reader.ts";

test("the publisher-owned id finds its Genex profile without a manual setting", () => {
  const root = path.resolve(os.tmpdir(), "streak-profile-fixture");
  assert.equal(profileRoot(path.join(root, "engine-homes/plugins/data/theastraydev-usage-streak")), root);
  assert.throws(() => profileRoot(path.join(root, "another-plugin")));
});

test("the read-only chat tool reports aggregate usage through the same backend as the panel", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "usage-streak-backend-"));
  try {
    await mkdir(path.join(root, "exoharness/agents/studio/conversations"), { recursive: true });
    await writeFile(path.join(root, "projects.json"), JSON.stringify({ recents: [] }));
    const calls: string[] = [];
    const host = async (method: string) => {
      calls.push(method);
      if (method === "settings.read") return {};
      if (method === "storage.root") return path.join(root, "engine-homes/plugins/data/theastraydev-usage-streak");
      throw new Error("Unexpected authority");
    };
    const plugin = await activate();
    assert.deepEqual(calls, [], "activation reads nothing");
    const reply = await (plugin as any).tool("usage-summary", { zone: "UTC" }, { host });
    const data = JSON.parse(reply.text);
    assert.equal(data.reportedTokens, 0);
    assert.equal(data.currentStreak, 0);
    assert.equal(data.scope, "Local reported usage; not billing");
    assert.ok(!("activity" in data), "the chat summary omits conversation activity");
    assert.deepEqual(calls, ["settings.read", "storage.root"]);
    await assert.rejects((plugin as any).tool("unknown", {}, { host }), /Unknown tool/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
