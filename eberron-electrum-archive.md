## Setting Terminology

Eberron is the setting this ruleset runs; The Electrum Archive is the mechanical system underneath it. Several Eberron concepts map onto TEA's own setting terminology and mechanics:

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

Roll **2d10 + stat bonus**, succeed on **12 or higher**.

**What a stat actually represents.** Every check happens because something's genuinely at stake, and the stat you roll is the part of your character being tested in that moment — acting on the world, or holding up against something acting on you.

| Stat | What it represents | You act by... | You resist... |
|---|---|---|---|
| **STR** | Raw physical power | Hitting hard, forcing something open, holding your ground | Being grabbed, thrown, physically overpowered |
| **DEX** | Speed and precision | Reacting fast, aiming true, getting there before the danger does | Area effects, traps, anything you can dodge or outrun |
| **CON** | Endurance | Keeping going after most people would stop | Poison, disease, exhaustion, being worn down |
| **INT** | Reasoning | Working something out under pressure — a trap, a lie, a spell | Illusions, mental tricks that only fool someone not paying attention |
| **WIS** | Awareness | Noticing what's actually happening, trusting an instinct | Fear, despair, charm, anything preying on your state of mind |
| **CHA** | Presence | Making someone believe you, fear you, or follow you | Intimidation, manipulation, being talked into something |

**Where each stat also matters, beyond its own checks** — the quiet, easy-to-miss places a stat's bonus feeds into something else entirely:

| Stat | Also feeds into |
|---|---|
| **STR** | Weapon proficiency (melee); Hold the Line Grit Maneuver |
| **DEX** | Weapon proficiency (ranged); Initiative's base roll; Disengage Check |
| **CON** | Heavy/Medium armor's requirement; Overcast Backlash Pool rerolls; Second Wind Grit Maneuver; Hold the Line (shared with STR) |
| **INT** | Language count / illiteracy threshold; the party-wide Search roll (Exploration Procedure); Shardbound and Artificer cast stat |
| **WIS** | Surprise Check (default stat); Listen at a Door (Exploration Procedure); Wildspoken cast stat; Rally Cry Grit Maneuver (shared with CHA) |
| **CHA** | Reaction Check; Flamesworn cast stat; Rally Cry Grit Maneuver (shared with WIS) |

Guard Stat isn't listed here deliberately — every stat is a *potential* Guard Stat, calculated automatically from whichever one ends up highest and eligible (see Guard Stat below), so it's not a fixed use tied to any one stat the way these are.

Situational difficulty is represented by shifting the Target number or granting Advantage/Disadvantage. Stat bonus, weapon tier, and Guard stay fixed; only the target and the dice pool move.

A given roll has Advantage, Disadvantage, or neither. If a roll would qualify for both from different sources, it resolves as neither — roll normally.

Applies per roll. A character's outgoing attack and an incoming attack against that character are separate rolls.

**"Next attack/roll/hit" effects** (Guarded Strike, Take Aim, Fractal Ward, Zealous Rebuke, and others) tag one specific future roll:

1. The tag applies to the stated roll's next occurrence.
2. The tag is consumed when that roll happens, regardless of outcome.
3. An untriggered tag expires at the end of its stated window.
4. A pending tag resolves before any new application of the same tag.

### Stat Bonus Generation

Roll 3d6 per stat (summed), assign the six results to STR/DEX/CON/INT/WIS/CHA in any order.

| 3d6 (sum) | Bonus | Success vs 12 |
|---|---|---|
| 3–6 | −2 | 28% |
| 7–9 | −1 | 36% |
| 10–11 | 0 | 45% |
| 12–14 | +1 | 55% |
| 15–18 | +2 | 64% |

**Mercy adjustment.** If, after rolling, no stat is positive, the player may make one of the following:
- Raise two stats to +1 each, or
- Raise one stat to +2.

**Restart by agreement.** If a player is unhappy with the whole build, player and GM can agree to start the character over completely — a table-level judgment call requiring mutual agreement.

Background bonuses stack freely on top, including double-stat Backgrounds.

### Advantage / Disadvantage

Roll 3d10, keep the best two dice for Advantage or the worst two for Disadvantage, then add the stat bonus.

| Bonus | Normal | Advantage | Disadvantage |
|---|---|---|---|
| −3 | 21% | 43% | 7% |
| −2 | 28% | 53% | 11% |
| −1 | 36% | 62% | 15% |
| 0 | 45% | 71% | 22% |
| +1 | 55% | 79% | 29% |
| +2 | 64% | 85% | 38% |
| +3 | 72% | 89% | 47% |

**Critical Hit.** If both counted dice on a successful roll show the same value, it's a critical — maximum damage, no damage roll at all. Applies identically to weapon attacks and Attack spells, since both roll to-hit the same way. **Advantage** (3d10, keep the best two) can still crit if those two kept dice match. **Disadvantage never crits, under any circumstance** — even if the two worst dice happen to match each other, it's just a hit, not a critical.

**Damage Floor.** Any successful hit deals a minimum of 1 damage, regardless of die result or negative stat bonus.

---

## Magic Baseline: Possession, Not Consumption

Casting means possessing enough shards to pay a tier's cost.

Syberists cast via Name-Crafting — spells are cast by learning the names of spell spirits that inhabit Khyber, Syrania, or the space between planes, generated via random tables (Form/Adjective/Noun combined via a Template) and costed by potency tier.

| Tier | Cost | Avg shards | What it can do |
|---|---|---|---|
| Cantrip | Free — just possess ≥1 shard as a focus, don't spend it | 0 | Momentary, cosmetic, zero-stakes effects only. No damage, no unlocking, no real mechanical advantage. |
| Spark | Flat 1–3 shards (GM sets exact cost by scope) | ~2 | Small, real, single-purpose mechanical effects — mitigate one hit, a brief minor buff, a tiny utility trick. |
| Minor | 2d6 shards | 7 | Could be done without magic, but magic makes it reliable/fast. Attack spells, single-target: 1d8 + caster's stat bonus. Multi-target: up to 2 targets in the zone, 1d4 flat each (no stat bonus) — a real capability Spark can never reach at any cost, not just a bigger number. |
| Moderate | 2d6×2 shards | 14 | Beyond mundane possibility. Single-target: 2d8 + caster's stat bonus. Multi-target: up to 4 targets in the zone, 1d6 flat each. |
| Major | 3d6×5 shards | 52.5 | Breaks the laws of nature. Single-target: automatically opens a Wound on a hit, bypassing Guard entirely, plus 2d8 + caster's stat bonus secondary damage. Multi-target: up to 6 targets in the zone, 2d6 flat each, no auto-Wound. |
| Mythic | 4d6×25 shards | 350 | Alters the world. Single-target: automatically opens two Wounds at once on a hit, bypassing Guard entirely, plus 4d8 + caster's stat bonus secondary damage. Multi-target: up to 8 targets in the zone, 4d6 flat each, no auto-Wound. |

Cantrip produces color only. Any mechanical outcome starts at Spark tier and costs shards.

**Worked example, single-target:** Ilyara casts a Minor-tier bolt at a lone bandit. She rolls 1d8+INT(+2): the die comes up 6, total 8 damage.

**Worked example, multi-target:** Two bandits share a zone. Ilyara casts the same tier, multi-target option — one to-hit roll, and on a hit, both targets take 1d4 flat each (no stat bonus, capped at 2 targets for Minor tier). She rolls a 3 and a 2: 5 damage to one bandit, 4 to the other.

### Shard Bolt (Spark-tier attack cantrip)

| Shards spent | Damage |
|---|---|
| 1 | 1d4 |
| 2 | 1d4+1 |
| 3 | 1d4+2 |

No stat bonus stacks on top of the die — shard count is the only damage scaling. To-hit still uses the caster's normal stat bonus.

Requires Spark-tier access. Syberist has this inherently; an Agent or Wayfarer needs Wandslinger specifically to unlock it. See Wandslinger under Archetypes.

### Spark Utility Spells

Requires Spark-tier access, same as Shard Bolt. Inherent for Syberist; Agent and Wayfarer need Wandslinger.

- **Whisper Latch** (1 shard) — muffle a single door or window's sound for one pass-through; no check, one-time use.
- **Guiding Mote** (1 shard) — a small light reveals the general direction of a specific known object within the zone, not its exact location.
- **Steady Hand** (2 shards) — for one upcoming check, ignore a minor environmental hindrance.
- **Quick Latch** (1 shard) — a simple mundane lock or latch opens without a check. Never works on anything actually warded or magically secured.
- **Cooling Breath** (1 shard) — chills a container of food or drink to safe temperature, or holds off spoilage for a day.
- **Message Mote** (2 shards) — a short, one-sentence message reaches a specific person you can see, audible only to them.
- **Mending Touch** (1 shard) — repair a small break or tear. Doesn't work on anything destroyed outright or gear damaged mid-combat.
- **Guiding Word** (1 shard) — grant Advantage on one ally's upcoming check, cast before they roll.
- **Telekinetic Nudge** (1 shard) — manipulate a small, light object at short range without physically reaching it.
- **Phantom Flicker** (2 shards) — a small, stationary illusory sound or image as a distraction or decoy; doesn't move or interact with anything.
- **Flourish** (1 shard) — a minor supernatural flourish grants Advantage on one Intimidation-flavored check.

### Generating More Spark Spells

Reuses the Spell Name generation system (Form/Adjective/Noun). The Form word suggests a utility category:

| Category | Example Form words |
|---|---|
| Detection/Perception | Eye, Gaze, Oracle |
| Object Manipulation | Hand, Finger, Grasp, Lock |
| Communication | Voice, Word, Whisper |
| Minor Alteration/Repair | Mask, Cloak, Charm |
| Concealment/Distraction | Veil, Silhouette, Shadow |
| Aid/Advantage-granting | Guide, Ward, Blessing |

Roll or pick a Noun (from the caster's own tradition table) and a Form (shared table), combine per the normal Template. Consult the Form word's natural category to decide the effect. Price at 1–3 shards by scope. If a Form word doesn't suggest any utility category (Blade, Bolt, Claw), treat it as an Attack-spell option instead, following Shard Bolt's model.

Casting a spell means proposing an effect and letting the GM price its tier.

### Overcasting

Only applies to Minor, Moderate, Major, and Mythic tier. There is no overcasting Cantrip or Spark.

A caster can always attempt a Minor+ cast even without enough refined shards to pay for it — but the spell only actually manifests on a genuinely good roll.

**The Overcast Backlash Pool:**

1. Pool size by tier: Minor 4d6, Moderate 3d6, Major 2d6, Mythic 1d6.
2. More than half the cost missing? Remove one die. No floor — the pool can hit 0.
3. Pool at 0 or less: instant death, no roll.
4. Add rerolls equal to your CON bonus — reroll that many of your lowest dice once each, keeping the better result.
5. Roll the pool. Read the single highest die:

| Highest die | Result |
|---|---|
| 6 | The spell manifests. |
| 5 | Fails to manifest. No other consequence. |
| 3–4 | Fails to manifest. Lose your next turn. |
| 2 | Fails to manifest. A Wound opens directly (no Guard absorption first). |
| 1 (every die in the pool) | Fails to manifest. Make the existing Death's Door roll. |

**Worked example:** a Wildspoken with CON+1 attempts Beast Shape (Major tier) with 0 shards on hand. Major's base pool is 2d6. The shortfall is total, so the pool drops to 1d6. CON+1 rerolls that one die once. First roll: 3. Reroll: 5. Keep the 5. Highest die is 5 — the transformation fails to happen, but nothing else goes wrong.

### Spellcasting Procedure (Quick Reference)

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

- **Attack spells** — a projectile or blast genuinely aimed at a target. The caster rolls to-hit, exactly like a weapon attack, on top of the normal shards cost per potency tier.
- **Effect spells** — everything else: wards, buffs, debuffs, healing, utility, forced conditions, area/Blast-form effects. No caster roll at all — just the shards cost and an action.
  - Cast on a willing target (an ally, or yourself): it simply works.
  - Cast on an unwilling target: the target rolls a resistance check — 2d10 + their most relevant stat vs 12, shiftable by potency or Scenario Target Modifiers same as any other check.

---

## Spell Names (Eberron Reskin)

Spell names are generated by rolling a d4 for a Template, then 2d8 for each Template component (Form/Adjective/Noun), combined per the Template.

### Spell Name Acquisition

Three methods:

1. **The Ritual** — consume 50 shards, a full day, GM rolls a fully random name.
2. **Name-Crafting** (level 3+) — combine parts of names already known into a new one, player-directed.
3. **Diegetic Discovery** — learn a name through play: translate an inscription in a ruin, pry it from a defeated rival caster's journal, bargain for it from a spirit encountered in Khyber or the space between planes. No shards cost. GM and player pick the Template and components together based on what's in the fiction.

The starting spell name at level 1, and any free name gained from Advancement, can be chosen instead of rolled once Name-Crafting is unlocked (level 3+).

**Template:** 1. [Noun] [Form] · 2. [Adjective] [Noun] · 3. [Adjective] [Form] · 4. [Form] of [Adjective] [Noun]

A spell whose Form is Blast (or a similarly area-implying Form like Wave, Field, Torrent) uses the potency tier's "multiple targets" damage line.

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

**Adjective** (shared):

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

**Noun — split by tradition.** Each Syberist archetype rolls on its own tradition's Noun table:

**Arcane (Shardbound):**

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

**Holy (Flamesworn):**

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

**Nature (Wildspoken):**

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

**Artificer:**

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

**Aberrant:**

| d8.d8 | Aberrant Noun | d8.d8 | Aberrant Noun | d8.d8 | Aberrant Noun | d8.d8 | Aberrant Noun |
|---|---|---|---|---|---|---|---|
|1.1|Tarkanan|3.1|Feedback|5.1|Vessel|7.1|Crease|
|1.2|Corruption|3.2|Backlash|5.2|Cavity|7.2|Ripple|
|1.3|Mutation|3.3|Flicker|5.3|Shell|7.3|Throb|
|1.4|Scale|3.4|Tremor|5.4|Carapace|7.4|Ache|
|1.5|Vein|3.5|Convulsion|5.5|Chitin|7.5|Sting|
|1.6|Tumor|3.6|Spasm|5.6|Barb|7.6|Burn|
|1.7|Splinter|3.7|Twitch|5.7|Spine|7.7|Itch|
|1.8|Bleed|3.8|Shudder|5.8|Quill|7.8|Chafe|
|2.1|Gristle|4.1|Writhe|6.1|Hook|8.1|Wrongness|
|2.2|Sinew|4.2|Coil|6.2|Tendril|8.2|Otherness|
|2.3|Membrane|4.3|Tangle|6.3|Feeler|8.3|Deviation|
|2.4|Cyst|4.4|Knot|6.4|Antenna|8.4|Anomaly|
|2.5|Excess|4.5|Snarl|6.5|Socket|8.5|Reversion|
|2.6|Overflow|4.6|Thread|6.6|Joint|8.6|Regression|
|2.7|Surge|4.7|Strand|6.7|Hinge|8.7|Taint|
|2.8|Discharge|4.8|Filament|6.8|Fold|8.8|Stain|

Sample results: a Shardbound's *"Prison of Cryptic Khyber"* reads like a binding pulled from the deep; a Flamesworn's *"Word of Terrible Syrania"* reads like a judgment invoked from on high; a Wildspoken's *"Claw of Rending Thorn"* reads like something torn straight out of the Eldeen wilds; an Artificer caster's *"Ward of Precision Ratchet"* reads like a device schematic given a name; an Aberrant Mark's *"Blast of Erratic Corruption"* reads like power that was never meant to be steady.

- **Slotted Spells** — spend shards to buy/fuel combat- and plot-relevant spells, at the confirmed cost tiers.

---

## Background Creation Procedure

A guide for building new Backgrounds beyond what's listed below.

Three steps, every time:

1. **One stat, +1.** A single Background grants +1 to exactly one stat. Double-stat bonuses are reserved for Backgrounds tied to an inherent racial trait, not a chosen career or culture.
2. **Two Talents.** At least one should be passive and narrow — Advantage on a specific, named category of check, never "all social checks" or "all combat checks." The other can be passive too, or a narrow 1/session active trick.
3. **Gear, narrative not numeric.** 2–3 items that open doors, prove standing, or carry weight — never a hidden stat bonus. Weapons and armor are never Background gear; those come from the character's own Weapon & Armor choice in Character Creation.

**Balance check:** hold a new Background's two Talents up against two or three existing ones in a similar niche.

**The tell that a Background needs trimming:** if a Talent would be useful in most scenes rather than specific ones, it's not narrow enough yet.

## Backgrounds (Race + Culture Fused)

A growing example set, not a closed list. Anything not covered here can be built using the Background Creation Procedure above.

Race and nation/culture are inseparable in Eberron, so each Background does double duty — same slot as always (attribute bump, 1–2 talents, starting gear), but two members of the same race raised in different places feel genuinely different from each other.

### Elves
- **Valenar Blademarked** — +1 DEX/STR. Talents: *Ancestral Duel* (call on a war-spirit for Advantage on one attack, 1/session), *Horse-Kin* (Advantage on attack rolls while mounted). Gear: a clan sigil, a woven cord marking readiness to ride to war.
- **Aereni Deathward** — +1 WIS. Talents: *Speak with the Undying* (Advantage communicating with or interpreting guidance from ancestor spirits, or a real standing connection to a specific Undying Court elder), *Patience of Centuries* (Advantage resisting fear or despair specifically when facing death, undeath, or the passage of time). Gear: ancestral mask, funerary incense.
- **Aereni Tomb-Keeper** — +1 INT. Talents: *Keeper of Names* (Advantage recalling or researching historical and genealogical lore, especially Undying Court records), *Ward-Sworn* (Advantage detecting or resisting tampering with a sacred or warded site). Gear: sealed scroll case, funerary wax seal-kit, a small idol of a specific ancestor.
- **Aereni Exile** — +1 WIS. Talents: *Cast Out* (Advantage resisting despair specifically when isolated, rejected, or cut off from support), *Marked for Return* (the Undying Court considers your exile unfinished business; GM's call on how and when that surfaces). Gear: no ancestral mask; forged travel papers; a single relic refused to give up when cast out.
- **Valenar Warband Scout** — +1 DEX. Talents: *Outrider* (Advantage tracking or navigating open terrain, especially plains and borderlands), *Read the Land* (Advantage spotting ambushes or hidden forces before they spring). Gear: riding gear, a warband token.
- **Sharn-Raised Elf** — +1 CHA. Talents: *Codeswitcher* (pass as native in any Sharn district), *Skywalk* (no penalty on skybridges/heights). Gear: forged residency papers, grapple line. No ancestral talent.
- **Phiarlan Performer** (Agent) — +1 DEX. Talents: *Two Faces* (Advantage maintaining a cover identity as a performer while actually working intelligence in the west), *House Backing* (a genuine, deniable Phiarlan contact for information). Gear: a performer's kit, a stage name that isn't your own.
- **Phiarlan Marked** — +1 DEX. Talents: *Mark of Shadow* (once per session, become very difficult to notice or recall for a short time), *House Duty* (see Dragonmarks). Gear: the House signet, kept hidden rather than displayed.
- **Thuranni Blade** (Agent) — +1 DEX. Talents: *Marked for the Work* (Advantage identifying a target's weaknesses, routine, or the fastest way to reach them unseen), *Eastern Discipline* (a real, cold contact within Thuranni's eastern network — the schism from Phiarlan runs deep). Gear: a concealed blade built for a single clean strike, a client's payment token, no name attached.
- **Thuranni Marked** — +1 DEX. Talents: *Mark of Shadow* (once per session, become very difficult to notice or recall for a short time), *House Duty* (see Dragonmarks). Gear: the House signet, kept hidden rather than displayed.

### Humans
- **Sharn Cutpurse** — +1 DEX. Talents: *Quick Fingers* (Advantage on fast, precise hand-work under time pressure — lockpicking, disarming, a quick draw), *Knows a Guy* (one fence/fixer contact). Gear: lockpicks, stashed bolt-hole key.
- **Karrnathi Line Soldier** — +1 CON. Talents: *Drilled* (advantage forming up/holding a line), *Grim Discipline* (resist fear from undead). Gear: dog tags, a unit patch.
- **Brelish House Factor** — +1 CHA. Talents: *Contract Sense* (spot a bad deal), *Letter of Credit* (real line of credit with one House). Gear: fine clothes, ledger.
- **Aundairian Magewright** — +1 INT. Talents: *Trained Hand* (Advantage operating or diagnosing minor magical infrastructure — everbright lanterns, message stations, Cannith household items), *Arcanix Credentials* (a real academic reference from Arcanix or a lesser Aundairian college). Gear: scribing toolkit, letter of academic standing, a small collection of minor non-combat enchanted trinkets.
- **Cyran Survivor** — +1 CON. Talents: *Carried the Mourning* (Advantage resisting fear or despair specifically in the face of mass loss, catastrophe, or overwhelming scale), *Nothing Left to Lose* (once per session, push a check past its normal limit at real personal cost, GM's call on the cost). Gear: a keepsake from a nation that no longer exists, forged New Cyre residency papers, nothing of monetary value.
- **Thrane Templar** — +1 WIS. Talents: *Flame-Sworn* (Advantage resisting or detecting corruption, undeath, or fiendish influence), *Church Authority* (real standing within the Church hierarchy; can call on local Flame-affiliated resources in most Thrane-influenced territory). Gear: a symbol of the Silver Flame worn openly, formal writ of standing from a specific cathedral or chapter.
- **Lhazaar Waverunner** — +1 DEX. Talents: *Sea Legs* (Advantage keeping balance or functioning aboard a moving vessel, or navigating by stars/coastline), *Letter of Marque* (a real or convincingly forged privateer's commission from a specific Prince, granting legal cover and a fleet contact). Gear: a boarding hook, the commission itself.
- **Riedran Outsider** — +1 WIS. Talents: *Trained Discipline* (Advantage resisting mind-affecting effects), *Foreign Eyes* (Advantage spotting things "out of place" in Khorvaire specifically). Gear: nothing overtly Riedran, forged local papers, one hidden token of home.
- **Vadalis Handler** (Agent) — +1 WIS. Talents: *Magebred Eye* (Advantage judging a creature's temperament, health, or magebred quality at a glance), *Stable Standing* (real credit toward acquiring a mount or guard animal through House channels). Gear: handling gear, a magebred animal's lead or tack.
- **Vadalis Marked** — +1 WIS. Talents: *Mark of Handling* (at will, sense a non-hostile animal's mood or temperament; once per session, calm or command one directly), *House Duty* (see Dragonmarks). Gear: the House signet, a magebred animal companion's tack.
- **Tharashk Prospector** (Agent) — +1 WIS. Talents: *Dragonshard Sense* (Advantage locating dragonshard deposits or judging a raw shard's quality), *Shadow Marches Contact* (a real bounty-hunting or prospecting contact back in the Marches). Gear: prospecting tools, a rough hand-drawn claim map.
- **Tharashk Marked** — +1 WIS. Talents: *Mark of Finding* (once per session, know the general direction of a specific person, creature, or item you've seen before), *House Duty* (see Dragonmarks). Gear: the House signet, a well-worn tracking kit.
- **Deneith Blademark** (Agent) — +1 STR. Talents: *Contract Discipline* (Advantage holding a defensive position or protecting a specific charge under pressure), *Marshal Standing* (real, junior standing as a Sentinel Marshal — some cross-border legal authority). Gear: a Blademarks company token, a written mercenary contract.
- **Deneith Marked** — +1 STR. Talents: *Mark of Sentinel* (once per session, interpose yourself as the target of an attack meant for an ally sharing your zone), *House Duty* (see Dragonmarks). Gear: the House signet, formal Blademarks officer's papers.
- **Orien Courier** (Agent) — +1 DEX. Talents: *Rail Rhythm* (Advantage keeping pace, timing, or footing during fast travel), *Route Standing* (real, discounted passage on Orien's rail and caravan lines). Gear: a courier's satchel, a rail line schedule.
- **Orien Marked** — +1 DEX. Talents: *Mark of Passage* (once per session, instantly know the safest and fastest route to a known destination), *House Duty* (see Dragonmarks). Gear: the House signet, unrestricted rail passage papers.

### Half-Elves (Khoravar)

Khoravar ("Children of Khorvaire") are a genuine third culture — most are children of Khoravar, generations removed from any elven ancestor. They have their own creole (Khoravar Cant, a Common/Elvish pidgin), and two Houses (Lyrandar and Medani) are predominantly Khoravar-blooded, giving the culture real institutional weight. Both elven traditions reject them — the Undying Court has never admitted a half-elf, and Valenar don't believe a Khoravar can channel an ancestral spirit.

- **Khoravar Go-Between** — +1 CHA. Talents: *Bridge-Born* (fluent in Khoravar Cant, Common, and Elvish; Advantage on checks building trust between communities that distrust each other), *Steady Ground* (if the Off-Balance Wound Complication comes up, Advantage on the DEX check it imposes; if Staggered Back comes up instead, you choose which adjacent zone you're thrown into rather than the GM deciding). Gear: forged travel papers, a keepsake marking ties to a found community rather than a blood family.
- **Lyrandar Windrider** — +1 DEX. Talents: *Storm Sense* (Advantage reading incoming weather, navigating rough seas, keeping footing on an unstable deck), *House of the Sea and Sky* (standing credit/berth aboard any Lyrandar vessel or airship). Gear: House signet, navigator's tools, a weathered logbook.
- **Medani Warder** — +1 WIS. Talents: *Ward-Sense* (Advantage noticing an ambush, hidden threat, or a lie told to someone under your protection before it lands), *Sworn to a Charge* (once per session, act out of turn to intervene when a specific person you're retained to protect is about to be harmed). Gear: House signet, an openly-worn warding charm, a client contract or standing retainer.

Windrider and Medani Warder are career-tied (working for a House), distinct from a Dragonmarked Heir (chosen by the mark itself) — see Dragonmarks for the Heir template.

### Dwarves

- **Mror Shard-Miner** — +1 CON. Talents: *Shard-Sense* (detect dragonshard deposits nearby), *Tunnel-Steady* (no penalty fighting underground). Gear: pick, dark-lantern.
- **Kundarak Vault-Warden** — +1 WIS. Talents: *Ward-Reader* (Advantage spotting magical locks, traps, or wards), *House Standing* (real credit or access at any Kundarak vault or bank). Gear: lockbreaker tools.
- **Mror Clan Duelist** — +1 STR. Talents: *Honor-Bound* (Advantage in formal duels or honor challenges, real social weight attached to refusing one), *Blood Feud* (name a specific rival clan or individual you hold a standing grudge with, established at character creation. Advantage on all attack rolls against them, and Advantage resisting their attempts to intimidate or manipulate you. Any Reaction Check with other members of that clan or group is made at Disadvantage — the feud's reputation precedes you). Gear: clan sigil worn openly, a dueling scar earned in a formal challenge.
- **Mror Deep Delver** — +1 WIS. Talents: *Ruin-Sense* (Advantage predicting structural collapse or safely navigating unstable ancient architecture), *Steady in the Dark* (Advantage resisting fear or panic when isolated underground with no light). Gear: rope and pitons, a fragment of unidentified pre-Dhakaani script.
- **Sharn-Settled Dwarf** — +1 CHA. Talents: *City Trained* (Advantage navigating bureaucracy, permits, or city guard interactions), *Clanless by Choice* (Advantage resisting social pressure or guilt-tripping tied to clan obligations). Gear: forged Sharn residency papers, a clan token no longer worn openly.

### Gnomes
- **Zil Broker** — +1 INT. Talents: *Whisper Network* (a standing web of informants — once per session, learn a rumor or relevant fact from a contact without needing to seek one out), *Always Listening* (advantage on overheard-info checks). Gear: coded ledger, messenger bird.
- **Korranberg Scholar** — +1 INT. Talents: *Cataloguer's Mind* (Advantage recalling or locating information within a library, archive, or the Korranberg Library network specifically), *Peer Reviewed* (a real academic reputation — Advantage on checks invoking scholarly credentials). Gear: a Korranberg Library membership token, a partial index of a personal research project.
- **Zil Trickster** — +1 DEX. Talents: *Sleight* (Advantage on close-quarters misdirection — palming, planting, or lifting something unnoticed), *Vanish in a Crowd* (Advantage disappearing into a crowded space after drawing attention). Gear: a set of forged minor documents, a deceptively plain outfit that changes character with small adjustments.
- **Sivis Notary** (Agent) — +1 INT. Talents: *Bound Neutral* (Advantage on checks where being trusted as an unbiased witness or messenger matters), *Speaking Stone Access* (real, limited use of the House's message-station network). Gear: a scrivener's kit, a House Sivis seal marking a document as formally witnessed.
- **Sivis Marked** — +1 INT. Talents: *Mark of Scribing* (a spoken or written message sent through House Sivis channels arrives without distortion, interception, or loss, once per session), *House Duty* (see Dragonmarks). Gear: the House signet, formal papers of standing.

### Halflings
- **Talenta Plains Rider** — +1 DEX. Talents: *Beast-Bond* (mount won't panic/flee), *Open Sky* (never lost outdoors). Gear: a beast-taming charm, tribal markings.
- **Talenta Dinosaur Handler** — +1 WIS. Talents: *Herd-Sense* (Advantage calming, training, or reading the mood of a large beast, not limited to a personal mount), *Tracker's Eye* (Advantage following tracks or signs of passage in wild terrain). Gear: handler's goad, dried feed rations, a beast-taming manual passed down in the clan.
- **Khorvaire-Settled Halfling** — +1 CHA. Talents: *City Charm* (Advantage on first impressions with strangers), *Small and Overlooked* (Advantage avoiding notice in a crowd or being underestimated in a negotiation). Gear: forged city residency papers, no riding gear.
- **Jorasco Chirurgeon** (Agent) — +1 WIS. Talents: *Trained Hands* (Advantage on mundane medicine, diagnosis, or first-aid work), *House Discount* (real, standing credit at any Jorasco healinghouse). Gear: a physician's satchel, a House Jorasco apprentice's letter.
- **Jorasco Marked** — +1 WIS. Talents: *Mark of Healing* (stabilize a dying creature or mend a minor injury, 1–2/session, no dust cost), *House Duty* (see Dragonmarks). Gear: the House signet, a warded rod.
- **Ghallanda Innkeeper** (Agent) — +1 CHA. Talents: *Reads the Room* (Advantage sensing a stranger's intent or trouble brewing in a public space), *Guild Standing* (real credit or a bed at any Ghallanda inn or outfitter). Gear: an innkeeper's ledger, a House Ghallanda badge.
- **Ghallanda Marked** — +1 CHA. Talents: *Mark of Hospitality* (at will, sense whether food or drink is tainted or poisoned; once per session, conjure a simple meal or a small safe resting space), *House Duty* (see Dragonmarks). Gear: the House signet, a keyring to more than one Ghallanda safehouse.

### Shifters, Kalashtar, Changelings, Warforged

**Shifters:**
**Shifters**, sharing one race-wide trait, true for all three Backgrounds below: once per encounter in combat, call on their heritage briefly — Advantage on a single melee attack as claws or fangs extend, or move one extra zone this Round as a speed burst. Once per scene in a social situation, letting their heritage show through the same way — a fanged smile, a predator's stare — grants Advantage on an intimidation-based check. Shifters carry real prejudice in most of Khorvaire — their lycanthropic heritage is visible proof of what they are, and plenty of people react to that with fear or distrust before they've said a word. Using either version of this trait openly makes that harder to hide, not easier.
- **Eldeen Shifter** — +1 DEX/STR. Talents: *Reaches-Born* (Advantage on checks drawing on standing or knowledge specific to the Eldeen Reaches' wilderness communities), *Wildsense* (Advantage noticing natural dangers, tracking prey, or sensing a change in weather before it arrives). Gear: Dungeoneering Toolkit, a woven charm from the Towering Wood.
- **Gatekeeper Shifter** — +1 WIS. Talents: *Ward the Threshold* (Advantage detecting aberrant or planar-touched creatures and influence), *Old Oath* (real standing with Gatekeeper circles in the Eldeen Reaches). Gear: a warding totem, dried herbs used in Gatekeeper rites.
- **Sharn Shifter** — +1 CON. Talents: *Rough Trade* (Advantage on work that trades on physical presence — enforcing, bouncing, muscle-for-hire — and on reading when a room's about to turn violent), *Fringe Standing* (a real, if grudging, network among Sharn's lower-district enforcers and mercenary crews — not respectable, but reliable). Gear: a set of brass knuckles or similar improvised weapon, a battered City Watch citation (paid off, not earned).

**Kalashtar:**
**Kalashtar**, sharing one race-wide trait from their bonded quori spirit — two souls in one body, true for all three Backgrounds below: Advantage on WIS-based checks resisting mind-affecting effects (fear, charm, possession, anything preying on your state of mind), and at-will telepathic communication with any creature within Near range that shares a language you know — silent, can't be overheard, doesn't require line of sight, but still requires an actual common tongue.
- **Kalashtar Dreamwarden** — +1 WIS. Talents: *Dreamward* (Advantage sensing psychic intrusion), *Dream Council Standing* (real standing within a specific kalashtar dream-council or enclave). Gear: meditation focus.
- **Recently-Arrived Kalashtar** — +1 CON. Talents: *Survived the Crossing* (Advantage resisting fear or despair specifically when pursued, hunted, or facing capture), *Still Listening for Riedra* (Advantage noticing signs of Inspired agents or Riedran influence specifically). Gear: forged Khorvaire papers, nothing that would mark Riedran origin if searched.
- **Khorvaire-Born Kalashtar** — +1 CHA. Talents: *Never Knew the Cage* (no inherited fear response tied to Riedra — Advantage on checks where that fear would otherwise apply), *Community Roots* (real standing within a specific Khorvaire kalashtar enclave). Gear: a community token, ordinary local dress.

**Changelings**, sharing one race-wide trait, true for all three Backgrounds below: every changeling can alter facial features, voice, and build to resemble another humanoid of similar size at will, no check needed. Changelings carry a different, quieter kind of prejudice — most people who learn what a changeling actually is respond with suspicion rather than fear, since the ability to convincingly become anyone means no changeling is ever fully trusted once they're known for what they are.
- **Stage-Trained Changeling** — +1 CHA. Talents: *Unremarkable* (retcon that an NPC recognized you, 1/session), *Second Face* (a prepared alternate identity, papers included). Gear: theater props, a well-worn stage mask.
- **Changeling Infiltrator** — +1 CHA. Talents: *Cold Read* (Advantage picking up a stranger's mannerisms and speech patterns quickly enough to convincingly mimic them after brief observation), *Deep Cover* (a maintained false identity with real standing somewhere specific). Gear: a second set of identity papers, notes on the person being impersonated.
- **Changeling Community-Raised** — +1 WIS. Talents: *Many Faces, One Self* (Advantage resisting effects that would alter, erase, or impersonate your identity or memory of self specifically), *Hidden Kin* (a real connection to a changeling enclave most outsiders don't know exists). Gear: a token only recognizable to other Community-Raised changelings, no false papers.

**Warforged:**
**Warforged**, sharing one race-wide trait, true for all three Backgrounds below: a construct, doesn't eat, breathe, or sleep normally.
- **Cyre-Built Warforged** — +1 CON/STR. Talents: *Battle-Worn* (when you'd roll on the Scar table, roll twice and take the better result), *Cyre's Last* (real, bittersweet recognition among Cyran survivors and other Cyre-forged warforged). Gear: repair tools, sunrod.
- **Post-War Wandering Warforged** — +1 WIS. Talents: *No Orders Left* (Advantage resisting despair or purposelessness), *Read the Room* (Advantage sensing when a space or situation is genuinely hostile to warforged, and adjusting before it becomes a problem). Gear: no unit markings; a personal item picked up somewhere on the road, not issued.
- **House Cannith Warforged** — +1 INT. Talents: *Factory-Trained* (Advantage operating, repairing, or diagnosing Cannith-made constructs and devices specifically), *Still Property* (a real, uncomfortable legal tie to House Cannith — GM's call on how this surfaces). Gear: visible Cannith unit markings, official (if restrictive) papers of standing.

### Orcs
- **Droaam Half-Orc Mercenary** — +1 STR. Talents: *Bad Reputation* (intimidation Advantage), *Contract Killer* (at the start of a genuine paid job, name the contract's actual target — GM confirms it's a legitimate professional engagement, not a personal grudge or a target you'd have gone after anyway. Advantage on all attack rolls against that specific creature for the duration of the contract). Gear: a scarred trophy from a past contract, a mercenary company's token.
- **Gatekeeper Orc** — +1 WIS. Talents: *Ward Against the Deep* (Advantage detecting aberrant creatures or planar corruption), *Binding Rite* (once per session, a real ritual to weaken or contain an aberrant threat — GM's call on scope). Gear: a warding stake, herbs for a binding rite, a totem marking a specific guarded site.
- **Ghaash'kala Orc** — +1 CON. Talents: *Labyrinth-Sworn* (Advantage resisting fiendish corruption or temptation), *Marked by the Wastes* (Advantage recognizing fiendish influence or Demon Wastes-touched creatures before others notice). Gear: ash-marked wraps, no possessions beyond what's needed for the duty.

### Goblinoids
- **Dhakaani Loremarked Goblin** — +1 STR/INT. Talents: *Old Empire* (read pre-Sundering script), *Ancestral Drill* (Advantage with a specific ancestral weapon style passed down since before the Sundering). Gear: a fragment of pre-Sundering script, a clan tattoo marking lineage.
- **Darguun Hobgoblin Soldier** — +1 STR. Talents: *Drilled to War* (Advantage forming up, holding a line, or coordinating with other trained soldiers), *Mercenary Standing* (a real reputation and contact within Darguun's mercenary companies). Gear: a mercenary company's token, service marks earned in the field.
- **Bugbear Outrider** — +1 DEX. Talents: *Unseen Until Close* (Advantage remaining unnoticed despite size), *Sudden Reach* (Advantage on the first strike in an ambush specifically). Gear: dark wraps for concealment, a trophy from a successful ambush.

### Building Your Own Background

The 64 Backgrounds above follow one pattern, if you want to build another.

```
NAME
  [Origin/Culture/House] + [Role/Identity].
       │
       ▼
STAT BONUS
  +1 to one stat. +1 to two stats only for a genuine
  racial/body-plan trait.
       │
       ▼
TWO TALENTS
  One combat- or adventuring-relevant.
  One flavor-relevant — identity, standing, or culture.
  Both narrow and specific: a named danger, a named skill,
  a named edge.
       │
       ▼
GEAR
  Narrative only. 2–3 items. Weapon and armor stay a
  separate Character Creation choice.
       │
       ▼
RACE-WIDE TRAIT? (if applicable)
  An inherent trait shared by every Background of that
  race gets stated once, above the whole group.
```

**Worked example — Sharn Cutpurse:**

**Name:** Sharn + Cutpurse.
**Stat bonus:** +1 DEX.
**Talent 1 (combat/adventuring):** *Quick Fingers* — Advantage on fast, precise hand-work under time pressure: lockpicking, disarming, a quick draw.
**Talent 2 (flavor):** *Knows a Guy* — one fence or fixer contact.
**Gear:** lockpicks, a stashed bolt-hole key.
**Race-wide trait:** none.

---

## Archetypes (D&D Classes → TEA Chassis)

Three chassis: **Agent** (skill/utility), **Wayfarer** (martial/grit), and **Syberist** (caster).

- **Fighter/Barbarian → Wayfarer: Warbred** — more HP/grit, fewer tricks.
- **Rogue/Ranger/Bard/Diplomat → Agent** — see Agent Flavors below for how the same chassis plays distinctly depending on Skill and Leverage focus.
- **Wizard/Sorcerer → Syberist: Shardbound** — casting sourced from raw dragonshard. Cast stat: INT.
- **Cleric/Paladin → Syberist: Flamesworn** — casting reflavored as Silver Flame or House-oath channeling; spell list themed around wards/healing. Cast stat: CHA.
- **Druid → Syberist: Wildspoken** — casting tied to the Eldeen Reaches/Gatekeeper tradition. Cast stat: WIS.
- **Bard → Agent/Syberist hybrid: Songmark** — half skill-talents, half small spells, CHA-keyed.
- **Artificer (Syberist tradition)** — cast stat: INT. Full design below.
- **Monk → Wayfarer: Unarmed/Xen'drik Ascetic** — grit spent on martial-art tricks instead of weapon damage.

### Artificer (Syberist tradition)

Cast stat: INT. Cantrip and Spark tier cast normally, reactive, in combat. **Minor tier and above never happens reactively in combat.** Instead, an Artificer Syberist builds effects ahead of time as physical devices, then triggers them later — sometimes handed to someone else entirely.

**Quick Rig — the tradition's baseline casting method, granted free at level 1.** During downtime, Name-Craft a spell as any Syberist would — roll and pay the tier's shard cost — but the effect doesn't fire immediately. It gets sealed into a crafted item instead. That item can later be triggered as a single action, releasing the stored effect as if it had just been cast — by the Artificer Syberist, or by whoever else is holding it.

**Building a contraption takes 1 Turn (10 minutes) of dedicated, uninterrupted work — cannot be rushed, cannot happen mid-combat.**

**Known contraption capacity: 1 at level 1, +1 at level 4, +1 at level 8** — how many built-but-unused contraptions can exist at once. Triggering one uses it up.

**The trigger roll always uses INT — the INT of whoever is actually holding and triggering the device, not the Artificer Syberist's own INT.**

Own Noun category for Spell Names: Artificer.

**Example contraptions, by tier:**

| Tier | Cost | Example |
|---|---|---|
| Spark | 1–3 shards | **Glowspark** — a hand-sized device sheds dim light in Near range when triggered, hands-free afterward. **Alarm Chime** — rings audibly the moment anyone crosses a marked threshold. |
| Minor | 2d6 shards | **Shock Coil** — a thrown or handheld device deals 1d8+INT (of the holder) damage in a burst. **Grapnel Rig** — fires a line, pulling the user one zone toward a fixed anchor point. |
| Moderate | 2d6×2 shards | **Breach Charge** — a placed device deals 2d8+INT (of the holder) damage to a structure or barrier, ignoring standard hardness. **Numbing Vapor** — releases a cloud imposing Disadvantage on all rolls made by anyone in the zone who fails a resistance check. |
| Major | 3d6×5 shards | **Overcharged Blast** — a single-target device automatically opens a Wound on a hit (bypassing Guard entirely), plus 2d8+INT (of the holder) secondary damage. **Repair Frame** — restores Guard equal to 2d6+INT (of the holder) to whoever's wearing it when triggered. |

**Permanent items** — an Artificer Syberist crafting a lasting magic item uses the existing Magic Items pricing (10–20× the tier's average casting cost): roll the tier's own cost die, read the result in days instead of shards, for the baseline crafting time. Pay the top of the range (20×) to halve that time; pay the bottom (10×) to double it.

**Shards and time alone are never sufficient — a real workspace and resources must actually be available, GM's discretion.** A Cannith enclave, a proper workshop, or comparable field-expedient setup is a precondition for any permanent item creation, same tier or higher than what's being built.

**Salvaging an existing magic item:** destroying it recovers shards equal to the tier's base average casting cost.

#### Tradition-Specific Options (Artificer)

- **Overclock** — once per scene: a triggered contraption's effect is rolled twice, keep the better result.
- **Field Diagnostic** — at will, free: analyze a device, ward, or mechanism to understand what it does.
- **Salvage** — once per scene: recover a spent contraption's shards instead of losing them outright.
- **Overload Shunt** — once per scene, automatic, no action required. When hit, roll 2d6 and reduce the damage by the sum. If either die shows a 1, the reduction still applies in full — but the next roll of any kind (attack, check, anything) is reduced by the value of the other die.

### Wandslinger (Agent/Wayfarer minor casting option)

Available only to Agent and Wayfarer. Hard-capped at Cantrip/Spark tier, never Minor or above.

- **Agent:** at character creation, may take Wandslinger instead of one Skill choice, in exchange for Spark-tier access. Shard Bolt counts as an eligible attack for Exploit the Opening and Take Aim, treated as a Light weapon for their Light/Medium restriction.
- **Wayfarer:** at character creation, may take Wandslinger in exchange for permanently forgoing access to one Advanced Maneuver of their choice.
- **A full-caster gish needs no new content** — a Syberist who invests STR/DEX and carries a real weapon is already a valid build; they simply don't get Wayfarer's Guard bonus or Agent's Skills.

Both options use whichever mental stat fits the concept — INT, WIS, or CHA, GM/player's call — matching how every other cast stat in this document is always a mental stat, never physical.

### Leverage (Agent's dedicated resource)

Leverage is Agent's own resource, kept separate from shards — mundane preparation (a contact, a stashed item, a favor already called in), not magic.

- **Starts at 2, +1 per level.**
- **Regenerates during downtime, once per lull in the action.** The player describes how they're using the downtime to prepare; the GM decides which mental stat (CHA/WIS/INT) fits that description. Roll 2d10 + that stat vs Target 12. Success regenerates 1 Leverage. The GM may shift the Target using the same Scenario Target Modifier scale used everywhere else in this system, based on how favorable the environment is to that kind of preparation.
- **Can be spent on an ally's behalf, not just the Agent's own declarations.**

### Contingency (what Leverage buys)

Declaring a Contingency retroactively establishes that the character already prepared for this specific, unexpected moment. Cost scales with the size of the ask:

- **1 Leverage** — a small, plausible flashback ("I have rope," "I've been to this district before").
- **2 Leverage** — a medium one ("I've dealt with this NPC before," "I bribed a guard on the way in").
- **3+ Leverage** — something that reshapes the scene ("I already turned this guard captain," "I know exactly where this shipment is headed").

No fixed price list — the GM prices the proposal.

**Skills** (choose freely at creation and on level-up):

- **Swift** — no Disengage check needed, Advantage on movement-related checks.
- **Network** — choose a real, named contact tied to a specific domain. Using that contact for the Leverage-regeneration check grants Advantage on the roll. A Contingency drawing on that contact's domain also costs 1 less Leverage (minimum 1).
- **Expertise** — choose a narrow field of specific expertise. Gain Advantage on checks within that field, at will. Can be taken multiple times, each pick adding a new distinct field.
- **Many Pockets** — +1 backpack slot per pick. Can be taken multiple times.

### Agent Combat Techniques

A menu, chosen in the moment like a Grit Maneuver:

- **Precision Strike** — this attack has Disadvantage, but deals +2 flat damage if it hits.
- **Exploit the Opening** — once per Wound that opens on a target (yours or an ally's), your next hit against them with a Light or Medium weapon automatically counts as a critical.
- **Take Aim** — spend your action aiming (no attack this turn); your next attack this fight against that target, with a Light or Medium weapon, gets Advantage, and rolls a second weapon damage die on top of the normal hit — that second die's result also permanently reduces their Guard, surviving even a Wound refill.

### Agent Flavors (worked examples — Rogue, Diplomat, Bard)

Three concept archetypes on the same Agent chassis, differentiated by what kind of Contingency each leans into and how Leverage regenerates:

**Rogue / "Cutthroat" (Burglar/Scout register):** Contingencies skew physical and logistical. Leverage regenerates through casing a location (a successful Swift/Expertise check made before the job, during downtime). Pairs naturally with Exploit the Opening/Take Aim and Many Pockets.

**Diplomat / "Emissary" (Political fixer register):** Contingencies skew relational and informational. Leverage regenerates through successful Network use and genuine downtime spent on political maneuvering.

**Bard / "Raconteur" (Performer/Connector register):** Contingencies skew social and reputational. Leverage regenerates through successful performance or entertainment checks.

**Worked PCs, one per flavor:**

**Vex — Rogue-Agent (Sharn Cutpurse).** Stats: DEX +3, INT +1, STR +0, CON +0, WIS −1, CHA −1. Guard 5, Wounds 1, Leverage 2. Talents: Quick Fingers, Knows a Guy (Background) + Many Pockets (Skill). *Contingency moment:* caught on a rooftop with no rope in inventory — spends 1 Leverage, declares "I looped a line across this gap on the way up."

**Adaine — Diplomat-Agent (Brelish House Factor).** Stats: CHA +3, INT +2, STR +1, DEX +1, CON −1, WIS −2. Guard 4, Wounds 1, Leverage 2. Talents: Contract Sense, Letter of Credit (Background) + Network, Expertise: trade law and contract disputes (Skills). *Contingency moment:* needs the baron's steward to grant an audience today — spends 2 Leverage, declares "I already settled his cousin's trade dispute last season."

**Coswell — Bard-Agent (Zil Trickster).** Stats: CHA +2, DEX +1, STR +1, CON −1, INT −1, WIS −2. Guard 4, Wounds 1, Leverage 2. Talents: Sleight, Vanish in a Crowd (Background) + Network, Swift (Skills). *Contingency moment:* an ally is about to be thrown out of a noble's party — Coswell spends 2 Leverage on the ally's behalf: "Actually, the hostess already knows your name — I made sure of that last week."

---

## Dragonmarks

**Two distinct kinds of House-lineage Background exist for each House: Agent (works for the House, no Mark) and Marked (carries the House's Least Mark).** Most people connected to a House, even by blood, never manifest a mark — Agent Backgrounds are the common case. Only a Background specifically named "[House] Marked" grants one; a career-tied Agent Background never does, regardless of which House it's tied to. One fixed effect per Mark, no dust cost, usable a limited number of times per session/rest (start with 1–2 uses).

**Being Marked carries real House Duty, true for every Marked Background:** the House can call on you for tasks you can't easily refuse, and Excoriation — being cast out, marked but disowned — is a genuine, heavy consequence for defying them seriously, not a minor setback. Less personal freedom, offset by real power.

### Mark Progression

| Level | Mark Tier | What happens |
|---|---|---|
| 1 | Least | Available from character creation if a House-lineage Background is chosen |
| 4 | Lesser | The mark's existing trick strengthens or gains a second narrow use |
| 8 | Greater | Rare — GM's call whether it's on the table for a given campaign or House at all |
| — | Siberys | Never on this track. Always unique, always GM-placed |

### Mark Tiers

- **Least Mark** — a single narrow trick.
- **Lesser Mark** — the trick strengthens or gains a second narrow use, still 1–2/session.
- **Greater Mark** — a genuinely strong effect; rare, likely Background-exclusive or a mid-campaign unlock.
- **Siberys Mark** — campaign-defining, essentially unique per game, GM-placed rather than player-chosen.
- **Aberrant Mark** — open to any Background. Grants the ability to attempt a Minor-tier cast (Attack or Effect) with zero shards ever possessed. Every attempt is a genuine Overcast: roll 2d6 for what the cast would have cost, then resolve entirely through the existing Overcast Backlash Pool — always reduced to 3d6, since 0 shards is always more than half short of any possible Minor-tier cost. CON bonus adds rerolls exactly as normal. Own Noun category for Spell Names: Aberrant.

**Mark Tier Power Baseline.** Least ≈ Spark tier (small, real, narrow), Lesser ≈ Minor tier (a real step up, reliable utility), Greater ≈ Major tier (rare, breaks the laws of nature), Siberys ≈ Mythic tier (unique, world-altering, essentially GM-placed only). Not an exact mechanical translation — a power-level anchor for what each tier should feel like when building one out.

| Tier | Cannith (Making) | Jorasco (Healing) |
|---|---|---|
| Least | Repair or jury-rig a broken item, 1/session | Stabilize a dying creature or mend a minor injury, 1–2/session |
| Lesser | The repair is now genuinely reliable and fast — no roll needed for anything short of total destruction, and a second use per session | Closes a Wound outright once per session, no Field Dressing Turn required |
| Greater | Rebuild something destroyed entirely, given a few hours and the pieces — genuinely beyond mundane possibility | Cures any non-magical affliction instantly; once per session, prevents a Death's Door roll from happening at all if reached in time |
| Siberys | A living creation — imbue something with genuine, if narrow, agency, GM-placed only | Restore the recently dead — a real resurrection, unique per campaign |

**Scaling principle for the other 10 Houses, built the same way:** Least→Lesser mirrors Spark→Minor's jump (better reliability, a second use, still narrow in scope). Lesser→Greater mirrors Minor→Major's jump (genuinely impossible without magic, rare, likely campaign-specific). Greater→Siberys mirrors Major→Mythic's jump (unique, GM-placed, never a standing player choice).

### Least Marks (all 12 Houses)

- **Mark of Making (Cannith)** — repair or jury-rig a broken item to working order, 1/session, no tools needed.
- **Mark of Storm (Lyrandar)** — calm or stir local weather in a small area, once per session.
- **Mark of Warding (Kundarak)** — sense the presence and rough strength of any lock/trap/ward in a room, at will.
- **Mark of Finding (Tharashk)** — once/session, know the general direction of a specific person/creature/item you've seen before.
- **Mark of Healing (Jorasco)** — stabilize a dying creature or mend a minor injury, 1–2/session, no dust cost.
- **Mark of Scribing (Sivis)** — once per session, a spoken or written message sent through House Sivis channels arrives without distortion, interception, or loss regardless of distance.
- **Mark of Handling (Vadalis)** — at will, sense a non-hostile animal's mood or temperament; once per session, calm or command one directly.
- **Mark of Sentinel (Deneith)** — once per session, interpose yourself as the target of an attack meant for an ally sharing your zone.
- **Mark of Hospitality (Ghallanda)** — at will, sense whether food or drink is tainted or poisoned; once per session, conjure a simple meal or a small safe resting space.
- **Mark of Passage (Orien)** — once per session, instantly know the safest and fastest route to a known destination.
- **Mark of Detection (Medani)** — at will, sense the presence of danger, poison, or an active lie within a small area.
- **Mark of Shadow (Phiarlan/Thuranni)** — once per session, become very difficult to notice or recall for a short time.

### Dragonmarked Heir (a template, not tied to any one race)

**Lyrandar Heir** (worked example) — +1 CHA (swap for the House's thematic stat when adapting this template elsewhere)

**Talents:**
- ***Marked*** — carries the House's Least Mark for free (scales with level regardless of standing with the House).
- ***Named Heir*** — real standing within the House hierarchy; a baron or excoriate knows your name specifically, not just your House. Advantage on checks invoking that standing.

**Gear:** a signet marking blood, not staff; a sealed letter of provisional inheritance; a small elemental-bound trinket.

**Excoriate Heir** — an available starting Background, not just a mid-campaign consequence:
- ***Marked*** stays completely unchanged — still cast the Least Mark for free regardless of standing.
- ***Named Heir* flips**: Disadvantage instead of Advantage on checks with anyone loyal to the House. No House gear, no signet.

The same template works for any House — swap the stat bonus, the Least Mark reference, and the flavor gear, keep Marked and Named Heir (or its Excoriate flip) as the universal talent pair.

---

## Talents & Expertise

Talents are the areas of expertise of a character. They grant Advantage on relevant checks. A GM may rule that a check succeeds automatically if a character is also carrying relevant equipment (the Healing talent plus a healer's toolkit to treat a wound).

**Agent's extra reach:** at character creation, an Agent may take one additional Talent from any other Background's list, not just their own.

---

## Languages

Common is free to everyone, no cost.

**Illiteracy:** INT bonus of −2 or lower means a character can speak known languages but cannot read or write any of them, Common included.

**Extra languages:** +1 language per positive point of INT bonus — INT+1 grants 1 extra, INT+2 (the max) grants 2. Player's choice which languages, drawn from any in the setting.

**Non-human Backgrounds grant their ancestral language for free**, separate from the INT-based count.

| Group | Ancestral language |
|---|---|
| Elves (all variants) | Elvish |
| Dwarves | Dwarvish |
| Halflings | Halfling |
| Gnomes | Gnomish |
| Khoravar | Khoravar Cant |
| Orcs, Half-Orcs | Orc |
| Goblins, Hobgoblins, Bugbears | Goblin |
| Shifters | none unique — Common or a regional tongue |
| Kalashtar | Quori |
| Changelings | none unique — defaults to whatever community raised them |
| Warforged | none — constructs have no ancestral tongue, Common only |

---

## Character Creation (Quick Reference)

```
═══════════════════════════════════════════════════════════════════
  CHARACTER CREATION
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
│    Wayfarer/Agent only: decide  │  Flamesworn(CHA) / Wildspoken(WIS)
│    Wandslinger here, if taking  │  Wandslinger sets a cast stat now,
│    it — before weapon/Guard Stat │  since it excludes from Guard Stat
└──────────────┬────────────────┘  too, same as any other cast stat
               │
               ▼
┌─────────────────────────────┐
│ 3. ROLL STATS (3d6 ×6)        │
└──────────────┬────────────────┘
               │
               ▼
        Mercy rule checks
        the RAW roll, BEFORE step 1's
        Background bonus stacks.
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
│ 6. CHOOSE WEAPON(S)            │  Check Weapon Proficiency vs
└──────────────┬────────────────┘  FINAL (post-Background) stats
               │
        ┌──────┴──────┐
        ▼              ▼
   Requirement met?  Requirement failed
        │              │
        ▼              ▼
   Weapon confirmed  Fall back to the
        │            highest tier actually
        │            qualified for, or go
        │            ranged instead
        └──────┬───────┘
               ▼
┌─────────────────────────────┐
│ 7. CHOOSE ARMOR                │  Check Armor requirement vs
│                                 │  FINAL stats + archetype bonus
└──────────────┬────────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 8. GUARD STAT (automatic)      │  Highest-bonus stat, excluding
│    calculated from weapon(s)    │  cast stat and every equipped
│    just chosen                  │  weapon's governing stat
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
│ 10. WOUND SLOTS = 1             │  Fixed at level 1
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
│ Agent:    choose 1 Skill (Wandslinger, if taken,    │
│           was decided back in step 2)               │
│           Leverage starts at 2                     │
│                                                     │
│ Wayfarer: Grit starts at 2; ALL Maneuvers already   │
│           available (Wandslinger, if taken, was     │
│           decided back in step 2)                   │
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

### Choice Guidance

**Background:** pick one whose stat bonus lands on the stat your archetype actually wants — a Wayfarer wants a STR/CON-boosting Background, a Syberist wants one matching their tradition's cast stat.

**Archetype:** Wayfarer = frontline durability, Agent = breadth and narrative leverage, Syberist = real spellcasting. If torn between two, ask which one's dedicated resource (Grit / Leverage / shards) sounds more fun to actually spend during play. **If Wayfarer or Agent, decide Wandslinger here too** — it sets a cast stat immediately, which matters for Guard Stat later: worth asking whether losing one Advanced Maneuver (Wayfarer) or one Skill (Agent) is worth Spark-tier casting for this specific character, and whether that cast stat is one they're comfortable excluding from Guard.

**Rolling and the mercy rule:** raising one stat to +2 concentrates power, raising two stats to +1 spreads it — concentration is usually the stronger pick if that stat will do double duty, spread is better if the build wants competence across more than one axis.

**Assigning rolled bonuses:** put your highest roll into whichever stat matters most for offense or casting — Guard Stat is calculated automatically afterward, not something to plan around at this step.

**Guard Stat:** no longer a choice — it's automatically your highest-bonus stat, excluding your cast stat and whatever your equipped weapon(s) use. Worth knowing when picking a weapon: a Heavy weapon on your best physical stat locks that stat out of Guard, so a genuinely tanky build often wants its offensive stat and its naturally-high stat to be different from the start.

**Weapon and armor:** check the relevant stat against Weapon Proficiency and Armor's requirement tables before committing narratively to a weapon/armor concept — and remember your weapon choice here directly decides your Guard Stat pool the moment you make it.

**Languages:** a high-INT build should pick languages that actually matter for the campaign's likely play. A −2-or-lower INT build's illiteracy is a real roleplay constraint.

**Archetype-specific choices:** an Agent's Skill choice should match their actual sub-concept (Wandslinger, if taken, was already decided back at Archetype); an Artificer Syberist's one starting contraption capacity is a deliberate call — what gets built first (and who it might get handed to).

**Starting wealth:** a caster should convert a meaningful chunk of the 200gp into refined shards — 100–150gp is a reasonable starting reserve. A pure martial build can reasonably spend close to zero on shards and put everything into gear instead.

**Worked example — building Tavin:**

1. **Background.** Jorasco Marked — +1 WIS, the Mark of Healing, House Duty.
2. **Archetype.** Syberist, Flamesworn tradition (CHA cast stat).
3. **Roll stats.** 3d6 ×6, six independent rolls: 14, 11, 10, 9, 8, 13. Looked up: +1, 0, 0, −1, −1, +1. At least one is positive, so no Mercy needed.
4. **Assign freely.** These six bonuses can go to any stat, in any order. CHA is Tavin's cast stat, so the highest roll (+1) goes there. DEX gets the other +1, since it governs the weapon. The two 0s go to WIS and INT; the two −1s land on CON and STR.
5. **Apply Background.** Jorasco Marked's +1 WIS lands on top of the just-assigned WIS 0, making it +1.
6–7. **Weapon & Armor.** DEX +1 qualifies for Medium. A warded rod (Medium, DEX) and Light armor.
8. **Guard Stat, automatic.** Excludes CHA (cast stat) and DEX (weapon stat). Of what's left — WIS +1, INT 0, CON −1 — WIS is highest, so Guard Stat lands there on its own.
9–10. **Guard & Wounds.** Guard = 4 + WIS(+1) + Light armor(+1) = 6. One Wound slot, as every character starts with.
11. **Starting wealth.** 120gp into refined shards (12 shards), the rest into a Healing Toolkit and basics.

Tavin: CHA +1 (cast), WIS +1 (Guard Stat, calculated), Guard 6, one Wound slot, a warded rod, Light armor, 12 refined shards, the Least Mark of Healing free from Background.

---

## Combat Procedure (Quick Reference)

```
═══════════════════════════════════════════════════════════════════
  COMBAT PROCEDURE
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
     │ + ACT — same turn,    │  Move AND act, never move-OR-act
     │ both always available │  (except Heavy armor's stated exception)
     └──────────┬─────────────┘
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
                      (floor 1)      │                          │
                    • Reeling        │              ┌───────────┴───────────┐
                      (Disadv next   │              ▼                        ▼
                      roll, or 2     │         1-3: DIES               4+: FAINTS
                      if "Rattled")  │         no further roll         + rolls Scar
                    • roll Wound     │                                 table, then:
                      Complication   │                                       │
                      table (d6)     │                                       ▼
                          │          │                    ┌───────────────────────────────┐
                          │          │                    │ RESCUE CLOCK STARTS              │
                          │          │                    │ Treated within a Turn (10 min)   │
                          │          │                    │ by another character?            │
                          │          │                    └────────────────┬──────────────────┘
                          │          │                                     │
                          │          │                          ┌──────────┴──────────┐
                          │          │                          ▼                       ▼
                          │          │                        YES                       NO
                          │          │                 Treatment check              DIES ANYWAY,
                          │          │                 (INT or WIS,                  no matter how
                          │          │                  GM's call) —                 the Scar roll
                          │          │                  success stabilizes           went
                          │          │                  for good                          │
                          │          │                          │                         │
                          └────┬─────┘                          ▼                         ▼
                               ▼                        (character stable)         (character dead)
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

## Inventory & Items

### Item Slots

Ten item slots total: **2 hand slots, 2 body slots, 6 backpack slots.** Hand slots hold what's actively wielded (weapons, shields); body slots hold worn gear for easy access in combat (armor, secondary weapons, focuses); backpack slots hold everything else. To carry more, hire someone, or buy a cart or pack animal.

**Using something already in hand costs your normal action for the turn** — attacking, drinking a held potion, activating a held gadget, all the same, no different from anything else you might do with your action. **Producing or stowing an item is also a full action, not an add-on** — drawing a new weapon, swapping what's in a hand slot, retrieving something from a body slot, or from a backpack slot (Agent's Many Pockets removes the cost for backpack retrieval specifically). Since a turn only has one action, producing something and using it both happen in the same turn only if it was already in hand; otherwise it's draw this turn, use it next.

- **Shards and coin are abstracted resources, not slot items** — tracked as numbers on the character sheet, never occupying a slot regardless of quantity.
- **A slot holds one distinct item, or a reasonable stack of a single consumable type** — a quiver of arrows, several days of rations, a handful of torches.
- **At capacity, picking up something new means dropping or stowing something else first.**
- **Shield/Tower Shield sit in a hand slot**, same category as a weapon.

### Weapons

**Universal formula:** `Damage = weapon die + relevant stat bonus` — applies to PCs and monsters.

| Weapon tier | Die | Avg | Initiative |
|---|---|---|---|
| Light | 1d4 | 2.5 | +3 |
| Medium | 1d6 | 3.5 | +1 |
| Heavy | 1d8 | 4.5 | −1 |
| Massive (monster-scale only) | 1d10 | 5.5 | −3 |

**Named weapons below are flavor and diegetic color only — every weapon at a given tier is mechanically identical (same die, same requirement, same cost). The Diegetic Note column has no mechanical effect; it's how the weapon reads to other people in the world.**

| Tier | Weapon | Tag | Diegetic Note |
|---|---|---|---|
| Light | Dagger | Thrown, Finesse | Easy to hide, easy to explain away — "everyone carries a knife" |
| Light | Handaxe | Thrown | A tool first, a weapon second — nobody blinks at a woodsman carrying one |
| Light | Sickle | Finesse | Reads as farm equipment, not a weapon, right up until it isn't |
| Light | Karrnathi Shortblade | Finesse | Standard sidearm for Karrnath's officers — compact, functional, no ornamentation |
| Light | Brelish Trench Knife | Finesse | Cheap, brutal, close-quarters — a weapon born from years of siege warfare |
| Medium | Club | — | The most ordinary weapon there is — nobody reads much into a club |
| Medium | Spear | Versatile, Thrown (Heavy die two-handed) | The classic look of a soldier or guard, not a criminal |
| Medium | Staff | Two-handed | Doubles as a walking aid or traveler's tool — easy to carry openly anywhere |
| Medium | Brelish Levy Spear | Versatile, Thrown (Heavy die two-handed) | Mass-produced for Breland's wartime conscripts — the single most common weapon of the whole war |
| Medium | Karrnathi Cavalry Saber | Finesse | Standard issue for Karrnath's mounted regiments — recognizable curve, recognizable reputation |
| Medium | Aundairian Rapier | Finesse | Aundair's officer corps favored precision over brute force — this blade reflects that |
| Heavy | Sword | Two-handed | A generic blade, no particular origin — could have come from anywhere |
| Heavy | Axe | Thrown, Two-handed | Reads as a lumberjack's tool until the moment it's thrown |
| Heavy | Mace | Two-handed | Blunt and utilitarian — favored by those who fight without pretense |
| Heavy | Glaive | Two-handed | Impossible to conceal, impossible to mistake for a civilian's tool |
| Heavy | Karrnathi Longsword | Two-handed | Standard issue for Karrnath's line regiments — recognizable to anyone who served against them |
| Heavy | Karrnathi Warhammer | Two-handed | Grim, iron-black, standard issue for Karrnath's line infantry — built to break armor, not impress anyone |
| Heavy | Thrane Vigil Pike | Two-handed | Carried by Silver Flame shield-walls — disciplined formation fighting, not individual glory |
| Heavy | Thrane Templar Mace | Two-handed | Associated with Silver Flame militants — unmistakable in origin |
| Heavy | Cyran Relic Blade | Two-handed | Predates the Mournland — carrying one openly is a quiet, heavy statement in the wrong company |
| Light (ranged) | Sling | Ammo | Cheap, common, and easy to explain — every shepherd owns one |
| Light (ranged) | Darts | Thrown | Looks like a game piece until it's in someone's throat |
| Medium (ranged) | Shortbow | Ammo | The unmistakable silhouette of a hunter, ranger, or soldier |
| Medium (ranged) | Hand Crossbow | Ammo | Small enough to conceal — the weapon of choice for people who don't want to be seen coming |
| Medium (ranged) | Brelish Levy Crossbow | Ammo | Cheap, mass-produced, handed to conscripts who'd never held a weapon before the war |
| Heavy (ranged) | Crossbow | Ammo | Slow to reload, impossible to mistake for anything but a dedicated hunter's or soldier's weapon |
| Heavy (ranged) | Aundairian Siege Crossbow | Ammo | Aundair leaned on battle magic over massed infantry — this is what their few dedicated marksmen carried |

**Heavy weapons are inherently Two-handed. All ranged weapons are Two-handed too, at any tier.** Weapon-and-shield is a melee-exclusive combination (Light/Medium melee only).

**Shield: +1 Guard, occupies a hand slot, −1 Initiative. Tower Shield: +2 Guard, occupies a hand slot, −3 Initiative.**

**Melee vs. ranged is a separate axis from which stat governs the weapon.** A DEX-based melee weapon (a finesse rapier, a dagger) is subject to melee's Two-handed rules and can pair with a Shield. **Finesse applies to light, bladed weapons designed for precision and speed over raw force — not blunt weapons (clubs, maces, hammers) and not polearms (spears, staves, pikes), regardless of tier.** A weapon needs to be individually marked Finesse to use DEX; Light or Medium tier alone doesn't qualify it, and Heavy weapons are never Finesse. Only genuinely ranged weapons (bows, crossbows) are inherently Two-handed.

**Casting stat and weapon stat are always separate.** A Syberist's cast stat is used only for spellcasting; a physical weapon they also carry uses STR or DEX independently.

### Weapon Proficiency

| Tier | Melee requirement | Ranged requirement |
|---|---|---|
| Light | none | none |
| Medium | STR bonus ≥ 0 | DEX bonus ≥ 0 |
| Heavy | STR bonus ≥ +1 | DEX bonus ≥ +1 |
| Massive | monster-scale only, N/A for PCs | monster-scale only, N/A for PCs |

### Weapon Keywords

- **Ammo** — requires ammunition carried in a body slot.
- **Blast** — deals its damage to every creature in a zone at once. Uses the potency-tier "multiple targets" damage line.
- **Thrown** — can be thrown at a target in an adjacent zone even if otherwise melee-only.
- **Two-handed** — takes up both hand slots.
- **Versatile** — has two damage entries; deals the first one-handed, the second two-handed.

**Ranged weapons of every type are capped at the same zone or one adjacent zone.**

### Armor

| Lever | Light | Medium | Heavy |
|---|---|---|---|
| **Guard bonus** | +1 | +2 | +3 |
| **Requirement** | none | CON bonus ≥ 0 | CON bonus ≥ +1 and Wayfarer's +2 Guard bonus |
| **Initiative penalty** | — | −1 | −2 |
| **Slot cost** | 1 body slot | 1 body slot | 2 body slots |
| **Mobility tax** | none | −1 on Agility-type checks | −1 Agility checks, moving to an adjacent zone costs your whole action |
| **Availability** | buyable anywhere | buyable anywhere | requires a House Cannith commission or military contact |
| **Usage/maintenance** | d6 after combat, 1–3 marks a use | same, repair cost scales with purchase price | same, largest shards-sink given Heavy's higher base cost |

**Named armor below is flavor only — every piece at a given tier is mechanically identical.**

| Tier | Armor | Diegetic Note |
|---|---|---|
| Light | Padded Coat | Passes for ordinary travel wear — nobody clocks it as armor on sight |
| Light | Leathers | The default look of "adventurer" in most people's minds |
| Light | Traveler's Wrap | Layered cloth and hidden padding — looks like nothing more than road clothes |
| Medium | Reinforced Brigandine | Clearly armor, clearly worn by someone expecting trouble |
| Medium | Chainshirt | The telltale sound gives away a quiet approach |
| Medium | Scale Coat | Distinctly militia-issue — marks its wearer as affiliated with someone's official force |
| Heavy | Breastplate | Formal enough to read as House or military standing, not just readiness for a fight |
| Heavy | Full Plate | Impossible to hide, impossible to mistake for anything but a warrior expecting a real fight |
| Heavy | Banded Mail | Heavy, loud, and unmistakably built for a real, sustained fight |

### Pricing

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

### Critical Hits

**Critical Hit and Damage Floor:** see Core Resolution. Applies identically to weapon attacks and Attack spells.

### Toolkits & Usage

**Every item has three usage dots. When all three are filled, it's depleted or destroyed.**

- **Weapons/Armor/Ammo** — roll a d6 after combat for each item used; on a 1–3, mark a dot.
- **Torches/Light sources** — mark a dot whenever a relevant exploration roll calls for it.
- **Rations** — mark a dot when taking a long rest without first taking the time to hunt or forage.
- **Toolkits** — mark a dot every time it's actually used for its purpose.
- **Everything else** — GM's call.

**Weapons and armor can be fully repaired for a quarter of their original price.** Depleted toolkits and consumables need replacing outright.

**Selling:** items sell for half their listed price, better with a CHA-based check or real rapport with the buyer.

| Kit | Contents | Cost |
|---|---|---|
| **Rations** | Three days of food and water | 3gp |
| **Torches** | Lights your zone; must be held in a hand slot | 1gp |
| **Glowmoss Pod** | A squeezed plant pod, teal bioluminescent light, unaffected by wind or water; body slot | 5gp |
| **Ward Mask** | Filters hazardous airborne spores, mist, or dust | 25gp |
| **Healing Toolkit** | Bandages, needle and thread, alcohol, a bone-setting splint | 15gp |
| **Dungeoneering Toolkit** | Rope, crowbar, hammer, spikes, lockpicks | 20gp |
| **Scribing Toolkit** | Writing board, ink, pen, parchment, sealing wax | 10gp |
| **Navigation Toolkit** | Compass, regional maps, a small collapsible spyglass | 25gp |
| **Cooking Toolkit** | Salt and spices, cutlery, a cast-iron pot, cooking oil | 8gp |
| **Disguise Toolkit** | Make-up, a wig, a spare set of clothes at a different social tier, minor prosthetics | 15gp |

### Magic Items

**Charged/Consumable items** — priced at the normal spell potency casting cost for the tier they replicate.

**Permanent items** — priced at 10–20× the equivalent tier's average casting cost. Cantrip and Spark permanent items are priced in raw shards, Minor and above in refined shards.

| Tier | Casting avg | Permanent item price | Shard economy | What it looks like |
|---|---|---|---|---|
| Cantrip | 0 | 1–5 shards | Raw (≈5cp each) | Everbright lanterns, minor household charms |
| Spark | ~2 | 20–40 shards | Raw (≈1–2gp total) | A minor but real trinket |
| Minor | ~7 | 70–140 shards | Refined (≈700–1,400gp) | See table below |
| Moderate | ~14 | 140–280 shards | Refined (≈1,400–2,800gp) | A serious combat item |
| Major | ~52.5 | 525–1050 shards | Refined (≈5,250–10,500gp) | Rare, quest-reward tier |
| Mythic | ~350 | 3500–7000 shards | Refined (≈35,000–70,000gp) | Artifact-tier, GM-placed only |

**Cantrip tier:**

| Item | Effect |
|---|---|
| **Everbright Lantern** | Permanent magical light, no fuel needed |
| **Warmhearth Coal** | Never cools, needs no fuel |
| **Cleaning Rune Cloth** | A garment that never needs washing |

**Spark tier:**

| Item | Effect |
|---|---|
| **Sivis Message Chime** | A paired trinket; speak to one, the other repeats it once, anywhere |
| **Silversheen Ward Token** (Thrane) | Once per scene, Advantage on a resistance check against an Effect spell |
| **Orien Waystone Chip** | Once per scene, know the safest route to a destination you can currently see |

**Minor tier:**

| Item | Effect |
|---|---|
| **Riftglass Focus** (Shardbound) | Once per scene, reroll a cast's shard-cost die once |
| **Silver Flame Brand** | Once per scene, Advantage on your next attack against a creature that's harmed an ally this fight |
| **Kalashtar Dreaming Coil** | Once per scene, reroll a failed WIS-based check once |

**Moderate tier:**

| Item | Effect |
|---|---|
| **Cannith Prototype Gauntlet** | Once per scene, your next attack automatically counts as a critical if the target already has an open Wound |
| **Blademarked Warblade** (Valenar) | Once per scene, mark an enemy: you and allies have Advantage against them until the encounter ends |

**Major tier:**

| Item | Effect |
|---|---|
| **Mournland Reliquary Shard** | Once per scene, trigger a specific Major-tier Effect spell, pre-loaded at creation |
| **Dhakaani Warmask** | Once per scene, force up to 3 enemies in your zone to target you this Round |

**Mythic tier (unique, GM-placed only):**

| Item | Effect |
|---|---|
| **The Progenitor's Cog** | Permanently +1 Contraption capacity; once per scene, trigger a stored Contraption without spending it |
| **Shard of the Twelve** | Once per campaign arc (GM's call), manifest any House's Least Mark for one scene, regardless of the wielder's own Background |

---

## Economy

Unskilled day labor: 2 silver pieces/day. Standard arrow: ~5 copper each.

Shards are two separate economic goods:

- **Raw shards** — loose, unrefined dust, bought in any market. Powers Cantrip (free, unconsumed) and Spark tier. 5cp each.
- **Refined shards** — cut and bound, real magecraft-grade material. Powers Minor tier and above, plus all permanent Magic Items. 10gp each.

**Starting wealth: 200gp, spent as chosen** — refined shards at 10gp each for a casting reserve, or ordinary gear, weapons, and starting supplies. A Syberist will likely convert most of it to shards; a Wayfarer might buy almost none. Raw shards for day-to-day Cantrip/Spark use are cheap enough (5cp) to just be bought as needed.

---

## HP: Guard + Wounds

At 0 Guard with Wound slots exhausted, roll a d6 — 1–3 dies, 4+ faints and rolls on the Scar table. **A fainted character isn't safe yet: if their wounds aren't treated within a Turn (10 minutes) by another character, they die anyway.** Treating them requires a check using whichever stat fits the method (INT for a real medical attempt, WIS for a more instinctive one, GM's call) — success stabilizes them for good.

### Scar Table (d10)

**Effect: a target shift on the relevant check type** — +1 for a broad, narrow-scope disability, +2 for something genuinely severe.

**Removable through real effort** — a Major-tier magical working (a Jorasco chirurgeon, a Silver Flame priest) or a significant in-fiction quest resolving the underlying trauma. GM's call which fits.

| d10 | Scar | Shift |
|---|---|---|
| 1 | **Shattered Leg** — Agility/DEX-based movement checks | +1 |
| 2 | **Sickly** — CON-based endurance/resistance checks | +1 |
| 3 | **Chronic Wound** — permanent −1 to max Guard | — |
| 4 | **Spirit-Marked** — WIS-based fear/willpower checks | +2 |
| 5 | **Scarred** — CHA-based first-impression checks | +1 |
| 6 | **Ringing Ears** — Perception/hearing-based checks | +1 |
| 7 | **Trembling Hands** — fine-motor/precision checks | +2 |
| 8 | **Haunted** — resisting fear or despair specifically tied to the event that caused it | +2 |
| 9 | **Weakened Grip** — STR-based grip checks | +1 |
| 10 | **Old Wound Aches** — a check type of the player's choice, tied to weather or exertion | +1 |

### Guard

Your parries/luck/adrenaline buffer. All normal damage hits Guard first.

**Formula:** `Guard = 4 + CON bonus + Wayfarer bonus (+2) + armor`, floor of 1. (CON is the default only when nothing excludes it — see Guard Stat below for the actual automatic calculation.)

Fully restored after a Turn (10 minutes) spent resting. Guard cannot go below 0 during a fight.

### Guard Stat (calculated automatically)

Guard Stat is not chosen once and locked — it's calculated automatically: **your highest-bonus stat, excluding your cast stat (including a Wandslinger casting stat, if taken) and the governing stat of every weapon currently equipped in a hand slot.** `Guard = 4 + [Guard Stat bonus] + Wayfarer bonus (+2) + armor`. CON is never a cast stat or a weapon stat, so it's always eligible.

| Guard Stat (if it lands there) | Concept |
|---|---|
| STR — Brute Force | Physically blocks and overpowers incoming attacks (only possible if STR isn't your weapon or cast stat). |
| DEX — Reflexes | Dodges and weaves; full hits become glancing ones (only possible if DEX isn't your weapon or cast stat). |
| CON — Endurance | Classic tank: physically tough, shrugs off blows. |
| WIS — Awareness | Danger sense; flinches away before the worst lands. |
| INT — Tactics | Reads the fight, positions so blows land where they hurt least. |
| CHA — Presence | Force of personality throws off an attacker's aim and timing. |

**Every weapon is governed by STR or DEX, so at least one of them is always excluded by whatever's equipped** — the other stays genuinely eligible unless it's also your cast stat, or you're dual-wielding across both (a melee weapon and a ranged one at once excludes both).

**Stable by default, not frozen — it only changes as a direct consequence of changing what's equipped.** Nothing recalculates on its own turn to turn; there's no passive drift and no free re-optimizing. But producing or stowing an item is always a full action (see Item Slots), and if that specific change alters which stats are excluded, Guard Stat recalculates immediately using the new exclusions — mid-combat included. This can move it up (freeing a stat by putting a weapon away) or down (conflicting with a newly-equipped weapon) — it's never a choice to game, since every equipment change costs a full Round regardless of which direction it moves. If it moves down, current Guard drops to match the new max immediately, floor 0.

**One remaining constraint:** the Heavy/Medium armor CON requirement stays tied to actual CON specifically, regardless of Guard Stat. A character with poor CON is still locked out of Heavy armor even if CON isn't their Guard Stat.

### Status Effects

Four named, temporary states appear throughout this document. Stated once here, referenced by name everywhere else instead of redefined each time.

| Status | Effect | Clears when |
|---|---|---|
| **Reeling** | Disadvantage on your next roll | That roll happens (win or lose), or an ally clears it early (Rally Cry, Combat Mending Moderate+) |
| **Rattled** | Disadvantage on your next two rolls | Both rolls happen, or an ally clears it early (same sources as Reeling — clears the whole thing, not one roll at a time) |
| **Deprived** | Disadvantage on all checks; can't regain Guard from resting a Turn | Eating, drinking, and a full day's rest |
| **Surprised** | Skip your action entirely for Round 1 of a fight | Automatically, after Round 1 ends |

**No stacking, universally** — a second source of Reeling or Rattled while one is already pending never extends or adds to it; whichever is already active resolves first. This applies to every source of these statuses, not just Wounds.

### Wounds

**Only 1 Wound slot exists at character creation. A second slot unlocks at level 4, a third at level 8.**

**Wounds cost Guard, not stats.** An open Wound reduces max Guard by 2 until healed.

**Immediate cost:** the roll immediately following the hit that opens a Wound is made with Disadvantage ("Reeling"), then clears — plus roll a d6 on the Wound Complication table below.

**Current Guard refills to the new (reduced) max when a Wound opens — floor of 1, never lower.** Example: Guard 5 takes 6 damage — 1 point overflows, triggering a Wound; max Guard drops to 3 (5−2), and current Guard refills to 3, not reset to 0.

Wounds do not heal from resting a Turn, and cannot be closed mid-combat by any means, magical or otherwise — see Healing Magic below.

### Wound Complication Table (d6)

Rolled once, when a Wound opens.

| d6 | Complication |
|---|---|
| 1 | **Staggered Back** — the blow throws you into an adjacent zone |
| 2 | **Grip Torn Loose** — your weapon or dragonshard focus is knocked from your hand-slot; costs an action to retrieve |
| 3 | **Gear Scattered** — a carried item (GM or player's choice, something non-essential) breaks, is lost, or spills its contents |
| 4 | **Reeling Hard** — your Initiative order drops to last for the rest of the fight |
| 5 | **Off-Balance** — your next zone move this fight requires a DEX-equivalent check or fails |
| 6 | **Rattled to the Bone** — Disadvantage on your next two rolls instead of one |

**No stacking** — see Status Effects above; a Wound opening while Reeling or Rattled is already pending doesn't add to it.

### Mook Rule (for disposable enemies)

Weak, disposable enemies (bandits, guards, etc.) get no Wound slot at all — once their Guard hits 0, they're down, no death-check needed. Named/important creatures (PCs, bosses) get the full Guard→Wound→Scar chain.

### Deprivation

If a character is deprived of crucial needs (rest, food, water), they gain Disadvantage on all checks and can no longer regain Guard by resting a Turn. Deprived for three days straight and they fall unconscious, dying in a day if the condition isn't removed. To clear it: eat, drink, and rest for a full day — that rest only restores 1d6 Guard instead of the normal full return to max.

---

## Healing Magic

**Combat Mending** (in combat — costs an action + shards per normal potency tier): restores Guard, up to current max — Minor 1d8+stat, Moderate 2d8+stat, Major 2d8+stat, Mythic 4d8+stat, same dice as damage at each tier.
- **Moderate tier and above also clears Reeling or Rattled from the target**, in addition to the Guard restored — a real capability step, not just a bigger number.
- A Wound's max-Guard reduction stays in place regardless of tier.
- Cast on an ally who's about to make (or would otherwise fail) a 0-Guard check: they auto-stabilize instead of rolling, at any tier.
- Cannot close a Wound under any circumstances, mid-combat.

**Field Dressing** (out of combat — requires a full Exploration Turn of safety):
- Closes one Wound: restores the lost max Guard and clears the Wound slot.
- Requires genuine safety (no active threat) and the healer's full dedicated attention for the Turn. A Jorasco Least Mark, a real spell slot, or a mundane Healing Toolkit + an INT-equivalent check can all accomplish this.
- Resting for a full day also closes all Wounds automatically.

---

## Zones & Range

The battlefield is divided into a handful of zones; creatures move between adjacent zones, and creatures in the same zone can fight with melee weapons. Zones are centered on the characters, not fixed geography — theater-of-mind, not a grid.

**This encounter's zone line:** three zones — Melee, Near, Far — arranged linearly.

### Movement

Move and act are both available the same Round — a character can move to an adjacent zone and still attack, cast, or take any other action once there.

One zone of movement per Round, maximum.

**Weapon reach:**

| Weapon type | Valid target zones |
|---|---|
| Melee | Same zone only |
| Ranged (bow, sling, ranged spell) / Thrown | Same zone + 1 adjacent zone |

### Disengaging

Moving out of a zone while sharing it with a melee (non-ranged) hostile requires a successful DEX check (2d10+DEX vs 12). Fail, and that creature gets a free attack before the mover actually leaves. Ranged hostiles never trigger this.

**Worked example — Rivet retreats from an active melee, 5 attempts:**

Setup: Rivet (Guard 4/10, already carrying one Wound) is fighting two Blade-bandits in the Ditch and decides to fall back to the Road.

| Attempt | Roll | Outcome |
|---|---|---|
| 1 | 14 vs 12 | Success — clean escape, no cost |
| 2 | 4 vs 12 | Fail → free attack rolled 8 vs 12 → missed |
| 3 | 15 vs 12 | Success — clean escape |
| 4 | 10 vs 12 | Fail → free attack rolled 9 vs 12 → missed |
| 5 | 6 vs 12 | Fail → free attack rolled 14 vs 12 → hit, 2 damage to Guard |

Failing the check doesn't trap the character — it only costs a parting shot. The DEX check gates whether the melee hostile gets one free swing on the way out, not whether the retreat itself succeeds.

---

## Initiative

**Roll: 2d10 + DEX bonus + weapon modifier − armor penalty − shield penalty.** Rolled once per combatant at the top of combat, sorted descending; each combatant acts once, in that order, for the whole encounter.

| Weapon tier | Modifier |
|---|---|
| Light | +3 |
| Medium | +1 |
| Heavy | −1 |
| Massive (monster-scale) | −3 |

| Armor / Shield | Penalty |
|---|---|
| Light armor | — |
| Medium armor | −1 |
| Heavy armor | −2 |
| Shield | −1 |
| Tower Shield | −3 |

**Ties:** resolve with higher DEX bonus going first, and a quick reroll between the tied parties only if that's also equal.

**Every other source that touches Initiative, consolidated here rather than scattered:**
- **Reeling Hard** (a Wound Complication result) overrides the roll entirely — Initiative order drops to last for the rest of the fight, not a numeric penalty stacked on top of the formula above.
- **Not on my watch!** (a Basic Grit Maneuver, 1 Grit) lets a Wayfarer reroll their own Initiative roll once, keeping the better result.
- Nothing else in this document currently touches Initiative — no other Talent, Skill, Mark, or spell modifies it. If that changes, it belongs in this list.

---

A Heavy-armored Wayfarer wielding a Heavy weapon and a Tower Shield rolls 2d10 −1 (weapon) −2 (armor) −3 (Tower Shield) = 2d10−6 — reliably near the bottom of the order.

---

## Surprise & Ambushes

Before combat starts, the GM determines if a side is surprised. If so, that side does not act in the first Round of combat.

**Surprise is checked per-character, not per-side.**

- Each character individually rolls 2d10 + WIS (or the GM's chosen relevant stat) vs a target set by the scenario (12 base, shifted per Scenario Target Modifiers — e.g. +3 for a genuinely well-concealed ambush).
- **Cascading Advantage:** the first character to succeed can shout a warning — every character who hasn't rolled yet gets Advantage on their own check that round.
- Any character who fails is individually surprised — they personally skip their Round 1 action, while everyone else resolves normally in initiative order.

---

## Morale

**Base Morale 7** for an average group of mooks (2d6 roll-under-or-equal to pass). **+2 while a named leader/boss is present and alive** — losing the leader removes the bonus immediately.

**Checks fire once each, at these triggers:**
- The group's first casualty.
- The group reaching 50% losses.
- A named leader/boss going down — checked immediately, using Morale without the leader bonus.

**On a failed check:** the remaining group breaks and flees — real movement away from the fight, not an instant vanish. A GM can allow a broken group to surrender or negotiate instead.

---

## Reaction Check

**Roll 2d10 + CHA vs target 12**, shiftable by Scenario Target Modifiers, with Advantage/Disadvantage for situational factors. Read the total against the table below:

| Total | Disposition |
|---|---|
| ≤9 | Hostile |
| 10–11 | Wary |
| 12–14 | Apathetic |
| 15–16 | Friendly |
| ≥17 | Helpful |

---

## Travel & Exploration

### Travel Roll

The GM determines how many days a journey takes, then rolls a d6 — the result is how many days pass before a Travel Event occurs. If that number exceeds the journey's remaining length, the party arrives without incident. If an event does occur, roll on the Travel Event table below, resolve it, then repeat until arrival.

```
═══════════════════════════════════════════════════════════════════
  TRAVEL ROLL
═══════════════════════════════════════════════════════════════════

┌─────────────────────────────┐
│ GM SETS JOURNEY LENGTH         │  In days, on foot by default —
│ (in days, remaining = total)   │  see Travel Times for other transport
└──────────────┬────────────────┘
               ▼
┌─────────────────────────────┐
│ ROLL TIMING DIE                │  d6 normally; d8 with a relevant
│ (days until next event)        │  wilderness Talent, toolkit use,
└──────────────┬────────────────┘  or other justified resource
               ▼
        ┌─────────────────┐
        │ Does the roll      │
        │ EXCEED the         │
        │ remaining length?  │
        └────────┬──────────┘
                  │
       ┌──────────┴──────────┐
       ▼                      ▼
      YES                    NO
       │                      │
       ▼                      ▼
┌───────────────┐    ┌─────────────────────────────┐
│ ARRIVE WITHOUT  │    │ AN EVENT HAPPENS               │
│ INCIDENT        │    │ Remaining length reduces by      │
│ Journey complete│    │ the rolled amount                │
└───────────────┘    └──────────────┬────────────────┘
                                     ▼
                       ┌─────────────────────────────┐
                       │ ROLL A SEPARATE d6              │
                       │ (which event, not when)         │
                       └──────────────┬────────────────┘
                                      │
              ┌───────────┬───────────┼───────────────┐
              ▼           ▼           ▼                ▼
             "1"        "2-3"       "4-5"             "6"
              │           │           │                │
              ▼           ▼           ▼                ▼
          Mishap —   Random       Failed to        Good Fortune —
          add 1 day  Encounter —  Gather Food —     subtract 1 day
          to what's  roll the     mark a ration      from what's
          remaining  region's     or become           remaining
                     encounter    Deprived
                     table
              │           │           │                │
              └───────────┴─────┬─────┴────────────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │ Remaining length > 0?      │
                    └────────────┬────────────────┘
                                 │
                      ┌──────────┴──────────┐
                      ▼                      ▼
                     YES                    NO
                      │                      │
                      ▼                      ▼
              Loop back to            ARRIVE
              ROLL TIMING DIE         (last stretch
              against the new         resolved as
              remaining length        part of the
                                      event above)
```

| d6 | Travel Event |
|---|---|
| 1 | **Mishap** — bad weather, getting lost, difficult terrain, or a breakdown. Add 1 day to the journey. |
| 2–3 | **Random Encounter** — roll on the region's encounter table. |
| 4–5 | **Failed to Gather Food** — each character marks a use on a ration or becomes Deprived. |
| 6 | **Good Fortune** — a shortcut or good weather. Subtract 1 day from the journey. |

A character with a relevant wilderness talent (hunting, tracking, navigation), or who marks a use on a relevant toolkit, lets the GM roll a d8 instead of a d6 for that check. In particularly treacherous or hostile terrain, subtract 1 from the Travel Event roll.

**The d8 upgrade isn't the only lever.** A relevant Skill, Contingency, Talent, or other resource a player can plausibly justify may also improve travel odds or let the party bypass a rolled event entirely — GM's discretion, same judgment call used everywhere else in this system. A Network contact who knows the route, an Agent's Contingency declaring the party already scouted a safer path, or a Ranger-flavored Background's relevant Talent are all reasonable levers, not just the wilderness-talent d8 specifically.

**Travel Times** (all defaults assume travel on foot, gathering food along the way):

| Transport | Adjustment |
|---|---|
| On foot | No change |
| Mount or cart | Half travel time; animals also consume rations on a Travel Event 4–5 |
| Riverboat, glider, or airship | Two-thirds reduction |
| Forced march | One-third reduction; each character marks a ration use daily or becomes Deprived |

### Encounter Tables

**Every "roll on the region's encounter table" reference in this document assumes one exists — build it before the party travels there, not during.** A good regional encounter table is 8 entries (roll a d8), mixing genuine danger with texture that isn't combat at all — a table that's only monsters gets old fast.

**How to build one:**
1. **4–5 entries of real danger** — something that can genuinely hurt the party if handled badly. Use Enemy Design Philosophy to build these on the spot if nothing existing fits.
2. **2–3 entries of texture, not combat** — a sign of danger already passed, a strange landmark, an NPC traveling the same road, weather worth describing. These make the region feel real without adding a fight to every roll.
3. **1 entry that's genuinely good news** — a shortcut, a safe camp, something useful found. Not every roll should be a complication.
4. **Reuse Reaction Check for anything with a mind of its own** — an encounter entry that's a creature or NPC doesn't need its own disposition baked in; roll Reaction Check when the party actually meets them.

**Sharn (urban, dense, House-controlled):**

| d8 | Encounter |
|---|---|
| 1 | A House Deneith enforcer patrol, checking papers — real if minor legal risk if anything's amiss |
| 2 | A pickpocket attempt, Sharn Cutpurse-flavored — a DEX or Perception-type check to notice |
| 3 | A skybridge collapse or malfunction nearby — no direct danger, but a detour and a scene of chaos |
| 4 | A House Sivis message runner with a delivery for someone in the party, or news of note |
| 5 | A minor gang dispute spilling into the street — avoidable, or an opening to intervene |
| 6 | A genuinely helpful contact recognizes someone in the party — a Network-flavored break |
| 7 | Excoriate Heir-adjacent trouble — someone with a grudge against a Dragonmarked House notices party members wearing House colors or signets |
| 8 | A Cannith-built construct malfunctioning in public — property damage risk, a chance to help or profit |

**Eldeen Reaches (wilderness, Gatekeeper-warded, genuinely old):**

| d8 | Encounter |
|---|---|
| 1 | A pack of natural predators, territorial — Rockclaw-equivalent, build with Enemy Design Philosophy |
| 2 | Signs of a Gatekeeper ward nearby — safe if respected, a real problem if disturbed |
| 3 | A shifting weather front rolling in — no combat, but a real complication for the next Travel Roll |
| 4 | A Towering Wood elder-tree landmark, genuinely ancient — pure texture, a good rest site |
| 5 | Aberrant corruption, faint but real — something Daelkyr-touched nearby, not yet hostile |
| 6 | A Wildspoken hermit or hunter, wary but not unfriendly — roll Reaction Check |
| 7 | A natural hazard — unstable ground, a flooded crossing, something environmental rather than a creature |
| 8 | A clean, safe clearing — good news, a real chance to rest without complication |

**The Mournland (post-apocalyptic, actively hostile terrain):**

| d8 | Encounter |
|---|---|
| 1 | A warped, corrupted creature — build as Named with a damage-taken exception, Enemy Design Philosophy |
| 2 | Grey mist rolling in, genuinely disorienting — no direct damage, but real risk of the party splitting up |
| 3 | The wreck of something from the Last War — a landmark, a scavenging opportunity, real texture |
| 4 | A patch of the Mournland behaving normally, briefly — an eerie, welcome moment of calm |
| 5 | A rogue construct, still following an order given before the Mourning fell — dangerous, but not malicious |
| 6 | Another traveler, clearly marked by long exposure — wary, possibly useful, roll Reaction Check |
| 7 | Ambient magical instability — Scenario Target Modifier shift on the next relevant check, GM's call which one |
| 8 | A stable, unaffected pocket — rare good news in a region that offers little |

### Exploration Procedure

```
═══════════════════════════════════════════════════════════════════
  EXPLORATION PROCEDURE — one Turn (10 minutes)
═══════════════════════════════════════════════════════════════════

┌─────────────────────────────┐
│ PLAYER DECLARES AN ACTION      │  A specific declared action
└──────────────┬────────────────┘  always comes first
               ▼
        ┌─────────────────┐
        │ Is it something    │
        │ specific — not one │
        │ of the 4 defaults? │
        └────────┬──────────┘
                  │
       ┌──────────┴──────────┐
       ▼                      ▼
      YES                    NO
       │                      │
       ▼                      ▼
┌───────────────┐    ┌─────────────────────────────┐
│ RESOLVE ON ITS  │    │ PICK ONE OF THE 4 DEFAULTS      │
│ OWN TERMS        │    │ Move · Search · Listen · Rest    │
│ GM's call on any │    └──────────────┬────────────────┘
│ check that       │                   │
│ applies           │      ┌────────────┼────────────┬────────────┐
└───────┬─────────┘      ▼            ▼            ▼            ▼
        │              Move        Search        Listen         Rest
        │            (no check)  (party roll,  (WIS check    (recover
        │                        best INT,     vs Target,     Guard/Grit,
        │                        vs Target,    doesn't use    still rolls
        │                        uses the      up the Turn)   the Event
        │                        whole Turn)                  check)
        │                    │            │            │            │
        └────────────────────┴────────────┴────────────┴────────────┘
                                     ▼
                       ┌─────────────────────────────┐
                       │ ROLL EXPLORATION EVENT (d6)     │  Rolled every Turn,
                       └──────────────┬────────────────┘  regardless of which
                                      │                    action was taken
              ┌───────────┬───────────┼───────────────┐
              ▼           ▼           ▼                ▼
             "1"         "2"         "3"             "4-6"
              │           │           │                │
              ▼           ▼           ▼                ▼
          Encounter — Encounter    Light — mark    Nothing
          roll the   Sign — roll  a usage dot on   happens
          location's the table    the party's
          encounter  for signs;   light source
          table      a future 1-2
                      becomes it
```

A player's own specific, declared action always comes first — "I check under the rug," "I run my hand along the statue's base," "I check if the floor tile is loose." These get resolved on their own terms, GM's call on what check (if any) applies, same judgment call used everywhere else in this system. The four actions below are only the default behaviors for a Turn when nothing more specific is being declared — a catch-all, not a replacement for genuine player description.

Each Turn (10 minutes) while exploring a site, the party takes one of the following, then the GM rolls the Exploration Event check.

- **Move** — travel to an adjacent area or room. No check needed.
- **Search** — a careful, deliberate look for hidden doors, traps, or overlooked treasure in the current area. One roll for the whole party — 2d10 + the highest INT bonus among the searching characters — vs the location's Target (12 by default, shiftable like any other check per Scenario Target Modifiers). Success finds what's actually there to find. Ties up the whole Turn.
- **Listen at a door** — a quick check before committing to a room, doesn't use up the Turn's main action. Roll 2d10+WIS vs the location's Target; success gives a general sense of what's on the other side (occupied, quiet, sounds of activity).
- **Rest** — recover Guard (per HP: Guard + Wounds) or Grit (per Wayfarer). Still rolls the Exploration Event check like any other Turn — resting in a dungeon isn't automatically safe.

**Exploration Event** (rolled once per Turn regardless of which action was taken):

| d6 | Exploration Event |
|---|---|
| 1 | **Encounter** — roll on the location's encounter table. |
| 2 | **Encounter Sign** — roll on the encounter table for what signs the party finds; a 1 or 2 on the next Exploration roll becomes that specific encounter. |
| 3 | **Light** — mark a usage dot on the party's light source. |
| 4–6 | Nothing happens. |

---

## Enemy Design Philosophy

Every check defaults to target 12, shifted by a flat tier modifier.

| Tier | To-hit target modifier | Effective target |
|---|---|---|
| Weak | −3 | 9 |
| Standard | +0 | 12 |
| Strong | +3 | 15 |

To-hit tier and toughness are independent axes. A creature can be easy to hit but very tanky (a lumbering siege-construct: Weak to-hit target of 9, but Guard 20 and 3 Wound slots).

### Encounter Level Scaling

Every monster gets one Base Target, used by default for three separate purposes — being hit, attacking, and resisting Effect spells — shifted individually only when a specific monster's concept calls for an exception.

| | Formula | Cadence |
|---|---|---|
| Mook Guard | base + 1 per milestone reached | same as PC (2,4,6,8) |
| Mook damage | base + 1 per 4 milestones | quarter-rate |
| Base Target | base + 1 per 2 milestones, capped at milestone 3 | half-rate, capped |
| Boss Guard | base + 1 per milestone reached | same as PC |
| Boss damage | base + 1 per 2 milestones | half-rate |
| Boss Wound slots | +1 (to 3) once 3+ milestones reached (~level 6) | milestone-gated |

**Current final numbers** (6 mooks, recalibrated under the corrected Guard-refill-on-Wound rule):

| Level | 0-Death Rate |
|---|---|
| 1 | 76.5% |
| 2 | 78.3% |
| 4 | 78.5% |
| 6 | 82.0% |
| 8 | 79.7% |

### Enemy Generation Procedure

**1. Mook or Named?**
- **Mook** (disposable, dies in a hit or two) — no Wound slot, ever. Guard alone.
- **Named** (a boss, a lieutenant, anyone meant to matter) — full Guard→Wound→Scar chain, same as a PC.

**2. Pick one Base Target.**

| Tier | Base Target |
|---|---|
| Weak | 9 |
| Standard | 12 |
| Strong | 15 |

**3. Pick baseline Guard:**

| Role | Guard |
|---|---|
| Mook | 4–6 |
| Named, mid-tier threat | 8–12 |
| Named, real boss | 12–20+ |

**4. Pick a weapon tier** — Light/Medium/Heavy/Massive. Massive is monster-exclusive.

**5. Pick a flat damage bonus.** Mooks: +0 to +1. Mid-tier named threats: +2 to +3. Real bosses: +4.

**6. If Named, pick Wound slots** (1–3).

**7. Note any exceptions:**
- **Defend exception** — easier or harder to land a hit on than its attack/resist numbers suggest.
- **Attack exception** — hits differently than it defends.
- **Resist exception** — resists Effect spells differently than physical attacks.
- **Damage-taken/immunity exceptions** — a swarm might take half damage from single-target weapons; a ghost might be flatly immune to non-magical weapons.
- **Shock** — a monster-specific trait. A monster with Shock deals minimum chip damage even on a miss with melee attacks (Light weapons: 1, Medium/Heavy: 2), gated by the target's armor tier (Light armor: always vulnerable; Medium: blocks Light-weapon Shock; Heavy: blocks everything but Heavy-weapon Shock). Never applies to ranged or magic.

**8. Apply Encounter Level Scaling** for the target party level.

**Worked example — a level-6 party (3 milestones):**

A **Droaam Ogre-Kin Enforcer** — a named lieutenant. Base Target: Strong (15), with an attack exception at Target 12. Baseline Guard: 14. Weapon: Heavy (1d8), damage bonus +3. Wound slots: 2.

Scaled for 3 milestones: Guard 14+3=17, damage +3+1=+4, Base Target 15+1=16 (attack exception 12+1=13), Wound slots stay at 2. Final: **Guard 17, 2 Wound slots, Target 16 to hit/resist, Target 13 to attack, deals 1d8+4.**

### Monster Gallery (unscaled level 1–3 baseline)

**Mooks (no Wound slot):**
- **Goblin** — Mook — Target 9 — Guard 5 — Light (1d4+0)
- **Zombie/Skeleton (horde)** — Mook — Target 9 — Guard 6 — Light/Medium (1d4–1d6+0) — never checks Morale
- **Mimic** — Mook — Target 9 — Guard 8 — Medium (1d6+1) — Surprise check target shifted to 15 while disguised

**Mid-tier:**
- **Orc** — Mook/light Named — Target 12 — Guard 8 — Medium (1d6+1) — attack exception: Target 10
- **Bugbear** — Mook — Target 12 — Guard 9 — Heavy (1d8+2) — always opens from ambush

**Named threats, Strong baseline:**
- **Ogre** — Named — Target 15 — Guard 14, 2 Wound slots — Massive (1d10+3) — attack exception: Target 12; Shock (Massive counts as Heavy)
- **Troll** — Named — Target 15 — Guard 16, 3 Wound slots — Massive (1d10+3) — regeneration: unlike every other creature, a Troll's Wound closes on its own at the start of its next turn — unless the damage that opened it was fire or acid, which blocks the regeneration and leaves that Wound open normally

**Multi-Action solo predators (no spellcasting):**
- **Owlbear** — Named, Multi-Action +1 — Target 12 — Guard 16, 2 Wound slots — Heavy (1d8+3)
- **Displacer Beast** — Named, Multi-Action +1 — Target 15 — Guard 14, 2 Wound slots — Heavy (1d8) ×2, one per tentacle

**Epic solo bosses (Multi-Action + Legendary Resistance):**
- **Young Dragon** — Named, Multi-Action +2 — Target 15 — Guard 24, 3 Wound slots — Massive bite/claw (1d10+4) — resist exception: Target 18; Blast breath weapon, usable once then unavailable until it recharges — at the start of each Round, roll a d10, and on a result ≤4 it's ready again; 3 free resists/encounter
- **Lich** — Named, Multi-Action +2 — Target 15 — Guard 20, 3 Wound slots — casts Attack/Effect spells (INT) instead of a weapon — resist exception: Target 18; 3 free resists/encounter; phylactery makes death non-permanent
- **Beholder** — Named, Multi-Action +3 — Target 15 — Guard 22, 3 Wound slots — eye rays, various — central eye can suppress one enemy Effect spell per round in range

**Damage-taken/immunity exceptions:**
- **Swarm (rats/insects)** — Mook-adjacent — Target 9 — Guard 8 — Light (1d4) as Blast — takes half damage from any single-target weapon; Shock
- **Ghost/Wraith** — Named — Target 15 — Guard 14, 2 Wound slots — Medium (1d6+2) — immune to non-magical weapons entirely

### Multi-Action (for true solo bosses)

Give a true solo boss bonus actions tied to the same milestone cadence as Encounter Level Scaling:

| Level | Milestones | Bonus Actions | Total Actions/Round |
|---|---|---|---|
| 1–3 | 0 | +1 | 2 |
| 4–5 | 2 | +2 | 3 |
| 6–7 | 3 | +2 | 3 |
| 8 | 4 | +3 | 4 |

Formula: bonus actions = 1 + (milestones ÷ 2), rounded down.

**Mook count is a real, usable GM dial for tuning a Multi-Action boss fight up or down** (level 4, scaled boss held fixed):

| Mooks added | 0-Death Rate |
|---|---|
| 0 | 82.6% |
| 1 | 74.9% |
| 2 | 58.8% |
| 3 | 32.2% |
| 4 | 15.9% |

**Calibration caveat:** every percentage in this document was tuned against a deliberately well-built reference squad. A table with newer players or less-optimized builds should expect real play to run measurably more dangerous than these numbers suggest at face value.

### Legendary Resistance

**A true solo boss auto-succeeds its first 3 failed resistance checks per encounter.**

| Controllers | Boss, 0 free resists | Boss, 3 free resists |
|---|---|---|
| 1 | 21.0% locked | 1.0% locked |
| 2 | 37.5% locked | 9.3% locked |
| 3 | 51.3% locked | 22.4% locked |

**A boss's resist Target is just its Base Target, scaled like everything else** — unless a specific monster has a resist exception (a Lich's undead mind, a Dragon's magic-soaked hide).

**Net rule for a true solo boss:** resist Target scaled the same as its Base Target, plus 3 free auto-successes per encounter. Both apply only to named threats built with Multi-Action.

### Scenario Target Modifiers

**Two levers only:**
- **Target shift** — for baseline difficulty tiers.
- **Advantage/Disadvantage** — for situational swings within an otherwise-normal check.

| Shift | Target | Success rate (vs bonus 0) | Suggested use |
|---|---|---|---|
| +3 | 9 | 72% | Weak tier / a serious scenario advantage |
| +2 | 10 | 64% | A clear but not overwhelming edge |
| +1 | 11 | 55% | A minor, single-factor advantage |
| 0 | 12 | 45% | Standard tier — the default |
| −1 | 13 | 36% | A minor complication |
| −2 | 14 | 28% | A real handicap |
| −3 | 15 | 21% | Strong tier / "this is genuinely hard" |

**Guidance on picking a shift:** reach for ±1 or ±2 when only one or two factors are actually in play. Save ±3 for situations genuinely matching one of the three named tiers, or where multiple stacking factors would have justified a combined total — shift once by the combined total rather than stacking multiple separate shifts.

**A roll should only ever add the character's own stat bonus.** External difficulty lives in the target number or in Adv/Disadv, never as a second flat modifier bolted onto the dice total.

---

## Wayfarer Grit Maneuvers

Grit starts at 2, +1 at even levels. **+1 Grit per Turn (10 minutes) spent resting, if not Deprived, up to your max.** A full Grit pool (6 at most, by level 8) is reachable within an hour of rest — no separate day-long recovery needed, unlike Wounds, which Turns of rest don't touch at all.

**All maneuvers are available from level 1 — gated by Grit cost, not character level.**

**One Maneuver per action, no stacking.** Each Maneuver either is your action for the turn (Guard Stance, Taunt, Rally, Read the Fight) or modifies your one attack this turn (Focus, Cleave, Guarded Strike). Only one attack-modifying Maneuver can ever apply to a single attack.

| Tier | Cost | Maneuvers |
|---|---|---|
| **Basic** | 1 Grit | **Focus** (a hit permanently reduces the target's Guard by 1), **Not on my watch!** (reroll your Initiative roll), **Shake it off** (spent on your turn, bracing for what's coming; the next hit you take before your next turn is reduced by 1d6), **Guardian's Challenge** (CHA check; success forces up to 2 enemies in your zone to target you or fight at Disadvantage, lasting this Round) |
| **Advanced** | 2 Grit | **Command** (an ally makes a genuinely extra attack this Round for +1d6 damage, instead of you acting), **Shield** (a same-zone ally's incoming attacks are made at Disadvantage until your next turn), **Split Fire** (a ranged attack hits two separate targets), **Taunt** (all enemies in your zone must attack you this Round, no check, guaranteed), **Rally** (you and allies in your zone gain +1 damage until end of Round), **Cleave** (a single attack hits up to four same-zone enemies at one-third damage each, and a critical hit permanently reduces that target's Guard by 1d4), **Hold the Line** (STR/CON; an enemy in your zone can't leave it without beating your bonus first, lasting until your next turn), **Read the Fight** (no check; all allies in your zone gain Advantage on their next attack this Round), **Guard Stance** (no attack, no check; Disadvantage on all incoming attacks against you until your next turn), **Second Wind** (CON; once per scene, regain Guard equal to 1d6 + CON bonus), **Rally Cry** (CHA/WIS; clear Reeling from an ally in your zone, or grant them Advantage on their next roll) |

**Note on the AV→Guard retranslation:** Focus, Shield, and Cleave above work against Guard/Disadvantage rather than the flat Armor Value TEA's source uses, since this table's combat model doesn't have that concept.

### Gear-Specific Maneuvers

Layered on top of the universal table above — every Wayfarer has both, gated by whichever gear is actually equipped.

| Gear | Tier | Cost | Maneuver |
|---|---|---|---|
| Unarmed | Basic | 1 Grit | **Redirect** — reposition one zone after a hit, no Disengage check |
| Unarmed | Advanced | 2 Grit | **Iron Palm** — boosts an unarmed strike to Heavy tier (1d8+STR) |
| Light | Basic | 1 Grit | **Fleet Strike** — move to an adjacent zone after attacking, no Disengage check |
| Light | Advanced | 2 Grit | **Second Strike** — on a hit, a bonus attack at Disadvantage |
| Medium | Basic | 1 Grit | **Steady Guard** — forgo your attack; impose Disadvantage on one attack against you this Round |
| Medium | Advanced | 2 Grit | **Guarded Strike** — on a hit, the target's next attack against you must beat a Target 2 higher than normal |
| Heavy | Basic | 1 Grit | **Momentum** — spent per use: if your last attack this fight hit, this attack deals +2 damage |
| Heavy | Advanced | 2 Grit | **Sunder** — a hit permanently reduces the target's Guard by 2 |
| Shield | Basic | 1 Grit | **Shield Bash** — Light-tier damage (1d4+STR) on a hit, plus the target's next attack against you must beat a Target 1 higher than normal |
| Shield | Advanced | 2 Grit | **Shield** — the existing universal-table maneuver |
| Ranged | Basic | 1 Grit | **Steady Aim** — ignore range Disadvantage or a cover penalty for this shot |
| Ranged | Advanced | 2 Grit | **Split Fire** — the existing universal-table maneuver |
| Dual-attack | — | Free | Baseline (roll both dice, take higher) |
| Dual-attack | Basic | 1 Grit | **Feint** — this attack rolls with Advantage |
| Dual-attack | Advanced | 2 Grit | **Blade Dance** — two attacks, first normal, second at −4 |

### Dual-wield / Two-Weapon Fighting

**One attack roll, roll both weapons' damage dice, take the higher.** Main-hand can be Light or Medium, off-hand must be Light, both sharing the same governing stat.

| Tier | Cost | Maneuver |
|---|---|---|
| Basic | 1 Grit | **Feint** — this attack rolls with Advantage |
| Advanced | 2 Grit | **Blade Dance** — two attacks this round, first at normal accuracy, second at −4 |

**Applies identically to unarmed strikes.** Main fist keeps the Medium baseline (Iron Palm, 1d6+STR); off-hand fist must be Light (1d4+STR).

**Why this matters beyond one character:** a Wayfarer's build determines what kind of tank/controller they are — CHA-invested plays like a battlefield-controlling bodyguard, WIS/INT-invested plays like a squad tactician, a pure-STR build plays like a straightforward damage soak.

---

## Advancement

XP awarded via end-of-session questions, each scaled by a die (d4/d6/d8) by scope; highest die result is XP for everyone. **Level up at XP = 5× current level, resetting to 0 after each level-up** — level 2 needs 5 fresh XP from 0, level 3 needs a fresh 10 from 0 again, level 4 a fresh 15, and so on up through level 8 needing a fresh 35. Max level 8. Stat bonus cap: see Vertical growth below.

**Themed question packages** — pick one matching the campaign's actual focus, or mix five questions from different packages:

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

**How leveling works:** after every session, add the highest die result to the party's current-level XP tally. If that tally now meets or exceeds 5× the party's current level, everyone levels up and the tally resets to 0 — the next level's threshold is calculated fresh from the new, higher current level.

**Worked example (Dungeon Delvers package, a level-1 party, starting at 0 XP toward a level-2 threshold of 5):**

- **Session 1:** treasure (moderate, d6, result 4); a trap dodged (minor, d4, result 2). Highest: 4. Tally: 0→4. Stays level 1.
- **Session 2:** survives Death's Door (major, d8, result 3). Tally: 4→7. Clears 5 — levels up to 2, tally resets to 0, next threshold is 5×2=10.
- **Session 3:** goal completed (major, d8, result 6). Tally: 0→6. Stays level 2.
- **Session 4:** a trap solved (minor, d4, result 3). Tally: 6→9. Stays level 2.
- **Session 5:** a decent haul (moderate, d6, result 5). Tally: 9→14. Clears 10 — levels up to 3, tally resets to 0, next threshold is 5×3=15.

**Two growth tracks, at different speeds:**

| Track | Cadence | What grows |
|---|---|---|
| **Vertical** (universal, slow) | Every other level (2, 4, 6, 8) | +1 to one stat, player's choice, **hard capped at +3 — no stat can ever exceed +3, under any circumstance.** A maxed 3d6 roll alone caps at +2; stacking a same-stat Background bonus on top of a maxed roll can already reach +3 at character creation, before any Vertical growth at all. **A stat already at +3 simply isn't a legal target for a further Vertical pick — the player picks a different stat instead, same as any other level-up.** The point is only ever truly wasted in the practically-impossible case where every stat is already at +3; there's no case in ordinary play where a pick goes nowhere. Same levels also grant +1 flat Guard, uncapped. Total by level 8: max +3 on any single stat, up to +4 more spread across others, +4 flat Guard. |
| **Lateral** (archetype-specific, every level) | Every level, no exceptions | New options, not bigger numbers — see table below. |

| Level | Agent | Wayfarer | Syberist |
|---|---|---|---|
| 1 | Choose a Skill | 2 Grit, all Maneuvers available | 1 spell name, Cantrip tier unlocked |
| 2 | Skill | +1 Grit | **Resonance Sense** — at will, sense the presence and rough strength of active magic, unspent shards, or a recently-cast effect nearby, or a Tradition-Specific Option |
| 3 | Skill | **Trophies** | **Name-crafting** |
| 4 | Skill | +1 Grit | New spell name (free), or a Tradition-Specific Option |
| 5 | Skill | +1 Grit | **Focused Inhalation** — once per day, reroll a cast's shard-cost die if unhappy with the result, or a Tradition-Specific Option |
| 6 | Skill | +1 Grit | New spell name (free), or a Tradition-Specific Option |
| 7 | Skill | +1 Grit | **Whispers of the Prophecy** — once per day, a genuine flash of prophetic insight: Advantage on one check, or a free Minor-tier cast at no shard cost, player's choice, or a Tradition-Specific Option |
| 8 | Skill | +1 Grit | New spell name (free), or a Tradition-Specific Option |

### Tradition-Specific Options (Syberist)

Available in place of the universal option at levels 2, 4, 5, 6, 7, or 8.

**Shardbound:**
- **Aberrant Sense** — at will, free. Detect aberrations, planar instability, or Daelkyr-touched corruption in the zone.
- **Fractal Ward** — once per scene, automatic, no action required. When hit, the attacker has Disadvantage on their next attack against you.
- **Shard-Split** — shard cost (as the spell it's attached to). A single-target cast also strikes one other creature in the same zone at half effect, no extra shard cost beyond the base cast. If no second creature is present, the cast instead gets Advantage.
- **Riftglass Barrier** — once per scene, automatic, no action required. Reduce the next hit against you this Round by a flat 3.

**Flamesworn:**
- **Radiant Ward** — Spark/Minor shard cost. Allies in your zone gain +1 Guard until your next turn.
- **Undying Witness** — Major-tier shard cost. Once cast, when an ally in your zone would hit Death's Door before your next turn, they faint instead.
- **Sacred Flame Burst** — 1 shard, flat 1d4, Blast-tier (hits every creature in the zone).
- **Zealous Rebuke** — once per scene, no shard cost. When an ally is hit, mark the attacker: your next hit against that specific enemy deals +1d6.

**Wildspoken:**
- **Beast Shape** — Major-tier shard cost, up to 10 minutes. Transform into a natural predator, borrowing a Mook-tier stat block. While transformed, WIS governs both the beast's attack (1d6+WIS, Medium natural weapon) and Guard, replacing STR/DEX and your normal Guard Stat for the duration.
- **Thorned Ground** — once per scene. For the rest of the encounter, any enemy that leaves your zone automatically takes 1d4 damage, no check, no roll to avoid.
- **Bloodscent** — Spark-tier shard cost. Mark a Wounded enemy: you and allies gain Advantage against that specific target until it's down.
- **Wild Empathy** — at will, free. Calm or briefly command a natural, non-magical beast.

**Trophies (level 3 Wayfarer):** after defeating a creature in combat, take a trophy (1 item slot). Spend Grit when facing a creature you hold a trophy of for +1d6 damage against it, or Advantage on a check involving that creature's abilities. **Mock Trophies** can also be built by scouting a creature's lair or spending a week of dedicated research — destroyed after one use.

**Second Wound slot unlocks at level 4, third at level 8.**

---

## Glossary

One canonical definition per term, alphabetical.

**Aberrant Mark** — grants a Minor-tier cast attempt with zero shards ever possessed, meaning every use is a genuine Overcast, resolved entirely through the existing Overcast Backlash Pool (always 3d6, since 0 shards is always more than half short). No separate mechanic — reuses casting and Overcasting directly.

**Advantage / Disadvantage** — roll 3d10 instead of 2d10, keep the best two (Advantage) or worst two (Disadvantage). See Critical Hit for how this affects crits. Never stacks within a single roll. Strictly per-roll, not per-character.

**Archetype** — the three character chassis: Wayfarer, Agent, Syberist (the latter with four traditions — Shardbound, Flamesworn, Wildspoken, Artificer). Determines resource type, Lateral Advancement track, and Guard bonus.

**Background** — race and culture fused into one character-creation choice. Grants a stat bonus, two Talents, and narrative-only gear.

**Base Target** — the single number an enemy uses for attacking, defending, and resisting Effect spells, before Encounter Level Scaling is applied. Weak 9, Standard 12, Strong 15.

**Cast Stat** — the stat a Syberist uses for spellcasting (INT for Shardbound/Artificer, CHA for Flamesworn, WIS for Wildspoken). Always distinct from Guard Stat and weapon stat.

**Contingency** — what Leverage buys: retroactively declaring you already prepared for a specific moment. Cost scales with the size of the ask (1/2/3+ Leverage).

**Contraption** — an Artificer Syberist's built-ahead device, sealed with a Name-Crafted effect via Quick Rig. Triggered later as a single action by whoever holds it, using their own INT bonus for the roll.

**Critical Hit** — doubles on the to-hit roll (both counted dice match a success). Deals maximum damage, no damage roll. Advantage can still crit if the kept two dice match; Disadvantage never crits, under any circumstance.

**Damage Floor** — any successful hit deals a minimum of 1 damage.

**Day** — a real-world day, no special game definition. Used for Deprivation's multi-day survival tracking, Wounds' passive recovery, and a few explicit time costs (the spell-name Ritual, Artificer permanent-item crafting).

**Death's Door** — triggered at 0 Guard with no Wound slots remaining. Roll d6: 1–3 dies, 4+ faints and rolls on the Scar Table. A fainted character still dies if not treated within a Turn by another character.

**Deprivation** — see Status Effects. Disadvantage on all checks and no Guard recovery from resting a Turn, from failing to gather food/rest during travel.

**Disengage Check** — a DEX check (2d10+DEX vs 12) required to leave a zone containing a live melee hostile. Failure grants them a free attack first.

**Effect Spell** — a spell that isn't an attack (wards, buffs, heals, utility). No caster roll; works automatically on a willing target, resistance check on an unwilling one.

**Encounter / Fight** — used interchangeably with Scene specifically when the context is combat. "Once per encounter" and "once per scene" draw from the same budget if a given ability could be described either way — these aren't two separate pools, just two words for the same bounded unit.

**Grit** — Wayfarer's resource. Starts at 2, +1 at even levels. +1 per Turn of rest (if not Deprived), up to your max.

**Guard** — the damage buffer every character has. = 4 + Guard Stat bonus + archetype bonus + armor + shield, floor 1. Restores fully after a Turn of rest.

**Guard Stat** — calculated automatically: your highest-bonus stat, excluding cast stat and the governing stat of every equipped weapon. Stable by default, but recalculates immediately if a mid-combat equipment change (always a full action) alters the exclusions.

**Initiative** — 2d10 + DEX + weapon modifier − armor penalty, rolled once per fight.

**Lateral (Advancement track)** — the archetype-specific options gained every level.

**Legendary Resistance** — a true solo boss auto-succeeds its first 3 failed resistance checks per encounter.

**Leverage** — Agent's resource. Starts at 2, +1 per level. Regenerates during downtime via a GM-adjudicated check.

**Milestone** — the encounter-scaling checkpoint, tied to party level (roughly every 2 levels).

**Mook** — an enemy with no Wound slot.

**Multi-Action** — extra actions per Round granted to true solo bosses, scaling with Milestones reached.

**Named** — an enemy with the full Guard → Wound → Scar chain, same as a PC.

**Overcast Backlash Pool** — the dice-pool mechanic resolving what happens when a caster attempts a Minor+ tier cast without enough shards.

**Overcasting** — attempting a Minor, Moderate, Major, or Mythic cast without enough shards on hand.

**Quick Rig** — an Artificer Syberist's baseline casting method: Name-Craft a spell during downtime, seal it into a Contraption instead of firing it immediately. Takes 1 Turn per Contraption.

**Rattled** — see Status Effects. Disadvantage on your next two rolls, from a Wound Complication or another source.

**Reeling** — see Status Effects. Disadvantage on your next roll, from a Wound opening or another source.

**Round** — one full cycle through the fixed Initiative order, the unit combat is measured in.

**Scar Table** — the d10 table rolled when a character faints at Death's Door.

**Scenario Target Modifier** — the GM's tool for shifting a Target up or down based on circumstance.

**Scene** — a bounded dramatic sequence: a fight, a chase, a tense negotiation, a leg of a journey. GM calls when one starts and ends. "Once per scene" abilities reset at that boundary, not on a fixed real-world clock. Broader than combat specifically — see Encounter/Fight for the combat-context synonym.

**Session** — one full sitting at the table. The coarsest tracked unit; a single session can contain many scenes. Used for XP questions and any Talent or Mark explicitly limited "per session," a genuinely larger budget than "per scene."

**Shards, Raw (Dust)** — loose, unrefined, 5cp each. Powers Cantrip and Spark tier only.

**Shards, Refined** — cut and processed, 10gp each. Powers Minor tier and above.

**Shock** — a monster-specific trait: minimum chip damage on a miss with melee attacks, gated by the target's armor tier.

**Skill** — an Agent's chosen ability, picked freely at creation and every level-up.

**Status Effects** — the four named temporary states used throughout this document: Reeling, Rattled, Deprived, Surprised. Full table under HP: Guard + Wounds.

**Surprised** — see Status Effects. Skip your action entirely for Round 1 of a fight; clears automatically after.

**Talent** — a Background-granted ability that gives Advantage on a narrow, named category of checks.

**Target** — the number a 2d10+stat roll must meet or beat to succeed. Standard 12.

**Tier (magic)** — Cantrip, Spark, Minor, Moderate, Major, Mythic.

**Turn** — a 10-minute unit of exploration/downtime pacing. Not used for an individual's action in combat.

**Vertical (Advancement track)** — the universal stat/Guard growth every archetype shares, every other level.

**Weapon Stat** — the stat (STR or DEX) governing a weapon's attack and damage.

**Wound** — opens when damage overflows a character's Guard. Reduces max Guard by 2; current Guard refills to the new max.

**Wound Complication** — the d6 side-effect table rolled when a Wound opens.

**Zone** — the abstracted positioning unit: Melee, Near, Far.
