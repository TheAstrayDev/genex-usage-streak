import path from "node:path";
import { AnalyticsReader, profileRoot } from "./reader.ts";
import { analytics, object } from "./model.ts";
import { checkpointChanges } from "./changes.ts";
/** Activation reads nothing. Refresh reads a narrow set of local records; no providers or network. */
export async function activate() {
	let reader: AnalyticsReader | null = null;
	return {
		async action(
			name: string,
			args: Record<string, unknown>,
			context: { host: (method: string) => Promise<any> },
		) {
			if (!["analytics", "screenshot", "changes"].includes(name))
				throw new Error("Unknown action");
			const settings = object(await context.host("settings.read")),
				storage = await context.host("storage.root");
			const configured =
				typeof settings.profile === "string" ? settings.profile.trim() : "";
			if (configured && !path.isAbsolute(configured))
				throw new Error("Genex profile must be an absolute directory");
			const root = configured ? path.resolve(configured) : profileRoot(storage);
			if (!reader || reader.root !== root) reader = new AnalyticsReader(root);
			const data = await reader.snapshot(),
				zone = typeof args.zone === "string" ? args.zone : "UTC";
			if (name === "screenshot") {
				const shot =
					typeof args.project === "string"
						? data.screenshots[args.project]
						: null;
				if (!shot) return null;
				try {
					return {
						data: await reader.image(shot.root, shot.file),
						at: shot.at,
						source: shot.source,
					};
				} catch {
					return null;
				}
			}
			try {
				new Intl.DateTimeFormat("en", { timeZone: zone }).format();
			} catch {
				throw new Error("Unknown time zone");
			}
			if (name === "changes") {
				if (typeof args.project !== "string" || !args.project)
					throw new Error("Choose a game to compare checkpoints");
				return checkpointChanges(
					root,
					data.entries,
					args.project,
					zone,
					typeof args.day === "string" && /^\d{4}-\d{2}-\d{2}$/.test(args.day)
						? args.day
						: undefined,
				);
			}
			const result = analytics(data.entries, {
				zone,
				project: typeof args.project === "string" ? args.project : undefined,
				model: typeof args.model === "string" ? args.model : undefined,
				day:
					typeof args.day === "string" && /^\d{4}-\d{2}-\d{2}$/.test(args.day)
						? args.day
						: undefined,
			});
			return {
				...result,
				screenshots: Object.fromEntries(
					Object.entries(data.screenshots).map(([p, raw]) => {
						const shot = object(raw);
						return [p, { at: shot.at, source: shot.source }];
					}),
				),
				warnings: data.warnings,
				updatedAt: data.updatedAt,
				eventCount: data.eventCount,
			};
		},
	};
}
