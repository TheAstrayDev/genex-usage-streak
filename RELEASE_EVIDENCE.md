# Usage-Streak 1.1.1 acceptance evidence

Tested on Windows with Node 24.14.0 against **unmodified Genex v0.1.12**, source commit `5ce9cedc1351db58dbf7265addad22fa6ce1d0ee`. No desktop customization patch or unreleased API was used. All profiles, game sources and conversation contents used for these checks are disposable fixtures.

## Compatibility regression

The previous 1.0.14 package fails the released host's manifest validation because `ui.customization` is not a supported capability. Its New Chat footer/details calls also depend on unreleased host code. Version 1.1.0 declares `project.read`, uses only released panel bridge methods, and retains the dashboard and compact calendar as ordinary plugin pages. The community id is now `theastraydev-usage-streak` as required by the catalog's ownership rules.

## Results

- `npm run check`: passed.
- `npm test`: 32 passed, 0 failed. Coverage includes reported-usage semantics, fork/delegation deduplication, local dates/streaks, bounded read-only history and raster reads, checkpoint comparisons, and the aggregate chat tool.
- `npm run build` and `node scripts/check-package.mjs`: passed; all shipped files match the rebuilt package byte for byte.
- Stock `npm run plugin:doctor -- <package> --json`: `ok: true`, backend probe ready, no errors, no activation-time host calls.
- `node tests/release.mjs`: 12 checks passed using the released `PluginRegistry`, backend process and `EventStore`. Fresh install is disabled; enabling exposes the real harmless `usage-summary` backend tool in the same existing chat binding. A conversation written by the released event store produces 15 reported tokens without exposing its message content or modifying its committed record. Panel actions, settings retained over a synthetic 1.1.1 → 1.1.2 update, disable, re-enable and remove all pass.
- `node tests/ui.mjs`: 31 checks passed using the released `PluginPanelHost` and sandboxed iframe with fixture IPC. Dashboard/day filters, model breakdown, checkpoint action, overview → day details → Back, calendar month labels, 400/600/1100px widths, 125% zoom, seven aura states, animation pause/reduced motion, error/empty states and stopping requests on disable pass. No renderer errors.
- No account flow: the package uses no account, model call, MCP server or network access.

The registry acceptance test invokes the actual backend with a synthetic chat binding; the UI fixture supplies synthetic analytics. These checks do **not** claim a paid/live-provider conversation, a clean full-app installer run, a catalog installation before maintainer publication, or macOS/Linux runtime coverage. They do exercise the released host's installation and tool plumbing without a provider account.

## Static scan review

The doctor retains a `caution` verdict: six URL findings in bundled isomorphic-git/dependency comments or diagnostic/license strings, plus three unscanned documentation/license files. Those URLs are not network calls. No extra network capability was added to silence findings. The package includes MIT licensing and bundled dependency notices; reviewers should inspect the findings and source before enabling trusted native plugin code.

## Reproduce

1. Check out Genex tag `v0.1.12`, install its dependencies and build it.
2. In this repository run `npm ci`, `npm run build`, `npm run check`, `npm test`, and `node scripts/check-package.mjs`.
3. Set `GENEX_HOST_DIR` to that Genex checkout; run `node tests/release.mjs` and `node tests/ui.mjs`.
4. Run the host's `scripts/plugin-doctor.ts plugin --json` with Node 24.

The UI runner writes screenshots and reports to ignored `.evidence/`; release assets include the captured dashboard, overview, and JSON reports. Install the release's prebuilt `plugin/` through Plugins → Add → Install from GitHub. Catalog submission is metadata only; maintainers review the exact artifact and publish it to the approved origin before listing.

## Review corrections in 1.1.1

README and manifest description now name Genex Tools saved covers as a local read source. The distribution contains the ZenFS path component copyright, SPDX LGPL-3.0-or-later notice, full LGPL 3.0 and GPL 3.0 texts and the exact isomorphic-git module source (`ISOMORPHIC_GIT_SOURCE.txt`). No runtime or dependency version changed. Rebuilt package byte comparison, typecheck, 32 tests, doctor (ok, ready), 12 stock-host lifecycle checks and 31 panel checks passed again on the corrected artifact. The earlier 1.1.0 release is left immutable.
