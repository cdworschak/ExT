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

**Formula:** `Guard = 4 + CON bonus + Wayfarer bonus (+2) + armor`, floor of 1. (CON is the default — see Guard Stat below for choosing a different stat.)

Fully restored after a Turn (10 minutes) spent resting. Guard cannot go below 0 during a fight.

### Guard Stat (chosen at character creation)

At creation, pick any one of the six stats to plug into the Guard formula in place of CON: `Guard = 4 + [chosen stat bonus] + Wayfarer bonus (+2) + armor`.

| Guard Stat | Concept |
|---|---|
| CON — Endurance | Classic tank: physically tough, shrugs off blows. |
| DEX — Reflexes | Dodges and weaves; full hits become glancing ones. |
| STR — Brute Force | Physically blocks and overpowers incoming attacks. |
| INT — Tactics | Reads the fight, positions so blows land where they hurt least. |
| WIS — Awareness | Danger sense; flinches away before the worst lands. |
| CHA — Presence | Force of personality throws off an attacker's aim and timing. |

**Guard Stat must differ from your weapon stat, cast stat, and Wandslinger stat if applicable — all locked together at character creation.** This is a permanent choice; a character who later swaps weapons never retroactively breaks anything.

**One remaining constraint:** the Heavy/Medium armor CON requirement stays tied to actual CON specifically, regardless of Guard Stat choice. A DEX-Guard character with poor CON is still locked out of Heavy armor.

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

**Roll: 2d10 + DEX bonus + weapon modifier − armor penalty.** Rolled once per combatant at the top of combat, sorted descending; each combatant acts once, in that order, for the whole encounter.

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

**Ties:** resolve with higher DEX bonus going first, and a quick reroll between the tied parties only if that's also equal.

---

A Heavy-armored Wayfarer wielding a Heavy weapon and a Tower Shield rolls 2d10 −1 (weapon) −2 (armor) −3 (Tower Shield) = 2d10−6 — reliably near the bottom of the order.

---

