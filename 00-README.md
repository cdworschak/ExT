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
| `01-foundations.md` | Core Reskin, **Core Resolution**, Magic Baseline, Overcasting, Spellcasting Procedure, Spell Names | 439 |
| `02-backgrounds.md` | Background Creation Procedure, all 45 Backgrounds | 94 |
| `03-archetypes-dragonmarks-languages.md` | Archetypes, Wandslinger, Leverage, Contingency, Agent Combat Techniques, Agent Flavors, Dragonmarks, Talents & Expertise, Languages | 208 |
| `04-character-creation.md` | Character Creation flowchart + Choice Guidance | 180 |
| `05a-combat-resolution-weapons-items.md` | Combat Procedure, Weapons & Damage, Magic Items | 298 |
| `05b-economy-guard-wounds-zones-initiative-armor.md` | Economy, Guard & Wounds, Healing, Zones, Combat Model Selection, Initiative, Armor & Encumbrance | 297 |
| `06-surprise-morale-exploration.md` | Surprise & Ambushes, Morale, Reaction Check, Travel & Exploration | 90 |
| `07a-enemy-design.md` | Enemy Design Philosophy, full Enemy Generation Procedure | 216 |
| `07b-grit-maneuvers-worked-examples-advancement.md` | Wayfarer Grit Maneuvers, Worked Combat Example, Highwater Road Case Study, Advancement | 207 |
| `08-glossary-open-threads.md` | Glossary, Open Threads | 136 |

Every file sits at 42KB or under.

**Note on cross-references:** several sections reference others by name ("see Weapon Proficiency," "see Combat Model Selection") — these still work as plain-text pointers to a section title, they just no longer resolve to an anchor link within the same file. Not broken, just not clickable across file boundaries.

**This split is not reflected on the live site** (`docs/` still reads from one conceptual document, organized by its own page structure) — it exists purely so I can reliably read the full ruleset from GitHub going forward.
