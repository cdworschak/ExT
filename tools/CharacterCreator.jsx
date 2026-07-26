import React, { useState } from "react";

const STATS = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

const BACKGROUNDS = [
  { name: "Valenar Blademarked", stats: ["DEX", "STR"], talents: [{n:"Ancestral Duel",d:"call on a war-spirit for +1 to hit, 1/session"},{n:"Horse-Kin",d:"Advantage on attack rolls while mounted (narrative access, no stat block)"}], gear: "clan sigil, a woven cord", ancestral: "Elvish" },
  { name: "Aereni Deathward", stats: ["WIS"], talents: [{n:"Speak with the Undying",d:"Advantage communicating with ancestor spirits or a real connection to an Undying Court elder"},{n:"Patience of Centuries",d:"Advantage resisting fear/despair facing death, undeath, or time"}], gear: "ancestral mask, funerary incense", ancestral: "Elvish" },
  { name: "Aereni Tomb-Keeper", stats: ["INT"], talents: [{n:"Keeper of Names",d:"Advantage recalling/researching historical lore, Undying Court records"},{n:"Ward-Sworn",d:"Advantage detecting/resisting tampering with a sacred site"}], gear: "sealed scroll case, wax seal-kit, ancestor idol", ancestral: "Elvish" },
  { name: "Aereni Exile", stats: ["WIS"], talents: [{n:"Cast Out",d:"Advantage resisting despair when isolated/rejected"},{n:"Marked for Return",d:"the Undying Court considers your exile unfinished business"}], gear: "forged travel papers, one relic", ancestral: "Elvish" },
  { name: "Valenar Warband Scout", stats: ["DEX"], talents: [{n:"Outrider",d:"Advantage tracking/navigating open terrain"},{n:"Read the Land",d:"Advantage spotting ambushes"}], gear: "riding gear, warband token", ancestral: "Elvish" },
  { name: "Sharn-Raised Elf", stats: ["CHA"], talents: [{n:"Codeswitcher",d:"pass as native in any Sharn district"},{n:"Skywalk",d:"no penalty on skybridges/heights"}], gear: "forged residency papers, grapple line", ancestral: "Elvish" },
  { name: "Sharn Cutpurse", stats: ["DEX"], talents: [{n:"Quick Fingers",d:"Advantage on fast, precise hand-work"},{n:"Knows a Guy",d:"one fence/fixer contact"}], gear: "lockpicks, bolt-hole key", ancestral: null },
  { name: "Karrnathi Line Soldier", stats: ["CON"], talents: [{n:"Drilled",d:"Advantage forming up/holding a line"},{n:"Grim Discipline",d:"resist fear from undead"}], gear: "dog tags, unit patch", ancestral: null },
  { name: "Brelish House Factor", stats: ["CHA"], talents: [{n:"Contract Sense",d:"spot a bad deal"},{n:"Letter of Credit",d:"real line of credit with one House"}], gear: "fine clothes, ledger", ancestral: null },
  { name: "Jorasco-Marked Healer", stats: ["WIS"], talents: [{n:"Least Mark of Healing",d:"stabilize/mend a minor injury, 1-2/session, free"},{n:"Bedside Manner",d:"Advantage on medicine/first-aid checks"}], gear: "warded rod, satchel of remedies", ancestral: null },
  { name: "Aundairian Magewright", stats: ["INT"], talents: [{n:"Trained Hand",d:"Advantage operating/diagnosing minor magical infrastructure"},{n:"Arcanix Credentials",d:"real academic reference"}], gear: "scribing toolkit, letter of standing", ancestral: null },
  { name: "Cyran Survivor", stats: ["CON"], talents: [{n:"Carried the Mourning",d:"Advantage resisting fear/despair facing mass loss/catastrophe"},{n:"Nothing Left to Lose",d:"once/session, push a check past its limit at real cost"}], gear: "keepsake, forged New Cyre papers", ancestral: null },
  { name: "Thrane Templar", stats: ["WIS"], talents: [{n:"Flame-Sworn",d:"Advantage resisting/detecting corruption, undeath, fiendish influence"},{n:"Church Authority",d:"real standing within Church hierarchy"}], gear: "Silver Flame symbol, writ of standing", ancestral: null },
  { name: "Lhazaar Waverunner", stats: ["DEX"], talents: [{n:"Sea Legs",d:"Advantage on a moving vessel or navigating by stars"},{n:"Letter of Marque",d:"privateer's commission and fleet contact"}], gear: "boarding hook, commission", ancestral: null },
  { name: "Riedran Outsider", stats: ["WIS"], talents: [{n:"Trained Discipline",d:"Advantage resisting mind-affecting effects"},{n:"Foreign Eyes",d:"Advantage spotting things out of place in Khorvaire"}], gear: "forged local papers, hidden token of home", ancestral: null },
  { name: "Khoravar Go-Between", stats: ["CHA"], talents: [{n:"Bridge-Born",d:"fluent in Khoravar Cant/Common/Elvish; Advantage building trust between distrustful groups"},{n:"Steady Ground",d:"Advantage resisting unconsciousness/dazing"}], gear: "forged travel papers, keepsake", ancestral: "Khoravar Cant" },
  { name: "Lyrandar Windrider", stats: ["DEX"], talents: [{n:"Storm Sense",d:"Advantage reading weather, navigating rough seas"},{n:"House of the Sea and Sky",d:"standing credit/berth on Lyrandar vessels"}], gear: "House signet, navigator's tools, logbook", ancestral: "Khoravar Cant" },
  { name: "Medani Warder", stats: ["WIS"], talents: [{n:"Ward-Sense",d:"Advantage noticing an ambush/hidden threat/lie"},{n:"Sworn to a Charge",d:"once/session, act out of turn to intervene for a protected person"}], gear: "House signet, warding charm, client contract", ancestral: "Khoravar Cant" },
  { name: "Mror Shard-Miner", stats: ["CON"], talents: [{n:"Shard-Sense",d:"detect dragonshard deposits"},{n:"Tunnel-Steady",d:"no penalty fighting underground"}], gear: "pick, dark-lantern", ancestral: "Dwarvish" },
  { name: "Kundarak Vault-Warden", stats: ["WIS"], talents: [{n:"Ward-Reader",d:"spot magical locks/traps"},{n:"House Reference",d:"House Kundarak reference letter"}], gear: "lockbreaker tools", ancestral: "Dwarvish" },
  { name: "Mror Clan Duelist", stats: ["STR"], talents: [{n:"Honor-Bound",d:"Advantage in formal duels"},{n:"Blood Feud",d:"bonus vs. a named rival"}], gear: "clan sigil, dueling scar", ancestral: "Dwarvish" },
  { name: "Mror Deep Delver", stats: ["WIS"], talents: [{n:"Ruin-Sense",d:"Advantage predicting structural collapse in ruins"},{n:"Steady in the Dark",d:"Advantage resisting fear underground with no light"}], gear: "rope/pitons, script fragment", ancestral: "Dwarvish" },
  { name: "Sharn-Settled Dwarf", stats: ["CHA"], talents: [{n:"City Trained",d:"Advantage navigating bureaucracy"},{n:"Clanless by Choice",d:"Advantage resisting clan-obligation guilt-tripping"}], gear: "forged residency papers", ancestral: "Dwarvish" },
  { name: "Zil Broker", stats: ["INT"], talents: [{n:"Whisper Network",d:"once/session, learn a rumor/fact from a contact"},{n:"Always Listening",d:"Advantage on overheard-info checks"}], gear: "coded ledger, messenger bird", ancestral: "Gnomish" },
  { name: "Korranberg Scholar", stats: ["INT"], talents: [{n:"Cataloguer's Mind",d:"Advantage recalling library info"},{n:"Peer Reviewed",d:"Advantage invoking scholarly credentials"}], gear: "Library membership token, research index", ancestral: "Gnomish" },
  { name: "Zil Trickster", stats: ["DEX"], talents: [{n:"Sleight",d:"Advantage on close-quarters misdirection"},{n:"Vanish in a Crowd",d:"Advantage disappearing after drawing attention"}], gear: "forged documents, adaptable outfit", ancestral: "Gnomish" },
  { name: "Talenta Plains Rider", stats: ["DEX"], talents: [{n:"Beast-Bond",d:"mount won't panic"},{n:"Open Sky",d:"never lost outdoors"}], gear: "beast-taming charm, tribal markings", ancestral: "Halfling" },
  { name: "Talenta Dinosaur Handler", stats: ["WIS"], talents: [{n:"Herd-Sense",d:"Advantage calming/reading large beasts"},{n:"Tracker's Eye",d:"Advantage following tracks"}], gear: "handler's goad, feed rations", ancestral: "Halfling" },
  { name: "Khorvaire-Settled Halfling", stats: ["CHA"], talents: [{n:"City Charm",d:"Advantage on first impressions"},{n:"Small and Overlooked",d:"Advantage avoiding notice"}], gear: "forged city papers", ancestral: "Halfling" },
  { name: "Eldeen Shifter", stats: ["DEX", "STR"], talents: [{n:"Flex",d:"brief claws/speed burst"},{n:"Wildsense",d:"Advantage noticing natural dangers, tracking prey, or sensing weather changes"}], gear: "trap kit, woven charm", ancestral: null },
  { name: "Gatekeeper Shifter", stats: ["WIS"], talents: [{n:"Ward the Threshold",d:"Advantage detecting aberrant/planar-touched creatures"},{n:"Old Oath",d:"standing with Gatekeeper circles"}], gear: "warding totem, ritual herbs", ancestral: null },
  { name: "Droaam Shifter", stats: ["CON"], talents: [{n:"Hard Ground",d:"Advantage resisting intimidation/coercion"},{n:"Known to the Daughters",d:"reputation in Droaam"}], gear: "safe-passage token, scavenged trophy", ancestral: null },
  { name: "Kalashtar Dreamwarden", stats: ["WIS"], talents: [{n:"Dreamward",d:"sense psychic intrusion"},{n:"Shard-Immune",d:"immune to normal shard-touch"}], gear: "meditation focus", ancestral: "Quori" },
  { name: "Recently-Arrived Kalashtar", stats: ["CON"], talents: [{n:"Survived the Crossing",d:"Advantage resisting fear/despair when pursued/hunted"},{n:"Still Listening for Riedra",d:"Advantage noticing Inspired agents"}], gear: "forged papers", ancestral: "Quori" },
  { name: "Fainmalar-Born Kalashtar", stats: ["CHA"], talents: [{n:"Never Knew the Cage",d:"Advantage where fear of Riedra would apply"},{n:"Community Roots",d:"standing in a kalashtar enclave"}], gear: "community token", ancestral: "Quori" },
  { name: "Stage-Trained Changeling", stats: ["CHA"], talents: [{n:"Unremarkable",d:"retcon an NPC recognized you, 1/session"},{n:"Second Face",d:"prepared alternate identity"}], gear: "none notable", ancestral: null },
  { name: "Changeling Infiltrator", stats: ["CHA"], talents: [{n:"Cold Read",d:"Advantage mimicking a stranger after brief observation"},{n:"Deep Cover",d:"a maintained false identity with real standing"}], gear: "identity papers, notes", ancestral: null },
  { name: "Changeling Community-Raised", stats: ["WIS"], talents: [{n:"Many Faces One Self",d:"Advantage resisting identity-altering/erasing effects"},{n:"Hidden Kin",d:"connection to a hidden enclave"}], gear: "recognition token", ancestral: null },
  { name: "Cyre-Built Warforged", stats: ["CON", "STR"], talents: [{n:"Battle-Worn",d:"roll twice on the Scar table, take better"},{n:"No Need to Eat/Sleep",d:"doesn't eat/breathe/sleep"}], gear: "repair tools, sunrod", ancestral: null },
  { name: "Post-War Wandering Warforged", stats: ["WIS"], talents: [{n:"No Orders Left",d:"Advantage resisting despair/purposelessness"},{n:"Read the Room",d:"Advantage sensing anti-warforged hostility"}], gear: "no unit markings, personal roadside item", ancestral: null },
  { name: "House Cannith Warforged", stats: ["INT"], talents: [{n:"Factory-Trained",d:"Advantage operating/repairing Cannith devices"},{n:"Still Property",d:"a real legal tie to House Cannith"}], gear: "Cannith markings, papers of standing", ancestral: null },
  { name: "Droaam Half-Orc Mercenary", stats: ["STR"], talents: [{n:"Bad Reputation",d:"intimidation Advantage"},{n:"Contract Killer",d:"bonus vs. a marked target"}], gear: "none notable", ancestral: "Orc" },
  { name: "Gatekeeper Orc", stats: ["WIS"], talents: [{n:"Ward Against the Deep",d:"Advantage detecting aberrant creatures/planar corruption"},{n:"Binding Rite",d:"once/session, weaken/contain an aberrant threat"}], gear: "warding stake, ritual herbs, totem", ancestral: "Orc" },
  { name: "Ghaash'kala Orc", stats: ["CON"], talents: [{n:"Labyrinth-Sworn",d:"Advantage resisting fiendish corruption"},{n:"Marked by the Wastes",d:"Advantage recognizing fiendish influence"}], gear: "ash-marked wraps, no possessions beyond duty", ancestral: "Orc" },
  { name: "Dhakaani Loremarked Goblin", stats: ["STR", "INT"], talents: [{n:"Old Empire",d:"read pre-Sundering script"},{n:"Ancestral Weapon Training",d:"trained with ancient Dhakaani weapons"}], gear: "none notable", ancestral: "Goblin" },
  { name: "Darguun Hobgoblin Soldier", stats: ["STR"], talents: [{n:"Drilled to War",d:"Advantage forming up/coordinating"},{n:"Mercenary Standing",d:"reputation in Darguun companies"}], gear: "company token, service marks", ancestral: "Goblin" },
  { name: "Bugbear Outrider", stats: ["DEX"], talents: [{n:"Unseen Until Close",d:"Advantage remaining unnoticed"},{n:"Sudden Reach",d:"Advantage on first ambush strike"}], gear: "dark wraps, ambush trophy", ancestral: "Goblin" },
];

const LANGUAGES = ["Common", "Elvish", "Dwarvish", "Halfling", "Gnomish", "Goblin", "Orc", "Khoravar Cant", "Quori", "Draconic", "Riedran"];

const SPELL_FORMS = ["Armor","Aura","Beacon","Beam","Beast","Blade","Blast","Bolt","Bond","Bubble","Cascade","Chariot","Charm","Claw","Cloak","Crown","Sigil","Dance","Dart","Disk","Door","Eye","Fang","Feast","Field","Finger","Gaze","Grasp","Guide","Gust","Hand","Lock","Mark","Mask","Monolith","Oracle","Pillar","Pocket","Prison","Ring","Ritual","Seal","Servant","Shard","Shield","Silhouette","Song","Sphere","Steed","Strike","Swarm","Tentacle","Torrent","Trap","Veil","Voice","Vortex","Wall","Ward","Wave","Web","Whisper","Wings","Word"];
const SPELL_ADJECTIVES = ["Avenging","Banishing","Binding","Blazing","Blinding","Bright","Charming","Concealing","Confusing","Consuming","Controlling","Creeping","Crushing","Cryptic","Delicate","Diminishing","Disintegrating","Draining","Empowering","Entangling","Enveloping","Erratic","Expanding","Fearsome","Flaming","Floating","Freezing","Glittering","Hindering","Illusory","Intoxicating","Invisible","Iridescent","Luminous","Maddening","Many-Colored","Mesmerizing","Oozing","Paralyzing","Petrifying","Piercing","Prismatic","Pulsing","Regenerating","Rending","Repelling","Revealing","Screaming","Searing","Sensitive","Shifting","Shimmering","Sickening","Silent","Sleeping","Slow","Smoking","Soothing","Terrible","Transforming","Unseen","Unbreakable","Withering","Yawning"];
const SPELL_NOUNS = {
  Shardbound: ["Dragonshard","Khyber","Crystal","Force","Energy","Prophecy","Negation","Stasis","Void","Rune","Shadow","Aberration","Xoriat","Riftglass","Warp","Sigil","Gloom","Echo","Fracture","Cipher","Lattice","Abyss","Distortion","Null","Fathom","Depth","Chasm","Wyrm","Ichor","Venom","Husk","Wraith","Specter","Umbra","Nether","Chaos","Madness","Secret","Deceit","Mirage","Glyph","Circuit","Charge","Static","Pulse","Resonance","Fissure","Rift","Maw","Talon","Gloomstone","Blackglass","Hollow","Cavern","Undertow","Silence","Absence","Entropy","Corrosion","Rust","Decay","Blight","Miasma","Contagion"],
  Flamesworn: ["Syrania","Radiance","Flame","Judgment","Purity","Oath","Vow","Dawn","Silver","Halo","Sanctity","Daanvi","Absolution","Verdict","Grace","Zeal","Faith","Devotion","Piety","Mercy","Wrath","Rapture","Glory","Honor","Duty","Covenant","Chorus","Hymn","Psalm","Litany","Prayer","Blessing","Benediction","Communion","Sacrament","Relic","Shrine","Altar","Temple","Cathedral","Spire","Lantern","Torch","Ember","Cinder","Ash","Smoke","Incense","Censer","Chalice","Vestment","Banner","Scepter","Throne","Law","Decree","Edict","Mandate","Tribunal","Witness","Testimony","Confession","Solace","Redemption"],
  Wildspoken: ["Lamannia","Thelanis","Root","Thorn","Storm","Beast","Bloom","Bark","Tide","Moss","Fang","Bramble","Fey","Grove","Marrow","Frost","Wilds","Bracken","Fern","Vine","Bough","Petal","Pollen","Nectar","Sap","Loam","Silt","Marsh","Bog","Fen","Glade","Thicket","Canopy","Undergrowth","Deadfall","Rot","Growth","Bloomtide","Wolfsbane","Nightshade","Hemlock","Antler","Hoof","Talon","Feather","Hide","Pelt","Tusk","Horn","Den","Burrow","Nest","Migration","Instinct","Hunger","Prey","Predator","Pack","Herd","Flock","Season","Harvest","Bloomsong","Wyldwood"],
};
function rollSpellName(tradition) {
  const nouns = SPELL_NOUNS[tradition] || SPELL_NOUNS.Shardbound;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const template = Math.floor(Math.random() * 4) + 1;
  const f = pick(SPELL_FORMS), a = pick(SPELL_ADJECTIVES), n = pick(nouns);
  if (template === 1) return `${n} ${f}`;
  if (template === 2) return `${a} ${n}`;
  if (template === 3) return `${a} ${f}`;
  return `${f} of ${a} ${n}`;
}

const ARCHETYPES = {
  Wayfarer: { guardBonus: 2, weaponStatDefault: "STR", resource: "Grit", resourceStart: 2 },
  Agent: { guardBonus: 0, weaponStatDefault: "DEX", resource: "Leverage", resourceStart: 2 },
  Syberist: { guardBonus: 0, weaponStatDefault: "STR", resource: "Shards", resourceStart: null },
  "Cannith-Touched": { guardBonus: 1, weaponStatDefault: "STR", resource: "Infusions known", resourceStart: 1 },
};

const TRADITIONS = { Shardbound: "INT", Flamesworn: "CHA", Wildspoken: "WIS" };

const ARMORS = { Light: 1, Medium: 2, Heavy: 3 };
const SHIELDS = { None: 0, Shield: 1, "Tower Shield": 2 };
const SHIELD_PRICES = { None: 0, Shield: 10, "Tower Shield": 60 };
const SHIELD_INIT_PENALTY = { None: 0, Shield: -1, "Tower Shield": -3 };
const WEAPON_DICE = { Light: 4, Medium: 6, Heavy: 8 };
const WEAPON_PRICES = { Light: 10, Medium: 25, Heavy: 60 };
const ARMOR_PRICES = { Light: 15, Medium: 50, Heavy: 120 };

function rollD6() { return Math.floor(Math.random() * 6) + 1; }
function bonusFrom2d6(r) {
  if (r === 2) return -3;
  if (r <= 4) return -2;
  if (r <= 6) return -1;
  if (r === 7) return 0;
  if (r <= 9) return 1;
  if (r <= 11) return 2;
  return 3;
}

export default function CharacterCreator() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [bgIdx, setBgIdx] = useState(null);
  const [archetype, setArchetype] = useState(null);
  const [tradition, setTradition] = useState(null);
  const [rawRolls, setRawRolls] = useState(null);
  const [mercyUsed, setMercyUsed] = useState(null);
  const [assignment, setAssignment] = useState({});
  const [guardStat, setGuardStat] = useState(null);
  const [weaponTier, setWeaponTier] = useState("Medium");
  const [weaponStat, setWeaponStat] = useState(null);
  const [weaponType, setWeaponType] = useState("Melee");
  const [armorTier, setArmorTier] = useState("Light");
  const [shieldTier, setShieldTier] = useState("None");
  const [startingSpellName, setStartingSpellName] = useState(null);
  const [wealthNote, setWealthNote] = useState("");
  const [chosenLangs, setChosenLangs] = useState([]);
  const [shardsPurchased, setShardsPurchased] = useState(0);

  const bg = bgIdx !== null ? BACKGROUNDS[bgIdx] : null;
  const arch = archetype ? ARCHETYPES[archetype] : null;
  const castStat = archetype === "Syberist" ? TRADITIONS[tradition] : archetype === "Cannith-Touched" ? "INT" : null;
  const reservedStats = [weaponStat, castStat].filter(Boolean);
  const reservedStat = reservedStats[0]; // primary, for simple UI messaging

  const finalStats = () => {
    const out = { STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 };
    STATS.forEach((s) => { out[s] = rawRolls ? rawRolls[assignment[s]] ?? 0 : 0; });
    if (bg) bg.stats.forEach((s) => { out[s] += 1; });
    return out;
  };

  const noShieldAllowed = () => weaponTier === "Heavy" || weaponType === "Ranged";

  const downloadCharacter = () => {
    const fs = finalStats();
    const lines = [
      `${name || "Unnamed"}`,
      `${bg?.name || ""} ${archetype}${tradition ? ` (${tradition})` : ""}`,
      "=".repeat(40),
      "",
      "STATS",
      ...STATS.map((s) => `  ${s}: ${fs[s] >= 0 ? "+" : ""}${fs[s]}`),
      "",
      `Guard: ${guard()} (4 base + ${fs[guardStat]} ${guardStat} + ${arch?.guardBonus ?? 0} ${archetype} bonus + ${ARMORS[armorTier]} ${armorTier} armor${shieldTier !== "None" && !noShieldAllowed() ? ` + ${SHIELDS[shieldTier]} ${shieldTier}` : ""})`,
      `Wound slots: 1`,
      `Weapon: ${weaponType} ${weaponTier} (1d${WEAPON_DICE[weaponTier]}+${weaponStat})`,
      castStat ? `Casting stat: ${castStat} (never used for weapon damage)` : null,
      startingSpellName ? `Starting spell name: "${startingSpellName}"` : null,
      `Armor: ${armorTier}${shieldTier !== "None" && !noShieldAllowed() ? ` + ${shieldTier}` : ""}`,
      `Languages: ${languages()}`,
      `Talents: ${bg?.talents.map((t) => `${t.n} (${t.d})`).join("; ") || ""}`,
      `Gear: ${bg?.gear || ""}`,
      `${arch?.resource}: ${arch?.resourceStart ?? `${shardsPurchased} refined shards purchased`}`,
      "",
      "STARTING WEALTH",
      `  200gp − ${WEAPON_PRICES[weaponTier]}gp (${weaponTier} weapon) − ${ARMOR_PRICES[armorTier]}gp (${armorTier} armor) − ${SHIELD_PRICES[noShieldAllowed() ? "None" : shieldTier]}gp (${noShieldAllowed() ? "no shield" : shieldTier}) − ${shardsPurchased * 10}gp (${shardsPurchased} shards) = ${goldAfterGear() - shardsPurchased * 10}gp remaining`,
      wealthNote ? `  Notes: ${wealthNote}` : null,
      "",
      "-".repeat(40),
      "Generated with the Eberron × Electrum Archive Character Creator",
    ].filter((l) => l !== null);

    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(name || "character").replace(/[^a-z0-9]/gi, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const guard = () => {
    if (!guardStat) return null;
    const fs = finalStats();
    const armorVal = ARMORS[armorTier];
    const shieldVal = noShieldAllowed() ? 0 : SHIELDS[shieldTier];
    return 4 + fs[guardStat] + (arch ? arch.guardBonus : 0) + armorVal + shieldVal;
  };

  const languages = () => {
    const fs = finalStats();
    const intB = fs.INT;
    let text = "Common";
    if (intB <= -2) text = "Illiterate (speaks known languages, cannot read/write any)";
    else if (intB > 0) {
      const picks = chosenLangs.slice(0, intB);
      text += picks.length ? ` + ${picks.join(", ")}` : ` + ${intB} extra language(s) (pick below)`;
    }
    if (bg && bg.ancestral) text += ` + ${bg.ancestral} (ancestral)`;
    return text;
  };
  const bonusLangSlots = () => {
    const fs = finalStats();
    return fs.INT > 0 ? fs.INT : 0;
  };
  const goldAfterGear = () => 200 - WEAPON_PRICES[weaponTier] - ARMOR_PRICES[armorTier] - SHIELD_PRICES[noShieldAllowed() ? "None" : shieldTier];
  const maxShardsAffordable = () => Math.floor(goldAfterGear() / 10);

  const doRoll = () => {
    const rolls = Array.from({ length: 6 }, () => bonusFrom2d6(rollD6() + rollD6()));
    setRawRolls(rolls);
    setMercyUsed(null);
    setMercyType(null);
    setMercyStats([]);
    setAssignment({});
    setChosenLangs([]);
  };

  const [mercyType, setMercyType] = useState(null);
  const [mercyStats, setMercyStats] = useState([]);

  const confirmMercy = () => {
    let rolls = [...rawRolls];
    const sortedIdx = rolls.map((r, i) => i).sort((a, b) => rolls[a] - rolls[b]);
    const slotsNeeded = mercyType === "two" ? 2 : 1;
    const targetIdxs = sortedIdx.slice(-slotsNeeded); // reuse the highest-value slot(s) as the boosted die
    const boostVal = mercyType === "two" ? 1 : 2;
    targetIdxs.forEach((idx) => { rolls[idx] = boostVal; });
    setRawRolls(rolls);
    const newAssignment = { ...assignment };
    mercyStats.forEach((stat, i) => { newAssignment[stat] = targetIdxs[i]; });
    setAssignment(newAssignment);
    setMercyUsed(mercyType);
  };

  const noStatPositive = rawRolls && rawRolls.every((r) => r <= 0);

  const steps = [
    "Name & Background",
    "Archetype",
    "Roll Stats",
    "Assign Stats",
    "Guard Stat",
    "Weapon & Armor",
    "Languages",
    "Summary",
  ];

  const canAdvance = [
    name.trim() && bg,
    archetype && (archetype !== "Syberist" || tradition),
    rawRolls && !(noStatPositive && !mercyUsed),
    STATS.every((s) => assignment[s] !== undefined),
    guardStat && !reservedStats.includes(guardStat),
    weaponStat && !(
      (weaponStat === "STR" && weaponTier === "Medium" && finalStats().STR < 0) ||
      (weaponStat === "STR" && weaponTier === "Heavy" && finalStats().STR < 1) ||
      (weaponStat === "DEX" && weaponTier === "Medium" && finalStats().DEX < 0) ||
      (weaponStat === "DEX" && weaponTier === "Heavy" && finalStats().DEX < 1)
    ),
    bonusLangSlots() === 0 || chosenLangs.length === bonusLangSlots(),
    true,
  ][step];

  const ss = { display: "block", width: "100%", padding: "0.5rem", marginBottom: "0.5rem", background: "#1d1c23", border: "1px solid #35323f", color: "#e8e4da", borderRadius: 3, fontFamily: "inherit" };
  const btn = (disabled) => ({ padding: "0.6rem 1.4rem", background: disabled ? "#26242e" : "#4d8d81", color: disabled ? "#6f6a7d" : "#0e1512", border: "none", borderRadius: 3, fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.8rem", cursor: disabled ? "not-allowed" : "pointer" });

  return (
    <div style={{ background: "#16151a", color: "#e8e4da", minHeight: "100vh", fontFamily: "'Source Serif 4', Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.72rem", letterSpacing: "0.14em", color: "#d9b872", margin: 0 }}>EBERRON × THE ELECTRUM ARCHIVE</p>
        <h1 style={{ fontFamily: "Oswald, sans-serif", textTransform: "uppercase", fontSize: "1.8rem", margin: "0.2rem 0 1.5rem 0" }}>Character Creator</h1>

        <div style={{ display: "flex", gap: 4, marginBottom: "2rem", flexWrap: "wrap" }}>
          {steps.map((s, i) => (
            <span key={s} style={{
              fontFamily: "Oswald, sans-serif", fontSize: "0.65rem", letterSpacing: "0.05em",
              padding: "0.3rem 0.6rem", borderRadius: 3,
              background: i === step ? "#4d8d81" : i < step ? "#26242e" : "#1d1c23",
              color: i === step ? "#0e1512" : i < step ? "#7fd4c1" : "#6f6a7d",
            }}>{i + 1}. {s}</span>
          ))}
        </div>

        <div style={{ background: "#1d1c23", border: "1px solid #35323f", borderRadius: 4, padding: "1.5rem", minHeight: 260 }}>
          {step === 0 && (
            <>
              <h3 style={{ marginTop: 0, color: "#7fd4c1" }}>Name &amp; Background</h3>
              <label>Character name</label>
              <input style={ss} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Vex Quickstep" />
              <label>Background (race + culture)</label>
              <select style={ss} value={bgIdx ?? ""} onChange={(e) => setBgIdx(Number(e.target.value))}>
                <option value="" disabled>Choose a background...</option>
                {BACKGROUNDS.map((b, i) => <option key={b.name} value={i}>{b.name}</option>)}
              </select>
              {bg && (
                <div style={{ fontSize: "0.9rem", color: "#a8a2b3", marginTop: "0.5rem" }}>
                  <p><strong style={{ color: "#e8e4da" }}>+1 {bg.stats.join(" / ")}</strong></p>
                  <p>Talents: {bg.talents.map(t => `${t.n} (${t.d})`).join("; ")}</p>
                  <p>Gear: {bg.gear}</p>
                  {bg.ancestral && <p>Ancestral language: {bg.ancestral}</p>}
                </div>
              )}
            </>
          )}

          {step === 1 && (
            <>
              <h3 style={{ marginTop: 0, color: "#7fd4c1" }}>Archetype</h3>
              {Object.keys(ARCHETYPES).map((a) => (
                <label key={a} style={{ display: "block", marginBottom: "0.5rem", cursor: "pointer" }}>
                  <input type="radio" name="archetype" checked={archetype === a} onChange={() => { setArchetype(a); setTradition(null); setWeaponStat(ARCHETYPES[a].weaponStatDefault); }} /> {" "}
                  <strong>{a}</strong> — Guard bonus +{ARCHETYPES[a].guardBonus}, resource: {ARCHETYPES[a].resource}
                </label>
              ))}
              {archetype === "Syberist" && (
                <>
                  <label style={{ marginTop: "1rem", display: "block" }}>Tradition</label>
                  <select style={ss} value={tradition ?? ""} onChange={(e) => { setTradition(e.target.value); setStartingSpellName(rollSpellName(e.target.value)); }}>
                    <option value="" disabled>Choose a tradition...</option>
                    {Object.entries(TRADITIONS).map(([t, stat]) => <option key={t} value={t}>{t} (cast stat: {stat})</option>)}
                  </select>
                  {startingSpellName && (
                    <p style={{ marginTop: "0.6rem", color: "#7fd4c1" }}>
                      Starting spell name: <strong>"{startingSpellName}"</strong>
                      {" "}<button style={{ ...btn(false), padding: "0.2rem 0.6rem", fontSize: "0.7rem" }} onClick={() => setStartingSpellName(rollSpellName(tradition))}>Reroll</button>
                    </p>
                  )}
                </>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <h3 style={{ marginTop: 0, color: "#7fd4c1" }}>Roll Stats</h3>
              <p style={{ color: "#a8a2b3" }}>Rolls 2d6 six times, converts to bonuses.</p>
              <button style={btn(false)} onClick={doRoll}>Roll 2d6 ×6</button>
              {rawRolls && (
                <div style={{ marginTop: "1rem" }}>
                  <p>Results: {rawRolls.map((r, i) => <span key={i} className="mono" style={{ marginRight: 8, fontFamily: "monospace" }}>{r >= 0 ? `+${r}` : r}</span>)}</p>
                  {noStatPositive && !mercyUsed && (
                    <div style={{ border: "1px solid #6b5583", background: "rgba(166,131,196,0.08)", padding: "0.8rem", borderRadius: 3, marginTop: "0.5rem" }}>
                      <p style={{ margin: "0 0 0.5rem 0", color: "#a683c4" }}>No stat is positive — mercy rule applies.</p>
                      {!mercyType && (
                        <>
                          <button style={{ ...btn(false), marginRight: 8 }} onClick={() => { setMercyType("two"); setMercyStats([]); }}>Raise two stats to +1</button>
                          <button style={btn(false)} onClick={() => { setMercyType("one"); setMercyStats([]); }}>Raise one stat to +2</button>
                        </>
                      )}
                      {mercyType && (
                        <>
                          <p style={{ fontSize: "0.85rem", color: "#a8a2b3" }}>
                            Pick {mercyType === "two" ? "2 stats" : "1 stat"} to raise ({mercyStats.length}/{mercyType === "two" ? 2 : 1} chosen)
                          </p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.6rem" }}>
                            {STATS.map((s) => {
                              const checked = mercyStats.includes(s);
                              const full = mercyStats.length >= (mercyType === "two" ? 2 : 1);
                              const disabled = !checked && full;
                              return (
                                <label key={s} style={{ opacity: disabled ? 0.4 : 1, fontSize: "0.85rem", background: "#26242e", padding: "0.3rem 0.6rem", borderRadius: 3, cursor: disabled ? "not-allowed" : "pointer" }}>
                                  <input type="checkbox" checked={checked} disabled={disabled}
                                    onChange={() => setMercyStats(checked ? mercyStats.filter(x => x !== s) : [...mercyStats, s])}
                                    style={{ marginRight: 4 }} /> {s}
                                </label>
                              );
                            })}
                          </div>
                          <button style={btn(mercyStats.length !== (mercyType === "two" ? 2 : 1))} disabled={mercyStats.length !== (mercyType === "two" ? 2 : 1)} onClick={confirmMercy}>Confirm</button>
                          <button style={{ ...btn(false), marginLeft: 8, background: "#26242e", color: "#a8a2b3" }} onClick={() => setMercyType(null)}>Back</button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {step === 3 && (
            <>
              <h3 style={{ marginTop: 0, color: "#7fd4c1" }}>Assign Stats</h3>
              <p style={{ color: "#a8a2b3" }}>Assign each rolled value to a different stat.</p>
              {STATS.map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ width: 40, fontFamily: "Oswald, sans-serif" }}>{s}</span>
                  <select style={{ ...ss, marginBottom: 0 }} value={assignment[s] ?? ""} onChange={(e) => setAssignment({ ...assignment, [s]: Number(e.target.value) })}>
                    <option value="" disabled>—</option>
                    {rawRolls && rawRolls.map((r, i) => {
                      const usedElsewhere = Object.entries(assignment).some(([k, idx]) => idx === i && k !== s);
                      return (
                        <option key={i} value={i} disabled={usedElsewhere}>
                          {r >= 0 ? `+${r}` : r}{usedElsewhere ? " (used)" : ""}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ))}
            </>
          )}

          {step === 4 && (
            <>
              <h3 style={{ marginTop: 0, color: "#7fd4c1" }}>Guard Stat</h3>
              <p style={{ color: "#a8a2b3" }}>Must differ from your weapon/cast stat ({reservedStats.length ? reservedStats.join(" and ") : "not yet set"}).</p>
              {STATS.map((s) => (
                <label key={s} style={{ display: "block", marginBottom: 4, opacity: reservedStats.includes(s) ? 0.4 : 1 }}>
                  <input type="radio" name="guardstat" disabled={reservedStats.includes(s)} checked={guardStat === s} onChange={() => setGuardStat(s)} /> {s} ({finalStats()[s] >= 0 ? `+${finalStats()[s]}` : finalStats()[s]}){reservedStats.includes(s) ? " — reserved (weapon/cast stat)" : ""}
                </label>
              ))}
            </>
          )}

          {step === 5 && (
            <>
              <h3 style={{ marginTop: 0, color: "#7fd4c1" }}>Weapon &amp; Armor</h3>
              {castStat && <p style={{ color: "#a8a2b3", fontSize: "0.85rem" }}>Casting stat ({castStat}) is separate from your weapon — {castStat} is never used for weapon damage, even if it's your main stat.</p>}
              <label>Weapon type</label>
              <select style={ss} value={weaponType} onChange={(e) => { setWeaponType(e.target.value); if (e.target.value === "Ranged") setWeaponStat("DEX"); }}>
                <option value="Melee">Melee (including finesse — a DEX rapier is still melee)</option>
                <option value="Ranged">Ranged (bow, crossbow — always Two-handed, no shield)</option>
              </select>
              <label>Weapon stat (melee: STR or DEX/finesse &middot; ranged: always DEX)</label>
              <select style={ss} value={weaponStat ?? ""} onChange={(e) => setWeaponStat(e.target.value)}>
                {(weaponType === "Ranged" ? ["DEX"] : ["STR", "DEX"]).map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <label>Weapon tier</label>
              <select style={ss} value={weaponTier} onChange={(e) => setWeaponTier(e.target.value)}>
                {Object.keys(WEAPON_DICE).map((t) => {
                  const fs = finalStats();
                  let blocked = false, reason = "";
                  if (weaponStat) {
                    const statVal = fs[weaponStat];
                    if (weaponStat === "STR" && t === "Medium" && statVal < 0) { blocked = true; reason = "needs STR ≥ 0"; }
                    if (weaponStat === "STR" && t === "Heavy" && statVal < 1) { blocked = true; reason = "needs STR ≥ +1"; }
                    if (weaponStat === "DEX" && t === "Medium" && statVal < 0) { blocked = true; reason = "needs DEX ≥ 0"; }
                    if (weaponStat === "DEX" && t === "Heavy" && statVal < 1) { blocked = true; reason = "needs DEX ≥ +1"; }
                  }
                  return <option key={t} value={t} disabled={blocked}>{t} (1d{WEAPON_DICE[t]}) — {WEAPON_PRICES[t]}gp{blocked ? ` [${reason}]` : ""}</option>;
                })}
              </select>
              {weaponTier === "Heavy" && (
                <p style={{ color: "#a683c4", fontSize: "0.85rem" }}>Heavy's downside: always Two-handed — no shield, ever, regardless of type. Bigger die, but you're giving up a whole gear slot's worth of options to get it.</p>
              )}
              <label>Armor tier {archetype === "Syberist" && "(Syberist gish capped at Medium)"}</label>
              <select style={ss} value={armorTier} onChange={(e) => setArmorTier(e.target.value)}>
                {Object.keys(ARMORS).filter(t => archetype !== "Syberist" || t !== "Heavy").map((t) => <option key={t} value={t}>{t} (+{ARMORS[t]} Guard) — {ARMOR_PRICES[t]}gp</option>)}
              </select>
              {armorTier === "Heavy" && (
                <p style={{ color: "#a683c4", fontSize: "0.85rem" }}>Heavy's real downsides beyond the requirement below: takes 2 body slots instead of 1, −1 on Agility-type checks, moving to an adjacent zone costs your entire action instead of pairing with an attack, and it's not freely buyable — needs a House Cannith commission or military contact. Not just "bigger number, no cost."</p>
              )}
              {armorTier === "Heavy" && archetype !== "Wayfarer" && archetype !== "Cannith-Touched" && (
                <p style={{ color: "#a683c4", fontSize: "0.85rem" }}>⚠ Heavy armor normally requires Wayfarer's +2 Guard bonus or Cannith-Touched's infusion-easing trick.</p>
              )}
              <label>Shield {noShieldAllowed() && "(unavailable — Two-handed: Heavy weapons, or any ranged weapon at any tier)"}</label>
              <select style={ss} value={noShieldAllowed() ? "None" : shieldTier} disabled={noShieldAllowed()} onChange={(e) => setShieldTier(e.target.value)}>
                {Object.keys(SHIELDS).map((t) => <option key={t} value={t}>{t}{t !== "None" ? ` (+${SHIELDS[t]} Guard, ${SHIELD_INIT_PENALTY[t]} Init) — ${SHIELD_PRICES[t]}gp` : ""}</option>)}
              </select>
              {shieldTier !== "None" && !noShieldAllowed() && (
                <p style={{ color: "#a8a2b3", fontSize: "0.85rem" }}>Initiative penalty means you act later in a fight, more often, the bigger the shield — real Guard for real turn-order cost, not free.</p>
              )}
              <div style={{ marginTop: "1rem", padding: "0.7rem", background: "#26242e", borderRadius: 3, fontSize: "0.9rem" }}>
                <p style={{ margin: 0 }}>Weapon: {WEAPON_PRICES[weaponTier]}gp + Armor: {ARMOR_PRICES[armorTier]}gp + Shield: {SHIELD_PRICES[noShieldAllowed() ? "None" : shieldTier]}gp = <strong>{WEAPON_PRICES[weaponTier] + ARMOR_PRICES[armorTier] + SHIELD_PRICES[noShieldAllowed() ? "None" : shieldTier]}gp spent</strong></p>
                <p style={{ margin: "0.3rem 0 0 0", color: "#7fd4c1" }}>Remaining of 200gp starting wealth: <strong>{200 - WEAPON_PRICES[weaponTier] - ARMOR_PRICES[armorTier] - SHIELD_PRICES[noShieldAllowed() ? "None" : shieldTier]}gp</strong></p>
              </div>
            </>
          )}

          {step === 6 && (
            <>
              <h3 style={{ marginTop: 0, color: "#7fd4c1" }}>Languages &amp; Starting Wealth</h3>
              <p><strong>Languages:</strong> {languages()}</p>
              {bonusLangSlots() > 0 && (
                <div style={{ marginBottom: "1rem" }}>
                  <label>Pick {bonusLangSlots()} bonus language(s) ({chosenLangs.length}/{bonusLangSlots()} chosen)</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.4rem" }}>
                    {LANGUAGES.filter(l => l !== "Common").map((lang) => {
                      const checked = chosenLangs.includes(lang);
                      const disabled = !checked && chosenLangs.length >= bonusLangSlots();
                      return (
                        <label key={lang} style={{ opacity: disabled ? 0.4 : 1, fontSize: "0.85rem", background: "#26242e", padding: "0.3rem 0.6rem", borderRadius: 3, cursor: disabled ? "not-allowed" : "pointer" }}>
                          <input type="checkbox" checked={checked} disabled={disabled}
                            onChange={() => setChosenLangs(checked ? chosenLangs.filter(l => l !== lang) : [...chosenLangs, lang])}
                            style={{ marginRight: 4 }} />
                          {lang}
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
              <div style={{ border: "1px solid #6b5583", background: "rgba(166,131,196,0.08)", padding: "0.7rem", borderRadius: 3, marginBottom: "1rem", fontSize: "0.85rem" }}>
                <strong style={{ color: "#a683c4" }}>Note:</strong> Background gear (like {bg?.gear || "your Background's items"}) is narrative only — it never grants a stat or Guard bonus, by design. Your actual worn armor and its Guard bonus is whatever tier you picked in the Weapon &amp; Armor step, a separate, purely mechanical choice.
              </div>
              <label style={{ display: "block" }}>Refined shards to buy (10gp each, max {maxShardsAffordable()} affordable with {goldAfterGear()}gp remaining)</label>
              <select style={ss} value={shardsPurchased} onChange={(e) => setShardsPurchased(Number(e.target.value))}>
                {Array.from({ length: maxShardsAffordable() + 1 }, (_, i) => i).map((n) => (
                  <option key={n} value={n}>{n} shards ({n * 10}gp)</option>
                ))}
              </select>
              <label style={{ display: "block", marginTop: "0.7rem" }}>Remaining {goldAfterGear() - shardsPurchased * 10}gp — spend notes (other gear, supplies)</label>
              <textarea style={{ ...ss, minHeight: 80 }} value={wealthNote} onChange={(e) => setWealthNote(e.target.value)} placeholder="e.g. rations, rope, a Background-appropriate trinket" />
            </>
          )}

          {step === 7 && (
            <>
              <h3 style={{ marginTop: 0, color: "#d9b872" }}>{name || "Unnamed"}</h3>
              <p style={{ color: "#a8a2b3" }}>{bg?.name} {archetype}{tradition ? ` (${tradition})` : ""}</p>
              <table style={{ width: "100%", fontSize: "0.9rem", marginBottom: "1rem" }}>
                <tbody>
                  {STATS.map((s) => (
                    <tr key={s}>
                      <td style={{ fontFamily: "Oswald, sans-serif", padding: "0.2rem 0" }}>{s}</td>
                      <td>{(finalStats()[s] >= 0 ? "+" : "") + finalStats()[s]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p><strong>Guard:</strong> {guard()} <span style={{ color: "#a8a2b3", fontSize: "0.85rem" }}>(4 base + {finalStats()[guardStat]} {guardStat} + {arch?.guardBonus ?? 0} {archetype} bonus + {ARMORS[armorTier]} {armorTier} armor{shieldTier !== "None" && !noShieldAllowed() ? ` + ${SHIELDS[shieldTier]} ${shieldTier}` : ""})</span></p>
              <p><strong>Wound slots:</strong> 1</p>
              <p><strong>Weapon:</strong> {weaponType} {weaponTier} (1d{WEAPON_DICE[weaponTier]}+{weaponStat})</p>
              {castStat && <p><strong>Casting stat:</strong> {castStat} (never used for weapon damage, even if it's your main stat)</p>}
              {startingSpellName && <p><strong>Starting spell name:</strong> "{startingSpellName}"</p>}
              <p><strong>Armor:</strong> {armorTier}{shieldTier !== "None" && !noShieldAllowed() ? ` + ${shieldTier}` : ""}</p>
              <p><strong>Languages:</strong> {languages()}</p>
              <p><strong>Talents:</strong> {bg?.talents.map(t => `${t.n} (${t.d})`).join("; ")}</p>
              <p><strong>Gear:</strong> {bg?.gear}</p>
              <p><strong>{arch?.resource}:</strong> {arch?.resourceStart ?? `${shardsPurchased} refined shards purchased`}</p>
              <p><strong>Starting wealth:</strong> 200gp − {WEAPON_PRICES[weaponTier]}gp ({weaponTier} weapon) − {ARMOR_PRICES[armorTier]}gp ({armorTier} armor) − {SHIELD_PRICES[noShieldAllowed() ? "None" : shieldTier]}gp ({noShieldAllowed() ? "no shield" : shieldTier}) − {shardsPurchased * 10}gp ({shardsPurchased} shards) = {goldAfterGear() - shardsPurchased * 10}gp remaining</p>
              {wealthNote && <p><strong>Wealth notes:</strong> {wealthNote}</p>}
            </>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
          <button style={btn(step === 0)} disabled={step === 0} onClick={() => setStep(step - 1)}>← Back</button>
          {step < steps.length - 1 ? (
            <button style={btn(!canAdvance)} disabled={!canAdvance} onClick={() => setStep(step + 1)}>Next →</button>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontFamily: "Oswald, sans-serif", color: "#7fd4c1" }}>Character complete</span>
              <button style={btn(false)} onClick={downloadCharacter}>↓ Download</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
