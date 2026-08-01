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

