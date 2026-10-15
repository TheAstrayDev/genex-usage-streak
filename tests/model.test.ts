import { test } from "node:test";
import assert from "node:assert/strict";
import {
	analytics,
	projectEvent,
	callsOf,
	normalize,
	total,
	calendar,
	streaks,
	profile,
	type Entry,
} from "../src/model.ts";
const usage = {
	input_tokens: 100,
	output_tokens: 20,
	cache_read_tokens: 40,
	cache_write_tokens: 0,
	reasoning_tokens: 10,
};
function entry(
	id: string,
	kind = "messages",
	u: any = usage,
	extra: any = {},
): Entry {
	return {
		...projectEvent(
			{
				id,
				thread_id: "thread",
				turn_id: "turn",
				created_at: "2026-10-14T12:00:00Z",
				data:
					kind === "messages"
						? { type: kind, usage: { engine: "codex", model: "GPT", ...u } }
						: {
								type: "custom",
								event_type: kind,
								payload: { usage: u, engine: "codex", model: "GPT" },
							},
			},
			"race",
		)!,
		...extra,
	};
}
test("Codex cache is included in input; reasoning is included in output", () => {
	assert.deepEqual(normalize(usage, "codex"), {
		input: 60,
		output: 20,
		read: 40,
		write: 0,
		reasoning: 10,
	});
	assert.equal(total(normalize(usage, "codex")), 120);
	assert.equal(total(normalize(usage, "claude-code")), 160);
});
test("invalid numbers cannot poison totals", () => {
	assert.equal(
		total(
			normalize(
				{
					input_tokens: -2,
					output_tokens: Infinity,
					cache_read_tokens: NaN,
					cache_write_tokens: 2.2,
				},
				"codex",
			),
		),
		0,
	);
});
test("repeated build usage counted once, scoped to thread and turn", () => {
	const a = entry("a"),
		b = entry("b", "build_observation"),
		c = entry("c", "build_observation", usage, { thread: "other" });
	assert.equal(callsOf([a, b, c, a]).length, 2);
});
test("marked delegated reply suppresses all same-turn build copies", () => {
	assert.equal(
		callsOf([
			entry("a", "messages", usage, { delegated: true }),
			entry("b", "build_observation", { output_tokens: 23 }),
		]).length,
		1,
	);
});
test("different usage and missing turn are not accidentally deduplicated", () => {
	assert.equal(
		callsOf([
			entry("a"),
			entry("b", "build_observation", { input_tokens: 5 }),
			entry("c", "build_observation", usage, { turn: "" }),
		]).length,
		3,
	);
});
test("per-model totals replace main loop, rows use Anthropic cache semantics", () => {
	const calls = callsOf([
		entry("a", "messages", {
			...usage,
			by_model: {
				opus: usage,
				haiku: {
					input_tokens: 5,
					output_tokens: 3,
					cache_read_tokens: 1,
					cache_write_tokens: 0,
				},
			},
		}),
	]);
	assert.equal(calls.length, 2);
	assert.equal(
		calls.reduce((n, c) => n + total(c.counts), 0),
		169,
	);
});
test("local-day grouping crosses UTC midnight correctly", () => {
	const out = analytics(
		[entry("a", "messages", usage, { at: "2026-10-13T19:00:00Z" })],
		{ zone: "Asia/Krasnoyarsk", now: "2026-10-14T02:00:00Z" },
	);
	assert.equal(out.days.at(-1)!.tokens, 120);
	assert.equal(out.streak.current, 1);
});
test("day/model/project filters affect totals without destroying calendar context", () => {
	const events = [
		entry("a"),
		entry("b", "messages", usage, { project: "other", model: "Claude" }),
	];
	const out = analytics(events, {
		zone: "UTC",
		project: "race",
		model: "GPT",
		day: "2026-10-13",
		now: "2026-10-14T00:00:00Z",
	});
	assert.equal(total(out.counts), 0);
	assert.equal(out.days.at(-1)!.tokens, 120);
	assert.equal(out.modelOptions.length, 2);
});
test("calendar is Sunday-first and includes leap day without DST drift", () => {
	const days = calendar("2024-03-12");
	assert.equal(new Date(days[0] + "T12:00Z").getUTCDay(), 0);
	assert.ok(days.includes("2024-02-29"));
	assert.ok(days.length >= 365 && days.length <= 371);
	assert.equal(new Set(days).size, days.length);
});
test("yesterday sustains a streak, future days do not increase it", () => {
	assert.deepEqual(
		streaks(
			new Set(["2026-10-11", "2026-10-12", "2026-10-13", "2026-10-15"]),
			"2026-10-14",
		),
		{ current: 3, longest: 3 },
	);
});
test("empty history is an honest zero with no fabricated games", () => {
	const out = analytics([], { zone: "UTC", now: "2026-10-14" });
	assert.equal(out.projects.length, 0);
	assert.equal(out.streak.current, 0);
	assert.equal(total(out.counts), 0);
});
test("private reasoning, prompts, tool output and unknown usage data never reach activity", () => {
	const raw = {
		id: "x",
		created_at: "2026-10-14",
		data: {
			type: "messages",
			messages: [
				{
					role: "assistant",
					content: "SECRET PROMPT",
					reasoning: "PRIVATE REASONING",
				},
			],
			usage: { ...usage, unknown: "PRIVATE FIELD" },
		},
	};
	const out = analytics([projectEvent(raw, "game")!], { zone: "UTC" });
	const wire = JSON.stringify(out);
	assert.ok(!wire.includes("SECRET"));
	assert.ok(!wire.includes("PRIVATE"));
});
test("file activity describes only structured edit paths", () => {
	const a = projectEvent(
		{
			id: "x",
			created_at: "2026-10-14",
			data: {
				type: "tool_requested",
				request: {
					name: "write_file",
					arguments: { path: "src/car.ts", content: "do not expose" },
				},
			},
		},
		"race",
	)!;
	assert.deepEqual(a.files, ["src/car.ts"]);
	assert.ok(!JSON.stringify(a).includes("do not expose"));
});
test("widget composition has no appearance overrides", () => {
	assert.deepEqual(Object.keys(profile()), ["version", "widgets"]);
	assert.equal(profile().widgets[0].target, "newChatFooter");
	assert.equal(profile().widgets[0].row, 1);
	assert.equal(profile().widgets[0].rowSpan, 18);
	assert.equal(profile().widgets[0].column, 1);
	assert.equal(profile().widgets[0].columnSpan, 8);
});

test('recorded range explains the dates covered by token totals',()=>{
 const data=analytics([entry('first'),entry('second','messages',usage,{at:'2025-03-02T10:00:00Z'})],{zone:'UTC',now:'2026-10-15T12:00:00Z'});
 assert.deepEqual(data.period,{first:'2025-03-02',last:'2026-10-14'});
 assert.deepEqual(analytics([],{zone:'UTC',now:'2026-10-15T12:00:00Z'}).period,{first:null,last:null});
});
