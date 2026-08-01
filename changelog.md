# Design Changelog

Full design history, rationale, and process notes — everything cut from the clean rulebook to keep that document genuinely matter-of-fact, author-to-reader technical writing. Organized to mirror the rulebook's own section order, so any entry here can be cross-referenced back to what it explains.

---

### Setting Terminology

An earlier version framed this table backwards — leading with TEA's own terms and labeling Eberron's concepts as the "equivalent." Fixed: Eberron is the setting being run, not a reskin of TEA's own setting; TEA's abstract rules and setting concepts map onto pieces of Eberron that already do the same narrative job, not the other way around. Table reordered to lead with Eberron, TEA's term following as the mechanic it's standing in for.

### Core Resolution

Design constraint stated explicitly for the first time this pass: situational difficulty as Target-shift/Advantage-Disadvantage only, never stacking modifiers — this is the shared spine every other system hangs off, moved to the front of the document specifically so it isn't buried behind Magic and Backgrounds.

Advantage/Disadvantage stacking rule generalized — previously only stated for the narrow Wound-based Disadvantage case; now stated once as a universal rule.

Clarified the stacking rule applies strictly per-roll, not per-character — a PC's outgoing attack and an incoming attack against them are separate rolls that never interact, a distinction easy to conflate.

Added a general "next attack/roll/hit" resolution rule — roughly a dozen abilities (Guarded Strike, Take Aim, Fractal Ward, Zealous Rebuke, Rally Cry, Shield Bash, etc.) use this phrasing and none ever spelled out how it actually works. Four behaviors stated once: applies to one specific future roll, consumed on resolution regardless of outcome, expires unused if the trigger never happens, doesn't stack with an already-pending tag of the same type.

### Stat Bonus Generation

One method only: roll, no standing fixed-Array alternative. An earlier draft offered both, which made rolling strictly dominant (try for upside, fall back risk-free if bad) and quietly killed the alternative as a meaningful choice. Worlds Without Number's approach (roll first, only a narrow fix for a genuinely bad result) closes that exploit.

Changed from 2d6 (−3 to +3) to 3d6 (−2 to +2) specifically to make the extremes rarer and narrow the total spread. ±2 now sits at 9.3% per tier versus the old ±3's 2.8% — but the more relevant comparison is against the old ±2 tier's 13.9%, since ±2 is now the ceiling rather than the second-highest step.

Free stat placement (not "roll in order") is deliberate — a worked example that doesn't reassign rolled stats isn't demonstrating a built character, just the raw dice mechanic.

Mercy only fires on a genuine outlier (zero positive stats), is small and targeted, and can't be gamed by fishing for it deliberately.

The "restart by agreement" safety valve was added separately from Mercy — a legal-but-joyless roll (one great stat, a cliff after it) can happen without ever triggering Mercy's zero-positive-stats condition; this exists so nobody's stuck playing a character they don't want just because the dice didn't technically fail badly enough.

Target shifted from 11 to 12 specifically because a baseline-negative average bonus (the old center was −1 against Target 11) reads badly on a character sheet in a high-fantasy builds game, even though the underlying odds are mathematically identical either way.

### Advantage / Disadvantage

3d10-keep-two chosen over "roll twice, take the better/worse total" because it needs only one extra die, reads intuitively, and self-compresses correctly (biggest effect near the middle of the curve) without needing 4 dice.

### Magic Baseline

Design goal: keep high magic as the baseline (everlanterns, message stations, minor conveniences feel commonplace) without turning every character into a walking battery.

Confirmed source: TEA's Warlock casts via Name-Crafting, confirmed tier costs (Minor 2d6, Moderate 2d6×2, Major 3d6×5, Mythic 4d6×25).

Spark tier is a homebrew addition between Cantrip and Minor — previously any real mechanical effect had to either overreach into a supposedly-cosmetic Cantrip or overpay at Minor's 2d6-shard average; Spark closes that gap with its own honest price.

Minor tier's Attack spell formula (1d6+stat) was corrected from an earlier "no damage" draft that broke the tier ladder once Spark was added below it — a higher, pricier tier can't be strictly worse for combat than a cheaper one below it.

Major/Mythic single-target damage redesigned around guaranteed Wounds instead of raw numbers, since the raw numbers were being wasted, not overpowered. Checked directly against the recalibrated boss Guard baseline: the old Major tier (4d6, avg 14) dealt 477–750% of a typical boss's entire Guard pool in one hit, across every level tested — but opening a Wound is a binary event, so a 750%-overkill hit has the exact same mechanical result as one that overflows by a single point. All that excess damage was pure waste. Fixed by spending that power on something that isn't capped: Major automatically opens a Wound on any successful hit, Mythic opens two at once — against even a maximum 3-Wound-slot boss, one successful Mythic cast puts them on their last slot immediately.

### Shard Bolt

Fills a real gap: nothing below Moderate tier could deal damage at all, which missed the "wandslinger casually zapping things" aesthetic Eberron is known for.

No stat bonus stacking was a deliberate check against overreach: a maxed +3 caster (achievable through Vertical growth, not creation) adding their bonus to damage as well would average 7.5 at full investment — still bigger than a Heavy weapon's average. Capping the scaling at shard count alone keeps the top end (3 shards, avg 4.5) landing almost exactly on a Heavy weapon's average (1d8, avg 4.5).

Requires Spark-tier access specifically, not automatic from owning an item — Cantrip alone is genuinely free to anyone, Spark is the real line.

### Spark Utility Spells

Several adapted from D&D's cantrip list, a genuinely well-suited source since most of those already sit at "small, real, single-purpose" — Spark's design brief exactly.

Two deliberately left out: a Spare the Dying equivalent would overlap with Combat Mending's auto-stabilize and Jorasco's Mark of Healing, both already covering that exact niche. A Message equivalent is already Message Mote.

Why these land at Spark and not Cantrip or Minor: each does something a Cantrip explicitly can't; none rise to Minor's bar either (Minor is "could be done without magic, but magic makes it reliable and fast" — a whole toolkit's worth of effort). These are too small and single-use for that, exactly the rung Spark exists to fill.

### Generating More Spark Spells

Built specifically to reuse the existing Spell Name generation system rather than requiring a hand-authored list forever.

The "no separate fixed list of Syberist features" rule exists to catch a specific failure mode: anything that reads like a named ability with its own fixed cost for a caster archetype should be checked against this first — if it's just a spell wearing a feature's name, it's redundant with the system the archetype already has.

### Overcasting

Only applies to Minor+ tier specifically because Cantrip/Spark run on a flat, known cost — there's nothing to fall short of, since the cost is never uncertain.

Why success is gated to a natural 6, not automatic: an earlier version let every overcast succeed regardless of roll, with the dice pool only determining backlash. Real problem at the extreme: a sufficiently reckless, high-CON character attempting Mythic tier with next to nothing on hand would eventually survive the backlash and get the effect anyway, given enough attempts — a world-altering spell shouldn't be reachable by volume of reckless tries with no real investment. Gating success to the same roll that determines backlash closes this: tested directly against 500 independent "keep attempting until success or death" simulations, and not one succeeded.

Full design history: four earlier versions of this rule didn't work and were replaced in turn. First scaled backlash damage to the raw shard gap, breaking badly at Major/Mythic (50+ damage from a caster's own miscast dice). Second capped damage at a small flat number, making overcasting strictly better than paying, undermining the shard economy entirely. Third fixed both with percentage-scaled damage tied to the spell's own average output — mathematically sound but required computed percentages and squared probabilities, not resolvable at a table with just dice. Fourth replaced that with a dice pool and was close, but let every overcast succeed regardless of roll, leading to the city-leveling problem above. This final version ties success itself to the roll and removes the pool-size floor. Confirmed by testing every tier/shortfall/CON combination and validated in a full five-person party combat simulation with casters forced to overcast whenever short — zero-death rate held at 90.5%, consistent with every earlier version. An earlier draft also added a GM-adjudicated "spell fails or manifests wrong" layer on top, attributed to confirmed source — that attribution couldn't be re-verified and was cut rather than kept on unverified authority.

### Spell Resolution: Attack vs. Effect

This table's Roll-to-Hit + Buffer combat model applies to weapon attacks — extending it to every spell without distinction stacks a to-hit roll on top of an already-real shards cost, a double tax for effects that were never actually "aimed" at anyone. Splitting spells into Attack vs. Effect categories fixes this without adding new dice math.

The willing-target auto-success rule was already true in practice for Combat Mending in every worked example — this rule makes it an explicit, intentional category instead of an unstated exception.




### Spell Names

Confirmed source generation mechanic (d4 Template, 2d8 per component). Form and Adjective columns are largely setting-agnostic and kept close to source; the Noun column carried all the Orn-specific sci-fi vocabulary and was fully reworked, then split by casting tradition so a Shardbound Syberist's spell names read differently from a Flamesworn or Wildspoken one.

### Spell Name Acquisition

Every other randomized system in this doc gives the player a choice or placement decision (stat gen, Guard Stat, Initiative ties) — spell names shouldn't be the one exception, especially in a builds-focused game. Three methods exist instead of just the confirmed Ritual/Name-Crafting pair.

Diegetic Discovery is a homebrew addition specifically to give players a name-acquisition path before level 3's Name-Crafting unlocks, tied to an actual quest hook rather than a purchasable action.

### Blast as a Form word

It appears in the Form table as one option among many, but it's really a leftover naming artifact from the source's weapon-keyword lineage rather than a special spell category needing its own rules. No separate area-effect subsystem needed — this is the same clarification Weapon Keywords makes on the mundane side.

### Noun tables corrected

An earlier draft claimed the Noun tables "matched the Form/Adjective tables" while still being plain comma-separated prose lists with no indices at all — impossible to roll 2d8 against without manually counting through the list. Fixed to the same grid structure Form already used correctly.


### Background Creation Procedure

The gear rule (narrative, not numeric) was violated in twelve Backgrounds before being caught — items like "curved blade," "dueling axe," "hide armor," and "war-mount" sat in Gear lists implying real combat stats that were never actually granted, directly contradicting the rule while the doc enforced it everywhere else. Fixed: weapons and armor removed from Background gear entirely, and mount-granting Talents like Horse-Kin now explicitly note that mounted access is narrative, no separate stat block.

### Valenar Blademarked

Ancestral Duel corrected from an earlier "+1 to hit," a flat roll bonus this document's own design philosophy explicitly rules out — changed to Advantage instead.

### Half-Elves (Khoravar)

Corrected from an earlier draft that mischaracterized Khoravar as "less culturally distinct" than other Eberron peoples — wrong. Khoravar are a genuine third culture, not a hybrid category assimilated into either parent's, which is precisely why they built a separate identity rather than assimilating into either.

### Changelings

The shared shapeshifting trait was missing from the document entirely until caught late — the earlier version of this list built every changeling Talent around the assumption of shapeshifting without ever actually stating the baseline ability itself.

### Not yet covered

Aundairian arcane-line variants beyond Magewright, Droaam's other monstrous species (medusa/harpy/gargoyle — outside the 5e baseline this doc otherwise sticks to), more Sharn-specific mixed-heritage backgrounds.


### Archetypes, naming

TEA's three chassis are confirmed source: Fixer, Vagabond, Warlock. Renamed Agent (House Agent is the actual canonical Eberron term), Wayfarer (post-Last-War road-and-displacement flavor fits better than a generic descriptor), and Syberist (after Siberys — "Warlock" carries D&D-specific baggage that doesn't fit a dragonshard-and-Prophecy-flavored caster).

### Artificer

Started as its own fourth archetype, rebuilt into a Syberist tradition after three separate problems traced back to the same root cause: the whole Infusion subsystem was 5e's Artificer mechanic imported wholesale into a document otherwise built on OSR conventions (Turn/Round, no short/long rest split, target-shift-not-modifier-stacking) — every fix attempted was patching around that mismatch rather than fixing it. Matches Wildspoken's own precedent exactly: a Druid didn't need to be its own archetype either.

Quick Rig's mandatory 1-Turn build time is the load-bearing rule that makes the whole trade-off real — without a genuine time cost, nothing would stop a player from building a brand-new effect mid-fight, erasing the distinction between this and ordinary reactive Name-Crafting.

The trigger roll using the holder's INT (not the Artificer's own) is what makes "hand it to a teammate" a genuine gamble rather than a strictly-better play. Tested: a level-1 Artificer Syberist (INT+2) triggering their own device lands 64.0% of the time; handing the same device to a STR-focused ally (INT−1) drops that to 35.7%.

A Tradition-Specific Option was drafted and discarded: Rapid Prototype (build a contraption in one action instead of a full Turn). Cut outright — even with a real cost attached, letting an Artificer build a brand-new Minor+ effect mid-combat is functionally identical to reactive Name-Crafting, exactly what the tradition's downtime-only restriction exists to prevent.

### Wandslinger

Not offered to Syberist since their inherent casting strictly exceeds what Wandslinger grants — not a broken exploit if taken, just a pointless spend of a Skill or Maneuver for something already fully redundant.

Design principle carried through the rest of the document: every archetype should reward more than its primary stat.

### Leverage

Agent was the only archetype with no resource of its own — Wayfarer has Grit, Syberist draws on shards. That gap is exactly why Agent's utility always read as "a skill in a list" instead of a real pillar of the archetype. Deliberately kept separate from shards: shards are dragonshard dust, magic fuel; Leverage is explicitly mundane preparation. Keeping them separate means Agent can be the one archetype whose power never touches magic at all.

The regeneration check's GM-adjudicated stat (rather than a fixed one) fixed a real problem: an earlier draft tied this to "in-fiction social action" specifically, which quietly assumed a dense home city was always available between jobs — Eberron isn't that; a party can spend real session-time in Khyber, the Mournland, or deep in Xen'drik with zero social access at all.

### Contingency

The genre-defining move, finally given a real mechanical shape. Every Agent-adjacent archetype across fiction and other systems runs on the same underlying fantasy: not "I'm good at this category of check," but "I already prepared for this specific, unexpected moment." Blades in the Dark's Flashback is the cleanest existing version of this, and its actual mechanism (cost scales with the size of the ask) is what Contingency borrows.

Mastery (a TEA source concept referenced in Advancement without the mechanic itself ever being built out) is cut entirely — not something this ruleset does.

Supplies removed entirely — Leverage/Contingency already covers "I happen to have the right minor item for this" more flexibly than a fixed extra-inventory Skill ever did.

Backstab removed as a Skill — "hit someone who doesn't see it coming" isn't a distinctly Agent thing, it's genre-universal; replaced by the Agent Combat Techniques instead.

Network redesigned to stay distinct from Contingency's own "I already know this NPC" — the old version (a standing contact, free and reusable) overlapped directly.

Expertise redesigned — the old "reroll one check per session" was too flat and generic to reflect actual expertise, and wasn't even genuinely non-combat despite the flavor implying it.

### Agent Combat Techniques

Resourced entirely by action economy and trigger rarity — deliberately no new currency, keeping this system at three total (Grit, shards, Leverage).

Precision Strike tested clean: Disadvantage costs 13–25 percentage points of hit chance at every target tier, never a near-free ceiling-effect problem.

Exploit the Opening: two problems caught and fixed before final form. An earlier draft keyed off "the target is unaware," making ambushes far deadlier than intended — dropped, since Surprise already rewards that. A second draft keyed off "the target has an open Wound" as a standing state rather than a one-time trigger — since Wounds never close mid-combat, this would auto-crit every hit for the rest of any fight after the first Wound opened. Fixed to trigger once per Wound opening, not per Wound existing. The Light/Medium restriction closes a third issue: an auto-crit's value scales with die size, so a Heavy weapon would get more than double a Light weapon's bonus for the same cost.

Take Aim: tested against the naive version (Advantage plus bonus dice, no lasting effect) and confirmed that version is a trap — two normal attacks across the same 2 rounds beat it, 9.32 vs 9.20 avg damage. The permanent Guard reduction is what justifies spending a whole round setting up: over a realistic 5-round fight, direct damage alone breaks even with just attacking normally (23.15 vs 23.21), but the lasting Guard reduction adds real ongoing value (+5.80), a genuine ~25% total improvement.

### Agent Flavors

All three flavors use identical mechanics underneath, differing only in what regenerates Leverage and what kind of fiction a Contingency plausibly covers — same design pattern as Syberist's three traditions differing only in cast stat and Spell Names flavor.

One honest observation across all three worked PCs: every single one dumped WIS and carries a fragile Guard (4–5). Not a coincidence of these particular rolls — the archetype's actual shape reasserting itself, matching the earlier archetype breakpoint test: Agent trades toughness for width, consistently, regardless of genre-flavor.


### Dragonmarks

Design goal: keep marks entirely separate from the dust economy — narrow, fixed, free, reliable, gated by Background. This gives House-blooded characters a small always-on identity that doesn't compete with the Syberist's resource game.

Mark upgrades should be framed as an actual narrative beat (a personal trial, a House-sanctioned rite, the mark flaring under real stress) rather than something that quietly happens the session a character hits the XP threshold — same principle already established for Guard Stat and Spell Name Acquisition: mechanical readiness opens the door, the fiction is what walks through it.

~~Least Marks are complete for all 12 Houses — Lesser/Greater/Siberys tier specifics per House still open~~ — **partially resolved.** A Mark Tier Power Baseline now exists, anchoring each tier to a spell tier's power level (Least≈Spark, Lesser≈Minor, Greater≈Major, Siberys≈Mythic — not a mechanical translation, a feel-baseline), with Cannith and Jorasco fully worked out as templates and a stated scaling principle (Least→Lesser mirrors Spark→Minor's jump, Lesser→Greater mirrors Minor→Major's, Greater→Siberys mirrors Major→Mythic's) for building the other 10 Houses the same way. The other 10 Houses' higher tiers are still genuinely unbuilt — this closes the "no baseline to build from" gap, not the full-coverage gap.

Mark of Healing (Jorasco) is distinct from the Mending Ray slotted spell — this is the free, narrow, always-on version; the spell is the costed, more powerful one.

### Dragonmarked Heir

Distinct from a career-tied House Background (like the Khoravar House variants): most people in a marked family never manifest a Dragonmark — it's rare even within bloodlines. A Dragonmarked Heir is specifically someone the mark actually chose.

The tension worth keeping: being Marked is a gift with real strings — Houses invest in heirs and expect returns, and excoriation (formal House exile) is a genuine threat looming over anyone who steps too far out of line.

Per actual Eberron canon, excoriation strips House backing and status, but a Dragonmark is innate and can't be revoked — so the Excoriate Heir split lands exactly there: Marked stays unchanged, Named Heir flips to Disadvantage.

### Talents & Expertise

Confirmed from source, previously never written into this doc — a real omission, not a design choice.

This is the universal expertise system every archetype already has access to, tied to Background rather than class. Every Background grants 2–3 named Talents spanning every one of the six stats depending on what a player picked at creation — a character's non-primary-stat relevance was never actually archetype-gated, it's been sitting in the Background choice the whole time, just never stated as mechanically live.

Agent's extra reach is the resolution to Agent's missing INT/WIS hook: rather than inventing new content, an Agent wanting an INT angle just takes Ward-Reader; wanting WIS, takes Speak with the Undying.

### Languages

Illiteracy is deliberately harsh (−2 or lower, not just −3) — dumping INT should have a real, felt consequence, not just a smaller number on a check sheet.

Non-human ancestral languages don't compete with the INT-based extra-language count because they represent growing up speaking it, not scholarly aptitude. Humans have no equivalent, since Common already functions as their default tongue.


### Character Creation

Reconstructed as one sequence, not previously stated anywhere as such — built specifically to shake down the procedure, and it surfaced two real gaps now resolved.

Step 5's guidance (highest roll to offense, second-highest to a genuinely different Guard stat) is a deliberate reversal of the more "efficient" concentrated build a Monte Carlo comparison found earlier in this project's testing: concentration measurably outsurvives a split build, which is exactly why it's now disallowed rather than encouraged.

Guidance text was originally described as "shakedown-tested" — internal process jargon that leaked into player-facing text, since fixed to just describe what it is: guidance drawn from actually running the flowchart against real builds.


### Combat Procedure

Traced directly from the written rules below, built as a full-system audit — no contradictions found in the flow itself.


### Inventory & Items — Weapons

Heavy is inherently Two-handed: an earlier draft left this unstated, which meant a Heavy weapon could theoretically pair with a Shield, undermining the justification for pricing Dual-attack above Heavy-weapon parity.

All ranged weapons are Two-handed at every tier: an earlier draft assumed a Light ranged weapon could stay one-handed on the logic that firing an already-loaded shot only takes one hand. Reloading needs both hands regardless.

Shield/Tower Shield's own Guard values were referenced multiple times elsewhere without ever being stated until this pass. Matches Medium armor's Guard value rather than Heavy's.

Named list added: TEA's actual confirmed weapon list was sorted into this table's four tiers by matching damage die. TEA's own Maul, Great Sword, and Longbow all exceed this document's PC-accessible Heavy cap and are excluded.

Melee/ranged as a separate axis from stat: an earlier draft conflated "uses DEX" with "is ranged," which silently blocked Shields for finesse-melee builds that should have had full access.

Casting stat vs. weapon stat: an earlier draft treated a Syberist's spell-attack formula as if it were "the weapon," hiding that any caster can carry and use a real weapon as a genuinely separate option.

### Inventory & Items — Weapon Proficiency

A real gap, not a design choice. Confirmed source explicitly gates weapons by attribute the same way armor's Medium/Heavy tiers require CON, but this was never carried over to weapons in an earlier draft, which only applied the two-threshold pattern to ranged.

### Inventory & Items — Pricing

Mundane gold values were decided during Character Creator tool-building and never made it into the actual rules text until this pass.

### Inventory & Items — Critical Hits

The trigger had to move: confirmed source triggers a crit off rolling max damage on the weapon's die, which doesn't map here since TEA's confirmed combat is Auto-Hit (no attack roll to hook a crit trigger onto). This document's Roll-to-Hit fork has an attack roll to work with, so the trigger moved there.

The damage floor surfaced while testing a proposed Artificer mechanic (a low die roll combined with a negative stat pushed a confirmed hit to 0 effective damage).

### Inventory & Items — Toolkits & Usage

A real gap, not a design choice — this system referenced specific kits incidentally throughout Backgrounds gear but never actually defined what a kit costs or what the full list even is.

Pricing corrected twice before landing right. First pass converted via a labor-wage anchor (~10× too cheap once checked). Second pass tried deriving a "gp per TEA drop" rate from matching named weapons by name, which looked clean but wasn't — matched by actual damage die instead, the rate scattered from 2 to over 8gp per drop, meaning no single clean conversion factor exists in the source data. Abandoned the TEA-drop conversion entirely; priced instead by genre-standard relative value against this document's own fixed weapon/armor anchors. The magic-side economy stays completely separate from the mundane-gear economy.

### Inventory & Items — Magic Items

Pricing validated: applying 10–20× to Minor tier's average cost gives 70–140 refined shards, and TEA's actual confirmed Rare Weapons table already priced its items at 60–135 shards.

The Eberron-original replacement: an earlier draft copied TEA's actual confirmed Rare Weapons entries directly. Several entries dealt damage at or above Massive tier, directly contradicting this document's own rule, and the pricing validated itself against the very numbers it had copied. A deeper problem: several entries implicitly worked like flat stat bonuses — a direct D&D d20 holdover, exactly the pattern this document's "shift the Target or grant Advantage, never stack modifiers" principle exists to rule out. Redesigned from scratch using only the same four levers everything else uses.

### Inventory & Items — Armor

The five-lever design answers a specific question: what stops every character from just wearing the biggest armor available? Nothing does by default — Guard scales cleanly with armor value with no downside. Five independent levers fix that: Requirement (CON-gated), Slot cost (Heavy eats a second body slot), Mobility tax (punishes the zone-based skirmishing this system is built around), Availability (ties the choice into the setting), and Usage/maintenance (Heavy's higher price tag makes repair proportionally worse). Net result: a dedicated frontline Wayfarer who's paid all five costs is the only build for whom Heavy's Guard bonus is actually worth it.


### Economy

Baseline: standard D&D/Eberron assumptions, nothing reinvented. Unskilled day labor and standard arrow prices are the anchor everything else gets checked against.

Shards being two separate economic goods is existing Eberron lore, not new invention — House Cannith's entire shard-cutting industry exists specifically because raw and refined dragonshard material are worth wildly different amounts.

Raw shard price (5 copper) matches one arrow exactly, on purpose — a single flat price for either tier doesn't work: at a "big purchase" anchor, a 3-shard Shard Bolt cast would cost roughly 600 arrows' worth of ammunition, unplayable for something meant to be cast casually and often.

Refined shard price (10gp) validated against every existing cost in the doc, not picked to fit any one of them: Minor tier average lands at ~70gp (a specialist's fee), Rare Weapons land at 600–1,350gp (matching D&D's own "rare magic item" band), and starting wealth at 200gp matches standard 5e starting character wealth almost exactly — this wasn't tuned to hit that number, it just fell out of the labor-wage anchor.

Starting wealth is 200gp, not 20 mandatory shards. An earlier draft handed every character 20 refined shards regardless of archetype — fine for a Syberist, but forces a pure martial Wayfarer with no casting into holding a resource they may never use.

Naming aside, purely flavor: The Electrum Archive is titled after electrum specifically — a table wanting to lean into that could price refined shards in electrum instead of gold (1 shard = 20ep, identical value).

### HP: Guard + Wounds

This sits on top of TEA's confirmed mechanic: at 0 HP/Guard-and-Wounds-exhausted, roll a d6.

**Scar Table:** honest flag — reconstructed from the general shape recalled from the source review, not a verbatim re-verified transcription; worth a direct re-check against the source PDF if exact fidelity matters. Softened from an earlier draft: full blanket Disadvantage, permanent with no path back, didn't fit a heroic builds game once the accumulation math was actually checked. Most fights never even reach a single character's first Death's Door check per every Monte Carlo calibration in this doc, so a Scar only ever comes up at the genuine worst-case moment.

**Guard formula:** base was raised from 2 to 4 so the floor rule actually matters — at base 2, a −3 CON character floored at 1 Guard was functionally identical to 0 Guard.

**Guard Stat restriction:** reverses an earlier draft. A Monte Carlo comparison confirmed that concentrating one stat into both Guard and offense/casting is mechanically stronger than splitting them, which is exactly why it's now disallowed rather than recommended. The Wandslinger-stat inclusion closes a real loophole caught during testing: without it, a character could satisfy the letter of the rule (Guard Stat ≠ weapon stat) while secretly setting their Wandslinger stat equal to their Guard Stat, quietly re-achieving the exact concentration the rule exists to prevent. Retroactive note: the doc's own worked examples (Aeshaan throughout Combat Model Selection and the Highwater Road Case Study) were built with Guard Stat = cast stat, predating this rule.

**Wounds — second/third slot timing:** the third slot specifically corrects an asymmetry with scaled named enemies, which gain their own third Wound slot at level 6 — without a matching PC slot, levels 6–8 fights against scaled bosses ran measurably more dangerous, confirmed by Monte Carlo. Named-stat Wound penalties were tried and rejected — they let players route the cost onto a dump stat, turning the penalty into a formality.

**The Guard-refill-on-Wound rule** was a real gap, not a settled rule until caught: "reset to 0" had been used consistently across every Monte Carlo test in this document, but was never actually written in prose — only "max Guard reduces by 2" was ever stated. This was later fully recalibrated (see Advancement/Enemy Design) once the correct refill rule was confirmed.

### Wound Complication Table

Exists because a Wound that's just "−2 max Guard plus a coin-flip Disadvantage" felt hollow in playtesting — mechanically present but not felt. Gear Scattered is deliberately generic rather than caster-specific, since not every character carries shards.

### Healing Magic

Design goal: avoid the classic "healer only matters once someone's nearly dead" trap, while keeping Wounds meaningful rather than erasable on demand. Making Guard-refill freely usable before someone's in danger turns healing into a proactive support tool instead of a reactive one. Wounds staying uncloseable in combat no matter what keeps them genuinely consequential.

### Zones & Range

Confirmed from source: TEA's actual rules (0.7+ playtest) replaced tracked distances with a zone system. Zones are centered on the characters, not fixed geography, which is why three zones is enough regardless of encounter size.

**Movement — move and act being both available was a real correction, not a deliberate divergence.** An earlier draft of this doc stated the opposite ("move OR act, not both"), an unchecked assertion that went untested against source. Why it mattered: under the exclusive version, a melee character chasing anything mobile needs a full Round just to close each zone gap and can never land a hit that same turn, while a ranged attacker only has to relocate once and can plink freely forever — making melee characters close to useless against any opponent willing to keep distance.

**Weapon reach capping** was a deliberate fix, not the original design. An earlier draft let ranged weapons hit any zone with no restriction, which made zones pointless — if a bow threatens the whole battlefield regardless of distance, moving and positioning stop mattering on either side.

**Disengaging** was caught as a real gap, not a deliberate omission. Every combat run in this doc up to that point happened with completely free, risk-free movement, which undermined the entire point of adding zones to make positioning matter.

Honest note on testing: the full Highwater Road Ambush squad re-run with this rule live did not organically trigger it even once, since the scripted AI only moves characters when they have no valid target in their current zone. The dedicated worked example above was built specifically to force the situation. Flagged as a test-methodology gap, not a rule gap.

### Combat Model Selection (Why Roll-to-Hit + Buffer)

Real TEA resolves combat as Auto-Hit + flat Damage Reduction (confirmed from source). This table's system instead uses Roll-to-Hit + Buffer. Before locking that divergence in, it was tested against the full range of alternatives across two independent axes (hit resolution, armor's mechanical role), giving four combinations.

**Test 1 (1v1 focus fire, 8 rounds, 20,000 trials):** Buffer beat DR at an equal pool size even against identical total incoming damage, because DR bleeds a little through every hit forever while Buffer fully no-sells hits until it empties. Real TEA's own system was brutal in sustained 1v1 focus fire (100% death rate), consistent with its small starting HP pool, by design for an OSR-flavored game, but not the target feel for this table.

**Test 2 (full-party worst-case ambush, 5,000 trials):** the to-hit roll, not the armor model, is what actually gives players their "out." Comparing model pairs with the same armor model but a roll added, round-1 death roughly halved and "escaped alive" more than doubled — because a miss chance stacked across five attackers reliably leaves something on the table for round 2, where auto-hit models guarantee all five attacks connect.

Conclusion: Roll-to-Hit + Buffer is kept as this table's combat system — not an arbitrary divergence from source, but the specific combination that produces "dangerous but not unfair," the explicit design target. Auto-hit models (including real TEA's own) trade away exactly the lever that makes that target achievable.

### Initiative

Homebrew, replacing an earlier draft based on TEA's confirmed Speed Roll mechanic. TEA's real system (1d10-vs-weapon-Speed, sorting into a binary Fast/Slow bucket per Round) was tried first and is still valid as a lighter-weight option, but has a real gap: two combatants landing in the same bucket still need an arbitrary tiebreak, which the earlier draft hand-waved rather than resolved. A sorted countdown fixes that structurally. Kept on 2d10 rather than a flat d20 specifically to match the rest of this system's die convention and bell-curve shape.

Because 2d10 clusters around 11 rather than spreading flat like a d20, ties are meaningfully more common than they'd be on a d20.


### Surprise & Ambushes

Confirmed from source: before combat starts, the Seer determines if a side is surprised. Homebrew extension to per-character checking: a group check produces a binary "the whole party is or isn't surprised" outcome, which flattens what should be an interesting, uneven moment. This produces real, uneven texture: a party can end up with some members caught flat-footed while others hold the line alone for a round.

### Morale

OSR/OSE-style morale for non-PC groups, layered on top of TEA's own systems — fills a gap the source doesn't cover. Without morale, "defeat the enemies" always means "kill every last one," which reads as either grimmer or more grindy than intended for most encounters. Real groups, especially opportunistic ones like bandits, have a breaking point.

### Reaction Check

Confirmed source has a Reaction table (flat d10, Hostile→Helpful disposition chart). Homebrew adaptation replaces the flat unmodified d10 with a real check, on the same target and Adv/Disadv this system already uses, while keeping the source's five-outcome table.

Deliberately reuses 9/12/15 — the exact same Weak/Standard/Strong pivot points from Enemy Design Philosophy — rather than inventing new band boundaries. These were picked as convenient, memorable anchors from the full ±3 granular scale, not because they're the only legal thresholds; a GM reshaping these bands for a different table could just as validly set them at 10/13 or 11/14 instead.

Honest note on the percentages: at CHA+0, this produces roughly Hostile 36% / Wary 19% / Apathetic 24% / Friendly 11% / Helpful 10% — not a clean match to the source's flat d10 table (10/20/40/20/10), since a bell-curve check centered on a ~45%-success target distributes differently than a flat 1-in-10 roll. This is intentional, not a miscalibration — real strangers should default a little wary.

### Travel & Exploration

Confirmed source, ported directly — this doc has been entirely combat-focused until now; these are the downtime/dungeon pacing procedures underneath everything else.


### Enemy Design Philosophy

9, 12, and 15 are named anchor points, not the only three legal values — the full granular table under Scenario Target Modifiers covers every intermediate step.

### Encounter Level Scaling

The problem, confirmed with data: a Monte Carlo of the Highwater Road ambush (300 trials/level, levels 1–8) showed PC zero-death rate climbing from 58% at level 1 to 96.7% by level 8, while average enemies killed stayed dead flat at every level — the tell that a fixed Morale score never scaling meant a level-8 party doesn't fight harder, it just steamrolls faster with almost no risk.

Restructured around a fractal model — attack bonus was dropped entirely as a monster stat, a pure notation simplification since 2d10+bonus≥12 and 2d10≥12−bonus are the exact same math.

Why damage scales slower than Guard: early testing scaled the old attack-bonus (which fed both hit chance and damage) at full PC rate and it overshot badly, zero-death rate fell with level instead of stabilizing.

The calibration journey took three rounds of tuning. Guard+attack scaling alone landed close but left level 8 as a genuine outlier, traced to named enemies gaining a third Wound slot at milestone 3+ while PCs capped at two Wound slots forever. Giving PCs a matching third Wound slot at level 8 fixed it directly. That calibration then had to be redone a second time after the Movement rule was corrected — move+act made enemies symmetrically more dangerous too, and the original 8-mook encounter size proved structurally too large under the corrected rule. Reducing to 6 mooks plus modestly softened boss base stats closed the gap.

The current final numbers replace a pre-fix 52.7–84.3% band — a 32-point spread that wasn't just imprecise, it was hiding a real problem: the harsher reset-to-0 Guard rule made later levels dramatically safer than early ones, an invisible power-creep the wide band never made visible.

Enemy count is now a real, confirmed design lever in its own right, not just enemy stats — reducing from 8 to 6 mooks did more to fix the move+act lethality spike than any amount of individual-enemy stat tuning could have.

### Multi-Action

Now fully decoupled from Blast — earlier drafts treated the two as a combined "make bosses scarier" toolkit; they don't interact and are unrelated tools.

The problem, confirmed with data: a solo boss, even scaled all the way up, is drastically safer than a mook swarm against a full party. A Monte Carlo of a 5-PC squad against a solo scaled boss with no support produced 90–99.7% zero-death across every level 1–8. This isn't a stat problem, it's an action-economy problem.

Blast doesn't fix it — tested in isolation and produced no change at all, since Blast only redistributes the boss's existing damage output across more targets rather than increasing total output.

An earlier flat "+2 always" test produced a curve that got safer with level (54.4% → 77.5% → 87.9%), backwards from what a GM wants. Scaling the bonus-action count itself fixed this into a flat, consistent band.

Testing randomized (less-optimized) PC builds against the same encounters produced meaningfully more lethal results at identical parameters — at 2 mooks, 58.8% (reference squad) dropped to 33.6% (randomized squads).

### Legendary Resistance

A true solo boss has a second problem beyond raw action economy: getting shut down by Effect-spell control before it acts at all. Confirmed as a real problem, not imported D&D baggage: against 2–3 dedicated controllers, a well-built boss gets locked out 37.5–51.3% of rounds.

A second, genuinely new gap this surfaced: bosses never had a defined resist Target at all. Encounter Level Scaling only scaled Guard and the (now-retired) attack bonus. An unscaled boss gets locked down 55–91% of rounds even with all 3 free resists spent — the free resists just delay the inevitable rather than fixing the underlying odds once they run out partway through a longer fight.

### Scenario Target Modifiers

The enemy-tier logic generalizes to any check, not just attacks — terrain, lighting, weather, or circumstance can shift the target for any roll using the exact same additive-to-12 logic.

This range is independent of character stat generation, which only reaches ±2 — Scenario Target Modifiers govern GM-adjudicated situational difficulty and enemy toughness, a separate design space from player stats, and there's no reason the two need to share the same ceiling.


### Wayfarer Grit Maneuvers

Problem this solves: a "tank" that's just a stick with more Guard isn't actually tanking, it's just soaking damage worse than dying — no real battlefield control.

All maneuvers available from level 1: TEA's real source structure splits maneuvers into a Level-1 base set and Advanced Maneuvers unlocked one at a time at levels 2, 5, and 7. Playtesting exposed a real gap: a level-1 tank has no way to actually protect an ally (Shield and Taunt are both Advanced), exactly the tool a squishy caster needs from turn one.

One Maneuver per action, no stacking: a rule that was genuinely never stated anywhere until this pass, despite the whole table implicitly depending on it.

**Focus** corrected from an earlier "ignores the Guard bonus the target's armor provides," which turned out undefined against most monsters, since Enemy Generation only gives a single flat Guard number. Tested against Sunder at matched Grit-per-reduction rates and confirmed equivalent.

**Shake it off** reframed from an earlier "reduce incoming damage," which never actually said whether this was a reactive interrupt or something spent proactively, and this system has no reaction economy for the former reading.

**Guardian's Challenge** was relocated from Advanced tier: an earlier draft priced it the same as Taunt despite being strictly weaker in every dimension (conditional on a roll, capped at 2 enemies, a softer guaranteed outcome even on success).

**Command** clarified from an earlier ambiguous "makes an attack... instead of you acting," which didn't specify whether this was an extra attack or just a bonus on an attack they'd have made anyway.

**Shield** retranslated from source's "add your AV to theirs," since this system has no flat AV to add. Validated in the Highwater Road Case Study.

**Rally**'s zone restriction is now explicit — every comparable ally-buff already specified this and Rally was the one unexplained outlier.

**Cleave** corrected from an earlier "ignores armor's Guard bonus" (same undefined-against-monsters problem Focus had), and from an earlier half-damage version that let total output exceed a single full-power hit at 2+ targets — effectively free extra damage for the same 2 Grit as options that don't scale with target count at all. One-third damage lands Cleave at genuine parity with a single attack even at its maximum 4 targets.

**Second Wind** loosened from an earlier "once per Wound cycle," a term that needed its own paragraph to define and still landed badly; also no longer requires a Wound to have already opened. Corrected from an earlier "weapon die + CON," which let Heavy-weapon Wayfarers heal meaningfully more than Light-weapon ones for an ability that has nothing to do with what they're holding.

**Rally Cry** corrected from an earlier "+1 on their next roll," a flat roll bonus this document's own design philosophy explicitly rules out.

**Payback, removed.** Confirmed-source content, cut rather than kept — its wording ("immediately attack an enemy who just damaged an ally") implies a mid-round interrupt, but this system resolves Initiative once at the top of combat and never revisits turn order, with no reaction economy anywhere else to hook into.

### Gear-Specific Maneuvers

**Iron Palm** tested: 6.80 avg, exact parity with a plain Heavy weapon.

**Second Strike** tested: 6.38 avg, just under the Iron Palm/Heavy benchmark.

**Steady Guard** tested: 1.46 damage saved per Grit vs Guard Stance's 1.48 — essentially identical per-Grit efficiency, confirming the doc's own "same risk profile as Guard Stance" claim.

**Guarded Strike** retested as a Target shift instead of Disadvantage — too different a mechanic from its Basic-tier sibling (Shield Bash) to compare cleanly. Target+2 reduces enemy hit chance by ~19 points.

**Momentum**: the earlier ambiguity (per-use vs. once-for-the-fight) mattered — read as a one-time whole-fight passive, this same effect tested at +1.58 dmg/round sustained for a single Grit spend, dramatically stronger than anything else at this tier. Tested per-use: +1.61 dmg per Grit spent, in line with established Basic-tier rates.

**Sunder**: the original "underwhelming" finding was itself built on a buggy test — an earlier simulation tracked the armor reduction but never actually applied it to the target's Guard pool. Corrected test: even the original −1/use value produced a real 0.44-round improvement; −2/use reaches the same ceiling as −4/use against a typical 4-point armor-Guard pool, confirming −2 extracts the maximum available value efficiently.

**Shield Bash** corrected from an earlier "+2 to the target's next attack roll," ambiguously worded (read as helping the enemy hit) and, even read charitably as a Target shift, measurably too strong at +2 (73% of Guarded Strike's value for half the Grit cost). Target+1 lands at ~48% of Guarded Strike's now-matching Target+2 value.

**Full-party validation caught two real test-AI bugs**, both fixed: deterministic tie-breaking created an artificial focus-fire snowball among identically-built characters, and deterministic always-target-lowest-Guard AI made a mere +1 Guard advantage look like near-total immunity. Fixed with weighted (not deterministic) targeting. Final result: zero-death rate 92.5%, sensibly above the established band since an all-frontline party is naturally tougher than the mixed-archetype squad that band was calibrated against.

### Dual-wield / Two-Weapon Fighting

Two prior drafts didn't hold up and were replaced in turn. The first gated the only second attack behind Wayfarer-exclusive Grit Maneuvers, with numbers that were backwards. The second replaced that with a universal penalty-based double-attack, but a real PC-vs-PC duel test exposed a deeper problem: matching Heavy-weapon DPR in isolation didn't mean matching actual duel performance, since defending with Guard Stance forced a Dual-attack build to forfeit two rolls' worth of offense at once while a single-weapon build only ever forfeited one.

Final design fixes the Guard Stance asymmetry structurally — defending now costs exactly one roll's worth of offense for every build, since there's only ever one attack roll to begin with.

**Feint** tested: 6.64 avg vs a Weak target (marginal gain small there), but +18.0 percentage points of accuracy against a Standard-tier target — genuinely target-dependent by design.

**Blade Dance**: first draft (both attacks at full accuracy) tested at 12.31, nearly double the Heavy-weapon baseline; the −4 penalty on the second attack alone brought it back in line.

Fully validated with a fair four-way tournament (Heavy two-handed, Versatile+Shield, Versatile+Tower Shield, Dual-attack), all landing within a tight 45–55% band against each other. Versatile+Shield ran as the mildest underdog, which fits its actual role — it was never meant to be a fixed fourth build competing to be strongest, it's the flexible connective tissue between the other three.

### Worked Example: Combat (Design Evolution)

Four PCs vs. 4 bandits + a boss, simulated with real dice across several iterations — each one exposed a real problem and got fixed before the next.

**The party:** Grix-9 (Cyre-Built Warforged, Warbred Wayfarer, STR+1, CON 0, Guard 9, Maul). Ilyara Duskwind (Sharn-Raised Elf, Shardbound Syberist, INT−2, CON−3, Guard 2, Shard-Bolt). Pip Sootwhistle (Zil Broker Gnome, Agent, DEX+2, Guard 6, hand crossbow). Mira Emberhand (Jorasco-Marked Human, Flamesworn healer, WIS−1, Guard 6, warded rod, carries Mending Ray).

**The enemies:** 2 Blade-bandits + 2 Bow-bandits (Weak tier mooks) plus Rustmaw, a Cannith siege-wreck boss (Weak to-hit but Guard 20, 3 Wound slots, Strong attack, slow — acts every other round).

**Iteration 1** (no zones, no weapon-formula discipline): Rustmaw's damage wasn't on the shared weapon formula; Ilyara's Guard came out to a literal 0 under an earlier "Guard = 2 + CON" formula. She nearly died. Diagnosis: monster damage floating free of the PC weapon envelope, no real Guard floor.

**Iteration 2** (unified weapon formula, Guard floor of 1 on base 4): fixed Rustmaw's swinginess, but Ilyara still died in 3 rounds — a genuinely unlucky roll on one stat with the rest positive, meaning the mercy adjustment wouldn't apply. Conclusion: the dice being honest about a real outcome, not a bug.

**Iteration 3** (added zones, unlimited ranged range): archers could hit from anywhere regardless of position. Diagnosis: unlimited-range ranged weapons make positioning pointless.

**Iteration 4** (zone range capped, full fight): Grix charged alone into a zone reachable by every enemy simultaneously and died — bad positioning correctly punished, but he had zero tools to mitigate being the sole focus of five enemies.

**Iteration 5** (added Grit Maneuvers): Guard Stance and a party-wide Read the Fight alpha strike dropped Rustmaw from 20 to 8 Guard in one round; boss died round 5. Grix still died round 7, having fully spent Grit and dust winning the boss fight, leaving him defenseless against leftover archers. A second issue: the ranged trio never repositioned once archers retreated out of static reach.

**Iteration 6, final** (smart repositioning added): full squad victory, zero deaths. Rustmaw still dies round 5; remaining archers mopped up by rounds 8–9 once the party regroups in range together.

**Iteration 7, historical, mechanic since replaced:** turn order was briefly tested with TEA's confirmed Speed Roll mechanic before being replaced by the current 2d10 Initiative countdown after a separate test exposed a same-bucket tiebreak gap Speed Rolls never resolved. The finding that survived the replacement: turn-order sequencing barely affects aggregate survivability in a simultaneous round-1 ambush (35.9% vs 39.4% death rate with/without Speed Rolls) — a surprised PC has no action to interleave regardless of who else moves first.

What the whole evolution demonstrates: every "death" along the way had an identifiable, fixable cause rather than the system just being swingy — a good sign for the underlying math.

### Case Study: The Highwater Road Ambush

A full scenario test combining every system above against one specific, recurring question: can the party's tools actually save its most fragile member under sustained pressure?

**The scenario:** the party is ambushed by Kolt's Raiders (6 mook bandits — 3 Blade + 3 Bow — plus Kolt, a Standard-tier Captain with 2 Wound slots) from dense treeline cover. Three terrain zones: Road (open), Ditch (+2 target for ranged, partial cover), Treeline (Disadvantage on ranged into it, thick cover).

**The squad:** Rivet (Warforged Warbred, Guard Stat CON), Nix (Gnome Agent, Guard Stat DEX), Aeshaan (Elf Shardbound Syberist, Guard Stat INT, deliberately built INT/DEX-forward with CON dumped), Rowan (Shifter Wildspoken Syberist, Guard Stat WIS), Kessia (Human Flamesworn healer, Guard Stat WIS).

**Run 1** (group surprise, no positioning discipline): Aeshaan got focus-fired and died round 2, Rivet having wandered off toward the enemy line.

**Run 2** (per-character surprise, cascading Advantage): 3 of 5 PCs individually caught off guard. Aeshaan still died, isolated on the Road.

**Run 3** (Rivet actively tries to protect her): between being individually surprised and needing a full Round to physically move into range under the exclusive "move OR act" rule then in effect (since corrected), he couldn't arrive before she died. Finding: the bottleneck was distance and time, not tool availability. Note: under the corrected move+act rule, this specific bottleneck may no longer apply as strongly.

**Run 4, the real fix** (flexible Guard Stat + proper positioning + Shield used correctly): letting Aeshaan choose INT as her Guard Stat instead of defaulting to CON raised her Guard from 4 to 6. Rivet stays in her zone from round one. Round 2: Rivet spends his full 2-Grit budget on Shield — all four archers targeting Aeshaan are forced to Disadvantage, all four miss. She still died in round 4: Shield lasts one Round, and by round 3 it had expired with no Grit left to renew it.

**The conclusion:** three independently real, independently verified protective systems all worked exactly as intended, and none of them are a blank check against sustained multi-round focus fire from six-plus converging enemies. Shield being a single-Round tool on a two-Grit budget is correct design, not a bug. Aeshaan's build is a genuine glass cannon under this system, and four independent test runs produced the same outcome for the same underlying reason each time — a sign the system is being consistent rather than swingy.


### Advancement

Level up at XP=5×current level, resetting to 0 each time, clarifies a genuine ambiguity in the original phrasing, which never stated whether this resets each level or accumulates toward one running total. Since a single session's highest die result can never exceed 8, and every threshold past level 2 already requires more than 8, no single session can ever clear more than one level-up — the reset itself is what prevents a lucky session from skipping ahead.

The five confirmed questions work fine as a generic default, but XP questions are the actual incentive structure of a campaign. A pure dungeon-crawl table gets "meaningful relationship" as dead weight; a political-intrigue table may never see "survived Death's Door" come up. The confirmed default is listed as its own package on equal footing rather than hidden as the assumed baseline.

Why TEA's level-up reward doesn't port directly: confirmed source grants +1 to one attribute every single level, which works in TEA because its raw attribute range (1–8) is wide. It breaks this table's system, where the stat-bonus range is only six steps — porting TEA's pace would let a character max every stat within a couple of levels, erasing the scarcity the whole 3d6 stat-gen system was built around.

Vertical growth's +3 cap: without an upper bound, a character who put multiple Vertical picks into the same stat could keep climbing indefinitely.

Honest flag: Resonance Sense, Focused Inhalation, and Whispers of the Prophecy are tagged "(confirmed)" as real TEA source features — accurate for the names, but the mechanical definitions are reconstructed to fit each name and the Artificer parallels already built from them (Component Sense, Steady Hands, Masterwork Instinct), not verified against the actual source text.

**Overchannel Resilience, removed.** An L1 Syberist feature with no confirmed-source tag at all — this name was coined without any TEA basis and never actually questioned until now. Its justification was "parallel to Warforged's Battle-Worn," but that parallel doesn't hold: Battle-Worn makes sense for Warforged specifically because they're built from construct materials; a Syberist has no equivalent reason to be tougher against Wounds. It also had nothing to do with overcasting despite the name's implication.

### Tradition-Specific Options

Available at more points than the original 3 fixed slots — a survey against D&D's own Wild Shape, Rage, Animal Companion, Lay on Hands, Metamagic, Channel Divinity, and Aura of Protection found Wild Shape and an aura effect were the two genuinely structural absences.

**Shard-Split** corrected from an earlier version with no fallback at all — a genuine conditional trap, real value against groups, completely wasted against any solo target.

**Riftglass Barrier** corrected from an earlier "as a reaction," which contradicted this system's own no-reaction-economy design, the same problem that got Payback cut outright.

**Radiant Ward** tested and confirmed balanced — weaker per-ally than Shield's Disadvantage-on-attackers, but spreads across the whole zone at once, a legitimate trade.

**Sacred Flame Burst** corrected during testing: an earlier draft priced it to match Shard Bolt's single-target rate directly, which would make it strictly better than Shard Bolt against any group for the same cost.

**Zealous Rebuke** corrected from an earlier "always-on, no gate" version — genuinely undercosted for a free passive, since the bonus matched a whole 2-shard Shard Bolt cast for zero cost, unlimited uses.

**Beast Shape** tested: attack lands at 5.82 avg dmg/round vs. a Weak target for a WIS+3 build — near-exact parity with a well-built martial's Medium weapon (5.80). Without this fix, the same build's attack averages 1.05 dmg/round using dumped STR — genuinely non-viable, confirming the fix solves a real problem.

**Thorned Ground**: genuinely narrower trigger than its sibling Fractal Ward, considered for a buff but accepted as-is — a niche tool doesn't need to fire as often as a universal one to be worth the pick.

**Bloodscent**: target-dependent value, same caveat Feint already carries — tested at only +0.3 percentage points in one check at typical stat levels vs. a Standard-tier target.

**Trophies, validated by Monte Carlo:** a solo Rivet clearing 4 Weak-tier mooks spending all available Grit on Trophy bonuses averaged +8.1 total damage (~17% faster) across 2,000 trials — proportionate to a single 1-Grit Basic maneuver, not over- or under-tuned.

**Second/third Wound slot:** the second closes an old open question by tying it to the same milestone as the first Vertical stat increase big enough to matter. The third fixes a real asymmetry the level-8 encounter-scaling problem exposed — named enemies gain a third Wound slot at level 6, but PCs capped at two forever. A Monte Carlo confirmed this was the actual mechanism behind the level-8 cliff.

### Stress Test: Aeshaan's Growth Curve

An earlier pass granted flat Guard every level (not every-other) — by level 8 that produced Guard 15, of which +7 was pure automatic growth and only +2 came from actual stat choices, letting leveling-up matter more than building well. Tying flat Guard to the same cadence as stat growth fixes that.

The only edge case worth flagging: her exact starting INT value was never pinned down as a specific number in this example, so the table assumes she started with room for both Vertical picks without hitting the +3 cap early.


### Glossary

Built after this document accumulated real drift more than once — "Wound cycle" existed for a long stretch before ever getting a real definition, "Mastery" got referenced as a live mechanic in the Advancement table while never being built out anywhere, and "flat bonus" appeared in three separate abilities with no actual number attached to any of them.

**Round vs. Turn**: an earlier draft used "Turn" for both combat and exploration, importing 5e's vocabulary (where Turn means an individual's combat action) into a document that also needed the real OSE meaning (a 10-minute exploration unit) for the same word. Fixed by dropping the combat meaning entirely.

This document has no formal "short rest / long rest" mechanic — an earlier draft used that 5e-style language for what were really just a Turn of rest and a full day's rest, both already real units this system tracks natively.

**Wound cycle** — retired term, formerly used by several abilities' cooldowns, replaced with "once per scene" across the board since the concept needed its own paragraph to define and still landed badly.

### Open Threads / Next Steps (project tracking, full history)

A combat Monte Carlo benchmark exists as a standalone file (`combat_benchmark.py`). Built after several rounds of test-quality problems in one session — missing Initiative, no defensive AI, mismatched party sizes, a guard_max bug — that produced misleadingly harsh results until caught and fixed. Mook-count bug fixed and rerun: default was 8 mooks + Kolt inherited from the Case Study's arbitrary number, corrected to 6. Corrected baseline: 56.8% zero-death (up from the old, wrong 32.8%), Aeshaan dying in 35.5% of trials (down from 55.7%).

Three Agent Skills were resolved after being genuinely unquantified: Network, Supplies, Many Pockets. Many Pockets: +1 backpack slot per pick, repeatable (the orphaned "Mastery" clause, never actually built out, cut entirely). Supplies: removed outright, redundant with Leverage/Contingency. Network: reframed around its own real niche.

A trap-option audit of the Tradition-Specific Options found and resolved four real issues: Shard-Split, Zealous Rebuke, Bloodscent, Thorned Ground (see their individual entries above).

An orphaned terminology sweep found and fixed six real gaps: three Talents named but never mechanically defined (Wildsense, Speak with the Undying, Whisper Network), and three core Syberist Advancement features tagged "(confirmed)" but never actually defined anywhere (Resonance Sense, Focused Inhalation, Whispers of the Prophecy).

Minor, lower-priority inconsistency found in the same sweep: the Worked Example's "Mending Ray" spell describes closing a Wound, reflecting an early design iteration predating the current "Wounds cannot be closed mid-combat" rule. Contained within clearly-historical narrative, not live rules text.

Monk-vs-Duelist PvP duel was resolved and expanded into a full four-way tournament (see Dual-wield). Tower Shield's Guard value resolved at +2, matching Medium armor.

Guard-refill-on-Wound recalibration is done — a full level 1–8 sweep via combat_benchmark.py surfaced something bigger than "confirmed safe." A real gap was found and closed: "current Guard resets to 0" was used in every Monte Carlo test but never actually written as a rule. First pass used the wrong enemy baseline and produced numbers that looked right but weren't comparable — caught before being locked in, rerun against the correct stats. Real result: 76.5–82.0% zero-death across levels 1, 2, 4, 6, and 8, replacing the old cited 52.7–84.3%.

Scar Table needs source verification — written as a reconstruction, not a re-verified transcription, since the source PDF wasn't actively accessible when it was written.

Gear-based Grit Maneuver expansion is fully written into the actual table. A spot-check of combined effects (Guarded Strike + Focus across a 2-round exchange) found +22.6% damage output for 2 Grit spent. A later trap-option audit resolved both remaining untested pieces: Momentum's ambiguous wording, and Sunder's earlier "underwhelming" diagnosis, which was based on a buggy test that never applied its own effect. Steady Guard tested clean (1.46 vs Guard Stance's 1.48 dmg/Grit). Still open: a full exhaustive combinatorial check across all seven gear categories together hasn't been run, only individual-vs-benchmark checks.

Background overlap check fully resolved — five issues found and fixed: duplicate talent name (Gatekeeper Orc renamed to Ward Against the Deep), 4-way fear/despair redundancy differentiated, Kundarak Vault-Warden/Mror Deep Delver's trap-detection overlap fixed, Riedran Outsider/Changeling Community-Raised's mind-affecting overlap narrowed, Zil Trickster/Sharn Cutpurse's sleight overlap differentiated. The undead/fiend/aberration-resistance cluster and wilderness-tracking cluster remain, confirmed thematically justified rather than true redundancy.

Retroactive note on prior simulated combat: move+act's effect on Encounter Level Scaling was re-tested and recalibrated. Exact round counts in the earlier Worked Example/Case Study logs still technically reflect the old movement rule, but the load-bearing calibration has been redone and confirmed.

Multi-Action calibration resolved — decoupled from Blast entirely. New finding: every calibration number in this doc was tuned against a well-built reference squad — randomized/less-optimized squads run meaningfully more dangerous at identical parameters (33.6% vs 58.8% at 2 mooks).

Blast's actual usefulness resolved: settled as a damage-shape option, not a balance lever. Confirmed not to fix action economy when tested in isolation.

TEA chargen numbers were verified against the actual source PDF directly: 5 attributes, roll-under 1d10 checks, Auto-Hit+AV combat, flat 2d4 HP, Advantage/Disadvantage as roll-two-keep-best/worst, real zones, the three archetypes' actual published features, the Death's Door table, and confirmed potency-tier costs are all verified against source.

The mercy rule was redesigned after the original fix (a standing free-choice Array alongside rolling) was found to be a real exploit — a fixed safe option always available after seeing the roll makes rolling strictly dominant.

Morale tuning resolved via Monte Carlo, 5,000 trials: 16.2% break at first casualty, 27.2% at 50% down, 23.0% at captain's death, 33.6% never break at all. 66.4% of fights end in a rout at some point.

Disengaging test coverage resolved via a full automated Monte Carlo (1,000 trials, "retreat when badly hurt" AI): 73.5% clean escapes, 26.5% failed into a free attack.

~~Death's Door rescue clock~~ — **resolved, added back in.** TEA's confirmed source has a second half this document never carried over: a fainted character who survives the d6 roll isn't safe yet — if not treated within a Turn by another character, they die anyway. That ticking-clock urgency was missing entirely; now stated explicitly alongside the roll itself.

~~Minor-tier Attack spell damage may be undertuned relative to Spark-tier Shard Bolt~~ — **resolved, and it propagated into a full systematic rework of every tier's Attack spell formula, not just Minor.**

The original problem, confirmed: at common stat bonuses (+0 to +1), Minor's old average (3.5-4.5, flat 1d6+stat) barely beat or actually lost to Spark's average (4.5), despite costing roughly 466x more in gold value. Fixed Minor with two changes: a bigger single-target die (1d6→1d8) and, more importantly, a genuinely new capability Spark can never reach at any cost — a multi-target option hitting up to 2 targets in the zone.

That capability-differentiation logic then got pushed upward through the whole tier ladder rather than leaving Minor as an isolated fix: every tier's single-target/secondary line gained the caster's stat bonus for the first time (previously only Minor had one) plus a matching die-size bump (d6→d8), while every multi-target line stayed flat (no stat bonus) — deliberately mirroring the pattern already established for Minor's new option, so a cheaper tier could never accidentally outperform a pricier one just because it happened to add a stat bonus the more expensive tier's own multi-target line didn't have.

Two real bugs were caught and fixed before this was locked in, both from actually testing the numbers rather than trusting the first draft:

**Bug 1 — tier inversion.** The first version of Minor's multi-target option added the caster's stat bonus per target (1d4+stat × 2). Checked against Moderate's own multi-target line (flat d6, no stat, unlimited targets): at exactly 2 targets, Minor's stat-boosted total (9.0) beat Moderate's (7.0) — the cheaper tier outperforming the pricier one in a genuinely common scenario. Fixed by dropping the stat bonus from Minor's multi-target line entirely, matching how every other tier's multi-target line already worked.

**Bug 2 — unlimited targets, a pre-existing problem this exercise surfaced independent of the buff discussion.** Testing multi-target output against realistic mook counts (2-8 mooks in one zone, no Wound slot, one hit at/above Guard kills outright) found that Major tier's *existing, unbuffed* average (7.0) already sat inside typical mook Guard range (5-9), and Mythic's (14.0) *guaranteed* a full zone wipe regardless of how many mooks were present — a single cast trivializing an encounter built to take multiple rounds, at any tier from Major upward, with no cap in place before this pass. Fixed with an escalating target cap instead of unlimited: Minor 2, Moderate 4, Major 6, Mythic 8. Verified against the doc's own standard 6-mook encounter benchmark: Minor/Moderate/Major now all leave real mooks standing (6, 4, and 2 survivors respectively out of an 8-mook zone), while Mythic's 8-target cap still fully wipes even that size — checked and accepted as correct given Mythic's cost (~3500gp average) and rarity, not treated as a remaining bug.

Final validation: damage-per-gold-spent computed across every tier, both single- and multi-target. Confirmed the efficiency curve is *supposed* to decline as tier rises (Spark at 30 dmg/gp down to Mythic at 0.006 dmg/gp single-target; multi-target peaks at Moderate then also declines through Major and Mythic) — higher tiers were never meant to be the efficient purchase, their value is capability nothing cheaper can replicate at all (guaranteed Wounds, hitting far more targets at once), not better damage-per-gold. Mythic being the least gold-efficient option in the entire game while also being the only thing that can flatten 8 targets in one action is the correct shape for a rare, world-altering tier, not a balance problem.

~~Two open questions surfaced~~ — **both resolved.**

1. **Encounter tables** — built. A construction guide (4-5 danger entries, 2-3 non-combat texture, 1 good-news entry, reuse Reaction Check rather than baking disposition into the table itself) plus three fully worked example regions (Sharn, Eldeen Reaches, the Mournland), each an 8-entry d8 table.

2. **Travel odds beyond the wilderness-talent d8 upgrade** — resolved. Stated explicitly that the d8 upgrade isn't the only lever: a relevant Skill, Contingency, Talent, or other resource a player can plausibly justify may also improve odds or bypass a rolled event entirely, GM's discretion, same judgment call used everywhere else in this system.
### Status Effects (new) + Combat Mending Formalized

Formalized four status terms (Reeling, Rattled, Deprived, Surprised) that had been used informally throughout the document — Rally Cry already said "clear Reeling from an ally" without Reeling ever being defined as part of a genuine, named category, and "no stacking" was only ever stated for the narrow Wound-specific case despite applying to Rattled and Deprived too. One consolidated table now covers all four, referenced by name everywhere else instead of redefined per-instance.

This surfaced directly from fixing a real Combat Mending gap: it said "costs shards per normal potency tier" but never actually stated how much Guard that restored per tier — every tier did the identical "restore to current max," meaning there was never a reason to pay for anything above Minor. Fixed with the same die-progression already used for damage (Minor 1d8+stat through Mythic 4d8+stat), plus a genuine capability differentiator: Moderate tier and above also clears Reeling or Rattled, not just a bigger number at higher cost.

### Character Creation worked example, corrected

The Tavin worked example's stat-rolling step listed each roll as if already tied to a specific stat ("CHA 14, WIS 11...") rather than showing the actual free-placement step the flowchart itself requires (roll six independent values, then assign them to any stat in any order). This silently skipped over why WIS specifically ended up at 0 before the Background bonus, rather than showing the real assignment logic. Also caught: this worked example existed on the site but had never actually been written into the master document at all — added properly this pass, not just fixed in place.
### Critical Hit, relocated and a real contradiction fixed

Critical Hit only ever lived on Inventory & Items — an odd place to look for a core resolution mechanic, and it never explicitly confirmed whether it applied to Attack spells the same way it applies to weapons (it said "maximum weapon damage" specifically), despite spells rolling to-hit exactly like a weapon attack elsewhere in the rules. Moved the actual rule to Core Resolution in Foundations, where the base roll itself is taught, with a cross-reference left on Inventory & Items for anyone who lands there first.

A real contradiction surfaced while fixing this: "Disadvantage rolls never crit" existed, but only as a side-clause buried in the unrelated Advantage/Disadvantage Glossary entry — never stated as part of the actual Critical Hit rule. The rule text itself only said "doubles are checked on whichever two dice are kept," which directly implies the opposite (that Disadvantage could crit if the two worst dice happen to match). Fixed by stating the exception explicitly in Critical Hit's own definition: Advantage can still crit on matching kept dice, Disadvantage never crits under any circumstance. The Glossary's Advantage/Disadvantage entry now cross-references Critical Hit instead of duplicating (and nearly contradicting) the rule.
### Guard Stat, fully redesigned — a real exploit caught during tool-building, not theoretical

Building the character builder tool surfaced a genuine gap in the old "choose once, locked at creation" Guard Stat rule: it only ever excluded whichever *one* stat the character's currently-equipped weapon used. A character who started with a melee weapon (say STR) could legally set Guard Stat to DEX — then equip a second, ranged weapon on DEX without ever re-triggering the check, since the rule was never revisited after creation. Two weapons on two different stats, one of them still fully feeding Guard, despite the rule's entire point being that Guard Stat shouldn't double as an offensive stat.

Considered and rejected: a flat ban on STR/DEX ever being Guard Stat at all. Closes the loophole but throws out a real, legitimate build concept (physically strong and evasive) even in the single-weapon case where no actual conflict exists.

Final design: Guard Stat is no longer chosen and locked — it's calculated automatically, always the highest-bonus stat excluding cast stat (Wandslinger stat included) and the governing stat of *every* weapon currently equipped in a hand slot, not just "the" weapon. Locked in for the duration of a fight based on loadout at that moment, so there's no turn-to-turn recalculation to game.

A second exploit surfaced immediately once the first was fixed: if equipment changes could freely trigger a recalculation mid-fight, a character could draw a second weapon just to *keep* a high Guard Stat that a straight re-check would have revoked, since the old wording left it ambiguous whether recalculation happened immediately or only ever helped the player. Closed by making every equipment change (drawing, stowing, swapping what's in a hand slot) cost a full action, with recalculation happening immediately and moving in whichever direction the new exclusions actually dictate — up if a swap frees a stat, down if it conflicts with one already in use. Never a one-directional loophole, and every attempt costs a full Round regardless of which way it goes, so there's no free experimentation.

This also surfaced a real, previously-unstated general rule: nothing had ever actually said that using an already-held item costs your normal action, or that producing/stowing something is *also* a full action in its own right — Item Slots only covered backpack retrieval specifically. Generalized to cover all three: using something already in hand, drawing something new, and putting something away.

Tested against the established Highwater Road squad specifically: no change, since none of them dual-wield across two different stats — a rational choice under the old system already matched what the new automatic calculation produces for a single-weapon build. The fix only bites the narrow case it was built for.
