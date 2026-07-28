# Eberron × The Electrum Archive — Split Files, Reading Order

The master document was split into 11 files, purely to keep each one small
enough to read reliably via GitHub's rendered file view (the single 265KB
file was truncating on fetch, and GitHub blocks automated access to its
raw file host entirely — this split works around both).

**Reorganized before splitting: Core Resolution (2d10 vs Target 12, stat
generation, Advantage/Disadvantage) moved from deep inside the Combat
section to immediately after Core Reskin, at the very front.** It used to
come after Magic Baseline, Spell Names, Backgrounds, Archetypes, and
Character Creation — meaning a new reader hit detailed rules built on top
of "roll 2d10+stat vs Target 12" long before ever seeing that mechanic
explained. Also added an explicit statement of this system's core design
constraint, which was never actually written down anywhere before: situational
difficulty is represented by shifting the Target or applying Advantage/
Disadvantage, never by stacking small numeric modifiers. Every other section
kept its existing relative order.

| File | Sections | Lines |
|---|---|---|
| `01-foundations.md` | Setting Terminology, **Core Resolution**, Magic Baseline, Overcasting, Spellcasting Procedure, Spell Names | 491 |
| `02-backgrounds.md` | Background Creation Procedure, all 45 Backgrounds | 94 |
| `03-archetypes-dragonmarks-languages.md` | Archetypes, Wandslinger, Leverage, Contingency, Agent Combat Techniques, Agent Flavors, Dragonmarks, Talents & Expertise, Languages | 228 |
| `04-character-creation.md` | Character Creation flowchart + Choice Guidance | 162 |
| `05-combat-procedure.md` | Combat Procedure (Quick Reference) only | 180 |
| `06-inventory-items.md` | **New this pass.** Item Slots, Weapons (tiers + named list), Weapon Proficiency, Weapon Keywords, Armor, Pricing, Critical Hits, Toolkits & Usage, Magic Items — clean rules, with all design rationale collected into a Design Notes appendix at the end rather than interleaved | 221 |
| `07-economy-guard-wounds-zones-initiative.md` | Economy, Guard & Wounds, Healing, Zones, Combat Model Selection, Initiative | 275 |
| `08-surprise-morale-exploration.md` | Surprise & Ambushes, Morale, Reaction Check, Travel & Exploration | 90 |
| `09a-enemy-design.md` | Enemy Design Philosophy, full Enemy Generation Procedure | 218 |
| `09b-grit-maneuvers-worked-examples-advancement.md` | Wayfarer Grit Maneuvers, Worked Combat Example, Highwater Road Case Study, Advancement | 237 |
| `10-glossary-open-threads.md` | Glossary, Open Threads | 142 |

**This split was reorganized this pass** — Inventory & Items pulled out of what used to be a combined Combat file into its own dedicated file (and its own site page), matching the master doc's own new section structure rather than the old, more scattered one.
**This split was reorganized this pass** — Inventory & Items pulled out of what used to be a combined Combat file into its own dedicated file (and its own site page), matching the master doc's own new section structure rather than the old, more scattered one. This split now also follows the site's actual page order (Foundations → Character Creation → Backgrounds → Archetypes → Magic → Combat → Inventory & Items → Exploration → Enemy Design → Advancement → Glossary), rather than diverging from it.

**Note on cross-references:** several sections reference others by name ("see Weapon Proficiency," "see Combat Model Selection") — these still work as plain-text pointers to a section title, they just no longer resolve to an anchor link within the same file. Not broken, just not clickable across file boundaries.

**This split is not reflected on the live site** (`docs/` still reads from one conceptual document, organized by its own page structure) — it exists purely so I can reliably read the full ruleset from GitHub going forward.
