# Eberron × The Electrum Archive — Homebrew Notes

A hack for running the Eberron setting using *The Electrum Archive* (TEA) rules. Race and background/culture are fused into a single character-creation slot; D&D classes are reskinned onto TEA's three archetypes (Agent, Wayfarer, Syberist); dragonshard dust powers casting the way TEA's own rules describe Elder ink working; Dragonmarks are layered in as a separate, free, narrow-but-reliable talent track; and core resolution uses a 2d10 bell-curve system with its own stat generation, advantage/disadvantage, a Guard/Wound HP model, zone-based positioning, and an enemy design philosophy built around a single shared target number.

**Project status, for picking this back up cold:** the core rules (Core Resolution, Combat, HP/Guard/Wounds, Encounter Level Scaling, Enemy Generation, Economy) are mature and heavily Monte Carlo-validated throughout — trust the numbers cited inline, with one flagged exception below. The three playable archetypes (Wayfarer, Agent, Syberist — the latter with four traditions, Shardbound/Flamesworn/Wildspoken/Artificer) are all built and tested, Agent now has its own dedicated resource (Leverage/Contingency). A full Combat Procedure flowchart near the top of the combat rules gives the big-picture flow if you need to re-orient quickly. **Open Threads at the bottom of this doc is the authoritative "what's unfinished" list** — check it first before assuming anything is done, since design work discussed at length in conversation doesn't always make it into this document immediately (a real, recurring failure mode across this whole project — several fully-designed, fully-tested mechanics, and even a fully-built diagram, sat unwritten until specifically caught; always verify against the doc, not against memory of the conversation). **Two items worth knowing about specifically before touching anything:**
1. A full set of gear-based Grit Maneuvers (Iron Palm, Second Strike, Guarded Strike, Shield Bash, Sunder, dual-wield options) is designed and individually tuned but **not yet added to the actual Grit Maneuvers table** — see Open Threads for the complete tested values before writing it in.
2. **Guard now refills to its new max (floor 1) when a Wound opens**, rather than resetting to 0 — a real gap between written rules and tested code that was only just caught and fixed. Spot-checked safe at level 1, but every Monte Carlo percentage elsewhere in this document was generated under the old, harsher assumption — treat exact numbers as directionally right but not re-verified under the current rule until a full recalibration pass is done.

**Note on source accuracy:** the free rules PDF has now been reviewed directly. Confirmed from source: 5 attributes (Agility/Archive/Body/Mask/Spirit, not the homebrew 6-stat STR-through-CHA layout below), roll-under 1d10 checks, attacks that **always hit** (damage minus a flat Armor Value, capped at AV 6) rather than a to-hit roll, a flat HP pool (2d4 starting) rather than Guard/Wounds, Advantage/Disadvantage as roll-two-d10s-keep-best/worst, real zones (melee/adjacent movement, melee weapons require sharing a zone), the three archetypes and their actual published features (Skills for the class TEA calls **Fixer** — renamed **Agent**; Maneuvers/Grit for the class TEA calls **Vagabond** — renamed **Wayfarer**; and Name-Crafting for the class TEA calls **Warlock** — renamed **Syberist**, after Siberys, since "Warlock" carries D&D-specific baggage this Eberron hack doesn't want), the On Death's Door → d6 → Scar table, and spell potency tiers in order **Minor (2d6) → Moderate (2d6×2) → Major (3d6×5) → Mythic (4d6×25) drops**. Everything below the Magic and Backgrounds/Archetypes sections — the 2d10-vs-12 resolution, 6-stat layout, Advantage as 3d10-keep-2, Guard/Wounds, the exact zone-range and enemy-tier rules — is a deliberate **house variant**, not an attempt to match the source 1:1; where it diverges, that's a conscious design choice made and stress-tested at this table, flagged inline. See the Combat System Fork note near the resolution section for the open question of whether to converge back toward the real always-hit/flat-HP/AV model.

---

## Setting Terminology

**Eberron is the setting being run; The Electrum Archive is the ruleset underneath it, not the other way around.** An earlier framing of this table led with TEA's own terms and labeled Eberron's concepts as the "equivalent" — backwards, since nothing here is a reskin of TEA's setting. Eberron already exists, fully realized, with its own lore; what's actually happening is TEA's abstract rules and setting concepts get mapped onto pieces of Eberron that already do the same narrative job. Led with Eberron below, TEA's term follows as the mechanic it's standing in for.

| Eberron Concept | Runs on TEA's Concept of... |
|---|---|
| Dragonshard dust | Elder ink |
| Khyber / Syrania / the space between planes | The Realm Beyond |
| The Dragonmarked Houses | Merchant Houses |
| The Mournland | Bone spores / Spore Wilds |
| A Cannith/Silver Flame containment order | Order of Ilsaar |
| Khyber tunnels, a daelkyr-touched or Dhakaani remnant cold war | Sunless Princedoms / the Irr |
| A claimed reincarnated Dhakaani king, or a warforged claiming two minds | The Twin-Souled Emperor |

---

## Core Resolution: 2d10 vs Target 12

**The aim of this system, stated plainly before anything else:** a fast, bell-curve-shaped 2d10 resolution that stays legible at a glance, and a deliberate design constraint carried through every single system below — **situational difficulty is represented by shifting the Target number or granting Advantage/Disadvantage, never by stacking small numeric modifiers.** No "+1 for high ground, +2 for flanking, -1 for poor light" pile-ups to track. A GM has exactly two levers for "this is harder/easier than normal": move the Target (see Scenario Target Modifiers, used identically for enemy difficulty, Leverage regeneration, and any ad-hoc check), or apply Advantage/Disadvantage. Every other number on a character sheet — stat bonus, weapon tier, Guard — stays fixed and knowable; only the *target* and the *dice pool* ever move. This is the shared spine every other system in this document hangs off of, which is why it needs to come first, not get buried behind Magic and Backgrounds.

**Check format:** roll **2d10 + stat bonus**, succeed on **12 or higher**.

### Stat Bonus Generation

**One method: roll. No standing alternative to switch to.** An earlier draft offered a free-choice fixed Array alongside rolling — dropped, because if a fixed safe option is always available *after* seeing the roll, rolling becomes strictly dominant (try for the higher ceiling, retreat to the safe option risk-free if it's bad), which quietly kills the alternative as a meaningful choice rather than preserving it as one. Worlds Without Number's approach — roll first, only a rare and narrow fix for a genuinely bad result — closes that exploit instead of creating a false choice.

**Roll 3d6 per stat (summed), look up the bonus** — changed from 2d6/−3-to-+3 specifically to make the extremes rarer and narrow the total spread; 3d6 keeps a genuine bell curve while giving more room in the tails to tune how rare ±2 actually is:

| 3d6 (sum) | Bonus | Success vs 12 |
|---|---|---|
| 3–6 | −2 | 28% |
| 7–9 | −1 | 36% |
| 10–11 | 0 | 45% |
| 12–14 | +1 | 55% |
| 15–18 | +2 | 64% |

**±2 now sits at 9.3% per tier** (versus the old ±3's 2.8%, but also versus the old ±2 tier's 13.9% — the actual relevant comparison, since ±2 is now the ceiling rather than the second-highest step). ±1 at 28.2%, and a flat 0 at a genuine 25% — a real, well-shaped bell curve, not an over-flattened middle.

Assign the six results to STR/DEX/CON/INT/WIS/CHA in any order (this is a builds game — free placement lets a lucky roll go to your concept's main stat, or reinforce a stat your Background already boosts). **This placement is a real decision every time, not a formality** — a worked example walking through stat gen "in roll order" without actually reassigning them isn't demonstrating a built character, just the raw dice mechanic.

**Mercy adjustment — narrow, and only for a genuinely bad result, not a mediocre one.** If, after rolling, **no stat is positive** (every result is 0 or negative — a real outlier, not just an unlucky-but-playable spread), the player may make **one** of the following two swaps, targeting whichever stats they choose:
- Raise **two** stats to +1 each, or
- Raise **one** stat to +2.

This only fires on the actual worst-case outcome, is small and targeted rather than a full reroll or a fixed alternate spread, and can't be freely chosen alongside a good roll — there's no version of "roll for upside, fall back risk-free" left, since the trigger condition (zero positive stats) is something a player can't manufacture on purpose to game the system.

**A separate, broader safety valve: if a player is unhappy with the whole character — not a single bad roll the mercy rule already covers, but the build overall not feeling right — player and GM can agree to start over completely.** This isn't a mechanical entitlement with a trigger condition; it's a table-level judgment call, always available by mutual agreement, no restrictions on when it applies. A legal-but-joyless roll (one great stat, a cliff after it — real, and confirmed to happen even without triggering mercy) is exactly the kind of thing this exists for. It's a game — nobody should be stuck playing a character they don't want to play because the dice technically didn't fail badly enough to invoke a rule.

**Background bonuses stack freely on top**, including double-stat Backgrounds, same as before.

**Why the shift to target-12:** an earlier draft centered bonuses at an average of −1 against a target of 11 — mathematically identical, but a baseline-negative number reads badly on a character sheet in a high-fantasy builds game. Shifting the target up and the bonus table with it preserves the exact odds while removing the visual negative.

### Advantage / Disadvantage

**Mechanic:** roll **3d10**, keep the best two dice for Advantage or the worst two for Disadvantage, then add the stat bonus.

| Bonus | Normal | Advantage | Disadvantage |
|---|---|---|---|
| −3 | 21% | 43% | 7% |
| −2 | 28% | 53% | 11% |
| −1 | 36% | 62% | 15% |
| 0 | 45% | 71% | 22% |
| +1 | 55% | 79% | 29% |
| +2 | 64% | 85% | 38% |
| +3 | 72% | 89% | 47% |

Chosen over "roll twice, take the better/worse total" (needs 4 dice, swings slightly harder) because it needs only one extra die, reads intuitively, and still self-compresses correctly (biggest effect near the middle of the curve).

---

## Magic Baseline: Possession, Not Consumption

**Design goal:** keep high magic as the baseline (everlanterns, message stations, minor conveniences feel commonplace) without turning every character into a walking battery.

**Confirmed from source:** TEA's real Warlock (this doc's Syberist) casts via **Name-Crafting** — spells are cast by learning the names of spell spirits that inhabit Khyber, Syrania, or the space between planes (TEA's own term for this is the Realm Beyond), generated via random tables (Form/Adjective/Noun combined via a Template) and costed by potency tier. Confirmed tiers, in order: **Minor** (2d6 drops) → **Moderate** (2d6×2 drops) → **Major** (3d6×5 drops) → **Mythic** (4d6×25 drops).

**Homebrew addition — Spark tier, between Cantrip and Minor:**

| Tier | Cost | Avg shards | What it can do |
|---|---|---|---|
| **Cantrip** (homebrew) | Free — just possess ≥1 shard as a focus, don't spend it | 0 | Momentary, cosmetic, zero-stakes: a flicker of light, a whispered word carried across a room, a sensory flourish. **No damage, no unlocking, no real mechanical advantage** — pure flavor. On an uncertain outcome, a miss just fizzles. |
| **Spark** (homebrew) | Flat 1–3 shards (GM sets exact cost by scope) | ~2 | Small, real, single-purpose mechanical effects — mitigate one hit, a brief minor buff, a tiny utility trick. **This is the rung that was missing**: previously any real mechanical effect had to either overreach into a supposedly-cosmetic Cantrip or overpay at Minor's 2d6-shard average. Spark closes that gap with its own honest price. |
| Minor (confirmed) | 2d6 shards | 7 | Could be done without magic, but magic makes it reliable/fast — actually unlocking a door, real sustained light, scaling a sheer wall. **Attack spells: 1d6 + caster's stat bonus, single-target only** (matches a Medium weapon's exact formula) — corrected from an earlier "no damage" draft that broke the tier ladder once Spark was added below it: a higher, pricier tier can't be strictly worse for combat than a cheaper one below it. No multi-target option at this tier — Blast/AoE stays a Moderate+ privilege. |
| Moderate (confirmed) | 2d6×2 shards | 14 | Beyond mundane possibility — lightning bolts, rapid healing, invisibility. 2d6 dmg single / d6 multiple. |
| Major (confirmed) | 3d6×5 shards | 52.5 | Breaks the laws of nature — teleport, animate the dead. 4d6 dmg single / 2d6 multiple. |
| Mythic (confirmed) | 4d6×25 shards | 350 | Alters the world — resurrection, natural disasters. 8d6 dmg single / 4d6 multiple. |

The dividing line above Cantrip is clean: **Cantrip never produces a mechanical effect, only color.** The moment a player wants an actual door unlocked (not just "light so I can see the lock"), that's at minimum Spark and costs shards. This keeps the "high magic as ambient baseline" feel without letting free casting substitute for a real spell — and now there's a proportionate price for small-but-real effects instead of forcing them to either not count or cost 3–4× too much.

### Shard Bolt (Spark-tier attack cantrip)

**Fills a real gap: nothing below Moderate tier could deal damage at all, which misses the "wandslinger casually zapping things" aesthetic Eberron is actually known for.** A minor combat cantrip, priced at Spark tier:

| Shards spent (possessed, not fully consumed — see Spark cost) | Damage |
|---|---|
| 1 | 1d4 |
| 2 | 1d4+1 |
| 3 | 1d4+2 |

**No stat bonus stacks on top of the die — shard count is the only damage scaling.** To-hit still uses the caster's normal stat bonus (accuracy stays build-dependent, per Spell Resolution's Attack-spell rule), but raw damage stays flat and cheap regardless of build. This was a deliberate check against overreach: a maxed +3 caster (achievable through Vertical growth, not creation alone — see Advancement) adding their bonus to damage as well would average 7.5 at full investment — still bigger than a Heavy weapon's average. Capping the scaling at shard count alone keeps the top end (3 shards, avg 4.5) landing almost exactly on a **Heavy weapon's average** (1d8, avg 4.5) — a fully-invested cast matches a real weapon swing without outclassing the biggest weapons in the game.

**Requires Spark-tier access, not automatic from owning an item — Cantrip alone is genuinely free to anyone, Spark is the real line.** Syberist has this inherently (they're already casters); an Agent or Wayfarer needs Wandslinger specifically to unlock it. A wand or dragonshard-tipped focus item is the *tool* Shard Bolt is cast through, not a substitute for actually having Spark access — whichever stat fits the concept (INT for a proper wand, or the wielder's usual combat stat for something improvised). See Wandslinger under Archetypes for how Agent and Wayfarer specifically gain this.

### Spark Utility Spells

**Same access rule as Shard Bolt — requires Spark-tier access, not free to anyone with a shard.** Inherent for Syberist; Agent and Wayfarer need Wandslinger. Cantrip alone stays genuinely universal (zero mechanical effect, nothing to protect by gating it); Spark is the actual line.

**Shard Bolt's non-combat counterpart — Spark tier isn't just "the cheap damage option."** Eleven spells to start, several adapted from D&D's cantrip list (a genuinely well-suited source, since most of those already sit at "small, real, single-purpose" — Spark's design brief exactly). **These are a starting set, not an exhaustive list** — see Generating More Spark Spells below for the procedure to build others:

- **Whisper Latch** (1 shard) — muffle a single door or window's sound for one pass-through; no check, one-time use.
- **Guiding Mote** (1 shard) — a small light reveals the general *direction* of a specific known object within the zone, not its exact location — deliberately imprecise.
- **Steady Hand** (2 shards) — for one upcoming check, ignore a minor environmental hindrance (cold hands, unsteady footing, poor light).
- **Quick Latch** (1 shard) — a simple mundane lock or latch opens without a check. Never works on anything actually warded or magically secured — that's Ward-Reader or a real Minor-tier effect's job.
- **Cooling Breath** (1 shard) — chills a container of food or drink to safe temperature, or holds off spoilage for a day. Pure "magic as domestic infrastructure" flavor.
- **Message Mote** (2 shards) — a short, one-sentence message reaches a specific person you can see, audible only to them. A smaller cousin of House Sivis's real messaging infrastructure, not a substitute for it.
- **Mending Touch** (1 shard) — repair a small break or tear (a torn strap, a cracked cup). Doesn't work on anything destroyed outright or gear damaged mid-combat. *(D&D: Mending)*
- **Guiding Word** (1 shard) — grant Advantage on one ally's upcoming check, cast before they roll. *(D&D: Guidance)*
- **Telekinetic Nudge** (1 shard) — manipulate a small, light object at short range without physically reaching it. *(D&D: Mage Hand)*
- **Phantom Flicker** (2 shards) — a small, stationary illusory sound or image as a distraction or decoy; doesn't move or interact with anything. *(D&D: Minor Illusion)*
- **Flourish** (1 shard) — a minor supernatural flourish grants Advantage on one Intimidation-flavored check. *(D&D: Thaumaturgy)*

**Two deliberately left out:** a *Spare the Dying* equivalent would overlap with Combat Mending's auto-stabilize and Jorasco's Mark of Healing, both already covering that exact niche — a third version at a different tier just muddies which one applies in an emergency. A *Message* equivalent is already Message Mote above.

**Why these land at Spark and not Cantrip or Minor:** each does something a Cantrip explicitly can't (Cantrip is zero mechanical effect, full stop) — Quick Latch actually opens something, Guiding Mote actually reveals real information. None rise to Minor's bar either, since Minor is "could be done without magic, but magic makes it reliable and fast" (a whole toolkit's worth of lockpicking, real tracking effort) — these are too small and single-use for that, exactly the rung Spark exists to fill.

### Generating More Spark Spells

**Reuses the existing Spell Name generation system (Form/Adjective/Noun, see Spell Names below) rather than requiring a hand-authored list forever.** The Form word specifically suggests a utility category — most Form-table entries map naturally onto one of the six categories the eleven spells above already cover:

| Category | Example Form words that suggest it |
|---|---|
| Detection/Perception | Eye, Gaze, Oracle |
| Object Manipulation | Hand, Finger, Grasp, Lock |
| Communication | Voice, Word, Whisper |
| Minor Alteration/Repair | Mask, Cloak, Charm |
| Concealment/Distraction | Veil, Silhouette, Shadow |
| Aid/Advantage-granting | Guide, Ward, Blessing |

**Procedure:** roll or pick a Noun (from the caster's own tradition table) and a Form (shared table) same as generating any spell name; combine per the normal Template. Consult the Form word's natural category above (or the closest fit if it's not listed — most Form words suggest an obvious one on inspection) to decide what the effect actually does. Price at 1–3 shards by scope, using the eleven spells above as calibration anchors — a Guiding-Mote-scale effect is 1 shard, a Message-Mote-scale effect is 2. If a Form word doesn't suggest any utility category at all (Blade, Bolt, Claw — clearly combat-shaped), treat it as an Attack-spell option instead, following Shard Bolt's model rather than forcing a utility interpretation that doesn't fit.

**Casting a spell always means proposing an effect and letting the GM price its tier** (confirmed Name-Crafting) — there is no separate fixed list of Syberist "features" that duplicate what freeform casting already covers. A Syberist who wants a personal ward, a burst of resilience, or a defensive trick just casts that as a spell at whatever tier the GM judges it, the same as any other effect. Anything that reads like "here is a named ability with its own fixed cost" for a caster archetype should be checked against this rule first — if it's just a spell wearing a feature's name, it's redundant with the system the archetype already has.

### Overcasting

**Only applies to Minor, Moderate, Major, and Mythic tier — the refined-shard economy. There is no overcasting Cantrip or Spark.** Those two tiers run on raw shards (dust) with a flat, known cost (Spark: 1–3 shards, chosen not rolled; Cantrip: free) — there's nothing to fall short of, since the cost is never uncertain. A character who can't afford Spark's flat cost simply can't cast it; the whole concept of "attempting anyway" only exists once a cost is being rolled on dice rather than known upfront.

**A caster can always attempt a Minor+ cast even without enough refined shards to pay for it — but the spell only actually manifests on a genuinely good roll. Fall short of that, and nothing happens except whatever the dice did to the caster.** Resolved entirely with a d6 pool — nothing to calculate.

**The Overcast Backlash Pool:**
1. **Pool size by tier:** Minor 4d6, Moderate 3d6, Major 2d6, Mythic 1d6.
2. **More than half the cost missing?** Remove one die. **No floor — the pool can hit 0.**
3. **Pool at 0 or less: instant death, no roll.** Nothing to reroll, nothing to soften it. This is the only way to fail this hard, and it only happens attempting Mythic tier with less than half the cost on hand.
4. **Otherwise, add rerolls equal to your CON bonus** — reroll that many of your lowest dice once each, keeping the better result. **CON never adds dice to the pool, only rerolls existing ones** — pool size stays strictly tied to tier, so no amount of CON can make a Mythic attempt look as safe as a Minor one.
5. **Roll the pool. Read the single highest die:**

| Highest die | Result |
|---|---|
| 6 | **The spell manifests.** |
| 5 | Fails to manifest. No other consequence. |
| 3–4 | Fails to manifest. Lose your next turn. |
| 2 | Fails to manifest. A Wound opens directly (no Guard absorption first). |
| 1 (every die in the pool) | Fails to manifest. Make the existing Death's Door roll (Guard &amp; Wounds: d6, 1–3 dies, 4+ faints). |

**Worked example:** a Wildspoken with CON+1 attempts Beast Shape (Major tier) with 0 shards on hand. Major's base pool is 2d6. The shortfall is total (well past half), so the pool drops to 1d6. CON+1 rerolls that one die once. First roll: 3. Reroll: 5. Keep the 5. Highest die is 5 — **the transformation fails to happen, but nothing else goes wrong.**

**Why success is gated to a natural 6, not automatic:** an earlier version let every overcast succeed regardless of the roll, with the dice pool only ever determining the backlash. That has a real problem at the extreme: a sufficiently reckless, high-CON character attempting Mythic tier with next to nothing on hand would eventually survive the backlash and get the effect anyway, given enough attempts across enough time — a world-altering spell shouldn't be reachable by volume of reckless tries with no real investment. Gating success to the same roll that determines backlash closes this: at Mythic tier with more than half the cost missing, the pool hits 0 and the attempt is instant, certain death, no roll, no exception — tested directly against 500 independent "keep attempting until success or death" simulations, and not one of them ever succeeded. A wandering lunatic with great CON and nothing invested cannot level a city by trying enough times; the first reckless attempt always kills them first.

**Design note, for anyone who wants the full history:** four earlier versions of this rule didn't work and were replaced in turn. The first scaled backlash damage to the raw shard gap, breaking badly at Major/Mythic tier (50+ damage from a caster's own miscast dice). The second capped damage at a small flat number, which made overcasting strictly better than paying, undermining the shard economy entirely. The third fixed both with percentage-scaled damage tied to the spell's own average output — mathematically sound, but required computed percentages and squared probabilities, not something resolvable at a table with just dice. The fourth replaced that with a dice pool and was close, but let every overcast succeed regardless of roll, which is what led to the city-leveling problem above. This final version fixes that by tying success itself to the same roll, and removing the pool-size floor so a sufficiently reckless attempt has a real chance of costing everything before the spell can even happen. Confirmed by testing every tier/shortfall/CON combination and validated in a full five-person party combat simulation with casters forced to overcast whenever short — zero-death rate held at 90.5%, consistent with every earlier version, confirming the final mechanic didn't change the game's overall danger level, just closed the actual exploit and made the whole thing playable with nothing but d6s. An earlier draft also added a GM-adjudicated "spell fails or manifests wrong" layer on top of the damage, attributed to confirmed source — that attribution couldn't be re-verified and was cut rather than kept on unverified authority. CON's reroll (rather than flat damage reduction) rewards the same stat investment through a system that already exists, without letting it trivialize the risk at the tier where that risk matters most.

### Spellcasting Procedure (Quick Reference)

**Traced through every branch, including the overcast edge cases, to check the whole flow holds together in one view.**

```
═══════════════════════════════════════════════════════════════════
  SPELLCASTING PROCEDURE — including Overcast Backlash in full
═══════════════════════════════════════════════════════════════════

┌─────────────────────────────┐
│ CHOOSE TO CAST                │  Attack spell (aimed at a target)
│ pick tier + Attack or Effect   │  or Effect spell (utility/buff/heal)
└──────────────┬────────────────┘
               ▼
┌─────────────────────────────┐
│ CHECK YOUR SHARDS AGAINST THE  │  Compare current shards to the
│ TIER'S POSSIBLE COST RANGE     │  tier's cost die range BEFORE
│ (known before rolling)         │  rolling — e.g. Minor 2d6 = 2-12
└──────────────┬────────────────┘
               ▼
        ┌─────────────────┐
        │ Shards cover the  │
        │ WORST-CASE roll?   │
        └────────┬──────────┘
                  │
       ┌──────────┴──────────┐
       ▼                      ▼
  YES — guaranteed        NO — this is
  safe no matter          a real gamble,
  what you roll           known BEFORE
       │                  you commit
       │                       │
       └───────────┬───────────┘
                    ▼
       ┌─────────────────────┐
       │ Choose to cast at     │  THE decision point — once you
       │ this risk level        │  commit here, there is no
       └──────────┬─────────────┘  backing out after seeing the roll
                  ▼
┌─────────────────────────────┐
│ ROLL THE TIER'S COST          │  Minor 2d6 · Moderate 2d6×2
│                                │  Major 3d6×5 · Mythic 4d6×25
└──────────────┬────────────────┘
               ▼
        ┌─────────────────┐
        │ Did the roll land  │
        │ within what you     │
        │ have?               │
        └────────┬──────────┘
                  │
       ┌──────────┴──────────┐
       ▼                      ▼
   YES, COVERED           NO, SHORT
       │                      │
       ▼                      ▼
┌───────────────┐    ┌─────────────────────────────┐
│ Pay the cost    │    │ AUTOMATIC — no further choice  │
│ Spell resolves  │    │ OVERCAST BACKLASH POOL         │
│ normally        │    │ Pool by tier: Minor 4d6 ·      │
│ (see Spell       │    │ Moderate 3d6 · Major 2d6 ·     │
│ Resolution below)│    │ Mythic 1d6                     │
└───────────────┘    └──────────────┬────────────────┘
                                     ▼
                                            ┌─────────────────────┐
                                            │ More than half the    │
                                            │ cost missing?          │
                                            └──────────┬────────────┘
                                                        │
                                             ┌──────────┴──────────┐
                                             ▼                     ▼
                                            NO                    YES
                                             │              Remove one die
                                             │              (NO floor —
                                             │               can hit 0)
                                             │                     │
                                             │          ┌──────────┴──────────┐
                                             │          ▼                     ▼
                                             │     Pool > 0              Pool = 0
                                             │          │                     │
                                             │          │                     ▼
                                             │          │            ╔═══════════════╗
                                             │          │            ║ INSTANT DEATH  ║
                                             │          │            ║ no roll at all ║
                                             │          │            ╚═══════════════╝
                                             └──────────┤
                                                        ▼
                                       ┌─────────────────────────────┐
                                       │ Add CON-bonus rerolls          │
                                       │ (reroll that many lowest        │
                                       │ dice once each, keep better)    │
                                       │ CON adds rerolls, NEVER dice —  │
                                       │ pool size stays tier-locked     │
                                       └──────────────┬────────────────┘
                                                       ▼
                                       ┌─────────────────────────────┐
                                       │ ROLL POOL, READ HIGHEST DIE    │
                                       └──────────────┬────────────────┘
                                                       │
              ┌───────────┬───────────┬───────────────┼───────────────┐
              ▼           ▼           ▼                ▼               ▼
             "6"         "5"        "3-4"              "2"         "1" (ALL dice)
              │           │           │                 │               │
              ▼           ▼           ▼                 ▼               ▼
      SPELL MANIFESTS  Fails,     Fails, lose      Fails, a Wound   Fails — make the
      (as normal)      nothing    your next turn   opens directly  existing Death's
                        else                        (no Guard       Door roll (d6:
                        happens                      absorption)     1-3 dies, 4+
                                                                      faints)
```



### Spell Resolution: Attack vs. Effect

**This table's fork (Roll-to-Hit + Buffer, see Combat Model Selection) applies to weapon attacks — extending it to every spell without distinction stacks a to-hit roll on top of an already-real shards cost, which is a double tax for effects that were never actually "aimed" at anyone.** Splitting spells into two categories fixes this without adding new dice math:

- **Attack spells** — a projectile or blast genuinely aimed at a target (Bolt/Blade/Dart-form effects, anything doing a weapon's job). **The caster rolls to-hit, exactly like a weapon attack**, on top of the normal shards cost per potency tier. This is the fair case: since it's competing directly with a weapon's role, it plays by a weapon's rules — the roll is the real cost of scaling damage past a fixed weapon die.
- **Effect spells** — everything else: wards, buffs, debuffs, healing, utility, forced conditions, area/Blast-form effects. **No caster roll at all** — just the shards cost and an action.
  - Cast on a **willing target** (an ally, or yourself): it simply works. (This was already true in practice for Combat Mending in every worked example — this rule makes it an explicit, intentional category instead of an unstated exception.)
  - Cast on an **unwilling target**: instead of the caster rolling to-hit, **the target rolls a resistance check** — 2d10 + their most relevant stat vs 12, shiftable by potency or Scenario Target Modifiers same as any other check. The roll moves to whoever's actually resisting the effect, rather than the caster rolling to "hit" something that was never a matter of aim.

Net effect: a support-leaning Syberist's actual casting load (heals, wards, buffs) drops the redundant roll entirely, while a damage-focused Syberist's attack spells stay honestly priced against weapons — cost *and* a real chance to miss, same as everyone else swinging something sharp.

---

## Spell Names (Eberron Reskin)

**Confirmed from source:** spell names are generated by rolling a d4 for a Template, then 2d8 for each Template component (Form/Adjective/Noun), combined per the Template. Reskinned below to Eberron flavor — Form and Adjective columns are largely setting-agnostic and kept close to source; the Noun column carried all the Orn-specific sci-fi vocabulary and is fully reworked, then **split by casting tradition** so a Shardbound Syberist's spell names read differently from a Flamesworn or Wildspoken one.

### Spell Name Acquisition

**Every other randomized system in this doc gives the player a choice or placement decision (stat gen, Guard Stat, Initiative ties) — spell names shouldn't be the one exception, especially in a builds-focused game.** Three methods, not one:

1. **The Ritual** (confirmed) — consume 50 shards, a full day, GM rolls a fully random name.
2. **Name-Crafting** (confirmed, level 3+) — instead of rolling, combine parts of names already known into a new one, player-directed. Its value compounds with more known names to draw from, which is exactly why the method below matters even more before level 3.
3. **Diegetic Discovery** (homebrew) — learn a name through play: translate an inscription in a ruin, pry it from a defeated rival caster's journal, bargain for it from a spirit encountered in Khyber or the space between planes. **No shards cost — this is a story reward tied to an actual quest hook, not a purchasable action.** GM and player collaboratively pick the Template and components together based on what's actually in the fiction, rather than rolling blind.

**One more small fix, free:** the **starting spell name at level 1, and any free name gained from Advancement, can be chosen instead of rolled once Name-Crafting is unlocked (level 3+)** — a build-focused player can start steering their toolkit the moment the confirmed feature exists, rather than banking blind rolls until then.

**Template (unchanged):** 1. [Noun] [Form] · 2. [Adjective] [Noun] · 3. [Adjective] [Form] · 4. [Form] of [Adjective] [Noun]

**On "Blast" specifically:** it appears in the Form table below as one option among many, but it's really a leftover naming artifact from the source's weapon-keyword lineage rather than a special spell category needing its own rules. A spell whose Form happens to be Blast (or similarly area-implying Forms like Wave, Field, Torrent) just means the player is proposing an area effect — mechanically, that's already covered by the existing potency tiers (Moderate/Major/Mythic each state a lower "multiple targets" damage figure alongside the single-target one, see Magic Baseline). No separate area-effect subsystem needed; a Blast-named spell simply defaults to using that multiple-target line. See Weapon Keywords for the same clarification on the mundane side.

**Form** (shared across traditions):

| d8.d8 | Form | d8.d8 | Form | d8.d8 | Form | d8.d8 | Form |
|---|---|---|---|---|---|---|---|
|1.1|Armor|3.1|Sigil|5.1|Mark|7.1|Steed|
|1.2|Aura|3.2|Dance|5.2|Mask|7.2|Strike|
|1.3|Beacon|3.3|Dart|5.3|Monolith|7.3|Swarm|
|1.4|Beam|3.4|Disk|5.4|Oracle|7.4|Tentacle|
|1.5|Beast|3.5|Door|5.5|Pillar|7.5|Torrent|
|1.6|Blade|3.6|Eye|5.6|Pocket|7.6|Trap|
|1.7|Blast|3.7|Fang|5.7|Prison|7.7|Veil|
|1.8|Bolt|3.8|Feast|5.8|Ring|7.8|Voice|
|2.1|Bond|4.1|Field|6.1|Ritual|8.1|Vortex|
|2.2|Bubble|4.2|Finger|6.2|Seal|8.2|Wall|
|2.3|Cascade|4.3|Gaze|6.3|Servant|8.3|Ward|
|2.4|Chariot|4.4|Grasp|6.4|Shard|8.4|Wave|
|2.5|Charm|4.5|Guide|6.5|Shield|8.5|Web|
|2.6|Claw|4.6|Gust|6.6|Silhouette|8.6|Whisper|
|2.7|Cloak|4.7|Hand|6.7|Song|8.7|Wings|
|2.8|Crown|4.8|Lock|6.8|Sphere|8.8|Word|

**Adjective** (shared, unchanged from source — carries no setting-specific vocabulary):

| d8.d8 | Adjective | d8.d8 | Adjective | d8.d8 | Adjective | d8.d8 | Adjective |
|---|---|---|---|---|---|---|---|
|1.1|Avenging|3.1|Disintegrating|5.1|Iridescent|7.1|Searing|
|1.2|Banishing|3.2|Draining|5.2|Luminous|7.2|Sensitive|
|1.3|Binding|3.3|Empowering|5.3|Maddening|7.3|Shifting|
|1.4|Blazing|3.4|Entangling|5.4|Many-Colored|7.4|Shimmering|
|1.5|Blinding|3.5|Enveloping|5.5|Mesmerizing|7.5|Sickening|
|1.6|Bright|3.6|Erratic|5.6|Oozing|7.6|Silent|
|1.7|Charming|3.7|Expanding|5.7|Paralyzing|7.7|Sleeping|
|1.8|Concealing|3.8|Fearsome|5.8|Petrifying|7.8|Slow|
|2.1|Confusing|4.1|Flaming|6.1|Piercing|8.1|Smoking|
|2.2|Consuming|4.2|Floating|6.2|Prismatic|8.2|Soothing|
|2.3|Controlling|4.3|Freezing|6.3|Pulsing|8.3|Terrible|
|2.4|Creeping|4.4|Glittering|6.4|Regenerating|8.4|Transforming|
|2.5|Crushing|4.5|Hindering|6.5|Rending|8.5|Unseen|
|2.6|Cryptic|4.6|Illusory|6.6|Repelling|8.6|Unbreakable|
|2.7|Delicate|4.7|Intoxicating|6.7|Revealing|8.7|Withering|
|2.8|Diminishing|4.8|Invisible|6.8|Screaming|8.8|Yawning|

**Noun — split by tradition.** Each Syberist archetype rolls on its own tradition's Noun table instead of one shared list:

**Arcane (Shardbound — raw dragonshard/planar power, Khyber-adjacent):**

| d8.d8 | Arcane Noun | d8.d8 | Arcane Noun | d8.d8 | Arcane Noun | d8.d8 | Arcane Noun |
|---|---|---|---|---|---|---|---|
|1.1|Dragonshard|3.1|Gloom|5.1|Specter|7.1|Maw|
|1.2|Khyber|3.2|Echo|5.2|Umbra|7.2|Talon|
|1.3|Crystal|3.3|Fracture|5.3|Nether|7.3|Gloomstone|
|1.4|Force|3.4|Cipher|5.4|Chaos|7.4|Blackglass|
|1.5|Energy|3.5|Lattice|5.5|Madness|7.5|Hollow|
|1.6|Prophecy|3.6|Abyss|5.6|Secret|7.6|Cavern|
|1.7|Negation|3.7|Distortion|5.7|Deceit|7.7|Undertow|
|1.8|Stasis|3.8|Null|5.8|Mirage|7.8|Silence|
|2.1|Void|4.1|Fathom|6.1|Glyph|8.1|Absence|
|2.2|Rune|4.2|Depth|6.2|Circuit|8.2|Entropy|
|2.3|Shadow|4.3|Chasm|6.3|Charge|8.3|Corrosion|
|2.4|Aberration|4.4|Wyrm|6.4|Static|8.4|Rust|
|2.5|Xoriat|4.5|Ichor|6.5|Pulse|8.5|Decay|
|2.6|Riftglass|4.6|Venom|6.6|Resonance|8.6|Blight|
|2.7|Warp|4.7|Husk|6.7|Fissure|8.7|Miasma|
|2.8|Sigil|4.8|Wraith|6.8|Rift|8.8|Contagion|

**Holy (Flamesworn — Silver Flame, House oaths, Syrania/order-aligned):**

| d8.d8 | Holy Noun | d8.d8 | Holy Noun | d8.d8 | Holy Noun | d8.d8 | Holy Noun |
|---|---|---|---|---|---|---|---|
|1.1|Syrania|3.1|Faith|5.1|Benediction|7.1|Censer|
|1.2|Radiance|3.2|Devotion|5.2|Communion|7.2|Chalice|
|1.3|Flame|3.3|Piety|5.3|Sacrament|7.3|Vestment|
|1.4|Judgment|3.4|Mercy|5.4|Relic|7.4|Banner|
|1.5|Purity|3.5|Wrath|5.5|Shrine|7.5|Scepter|
|1.6|Oath|3.6|Rapture|5.6|Altar|7.6|Throne|
|1.7|Vow|3.7|Glory|5.7|Temple|7.7|Law|
|1.8|Dawn|3.8|Honor|5.8|Cathedral|7.8|Decree|
|2.1|Silver|4.1|Duty|6.1|Spire|8.1|Edict|
|2.2|Halo|4.2|Covenant|6.2|Lantern|8.2|Mandate|
|2.3|Sanctity|4.3|Chorus|6.3|Torch|8.3|Tribunal|
|2.4|Daanvi|4.4|Hymn|6.4|Ember|8.4|Witness|
|2.5|Absolution|4.5|Psalm|6.5|Cinder|8.5|Testimony|
|2.6|Verdict|4.6|Litany|6.6|Ash|8.6|Confession|
|2.7|Grace|4.7|Prayer|6.7|Smoke|8.7|Solace|
|2.8|Zeal|4.8|Blessing|6.8|Incense|8.8|Redemption|

**Nature (Wildspoken — Eldeen Reaches, Gatekeepers, Lamannia/Thelanis-adjacent):**

| d8.d8 | Nature Noun | d8.d8 | Nature Noun | d8.d8 | Nature Noun | d8.d8 | Nature Noun |
|---|---|---|---|---|---|---|---|
|1.1|Lamannia|3.1|Wilds|5.1|Canopy|7.1|Horn|
|1.2|Thelanis|3.2|Bracken|5.2|Undergrowth|7.2|Den|
|1.3|Root|3.3|Fern|5.3|Deadfall|7.3|Burrow|
|1.4|Thorn|3.4|Vine|5.4|Rot|7.4|Nest|
|1.5|Storm|3.5|Bough|5.5|Growth|7.5|Migration|
|1.6|Beast|3.6|Petal|5.6|Bloomtide|7.6|Instinct|
|1.7|Bloom|3.7|Pollen|5.7|Wolfsbane|7.7|Hunger|
|1.8|Bark|3.8|Nectar|5.8|Nightshade|7.8|Prey|
|2.1|Tide|4.1|Sap|6.1|Hemlock|8.1|Predator|
|2.2|Moss|4.2|Loam|6.2|Antler|8.2|Pack|
|2.3|Fang|4.3|Silt|6.3|Hoof|8.3|Herd|
|2.4|Bramble|4.4|Marsh|6.4|Talon|8.4|Flock|
|2.5|Fey|4.5|Bog|6.5|Feather|8.5|Season|
|2.6|Grove|4.6|Fen|6.6|Hide|8.6|Harvest|
|2.7|Marrow|4.7|Glade|6.7|Pelt|8.7|Bloomsong|
|2.8|Frost|4.8|Thicket|6.8|Tusk|8.8|Wyldwood|

**Artificer (fourth Syberist tradition — invention, mechanism, and construction, Cannith-adjacent):**

| d8.d8 | Artificer Noun | d8.d8 | Artificer Noun | d8.d8 | Artificer Noun | d8.d8 | Artificer Noun |
|---|---|---|---|---|---|---|---|
|1.1|Cannith|3.1|Schema|5.1|Sparkgap|7.1|Plating|
|1.2|Making|3.2|Prototype|5.2|Relay|7.2|Weld|
|1.3|Forge|3.3|Assembly|5.3|Valve|7.3|Solder|
|1.4|Anvil|3.4|Chassis|5.4|Gauge|7.4|Tempering|
|1.5|Rivet|3.5|Engine|5.5|Lever|7.5|Quench|
|1.6|Piston|3.6|Mechanism|5.6|Pulley|7.6|Hammer|
|1.7|Gear|3.7|Contraption|5.7|Winch|7.7|Smith|
|1.8|Cog|3.8|Apparatus|5.8|Ratchet|7.8|Wright|
|2.1|Cogwork|4.1|Device|6.1|Cylinder|8.1|Artisan|
|2.2|Gearwork|4.2|Mainspring|6.2|Chamber|8.2|Craft|
|2.3|Blueprint|4.3|Flywheel|6.3|Coupling|8.3|Innovation|
|2.4|Alloy|4.4|Bellows|6.4|Linkage|8.4|Ingenuity|
|2.5|Foundry|4.5|Furnace|6.5|Armature|8.5|Precision|
|2.6|Construct|4.6|Crucible|6.6|Frame|8.6|Sprocket|
|2.7|Automaton|4.7|Mold|6.7|Housing|8.7|Escapement|
|2.8|Clockwork|4.8|Cast|6.8|Panel|8.8|Boiler|

**Corrected — these are now genuinely rollable d8.d8 tables, matching Form's actual format.** An earlier draft claimed these "matched the Form/Adjective tables" while still being plain comma-separated prose lists with no indices at all — impossible to roll 2d8 against without manually counting through the list. Fixed to the same grid structure Form already used correctly.

Sample results — four of well over a million possible combinations per tradition (4 Templates × 64 Forms × 64 Adjectives × 64 Nouns), not a limited menu: a Shardbound's *"Prison of Cryptic Khyber"* reads like a binding pulled from the deep; a Flamesworn's *"Word of Terrible Syrania"* reads like a judgment invoked from on high; a Wildspoken's *"Claw of Rending Thorn"* reads like something torn straight out of the Eldeen wilds; an Artificer caster's *"Ward of Precision Ratchet"* reads like a device schematic given a name — same generation mechanism, four distinct voices.

- **Slotted Spells (the real Syberist list):** Spend shards to buy/fuel actual combat- and plot-relevant spells (confirmed cost tiers above). This remains the resource sink that competes with gear, bribes, and House favors for your gold-equivalent.

Net effect: a broke Syberist with one shard in their pocket can still light a room or send a message, but can't throw real firepower without paying for it.

---

