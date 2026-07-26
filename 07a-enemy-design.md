## Enemy Design Philosophy

**Core rule: every check defaults to target 12, always — the same target PCs use.** Don't hand-author bespoke to-hit numbers per monster. Instead, shift the *target* by a flat tier modifier, and apply the same tier logic to Guard/damage as needed. **To be explicit: 9, 12, and 15 are named anchor points (the two outer bounds and the midpoint of the ±3 scale), not the only three legal values** — 10, 11, 13, and 14 are just as valid a target as any of the three named tiers; see the full granular table under Scenario Target Modifiers below for every intermediate step and its exact percentage.

| Tier | To-hit target modifier | Effective target |
|---|---|---|
| Weak | −3 | 9 |
| Standard | +0 | 12 |
| Strong | +3 | 15 |

**To-hit tier and toughness are independent axes.** A creature can be easy to hit but very tanky (a lumbering siege-construct: Weak to-hit target of 9, but Guard 20 and 3 Wound slots) — these aren't contradictory, because "easy to hit" and "hard to put down" are different design knobs. This is exactly how the boss below (Rustmaw) is built: big and slow, so PCs land hits easily, but its sheer Guard pool and multiple Wounds mean landing a hit isn't the same as winning.

### Encounter Level Scaling

**The problem, confirmed with data:** a Monte Carlo of the Highwater Road ambush (300 trials/level, levels 1–8, PCs leveled per Advancement) showed PC zero-death rate climbing from 58% at level 1 to 96.7% by level 8, while **average enemies killed stayed dead flat (3.95–4.15 out of 9) at every single level.** That flat line is the tell: Kolt's Raiders check morale against a fixed Morale score that never scales, so the fight always ends at roughly the same casualty count regardless of party power — a level-8 party doesn't fight harder, it just steamrolls faster with almost no risk. Without enemy scaling, any encounter written at one level quietly becomes solved content a few levels later.

**Restructured around a fractal model** — attack bonus was dropped entirely as a monster stat. The reason PCs need a *bonus* rather than a target is that their target is fixed at 12 and the bonus is the changeable part across a whole sheet of different checks; a monster is the opposite — its target is the changeable part per-monster, with nothing else on its sheet that needs to stay consistent with a bonus. Since `2d10+bonus ≥ 12` and `2d10 ≥ 12−bonus` are the exact same math, this is a pure notation simplification, not a rules change — every number below still produces identical results to the original attack-bonus formulas, just with one fewer derived value to track.

**Every monster gets one Base Target**, used by default for three separate purposes — being hit, attacking, and resisting Effect spells — shifted individually only when a specific monster's concept calls for an exception (see Enemy Generation Procedure). Damage is now a flat stated number, no longer derived from an accuracy bonus doing double duty (that dual-role was specifically a PC design choice — see Weapons & Damage — with no reason to import it onto monsters).

| | Formula | Cadence |
|---|---|---|
| Mook Guard | base + 1 per milestone reached | same as PC (2,4,6,8) |
| Mook damage | base + 1 per **4** milestones (effectively negligible until late) | quarter-rate |
| Base Target (harder to hit/attack/resist) | base + 1 per **2** milestones, capped at milestone 3 | half-rate, capped |
| Boss Guard | base + 1 per milestone reached | same as PC |
| Boss damage | base + 1 per **2** milestones | half-rate |
| Boss Wound slots | +1 (to 3) once 3+ milestones reached (~level 6) | milestone-gated |

**Why damage scales slower than Guard, and this isn't arbitrary:** early testing scaled the old attack-bonus (which fed both hit chance and damage) at full PC rate and it overshot badly — zero-death rate *fell* with level instead of stabilizing, because that dual-role number compounded on the attacker's side in a way Guard's single role never did on the defender's. Now that damage and Target are fully separated, damage keeps the same slower half-rate cadence the old attack bonus needed, and Target gets its own cap independently — same tested math, cleanly split rather than coupled.

**The calibration journey, condensed:** getting here took three rounds of tuning. Guard+attack scaling alone (per the table above) landed close but left level 8 as a genuine outlier (crashing to 55.7–71% depending on how the target-shift lever was capped). The actual cause turned out to be structural, not a tuning problem: named enemies gain a third Wound slot at milestone 3+ (level 6), but PCs capped at two Wound slots forever — so bosses got more persistent from level 6 onward while PC survivability depth stood still. **Giving PCs a matching third Wound slot at level 8** (see Advancement) fixed it directly rather than papering over the symptom. That calibration then had to be redone a second time after the Movement rule was corrected (see Zones & Range → Movement) — move+act made enemies symmetrically more dangerous too, and the original 8-mook encounter size proved structurally too large under the corrected rule. **Reducing to 6 mooks (3 Blade + 3 Bow) plus modestly softened boss base stats** (Guard 7 instead of 12, attack +1 instead of +2, before scaling) closed the gap.

**Current final numbers** (6 mooks, move+act, third Wound slot at level 8, all three enemy-side levers active):

| Level | 0-Death Rate |
|---|---|
| 1 | 52.7% (no scaling applies yet, consistent across every version of this test) |
| 2–3 | 69.0% |
| 4–5 | 83.7% |
| 6–7 | 84.3% |
| 8 | **74.0%** — the level-8 fix still holds under the corrected movement rule |

**Enemy count is now a real, confirmed design lever in its own right** — not just enemy stats. Reducing from 8 to 6 mooks did more to fix the move+act lethality spike than any amount of individual-enemy stat tuning could have, which sets up directly into the Multi-Action findings below: how many independent actors an encounter has matters as much as, or more than, how strong any one of them is.

### Enemy Generation Procedure

A start-to-finish checklist for building any new enemy, from a disposable mook to a named boss, ending with the same Encounter Level Scaling math applied consistently.

**1. Mook or Named?**
- **Mook** (disposable, dies in a hit or two, no individual stakes) — no Wound slot, ever (see Mook Rule). Guard alone.
- **Named** (a boss, a lieutenant, anyone meant to matter) — full Guard→Wound→Scar chain, same as a PC.

**2. Pick one Base Target.** This single number covers defending (PCs' to-hit rolls against it), attacking (its own attack rolls), and resisting (Effect spells targeting it) by default — one number, not three formulas. Use the full granular scale, not just the three named anchors, if a monster should sit between them:

| Tier | Base Target |
|---|---|
| Weak | 9 |
| Standard | 12 |
| Strong | 15 |

**3. Pick baseline Guard** (rough starting points, before any scaling):

| Role | Guard |
|---|---|
| Mook | 4–6 |
| Named, mid-tier threat | 8–12 |
| Named, real boss | 12–20+ |

**4. Pick a weapon tier** — Light/Medium/Heavy/Massive. Same damage-die table as PCs (Weapons & Damage), but **Massive is monster-exclusive** — Weapon Proficiency explicitly locks PCs out of it, so this fourth rung only ever applies here, not to anything a PC could pick up.

**5. Pick a flat damage bonus** — no longer tied to accuracy the way a PC's stat bonus is. Mooks: +0 to +1. Mid-tier named threats: +2 to +3. Real bosses: +4 (Rustmaw's benchmark).

**6. If Named, pick Wound slots** (1–3; Kolt started at 2, Rustmaw at 3) — an independent axis from Guard, controlling fight length and danger separately from raw toughness.

**7. Note any exceptions.** Most monsters need none — the Base Target and flat damage cover everything. When a monster's actual concept calls for deviating on just one of its three Target uses, shift *that one use* on the same granular scale and write a one-line reason, rather than redesigning the stat block:
- **Defend exception** — easier or harder to land a hit on than its attack/resist numbers suggest (Rustmaw: Target 9 to hit despite Guard 20 — big and slow, easy target, but hard to actually put down).
- **Attack exception** — hits differently than it defends (an Ogre: Target 15 to hit, but only Target 12 to land its own swing — tough and slow-witted, not tactically sharp).
- **Resist exception** — resists Effect spells differently than physical attacks (a Lich: Target 18 to resist mind-affecting magic specifically, well above its normal 15).
- **A fourth category beyond target-shifts: damage-taken and immunity exceptions.** Not every deviation is a target number. A swarm might take half damage from single-target weapons (only Blast-form attacks hit it properly); a ghost might be flatly immune to non-magical weapons (auto-miss regardless of roll, not just a harder target). These are stated directly as plain-text exceptions, not folded into the granular scale.
- **A fifth category: Shock (a monster-specific trait, not a universal rule).** Tested as a core combat mechanic applying to all melee misses and cut for being too much table overhead for the value it delivered outside mob fights — but the concept earns its keep as a **named trait a specific monster can carry**, applied only when the GM wants that creature to feel genuinely relentless. A monster with Shock deals **minimum chip damage even on a miss with melee attacks** — Light weapons: 1, Medium/Heavy: 2 — **gated by the target's armor tier** (Light armor: always vulnerable; Medium: blocks Light-weapon Shock; Heavy: blocks everything but Heavy-weapon Shock). Never applies to ranged or magic. Confirmed by Monte Carlo to meaningfully amplify danger specifically in multi-attacker fights (roughly quadrupling risk at 3 simultaneous Shock-wielding attackers) with negligible effect in a 1-on-1 — exactly why it belongs on select monsters rather than as a blanket rule everyone tracks on every roll.

**8. Apply Encounter Level Scaling for the target party level.** Count milestones reached (levels 2/4/6/8 → 0–4 milestones), then apply:

| | Formula |
|---|---|
| Guard | base + 1 per milestone |
| Damage (mook) | base + 1 per 4 milestones |
| Damage (named) | base + 1 per 2 milestones |
| Base Target (harder to hit/attack/resist) | base + 1 per 2 milestones, capped at milestone 3 |
| Wound slots (named) | +1 once 3+ milestones reached |

**Worked example — a level-6 party (3 milestones):**

A **Droaam Ogre-Kin Enforcer** — a named lieutenant. Base Target: Strong (15), with an **attack exception at Target 12** (tough and slow-witted, hits less precisely than it defends). Baseline Guard: 14. Weapon: Heavy (1d8), damage bonus +3. Wound slots: 2.

Scaled for 3 milestones: Guard 14+3=**17**, damage +3+1=**+4**, Base Target 15+1=**16** (its attack exception scales alongside it: 12+1=**13**), Wound slots stay at 2 (GM's call whether the 3+ milestone bump to 3 applies to a monster whose *starting* Wound count was already below the threshold that triggered it for Kolt). Final stat line: **Guard 17, 2 Wound slots, Target 16 to hit/resist, Target 13 to attack, deals 1d8+4.**

### Monster Gallery (fractal stat blocks, unscaled level 1–3 baseline)

**Worked examples of the Enemy Generation Procedure above, not a complete bestiary.** Anything not listed here can be built the same way — pick Mook/Named, a Base Target, Guard, weapon, damage, Wound slots, and any exceptions.

Format: Name — Role — Base Target — Guard [— Wound slots if Named] — Weapon (tier, damage bonus) — Exceptions.

**Mooks (no Wound slot):**
- **Goblin** — Mook — Target 9 — Guard 5 — Light (1d4+0) — no exceptions
- **Zombie/Skeleton (horde)** — Mook — Target 9 — Guard 6 — Light/Medium (1d4–1d6+0) — never checks Morale, mindless
- **Mimic** — Mook — Target 9 — Guard 8 — Medium (1d6+1) — Surprise check target shifted to 15 while disguised (a Scenario Target Modifier, not a monster-stat exception)

**Mid-tier:**
- **Orc** — Mook/light Named — Target 12 — Guard 8 — Medium (1d6+1) — attack exception: Target 10, hits harder than it defends
- **Bugbear** — Mook — Target 12 — Guard 9 — Heavy (1d8+2) — no stat exception; always opens from ambush (Surprise, not a stat)

**Named threats, Strong baseline:**
- **Ogre** — Named — Target 15 — Guard 14, 2 Wound slots — Massive (1d10+3) — attack exception: Target 12, tough but slow-witted; **Shock (Massive counts as Heavy for this purpose)** — an Ogre swings with such raw overwhelming force that even a miss lands like a glancing blow
- **Troll** — Named — Target 15 — Guard 16, 3 Wound slots — Massive (1d10+3) — regeneration: a closed Wound reopens at the start of its next turn unless the hit that closed it was fire or acid

**Multi-Action solo predators (no spellcasting):**
- **Owlbear** — Named, Multi-Action +1 — Target 12 — Guard 16, 2 Wound slots — Heavy (1d8+3) — no exceptions
- **Displacer Beast** — Named, Multi-Action +1 — Target 15 — Guard 14, 2 Wound slots — Heavy (1d8) ×2, one per tentacle — the two-tentacle attack *is* its bonus action, no separate grant needed

**Epic solo bosses (Multi-Action + Legendary Resistance):**
- **Young Dragon** — Named, Multi-Action +2 — Target 15 — Guard 24, 3 Wound slots — Massive bite/claw (1d10+4) — resist exception: Target 18 (ancient magic-soaked hide); Blast breath weapon on Recharge 4 instead of a normal attack; 3 free resists/encounter
- **Lich** — Named, Multi-Action +2 — Target 15 — Guard 20, 3 Wound slots — casts Attack/Effect spells (INT) instead of a weapon — resist exception: Target 18 (undead mind); 3 free resists/encounter; phylactery makes death non-permanent (campaign-level, not a combat stat)
- **Beholder** — Named, Multi-Action +3 (one more than standard — its whole concept is doing several independent things at once) — Target 15 — Guard 22, 3 Wound slots — eye rays, various — central eye can suppress one enemy Effect spell per round in range (a unique ability, not a fractal exception)

**Damage-taken/immunity exceptions (the fourth category):**
- **Swarm (rats/insects)** — Mook-adjacent — Target 9 — Guard 8 — Light (1d4) as Blast (its genuine intended use case) — takes half damage from any single-target weapon; **Shock** — countless small bites land regardless of any single miss, the natural fit for a swarm specifically
- **Ghost/Wraith** — Named — Target 15 — Guard 14, 2 Wound slots — Medium (1d6+2) — immune to non-magical weapons entirely: auto-miss regardless of roll unless the attacker's weapon is magical or dust-touched

### Multi-Action (for true solo bosses)

**Now fully decoupled from Blast** — earlier drafts treated the two as a combined "make bosses scarier" toolkit; they don't interact and are unrelated tools. Blast is a damage-shape option available to any suitably-themed item, spell, or monster (see Spell Names and Weapon Keywords) — not a danger-scaling lever, confirmed below. Multi-Action is the actual fix for solo-boss action economy and needs its own scaling, addressed here.

**The problem, confirmed with data:** a solo boss — even one scaled all the way up to Rustmaw-tier stats (Guard 20+, damage +4, 3+ Wound slots) — is drastically safer than a mook swarm against a full party. A Monte Carlo of a 5-PC squad against a solo scaled boss with no support produced **90–99.7% zero-death across every level 1–8**, dying in an average of 2.6–3.0 rounds. **This isn't a stat problem, it's an action-economy problem**: five PCs act every round against one enemy who can only ever threaten one PC per round back, no matter how tough its stat block is.

**Blast doesn't fix it — confirmed and no longer treated as a candidate.** Giving the solo boss an area attack (hitting every PC sharing its zone) was tested in isolation and produced no change at all — still 100% zero-death, identical to a single-target boss. Blast only *redistributes* the boss's existing damage output across more targets; it doesn't increase how much total damage the boss deals before it dies.

**Multi-Action, properly scaled — the real fix.** Give a true solo boss (GM's call on which named threats qualify) **bonus actions tied to the same milestone cadence as Encounter Level Scaling**, not a flat number:

| Level | Milestones | Bonus Actions | Total Actions/Round |
|---|---|---|---|
| 1–3 | 0 | +1 | 2 |
| 4–5 | 2 | +2 | 3 |
| 6–7 | 3 | +2 | 3 |
| 8 | 4 | +3 | 4 |

Formula: **bonus actions = 1 + (milestones ÷ 2)**, rounded down. An earlier flat "+2 always" test produced a curve that got *safer* with level (54.4% → 77.5% → 87.9%) — backwards from what a GM wants. Scaling the bonus-action count itself fixes this into a flat, consistent band:

| Level | 0-Death Rate (scaled Multi-Action) |
|---|---|
| 1–2 | 81.4–81.9% |
| 4–5 | 80.9% |
| 6 | 74.1% |
| 8 | 74.1% |

**Mook count is a real, usable GM dial for tuning a Multi-Action boss fight up or down, with fine granularity** (level 4, scaled boss held fixed):

| Mooks added | 0-Death Rate |
|---|---|
| 0 | 82.6% |
| 1 | 74.9% |
| 2 | 58.8% |
| 3 | 32.2% |
| 4 | 15.9% |

Each additional mook swings danger substantially — a GM wanting to nudge a solo-boss fight harder or softer can add or remove one mook at a time rather than re-tuning the boss's stats, and the effect compounds because every extra independent actor forces the party to split attention (see the original hybrid-test finding: action economy, not raw numbers, drives this).

**Important calibration caveat, confirmed by testing randomized (less-optimized) PC builds against the same encounters:** every percentage in this whole document — including the numbers above — was tuned against a deliberately well-built reference squad (thoughtful Guard Stat choices, sensible archetype/armor pairing). Testing the same encounters against randomly-generated squads (varied archetype assignment, unoptimized stat placement) produced **meaningfully more lethal results at identical parameters** — at 2 mooks, 58.8% (reference squad) dropped to **33.6%** (randomized squads); at 4 mooks, 15.9% dropped to **9.1%**. A table with newer players or less-optimized builds should expect real play to run measurably more dangerous than these numbers suggest at face value — the calibration isn't build-agnostic, and that should be stated plainly rather than assumed.

### Legendary Resistance (and a Resistance stat that was missing entirely)

**A true solo boss has a second problem beyond raw action economy: getting shut down by Effect-spell control before it acts at all.** Since Spell Resolution puts the resistance check on the *target's* own stats (not the caster's to-hit roll), a boss's resistance was already partially self-solving in theory — but this had never actually been tested, so it was Monte Carlo'd directly rather than assumed fine.

**Confirmed as a real problem, not imported D&D baggage:** against a single PC spamming Effect-spell lockdown every round, a well-built boss (resist Target 16, equivalent to the old +4 framing) is fine — locked out of acting only 21.0% of rounds. **Against 2–3 dedicated controllers, the same boss gets locked out 37.5–51.3% of rounds** — over a third to half the fight, doing nothing at all.

**The fix: a Legendary Resistance-style mechanic — a true solo boss auto-succeeds its first 3 failed resistance checks per encounter.** Tested against the same scenarios, 3 free resists consistently pulls lockdown back into a reasonable range:

| Controllers | Boss +4, 0 free resists | Boss +4, 3 free resists |
|---|---|---|
| 1 | 21.0% locked | 1.0% locked |
| 2 | 37.5% locked | 9.3% locked |
| 3 | 51.3% locked | **22.4% locked** — worst case, still meaningfully better |

**A second, genuinely new gap this surfaced: bosses never had a defined resist Target at all.** Encounter Level Scaling only scaled Guard and the (now-retired) attack bonus — nothing governed how well a boss resists Effect spells. This matters because an unscaled boss (resist Target 12, no exception) gets locked down 55–91% of rounds **even with all 3 free resists spent** — the free resists just delay the inevitable rather than fixing the underlying odds once they run out partway through a longer fight. **Fix: a boss's resist Target is just its Base Target, scaled like everything else** — unless a specific monster has a resist exception (a Lich's undead mind, a Dragon's magic-soaked hide), it uses the same shared number as its defend and attack Targets, no separate track needed.

**Net rule for a true solo boss:** resist Target scaled the same as its Base Target, **plus 3 free auto-successes per encounter** on top. Both apply only to named threats built with Multi-Action — a mook was never meant to shrug off control, and shouldn't.

### Scenario Target Modifiers

**The enemy-tier logic above generalizes to any check, not just attacks.** Terrain, lighting, weather, or circumstance can shift the target for *any* roll the GM calls for, using the exact same additive-to-12 logic — one consistent rule instead of a special case per situation.

**Two levers only, never stacked as arbitrary bonuses on the roll itself:**
- **Target shift** — for baseline difficulty tiers (an enemy's toughness, a scenario's inherent hardness).
- **Advantage/Disadvantage** — for situational swings within an otherwise-normal check (partial cover, being warned by an ally, fighting while Rattled).

**Full granularity — not limited to ±3.** The Weak/Standard/Strong tiers above are just three named anchor points on a continuous scale; every integer shift from −3 to +3 already has an exact, known percentage, because a target shift is mathematically identical to the stat-bonus table in Core Resolution (shifting the target down by 1 is the same math as a +1 bonus at a fixed target). Nothing new needs calculating — this was always available, just never shown as a full scale:

| Shift | Target | Success rate (vs bonus 0) | Suggested use |
|---|---|---|---|
| +3 | 9 | 72% | Weak tier / a serious scenario advantage (e.g. Cantrip-tier "this should just work") |
| +2 | 10 | 64% | A clear but not overwhelming edge — good lighting, a well-prepared ambush spotter |
| +1 | 11 | 55% | A minor, single-factor advantage — nothing dramatic |
| 0 | 12 | 45% | Standard tier — the default, no special circumstance |
| −1 | 13 | 36% | A minor complication — bad light, mild distraction |
| −2 | 14 | 28% | A real handicap — thick fog, genuinely awkward footing |
| −3 | 15 | 21% | Strong tier / "this is genuinely hard" — the Highwater Road ambush's spot check used this |

**Guidance on picking a shift:** reach for ±1 or ±2 when only one or two factors are actually in play (a single terrain feature, one specific advantage) — jumping straight to ±3 for something that's only mildly harder makes every check either trivial or brutal with nothing in between. Save ±3 for situations that are genuinely one of the three named tiers, or where multiple stacking factors would have justified ±1+±2 anyway (in which case, just shift once by the combined total rather than stacking multiple separate shifts — see the "roll should only ever add the character's own stat bonus" rule above; the same discipline applies to not stacking multiple target shifts on one check).

**A roll should only ever add the character's own stat bonus.** External difficulty lives in the target number or in Adv/Disadv, never as a second flat modifier bolted onto the dice total — this keeps every roll readable at a glance (2d10 + stat vs a single target) no matter how many situational factors are in play.

Example: a densely-covered ambush shifts the spot-check target from 12 to 15 (scenario modifier), while a party member who's already been warned by an ally rolls that same check at Advantage (situational) — both apply to the same roll without either one touching the other.

---

