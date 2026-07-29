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

---

## Magic Baseline: Possession, Not Consumption

Casting means possessing enough shards to pay a tier's cost.

Syberists cast via Name-Crafting — spells are cast by learning the names of spell spirits that inhabit Khyber, Syrania, or the space between planes, generated via random tables (Form/Adjective/Noun combined via a Template) and costed by potency tier.

| Tier | Cost | Avg shards | What it can do |
|---|---|---|---|
| Cantrip | Free — just possess ≥1 shard as a focus, don't spend it | 0 | Momentary, cosmetic, zero-stakes effects only. No damage, no unlocking, no real mechanical advantage. |
| Spark | Flat 1–3 shards (GM sets exact cost by scope) | ~2 | Small, real, single-purpose mechanical effects — mitigate one hit, a brief minor buff, a tiny utility trick. |
| Minor | 2d6 shards | 7 | Could be done without magic, but magic makes it reliable/fast. Attack spells: 1d6 + caster's stat bonus, single-target only. No multi-target option at this tier. |
| Moderate | 2d6×2 shards | 14 | Beyond mundane possibility. 2d6 dmg single / d6 multiple. |
| Major | 3d6×5 shards | 52.5 | Breaks the laws of nature. Attack spells (single-target): automatically opens a Wound on a hit, bypassing Guard entirely, plus 2d6 secondary damage. Multi-target still uses pure damage (2d6 multiple, no auto-Wound). |
| Mythic | 4d6×25 shards | 350 | Alters the world. Attack spells (single-target): automatically opens two Wounds at once on a hit, bypassing Guard entirely, plus 4d6 secondary damage. Multi-target still uses pure damage (4d6 multiple, no auto-Wound). |

Cantrip produces color only. Any mechanical outcome starts at Spark tier and costs shards.

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

