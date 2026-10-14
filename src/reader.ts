import { open, readdir, realpath, lstat } from "node:fs/promises";
import path from "node:path";
import { object, words, projectEvent, type Entry } from "./model.ts";
const SEGMENT = /^[A-Za-z0-9][A-Za-z0-9._-]{0,159}$/;
const EVENT =
	/^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.json$/i;
export const LIMITS = {
	threads: 300,
	events: 150000,
	jsonBytes: 2 * 1024 * 1024,
	imageBytes: 8 * 1024 * 1024,
};
function inside(root: string, file: string) {
	const rel = path.relative(root, file);
	return (
		rel !== "" &&
		!rel.startsWith(".." + path.sep) &&
		rel !== ".." &&
		!path.isAbsolute(rel)
	);
}
/** Every read must remain within the canonical allowlisted tree, including junctions. */
export async function readBounded(
	root: string,
	relative: string,
	max: number,
): Promise<Buffer> {
	const base = await realpath(root),
		file = path.resolve(base, relative);
	if (!inside(base, file)) throw new Error("Path outside analytics source");
	const canonical = await realpath(file);
	if (!inside(base, canonical))
		throw new Error("Linked path outside analytics source");
	const before = await lstat(file);
	if (before.isSymbolicLink() || !before.isFile() || before.size > max)
		throw new Error("Unsupported or oversized file");
	const handle = await open(canonical, "r");
	try {
		const stat = await handle.stat();
		if (stat.size > max || !stat.isFile()) throw new Error("Oversized file");
		const data = Buffer.alloc(stat.size + 1);
		const { bytesRead } = await handle.read(data, 0, data.length, 0);
		if (bytesRead > max) throw new Error("Oversized file");
		return data.subarray(0, bytesRead);
	} finally {
		await handle.close();
	}
}
async function json(root: string, file: string) {
	return JSON.parse(
		(await readBounded(root, file, LIMITS.jsonBytes)).toString("utf8"),
	);
}
async function dirs(root: string, relative: string) {
	const base = await realpath(root),
		folder = path.resolve(base, relative);
	const resolved = await realpath(folder);
	if (!inside(base, resolved))
		throw new Error("Linked directory outside source");
	return (await readdir(resolved, { withFileTypes: true }))
		.filter(
			(x) =>
				x.isDirectory() &&
				!x.isSymbolicLink() &&
				SEGMENT.test(x.name) &&
				x.name !== "." &&
				x.name !== "..",
		)
		.map((x) => x.name)
		.sort();
}
export function profileRoot(storage: string): string {
	const normalized = path.resolve(storage),
		parts = normalized.split(path.sep);
	if (
		parts.slice(-4, -1).join("/") !== "engine-homes/plugins/data" ||
		parts.at(-1) !== "usage-streak"
	)
		throw new Error(
			"Genex storage layout is not supported. Configure the Genex profile directory in plugin settings.",
		);
	return path.resolve(storage, "../../../..");
}
type ThreadCache = {
	stamp: string;
	head: string;
	entries: Entry[];
	captures: { project: string; file: string; at: string }[];
	warnings: string[];
};
export class AnalyticsReader {
	private cache = new Map<string, ThreadCache>();
	private inFlight: Promise<any> | null = null;
	private last: { at: number; value: any } | null = null;
	readonly root: string;
	constructor(root: string) {
		this.root = root;
	}
	async snapshot() {
		if (this.inFlight) return this.inFlight;
		if (this.last && Date.now() - this.last.at < 4500) return this.last.value;
		this.inFlight = this.load();
		try {
			const value = await this.inFlight;
			this.last = { at: Date.now(), value };
			return value;
		} finally {
			this.inFlight = null;
		}
	}
	private async load() {
		const eventsRoot = path.join(this.root, "exoharness"),
			warnings: string[] = [],
			entries: Entry[] = [],
			captures: ThreadCache["captures"] = [];
		let projects: any;
		try {
			projects = object(await json(this.root, "projects.json"));
		} catch {
			throw new Error(
				"Cannot read Genex projects.json. Select the active Genex profile in plugin settings.",
			);
		}
		const names = new Map<string, string>();
		for (const recent of Array.isArray(projects.recents)
			? projects.recents
			: []) {
			const row = object(recent);
			if (typeof row.name === "string") names.set(row.name, row.name);
		}
		let threads: string[];
		try {
			threads = await dirs(eventsRoot, "agents/studio/conversations");
		} catch {
			throw new Error(
				"Genex conversation history is unavailable. Open a game in Studio and refresh.",
			);
		}
		if (threads.length > LIMITS.threads)
			warnings.push(
				`Only the first ${LIMITS.threads} conversations were read.`,
			);
		for (const old of this.cache.keys())
			if (!threads.includes(old)) this.cache.delete(old);
		let scanned = 0;
		for (const thread of threads.slice(0, LIMITS.threads)) {
			const prefix = path.join("agents/studio/conversations", thread);
			let record: any;
			try {
				record = object(
					await json(eventsRoot, path.join(prefix, "record.json")),
				);
			} catch {
				warnings.push(`One conversation record could not be read (${thread}).`);
				continue;
			}
			const meta = object(record.metadata),
				project = words(meta.project, 160) || "Unassigned";
			const head =
				typeof record.latest_event_id === "string"
					? record.latest_event_id
					: "";
			if (!head) continue;
			if (!EVENT.test(head + ".json")) {
				warnings.push("One conversation has an unsupported head.");
				continue;
			}
			const stamp =
				head +
				"\0" +
				project +
				"\0" +
				String(record.parent?.up_to_inclusive || "");
			let cached = this.cache.get(thread);
			if (!cached || cached.stamp !== stamp || cached.warnings.length) {
				const incremental =
					!!cached &&
					!cached.warnings.length &&
					cached.head <= head &&
					cached.stamp.split("\0").slice(1).join("\0") ===
						stamp.split("\0").slice(1).join("\0");
				const current: ThreadCache = {
					stamp,
					head,
					entries: incremental ? [...cached!.entries] : [],
					captures: incremental ? [...cached!.captures] : [],
					warnings: [],
				};
				scanned += current.entries.length;
				try {
					const folder = path.join(prefix, "events"),
						canonical = await realpath(path.join(eventsRoot, folder));
					if (!inside(await realpath(eventsRoot), canonical))
						throw new Error("Linked event directory");
					const files = (await readdir(canonical, { withFileTypes: true }))
						.filter(
							(f) =>
								f.isFile() &&
								!f.isSymbolicLink() &&
								EVENT.test(f.name) &&
								f.name.slice(0, -5) <= head,
						)
						.map((f) => f.name)
						.sort();
					// Forked event prefixes are inherited history, not new spending.
					const forkPoint = words(object(record.parent).up_to_inclusive, 100);
					const pending = files.filter(
						(file) =>
							(!incremental || file.slice(0, -5) > cached!.head) &&
							(!forkPoint || file.slice(0, -5) > forkPoint),
					);
					const allowance = Math.max(0, LIMITS.events - scanned);
					if (pending.length > allowance)
						current.warnings.push("Event limit reached; totals are partial.");
					const readable = pending.slice(0, allowance);
					scanned += readable.length;
					for (let offset = 0; offset < readable.length; offset += 16)
						await Promise.all(
							readable.slice(offset, offset + 16).map(async (file) => {
								try {
									const raw = object(
										await json(eventsRoot, path.join(folder, file)),
									);
									if (raw.id !== file.slice(0, -5))
										throw new Error("Event id mismatch");
									const entry = projectEvent(raw, project);
									if (entry) current.entries.push(entry);
									else
										current.warnings.push("An unsupported event was omitted.");
									const d = object(raw.data),
										p = object(d.payload);
									if (
										d.type === "custom" &&
										d.event_type === "observer_capture"
									)
										for (const value of Array.isArray(p.images)
											? p.images
											: []) {
											const shot = object(value);
											if (typeof shot.file === "string")
												current.captures.push({
													project,
													file: shot.file,
													at: words(raw.created_at, 40),
												});
										}
								} catch {
									current.warnings.push(
										"An unreadable event was omitted; totals may be incomplete.",
									);
								}
							}),
						);
					current.entries.sort((a, b) => a.id.localeCompare(b.id));
					this.cache.set(thread, current);
					cached = current;
				} catch {
					warnings.push(`Cannot read conversation events (${thread}).`);
					continue;
				}
			} else scanned += cached.entries.length;
			entries.push(...cached.entries);
			captures.push(...cached.captures);
			warnings.push(...cached.warnings);
			if (entries.length >= LIMITS.events) {
				warnings.push("Event limit reached; totals are partial.");
				break;
			}
		}
		const screenshots: Record<
			string,
			{ root: string; file: string; at: string; source: string }
		> = Object.create(null);
		for (const capture of captures.sort((a, b) => b.at.localeCompare(a.at))) {
			if (screenshots[capture.project]) continue;
			// Only files from persisted Studio observer events under runs/ may be shown.
			const file = path.isAbsolute(capture.file)
					? capture.file
					: path.join(this.root, capture.file),
				rel = path.relative(path.join(this.root, "runs"), file);
			if (
				inside(path.join(this.root, "runs"), file) &&
				/\.(png|jpe?g)$/i.test(file)
			)
				screenshots[capture.project] = {
					root: path.join(this.root, "runs"),
					file: rel,
					at: capture.at,
					source: "Studio capture",
				};
		}
		// Older 0.1.7 builds kept judge captures in runs/<run>/.../screenshots, before observer_capture.
		const runsRoot = path.join(this.root, "runs");
		try {
			let visited = 0;
			const runs = (await dirs(this.root, "runs")).filter((run) =>
				/^run_[A-Za-z0-9_-]+$/.test(run),
			);
			if (runs.length > 200)
				warnings.push("Only 200 saved runs were checked for screenshots.");
			for (const run of runs.slice(-200)) {
				let report: any;
				try {
					report = object(await json(runsRoot, path.join(run, "report.json")));
				} catch {
					continue;
				}
				const project = words(report.project, 160);
				if (!project) continue;
				const walk = async (relative: string, depth: number): Promise<void> => {
					if (depth > 4 || visited++ > 1500) return;
					let children: string[];
					try {
						children = await dirs(runsRoot, relative);
					} catch {
						return;
					}
					for (const child of children) {
						const next = path.join(relative, child);
						if (child === "screenshots") {
							try {
								const canonical = await realpath(path.join(runsRoot, next));
								if (!inside(await realpath(runsRoot), canonical)) continue;
								const images = (
									await readdir(canonical, { withFileTypes: true })
								).filter(
									(f) =>
										f.isFile() &&
										!f.isSymbolicLink() &&
										/^[A-Za-z0-9._-]+\.(?:png|jpe?g)$/i.test(f.name),
								);
								const preferred =
									images.find((f) => f.name === "default.jpg") ||
									images.find((f) => f.name === "default.png") ||
									images.find((f) => f.name === "user-view.jpg") ||
									images[0];
								if (!preferred) continue;
								const file = path.join(next, preferred.name),
									stat = await lstat(path.join(runsRoot, file));
								if (stat.size > LIMITS.imageBytes) continue;
								const at = stat.mtime.toISOString();
								if (!screenshots[project] || screenshots[project].at < at)
									screenshots[project] = {
										root: runsRoot,
										file,
										at,
										source: "Studio build capture",
									};
							} catch {
								/* Deleted captures stay absent. */
							}
						} else await walk(next, depth + 1);
					}
				};
				await walk(run, 0);
			}
			if (visited > 1500)
				warnings.push(
					"Screenshot folder limit reached; some captures were not checked.",
				);
		} catch {
			/* A new profile may not have run evidence yet. */
		}
		for (const project of new Set(entries.map((e) => e.project))) {
			if (screenshots[project] || !SEGMENT.test(project) || project === "..")
				continue;
			try {
				const base = path.join(
						this.root,
						"engine-homes/plugins/data/genex/covers",
					),
					record = object(await json(base, path.join(project, "shot.json"))),
					file =
						record.mimeType === "image/png"
							? "shot.png"
							: record.mimeType === "image/jpeg"
								? "shot.jpg"
								: null;
				if (file)
					screenshots[project] = {
						root: base,
						file: path.join(project, file),
						at: words(record.takenAt, 40),
						source: "Studio cover capture",
					};
			} catch {
				/* Older profiles have no kept cover. */
			}
		}
		return {
			entries,
			screenshots,
			warnings: [...new Set(warnings)],
			updatedAt: new Date().toISOString(),
			projects: [...names.keys()],
			eventCount: entries.length,
		};
	}
	async image(root: string, file: string): Promise<string | null> {
		const data = await readBounded(root, file, LIMITS.imageBytes);
		const png = data
				.subarray(0, 8)
				.equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
			jpeg = data[0] === 255 && data[1] === 216 && data[2] === 255;
		if (!png && !jpeg) return null;
		return `data:image/${png ? "png" : "jpeg"};base64,${data.toString("base64")}`;
	}
}
