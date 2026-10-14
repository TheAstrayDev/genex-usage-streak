# Third-party notices

`vendor/panel.js` is copied from the Genex desktop plugin SDK at commit `1e3fa43783b6e9c2ea63649758b92f3bf4d8b88a` (https://github.com/genex-games/genex-desktop), MIT, copyright genex.games. The root LICENSE preserves that notice. The reference host patch derives from the same MIT source and local additions by TheAstrayDev.

The backend bundles isomorphic-git and its required transitive code. The build collects each bundled package's license in `plugin/THIRD_PARTY_NOTICES.txt` (also `dist/THIRD_PARTY_NOTICES.txt` during development). Those notices ship inside the release artifact. Dependencies retain their original licenses. Development dependencies are pinned in package-lock.json.

GitHub's contribution calendar inspired the day/week arrangement. No GitHub implementation or brand assets are included. This plugin has no official Genex or GitHub endorsement.
