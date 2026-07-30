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
- **Young Dragon** — Named, Multi-Action +2 — Target 15 — Guard 24, 3 Wound slots — Massive bite/claw (1d10+4) — resist exception: Target 18; Blast breath weapon on Recharge 4; 3 free resists/encounter
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

