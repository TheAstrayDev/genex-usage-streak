# Unreleased host contract

Usage-Streak 1.0.4 is for a development host only. It cannot run on standard Genex. The customization API proposal is [genex-desktop#112](https://github.com/genex-games/genex-desktop/pull/112), with design discussion in [#111](https://github.com/genex-games/genex-desktop/issues/111). Neither acceptance nor a future release date is promised.

The screenshot host is a locally patched Windows Genex 0.1.7 build. The plugin source is platform-neutral JavaScript and TypeScript; native macOS and Linux acceptance has not been run.

The included `host-hooks.patch` is a reference for maintainers. It applies after PR #112 at commit `1e3fa43783b6e9c2ea63649758b92f3bf4d8b88a`. It is outside the prebuilt package and is never applied by the plugin. It adds only:

- `newChatFooter`, a host-owned anchor directly under the composer, with a full-width 160px widget area using the prompt's border and rounding.
- `customization.openDetails({day})`, bound to the calling enabled customization plugin's own primary settings panel. No plugin id or URL can be supplied. Dates and extra arguments are validated.
- `context.features.uiPanelNavigation: 1` and `context.navigation.day` for that destination, with bounded short-lived navigation state.

These hooks are not currently part of PR #112. Merging #112 by itself will not make this build compatible. The catalog submission is held for review until a supported host contract exists; its version floor cannot express an unmerged feature. The reference patch preserves PR #112's file picker, structured panel errors and other unrelated APIs. It adds no Windows port or custom theme.

For isolated reproduction, check out the PR commit in a disposable Genex clone, apply this patch with `git apply /path/to/host-hooks.patch`, install its locked dependencies and build with Node 24. In the plugin clone run `npm ci`, `npm run build`, `npm run check`, `npm test`, then set `GENEX_HOST_DIR` to that host checkout and run `node tests/ui.mjs` and `node tests/release.mjs`. These use synthetic data and do not touch your normal Genex profile or provider accounts. Use the patched checkout's `plugin:doctor` for this package; stock Genex correctly refuses `ui.customization`.
