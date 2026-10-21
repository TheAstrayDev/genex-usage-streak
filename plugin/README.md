# Usage-Streak for Genex

Usage-Streak 1.1.1 works with released **Genex 0.1.12** through plugin API 3. It shows reported local token activity by day, game and model, current/longest streaks, saved captures and recorded activity. Open **Plugins → Usage-Streak → Usage-Streak** for the dashboard, or **Streak overview** for the compact two-week calendar and animated flame. Select a day in the overview to open its details in the same panel; Back to overview returns to the calendar.

The released API does not provide a New Chat widget slot. This release uses standard plugin panels and makes no customization, footer or host-navigation calls. It needs no application patch and is independent of desktop PR #112. The flame's six aura milestones, 24 FPS vector animation, hidden-page pause and reduced-motion support are retained.

## Install

In Genex 0.1.12 or later, use Plugins → Add → Install from GitHub and enter:

`https://github.com/TheAstrayDev/genex-usage-streak/tree/v1.1.1/plugin`

Review the access declaration and enable the plugin. You can also load the prebuilt `plugin/` directory locally. Installation runs no npm commands or build hooks. The catalog submission requires maintainer review before the plugin appears in the public catalog.

The community id is now `theastraydev-usage-streak`, as required by the catalog. Older `usage-streak` development installations remain a separate identity: remove that plugin manually and install this release. Historical analytics live in Genex's own history and are not moved or deleted. If you used an optional profile-directory override, enter it again in the new plugin's settings. No old settings or app files are silently rewritten.

## Access and privacy

The sole capability is **project.read**. The trusted native backend reads Genex's `projects.json`, committed conversation records/events, saved run captures, Genex Tools’ saved cover metadata and raster images in `engine-homes/plugins/data/genex/covers/<project>/` (read on demand), and, on explicit checkpoint comparison, the selected indexed game's Git objects. It discovers the active profile from its plugin storage location; an optional absolute profile directory supports other layouts. The plugin does not write game sources, invoke external Git or a shell, read credential stores/CLI homes, contact the network, generate images or call models. Activation reads nothing. Nothing is uploaded.

The read-only chat tool `theastraydev-usage-streak__usage-summary` returns aggregate token counts, streaks, date range and coverage warnings. It omits prompts, activity rows and private reasoning. Other actions are panel-only. No account, MCP server, network host or paid generation is required. The host still asks for the approvals appropriate to a locally loaded plugin.

Totals are **reported local usage, not billing**. Codex cache reads are removed from inclusive input before summing; reasoning is already in output. Per-model partitions replace main-loop totals. Repeated delegated/build usage in one thread/turn and inherited fork prefixes are counted once. A provider may report usage only when a call ends. Missing fields, unsupported events and bounds produce visible incomplete-data warnings.

The reader is bounded to 300 conversations, 150,000 events and 2 MiB per JSON record, and caches unchanged heads. Refresh runs every five seconds only while visible and can be paused. Saved raster captures load on demand; no live screenshot is taken. Checkpoint comparisons use bundled isomorphic-git with read-only filesystem access, no hooks or conversion filters; results stop at 200 files, 20,000 tree entries and 128 MiB packs. Only SHA-1 repositories with an ordinary .git directory are supported; worktrees, SHA-256, missing objects and oversized histories show an unavailable message.

## Development and verification

Use Node 24: `npm ci`, `npm run build`, `npm run check`, `npm test`. Commit the rebuilt contents of `dist/` into `plugin/`; `node scripts/check-package.mjs` compares them byte for byte. With an unmodified Genex 0.1.12 checkout in `GENEX_HOST_DIR`, run `node tests/ui.mjs` and `node tests/release.mjs`. They use stock panel/registry code, disposable synthetic profiles and no provider account. The release test exercises a real backend tool invocation with a chat binding, same-chat activation, update settings and disable/remove behavior. The UI test uses the real isolated panel host with fixture IPC; it is not a live-model test.

The panel SDK is copied from released Genex 0.1.12; notices retain its MIT license and the Genex color math attribution. The backend bundles isomorphic-git, including its LGPL-3.0-or-later ZenFS path helpers, and required transitive licenses. See THIRD-PARTY-NOTICES.md.

## Publishing

Follow the official [plugin guide](https://github.com/genex-games/genex-desktop/blob/v0.1.12/docs/PLUGIN_GUIDE.md#9-publish) and [catalog rules](https://github.com/genex-games/genex-plugins/blob/main/CONTRIBUTING.md): validate with plugin:doctor, publish the exact source commit, generate the immutable artifact/record with plugin:submit, attach the artifact to a GitHub release, and open a metadata-only catalog PR. Maintainers review and upload to the approved artifact origin; contributors do not change catalog policy or workflows.

MIT. Maintainer: [TheAstrayDev](https://github.com/TheAstrayDev). [Report an issue](https://github.com/TheAstrayDev/genex-usage-streak/issues). Implementation and verification assisted by OpenAI Codex. No official Genex or GitHub endorsement is claimed.
