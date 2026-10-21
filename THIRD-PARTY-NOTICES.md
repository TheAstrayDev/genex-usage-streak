# Third-party notices

`vendor/panel.js` is copied from the Genex desktop plugin SDK at commit `5ce9cedc1351db58dbf7265addad22fa6ce1d0ee` (https://github.com/genex-games/genex-desktop), MIT, copyright genex.games. The root LICENSE preserves that notice.

The backend bundles isomorphic-git and its required transitive code. The build collects each bundled package's license in `plugin/THIRD_PARTY_NOTICES.txt` (also `dist/THIRD_PARTY_NOTICES.txt` during development). Those notices ship inside the release artifact. Dependencies retain their original licenses. Development dependencies are pinned in package-lock.json.

GitHub's contribution calendar inspired the day/week arrangement. No GitHub implementation or brand assets are included. This plugin has no official Genex or GitHub endorsement.

## ZenFS path helpers in isomorphic-git

isomorphic-git 1.44.2 embeds modified `@zenfs/core/path` helpers, copyright (c) James Prevett and other ZenFS contributors, under **LGPL-3.0-or-later**. Its root MIT license does not replace that component license. The upstream copyright/SPDX header remains in the bundle. Full LGPL 3.0 and GPL 3.0 texts are in `vendor/licenses/` and the shipped `THIRD_PARTY_NOTICES.txt`. Corresponding library source ships as `ISOMORPHIC_GIT_SOURCE.txt`, copied byte-for-byte from the pinned dependency’s `index.js` (the complete unmodified module, including its original license headers). This repository supplies the plugin source, build script and pinned dependency lockfile. Users may modify the library, rebuild with `npm ci && npm run build`, and replace the local plugin without a signing key.
