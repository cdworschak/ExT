# Eberron × The Electrum Archive

A homebrew hack of The Electrum Archive (TEA), reskinned into Eberron.

## Contents

- **`eberron-electrum-archive.md`** — the master ruleset document. Includes full design rationale, Monte Carlo test results, and a Glossary of every term with a specific defined meaning.
- **`docs/`** — a complete, static HTML rulebook built from the master document, stripped of design notes — just the finished rules. Thirteen pages, ordered around Character Creation's own flow: Home, Foundations, Character Creation, Backgrounds, Archetypes, Magic, Combat, Inventory & Items, Exploration, Enemy Design, Advancement, Glossary, and an interactive Character Builder. No build step — open `docs/index.html` directly, or serve the folder via GitHub Pages. Named `docs` specifically because GitHub Pages' "Deploy from a branch" option only supports the repo root or a folder literally named `docs`. Contains a `.nojekyll` file, which tells GitHub Pages to skip its default Jekyll build and serve the plain HTML as-is. Includes a client-side search (`search.js` + `search-index.json`) covering every page except the Character Builder itself.
- **`tools/combat_benchmark.py`** — a reusable Monte Carlo combat simulator (real Initiative, per-character Surprise, a priority-ordered decision-tree AI, the corrected Wound-refill rule). Extend this for future ability/rule testing rather than writing a fresh script each time — see the module docstring for what it does and doesn't model.
- **`docs/character-builder.html`** — a self-contained, vanilla HTML/CSS/JS character creation tool, no build step or dependencies. Follows the same sequence as Character Creation itself (Background through starting wealth), calculates Guard Stat and Initiative live, validates weapon/armor/shield choices against actual stats, and includes a Randomize button and a plain-text copy output.

## GitHub Pages setup

Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder: `/docs` → Save.

## Live site

https://cdworschak.github.io/ExT/

## Status

Master document is current on `main` — no version numbers, that file is always the latest. See its own Open Threads section for what's still unresolved.
