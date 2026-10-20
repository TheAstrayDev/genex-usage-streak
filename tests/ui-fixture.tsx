import { createRoot } from "react-dom/client";
import { useState } from "react";
import { PluginPanelHost } from "@genex-host/src/renderer/panels/PluginPanelHost.tsx";
import { fakeStudioApi } from "@genex-host/tests/helpers/fake-studio-api.ts";
import { PluginSourceKind, PluginHealth, type PluginInfo, type PluginManifest } from "@genex-host/src/shared/plugins.ts";
import { analytics, projectEvent, type Entry } from "../src/model.ts";
import manifest from "../dist/plugin.json";

const events: Entry[] = [];
for (let i = 0; i < 60; i++) {
  const date = new Date("2026-10-20T12:00:00Z");
  date.setUTCDate(date.getUTCDate() - i);
  events.push(projectEvent({ id: "event-" + i, thread_id: "thread-" + i % 2, turn_id: "turn-" + i,
    created_at: date.toISOString(), data: { type: "custom", event_type: "completion_call", payload: {
      model: i % 2 ? "Claude" : "GPT", engine: i % 2 ? "claude-code" : "codex",
      usage: { input_tokens: 12000 + i * 10, output_tokens: 2400, cache_read_tokens: 6000, cache_write_tokens: 0 }
    } } }, i % 2 ? "Racing" : "Adventure")!);
}
let reads = 0, failed = false, empty = false, currentStreak = 30;
const requests: string[] = [];
window.addEventListener("message", event => {
  if (event.data?.type === "studio-plugin-request") requests.push(event.data.method);
});
const plugin: PluginInfo = { manifest: manifest as PluginManifest, source: PluginSourceKind.Local,
  enabled: true, removed: false, state: "enabled", health: PluginHealth.Ready };
const fake = fakeStudioApi({
  pluginAction: async (id, name, args) => {
    if (id !== manifest.id) throw new Error("Wrong plugin identity");
    if (failed) throw new Error("Fixture read failed");
    if (name === "screenshot") return null;
    if (name === "changes") return { available: false, message: "No saved checkpoints in this fixture." };
    if (name !== "analytics") throw new Error("Undeclared action");
    reads++;
    return { ...analytics(empty ? [] : events, { ...args, zone: String(args.zone || "UTC"), now: "2026-10-20T12:30:00Z" }),
      streak: { current: empty ? 0 : currentStreak, longest: empty ? 0 : Math.max(60, currentStreak) }, screenshots: {}, warnings: [],
      eventCount: empty ? 0 : events.length, updatedAt: "2026-10-20T12:30:00Z" };
  },
});
window.studio = fake.api;
let switchPanel = (_panel: string) => {}, enable = (_value: boolean) => {};
function Fixture() {
  const [panel, setPanel] = useState("dashboard"), [enabled, setEnabled] = useState(true);
  switchPanel = setPanel;
  enable = setEnabled;
  return <><nav aria-label="Fixture panel selection"><button onClick={() => setPanel("dashboard")}>Dashboard</button>
    <button onClick={() => setPanel("streak")}>Streak overview</button></nav>
    {enabled ? <PluginPanelHost key={panel} plugin={plugin} document={{ url: `studio-plugin://${manifest.id}/${panel}`, html: "", title: "Usage-Streak" }}
      project={null} className="plugin-frame" /> : <p>Plugin disabled</p>}</>;
}
createRoot(document.querySelector("#root")!).render(<Fixture />);
Object.assign(window, { streakTest: {
  panel: (panel: string) => switchPanel(panel), enable: (value: boolean) => enable(value),
  reads: () => reads, requests: () => requests, error: (value: boolean) => { failed = value; },
  empty: (value: boolean) => { empty = value; }, streak: (value: number) => { currentStreak = value; },
} });
