/** Read-only projection of Genex's persisted event contract. No prompts or private reasoning. */
export type Obj = Record<string, any>;
export const object = (v: unknown): Obj =>
	v && typeof v === "object" && !Array.isArray(v) ? (v as Obj) : {};
export const words = (v: unknown, max = 180): string =>
	typeof v === "string" ? v.replace(/[\u0000-\u001f]/g, " ").slice(0, max) : "";
export type Counts = {
	input: number;
	output: number;
	read: number;
	write: number;
	reasoning: number;
};
export const zero = (): Counts => ({
	input: 0,
	output: 0,
	read: 0,
	write: 0,
	reasoning: 0,
});
const count = (v: unknown) =>
	typeof v === "number" && Number.isSafeInteger(v) && v >= 0 ? v : 0;
export function normalize(u: Obj, engine: string, modelRow = false): Counts {
	const read = count(u.cache_read_tokens),
		output = count(u.output_tokens);
	return {
		input: Math.max(
			0,
			count(u.input_tokens) - (engine === "codex" && !modelRow ? read : 0),
		),
		output,
		read,
		write: count(u.cache_write_tokens),
		reasoning: Math.min(output, count(u.reasoning_tokens)),
	};
}
export const total = (u: Counts) => u.input + u.output + u.read + u.write;
export function add(a: Counts, b: Counts): Counts {
	return {
		input: a.input + b.input,
		output: a.output + b.output,
		read: a.read + b.read,
		write: a.write + b.write,
		reasoning: a.reasoning + b.reasoning,
	};
}
export type Entry = {
	id: string;
	thread: string;
	turn: string;
	at: string;
	project: string;
	kind: string;
	engine: string;
	model: string;
	usage: Obj | null;
	delegated: boolean;
	run: string;
	worker: string;
	label: string;
	summary: string;
	files: string[];
	status: string;
	snapshot?: { id: string; ref: string };
};
const USAGE_KINDS = new Set([
	"messages",
	"build_observation",
	"completion_call",
]);
function cleanUsage(value: unknown): Obj {
	const raw = object(value),
		out: Obj = {};
	for (const key of [
		"input_tokens",
		"output_tokens",
		"cache_read_tokens",
		"cache_write_tokens",
		"reasoning_tokens",
	])
		if (Object.hasOwn(raw, key))
			out[key] = typeof raw[key] === "number" ? raw[key] : null;
	for (const key of ["model", "engine"])
		if (typeof raw[key] === "string") out[key] = words(raw[key], 100);
	const rows = Object.entries(object(raw.by_model));
	if (rows.length)
		out.by_model = Object.fromEntries(
			rows
				.slice(0, 64)
				.map(([name, row]) => [
					words(name, 100),
					cleanUsage({ ...object(row), by_model: undefined }),
				]),
		);
	return out;
}
/** Retain only fields needed for analytics; drop messages, tool output, images and reasoning. */
export function projectEvent(raw: unknown, project: string): Entry | null {
	const e = object(raw),
		d = object(e.data),
		p = d.type === "custom" ? object(d.payload) : d;
	if (
		typeof e.id !== "string" ||
		typeof e.created_at !== "string" ||
		!Number.isFinite(Date.parse(e.created_at))
	)
		return null;
	const kind = words(d.type === "custom" ? d.event_type : d.type, 80),
		engine = words(p.engine || object(p.usage).engine, 80);
	const request = object(d.request),
		args = object(request.arguments);
	// File paths are evidence of a requested edit, not proof it was applied. Never inspect arbitrary arguments.
	const tool = words(request.name, 100),
		edit = /^(?:write_file|edit_file|apply_patch|Write|Edit)$/.test(tool);
	const files = edit
		? [words(args.path || args.file_path, 240)].filter(Boolean)
		: [];
	const parts = object(p.data).parts;
	if (kind.startsWith("delegated_") && Array.isArray(parts))
		for (const value of parts) {
			const part = object(value),
				input = object(part.input);
			if (
				part.type === "tool_use" &&
				/^(?:write_file|edit_file|Write|Edit)$/.test(part.name)
			)
				files.push(words(input.path || input.file_path, 240));
		}
	const ref = words(object(d.git).game, 64),
		snapshot =
			kind === "snapshot_created" &&
			/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i.test(ref)
				? { id: words(d.snapshot_id, 100), ref }
				: undefined;
	return {
		id: e.id,
		thread: words(e.thread_id || e.conversation_id, 100),
		turn: words(e.turn_id, 100),
		at: e.created_at,
		project,
		kind,
		engine,
		model: words(p.model || object(p.usage).model, 100) || "Unreported model",
		usage:
			USAGE_KINDS.has(kind) && p.usage && typeof p.usage === "object"
				? cleanUsage(p.usage)
				: null,
		delegated: d.usage_source === "delegation",
		run: words(p.runId, 100),
		worker: words(p.workerId, 100),
		label: tool || words(p.title, 100) || kind.replace(/_/g, " "),
		summary: [
			"worker_finished",
			"build_observation",
			"facet_iteration",
		].includes(kind)
			? words(p.summary, 300)
			: "",
		files,
		status:
			typeof p.ok === "boolean"
				? p.ok
					? "ok"
					: "failed"
				: words(p.state || d.status, 40),
		...(snapshot ? { snapshot } : {}),
	};
}
const tokenKeys = [
	"input_tokens",
	"output_tokens",
	"cache_read_tokens",
	"cache_write_tokens",
	"reasoning_tokens",
];
export function repeated(events: Entry[]): Set<string> {
	const turns = new Map<string, Entry[]>();
	for (const e of events)
		if (e.turn && e.kind === "messages" && e.usage) {
			const key = e.thread + "\0" + e.turn;
			turns.set(key, [...(turns.get(key) || []), e]);
		}
	return new Set(
		events
			.filter(
				(e) =>
					e.kind === "build_observation" &&
					e.usage &&
					e.turn &&
					(turns.get(e.thread + "\0" + e.turn) || []).some(
						(m) =>
							m.delegated ||
							tokenKeys.every((k) => m.usage![k] === e.usage![k]),
					),
			)
			.map((e) => e.thread + "\0" + e.id),
	);
}
export type Call = {
	id: string;
	at: string;
	project: string;
	model: string;
	engine: string;
	counts: Counts;
	partial: boolean;
};
export function callsOf(events: Entry[]): Call[] {
	const skip = repeated(events),
		seen = new Set<string>(),
		result: Call[] = [];
	for (const e of events) {
		const key = e.thread + "\0" + e.id;
		if (seen.has(key) || skip.has(key) || !e.usage) continue;
		seen.add(key);
		const u = e.usage,
			rows = Object.entries(object(u.by_model));
		// by_model is the complete per-call partition, not an extra charge on top of the main loop.
		const parts = rows.length
			? rows.map(([model, row]) => ({ model, usage: object(row), row: true }))
			: [{ model: e.model, usage: u, row: false }];
		for (const p of parts)
			result.push({
				id: key + "\0" + p.model,
				at: e.at,
				project: e.project,
				model: p.model,
				engine: e.engine || "Unreported engine",
				counts: normalize(p.usage, e.engine, p.row),
				partial: ![
					"input_tokens",
					"output_tokens",
					"cache_read_tokens",
					"cache_write_tokens",
				].every(
					(k) =>
						typeof p.usage[k] === "number" &&
						Number.isSafeInteger(p.usage[k]) &&
						p.usage[k] >= 0,
				),
			});
	}
	return result;
}
export function dayKey(at: string | Date, zone: string): string {
	const parts = new Intl.DateTimeFormat("en-CA", {
		timeZone: zone,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).formatToParts(new Date(at));
	return ["year", "month", "day"]
		.map((k) => parts.find((p) => p.type === k)!.value)
		.join("-");
}
export function calendar(end: string): string[] {
	const date = new Date(end + "T12:00:00Z"),
		start = new Date(date);
	start.setUTCDate(start.getUTCDate() - 364 - start.getUTCDay());
	const days: string[] = [];
	for (let d = new Date(start); d <= date; d.setUTCDate(d.getUTCDate() + 1))
		days.push(d.toISOString().slice(0, 10));
	return days;
}
export function streaks(
	active: Set<string>,
	today: string,
): { current: number; longest: number } {
	const sorted = [...active].filter((d) => d <= today).sort();
	let longest = 0,
		n = 0,
		previous = 0;
	for (const key of sorted) {
		const at = Date.parse(key + "T12:00:00Z");
		n = at - previous === 86400000 ? n + 1 : 1;
		longest = Math.max(longest, n);
		previous = at;
	}
	const cursor = new Date(today + "T12:00:00Z");
	if (!active.has(today)) cursor.setUTCDate(cursor.getUTCDate() - 1);
	let current = 0;
	while (active.has(cursor.toISOString().slice(0, 10))) {
		current++;
		cursor.setUTCDate(cursor.getUTCDate() - 1);
	}
	return { current, longest };
}
export function analytics(
	entries: Entry[],
	filter: {
		project?: string;
		model?: string;
		day?: string;
		zone: string;
		now?: string;
	},
) {
	const all = callsOf(entries),
		today = dayKey(filter.now || new Date(), filter.zone),
		calls = all.filter(
			(c) =>
				(!filter.project || c.project === filter.project) &&
				(!filter.model || c.model === filter.model),
		);
	const days = new Map<string, { counts: Counts; projects: Set<string> }>();
	for (const c of calls) {
		const key = dayKey(c.at, filter.zone),
			day = days.get(key) || { counts: zero(), projects: new Set<string>() };
		day.counts = add(day.counts, c.counts);
		day.projects.add(c.project);
		days.set(key, day);
	}
	const selected = calls.filter(
			(c) => !filter.day || dayKey(c.at, filter.zone) === filter.day,
		),
		groups = (key: "project" | "model") => {
			const out = new Map<string, Counts>();
			for (const c of selected)
				out.set(c[key], add(out.get(c[key]) || zero(), c.counts));
			return [...out]
				.map(([name, counts]) => ({ name, counts, total: total(counts) }))
				.sort((a, b) => b.total - a.total);
		};
	const recordedDates = selected.map((call) => dayKey(call.at, filter.zone)).sort();
	return {
		today,
		period: { first: recordedDates[0] ?? null, last: recordedDates.at(-1) ?? null },
		zone: filter.zone,
		counts: selected.reduce((s, c) => add(s, c.counts), zero()),
		callCount: new Set(
			selected.map((c) => c.id.split("\0").slice(0, 2).join("\0")),
		).size,
		partial: selected.filter((c) => c.partial).length,
		days: calendar(today).map((date) => ({
			date,
			...(days.has(date)
				? {
						tokens: total(days.get(date)!.counts),
						projects: days.get(date)!.projects.size,
					}
				: { tokens: 0, projects: 0 }),
		})),
		streak: streaks(
			new Set([...days].filter(([, v]) => total(v.counts) > 0).map(([d]) => d)),
			today,
		),
		projects: groups("project"),
		models: groups("model"),
		projectOptions: [...new Set(entries.map((e) => e.project))].sort(),
		modelOptions: [...new Set(all.map((c) => c.model))].sort(),
		activity: entries
			.filter(
				(e) =>
					(!filter.project || e.project === filter.project) &&
					(!filter.day || dayKey(e.at, filter.zone) === filter.day) &&
					(!filter.model || e.model === filter.model) &&
					!!(
						e.usage ||
						e.files.length ||
						e.summary ||
						[
							"worker_started",
							"worker_finished",
							"run_started",
							"run_finished",
							"tool_requested",
							"snapshot_created",
							"turn_started",
							"turn_ended",
							"preview_ready",
							"error",
						].includes(e.kind)
					),
			)
			.sort((a, b) => b.at.localeCompare(a.at))
			.slice(0, 160)
			.map(({ usage, ...e }) => ({
				...e,
				counts: usage ? normalize(usage, e.engine) : null,
			})),
	};
}
