import { createRoot } from "react-dom/client";
import {useEffect,useState} from "react";
import {PluginsPanel} from "@genex-host/src/renderer/panels/PluginsPanel.tsx";
import {OPEN_PLUGINS_EVENT} from "@genex-host/src/renderer/ui/ComposerAddMenu.tsx";
import { PluginCustomizationHost } from "@genex-host/src/renderer/appearance/PluginCustomizationHost.tsx";
import { PluginPanelHost } from "@genex-host/src/renderer/panels/PluginPanelHost.tsx";
import { initializeAppearance } from "@genex-host/src/renderer/appearance/store.ts";
import { studio } from "@genex-host/src/renderer/state/studio.ts";
import { fakeStudioApi } from "@genex-host/tests/helpers/fake-studio-api.ts";
import {
	PluginSourceKind,
	PluginHealth,
	type PluginInfo,
	type PluginManifest,
} from "@genex-host/src/shared/plugins.ts";
import {
	parsePluginCustomization,
	type PluginCustomization,
} from "@genex-host/src/shared/plugin-customization.ts";
import { analytics, projectEvent, type Entry } from "../src/model.ts";
import manifest from "../dist/plugin.json";
let profile: PluginCustomization | null = null,
	enabled = true,
	fail = false,
	empty = false,
	reads = 0;
const events: Entry[] = [];
for (let i = 0; i < 120; i++) {
	const date = new Date("2026-10-14T12:00:00Z");
	date.setUTCDate(date.getUTCDate() - Math.floor(i / 2));
	events.push(
		projectEvent(
			{
				id: "e" + i,
				thread_id: "thread-" + (i % 2),
				turn_id: "turn-" + Math.floor(i / 8),
				created_at: date.toISOString(),
				data: {
					type: "custom",
					event_type: "completion_call",
					payload: {
						model: i % 2 ? "Claude Opus" : "GPT 6.1",
						engine: i % 2 ? "claude-code" : "codex",
						usage: {
							input_tokens: ((i % 7) + 1) * 12000,
							output_tokens: 2400,
							cache_read_tokens: 6000,
							cache_write_tokens: 0,
						},
					},
				},
			},
			i % 2 ? "car-evolve" : "roguelike",
		)!,
	);
}
events.push(
	projectEvent(
		{
			id: "edit",
			thread_id: "thread-0",
			turn_id: "turn-0",
			created_at: "2026-10-14T12:05:00Z",
			data: {
				type: "tool_requested",
				request: { name: "edit_file", arguments: { path: "src/car.ts" } },
			},
		},
		"car-evolve",
	)!,
);
events.push(
	projectEvent(
		{
			id: "summary",
			thread_id: "thread-0",
			turn_id: "turn-0",
			created_at: "2026-10-14T12:07:00Z",
			data: {
				type: "custom",
				event_type: "worker_finished",
				payload: {
					title: "Improve vehicle handling",
					summary: "Adjusted steering and verified the checkpoint.",
					workerId: "handling",
					state: "done",
				},
			},
		},
		"car-evolve",
	)!,
);
const plugin = (): PluginInfo => ({
	manifest: manifest as PluginManifest,
	source: PluginSourceKind.Local,
	enabled,
	removed: false,
	state: "enabled",
	health: PluginHealth.Ready,
	...(profile ? { customization: profile } : {}),
});
const fake = fakeStudioApi({
	pluginsList: async () => [plugin()],
	pluginPanel: async (id, panel) => ({
		url: `studio-plugin://${id}/${panel}`,
		html: "",
		title: panel,
	}),
	pluginCustomization: async () => profile,
	pluginSetCustomization: async (id, value) => {
		if (id !== "usage-streak" || !enabled) throw new Error("disabled");
		profile = value === null ? null : parsePluginCustomization(value);
		await studio().plugins.refresh();
	},
	pluginAction: async (id, name, args) => {
		reads++;
		if (fail) throw new Error("Fixture read failed");
		if (name === "screenshot") return null;
		const a = args as any;
		return {
			...analytics(empty ? [] : events, { ...a, now: "2026-10-14T12:30:00Z" }),
			screenshots: {},
			warnings: [],
			eventCount: empty ? 0 : events.length,
			updatedAt: "2026-10-14T12:30:00Z",
		};
	},
});
window.studio = fake.api;
initializeAppearance();
await studio().plugins.refresh();
let goHome=()=>{};
function Fixture(){const [setup,setSetup]=useState<string|null>(null);goHome=()=>setSetup(null);useEffect(()=>{const open=(event:Event)=>setSetup((event as CustomEvent).detail.plugin);window.addEventListener(OPEN_PLUGINS_EVENT,open);return()=>window.removeEventListener(OPEN_PLUGINS_EVENT,open);},[]);return <>
	{setup ? <PluginsPanel setupPlugin={setup} plugins={[plugin()]} index={null} updating={false} onPluginsRefresh={()=>{void studio().plugins.refresh();}} onIndexRefresh={()=>{}} onBack={()=>setSetup(null)} sidebarHidden={false} onToggleSidebar={()=>{}}/> : <>
		<section
			data-customization-slot="newChat"
			style={{ position: "relative", height: 900 }}
		>
			<div className="mock-composer">
				Everything you need to ship a game<div className="mock-prompt composer-panel">What do you want to make?</div>
				<div className="mock-compose-row">AI Games <span>Suggest prompt</span></div>
				<div data-customization-slot="newChatFooter" style={{display:"contents"}} />
			</div>
		</section>
		<PluginPanelHost
			plugin={plugin()}
			document={{
				url: "studio-plugin://usage-streak/dashboard",
				html: "",
				title: "Usage-Streak",
			}}
			project={null}
			className="dashboard-frame"
		/>
	</>}
		<PluginCustomizationHost />
	</>;}
createRoot(document.querySelector("#root")!).render(<Fixture/>);
Object.assign(window, {
	streakTest: {
		home:()=>goHome(),
		profile: () => profile,
		reads: () => reads,
		error: (v: boolean) => {
			fail = v;
		},
		empty: (v: boolean) => {
			empty = v;
		},
		enable: async (v: boolean) => {
			enabled = v;
			await studio().plugins.refresh();
		},
	},
});
