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

## Background Creation Procedure

A guide for building new Backgrounds beyond what's listed below, so the list can keep growing without drifting from what already works.

**Three steps, every time, matching the shape every Background already follows:**

1. **One stat, +1.** A single Background grants +1 to exactly one stat. Reserve double-stat bonuses (Valenar's DEX/STR, Warforged's CON/STR) for backgrounds tied to an inherent *racial* trait, not a chosen career or culture — a life path doesn't double-dip, a body plan can.
2. **Two Talents.** At least one should be **passive and narrow** — Advantage on a specific, named category of check, never "all social checks" or "all combat checks." The other can be passive too, or a **narrow 1/session active trick** (a favor, an intervention, a moment of pushing past a limit). Never two strong active abilities on one Background.
3. **Gear, narrative not numeric.** 2–3 items that open doors, prove standing, or carry weight — never a hidden stat bonus. That's what Weapons & Armor and dedicated magic items are for; Background gear answers "what can this person access or prove," not "how hard do they hit." **This rule was violated in twelve Backgrounds before being caught** — items like "curved blade," "dueling axe," "hide armor," and "war-mount" sat in Gear lists implying real combat stats (a weapon tier, an armor bonus, a whole mounted-combat stat block) that were never actually granted, directly contradicting this rule while the doc enforced it everywhere else. Fixed: weapons and armor removed from Background gear entirely (the character's own Weapon & Armor choice in Character Creation is the only source of those stats), and mount-granting Talents like Horse-Kin now explicitly note that mounted access is narrative, triggered by the fiction, with no separate stat block.

**Balance check, informal but real:** before locking a new Background in, hold its two Talents up against two or three existing ones in a similar niche (does this feel as strong as *Storm Sense*? As situational as *Sworn to a Charge*?) rather than reasoning from scratch each time. This system was never meant to run on a point-buy formula — it runs on "does this feel like the others," and that only works if it's actually checked against the others.

**The tell that a Background needs trimming:** if a Talent would be useful in *most* scenes rather than *specific* ones, it's not narrow enough yet. Every Background built so far earns its Advantage by being genuinely situational — a Windrider is useless on dry land discussing politics, a Templar's discernment doesn't help someone haggle at a market. That specificity is what keeps a growing Background list from collapsing into reskins of the same generically-useful character.

## Backgrounds (Race + Culture Fused)

**Built using the Background Creation Procedure above — a growing example set, not a closed list.** Anything not covered here (a different nation, a different culture, a different life path) can be built the same way.

**Design goal:** race and nation/culture are inseparable in Eberron, so each Background does double duty — same TEA slot as always (attribute bump, 1–2 talents, starting gear), but two members of the same race raised in different places should feel genuinely different from each other.

### Elves
- **Valenar Blademarked** — +1 DEX/STR. Talents: *Ancestral Duel* (call on a war-spirit for +1 to hit, 1/session), *Horse-Kin* (Advantage on attack rolls while mounted — narrative access to a war-mount when the story calls for it, no separate stat block needed). Gear: a clan sigil, a woven cord marking readiness to ride to war.
- **Aereni Deathward** — +1 WIS. Talents: *Speak with the Undying* (Advantage communicating with or interpreting guidance from ancestor spirits, or a real standing connection to a specific Undying Court elder), *Patience of Centuries* (Advantage resisting fear or despair specifically when facing death, undeath, or the passage of time — an Undying Court devotee's whole worldview is built to make peace with exactly that). Gear: ancestral mask, funerary incense.
- **Aereni Tomb-Keeper** — +1 INT. Talents: *Keeper of Names* (Advantage recalling or researching historical and genealogical lore, especially Undying Court records), *Ward-Sworn* (Advantage detecting or resisting tampering with a sacred or warded site). Gear: sealed scroll case, funerary wax seal-kit, a small idol of a specific ancestor.
- **Aereni Exile** — +1 WIS. Talents: *Cast Out* (Advantage resisting despair specifically when isolated, rejected, or cut off from support — you've already survived losing everything once), *Marked for Return* (the Undying Court considers your exile unfinished business; GM's call on how and when that surfaces as real danger, not just flavor). Gear: no ancestral mask, deliberately absent unlike Deathward; forged travel papers; a single relic refused to give up when cast out.
- **Valenar Warband Scout** — +1 DEX. Talents: *Outrider* (Advantage tracking or navigating open terrain, especially plains and borderlands), *Read the Land* (Advantage spotting ambushes or hidden forces before they spring). Gear: riding gear, a warband token.
- **Sharn-Raised Elf** — +1 CHA. Talents: *Codeswitcher* (pass as native in any Sharn district), *Skywalk* (no penalty on skybridges/heights). Gear: forged residency papers, grapple line. No ancestral talent — deliberately cut off from tradition.

### Humans
- **Sharn Cutpurse** — +1 DEX. Talents: *Quick Fingers* (Advantage on fast, precise hand-work under time pressure — lockpicking, disarming, a quick draw; distinct from Sleight's misdirection focus below, this is about speed, not deception), *Knows a Guy* (one fence/fixer contact). Gear: lockpicks, stashed bolt-hole key.
- **Karrnathi Line Soldier** — +1 CON. Talents: *Drilled* (advantage forming up/holding a line), *Grim Discipline* (resist fear from undead). Gear: dog tags, a unit patch.
- **Brelish House Factor** — +1 CHA. Talents: *Contract Sense* (spot a bad deal), *Letter of Credit* (real line of credit with one House). Gear: fine clothes, ledger.
- **Jorasco-Marked Healer** — +1 WIS. Talents: Least Mark of Healing (see Dragonmarks), *Bedside Manner* (advantage on medicine/first-aid checks). Gear: warded rod, satchel of remedies.
- **Aundairian Magewright** — +1 INT. Talents: *Trained Hand* (Advantage operating or diagnosing minor magical infrastructure — everbright lanterns, message stations, Cannith household items), *Arcanix Credentials* (a real academic reference from Arcanix or a lesser Aundairian college). Gear: scribing toolkit, letter of academic standing, a small collection of minor non-combat enchanted trinkets.
- **Cyran Survivor** — +1 CON. Talents: *Carried the Mourning* (Advantage resisting fear or despair specifically in the face of mass loss, catastrophe, or overwhelming scale — you've already seen the worst thing you'll likely see again), *Nothing Left to Lose* (once per session, push a check past its normal limit at real personal cost, GM's call on the cost — not a clean bonus). Gear: a keepsake from a nation that no longer exists, forged New Cyre residency papers, nothing of monetary value. *Tonally heavier than the rest of this list — the Mourning is Eberron's central tragedy, an entire nation erased in a day with the cause still unknown. Worth confirming it lands right at a given table before treating it as casually selectable as the others.*
- **Thrane Templar** — +1 WIS. Talents: *Flame-Sworn* (Advantage resisting or detecting corruption, undeath, or fiendish influence — the Silver Flame's actual doctrinal purpose), *Church Authority* (real standing within the Church hierarchy; can call on local Flame-affiliated resources in most Thrane-influenced territory). Gear: a symbol of the Silver Flame worn openly, formal writ of standing from a specific cathedral or chapter.
- **Lhazaar Waverunner** — +1 DEX. Talents: *Sea Legs* (Advantage keeping balance or functioning aboard a moving vessel, or navigating by stars/coastline), *Letter of Marque* (a real or convincingly forged privateer's commission from a specific Prince, granting legal cover and a fleet contact). Gear: a boarding hook, the commission itself.
- **Riedran Outsider** — +1 WIS. Talents: *Trained Discipline* (Advantage resisting mind-affecting effects — charm, fear, possession-adjacent — a hallmark of Riedran mental conditioning), *Foreign Eyes* (Advantage spotting things "out of place" in Khorvaire specifically). Gear: nothing overtly Riedran, forged local papers, one hidden token of home. *Deliberately ambiguous whether this is a Thousand Eyes agent or a defector who escaped Riedra's control — same mechanics either way, player and GM decide the framing together.*

### Half-Elves (Khoravar)

**Corrected from an earlier draft that mischaracterized Khoravar as "less culturally distinct" than other Eberron peoples — wrong, and worth stating why.** Khoravar ("Children of Khorvaire") are a genuine third culture, not a hybrid category assimilated into either parent's — most Khoravar are children of Khoravar, generations removed from any elven ancestor they could even name. They have their own creole (Khoravar Cant, a Common/Elvish pidgin that emerges naturally across generations), and their identity is anchored by two Houses (Lyrandar and Medani) that are predominantly Khoravar-blooded, giving the culture real institutional weight. Both elven traditions explicitly reject them — the Undying Court has never admitted a half-elf, and Valenar don't believe a Khoravar can channel an ancestral spirit — which is precisely *why* Khoravar built a separate identity rather than assimilating into either.

- **Khoravar Go-Between** — +1 CHA. Talents: *Bridge-Born* (fluent in Khoravar Cant, Common, and Elvish; Advantage on checks building trust between communities that distrust each other), *Steady Ground* (Advantage resisting being rendered unconscious or dazed). Gear: forged travel papers, a keepsake marking ties to a found community rather than a blood family.
- **Lyrandar Windrider** — +1 DEX. Talents: *Storm Sense* (Advantage reading incoming weather, navigating rough seas, keeping footing on an unstable deck), *House of the Sea and Sky* (standing credit/berth aboard any Lyrandar vessel or airship — not free, but never turned away). Gear: House signet, navigator's tools, a weathered logbook.
- **Medani Warder** — +1 WIS. Talents: *Ward-Sense* (Advantage noticing an ambush, hidden threat, or a lie told to someone under your protection before it lands), *Sworn to a Charge* (once per session, act out of turn to intervene when a specific person you're retained to protect is about to be harmed). Gear: House signet, an openly-worn warding charm, a client contract or standing retainer.

**Windrider and Medani Warder are career-tied (working for a House), distinct from a Dragonmarked Heir (chosen by the mark itself)** — see Dragonmarks for the Heir template. Neither Khoravar House variant should read as "basically Lyrandar" or "basically Medani" the way a full Heir might; the House affiliation is a job built on top of Khoravar identity, not a replacement for it. The Go-Between's bridge-building thread runs under both: Windrider is a go-between for distant ports and storms, Warder is a go-between for danger and the people who can't see it coming.

### Dwarves


- **Mror Shard-Miner** — +1 CON. Talents: *Shard-Sense* (detect dragonshard deposits nearby), *Tunnel-Steady* (no penalty fighting underground). Gear: pick, dark-lantern.
- **Kundarak Vault-Warden** — +1 WIS. Talents: *Ward-Reader* (spot magical locks/traps), House Kundarak reference letter. Gear: lockbreaker tools.
- **Mror Clan Duelist** — +1 STR. Talents: *Honor-Bound* (Advantage in formal duels or honor challenges, real social weight attached to refusing one), *Blood Feud* (a specific named rival clan or individual you have a standing grudge with — bonus when facing them directly, GM's call on scope). Gear: clan sigil worn openly, a dueling scar earned in a formal challenge.
- **Mror Deep Delver** — +1 WIS. Talents: *Ruin-Sense* (Advantage predicting structural collapse or safely navigating unstable ancient architecture — distinct from Ward-Reader's lock-and-trap focus above, this is about the ruin itself trying to kill you), *Steady in the Dark* (Advantage resisting fear or panic when isolated underground with no light). Gear: rope and pitons, a fragment of unidentified pre-Dhakaani script.
- **Sharn-Settled Dwarf** — +1 CHA. Talents: *City Trained* (Advantage navigating bureaucracy, permits, or city guard interactions), *Clanless by Choice* (Advantage resisting social pressure or guilt-tripping tied to clan obligations — you've already walked away once). Gear: forged Sharn residency papers, a clan token no longer worn openly.

### Gnomes
- **Zil Broker** — +1 INT. Talents: *Whisper Network* (a standing web of informants — once per session, learn a rumor or relevant fact from a contact without needing to seek one out), *Always Listening* (advantage on overheard-info checks). Gear: coded ledger, messenger bird.
- **Korranberg Scholar** — +1 INT. Talents: *Cataloguer's Mind* (Advantage recalling or locating information within a library, archive, or the Korranberg Library network specifically), *Peer Reviewed* (a real academic reputation — Advantage on checks invoking scholarly credentials). Gear: a Korranberg Library membership token, a partial index of a personal research project.
- **Zil Trickster** — +1 DEX. Talents: *Sleight* (Advantage on close-quarters misdirection — palming, planting, or lifting something unnoticed), *Vanish in a Crowd* (Advantage disappearing into a crowded space after drawing attention). Gear: a set of forged minor documents, a deceptively plain outfit that changes character with small adjustments.

### Halflings
- **Talenta Plains Rider** — +1 DEX. Talents: *Beast-Bond* (mount won't panic/flee), *Open Sky* (never lost outdoors). Gear: a beast-taming charm, tribal markings.
- **Talenta Dinosaur Handler** — +1 WIS. Talents: *Herd-Sense* (Advantage calming, training, or reading the mood of a large beast, not limited to a personal mount), *Tracker's Eye* (Advantage following tracks or signs of passage in wild terrain). Gear: handler's goad, dried feed rations, a beast-taming manual passed down in the clan.
- **Khorvaire-Settled Halfling** — +1 CHA. Talents: *City Charm* (Advantage on first impressions with strangers — a Talenta halfling's reputation for straightforwardness works in their favor off the Plains), *Small and Overlooked* (Advantage avoiding notice in a crowd or being underestimated in a negotiation). Gear: forged city residency papers, no riding gear — deliberately settled, not just visiting.

### Shifters, Kalashtar, Changelings, Warforged
- **Eldeen Shifter** — +1 DEX/STR. Talents: *Flex* (once per encounter, choose one: Advantage on a single melee attack as claws briefly extend, or move one extra zone this Round as a speed burst), *Wildsense* (Advantage noticing natural dangers, tracking prey, or sensing a change in weather before it arrives). Gear: trap kit, a woven charm from the Towering Wood.
- **Gatekeeper Shifter** — +1 WIS. Talents: *Ward the Threshold* (Advantage detecting aberrant or planar-touched creatures and influence, tied to the Gatekeeper druidic tradition's original purpose), *Old Oath* (real standing with Gatekeeper circles in the Eldeen Reaches). Gear: a warding totem, dried herbs used in Gatekeeper rites.
- **Droaam Shifter** — +1 CON. Talents: *Hard Ground* (Advantage resisting intimidation or coercion — survival in Droaam selects for this), *Known to the Daughters* (a real, if wary, reputation within Droaam's power structure under the Daughters of Sora Kell). Gear: a token marking safe passage through a specific Droaam territory, a scavenged trophy.
- **Kalashtar Dreamwarden** — +1 WIS. Talents: *Dreamward* (sense psychic intrusion), immune to normal shard-touch (their power doesn't come from dust). Gear: meditation focus.
- **Recently-Arrived Kalashtar** — +1 CON. Talents: *Survived the Crossing* (Advantage resisting fear or despair specifically when pursued, hunted, or facing capture — smuggling out of Riedra past the Thousand Eyes and Inspired is not survived by the unlucky), *Still Listening for Riedra* (Advantage noticing signs of Inspired agents or Riedran influence specifically). Gear: forged Khorvaire papers, nothing that would mark Riedran origin if searched.
- **Fainmalar-Born Kalashtar** — +1 CHA. Talents: *Never Knew the Cage* (no inherited fear response tied to Riedra — Advantage on checks where that fear would otherwise apply), *Community Roots* (real standing within a specific Khorvaire kalashtar enclave, e.g. Fainmalar or Lotus Wood). Gear: a community token, ordinary local dress — nothing marking them as foreign, because they aren't.
- **Stage-Trained Changeling** — +1 CHA. Talents: *Unremarkable* (retcon that an NPC recognized you, 1/session), *Second Face* (a prepared alternate identity, papers included). **Like every changeling, can alter facial features, voice, and build to resemble another humanoid of similar size at will, no check needed** — a race-wide trait, not a Talent, that every changeling Background below shares; oversight caught late — the earlier version of this list built every changeling Talent around the assumption of shapeshifting without ever actually stating the baseline ability itself.
- **Changeling Infiltrator** — +1 CHA. Talents: *Cold Read* (Advantage picking up a stranger's mannerisms and speech patterns quickly enough to convincingly mimic them after brief observation), *Deep Cover* (a maintained false identity with real standing somewhere specific — not improvised, prepared in advance over real time). Gear: a second set of identity papers, notes on the person being impersonated. Shapeshifts at will, same race-wide trait as above.
- **Changeling Community-Raised** — +1 WIS. Talents: *Many Faces, One Self* (Advantage resisting effects that would alter, erase, or impersonate your identity or memory of self specifically — narrower than general mind-affecting resistance, this is about knowing who you are beneath any face, not warding off fear or charm broadly), *Hidden Kin* (a real connection to a changeling enclave most outsiders don't know exists). Gear: a token only recognizable to other Community-Raised changelings, no false papers — this one doesn't need to hide what they are. Shapeshifts at will, same race-wide trait as above.
- **Cyre-Built Warforged** — +1 CON/STR. Talents: *Battle-Worn* (when you'd roll on the Scar table, roll twice and take the better result), doesn't eat/breathe/sleep normally. Gear: repair tools, sunrod.
- **Post-War Wandering Warforged** — +1 WIS. Talents: *No Orders Left* (Advantage resisting despair or purposelessness — the central warforged question after Thronehold, made into a strength), *Read the Room* (Advantage sensing when a space or situation is genuinely hostile to warforged, and adjusting before it becomes a problem). Gear: no unit markings, deliberately removed; a personal item picked up somewhere on the road, not issued.
- **House Cannith Warforged** — +1 INT. Talents: *Factory-Trained* (Advantage operating, repairing, or diagnosing Cannith-made constructs and devices specifically), *Still Property* (a real, uncomfortable legal tie to House Cannith — GM's call on how this surfaces: obligations, tracking, a lease not yet paid off). Gear: visible Cannith unit markings, official (if restrictive) papers of standing.

### Others
- **Droaam Half-Orc Mercenary** — +1 STR. Talents: *Bad Reputation* (intimidation advantage), *Contract Killer* (bonus vs. a marked target).
- **Gatekeeper Orc** — +1 WIS. Talents: *Ward Against the Deep* (Advantage detecting aberrant creatures or planar corruption — orcs founded the Gatekeeper tradition specifically to guard against daelkyr incursion, long before shifters or druids of other races joined it), *Binding Rite* (once per session, a real (if temporary) ritual to weaken or contain an aberrant threat — GM's call on scope). Gear: a warding stake, herbs for a binding rite, a totem marking a specific guarded site.
- **Ghaash'kala Orc** — +1 CON. Talents: *Labyrinth-Sworn* (Advantage resisting fiendish corruption or temptation — the Ghaash'kala's entire purpose is standing between the Demon Wastes and the rest of Khorvaire), *Marked by the Wastes* (Advantage recognizing fiendish influence or Demon Wastes-touched creatures before others notice). Gear: ash-marked wraps, no possessions beyond what's needed for the duty.
- **Dhakaani Loremarked Goblin** — +1 STR/INT. Talents: *Old Empire* (read pre-Sundering script), ancestral weapon training.
- **Darguun Hobgoblin Soldier** — +1 STR. Talents: *Drilled to War* (Advantage forming up, holding a line, or coordinating with other trained soldiers — modern Darguun military tradition, not ancient Dhakaani lore), *Mercenary Standing* (a real reputation and contact within Darguun's mercenary companies). Gear: a mercenary company's token, service marks earned in the field.
- **Bugbear Outrider** — +1 DEX. Talents: *Unseen Until Close* (Advantage remaining unnoticed despite size — a real, trained skill among Dhakaani-heritage bugbears used as scouts), *Sudden Reach* (Advantage on the first strike in an ambush specifically). Gear: dark wraps for concealment, a trophy from a successful ambush.

*Not yet covered: Aundairian arcane-line variants beyond Magewright, Droaam's other monstrous species (medusa/harpy/gargoyle — flagged separately as outside the 5e baseline, see earlier discussion), more Sharn-specific mixed-heritage backgrounds.*

---

## Archetypes (D&D Classes → TEA Chassis)

TEA's three chassis (confirmed from source): **Fixer** (skill monkey, renamed **Agent** throughout this doc — House Agent is the actual canonical Eberron term for this exact archetype), **Vagabond** (martial/grit, renamed **Wayfarer** — Eberron's post-Last-War road-and-displacement flavor fits better than a generic descriptor), and **Warlock** (dust-caster, renamed **Syberist** after Siberys, since "Warlock" carries D&D-specific baggage — pact magic, patrons — that doesn't fit a dragonshard-and-Prophecy-flavored caster).

- **Fighter/Barbarian → Wayfarer: Warbred** — more HP/grit, fewer tricks.
- **Rogue/Ranger/Bard/Diplomat → Agent** — see Agent Flavors (Cutthroat, Emissary, Raconteur) under Leverage below for how the same chassis plays distinctly depending on Skill and Leverage focus.
- **Wizard/Sorcerer → Syberist: Shardbound** — casting sourced from raw dragonshard, the same resource TEA's own rules describe as Elder ink (mechanically identical, reflavored). **Cast stat: INT** (learned, tactical theory-craft).
- **Cleric/Paladin → Syberist: Flamesworn** — casting reflavored as Silver Flame or House-oath channeling; spell list themed around wards/healing. **Cast stat: CHA** (conviction/faith-driven, not WIS — mirrors D&D's Paladin/oath-caster pattern rather than a WIS-Cleric one).
- **Druid → Syberist: Wildspoken** — casting tied to the Eldeen Reaches / Gatekeeper tradition instead of Elder ruins. **Cast stat: WIS** (intuition, attunement to the wild).
- **Bard → Agent/Syberist hybrid: Songmark** — half skill-talents, half small spells, CHA-keyed.
- **Artificer (Syberist tradition)** — **cast stat: INT.** Started as its own fourth archetype, rebuilt into a Syberist tradition after three separate problems traced back to the same root cause: the whole Infusion subsystem was 5e's Artificer mechanic imported wholesale into a document otherwise built on OSR conventions (Turn/Round, no short/long rest split, target-shift-not-modifier-stacking) — every fix attempted (a timing rule, a corrected price on Elemental Edge, a damage floor) was patching around that mismatch rather than fixing it. Matches Wildspoken's own precedent exactly: a Druid didn't need to be its own archetype either, just a tradition with distinct Tradition-Specific Options layered onto the same shared Name-Crafting economy. Full design below.
- **Monk → Wayfarer: Unarmed/Xen'drik Ascetic** — grit spent on martial-art tricks instead of weapon damage.

### Artificer (Syberist tradition — formerly a separate archetype)

**Cast stat: INT.** Cantrip and Spark tier cast normally, reactive, in combat — same as any Syberist. **Minor tier and above never happens reactively in combat at all.** Instead, an Artificer Syberist builds their effects ahead of time as physical devices, then unleashes them later — the mad-scientist identity: build the contraption, then use it, sometimes handed to someone else entirely.

**Quick Rig — the tradition's baseline casting method, granted free at level 1 (not a Tradition-Specific Option; every Artificer Syberist has this from creation).** During downtime, Name-Craft a spell exactly as any Syberist would — roll and pay the tier's shard cost — but the effect doesn't fire immediately. It gets sealed into a crafted item (a device, a charge, a rigged-up contraption) instead. That item can later be triggered as a single action, releasing the stored effect as if it had just been cast — **by the Artificer Syberist, or by whoever else is holding it.** This is what actually delivers the "team" flavor: a real physical object that changes hands, not a buff tied to the caster.

**Building a contraption takes 1 Turn (10 minutes) of dedicated, uninterrupted work — cannot be rushed, cannot happen mid-combat.** This is the load-bearing rule that makes the whole trade-off real: without a genuine time cost, nothing would stop a player from building a brand-new effect mid-fight, which would erase the entire distinction between this and ordinary reactive Name-Crafting.

**Known contraption capacity: 1 at level 1, +1 at level 4, +1 at level 8** (same milestone cadence the old Infusion-count used — 3 max by level 8) — how many built-but-unused contraptions can exist at once. A consumable resource, not a permanent bonus: triggering one uses it up, and there's a constant, natural reason to keep building rather than infusing once and never touching the loadout again.

**Whose stat governs the trigger roll: always INT, but the INT of whoever is actually holding and triggering the device — not the Artificer Syberist's own INT.** This is what makes "hand it to a teammate" a genuine gamble rather than a strictly-better play: a scheme where the Wayfarer ends up holding the fireball-equivalent device is not always a good idea. Tested: a level-1 Artificer Syberist (INT+2) triggering their own device lands 64.0% of the time; handing the same device to a STR-focused ally (INT−1) drops that to 35.7% — a real, felt risk in exchange for freeing up the Syberist's own action that round.

**Their own Noun category for Spell Names: Artificer** — invention, mechanism, and construction-flavored names, fourth alongside Arcane/Holy/Nature, so a crafted device reads distinctly from a Shardbound cast even though both use the same underlying Name-Crafting economy. Named here in the tradition write-up but the actual 64-entry table lives with the other three, in Spell Names.

**Example contraptions, by tier — showing what actually gets built, not just the economy around it:**

| Tier | Cost | Example |
|---|---|---|
| Spark | 1–3 shards | **Glowspark** — a hand-sized device sheds dim light in Near range when triggered, hands-free afterward. **Alarm Chime** — rings audibly the moment anyone crosses a marked threshold. |
| Minor | 2d6 shards | **Shock Coil** — a thrown or handheld device deals 1d6+INT (of the holder) damage in a burst. **Grapnel Rig** — fires a line, pulling the user one zone toward a fixed anchor point. |
| Moderate | 2d6×2 shards | **Breach Charge** — a placed device deals 2d6 damage to a structure or barrier, ignoring standard hardness. **Numbing Vapor** — releases a cloud imposing Disadvantage on all rolls made by anyone in the zone who fails a resistance check. |
| Major | 3d6×5 shards | **Overcharged Blast** — a single-target device deals 4d6 damage, INT (of the holder) governs the attack roll. **Repair Frame** — restores Guard equal to 2d6+INT (of the holder) to whoever's wearing it when triggered. |

**Permanent items** — an Artificer Syberist crafting a lasting magic item (not a one-shot contraption) uses the existing Magic Items pricing (10–20× the tier's average casting cost) with a genuine choice of where in that range to land: **roll the tier's own cost die, read the result in days instead of shards, for the baseline crafting time.** Pay the top of the range (20×) to halve that time; pay the bottom (10×) to double it. Same range already established, just a real dial on it instead of a fixed number.

**Shards and time alone are never sufficient — a real workspace and resources must actually be available, GM's discretion.** Sitting in a hole for a week with the right shard count doesn't produce a magic item; the shard cost represents the raw material, not the forge, tools, references, and stable working conditions crafting genuinely requires. A Cannith enclave, a proper workshop, or comparable field-expedient setup (a GM call, not a fixed list) is a real precondition for any permanent item creation, same tier or higher than what's being built — not a separate cost added on top, just a condition that has to be true before the shard-and-time cost even applies.

**Salvaging an existing magic item:** destroying it recovers shards equal to the tier's base average casting cost (not the inflated 10–20× permanent-item price) — roughly 5–10% of what the item was actually worth built. A real loss, but genuinely useful for material nobody wants to carry around, rather than a way to convert found loot into pure shard economy at a profitable rate.

#### Tradition-Specific Options (Artificer)

- **Overclock** — once per scene: a triggered contraption's effect is rolled twice, keep the better result.
- **Field Diagnostic** — at will, free: analyze a device, ward, or mechanism to understand what it does.
- **Salvage** — once per scene: recover a spent contraption's shards instead of losing them outright (distinct from salvaging a found magic item above, which has no cooldown at all since it's destroying someone else's item, not reclaiming your own spent charge).
- **Overload Shunt** — once per scene, automatic, no action required. When hit, roll 2d6 and reduce the damage by the sum. If either die shows a 1, the reduction still applies in full — but the next roll of any kind (attack, check, anything) is reduced by the value of the other die. Tested: malfunctions on 30.6% of triggers, averaging a −3.73 penalty when it happens — a real, dramatic cost given the malfunction usually lands on the very next thing the character tries to do, often their own attack immediately following the hit that triggered it.

**A Tradition-Specific Option that was drafted and discarded: Rapid Prototype** (build a contraption in one action instead of a full Turn, at a real cost). Cut outright — even with a real cost attached, letting an Artificer Syberist build a brand-new Minor+ effect mid-combat is functionally identical to reactive Name-Crafting, which is exactly what the whole tradition's downtime-only restriction exists to prevent. No version of "faster building" avoids reopening that door.

### Wandslinger (Agent/Wayfarer minor casting option)

**Only available to Agent and Wayfarer — Syberist already has inherent casting that strictly exceeds what Wandslinger grants, so it's not offered to them.** Not a broken exploit if taken (Cantrip/Spark is already covered by their real spellcasting), just a pointless spend of a Skill or Maneuver for something already fully redundant — blocked outright rather than left as a legal-but-silly option.

**Where's the gish?** Turns out all three shapes already existed once Shard Bolt was defined — they just hadn't been named. **Hard-capped at Cantrip/Spark tier, never Minor or above** — this isn't a soft guideline, it's a structural ceiling, so there's no build path where an Agent or Wayfarer edges into real Syberist-tier spellcasting.

- **Agent:** at character creation, may take **Wandslinger** instead of one Skill choice (Swift/Network/Expertise/Many Pockets) — one fewer Skill known, in exchange for Spark-tier access (Cantrip was already free to anyone). **Ruling, updated now that Backstab has been replaced by the Agent Combat Techniques above: Shard Bolt counts as an eligible attack for Exploit the Opening and Take Aim** (it uses an attack roll, same as any weapon, per Spell Resolution) — giving an Agent-Wandslinger a genuinely distinct gish flavor: not a battle-mage, a **spellblade skirmisher** who capitalizes on an opening with a sneak-cast. Shard Bolt is treated as a Light weapon for the purposes of these two techniques' Light/Medium restriction.
- **Wayfarer:** at character creation, may take **Wandslinger** in exchange for **permanently forgoing access to one Advanced Maneuver of their choice** — not "one known maneuver," since Wayfarer Grit Maneuvers explicitly makes the entire list available to everyone from level 1, gated by Grit cost rather than a limited known-maneuvers selection. Wandslinger carves one option *out* of that full list; there's no "known" subset to trade away in the first place. A Wayfarer who takes it still has the rest of the martial toolkit (Guard bonus, every remaining Maneuver, a real weapon) plus minor casting — a straightforward frontline battle-mage, no new resource needed since Grit already ties the identity together.
- **A true full-caster gish needs no new content at all** — a Syberist who invests STR/DEX and carries a real weapon is already a completely valid build; they simply don't get Wayfarer's Guard bonus or Agent's Skills, which is the actual cost of that specialization, same trade-off philosophy running through everything else in this doc.

Both substitutive options (giving something up, not a free bonus) use whatever stat fits the concept — INT for a proper wand, DEX for an improvised focus, GM/player's call.

**Design principle carried through the rest of this doc:** every archetype should reward more than its primary stat. See *Wayfarer Grit Maneuvers* below for how this is implemented for the martial chassis; the same principle should eventually extend to Agent utility tricks (CHA/WIS-keyed) and Syberist defensive wards (CON-keyed).

### Leverage (Agent's dedicated resource)

**Agent was the only archetype with no resource of its own** — Wayfarer has Grit, Syberist draws on shards. That gap is exactly why Agent's utility always read as "a skill in a list" instead of a real pillar of the archetype. Leverage fixes it, and deliberately stays separate from shards rather than reusing them: shards are dragonshard dust, magic fuel; Leverage is explicitly *mundane* preparation — a contact, a stashed item, a favor already called in. Keeping them separate means Agent can be the one archetype whose power never touches magic at all, a real thematic anchor now that Wayfarer can dip into Wandslinger and both casters are magic-native by design.

- **Starts at 2, +1 per level** — same cadence as Grit, parity with the other resourced archetypes.
- **Regenerates during downtime, once per lull in the action — not a short-rest refresh, and deliberately not locked to any one setting.** An earlier draft tied this to "in-fiction social action" specifically, which quietly assumed something like a dense home city always being available between jobs — Eberron isn't that; a party can spend real session-time in Khyber, the Mournland, or deep in Xen'drik with zero social access at all. The player describes how they're using the downtime to prepare; **the GM — not the player — decides which mental stat (CHA/WIS/INT) actually fits that description**, removing any incentive to game which stat gets called. **Roll 2d10 + that stat vs Target 12.** Success regenerates 1 Leverage. The GM may shift the Target using the same granular Scenario Target Modifier scale used everywhere else in this system, based on how favorable the actual environment is to that kind of preparation — a barren cave with WIS chosen might push the Target up (genuinely hard to prepare with nothing around), while Sharn with CHA chosen might pull it down (a city that dense makes working an angle easy regardless of natural charm). This gives Agent a genuine mechanical reason to engage downtime, in any environment, not just idle until the next fight in a city.
- **Can be spent on an ally's behalf, not just the Agent's own declarations** — the actual "party fixer" identity, not a solo specialist reskin.

### Contingency (what Leverage actually buys)

**The genre-defining move, finally given a real mechanical shape.** Every Agent-adjacent archetype across fiction and other systems — swashbuckler, burglar, diplomat, fixer — runs on the same underlying fantasy: not "I'm good at this category of check," but **"I already prepared for this specific, unexpected moment."** Blades in the Dark's Flashback is the cleanest existing version of this, and its actual mechanism (not just its vibe) is what Contingency borrows: **cost scales with the size of the ask, GM-adjudicated the same way potency tiers are already priced.**

- **1 Leverage** — a small, plausible flashback ("I have rope," "I've been to this district before").
- **2 Leverage** — a medium one ("I've dealt with this NPC before," "I bribed a guard on the way in").
- **3+ Leverage** — something that reshapes the scene ("I already turned this guard captain," "I know exactly where this shipment is headed").

No fixed price list, same pattern Name-Crafting already established for spells — the GM prices the proposal, not a table. Declaring a Contingency retroactively "has" a specific mundane item or piece of relevant information; no roll, no prior shopping trip required, cost paid in Leverage instead.

**The confirmed Skills, briefly defined** (choose freely at creation and on level-up, per Advancement): **Swift** (no Disengage check needed, Advantage on movement-related checks), **Network** (redesigned — see below), **Expertise** (redesigned — see below), **Many Pockets** (+1 backpack slot per pick — can be taken multiple times, same repeatable shape as Expertise; "Mastery removes the action-cost of retrieving a backpack item" is cut, along with every other "Skill" reference in Advancement — Mastery was a TEA source concept whose label survived in this doc without the mechanic itself ever being built out. Not something this ruleset does; every level-up choice below is just "Skill," full stop). **Supplies removed entirely** — Leverage/Contingency already covers "I happen to have the right minor item for this" more flexibly than a fixed extra-inventory Skill ever did; keeping both was redundant, and Contingency does the job better. **Backstab removed as a Skill** — "hit someone who doesn't see it coming" isn't a distinctly Agent thing, it's genre-universal; replaced by the three combat techniques below, which are about Agent's actual forte: precise, calculating exploitation of an opening, not just landing a hit while unnoticed.

**Network, redesigned to stay distinct from what Leverage/Contingency already covers, and layered onto the base regeneration check above rather than duplicating it.** The old "a standing contact, free and reusable" overlapped directly with Contingency's own "I already know this NPC" — Leverage can already produce a contact when the fiction calls for one. Choose a real, named contact tied to a specific domain (a fence, a guard captain, a dockworkers' foreman). **Using that specific relationship for the Leverage-regeneration check above grants Advantage on the roll** — naturally CHA-flavored, and naturally most available wherever that contact could plausibly be found, but never the *only* path to regenerating Leverage the way the old version implicitly was. **A Contingency drawing on your contact's domain also costs 1 less Leverage (minimum 1).** This gives Network real mechanical teeth — measurably better at something every Agent can already attempt — instead of gatekeeping an entire resource behind one Skill pick and one specific setting.

**Expertise, redesigned — the old "reroll one check per session" was too flat and generic to reflect actual expertise, and wasn't even genuinely non-combat despite the flavor implying it.** Choose a narrow field of specific expertise, same granularity as a Background Talent — "forgery and false documents," "appraising valuables," "reading a crowd's mood," "streetwise information networks." Gain **Advantage on checks within that field, at will**, not gated to once per session. **Can be taken multiple times**, each pick adding a new distinct field, player-invented rather than drawn from the existing Background Talent pool — this keeps it clearly distinct from the cross-Background Talent access below (that stays "pick something that already exists," Expertise becomes "invent your own specialization"). No separate cap needed beyond the existing economy: an Agent who takes Expertise at every level-up gets eight narrow fields, but forgoes Swift, Network, Many Pockets, and Wandslinger entirely to get them — the opportunity cost already built into having a limited number of Skill picks across a career is the only limiter this needs.

### Agent Combat Techniques

**A real menu, chosen in the moment like a Grit Maneuver, not a passive pick-once Skill.** Resourced entirely by action economy and trigger rarity — deliberately no new currency, keeping this system at three total (Grit, shards, Leverage). Each was shaken down against the same failure modes found across every other menu this session: persistent-state triggers, weapon-die scaling, and ceiling effects on Advantage/Disadvantage.

- **Precision Strike** — this attack has Disadvantage, but deals **+2 flat damage** if it hits. Tested clean: Disadvantage costs 13–25 percentage points of hit chance at every target tier, never the near-free ceiling-effect problem Bloodscent has — the trade-off stays real regardless of what it's used against.
- **Exploit the Opening** — once per Wound that opens on a target (yours or an ally's), your next hit against them with a **Light or Medium weapon** automatically counts as a critical. Two real problems caught and fixed before this reached final form: an earlier draft keyed off "the target is unaware," which made ambushing (including PCs getting ambushed) far deadlier than intended — dropped entirely, since the existing skip-a-round Surprise mechanic already is the reward for that. A second draft keyed off "the target has an open Wound" as a standing state rather than a one-time trigger — since Wounds never close mid-combat, this would auto-crit *every* hit for the rest of any fight after the first Wound opened, especially devastating against multi-Wound bosses specifically. Fixed to trigger once per Wound *opening*, not per Wound *existing*. The Light/Medium restriction closes a third issue: an auto-crit's value is the gap between a weapon's average and maximum damage, which scales up with die size — a Heavy weapon would get more than double a Light weapon's bonus for the same cost, rewarding an off-concept build over Agent's actual Light/finesse identity.
- **Take Aim** — spend your action aiming (no attack this turn); your next attack this fight against that target, with a **Light or Medium weapon**, gets Advantage, and rolls **a second weapon damage die on top of the normal hit** — that second die's result also permanently reduces their Guard, surviving even a Wound refill. Tested against the naive version (just Advantage plus bonus dice, no lasting effect) and confirmed that version is a trap — two normal attacks across the same 2 rounds beat it, 9.32 vs 9.20 avg damage. The permanent Guard reduction is what actually justifies spending a whole round setting up: over a realistic 5-round fight, direct damage alone breaks even with just attacking normally (23.15 vs 23.21), but the lasting Guard reduction adds real ongoing value on top (+5.80), for a genuine ~25% total improvement. Same weapon-scaling problem as Exploit the Opening was found and fixed the same way — Light/Medium only. Repeat-use within a single fight checked and found self-limiting: the two-round-minimum cycle (aim, then strike) is already bound tightly enough by action economy that no additional cap was needed.

### Agent Flavors (worked examples — Rogue, Diplomat, Bard)

Three concept archetypes built on the same Agent chassis, differentiated by *what kind* of Contingency each leans into and how Leverage regenerates for them specifically:

**Rogue / "Cutthroat" (Burglar/Scout register):** Contingencies skew physical and logistical — the rope was already there, the window was already unlocked, the guard patrol's timing was already known. Leverage regenerates through **casing a location** (a successful Swift/Expertise check made *before* the job, during downtime) rather than social contact-building. Pairs naturally with Exploit the Opening/Take Aim and Many Pockets.

**Diplomat / "Emissary" (Political fixer register):** Contingencies skew relational and informational — this noble already owes a favor, this trade dispute was already settled quietly, this rumor was already planted. Leverage regenerates through **successful Network use** and genuine downtime spent on political maneuvering. Pairs naturally with the cross-Background Talent access (reaching into a House Factor or Zil Broker's Talent list fits this concept precisely) and the team-facing Leverage spend, since a Diplomat's whole value is often setting up *someone else's* success.

**Bard / "Raconteur" (Performer/Connector register):** Contingencies skew social and reputational — this crowd already loves you, this rival performer already owes you one, word already got around before you arrived. Leverage regenerates through **successful performance or entertainment checks**, and this is the flavor where the team-facing spend is the whole point — a Bard-Agent handing an ally a Contingency ("actually, they already know you by reputation") is the direct mechanical version of Bardic Inspiration, just reskinned as prepared favor-calling instead of an in-the-moment magical boost.

**All three use identical mechanics underneath — same Leverage cadence, same Contingency cost table — differing only in what regenerates Leverage and what kind of fiction a Contingency plausibly covers.** Same design pattern as Syberist's three traditions differing only in cast stat and Spell Names flavor: one real system, several genre-accurate skins.

**Worked PCs, one per flavor:**

**Vex — Rogue-Agent (Sharn Cutpurse).** Stats: DEX +3, INT +1, STR +0, CON +0, WIS −1, CHA −1. Guard 5, Wounds 1, Leverage 2. Talents: Quick Fingers, Knows a Guy (Background) + Many Pockets (Skill), leans on Exploit the Opening and Take Aim in combat. *Contingency moment:* caught on a rooftop with no rope in inventory — spends 1 Leverage, declares "I looped a line across this gap on the way up." Small, plausible, cheap — the physical/logistical register in action.

**Adaine — Diplomat-Agent (Brelish House Factor).** Stats: CHA +3, INT +2, STR +1, DEX +1, CON −1, WIS −2. Guard 4, Wounds 1, Leverage 2. Talents: Contract Sense, Letter of Credit (Background) + Network, Expertise: trade law and contract disputes (Skills). *Contingency moment:* needs the baron's steward to grant an audience today — spends 2 Leverage, declares "I already settled his cousin's trade dispute last season." Medium ask, reshapes an NPC's disposition rather than just supplying an item.

**Coswell — Bard-Agent (Zil Trickster).** Stats: CHA +2, DEX +1, STR +1, CON −1, INT −1, WIS −2. Guard 4, Wounds 1, Leverage 2. Talents: Sleight, Vanish in a Crowd (Background) + Network, Swift (Skills). *Contingency moment:* an ally is about to be thrown out of a noble's party — Coswell spends 2 Leverage **on the ally's behalf**: "Actually, the hostess already knows your name — I made sure of that last week." The team-facing spend in action, the direct mechanical cousin of Bardic Inspiration.

**One honest observation holding all three side by side: every single one dumped WIS and carries a fragile Guard (4–5).** Not a coincidence of these particular rolls — the archetype's actual shape reasserting itself the same way the earlier archetype breakpoint test showed: Agent trades toughness for width, consistently, regardless of which genre-flavor sits on top. A useful confirmation that these are genuinely the same chassis wearing different skins, not three different archetypes in disguise.

---

## Dragonmarks

**Design goal:** keep marks entirely separate from the dust economy — narrow, fixed, **free** (no shard cost), reliable, gated by Background. This gives House-blooded characters a small always-on identity that doesn't compete with the Syberist's resource game.

- Only House-lineage Backgrounds can take a mark: Cannith, Lyrandar, Kundarak, Sivis, Vadalis, Tharashk, Deneith, Ghallanda, Jorasco, Orien, Medani, Phiarlan/Thuranni.
- One fixed effect, no dust cost, usable a limited number of times per session/rest (start with 1–2 uses).
- **Marks now scale by character level, tied to the same milestones Advancement already uses** — not a separate track to manage:

### Mark Progression

| Level | Mark Tier | What happens |
|---|---|---|
| 1 | **Least** | Available from character creation if a House-lineage Background is chosen |
| 4 | **Lesser** | The mark's existing trick strengthens or gains a second narrow use |
| 8 | **Greater** | Rare — GM's call whether it's on the table for a given campaign or House at all |
| — | **Siberys** | Never on this track. Always unique, always GM-placed, not something a character levels into |

**The upgrade should be a moment, not a tick.** Reaching level 4 or 8 is the mechanical gate, but marks grow stronger through real life-pressure in the fiction, not passive time — the GM should frame each upgrade as an actual narrative beat (a personal trial, a House-sanctioned rite, the mark flaring under real stress) rather than something that quietly happens the session a character hits the XP threshold. Same principle already established for Guard Stat and Spell Name Acquisition: mechanical readiness opens the door, the fiction is what walks through it.

### Mark Tiers
- **Least Mark** — a single narrow trick.
- **Lesser Mark** — the trick strengthens or gains a second narrow use, still 1–2/session.
- **Greater Mark** — a genuinely strong effect; rare, likely Background-exclusive or a mid-campaign unlock rather than starting-character material.
- **Siberys Mark** — campaign-defining, essentially unique per game, GM-placed rather than player-chosen.
- **Aberrant Mark** — open to *any* Background (mark-touched by accident, not House-blooded); bigger effect than a Least Mark, but carries real backlash risk each use (e.g. a d6 mishap table instead of a clean success).

### Least Marks (all 12 Houses)

**Complete at Least tier — not a sample.** Every House has a defined Least Mark below. What's still open: Lesser/Greater/Siberys tier *specifics* per House (see Mark Progression above for the general tier framework; individual House write-ups at those tiers are a real Open Thread, not yet built).
- **Mark of Making (Cannith)** — repair or jury-rig a broken item to working order, 1/session, no tools needed.
- **Mark of Storm (Lyrandar)** — calm or stir local weather in a small area, once per session.
- **Mark of Warding (Kundarak)** — sense the presence and rough strength of any lock/trap/ward in a room, at will.
- **Mark of Finding (Tharashk)** — once/session, know the general direction of a specific person/creature/item you've seen before.
- **Mark of Healing (Jorasco)** — stabilize a dying creature or mend a minor injury, 1–2/session, no dust cost. (Distinct from the *Mending Ray* slotted spell below — this is the free, narrow, always-on version; the spell is the costed, more powerful one.)

- **Mark of Scribing (Sivis)** — once per session, a spoken or written message sent through House Sivis channels arrives without distortion, interception, or loss regardless of distance.
- **Mark of Handling (Vadalis)** — at will, sense a non-hostile animal's mood or temperament; once per session, calm or command one directly.
- **Mark of Sentinel (Deneith)** — once per session, interpose yourself as the target of an attack meant for an ally sharing your zone.
- **Mark of Hospitality (Ghallanda)** — at will, sense whether food or drink is tainted or poisoned; once per session, conjure a simple meal or a small safe resting space.
- **Mark of Passage (Orien)** — once per session, instantly know the safest and fastest route to a known destination.
- **Mark of Detection (Medani)** — at will, sense the presence of danger, poison, or an active lie within a small area.
- **Mark of Shadow (Phiarlan/Thuranni)** — once per session, become very difficult to notice or recall for a short time — not invisible, just forgettable.

All Houses now have a Least Mark defined.

### Dragonmarked Heir (a template, not tied to any one race)

**Distinct from a career-tied House Background** (like the Khoravar House variants below): most people in a marked family never manifest a Dragonmark — it's rare even within bloodlines. A Dragonmarked Heir is specifically someone the mark actually chose, a different and often more burdened thing than just working for a House.

**Lyrandar Heir** (worked example) — +1 CHA (swap for the House's thematic stat when adapting this template elsewhere)

**Talents:**
- ***Marked*** — carries the House's Least Mark for free (see Mark Progression above; scales with level regardless of standing with the House).
- ***Named Heir*** — real standing within the House hierarchy; a baron or excoriate knows your name specifically, not just your House. Advantage on checks invoking that standing.

**Gear:** a signet marking blood, not staff; a sealed letter of provisional inheritance; a small elemental-bound trinket.

**The tension worth keeping:** being Marked is a gift with real strings — Houses invest in heirs and expect returns, and excoriation (formal House exile) is a genuine threat looming over anyone who steps too far out of line. This Background should feel like starting with power and a leash.

**Excoriate Heir** — the same trade-off made concrete rather than theoretical. Per actual Eberron canon, excoriation strips House backing and status, but a Dragonmark is innate and can't be revoked — so the split lands exactly there:
- ***Marked*** stays completely unchanged — still cast the Least Mark for free regardless of standing, since the mark chose the person, not their relationship with the family.
- ***Named Heir* flips**: the same recognition that normally grants Advantage now works against the character — **Disadvantage** on checks with anyone loyal to the House, who sees a disowned traitor, not blood. The House's memory of exactly who someone is doesn't fade just because they've been cut off.

**Available as a starting Background, not just a mid-campaign consequence** — a player wanting "disgraced heir" as their actual concept from session one takes the Excoriate Heir directly: Marked, Named Heir already flipped, no House gear, no signet.

**Template usage going forward:** the same shape works for any House — swap the stat bonus, the Least Mark reference, and the flavor gear, keep Marked and Named Heir (or its Excoriate flip) as the universal talent pair.

---

## Talents & Expertise

**Confirmed from source, previously never written into this doc — a real omission, not a design choice:** Talents are the areas of expertise of a character. They grant **Advantage on relevant checks**. The Seer might even rule that a check succeeds automatically if a character is also carrying relevant equipment (e.g. the Healing talent plus a healer's toolkit to treat a wound).

**This is the universal expertise system every archetype already has access to, tied to Background rather than class.** Every Background above grants 2–3 named Talents spanning every one of the six stats depending on what a player picked at creation — Kundarak Vault-Warden's Ward-Reader is INT/WIS-flavored, Aereni Deathward's Speak with the Undying is WIS, Brelish House Factor's Contract Sense is INT/CHA, Karrnathi Line Soldier's Grim Discipline is STR/CON. A character's non-primary-stat relevance was never actually archetype-gated — it's been sitting in the Background choice the whole time, just never stated as mechanically live.

**Agent's extra reach:** at character creation, an Agent may take **one additional Talent from any other Background's list**, not just their own — representing the wide-ranging connections and borrowed expertise that fits Agent's existing "knows a guy for everything" identity (Network, Many Pockets). This is the resolution to Agent's missing INT/WIS hook: rather than inventing new content, an Agent wanting an INT angle just takes Ward-Reader; wanting WIS, takes Speak with the Undying. No new mechanics, just wider access to the pool every other archetype already draws from.

---

## Languages

**Common** is free to everyone, no cost.

**Illiteracy:** INT bonus of **−2 or lower** means a character can speak known languages but cannot read or write any of them, Common included. Deliberately harsh rather than softened to −3 only — dumping INT should have a real, felt consequence, not just a smaller number on a check sheet.

**Extra languages:** **+1 language per positive point of INT bonus** — INT+1 grants 1 extra, INT+2 (the new max) grants 2. Player's choice which languages, drawn from any in the setting.

**Non-human Backgrounds grant their ancestral language for free**, separate from the INT-based count — it represents growing up speaking it, not scholarly aptitude, so it doesn't compete with the same pool. Humans have no equivalent, since Common already functions as their default tongue.

| Group | Ancestral language |
|---|---|
| Elves (all variants) | Elvish |
| Dwarves | Dwarvish |
| Halflings | Halfling |
| Gnomes | Gnomish |
| Khoravar | Khoravar Cant (see Half-Elves background) |
| Orcs, Half-Orcs | Orc |
| Goblins, Hobgoblins, Bugbears | Goblin |
| Shifters | none unique — Common or a regional tongue |
| Kalashtar | Quori |
| Changelings | none unique — defaults to whatever community raised them |
| Warforged | none — constructs have no ancestral tongue, Common only |

---

---

## Character Creation (Quick Reference)

**Reconstructed as one sequence, not previously stated anywhere as such — built specifically to shake down the procedure, and it surfaced two real gaps now resolved.** Useful as a big-picture map before diving into each individual system's detail.

```
═══════════════════════════════════════════════════════════════════
  CHARACTER CREATION — reconstructed, not previously stated as one sequence
═══════════════════════════════════════════════════════════════════

┌─────────────────────────────┐
│ 1. CHOOSE BACKGROUND          │  Race + Culture fused slot
│    (race + culture)           │  → +1 stat (or +1/+1 if racial)
└──────────────┬────────────────┘  → 2 Talents
               │                   → 2-3 gear items
               │                   → ancestral language IF non-human
               ▼
┌─────────────────────────────┐
│ 2. CHOOSE ARCHETYPE            │  Wayfarer / Agent / Syberist (4 traditions)
│    (+ tradition if Syberist)   │  Syberist only: Shardbound(INT) /
└──────────────┬────────────────┘  Flamesworn(CHA) / Wildspoken(WIS)
               │
               ▼
┌─────────────────────────────┐
│ 3. ROLL STATS (3d6 ×6)        │
└──────────────┬────────────────┘
               │
               ▼
        RESOLVED: mercy rule checks
        the RAW roll, BEFORE step 1's
        Background bonus stacks —
        the rule exists to catch bad
        DICE, not a bad final total.
               │
               ▼
     ┌─────────────────┐
     │ No stat positive?│──YES──▶ Mercy: raise 2 stats to +1,
     │ (raw roll only)   │         or 1 stat to +2 (player's choice)
     └────────┬──────────┘
              │ NO
              ▼
┌─────────────────────────────┐
│ 4. ASSIGN rolled bonuses to    │  Free placement across
│    STR/DEX/CON/INT/WIS/CHA     │  the six stats
└──────────────┬────────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 5. APPLY Background's stat     │  From step 1
│    bonus on top                │
└──────────────┬────────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 6. CHOOSE GUARD STAT           │  Default CON, any allowed EXCEPT
│    (must differ from weapon/    │  weapon/cast/Wandslinger stat —
│    cast/Wandslinger stat)       │  all locked together at creation,
└──────────────┬────────────────┘  never re-checked later
               │
               ▼
┌─────────────────────────────┐
│ 7. CHOOSE WEAPON(S)            │  Check Weapon Proficiency vs
└──────────────┬────────────────┘  FINAL (post-Background) stats
               │
        ┌──────┴──────┐
        ▼              ▼
   Requirement met?  Requirement failed
        │              │ (e.g. STR too low
        ▼              │  for Heavy melee)
   Weapon confirmed     ▼
        │         Fall back to the
        │         highest tier actually
        │         qualified for, or go
        │         ranged instead — loop
        │         back to this step
        └──────┬───────┘
               ▼
┌─────────────────────────────┐
│ 8. CHOOSE ARMOR                │  Check Armor requirement vs
│                                 │  FINAL stats + archetype bonus
└──────────────┬────────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 9. CALCULATE GUARD             │  4 + [Guard Stat bonus]
│                                 │  + [Wayfarer +2, if applicable]
│                                 │  + [armor bonus]
└──────────────┬────────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 10. WOUND SLOTS = 1             │  Fixed at level 1, not a choice
└──────────────┬────────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 11. LANGUAGES                  │  Common: free
│                                 │  INT ≤ −2: illiterate (all langs)
│                                 │  INT > 0: +1 language per point
│                                 │  Non-human: + ancestral language
└──────────────┬────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────┐
│ 12. ARCHETYPE-SPECIFIC STARTING CHOICES            │
├─────────────────────────────────────────────────┤
│ Agent:    choose 1 Skill (or Wandslinger instead)  │
│           Leverage starts at 2                     │
│                                                     │
│ Wayfarer: Grit starts at 2; ALL Maneuvers already   │
│           available (or Wandslinger removes access  │
│           to one Advanced Maneuver)                 │
│                                                     │
│ Syberist: roll 1 starting spell name (Name-Crafting │
│           not unlocked yet — rolled, not chosen)     │
│           Artificer tradition specifically also       │
│           starts with 1 known contraption capacity   │
└──────────────┬──────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 13. STARTING WEALTH = 200gp     │  Flexible — spend on refined
│     (flexible, not mandatory    │  shards (10gp each) or ordinary
│     shards)                     │  gear, player's choice per build
└──────────────┬────────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 14. DRAGONMARK (optional)       │  Only if House-lineage
│                                 │  Background chosen — free,
│                                 │  Least tier, at creation
└──────────────┬────────────────┘
               │
               ▼
        CHARACTER COMPLETE
```

### Choice Guidance (what makes each step's decision strong or weak)

**Shakedown-tested against real builds** (Wayfarer, Agent, and multiple Syberist traditions, real rolls) — this is what came out of actually running the flowchart, not abstract advice.

**Step 1, Background:** pick one whose stat bonus lands on the stat your archetype actually wants — a Wayfarer wants a STR/CON-boosting Background, a Syberist wants one matching their tradition's cast stat. A mismatched Background (e.g. a CHA-boosting Background on a STR-focused Wayfarer) isn't illegal, just a real, felt inefficiency for no narrative payoff unless the concept specifically calls for it.

**Step 2, Archetype:** Wayfarer = frontline durability, Agent = breadth and narrative leverage, Syberist = real spellcasting (including Artificer, the crafting-flavored tradition — build now, unleash later, sometimes hand it to someone else). If torn between two, ask which one's *dedicated resource* (Grit / Leverage / shards) sounds more fun to actually spend during play — that's usually the real answer.

**Step 3–4, Rolling and the mercy rule:** if the mercy rule fires, **raising one stat to +2 concentrates power, raising two stats to +1 spreads it** — concentration is usually the stronger pick if that stat will do double duty (see Step 6), spread is better if the build genuinely wants competence across more than one axis.

**Step 5, Assigning rolled bonuses:** **Guard Stat must differ from your weapon stat, cast stat, and Wandslinger stat if applicable** (see Guard Stat below), so put your highest roll into whichever stat matters most for offense, and your *second*-highest into a genuinely different stat you're comfortable feeding Guard — a real two-stat investment, not one mega-stat covering both jobs. This is a deliberate reversal of the more "efficient" concentrated build a Monte Carlo comparison found earlier in this project's testing: concentration measurably outsurvives a split build, which is exactly why it's now disallowed rather than encouraged.

**Step 6, Guard Stat:** default is CON, but nothing requires it — the one hard rule is it **can't be the same stat as your weapon or cast stat**, locked in together at creation and never re-checked against later gear changes. Picking a stat that's meaningfully different from your main offensive stat (a CHA-Guard Wayfarer, a WIS-Guard Shardbound) is the whole point — a genuine second identity for the character, not just a number.

**Step 7–8, Weapon and armor:** check the relevant stat against Weapon Proficiency and Armor's requirement tables *before* committing narratively to a weapon/armor concept — a STR-dumped Syberist wanting a greatsword will fail the Heavy melee requirement and need to fall back (loop back and pick again, or go ranged). Better to check requirements against final stats first, then pick flavor, than to get attached to a concept the rolled stats can't support.

**Step 9, Guard calculation:** no choice, but worth sanity-checking against the archetype breakpoint data — a Guard in the high single digits at level 1 is normal and expected, not a sign something went wrong.

**Step 11, Languages:** a high-INT build should pick languages that actually matter for the campaign's likely play (border nations, trade routes, factions the party expects to interact with) rather than defaulting to whatever sounds exotic. A −2-or-lower INT build's illiteracy is a real roleplay constraint worth embracing rather than working around — it's supposed to bite.

**Step 12, Archetype-specific choices:** an Agent's Skill choice should match their actual sub-concept (see Agent Flavors — Exploit the Opening/Take Aim for a Rogue-leaning build's combat side, Network for a Diplomat-leaning one); a Wayfarer weighing Wandslinger should ask whether losing one Advanced Maneuver access is worth Spark-tier casting for *this specific character*, not just "is it good in general"; an Artificer Syberist's one starting contraption capacity is a real, singular choice — what gets built first (and who it might get handed to) should be a deliberate call, not a default.

**Step 13, Starting wealth:** a caster (Syberist, or a Wandslinger-equipped Agent/Wayfarer) should convert a meaningful chunk of the 200gp into refined shards — 100–150gp is a reasonable starting reserve. A pure martial build with no casting at all can reasonably spend close to zero on shards and put everything into gear instead. Neither is a mistake; matching spend to what the build will actually use is the only real guidance here.

---

## Combat Procedure (Quick Reference)

**Traced directly from the written rules below, built as a full-system audit — no contradictions found in the flow itself.** Useful as a big-picture map before diving into each individual system's detail.

```
═══════════════════════════════════════════════════════════════════
  COMBAT PROCEDURE — traced directly from the written rules
═══════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│ PRE-COMBAT (once)                                                │
└─────────────────────────────────────────────────────────────────┘
   │
   ▼
┌─────────────────────────────┐
│ SURPRISE CHECK (per char)    │   Each PC: 2d10+WIS vs Target
│ target = 12 ± Scenario shift  │   (Scenario Target Modifier sets shift)
└──────────────┬───────────────┘
               │
     ┌─────────┴──────────┐
     ▼                     ▼
  SUCCESS               FAILURE
  "warns others" →     "individually
  everyone still to    surprised" →
  roll gets ADV         skips Round 1
     │                  action ONLY
     └─────────┬─────────┘
               ▼
┌─────────────────────────────┐
│ INITIATIVE (once, whole fight)│  2d10+DEX+weapon mod−armor penalty
│ sort descending, fixed order  │  Ties: higher DEX, then reroll
└──────────────┬───────────────┘
               ▼
╔═════════════════════════════════════════════════════════════════╗
║ ROUND LOOP (repeats until one side defeated/routed)              ║
╚═════════════════════════════════════════════════════════════════╝
               │
               ▼
   For each combatant, in fixed Initiative order:
               │
               ▼
        ┌─────────────┐
        │ Round 1 AND   │──YES──▶ SKIP TURN ENTIRELY
        │ individually  │
        │ surprised?    │
        └──────┬────────┘
               │ NO
               ▼
     ┌─────────────────────┐
     │ MOVE (0-1 zone)       │
     │ + ACT — same turn,    │  ← confirmed rule: move AND act,
     │ both always available │     never move-OR-act (except Heavy
     └──────────┬─────────────┘    armor's stated exception)
                │
        ┌───────┴────────┐
        ▼                 ▼
  Leaving a zone      Staying put /
  w/ live MELEE        moving into
  hostile?             empty zone
        │                 │
        ▼                 │
  DISENGAGE CHECK          │
  2d10+DEX vs 12           │
        │                 │
   ┌────┴────┐            │
   ▼          ▼            │
 PASS       FAIL           │
 (leave     (hostile       │
  clean)    free attack    │
            first, THEN    │
            still leave)   │
   │          │            │
   └────┬─────┘            │
        └─────────┬────────┘
                   ▼
        ┌─────────────────────┐
        │ TAKE ACTION:          │
        │ Attack (weapon/spell)  │
        │ OR Effect spell        │
        │ OR Grit Maneuver        │
        │ OR other                │
        └──────────┬─────────────┘
                    │
         (if Attack roll made)
                    ▼
        ┌─────────────────────────┐
        │ 2d10 + stat vs Target      │  Target = 12 baseline,
        │ (Adv/Disadv from Reeling,  │  shifted per Enemy tier /
        │  Rattled, Shield, etc.)    │  Scenario Target Modifier
        └──────────────┬─────────────┘
                        │
              ┌─────────┴─────────┐
              ▼                    ▼
            MISS                 HIT
         (no effect)               │
                          ┌────────┴─────────┐
                          ▼                   ▼
                   Doubles on the      Normal hit —
                   counted dice?       roll damage die
                          │            + bonus
                     ┌────┴────┐
                     ▼          ▼
                  CRITICAL    (not doubles,
                  → MAX        already
                  damage,      handled above)
                  no roll
                          │
                          ▼
              ┌───────────────────────┐
              │ APPLY DAMAGE            │
              │ Guard absorbs first      │
              │ (floor 0)                │
              └────────────┬─────────────┘
                            │
                 ┌──────────┴──────────┐
                 ▼                      ▼
           Damage fully           Damage overflows
           absorbed by Guard      past 0 Guard
                 │                      │
              (turn ends)     ┌─────────┴──────────┐
                               ▼                     ▼
                        Open Wound slot         NO Wound slot
                        available?              available
                               │                     │
                          ┌────┴────┐          ┌─────┴──────┐
                          ▼          │          ▼             ▼
                    WOUND OPENS      │      Mook Rule:    Named, all
                    • max Guard −2   │      auto-down/     slots full:
                    • Guard refills  │      dead, no       DEATH'S DOOR
                      to new max     │      further roll   d6 roll
                      (floor 1)      │                     1-3 dies
                    • Reeling        │                     4+ faints +
                      (Disadv next   │                     Scar table
                      roll, or 2     │
                      if "Rattled")  │
                    • roll Wound     │
                      Complication   │
                      table (d6)     │
                          │          │
                          └────┬─────┘
                               ▼
                        (combatant's turn ends)
                               │
                               ▼
                    Next combatant in Initiative order
                    (loop back to "Round 1 AND surprised?"
                     check, skipping that gate after Round 1)
                               │
               ◄───────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────────────────┐
│ END OF ROUND — MORALE CHECK (NPC groups only, each fires ONCE)   │
│  • First casualty                                                │
│  • 50% losses                                                    │
│  • Named leader/boss down (checked at −leader-bonus)              │
└──────────────────────────────┬────────────────────────────────────┘
                                │
                     ┌──────────┴──────────┐
                     ▼                       ▼
                  HOLDS                   BREAKS
              (fight continues)      (group flees/
                     │                surrenders)
                     ▼
        Any combatants left able/willing to fight
        on both sides?
                     │
          ┌──────────┴──────────┐
          ▼                       ▼
         YES                     NO
    (next Round,             COMBAT ENDS
     same Initiative
     order, minus any
     Reeling-Hard-
     bumped combatants
     now sitting last)
```

---

## Weapons & Damage

**Universal formula:** `Damage = weapon die + relevant stat bonus` — applies to PCs *and* monsters, no exceptions. Keeping everyone on one shared economy means a fight's outcome is legibly about stat/weapon/armor choices, not one side quietly using different math.

| Weapon tier | Die | Avg | Examples |
|---|---|---|---|
| Light | 1d4 | 2.5 | dagger, shortsword, hand crossbow |
| Medium | 1d6 | 3.5 | sword, axe, shortbow |
| Heavy | 1d8 | 4.5 | maul, greatsword, a heavy crossbow or greatbow (ranged), a Syberist's primary attack spell |
| Massive (monster-scale only) | 1d10 | 5.5 | natural weapons on large creatures |

A Light weapon's damage roughly doubles on a maxed stat vs. bottoming out near 1 on a poor one — real weight per point of bonus. A Massive weapon feels proportionally less stat-dependent — appropriately "just hits hard" regardless of the wielder's build.

**Heavy weapons are inherently Two-handed — closing a real gap.** An earlier draft left this unstated, which meant a Heavy weapon could theoretically be paired with a Shield (both damage *and* a Guard bonus), while Dual-attack builds (Dual-wield/unarmed) can never do that. Once caught, this directly undermined the justification for pricing Dual-attack's baseline above Heavy-weapon parity — if a single-Heavy-weapon build could optionally keep a shield anyway, it wasn't actually making the same "no shield, both hands committed" sacrifice a genuine two-weapon build makes. Stating Heavy as always Two-handed closes the loophole and makes the sacrifice symmetric between the two playstyles, which is what the Dual-attack calibration below now assumes.

**All ranged weapons are Two-handed too, regardless of tier — no Light/Medium exception.** An earlier draft assumed a Light ranged weapon (a hand crossbow) could stay one-handed and pair with a Shield, on the logic that firing a single already-loaded shot only takes one hand. That doesn't hold up: reloading — drawing the string back — needs both hands at every tier, and a weapon you can't reload one-handed isn't actually a one-handed weapon in any way that matters at the table. Rather than model a separate "one-handed to fire, two-handed to reload" timing subsystem this doc has no other machinery for, the clean rule is simpler: **any ranged weapon, any tier, requires both hands.** Weapon-and-shield becomes a genuinely melee-exclusive identity (Light/Medium melee only); ranged trades the shield's protection for range and precision instead — a real, clean tradeoff between playstyles rather than a tier-dependent patchwork with a realism gap hiding in it.

**Shield: +1 Guard, occupies a hand slot, −1 Initiative. Tower Shield: +2 Guard, occupies a hand slot, −3 Initiative** — matches Medium armor's Guard value rather than Heavy's, since it's a bigger, harder-to-maneuver shield but still "just a shield," not full-body armor; the steep Initiative penalty already carries most of its real cost. Both referenced multiple times elsewhere in this doc (Initiative, Shield Bash) without ever stating their own Guard contribution — filled in here, confirmed and closed.

### Weapon Proficiency

**A real gap, not a design choice: confirmed source explicitly gates weapons by attribute** (Maul requires Body 4+, Great Sword requires Body 6+, Shortbow/Crossbow require Agility 4+, Longbow requires Agility 6+), the same way Armor & Encumbrance's Medium/Heavy tiers require CON — but that requirement was never carried over to weapons in this doc's reskin. **The source's actual structure gives each weapon type two distinct thresholds** (a lower one and a higher one) — an earlier draft only carried that two-threshold pattern over for ranged weapons (Medium/Heavy) and gave melee a single flat gate at Heavy only, an incomplete, asymmetric translation rather than a deliberate choice. Corrected below so melee mirrors ranged's structure exactly, mapped onto this table's four tiers and translated to the −3..+3 bonus scale:

| Tier | Melee requirement | Ranged requirement |
|---|---|---|
| Light | none | none |
| Medium | STR bonus ≥ 0 | DEX bonus ≥ 0 |
| Heavy | STR bonus ≥ +1 | DEX bonus ≥ +1 |
| Massive | monster-scale only, N/A for PCs | monster-scale only, N/A for PCs |

**Mundane gold pricing — decided during Character Creator tool-building, flushed back here since it never made it into the actual rules text.** A player reading only this document had no way to know what a sword costs; this closes that gap.

| Item | Price |
|---|---|
| Light weapon | 10gp |
| Medium weapon | 25gp |
| Heavy weapon | 60gp |
| Light armor | 15gp |
| Medium armor | 50gp |
| Heavy armor | 120gp |
| Shield | 10gp |
| Tower Shield | 60gp |

Weapon and armor pricing scales with tier, Heavy costing roughly 5–6× Light — proportionate to the real mechanical gap between tiers, without needing its own derivation the way shard/magic-item pricing does (see Economy and Magic Items for that side of the economy). Shield and Tower Shield are priced at the Light and Heavy *weapon* price points respectively, not armor — they're hand-slot items, not body-slot ones.

**Melee vs. ranged is a separate axis from which stat governs the weapon — worked out during Character Creator tool-building, flushed back here.** DEX doesn't automatically mean "ranged." A DEX-based *melee* weapon (a finesse rapier, a dagger) is every bit as much a melee weapon as a STR-based one — it uses DEX for its attack roll and damage, but stays subject to melee's Two-handed rules (only Heavy is Two-handed) and can pair with a Shield exactly like a STR weapon can. Only genuinely *ranged* weapons (bows, crossbows — always DEX-governed) are inherently Two-handed at every tier and can never pair with a Shield. An earlier draft conflated "uses DEX" with "is ranged," which silently blocked Shields for finesse-melee builds that should have had full access to them. When building a character, decide melee-or-ranged first, then which stat governs it — not the other way around.

**Casting stat and weapon stat are always separate concepts, never merged — the same tool-building session surfaced this too.** A Syberist's cast stat (INT/CHA/WIS by tradition) is used only for spellcasting; if that same character also carries a physical weapon, the weapon uses STR or DEX like anyone else's, chosen independently. This holds even when the casting stat is conceptually the character's "main" stat — a Wildspoken Syberist with WIS as their defining stat still rolls STR or DEX for a mace they picked up, never WIS. An earlier draft conflated the two, treating a Syberist's spell-attack formula as if it were "the weapon," which hid the fact that any caster can carry and use a real weapon as a genuinely separate option, governed by its own stat entirely.

This mirrors the source's actual asymmetry rather than inventing a symmetric one: melee only gates at the top tier (a Sword or Axe needs no particular strength, only a Maul does), while ranged weapons gate starting a tier earlier and tighten further at the top — matching how Shortbow and Crossbow both required Agility 4+ in the source, with Longbow alone stepping up to 6+. Same as armor's CON gate: this is a hard requirement to equip the weapon at all, not a soft penalty for using it anyway.

### Critical Hits

**Confirmed source triggers a crit off rolling max damage on the weapon's damage die** — which doesn't map cleanly onto this system, since TEA's confirmed combat is Auto-Hit (no attack roll to hook a crit trigger onto). This table's Roll-to-Hit fork has an attack roll to work with, so the trigger moves there instead: **doubles on the to-hit roll** (both d10s show the same value) **on a successful hit** is a critical — **maximum weapon damage, no damage roll.** For Advantage/Disadvantage (3d10, keep the best/worst two), doubles are checked on whichever two dice are actually kept, not all three rolled.

**Any successful hit deals a minimum of 1 damage, regardless of die result or negative stat bonus — a universal floor, not specific to any one weapon, spell, or interaction.** Surfaced while testing a proposed Artificer mechanic (a low die roll combined with a negative stat pushed a confirmed hit to 0 effective damage), but the gap was never actually about that one case — nothing anywhere in this document previously guaranteed a landed hit does *something*. A hit that deals zero damage reads as a miss with extra steps; this closes that regardless of where in the system it could occur.

This keeps crits rare and exciting (10% of all possible 2d10 outcomes are doubles at all, further filtered by needing to hit) without needing a second die-based system layered on top of the existing to-hit roll.

### Item Slots

**Confirmed from source, ported directly — previously only referenced piecemeal (e.g. "Heavy armor takes 2 body slots") without ever stating the container it counts against.** Ten item slots total: **2 hand slots, 2 body slots, 6 backpack slots.** Hand slots hold what's actively wielded (weapons, shields); body slots hold worn gear for easy access in combat (armor, secondary weapons, focuses); backpack slots hold everything else. To carry more, hire someone, or buy a cart or pack animal. **Retrieving an item from a backpack slot during combat costs an action** — an Agent's Many Pockets removes this cost.

**Four things the container definition above never actually stated, previously left to inference:**
- **Shards and coin are abstracted resources, not slot items.** Tracked as numbers on the character sheet, never occupying a slot regardless of quantity — a caster carrying a Major-tier cast's worth of refined shards doesn't need 50+ slots for it, same as 200 starting gold was never meant to occupy 200 slots.
- **A slot holds one distinct item, or a reasonable stack of a single consumable type** — a quiver of arrows, several days of rations, a handful of torches. Not weight-tracked, not itemized down to the individual arrow; "reasonable for its category" is the same abstraction this whole system already uses everywhere else (Guard instead of hit locations, zones instead of grid squares).
- **At capacity, picking up something new means dropping or stowing something else first** — no slot magically appears; a full inventory is a real constraint, not just a number that stops mattering once reached.
- **Shield/Tower Shield sit in a hand slot**, same category as a weapon (see Weapons & Damage).

### Weapon Keywords

**Confirmed source keywords, collapsed into this table's simplified tiers but never individually restated.** Reintroduced here since they add real texture the tier system alone doesn't capture:

- **Recharge X** — needs time to recharge after use. At the start of each Round, roll a d10; on a result ≤X, it's recharged.
- **Two-handed** — takes up both hand slots.
- **Versatile** — has two damage entries; deals the first one-handed, the second two-handed.
- **Thrown** — can be thrown at a target in an adjacent zone even if otherwise melee-only.
- **Blast** — deals its damage to every creature in a zone at once, rather than a single target. Mechanically, this is already covered by the existing potency-tier damage split (Moderate/Major/Mythic each state a lower "multiple targets" damage figure alongside the single-target one) — a Blast-form spell just means using that multiple-target line by default rather than needing a separate area-effect subsystem.

---

## Magic Items

**Two categories, both reusing the existing spell potency cost logic — no new pricing system needed.**

**1. Charged/Consumable items** (potions, scrolls, one-use charms) — priced at the **normal spell potency casting cost for the tier they replicate**, direct reuse, zero new logic. A Minor-tier healing potion costs what a Minor cast costs (2d6 shards). It's literally "a spell someone already paid for, bottled."

**2. Permanent items** (weapons, wondrous items, worn magic) — priced at roughly **10–20× the equivalent tier's average casting cost**, representing pre-paying for unlimited future uses instead of paying per cast. **Uses whichever shard economy powers that tier's casting** (see Economy) — Cantrip and Spark permanent items are priced in **raw** shards, Minor and above in **refined** shards. An earlier draft of this table priced every tier in the same unit, which silently contradicted itself once the raw/refined split existed: "near-free" Cantrip items and "minor trinket" Spark items, read in the refined-shard economy the Minor+ rows are validated against, would actually cost 10–50gp and 200–400gp — a real tradesman's wage, not pocket change. Fixed below.

**Validation, not an arbitrary multiplier:** applying 10–20× to Minor tier's average cost (2d6 ≈ 7 refined shards) gives 70–140 refined shards — and TEA's actual confirmed Rare Weapons table already prices its items at **60–135 shards.** That's close enough to validate the multiplier rather than needing independent justification — the confirmed source was already pricing permanent magic weapons roughly like "10–20× a Minor cast," it just never stated the logic. This makes it explicit and extends it to every tier.

| Tier | Casting avg | Permanent item price (10–20×) | Shard economy | What it looks like |
|---|---|---|---|---|
| Cantrip | 0 (free) | Near-free, 1–5 shards | Raw (≈5cp each) — truly pocket change | Everbright lanterns, minor household charms — Eberron's "magic as infrastructure" flavor, not adventuring gear |
| Spark | ~2 | 20–40 shards | Raw (≈1–2gp total) | A minor but real trinket — self-igniting torch, Advantage on one narrow check type |
| Minor | ~7 | **70–140 shards** | Refined (≈700–1,400gp) | The reskinned Rare Weapons table below — matches confirmed pricing almost exactly |
| Moderate | ~14 | 140–280 shards | Refined (≈1,400–2,800gp) | A serious combat item with real ongoing spell-tier power |
| Major | ~52.5 | 525–1050 shards | Refined (≈5,250–10,500gp) | Rare, quest-reward tier, not something sitting on a shelf |
| Mythic | ~350 | 3500–7000 shards | Refined (≈35,000–70,000gp) | Artifact-tier — essentially never purchased, only found or GM-placed, same design philosophy as Siberys Marks |

**Cantrip-tier permanent items are deliberately not adventuring gear** — they're the everyday-magic worldbuilding texture already established in Magic Baseline, available to basically anyone in a settlement, not loot a party needs to hunt down.

### Magic Items (Eberron-original, replacing an earlier TEA-copied list)

**An earlier draft of this table copied TEA's actual confirmed Rare Weapons entries directly — same damage dice, same costs, just reflavored names.** Caught as a real problem, not a style note: several entries dealt damage at or above Massive tier (1d10–1d12), directly contradicting this document's own rule that Massive is monster-scale only, N/A for PCs. The pricing was also never independently verified — it validated itself by comparing against the very numbers it had copied, not an actual check that "1 ink" and "1 refined shard" represent comparable value, and the resulting gold-value implications (600–1350gp per item) were never checked against this system's own 200gp starting-wealth economy.

**A deeper problem than either of those: several entries implicitly worked like flat stat bonuses (a "+X to hit" or "+X damage" effect sitting permanently on an item) — a direct D&D d20 holdover.** In a d20 system a flat +1 is exactly 5%, clean and uniform. This system's 2d10 bell curve has no such uniform conversion, and more importantly, this document's own Core Resolution explicitly states its central design constraint: situational difficulty is represented by shifting the Target or granting Advantage/Disadvantage, **never by stacking modifiers.** A permanent flat bonus sitting on a magic item is precisely the pattern that principle exists to rule out — it just hadn't been checked against magic items specifically until now.

**Redesigned from scratch, Eberron-original rather than TEA-derived, using the existing Magic Items pricing framework (10–20× tier's average cost) applied fresh rather than reverse-engineered from copied numbers.** Every entry uses only the same four levers everything else in this document uses: Advantage/Disadvantage, a Target shift, a new capability, or a resource effect — never a flat roll bonus. Deliberately spans the full range Eberron's own worldbuilding implies: Cantrip-tier items are genuine everyday infrastructure (lit streets, self-cleaning laundry), not adventuring gear; Mythic-tier items are unique, one-of-a-kind, GM-placed artifacts, never something with a shop price at all.

**Magic item creation also requires more than shards and time — see the Artificer crafting rules above for the real workspace/resources precondition.**

**Cantrip tier (1–5 raw shards — passive only, no adventuring utility, available to basically anyone):**

| Item | Effect |
|---|---|
| **Everbright Lantern** | Permanent magical light, no fuel needed |
| **Warmhearth Coal** | Never cools, needs no fuel |
| **Cleaning Rune Cloth** | A garment that never needs washing |

**Spark tier (20–40 raw shards — a real but narrow trinket):**

| Item | Effect |
|---|---|
| **Sivis Message Chime** | A paired trinket; speak to one, the other repeats it once, anywhere |
| **Silversheen Ward Token** (Thrane/Silver Flame) | Once per scene, Advantage on a resistance check against an Effect spell |
| **Orien Waystone Chip** | Once per scene, know the safest route to a destination you can currently see |

**Minor tier (70–140 refined shards):**

| Item | Effect |
|---|---|
| **Riftglass Focus** (Shardbound) | Once per scene, reroll a cast's shard-cost die once |
| **Silver Flame Brand** | Once per scene, Advantage on your next attack against a creature that's harmed an ally this fight |
| **Kalashtar Dreaming Coil** | Once per scene, reroll a failed WIS-based check once |

**Moderate tier (140–280 refined shards — a serious combat item):**

| Item | Effect |
|---|---|
| **Cannith Prototype Gauntlet** | Once per scene, your next attack automatically counts as a critical if the target already has an open Wound |
| **Blademarked Warblade** (Valenar) | Once per scene, mark an enemy: you and allies have Advantage against them until the encounter ends |

**Major tier (525–1050 refined shards — rare, quest-reward):**

| Item | Effect |
|---|---|
| **Mournland Reliquary Shard** | Once per scene, trigger a specific Major-tier Effect spell, pre-loaded at creation |
| **Dhakaani Warmask** | Once per scene, force up to 3 enemies in your zone to target you this Round |

**Mythic tier (3500–7000 refined shards — unique, GM-placed only, never purchased):**

| Item | Effect |
|---|---|
| **The Progenitor's Cog** | Permanently +1 Contraption capacity; once per scene, trigger a stored Contraption without spending it |
| **Shard of the Twelve** | Once per campaign arc (GM's call), manifest any House's Least Mark for one scene, regardless of the wielder's own Background |

---

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

**Why this doesn't create a mid-campaign problem:** Guard Stat is already permanent once chosen at creation (see below) — the restriction only ever checks against the weapon/cast stat that existed *at that single moment*. A character who later swaps weapons never retroactively breaks anything; Guard Stat was never tied to "current weapon," only to the creation-time snapshot.

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

## Surprise & Ambushes

**Confirmed from source:** before combat starts, the Seer determines if a side is surprised. If so, that side does not act in the first Round of combat.

**Homebrew extension: surprise is checked per-character, not per-side, using a Scenario Target Modifier.** A group check produces a binary "the whole party is or isn't surprised" outcome, which flattens what should be an interesting, uneven moment. Instead:

- Each character individually rolls **2d10 + WIS (or the GM's chosen relevant stat) vs a target set by the scenario** (12 base, shifted per Scenario Target Modifiers above — e.g. +3 for a genuinely well-concealed ambush).
- **Cascading Advantage, not a second target shift:** the first character to succeed can shout a warning — every character who hasn't rolled yet gets **Advantage** on their own check that round. This is the Adv/Disadv lever doing situational work, while the target stays fixed at whatever the scenario set.
- Any character who fails is **individually surprised** — they personally skip their Round 1 action, while everyone else (surprised or not) resolves normally in initiative order.

This produces real, uneven texture: a party can end up with some members caught flat-footed while others hold the line alone for a round, rather than a single coin-flip deciding the whole group's fate at once.

---

## Morale

**OSR/OSE-style morale for non-PC groups**, layered on top of TEA's own systems (fills a gap the source doesn't cover).

**Base Morale 7** for an average group of mooks (2d6 roll-under-or-equal to pass). **+2 while a named leader/boss is present and alive** — losing the leader removes the bonus immediately, not just at the next check.

**Checks fire once each, at these triggers:**
- The group's **first casualty** (first mook downed).
- The group reaching **50% losses**.
- A **named leader/boss going down** — checked immediately, using Morale *without* the leader bonus (it's already gone).

**On a failed check:** the remaining group **breaks and flees** — real movement away from the fight (through zones, at normal speed), not an instant vanish. A GM can allow a broken group to surrender or negotiate instead of fleeing, if that fits the scene better.

**Why this matters:** without morale, "defeat the enemies" always means "kill every last one," which reads as either grimmer or more grindy than intended for most encounters. Real groups — especially opportunistic ones like bandits — have a breaking point, and building that in makes fights resolve faster and feel more like a living tactical situation than a kill-count exercise.

---

## Reaction Check

**Confirmed source has a Reaction table** (roll a flat d10, consult a Hostile→Helpful disposition chart) for how an encountered NPC or creature initially responds — distinct from combat Morale above, this covers social/exploration first contact. **Homebrew adaptation: replace the flat unmodified d10 with a real check, on the same target and Adv/Disadv this whole system already uses, while keeping the source's five-outcome table.**

**Roll 2d10 + CHA vs target 12**, shiftable by Scenario Target Modifiers for genuinely hostile or friendly circumstances (a town that's just been raided by people who looked like you: −3; arriving with a trusted local vouching for you: +3), with Advantage/Disadvantage for situational factors (a bad reputation preceding you, a House signet that opens doors). Then read the total against the table below:

| Total | Disposition |
|---|---|
| ≤9 | Hostile |
| 10–11 | Wary |
| 12–14 | Apathetic |
| 15–16 | Friendly |
| ≥17 | Helpful |

**Deliberately reuses 9/12/15 — the exact same Weak/Standard/Strong pivot points from Enemy Design Philosophy** — rather than inventing new band boundaries, so the numbers stay memorable and consistent with the rest of the system instead of being a one-off table with its own arbitrary math. **To be explicit, same as noted there: 9/12/15 were picked as convenient, memorable anchors from the full ±3 granular scale, not because they're the only legal thresholds** — a GM reshaping these bands for a different table (say, wanting a wider Apathetic middle or a narrower Hostile floor) could just as validly set them at 10/13 or 11/14 instead; nothing about the math requires landing exactly on a named tier boundary.

**Honest note on the percentages:** at CHA+0, this produces roughly Hostile 36% / Wary 19% / Apathetic 24% / Friendly 11% / Helpful 10% — not a clean match to the source's flat d10 table (10/20/40/20/10), since a bell-curve check centered on a ~45%-success target distributes differently than a flat 1-in-10 roll. Helpful lands almost exactly on the source's 10% by coincidence; the rest skew toward more caution by default. This is intentional, not a miscalibration — real strangers should default a little wary, and CHA investment or a favorable Scenario shift is what pulls the odds toward Friendly/Helpful, same as everywhere else in this system.

---

## Travel & Exploration

**Confirmed source, ported directly** — this doc has been entirely combat-focused until now; these are the downtime/dungeon pacing procedures underneath everything else.

### Travel Roll

The GM determines how many days a journey takes, then **rolls a d6** — the result is how many days pass before a Travel Event occurs. If that number exceeds the journey's remaining length, the party arrives without incident. If an event does occur, roll on the Travel Event table below, resolve it, then repeat the process until arrival.

| d6 | Travel Event |
|---|---|
| 1 | **Mishap** — bad weather, getting lost, difficult terrain, or a breakdown. Add 1 day to the journey. |
| 2–3 | **Random Encounter** — roll on the region's encounter table. |
| 4–5 | **Failed to Gather Food** — each character marks a use on a ration or becomes Deprived. |
| 6 | **Good Fortune** — a shortcut or good weather. Subtract 1 day from the journey. |

A character with a relevant wilderness talent (hunting, tracking, navigation), or who marks a use on a relevant toolkit, lets the GM **roll a d8 instead of a d6** for that check. In particularly treacherous or hostile terrain, **subtract 1** from the Travel Event roll.

**Travel Times** (all defaults assume travel on foot, gathering food along the way):

| Transport | Adjustment |
|---|---|
| On foot | No change |
| Mount or cart | Half travel time; animals also consume rations on a Travel Event 4–5 |
| Riverboat, glider, or airship | Two-thirds reduction; an airship might require a skilled captain — House Lyrandar or House Cannith crews both fit naturally here |
| Forced march | One-third reduction; each character marks a ration use daily or becomes Deprived |

### Exploration Roll

While exploring a site or resting a Turn there, the GM **rolls a d6 every Turn** (~10 minutes) and consults:

| d6 | Exploration Event |
|---|---|
| 1 | **Encounter** — roll on the location's encounter table. |
| 2 | **Encounter Sign** — roll on the encounter table for what signs the party finds; a 1 or 2 on the *next* Exploration roll becomes that specific encounter. |
| 3 | **Light** — mark a usage dot on the party's light source. |
| 4–6 | Nothing happens. |

---

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

**Full granularity — not limited to ±3.** The Weak/Standard/Strong tiers above are just three named anchor points on a continuous scale; every integer shift from −3 to +3 has an exact, known percentage, using the same target-shift math throughout this document (shifting the target down by 1 has the identical effect as a +1 bonus at a fixed target). This range is independent of character stat generation, which now only reaches ±2 (see Core Resolution) — Scenario Target Modifiers govern GM-adjudicated situational difficulty and enemy toughness, a separate design space from player stats, and there's no reason the two need to share the same ceiling.

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

## Wayfarer Grit Maneuvers

**Problem this solves:** a "tank" that's just a stick with more Guard isn't actually tanking, it's just soaking damage worse than dying — no real battlefield control. Wayfarers need active tools, and there's no reason those tools should only key off STR. Grit is TEA's existing confirmed Wayfarer resource (starts at 2, +1 at even levels, some regained after resting a Turn).

**All maneuvers are available from level 1 — gated by Grit cost, not character level.** TEA's real source structure splits maneuvers into a Level-1 base set (Focus, Not on my watch!, Shake it off) and Advanced Maneuvers unlocked one at a time at levels 2, 5, and 7 (Command, Payback, Shield, Split Fire, Taunt, Rally, Cleave). Playtesting exposed a real gap in that structure: a level-1 tank has no way to actually protect an ally (Shield and Taunt are both Advanced, locked away until level 2+), which is exactly the tool a squishy caster needs from turn one. Rather than keep the level gate, **every maneuver is available at any level — the stronger ones just cost more Grit.** **Payback has since been removed from the table below** (see its own note) — a genuine confirmed-source maneuver, cut rather than kept, because "immediately attack" implies an interrupt this system's fixed, roll-once Initiative order has no mechanism to support.

| Tier | Cost | Maneuvers |
|---|---|---|
| **Basic** | 1 Grit | **Focus** (a hit permanently reduces the target's Guard by 1 — corrected from an earlier "ignores the Guard bonus the target's armor provides," which turned out undefined against most monsters: the Enemy Generation Procedure only ever gives a single flat Guard number, with no separately-tracked armor component to ignore. Tested against Sunder below at matched Grit-per-reduction rates and confirmed equivalent, not weaker or stronger — same permanent-reduction shape, correctly scaled to a quarter of Sunder's dedicated effect for a quarter of the cost), **Not on my watch!** (reroll your Initiative roll), **Shake it off** (spent on your turn, bracing for what's coming — the next hit you take before your next turn is reduced by 1d6; reframed from an earlier "reduce incoming damage," which never actually said whether this was a reactive interrupt or something spent proactively, and this system has no reaction economy for the former reading to hook into) — these three confirmed source, base maneuvers. **Plus one relocated homebrew addition: Guardian's Challenge** (CHA check; success forces up to 2 enemies in your zone to target you or fight at Disadvantage, lasting this Round — duration matched to Taunt below, its closest sibling; moved here from Advanced tier: an earlier draft priced this the same as Taunt despite being strictly weaker in every dimension — conditional on a roll, capped at 2 enemies, a softer guaranteed outcome even on success. No reason to ever pick it over Taunt at equal cost; correctly priced as the cheaper, less reliable option instead) |
| **Advanced** | 2 Grit | **Command** (an ally makes a genuinely extra attack this Round — not their normal turn's action — for +1d6 damage, instead of you acting; clarified from an earlier ambiguous "makes an attack... instead of you acting," which didn't specify whether this was an extra attack or just a bonus on an attack they'd have made anyway — given this costs your entire action to grant, the extra-attack reading is what actually makes the cost feel earned), **Shield** (a same-zone ally's incoming attacks are made at Disadvantage until your next turn — retranslated from source's "add your AV to theirs," since this system has no flat AV to add; validated in the Highwater Road Case Study), **Split Fire** (a ranged attack hits two separate targets), **Taunt** (all enemies in your zone must attack you this Round, no check, guaranteed), **Rally** (you and allies **in your zone** gain +1 damage until end of Round — the zone restriction is now explicit; every comparable ally-buff already specified this and Rally was the one unexplained outlier), **Cleave** (a single attack hits up to four same-zone enemies at **one-third** damage each, and a critical hit **permanently reduces that target's Guard by 1d4** — corrected from an earlier "ignores armor's Guard bonus," the same undefined-against-monsters problem Focus had; kept as a die rather than Focus's flat +1 since this only triggers on a crit, a genuinely rare event, unlike Focus's every-hit trigger — corrected from an earlier half-damage version that let total output exceed a single full-power hit at 2+ targets, effectively free extra damage for the same 2 Grit as every option that doesn't scale with target count at all; one-third damage lands Cleave at genuine parity with a single attack even at its maximum 4 targets, trading concentrated power for battlefield spread rather than gaining both) — all confirmed source, previously level-gated 2/5/7 — **plus this table's homebrew additions**: **Hold the Line** (STR/CON; an enemy in your zone can't leave it without beating your bonus first, lasting until your next turn — duration matched to Shield and Guard Stance, the closest comparable standing conditions), **Read the Fight** (no check; all allies in your zone gain Advantage on their next attack this Round), **Guard Stance** (no attack, no check; Disadvantage on all incoming attacks against you until your next turn), **Second Wind** (CON; once per scene — loosened from an earlier "once per Wound cycle," a term that needed its own paragraph to define and still landed badly; also no longer requires a Wound to have already opened, since gating a Guard top-off behind already being hurt never made much sense — regain Guard equal to **1d6** + CON bonus, corrected from an earlier "weapon die + CON," which let Heavy-weapon Wayfarers heal meaningfully more than Light-weapon ones for an ability that has nothing to do with what they're holding), **Rally Cry** (CHA/WIS; clear Reeling from an ally in your zone, or grant them +1 on their next roll) |

**Payback, removed.** Confirmed-source content, cut rather than kept — its wording ("immediately attack an enemy who just damaged an ally") implies a mid-round interrupt, but this system resolves Initiative once at the top of combat and never revisits turn order, with no reaction economy anywhere else to hook into. Retrofitting one just for this maneuver would mean growing a whole new systemic layer — a fourth kind of "when can you act" rule — solely to support a single option, which isn't a trade worth making for a system that's deliberately stayed simple everywhere else. Unlike Focus/Shield/Cleave's AV→Guard retranslation (same source content, adapted to fit), Payback's core premise doesn't have an equivalent fix that keeps it a Grit Maneuver rather than a new subsystem.

**Note on the AV→Guard retranslation:** TEA's source maneuvers were written for its confirmed Auto-Hit + flat Armor Value system (see Combat Model Selection) — several reference "Armor"/"AV" directly, which doesn't exist as a concept in this table's Roll-to-Hit + Buffer model. Rather than leave those maneuvers using terminology from a rejected system, Focus, Shield, and Cleave above have been retranslated to work against Guard/Disadvantage instead. Shield's retranslation (Disadvantage on attackers, not a flat AV bonus) is the version actually used and validated in the Highwater Road Case Study.

### Gear-Specific Maneuvers

**Layered on top of the universal table above — every Wayfarer has both**, gated by whichever gear is actually equipped. Requires the stated gear type to use; switching gear mid-campaign (or mid-Round, subject to normal action limits) changes which of these are available, same as any other equipment-dependent option.

| Gear | Tier | Cost | Maneuver | Status |
|---|---|---|---|---|
| Unarmed | Basic | 1 Grit | **Redirect** — reposition one zone after a hit, no Disengage check | Utility, no damage math needed |
| Unarmed | Advanced | 2 Grit | **Iron Palm** — boosts an unarmed strike to Heavy tier (1d8+STR) | Tested: 6.80 avg, exact parity with a plain Heavy weapon |
| Light | Basic | 1 Grit | **Fleet Strike** — move to an adjacent zone after attacking, no Disengage check | Utility, no damage math needed |
| Light | Advanced | 2 Grit | **Second Strike** — on a hit, a bonus attack at Disadvantage | Tested: 6.38 avg, just under the Iron Palm/Heavy benchmark |
| Medium | Basic | 1 Grit | **Steady Guard** — forgo your attack; impose Disadvantage on one attack against you this Round | Utility/defensive, same risk profile as the existing Guard Stance |
| Medium | Advanced | 2 Grit | **Guarded Strike** — on a hit, the target has Disadvantage on their next attack against you | Tested: cuts enemy hit chance 45.2%→24.0% |
| Heavy | Basic | 1 Grit | **Momentum** — spent per use (not once for the fight, an earlier draft left this ambiguous): if your last attack this fight hit, this attack deals +2 damage | Tested: +1.61 dmg per Grit spent, in line with established Basic-tier rates (~1.5-2.3 dmg/Grit elsewhere). The earlier ambiguity mattered — read as a one-time whole-fight passive instead of per-use, this same effect tested at +1.58 dmg/round sustained for a single Grit spend, dramatically stronger than anything else at this tier |
| Heavy | Advanced | 2 Grit | **Sunder** — a hit permanently reduces the target's armor-derived Guard bonus by 2 (updated — see note) | **The original "underwhelming" finding was itself built on a buggy test** — an earlier simulation tracked the armor reduction but never actually applied it to the target's Guard pool, making Sunder appear to do nothing regardless of its stated value. Corrected test: even the original −1/use value produced a real 0.44-round improvement (4.343 → 3.902 rounds to kill an armored boss); −2/use reaches the same ceiling as −4/use against a typical 4-point armor-Guard pool (3.566 rounds either way), confirming −2 extracts the maximum available value efficiently without wasted potential. Sunder was never actually a trap — the diagnosis that flagged it as one was wrong |
| Shield | Basic | 1 Grit | **Shield Bash** — Light-tier damage (1d4+STR) on a hit, plus +2 to the target's next attack roll against you | Tested: sits correctly below Guarded Strike's defensive value at half the cost |
| Shield | Advanced | 2 Grit | **Shield** — the existing confirmed universal-table maneuver, now explicitly confirmed as Shield's category-specific Advanced rather than left as an unstated assumption | Already validated in the Highwater Road Case Study |
| Ranged | Basic | 1 Grit | **Steady Aim** — ignore range Disadvantage or a cover penalty for this shot | New, utility/accuracy only, no damage math needed |
| Ranged | Advanced | 2 Grit | **Split Fire** — the existing confirmed universal-table maneuver, now explicitly confirmed as Ranged's category-specific Advanced | Confirmed source, unchanged |
| Dual-attack | — | Free | Baseline (roll both dice, take higher) | Tested: 6.16 avg |
| Dual-attack | Basic | 1 Grit | **Feint** — this attack rolls with Advantage | Tested, target-dependent (see Dual-wield below) |
| Dual-attack | Advanced | 2 Grit | **Blade Dance** — two attacks, first normal, second at −4 | Tested: 10.51 avg |

**Validated in a genuine full-party context, not just isolated duels — and this caught two real test-AI bugs along the way, both fixed.** A 5-person all-Wayfarer party (Heavy two-handed, Versatile+Shield, Versatile+Tower Shield, Dual-wield, Unarmed), each using their full gear-specific and universal Grit toolkit, fought the standard 6-mooks-plus-boss scenario:

- **First bug caught: deterministic tie-breaking.** Three loadouts sharing identical Guard meant Python's `min()` always selected the same character first among ties, creating an artificial focus-fire snowball (64.0% down rate for one character vs. near-zero for others) that had nothing to do with build strength.
- **Second bug caught: deterministic always-target-lowest-Guard AI** (the same targeting logic already used elsewhere in this doc) combined with a tied-Guard party to make a mere +1 Guard advantage look like near-total immunity (0.1% vs ~25% down rates) — real behavior of that AI model, but wildly disproportionate for a party this evenly matched. Fixed with weighted (not deterministic) targeting, favoring low-Guard targets without locking onto them absolutely.

**Final, trustworthy result:** zero-death rate 92.5% (sensibly above the established 52.7–84.3% band, since an all-frontline party is naturally tougher than the mixed-archetype squad that band was calibrated against). Individual down rates: Rurik (Heavy 2H) 2.8%, Sable (Versa+Shield) 0.6%, Toran (Versa+Tower) 0.5%, Kade (Dual-wield) 1.9%, Fen (Unarmed) 1.9% — **a tight, correctly-ordered band matching each loadout's actual Guard value, no outliers, no dominant strategy.** Closes out the Dual-wield/Shield/Two-handed redesign with genuine full-party evidence, not just 1-on-1 math.

### Dual-wield / Two-Weapon Fighting (final — roll-both-take-highest baseline, Feint/Blade Dance)

**Two prior drafts didn't hold up and were replaced in turn.** The first gated the only second attack behind Wayfarer-exclusive Grit Maneuvers, and its own numbers were backwards (the pricier Advanced option delivered worse marginal value per Grit than the cheaper Basic one). The second replaced that with a universal penalty-based double-attack (−3/−4, later corrected to −4/−6 for calibration) — but a real PC-vs-PC duel test exposed a deeper problem: matching Heavy-weapon DPR in isolation didn't mean matching actual duel performance, because defending with Guard Stance forced a Dual-attack build to forfeit *two* rolls' worth of offense at once while a single-weapon build only ever forfeited one — an asymmetry invisible in simple DPR math but decisive in an actual fight (Dual-attack lost 63–67% of the time against every other loadout despite near-identical average damage).

**Final design: one attack roll, roll both weapons' damage dice, take the higher.** Main-hand can be Light or Medium, off-hand must be Light, **both sharing the same governing stat.** This fixes the Guard Stance asymmetry structurally — defending now costs exactly one roll's worth of offense for every build, dual-wielded or not, since there's only ever one attack roll to begin with. Baseline average (Medium 1d6 / Light 1d4, take higher): **6.16** — appropriately just under a Heavy weapon's 6.80, trading peak power for a higher floor and total reliability instead.

**Grit Maneuvers, checked individually against existing benchmarks before locking in:**

| Tier | Cost | Maneuver | Tested value |
|---|---|---|---|
| Basic | 1 Grit | **Feint** — this attack rolls with Advantage | 6.64 avg vs a Weak target (marginal gain small there — hit chance is already near-ceiling), but +18.0 percentage points of accuracy against a Standard-tier target (71.4%→89.4%) — genuinely target-dependent by design, strong exactly where it matters (landing the hit that counts against a real threat), not padding damage against something already easy to hit |
| Advanced | 2 Grit | **Blade Dance** — two attacks this round, first at normal accuracy, second at −4 | 10.51 avg. First draft (both attacks at full accuracy) tested at 12.31 — nearly double the Heavy-weapon baseline and well past every other 2-Grit option's established ceiling (~10.6); the −4 penalty on the second attack alone was enough to bring it back in line without needing to touch the first |

**Applies identically to unarmed strikes.** Main fist keeps the Medium baseline Iron Palm already established (1d6+STR); off-hand fist must be Light (1d4+STR), same shape as an off-hand weapon — confirmed at parity with weapon dual-wield at every tier once this match was enforced (an earlier Medium/Medium draft let unarmed dual-striking beat weapons outright while also keeping its existing hand-slot-freedom advantage, re-creating the exact "why ever pick the weaker option" problem this whole redesign was meant to close).

**Fully validated with a fair four-way tournament, not just isolated math.** Four loadouts built off the identical stat roll (STR+2, CON+2, same Guard Stat rule applied throughout), each given a comparable Grit toolkit (Focus available to single-weapon builds at the same 1-Grit cost as Feint, so no side had an unfair spending advantage):

- **A — Heavy, two-handed** (no shield possible, per Heavy's Two-handed rule)
- **B — Versatile weapon, one-handed + Shield** (+1 Guard)
- **C — Versatile weapon, one-handed + Tower Shield** (+2 Guard)
- **D — Dual-attack** (weapon or unarmed, identical numbers)

| | vs A | vs B | vs C | vs D |
|---|---|---|---|---|
| **A** | — | 54.5% | 51.0% | 49.0% |
| **B** | 45.5% | — | 45.5% | 46.0% |
| **C** | 49.0% | 54.5% | — | 50.0% |
| **D** | 51.0% | 54.0% | 50.0% | — |

**All four land within a tight 45–55% band against each other** — no lopsided winner, no dead build, confirming the redesigned system holds up in genuine head-to-head play, not just averaged DPR. B (Versatile+Shield) runs as the mildest underdog against A and C, which fits its actual role rather than undermining it: **Versatile was never meant to be a fixed fourth build competing to be the strongest — it's the flexible connective tissue between the other three.** The same weapon drops its shield and goes two-handed to become A, or pairs with a Light off-hand dagger to become D, on whatever day the player wants a different playstyle. Its job is optionality, not raw power, and the numbers landing as "solid, slightly conservative" rather than "best" is exactly right for that role.

With a starting Grit pool of 2 (confirmed), a level-1 Wayfarer can already spend it all on **one** Advanced maneuver — enough to Shield or Taunt for an endangered ally in their very first fight, rather than needing three levels to earn the tool. Higher levels don't unlock new options under this model; they just mean more total Grit (already confirmed to scale +1/level) to spend more often. That's a smoother curve than gating specific tools behind specific levels, and it directly fixes a real gap the ambush scenario surfaced: Rivet had no way to protect Aeshaan at level 1 under the old level-gated structure, even standing in the same zone, simply because Shield/Taunt didn't exist yet for him.

**Why this matters beyond one character:** it means a Wayfarer's build determines what *kind* of tank/controller they are — CHA-invested plays like a battlefield-controlling bodyguard, WIS/INT-invested plays like a squad tactician who barely swings a weapon, a pure-STR build plays like a straightforward damage soak. Same chassis, genuinely different characters. This principle now also covers Syberist (CON rewarded via the Overcast Backlash Pool's rerolls in Overcasting, rather than a parallel fixed-ability list — see the note there on why freeform casters shouldn't get feature-shaped duplicate spells) and Agent — resolved twice over, first via Talents & Expertise's cross-Background access (any stat, via whichever Talent list a player reaches into), and now more directly via Leverage and Contingency, which is fiction-gated rather than any single stat at all.

---

## Worked Example: Combat (Design Evolution)

Four PCs vs. 4 bandits + a boss, simulated with real dice across several iterations — each one exposed a real problem and got fixed before the next.

**The party:**
- **Grix-9** — Cyre-Built Warforged, Warbred (Wayfarer). STR +1, CON 0, Guard 9 (armored). Maul (Heavy).
- **Ilyara Duskwind** — Sharn-Raised Elf, Shardbound (Syberist). INT −2, CON −3 (unlucky roll), Guard 2. Shard-Bolt (Heavy).
- **Pip Sootwhistle** — Zil Broker Gnome, Roadwise (Agent). DEX +2, Guard 6. Hand crossbow (Light).
- **Mira Emberhand** — Jorasco-Marked Human, Flamesworn (Syberist/healer). WIS −1, Guard 6. Warded rod (Medium). Carries Mending Ray (Minor slotted spell: closes a Wound + restores Guard).

**The enemies:** 2 Blade-bandits (melee) + 2 Bow-bandits (ranged), all Weak tier (target 9, Guard 5, no Wound slot — mooks). **Rustmaw**, a Cannith siege-wreck boss: Weak to-hit (target 9, big/slow/easy to hit) but Guard 20, 3 Wound slots, Strong attack (+4, 1d10 Massive), and **slow** (only acts every other round).

**Iteration 1 — single monster, no zones, no weapon-formula discipline:** Rustmaw's damage (2d8+3, avg 14) wasn't on the shared weapon formula. Ilyara's Guard came out to a literal 0 under an earlier `Guard = 2 + CON` formula. Result: she took one hit, opened her Wound immediately, took a second hit two rounds later, and nearly died. **Diagnosis:** monster damage floating free of the PC weapon envelope, and no Guard floor worth the name.

**Iteration 2 — unified weapon formula, Guard floor of 1 on base 4:** Rustmaw rebuilt to 1d10+4 (avg 9.5) on the same formula as PCs. Fixed the swinginess of its own attacks, but Ilyara — still CON −3, minimal armor — died in 3 rounds anyway (Guard 2 still folds to one solid hit). **Conclusion:** correct as an intentional "glass cannon" risk — a genuinely unlucky roll landing on one specific stat, with the rest of her spread positive, means the mercy adjustment (which only fires when *no* stat is positive) wouldn't even apply here. This is the dice being honest about a real outcome, not a bug.

**Iteration 3 — added zones, but ranged weapons had unlimited range:** Grix charged alone into the enemy zone; this barely mattered because archers could hit him from anywhere regardless of position. **Diagnosis:** unlimited-range ranged weapons make positioning pointless on both sides.

**Iteration 4 — zone range capped at same+adjacent, full 4-bandit + boss fight:** Grix again charged alone into a zone reachable by every enemy simultaneously (2 blade bandits, both archers via adjacency, and the boss). Party won, but Grix died — this time because bad positioning was actually punished, which is the zone system correctly doing its job. But he had zero tools to mitigate being the sole focus of five enemies.

**Iteration 5 — added Wayfarer Grit Maneuvers:** Grix used Guard Stance (Disadvantage on incoming attacks) right after his Wound opened, and Read the Fight (amended to hit the whole zone) enabled a party-wide Advantage alpha strike that dropped Rustmaw from 20 Guard to 8 in one round. The boss died round 5. But Grix still died in round 7 — not from bad positioning this time, but because he and Mira had **fully spent their Grit and dust winning the boss fight**, leaving him defenseless against two leftover archers. A second issue also surfaced here: the ranged trio never repositioned, and went completely dark for a round once the last archers retreated out of their static reach.

**Iteration 6 (final) — smart repositioning added:** Same maneuvers, but the ranged PCs now reposition toward the fight when no target is in reach, and Grix retreats to stay useful once the boss is down rather than tanking archers alone with no resources left. **Result: full squad victory, zero deaths.** Rustmaw still dies round 5 off the Read the Fight alpha strike; the two remaining archers get mopped up by rounds 8–9 once the party regroups in range together. Grix ends the fight at 0 Guard/1 Wound — genuinely hurt, but alive.

**Iteration 7 (historical, mechanic since replaced):** turn order was briefly tested with TEA's confirmed Speed Roll mechanic (1d10-vs-weapon-Speed, Fast/Slow phases) before it was replaced by the current 2d10 Initiative countdown after a separate test exposed a same-bucket tiebreak gap Speed Rolls never resolved. The one finding that survived the replacement, confirmed by Monte Carlo at the time: **turn-order sequencing barely affects aggregate survivability in a simultaneous round-1 ambush** (35.9% vs 39.4% death rate with/without Speed Rolls) — a surprised PC has no action to interleave regardless of who else moves first, so *how* turn order is decided doesn't change whether all attacks eventually land. Turn order is a pacing and tactics lever, not a survivability lever; that conclusion carried forward unchanged into the current Initiative system, since the underlying reason has nothing to do with which specific mechanic decides who goes first.

**What the whole evolution demonstrates:** every "death" along the way had an identifiable, fixable cause — a math asymmetry, a missing floor, an unlimited-range bug, a lack of tank tools, or bad positioning/resource discipline — rather than the system just being swingy. That's a good sign for the underlying math; most of the lethality in early iterations was solvable at the design or tactics layer, not the dice layer.

---

## Case Study: The Highwater Road Ambush

A full scenario test combining every system above — Surprise, Scenario Target Modifiers, terrain Zone Conditions, Morale, a healer archetype, a named boss, the flexible Guard Stat, and the tiered Grit Maneuver costs — against one specific, recurring question: **can the party's tools actually save its most fragile member under sustained pressure?**

**The scenario:** the party is ambushed on a forested road by **Kolt's Raiders** (6 mook bandits — 3 Blade + 3 Bow, matching the corrected Encounter Level Scaling calibration — plus Kolt, a Standard-tier Captain with 2 Wound slots — corrected from an earlier "8 mook bandits," a number picked before that calibration existed and never updated once it landed on 6 as the actual right size for this move+act rule set) from dense treeline cover. Three terrain zones: **Road** (open, no cover), **Ditch** (+2 target for ranged attacks — partial cover), **Treeline** (Disadvantage on ranged attacks into it — thick cover, why the Raiders ambush from here). Surprise target: 12 base +3 (Scenario Target Modifier for a well-laid ambush) = **15**, checked per-character with cascading Advantage.

**The squad:** Rivet (Warforged Warbred, Guard Stat CON), Nix (Gnome Agent, Guard Stat DEX), **Aeshaan** (Elf Shardbound Syberist, Guard Stat INT — deliberately built INT/DEX-forward with CON dumped), Rowan (Shifter Wildspoken Syberist, Guard Stat WIS), Kessia (Human Flamesworn healer, Guard Stat WIS).

**Run 1 (group surprise, no positioning discipline):** whole-party surprise check passed by luck — no surprise triggered. Even so, Aeshaan (Guard 4 under the old CON-only rule) got focus-fired and died round 2, while Rivet had already wandered off toward the enemy line rather than guarding her.

**Run 2 (per-character surprise, cascading Advantage):** 3 of 5 PCs individually caught off guard; Rowan and Kessia held the line alone in round 1. Aeshaan still died — isolated on the Road while Rivet was still traveling toward the fight.

**Run 3 (Rivet actively tries to protect her, but positioning math fails):** Rivet attempts to reach Aeshaan and use a maneuver, but between being individually surprised (losing Round 1) and needing a full Round to physically move into range (under the exclusive "move OR act" rule in effect at the time, since corrected — see Zones & Range → Movement), he simply couldn't arrive before she died. **Finding: the bottleneck was distance and time, not tool availability.** *Note: under the corrected move+act rule, Rivet could potentially close distance and act the same Round, so this specific bottleneck may no longer apply as strongly — the broader lesson (surprise consuming Round 1 is costly) still holds.*

**Run 4 (the real fix — flexible Guard Stat + proper positioning + Shield used correctly):**
- Letting Aeshaan choose **INT** as her Guard Stat instead of defaulting to CON raised her Guard from **4 to 6** — a real, immediate improvement from a rule that already existed but hadn't been applied to her build.
- Rivet stays in Aeshaan's zone from the first round he's not surprised, rather than chasing the nearest enemy.
- Round 2: Rivet spends his full 2-Grit budget on **Shield** (Advanced tier, now available at level 1 under the revised cost-tiered Grit Maneuvers). **All four archers target Aeshaan that round — all four are forced to Disadvantage — all four miss.** Shield worked completely, exactly as designed.
- **She still died in round 4.** Shield lasts one Round and Rivet's entire Grit pool was spent on that single use — by round 3 it had expired, two Blade-bandits had closed into melee range, and there was no Grit left to renew it. She survived one 0-HP check on a lucky roll, got fully healed by Kessia's Combat Mending, and was immediately re-dropped and failed a second 0-HP check the same round.

**The conclusion, stated plainly:** three independently real, independently verified protective systems — flexible Guard Stat, active bodyguard positioning, and a perfectly-executed Shield — all worked exactly as intended, and none of them are a blank check against **sustained multi-round focus fire** from six-plus converging enemies. Shield is a single-Round tool on a two-Grit budget, not a persistent ward — that's correct design (protection that never runs out isn't really a cost), not a bug. Aeshaan's build — INT/DEX prioritized, CON and every other stat dumped hard, minimal armor — is a genuine glass cannon under this system, and four independent test runs produced the same outcome for the same underlying reason each time, which is a sign the system is being consistent rather than swingy.

**What this validates about the system as a whole:** every mechanic introduced across this whole arc (Surprise, Scenario Target Modifiers, Zone Conditions, Morale, Guard Stat flexibility, tiered Grit costs) fired correctly and had a measurable, real effect on the fight — none of them were decorative. The fact that a fragile, deliberately-built glass cannon can still die *even when every tool works perfectly* is the system telling the truth about the build, not failing to protect it.

---

## Advancement

**Confirmed from source (kept as-is):** XP awarded via end-of-session questions, each scaled by a die (d4/d6/d8) by scope; highest die result is XP for everyone. **Level up at XP = 5× current level, resetting to 0 after each level-up** — clarifying a genuine ambiguity in the original phrasing, which never stated whether this resets each level or accumulates toward one running total. Reset is the correct reading: level 2 needs 5 fresh XP from 0, level 3 needs a fresh 10 from 0 again, level 4 a fresh 15, and so on (5× the new current level each time) up through level 8 needing a fresh 35. Since a single session's highest die result can never exceed 8 (the largest die used is d8), and every threshold past level 2 already requires more than 8, **no single session can ever clear more than one level-up** — the reset itself is what prevents a lucky session from skipping ahead, without needing a separate rule to cap it. Max level 8, attribute hard cap 8 (9 during a check with bonuses).

**The five confirmed questions work fine as a generic default, but XP questions are the actual incentive structure of a campaign — they tell players what their characters should be doing, whether or not that's what this specific table is playing for.** A pure dungeon-crawl table gets "meaningful relationship" as dead weight; a political-intrigue table may never see "survived Death's Door" come up at all. Rather than one fixed list, **pick (or build) a themed question package matching the campaign's actual focus** — same mechanic throughout (roll a scoped die per category that applied this session, highest result is XP for everyone), only the five categories change. The confirmed default is listed below as its own package, on equal footing with the rest rather than hidden as the assumed baseline.

| Package | Questions |
|---|---|
| **Default** (confirmed source) | Treasure found · goal completed · lore learned · meaningful relationship built · survived Death's Door |
| **Dungeon Delvers** (classic OSR gold-for-XP) | Treasure hauled back to safety · a trap or hazard cleverly solved · a dangerous area fully cleared or mapped · retreated wisely instead of pushing a losing fight · survived Death's Door |
| **Hex Crawlers** (wilderness/exploration) | New territory mapped or revealed · a natural hazard survived · a local secret or ruin uncovered · a resource identified or exploited · a lost/disoriented situation resolved |
| **War Band** (military/tactical) | An objective taken · a defense or retreat held · an ally protected under fire · a named enemy defeated · survived Death's Door |
| **Court & Faction** (political intrigue) | A faction's favor gained or a rival foiled · a secret or piece of leverage uncovered · a negotiation closed · a meaningful relationship built or repaired · a reputation risked that paid off |
| **The Crew** (heist/caper) | The score pulled off · a complication improvised around · got away clean, no trace left · a specialist contact secured for later · a close call survived without blowing the job |
| **Survivors** (horror/scarcity) | Survived Death's Door · a resource crisis narrowly managed · a genuine horror avoided rather than fought · a companion protected from a worse fate · real respite found |
| **Builders** (domain/community play) | A holding or settlement improved · a community's trust earned · a local problem solved for the wider good · resources invested for long-term benefit · a genuine sacrifice made |
| **The Beat** (Eberron-specific: Sharn noir investigation) | A clue uncovered that advances the case · a lie seen through · a dangerous informant secured · a confrontation resolved without needless bloodshed · survived Death's Door |

A table can also mix five questions from different packages, or homebrew entirely new ones — the resolution mechanic never changes, only the content being asked about.

**How leveling actually works, step by step:** after every session, add the highest die result to the party's current-level XP tally. If that tally now meets or exceeds 5× the party's current level, everyone levels up and the **tally resets to 0** — the next level's threshold is calculated fresh from the new, higher current level.

**Worked example, full procedure end to end (Dungeon Delvers package, a level-1 party, starting at 0 XP toward a level-2 threshold of 5):**

- **Session 1:** the party hauls out a modest hoard (treasure, moderate — d6, result **4**); they also dodge a trap cleverly (minor — d4, result **2**). Highest: 4. Tally: **0 → 4**. Doesn't clear 5 — stays level 1, 4 XP banked toward it.
- **Session 2:** someone survives Death's Door (major — d8, result **3**). Tally: **4 → 7**. Clears 5 — **the party levels up to 2**, tally resets to **0**, next threshold is now 5× 2 = **10**.
- **Session 3:** the dungeon's goal is completed (major — d8, result **6**). Tally: **0 → 6**. Doesn't clear 10 — stays level 2, 6 XP banked toward the next threshold.
- **Session 4:** a further trap solved (minor — d4, result **3**). Tally: **6 → 9**. Still doesn't clear 10 — stays level 2, one session's worth of bad luck away from level 3.
- **Session 5:** a decent haul (moderate — d6, result **5**). Tally: **9 → 14**. Clears 10 — **levels up to 3**, tally resets to **0**, next threshold is now 5× 3 = **15**.

Notice the reset is doing real work here: even a strong single roll (session 2's result of 3, or any session capped at 8 from the biggest die) can never on its own clear a threshold once the party is past level 2 — every subsequent level genuinely requires multiple sessions' worth of accumulated XP, and a lucky roll speeds that up without ever skipping a level outright.

**Why TEA's level-up reward doesn't port directly:** confirmed source grants +1 to one attribute (or +2 spread across two) *every single level*. That works in TEA because its raw attribute range (1–8, roll-under-d10) is wide. It breaks this table's system, where the stat-bonus range is only six steps (−2 to +3, asymmetric — creation alone reaches +2, only Vertical growth reaches +3) covering the same 8-level arc — porting TEA's pace would let a character max every stat they care about within a couple of levels, quietly erasing the scarcity the whole 3d6 stat-gen system was built around ("bonuses are precious").

**Fix: two separate growth tracks, at different speeds.**

| Track | Cadence | What grows |
|---|---|---|
| **Vertical** (universal, slow) | Every other level (2, 4, 6, 8) | **+1 to one stat**, player's choice, **capped at +3 overall — but +2 is the most any stat can ever be at character creation.** The two ceilings are deliberately different: 3d6 stat generation only reaches +2, so no one starts at the top; **+3 is reachable only through dedicated Vertical investment**, giving leveling a genuine, earned ceiling above what creation alone ever provides. A stat already at +3 (only possible after at least one Vertical pick, never from creation alone) can't take another +1; that pick must go to a different stat instead. Without this upper bound, a character who put multiple Vertical picks into the same stat could keep climbing indefinitely — +3 is still a real, hard stop, just no longer identical to creation's own ceiling. Same levels also grant **+1 flat Guard** — tied to the identical cadence as the stat growth deliberately, so automatic growth and build choice stay proportional (see stress test below). Total cap by level 8: **+4 stat (a stat starting at +2 reaches its +3 ceiling after just one Vertical pick into it, so the remaining three picks must spread to other stats), +4 flat Guard.** |
| **Lateral** (archetype-specific, every level) | Every level, no exceptions | New *options*, not bigger numbers — see table below. |

| Level | Agent (confirmed, unchanged) | Wayfarer | Syberist |
|---|---|---|---|
| 1 | Choose a Skill | 2 Grit, all Maneuvers available (see Wayfarer Grit Maneuvers) | 1 spell name, Cantrip tier unlocked |
| 2 | Skill | +1 Grit | **Resonance Sense** (confirmed name, definition reconstructed — see note below) — at will, sense the presence and rough strength of active magic, unspent shards, or a recently-cast effect nearby, **or a Tradition-Specific Option (below)** |
| 3 | Skill | **Trophies** (confirmed — see below) | **Name-crafting** (confirmed) |
| 4 | Skill | +1 Grit | New spell name (free, no shards cost), **or a Tradition-Specific Option** |
| 5 | Skill | +1 Grit | **Focused Inhalation** (confirmed name, definition reconstructed) — once per day, reroll a cast's shard-cost die if unhappy with the result, **or a Tradition-Specific Option** |
| 6 | Skill | +1 Grit | New spell name (free), **or a Tradition-Specific Option** |
| 7 | Skill | +1 Grit | **Whispers of the Prophecy** (confirmed name, definition reconstructed) — once per day, a genuine flash of prophetic insight: Advantage on one check, or a free Minor-tier cast at no shard cost, player's choice which, **or a Tradition-Specific Option** |
| 8 | Skill | +1 Grit | New spell name (free), **or a Tradition-Specific Option** |

**Honest flag:** Resonance Sense, Focused Inhalation, and Whispers of the Prophecy were tagged "(confirmed)" as real TEA source features — that tag is accurate for the *names*, but the mechanical definitions above are reconstructed to fit each name and the Artificer parallels already built from them (Component Sense, Steady Hands, Masterwork Instinct respectively), not verified against the actual source text. This is the same gap the Scar Table had, caught the same way — worth a direct source re-check in a future session before treating the exact wording as final.

**Overchannel Resilience, removed.** An L1 Syberist feature with no confirmed-source tag at all — unlike its three siblings above, this name was coined without any TEA basis and never actually questioned until now. Its justification was "parallel to Warforged's Battle-Worn," but that parallel doesn't hold: Battle-Worn makes sense for Warforged specifically because they're built from construct materials, giving a real thematic reason for physical resilience. A Syberist has no equivalent reason to be tougher against Wounds than anyone else — being a spellcaster doesn't make a body more resistant to injury. It also had nothing to do with overcasting despite the name's implication, triggering on any Wound from any source. Cut rather than renamed or reworked — Syberist's L1 is now just the spell name and Cantrip access, the same weight as what Agent (a Skill) and Wayfarer (2 Grit) get at level 1.

### Tradition-Specific Options (Syberist)

**Available in place of the universal option at levels 2, 4, 5, 6, 7, or 8 — a real choice at more points, not just three fixed slots.** Non-combat and utility-flavored abilities filling gaps this doc otherwise had nothing for (a survey against D&D's own Wild Shape, Rage, Animal Companion, Lay on Hands, Metamagic, Channel Divinity, and Aura of Protection found these were the two genuinely structural absences — Wild Shape and an aura effect — plus several smaller gaps worth a real option rather than leaving unaddressed).

**Shardbound:**
- **Aberrant Sense** — at will, free. Detect aberrations, planar instability, or Daelkyr-touched corruption in the zone.
- **Fractal Ward** — once per scene, automatic, no action required. When hit, the attacker has Disadvantage on their next attack against you.
- **Shard-Split** — shard cost (as the spell it's attached to). A single-target cast also strikes one other creature in the same zone at half effect, no extra shard cost beyond the base cast.
- **Riftglass Barrier** — once per scene, automatic, no action required — corrected from an earlier "as a reaction," which contradicted this system's own no-reaction-economy design, the same problem that got Payback cut outright. Reduce the next hit against you this Round by a flat **3** (roughly a Light weapon's average, rounded to a real number instead of left for the GM to improvise mid-combat).

**Flamesworn:**
- **Radiant Ward** — Spark/Minor shard cost. Allies in your zone gain +1 Guard until your next turn. **Tested and confirmed balanced** — weaker per-ally than Shield's Disadvantage-on-attackers, but spreads across the whole zone at once; a legitimate trade, not a fix candidate.
- **Undying Witness** — Major-tier shard cost. Once cast, when an ally in your zone would hit Death's Door before your next turn, they faint instead — the death roll never happens.
- **Sacred Flame Burst** — 2 shards, flat 1d4, Blast-tier (hits every creature in the zone). **Corrected during testing:** an earlier draft priced this to match Shard Bolt's single-target rate directly, which would make it strictly better than Shard Bolt against any group for the same cost — a real pricing gap the existing Moderate-tier single/multi-target split (2d6 vs d6, roughly half) already accounts for elsewhere. Fixed to match Shard Bolt's *cheaper* 1-shard rate despite hitting the whole zone — real value against groups, genuinely worse than Shard Bolt against a single target.
- **Zealous Rebuke** — always-on, no shard cost, no gate. When an ally is hit, mark the attacker: your next hit against that specific enemy deals +1d6.

**Wildspoken:**
- **Beast Shape** — Major-tier shard cost, up to 10 minutes. Transform into a natural predator, borrowing a Mook-tier stat block. **While transformed, WIS governs both the beast's attack (1d6+WIS, Medium natural weapon) and Guard, replacing STR/DEX and your normal Guard Stat for the duration.** This is a deliberate, explained exception to "casting stat is never used for weapon damage" (see Weapon Proficiency) — a beast form is a magical extension of the caster's own power, not a separate physical weapon being wielded, which is what that rule is actually protecting against. **Tested:** attack lands at 5.82 avg dmg/round vs. a Weak target for a WIS+3 build — near-exact parity with a well-built martial's Medium weapon (5.80), not exceeding it. Both +3 figures represent a leveled character who's invested Vertical growth into that stat (character creation alone only reaches +2 — see Advancement), not a day-one build; the comparison is still fair since a martial reaching STR+3 requires the identical Vertical investment. Guard lands one point above the same character's normal armored Guard, justified by the steep one-time cost and strict time limit. Without this fix, the same build's attack averages 1.05 dmg/round using dumped STR — genuinely non-viable, confirming the fix solves a real problem rather than adding power for its own sake.
- **Thorned Ground** — once per scene. For the rest of the encounter, any enemy that leaves your zone automatically takes 1d4 damage, no check, no roll to avoid — their choice to make. Built from a flat automatic-damage mechanic rather than a "difficult terrain" status this system has no support for (zones don't have granular movement distance to slow).
- **Bloodscent** — Spark-tier shard cost. Mark a Wounded enemy: you and allies gain Advantage against that specific target until it's down.
- **Wild Empathy** — at will, free. Calm or briefly command a natural, non-magical beast. Narrative/utility, not combat.



**Trophies (confirmed, level 3 Wayfarer):** after defeating a creature in combat, take a trophy (1 item slot). Spend Grit when facing a creature you hold a trophy of for +1d6 damage against it, or Advantage on a check involving that creature's abilities. **Mock Trophies** can also be built by scouting a creature's lair or spending a week of dedicated research — destroyed after one use.

**Trophies, validated by Monte Carlo:** a solo Rivet clearing 4 Weak-tier mooks spending all available Grit on Trophy bonuses averaged +8.1 total damage (5.85→4.84 rounds to clear, ~17% faster) across 2,000 trials — roughly +2 effective damage per Grit after accounting for overkill waste on already-weakened mooks. That's proportionate to a single 1-Grit Basic maneuver like Shake it off (avg 3.5 value per use); Trophies isn't over- or under-tuned relative to the rest of the Grit Maneuvers table.

**Second Wound slot unlocks at level 4, third at level 8** — the second closes an old open question (previously "some later point, unpinned") by tying it to the same milestone as the first Vertical stat increase big enough to matter, and to Syberist's first free spell name. **The third fixes a real asymmetry the level-8 encounter-scaling problem exposed**: named enemies already gain a third Wound slot at milestone 3+ (level 6, see Encounter Level Scaling), but PCs capped at two forever — meaning from level 6 onward, bosses got tougher and fights ran longer while PC survivability depth stayed flat. A Monte Carlo confirmed this was the actual mechanism behind the level-8 cliff: adding a matching third PC Wound slot at level 8 pulled the zero-death rate from 62.7% back to 74.0% (pre-move+act baseline; see Encounter Level Scaling for the current post-move+act numbers, which land in a 52.7–84.3% band across levels 1–8) — without touching any of the three existing scaling levers (Guard, attack bonus, to-hit target).

### Stress Test: Aeshaan's Growth Curve

Applied to the recurring glass-cannon case study, choosing INT (her Guard Stat) at levels 2 and 4, then diversifying into CON (armor-requirement stat) at 6 and 8. Two INT picks reaching +3 total by level 4 is fully valid under the current rule — +3 is the real, achievable ceiling through Vertical investment, just never reachable at creation alone (max +2 there). **The only edge case worth flagging:** if her starting INT was already at creation's own +2 maximum, her first Vertical pick into INT would already hit the +3 ceiling, and the second pick at level 4 would need to redirect to a different stat instead — her exact starting value was never pinned down as a specific number in this example, so this table assumes she started with room for both picks.

| Level | Guard | Stat-bonus contribution | Flat-growth contribution | Wound slots |
|---|---|---|---|---|
| 1 | 6 | — | — | 1 |
| 4 | 10 | +2 (INT+1 twice) | +2 | 2 |
| 8 | 12 | +2 (INT+1, CON+1) | +4 | 3 |

**Finding, and why this calibration was chosen over the first draft:** an earlier pass granted flat Guard *every* level (not every-other) — by level 8 that produced Guard 15, of which +7 was pure automatic growth and only +2 came from Aeshaan's actual stat choices, which let leveling-up matter more than building well. Tying flat Guard to the *same* cadence as stat growth fixes that: a player who commits every Vertical point to their Guard Stat can match or exceed the automatic growth, while one who diversifies (as Aeshaan does here, splitting into CON for the Medium-armor requirement) gets a real, felt tradeoff instead of the flat bonus just dominating regardless of choice. By level 8 Aeshaan's CON is high enough to newly qualify for Medium armor if the player wants it — a second layer of lateral choice opening up from a vertical investment, which is exactly the kind of build interplay this system should keep producing at every level, not just level 1.

## Glossary

**One canonical definition per term, alphabetical. Built after this document accumulated real drift more than once** — "Wound cycle" existed for a long stretch before ever getting a real definition, "Mastery" got referenced as a live mechanic in the Advancement table while never being built out anywhere, and "flat bonus" appeared in three separate abilities with no actual number attached to any of them. This section exists to stop that from happening quietly again — if a term matters enough to use twice, it belongs here once, and every other use should mean exactly this and nothing looser.

**Aberrant Mark** — mentioned once (Dragonmarks → Mark Tiers) as a real tier open to any Background, bigger than a Least Mark but with backlash risk. **Never actually built out** — no specific example, no real mishap table, same shape as the old "Mastery" gap. Flagged here rather than silently treated as a working feature.

**Advantage / Disadvantage** — roll 3d10 instead of 2d10, keep the best two (Advantage) or worst two (Disadvantage). Disadvantage rolls never crit.

**Archetype** — the three character chassis: Wayfarer, Agent, Syberist (the latter with four traditions — Shardbound, Flamesworn, Wildspoken, Artificer). Determines resource type, Lateral Advancement track, and Guard bonus.

**Background** — race and culture fused into one character-creation choice. Grants a stat bonus, two Talents, and narrative-only gear.

**Base Target** — the single number an enemy uses for attacking, defending, and resisting Effect spells, before Encounter Level Scaling is applied. Weak 9, Standard 12, Strong 15.

**Cast Stat** — the stat a Syberist uses for spellcasting (INT for Shardbound/Artificer, CHA for Flamesworn, WIS for Wildspoken). Always distinct from Guard Stat and weapon stat — never merged, even when it's a character's defining stat.

**Contingency** — what Leverage buys: retroactively declaring you already prepared for a specific moment. Cost scales with the size of the ask (1/2/3+ Leverage).

**Contraption** — an Artificer Syberist's built-ahead device, sealed with a Name-Crafted effect via Quick Rig. Triggered later as a single action by whoever holds it, using their own INT bonus for the roll — not the crafter's.

**Critical Hit** — doubles on the to-hit roll (both counted dice match a success). Deals maximum weapon damage, no damage roll.

**Damage Floor** — any successful hit deals a minimum of 1 damage, regardless of die result or negative stat bonus. Universal, not specific to any one weapon, spell, or interaction.

**Death's Door** — triggered at 0 Guard with no Wound slots remaining. Roll d6: 1–3 dies, 4+ faints and rolls on the Scar Table.

**Deprivation** — the penalty state from failing to gather food/rest during travel (see Travel & Exploration).

**Disengage Check** — a DEX check (2d10+DEX vs 12) required to leave a zone containing a live melee hostile. Failure grants them a free attack first.

**Effect Spell** — a spell that isn't an attack (wards, buffs, heals, utility). No caster roll; works automatically on a willing target, resistance check on an unwilling one. Contrast **Attack Spell**.

**Grit** — Wayfarer's resource. Starts at 2, +1 at even levels, some regained after resting a Turn. Spent on Grit Maneuvers.

**Guard** — the damage buffer every character has. = 4 + Guard Stat bonus + archetype bonus + armor + shield, floor 1. Restores fully after a Turn of rest.

**Guard Stat** — the stat chosen at character creation to calculate Guard. Must differ from weapon stat, cast stat, and Wandslinger stat — locked together at creation, never re-checked against later gear changes.

**Initiative** — 2d10 + DEX + weapon modifier − armor penalty, rolled once per fight. Fixed order for the whole encounter.

**Lateral (Advancement track)** — the archetype-specific options gained every level, no exceptions. Contrast **Vertical**.

**Legendary Resistance** — a true solo boss auto-succeeds its first 3 failed resistance checks per encounter.

**Leverage** — Agent's resource. Starts at 2, +1 per level. Regenerates during downtime via a GM-adjudicated check (see Archetypes), not from resting a Turn.

**Milestone** — the encounter-scaling checkpoint, tied to party level (roughly every 2 levels). Drives Encounter Level Scaling for mooks, bosses, and Base Target.

**Mook** — an enemy with no Wound slot — Guard alone determines when it's down. Contrast **Named**.

**Multi-Action** — extra actions per Round granted to true solo bosses, scaling with Milestones reached (see Enemies & Advancement).

**Named** — an enemy with the full Guard → Wound → Scar chain, same as a PC. Contrast **Mook**.

**Overcast Backlash Pool** — the dice-pool mechanic resolving what happens when a caster attempts a Minor+ tier cast without enough shards. See Overcasting.

**Overcasting** — attempting a Minor, Moderate, Major, or Mythic cast without enough shards on hand. Never applies to Cantrip or Spark, which have flat, known costs.

**Quick Rig** — an Artificer Syberist's baseline casting method: Name-Craft a spell during downtime, seal it into a Contraption instead of firing it immediately. Takes 1 Turn per Contraption, cannot happen mid-combat.

**Reeling** — Disadvantage on the next roll after a Wound opens.

**Round** — one full cycle through the fixed Initiative order, the unit combat is measured in. Not to be confused with **Turn** below, which is a completely different, much longer exploration-pacing unit — an earlier draft used "Turn" for both, importing 5e's vocabulary (where Turn means an individual's combat action) into a document that also needed the real OSE meaning (a 10-minute exploration unit) for the same word. Fixed by dropping the combat meaning of Turn entirely; Round covers combat on its own.

**Scar Table** — the d10 table rolled when a character faints at Death's Door (result of 4+).

**Scenario Target Modifier** — the GM's tool for shifting a Target up or down based on circumstance, on the same granular scale used for enemy Base Targets and Leverage regeneration checks.

**Shards, Raw (Dust)** — loose, unrefined, 5cp each. Powers Cantrip and Spark tier only.

**Shards, Refined** — cut and processed, 10gp each. Powers Minor tier and above, and permanent magic items.

**Shock** — a monster-specific trait: minimum chip damage on a miss with melee attacks (Light 1, Medium/Heavy 2), gated by the target's armor tier.

**Skill** — an Agent's chosen ability, picked freely at creation and every level-up (Swift, Network, Expertise, Many Pockets).

**Talent** — a Background-granted ability that gives Advantage on a narrow, named category of checks.

**Target** — the number a 2d10+stat roll must meet or beat to succeed. Standard 12; shifted by tier or Scenario Target Modifier.

**Tier (magic)** — Cantrip, Spark, Minor, Moderate, Major, Mythic — the six potency levels of a cast, each with its own shard cost and damage output.

**Turn** — a 10-minute unit of exploration/downtime pacing (OSE/B-X convention) — wandering monster checks, resource use, and resting are all measured in Turns. **This document does not use "Turn" for an individual's action in combat** — that's covered entirely by Round above. An earlier draft conflated the two, importing 5e's combat-Turn meaning alongside the real OSE exploration-Turn meaning for the same word; fixed by keeping only the OSE meaning, matching this system's actual OSR lineage. This document also has no formal "short rest / long rest" mechanic — an earlier draft used that 5e-style language for what were really just a Turn of rest (10 minutes, restores Guard) and a full day's rest (closes Wounds), both already real units this system tracks natively.

**Vertical (Advancement track)** — the universal stat/Guard growth every archetype shares, every other level (2, 4, 6, 8). Contrast **Lateral**.

**Weapon Stat** — the stat (STR or DEX) governing a weapon's attack and damage. Always distinct from cast stat, chosen independently even by a caster who also carries a weapon.

**Wound** — opens when damage overflows a character's Guard and a slot is available. Reduces max Guard by 2; current Guard refills to the new max. Triggers Reeling and a Wound Complication.

**Wound Complication** — the d6 side-effect table rolled when a Wound opens.

**Wound cycle** — retired term, formerly used by several abilities' cooldowns. Replaced with "once per scene" across the board — the concept needed its own paragraph to define and still landed badly. Kept here only so old references don't go unexplained.

**Zone** — the abstracted positioning unit: Melee, Near, Far. No grid, no squares. Move covers 0–1 zone per turn.

## Open Threads / Next Steps



- **A reusable combat Monte Carlo benchmark now exists as a standalone file (`combat_benchmark.py`), not something to rebuild from scratch each session.** Built after several rounds of test-quality problems in one session — missing Initiative, no defensive AI, mismatched party sizes vs. the encounter being tested, a `guard_max` bug — that produced misleadingly harsh results until caught and fixed. This file models real interleaved Initiative (not "PCs then enemies"), per-character Surprise, a priority-ordered decision tree per PC (emergency defense first, signature plays second, standard attacks as fallback), the corrected Wound-refill rule, and genuinely rolled shard costs rather than flat averages. **Needs an update, not yet done:** its default enemy count is 8 mooks + Kolt, inherited from the Case Study's number before that was found arbitrary and corrected to 6 (3 Blade + 3 Bow) elsewhere in this document. The cited baseline (32.8% zero-death, Aeshaan dying in 55.7% of trials) was generated against the old 8-mook count and can't just be relabeled — it needs an actual rerun at 6 mooks to produce a number that's still true. Extend this file for future ability/rule testing rather than writing a fresh script each time, but fix the mook count first.

- ~~Three Agent Skills remain genuinely unquantified: Network, Supplies, Many Pockets~~ — **resolved.** Many Pockets: +1 backpack slot per pick, repeatable (the orphaned "Mastery" clause, a TEA-source concept never actually built out in this doc, cut entirely — along with every other "Skill or Mastery" reference in Advancement, which is now just "Skill"). Supplies: removed outright, redundant with what Leverage/Contingency already covers more flexibly. Network: reframed around its own real niche — once per downtime scene, a CHA check to call in a favor immediately regenerates 1 Leverage, distinct from Contingency's spend-side rather than duplicating its "have a contact" flavor.

- **A trap-option audit of the Tradition-Specific Options (Advancement) found several real issues, not yet fixed:** Shard-Split is a *conditional* trap — excellent value against groups, completely wasted (same shard cost, zero benefit) against any solo target, including most bosses. Zealous Rebuke looks undercosted for a free, always-on passive (its bonus damage matches a whole 2-shard Shard Bolt cast, for zero cost). Bloodscent needs the same "target-dependent value" caveat Feint already has — Advantage barely moves the needle at typical stat levels against a Standard-tier target, tested at only +0.3 percentage points in one check, meaning it reads as more reliably useful than it actually is. Thorned Ground has a narrower real-world trigger than its Wound-cycle-gated sibling Fractal Ward (enemies must actually retreat, which many fights never call for). None of these are fixed yet.

- **Orphaned terminology sweep found and fixed six real gaps across the whole document.** Three Talents named but never mechanically defined (Wildsense, Speak with the Undying, Whisper Network — all in Backgrounds) and, more significantly, three core Syberist Advancement features tagged "(confirmed)" but never actually defined anywhere despite being referenced multiple times as design-parallels for Artificer's own features (Resonance Sense, Focused Inhalation, Whispers of the Prophecy — see Advancement). All six now have working definitions; the three Syberist features are honestly flagged as reconstructed-from-name-and-context rather than source-verified, same treatment as the Scar Table.
- **Minor, lower-priority inconsistency found in the same sweep:** the "Worked Example: Combat (Design Evolution)" section describes a character's "Mending Ray" spell as closing a Wound — this reflects an early design iteration that predates the current "Wounds cannot be closed mid-combat" rule. Contained within clearly-historical narrative, not live rules text, so lower priority than the definitions above, but worth a cleanup pass if that section gets revisited.

- ~~Monk-vs-Duelist PvP duel needs re-running~~ — **resolved, and expanded into a full four-way tournament.** The final roll-both-take-highest system (not just a recalibrated penalty) was validated with all four loadouts (Heavy two-handed, Versatile+Shield, Versatile+Tower Shield, Dual-attack) built off the identical stat roll with fair, comparable Grit toolkits — all four land within a tight 45–55% band against each other. See Dual-wield / Two-Weapon Fighting for the full results table.
- ~~Tower Shield's Guard value~~ — **resolved: +2 Guard**, matching Medium armor's value (see Weapons & Damage).

- **Guard-refill-on-Wound recalibration still needed, but confirmed safe to keep — spot-checked, not a live concern.** A real gap was found and closed: "current Guard resets to 0 when a Wound opens" was used in every Monte Carlo test in this document but was never actually written as a rule — only "max Guard reduces by 2" was ever stated. Corrected to "current Guard refills to the new max, floor of 1" (see HP: Guard + Wounds). Every zero-death percentage cited in this document (Encounter Level Scaling's 52.7–84.3% band, all archetype breakpoint tests, Multi-Action tuning) reflects the old, harsher assumption — a full recalibration pass under the corrected rule is still a real, not-yet-done task. **But a level-1 spot-check (4-mooks-plus-boss scenario, N=5000) already confirmed the fix isn't a hidden regression anywhere**: a small N=300 sample first suggested level 1 got *more* dangerous under the refill (64.7%→55.7%), which looked mechanically impossible since refilling Guard should only ever help; at N=5000 the gap collapsed to 63.0% vs 61.6% — noise, not a real effect, and consistent with the expected pattern that refill matters least at low Guard values (level 1's thin pools) and most at higher ones (levels 4–8 showed clean, consistent safety gains at the original sample size). **What's left is scale, not risk** — extending the same confirmation across every level and scenario, not checking whether the rule is secretly broken somewhere.
- **Scar Table needs source verification.** Written in as a reconstruction from the general recalled shape (permanent disadvantage, d10, narrative results), not a re-verified transcription — the source PDF wasn't actively accessible when it was written. Worth a direct check against the actual source text in a future session if exact fidelity matters.

- **Gear-based Grit Maneuver expansion — now fully written into the actual Grit Maneuvers table (Gear-Specific Maneuvers), not just tested and left in Open Threads.** All seven gear categories (Unarmed, Light, Medium, Heavy, Shield, Ranged, Dual-attack) have a complete Basic/Advanced pair. Two pieces that were genuinely missing before are now drafted: **Ranged Basic — Steady Aim** (ignore range Disadvantage or a cover penalty for one shot) and **Shield Advanced explicitly confirmed** as the existing universal-table Shield maneuver, rather than an unstated assumption. **One spot-check of combined effects run** (Guarded Strike + Focus used together across a 2-round exchange): +22.6% damage output for 2 Grit spent, plus meaningfully suppressed enemy retaliation — real value, not an exploitative multiplier. **A later "trap option" audit resolved both remaining untested pieces**: Momentum's ambiguous wording was fixed (confirmed per-use, tested at +1.61 dmg/Grit) and Sunder's earlier "underwhelming" diagnosis was found to be based on a buggy test that never applied its own effect — corrected testing shows it was never actually a trap. **Steady Guard (Medium Basic) remains genuinely untested** — same low-risk reasoning as before (a defensive, Guard-Stance-shaped effect), but not yet confirmed with real numbers. **Also still open:** a full exhaustive combinatorial check across all seven gear categories and the universal table hasn't been run — the trap audit checked each option against its closest sibling/benchmark individually, not every possible combination in play together.

- ~~Background overlap check~~ — **fully resolved.** All five issues found across the full pass are now fixed: the duplicate talent name (Gatekeeper Orc renamed to *Ward Against the Deep*), the 4-way fear/despair redundancy (differentiated by specific trigger), Kundarak Vault-Warden/Mror Deep Delver's trap-detection overlap (Deep Delver retargeted to *Ruin-Sense*, structural hazards rather than traps), Riedran Outsider/Changeling Community-Raised's mind-affecting overlap (Changeling's narrowed to identity-specific effects only), and Zil Trickster/Sharn Cutpurse's likely sleight overlap (Cutpurse's Quick Fingers elaborated as speed-focused, distinct from Sleight's misdirection focus). The undead/fiend/aberration-resistance cluster and the wilderness-tracking cluster remain, confirmed thematically justified rather than true redundancy.

- ~~Retroactive note on prior simulated combat~~ — **the consequential part is now resolved.** Move+act's effect on Encounter Level Scaling specifically was re-tested and recalibrated (see Enemy Design Philosophy → Encounter Level Scaling's move+act follow-up: 6 mooks instead of 8, softened boss base stats). Exact round counts in the earlier Worked Example/Case Study logs still technically reflect the old movement rule and would resolve a little faster under the corrected one, but the load-bearing calibration (zero-death rates) has been redone and confirmed.
- ~~Multi-Action calibration~~ — **resolved.** Decoupled from Blast entirely (unrelated tools). Scaling bonus actions to milestones (1 + milestones÷2, not a flat number) fixed the earlier "gets safer with level" problem into a consistent 74–82% band across all levels 1–8. Mook count confirmed as a fine-grained, usable GM dial on top of a scaled boss (82.6% at 0 mooks down to 15.9% at 4). **New finding, not previously flagged:** every calibration number in this doc was tuned against a well-built reference squad — randomized/less-optimized squads run meaningfully more dangerous at identical parameters (33.6% vs 58.8% at 2 mooks), a caveat now stated explicitly in Multi-Action's writeup.
- ~~Blast's actual usefulness~~ — **resolved: settled as a damage-shape option, not a balance lever.** Confirmed not to fix action economy (tested in isolation, no effect on solo-boss danger). It's available to any suitably-themed item, spell, or monster per Weapon Keywords/Spell Names — flavor and shape, not a scaling tool, no further design work needed.

- ~~Verify the actual TEA chargen numbers against the source PDF~~ — **resolved.** The free rules PDF was reviewed directly (see the source-accuracy note at the top of this doc): 5 attributes, roll-under 1d10 checks, Auto-Hit+AV combat, flat 2d4 HP, Advantage/Disadvantage as roll-two-keep-best/worst, real zones, the three archetypes' actual published features, the Death's Door table, and the confirmed potency-tier costs are all verified against source. Everything built on top (2d10-vs-12, Guard/Wounds, zone-range specifics, enemy tiers) is a deliberate, now-extensively-tested house variant, not an unverified guess.
- ~~Finish the remaining House Least Marks~~ — **resolved.** Sivis, Vadalis, Deneith, Ghallanda, Orien, Medani, and Phiarlan/Thuranni all now have a defined Least Mark; all 12 Houses are covered.
- ~~Expand Backgrounds list~~ — **largely resolved.** Elves (6), Humans (7), Half-Elves/Khoravar (3+2 House variants+Dragonmarked Heir template), Dwarves (5), Gnomes (3), Halflings (3), Shifters/Kalashtar/Changelings/Warforged (12), and Orcs/Goblinoids (6) are all now built out — roughly 45 total Backgrounds, full pass-checked for overlap. **Still genuinely open:** Droaam's non-5e-baseline monstrous species (Gargoyle, Harpy, Medusa, Worg, Droaam-Tiefling — flagged earlier as sourced from 2024-ruleset material, outside this project's stated 5e baseline) and more Sharn-specific mixed-heritage options, neither of which are blocking anything.
- Decide Greater/Siberys Mark specifics per House once a campaign context exists.
- ~~Reroll mercy rule for bad stat spreads~~ — **resolved, redesigned.** The original fix (a standing free-choice Array alongside rolling) was found to be a real exploit — a fixed safe option always available *after* seeing the roll makes rolling strictly dominant (try for upside, retreat risk-free if bad), which quietly kills the alternative as a meaningful choice. Replaced with a WWN-style narrow mercy: if **no stat rolls positive** (a genuine outlier, not just unlucky-but-playable), raise two stats to +1 each or one stat to +2 — small, targeted, and untriggerable on purpose since the condition can't be gamed.
- ~~Guard floor/base tuning~~ — **resolved: current formula (base 4, floor 1) stays as-is.** Confirmed working as intended per the Case Study; not treated as needing adjustment.
- ~~Extend the "reward non-primary stats" design principle to Agent~~ — **resolved.** See Talents & Expertise: the confirmed "Talents grant Advantage" rule, previously omitted from this doc, already gives every archetype non-primary-stat relevance via Background choice. Agent additionally gets access to any other Background's Talent list at creation.
- ~~Playtest zone granularity~~ — **resolved: 3 zones is correct by design, not a scale limitation.** Zones are centered on the characters relative to the fight, not fixed geography on a map — theater-of-mind, not a grid. A bigger fight doesn't need more zones any more than a small one needs fewer; the abstraction scales with the encounter automatically.
- ~~Expand each tradition's Noun table to the full 64-slot grid~~ — **resolved.** Arcane, Holy, and Nature Noun tables are all now 64 entries each, matching the Form/Adjective tables, with careful checking to avoid word collisions against the shared Form table.
- ~~Shield/protective maneuver duration~~ — **resolved: stays flat at one Round regardless of Grit spent, no scaling option.** Consistent with the "simple, no exceptions" pattern the rest of Grit Maneuvers follows — the fix for a sustained threat is bringing more than one protector, not a longer single-maneuver window.
- ~~Cascading Advantage roll order (Surprise)~~ — **resolved: PCs roll before enemies; in a PC-vs-PC ordering question, the players choose who goes first.** No GM adjudication needed.
- ~~Morale tuning~~ — **resolved via Monte Carlo, 5,000 trials of the typical 3-check sequence (first casualty → 50% down → captain death).** Break distribution: 16.2% break at first casualty, 27.2% at 50% down, 23.0% at captain's death, **33.6% never break at all** (fight goes to a full wipe). Overall: **66.4% of fights end in a rout at some point, roughly a third go the distance.** This is a healthy spread — morale isn't unreliable (routs happen often enough to matter) or a guaranteed out (a third of fights are genuinely fought to the end), and breaks are distributed across all three triggers rather than clustering at one. No further tuning needed.
- ~~Disengaging test coverage~~ — **resolved.** A full automated Monte Carlo (1,000 trials) with a "retreat when badly hurt" AI behavior (any ranged PC below 30% Guard sharing a zone with a live melee hostile now retreats instead of continuing to fight) triggered the Disengage check organically 34 times: **73.5% clean escapes, 26.5% failed into a free attack, of which a third connected and 2 caused a new Wound.** This closes the earlier gap where scripted AI never voluntarily left an active fight — the mechanic is now confirmed working correctly in genuine automated full-squad combat, not just the hand-built staged scenario.
- ~~Should Guard Stat be changeable later~~ — **resolved: permanent at character creation, with the same exception every other system in this doc has** — a diegetic, story-justified change (a magical transformation, a life-altering injury, focused in-fiction retraining) is always possible at the GM's discretion, same as everything else that isn't a flat mechanical respec button.
- **Aeshaan-style extreme glass cannons:** the Case Study confirms the system is consistent (not swingy) in killing a maximally fragile build under sustained focus fire even with perfect play. Worth an explicit table-level conversation about whether that's the intended stakes level for this campaign, or whether a soft minimum (e.g. no stat below −2 after placement, or a mandatory minimum Guard regardless of Guard Stat choice) should be house-ruled in for lower-lethality tables.
- ~~Monster/encounter level scaling~~ — **resolved.** Three enemy-side levers (Guard, attack bonus, to-hit target) plus a matching third PC Wound slot at level 8 close the loop, further recalibrated after the Movement rule correction; the full level 1–8 curve now sits in a 52.7–84.3% zero-death band with no remaining cliff. See Enemy Design Philosophy → Encounter Level Scaling and Advancement.
- ~~Agent and Syberist Wound-cycle interplay~~ — **both now tested.** Trophies validated by Monte Carlo (proportionate to a Basic-tier Grit Maneuver, see Advancement). Free spell names validated qualitatively (a narrative-fit test, not a combat-math one, since potency is negotiated at cast time regardless of which name is used) — a level-8 Syberist with 4 known names had a naturally-fitting option for every one of 3 tested challenge types (combat, defense, utility), while a level-1 Syberist with 1 name was boxed in for 2 of 3. This also surfaced a real gap now fixed: **Spell Name Acquisition** (Spell Names section) adds Diegetic Discovery as a third, shards-free method alongside the confirmed Ritual and Name-Crafting, plus lets starting/free names be chosen instead of rolled once Name-Crafting unlocks.
- ~~Confirmed-source subsystems never touched by this doc~~ — **all resolved.** Item Slots (Weapons & Damage), Deprivation (HP: Guard + Wounds), Reaction Check (adapted to a real CHA check on the same target/Adv-Disadv as the rest of the system, not a flat d10), Travel & Exploration (full new section), Weapon Keywords and Blast-form spells (both clarified — Blast just means "use the potency tier's existing multi-target damage line," no separate subsystem needed) are all now written in.
- **Death's Door rescue clock** (confirmed: a character who survives the 0-HP check still dies if not treated within a Turn by another character) — deliberately kept out of this doc's Guard/Wound "faints, rolls a Scar" resolution per an explicit design call, not an oversight, but worth noting the urgency this drops if a table wants it back.
