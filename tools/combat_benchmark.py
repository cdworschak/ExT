"""
EBERRON x THE ELECTRUM ARCHIVE -- Combat Monte Carlo Benchmark
================================================================
Reusable baseline for testing new rules/abilities against a realistic
party, not a fresh ad-hoc script each time. Built after several rounds
of test-quality problems this session (missing Initiative, no defensive
AI, guard_max bugs, mismatched party sizes vs. encounters) -- this file
is the corrected, validated version to extend, not replace.

WHAT THIS MODELS (and what it deliberately doesn't):
- Real Initiative: everyone (PCs, mooks, boss) rolls once, interleaved
  turn order for the whole fight. This matters -- a single high mook
  roll can act before any PC gets a turn, which is a real source of
  danger the old "PCs then enemies" structure completely hid.
- Per-character Surprise, individually rolled.
- A priority-ordered decision tree per PC: (1) emergency defense if an
  ally is in real danger, (2) opportunistic signature plays (Exploit
  the Opening, Take Aim, Radiant Ward early), (3) fallback to a
  standard attack/cast. This is NOT a true exhaustive search of every
  possible action -- it's a reasonable heuristic approximating how an
  attentive player actually decides each turn.
- The corrected Wound-refill rule (refills to new REDUCED max, not to 0).
- Real shard costs rolled each cast (2d6 Minor), not flat averages --
  casters can and do run dry mid-fight.
- KNOWN GAPS: no positioning/zone modeling (everyone is always in
  range), no morale checks, no explicit enemy AI beyond "attack whoever
  has the least Guard, weighted", healer logic is a simple threshold
  not genuine triage across multiple wounded allies at once.

USAGE: import this module, call build_party() with a different roster,
or run_fight() with different enemy counts/stats, then Monte Carlo over
run_fight() the same way every test in this session has.
"""
import random

def d(n): return random.randint(1, n)

def roll_check(bonus, target, disadv=False, adv=False):
    """Core 2d10+stat vs target resolution, with Advantage/Disadvantage as 3d10 keep-2."""
    if disadv:
        dice = sorted([d(10) for _ in range(3)])
        s = dice[0] + dice[1]
        hit = (s + bonus) >= target
        crit = False  # Disadvantage rolls never crit, matching established rule
    elif adv:
        dice = sorted([d(10) for _ in range(3)])
        s = dice[1] + dice[2]
        hit = (s + bonus) >= target
        crit = hit and (dice[1] == dice[2])
    else:
        dice = [d(10), d(10)]
        s = sum(dice)
        hit = (s + bonus) >= target
        crit = hit and (dice[0] == dice[1])
    return hit, crit

STD = 12  # Standard-tier Target
WEAK = 9  # Weak-tier Target (used for mook-vs-PC attack rolls by convention in these tests)


def build_party():
    """Default roster: the Highwater Road squad, rebuilt with rules-current Guard Stats
    (Aeshaan and Rowan forced off their cast stats per the doc's own retroactive note),
    and Nix using the current Agent Combat Techniques instead of the retired Backstab."""
    return [
        {"name": "Rivet", "guard": 11, "guard_max": 11, "wounds": 0, "wmax": 2, "grit": 3,
         "down": False, "str": 2, "die": 8, "kills": 0, "init_mod": 1, "role": "pc"},
        {"name": "Nix", "guard": 6, "guard_max": 6, "wounds": 0, "wmax": 2,
         "down": False, "dex": 2, "die": 4, "kills": 0, "init_mod": 3, "role": "pc",
         "took_aim_on": None, "wound_marks_used": set(), "took_aim_used_on_boss": False},
        {"name": "Aeshaan", "guard": 3, "guard_max": 3, "wounds": 0, "wmax": 2, "shards": 30,
         "down": False, "int": 3, "die": 6, "kills": 0, "init_mod": 0, "role": "pc",
         "riftglass_used_cycle": False, "riftglass_pending": False},
        {"name": "Rowan", "guard": 7, "guard_max": 7, "wounds": 0, "wmax": 2, "shards": 30,
         "down": False, "wis": 2, "die": 6, "kills": 0, "init_mod": 1, "role": "pc"},
        {"name": "Kessia", "guard": 7, "guard_max": 7, "wounds": 0, "wmax": 2, "shards": 30,
         "down": False, "cha": 2, "die": 6, "kills": 0, "init_mod": 1, "role": "pc",
         "radiant_ward_active": 0},
    ]


def build_mooks(n, guard=5):
    return [{"name": f"Mook{i}", "guard": guard, "guard_max": guard, "down": False,
             "wmax": 0, "id": i, "init_mod": 1, "role": "mook"} for i in range(n)]


def build_boss(name="Kolt", guard=12, wmax=2, atk_bonus=3, die=8, attacks_per_round=1):
    """attacks_per_round models Multi-Action bosses (see Enemies & Advancement) --
    a large solo monster can be given attacks_per_round=2 or 3 to represent a
    genuine multi-attack creature (claw+claw+bite, etc.) rather than one hit/turn."""
    return {"name": name, "guard": guard, "guard_max": guard, "wounds": 0, "wmax": wmax,
            "down": False, "init_mod": 1, "role": "boss", "atk_bonus": atk_bonus, "die": die,
            "attacks_per_round": attacks_per_round}


def apply_wound(pc):
    """Wound-opens-or-Death's-Door resolution. Refills to the NEW reduced max, per the
    corrected rule -- this was a real gap in the doc until it was pinned down."""
    if pc["wounds"] < pc["wmax"]:
        pc["wounds"] += 1
        pc["guard_max"] = max(1, pc["guard_max"] - 2)
        pc["guard"] = pc["guard_max"]
        if "riftglass_used_cycle" in pc:
            pc["riftglass_used_cycle"] = False  # a new Wound cycle begins
        return "WOUND OPENS"
    else:
        if d(6) <= 3:
            pc["down"] = True
            return "DIES"
        return "faints"


def apply_dmg(pc, dmg):
    """Apply damage to a PC, respecting a pending Riftglass Barrier reduction if present."""
    if pc.get("riftglass_pending"):
        dmg = max(0, dmg - 3)  # flat reduction, roughly a Light weapon's average
        pc["riftglass_pending"] = False
    rem = dmg
    if pc["guard"] > 0:
        a = min(pc["guard"], rem)
        pc["guard"] -= a
        rem -= a
    if rem > 0:
        return apply_wound(pc)
    return None


def apply_dmg_to_enemy(enemy, dmg):
    """Same Guard/Wound resolution, enemy side. Enemies with wmax=0 (mooks) drop
    straight to down on overflow, matching the Mook Rule."""
    rem = dmg
    if enemy["guard"] > 0:
        a = min(enemy["guard"], rem)
        enemy["guard"] -= a
        rem -= a
    if rem > 0 and enemy.get("wmax", 0) > 0:
        if enemy.get("wounds", 0) < enemy["wmax"]:
            enemy["wounds"] = enemy.get("wounds", 0) + 1
            enemy["guard_max"] = max(1, enemy["guard_max"] - 2)
            enemy["guard"] = enemy["guard_max"]
        else:
            enemy["down"] = True
    elif rem > 0:
        enemy["down"] = True


def in_real_danger(pc):
    """Threshold for triggering defensive AI: already Wounded AND low current Guard."""
    return pc["wounds"] >= 1 and pc["guard"] <= 4 and not pc["down"]


def apply_vertical_growth(party, level):
    """+1 Guard per Vertical milestone (levels 2,4,6,8), plus Wound slot increases
    at 4 and 8, matching Advancement exactly. Stat bonus increases aren't modeled
    here since they don't change hit-chance math this benchmark tracks separately
    per-PC already -- only the Guard/Wound-slot side matters for survivability."""
    vertical_ups = level // 2
    for pc in party:
        pc["guard"] += vertical_ups
        pc["guard_max"] += vertical_ups
        if level >= 4:
            pc["wmax"] = 2
        if level >= 8:
            pc["wmax"] = 3
        if "shards" in pc:
            pc["shards"] += 5 * vertical_ups
        if "grit" in pc:
            pc["grit"] += vertical_ups
    return party


def scale_enemies_for_level(level, base_mook_guard=5, base_boss_guard=12, base_boss_atk=3):
    """Matches Encounter Level Scaling exactly: milestone = level // 2.
    Mook Guard +1/milestone, mook damage +1 per 4 milestones, Base Target +1 per
    2 milestones (capped at milestone 3), boss Guard +1/milestone, boss damage
    +1 per 2 milestones, boss Wound slots +1 (to 3) once milestone 3+ reached."""
    ms = level // 2
    mook_guard = base_mook_guard + ms
    mook_atk_bonus = 1 if ms >= 4 else 0
    boss_guard = base_boss_guard + ms
    boss_atk = base_boss_atk + (ms // 2)
    boss_wmax = 3 if ms >= 3 else 2
    return mook_guard, mook_atk_bonus, boss_guard, boss_atk, boss_wmax


def run_fight(seed, n_mooks=6, mook_guard=5, boss=None, level=1, verbose=False):
    """Run one full fight to completion. Returns the final party state list.
    Pass verbose=True for a full round-by-round narration (useful for spot-checking
    a specific seed rather than trusting aggregate Monte Carlo numbers alone).

    level (default 1): applies Vertical growth to the party and Encounter Level
    Scaling to enemies together, matching how the doc's own zero-death bands were
    generated. Passing a custom boss/mook_guard overrides the level-scaled values
    for that side specifically -- level=1 with defaults reproduces the original
    unscaled benchmark exactly.

    IMPORTANT: boss is defensively copied each call. Passing the same pre-built
    boss dict into thousands of Monte Carlo trials without this would silently
    reuse mutated state (an already-defeated boss) across trials after the first
    -- this bit the very first attempt to extend this file for multi-attack
    monsters, producing an impossible 100% zero-death + 0.00 kills result."""
    random.seed(seed)
    party = build_party()
    if level > 1:
        party = apply_vertical_growth(party, level)

    scaled_mook_guard, mook_atk_bonus, scaled_boss_guard, scaled_boss_atk, scaled_boss_wmax = \
        scale_enemies_for_level(level, base_mook_guard=mook_guard)
    if mook_guard == 5 and level > 1:
        mook_guard = scaled_mook_guard
    mooks = build_mooks(n_mooks, guard=mook_guard)
    if boss is None:
        if level > 1:
            boss = build_boss(guard=scaled_boss_guard, wmax=scaled_boss_wmax, atk_bonus=scaled_boss_atk)
        else:
            boss = build_boss()
    else:
        boss = dict(boss)  # defensive copy -- never mutate the caller's original

    all_c = party + mooks + [boss]
    for c in all_c:
        c["initiative"] = d(10) + d(10) + c["init_mod"]
    turn_order = sorted(all_c, key=lambda c: -c["initiative"])

    for pc in party:
        hit, _ = roll_check(0, STD)
        pc["surprised"] = not hit
    surprised_names = {pc["name"] for pc in party if pc["surprised"]}

    for rnd in range(1, 16):
        for pc in party:
            if pc.get("radiant_ward_active", 0) > 0:
                pc["radiant_ward_active"] -= 1

        for c in turn_order:
            if c.get("down"):
                continue
            if rnd == 1 and c["role"] == "pc" and c["name"] in surprised_names:
                if verbose:
                    print(f"  {c['name']}: surprised, no action")
                continue

            if c["role"] in ("mook", "boss"):
                num_attacks = c.get("attacks_per_round", 1)
                for atk_num in range(num_attacks):
                    living = [p for p in party if not p["down"]]
                    if not living:
                        break
                    weights = [1.0 / (p["guard"] + 1) for p in living]
                    tgt = random.choices(living, weights=weights, k=1)[0]
                    atk_bonus = c.get("atk_bonus", 0) if c["role"] == "boss" else mook_atk_bonus
                    disadv = tgt.get("shielded_by") is not None
                    hit, crit = roll_check(atk_bonus, STD, disadv=disadv)
                    if hit:
                        ward = 1 if tgt.get("radiant_ward_active", 0) > 0 else 0
                        die = c.get("die", 6)
                        dmg = die if crit else d(die) + atk_bonus
                        dmg = max(0, dmg - ward)
                        result = apply_dmg(tgt, dmg)
                        if verbose:
                            atk_label = f" (attack {atk_num+1}/{num_attacks})" if num_attacks > 1 else ""
                            print(f"  {c['name']}{atk_label} attacks {tgt['name']}: HIT for {dmg} -> Guard {tgt['guard']}" + (f" [{result}]" if result else ""))
                    elif verbose and disadv:
                        print(f"  {c['name']} attacks {tgt['name']}: MISS (Disadvantage from Shield)")
                    if tgt.get("down"):
                        tgt.setdefault("shielded_by", None)
                continue

            # PC turn
            pc = c
            allies_in_danger = [p for p in party if p is not pc and in_real_danger(p)]
            live_mooks = [m for m in mooks if not m["down"]]
            target_pool = live_mooks if live_mooks else ([boss] if not boss["down"] else [])
            tgt = min(target_pool, key=lambda m: m["guard"]) if target_pool else None

            # Priority 1: emergency defense
            if pc["name"] == "Kessia" and allies_in_danger:
                ally = min(allies_in_danger, key=lambda a: a["guard"])
                cost = d(6) + d(6)
                if pc["shards"] >= cost:
                    pc["shards"] -= cost
                    ally["guard"] = ally["guard_max"]
                    if verbose:
                        print(f"  Kessia: Combat Mending on {ally['name']} -> Guard {ally['guard_max']}")
                    continue
            if pc["name"] == "Rivet" and allies_in_danger and pc["grit"] >= 2:
                ally = min(allies_in_danger, key=lambda a: a["guard"])
                pc["grit"] -= 2
                ally["shielded_by"] = "Rivet"
                if verbose:
                    print(f"  Rivet: Shield on {ally['name']}")
                continue
            if pc["name"] == "Aeshaan" and pc["guard"] <= pc["guard_max"] * 0.4 and not pc["riftglass_used_cycle"]:
                pc["riftglass_used_cycle"] = True
                pc["riftglass_pending"] = True
                if verbose:
                    print("  Aeshaan: readies Riftglass Barrier")
                continue

            if not tgt:
                continue
            tgt_name = tgt["name"]

            # Priority 2: opportunistic signature plays + standard actions
            if pc["name"] == "Kessia" and pc["shards"] >= 7 and live_mooks and pc.get("radiant_ward_active", 0) == 0 and rnd <= 2:
                cost = d(6) + d(6)
                if pc["shards"] >= cost:
                    pc["shards"] -= cost
                    for ally in party:
                        if ally["guard"] > 0:
                            ally["radiant_ward_active"] = 2
                    if verbose:
                        print("  Kessia: Radiant Ward on the party")
                    continue

            if pc["name"] == "Rivet":
                use_focus = pc["grit"] > 0
                hit, crit = roll_check(pc["str"], STD if tgt is boss else WEAK)
                if hit:
                    dmg = pc["die"] if crit else d(pc["die"]) + pc["str"]
                    if use_focus:
                        dmg += 1
                        pc["grit"] -= 1
                    apply_dmg_to_enemy(tgt, dmg)
                    if verbose:
                        print(f"  Rivet attacks {tgt_name}: HIT for {dmg} -> Guard {tgt['guard']}" + (" [DOWN]" if tgt.get("down") else ""))
                    if tgt.get("down"):
                        pc["kills"] += 1
                elif verbose:
                    print(f"  Rivet attacks {tgt_name}: MISS")

            elif pc["name"] == "Nix":
                wound_target = tgt if tgt.get("wounds", 0) > 0 and id(tgt) not in pc["wound_marks_used"] else None
                if wound_target:
                    pc["wound_marks_used"].add(id(wound_target))
                    hit, crit = roll_check(pc["dex"], STD if tgt is boss else WEAK)
                    if hit:
                        dmg = pc["die"] + pc["dex"]
                        apply_dmg_to_enemy(tgt, dmg)
                        if verbose:
                            print(f"  Nix (Exploit the Opening) vs {tgt_name}: auto-crit for {dmg} -> Guard {tgt['guard']}" + (" [DOWN]" if tgt.get("down") else ""))
                        if tgt.get("down"):
                            pc["kills"] += 1
                    elif verbose:
                        print(f"  Nix (Exploit the Opening) vs {tgt_name}: MISS")
                elif pc.get("took_aim_on") == id(tgt):
                    hit, crit = roll_check(pc["dex"], STD if tgt is boss else WEAK, adv=True)
                    if hit:
                        base_dmg = pc["die"] if crit else d(pc["die"]) + pc["dex"]
                        bonus_die = d(pc["die"]) + pc["dex"]
                        apply_dmg_to_enemy(tgt, base_dmg + bonus_die)
                        tgt["guard_max"] = max(1, tgt["guard_max"] - bonus_die)
                        if verbose:
                            print(f"  Nix (Take Aim strike) vs {tgt_name}: {base_dmg+bonus_die} dmg, permanent -{bonus_die} Guard")
                        if tgt.get("down"):
                            pc["kills"] += 1
                    pc["took_aim_on"] = None
                elif tgt is boss and rnd <= 6 and not pc.get("took_aim_used_on_boss"):
                    pc["took_aim_on"] = id(tgt)
                    pc["took_aim_used_on_boss"] = True
                    if verbose:
                        print(f"  Nix: Take Aim on {tgt_name}")
                else:
                    hit, crit = roll_check(pc["dex"], STD if tgt is boss else WEAK, disadv=True)
                    if hit:
                        dmg = (pc["die"] if crit else d(pc["die"]) + pc["dex"]) + 2
                        apply_dmg_to_enemy(tgt, dmg)
                        if verbose:
                            print(f"  Nix (Precision Strike) vs {tgt_name}: HIT for {dmg} -> Guard {tgt['guard']}" + (" [DOWN]" if tgt.get("down") else ""))
                        if tgt.get("down"):
                            pc["kills"] += 1
                    elif verbose:
                        print(f"  Nix (Precision Strike) vs {tgt_name}: MISS")

            else:
                stat_map = {"Aeshaan": "int", "Rowan": "wis", "Kessia": "cha"}
                stat = pc[stat_map[pc["name"]]]
                cost = d(6) + d(6)
                if pc["shards"] >= cost:
                    pc["shards"] -= cost
                    hit, crit = roll_check(stat, STD if tgt is boss else WEAK)
                    if hit:
                        dmg = pc["die"] if crit else d(pc["die"]) + stat
                        apply_dmg_to_enemy(tgt, dmg)
                        if verbose:
                            print(f"  {pc['name']} casts at {tgt_name}: HIT for {dmg} -> Guard {tgt['guard']}" + (" [DOWN]" if tgt.get("down") else ""))
                        if tgt.get("down"):
                            pc["kills"] += 1
                    elif verbose:
                        print(f"  {pc['name']} casts at {tgt_name}: MISS")
                elif verbose:
                    print(f"  {pc['name']}: out of shards")

        if all(m["down"] for m in mooks) and boss["down"]:
            break
        if all(p["down"] for p in party):
            break

    return party


def monte_carlo(n_trials=3000, **fight_kwargs):
    """Standard aggregate run. Returns (zero_death_rate, downs_dict, kills_dict)."""
    zero_death = 0
    downs = {p["name"]: 0 for p in build_party()}
    kills_total = {p["name"]: 0 for p in build_party()}
    for t in range(n_trials):
        party = run_fight(t, **fight_kwargs)
        if all(not p["down"] for p in party):
            zero_death += 1
        for p in party:
            if p["down"]:
                downs[p["name"]] += 1
            kills_total[p["name"]] += p.get("kills", 0)
    return zero_death / n_trials * 100, {k: v / n_trials * 100 for k, v in downs.items()}, {k: v / n_trials for k, v in kills_total.items()}


if __name__ == "__main__":
    rate, downs, kills = monte_carlo()
    print(f"Zero-death rate: {rate:.1f}%")
    for name in downs:
        print(f"  {name}: {downs[name]:.1f}% down, {kills[name]:.2f} avg kills")
