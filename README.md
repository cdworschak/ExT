# Eberron × The Electrum Archive

A homebrew hack of The Electrum Archive (TEA), reskinned into Eberron.

## Contents

- **`eberron-electrum-archive.md`** — the master ruleset document. Includes full design rationale, Monte Carlo test results, and a Glossary of every term with a specific defined meaning.
- **`site/`** — a complete, static HTML rulebook built from the master document, stripped of design notes — just the finished rules. Nine pages: Home, Foundations, Backgrounds, Archetypes, Character Creation, Combat, Exploration, Enemies & Advancement, Glossary. No build step — open `site/index.html` directly, or serve the folder as-is via GitHub Pages.
- **`tools/combat_benchmark.py`** — a reusable Monte Carlo combat simulator (real Initiative, per-character Surprise, a priority-ordered decision-tree AI, the corrected Wound-refill rule). Extend this for future ability/rule testing rather than writing a fresh script each time — see the module docstring for what it does and doesn't model.
- **`tools/CharacterCreator.jsx`** — a browser-based character creation wizard (React). Needs a build step or the Babel-standalone wrapper to run outside Claude's artifact environment.

## GitHub Pages setup

Point Pages at the `site/` folder (Settings → Pages → deploy from branch, folder `/site`), and the rulebook will be live with no build step.

## Status

Master document is at v92. See its own Open Threads section for what's still unresolved.
