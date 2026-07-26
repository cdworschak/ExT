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

