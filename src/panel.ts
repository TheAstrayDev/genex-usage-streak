import { profile, total, object, type Counts } from "./model.ts";
declare const __EMBEDDED__: boolean;
declare global {
	interface Window {
		studioPlugin: {
			call: (
				method: string,
				name?: string,
				args?: any,
				options?: any,
			) => Promise<any>;
			onContextChanged: (fn: () => void) => () => void;
		};
	}
}
const api = window.studioPlugin,
	root = document.querySelector<HTMLElement>("#root")!,
	embedded = __EMBEDDED__;
const expanded = !embedded;
let data: any = null,
	error = "",
	busy = false,
	queued = false,
	timer: ReturnType<typeof setTimeout> | undefined,
	lastSignature = "",
	request = 0;
let selectedProject = "",
	selectedModel = "",
	selectedDay = "",
	tab = "activity",
	live = true;
let changes: any = null,
	changesKey = "",
	changesBusy = false;
const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const thumbs = new Map<string, string>(),
	loaded = new Map<string, string>();
let imageBusy = false;
const e = (value: unknown) =>
	String(value ?? "").replace(
		/[&<>"']/g,
		(c) =>
			({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
				c
			]!,
	);
const number = (n: number) =>
	new Intl.NumberFormat("en-US", {
		notation: n >= 1000000 ? "compact" : "standard",
		maximumFractionDigits: 1,
	}).format(n);
const exact = (n: number) => new Intl.NumberFormat("en-US").format(n);
const countLine = (c: Counts) =>
	`${exact(c.input)} input · ${exact(c.output)} output · ${exact(c.read + c.write)} cache`;
const button = (id: string, label: string, cls = "") =>
	`<button type="button" data-action="${id}" class="${cls}">${label}</button>`;
function calendarHTML(compact = false) {
	const weeks = compact ? Math.max(4, Math.min(26, Math.floor((innerWidth - 24) / 10))) : 53;
	const start = compact ? Math.max(0, Math.ceil(data.days.length / 7) - weeks) * 7 : 0;
	const days = data.days.slice(start),
		max = Math.max(1, ...days.map((d: any) => d.tokens));
	if (compact) root.style.setProperty("--weeks", String(weeks));
	let months = "",
		last = "";
	for (let i = 0; i < days.length; i += 7) {
		const date = new Date(days[i].date + "T12:00:00Z"),
			month = date.toLocaleDateString("en-US", {
				month: "short",
				timeZone: "UTC",
			});
		if (month !== last) {
			months += `<span style="grid-column:${Math.floor(i / 7) + 1}/span ${Math.min(3, weeks - Math.floor(i / 7))}">${e(month)}</span>`;
			last = month;
		}
	}
	return `<div class="calendar-scroll"><div class="calendar"><div class="month-row">${months}</div><div class="weekdays" aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div><div class="heatmap" role="group" aria-label="Daily token usage">${days
		.map((d: any, i: number) => {
			const level = d.tokens
				? Math.min(4, Math.max(1, Math.ceil((d.tokens / max) * 4)))
				: 0;
			return `<button class="day l${level}" type="button" data-date="${d.date}" data-index="${i}" tabindex="${selectedDay === d.date || (!selectedDay && i === days.length - 1) ? 0 : -1}" aria-pressed="${selectedDay === d.date}" aria-label="${d.date}: ${exact(d.tokens)} reported tokens, ${d.projects} games" title="${d.date} · ${exact(d.tokens)} tokens · ${d.projects} games"></button>`;
		})
		.join(
			"",
		)}</div></div></div><div class="calendar-foot"><span><span id="day-info">${selectedDay ? e(selectedDay) : e(data.zone)}</span>${selectedDay ? " " + button("clear-day", "Clear day") : ""}</span><span class="legend">Less ${[0, 1, 2, 3, 4].map((n) => `<i class="l${n}"></i>`).join("")} More</span></div>`;
}
function projectHTML(limit = 12) {
	return data.projects
		.slice(0, limit)
		.map((p: any) => {
			const shot = thumbs.get(p.name),
				meta = data.screenshots[p.name];
			return `<button type="button" class="game" data-project="${e(p.name)}"><div class="shot">${shot ? `<img src="${e(shot)}" alt="Studio screenshot of ${e(p.name)}">` : `<span>${meta ? "Loading capture…" : "No saved capture"}</span>`}</div><div class="game-copy"><strong>${e(p.name.replace(/-/g, " "))}</strong><small>${meta ? e(meta.source) : "A screenshot will appear after Studio saves one"}</small></div><span class="game-tokens" title="${e(countLine(p.counts))}">${number(p.total)}<small>tokens</small></span></button>`;
		})
		.join("");
}
function graphHTML() {
	const days = data.days.slice(-60),
		max = Math.max(1, ...days.map((d: any) => d.tokens));
	return `<section class="trend"><div class="section-head"><h2>Tokens over time</h2><span>Last 60 days</span></div><div class="bars" role="group" aria-label="Daily tokens over the last 60 days">${days.map((d: any) => `<button type="button" data-date="${d.date}" style="--height:${d.tokens ? Math.max(2, (d.tokens / max) * 100) : 0}%" aria-label="${d.date}, ${exact(d.tokens)} tokens" title="${d.date} · ${exact(d.tokens)} tokens"><i></i></button>`).join("")}</div><div class="axis"><span>${days[0].date}</span><span>${data.today}</span></div></section>`;
}
function treeHTML() {
	const groups = new Map<string, any[]>();
	for (const entry of data.activity) {
		const key = entry.thread + "|" + (entry.run || entry.turn || "session");
		groups.set(key, [...(groups.get(key) || []), entry]);
	}
	return `<div class="event-tree">${
		[...groups]
			.slice(0, 30)
			.map(
				([key, events]) =>
					`<details ${groups.size <= 3 ? "open" : ""}><summary><span class="node"></span><strong>${e(events[0].project.replace(/-/g, " "))}</strong><span>${e(events[0].run ? "Run " + events[0].run.slice(-10) : events[0].turn ? "Turn " + events[0].turn.slice(-8) : "Session")}</span><small>${events.length} events</small></summary><ol>${events.map((a: any) => `<li><time datetime="${e(a.at)}">${new Date(a.at).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</time><div><div class="event-label">${e(a.label)} ${a.status ? `<span class="status" data-status="${e(a.status)}">${e(a.status)}</span>` : ""}</div><small>${e(a.model === "Unreported model" ? a.engine || "Model unreported" : a.model)}${a.worker ? " · Worker " + e(a.worker) : ""}</small>${a.summary ? `<p>${e(a.summary)}</p>` : ""}${a.files.length ? `<p class="file">Requested edit: ${a.files.map(e).join(", ")}</p>` : ""}${a.counts ? `<small>${e(countLine(a.counts))}</small>` : ""}</div></li>`).join("")}</ol></details>`,
			)
			.join("") ||
		'<p class="empty">No recorded activity matches these filters.</p>'
	}</div>`;
}
function detailsHTML() {
	const files = [
		...new Set<string>(data.activity.flatMap((a: any) => a.files)),
	];
	return `<nav class="tabs" aria-label="Analysis sections">${["activity", "models", "changes"].map((t) => `<button data-tab="${t}" aria-current="${tab === t ? "page" : "false"}">${{ activity: "Activity tree", models: "Models", changes: "File activity" }[t]}</button>`).join("")}</nav>${tab === "activity" ? `<p class="hint">Recorded calls, tool requests and published summaries. Updates every 5 seconds while visible. Private model reasoning is not exposed.</p>${treeHTML()}` : tab === "models" ? `<div class="model-table"><div class="model-row table-head"><span>Model</span><span>Input</span><span>Output</span><span>Cache</span><span>Total</span></div>${data.models.map((m: any) => `<button class="model-row" data-model="${e(m.name)}"><strong>${e(m.name)}</strong><span>${number(m.counts.input)}</span><span>${number(m.counts.output)}</span><span>${number(m.counts.read + m.counts.write)}</span><span>${number(m.total)}</span></button>`).join("")}</div><p class="hint">Cache reads and writes are included in total. Reasoning tokens are already inside output. Missing provider counts are marked as incomplete.</p>` : `<p class="hint">Paths below came from logged edit requests in the latest 160 matching events. An edit request alone does not prove that a change landed. Genex does not provide a complete diff through this API.</p><ul class="files">${files.map((f) => `<li>${e(f)}</li>`).join("") || "<li>No file paths were recorded in the selected events.</li>"}</ul>`}`;
}
function filtersHTML() {
	return `<div class="filters"><label>Game<select id="project"><option value="">All games</option>${data.projectOptions.map((p: string) => `<option value="${e(p)}" ${p === selectedProject ? "selected" : ""}>${e(p.replace(/-/g, " "))}</option>`).join("")}</select></label><label>Model<select id="model"><option value="">All models</option>${data.modelOptions.map((m: string) => `<option value="${e(m)}" ${m === selectedModel ? "selected" : ""}>${e(m)}</option>`).join("")}</select></label><span class="filter-end">${button("reset-filters", "Reset filters")}</span></div>`;
}
function changesHTML() {
	const key = selectedProject + "\0" + selectedDay,
		c = changesKey === key ? changes : null;
	return `<section class="checkpoint-changes"><div class="section-head"><h2>Saved checkpoint changes</h2>${selectedProject ? button("compare", changesBusy ? "Comparing…" : "Compare checkpoints", "quiet") : ""}</div>${!selectedProject ? '<p class="hint">Choose a game above to compare its saved checkpoints.</p>' : !c ? '<p class="hint">Compare the two latest saved game checkpoints, up to the selected day. Current uncommitted edits are not included.</p>' : !c.available ? `<p class="hint">${e(c.message)}</p>` : `<p class="hint">${e(c.from.ref.slice(0, 10))} → ${e(c.to.ref.slice(0, 10))} · ${e(new Date(c.to.at).toLocaleString("en-US"))}</p><ul class="files verified">${c.files.map((f: any) => `<li><span>${e(f.path)}</span><span class="change-status">${e(f.status)}</span></li>`).join("") || "<li>No file changes between these checkpoints.</li>"}</ul>${c.truncated ? '<p class="hint">Showing the first 200 changed files.</p>' : ""}`}</section>`;
}
async function compare() {
	if (changesBusy || !selectedProject) return;
	changesBusy = true;
	const project = selectedProject,
		day = selectedDay;
	render();
	try {
		const result = await api.call("action", "changes", { project, day, zone });
		changes = result;
		changesKey = project + "\0" + day;
	} catch (err) {
		changes = { available: false, message: String(err) };
		changesKey = project + "\0" + day;
	} finally {
		changesBusy = false;
		render();
	}
}
function render() {
	const focus =
		document.activeElement instanceof HTMLElement
			? document.activeElement.dataset.date
			: null;
	const opened = [
		...root.querySelectorAll<HTMLDetailsElement>("details[open]"),
	].map((d) => d.querySelector("summary")?.textContent);
	root.className = expanded ? "dashboard" : "compact";
	if (!data) {
		root.innerHTML = `<div class="loading"><h1>Usage-Streak</h1><p role="status">${e(error || "Reading local Studio activity…")}</p>${error ? button("refresh", "Try again") : ""}</div>`;
		return;
	}
	const sum = total(data.counts);
	if (embedded) {
		root.innerHTML = `<div class="summary"><strong title="${exact(sum)} reported tokens">${number(sum)} <span>reported tokens</span></strong><span class="streak">${data.streak.current} day streak <span class="muted">· Best ${data.streak.longest}</span></span></div>${calendarHTML(true)}`;
		if (error) root.setAttribute("aria-label", error); else root.removeAttribute("aria-label");
		return;
	}
	root.innerHTML = `<header class="top"><div><h1>${expanded ? "Usage-Streak" : button("expand", 'Usage-Streak <span aria-hidden="true">↗</span>', "title-button")}</h1>${expanded ? "<p>Your games, measured in tokens.</p>" : ""}</div><div class="head-actions">${expanded ? button("live", live ? "● Live" : "Paused", "quiet") + button("refresh", "Refresh", "quiet") + (embedded ? button("collapse", "Close", "quiet") : button("mount", "Show on New Chat", "quiet")) : ""}</div></header>${expanded ? filtersHTML() : ""}<div class="summary"><strong title="${exact(sum)}">${number(sum)} <span>reported tokens${selectedDay ? " · " + e(selectedDay) : ""}</span></strong><span class="streak">${data.streak.current} day streak <span class="muted">· Best ${data.streak.longest}</span></span></div>${calendarHTML()}${expanded ? `<div class="metrics"><div><span>Input</span><strong>${number(data.counts.input)}</strong></div><div><span>Output</span><strong>${number(data.counts.output)}</strong></div><div><span>Cache read / write</span><strong>${number(data.counts.read)} / ${number(data.counts.write)}</strong></div><div><span>Model calls</span><strong>${number(data.callCount)}</strong></div></div>${graphHTML()}<section class="games"><div class="section-head"><h2>Games</h2><span>Reported usage${selectedDay ? " on " + e(selectedDay) : ""}</span></div>${projectHTML() || '<p class="empty">No reported tokens yet. Build a game in Studio to start your streak.</p>'}</section>${detailsHTML()}<footer class="footer"><span>${exact(data.eventCount)} local events · Updated ${new Date(data.updatedAt).toLocaleTimeString("en-US")}</span><span>${e(zone)}</span></footer>` : `<div class="compact-games">${projectHTML(1) || '<span class="hint">Build a game in Studio to start your streak.</span>'}</div>`}${data.partial || data.warnings.length ? `<p class="warning" role="status">Some history or token fields are unavailable. Totals cover reported usage only.${expanded ? " " + data.warnings.map(e).join(" ") : ""}</p>` : ""}${error ? `<p class="warning" role="alert">${e(error)}</p>` : ""}`;
	if (expanded && tab === "changes")
		root
			.querySelector(".files")
			?.insertAdjacentHTML("beforebegin", changesHTML());
	root.querySelectorAll<HTMLDetailsElement>("details").forEach((d) => {
		if (opened.includes(d.querySelector("summary")?.textContent)) d.open = true;
	});
	if (focus)
		root
			.querySelector<HTMLElement>(`[data-date="${focus}"]`)
			?.focus({ preventScroll: true });
	void loadImages();
}
async function loadImages() {
	if (imageBusy || document.hidden || !data) return;
	imageBusy = true;
	try {
		for (const p of data.projects.slice(0, expanded ? 12 : 1)) {
			const meta = data.screenshots[p.name];
			if (!meta || loaded.get(p.name) === meta.at) continue;
			loaded.set(p.name, meta.at);
			const shot = await api.call("action", "screenshot", { project: p.name });
			if (!shot?.data) continue;
			const image = new Image();
			image.src = shot.data;
			await image.decode();
			if (image.naturalWidth > 16000 || image.naturalHeight > 16000) continue;
			const canvas = document.createElement("canvas");
			canvas.width = 480;
			canvas.height = Math.max(
				1,
				Math.round((480 * image.naturalHeight) / image.naturalWidth),
			);
			if (canvas.height > 1800) continue;
			canvas
				.getContext("2d")!
				.drawImage(image, 0, 0, canvas.width, canvas.height);
			thumbs.set(p.name, canvas.toDataURL("image/webp", 0.78));
			if (thumbs.size > 24) thumbs.delete(thumbs.keys().next().value!);
			const img = root.querySelector<HTMLImageElement>(
				`.game[data-project="${CSS.escape(p.name)}"] .shot`,
			);
			if (img) {
				img.replaceChildren();
				const el = document.createElement("img");
				el.src = thumbs.get(p.name)!;
				el.alt = "Studio screenshot of " + p.name;
				img.append(el);
			}
		}
	} catch {
		/* Missing or corrupt captures do not prevent analytics. */
	} finally {
		imageBusy = false;
	}
}
async function refresh(force = false) {
	clearTimeout(timer);
	if (busy) {
		queued = queued || force;
		return;
	}
	if (document.hidden) return schedule();
	busy = true;
	const seq = ++request,
		filterKey = [selectedProject, selectedModel, selectedDay].join("\0");
	try {
		const next = await api.call(
			"action",
			"analytics",
			{
				zone,
				project: selectedProject,
				model: selectedModel,
				day: selectedDay,
			},
			{ timeoutMs: 180000 },
		);
		if (seq !== request) return;
		if (
			filterKey !== [selectedProject, selectedModel, selectedDay].join("\0")
		) {
			queued = true;
			return;
		}
		const signature = JSON.stringify({ ...next, updatedAt: undefined });
		const changed = signature !== lastSignature || !!error;
		data = next;
		lastSignature = signature;
		error = "";
		if (force || changed) render();
	} catch (err) {
		error = err instanceof Error ? err.message : String(err);
		render();
	} finally {
		busy = false;
		if (queued) {
			queued = false;
			void refresh(true);
		} else schedule();
	}
}
function schedule() {
	if (live && !document.hidden) timer = setTimeout(() => void refresh(), 5000);
}
async function openDay(day: string) {
	try { await api.call("customization.openDetails", undefined, { day }); }
	catch (err) { error = String(err); root.setAttribute("aria-label", error); }
}
root.addEventListener("click", (event) => {
	const target = (event.target as Element).closest<HTMLElement>("button");
	if (!target) return;
	if (target.dataset.date) {
		if (embedded) { void openDay(target.dataset.date); return; }
		selectedDay =
			selectedDay === target.dataset.date ? "" : target.dataset.date;
		void refresh(true);
		return;
	}
	if (target.dataset.project) {
		selectedProject = target.dataset.project;
		void refresh(true);
		return;
	}
	if (target.dataset.model) {
		selectedModel = target.dataset.model;
		void refresh(true);
		return;
	}
	if (target.dataset.tab) {
		tab = target.dataset.tab;
		render();
		return;
	}
	if (target.dataset.action === "compare") {
		void compare();
		return;
	}
	switch (target.dataset.action) {
		case "refresh":
			void refresh(true);
			break;
		case "clear-day":
			selectedDay = "";
			void refresh(true);
			break;
		case "reset-filters":
			selectedDay = selectedProject = selectedModel = "";
			void refresh(true);
			break;
		case "live":
			live = !live;
			clearTimeout(timer);
			if (live) void refresh(true);
			render();
			break;
		case "mount":
			void api
				.call("customization.set", undefined, profile())
				.then(() => {
					error = "";
					render();
				})
				.catch((err) => {
					error =
						"New Chat requires the customization API from PR #112: " +
						String(err);
					render();
				});
			break;
	}
});
root.addEventListener("change", (event) => {
	const select = event.target as HTMLSelectElement;
	if (select.id === "project") selectedProject = select.value;
	if (select.id === "model") selectedModel = select.value;
	void refresh(true);
});
root.addEventListener("keydown", (event) => {
	const target = (event.target as HTMLElement).closest<HTMLElement>(
		"[data-index]",
	);
	if (!target) return;
	const offsets: Record<string, number> = {
		ArrowUp: -1,
		ArrowDown: 1,
		ArrowLeft: -7,
		ArrowRight: 7,
	};
	if (!(event.key in offsets)) return;
	event.preventDefault();
	const index = Math.max(
		0,
		Math.min(
			root.querySelectorAll(".day").length - 1,
			Number(target.dataset.index) + offsets[event.key],
		),
	);
	target.tabIndex = -1;
	const next = root.querySelector<HTMLElement>(`[data-index="${index}"]`)!;
	next.tabIndex = 0;
	next.focus();
});
root.addEventListener("focusin", (event) => {
	const cell = (event.target as HTMLElement).closest<HTMLElement>(".day");
	if (cell) root.querySelector("#day-info")!.textContent = cell.title;
});
document.addEventListener("visibilitychange", () => {
	clearTimeout(timer);
	if (!document.hidden) void refresh();
});
async function theme(context?: any) {
	const ctx = context || await api.call("context");
	for (const [key, value] of Object.entries(object(ctx.theme)))
		if (
			typeof value === "string" &&
			/^(#[0-9a-f]{3,8}|rgba?\([\d.,%\s]+\))$/i.test(value)
		)
			document.documentElement.style.setProperty("--" + key, value);
}
api.onContextChanged(() => {
	void theme().catch(() => {});
});
window.addEventListener("resize", () => { if (embedded && data) render(); });
document.body.classList.toggle("widget-page", embedded);
render();
void (async () => {
	try { const ctx = await api.call("context"); await theme(ctx); if (!embedded && /^\d{4}-\d{2}-\d{2}$/.test(ctx.navigation?.day || "")) selectedDay = ctx.navigation.day; }
	catch { /* The analytics panel can still read data if theme discovery fails. */ }
	await refresh(true);
})();
