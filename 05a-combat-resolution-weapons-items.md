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

