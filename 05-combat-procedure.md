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

