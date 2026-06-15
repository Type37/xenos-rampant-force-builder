import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Plus, Crown, Copy, Trash2, ChevronDown, X, Dices,
  AlertTriangle, Check, Info, RotateCcw, Users, Truck,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 * XENOS RAMPANT — FORCE BUILDER (UX prototype)
 * Data transcribed from Xenos Rampant (Osprey Games, 2022).
 * Stats and costs are the published profiles; this is a flow study,
 * not an official tool.
 * ------------------------------------------------------------------ */

const INFANTRY = "infantry";
const VEHICLE = "vehicle";

/* Shared option effect strings kept terse; chips show name + cost. */
const UNIT_TYPES = [
  {
    id: "elite", name: "Elite Infantry", cls: INFANTRY, base: 6, sp: 5,
    role: "The best soldiers in the galaxy. Heavy armour, fearless, cut through almost anything.",
    stats: { mov: '8"', arm: "4", atk: "4+", def: "4+", sho: '4+/18"' },
    special: ["Back Into The Fray", "Firefight", "Ranger"],
    xenoPolicy: { type: "all" },
    options: [
      { id: "anti-tank", name: "Anti-Tank", cost: 2, conflicts: ["armour-piercing"], effect: "Halve enemy vehicle Armour when Shooting." },
      { id: "armour-piercing", name: "Armour-Piercing", cost: 1, conflicts: ["anti-tank"], effect: "Enemy Armour counts 1 lower when Shooting." },
      { id: "assault-doctrine", name: "Assault Doctrine", cost: 2, effect: "Attack Value improves to 3+." },
      { id: "close-quarters", name: "Close Quarters Doctrine", cost: -1, effect: "Shoot Value drops to 4+/12\"." },
      { id: "demolitions", name: "Demolitions", cost: 2, conflicts: ["high-powered-blades"], effect: "Halve enemy vehicle Armour in Attacks." },
      { id: "fire-support", name: "Fire Support", cost: 4, effect: "May call in Fire Support as an order." },
      { id: "heavy-weapon", name: "Heavy Weapon", cost: 2, effect: "Shooting 6s count as two hits." },
      { id: "high-powered-blades", name: "High-Powered Blades", cost: 1, conflicts: ["demolitions"], effect: "Enemy Armour counts 1 lower in Attacks." },
      { id: "mobile", name: "Mobile", cost: 1, effect: "Maximum Movement +4\". Not with Slow." },
      { id: "super-heavy-armour", name: "Super Heavy Armour", cost: 2, effect: "Armour 5, Movement -2\", treated as a vehicle for Anti-Tank / Demolitions." },
    ],
  },
  {
    id: "heavy", name: "Heavy Infantry", cls: INFANTRY, base: 2, sp: 5,
    role: "Professional line troops. Best tying the enemy up in firefights while others grab objectives.",
    stats: { mov: '6"', arm: "3", atk: "6", def: "5+", sho: '6/18"' },
    special: ["Firefight", "Go To Ground"],
    xenoPolicy: { type: "all" },
    options: [
      { id: "armour-piercing", name: "Armour-Piercing", cost: 1, effect: "Enemy Armour counts 1 lower when Shooting." },
      { id: "assault-doctrine", name: "Assault Doctrine", cost: 2, effect: "Attack Value improves by 1." },
      { id: "close-quarters", name: "Close Quarters Doctrine", cost: -1, effect: "Shoot range drops to 12\"." },
      { id: "fire-support", name: "Fire Support", cost: 4, effect: "May call in Fire Support as an order." },
      { id: "heavy-weapon", name: "Heavy Weapon", cost: 2, effect: "Shooting 6s count as two hits." },
      { id: "increased-squad", name: "Increased Squad Size", cost: 2, sp: 10, effect: "10 SP. AV 5+, DV 4+, SV 5+/18\"." },
      { id: "mobile", name: "Mobile", cost: 1, effect: "Maximum Movement +4\". Not with Slow." },
      { id: "undisciplined", name: "Undisciplined", cost: -1, effect: "Courage 5+." },
    ],
  },
  {
    id: "light", name: "Light Infantry", cls: INFANTRY, base: 1, sp: 5,
    role: "Manoeuvrable, lightly armoured. For capturing objectives, not slugging it out.",
    stats: { mov: '8"', arm: "2", atk: "6", def: "5+", sho: '6/18"' },
    special: ["Firefight", "Go To Ground"],
    xenoPolicy: { type: "all" },
    options: [
      { id: "armour-piercing", name: "Armour-Piercing", cost: 1, effect: "Enemy Armour counts 1 lower when Shooting." },
      { id: "assault-doctrine", name: "Assault Doctrine", cost: 2, effect: "Attack Value improves by 1." },
      { id: "close-quarters", name: "Close Quarters Doctrine", cost: -1, effect: "Shoot range drops to 12\"." },
      { id: "fire-support", name: "Fire Support", cost: 4, effect: "May call in Fire Support as an order." },
      { id: "guerrillas", name: "Guerrillas", cost: 1, effect: "In soft cover, Armour +1 more." },
      { id: "heavy-weapon", name: "Heavy Weapon", cost: 2, effect: "Shooting 6s count as two hits." },
      { id: "increased-squad", name: "Increased Squad Size", cost: 2, sp: 10, effect: "10 SP. AV 5+, DV 4+, SV 5+/18\"." },
      { id: "mobile", name: "Mobile", cost: 1, effect: "Maximum Movement +4\". Not with Slow." },
      { id: "undisciplined", name: "Undisciplined", cost: -1, effect: "Courage 5+." },
    ],
  },
  {
    id: "berserk", name: "Berserk Infantry", cls: INFANTRY, base: 2, sp: 5,
    role: "Melee-hungry warriors who fire from the hip as they close. Subject to Wild Charges.",
    stats: { mov: '8"', arm: "2", atk: "4+", def: "6", sho: '6/12"' },
    special: ["Counter-Charge", "Firefight", "Open Order", "Ranger", "Wild Charge"],
    xenoPolicy: { type: "except", list: ["psychic", "crusader"] },
    options: [
      { id: "demolitions", name: "Demolitions", cost: 2, conflicts: ["high-powered-blades"], effect: "Halve enemy vehicle Armour in Attacks." },
      { id: "enthusiastic", name: "Enthusiastic But Untrained", cost: -1, effect: "Attack Value reduced by 1." },
      { id: "heavy-armour", name: "Heavy Armour", cost: 2, conflicts: ["even-heavier"], effect: "Armour becomes 3." },
      { id: "even-heavier", name: "Even Heavier Armour", cost: 4, conflicts: ["heavy-armour", "increased-squad"], effect: "Armour 4, Attack Value 3+." },
      { id: "high-powered-blades", name: "High-Powered Blades", cost: 1, conflicts: ["demolitions"], effect: "Enemy Armour counts 1 lower in Attacks." },
      { id: "increased-squad", name: "Increased Squad Size", cost: 1, sp: 10, conflicts: ["even-heavier"], effect: "10 SP, Attack Value 3+." },
      { id: "mobile", name: "Mobile", cost: 1, effect: "Maximum Movement +4\". Not with Slow." },
      { id: "veteran", name: "Veteran", cost: 2, effect: "Defence Value becomes 5+." },
    ],
  },
  {
    id: "support", name: "Support Infantry", cls: INFANTRY, base: 5, sp: 5, noAttack: true,
    role: "Heavy weapons crews and artillery. Long reach, can never Attack, needs protecting.",
    stats: { mov: '6"', arm: "2", atk: "—", def: "5+", sho: '4+/24"' },
    special: ["Firefight", "Spotters", "Never Attacks"],
    xenoPolicy: { type: "all" },
    options: [
      { id: "anti-tank", name: "Anti-Tank", cost: 2, conflicts: ["armour-piercing"], effect: "Halve enemy vehicle Armour when Shooting." },
      { id: "armour-piercing", name: "Armour-Piercing", cost: 1, conflicts: ["anti-tank"], effect: "Enemy Armour counts 1 lower when Shooting." },
      { id: "artillery", name: "Artillery", cost: 2, conflicts: ["close-quarters"], effect: "Shoot Value 4+/48\"." },
      { id: "close-quarters", name: "Close Quarters Doctrine", cost: -2, conflicts: ["artillery"], effect: "Shoot Value 4+/12\"." },
      { id: "engulfing", name: "Engulfing", cost: 1, effect: "Shooting targets get no cover Armour bonus." },
      { id: "heavy-weapon", name: "Heavy Weapon", cost: 2, effect: "Shooting 6s count as two hits." },
      { id: "indirect-fire", name: "Indirect Fire", cost: 1, effect: "With spotters, fire at targets out of line of sight." },
    ],
  },
  {
    id: "recon", name: "Recon Infantry", cls: INFANTRY, base: 2, sp: 5,
    role: "Lighter than Light. Infiltrate, harry, snipe, then vanish. Hard to pin down.",
    stats: { mov: '8"', arm: "1", atk: "6", def: "6", sho: '5+/12"' },
    special: ["Firefight", "Hard to Target", "Open Order", "Skirmish"],
    xenoPolicy: { type: "except", list: ["cloaking-device", "psychic", "exploder", "crusader"] },
    options: [
      { id: "counter-sniper", name: "Counter-Sniper Training", cost: 1, requires: "sniper-team", effect: "Sniper Teams may target Hard to Target units past 12\"." },
      { id: "fire-support", name: "Fire Support", cost: 4, effect: "May call in Fire Support as an order." },
      { id: "green", name: "Green", cost: -1, conflicts: ["sniper-team", "veterans"], effect: "Cannot Skirmish." },
      { id: "sniper-team", name: "Sniper Team", cost: 2, conflicts: ["green", "veterans"], effect: "Shoot Value 5+/24\", cannot Skirmish." },
      { id: "veterans", name: "Veterans", cost: 2, conflicts: ["green", "sniper-team"], effect: "Skirmish at full Shoot Value." },
    ],
  },
  {
    id: "primitive", name: "Primitive Infantry", cls: INFANTRY, base: 1, sp: 5,
    role: "Pre-firearms cultures, knights, ghouls, brain-parasite hosts. Better in rough terrain.",
    stats: { mov: '8"', arm: "1", atk: "5+", def: "6", sho: "—" },
    special: ["Go To Ground", "Open Order"],
    xenoPolicy: { type: "all" },
    options: [
      { id: "armoured", name: "Armoured", cost: 1, effect: "Counts as Armour 2 in melee and vs primitive shooting." },
      { id: "increased-squad", name: "Increased Squad Size", cost: 1, sp: 10, conflicts: ["mob"], effect: "10 SP, AV 4+, DV 5+." },
      { id: "mob", name: "Mob", cost: 2, sp: 15, conflicts: ["increased-squad"], effect: "15 SP, AV 3+, DV 5+." },
      { id: "mobile", name: "Mobile", cost: 1, effect: "Maximum Movement +4\". Not with Slow." },
      { id: "primitive-missiles", name: "Primitive Missiles", cost: 1, conflicts: ["savages"], effect: "Bows / slings: Shoot 6+, 6/6\"; others get +1 Armour vs it." },
      { id: "savages", name: "Savages", cost: -1, conflicts: ["primitive-missiles"], effect: "Subject to Wild Charges." },
      { id: "young-warriors", name: "Young Warriors", cost: -1, effect: "Courage 5+." },
    ],
  },
  {
    id: "militia", name: "Militia Rabble", cls: INFANTRY, base: 1, sp: 10,
    role: "Conscripts, zombies, frenzied cultists. Disposable bodies and bullet shields.",
    stats: { mov: '6"', arm: "1", atk: "8+", def: "6", sho: '6/6"' },
    special: ["None"],
    xenoPolicy: { type: "allowOnly", list: ["undead", "mechanoid", "demonic", "contagious", "hatred", "fearsome", "special-insertion", "stun-weapons"] },
    options: [
      { id: "mob", name: "Mob", cost: 1, sp: 15, effect: "15 SP, Shoot Value 6/12\"." },
      { id: "ravenous-horde", name: "Ravenous Horde", cost: 0, effect: "Lose Shoot, gain Attack 7+." },
    ],
  },
  {
    id: "greater-xeno", name: "Greater Xenomorphs", cls: INFANTRY, base: 4, sp: 5,
    role: "Alien queens, clawed bio-constructs, monsters. Usually single or reduced model units.",
    stats: { mov: '10"', arm: "4", atk: "3+", def: "6", sho: "—" },
    special: ["Open Order", "Ranger", "Wild Charge"],
    xenoPolicy: { type: "all" },
    options: [
      { id: "demolitions", name: "Demolitions", cost: 2, conflicts: ["high-powered-blades"], effect: "Halve enemy vehicle Armour in Attacks." },
      { id: "cunning", name: "Cunning", cost: 2, effect: "Defence Value becomes 5+." },
      { id: "high-powered-blades", name: "High-Powered Blades", cost: 1, conflicts: ["demolitions"], effect: "Enemy Armour counts 1 lower in Attacks." },
      { id: "ponderous", name: "Ponderous", cost: 1, conflicts: ["xeno-ranged"], effect: "Loses Wild Charge." },
      { id: "xeno-ranged", name: "Xenomorph Ranged Attack", cost: 2, conflicts: ["ponderous"], effect: "Loses Wild Charge, gains Shoot 6+ 5+/18\"." },
      { id: "xr-area", name: "Area Effect", cost: 1, requires: "xeno-ranged", effect: "Ranged attack ignores cover." },
      { id: "xr-ap", name: "Armour-Piercing (ranged)", cost: 1, requires: "xeno-ranged", conflicts: ["xr-at"], effect: "Enemy Armour 1 lower when Shooting." },
      { id: "xr-cqd", name: "Close Quarters Doctrine (ranged)", cost: -1, requires: "xeno-ranged", effect: "Ranged attack drops to 12\"." },
      { id: "xr-at", name: "Anti-Tank (ranged)", cost: 2, requires: "xeno-ranged", conflicts: ["xr-ap"], effect: "Halve enemy vehicle Armour when Shooting." },
    ],
  },
  {
    id: "lesser-xeno", name: "Lesser Xenomorphs", cls: INFANTRY, base: 2, sp: 5,
    role: "Fast, savage swarms. Insectoid, mammalian, mechanical, whatever bites.",
    stats: { mov: '12"', arm: "3", atk: "4+", def: "6", sho: "—" },
    special: ["Open Order", "Ranger", "Wild Charge"],
    xenoPolicy: { type: "all" },
    options: [
      { id: "cunning", name: "Cunning", cost: 2, effect: "Defence Value becomes 5+." },
      { id: "high-powered-blades", name: "High-Powered Blades", cost: 1, effect: "Enemy Armour counts 1 lower in Attacks." },
      { id: "swarm", name: "Swarm", cost: 2, sp: 10, effect: "10 SP, Attack Value 3+." },
      { id: "xeno-ranged", name: "Xenomorph Ranged Attack", cost: 2, effect: "Loses Wild Charge, gains Shoot 6+ 5+/18\"." },
      { id: "xr-area", name: "Area Effect", cost: 1, requires: "xeno-ranged", effect: "Ranged attack ignores cover." },
      { id: "xr-ap", name: "Armour-Piercing (ranged)", cost: 1, requires: "xeno-ranged", conflicts: ["xr-at"], effect: "Enemy Armour 1 lower when Shooting." },
      { id: "xr-cqd", name: "Close Quarters Doctrine (ranged)", cost: -1, requires: "xeno-ranged", effect: "Ranged attack drops to 12\"." },
      { id: "xr-at", name: "Anti-Tank (ranged)", cost: 2, requires: "xeno-ranged", conflicts: ["xr-ap"], effect: "Halve enemy vehicle Armour when Shooting." },
    ],
  },
  {
    id: "fighting-vehicle", name: "Fighting Vehicle", cls: VEHICLE, base: 6, sp: 5, heavy: true,
    role: "Tanks, armoured walkers, self-propelled guns. Centrepiece support for the infantry.",
    stats: { mov: '8"', arm: "6", atk: "6", def: "5+", sho: '4+/18"' },
    special: ["All-Terrain", "Anti-Tank", "Demolitions", "High-Powered Blades", "Line-Breaker", "Vehicle"],
    xenoPolicy: { type: "all" },
    options: [
      { id: "anti-personnel", name: "Anti-Personnel Specialism", cost: -1, effect: "Remove the Anti-Tank rule." },
      { id: "area-effect", name: "Area Effect", cost: 2, effect: "Shooting targets get no cover Armour bonus." },
      { id: "armour-piercing", name: "Armour-Piercing", cost: 1, effect: "Enemy Armour 1 lower when Shooting (not with Anti-Tank)." },
      { id: "artillery", name: "Artillery", cost: 2, conflicts: ["close-quarters"], effect: "Shoot Value 4+/48\", may use spotters." },
      { id: "close-quarters", name: "Close Quarters Doctrine", cost: -1, conflicts: ["artillery"], effect: "Shoot Value 4+/12\"." },
      { id: "combat-engineering", name: "Combat Engineering Vehicle", cost: 1, effect: "Attacked buildings only hit on 6." },
      { id: "indirect-fire", name: "Indirect Fire", cost: 1, requires: "artillery", effect: "Shoot at unseen targets via spotters." },
      { id: "light-armoured", name: "Light Armoured Vehicle", cost: -2, effect: "Armour -1, lose Demolitions and Line-Breaker." },
      { id: "green-crew", name: "Green Crew", cost: -1, conflicts: ["veteran-crew"], effect: "Shoot Value 5+." },
      { id: "veteran-crew", name: "Veteran Crew", cost: 2, conflicts: ["green-crew"], effect: "Move and fire with no penalty." },
      { id: "walker", name: "Walker", cost: 2, effect: "Movement -2\", Attack Value 4+, Storms defences." },
    ],
  },
  {
    id: "transport-vehicle", name: "Transport Vehicle", cls: VEHICLE, base: 4, sp: 5, heavy: true,
    role: "Carries infantry to where they are needed. Armoured, but soft to anti-tank fire.",
    stats: { mov: '10"', arm: "5", atk: "6", def: "6", sho: '5+/12"' },
    special: ["High-Powered Blades", "Transport (5)", "Vehicle"],
    xenoPolicy: { type: "all" },
    options: [
      { id: "all-terrain", name: "All-Terrain", cost: 1, effect: "No movement penalty in rough terrain." },
      { id: "armour-piercing", name: "Armour-Piercing", cost: 1, effect: "Enemy Armour 1 lower when Shooting." },
      { id: "transport-10", name: "Transport (10)", cost: 1, effect: "Carries a 10 SP unit (replaces Transport 5)." },
      { id: "line-breaker", name: "Line-Breaker", cost: 1, effect: "Crosses obstacles like a Fighting Vehicle." },
      { id: "green-crew", name: "Green Crew", cost: -1, effect: "Shoot Value 6/12\"." },
      { id: "walker", name: "Walker", cost: 2, effect: "Movement -2\", AV 4+, DV 5+, Storms defences." },
    ],
  },
  {
    id: "softskin-vehicle", name: "Soft-skin Vehicle", cls: VEHICLE, base: 2, sp: 5,
    role: "Scout cars, civilian trucks, technicals. Fast and fragile until you bolt guns on.",
    stats: { mov: '12"', arm: "3", atk: "6", def: "6", sho: '6/6"' },
    special: ["Vehicle"],
    xenoPolicy: { type: "except", list: ["psychic", "crusader"] },
    options: [
      { id: "all-terrain", name: "All-Terrain", cost: 1, effect: "No movement penalty in rough terrain." },
      { id: "civilian", name: "Civilian", cost: -1, conflicts: ["improvised-armour"], effect: "Armour 2." },
      { id: "improvised-armour", name: "Improvised Armour", cost: 1, conflicts: ["civilian"], effect: "Armour 4, Movement -2\"." },
      { id: "large-vehicle", name: "Large Vehicle", cost: 2, sp: 10, effect: "10 SP, Movement -2\"." },
      { id: "green-crew", name: "Green Crew", cost: -1, effect: "Courage 5+." },
      { id: "scythes", name: "Scythes", cost: 1, effect: "Attack Value 5+." },
      { id: "technical", name: "Technical", cost: 2, effect: "Shoot 6+, Shoot Value 5+/18\"." },
      { id: "tech-at", name: "Anti-Tank (technical)", cost: 1, requires: "technical", conflicts: ["tech-ap"], effect: "Halve enemy vehicle Armour when Shooting." },
      { id: "tech-ap", name: "Armour-Piercing (technical)", cost: 1, requires: "technical", conflicts: ["tech-at"], effect: "Enemy Armour 1 lower when Shooting." },
      { id: "tech-cqd", name: "Close Quarters Doctrine (technical)", cost: -1, requires: "technical", effect: "Shoot Value 5+/12\"." },
      { id: "tech-engulf", name: "Engulfing (technical)", cost: 1, requires: "technical", effect: "Targets get no cover benefit." },
      { id: "transport-5", name: "Transport (5)", cost: 1, conflicts: ["transport-10", "transport-15"], effect: "Carries a 5 SP unit." },
      { id: "transport-10", name: "Transport (10)", cost: 2, conflicts: ["transport-5", "transport-15"], effect: "Carries a 10 SP unit." },
      { id: "transport-15", name: "Transport (15)", cost: 2, conflicts: ["transport-5", "transport-10"], effect: "Carries a 15 SP unit, Movement -2\"." },
      { id: "walker", name: "Walker", cost: 2, effect: "Movement -2\", AV 4+, DV 5+, Storms defences." },
    ],
  },
];

const UNIT_BY_ID = Object.fromEntries(UNIT_TYPES.map((u) => [u.id, u]));

/* Xeno rules. flat cost, or tiers for variable-cost rules. */
const XENO_RULES = [
  { id: "boarding-shields", name: "Boarding Shields", cost: 2, effect: "Defence Value +1, and +1 Armour vs shooting." },
  { id: "brutal-leader", name: "Brutal Leader", cost: 1, effect: "Reroll Courage tests within 6\", but a model is executed." },
  { id: "cloaking-device", name: "Cloaking Device", cost: 3, effect: "Only targetable within 12\", +1 Armour vs shooting." },
  { id: "combat-medic", name: "Combat Medic", cost: 2, effect: "On 4+, reduce a Strength Point loss by one." },
  { id: "contagious", name: "Contagious", cost: 1, requiresAny: ["demonic", "undead"], infantryOnly: true, effect: "Infantry you wound may be infected." },
  { id: "crusader", name: "Crusader", tiers: [{ label: "Zealots", cost: 4 }, { label: "Worship a powerful alien", cost: 0 }], effect: "Religious zeal. Reroll certain tests." },
  { id: "demonic", name: "Demonic", cost: 0, effect: "Counts as a demon for relevant rules." },
  { id: "exploder", name: "Exploder", tiers: [{ label: "Small charge", cost: 1 }, { label: "Large charge", cost: 2 }], effect: "Detonates, harming nearby units." },
  { id: "fanatical-discipline", name: "Fanatical Discipline", cost: 2, effect: "Courage +1, up to 3+." },
  { id: "fearsome", name: "Fearsome", cost: 2, effect: "Forces enemy Courage tests." },
  { id: "fearful", name: "Fearful", cost: -1, effect: "Every Courage test is harder." },
  { id: "flying", name: "Flying", cost: 2, effect: "Moves over friends, enemies and terrain." },
  { id: "force-field", name: "Force Field", tiers: [{ label: "Class I", cost: 1 }, { label: "Class II", cost: 2 }, { label: "Class III", cost: 3 }], effect: "Absorbs incoming fire." },
  { id: "hatred", name: "Hatred", cost: 1, effect: "Better in combat against a chosen foe." },
  { id: "hive-mind", name: "Hive Mind", cost: 1, effect: "Shared psychic command links the unit." },
  { id: "immobile", name: "Immobile", cost: -2, effect: "Cannot Move or Attack, routs if forced to Retreat." },
  { id: "infiltrators", name: "Infiltrators", cost: 1, effect: "Redeploys forward before the game." },
  { id: "inspirational-leader", name: "Inspirational Leader", cost: 2, effect: "Reroll Courage tests within 6\"." },
  { id: "mechanoid", name: "Mechanoid", cost: 0, effect: "Machine unit. Ignores some effects." },
  { id: "mercenary", name: "Mercenary", cost: -1, effect: "Cheaper, but less reliable." },
  { id: "mono-molecular-blades", name: "Mono-Molecular Blades", cost: 2, effect: "High-tech melee weapons." },
  { id: "psychic", name: "Psychic", tiers: [{ label: "1 power", cost: 1 }, { label: "2 powers", cost: 2 }, { label: "3 powers", cost: 3 }, { label: "4 powers", cost: 4 }], effect: "Access to psychic powers." },
  { id: "psychic-hazards", name: "Psychic Hazards", cost: -1, requiresXeno: "psychic", effect: "Powers may backfire dangerously." },
  { id: "psychic-resistance", name: "Psychic Resistance", cost: 1, effect: "Resists enemy psychic powers." },
  { id: "psychic-species", name: "Psychic Species", tiers: [{ label: "Tier 1", cost: 1 }, { label: "Tier 2", cost: 2 }, { label: "Tier 3", cost: 3 }], requiresXeno: "psychic", effect: "Innately psychic across the unit." },
  { id: "regeneration", name: "Regeneration", cost: 1, effect: "On 7+, restore a lost Strength Point." },
  { id: "skimmer", name: "Skimmer", cost: 1, effect: "Ignores rough and impassable terrain." },
  { id: "slow", name: "Slow", cost: -1, effect: "Maximum Movement -2\"." },
  { id: "special-insertion", name: "Special Insertion", cost: 1, effect: "Deploys via teleport, drop or tunnel." },
  { id: "stabilised-weaponry", name: "Stabilised Weaponry", cost: 2, infantryOnly: true, effect: "Move and fire without penalty." },
  { id: "stun-weapons", name: "Stun Weapons", cost: 1, effect: "Less-lethal weapons that suppress." },
  { id: "teleport-jump", name: "Teleport Jump", cost: 1, effect: "Short blink move when activating." },
  { id: "unarmed", name: "Unarmed", cost: -1, effect: "No ranged weapon." },
  { id: "undead", name: "Undead", cost: 0, effect: "Reanimated. Ignores some effects." },
  { id: "unstable", name: "Unstable", cost: -2, effect: "May damage itself when it exerts." },
];
const XENO_BY_ID = Object.fromEntries(XENO_RULES.map((x) => [x.id, x]));

const COMMANDER_TABLES = {
  aggressive: {
    label: "Aggressive",
    blurb: "Geared towards engaging the enemy in Attacks.",
    traits: [
      { name: "Timid", rule: "The Commander's unit may not be given an Attack order." },
      { name: "Insipid", rule: "No Courage bonus to units within 12\"." },
      { name: "Attack, Attack, Attack!", rule: "Gains Wild Charge, or auto-passes Wild Charge tests." },
      { name: "Extreme Disciplinarian", rule: "Gains Brutal Leader free, range 12\"." },
      { name: "Brave", rule: "Ignores the effects of Fearsome opponents." },
      { name: "Fix Bayonets!", rule: "One unit within 12\" treats Attack as a free action." },
    ],
  },
  tactical: {
    label: "Tactical",
    blurb: "For troops that act a little more intelligently, when you like.",
    traits: [
      { name: "Indecisive", rule: "No +1 to ordered activations within 12\"." },
      { name: "Reactive", rule: "Subtract one from the Attacker / Defender roll." },
      { name: "Commanding", rule: "Reroll a failed Move, Attack or Shoot within 12\", once per turn." },
      { name: "Manoeuvres", rule: "One unit within 12\" treats Move as a free action." },
      { name: "Shooting Drill", rule: "One unit within 12\" treats Shoot as a free action." },
      { name: "Hold The Line!", rule: "One unit within 12\" may ignore a compulsory Wild Charge." },
    ],
  },
  strategic: {
    label: "Strategic",
    blurb: "For Commanders who point at arrows on maps.",
    traits: [
      { name: "Incompetent Paper Pusher", rule: "Your Detachment is 2 points smaller than it should be." },
      { name: "Half-Wit", rule: "After deployment, one unit may fail to arrive." },
      { name: "Wise", rule: "Add or subtract 1 from the Attacker / Defender roll." },
      { name: "Father To His Men", rule: "Reroll a Courage test within 12\", once per turn." },
      { name: "Unpredictable", rule: "Swap up to three units after the enemy deploys." },
      { name: "Logistician", rule: "Gain 2 extra points to spend on your Detachment." },
    ],
  },
  warlord: {
    label: "Warlord",
    blurb: "For Commanders who like holding a massive gun.",
    traits: [
      { name: "Runt", rule: "The Commander's unit rolls one fewer die to Attack and Shoot." },
      { name: "Craven", rule: "The Commander's unit takes -1 to all Courage tests." },
      { name: "Elite", rule: "Take one of Move, Shoot or Attack as an extra free action." },
      { name: "Strong-Willed", rule: "May not be targeted by enemy psychic powers." },
      { name: "Crack Shot", rule: "Reroll up to two failed hit dice when Shooting." },
      { name: "Champion", rule: "Reroll up to two failed hit dice in Attacks." },
    ],
  },
};

const BUDGET_PRESETS = [12, 18, 24, 30, 36];
const uid = () => Math.random().toString(36).slice(2, 9);

/* ---------------- calculation helpers ---------------- */

function optionCost(option, value) {
  return option.cost ?? 0;
}
function xenoCost(rule, value) {
  if (rule.tiers) return rule.tiers[typeof value === "number" ? value : 0].cost;
  return rule.cost ?? 0;
}
function unitPoints(unit) {
  const type = UNIT_BY_ID[unit.typeId];
  let pts = type.base;
  for (const [oid, v] of Object.entries(unit.options)) {
    const opt = type.options.find((o) => o.id === oid);
    if (opt) pts += optionCost(opt, v);
  }
  for (const [xid, v] of Object.entries(unit.xenos)) {
    const rule = XENO_BY_ID[xid];
    if (rule) pts += xenoCost(rule, v);
  }
  return pts;
}
function unitSP(unit) {
  const type = UNIT_BY_ID[unit.typeId];
  let sp = type.sp;
  for (const oid of Object.keys(unit.options)) {
    const opt = type.options.find((o) => o.id === oid);
    if (opt && opt.sp) sp = Math.max(sp, opt.sp);
  }
  return sp;
}
function unitLabel(unit, index) {
  if (unit.name && unit.name.trim()) return unit.name.trim();
  return `${UNIT_BY_ID[unit.typeId].name} ${index}`;
}

/* ---------------- small UI pieces ---------------- */

function StatStrip({ stats, sp, noAttack }) {
  const cells = [
    { k: "MOV", v: stats.mov },
    { k: "ARM", v: stats.arm },
    { k: "ATK", v: noAttack ? "—" : stats.atk },
    { k: "DEF", v: stats.def },
    { k: "SHO", v: stats.sho },
    { k: "SP", v: String(sp) },
  ];
  return (
    <div className="xr-stats">
      {cells.map((c) => (
        <div className="xr-stat" key={c.k}>
          <span className="xr-stat-k">{c.k}</span>
          <span className="xr-stat-v">{c.v}</span>
        </div>
      ))}
    </div>
  );
}

function CatalogCard({ type, onAdd }) {
  return (
    <button className="xr-cat" onClick={() => onAdd(type.id)} aria-label={`Add ${type.name}`}>
      <div className="xr-cat-top">
        <span className="xr-cat-name">{type.name}</span>
        <span className={`xr-cost ${type.cls === VEHICLE ? "veh" : "inf"}`}>{type.base}</span>
      </div>
      <p className="xr-cat-role">{type.role}</p>
      <StatStrip stats={type.stats} sp={type.sp} noAttack={type.noAttack} />
      <span className="xr-cat-add"><Plus size={14} strokeWidth={2.4} /> Add to force</span>
    </button>
  );
}

function OptionRow({ option, active, disabled, reason, onToggle }) {
  const sign = option.cost > 0 ? `+${option.cost}` : `${option.cost}`;
  return (
    <button
      className={`xr-opt ${active ? "on" : ""} ${disabled ? "off" : ""}`}
      onClick={() => !disabled && onToggle(option.id)}
      disabled={disabled}
      title={disabled ? reason : option.effect}
    >
      <span className="xr-opt-box">{active ? <Check size={13} strokeWidth={3} /> : null}</span>
      <span className="xr-opt-body">
        <span className="xr-opt-name">{option.name}</span>
        <span className="xr-opt-eff">{disabled ? reason : option.effect}</span>
      </span>
      <span className={`xr-opt-cost ${option.cost < 0 ? "neg" : option.cost === 0 ? "zero" : ""}`}>{option.cost === 0 ? "0" : sign}</span>
    </button>
  );
}

function XenoRow({ rule, active, tierValue, disabled, reason, onToggle, onTier }) {
  const cost = active ? xenoCost(rule, tierValue) : (rule.tiers ? rule.tiers[0].cost : rule.cost);
  const sign = cost > 0 ? `+${cost}` : `${cost}`;
  return (
    <div className={`xr-xeno ${active ? "on" : ""} ${disabled ? "off" : ""}`}>
      <button
        className="xr-xeno-main"
        onClick={() => !disabled && onToggle(rule.id)}
        disabled={disabled}
        title={disabled ? reason : rule.effect}
      >
        <span className="xr-opt-box">{active ? <Check size={13} strokeWidth={3} /> : null}</span>
        <span className="xr-opt-body">
          <span className="xr-opt-name">{rule.name}</span>
          <span className="xr-opt-eff">{disabled ? reason : rule.effect}</span>
        </span>
        <span className={`xr-opt-cost ${cost < 0 ? "neg" : cost === 0 ? "zero" : ""}`}>{cost === 0 ? "0" : sign}</span>
      </button>
      {active && rule.tiers ? (
        <div className="xr-tier">
          {rule.tiers.map((t, i) => (
            <button
              key={i}
              className={`xr-tier-btn ${(tierValue ?? 0) === i ? "on" : ""}`}
              onClick={() => onTier(rule.id, i)}
            >
              {t.label} <em>{t.cost > 0 ? `+${t.cost}` : t.cost}</em>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ---------------- unit card ---------------- */

function UnitCard({ unit, index, expanded, onToggleExpand, onPatch, onDuplicate, onRemove, onSetCommander, issues }) {
  const type = UNIT_BY_ID[unit.typeId];
  const pts = unitPoints(unit);
  const sp = unitSP(unit);
  const overCost = pts > 12 || pts < 1;

  const activeOptionChips = type.options.filter((o) => unit.options[o.id] != null);
  const activeXenoChips = Object.keys(unit.xenos).map((id) => XENO_BY_ID[id]).filter(Boolean);

  /* option toggle with conflict + dependency handling */
  function toggleOption(oid) {
    const opt = type.options.find((o) => o.id === oid);
    const next = { ...unit.options };
    if (next[oid] != null) {
      delete next[oid];
      // clear anything that required this option
      for (const o of type.options) if (o.requires === oid) delete next[o.id];
    } else {
      next[oid] = true;
      if (opt.conflicts) for (const c of opt.conflicts) {
        delete next[c];
        for (const o of type.options) if (o.requires === c) delete next[o.id];
      }
    }
    onPatch(unit.id, { options: next });
  }

  function toggleXeno(xid) {
    const next = { ...unit.xenos };
    if (next[xid] != null) {
      delete next[xid];
      for (const r of XENO_RULES) if (r.requiresXeno === xid) delete next[r.id];
    } else {
      next[xid] = XENO_BY_ID[xid].tiers ? 0 : true;
    }
    onPatch(unit.id, { xenos: next });
  }
  function setXenoTier(xid, i) {
    onPatch(unit.id, { xenos: { ...unit.xenos, [xid]: i } });
  }

  /* which xeno rules are eligible for this unit */
  function xenoState(rule) {
    const p = type.xenoPolicy;
    if (p.type === "allowOnly" && !p.list.includes(rule.id)) return { hidden: true };
    if (p.type === "except" && p.list.includes(rule.id)) return { hidden: true };
    if (rule.infantryOnly && type.cls !== INFANTRY) return { disabled: true, reason: "Infantry only" };
    if (rule.requiresXeno && unit.xenos[rule.requiresXeno] == null)
      return { disabled: true, reason: `Needs ${XENO_BY_ID[rule.requiresXeno].name}` };
    if (rule.requiresAny && !rule.requiresAny.some((r) => unit.xenos[r] != null))
      return { disabled: true, reason: `Needs ${rule.requiresAny.map((r) => XENO_BY_ID[r].name).join(" or ")}` };
    return {};
  }
  const eligibleXenos = XENO_RULES.map((r) => ({ r, st: xenoState(r) })).filter((x) => !x.st.hidden);

  return (
    <div className={`xr-unit ${type.cls} ${unit.isCommander ? "cmd" : ""} ${issues.length ? "flag" : ""}`}>
      <div className="xr-unit-head">
        <button
          className={`xr-crown ${unit.isCommander ? "on" : ""}`}
          onClick={() => onSetCommander(unit.id)}
          title={unit.isCommander ? "Detachment Commander" : "Make Commander"}
          aria-pressed={unit.isCommander}
        >
          <Crown size={16} strokeWidth={2.2} />
        </button>
        <input
          className="xr-name"
          value={unit.name}
          placeholder={`${type.name} ${index}`}
          onChange={(e) => onPatch(unit.id, { name: e.target.value })}
          aria-label="Unit name"
        />
        <span className={`xr-pts ${overCost ? "bad" : ""}`}>{pts}<small>pts</small></span>
        <div className="xr-unit-actions">
          <button onClick={() => onDuplicate(unit.id)} title="Duplicate"><Copy size={15} /></button>
          <button onClick={() => onRemove(unit.id)} title="Remove" className="del"><Trash2 size={15} /></button>
          <button className={`xr-chev ${expanded ? "open" : ""}`} onClick={() => onToggleExpand(unit.id)} title="Configure">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <div className="xr-unit-sub">
        <span className="xr-type-tag">{type.cls === VEHICLE ? <Truck size={12} /> : <Users size={12} />} {type.name}</span>
        <StatStrip stats={type.stats} sp={sp} noAttack={type.noAttack} />
      </div>

      {issues.length ? (
        <div className="xr-unit-issues">
          {issues.map((m, i) => <span key={i}><AlertTriangle size={12} /> {m}</span>)}
        </div>
      ) : null}

      {!expanded && (activeOptionChips.length > 0 || activeXenoChips.length > 0) ? (
        <div className="xr-chips">
          {activeOptionChips.map((o) => <span className="xr-chip" key={o.id}>{o.name}</span>)}
          {activeXenoChips.map((x) => <span className="xr-chip xeno" key={x.id}>{x.name}</span>)}
        </div>
      ) : null}

      {expanded ? (
        <div className="xr-config">
          {unit.isCommander ? (
            <div className="xr-cmd-block">
              <div className="xr-cmd-label"><Crown size={13} /> Command style <span>free, one trait</span></div>
              <div className="xr-cmd-tables">
                {Object.entries(COMMANDER_TABLES).map(([key, t]) => (
                  <button
                    key={key}
                    className={`xr-cmd-tab ${unit.traitTable === key ? "on" : ""}`}
                    onClick={() => onPatch(unit.id, { traitTable: key, traitIndex: null })}
                    title={t.blurb}
                  >{t.label}</button>
                ))}
              </div>
              {unit.traitTable ? (
                <div className="xr-trait-pick">
                  <select
                    className="xr-select"
                    value={unit.traitIndex ?? ""}
                    onChange={(e) => onPatch(unit.id, { traitIndex: e.target.value === "" ? null : Number(e.target.value) })}
                  >
                    <option value="">Choose a trait…</option>
                    {COMMANDER_TABLES[unit.traitTable].traits.map((tr, i) => (
                      <option key={i} value={i}>{i + 1}. {tr.name}</option>
                    ))}
                  </select>
                  <button
                    className="xr-roll"
                    onClick={() => onPatch(unit.id, { traitIndex: Math.floor(Math.random() * 6) })}
                    title="Roll a random trait"
                  ><Dices size={15} /> Roll</button>
                </div>
              ) : null}
              {unit.traitTable && unit.traitIndex != null ? (
                <p className="xr-trait-text">
                  <strong>{COMMANDER_TABLES[unit.traitTable].traits[unit.traitIndex].name}.</strong>{" "}
                  {COMMANDER_TABLES[unit.traitTable].traits[unit.traitIndex].rule}
                </p>
              ) : null}
            </div>
          ) : null}

          {type.special && type.special[0] !== "None" ? (
            <p className="xr-special"><span>Special</span> {type.special.join(", ")}</p>
          ) : null}

          <div className="xr-sec-label">Options</div>
          <div className="xr-opts">
            {type.options.map((o) => {
              const requiresMissing = o.requires && unit.options[o.requires] == null;
              return (
                <OptionRow
                  key={o.id}
                  option={o}
                  active={unit.options[o.id] != null}
                  disabled={requiresMissing}
                  reason={requiresMissing ? `Needs ${type.options.find((x) => x.id === o.requires).name}` : ""}
                  onToggle={toggleOption}
                />
              );
            })}
          </div>

          <div className="xr-sec-label">Xeno rules</div>
          <div className="xr-opts">
            {eligibleXenos.map(({ r, st }) => (
              <XenoRow
                key={r.id}
                rule={r}
                active={unit.xenos[r.id] != null}
                tierValue={unit.xenos[r.id]}
                disabled={!!st.disabled}
                reason={st.reason}
                onToggle={toggleXeno}
                onTier={setXenoTier}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

/* ---------------- main app ---------------- */

export default function App() {
  const [forceName, setForceName] = useState("");
  const [budget, setBudget] = useState(24);
  const [units, setUnits] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [catalogOpen, setCatalogOpen] = useState(false); // mobile drawer
  const [copied, setCopied] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const forceEndRef = useRef(null);

  const minUnits = Math.max(1, Math.round((budget / 24) * 3));
  const maxUnits = Math.max(minUnits, Math.floor((budget / 24) * 10));
  const heavyCap = Math.floor(budget / 18);
  const vehPointCap = budget / 2;

  function addUnit(typeId) {
    const u = { id: uid(), typeId, name: "", isCommander: false, traitTable: null, traitIndex: null, options: {}, xenos: {} };
    if (units.length === 0) u.isCommander = true; // first unit defaults to Commander
    setUnits((prev) => [...prev, u]);
    setExpandedId(u.id);
    setCatalogOpen(false);
    setTimeout(() => forceEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }), 60);
  }
  function patchUnit(id, patch) {
    setUnits((prev) => prev.map((u) => (u.id === id ? { ...u, ...patch } : u)));
  }
  function duplicateUnit(id) {
    setUnits((prev) => {
      const i = prev.findIndex((u) => u.id === id);
      const src = prev[i];
      const copy = { ...src, id: uid(), isCommander: false, name: src.name ? `${src.name} (copy)` : "" };
      const next = [...prev];
      next.splice(i + 1, 0, copy);
      return next;
    });
  }
  function removeUnit(id) {
    setUnits((prev) => prev.filter((u) => u.id !== id));
  }
  function setCommander(id) {
    setUnits((prev) => prev.map((u) => ({ ...u, isCommander: u.id === id ? !u.isCommander : false })));
  }
  function toggleExpand(id) {
    setExpandedId((cur) => (cur === id ? null : id));
  }
  function clearAll() {
    setUnits([]);
    setExpandedId(null);
  }

  const total = useMemo(() => units.reduce((s, u) => s + unitPoints(u), 0), [units]);
  const vehiclePoints = useMemo(
    () => units.filter((u) => UNIT_BY_ID[u.typeId].cls === VEHICLE).reduce((s, u) => s + unitPoints(u), 0),
    [units]
  );
  const heavyVehicleCount = units.filter((u) => UNIT_BY_ID[u.typeId].heavy).length;

  /* per-unit issue map */
  const unitIssues = useMemo(() => {
    const map = {};
    units.forEach((u) => {
      const arr = [];
      const p = unitPoints(u);
      if (p > 12) arr.push("Over the 12 point per-unit cap");
      if (p < 1) arr.push("Below the 1 point minimum");
      map[u.id] = arr;
    });
    return map;
  }, [units]);

  /* detachment-level checks */
  const checks = useMemo(() => {
    const list = [];
    const commanders = units.filter((u) => u.isCommander).length;
    list.push({
      ok: commanders === 1,
      level: "error",
      label: commanders === 1 ? "One Commander designated" :
        commanders === 0 ? "Designate one unit as Commander" : "Only one Commander allowed",
    });
    list.push({
      ok: total <= budget,
      level: "error",
      label: total <= budget ? `Within budget (${total} / ${budget})` : `Over budget by ${total - budget}`,
    });
    list.push({
      ok: units.length >= minUnits && units.length <= maxUnits,
      level: "error",
      label: units.length < minUnits ? `Field at least ${minUnits} units` :
        units.length > maxUnits ? `No more than ${maxUnits} units` : `Unit count fine (${units.length})`,
    });
    list.push({
      ok: heavyVehicleCount <= heavyCap,
      level: "error",
      label: heavyVehicleCount <= heavyCap
        ? `Fighting / Transport limit fine (${heavyVehicleCount} of ${heavyCap})`
        : `Too many Fighting / Transport vehicles (max ${heavyCap})`,
    });
    list.push({
      ok: vehiclePoints <= vehPointCap,
      level: "warn",
      label: vehiclePoints <= vehPointCap
        ? "Vehicles within half your points"
        : `Vehicles exceed half your points (${vehiclePoints} of ${vehPointCap})`,
    });
    const badUnits = Object.values(unitIssues).filter((a) => a.length).length;
    if (badUnits) list.push({ ok: false, level: "error", label: `${badUnits} unit(s) outside the 1 to 12 point range` });
    return list;
  }, [units, total, budget, minUnits, maxUnits, heavyCap, heavyVehicleCount, vehiclePoints, vehPointCap, unitIssues]);

  const errors = checks.filter((c) => !c.ok && c.level === "error").length;
  const warns = checks.filter((c) => !c.ok && c.level === "warn").length;
  const ready = errors === 0 && units.length > 0;

  const pct = budget > 0 ? Math.min(100, (total / budget) * 100) : 0;
  const gaugeState = total > budget ? "over" : pct > 90 ? "near" : "ok";
  const remaining = budget - total;

  function exportText() {
    const lines = [];
    lines.push(`${forceName || "Untitled Detachment"} — ${budget} pts`);
    const cmd = units.find((u) => u.isCommander);
    if (cmd) {
      const ci = units.filter((x) => x.typeId === cmd.typeId).indexOf(cmd) + 1;
      let c = `Commander: ${unitLabel(cmd, ci)}`;
      if (cmd.traitTable && cmd.traitIndex != null) {
        const t = COMMANDER_TABLES[cmd.traitTable];
        c += ` (${t.label} trait: ${t.traits[cmd.traitIndex].name})`;
      }
      lines.push(c);
    }
    lines.push("");
    const typeCounters = {};
    units.forEach((u) => {
      const type = UNIT_BY_ID[u.typeId];
      typeCounters[u.typeId] = (typeCounters[u.typeId] || 0) + 1;
      const label = unitLabel(u, typeCounters[u.typeId]);
      lines.push(`${label} — ${type.name}, ${unitPoints(u)} pts, SP ${unitSP(u)}${u.isCommander ? ", Commander" : ""}`);
      const opts = type.options.filter((o) => u.options[o.id] != null).map((o) => o.name);
      if (opts.length) lines.push(`   Options: ${opts.join(", ")}`);
      const xs = Object.keys(u.xenos).map((id) => {
        const r = XENO_BY_ID[id];
        if (r.tiers) return `${r.name} (${r.tiers[u.xenos[id] ?? 0].label})`;
        return r.name;
      });
      if (xs.length) lines.push(`   Xeno: ${xs.join(", ")}`);
    });
    lines.push("");
    const vehPct = total > 0 ? Math.round((vehiclePoints / Math.max(budget, 1)) * 100) : 0;
    lines.push(`Total: ${total} / ${budget} pts, ${units.length} units, vehicles ${vehiclePoints} pts (${vehPct}%)`);
    const text = lines.join("\n");
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }).catch(() => {
      setCopied(false);
    });
  }

  const infantryTypes = UNIT_TYPES.filter((t) => t.cls === INFANTRY);
  const vehicleTypes = UNIT_TYPES.filter((t) => t.cls === VEHICLE);

  return (
    <div className="xr-app">
      <style>{CSS}</style>

      <header className="xr-header">
        <div className="xr-brand">
          <div className="xr-logo">XR</div>
          <div className="xr-brand-txt">
            <span className="xr-title">XENOS RAMPANT</span>
            <span className="xr-subtitle">Force Builder</span>
          </div>
        </div>

        <input
          className="xr-force-name"
          value={forceName}
          placeholder="Name your Detachment"
          onChange={(e) => setForceName(e.target.value)}
          aria-label="Detachment name"
        />

        <div className="xr-gauge-wrap">
          <div className="xr-gauge-top">
            <div className="xr-budget-presets">
              {BUDGET_PRESETS.map((b) => (
                <button key={b} className={`xr-bp ${budget === b ? "on" : ""}`} onClick={() => setBudget(b)}>{b}</button>
              ))}
              <input
                className="xr-bp-input"
                type="number" min={6} max={120} value={budget}
                onChange={(e) => setBudget(Math.max(1, Number(e.target.value) || 0))}
                aria-label="Custom budget"
              />
              <span className="xr-bp-unit">pts</span>
            </div>
            <div className={`xr-gauge-read ${gaugeState}`}>
              <strong>{total}</strong> / {budget}
              <span className="xr-rem">
                {remaining >= 0 ? `${remaining} left` : `${Math.abs(remaining)} over`}
              </span>
            </div>
          </div>
          <div className={`xr-gauge ${gaugeState}`}>
            <div className="xr-gauge-fill" style={{ width: `${pct}%` }} />
            <div className="xr-gauge-ticks">
              {Array.from({ length: 11 }).map((_, i) => <span key={i} />)}
            </div>
          </div>
          <div className="xr-gauge-meta">
            <span>{units.length} / {maxUnits} units</span>
            <button className={`xr-status ${ready ? "ready" : errors ? "err" : "warn"}`} onClick={() => setShowChecklist((s) => !s)}>
              {ready ? <><Check size={13} /> Ready</> :
                errors ? <><AlertTriangle size={13} /> {errors} to fix</> :
                  <><Info size={13} /> {warns} note{warns === 1 ? "" : "s"}</>}
              <ChevronDown size={13} className={showChecklist ? "flip" : ""} />
            </button>
          </div>

          {showChecklist ? (
            <div className="xr-checklist">
              {checks.map((c, i) => (
                <div key={i} className={`xr-check ${c.ok ? "ok" : c.level}`}>
                  {c.ok ? <Check size={13} /> : c.level === "warn" ? <Info size={13} /> : <AlertTriangle size={13} />}
                  {c.label}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <div className="xr-main">
        {/* Catalog rail */}
        <aside className={`xr-catalog ${catalogOpen ? "open" : ""}`}>
          <div className="xr-cat-head">
            <span>Add units</span>
            <button className="xr-cat-close" onClick={() => setCatalogOpen(false)} aria-label="Close"><X size={18} /></button>
          </div>
          <div className="xr-cat-scroll">
            <div className="xr-cat-group">Infantry</div>
            {infantryTypes.map((t) => <CatalogCard key={t.id} type={t} onAdd={addUnit} />)}
            <div className="xr-cat-group">Vehicles</div>
            {vehicleTypes.map((t) => <CatalogCard key={t.id} type={t} onAdd={addUnit} />)}
          </div>
        </aside>

        {/* Force */}
        <main className="xr-force">
          {units.length === 0 ? (
            <div className="xr-empty">
              <div className="xr-empty-mark">+</div>
              <h2>Build a Detachment</h2>
              <p>Standard games run to 24 points and 3 to 8 units. Pick a unit type from the left to drop your first unit onto the roster. The first one you add becomes your Commander.</p>
              <button className="xr-empty-cta" onClick={() => setCatalogOpen(true)}>Open the unit list</button>
            </div>
          ) : (
            <>
              <div className="xr-force-head">
                <h2>{forceName || "Your Detachment"}</h2>
                <div className="xr-force-tools">
                  <button onClick={clearAll} className="xr-ghost"><RotateCcw size={14} /> Clear</button>
                  <button onClick={exportText} className="xr-export">
                    {copied ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy list</>}
                  </button>
                </div>
              </div>
              {units.map((u, idx) => {
                const typeIndex = units.slice(0, idx + 1).filter((x) => x.typeId === u.typeId).length;
                return (
                  <UnitCard
                    key={u.id}
                    unit={u}
                    index={typeIndex}
                    expanded={expandedId === u.id}
                    onToggleExpand={toggleExpand}
                    onPatch={patchUnit}
                    onDuplicate={duplicateUnit}
                    onRemove={removeUnit}
                    onSetCommander={setCommander}
                    issues={unitIssues[u.id] || []}
                  />
                );
              })}
              <div ref={forceEndRef} />
            </>
          )}
        </main>
      </div>

      {/* Mobile add button */}
      <button className="xr-fab" onClick={() => setCatalogOpen(true)} aria-label="Add unit">
        <Plus size={24} strokeWidth={2.6} />
      </button>
    </div>
  );
}

/* ---------------- styles ---------------- */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap');

.xr-app{
  --carbon:#161B22; --ink:#1d2630; --canvas:#E6E9ED; --panel:#FFFFFF;
  --line:#CCD3DB; --line2:#DDE2E8; --muted:#5d6b78; --faint:#8893a0;
  --plasma:#0E8F8C; --plasma-soft:#d7efed; --amber:#C57A00; --amber-soft:#fbeccd;
  --alert:#D43B2E; --alert-soft:#fbe1de; --gold:#C99A2E;
  --font-d:'Chakra Petch',system-ui,sans-serif;
  --font-b:'Inter',system-ui,sans-serif;
  --font-m:'JetBrains Mono',ui-monospace,monospace;
  font-family:var(--font-b); color:var(--ink); background:var(--canvas);
  min-height:100vh; line-height:1.45; -webkit-font-smoothing:antialiased;
}
.xr-app *{box-sizing:border-box;}
.xr-app button{font-family:inherit; cursor:pointer; border:none; background:none; color:inherit;}
.xr-app input,.xr-app select{font-family:inherit;}
.xr-app :focus-visible{outline:2px solid var(--plasma); outline-offset:2px; border-radius:3px;}

/* header */
.xr-header{
  position:sticky; top:0; z-index:30; background:var(--carbon); color:#fff;
  padding:12px 18px; display:grid; gap:12px 20px;
  grid-template-columns:auto 1fr minmax(330px,440px); align-items:center;
  box-shadow:0 1px 0 rgba(255,255,255,.06), 0 6px 20px rgba(0,0,0,.22);
}
.xr-brand{display:flex; align-items:center; gap:11px;}
.xr-logo{
  width:40px; height:40px; display:grid; place-items:center; flex:0 0 auto;
  background:var(--plasma); color:#04201f; font-family:var(--font-d); font-weight:700;
  font-size:17px; letter-spacing:.5px; clip-path:polygon(0 0,100% 0,100% 78%,82% 100%,0 100%);
}
.xr-title{font-family:var(--font-d); font-weight:700; font-size:16px; letter-spacing:2.5px; display:block; line-height:1;}
.xr-subtitle{font-size:11px; letter-spacing:1px; color:#9fb0bd; text-transform:uppercase; display:block; margin-top:3px;}
.xr-force-name{
  background:#0e141a; border:1px solid #2a343f; color:#fff; border-radius:7px;
  padding:9px 13px; font-size:15px; font-weight:500; width:100%; max-width:340px;
}
.xr-force-name::placeholder{color:#69757f;}

/* gauge */
.xr-gauge-wrap{position:relative;}
.xr-gauge-top{display:flex; justify-content:space-between; align-items:flex-end; gap:10px; margin-bottom:6px;}
.xr-budget-presets{display:flex; align-items:center; gap:3px; flex-wrap:wrap;}
.xr-bp{
  font-family:var(--font-m); font-size:12px; color:#aeb9c4; padding:4px 8px; border-radius:5px;
  border:1px solid #2c3742;
}
.xr-bp.on{background:var(--plasma); color:#04201f; border-color:var(--plasma); font-weight:700;}
.xr-bp-input{
  width:48px; background:#0e141a; border:1px solid #2c3742; color:#fff; border-radius:5px;
  padding:4px 6px; font-family:var(--font-m); font-size:12px;
}
.xr-bp-unit{font-size:11px; color:#69757f;}
.xr-gauge-read{font-family:var(--font-m); font-size:13px; color:#cfd8e0; white-space:nowrap; text-align:right;}
.xr-gauge-read strong{font-size:20px; color:#fff;}
.xr-gauge-read.near strong{color:var(--amber);}
.xr-gauge-read.over strong{color:var(--alert);}
.xr-rem{display:block; font-size:11px; color:#8893a0; margin-top:1px;}
.xr-gauge-read.over .xr-rem{color:var(--alert);}

.xr-gauge{position:relative; height:14px; background:#0c1217; border-radius:8px; overflow:hidden; border:1px solid #2a343f;}
.xr-gauge-fill{position:absolute; inset:0 auto 0 0; background:var(--plasma); transition:width .28s cubic-bezier(.3,.8,.4,1); border-radius:7px;}
.xr-gauge.near .xr-gauge-fill{background:var(--amber);}
.xr-gauge.over .xr-gauge-fill{background:var(--alert);}
.xr-gauge-ticks{position:absolute; inset:0; display:flex; justify-content:space-between; padding:0 1px; pointer-events:none;}
.xr-gauge-ticks span{width:1px; background:rgba(255,255,255,.10);}

.xr-gauge-meta{display:flex; justify-content:space-between; align-items:center; margin-top:7px; font-size:12px; color:#9fb0bd;}
.xr-status{
  display:inline-flex; align-items:center; gap:5px; font-family:var(--font-d); font-weight:600;
  letter-spacing:.6px; font-size:12px; padding:4px 9px; border-radius:6px; text-transform:uppercase;
}
.xr-status.ready{background:var(--plasma-soft); color:#0a5a57;}
.xr-status.err{background:var(--alert-soft); color:#9c241a;}
.xr-status.warn{background:var(--amber-soft); color:#8a5600;}
.xr-status .flip{transform:rotate(180deg);}

.xr-checklist{
  position:absolute; right:0; top:calc(100% + 8px); width:min(380px,90vw); z-index:40;
  background:var(--panel); color:var(--ink); border:1px solid var(--line); border-radius:10px;
  padding:8px; box-shadow:0 12px 34px rgba(0,0,0,.28); display:grid; gap:4px;
}
.xr-check{display:flex; align-items:center; gap:8px; font-size:13px; padding:7px 9px; border-radius:7px;}
.xr-check svg{flex:0 0 auto;}
.xr-check.ok{color:#0a6360; background:var(--plasma-soft);}
.xr-check.error{color:#9c241a; background:var(--alert-soft);}
.xr-check.warn{color:#8a5600; background:var(--amber-soft);}

/* layout */
.xr-main{display:grid; grid-template-columns:320px 1fr; gap:18px; padding:18px; max-width:1320px; margin:0 auto; align-items:start;}

/* catalog */
.xr-catalog{position:sticky; top:150px;}
.xr-cat-head{display:flex; justify-content:space-between; align-items:center; padding:0 2px 9px;}
.xr-cat-head > span{font-family:var(--font-d); font-weight:600; letter-spacing:1.4px; text-transform:uppercase; font-size:13px; color:var(--muted);}
.xr-cat-close{display:none;}
.xr-cat-scroll{display:grid; gap:9px; max-height:calc(100vh - 188px); overflow-y:auto; padding:2px; padding-right:6px;}
.xr-cat-group{font-family:var(--font-d); font-size:11px; letter-spacing:1.6px; text-transform:uppercase; color:var(--faint); padding:8px 2px 1px; border-bottom:1px solid var(--line2); margin-bottom:1px;}
.xr-cat-group:first-child{padding-top:0;}
.xr-cat{
  display:block; width:100%; text-align:left; background:var(--panel); border:1px solid var(--line);
  border-radius:10px; padding:12px; transition:border-color .12s, transform .12s, box-shadow .12s;
}
.xr-cat:hover{border-color:var(--plasma); transform:translateY(-1px); box-shadow:0 5px 16px rgba(14,143,140,.13);}
.xr-cat-top{display:flex; justify-content:space-between; align-items:center; gap:8px;}
.xr-cat-name{font-family:var(--font-d); font-weight:600; font-size:15px; letter-spacing:.3px;}
.xr-cost{font-family:var(--font-m); font-weight:700; font-size:14px; padding:2px 9px; border-radius:6px; flex:0 0 auto;}
.xr-cost.inf{background:var(--plasma-soft); color:#0a5a57;}
.xr-cost.veh{background:var(--amber-soft); color:#8a5600;}
.xr-cat-role{font-size:12px; color:var(--muted); margin:7px 0 9px; line-height:1.4;}
.xr-cat-add{display:none; align-items:center; gap:5px; font-family:var(--font-d); font-size:12px; letter-spacing:.6px; color:var(--plasma); font-weight:600; margin-top:9px; text-transform:uppercase;}
.xr-cat:hover .xr-cat-add{display:inline-flex;}

/* stat strip */
.xr-stats{display:grid; grid-template-columns:repeat(6,1fr); gap:1px; background:var(--line2); border:1px solid var(--line2); border-radius:6px; overflow:hidden;}
.xr-stat{background:#f7f9fb; display:flex; flex-direction:column; align-items:center; padding:4px 2px;}
.xr-stat-k{font-family:var(--font-d); font-size:8.5px; letter-spacing:.6px; color:var(--faint); text-transform:uppercase;}
.xr-stat-v{font-family:var(--font-m); font-weight:700; font-size:12px; color:var(--ink); margin-top:1px;}

/* force column */
.xr-force{display:grid; gap:11px; align-content:start; min-height:60vh;}
.xr-force-head{display:flex; justify-content:space-between; align-items:center; gap:10px; padding:0 2px 2px;}
.xr-force-head h2{font-family:var(--font-d); font-weight:700; font-size:20px; letter-spacing:.4px; margin:0;}
.xr-force-tools{display:flex; gap:8px;}
.xr-ghost{display:inline-flex; align-items:center; gap:6px; font-size:13px; color:var(--muted); padding:8px 12px; border:1px solid var(--line); border-radius:8px; background:var(--panel);}
.xr-ghost:hover{border-color:var(--alert); color:var(--alert);}
.xr-export{display:inline-flex; align-items:center; gap:7px; font-family:var(--font-d); font-weight:600; letter-spacing:.6px; font-size:13px; color:#fff; background:var(--carbon); padding:9px 15px; border-radius:8px;}
.xr-export:hover{background:#0a3a39; box-shadow:0 4px 14px rgba(14,143,140,.3);}

/* empty */
.xr-empty{background:var(--panel); border:1.5px dashed var(--line); border-radius:14px; padding:48px 30px; text-align:center; margin-top:8px;}
.xr-empty-mark{width:58px; height:58px; margin:0 auto 16px; border-radius:14px; display:grid; place-items:center; background:var(--plasma-soft); color:var(--plasma); font-family:var(--font-d); font-weight:700; font-size:34px; line-height:1;}
.xr-empty h2{font-family:var(--font-d); font-size:23px; letter-spacing:.4px; margin:0 0 10px;}
.xr-empty p{color:var(--muted); max-width:460px; margin:0 auto 20px; font-size:14px;}
.xr-empty-cta{display:none;}

/* unit card */
.xr-unit{background:var(--panel); border:1px solid var(--line); border-left:4px solid var(--plasma); border-radius:11px; padding:12px 13px; transition:box-shadow .12s, border-color .12s;}
.xr-unit.vehicle{border-left-color:var(--amber);}
.xr-unit.cmd{border-left-color:var(--gold); box-shadow:0 0 0 1px rgba(201,154,46,.35) inset;}
.xr-unit.flag{border-color:var(--alert);}
.xr-unit-head{display:flex; align-items:center; gap:9px;}
.xr-crown{width:30px; height:30px; flex:0 0 auto; border-radius:7px; display:grid; place-items:center; color:var(--faint); border:1px solid var(--line2); transition:.12s;}
.xr-crown:hover{color:var(--gold); border-color:var(--gold);}
.xr-crown.on{background:var(--gold); color:#fff; border-color:var(--gold);}
.xr-name{flex:1 1 auto; min-width:0; font-family:var(--font-d); font-weight:600; font-size:16px; letter-spacing:.2px; border:none; padding:5px 6px; border-radius:6px; background:transparent;}
.xr-name:hover{background:#f2f5f8;}
.xr-name:focus{background:#f2f5f8;}
.xr-pts{font-family:var(--font-m); font-weight:700; font-size:18px; flex:0 0 auto; white-space:nowrap;}
.xr-pts small{font-size:10px; color:var(--faint); margin-left:2px; font-weight:500;}
.xr-pts.bad{color:var(--alert);}
.xr-unit-actions{display:flex; align-items:center; gap:1px; flex:0 0 auto;}
.xr-unit-actions button{width:30px; height:30px; display:grid; place-items:center; border-radius:7px; color:var(--faint);}
.xr-unit-actions button:hover{background:#f2f5f8; color:var(--ink);}
.xr-unit-actions .del:hover{background:var(--alert-soft); color:var(--alert);}
.xr-chev{transition:transform .18s;}
.xr-chev.open{transform:rotate(180deg);}
.xr-chev:hover{color:var(--plasma) !important;}

.xr-unit-sub{display:flex; align-items:center; gap:11px; margin-top:9px;}
.xr-type-tag{display:inline-flex; align-items:center; gap:5px; font-family:var(--font-d); font-size:11px; letter-spacing:.6px; text-transform:uppercase; color:var(--muted); flex:0 0 auto; white-space:nowrap;}
.xr-unit-sub .xr-stats{flex:1 1 auto; max-width:430px;}

.xr-unit-issues{display:flex; flex-wrap:wrap; gap:6px; margin-top:9px;}
.xr-unit-issues span{display:inline-flex; align-items:center; gap:5px; font-size:11.5px; color:#9c241a; background:var(--alert-soft); padding:4px 8px; border-radius:6px;}

.xr-chips{display:flex; flex-wrap:wrap; gap:5px; margin-top:9px;}
.xr-chip{font-size:11.5px; color:#0a5a57; background:var(--plasma-soft); padding:3px 8px; border-radius:5px; font-weight:500;}
.xr-chip.xeno{color:#6a3a86; background:#efe3f7;}

/* config */
.xr-config{margin-top:12px; border-top:1px solid var(--line2); padding-top:12px;}
.xr-special{font-size:12px; color:var(--muted); margin:0 0 12px;}
.xr-special span{font-family:var(--font-d); font-size:10px; letter-spacing:.8px; text-transform:uppercase; color:var(--faint); margin-right:6px;}
.xr-sec-label{font-family:var(--font-d); font-weight:600; font-size:11px; letter-spacing:1.4px; text-transform:uppercase; color:var(--muted); margin:4px 0 7px;}
.xr-opts{display:grid; grid-template-columns:repeat(auto-fill,minmax(238px,1fr)); gap:5px; margin-bottom:8px;}

.xr-opt,.xr-xeno-main{display:flex; align-items:flex-start; gap:9px; width:100%; text-align:left; padding:8px 10px; border:1px solid var(--line2); border-radius:8px; background:#fafbfc; transition:.1s;}
.xr-opt:hover,.xr-xeno-main:hover{border-color:var(--plasma); background:#fff;}
.xr-opt.on,.xr-xeno.on .xr-xeno-main{border-color:var(--plasma); background:var(--plasma-soft);}
.xr-opt.off,.xr-xeno.off .xr-xeno-main{opacity:.5; background:#f1f3f5; cursor:not-allowed;}
.xr-opt.off:hover,.xr-xeno.off .xr-xeno-main:hover{border-color:var(--line2); background:#f1f3f5;}
.xr-opt-box{width:17px; height:17px; flex:0 0 auto; border-radius:4px; border:1.5px solid var(--line); background:#fff; display:grid; place-items:center; color:#fff; margin-top:1px;}
.xr-opt.on .xr-opt-box,.xr-xeno.on .xr-opt-box{background:var(--plasma); border-color:var(--plasma);}
.xr-opt-body{flex:1 1 auto; min-width:0;}
.xr-opt-name{display:block; font-size:13px; font-weight:600; color:var(--ink); letter-spacing:.1px;}
.xr-opt-eff{display:block; font-size:11px; color:var(--muted); line-height:1.35; margin-top:1px;}
.xr-opt-cost{font-family:var(--font-m); font-weight:700; font-size:13px; flex:0 0 auto; color:#0a5a57; margin-top:1px;}
.xr-opt-cost.neg{color:var(--alert);}
.xr-opt-cost.zero{color:var(--faint);}

.xr-xeno{border-radius:8px;}
.xr-tier{display:flex; flex-wrap:wrap; gap:4px; padding:6px 0 2px 26px;}
.xr-tier-btn{font-size:11px; padding:4px 8px; border:1px solid var(--line); border-radius:6px; color:var(--muted); background:#fff;}
.xr-tier-btn em{font-family:var(--font-m); font-style:normal; color:var(--faint); margin-left:3px;}
.xr-tier-btn.on{background:var(--plasma); color:#fff; border-color:var(--plasma);}
.xr-tier-btn.on em{color:rgba(255,255,255,.8);}

/* commander block */
.xr-cmd-block{background:#fdf8ec; border:1px solid #efe2c2; border-radius:9px; padding:11px; margin-bottom:13px;}
.xr-cmd-label{display:flex; align-items:center; gap:6px; font-family:var(--font-d); font-weight:600; font-size:12px; letter-spacing:.8px; text-transform:uppercase; color:#8a6614;}
.xr-cmd-label span{font-family:var(--font-b); font-weight:400; text-transform:none; letter-spacing:0; color:#b08a3a; font-size:11px;}
.xr-cmd-tables{display:flex; flex-wrap:wrap; gap:5px; margin:9px 0;}
.xr-cmd-tab{font-family:var(--font-d); font-size:12px; font-weight:500; padding:5px 11px; border:1px solid #e3d2a8; border-radius:7px; color:#8a6614; background:#fff;}
.xr-cmd-tab.on{background:var(--gold); color:#fff; border-color:var(--gold);}
.xr-trait-pick{display:flex; gap:7px;}
.xr-select{flex:1 1 auto; padding:7px 9px; border:1px solid #e3d2a8; border-radius:7px; font-size:13px; background:#fff; color:var(--ink);}
.xr-roll{display:inline-flex; align-items:center; gap:6px; font-family:var(--font-d); font-weight:600; font-size:12px; padding:7px 12px; background:#8a6614; color:#fff; border-radius:7px;}
.xr-roll:hover{background:#6e5010;}
.xr-trait-text{font-size:12.5px; color:#5a4a22; margin:9px 0 0; line-height:1.45;}
.xr-trait-text strong{color:#8a6614;}

/* mobile fab + drawer */
.xr-fab{display:none; position:fixed; right:18px; bottom:18px; z-index:45; width:58px; height:58px; border-radius:50%; background:var(--plasma); color:#04201f; align-items:center; justify-content:center; box-shadow:0 8px 24px rgba(14,143,140,.45);}

@media (max-width:880px){
  .xr-header{grid-template-columns:1fr; gap:11px; padding:11px 14px;}
  .xr-force-name{max-width:none;}
  .xr-gauge-wrap{order:3;}
  .xr-checklist{left:0; right:auto;}
  .xr-main{grid-template-columns:1fr; padding:14px;}
  .xr-catalog{position:fixed; inset:0; top:auto; z-index:50; background:var(--canvas); border-radius:18px 18px 0 0; max-height:84vh; padding:16px 14px 22px; transform:translateY(110%); transition:transform .26s cubic-bezier(.3,.8,.4,1); box-shadow:0 -10px 40px rgba(0,0,0,.3);}
  .xr-catalog.open{transform:translateY(0);}
  .xr-cat-head{padding-bottom:12px;}
  .xr-cat-close{display:grid; place-items:center; width:34px; height:34px; border-radius:8px; color:var(--muted); background:var(--panel); border:1px solid var(--line);}
  .xr-cat-scroll{max-height:66vh;}
  .xr-cat-add{display:inline-flex;}
  .xr-fab{display:flex;}
  .xr-empty-cta{display:inline-flex; align-items:center; justify-content:center; font-family:var(--font-d); font-weight:600; letter-spacing:.6px; background:var(--plasma); color:#04201f; padding:11px 18px; border-radius:9px;}
  .xr-unit-sub{flex-direction:column; align-items:stretch; gap:7px;}
  .xr-unit-sub .xr-stats{max-width:none;}
  .xr-opts{grid-template-columns:1fr;}
}
@media (max-width:420px){
  .xr-stat-k{font-size:8px;}
  .xr-stat-v{font-size:11px;}
}

@media (prefers-reduced-motion:reduce){
  .xr-app *{transition:none !important;}
}
`;
