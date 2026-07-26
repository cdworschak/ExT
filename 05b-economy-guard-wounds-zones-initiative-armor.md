## Economy

**Baseline: standard D&D/Eberron assumptions, nothing reinvented.** Unskilled day labor: **2 silver pieces/day**. Standard arrow: **~5 copper each**. This is the anchor everything else gets checked against.

**Shards are two separate economic goods, not one — this is existing Eberron lore, not new invention.** House Cannith's entire shard-cutting industry exists specifically because raw and refined dragonshard material are worth wildly different amounts.

- **Raw shards** — loose, unrefined dust, bought in any market. Powers **Cantrip** (free, unconsumed) and **Spark tier**.
- **Refined shards** — cut and bound, real magecraft-grade material. Powers **Minor tier and above**, plus all permanent Magic Items.

**Raw shard price: 5 copper — matching one arrow exactly, on purpose.** A single flat price for either tier doesn't work: at a "big purchase" anchor (10gp), a 3-shard Shard Bolt cast costs roughly 600 arrows' worth of ammunition — completely unplayable for something meant to be cast casually and often. Splitting the economy fixes this directly:

| | Cost | Comparable to |
|---|---|---|
| 1 raw shard | 5cp | 1 arrow |
| Shard Bolt, full 3-shard cast | 15cp | 3 arrows |
| 1 refined shard | 10gp | (validated below) |

**This also gives Wandslinger a real, distinct economic texture, not just a mechanical one.** A Wandslinger's entire build only ever touches raw shards — capped below Minor, they never pay refined-shard prices at all. Clean thematic split: the gish dabbles in common street-market dust, the real caster deals in House Cannith's expensive refined product.

**Refined shard price validated against every existing cost in this doc, not picked to fit any one of them:**

| Reference | Shards | Gold (×10) | Feel |
|---|---|---|---|
| Minor tier (avg) | ~7 | ~70 gp | A real specialist's fee — hiring a magewright for a serious one-off job |
| Moderate tier (avg) | ~14 | ~140 gp | Substantial — what a modestly wealthy merchant might spend once |
| Major tier (avg) | ~52.5 | ~525 gp | Genuinely rare — "breaks the laws of nature" should cost like it |
| Mythic tier (avg) | ~350 | ~3,500 gp | A fortune — only kingdoms or major Houses casually afford this |
| Rare Weapons (60–135) | 60–135 | 600–1,350 gp | Lands solidly in D&D's own "rare magic item" price band (~500–5,000gp) |
| **Starting wealth (200gp)** | 20-shard equivalent | **200 gp** | **Matches standard 5e starting character wealth almost exactly — this wasn't tuned to hit that number, it just fell out of the labor-wage anchor, which is a strong sign the ratio is right rather than arbitrary. Now given as flexible gold, not mandatory shards — see the note below the table.** |

**Starting wealth: 200gp, not 20 mandatory shards.** An earlier draft handed every character 20 refined shards regardless of archetype — fine for a Syberist who'll actually spend them, but forces a pure martial Wayfarer with no casting at all into holding a resource they may never use. **Every character starts with 200gp (or 800ep, matching the setting's actual namesake denomination) and spends it as they choose** — refined shards at 10gp each for anyone who wants a casting reserve or a head start toward a permanent item, or ordinary gear, weapons, and starting supplies for anyone who doesn't. A Syberist will likely convert most of it to shards; a Wayfarer might buy almost none. Raw shards for day-to-day Cantrip/Spark use are cheap enough (5cp) to just be bought as needed regardless.

**Naming aside, purely flavor:** *The Electrum Archive* is titled after electrum specifically — a real coin denomination, between silver and gold. A table wanting to lean into that could price refined shards in electrum instead of gold (1 shard = 20ep, identical value) purely to tie the game's actual economy to its own name.

---

## HP: Guard + Wounds

This sits **on top of** TEA's confirmed mechanic: at 0 HP/Guard-and-Wounds-exhausted, roll a d6 — 1–3 dies, 4+ faints and rolls on the Scar table (permanent disadvantage).

### Scar Table (d10)

**Honest flag: reconstructed from the general shape recalled from the source review (permanent injury, d10, narrative results), not a verbatim re-verified transcription** — the source PDF isn't actively accessible in this session to confirm exact wording. Built in the same Eberron-reskin spirit as everything else here; worth a direct re-check against the source PDF in a future session if exact fidelity matters.

**Softened from an earlier draft, and made genuinely removable — full blanket Disadvantage, permanent with no path back, didn't fit a heroic builds game once the accumulation math was actually checked.** Most fights never even reach a single character's first Death's Door check (per every Monte Carlo calibration in this doc), so a Scar only ever comes up at the genuine worst-case moment — Guard at 0, all Wound slots exhausted, hit again. Rare by design. But an uncapped, unhealable penalty stacking indefinitely over a campaign was still the wrong shape even at that rate.

- **Effect: a target shift on the relevant check type, not Disadvantage** — +1 to the target for a broad, narrow-scope disability, +2 for something genuinely severe. Reuses the same granular scale already established (Enemy Design Philosophy's Weak/Standard/Strong shifts) rather than a new math system.
- **Removable through real effort** — a Major-tier magical working (a Jorasco chirurgeon, a Silver Flame priest) or a significant in-fiction quest resolving the underlying trauma. GM's call which fits the table. Not permanent, not free — a real narrative and mechanical investment either way.

| d10 | Scar | Shift |
|---|---|---|
| 1 | **Shattered Leg** — Agility/DEX-based movement checks | +1 |
| 2 | **Sickly** — CON-based endurance/resistance checks | +1 |
| 3 | **Chronic Wound** — permanent −1 to max Guard (unchanged — a flat number, not a check-based effect) | — |
| 4 | **Spirit-Marked** — WIS-based fear/willpower checks; touched by something beyond, fitting Eberron's planar themes | +2 |
| 5 | **Scarred** — CHA-based first-impression checks | +1 |
| 6 | **Ringing Ears** — Perception/hearing-based checks | +1 |
| 7 | **Trembling Hands** — fine-motor/precision checks (lockpicking, steadying a ranged shot) | +2 |
| 8 | **Haunted** — resisting fear or despair specifically tied to the event that caused it | +2 |
| 9 | **Weakened Grip** — STR-based grip checks (climbing, holding on, resisting a disarm) | +1 |
| 10 | **Old Wound Aches** — a check type of the player's choice, tied to weather or exertion — a small piece of player agency in an otherwise GM-facing table | +1 |

Each Scar still means something real happened — a genuine piece of a character's history — but it's a real, weighable cost with a real way back, not a slow-motion accumulation toward being unplayable.

### Guard
- Your parries/luck/adrenaline buffer. All normal damage hits Guard first.
- **Formula:** `Guard = 4 + CON bonus + Wayfarer bonus (+2) + armor`, **floor of 1** regardless of how negative CON is. (CON is the default — see **Guard Stat** below for choosing a different stat entirely.)
- Base was raised from 2 to 4 so the floor rule actually matters — at base 2, a −3 CON character floored at 1 Guard was functionally identical to 0 Guard. At base 4, most characters land naturally in the 2–9 range, and even a terrible CON roll leaves a real (if thin) buffer.
- Fully restored after a Turn (10 minutes) spent resting — deliberately generous; this is the fast-recovery layer.
- **Guard cannot go below 0** during a fight. Overflow damage is capped, not carried into extra Wound boxes beyond the single Wound triggered by the hit that empties Guard.

### Guard Stat (chosen at character creation)

**Guard doesn't have to be fed by CON.** At creation, pick any one of the six stats to plug into the Guard formula in place of CON: `Guard = 4 + [chosen stat bonus] + Wayfarer bonus (+2) + armor`. Same floor-of-1 rule applies regardless of which stat is chosen. This is a real identity choice, not just a number swap — it defines *how* a character avoids harm:

| Guard Stat | Concept |
|---|---|
| CON — Endurance | Classic tank: physically tough, shrugs off blows. |
| DEX — Reflexes | Dodges and weaves; full hits become glancing ones. |
| STR — Brute Force | Physically blocks and overpowers incoming attacks. |
| INT — Tactics | Reads the fight, positions so blows land where they hurt least. |
| WIS — Awareness | Danger sense; flinches away before the worst lands. |
| CHA — Presence | Force of personality throws off an attacker's aim and timing. |

**New constraint, reversing an earlier draft: Guard Stat must differ from your weapon stat, cast stat, *and* Wandslinger stat if applicable — all locked together at character creation.** A Syberist's Guard Stat can't be the same stat as their tradition's cast stat (an INT Shardbound needs a genuinely different stat feeding Guard); a Wayfarer or Agent's Guard Stat can't match whichever stat their starting weapon uses, **and if they've taken Wandslinger, it can't match that stat either.** This last piece closes a real loophole caught during testing: Wandslinger's casting stat is chosen freely ("whatever fits the concept"), and without this explicit inclusion, a character could pick Guard Stat ≠ weapon stat (satisfying the letter of the rule) while secretly setting their Wandslinger stat *equal* to their Guard Stat — quietly re-achieving the exact concentration the rule exists to prevent, just laundered through a second casting source instead of the primary one. This directly reverses an earlier allowance — a Monte Carlo comparison confirmed that concentrating one stat into both Guard and offense/casting is mechanically stronger than splitting them, which is exactly *why* it's now disallowed rather than recommended: the finding didn't stop being true, it just became the reason to force real stat diversity instead of letting one mega-stat carry a build alone.

**Why this doesn't create a mid-campaign problem:** Guard Stat is already permanent once chosen at creation (see below) — the restriction only ever checks against the weapon/cast stat that existed *at that single moment*. A character who later swaps weapons, or a Cannith-Touched who re-infuses a different item, never retroactively breaks anything; Guard Stat was never tied to "current weapon," only to the creation-time snapshot.

**Retroactive note:** the doc's own worked examples (Aeshaan throughout the Combat Model Selection tests and the Highwater Road Ambush Case Study specifically) were built with Guard Stat = cast stat, predating this rule — those specific numbers reflect the old, more concentrated build and would be somewhat more fragile if rebuilt under the current restriction, not less; her second-highest stat (CON, already a dump stat in that build) would become her forced Guard Stat instead of INT.

| Guard Stat | Concept |
|---|---|
| CON — Endurance | Classic tank: physically tough, shrugs off blows. |
| DEX — Reflexes | Dodges and weaves; full hits become glancing ones. |
| STR — Brute Force | Physically blocks and overpowers incoming attacks. |
| INT — Tactics | Reads the fight, positions so blows land where they hurt least. |
| WIS — Awareness | Danger sense; flinches away before the worst lands. |
| CHA — Presence | Force of personality throws off an attacker's aim and timing. |

**One remaining constraint:**
- **The Heavy/Medium armor CON requirement (Armor & Encumbrance, Lever 1) stays tied to actual CON specifically**, regardless of Guard Stat choice — that requirement is about physically bearing the weight, a different question from what a character's Guard represents. A DEX-Guard character with poor CON is still locked out of Heavy armor.

This extends the "reward non-primary stats" principle (already built out for Wayfarer Grit Maneuvers) straight into the core HP mechanic — a CHA-Guard Wayfarer leaning into Guardian's Challenge plays like a battlefield commander; a WIS-Guard Syberist plays like a wary, hard-to-catch-off-guard caster; an INT-Guard Agent plays like a tactician who's always a half-step ahead. Same archetype, meaningfully different feel, purely from this one choice plus stat placement.


### Wounds
- **Only 1 Wound slot exists at character creation. A second slot unlocks at level 4, a third at level 8** (see Advancement) — not from turn one, to keep early play lethal-feeling without an early death spiral. The third slot specifically corrects an asymmetry with scaled named enemies, which gain their own third Wound slot at level 6 (see Encounter Level Scaling) — without a matching PC slot, levels 6–8 fights against scaled bosses ran measurably more dangerous, confirmed by Monte Carlo.
- **Wounds cost Guard, not stats.** An open Wound reduces **max Guard by 2** until healed. Named-stat Wound penalties were tried and rejected — they let players route the cost onto a dump stat, turning the penalty into a formality. Guard is universal; every build needs it, so the cost can't be built around.
- **Immediate cost:** the roll immediately following the hit that opens a Wound is made with **Disadvantage** ("Reeling"), then clears — plus roll a d6 on the **Wound Complication table** below for a one-time, non-stacking consequence.
- **Current Guard refills to the new (reduced) max when a Wound opens — floor of 1, never lower.** Example: Guard 5 takes 6 damage — 1 point overflows, triggering a Wound; max Guard drops to 3 (5−2), and current Guard **refills to 3**, not reset to 0. **This was a real gap, not a settled rule until now** — "reset to 0" had been used consistently across every Monte Carlo test in this document, but was never actually written in prose; only "max Guard reduces by 2" was ever stated. The refill reading is the correct one. **Practical impact varies by scenario, not uniform**: against an attacker whose typical hit regularly exceeds the reduced max anyway (the 6-damage/3-max example above), refilling barely changes anything, since the very next hit folds the buffer again regardless of whether it started at 0 or 3 — the fix matters most for characters facing modest, varied damage relative to their reduced Guard, not for characters already being focused down by hits that outpace their buffer. **Flagged for recalibration**: every existing zero-death percentage in this document was tested under the harsher "reset to 0" assumption; the true numbers under the corrected rule are likely somewhat safer, especially in scenarios with smaller/varied damage sources, less so in high-lethality mob scenarios where hits often already exceed reduced Guard.
- Wounds do **not** heal from resting a Turn, and **cannot be closed mid-combat by any means, magical or otherwise** — see Healing Magic below for the two-mode split that makes this work without healing becoming useless.

### Wound Complication Table (d6)

Rolled once, when a Wound opens. Deliberately **one-time effects only** — nothing here compounds with a second Wound (there's only one slot at level 1 anyway), so there's no death-spiral risk, just a sharp, felt consequence in the moment.

| d6 | Complication |
|---|---|
| 1 | **Staggered Back** — the blow throws you into an adjacent zone |
| 2 | **Grip Torn Loose** — your weapon or dragonshard focus is knocked from your hand-slot; costs an action to retrieve |
| 3 | **Gear Scattered** — a carried item (GM or player's choice, something non-essential) breaks, is lost, or spills its contents; a whetstone snaps, a waterskin bursts, a ration pouch scatters. Deliberately generic rather than caster-specific — not every character carries shards, and this should land the same regardless of build. |
| 4 | **Reeling Hard** — your Initiative order drops to last for the rest of the fight |
| 5 | **Off-Balance** — your next zone move this fight requires a DEX-equivalent check or fails |
| 6 | **Rattled to the Bone** — Disadvantage on your next **two** rolls instead of one |

This exists because a Wound that's just "−2 max Guard plus a coin-flip Disadvantage" felt hollow in playtesting — mechanically present but not *felt*. The table gives every Wound a distinct sting (melee dreads 1 and 5, everyone dreads 2/3/4/6) without adding anything that stacks or compounds.

**No stacking, explicitly.** If a character already has an active Reeling or Rattled effect pending (Disadvantage owed on a future roll) when a *new* Wound opens, the new Wound's automatic Disadvantage does not add to or extend the existing count — resolve whichever is already active, don't pile on. Taking a second Wound at all (a second −2 max Guard, a second Complication rolled) is already a severe enough consequence on its own; stacking Disadvantage durations on top would be punishing the same moment twice.

### Mook Rule (for disposable enemies)
Weak, disposable enemies (bandits, guards, etc.) get **no Wound slot at all** — once their Guard hits 0, they're down (dead/fled/out of the fight), no death-check needed. This is what makes running "4 bandits" fast instead of four miniature boss fights, and it's a deliberate asymmetry: named/important creatures (PCs, bosses) get the full Guard→Wound→Scar chain; mooks don't.

### Deprivation

**Confirmed source, ported directly, terms adapted from HP to Guard.** If a character is deprived of crucial needs (rest, food, water), they gain **Disadvantage on all checks** and **can no longer regain Guard by resting a Turn.** Deprived for three days straight and they fall unconscious, dying in a day if the condition isn't removed. To clear it: eat, drink, and rest for a full day — that rest only restores **1d6 Guard** instead of the normal full return to max.

---

## Healing Magic

**Design goal:** avoid the classic "healer only matters once someone's nearly dead" trap, while keeping Wounds meaningful rather than erasable on demand.

**Combat Mending** (in combat — costs an action + shards per normal potency tier):
- Restores Guard up to its **current max**. A Wound's max-Guard reduction stays in place — this doesn't undo that, it just refills what's left of the reduced pool.
- Cast on an ally who's about to make (or would otherwise fail) a 0-HP check: they **auto-stabilize instead of rolling** — no d6, no risk, they're just steadied.
- **Cannot close a Wound under any circumstances, mid-combat.** No potency tier or spell cost bypasses this.

**Field Dressing** (out of combat — requires a full **Exploration Turn** of safety, confirmed TEA's ~10-minute downtime unit):
- **Closes one Wound**: restores the lost max Guard and clears the Wound slot.
- Requires genuine safety (no active threat) and the healer's full dedicated attention for the Turn — they can't do this while also exploring, standing watch, etc. A Jorasco Least Mark, a real spell slot, or a mundane Healing Toolkit + an Archive-equivalent check can all accomplish this; magic is the fastest route, not the only one.
- Resting for a full day also closes all Wounds automatically, per the existing confirmed rest rules.

**Why this works:** making Guard-refill freely usable *before* someone's in danger — not gated by how close to death they are — turns healing into a proactive support tool (recharge the party's buffer mid-fight) instead of a reactive one (wait until someone's dying). Wounds staying uncloseable in combat, no matter what, keeps them genuinely consequential: a Wounded character is worse off for the rest of *this* fight and probably the next one, which is what makes Wounds feel like real injuries instead of a second Guard bar with extra steps.

**Net escalation:** Guard (fast, cheap, universal) → Wound (rare at low level, costs Guard capacity + immediate Disadvantage, slow to heal) → Scar (permanent, via the existing confirmed 0-HP table).

---

## Zones & Range

**Confirmed from source:** TEA's actual rules (0.7+ playtest) replaced tracked distances with a zone system — the battlefield is divided into a handful of zones, creatures move between adjacent zones, and creatures in the same zone can fight with melee weapons. This section is this table's specific implementation of that real system.

**Zones are centered on the characters, not fixed geography.** This is theater-of-mind, not a grid or map — a small skirmish and a battlefield-scale fight both use the same three-zone structure, because the zones describe the party's *relative* position to threats, not literal fixed distances that would need to scale with the size of the encounter. This is why three zones is enough regardless of how many combatants are involved.

**This encounter's zone line:** three zones — **Melee, Near, Far** — arranged linearly (Melee adjacent to Near, Near adjacent to Far, Melee *not* adjacent to Far).

### Movement

**Confirmed from source, corrected — this contradicted the confirmed rule until now.** *"During a Round, a character can move from one zone to an adjacent zone and perform an action."* **Move and act are both available the same Round, not an either/or choice** — a character can move to an adjacent zone and still attack, cast, or take any other action once there. An earlier draft of this doc stated the opposite ("move OR act, not both"), which was never a deliberate divergence, just an unchecked assertion that went untested against source.

**Why this matters, and why "move OR act" would have been the wrong call to keep:** under the exclusive version, a melee character chasing anything mobile needs a full Round just to close each zone gap and can never land a hit that same turn — while a ranged attacker only has to relocate once to a zone outside melee's reach and can then plink freely forever, since same+adjacent reach covers most of the board without needing to move again. That makes melee characters close to useless against any opponent willing to keep distance. Move+act fixes this directly: a melee character can close one zone *and* swing the moment they arrive, so repositioning doesn't cost a full Round of lost offense every time.

**One zone of movement per Round, maximum** — moving further requires multiple Rounds, same as always. Movement doesn't get its own separate phase; it resolves as part of a character's turn in Initiative order, same as any other action.

**Weapon reach:**

| Weapon type | Valid target zones |
|---|---|
| Melee | Same zone only |
| Ranged (bow, sling, ranged spell) / Thrown | Same zone + 1 adjacent zone |

**This was a deliberate fix, not the original design.** An earlier draft let ranged weapons hit *any* zone with no restriction, which made zones pointless — if a bow threatens the whole battlefield regardless of distance, moving and positioning stop mattering on either side. Capping ranged reach at "same + 1 adjacent" is what actually makes zones do their job: it's the mechanical answer to *why wouldn't everyone just fight at melee range* — because closing to melee is exactly as risky/rewarding as staying at range, since neither side's weapons reach the whole map.

### Disengaging

**Confirmed source rule, adapted.** Moving out of a zone while sharing it with a **melee** (non-ranged) hostile requires a successful **DEX check** (2d10+DEX vs 12). Fail, and that creature gets a **free attack** before the mover actually leaves. Ranged hostiles never trigger this — they don't need melee proximity to hit anyone anyway, so there's nothing to "disengage" from.

**This was caught as a real gap, not a deliberate omission.** Every combat run in this doc up to this point — Rivet chasing enemies across zones, archers repositioning, a Wounded character getting knocked between zones — happened with completely free, risk-free movement. Given the whole point of adding zones was to make positioning matter, testing that claim without the one rule that makes *leaving* a dangerous position risky was a real hole in the validation.

**Worked example — Rivet retreats from an active melee, 5 attempts:**

Setup: Rivet (Guard 4/10, already carrying one Wound) is fighting two Blade-bandits in the Ditch and decides to fall back to the Road rather than keep swinging.

| Attempt | Roll | Outcome |
|---|---|---|
| 1 | 14 vs 12 | **Success** — clean escape, no cost |
| 2 | 4 vs 12 | Fail → free attack rolled 8 vs 12 → **missed** |
| 3 | 15 vs 12 | **Success** — clean escape |
| 4 | 10 vs 12 | Fail → free attack rolled 9 vs 12 → **missed** |
| 5 | 6 vs 12 | Fail → free attack rolled 14 vs 12 → **hit**, 2 damage to Guard (10/10 → 8/10, applied on top of prior damage) |

**The key thing this confirms: failing the check doesn't trap the character — it only costs a parting shot.** Rivet successfully left the Ditch in every attempt, including both failures; the DEX check gates whether the melee hostile gets one free swing on the way out, not whether the retreat itself succeeds. That's the right shape — it makes leaving an active melee genuinely risky without ever locking a player into "you literally cannot leave," which would feel far worse at the table than a chance of taking a hit.

**Honest note on how this was actually tested:** the full Highwater Road Ambush squad re-run (5 PCs vs 6 mooks + Kolt) with this rule live did *not* organically trigger it even once — the scripted AI only ever moves characters when they have no valid target in their current zone, which by construction means no melee hostile could be sharing that zone in the first place. The rule only matters when someone deliberately retreats from a fight they could still participate in, which no automated test character has been scripted to do. The dedicated scenario above was built specifically to force that situation. This is flagged in Open Threads as a test-methodology gap, not a rule gap — the mechanic itself works exactly as intended once it's actually invoked.

---

## Combat Model Selection (Why Roll-to-Hit + Buffer)

**The question:** real TEA resolves combat as **Auto-Hit + flat Damage Reduction** (attacks always land, AV subtracts flat damage, capped at 6) — confirmed from source. This table's system instead uses **Roll-to-Hit + Buffer** (2d10-vs-target, armor feeds a fast-recovering Guard pool). Before locking that divergence in as a permanent house rule, it was tested against the full range of alternatives.

**The design space has two independent axes:** hit resolution (does the attack always land, or does the attacker roll to land it?) and armor's mechanical role (does it reduce damage per hit, or absorb a pool of damage before real HP is touched?). That gives four combinations:

| | Damage Reduction | Buffer/Guard Pool |
|---|---|---|
| **Auto-Hit** | **A** — real TEA's actual system | **B** |
| **Roll-to-Hit** | **D** | **C** — this table's system |

### Test 1: single defender vs. a boss-tier attacker (1v1 focus fire, 8 rounds, 20,000 trials)

Attacker: 1d10+4 (avg 9.5/hit). Defender: AV 3 / Guard 9 / flat HP pool 9 (sizes matched as closely as possible across models).

| Model | Death rate | Avg rounds survived |
|---|---|---|
| A: Auto-Hit + DR (real TEA) | 100% | 1.85 |
| B: Auto-Hit + Buffer | 98.7% | 3.49 |
| **C: Roll-to-Hit + Buffer (ours)** | **94.5%** | **4.31** |
| D: Roll-to-Hit + DR | 99.9% | 2.36 |

**Finding:** Buffer beats DR at an equal pool size even against identical total incoming damage, because DR bleeds a little through *every* hit forever while Buffer fully no-sells hits until it empties. Real TEA's actual system (A) is brutal in sustained 1v1 focus fire — consistent with its very small starting HP pool (2d4, avg 5) — by design for an OSR-flavored game, but not the target feel for this table.

### Test 2: full-party worst-case ambush (all 4 mooks + boss focus one isolated PC, round 1; PC attempts to flee once genuinely hurt, 5,000 trials)

This is the sharpest possible test of "OSR stakes, but can the player change their mind after a bad round" — deliberately the harshest realistic scenario (a PC caught alone by an entire encounter).

| Model | Died in Round 1 | Died overall | Got a warning first | Escaped alive |
|---|---|---|---|---|
| B: Auto-Hit + Buffer | 63.0% | 68.7% | 37.0% | 31.3% |
| **C: Roll-to-Hit + Buffer (ours)** | **29.5%** | **35.9%** | **58.8%** | **60.2%** |
| A: Auto-Hit + DR (real TEA) | 68.5% | 70.9% | 31.5% | 27.4% |
| D: Roll-to-Hit + DR | 45.3% | 47.2% | 51.3% | 37.6% |

**Finding:** the to-hit roll, not the armor model, is what actually gives players their "out." Comparing B→C and A→D (same armor model, roll added), round-1 death roughly halves and "escaped alive" more than doubles in both pairs — because a ~36% miss chance stacked across five attackers reliably leaves *something* on the table for round 2, where auto-hit models guarantee all five attacks connect. Model C's 36% eventual death rate against a legitimately unfair 5-on-1 ambush is real OSR danger, not toothless — but 59% of the time the player gets a felt warning before it's fatal, rather than being deleted with zero agency.

**Conclusion: Roll-to-Hit + Buffer (Model C) is kept as this table's combat system.** It isn't an arbitrary divergence from the source — it's the specific combination that produces "dangerous but not unfair," which was the explicit design target. Auto-hit models (including real TEA's own) trade away exactly the lever (the miss chance) that makes that target achievable.

---

## Initiative

**Homebrew, replacing an earlier draft based on TEA's confirmed Speed Roll mechanic.** TEA's real system (1d10-vs-weapon-Speed, sorting into a binary Fast/Slow bucket per Round) was tried first and is still valid as a lighter-weight option, but it has a real gap: two combatants landing in the same bucket still need an arbitrary tiebreak, which the earlier draft hand-waved rather than resolved. A sorted countdown fixes that structurally.

**Roll: 2d10 + DEX bonus + weapon modifier − armor penalty.** The GM rolls this for every combatant at the top of combat, sorts descending, and counts down — each combatant acts once, in that order, for the whole encounter (not re-rolled every Round). Kept on 2d10 rather than a flat d20 specifically to match the rest of this system's die convention and bell-curve shape, rather than introducing a new die type nothing else uses.

| Weapon tier | Modifier |
|---|---|
| Light | +3 |
| Medium | +1 |
| Heavy | −1 |
| Massive (monster-scale) | −3 |

| Armor | Penalty |
|---|---|
| Light | — |
| Medium | −1 |
| Heavy | −2 |
| Shield | −1 |
| Tower Shield | −3 |

**Ties:** because 2d10 clusters around 11 rather than spreading flat like a d20, ties are meaningfully more common than they'd be on a d20 — resolve with higher DEX bonus going first, and a quick reroll between the tied parties only if that's also equal.

A Heavy-armored Wayfarer wielding a Heavy weapon and a Tower Shield rolls 2d10 −1 (weapon) −2 (armor) −3 (Tower Shield) = 2d10−6 — reliably near the bottom of the order. Same intended trade-off as before (heavy = slow), just expressed as one clean sorted list instead of a Fast/Slow bucket split.

---

## Armor & Encumbrance

**The question this section answers: what actually stops every character from just wearing the biggest armor available?** Nothing does, by default — Guard scales cleanly with armor value with no downside, so the min-max answer is always "wear Heavy." Five independent levers fix that, stacked so no single one is a hard wall, but together they make Heavy armor the *correct* choice only for a character actually built to carry it.

| Lever | Light | Medium | Heavy |
|---|---|---|---|
| **Guard bonus** | +1 | +2 | +3 |
| **1. Requirement** | none | CON bonus ≥ 0 | CON bonus ≥ +1 **and** Wayfarer's +2 Guard bonus |
| **2. Slot cost** | 1 body slot | 1 body slot | **2 body slots** |
| **3. Mobility tax** | none | −1 on Agility-type checks | −1 Agility checks **+** moving to an adjacent zone costs your whole action (no move-then-act) |
| **4. Availability** | buyable anywhere | buyable anywhere | requires a **House Cannith commission or military contact** — a Background/relationship, not just shards |
| **5. Usage/maintenance** | d6 after combat, 1–3 marks a use (confirmed) | same, but repair cost scales with the higher purchase price | same, and the shards-sink is largest given Heavy's higher base cost |

**Why this works as a whole system instead of one blunt rule:**
- **Lever 1** means a squishy build literally can't equip Heavy without investing in CON first — it's build-gated, not archetype-locked, so a dedicated tank Syberist could theoretically qualify, but it costs them a stat point they'd rather spend elsewhere.
- **Lever 2** means even a character who *can* wear Heavy is trading away a body slot that could hold a dragonmark focus, a secondary weapon, or a talisman — the survivability isn't free even once you qualify.
- **Lever 3** directly punishes the zone-based skirmishing this table's combat system is built around (see Zones & Range) — Heavy armor turns off "move and attack in the same round," which is a real tactical cost, not just a flavor penalty. It also now taxes **Initiative** (above), so Heavy-armored characters consistently act later in turn order on top of being unable to reposition freely.
- **Lever 4** ties the choice into the setting rather than just the character sheet — getting Heavy armor becomes a plot hook or a Background payoff (a Karrnathi Line Soldier or Kundarak Vault-Warden background likely already has the contact; everyone else has to go earn one).
- **Lever 5** is the ongoing tax: real TEA's confirmed usage-dot system already makes gear wear down and need repair, and Heavy's higher price tag means that slow shards-bleed is proportionally worse for Heavy than Light, even though the wear odds are identical.

**Net result:** a dedicated frontline Wayfarer who's invested CON, accepted the mobility tax, spent the slot, found the House contact, and can afford upkeep is the only build for whom Heavy armor's Guard bonus is actually worth its total cost. Anyone else paying all five costs for +3 Guard they can barely use (can't reposition, acts last, gave up a slot) is making a build mistake — which means the system discourages "everyone wears Heavy" through cost math, not through a rule forbidding it.

