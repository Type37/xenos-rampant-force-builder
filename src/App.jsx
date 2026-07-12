import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
/* Icons: Phosphor (solid fills), bundled offline as inline SVG. One cohesive set. */
import icSword from "@iconify-icons/ph/sword-fill";
import icMove from "@iconify-icons/ph/arrow-fat-lines-right-fill";
import icShoot from "@iconify-icons/ph/crosshair-simple-fill";
import icFire from "@iconify-icons/ph/fire-fill";
import icShield from "@iconify-icons/ph/shield-fill";
import icArmour from "@iconify-icons/ph/shield-checkered-fill";
import icHeart from "@iconify-icons/ph/heart-fill";

import icInfantry from "@iconify-icons/ph/users-three-fill";
import icAlien from "@iconify-icons/game-icons/alien-bug";
import icTruck from "@iconify-icons/game-icons/apc";
/* badge/emblem icons offered when starting a detachment (Game-Icons, bundled) */
import giCrossedSwords from "@iconify-icons/game-icons/crossed-swords";
import giSpartan from "@iconify-icons/game-icons/spartan-helmet";
import giEagle from "@iconify-icons/game-icons/eagle-emblem";
import giCheckedShield from "@iconify-icons/game-icons/checked-shield";
import giSpikedShield from "@iconify-icons/game-icons/spiked-shield";
import giShieldEchoes from "@iconify-icons/game-icons/shield-echoes";
import giSkullCross from "@iconify-icons/game-icons/skull-crossed-bones";
import giDeathSkull from "@iconify-icons/game-icons/death-skull";
import giCrown from "@iconify-icons/game-icons/crown";
import giLaurel from "@iconify-icons/game-icons/laurel-crown";
import giWolf from "@iconify-icons/game-icons/wolf-head";
import giDragon from "@iconify-icons/game-icons/dragon-head";
import giAlien2 from "@iconify-icons/game-icons/alien-bug";
import giRobot from "@iconify-icons/game-icons/robot-golem";
import giTank from "@iconify-icons/game-icons/battle-tank";
import giRocket from "@iconify-icons/game-icons/rocket-thruster";
import giCrosshair from "@iconify-icons/game-icons/crosshair";
import giBiohazard from "@iconify-icons/game-icons/biohazard";
import giStars from "@iconify-icons/game-icons/star-formation";
import giFist from "@iconify-icons/game-icons/mailed-fist";
import giWings from "@iconify-icons/game-icons/angel-wings";
import giGears from "@iconify-icons/game-icons/gears";
import giRadar from "@iconify-icons/game-icons/radar-dish";
import giFlame from "@iconify-icons/game-icons/flame";
import giGunRose from "@iconify-icons/game-icons/gun-rose";
import giMeeple from "@iconify-icons/game-icons/meeple-army";
import giBear from "@iconify-icons/game-icons/bear-face";
import giAlienEgg from "@iconify-icons/game-icons/alien-egg";
import giAlienSkull from "@iconify-icons/game-icons/alien-skull";
import giAstronaut from "@iconify-icons/game-icons/astronaut-helmet";
import giBlaster from "@iconify-icons/game-icons/blaster";
import giLaserGun from "@iconify-icons/game-icons/laser-gun";
import giMechaHead from "@iconify-icons/game-icons/mecha-head";
import giTentacleStrike from "@iconify-icons/game-icons/tentacle-strike";
import giTentacleSkull from "@iconify-icons/game-icons/tentacles-skull";
import giHiveMind from "@iconify-icons/game-icons/hive-mind";
import giIonCannon from "@iconify-icons/game-icons/ion-cannon-blast";
import giEnergyShield from "@iconify-icons/game-icons/energy-shield";
import giOrbital from "@iconify-icons/game-icons/orbital-rays";
import giClaws from "@iconify-icons/game-icons/claws";
import giDreadnought from "@iconify-icons/game-icons/dreadnought";
import giHeavyFighter from "@iconify-icons/game-icons/heavy-fighter";
import giPlasmaBolt from "@iconify-icons/game-icons/plasma-bolt";
import giGhost from "@iconify-icons/game-icons/ghost";
import giRobotHelmet from "@iconify-icons/game-icons/robot-helmet";
import giTrackedRobot from "@iconify-icons/game-icons/tracked-robot";
import giBlackFlag from "@iconify-icons/game-icons/black-flag";
import giCloakDagger from "@iconify-icons/game-icons/cloak-dagger";
import giAllSeeingEye from "@iconify-icons/game-icons/all-seeing-eye";
import giPickelhaube from "@iconify-icons/game-icons/pickelhaube";
import giStalhelm from "@iconify-icons/game-icons/stahlhelm";
import giMoon from "@iconify-icons/game-icons/moon";
import giCompass from "@iconify-icons/game-icons/compass";
import giIronCross from "@iconify-icons/game-icons/iron-cross";
import giBalkenkreuz from "@iconify-icons/game-icons/balkenkreuz";
import giUsaFlag from "@iconify-icons/game-icons/usa-flag";
import giUnionJack from "@iconify-icons/game-icons/union-jack";
import giHammerSickle from "@iconify-icons/game-icons/hammer-sickle";
import giRiotShield from "@iconify-icons/game-icons/riot-shield";
import giCustodianHelmet from "@iconify-icons/game-icons/custodian-helmet";
import giMagicPalm from "@iconify-icons/game-icons/magic-palm";
import giMagicShield from "@iconify-icons/game-icons/magic-shield";
import giTemplarHeart from "@iconify-icons/game-icons/templar-heart";
import giSunglasses from "@iconify-icons/game-icons/sunglasses";
import giRat from "@iconify-icons/game-icons/rat";
import giCrackedAlienSkull from "@iconify-icons/game-icons/cracked-alien-skull";
import giDoubleDragon from "@iconify-icons/game-icons/double-dragon";
import giDragonSpiral from "@iconify-icons/game-icons/dragon-spiral";
import giMonsterGrasp from "@iconify-icons/game-icons/monster-grasp";
import giDeadEye from "@iconify-icons/game-icons/dead-eye";
import giCenturion from "@iconify-icons/game-icons/centurion-helmet";
import giElfHelm from "@iconify-icons/game-icons/elf-helmet";
import giKnightBanner from "@iconify-icons/game-icons/knight-banner";
import giMountedKnight from "@iconify-icons/game-icons/mounted-knight";
import giCrownedSkull from "@iconify-icons/game-icons/crowned-skull";
import giVisor from "@iconify-icons/game-icons/visored-helm";
import giBarbute from "@iconify-icons/game-icons/barbute";
import giCultist from "@iconify-icons/game-icons/cultist";
import giDaemon from "@iconify-icons/game-icons/gooey-daemon";
import giAlienFire from "@iconify-icons/game-icons/alien-fire";
import giAlienStare from "@iconify-icons/game-icons/alien-stare";
import giCyborg from "@iconify-icons/game-icons/cyborg-face";
import giExplosion from "@iconify-icons/game-icons/spiky-explosion";
import giPistols from "@iconify-icons/game-icons/crossed-pistols";
import giWolfHowl from "@iconify-icons/game-icons/wolf-howl";
import giRaven from "@iconify-icons/game-icons/raven";
import giBatMask from "@iconify-icons/game-icons/bat-mask";
import giSpider from "@iconify-icons/game-icons/spider-alt";
import giHydra from "@iconify-icons/game-icons/hydra";
import giTiger from "@iconify-icons/game-icons/tiger-head";
import miSkull from "@iconify-icons/mdi/skull-crossbones";
import miCrosshair from "@iconify-icons/mdi/crosshairs-gps";
import miCross from "@iconify-icons/mdi/cross-celtic";
import miKnight from "@iconify-icons/mdi/chess-knight";
import miAlien from "@iconify-icons/mdi/alien";
import tbMeteor from "@iconify-icons/tabler/meteor";
import tbSword from "@iconify-icons/tabler/sword";
import siGunicorn from "@iconify-icons/simple-icons/gunicorn";
import siDassault from "@iconify-icons/simple-icons/dassaultsystemes";
import siGitlab from "@iconify-icons/simple-icons/gitlab";
import faEmpire from "@iconify-icons/fa6-brands/empire";
import faJedi from "@iconify-icons/fa6-brands/jedi-order";
import faMando from "@iconify-icons/fa6-brands/mandalorian";
import faGitkraken from "@iconify-icons/fa6-brands/gitkraken";
import faSenate from "@iconify-icons/fa6-brands/galactic-senate";
import faJoomla from "@iconify-icons/fa6-brands/joomla";
import faPhoenix from "@iconify-icons/fa6-brands/phoenix-squadron";
import faWatchman from "@iconify-icons/fa6-brands/watchman-monitoring";
import faFulcrum from "@iconify-icons/fa6-brands/fulcrum";
import faFirstOrder from "@iconify-icons/fa6-brands/first-order";
import faOldRepublic from "@iconify-icons/fa6-brands/old-republic";
import faDragon from "@iconify-icons/fa6-solid/dragon";
import faSkull from "@iconify-icons/fa6-solid/skull";
import faKhanda from "@iconify-icons/fa6-solid/khanda";
import fiDragonfly from "@iconify-icons/file-icons/dragonflybsd";
import icShieldMoon from "@iconify-icons/ic/twotone-shield-moon";
import imWink from "@iconify-icons/iconamoon/winking-face-fill";
import cilCompress from "@iconify-icons/cil/compress";
import cilFunctions from "@iconify-icons/cil/functions-alt";
import cilFootball from "@iconify-icons/cil/football";
import cilDiamond from "@iconify-icons/cil/diamond";
import cilLifeRing from "@iconify-icons/cil/life-ring";
import cilSpa from "@iconify-icons/cil/spa";
import arAttack from "@iconify-icons/arcticons/attacktheblock";
import arChess from "@iconify-icons/arcticons/openchaoschess";
import arAiChat from "@iconify-icons/arcticons/ai-chat";
import arAaaaxy from "@iconify-icons/arcticons/aaaaxy-alt";
import arTriodos from "@iconify-icons/arcticons/triodos-bank";
import mdiCrossBolnisi from "@iconify-icons/mdi/cross-bolnisi";
import mdiCrosshairs from "@iconify-icons/mdi/crosshairs";
import hiDeath from "@iconify-icons/healthicons/death";
import hiDeathOutline from "@iconify-icons/healthicons/death-outline";
import hiSkull from "@iconify-icons/healthicons/skull";
import msSwords from "@iconify-icons/material-symbols/swords";
import icCrown from "@iconify-icons/ph/crown-simple-fill";
import icDice from "@iconify-icons/ph/dice-six-fill";
import icPrinter from "@iconify-icons/ph/printer-fill";
import icCopy from "@iconify-icons/ph/copy-fill";
import icTrash from "@iconify-icons/ph/trash-fill";
import icPlus from "@iconify-icons/ph/plus-bold";
import icX from "@iconify-icons/ph/x-bold";
import icCheck from "@iconify-icons/ph/check-bold";
import icWarn from "@iconify-icons/ph/warning-fill";
import icPlay from "@iconify-icons/ph/play-fill";
import icBack from "@iconify-icons/ph/arrow-left-bold";
import icReset from "@iconify-icons/ph/arrow-counter-clockwise-bold";
import icHouse from "@iconify-icons/ph/house-fill";
import icEdit from "@iconify-icons/ph/pencil-simple-fill";
import icCaret from "@iconify-icons/ph/caret-down-bold";
import icBook from "@iconify-icons/ph/book-open-fill";
import icGear from "@iconify-icons/ph/gear-six-fill";
import icImage from "@iconify-icons/ph/image-square-fill";
import icBolt from "@iconify-icons/ph/lightning-fill";
import icLink from "@iconify-icons/ph/link-bold";
import icExport from "@iconify-icons/ph/export-fill";
import icAlert from "@iconify-icons/ph/warning-circle-fill";
import icGrip from "@iconify-icons/ph/dots-six-vertical";
/* User-supplied stat icons: black knocked out, recoloured to ink, bundled. */
import icoAttack from "./assets/stat/attack.png";
import icoMove from "./assets/stat/move.png";
import icoShoot from "./assets/stat/shoot.png";
import icoCourage from "./assets/stat/courage.png";
import icoDefence from "./assets/stat/defence.png";
import icoArmour from "./assets/stat/armour.png";
import icoStrength from "./assets/stat/strength.png";

import {
  INFANTRY, VEHICLE, UNIT_TYPES, XENO_RULES, SPECIAL_RULES,
  COMMANDER_TABLES, BUDGET_PRESETS, UNIT_BY_ID, XENO_BY_ID,
  PSYCHIC_POWERS,
} from "./data.js";
import { SETTINGS } from "./premade.js";
/* settings flagged hidden or comingSoon are wired up but kept out of the preset picker */
const PRESET_SETTINGS = SETTINGS.filter((s) => !s.hidden && !s.comingSoon);
/* the rulebook's genre settings, offered as ready-made collections to save into */
const BOOK_COLLECTIONS = SETTINGS.filter((s) => !["anvil", "grimdark"].includes(s.id)).map((s) => s.name.split(":")[0]);
import { ALL_GENRES, randomName } from "./factions.js";
import { RULES_REFERENCE, RULES_CATS } from "./rules.js";
import { EMBLEM_EXTRA } from "./emblems-extra.js";

const FACTION_BASE = import.meta.env.BASE_URL;

/* ================================================================== *
 * XENOS RAMPANT: DETACHMENT BUILDER
 * Profiles transcribed from Xenos Rampant (Osprey Games, 2022).
 * Not an official product. Built by WarLore.
 * ================================================================== */

const mk = (data) => function Ic({ size, className, ...rest }) {
  const s = size || 20;
  return (
    <svg className={className} width={s} height={s}
      viewBox={`0 0 ${data.width || 256} ${data.height || 256}`}
      aria-hidden="true" dangerouslySetInnerHTML={{ __html: data.body }} {...rest} />
  );
};
const Sword = mk(icSword), Move = mk(icMove), Shoot = mk(icShoot), Fire = mk(icFire),
  Shield = mk(icShield), Armour = mk(icArmour), Heart = mk(icHeart),
  Infantry = mk(icInfantry), Alien = mk(icAlien), Truck = mk(icTruck),
  Crown = mk(icCrown), Dice = mk(icDice), Printer = mk(icPrinter), CopyIc = mk(icCopy),
  Trash = mk(icTrash), Plus = mk(icPlus), XIc = mk(icX), Check = mk(icCheck),
  Warn = mk(icWarn), Play = mk(icPlay), Back = mk(icBack), Reset = mk(icReset),
  House = mk(icHouse), Edit = mk(icEdit), Caret = mk(icCaret),
  Book = mk(icBook), Gear = mk(icGear), Image = mk(icImage), Bolt = mk(icBolt), LinkIc = mk(icLink),
  ShareIc = mk(icExport), Alert = mk(icAlert), Grip = mk(icGrip);

/* badge/emblem choices offered when starting a detachment; id is stored on the list.
   all monochrome, drawn in the ink colour, and shuffled for the picker below. */
const DETACH_ICON_LIST = [
  { id: "crossed-swords", C: mk(giCrossedSwords) }, { id: "spartan-helmet", C: mk(giSpartan) },
  { id: "eagle-emblem", C: mk(giEagle) }, { id: "checked-shield", C: mk(giCheckedShield) },
  { id: "skull-crossed-bones", C: mk(giSkullCross) }, { id: "death-skull", C: mk(giDeathSkull) },
  { id: "crown", C: mk(giCrown) }, { id: "laurel-crown", C: mk(giLaurel) },
  { id: "wolf-head", C: mk(giWolf) }, { id: "dragon-head", C: mk(giDragon) },
  { id: "battle-tank", C: mk(giTank) },
  { id: "crosshair", C: mk(giCrosshair) }, { id: "biohazard", C: mk(giBiohazard) },
  { id: "star-formation", C: mk(giStars) }, { id: "mailed-fist", C: mk(giFist) },
  { id: "angel-wings", C: mk(giWings) }, { id: "gears", C: mk(giGears) },
  { id: "radar-dish", C: mk(giRadar) }, { id: "flame", C: mk(giFlame) },
  { id: "gun-rose", C: mk(giGunRose) }, { id: "meeple-army", C: mk(giMeeple) },
  { id: "bear-face", C: mk(giBear) }, { id: "double-dragon", C: mk(giDoubleDragon) },
  { id: "dragon-spiral", C: mk(giDragonSpiral) }, { id: "monster-grasp", C: mk(giMonsterGrasp) },
  { id: "dead-eye", C: mk(giDeadEye) }, { id: "centurion-helmet", C: mk(giCenturion) },
  { id: "elf-helmet", C: mk(giElfHelm) }, { id: "knight-banner", C: mk(giKnightBanner) },
  { id: "mounted-knight", C: mk(giMountedKnight) }, { id: "crowned-skull", C: mk(giCrownedSkull) },
  { id: "visored-helm", C: mk(giVisor) }, { id: "barbute", C: mk(giBarbute) },
  { id: "alien-fire", C: mk(giAlienFire) }, { id: "alien-stare", C: mk(giAlienStare) },
  { id: "spiky-explosion", C: mk(giExplosion) },
  { id: "crossed-pistols", C: mk(giPistols) }, { id: "wolf-howl", C: mk(giWolfHowl) },
  { id: "raven", C: mk(giRaven) },
  { id: "spider-alt", C: mk(giSpider) }, { id: "hydra", C: mk(giHydra) },
  { id: "tiger-head", C: mk(giTiger) },
  { id: "spiked-shield", C: mk(giSpikedShield) }, { id: "shield-echoes", C: mk(giShieldEchoes) },
  { id: "rocket-thruster", C: mk(giRocket) }, { id: "cyborg-face", C: mk(giCyborg) },
  { id: "cultist", C: mk(giCultist) }, { id: "gooey-daemon", C: mk(giDaemon) },
  { id: "bat-mask", C: mk(giBatMask) },
  { id: "alien-egg", C: mk(giAlienEgg) }, { id: "alien-skull", C: mk(giAlienSkull) },
  { id: "astronaut-helmet", C: mk(giAstronaut) }, { id: "blaster", C: mk(giBlaster) },
  { id: "laser-gun", C: mk(giLaserGun) }, { id: "mecha-head", C: mk(giMechaHead) },
  { id: "tentacle-strike", C: mk(giTentacleStrike) }, { id: "tentacles-skull", C: mk(giTentacleSkull) },
  { id: "hive-mind", C: mk(giHiveMind) }, { id: "ion-cannon-blast", C: mk(giIonCannon) },
  { id: "energy-shield", C: mk(giEnergyShield) }, { id: "orbital-rays", C: mk(giOrbital) },
  { id: "claws", C: mk(giClaws) }, { id: "dreadnought", C: mk(giDreadnought) },
  { id: "heavy-fighter", C: mk(giHeavyFighter) }, { id: "plasma-bolt", C: mk(giPlasmaBolt) },
  { id: "ghost", C: mk(giGhost) }, { id: "robot-helmet", C: mk(giRobotHelmet) },
  { id: "tracked-robot", C: mk(giTrackedRobot) },
  { id: "black-flag", C: mk(giBlackFlag) }, { id: "cloak-dagger", C: mk(giCloakDagger) },
  { id: "all-seeing-eye", C: mk(giAllSeeingEye) },
  { id: "pickelhaube", C: mk(giPickelhaube) }, { id: "stahlhelm", C: mk(giStalhelm) },
  { id: "moon", C: mk(giMoon) }, { id: "compass", C: mk(giCompass) },
  { id: "iron-cross", C: mk(giIronCross) }, { id: "balkenkreuz", C: mk(giBalkenkreuz) },
  { id: "usa-flag", C: mk(giUsaFlag) }, { id: "union-jack", C: mk(giUnionJack) },
  { id: "hammer-sickle", C: mk(giHammerSickle) }, { id: "riot-shield", C: mk(giRiotShield) },
  { id: "custodian-helmet", C: mk(giCustodianHelmet) }, { id: "magic-palm", C: mk(giMagicPalm) },
  { id: "magic-shield", C: mk(giMagicShield) }, { id: "templar-heart", C: mk(giTemplarHeart) },
  { id: "sunglasses", C: mk(giSunglasses) }, { id: "rat", C: mk(giRat) },
  { id: "cracked-alien-skull", C: mk(giCrackedAlienSkull) },
  { id: "mdi-skull", C: mk(miSkull) }, { id: "mdi-crosshair", C: mk(miCrosshair) },
  { id: "mdi-cross", C: mk(miCross) }, { id: "mdi-knight", C: mk(miKnight) },
  { id: "mdi-alien", C: mk(miAlien) }, { id: "tb-meteor", C: mk(tbMeteor) },
  { id: "tb-sword", C: mk(tbSword) },
  { id: "si-gunicorn", C: mk(siGunicorn) }, { id: "si-dassault", C: mk(siDassault) },
  { id: "si-gitlab", C: mk(siGitlab) }, { id: "fa-empire", C: mk(faEmpire) },
  { id: "fa-jedi", C: mk(faJedi) }, { id: "fa-mando", C: mk(faMando) },
  { id: "fa-gitkraken", C: mk(faGitkraken) }, { id: "fa-senate", C: mk(faSenate) },
  { id: "fa-joomla", C: mk(faJoomla) }, { id: "fa-phoenix", C: mk(faPhoenix) },
  { id: "fa-watchman", C: mk(faWatchman) }, { id: "fa-fulcrum", C: mk(faFulcrum) },
  { id: "fa-firstorder", C: mk(faFirstOrder) }, { id: "fa-oldrepublic", C: mk(faOldRepublic) },
  { id: "fa-dragon", C: mk(faDragon) }, { id: "fa-skull", C: mk(faSkull) },
  { id: "fa-khanda", C: mk(faKhanda) },
  { id: "fi-dragonfly", C: mk(fiDragonfly) }, { id: "ic-shieldmoon", C: mk(icShieldMoon) },
  { id: "im-wink", C: mk(imWink) }, { id: "cil-compress", C: mk(cilCompress) },
  { id: "cil-functions", C: mk(cilFunctions) }, { id: "cil-football", C: mk(cilFootball) },
  { id: "cil-diamond", C: mk(cilDiamond) }, { id: "cil-lifering", C: mk(cilLifeRing) },
  { id: "cil-spa", C: mk(cilSpa) }, { id: "ar-attack", C: mk(arAttack) },
  { id: "ar-chess", C: mk(arChess) }, { id: "ar-aichat", C: mk(arAiChat) },
  { id: "ar-aaaaxy", C: mk(arAaaaxy) }, { id: "ar-triodos", C: mk(arTriodos) },
  { id: "mdi-crossbolnisi", C: mk(mdiCrossBolnisi) }, { id: "mdi-crosshairs", C: mk(mdiCrosshairs) },
  { id: "hi-death", C: mk(hiDeath) }, { id: "hi-deathoutline", C: mk(hiDeathOutline) },
  { id: "hi-skull", C: mk(hiSkull) }, { id: "ms-swords", C: mk(msSwords) },
  ...Object.entries(EMBLEM_EXTRA).map(([id, d]) => ({ id, C: mk(d) })),
];
const DETACH_ICON_BY_ID = Object.fromEntries(DETACH_ICON_LIST.map((i) => [i.id, i.C]));
const DETACH_ICON_IDS = DETACH_ICON_LIST.map((i) => i.id);
/* shuffled once at load so the picker shows them in a roughly random order */
const DETACH_ICONS = (() => {
  const a = [...DETACH_ICON_LIST];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
})();
const randomEmblemId = () => DETACH_ICON_IDS[Math.floor(Math.random() * DETACH_ICON_IDS.length)];

/* ── emblem picker: type + setting metadata ──────────────────────────────── */
const ICON_CATS = [
  { id: "all",      name: "All types",          short: "All",      col: null },
  { id: "combat",   name: "Blades & Combat",     short: "Combat",   col: "var(--sage)" },
  { id: "beasts",   name: "Beasts & Creatures",  short: "Beasts",   col: "var(--iris)" },
  { id: "skulls",   name: "Skulls & Death",       short: "Skulls",   col: "var(--rust)" },
  { id: "factions", name: "Faction Marks",        short: "Factions", col: "var(--brass)" },
  { id: "machines", name: "Machines & War",       short: "Machines", col: "var(--ink-2)" },
  { id: "arcane",   name: "Arcane & Cosmic",      short: "Arcane",   col: "var(--iris)" },
];
const ICON_SETTINGS = [
  { id: "all",      name: "All settings", short: "All",      col: null },
  { id: "scifi",    name: "Sci-Fi",       short: "Sci-Fi",   col: "#3A6A8A" },
  { id: "fantasy",  name: "Fantasy",      short: "Fantasy",  col: "var(--sage)" },
  { id: "horror",   name: "Horror",       short: "Horror",   col: "#8A3A3A" },
  { id: "military", name: "Military",     short: "Military", col: "var(--brass)" },
  { id: "lore",     name: "Pop / Lore",   short: "Lore",     col: "var(--iris)" },
];
const EMBLEM_META = {
  /* combat */
  "crossed-swords":      { cat: "combat",   setting: "fantasy" },
  "spartan-helmet":      { cat: "combat",   setting: "fantasy" },
  "eagle-emblem":        { cat: "combat",   setting: "military" },
  "checked-shield":      { cat: "combat",   setting: "fantasy" },
  "mailed-fist":         { cat: "combat",   setting: "fantasy" },
  "centurion-helmet":    { cat: "combat",   setting: "fantasy" },
  "elf-helmet":          { cat: "combat",   setting: "fantasy" },
  "knight-banner":       { cat: "combat",   setting: "fantasy" },
  "mounted-knight":      { cat: "combat",   setting: "fantasy" },
  "visored-helm":        { cat: "combat",   setting: "fantasy" },
  "barbute":             { cat: "combat",   setting: "fantasy" },
  "spiked-shield":       { cat: "combat",   setting: "fantasy" },
  "shield-echoes":       { cat: "combat",   setting: "fantasy" },
  "cloak-dagger":        { cat: "combat",   setting: "fantasy" },
  "templar-heart":       { cat: "factions", setting: "scifi",    name: "Templar Heart" },
  "mailed-first":        { cat: "combat",   setting: "fantasy" },
  "ic-shieldmoon":       { cat: "combat",   setting: "fantasy",  name: "Shield Moon" },
  "tb-sword":            { cat: "combat",   setting: "fantasy",  name: "Sword" },
  "ms-swords":           { cat: "combat",   setting: "fantasy",  name: "Crossed Swords (alt)" },
  "mdi-knight":          { cat: "combat",   setting: "fantasy",  name: "Chess Knight" },
  "ar-attack":           { cat: "combat",   setting: "fantasy",  name: "Attack" },
  "ar-chess":            { cat: "combat",   setting: "fantasy",  name: "Chess" },
  "crossed-pistols":     { cat: "combat",   setting: "military" },
  "gun-rose":            { cat: "combat",   setting: "military" },
  "meeple-army":         { cat: "combat",   setting: "military" },
  "black-flag":          { cat: "combat",   setting: "military" },
  "pickelhaube":         { cat: "combat",   setting: "military" },
  "stahlhelm":           { cat: "combat",   setting: "military" },
  "iron-cross":          { cat: "combat",   setting: "military" },
  "balkenkreuz":         { cat: "combat",   setting: "military" },
  "riot-shield":         { cat: "combat",   setting: "military" },
  "cil-lifering":        { cat: "combat",   setting: "military", name: "Life Ring" },
  "custodian-helmet":    { cat: "factions", setting: "scifi",    name: "Custodian Helmet" },
  /* beasts */
  "wolf-head":           { cat: "beasts",   setting: "fantasy" },
  "dragon-head":         { cat: "beasts",   setting: "fantasy" },
  "bear-face":           { cat: "beasts",   setting: "fantasy" },
  "double-dragon":       { cat: "beasts",   setting: "fantasy" },
  "dragon-spiral":       { cat: "beasts",   setting: "fantasy" },
  "wolf-howl":           { cat: "beasts",   setting: "fantasy" },
  "hydra":               { cat: "beasts",   setting: "fantasy" },
  "tiger-head":          { cat: "beasts",   setting: "fantasy" },
  "claws":               { cat: "beasts",   setting: "fantasy" },
  "fa-dragon":           { cat: "beasts",   setting: "fantasy",  name: "Dragon" },
  "monster-grasp":       { cat: "beasts",   setting: "horror" },
  "raven":               { cat: "beasts",   setting: "horror" },
  "spider-alt":          { cat: "beasts",   setting: "horror" },
  "gooey-daemon":        { cat: "factions", setting: "scifi",    name: "Chaos Daemon" },
  "bat-mask":            { cat: "beasts",   setting: "horror" },
  "rat":                 { cat: "beasts",   setting: "horror" },
  "alien-fire":          { cat: "beasts",   setting: "scifi" },
  "alien-stare":         { cat: "beasts",   setting: "scifi" },
  "alien-egg":           { cat: "beasts",   setting: "scifi" },
  "tentacle-strike":     { cat: "beasts",   setting: "scifi" },
  "tentacles-skull":     { cat: "beasts",   setting: "scifi" },
  "hive-mind":           { cat: "factions", setting: "scifi",    name: "Hive Mind" },
  "mdi-alien":           { cat: "beasts",   setting: "scifi",    name: "Alien" },
  /* skulls */
  "skull-crossed-bones": { cat: "skulls",   setting: "horror" },
  "death-skull":         { cat: "skulls",   setting: "horror" },
  "crowned-skull":       { cat: "skulls",   setting: "horror" },
  "dead-eye":            { cat: "skulls",   setting: "horror" },
  "cultist":             { cat: "factions", setting: "scifi",    name: "Chaos Cultist" },
  "ghost":               { cat: "skulls",   setting: "horror" },
  "mdi-skull":           { cat: "skulls",   setting: "horror",   name: "Skull & Crossbones" },
  "fa-skull":            { cat: "skulls",   setting: "horror",   name: "Skull" },
  "hi-death":            { cat: "skulls",   setting: "horror",   name: "Death Symbol" },
  "hi-deathoutline":     { cat: "skulls",   setting: "horror",   name: "Death Outline" },
  "hi-skull":            { cat: "skulls",   setting: "horror",   name: "Skull" },
  "alien-skull":         { cat: "skulls",   setting: "scifi" },
  "cracked-alien-skull": { cat: "skulls",   setting: "scifi" },
  /* factions */
  "usa-flag":            { cat: "factions", setting: "lore",     name: "US Flag" },
  "union-jack":          { cat: "factions", setting: "lore",     name: "Union Jack" },
  "hammer-sickle":       { cat: "factions", setting: "lore",     name: "Hammer & Sickle" },
  "sunglasses":          { cat: "factions", setting: "lore" },
  "fa-empire":           { cat: "factions", setting: "lore",     name: "Galactic Empire" },
  "fa-jedi":             { cat: "factions", setting: "lore",     name: "Jedi Order" },
  "fa-mando":            { cat: "factions", setting: "lore",     name: "Mandalorian" },
  "fa-gitkraken":        { cat: "factions", setting: "lore",     name: "GitKraken" },
  "fa-senate":           { cat: "factions", setting: "lore",     name: "Galactic Senate" },
  "fa-joomla":           { cat: "factions", setting: "lore",     name: "Joomla" },
  "fa-phoenix":          { cat: "factions", setting: "lore",     name: "Phoenix Squadron" },
  "fa-watchman":         { cat: "factions", setting: "lore",     name: "Watchman" },
  "fa-fulcrum":          { cat: "factions", setting: "lore",     name: "Fulcrum" },
  "fa-firstorder":       { cat: "factions", setting: "lore",     name: "First Order" },
  "fa-oldrepublic":      { cat: "factions", setting: "lore",     name: "Old Republic" },
  "fi-dragonfly":        { cat: "factions", setting: "lore",     name: "DragonFly BSD" },
  "si-gunicorn":         { cat: "factions", setting: "lore",     name: "Gunicorn" },
  "si-dassault":         { cat: "factions", setting: "lore",     name: "Dassault" },
  "si-gitlab":           { cat: "factions", setting: "lore",     name: "GitLab" },
  "ar-triodos":          { cat: "factions", setting: "lore",     name: "Triodos" },
  "im-wink":             { cat: "factions", setting: "lore",     name: "Winking Face" },
  "cil-football":        { cat: "factions", setting: "lore",     name: "Football" },
  /* machines */
  "battle-tank":         { cat: "machines", setting: "military" },
  "crosshair":           { cat: "machines", setting: "military" },
  "mdi-crosshair":       { cat: "machines", setting: "military", name: "GPS Crosshair" },
  "mdi-crosshairs":      { cat: "machines", setting: "military", name: "Crosshairs" },
  "tracked-robot":       { cat: "machines", setting: "military" },
  "compass":             { cat: "machines", setting: "military" },
  "biohazard":           { cat: "machines", setting: "scifi" },
  "gears":               { cat: "machines", setting: "scifi" },
  "radar-dish":          { cat: "machines", setting: "scifi" },
  "spiky-explosion":     { cat: "machines", setting: "scifi" },
  "rocket-thruster":     { cat: "machines", setting: "scifi" },
  "cyborg-face":         { cat: "machines", setting: "scifi" },
  "astronaut-helmet":    { cat: "machines", setting: "scifi" },
  "blaster":             { cat: "machines", setting: "scifi" },
  "laser-gun":           { cat: "machines", setting: "scifi" },
  "mecha-head":          { cat: "machines", setting: "scifi" },
  "ion-cannon-blast":    { cat: "machines", setting: "scifi" },
  "energy-shield":       { cat: "machines", setting: "scifi" },
  "dreadnought":         { cat: "factions", setting: "scifi",    name: "Dreadnought" },
  "heavy-fighter":       { cat: "machines", setting: "scifi" },
  "plasma-bolt":         { cat: "machines", setting: "scifi" },
  "robot-helmet":        { cat: "machines", setting: "scifi" },
  "ar-aichat":           { cat: "machines", setting: "scifi",    name: "AI Chat" },
  /* arcane */
  "crown":               { cat: "arcane",   setting: "fantasy" },
  "laurel-crown":        { cat: "arcane",   setting: "fantasy" },
  "angel-wings":         { cat: "arcane",   setting: "fantasy" },
  "flame":               { cat: "arcane",   setting: "fantasy" },
  "moon":                { cat: "arcane",   setting: "fantasy" },
  "magic-palm":          { cat: "arcane",   setting: "fantasy" },
  "magic-shield":        { cat: "arcane",   setting: "fantasy" },
  "mdi-cross":           { cat: "arcane",   setting: "fantasy",  name: "Celtic Cross" },
  "fa-khanda":           { cat: "arcane",   setting: "fantasy",  name: "Khanda" },
  "mdi-crossbolnisi":    { cat: "arcane",   setting: "fantasy",  name: "Bolnisi Cross" },
  "cil-diamond":         { cat: "arcane",   setting: "fantasy",  name: "Diamond" },
  "cil-spa":             { cat: "arcane",   setting: "fantasy",  name: "Lotus" },
  "star-formation":      { cat: "arcane",   setting: "scifi" },
  "orbital-rays":        { cat: "arcane",   setting: "scifi" },
  "tb-meteor":           { cat: "arcane",   setting: "scifi",    name: "Meteor" },
  "cil-compress":        { cat: "arcane",   setting: "scifi",    name: "Compress" },
  "cil-functions":       { cat: "arcane",   setting: "scifi",    name: "Functions" },
  "ar-aaaaxy":           { cat: "arcane",   setting: "scifi",    name: "Gravity Warp" },
  "all-seeing-eye":      { cat: "arcane",   setting: "horror" },
  /* emblem-extra */
  "streamline-sharp-sword-attack":                 { cat: "combat",   setting: "fantasy",  name: "Sword Attack" },
  "streamline-ultimate-color-martial-arts-helmet": { cat: "combat",   setting: "military", name: "Martial Arts Helm" },
  "arcticons-infinity-army":                       { cat: "combat",   setting: "fantasy",  name: "Infinity Army" },
  "arcticons-squad-busters":                       { cat: "combat",   setting: "military", name: "Squad Busters" },
  "game-icons-warlord-helmet":                     { cat: "combat",   setting: "fantasy",  name: "Warlord Helmet" },
  "gi-knight-banner":                              { cat: "combat",   setting: "fantasy",  name: "Knight Banner" },
  "energy-sword":                                  { cat: "combat",   setting: "scifi",    name: "Energy Sword" },
  "winged-sword":                                  { cat: "combat",   setting: "fantasy",  name: "Winged Sword" },
  "akar-sword":                                    { cat: "combat",   setting: "fantasy",  name: "Sword (line)" },
  "picon-fist":                                    { cat: "combat",   setting: "fantasy",  name: "Fist (pixel)" },
  "material-symbols-chess-knight-sharp":           { cat: "combat",   setting: "fantasy",  name: "Knight" },
  "material-icon-theme-dinophp":                   { cat: "beasts",   setting: "fantasy",  name: "Dino / Dragon" },
  "meteor-icons-bluesky":                          { cat: "beasts",   setting: "lore",     name: "Bluesky Butterfly" },
  "icon-park-solid-dragon-zodiac":                 { cat: "beasts",   setting: "fantasy",  name: "Dragon Zodiac" },
  "simple-icons-redragon":                         { cat: "beasts",   setting: "fantasy",  name: "Red Dragon" },
  "arcticons-last-day-on-earth-survival":          { cat: "skulls",   setting: "horror",   name: "Last Day Survivor" },
  "picon-skull":                                   { cat: "skulls",   setting: "horror",   name: "Skull (pixel)" },
  "healthicons-death-alt-outline":                 { cat: "skulls",   setting: "horror",   name: "Death Alt" },
  "meteor-icons-gitlab":                           { cat: "factions", setting: "lore",     name: "GitLab (alt)" },
  "meteor-icons-binance":                          { cat: "factions", setting: "lore",     name: "Binance" },
  "token-gunz":                                    { cat: "machines", setting: "military", name: "Gunz" },
  "chemical-weapon":                               { cat: "machines", setting: "horror",   name: "Chemical Weapon" },
  "streamline-cyber-crosshair-1":                  { cat: "machines", setting: "scifi",    name: "Cyber Crosshair" },
  "streamline-ultimate-space-rocket-earth-bold":   { cat: "machines", setting: "scifi",    name: "Space Rocket" },
  "meteor-icons-chevrons-up":                      { cat: "arcane",   setting: "scifi",    name: "Chevrons Up" },
  "arcticons-dpg-fruhjahrstagungen":               { cat: "arcane",   setting: "scifi",    name: "Molecular Ring" },
  "arcticons-honor-ai-space":                      { cat: "arcane",   setting: "scifi",    name: "AI Space" },
  "arcticons-essential-space":                     { cat: "arcane",   setting: "scifi",    name: "Essential Space" },
  "arcticons-7metronome":                          { cat: "arcane",   setting: "scifi",    name: "Target Burst" },
  "arcticons-7-literoj":                           { cat: "arcane",   setting: "scifi",    name: "M Mark" },
  "arcticons-waifu2x-ncnn":                        { cat: "arcane",   setting: "fantasy",  name: "Wing Sigil" },
  "cryptocurrency-spacehbit":                      { cat: "arcane",   setting: "scifi",    name: "Space Ring" },
  "icon-park-twotone-halo":                        { cat: "arcane",   setting: "fantasy",  name: "Halo" },
  "icon-park-twotone-cross-ring":                  { cat: "arcane",   setting: "fantasy",  name: "Cross Ring" },
  "arcticons-ac-odyssey-map":                      { cat: "arcane",   setting: "fantasy",  name: "Odyssey Compass" },
  "tap-wizard":                                    { cat: "arcane",   setting: "fantasy",  name: "Tap Wizard" },
};
const _idToName = (id) => id.replace(/^(gi-|fa-|fi-|ic-|im-|cil-|ar-|mdi-|hi-|ms-|tb-|si-|mi-|streamline-\w+-|meteor-icons-|arcticons-|icon-park-\w+-|game-icons-|simple-icons-|healthicons-|material-\w+-|cryptocurrency-|token-|picon-|energy-|winged-|chemical-|akar-|tap-)/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const DETACH_ICON_LIST_META = DETACH_ICON_LIST.map((item) => {
  const m = EMBLEM_META[item.id] || {};
  return { ...item, cat: m.cat || "arcane", setting: m.setting || "scifi", name: m.name || _idToName(item.id) };
});

/* one big pool of faction names for the "get a random one" link */
const ALL_NAMES = ALL_GENRES.flatMap((g) => g.groups.flatMap((gr) => gr.factions.flatMap((f) => f.pool || [])));

/* two-letter placeholder per generic unit type; the user will refine by hand */
const UNIT_ABBR = {
  elite: "EI", heavy: "HI", light: "LI", berserk: "BI", support: "SI", recon: "RI",
  primitive: "PI", militia: "MR", "greater-xeno": "GX", "lesser-xeno": "LX",
  "fighting-vehicle": "FV", "transport-vehicle": "TV", "softskin-vehicle": "SV",
};
const UnitIcon = ({ id, size, className }) => (
  <span className={`xr-abbr ${className || ""}`} style={size ? { fontSize: Math.round(size * 0.52) } : undefined}>{UNIT_ABBR[id] || "??"}</span>
);

const STAT_ROWS = [
  { key: "atk", label: "Attack", img: icoAttack, order: true, val: true, tip: "Attack Value: the result needed on one die to hit when Attacking. 2d6 to carry out the order." },
  { key: "mov", label: "Move", img: icoMove, order: true, val: true, tip: "Maximum Movement: the most inches a model in this unit may move. 2d6 to carry out the order." },
  { key: "sho", label: "Shoot", img: icoShoot, order: true, val: true, tip: "Shoot Value / Range: the result needed on one die to hit when Shooting, and its range. 2d6 to carry out the order." },
  { key: "cou", label: "Courage", img: icoCourage, order: true, val: false, tip: "Courage: the total needed on one or two dice to keep calm and carry on." },
  { key: "def", label: "Defence Value", img: icoDefence, order: false, val: true, tip: "Defence Value: the result needed on one die to hit this unit when it is Attacked." },
  { key: "arm", label: "Armour", img: icoArmour, order: false, val: true, tip: "Armour: the number of hits needed to remove one Strength Point." },
  { key: "sp", label: "Strength Points", img: icoStrength, order: false, val: true, tip: "Strength Points: this unit's Strength Points, either 5, 10, or 15." },
];
const ACT_KEYS = [
  { key: "atk", label: "Attack" }, { key: "mov", label: "Move" },
  { key: "sho", label: "Shoot" }, { key: "cou", label: "Courage" },
];
const CATS = [
  { id: "inf", label: "Infantry", Icon: Infantry },
  { id: "xeno", label: "Xenomorphs", Icon: Alien },
  { id: "veh", label: "Vehicles", Icon: Truck },
];

/* ---------------- helpers (ported from v1, verified against data.js) -------- */
const uid = () => Math.random().toString(36).slice(2, 9);
function catOf(t) {
  if (t.id.includes("xeno")) return "xeno";
  if (t.cls === VEHICLE) return "veh";
  return "inf";
}
function parseAct(s) {
  if (!s || s === "—" || s === "-" || s === "n/a") return { val: "n/a", free: false };
  const free = /free/i.test(s);
  const m = s.match(/(\d+\+?)/);
  return { val: m ? m[1] : s, free };
}
function splitRange(s) {
  if (!s || s === "—" || s === "n/a") return { main: "n/a", range: "" };
  if (s.includes("/")) { const [a, b] = s.split("/"); return { main: a.trim(), range: b.trim() }; }
  return { main: s.trim(), range: "" };
}
const costLabel = (n) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : "0");
const optCost = (o) => o.cost || 0;
function xenoCost(rule, val) {
  if (rule.tiers) return rule.tiers[typeof val === "number" ? val : 0].cost;
  return rule.cost || 0;
}
/* display name for a xeno rule, spelling out the chosen tier: the psychic class
   and its chosen powers, or a levelled rule's level (eg. Force Field) */
function xenoLabel(x, u) {
  if (!x.tiers) return x.name;
  const ti = typeof u.xenos[x.id] === "number" ? u.xenos[x.id] : 0;
  const tier = x.tiers[ti];
  const level = tier.label + (tier.sub ? `, ${tier.sub}` : "");
  if (x.id === "psychic") {
    const powers = u.psychic || [];
    return `Psychic (${level}${powers.length ? `: ${powers.join(", ")}` : ""})`;
  }
  return `${x.name} (${level})`;
}
function unitPoints(u) {
  const t = UNIT_BY_ID[u.typeId];
  let p = t.base;
  for (const oid of Object.keys(u.options)) {
    const o = t.options.find((x) => x.id === oid);
    if (o) p += optCost(o);
  }
  for (const [xid, v] of Object.entries(u.xenos)) {
    const r = XENO_BY_ID[xid];
    if (r) p += xenoCost(r, v);
  }
  for (const c of u.custom || []) p += c.cost || 0;
  return p;
}
function unitSP(u) {
  const t = UNIT_BY_ID[u.typeId];
  let sp = t.sp;
  for (const oid of Object.keys(u.options)) {
    const o = t.options.find((x) => x.id === oid);
    if (o && o.sp) sp = Math.max(sp, o.sp);
  }
  return sp;
}
/* the special rules a unit actually carries: its type's rules, with the generic
   "Vehicle" entry expanded into the specific vehicle rules (Walkers skip movement) */
function unitSpecialRules(u, t) {
  let rules = t.special.filter((s) => s !== "None");
  if (t.cls === VEHICLE) {
    rules = rules.filter((s) => s !== "Vehicle");
    const veh = [];
    if (!u.options.walker) veh.push("Vehicle Movement");
    veh.push("Vehicle Shooting", "Vehicle Melee", "Severe Damage");
    rules = [...veh, ...rules];
  }
  return rules;
}
function eligibleXenos(t) {
  return XENO_RULES.filter((x) => {
    const pol = t.xenoPolicy;
    if (pol.type === "except" && pol.list.includes(x.id)) return false;
    if (pol.type === "allowOnly" && !pol.list.includes(x.id)) return false;
    if (x.infantryOnly && t.cls !== INFANTRY) return false;
    return true;
  });
}
const isPsychicRule = (x) => x.id === "psychic" || x.id.startsWith("psychic-");
function xenoReqMet(rule, u) {
  if (rule.requiresXeno && !(rule.requiresXeno in u.xenos)) return false;
  if (rule.requiresAny && !rule.requiresAny.some((r) => r in u.xenos)) return false;
  return true;
}
function sanitize(u) {
  const t = UNIT_BY_ID[u.typeId];
  const options = { ...u.options };
  for (const o of t.options) {
    if (o.requires && options[o.id] && !options[o.requires]) delete options[o.id];
  }
  const xenos = { ...u.xenos };
  for (const x of XENO_RULES) {
    if (!(x.id in xenos)) continue;
    if (x.requiresXeno && !(x.requiresXeno in xenos)) delete xenos[x.id];
    if (x.requiresAny && !x.requiresAny.some((r) => r in xenos)) delete xenos[x.id];
    // a tiered rule must carry a numeric tier index; coerce anything else (eg. a
    // preset that stored `true`) to the first tier so tier lookups never crash
    if (x.tiers && x.id in xenos && typeof xenos[x.id] !== "number") xenos[x.id] = 0;
  }
  // keep chosen psychic powers within what the class allows
  let psychic = u.psychic || [];
  if (!("psychic" in xenos)) {
    psychic = [];
  } else {
    const pr = XENO_BY_ID["psychic"];
    const ti = typeof xenos.psychic === "number" ? xenos.psychic : 0;
    const lim = pr.tiers[ti].powers;
    if (psychic.length > lim) psychic = psychic.slice(0, lim);
  }
  return { ...u, options, xenos, psychic };
}
function validate(roster, budget, freeplay) {
  const issues = [];
  const used = roster.reduce((s, u) => s + unitPoints(u), 0);
  const count = roster.length;
  if (freeplay) return { issues, used, count };
  const is24 = budget === 24;
  const cmds = roster.filter((u) => u.isCmd).length;
  const heavyVeh = roster.filter((u) => UNIT_BY_ID[u.typeId].heavy).length;
  const heavyCap = Math.floor(budget / 18);
  const vehPts = roster.filter((u) => UNIT_BY_ID[u.typeId].cls === VEHICLE).reduce((s, u) => s + unitPoints(u), 0);
  if (used > budget) issues.push({ lvl: "err", msg: `Over budget by ${used - budget} points.` });
  if (count > 0) {
    if (cmds === 0) issues.push({ lvl: "err", msg: "No Commander. Crown one unit." });
    if (cmds > 1) issues.push({ lvl: "err", msg: `${cmds} Commanders. Only one is allowed.` });
    // unit count: only enforced at the standard 24 points
    if (is24 && count < 3) issues.push({ lvl: "err", msg: "Too few units. A 24-point detachment needs 3 to 10 units." });
    if (is24 && count > 10) issues.push({ lvl: "err", msg: "Too many units. A 24-point detachment allows 3 to 10 units." });
    // per-unit cost, always
    roster.forEach((u, i) => {
      const p = unitPoints(u);
      if (p > 12) issues.push({ lvl: "err", msg: `${unitDisplayName(u, i)} costs ${p} points; no unit may cost more than 12.` });
      if (p < 1) issues.push({ lvl: "err", msg: `${unitDisplayName(u, i)} costs ${p} points; every unit must cost at least 1.` });
    });
    // psychic (and other levelled) powers still to choose
    roster.forEach((u, i) => {
      if ("psychic" in u.xenos) {
        const ti = typeof u.xenos.psychic === "number" ? u.xenos.psychic : 0;
        const lim = XENO_BY_ID.psychic.tiers[ti].powers;
        const left = lim - (u.psychic || []).length;
        if (left > 0) issues.push({ lvl: "err", msg: `${unitDisplayName(u, i)} has ${left} psychic power${left === 1 ? "" : "s"} left to choose.` });
      }
    });
    // one Fighting or Transport Vehicle per full 18 points, always
    if (heavyVeh > heavyCap) issues.push({ lvl: "err", msg: `${heavyVeh} fighting or transport vehicles; the limit is ${heavyCap} (one per full 18 points).` });
    // vehicles no more than half the points: only at the standard 24 points
    if (is24 && vehPts > budget / 2) issues.push({ lvl: "err", msg: `Vehicles are ${vehPts} points; no more than half (${Math.floor(budget / 2)}) may be vehicles.` });
  }
  return { issues, used, count };
}
const unitDisplayName = (u, i) => u.name || `${UNIT_BY_ID[u.typeId].name} ${i + 1}`;

/* build a roster from a pre-made detachment: expand counts, apply options and
   xeno rules, sanitize, and crown the first unit as Commander. */
function rosterFromDetachment(det) {
  const roster = [];
  det.units.forEach((e) => {
    const n = e.count || 1;
    for (let c = 0; c < n; c++) {
      const options = {};
      (e.options || []).forEach((id) => { options[id] = true; });
      roster.push(sanitize({
        key: uid(), typeId: e.typeId, name: e.label || "",
        isCmd: !!e.isCmd, traitTable: "aggressive", traitIndex: undefined,
        options, xenos: { ...(e.xenos || {}) }, custom: [], notes: e.notes || "",
      }));
    }
  });
  if (roster.length && !roster.some((u) => u.isCmd)) roster[0].isCmd = true;
  return roster;
}
const detachmentPoints = (det) => det.units.reduce((n, e) => n + (e.points || 0) * (e.count || 1), 0);
const detachmentUnits = (det) => det.units.reduce((n, e) => n + (e.count || 1), 0);

/* ---------------- storage ---------------- */
const LS_LISTS = "xrb.lists";
const LS_CURRENT = "xrb.current";
function loadLists() {
  try { return JSON.parse(localStorage.getItem(LS_LISTS)) || {}; } catch { return {}; }
}
function saveLists(lists) {
  try { localStorage.setItem(LS_LISTS, JSON.stringify(lists)); } catch { /* storage full or blocked */ }
}
function loadPlay(listId) {
  try { return JSON.parse(localStorage.getItem(`xrb.play.${listId}`)) || { turn: 1, units: {} }; }
  catch { return { turn: 1, units: {} }; }
}
function savePlay(listId, st) {
  try { localStorage.setItem(`xrb.play.${listId}`, JSON.stringify(st)); } catch { /* ignore */ }
}

/* ---------------- share by URL ----------------
   pack the detachment into a compact, URL-safe string. images are dropped (they
   would blow up the link) and the faction name pool is left out; everything the
   builder needs to rebuild the roster is kept. */
function encodeShare(list) {
  const payload = {
    n: list.name, b: list.budget, d: list.description || undefined,
    ic: list.icon, co: list.collection, fp: list.freeplay || undefined, st: list.setting,
    r: list.roster.map((u) => ({
      t: u.typeId, nm: u.name || undefined, c: u.isCmd ? 1 : undefined,
      tt: u.traitTable, ti: u.traitIndex, o: u.options, x: u.xenos,
      p: (u.psychic && u.psychic.length) ? u.psychic : undefined,
      cu: (u.custom && u.custom.length) ? u.custom : undefined,
      mr: u.mercRoll, no: u.notes || undefined,
    })),
  };
  const json = JSON.stringify(payload);
  return btoa(unescape(encodeURIComponent(json))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function decodeShare(str) {
  try {
    const b64 = str.replace(/-/g, "+").replace(/_/g, "/");
    const o = JSON.parse(decodeURIComponent(escape(atob(b64))));
    return {
      name: o.n || "", budget: o.b || 24, description: o.d || "",
      icon: o.ic, collection: o.co, freeplay: o.fp, setting: o.st,
      roster: (o.r || []).filter((u) => UNIT_BY_ID[u.t]).map((u) => sanitize({
        key: uid(), typeId: u.t, name: u.nm || "", isCmd: !!u.c,
        traitTable: u.tt || "aggressive", traitIndex: u.ti,
        options: u.o || {}, xenos: u.x || {}, psychic: u.p || [],
        custom: u.cu || [], mercRoll: u.mr, notes: u.no || "",
      })),
    };
  } catch { return null; }
}

/* ---------------- hash routing ---------------- */
function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, "");
  const [view, arg] = h.split("/");
  if (view === "build") return { view: "build", unitKey: arg || null };
  if (view === "print") return { view: "print" };
  if (view === "play") return { view: "play" };
  if (view === "s") return { view: "share", data: arg || "" };
  return { view: "home" };
}
const nav = (h) => { window.location.hash = h; };

/* ---- transient toast notifications ----
   fire from anywhere with toast("Copied", "ok"); a single <Toaster/> mounted in
   the app shell listens on the window and renders an aria-live stack. tones:
   "ok" (green check), "err" (coral alert), "info" (link). */
let _toastSeq = 0;
const toast = (msg, tone = "ok", action = null) => {
  window.dispatchEvent(new CustomEvent("xr-toast", { detail: { id: ++_toastSeq, msg, tone, action } }));
};
/* copy text with a toast. tries the async clipboard first, then falls back to a
   hidden-textarea execCommand for older mobile Safari or when the API is blocked */
function legacyCopy(text) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.top = "0"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.focus(); ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch { return false; }
}
async function copyText(text, okMsg, errMsg = "Could not copy") {
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
    else if (!legacyCopy(text)) throw new Error("copy failed");
    if (okMsg) toast(okMsg, "ok");
    return true;
  } catch {
    if (legacyCopy(text)) { if (okMsg) toast(okMsg, "ok"); return true; }
    if (errMsg) toast(errMsg, "err");
    return false;
  }
}
function Toaster() {
  const [items, setItems] = useState([]);
  const dismiss = (id) => setItems((xs) => xs.filter((x) => x.id !== id));
  useEffect(() => {
    const onToast = (e) => {
      const t = e.detail;
      setItems((xs) => [...xs.slice(-3), t]);
      window.setTimeout(() => setItems((xs) => xs.filter((x) => x.id !== t.id)), t.action ? 5200 : 2800);
    };
    window.addEventListener("xr-toast", onToast);
    return () => window.removeEventListener("xr-toast", onToast);
  }, []);
  return (
    <div className="xr-toaster" role="status" aria-live="polite" aria-atomic="false">
      {items.map((t) => (
        <div key={t.id} className={`xr-toast tone-${t.tone}`}>
          {t.tone === "err" ? <Alert size={18} /> : t.tone === "info" ? <LinkIc size={18} /> : <Check size={18} />}
          <span>{t.msg}</span>
          {t.action && <button className="xr-toast-act" onClick={() => { t.action.fn(); dismiss(t.id); }}>{t.action.label}</button>}
        </div>
      ))}
    </div>
  );
}

/* read an image file, downscale it to fit maxPx, hand back a compact JPEG data URL.
   keeps localStorage small: full-res photos would blow the quota. */
function drawDownscaled(source, w, h, cb) {
  const canvas = document.createElement("canvas");
  canvas.width = w; canvas.height = h;
  canvas.getContext("2d").drawImage(source, 0, 0, w, h);
  try { cb(canvas.toDataURL("image/jpeg", 0.82)); } catch { cb(null); }
}
/* phone photos are stored sideways with an EXIF orientation tag; createImageBitmap
   auto-rotates using it, so the crop below lands on the right part of the picture. */
function downscaleImage(file, maxPx, cb) {
  if (window.createImageBitmap) {
    window.createImageBitmap(file, { imageOrientation: "from-image" }).then((bmp) => {
      const scale = Math.min(1, maxPx / Math.max(bmp.width, bmp.height));
      drawDownscaled(bmp, Math.max(1, Math.round(bmp.width * scale)), Math.max(1, Math.round(bmp.height * scale)), cb);
    }).catch(() => cb(null));
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new window.Image();
    img.onload = () => {
      const scale = Math.min(1, maxPx / Math.max(img.width, img.height));
      drawDownscaled(img, Math.max(1, Math.round(img.width * scale)), Math.max(1, Math.round(img.height * scale)), cb);
    };
    img.onerror = () => cb(null);
    img.src = e.target.result;
  };
  reader.onerror = () => cb(null);
  reader.readAsDataURL(file);
}

/* upload/replace/remove a picture. shows the current image, or an add button. */
function ImageUpload({ image, onChange, title, shape }) {
  const inputRef = useRef(null);
  const pick = () => inputRef.current && inputRef.current.click();
  return (
    <div className={`xr-imgup ${shape || "square"} ${image ? "has" : ""}`}>
      {image
        ? <button className="xr-imgup-thumb" onClick={pick} title="Change picture" style={{ backgroundImage: `url(${image})` }} aria-label="Change picture" />
        : <button className="xr-imgup-add" onClick={pick} title={title || "Add a picture"} aria-label={title || "Add a picture"}><Image size={20} /></button>}
      {image && <button className="xr-imgup-x" onClick={() => onChange(null)} title="Remove picture" aria-label="Remove picture"><XIc size={12} /></button>}
      <input ref={inputRef} type="file" accept="image/*" hidden
        onChange={(e) => { const f = e.target.files && e.target.files[0]; if (f) downscaleImage(f, 256, (d) => d && onChange(d)); e.target.value = ""; }} />
    </div>
  );
}

/* ---------------- small shared pieces ---------------- */
function Die({ k, free, children }) {
  return (
    <span className={`xr-die k-${k}${free ? " free" : ""}`}
      title={free ? "Free action: this activates on its own, no 2d6 roll needed" : "Roll 2d6: this or higher activates the action"}>
      {children}{free && <span className="xr-die-free">Free</span>}
    </span>
  );
}
function orderFrom(act, key, noAttack) {
  const raw = noAttack && key === "atk" ? "n/a" : act[key];
  const { val, free } = parseAct(raw);
  return val === "n/a" ? null : { val, free };
}
function orderCell(t, key) { return orderFrom(t.act, key, t.noAttack); }
function profFrom(prof, sp, key) {
  if (key === "sp") return { main: String(sp) };
  if (key === "sho") { const r = splitRange(prof.sho); return r.main === "n/a" ? null : r; }
  const v = prof[key];
  return v == null || v === "n/a" || v === "—" ? null : { main: String(v) };
}

/* how far a bought option or xeno rule shifts a profile value. only the effects
   that change a displayed stat are listed; a "-" or higher target still reads right. */
const adjInches = (s, d) => { const n = parseInt(s, 10); return Number.isNaN(n) ? s : `${n + d}"`; };
const improveTgt = (s, by) => { const n = parseInt(s, 10); return Number.isNaN(n) ? s : `${Math.max(2, n - by)}+`; };
const worsenTgt = (s, by) => { const n = parseInt(s, 10); if (Number.isNaN(n)) return s; const nn = n + by; return nn >= 6 ? "6" : `${nn}+`; };
/* Effects uniform across every unit that can take them. A unit-specific entry
   in UNIT_STAT_MODS below overrides these for that unit. */
const GLOBAL_STAT_MODS = {
  "mobile": { movDelta: 4 },
  "super-heavy-armour": { prof: { arm: 5 }, movDelta: -2 },
  "undisciplined": { act: { cou: "5+" } },
  "enthusiastic": { atkWorsen: 1 },
  "even-heavier": { prof: { arm: 4, atk: "3+" } },
  "veteran": { prof: { def: "5+" } },
  "artillery": { prof: { sho: "4+ / 48\"" } },
  "sniper-team": { prof: { sho: "5+ / 24\"" } },
  "swarm": { prof: { atk: "3+" } },
  "young-warriors": { act: { cou: "5+" } },
  "cunning": { prof: { def: "5+" } },
  "lesser-xeno": { prof: { def: "5+" } },
  "scythes": { prof: { atk: "5+" } },
  "light-armoured": { armDelta: -1 },
  "civilian": { prof: { arm: 2 } },
  "improvised-armour": { prof: { arm: 4 }, movDelta: -2 },
  "large-vehicle": { movDelta: -2 },
  "transport-15": { movDelta: -2 },
  "technical": { act: { sho: "6+" }, prof: { sho: "5+ / 18\"" } },
  "ravenous-horde": { act: { sho: "n/a" }, prof: { atk: "7+", sho: "n/a" } },
  "primitive-missiles": { act: { sho: "6+" }, prof: { sho: "6+ / 6\"" } },
  // xeno rules
  "slow": { movDelta: -2 },
  "fanatical-discipline": { couImprove: 1 },
  "fearful": { couWorsen: 1 },
  "unarmed": { act: { sho: "n/a" }, prof: { sho: "n/a" } },
  "boarding-shields": { defImprove: 1 },
};
/* The same option can change different stats on different units, so these are
   keyed by unit id first. A mod may be a plain object, or `{ fn }` when the
   result depends on the unit's other options (close-quarters keys off Increased
   Squad Size; a vehicle's green crew keys off its weapon). `pri` orders
   application so a dependent mod reads and overrides a base-setting one. */
const UNIT_STAT_MODS = {
  elite: {
    "assault-doctrine": { prof: { atk: "3+" } },
    "close-quarters": { prof: { sho: "4+ / 12\"" } },
  },
  heavy: {
    "assault-doctrine": { atkImprove: 1 },
    "increased-squad": { prof: { atk: "5+", def: "4+", sho: "5+ / 18\"" } },
    "close-quarters": { pri: 1, fn: (ids) => ({ prof: { sho: ids.has("increased-squad") ? "5+ / 12\"" : "6+ / 12\"" } }) },
  },
  light: {
    "assault-doctrine": { atkImprove: 1 },
    "increased-squad": { prof: { atk: "5+", def: "4+", sho: "5+ / 18\"" } },
    "close-quarters": { pri: 1, fn: (ids) => ({ prof: { sho: ids.has("increased-squad") ? "5+ / 12\"" : "6+ / 12\"" } }) },
  },
  berserk: {
    "heavy-armour": { prof: { arm: 3 } },
    "increased-squad": { prof: { atk: "3+" } },
  },
  support: {
    "close-quarters": { prof: { sho: "4+ / 12\"" } },
  },
  primitive: {
    "increased-squad": { prof: { atk: "4+", def: "5+" } },
    "mob": { prof: { atk: "3+", def: "5+" } },
  },
  militia: {
    "mob": { prof: { sho: "6+ / 12\"" } },
  },
  "fighting-vehicle": {
    "close-quarters": { pri: 1, prof: { sho: "4+ / 12\"" } },
    "green-crew": { pri: 2, fn: (ids) => ({ prof: { sho: ids.has("artillery") ? "5+ / 48\"" : ids.has("close-quarters") ? "5+ / 12\"" : "5+ / 18\"" } }) },
    "walker": { prof: { atk: "4+" }, movDelta: -2 },
  },
  "transport-vehicle": {
    "green-crew": { prof: { sho: "6+ / 12\"" } },
    "walker": { prof: { atk: "4+", def: "5+" }, movDelta: -2 },
  },
  "softskin-vehicle": {
    "green-crew": { act: { cou: "5+" } },
    "walker": { prof: { atk: "4+", def: "5+" }, movDelta: -2 },
  },
};
const modFor = (unitId, id) => (UNIT_STAT_MODS[unitId] && UNIT_STAT_MODS[unitId][id]) || GLOBAL_STAT_MODS[id];
/* to-hit targets improve as the number falls (3+ beats 5+); distances, Armour
   and Strength improve as the number rises. */
const LOWER_IS_BETTER = new Set(["act:cou", "prof:atk", "prof:def", "prof:sho"]);
const statNum = (block, key, obj) => {
  if (key === "sho") return parseInt(splitRange(obj.sho).main, 10);
  return parseInt(String(obj[key]), 10);
};
function deriveStats(u, t) {
  const act = { ...t.act };
  const prof = { ...t.prof };
  const changed = new Set();
  const setBlock = (obj, block, kv) => { for (const k in kv) { if (String(obj[k]) !== String(kv[k])) { obj[k] = kv[k]; changed.add(`${block}:${k}`); } } };
  const idList = [...Object.keys(u.options || {}).filter((k) => u.options[k]), ...Object.keys(u.xenos || {})];
  const idSet = new Set(idList);
  const resolved = idList
    .map((id) => ({ id, m: modFor(t.id, id) }))
    .filter((x) => x.m)
    .sort((a, b) => (a.m.pri || 0) - (b.m.pri || 0));
  resolved.forEach(({ m }) => {
    if (m.fn) m = m.fn(idSet);
    if (m.act) setBlock(act, "act", m.act);
    if (m.prof) setBlock(prof, "prof", m.prof);
    if (m.movDelta) { prof.mov = adjInches(prof.mov, m.movDelta); changed.add("prof:mov"); }
    if (m.armDelta != null) { prof.arm = Number(prof.arm) + m.armDelta; changed.add("prof:arm"); }
    if (m.couImprove) { act.cou = improveTgt(act.cou, m.couImprove); changed.add("act:cou"); }
    if (m.couWorsen) { act.cou = worsenTgt(act.cou, m.couWorsen); changed.add("act:cou"); }
    if (m.atkImprove) { prof.atk = improveTgt(prof.atk, m.atkImprove); changed.add("prof:atk"); }
    if (m.atkWorsen) { prof.atk = worsenTgt(prof.atk, m.atkWorsen); changed.add("prof:atk"); }
    if (m.defImprove) { prof.def = improveTgt(prof.def, m.defImprove); changed.add("prof:def"); }
  });
  if (idSet.has("xeno-ranged")) {
    setBlock(act, "act", { sho: "6+" });
    setBlock(prof, "prof", { sho: idSet.has("xr-cqd") ? "5+ / 12\"" : "5+ / 18\"" });
  }
  const dirs = {};
  changed.forEach((k) => {
    const [block, key] = k.split(":");
    const base = statNum(block, key, block === "act" ? t.act : t.prof);
    const now = statNum(block, key, block === "act" ? act : prof);
    if (Number.isNaN(base) || Number.isNaN(now) || base === now) return;
    dirs[k] = (LOWER_IS_BETTER.has(k) ? now < base : now > base) ? "up" : "down";
  });
  return { act, prof, changed, dirs };
}
function StatTable({ t, sp, u, hint = true, spBubbles = false }) {
  const d = u ? deriveStats(u, t) : { act: t.act, prof: t.prof, changed: new Set() };
  const spMod = !!u && sp !== t.sp;
  return (
    <div className="xr-stt">
      <div className="xr-stt-head">
        <span>Stat</span><span>Activate {hint && <em>2d6</em>}</span><span>Value</span>
      </div>
      {STAT_ROWS.map((row) => {
        const o = row.order ? orderFrom(d.act, row.key, t.noAttack) : null;
        const v = row.val ? profFrom(d.prof, sp, row.key) : null;
        const dirO = d.dirs && d.dirs[`act:${row.key}`];
        const dirV = (d.dirs && d.dirs[`prof:${row.key}`]) || (row.key === "sp" && spMod ? (sp > t.sp ? "up" : "down") : undefined);
        const modO = d.changed.has(`act:${row.key}`);
        const modV = d.changed.has(`prof:${row.key}`) || (row.key === "sp" && spMod);
        const tip = (dir) => (dir === "up" ? "Improved by an ability" : dir === "down" ? "Lowered by an ability" : "Changed by an ability");
        return (
          <div className="xr-stt-row" key={row.key} title={row.tip}>
            <span className="xr-stt-stat"><img className="xr-stt-ic" src={row.img} alt="" width="28" height="28" />{row.label}</span>
            <span className={`xr-stt-cell ${modO ? "mod " + (dirO || "") : ""}`} title={modO ? tip(dirO) : undefined}>
              {o ? <Die k={row.key} free={o.free}>{o.val}</Die> : <span className="xr-dash">-</span>}
              {modO && <span className={`xr-mod-dir ${dirO || "neutral"}`} aria-hidden="true">{dirO === "up" ? "▲" : dirO === "down" ? "▼" : "●"}</span>}
            </span>
            <span className={`xr-stt-cell ${modV ? "mod " + (dirV || "") : ""}`} title={modV ? tip(dirV) : undefined}>
              {v
                ? (spBubbles && row.key === "sp"
                    ? (() => {
                        const n = Math.max(0, Number(v.main) || 0);
                        const halfIdx = n >= 2 ? Math.ceil(n / 2) - 1 : -1;
                        return (
                          <span className="xr-stt-bubbles" aria-label={`${v.main} Strength Points, half strength below ${Math.ceil(n / 2)}`}>
                            <b className="xr-bub-num">{v.main}</b>
                            {Array.from({ length: n }, (_, bi) => (
                              <i key={bi} className={`xr-bub ${bi === halfIdx ? "half" : ""}`}
                                title={bi === halfIdx ? "Half strength: at or below here the unit is battered" : undefined} aria-hidden="true" />
                            ))}
                          </span>
                        );
                      })()
                    : <><b>{v.main}</b>{v.range && <i className="xr-rng"> / {v.range} range</i>}</>)
                : <span className="xr-dash">-</span>}
              {modV && <span className={`xr-mod-dir ${dirV || "neutral"}`} aria-hidden="true">{dirV === "up" ? "▲" : dirV === "down" ? "▼" : "●"}</span>}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="game-info-footer">
      <div className="gif-inner">
        <span className="gif-title">Xenos Rampant</span>
        <span className="gif-sep">|</span>
        <span>Written by <a href="https://www.ospreypublishing.com/us/author/daniel-mersey/" target="_blank" rel="noopener">Daniel Mersey</a></span>
        <span className="gif-sep">|</span>
        <span>Published by <a href="https://www.ospreypublishing.com/" target="_blank" rel="noopener">Osprey Games</a></span>
        <span className="gif-sep">|</span>
        <a href="https://www.ospreypublishing.com/us/xenos-rampant-9781472852366/" target="_blank" rel="noopener">Buy the game</a>
        <span className="gif-sep">|</span>
        <span className="gif-builder">Detachment builder by <a className="warlore-mark" href="https://jetwong.neocities.org" target="_blank" rel="noopener" title="WarLore">War<span className="wl-lore">Lore</span></a></span>
        <span className="gif-sep">|</span>
        <a href="https://github.com/Type37/xenos-rampant-force-builder" target="_blank" rel="noopener">Source on GitHub</a>
        <span className="gif-sep">|</span>
        <a href="https://jetwong.neocities.org/wargaming#all-generators" target="_blank" rel="noopener">More WarLore tools</a>
        <span className="gif-sep">|</span>
        <a href="mailto:warlore1@outlook.com">Send feedback</a>
      </div>
    </footer>
  );
}

/* persistent nav rail: groups the view controls in one place (left on desktop, bottom on mobile) */
function RailNav({ view, bottom }) {
  const items = [
    { v: "home", Icon: House, label: "Lists", hash: "#/" },
    { v: "build", Icon: Edit, label: "Build", hash: "#/build" },
    { v: "print", Icon: Printer, label: "Print setup", hash: "#/print" },
    { v: "play", Icon: Play, label: "Play", hash: "#/play" },
  ];
  return (
    <nav className="xr-rail" aria-label="Views">
      <div className="xr-rail-nav">
        {items.map((it) => (
          <button key={it.v} className={`xr-rail-btn ${view === it.v ? "on" : ""}`} title={it.v === "home" ? "All detachments" : it.label}
            onClick={() => nav(it.hash)} aria-current={view === it.v ? "page" : undefined}>
            <it.Icon size={22} /><span>{it.label}</span>
          </button>
        ))}
        <button className="xr-rail-btn" title="Quick rules reference"
          onClick={() => window.dispatchEvent(new CustomEvent("xr-open-rules"))}>
          <Book size={22} /><span>Rules</span>
        </button>
      </div>
      {bottom}
    </nav>
  );
}

/* the points muster, living at the foot of the nav rail: game-size stepper, a
   vertical fill bar, a compact legality status, and the points total at the very
   bottom. */
function RailMuster({ used, budget, pct, over, status, count, errors, issues, issuesOpen, setIssuesOpen, updateList }) {
  const cls = over ? "over" : pct >= 90 ? "near" : "";
  return (
    <div className="xr-railmuster">
      <span className="xr-railmuster-cap">Game size</span>
      <div className="xr-railsize" role="group" aria-label="Game size in points">
        <button className="xr-railsize-btn" onClick={() => updateList({ budget: Math.max(6, budget - 6) })} title="Smaller game size" aria-label="Smaller game size">−</button>
        <b className="xr-railsize-val" title="Game size in points">{budget}</b>
        <button className="xr-railsize-btn" onClick={() => updateList({ budget: Math.min(120, budget + 6) })} title="Larger game size" aria-label="Larger game size">+</button>
      </div>
      <div className={`xr-railbar ${cls}`} title={`${used} of ${budget} points spent`} aria-hidden="true">
        <div className="xr-railbar-fill" style={{ height: `${Math.min(100, pct)}%` }} />
      </div>
      <div className={`xr-railpts ${cls}`} title="Points spent"><b>{used}</b><span>spent</span></div>
      <div className="xr-statuswrap xr-railstatuswrap">
        <button className={`xr-status xr-railstatus ${status}`} onClick={() => setIssuesOpen((o) => !o)}
          aria-expanded={issues.length ? issuesOpen : undefined} title={issues.length ? "See the issues" : `${count} ${count === 1 ? "unit" : "units"} in the detachment`}>
          {status === "ok" && <><Check size={14} /> {count}</>}
          {status === "err" && <><Alert size={14} /> {errors.length}</>}
          {status === "empty" && <>—</>}
        </button>
        {issues.length > 0 && (
          <div className={`xr-issue-pop xr-railpop ${issuesOpen ? "open" : ""}`} role="region" aria-label="Issues">
            {issues.map((it, i) => <span key={i} className={`xr-issue ${it.lvl}`}>{it.msg}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

/* at-the-table quick rules reference, grouped into tabs */
function RulesModal({ onClose }) {
  const [cat, setCat] = useState(RULES_CATS[0]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const sections = RULES_REFERENCE.filter((s) => s.cat === cat);
  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-tall xr-modal-wide" role="dialog" aria-modal="true" aria-label="Rules reference" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Book size={20} /> Rules reference</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>
        <div className="xr-modal-tabs" role="tablist">
          {RULES_CATS.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} className={`xr-modal-tab ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="xr-modal-body">
          <div className="xr-rref-cols">
            {sections.map((s) => (
              <div className="xr-rref" key={s.title}>
                <h4 className="xr-rref-h">{s.title}</h4>
                {s.intro && <p className="xr-rref-intro">{s.intro}</p>}
                <ul className="xr-rule-list">{s.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="xr-modal-foot">
          <span className="xr-modal-count">Xenos Rampant, Osprey Games</span>
          <button className="xr-btn primary" onClick={onClose}><Check size={17} /> Done</button>
        </div>
      </div>
    </div>
  );
}

/* collapsible section: progressive disclosure inside the unit editor */
function Section({ title, count, defaultOpen, children }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`xr-sec ${open ? "open" : ""}`}>
      <button className="xr-sec-h" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="xr-sec-title">{title}</span>
        {count > 0 && <em className="xr-sec-count">{count}</em>}
        <Caret className="xr-sec-caret" size={18} />
      </button>
      {open && <div className="xr-sec-body">{children}</div>}
    </div>
  );
}

/* budget picker: presets (24 marked recommended) plus a click-to-open Custom field */
function BudgetPicker({ budget, onChange }) {
  const isPreset = BUDGET_PRESETS.includes(budget);
  const [customOpen, setCustomOpen] = useState(!isPreset);
  const custom = customOpen || !isPreset;
  return (
    <div className="xr-budget" role="group" aria-label="Game size">
      {BUDGET_PRESETS.map((b) => (
        <button key={b} className={`xr-budget-chip ${isPreset && budget === b ? "on" : ""} ${b === 24 ? "std" : ""}`}
          title={b === 24 ? "Standard game size, the default" : `${b}-point game`}
          onClick={() => { setCustomOpen(false); onChange(b); }}>
          <span className="xr-budget-num">{b}</span>
          {b === 24 && <em className="xr-budget-rec">default</em>}
        </button>
      ))}
      <div className={`xr-budget-customwrap ${custom ? "open" : ""} ${!isPreset ? "on" : ""}`}>
        <button className="xr-budget-customtab" onClick={() => setCustomOpen((o) => !o)} aria-expanded={custom}
          title="Set your own game size">Custom</button>
        {custom && (
          <input className="xr-budget-custom" type="number" min={1} max={999} value={budget}
            onChange={(e) => { const n = parseInt(e.target.value, 10); if (!Number.isNaN(n)) onChange(Math.max(1, Math.min(999, n))); }}
            aria-label="Custom game size" />
        )}
      </div>
    </div>
  );
}

/* renders a detachment's picture: an uploaded image or a chosen badge icon */
function DetachIcon({ list, size = 26, className, style }) {
  if (list && list.image) return <span className={className} style={{ backgroundImage: `url(${list.image})`, ...style }} aria-hidden="true" />;
  const Ico = list && list.icon && DETACH_ICON_BY_ID[list.icon];
  if (Ico) return <span className={`${className || ""} xr-dicon-glyph`} style={style} aria-hidden="true"><Ico size={size} /></span>;
  return null;
}

/* email-style floating-label field: the label rests in the box, then lifts into
   the border when the field is focused or filled */
function FloatingField({ label, value, onChange, textarea, rows, autoFocus, onEnter, id }) {
  const [focused, setFocused] = useState(false);
  const up = focused || (value && value.length > 0);
  const shared = {
    id, className: "xr-ff-in", value: value || "", autoFocus, spellCheck: false,
    onFocus: () => setFocused(true), onBlur: () => setFocused(false),
    onChange: (e) => onChange(e.target.value),
  };
  return (
    <div className={`xr-ff ${up ? "up" : ""} ${textarea ? "area" : ""}`}>
      {textarea
        ? <textarea {...shared} rows={rows || 3} />
        : <input {...shared} onKeyDown={(e) => { if (e.key === "Enter" && onEnter) onEnter(); }} />}
      <label className="xr-ff-l" htmlFor={id}>{label}</label>
    </div>
  );
}

/* pick a badge/emblem from the full library, with two-axis filtering */
function IconPickerModal({ current, onPick, onUpload, onClose }) {
  const [cat, setCat] = useState("all");
  const [setting, setSetting] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("def");
  const [sel, setSel] = useState(current || null);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const filtered = useMemo(() => {
    let L = DETACH_ICON_LIST_META.filter(
      (e) => (cat === "all" || e.cat === cat) && (setting === "all" || e.setting === setting)
    );
    if (q) { const lq = q.toLowerCase(); L = L.filter((e) => e.name.toLowerCase().includes(lq)); }
    if (sort === "az") L = [...L].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "cat") L = [...L].sort((a, b) => a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name));
    return L;
  }, [cat, setting, q, sort]);

  const catCt = (cid) => {
    const base = setting === "all" ? DETACH_ICON_LIST_META : DETACH_ICON_LIST_META.filter((e) => e.setting === setting);
    return cid === "all" ? base.length : base.filter((e) => e.cat === cid).length;
  };
  const setCt = (sid) => {
    const base = cat === "all" ? DETACH_ICON_LIST_META : DETACH_ICON_LIST_META.filter((e) => e.cat === cat);
    return sid === "all" ? base.length : base.filter((e) => e.setting === sid).length;
  };

  const selItem = sel ? DETACH_ICON_LIST_META.find((e) => e.id === sel) : null;
  const selCatName = selItem ? (ICON_CATS.find((c) => c.id === selItem.cat)?.name || "") : "";
  const selSetName = selItem ? (ICON_SETTINGS.find((s) => s.id === selItem.setting)?.name || "") : "";

  const secLabel = q ? "Search results"
    : cat !== "all" && setting !== "all" ? `${ICON_CATS.find((c) => c.id === cat)?.name} · ${ICON_SETTINGS.find((s) => s.id === setting)?.name}`
    : cat !== "all" ? ICON_CATS.find((c) => c.id === cat)?.name
    : setting !== "all" ? ICON_SETTINGS.find((s) => s.id === setting)?.name
    : "All emblems";

  return (
    <div className="xr-modal-backdrop xr-epicker-back" onClick={onClose}>
      <div className="xr-epicker" role="dialog" aria-modal="true" aria-label="Choose an emblem" onClick={(e) => e.stopPropagation()}>

        <div className="xr-epicker-head">
          <span className="xr-modal-title"><Image size={20} /> Choose an emblem</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>

        <div className="xr-epicker-layout">

          {/* sidebar: desktop only */}
          <aside className="xr-epicker-side">
            <div className="xr-epicker-side-body">
              <p className="xr-epicker-side-hd">Type</p>
              {ICON_CATS.map((c) => (
                <button key={c.id} className={`xr-epicker-citem${cat === c.id ? " on" : ""}`} onClick={() => setCat(c.id)}>
                  <span className="xr-epicker-dot" style={c.col ? { background: c.col } : {}} />
                  <span className="xr-epicker-cname">{c.name}</span>
                  <span className="xr-epicker-cct">{catCt(c.id)}</span>
                </button>
              ))}
              <div className="xr-epicker-divider" />
              <p className="xr-epicker-side-hd">Setting</p>
              {ICON_SETTINGS.map((s) => (
                <button key={s.id} className={`xr-epicker-citem${setting === s.id ? " on" : ""}`} onClick={() => setSetting(s.id)}>
                  <span className="xr-epicker-dot" style={s.col ? { background: s.col } : {}} />
                  <span className="xr-epicker-cname">{s.name}</span>
                  <span className="xr-epicker-cct">{setCt(s.id)}</span>
                </button>
              ))}
            </div>
            <div className="xr-epicker-side-foot">
              <button className="xr-btn small" onClick={onUpload}><Image size={16} /> Upload image</button>
            </div>
          </aside>

          {/* main content */}
          <div className="xr-epicker-main">

            {/* mobile pill rows (hidden on desktop via CSS) */}
            <div className="xr-epicker-pills">
              <div className="xr-epicker-prow">
                <span className="xr-epicker-plbl">Type</span>
                <div className="xr-epicker-pscroll">
                  {ICON_CATS.map((c) => (
                    <button key={c.id} className={`xr-epicker-pill${cat === c.id ? " on" : ""}`} onClick={() => setCat(c.id)}>
                      {c.col && <span className="xr-epicker-pdot" style={{ background: c.col }} />}
                      {c.short}
                    </button>
                  ))}
                </div>
              </div>
              <div className="xr-epicker-prow xr-epicker-prow2">
                <span className="xr-epicker-plbl">Setting</span>
                <div className="xr-epicker-pscroll">
                  {ICON_SETTINGS.map((s) => (
                    <button key={s.id} className={`xr-epicker-pill${setting === s.id ? " on" : ""}`} onClick={() => setSetting(s.id)}>
                      {s.col && <span className="xr-epicker-pdot" style={{ background: s.col }} />}
                      {s.short}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* search + sort */}
            <div className="xr-epicker-toolbar">
              <input className="xr-epicker-search" type="search" placeholder="Search emblems…"
                value={q} onChange={(e) => setQ(e.target.value)} />
              <select className="xr-epicker-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="def">Default</option>
                <option value="az">A – Z</option>
                <option value="cat">By type</option>
                <option value="set">By setting</option>
              </select>
            </div>

            {/* icon grid */}
            <div className="xr-epicker-grid-wrap">
              <div className="xr-epicker-sec-lbl">
                {secLabel}<span className="xr-epicker-ct">{filtered.length}</span>
              </div>
              {filtered.length === 0
                ? <p className="xr-epicker-empty">Nothing matches — try broadening the filters.</p>
                : <div className="xr-epicker-grid">
                    {filtered.map(({ id, C, name }) => (
                      <button key={id}
                        className={`xr-epicker-cell${sel === id ? " sel" : ""}${sel && sel !== id ? " dim" : ""}`}
                        onClick={() => setSel(sel === id ? null : id)}
                        aria-label={name} aria-pressed={sel === id} title={name}>
                        <C size={40} />
                        <span className="xr-epicker-tip">{name}</span>
                      </button>
                    ))}
                  </div>}
            </div>

            {/* confirm / upload footer */}
            <div className="xr-epicker-foot">
              {selItem ? (
                <>
                  <span className="xr-epicker-foot-prev"><selItem.C size={22} /></span>
                  <span className="xr-epicker-foot-info">
                    {selItem.name}<em>{selCatName} · {selSetName}</em>
                  </span>
                  <button className="xr-btn small" onClick={() => setSel(null)}>Clear</button>
                  <button className="xr-btn" onClick={() => { onPick(sel); }}>Use this emblem</button>
                </>
              ) : (
                <>
                  <button className="xr-btn xr-epicker-upload-m" onClick={onUpload}><Image size={16} /> Upload your own image</button>
                  <span className="xr-epicker-foot-empty">Select an emblem above.</span>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* new-army creation modal */
function NewArmyModal({ onCreate, onClose, collections = [] }) {
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [budget, setBudget] = useState(24);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [icon, setIcon] = useState(null);
  const [collection, setCollection] = useState("");
  const [picking, setPicking] = useState(false);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const roll = () => setName(randomName(ALL_NAMES, name));
  const create = () => onCreate({ name: name.trim(), budget, description: desc.trim(), image: image || undefined, icon: icon || undefined, collection: collection.trim() || undefined });
  const current = { image, icon };
  const suggestions = [...new Set([...collections.filter(Boolean), ...BOOK_COLLECTIONS])];
  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-narrow" role="dialog" aria-modal="true" aria-label="New detachment" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Plus size={22} /> New detachment</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>
        <div className="xr-modal-body">
          <div className="xr-newimg-row">
            <button className="xr-newimg" onClick={() => setPicking(true)} title="Choose an emblem or upload a picture" aria-label="Choose an emblem or upload a picture">
              {(image || icon)
                ? <DetachIcon list={current} size={34} className="xr-newimg-face" />
                : <span className="xr-newimg-add"><Plus size={22} /></span>}
            </button>
            <div className="xr-newimg-txt">
              <b>Emblem</b>
              <button className="xr-linky" onClick={() => setPicking(true)}>Choose an icon or upload a picture</button>
            </div>
            {(image || icon) && <button className="xr-iconbtn small" onClick={() => { setImage(null); setIcon(null); }} title="Remove" aria-label="Remove emblem"><XIc size={16} /></button>}
            <input ref={inputRef} type="file" accept="image/*" hidden
              onChange={(e) => { const f = e.target.files && e.target.files[0]; if (f) downscaleImage(f, 256, (d) => { if (d) { setImage(d); setIcon(null); } }); e.target.value = ""; }} />
          </div>

          <FloatingField id="na-name" label="Name" value={name} onChange={setName} autoFocus onEnter={create} />
          <button className="xr-linky xr-name-random" onClick={roll}><Dice size={15} /> Not sure? Get a random one.</button>

          <div className="xr-field">
            <span className="xr-field-l">Game size</span>
            <BudgetPicker budget={budget} onChange={setBudget} />
          </div>

          <FloatingField id="na-desc" label="Description" value={desc} onChange={setDesc} textarea rows={3} />

          <FloatingField id="na-coll" label="Save to setting (optional)" value={collection} onChange={setCollection} />
          <input list="na-collections" hidden />
          {suggestions.length > 0 && (
            <div className="xr-coll-chips">
              {suggestions.map((c) => (
                <button key={c} className={`xr-coll-chip ${collection === c ? "on" : ""}`} onClick={() => setCollection(c)}>{c}</button>
              ))}
            </div>
          )}
        </div>
        <div className="xr-modal-foot">
          <button className="xr-btn primary" onClick={create}><Plus size={17} /> Create detachment</button>
        </div>
      </div>
      {picking && <IconPickerModal current={icon} onPick={(id) => { setIcon(id); setImage(null); setPicking(false); }} onUpload={() => { setPicking(false); inputRef.current && inputRef.current.click(); }} onClose={() => setPicking(false)} />}
    </div>
  );
}


/* load-a-preset modal: pick a genre setting, then a ready-made detachment */
function LoadPresetModal({ onLoad, onClose }) {
  const [sid, setSid] = useState(PRESET_SETTINGS[0] ? PRESET_SETTINGS[0].id : null);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const setting = PRESET_SETTINGS.find((s) => s.id === sid) || PRESET_SETTINGS[0];
  if (!setting) return null;
  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-tall xr-modal-wide" role="dialog" aria-modal="true" aria-label="Load a preset detachment" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Book size={22} /> Load a preset</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>
        <div className="xr-modal-tabs" role="tablist">
          {PRESET_SETTINGS.map((s) => (
            <button key={s.id} role="tab" aria-selected={sid === s.id} className={`xr-modal-tab ${sid === s.id ? "on" : ""}`} onClick={() => setSid(s.id)}>
              {s.name.split(":")[0]}
            </button>
          ))}
        </div>
        <div className="xr-modal-body">
          {setting.quote ? (
            <blockquote className="xr-preset-epi">
              <p className="xr-preset-quote">{setting.quote}</p>
              <footer className="xr-preset-by">{setting.quoteBy}</footer>
            </blockquote>
          ) : (
            <p className="xr-preset-blurb"><b>{setting.name}.</b> {setting.blurb}</p>
          )}
          {(setting.optionalRules || setting.url) && (
            <p className="xr-preset-notes">
              {setting.optionalRules && <span>Optional rules: {setting.optionalRules.join(", ")}.</span>}
              {setting.url && <a href={setting.url} target="_blank" rel="noopener"> {setting.url}</a>}
            </p>
          )}
          {setting.comingSoon || setting.detachments.length === 0 ? (
            <p className="xr-fac-empty">More to come.</p>
          ) : (
            <div className="xr-preset-grid">
              {setting.detachments.map((d) => (
                <button className="xr-preset-card" key={d.n} onClick={() => onLoad(d, setting)}>
                  {(d.image || d.icon) && <DetachIcon list={d.image ? { image: `${FACTION_BASE}${d.image}` } : d} size={42} className="xr-preset-img" style={d.badge ? { background: d.badge.bg, color: d.badge.fg } : undefined} />}
                  <span className="xr-preset-name">{d.name}</span>
                  {d.subtitle && <span className="xr-preset-sub">{d.subtitle}</span>}
                  <span className="xr-preset-foot">
                    <span className="xr-preset-meta">{detachmentUnits(d)} units, {detachmentPoints(d)} pts</span>
                    <span className="xr-preset-load"><Plus size={15} /> Load</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== *
 * DASHBOARD (saved detachments)
 * ================================================================== */
function Dashboard({ lists, onOpen, onCreate, onLoadPreset, onDup, onDel }) {
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const arr = Object.values(lists).sort((a, b) => (b.updated || 0) - (a.updated || 0));
  const collections = [...new Set(arr.map((l) => l.collection).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const groups = [
    ...collections.map((c) => ({ title: c, items: arr.filter((l) => l.collection === c) })),
    { title: null, items: arr.filter((l) => !l.collection) },
  ].filter((g) => g.items.length);
  const renderCard = (l) => {
    const { used, count } = validate(l.roster, l.budget, l.freeplay);
    const cmdIdx = l.roster.findIndex((u) => u.isCmd);
    const cmd = cmdIdx >= 0 ? l.roster[cmdIdx] : null;
    return (
      <div className="xr-list-card" key={l.id}>
        <button className="xr-list-open" onClick={() => onOpen(l.id)}>
          <DetachIcon list={l} size={54} className="xr-list-img" />
          <span className="xr-list-name">{l.name || "Untitled detachment"}</span>
          <span className="xr-list-meta"><b>{used}</b>/{l.budget} pts, {count} {count === 1 ? "unit" : "units"}</span>
          {cmd && <span className="xr-list-cmd"><Crown size={14} /> {unitDisplayName(cmd, cmdIdx)} <em>{UNIT_BY_ID[cmd.typeId].name}</em></span>}
          {l.description && <span className="xr-list-desc">{l.description}</span>}
        </button>
        <div className="xr-list-tools">
          <button onClick={() => { onDup(l.id); toast("Detachment duplicated"); }} aria-label="Duplicate" title="Duplicate"><CopyIc size={19} /></button>
          <button onClick={() => onDel(l.id)} aria-label="Delete" title="Delete"><Trash size={19} /></button>
        </div>
      </div>
    );
  };
  return (
    <div className="xr-home">
      <RailNav view="home" />
      <header className="xr-home-mast">
        <div className="xr-titlestack">
          <h1 className="xr-word">Xenos Rampant</h1>
          <span className="xr-sub">Detachment Builder</span>
        </div>
      </header>
      <main className="xr-home-body">
        {arr.length > 0 && (
          <div className="xr-home-bar">
            <h2 className="xr-home-h">Detachments <em>{arr.length}</em></h2>
            <div className="xr-home-bar-btns">
              <button className="xr-btn primary" onClick={() => setCreating(true)}><Plus size={20} /> New detachment</button>
              {PRESET_SETTINGS.length > 0 && (
                <button className="xr-btn" onClick={() => setLoading(true)} title="Start from a ready-made detachment out of the rulebook"><Book size={19} /> Load a preset</button>
              )}
            </div>
          </div>
        )}
        {arr.length === 0 ? (
          <div className="xr-home-welcome">
            <span className="xr-home-welcome-badge"><Alien size={48} /></span>
            <h2>Build your first detachment</h2>
            <p>Start from scratch, or load a ready-made force from the rulebook.</p>
            <div className="xr-home-welcome-btns">
              <button className="xr-btn primary" onClick={() => setCreating(true)}><Plus size={19} /> New detachment</button>
              {PRESET_SETTINGS.length > 0 && (
                <button className="xr-btn" onClick={() => setLoading(true)}><Book size={18} /> Load a preset</button>
              )}
            </div>
          </div>
        ) : groups.length === 1 && groups[0].title === null ? (
          <div className="xr-home-grid">{groups[0].items.map(renderCard)}</div>
        ) : (
          groups.map((g) => (
            <section className="xr-home-group" key={g.title || "__unfiled"}>
              <h3 className="xr-home-grouph">{g.title || "Unfiled"}</h3>
              <div className="xr-home-grid">{g.items.map(renderCard)}</div>
            </section>
          ))
        )}
      </main>
      {creating && <NewArmyModal collections={collections} onCreate={(opts) => { onCreate(opts); setCreating(false); }} onClose={() => setCreating(false)} />}
      {loading && <LoadPresetModal onLoad={(det, setting) => { onLoadPreset(det, setting); setLoading(false); }} onClose={() => setLoading(false)} />}
      <SiteFooter />
    </div>
  );
}

/* ================================================================== *
 * BUILDER: compact rows + detail panel
 * ================================================================== */
const UnitRow = React.memo(function UnitRow({ u, i, selected, dispatch, dragging, rowStyle, onDragDown, onDragMove, onDragUp, onDragCancel }) {
  const t = UNIT_BY_ID[u.typeId];
  const pts = unitPoints(u);
  const taken = [
    ...t.options.filter((o) => u.options[o.id]).map((o) => o.name),
    ...XENO_RULES.filter((x) => x.id in u.xenos).map((x) => xenoLabel(x, u)),
  ];
  return (
    <div className={`xr-urow-wrap ${dragging ? "dragging" : ""}`} style={rowStyle}>
      <button className={`xr-urow cat-${catOf(t)} ${selected ? "sel" : ""}`}
        data-key={u.key} data-index={i}
        onPointerDown={onDragDown} onPointerMove={onDragMove} onPointerUp={onDragUp} onPointerCancel={onDragCancel}
        onClick={() => nav(selected ? "#/build" : `#/build/${u.key}`)}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") { e.preventDefault(); dispatch({ type: "move", key: u.key, delta: -1 }); }
          if (e.key === "ArrowDown") { e.preventDefault(); dispatch({ type: "move", key: u.key, delta: 1 }); }
        }}
        aria-expanded={selected}>
        {u.image
          ? <span className="xr-urow-img" style={{ backgroundImage: `url(${u.image})` }} aria-hidden="true" />
          : <span className="xr-urow-ic" aria-hidden="true"><UnitIcon id={u.typeId} size={22} /></span>}
        <span className="xr-urow-body">
          <span className="xr-urow-top">
            {u.isCmd && <Crown className="xr-urow-crown" size={17} />}
            <span className="xr-urow-name">{unitDisplayName(u, i)}</span>
            <b className="xr-urow-pts">{pts}<i>pts</i></b>
          </span>
          <span className="xr-urow-sub">
            {t.name}, {unitSP(u)} SP{taken.length > 0 && <em> / {taken.join(", ")}</em>}
          </span>
        </span>
      </button>
      <div className="xr-urow-tools">
        <span className="xr-drag-handle" aria-hidden="true" title="Drag to reorder"><Grip size={14} /></span>
        <button onClick={() => { dispatch({ type: "dup", key: u.key }); toast("Unit duplicated"); }} title="Duplicate this unit" aria-label="Duplicate this unit"><CopyIc size={16} /></button>
        <button className="danger" onClick={() => { const removed = u, at = i; dispatch({ type: "del", key: u.key }); if (selected) nav("#/build"); toast(`${unitDisplayName(removed, at)} removed`, "ok", { label: "Undo", fn: () => dispatch({ type: "insertAt", unit: removed, index: at }) }); }} title="Remove this unit" aria-label="Remove this unit"><Trash size={16} /></button>
      </div>
    </div>
  );
});

function OptionRow({ active, disabled, name, cost, text, onToggle, children, showLore }) {
  const tip = text ? (typeof text === "string" ? text : [text.flavor, ruleBodyText(text)].filter(Boolean).join(" ")) : undefined;
  const lore = text && typeof text === "object" ? text.flavor : null;
  return (
    <div className={`xr-row ${active ? "on" : ""} ${disabled ? "off" : ""}`}>
      <div className="xr-row-line">
        <button className="xr-row-hit" onClick={onToggle} disabled={disabled} title={tip}>
          <span className={`xr-row-cost ${cost < 0 ? "neg" : cost > 0 ? "pos" : ""}`}>{costLabel(cost)}</span>
          <span className="xr-check" aria-hidden="true">{active ? <Check size={16} /> : null}</span>
          <span className="xr-row-name">{name}</span>
        </button>
      </div>
      {showLore && lore && !active && <p className="xr-row-lore">{lore}</p>}
      {active && <RuleText data={text} className="xr-row-text" />}
      {children}
    </div>
  );
}

/* flatten a rule (string or array of bullets) into one string, for plain-text spots */
const flatRule = (rule) => (Array.isArray(rule) ? rule.join(" ") : rule);
/* the mechanical body of a rule as a plain string (handles string, bullets, or a d6 table) */
const ruleBodyText = (text) => {
  if (!text || typeof text === "string") return text || "";
  if (text.table) return text.table.map((r) => `${r.roll} ${r.name}: ${r.text}`).join(" ");
  return flatRule(text.rule);
};

/* text of every named rule, keyed by name, so an ability that grants another rule
   can pull in that rule's definition */
const RULE_TEXT_BY_NAME = (() => {
  const map = {};
  for (const [name, text] of Object.entries(SPECIAL_RULES)) if (name !== "None") map[name] = ruleBodyText(text);
  for (const x of XENO_RULES) if (x.name && !(x.name in map)) map[x.name] = ruleBodyText(x.text);
  return map;
})();
/* which abilities actually GRANT another rule (not merely mention it). only these
   pull in a definition, so a unit is not saddled with every rule its text names */
const RULE_GRANTS = {
  "Demonic": ["Fearsome", "Unstable"],
};
/* definitions for rules a unit is granted by one of its own abilities */
function grantedRuleDefs(shownNames) {
  const shown = new Set([...shownNames].map((n) => n.toLowerCase()));
  const out = [];
  for (const name of shownNames) {
    for (const g of RULE_GRANTS[name] || []) {
      if (shown.has(g.toLowerCase())) continue;
      shown.add(g.toLowerCase());
      if (RULE_TEXT_BY_NAME[g]) out.push({ name: g, text: RULE_TEXT_BY_NAME[g] });
    }
  }
  return out;
}

/* renders a rule as an italic flavour line above the mechanical text. the body may be
   a plain string, an array of bullets (a list), or a d6 outcome table. */
function RuleText({ data, className }) {
  if (!data) return null;
  if (typeof data === "string") return <p className={className}>{data}</p>;
  const { flavor, rule, table } = data;
  if (table) {
    return (
      <div className={className}>
        {flavor && <span className="xr-flavor">{flavor}</span>}
        <div className="xr-d6">
          {table.map((r) => (
            <div className="xr-d6-row" key={r.roll}>
              <span className="xr-d6-n">{r.roll}</span>
              <span className="xr-d6-b"><b>{r.name}.</b> {r.flavor && <i className="xr-d6-flavor">{r.flavor} </i>}{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (Array.isArray(rule)) {
    return (
      <div className={className}>
        {flavor && <span className="xr-flavor">{flavor}</span>}
        <ul className="xr-rule-list">{rule.map((b, i) => <li key={i}>{b}</li>)}</ul>
      </div>
    );
  }
  return (
    <p className={className}>
      {flavor && <span className="xr-flavor">{flavor}</span>}
      {rule}
    </p>
  );
}

/* prepends a "requires X" note to a rule's mechanical text, keeping the flavour line intact */
function withPrereqNote(data, note) {
  if (!data) return note;
  if (typeof data === "string") return `${note} ${data}`;
  if (Array.isArray(data.rule)) return { flavor: data.flavor, rule: [note, ...data.rule] };
  return { flavor: data.flavor, rule: `${note} ${data.rule}` };
}

function RuleChip({ name, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`xr-chipwrap ${open ? "open" : ""}`}>
      <button className="xr-chip" onClick={() => setOpen((o) => !o)} aria-expanded={open} title={open ? "Hide rule text" : "Show rule text"}>
        <span>{name}</span>{text && <Caret className="xr-chip-caret" size={13} />}
      </button>
      {open && text && <RuleText data={text} className="xr-chip-text" />}
    </div>
  );
}

/* a bought ability: name and cost, expands to its rule text so you can read it */
const AbilityItem = React.memo(function AbilityItem({ name, cost, badge, text, tone, kind }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`xr-abil-item ${tone || ""} ${open ? "open" : ""}`}>
      <button className="xr-abil-item-h" onClick={() => setOpen((o) => !o)} aria-expanded={open} title={open ? "Hide rule text" : "Show rule text"}>
        <Caret className="xr-abil-item-caret" size={14} />
        <span className="xr-abil-item-name">{name}</span>
        {kind && <span className="xr-abil-item-kind">{kind}</span>}
        {badge != null && <span className="xr-abil-item-badge">{badge}</span>}
        {cost != null && <span className="xr-abil-item-cost">{costLabel(cost)}</span>}
      </button>
      {open && text && <RuleText data={text} className="xr-abil-item-text" />}
    </div>
  );
});

/* commander trait: roll one at random, or open the table and pick */
function TraitPicker({ u, tbl, trait, dispatch }) {
  const [picking, setPicking] = useState(false);
  const traits = COMMANDER_TABLES[tbl].traits;
  return (
    <div className="xr-traitpick">
      <div className="xr-traitpick-btns">
        <button className="xr-btn small" onClick={() => dispatch({ type: "roll", key: u.key })}>
          <Dice size={17} /> {trait ? "Reroll" : "Roll a trait"}
        </button>
        <button className={`xr-btn small ${picking ? "gold" : ""}`} onClick={() => setPicking((p) => !p)} aria-expanded={picking}>
          <Book size={16} /> Pick a trait
        </button>
      </div>
      {picking && (
        <div className="xr-trait-choices">
          {traits.map((tr, i) => (
            <button key={i} className={`xr-trait-choice ${u.traitIndex === i ? "on" : ""}`}
              onClick={() => { dispatch({ type: "trait", key: u.key, i }); setPicking(false); }}>
              <b>{tr.name}</b><span>{tr.flavor && <i className="xr-trait-flavor">{tr.flavor} </i>}{tr.rule}</span>
            </button>
          ))}
        </div>
      )}
      {trait && (
        <div className="xr-trait">
          <div className="xr-trait-name">{trait.name}</div>
          <p className="xr-trait-rule">{trait.flavor && <i className="xr-trait-flavor">{trait.flavor} </i>}{trait.rule}</p>
        </div>
      )}
    </div>
  );
}

const COMMANDER_RULES = [
  "Your Commander is part of a unit and may not join a different unit during the game.",
  "Your Commander grants a +1 modifier to all ordered activations and Courage tests taken by units within 12\" of its unit, including the Commander's own unit.",
  "These bonuses only apply if the Commander is not Suppressed.",
].join("\n");

/* commander traits, in a focused modal: pick the table, then roll or pick a trait */
function CommanderModal({ u, dispatch, onClose }) {
  const tbl = u.traitTable || "aggressive";
  const trait = typeof u.traitIndex === "number" ? COMMANDER_TABLES[tbl].traits[u.traitIndex] : null;
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-tall xr-modal-wide" role="dialog" aria-modal="true" aria-label="Commander traits" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Crown size={20} /> Commander traits</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Done"><XIc size={20} /></button>
        </div>
        <div className="xr-modal-body">
          <span className="xr-cmd-step">1. Trait table</span>
          <div className="xr-cmd-tablecards">
            {Object.entries(COMMANDER_TABLES).map(([key, ct]) => (
              <button key={key} className={`xr-cmd-tablecard ${tbl === key ? "on" : ""}`} onClick={() => dispatch({ type: "table", key: u.key, tbl: key })}>
                <b>{ct.label}</b><i>{ct.blurb}</i>
                <span className="xr-cmd-tablecard-check" aria-hidden="true">{tbl === key && <Check size={16} />}</span>
              </button>
            ))}
          </div>
          <span className="xr-cmd-step">2. Trait</span>
          <TraitPicker u={u} tbl={tbl} trait={trait} dispatch={dispatch} />
        </div>
        <div className="xr-modal-foot">
          <button className="xr-btn primary" onClick={onClose}><Check size={17} /> Done</button>
        </div>
      </div>
    </div>
  );
}

/* floating label: the field shows the unit type by default; once you focus or type,
   that label lifts above and you edit your own name. */
function FloatingName({ value, fallback, onChange }) {
  const [focused, setFocused] = useState(false);
  const floated = focused || (value && value.length > 0);
  return (
    <div className={`xr-flname ${floated ? "up" : ""}`}>
      <span className="xr-flname-l" aria-hidden="true">{fallback}</span>
      <input className="xr-flname-in" value={value} aria-label="Unit name" spellCheck={false}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function UnitPanel({ u, index, onClose, dispatch, onBuyAbilities, onEditCommander, factionPool }) {
  const t = UNIT_BY_ID[u.typeId];
  const pts = unitPoints(u);
  const sp = unitSP(u);
  const elig = useMemo(() => eligibleXenos(t), [t]);
  const topOpts = t.options.filter((o) => !o.requires);
  const stdRules = useMemo(() => unitSpecialRules(u, t), [t, u.options]);
  const tbl = u.traitTable || "aggressive";
  const trait = u.isCmd && typeof u.traitIndex === "number" ? COMMANDER_TABLES[tbl].traits[u.traitIndex] : null;
  const boughtOpts = t.options.filter((o) => u.options[o.id]);
  const boughtXenos = XENO_RULES.filter((x) => x.id in u.xenos);
  const custom = u.custom || [];
  const hasAbilities = true;

  return (
    <section className="xr-panel" aria-label="Unit editor">
      <div className="xr-panel-head">
        <button className="xr-iconbtn xr-panel-back" onClick={onClose} aria-label="Close unit"><Back size={20} /></button>
        <ImageUpload image={u.image} onChange={(img) => dispatch({ type: "image", key: u.key, image: img })} title="Add a picture to ID this unit" />
        <div className="xr-panel-id">
          <FloatingName value={u.name} fallback={`${t.name} ${index + 1}`}
            onChange={(name) => dispatch({ type: "name", key: u.key, name })} />
        </div>
        {factionPool && factionPool.length > 0 && (
          <button className="xr-iconbtn xr-name-roll" onClick={() => dispatch({ type: "name", key: u.key, name: randomName(factionPool, u.name) })}
            title="Roll a name from the faction pool" aria-label="Roll a unit name"><Dice size={19} /></button>
        )}
        <span className="xr-panel-pts"><b>{pts}</b><i>pts</i></span>
        <button className={`xr-btn small xr-cmd-btn ${u.isCmd ? "gold" : ""}`} onClick={() => u.isCmd ? onEditCommander() : dispatch({ type: "cmd", key: u.key })} title={u.isCmd ? "Edit commander traits" : COMMANDER_RULES} aria-label={u.isCmd ? "Commander (edit traits)" : "Make Commander"}>
          <Crown size={17} /> <span>{u.isCmd ? "Commander" : "Make Commander"}</span>
        </button>
      </div>

      <div className="xr-panel-cols">
        <div className="xr-panel-col xr-col-stats">
          <StatTable t={t} sp={sp} u={u} />
        </div>
        {stdRules.length > 0 && (
          <div className="xr-panel-col xr-col-rules">
            <Section title="Special rules" count={stdRules.length} defaultOpen>
              <div className="xr-chips">
                {stdRules.map((name) => (
                  <RuleChip key={name} name={name} text={SPECIAL_RULES[name]} />
                ))}
              </div>
            </Section>
          </div>
        )}
        <div className="xr-panel-col xr-col-abil">
          <div className="xr-abil">
            <div className="xr-abil-head">
              <h3 className="xr-abil-h">Abilities</h3>
              <button className="xr-btn small xr-manage" onClick={onBuyAbilities} title="Add or remove loadout options and xeno rules"><Plus size={16} /> Manage abilities</button>
            </div>
            {boughtOpts.length + boughtXenos.length + custom.length > 0 ? (
              <div className="xr-abil-list">
                {boughtOpts.map((o) => (
                  <AbilityItem key={o.id} name={o.name} cost={optCost(o)} text={o.text} kind="Option" />
                ))}
                {boughtXenos.map((x) => (
                  <AbilityItem key={x.id} name={`${x.name}${x.tiers ? ` (${x.tiers[typeof u.xenos[x.id] === "number" ? u.xenos[x.id] : 0].label})` : ""}`} cost={xenoCost(x, u.xenos[x.id])} text={x.text} tone="xeno" kind="Xeno rule" />
                ))}
                {(u.psychic || []).map((name) => {
                  const pw = PSYCHIC_POWERS.find((p) => p.name === name);
                  return pw ? <AbilityItem key={`pw-${name}`} name={pw.name} badge={pw.difficulty} tone="psy" kind="Psychic" text={`${pw.target} ${pw.duration} ${pw.effect}`} /> : null;
                })}
                {custom.map((c) => (
                  <AbilityItem key={c.id} name={c.name} cost={c.cost} text={c.text} tone="custom" kind="Custom" />
                ))}
              </div>
            ) : (
              <p className="xr-abil-empty">None bought.</p>
            )}
          </div>

          {u.isCmd && (
            <div className="xr-cmdcard">
              <div className="xr-cmdcard-h">
                <span className="xr-cmdcard-t"><Crown size={15} /> {COMMANDER_TABLES[tbl].label} traits</span>
                <button className="xr-btn small" onClick={onEditCommander}><Gear size={14} /> Edit</button>
              </div>
              {trait
                ? <p className="xr-cmdcard-trait"><b>{trait.name}.</b> {trait.flavor && <i className="xr-trait-flavor">{trait.flavor} </i>}{trait.rule}</p>
                : <p className="xr-cmdcard-none">No trait rolled or picked yet.</p>}
            </div>
          )}
        </div>
      </div>

      <div className="xr-panel-notes">
        <label className="xr-notes-l" htmlFor={`notes-${u.key}`}>Notes</label>
        <textarea id={`notes-${u.key}`} className="xr-field-in xr-field-area xr-notes-area" value={u.notes || ""}
          placeholder="Loadout reminders, lore, or tactics for this unit."
          onChange={(e) => dispatch({ type: "notes", key: u.key, notes: e.target.value })} rows={2} />
      </div>
    </section>
  );
}

/* which xeno rules open a config step when selected */
const isConfigurable = (x) => !!x.tiers;
const MERC_TABLE = XENO_BY_ID["mercenary"].table || [];

/* a one-line summary of a configurable rule's current setting, shown on its row */
function configSummary(x, u) {
  if (x.id === "mercenary") {
    const r = u.mercRoll ? MERC_TABLE.find((t) => t.roll === u.mercRoll) : null;
    return r ? `Rolled ${r.roll}: ${r.name}` : "Not rolled yet";
  }
  if (x.tiers) {
    const i = typeof u.xenos[x.id] === "number" ? u.xenos[x.id] : 0;
    const t = x.tiers[i];
    let s = t.label + (t.sub ? `, ${t.sub}` : "");
    if (x.id === "psychic") { const n = (u.psychic || []).length; s += `, ${n} of ${t.powers} powers`; }
    return s;
  }
  return "";
}

/* a xeno rule row: toggle to buy, and if it needs setup, a Configure button */
function XenoRow({ x, u, dispatch, onConfigure }) {
  const sel = x.id in u.xenos;
  const reqMet = xenoReqMet(x, u);
  const disabled = !sel && !reqMet;
  const cfg = isConfigurable(x);
  const toggle = () => {
    dispatch({ type: "xeno", key: u.key, xid: x.id });
    if (!sel && cfg) onConfigure(x.id, x.id === "psychic" ? "class" : x.id === "mercenary" ? "merc" : "tier");
  };
  return (
    <OptionRow active={sel} disabled={disabled} name={x.name} cost={xenoCost(x, u.xenos[x.id])} showLore
      text={disabled && x.requiresXeno ? withPrereqNote(x.text, `Requires the ${XENO_BY_ID[x.requiresXeno].name} xeno rule.`) : x.text}
      onToggle={toggle}>
      {sel && cfg && (
        <div className="xr-xcfg">
          <span className="xr-xcfg-cur">{configSummary(x, u)}</span>
          <button className="xr-btn small" onClick={() => onConfigure(x.id, x.id === "psychic" ? "powers" : x.id === "mercenary" ? "merc" : "tier")}>
            <Gear size={15} /> Configure
          </button>
        </div>
      )}
    </OptionRow>
  );
}

/* the psychic tab is now just its list of rules; setup happens in the config modal */
function PsychicTab({ u, rules, dispatch, onConfigure }) {
  return (
    <div className="xr-psy">
      {rules.map((x) => <XenoRow key={x.id} x={x} u={u} dispatch={dispatch} onConfigure={onConfigure} />)}
    </div>
  );
}

/* focused setup for a configurable rule: tier cards, the psychic class-then-powers
   flow, or the mercenary table with a roll. */
function XenoConfigModal({ rule, u, dispatch, onClose, initialStep }) {
  const [step, setStep] = useState(initialStep || "tier");
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const tierIdx = typeof u.xenos[rule.id] === "number" ? u.xenos[rule.id] : 0;

  const tierCards = (onPick) => (
    <div className="xr-cfg-cards">
      {rule.tiers.map((t, i) => (
        <button key={i} className={`xr-cfg-card ${tierIdx === i ? "on" : ""}`} onClick={() => onPick(i)}>
          <span className="xr-cfg-card-top"><b>{t.label}</b><i>{costLabel(t.cost)}</i></span>
          {t.sub && <span className="xr-cfg-card-sub">{t.sub}</span>}
          {t.desc && <span className="xr-cfg-card-desc">{t.desc}</span>}
          <span className="xr-cfg-card-check" aria-hidden="true">{tierIdx === i && <Check size={16} />}</span>
        </button>
      ))}
    </div>
  );

  const isPsychic = rule.id === "psychic";
  const isMerc = rule.id === "mercenary";
  const limit = isPsychic ? rule.tiers[tierIdx].powers : 0;
  const chosen = u.psychic || [];
  const title = isMerc ? "Mercenary" : isPsychic ? (step === "powers" ? `${rule.tiers[tierIdx].label} powers` : `${rule.name} class`) : `${rule.name}`;

  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-tall" role="dialog" aria-modal="true" aria-label={`Configure ${rule.name}`} onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          {isPsychic && step === "powers" && <button className="xr-iconbtn" onClick={() => setStep("class")} aria-label="Back to class"><Back size={20} /></button>}
          <span className="xr-modal-title"><Gear size={20} /> {title}</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Done"><XIc size={20} /></button>
        </div>
        <div className="xr-modal-body">
          {isMerc && (
            <>
              <div className="xr-merc-roll">
                <button className="xr-btn primary" onClick={() => dispatch({ type: "mercroll", key: u.key, roll: 1 + Math.floor(Math.random() * 6) })}>
                  <Dice size={18} /> Roll the die
                </button>
                <span className="xr-merc-note">Roll before the game, after Attacker and Defender are set. Or just pick a result.</span>
              </div>
              <div className="xr-merc-table">
                {MERC_TABLE.map((row) => (
                  <button key={row.roll} className={`xr-merc-row ${u.mercRoll === row.roll ? "on" : ""}`} onClick={() => dispatch({ type: "mercroll", key: u.key, roll: row.roll })}>
                    <span className="xr-merc-d">{row.roll}</span>
                    <span className="xr-merc-body"><b>{row.name}</b><i>{row.text}</i></span>
                    <span className="xr-merc-check" aria-hidden="true">{u.mercRoll === row.roll && <Check size={16} />}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {isPsychic && step === "class" && tierCards((i) => { dispatch({ type: "tier", key: u.key, xid: rule.id, i }); setStep("powers"); })}

          {isPsychic && step === "powers" && (
            <div className="xr-psy-powers">
              <div className="xr-psy-powers-h">
                <h4>Choose powers</h4>
                <span className={`xr-psy-count ${chosen.length >= limit ? "full" : ""}`}>{chosen.length} of {limit} chosen</span>
              </div>
              <div className="xr-psy-table">
                <div className="xr-psy-tr xr-psy-head"><span aria-hidden="true" /><span>Power</span><span>Diff.</span><span>Target</span><span>Duration</span><span>Effect</span></div>
                {PSYCHIC_POWERS.map((pw) => {
                  const on = chosen.includes(pw.name);
                  const atLimit = chosen.length >= limit && !on;
                  return (
                    <button key={pw.name} className={`xr-psy-tr xr-psy-row ${on ? "on" : ""}`} disabled={atLimit}
                      onClick={() => dispatch({ type: "psypower", key: u.key, power: pw.name })}
                      title={on ? "Remove this power" : atLimit ? "This class has no free power slots" : "Add this power"}>
                      <span className="xr-psy-check">{on && <Check size={14} />}</span>
                      <span className="xr-psy-name">{pw.name}</span>
                      <span className="xr-psy-diff">{pw.difficulty}</span>
                      <span className="xr-psy-target">{pw.target}</span>
                      <span className="xr-psy-dur">{pw.duration}</span>
                      <span className="xr-psy-effect">{pw.effect}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {!isMerc && !isPsychic && tierCards((i) => { dispatch({ type: "tier", key: u.key, xid: rule.id, i }); onClose(); })}
        </div>
        <div className="xr-modal-foot">
          <button className="xr-btn primary" onClick={onClose}><Check size={17} /> Done</button>
        </div>
      </div>
    </div>
  );
}

/* buy-abilities modal: abilities in tabs by type (progressive disclosure) */
function AbilitiesModal({ u, dispatch, onClose }) {
  const t = UNIT_BY_ID[u.typeId];
  const topOpts = t.options.filter((o) => !o.requires);
  const subsOf = (pid) => t.options.filter((o) => o.requires === pid);
  const elig = useMemo(() => eligibleXenos(t), [t]);
  const eligXeno = elig.filter((x) => !isPsychicRule(x));
  const eligPsy = elig.filter(isPsychicRule);
  const custom = u.custom || [];
  const tabs = [];
  if (topOpts.length) tabs.push({ id: "load", label: "Options", n: topOpts.filter((o) => u.options[o.id]).length });
  if (eligXeno.length) tabs.push({ id: "xeno", label: "Xeno rules", n: eligXeno.filter((x) => x.id in u.xenos).length });
  if (eligPsy.length) tabs.push({ id: "psychic", label: "Psychic", n: eligPsy.filter((x) => x.id in u.xenos).length });
  tabs.push({ id: "custom", label: "Custom", n: custom.length });
  const [tab, setTab] = useState(tabs[0] ? tabs[0].id : "load");
  const [q, setQ] = useState("");
  const [config, setConfig] = useState(null);
  const openConfig = (id, step) => setConfig({ id, step });
  const needle = q.trim().toLowerCase();
  const searchText = (text) => (typeof text === "string" ? text : text ? [text.flavor, ruleBodyText(text)].filter(Boolean).join(" ") : "");
  const matches = (name, text) => !needle || `${name} ${searchText(text)}`.toLowerCase().includes(needle);
  const foundOpts = needle ? topOpts.filter((o) => matches(o.name, o.text) || subsOf(o.id).some((s) => matches(s.name, s.text))) : [];
  const foundXeno = needle ? [...eligXeno, ...eligPsy].filter((x) => matches(x.name, x.text)) : [];
  const noHits = needle && !foundOpts.length && !foundXeno.length;
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const bought = t.options.filter((o) => u.options[o.id]).length + Object.keys(u.xenos).length + custom.length;
  return (
    <>
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-tall" role="dialog" aria-modal="true" aria-label="Buy abilities" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Plus size={22} /> {t.name} abilities</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Done"><XIc size={20} /></button>
        </div>
        <div className="xr-abil-searchbar">
          <input className="xr-abil-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search abilities by name or effect" spellCheck={false} aria-label="Search abilities" />
          {q && <button className="xr-iconbtn small" onClick={() => setQ("")} aria-label="Clear search"><XIc size={16} /></button>}
        </div>
        {tabs.length > 1 && (
          <div className="xr-modal-tabs" role="tablist">
            {tabs.map((tb) => (
              <button key={tb.id} role="tab" aria-selected={tab === tb.id} className={`xr-modal-tab ${tab === tb.id ? "on" : ""}`} onClick={() => setTab(tb.id)}>
                {tb.label}{tb.n > 0 && <em className="xr-tab-n">{tb.n}</em>}
              </button>
            ))}
          </div>
        )}
        <div className="xr-modal-body">
          {needle ? (
            <>
              {foundOpts.map((o) => {
                const on = !!u.options[o.id];
                const subs = subsOf(o.id);
                return (
                  <OptionRow key={o.id} active={on} name={o.name} cost={optCost(o)} text={o.text}
                    onToggle={() => dispatch({ type: "opt", key: u.key, oid: o.id })}>
                    {on && subs.length > 0 && (
                      <div className="xr-subs">
                        {subs.map((s) => (
                          <OptionRow key={s.id} active={!!u.options[s.id]} name={s.name} cost={optCost(s)} text={s.text}
                            onToggle={() => dispatch({ type: "opt", key: u.key, oid: s.id })} />
                        ))}
                      </div>
                    )}
                  </OptionRow>
                );
              })}
              {foundXeno.map((x) => <XenoRow key={x.id} x={x} u={u} dispatch={dispatch} onConfigure={openConfig} />)}
              {noHits && <p className="xr-abil-empty">No abilities match that search.</p>}
            </>
          ) : (
          <>
          {tab === "load" && topOpts.map((o) => {
            const on = !!u.options[o.id];
            const subs = subsOf(o.id);
            return (
              <OptionRow key={o.id} active={on} name={o.name} cost={optCost(o)} text={o.text}
                onToggle={() => dispatch({ type: "opt", key: u.key, oid: o.id })}>
                {on && subs.length > 0 && (
                  <div className="xr-subs">
                    {subs.map((s) => (
                      <OptionRow key={s.id} active={!!u.options[s.id]} name={s.name} cost={optCost(s)} text={s.text}
                        onToggle={() => dispatch({ type: "opt", key: u.key, oid: s.id })} />
                    ))}
                  </div>
                )}
              </OptionRow>
            );
          })}
          {tab === "xeno" && eligXeno.map((x) => <XenoRow key={x.id} x={x} u={u} dispatch={dispatch} onConfigure={openConfig} />)}
          {tab === "psychic" && <PsychicTab u={u} rules={eligPsy} dispatch={dispatch} onConfigure={openConfig} />}
          {tab === "custom" && (
            <CustomTab u={u} custom={custom} dispatch={dispatch} />
          )}
          </>
          )}
        </div>
        <div className="xr-modal-foot">
          <span className="xr-modal-count">{bought} bought</span>
          <button className="xr-btn primary" onClick={onClose}><Check size={17} /> Done</button>
        </div>
      </div>
    </div>
    {config && <XenoConfigModal rule={XENO_BY_ID[config.id]} u={u} dispatch={dispatch} initialStep={config.step} onClose={() => setConfig(null)} />}
    </>
  );
}

/* custom abilities: house-ruled options a unit can't get from the rulebook */
function CustomTab({ u, custom, dispatch }) {
  const [adding, setAdding] = useState(false);
  const [editId, setEditId] = useState(null);
  const save = (values, id) => {
    if (id) dispatch({ type: "customEdit", key: u.key, cid: id, patch: values });
    else dispatch({ type: "customAdd", key: u.key, ...values });
    setAdding(false); setEditId(null);
  };
  return (
    <div className="xr-custom-tab">
      <p className="xr-custom-intro">A house rule for this unit. Costs points and prints with the roster.</p>
      {custom.map((c) => (
        editId === c.id ? (
          <CustomAbilityForm key={c.id} initial={c} onSave={(v) => save(v, c.id)} onCancel={() => setEditId(null)} />
        ) : (
          <div className="xr-custom-row" key={c.id}>
            <div className="xr-custom-row-head">
              <span className={`xr-row-cost ${c.cost < 0 ? "neg" : c.cost > 0 ? "pos" : ""}`}>{costLabel(c.cost)}</span>
              <span className="xr-custom-row-name">{c.name || "Untitled ability"}</span>
              <button className="xr-iconbtn small" onClick={() => { setEditId(c.id); setAdding(false); }} aria-label="Edit"><Edit size={16} /></button>
              <button className="xr-iconbtn small" onClick={() => dispatch({ type: "customDel", key: u.key, cid: c.id })} aria-label="Delete"><Trash size={16} /></button>
            </div>
            {c.text && <p className="xr-custom-row-text">{c.text}</p>}
          </div>
        )
      ))}
      {adding ? (
        <CustomAbilityForm onSave={(v) => save(v)} onCancel={() => setAdding(false)} />
      ) : (
        <button className="xr-btn small" onClick={() => { setAdding(true); setEditId(null); }}><Plus size={16} /> Add custom ability</button>
      )}
    </div>
  );
}
function CustomAbilityForm({ initial, onSave, onCancel }) {
  const [name, setName] = useState(initial?.name || "");
  const [cost, setCost] = useState(typeof initial?.cost === "number" ? initial.cost : 0);
  const [text, setText] = useState(initial?.text || "");
  return (
    <div className="xr-custom-form">
      <label className="xr-field">
        <span className="xr-field-l">Name</span>
        <input className="xr-field-in" value={name} onChange={(e) => setName(e.target.value)} placeholder="Eg. Scavenged Plating" autoFocus spellCheck={false} />
      </label>
      <label className="xr-field">
        <span className="xr-field-l">Cost <em>points, negative for a downgrade</em></span>
        <input className="xr-field-in xr-custom-cost" type="number" value={cost}
          onChange={(e) => setCost(parseInt(e.target.value, 10) || 0)} />
      </label>
      <label className="xr-field">
        <span className="xr-field-l">Rule text <em>optional</em></span>
        <textarea className="xr-field-in xr-field-area" value={text} onChange={(e) => setText(e.target.value)}
          rows={3} placeholder="What it does at the table." />
      </label>
      <div className="xr-custom-form-foot">
        <button className="xr-btn small" onClick={onCancel}>Cancel</button>
        <button className="xr-btn small primary" disabled={!name.trim()} onClick={() => onSave({ name: name.trim(), cost, text: text.trim() })}>
          <Check size={16} /> Save
        </button>
      </div>
    </div>
  );
}

const CATALOG_STATS = [
  { img: icoAttack, label: "Attack", get: (t) => t.prof.atk },
  { img: icoDefence, label: "Defence", get: (t) => t.prof.def },
  { img: icoShoot, label: "Shoot", get: (t) => splitRange(t.prof.sho).main },
  { img: icoArmour, label: "Armour", get: (t) => t.prof.arm },
  { img: icoMove, label: "Move", get: (t) => t.prof.mov },
  { img: icoStrength, label: "Strength", get: (t) => t.sp },
];
const CatalogCard = React.memo(function CatalogCard({ t, onAdd }) {
  const stdRules = t.special.filter((s) => s !== "None");
  return (
    <button className={`xr-cat-card cat-${catOf(t)}`} onClick={() => onAdd(t.id)}>
      <span className="xr-cat-top">
        <span className="xr-cat-name">{t.name}</span>
      </span>
      <span className="xr-cat-role">{t.role}</span>
      <span className="xr-cat-acts" aria-label="Activation">
        {ACT_KEYS.map(({ key, label }) => {
          const o = orderFrom(t.act, key, t.noAttack);
          return (
            <span className={`xr-cat-act k-${key}`} key={key} title={`${label}, roll 2d6`}>
              <b>{o ? o.val : "-"}{o && o.free && <sup>F</sup>}</b>
              <em>{label.slice(0, 3)}</em>
            </span>
          );
        })}
      </span>
      <span className="xr-cat-stats" aria-label="Profile">
        {CATALOG_STATS.map((s) => {
          const raw = s.get(t);
          const v = raw == null || raw === "n/a" || raw === "—" ? "-" : String(raw);
          return (
            <span className="xr-cat-stat" key={s.label} title={s.label}>
              <img src={s.img} alt="" width="22" height="22" />
              <b>{v}</b>
            </span>
          );
        })}
      </span>
      {stdRules.length > 0 && (
        <span className="xr-cat-rules" aria-label="Standard rules">
          {stdRules.map((name) => (
            <span className="xr-cat-rule" key={name} title={typeof SPECIAL_RULES[name] === "string" ? SPECIAL_RULES[name] : name}>{name}</span>
          ))}
        </span>
      )}
      <span className="xr-cat-add"><Plus size={15} /> Add <b>{t.base}pts</b></span>
    </button>
  );
});

function AddUnitModal({ onAdd, onClose }) {
  const [cat, setCat] = useState("inf");
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const units = UNIT_TYPES.filter((t) => catOf(t) === cat);
  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-tall xr-modal-wide xr-modal-addunit" role="dialog" aria-modal="true" aria-label="Add unit" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Plus size={22} /> Add unit</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>
        <div className="xr-stabs" role="tablist" style={{ "--n": CATS.length, "--i": Math.max(0, CATS.findIndex((c) => c.id === cat)) }}>
          <span className="xr-stabs-ind" aria-hidden="true" />
          {CATS.map((c) => (
            <button key={c.id} role="tab" aria-selected={cat === c.id}
              className={`xr-stab cat-${c.id} ${cat === c.id ? "on" : ""}`} onClick={() => setCat(c.id)}>
              <c.Icon size={18} /> <span>{c.label}</span>
            </button>
          ))}
        </div>
        <div className="xr-modal-body">
          <div className="xr-pick-grid">
            {units.map((t) => <CatalogCard key={t.id} t={t} onAdd={onAdd} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Builder({ list, selectedKey, dispatch, updateList, onDelete }) {
  const { roster, budget } = list;
  const [adding, setAdding] = useState(false);
  const [issuesOpen, setIssuesOpen] = useState(false);
  const [abilOpen, setAbilOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [shorting, setShorting] = useState(false);
  const [emblemOpen, setEmblemOpen] = useState(false);
  const emblemFileRef = useRef(null);
  useEffect(() => {
    if (!settingsOpen && !shareOpen && !issuesOpen) return;
    const onKey = (e) => { if (e.key !== "Escape") return; setSettingsOpen(false); setShareOpen(false); setIssuesOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [settingsOpen, shareOpen, issuesOpen]);
  /* drag-to-reorder: rows shift live via CSS transform while dragging, and the
     actual roster order is only committed once, on pointer-up. */
  const [drag, setDrag] = useState(null); // { key, index, startY, y, rowH, pointerId, moved }
  const dragTarget = drag && drag.moved ? Math.max(0, Math.min(roster.length - 1, drag.index + Math.round((drag.y - drag.startY) / drag.rowH))) : null;
  const beginDrag = useCallback((e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (e.pointerType === "touch" && !e.target.closest(".xr-drag-handle")) return;
    const btn = e.currentTarget;
    const wrap = btn.closest(".xr-urow-wrap");
    if (!wrap) return;
    btn.setPointerCapture(e.pointerId);
    setDrag({ key: btn.dataset.key, index: Number(btn.dataset.index), startY: e.clientY, y: e.clientY, rowH: wrap.offsetHeight, pointerId: e.pointerId, moved: false });
  }, []);
  const moveDrag = useCallback((e) => {
    setDrag((d) => {
      if (!d || e.pointerId !== d.pointerId) return d;
      const moved = d.moved || Math.abs(e.clientY - d.startY) > 4;
      return { ...d, y: e.clientY, moved };
    });
  }, []);
  const finishDrag = useCallback((e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    if (drag.moved) {
      e.preventDefault();
      const toIndex = Math.max(0, Math.min(roster.length - 1, drag.index + Math.round((drag.y - drag.startY) / drag.rowH)));
      if (toIndex !== drag.index) dispatch({ type: "reorder", key: drag.key, toIndex });
    }
    setDrag(null);
  }, [drag, roster.length, dispatch]);
  const cancelDrag = useCallback((e) => {
    setDrag((d) => (d && e.pointerId === d.pointerId) ? null : d);
  }, []);
  const { issues, used, count } = useMemo(() => validate(roster, budget, list.freeplay), [roster, budget, list.freeplay]);
  const errors = issues.filter((i) => i.lvl === "err");
  const status = errors.length ? "err" : count === 0 ? "empty" : "ok";
  const selIdx = roster.findIndex((u) => u.key === selectedKey);
  const sel = selIdx >= 0 ? roster[selIdx] : null;
  const pct = Math.min(100, budget ? (used / budget) * 100 : 0);
  const over = used > budget;

  const copyList = () => {
    const lines = [`${list.name || "Untitled detachment"} (${used}/${budget} pts, ${count} units)`];
    roster.forEach((u, i) => {
      const t = UNIT_BY_ID[u.typeId];
      lines.push(`${u.isCmd ? "[CMD] " : ""}${unitDisplayName(u, i)} (${t.name}, ${unitPoints(u)} pts, ${unitSP(u)} SP)`);
      t.options.filter((o) => u.options[o.id]).forEach((o) => lines.push(`- ${o.name} (${costLabel(optCost(o))})`));
      XENO_RULES.filter((x) => x.id in u.xenos).forEach((x) => lines.push(`- ${x.name} (${costLabel(xenoCost(x, u.xenos[x.id]))})`));
      (u.psychic || []).forEach((n) => { const pw = PSYCHIC_POWERS.find((p) => p.name === n); if (pw) lines.push(`- Psychic power: ${pw.name} (${pw.difficulty})`); });
      (u.custom || []).forEach((c) => lines.push(`- ${c.name} (${costLabel(c.cost)})`));
      const trait = u.isCmd && typeof u.traitIndex === "number" ? COMMANDER_TABLES[u.traitTable || "aggressive"].traits[u.traitIndex] : null;
      if (trait) lines.push(`- Trait: ${trait.name}`);
    });
    copyText(lines.join("\n"), "Roster copied as text", "Could not copy the roster");
  };

  const shareUrl = () => `${window.location.origin}${window.location.pathname}#/s/${encodeShare(list)}`;
  const shareLink = () => {
    copyText(shareUrl(), "Share link copied. It rebuilds this detachment in any browser.", "Could not copy the link");
    setShareOpen(false);
  };
  const shortLink = async () => {
    const url = shareUrl();
    setShorting(true);
    let short = null;
    try {
      const res = await fetch("https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url));
      const body = (await res.text()).trim();
      if (res.ok && /^https?:\/\//.test(body)) short = body;
    } catch { /* offline or blocked: fall back to the full link below */ }
    setShorting(false);
    if (short) {
      const bare = short.replace(/^https?:\/\//, "");
      const ok = await copyText(short, "Short link copied: " + bare, null);
      if (!ok) toast("Short link: " + bare, "info");
      setShareOpen(false);
    } else {
      const ok = await copyText(url, "Shortener unavailable. Copied the full link instead.", null);
      if (!ok) toast("Could not reach the shortener. Use Copy link instead.", "err");
    }
  };

  return (
    <div className="xr-build">
      <RailNav view="build" bottom={<RailMuster used={used} budget={budget} pct={pct} over={over} status={status} count={count} errors={errors} issues={issues} issuesOpen={issuesOpen} setIssuesOpen={setIssuesOpen} updateList={updateList} />} />
      <header className="xr-mast">
        <div className="xr-mast-row">
          <button className="xr-mast-emblem" onClick={() => setEmblemOpen(true)} title="Choose an emblem or upload a picture" aria-label="Choose an emblem or upload a picture">
            {(list.image || list.icon)
              ? <DetachIcon list={list} size={26} className="xr-mast-img" />
              : <span className="xr-mast-img xr-mast-emblem-add"><Image size={20} /></span>}
          </button>
          <input ref={emblemFileRef} type="file" accept="image/*" hidden
            onChange={(e) => { const f = e.target.files && e.target.files[0]; if (f) downscaleImage(f, 256, (d) => { if (d) updateList({ image: d, icon: undefined }); }); e.target.value = ""; }} />
          <input className="xr-detname" value={list.name} placeholder="Name your detachment"
            onChange={(e) => updateList({ name: e.target.value })} spellCheck={false} />
          <div className="xr-mastptswrap">
            <button className={`xr-mastpts ${over ? "over" : pct >= 90 ? "near" : ""}`} onClick={() => setIssuesOpen((o) => !o)}
              aria-expanded={issuesOpen} title="Points and status">
              <b>{used}</b><span>/{budget}</span>
              {status === "ok" && <em className="xr-mastpts-s ok"><Check size={13} />{count}</em>}
              {status === "err" && <em className="xr-mastpts-s err"><Alert size={13} />{errors.length}</em>}
            </button>
            {issuesOpen && (
              <>
                <button className="xr-settings-scrim" tabIndex={-1} aria-label="Close" onClick={() => setIssuesOpen(false)} />
                <div className="xr-issue-pop xr-mastpop open" role="region" aria-label="Detachment status">
                  {issues.length > 0 ? (
                    <>
                      <span className="xr-mastpop-h"><Alert size={15} /> {issues.length} {issues.length === 1 ? "issue" : "issues"} to fix</span>
                      {issues.map((it, i) => <span key={i} className={`xr-issue ${it.lvl}`}>{it.msg}</span>)}
                    </>
                  ) : (
                    <span className="xr-mastpop-ok"><Check size={15} /> Looks good. {count} {count === 1 ? "unit" : "units"}, {used}/{budget} points.</span>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="xr-actions">
            <button className="xr-btn small xr-act" onClick={copyList} title="Copy the roster to the clipboard as plain text" aria-label="Copy roster as text"><CopyIc size={18} /><span>Copy</span></button>
            <div className="xr-sharewrap">
              <button className="xr-btn small xr-act" onClick={() => setShareOpen((o) => !o)}
                title="Share this detachment as a link" aria-label="Share link" aria-expanded={shareOpen}><ShareIc size={18} /><span>Share</span></button>
              {shareOpen && (
                <>
                  <button className="xr-settings-scrim" tabIndex={-1} aria-label="Close share menu" onClick={() => setShareOpen(false)} />
                  <div className="xr-settings-pop xr-share-pop" role="dialog" aria-label="Share this detachment">
                    <p className="xr-share-note">A share link rebuilds this whole detachment in anyone's browser. Everything travels inside the link, so it keeps working offline. Pictures are left out to keep it short.</p>
                    <button className="xr-btn small block" onClick={shareLink}><LinkIc size={16} /> Copy link</button>
                    <button className="xr-btn small block" onClick={shortLink} disabled={shorting}><Bolt size={16} /> {shorting ? "Shortening…" : "Copy short link"}</button>
                    <p className="xr-share-sub">The short link sends your link to TinyURL to shrink it, so it needs a connection. The plain link always works.</p>
                  </div>
                </>
              )}
            </div>
            <button className="xr-btn small xr-act" onClick={() => nav("#/print")} title="Open the print sheet" aria-label="Print sheet"><Printer size={18} /><span>Print</span></button>
            <div className="xr-settingswrap">
              <button className={`xr-btn small xr-act ${list.freeplay ? "gold" : ""}`} onClick={() => setSettingsOpen((o) => !o)}
                title="Detachment settings" aria-label="Detachment settings" aria-expanded={settingsOpen}><Gear size={18} /><span>Settings</span></button>
              {settingsOpen && (
                <>
                  <button className="xr-settings-scrim" tabIndex={-1} aria-label="Close settings" onClick={() => setSettingsOpen(false)} />
                  <div className="xr-settings-pop" role="dialog" aria-label="Detachment settings">
                    <label className="xr-set-field">
                      <span className="xr-set-field-l">Description <em>optional</em></span>
                      <textarea className="xr-field-in xr-field-area" value={list.description || ""} onChange={(e) => updateList({ description: e.target.value })}
                        placeholder="Backstory, tactics, or notes." rows={3} />
                    </label>
                    <div className="xr-set-field xr-set-img">
                      <span className="xr-set-field-l">Custom picture</span>
                      <div className="xr-set-img-row">
                        <ImageUpload image={list.image} onChange={(img) => updateList({ image: img || undefined })} title="Upload a detachment picture" />
                        <span className="xr-set-field-h">Overrides the emblem on the card and header.</span>
                      </div>
                    </div>
                    <button className={`xr-set-toggle ${list.freeplay ? "on" : ""}`} onClick={() => updateList({ freeplay: !list.freeplay })} aria-pressed={!!list.freeplay}>
                      <span className="xr-set-toggle-box">{list.freeplay && <Check size={14} />}</span>
                      <span className="xr-set-toggle-txt"><b>Free play</b><i>Ignore composition limits (unit count, vehicles, one Commander).</i></span>
                    </button>
                    <button className="xr-btn small danger xr-set-delete" onClick={onDelete}><Trash size={16} /> Delete this detachment</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className={`xr-build-body ${sel ? "has-sel" : ""}`}>
        <main className="xr-ulist" aria-label="Detachment roster">
          {roster.length === 0 ? (
            <button className="xr-firstunit" onClick={() => setAdding(true)}>
              <span className="xr-firstunit-badge"><Plus size={30} /></span>
              <span className="xr-firstunit-txt">
                <b>Add your first unit</b>
              </span>
            </button>
          ) : (
            <>
              {roster.length > 1 && (
                <div className="xr-ulist-file" role="group" aria-label="Order units">
                  <span className="xr-file-l">File by</span>
                  <button className="xr-file-btn" onClick={() => dispatch({ type: "sort", by: "cat" })} title="Group by type">Type</button>
                  <button className="xr-file-btn" onClick={() => dispatch({ type: "sort", by: "pts" })} title="Sort by points, highest first">Points</button>
                  <button className="xr-file-btn" onClick={() => dispatch({ type: "sort", by: "name" })} title="Sort alphabetically by name">Name</button>
                </div>
              )}
              <div className="xr-ulist-rows">
                {roster.map((u, i) => {
                  const isDragged = drag && drag.moved && u.key === drag.key;
                  let rowStyle;
                  if (isDragged) {
                    rowStyle = { transform: `translateY(${drag.y - drag.startY}px)` };
                  } else if (drag && drag.moved) {
                    if (drag.index < dragTarget && i > drag.index && i <= dragTarget) rowStyle = { transform: `translateY(${-drag.rowH}px)` };
                    else if (drag.index > dragTarget && i >= dragTarget && i < drag.index) rowStyle = { transform: `translateY(${drag.rowH}px)` };
                  }
                  return (
                    <UnitRow key={u.key} u={u} i={i} selected={u.key === selectedKey} dispatch={dispatch}
                      dragging={isDragged} rowStyle={rowStyle}
                      onDragDown={beginDrag} onDragMove={moveDrag} onDragUp={finishDrag} onDragCancel={cancelDrag} />
                  );
                })}
              </div>
              <button className="xr-add-sticky" onClick={() => setAdding(true)}><Plus size={20} /> Add unit</button>
            </>
          )}
        </main>
        <div className="xr-detail">
          {sel ? (
            <UnitPanel key={sel.key} u={sel} index={selIdx} dispatch={dispatch} onClose={() => nav("#/build")} onBuyAbilities={() => setAbilOpen(true)} onEditCommander={() => setCmdOpen(true)} factionPool={ALL_NAMES} />
          ) : (
            roster.length > 0 && (
              <div className="xr-detoverview" aria-label="Detachment notes">
                <div className="xr-detoverview-head">
                  <DetachIcon list={list} size={30} className="xr-detoverview-img" />
                  <div className="xr-detoverview-id">
                    <h2 className="xr-detoverview-name">{list.name || "Untitled detachment"}</h2>
                    <span className="xr-detoverview-meta">{used}/{budget} pts, {count} {count === 1 ? "unit" : "units"}</span>
                  </div>
                </div>
                <label className="xr-notes-l" htmlFor="det-notes">Detachment notes</label>
                <textarea id="det-notes" className="xr-field-in xr-field-area xr-detoverview-notes" value={list.description || ""}
                  placeholder="Backstory, tactics, or notes for the whole detachment. Shows on the list card and the print sheet."
                  onChange={(e) => updateList({ description: e.target.value })} rows={6} />
                <p className="xr-detoverview-hint"><Alien size={16} /> Select a unit on the left to edit it.</p>
              </div>
            )
          )}
        </div>
      </div>

      {adding && <AddUnitModal onAdd={(id) => { dispatch({ type: "add", typeId: id }); setAdding(false); toast(`${UNIT_BY_ID[id]?.name || "Unit"} added`); }} onClose={() => setAdding(false)} />}
      {abilOpen && sel && <AbilitiesModal u={sel} dispatch={dispatch} onClose={() => setAbilOpen(false)} />}
      {cmdOpen && sel && sel.isCmd && <CommanderModal u={sel} dispatch={dispatch} onClose={() => setCmdOpen(false)} />}
      {emblemOpen && <IconPickerModal current={list.icon} onPick={(id) => { updateList({ icon: id, image: undefined }); setEmblemOpen(false); }} onUpload={() => { setEmblemOpen(false); emblemFileRef.current && emblemFileRef.current.click(); }} onClose={() => setEmblemOpen(false)} />}

      <SiteFooter />
    </div>
  );
}

/* ================================================================== *
 * PRINT: preview + options
 * ================================================================== */
function PrintView({ list }) {
  const { roster, budget } = list;
  const [opts, setOpts] = useState({ stats: true, upgrades: true, rules: true, traits: true, contrast: false, large: false, compact: false });
  const { used, count } = useMemo(() => validate(roster, budget, list.freeplay), [roster, budget, list.freeplay]);
  const tog = (k) => setOpts((o) => ({ ...o, [k]: !o[k] }));

  /* special rules carried by two or more units are defined once in an Abilities
     Reference at the end; each unit then lists only the name. This is the main
     way the sheet stays short when many units share Firefight, Go To Ground, etc. */
  const refRules = useMemo(() => {
    if (!opts.rules) return { shared: new Set(), list: [] };
    const count = new Map(), body = new Map();
    roster.forEach((u) => {
      const t = UNIT_BY_ID[u.typeId];
      unitSpecialRules(u, t).forEach((n) => {
        const text = SPECIAL_RULES[n];
        if (!text) return;
        count.set(n, (count.get(n) || 0) + 1);
        if (!body.has(n)) body.set(n, typeof text === "string" ? text : ruleBodyText(text));
      });
    });
    const shared = new Set([...count].filter(([, c]) => c >= 2).map(([n]) => n));
    const listOut = [...shared].sort((a, b) => a.localeCompare(b)).map((n) => ({ name: n, text: body.get(n) }));
    return { shared, list: listOut };
  }, [roster, opts.rules]);

  return (
    <div className={`xr-printview ${opts.contrast ? "contrast" : ""} ${opts.large ? "large" : ""} ${opts.compact ? "compact" : ""}`}>
      <RailNav view="print" />
      <div className="xr-print-chrome">
        <button className="xr-iconbtn" onClick={() => nav("#/build")} aria-label="Back to builder"><Back size={20} /></button>
        <h2 className="xr-print-h">Print setup</h2>
        <div className="xr-print-opts">
          <span className="xr-print-optlabel">Sections</span>
          {[["stats", "Stat table"], ["upgrades", "Upgrades and xeno rules"], ["rules", "Special rules"], ["traits", "Commander trait"]].map(([k, lab]) => (
            <label key={k} className="xr-print-check">
              <input type="checkbox" checked={opts[k]} onChange={() => tog(k)} /> {lab}
            </label>
          ))}
          <span className="xr-print-optlabel">Readability</span>
          <label className="xr-print-check"><input type="checkbox" checked={opts.compact} onChange={() => tog("compact")} /> Compact (3 cols)</label>
          <label className="xr-print-check"><input type="checkbox" checked={opts.contrast} onChange={() => tog("contrast")} /> High contrast</label>
          <label className="xr-print-check"><input type="checkbox" checked={opts.large} onChange={() => tog("large")} /> Larger type</label>
          <button className="xr-btn primary" onClick={() => window.print()}><Printer size={18} /> Print</button>
        </div>
      </div>

      <div className="xr-sheet">
        <div className="xr-sheet-head">
          <DetachIcon list={list} size={22} className="xr-sheet-emblem" />
          <h1 className="xr-sheet-title">{list.name || "Untitled detachment"}</h1>
          <div className="xr-sheet-meta">Xenos Rampant &nbsp; {used}/{budget} pts &nbsp; {count} {count === 1 ? "unit" : "units"}</div>
        </div>
        {list.description && list.description.trim() && (
          <p className="xr-sheet-notes">{list.description.trim()}</p>
        )}

        {roster.length > 0 && (
          <div className="xr-sheet-cards">
            {roster.map((u, i) => {
              const t = UNIT_BY_ID[u.typeId];
              const os = t.options.filter((o) => u.options[o.id]);
              const xs = XENO_RULES.filter((x) => x.id in u.xenos);
              const cs = u.custom || [];
              const trait = opts.traits && u.isCmd && typeof u.traitIndex === "number" ? COMMANDER_TABLES[u.traitTable || "aggressive"].traits[u.traitIndex] : null;
              const powers = (u.psychic || []).map((n) => PSYCHIC_POWERS.find((pp) => pp.name === n)).filter(Boolean);
              const stdRules = opts.rules ? unitSpecialRules(u, t).map((n) => ({ name: n, text: SPECIAL_RULES[n] })).filter((g) => g.text) : [];
              const uniqueStd = stdRules.filter((g) => !refRules.shared.has(g.name));
              const sharedStd = stdRules.filter((g) => refRules.shared.has(g.name));
              const showUp = !!(opts.upgrades && (os.length || xs.length || cs.length || trait || powers.length));
              const shownNames = new Set([
                ...(showUp ? [...os.map((o) => o.name), ...xs.map((x) => x.name), ...cs.map((c) => c.name || "")] : []),
                ...stdRules.map((g) => g.name),
              ]);
              const nested = grantedRuleDefs([...shownNames]);
              return (
                <div className="xr-pc" key={u.key}>
                  <div className="xr-pc-head">
                    {u.image && <span className="xr-pc-img" style={{ backgroundImage: `url(${u.image})` }} aria-hidden="true" />}
                    <span className="xr-pc-name">{u.isCmd && <Crown size={13} className="xr-sheet-crown" />}{unitDisplayName(u, i)}</span>
                    <span className="xr-pc-type">{t.name}</span>
                    <span className="xr-pc-pts">{unitPoints(u)} pts</span>
                  </div>
                  {opts.stats && (
                    <div className="xr-pc-stt"><StatTable t={t} sp={unitSP(u)} u={u} hint={false} spBubbles /></div>
                  )}
                  {(showUp || stdRules.length > 0 || nested.length > 0) && (
                    <div className="xr-pc-rules">
                      {showUp && os.map((o) => <p key={o.id}><b>{o.name}</b> ({costLabel(optCost(o))}): {o.text}</p>)}
                      {showUp && xs.map((x) => <p key={x.id}><b>{xenoLabel(x, u)}</b> ({costLabel(xenoCost(x, u.xenos[x.id]))}){x.id === "psychic" ? "" : <>: {typeof x.text === "string" ? x.text : ruleBodyText(x.text)}</>}</p>)}
                      {showUp && powers.map((pw) => <p key={pw.name}><b>Psychic power, {pw.name}</b> ({pw.difficulty}): {pw.effect}</p>)}
                      {showUp && cs.map((c) => <p key={c.id}><b>{c.name}</b> ({costLabel(c.cost)}){c.text ? `: ${c.text}` : ""}</p>)}
                      {showUp && trait && <p><b>Commander trait, {trait.name}:</b> {trait.rule}</p>}
                      {uniqueStd.map((g) => <p key={`sr-${g.name}`} className="xr-pc-std"><b>{g.name}.</b> {typeof g.text === "string" ? g.text : ruleBodyText(g.text)}</p>)}
                      {nested.filter((g) => !refRules.shared.has(g.name)).map((g) => <p key={`nx-${g.name}`} className="xr-pc-std xr-pc-nested"><b>{g.name}.</b> {g.text}</p>)}
                      {sharedStd.length > 0 && (
                        <p className="xr-pc-ref"><b>{sharedStd.map((g) => g.name).join(", ")}</b> <i>see reference</i></p>
                      )}
                    </div>
                  )}
                  {u.notes && u.notes.trim() && <p className="xr-pc-note">{u.notes.trim()}</p>}
                </div>
              );
            })}
          </div>
        )}

        {refRules.list.length > 0 && (
          <div className="xr-sheet-ref">
            <h2 className="xr-sheet-ref-h">Abilities Reference</h2>
            <div className="xr-sheet-ref-grid">
              {refRules.list.map((g) => (
                <p key={`ref-${g.name}`} className="xr-sheet-ref-item"><b>{g.name}.</b> {g.text}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================================================================== *
 * PLAY: full game tracker
 * ================================================================== */
function PlayView({ list }) {
  const { roster } = list;
  const [st, setSt] = useState(() => loadPlay(list.id));
  useEffect(() => savePlay(list.id, st), [list.id, st]);

  const unitSt = (key) => st.units[key] || { dmg: 0, act: false, sup: false };
  const patch = (key, p) => setSt((s) => ({ ...s, units: { ...s.units, [key]: { ...unitSt(key), ...p } } }));
  const newTurn = () => setSt((s) => ({
    turn: s.turn + 1,
    units: Object.fromEntries(Object.entries(s.units).map(([k, v]) => [k, { ...v, act: false, sup: false }])),
  }));
  const resetGame = () => { if (window.confirm("Reset the game? Damage and turn count clear.")) setSt({ turn: 1, units: {} }); };

  return (
    <div className="xr-play">
      <RailNav view="play" />
      <header className="xr-play-mast">
        <button className="xr-iconbtn" onClick={() => nav("#/build")} aria-label="Back to builder"><Back size={20} /></button>
        <h2 className="xr-play-h">{list.name || "Untitled detachment"}</h2>
        <span className="xr-play-turn">Turn <b>{st.turn}</b></span>
        <div className="xr-actions">
          <button className="xr-btn primary" onClick={newTurn}><Reset size={17} /> New turn</button>
          <button className="xr-btn danger" onClick={resetGame}>Reset game</button>
        </div>
      </header>
      <main className="xr-play-grid">
        {roster.map((u, i) => {
          const t = UNIT_BY_ID[u.typeId];
          const sp = unitSP(u);
          const s = unitSt(u.key);
          const ds = deriveStats(u, t);
          const dead = s.dmg >= sp;
          return (
            <div className={`xr-pcard cat-${catOf(t)} ${dead ? "dead" : ""} ${s.act ? "acted" : ""} ${s.sup ? "sup" : ""}`} key={u.key}>
              <div className="xr-pcard-head">
                {u.isCmd && <Crown size={17} className="xr-pcard-crown" />}
                <span className="xr-pcard-name">{unitDisplayName(u, i)}</span>
                <span className="xr-pcard-type">{t.name}</span>
              </div>
              <div className="xr-pcard-dice">
                {ACT_KEYS.map(({ key, label }) => {
                  const c = orderFrom(ds.act, key, t.noAttack);
                  return (
                    <span className="xr-pcard-die" key={key}>
                      <Die k={key} free={c && c.free}>{c ? c.val : "-"}</Die>
                      <i>{label}</i>
                    </span>
                  );
                })}
              </div>
              <div className="xr-pcard-prof">
                {STAT_ROWS.filter((d) => d.val && d.key !== "sp").map((d) => {
                  const v = profFrom(ds.prof, sp, d.key);
                  if (!v) return null;
                  return (
                    <span key={d.key} title={d.tip}>
                      <img src={d.img} alt="" width="15" height="15" />{d.label} <b>{v.main}{v.range && <i>{v.range}</i>}</b>
                    </span>
                  );
                })}
              </div>
              <div className="xr-pcard-sp" role="group" aria-label={`Strength points, ${sp - s.dmg} of ${sp} left`}>
                {Array.from({ length: sp }, (_, pi) => {
                  const lost = pi >= sp - s.dmg;
                  return (
                    <button key={pi} className={`xr-pip ${lost ? "lost" : ""}`}
                      aria-label={lost ? "Restore strength point" : "Mark strength point lost"}
                      onClick={() => patch(u.key, { dmg: lost ? Math.max(0, s.dmg - 1) : Math.min(sp, s.dmg + 1) })}>
                      <Heart size={17} />
                    </button>
                  );
                })}
                <span className="xr-pcard-spread"><b>{Math.max(0, sp - s.dmg)}</b>/{sp}</span>
              </div>
              <div className="xr-pcard-toggles">
                <button className={`xr-ptog ${s.act ? "on" : ""}`} onClick={() => patch(u.key, { act: !s.act })} aria-pressed={s.act}>
                  <Check size={15} /> Activated
                </button>
                <button className={`xr-ptog warn ${s.sup ? "on" : ""}`} onClick={() => patch(u.key, { sup: !s.sup })} aria-pressed={s.sup}>
                  <Warn size={15} /> Suppressed
                </button>
              </div>
              {dead && <div className="xr-pcard-dead"><XIc size={24} /> Destroyed</div>}
            </div>
          );
        })}
      </main>
      <SiteFooter />
    </div>
  );
}

/* a friendly stop instead of a white screen when something throws */
function ErrorScreen({ error }) {
  return (
    <div className="xr-errscreen" role="alert">
      <span className="xr-errscreen-badge"><Alert size={44} /></span>
      <h1 className="xr-errscreen-h">Something went sideways.</h1>
      <p className="xr-errscreen-p">The builder hit an error and stopped this view. Your saved detachments are safe in this browser.</p>
      {error && error.message && <pre className="xr-errscreen-detail">{String(error.message)}</pre>}
      <div className="xr-errscreen-btns">
        <button className="xr-btn primary" onClick={() => window.location.reload()}><Reset size={17} /> Reload the builder</button>
        <button className="xr-btn" onClick={() => { window.location.hash = "#/"; window.location.reload(); }}><House size={17} /> Back to your lists</button>
      </div>
      <p className="xr-errscreen-foot">If it keeps happening, <a href="mailto:warlore1@outlook.com">send feedback</a> and I will take a look.</p>
    </div>
  );
}
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidUpdate(prev) { if (prev.routeKey !== this.props.routeKey && this.state.error) this.setState({ error: null }); }
  render() { return this.state.error ? <ErrorScreen error={this.state.error} /> : this.props.children; }
}

/* ================================================================== *
 * APP SHELL: routing + storage
 * ================================================================== */
export default function App() {
  const [route, setRoute] = useState(parseHash());
  const [lists, setLists] = useState(loadLists);
  const [currentId, setCurrentId] = useState(() => localStorage.getItem(LS_CURRENT) || null);
  const [rulesOpen, setRulesOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    const onRules = () => setRulesOpen(true);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("xr-open-rules", onRules);
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener("xr-open-rules", onRules); };
  }, []);
  useEffect(() => saveLists(lists), [lists]);
  useEffect(() => { if (currentId) localStorage.setItem(LS_CURRENT, currentId); }, [currentId]);

  /* a shared link (#/s/<data>) rebuilds the detachment as a new saved list */
  useEffect(() => {
    if (route.view !== "share") return;
    const imported = route.data && decodeShare(route.data);
    if (imported) {
      const id = uid();
      setLists((ls) => ({ ...ls, [id]: { id, ...imported, updated: Date.now() } }));
      setCurrentId(id);
      nav("#/build");
    } else {
      nav("#/");
    }
  }, [route.view, route.data]);

  const current = currentId ? lists[currentId] : null;

  const updateList = useCallback((patch) => {
    setLists((ls) => currentId && ls[currentId]
      ? { ...ls, [currentId]: { ...ls[currentId], ...patch, updated: Date.now() } }
      : ls);
  }, [currentId]);
  const setRoster = useCallback((fn) => {
    setLists((ls) => {
      if (!currentId || !ls[currentId]) return ls;
      const l = ls[currentId];
      return { ...ls, [currentId]: { ...l, roster: fn(l.roster), updated: Date.now() } };
    });
  }, [currentId]);

  const dispatch = useCallback((a) => {
    switch (a.type) {
      case "add": {
        const key = uid();
        setRoster((r) => [...r, { key, typeId: a.typeId, name: "", isCmd: r.length === 0, traitTable: "aggressive", traitIndex: undefined, options: {}, xenos: {}, custom: [] }]);
        nav(`#/build/${key}`);
        break;
      }
      case "del": setRoster((r) => r.filter((u) => u.key !== a.key)); break;
      case "insertAt": setRoster((r) => { const next = r.filter((u) => u.key !== a.unit.key); next.splice(Math.min(a.index, next.length), 0, a.unit); return next; }); break;
      case "move":
        setRoster((r) => {
          const i = r.findIndex((u) => u.key === a.key);
          const j = i + a.delta;
          if (i < 0 || j < 0 || j >= r.length) return r;
          const next = [...r];
          [next[i], next[j]] = [next[j], next[i]];
          return next;
        });
        break;
      case "reorder":
        setRoster((r) => {
          const from = r.findIndex((u) => u.key === a.key);
          if (from < 0 || from === a.toIndex) return r;
          const next = [...r];
          const [moved] = next.splice(from, 1);
          next.splice(a.toIndex, 0, moved);
          return next;
        });
        break;
      case "sort":
        setRoster((r) => {
          const catRank = { inf: 0, foot: 0, mounted: 1, xeno: 1, beast: 2, veh: 2 };
          const val = (u) => {
            const t = UNIT_BY_ID[u.typeId];
            if (a.by === "pts") return -unitPoints(u);
            if (a.by === "name") return unitDisplayName(u, 0).toLowerCase();
            if (a.by === "cat") return (catRank[catOf(t)] ?? 9) * 1000 - unitPoints(u);
            return 0;
          };
          return [...r].map((u, idx) => ({ u, idx })).sort((x, y) => {
            if (!!x.u.isCmd !== !!y.u.isCmd) return x.u.isCmd ? -1 : 1;
            const vx = val(x.u), vy = val(y.u);
            if (vx < vy) return -1;
            if (vx > vy) return 1;
            return x.idx - y.idx;
          }).map((o) => o.u);
        });
        break;
      case "dup":
        setRoster((r) => {
          const i = r.findIndex((u) => u.key === a.key);
          if (i < 0) return r;
          const copy = { ...r[i], key: uid(), isCmd: false, options: { ...r[i].options }, xenos: { ...r[i].xenos }, custom: (r[i].custom || []).map((c) => ({ ...c, id: uid() })) };
          const next = [...r]; next.splice(i + 1, 0, copy); return next;
        });
        break;
      case "name": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, name: a.name } : u))); break;
      case "image": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, image: a.image || undefined } : u))); break;
      case "notes": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, notes: a.notes } : u))); break;
      case "cmd": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, isCmd: !u.isCmd } : { ...u, isCmd: false }))); break;
      case "opt":
        setRoster((r) => r.map((u) => {
          if (u.key !== a.key) return u;
          const t = UNIT_BY_ID[u.typeId];
          const o = t.options.find((x) => x.id === a.oid);
          const options = { ...u.options };
          if (options[a.oid]) delete options[a.oid];
          else { options[a.oid] = true; (o.conflicts || []).forEach((c) => delete options[c]); }
          return sanitize({ ...u, options });
        }));
        break;
      case "xeno":
        setRoster((r) => r.map((u) => {
          if (u.key !== a.key) return u;
          const rule = XENO_BY_ID[a.xid];
          const xenos = { ...u.xenos };
          let next = { ...u };
          if (a.xid in xenos) { delete xenos[a.xid]; if (a.xid === "mercenary") next.mercRoll = undefined; }
          else xenos[a.xid] = rule.tiers ? 0 : true;
          return sanitize({ ...next, xenos });
        }));
        break;
      case "tier": setRoster((r) => r.map((u) => (u.key === a.key ? sanitize({ ...u, xenos: { ...u.xenos, [a.xid]: a.i } }) : u))); break;
      case "mercroll": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, mercRoll: a.roll } : u))); break;
      case "psypower":
        setRoster((r) => r.map((u) => {
          if (u.key !== a.key) return u;
          const pr = XENO_BY_ID["psychic"];
          const ti = typeof u.xenos.psychic === "number" ? u.xenos.psychic : 0;
          const lim = pr.tiers[ti].powers;
          let cur = u.psychic || [];
          if (cur.includes(a.power)) cur = cur.filter((n) => n !== a.power);
          else if (cur.length < lim) cur = [...cur, a.power];
          return { ...u, psychic: cur };
        }));
        break;
      case "table": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, traitTable: a.tbl } : u))); break;
      case "roll": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, traitIndex: Math.floor(Math.random() * 6) } : u))); break;
      case "trait": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, traitIndex: a.i } : u))); break;
      case "customAdd":
        setRoster((r) => r.map((u) => (u.key === a.key
          ? { ...u, custom: [...(u.custom || []), { id: uid(), name: a.name, cost: a.cost, text: a.text }] }
          : u)));
        break;
      case "customEdit":
        setRoster((r) => r.map((u) => (u.key === a.key
          ? { ...u, custom: (u.custom || []).map((c) => (c.id === a.cid ? { ...c, ...a.patch } : c)) }
          : u)));
        break;
      case "customDel":
        setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, custom: (u.custom || []).filter((c) => c.id !== a.cid) } : u)));
        break;
      default: break;
    }
  }, [setRoster]);

  const createList = (opts = {}) => {
    const id = uid();
    const icon = opts.icon || (opts.image ? undefined : randomEmblemId());
    setLists((ls) => ({ ...ls, [id]: { id, name: opts.name || "", budget: opts.budget || 24, description: opts.description || "", roster: [], image: opts.image || undefined, icon, collection: opts.collection || undefined, updated: Date.now() } }));
    setCurrentId(id);
    nav("#/build");
  };
  const loadPreset = (det, setting) => {
    const id = uid();
    const roster = rosterFromDetachment(det);
    const bookPts = detachmentPoints(det);
    const budget = BUDGET_PRESETS.find((b) => b >= bookPts) || BUDGET_PRESETS[BUDGET_PRESETS.length - 1] || 24;
    setLists((ls) => ({ ...ls, [id]: { id, name: det.name, budget, description: det.lore || det.subtitle || "", roster, setting: setting.id, image: det.image ? `${FACTION_BASE}${det.image}` : undefined, icon: det.icon || undefined, nationalTrait: undefined, updated: Date.now() } }));
    setCurrentId(id);
    nav("#/build");
  };
  const openList = (id) => { setCurrentId(id); nav("#/build"); };
  const dupList = (id) => {
    const src = lists[id];
    if (!src) return;
    const nid = uid();
    setLists((ls) => ({ ...ls, [nid]: { ...src, id: nid, name: src.name ? `${src.name} (copy)` : "", roster: src.roster.map((u) => ({ ...u, key: uid() })), updated: Date.now() } }));
  };
  const delList = (id) => {
    const l = lists[id];
    if (!window.confirm(`Delete ${l?.name || "this detachment"}? This cannot be undone.`)) return;
    setLists((ls) => { const next = { ...ls }; delete next[id]; return next; });
    if (currentId === id) setCurrentId(null);
    toast(`${l?.name || "Detachment"} deleted`);
  };

  /* guard: build/print/play need a current list */
  if (route.view !== "home" && !current) {
    return <div className="xr-app"><style>{CSS}</style>
      <Dashboard lists={lists} onOpen={openList} onCreate={createList} onLoadPreset={loadPreset} onDup={dupList} onDel={delList} />
    </div>;
  }

  return (
    <div className="xr-app">
      <style>{CSS}</style>
      <ErrorBoundary routeKey={`${route.view}/${route.unitKey || ""}`}>
        {route.view === "home" && <Dashboard lists={lists} onOpen={openList} onCreate={createList} onLoadPreset={loadPreset} onDup={dupList} onDel={delList} />}
        {route.view === "build" && <Builder list={current} selectedKey={route.unitKey} dispatch={dispatch} updateList={updateList} onDelete={() => delList(current.id)} />}
        {route.view === "print" && <PrintView list={current} />}
        {route.view === "play" && <PlayView list={current} />}
      </ErrorBoundary>
      {rulesOpen && <RulesModal onClose={() => setRulesOpen(false)} />}
      <Toaster />
    </div>
  );
}

/* ================================================================== *
 * CSS (Field Almanac: cream paper, bottle-green ink, coral stamps)
 * ================================================================== */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
@font-face{font-family:'Terminal Grotesque Open';src:url('${import.meta.env.BASE_URL}fonts/terminal-grotesque-open.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap;}
@font-face{font-family:'Hyper Scrypt';src:url('${import.meta.env.BASE_URL}fonts/HyperScrypt-Stencil.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap;}
@font-face{font-family:'Sligoil Micro';src:url('${import.meta.env.BASE_URL}fonts/Sligoil-Micro.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap;}
@font-face{font-family:'Sligoil Micro';src:url('${import.meta.env.BASE_URL}fonts/Sligoil-MicroBold.woff2') format('woff2');font-weight:700;font-style:normal;font-display:swap;}

.xr-app{
  --paper:#F4ECD8; --paper-2:#EFE4CB; --paper-3:#ECDFC0;
  --ink:#1F3D2E; --ink-2:#3A5446; --ink-18:rgba(31,61,46,.18); --ink-30:rgba(31,61,46,.32);
  --cream:#F6EFDD;
  --coral:#F4604C; --coral-ink:#BE3319;
  --sage:#5C7A52; --iris:#6A4A8C; --rust:#B06A2C; --brass:#8A6A1F;
  --display:'Source Serif 4',Georgia,serif;
  --body:'Source Serif 4',Georgia,serif;
  --flavor:'Source Serif 4',Georgia,serif;
  --title:'Hyper Scrypt','Source Serif 4',Georgia,serif;
  --mono:'Sligoil Micro',ui-monospace,Consolas,monospace;
  --ui:'Lexend',ui-sans-serif,system-ui,sans-serif;
  --r:12px;
  /* Fluent 2 motion */
  --dur-ultrafast:50ms; --dur-faster:100ms; --dur-fast:150ms; --dur-normal:200ms; --dur-gentle:250ms; --dur-slow:300ms; --dur-slower:400ms;
  --curve-decel:cubic-bezier(0,0,0,1); --curve-decel-min:cubic-bezier(.33,0,.1,1);
  --curve-accel:cubic-bezier(1,0,1,1); --curve-ease:cubic-bezier(.33,0,.67,1); --curve-ease-max:cubic-bezier(.8,0,.2,1);
  /* Fluent 2 elevation, tinted to ink */
  --shadow4:0 0 2px rgba(31,61,46,.12),0 2px 4px rgba(31,61,46,.16);
  --shadow8:0 0 2px rgba(31,61,46,.12),0 4px 8px rgba(31,61,46,.16);
  --shadow16:0 0 2px rgba(31,61,46,.12),0 8px 16px rgba(31,61,46,.16);
  --shadow28:0 0 8px rgba(31,61,46,.14),0 14px 28px rgba(31,61,46,.18);
  --shadow64:0 0 8px rgba(31,61,46,.14),0 32px 64px rgba(31,61,46,.20);
  /* brand: green to blue. bright for decorative fills, deep for surfaces with text */
  --brand-green:#31C46B; --brand-blue:#1FA8C4; --brand-grad:linear-gradient(100deg,var(--brand-green),var(--brand-blue));
  --brand-deep:linear-gradient(100deg,#137a45,#116f89); --brand-deep-blue:#116f89;
  background:var(--paper);color:var(--ink);font-family:var(--body);
  font-size:17px;line-height:1.55;min-height:100vh;
}
.xr-app *{box-sizing:border-box;margin:0;}
.xr-app button{font-family:var(--ui);font-size:inherit;cursor:pointer;color:inherit;background:none;border:none;}
.xr-app :focus-visible{outline:none;box-shadow:0 0 0 2px var(--cream),0 0 0 4px var(--ink);border-radius:5px;}
@media (prefers-reduced-motion: reduce){.xr-app *{animation-duration:.01ms !important;transition-duration:.01ms !important;}}

/* shared controls */
.xr-btn{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:16px;color:var(--ink);border:2px solid var(--ink);background:var(--paper-2);padding:10px 16px;border-radius:10px;min-height:46px;transition:.13s;}
.xr-btn:hover{background:var(--paper-3);}
.xr-btn:active{transform:scale(.97);}
.xr-btn.primary{background:var(--brand-deep);color:#fff;border-color:transparent;box-shadow:var(--shadow4);}
.xr-btn.primary:hover{background:var(--brand-deep);border-color:transparent;filter:brightness(1.08);}
.xr-btn.danger:hover{background:var(--coral);border-color:var(--coral-ink);color:#fff;}
.xr-btn.small{min-height:44px;padding:8px 13px;font-size:15.5px;}
.xr-btn.small.icon{padding:8px 10px;}
.xr-btn.small.xr-btn-icon{padding:8px;min-width:42px;width:42px;justify-content:center;}
/* mast action buttons: icon + label (label shrinks to a tiny caption on mobile) */
.xr-btn.small.xr-act{gap:6px;}
.xr-sharewrap{position:relative;}
.xr-share-pop{width:min(320px,88vw);gap:10px;}
.xr-share-note{font-family:var(--body);font-size:14px;line-height:1.42;color:var(--ink);margin:0;}
.xr-share-sub{font-family:var(--body);font-size:12.5px;line-height:1.4;color:var(--ink-2);margin:0;}
.xr-share-pop .xr-btn{width:100%;justify-content:center;}
.xr-btn.gold{background:var(--brass);border-color:var(--brass);color:var(--cream);}
.xr-btn.xr-manage{background:var(--brand-deep);border-color:transparent;color:#fff;box-shadow:var(--shadow4);}
.xr-btn.xr-manage:hover{background:var(--brand-deep);border-color:transparent;filter:brightness(1.08);}
.xr-panel-tools-sp{flex:1;}
.xr-btn:disabled{opacity:.45;cursor:not-allowed;}
.xr-iconbtn{width:46px;height:46px;flex:none;display:flex;align-items:center;justify-content:center;border:2px solid var(--ink);border-radius:10px;color:var(--ink);background:var(--paper-2);transition:.12s;}
.xr-iconbtn:hover{background:var(--paper-3);}
.xr-iconbtn:active{transform:scale(.95);}

/* die chips */
.xr-die{position:relative;display:inline-flex;align-items:center;justify-content:center;width:56px;padding:3px 4px;border-radius:9px;border:1.5px solid var(--ink-30);background:var(--paper-2);font-family:var(--mono);font-weight:700;font-size:18px;color:var(--ink);font-variant-numeric:tabular-nums;}
.xr-die.k-atk{background:#F4604C22;border-color:var(--coral-ink);}
.xr-die.k-mov{background:#5C7A5222;border-color:var(--sage);}
.xr-die.k-sho{background:#6A4A8C22;border-color:var(--iris);}
.xr-die.k-cou{background:#8A6A1F22;border-color:var(--brass);}
.xr-die.free{border-style:solid;border-width:2px;border-color:var(--coral-ink);background:var(--coral);color:#3a1206;justify-content:flex-start;padding-left:10px;}
.xr-die-free{position:absolute;right:4px;top:50%;transform:translateY(-50%);writing-mode:vertical-rl;font-family:var(--ui);font-weight:800;font-size:8.5px;letter-spacing:.6px;line-height:1;text-transform:uppercase;color:#3a1206;}
.xr-dash{color:var(--ink-2);opacity:.45;}
.xr-rng{font-family:var(--body);font-style:italic;font-size:15px;color:var(--ink-2);margin-left:3px;white-space:nowrap;}

/* stat table */
.xr-stt{padding:4px 0 0;}
.xr-stt-head{display:grid;grid-template-columns:170px 76px 1fr;gap:4px 8px;padding:0 0 6px;border-bottom:2px solid var(--ink-30);font-family:var(--display);font-weight:600;letter-spacing:.02em;font-size:15.5px;color:var(--ink-2);}
.xr-stt-head em{font-style:italic;font-variant:normal;font-size:13.5px;}
.xr-stt-row{display:grid;grid-template-columns:170px 76px 1fr;gap:4px 8px;align-items:center;padding:6px 0;border-bottom:1px solid var(--ink-18);}
.xr-stt-row:last-child{border-bottom:none;}
.xr-stt-stat{display:flex;align-items:center;gap:8px;font-family:var(--display);font-weight:600;font-size:17px;}
.xr-stt-ic{width:28px;height:28px;object-fit:contain;flex:none;}
.xr-stt-cell{position:relative;display:flex;align-items:baseline;white-space:nowrap;min-width:0;}
.xr-stt-cell b{font-family:var(--mono);font-weight:700;font-size:20px;font-variant-numeric:tabular-nums;flex:none;}
/* modified stats: blue = improved, amber = worsened; the arrow shape carries it for colourblind readers */
.xr-app{--stat-up:#0a6e8c;--stat-down:#a55a12;}
.xr-stt-cell.mod.up b,.xr-stt-cell.mod.up .xr-die{color:var(--stat-up);}
.xr-stt-cell.mod.up .xr-die{border-color:var(--stat-up);box-shadow:inset 0 0 0 1px var(--stat-up);}
.xr-stt-cell.mod.down b,.xr-stt-cell.mod.down .xr-die{color:var(--stat-down);}
.xr-stt-cell.mod.down .xr-die{border-color:var(--stat-down);box-shadow:inset 0 0 0 1px var(--stat-down);}
.xr-mod-dir{position:absolute;top:50%;left:-11px;transform:translateY(-50%);font-size:9px;line-height:1;}
.xr-mod-dir.up{color:var(--stat-up);}
.xr-mod-dir.down{color:var(--stat-down);}
.xr-mod-dir.neutral{color:var(--ink-2);font-size:6px;}
.xr-stt-cell.mod:not(.up):not(.down) b{color:var(--ink-2);}

/* masthead + wordmark */
.xr-titlestack{display:inline-flex;flex-direction:column;align-items:stretch;}
.xr-word{font-family:var(--title);font-weight:400;font-size:clamp(30px,4.6vw,46px);letter-spacing:.05em;line-height:1.02;color:var(--ink);white-space:nowrap;-webkit-text-stroke:.6px var(--ink);text-shadow:0 1px 0 rgba(31,61,46,.22),0 3px 7px rgba(31,61,46,.12);}
.xr-sub{display:block;font-family:var(--flavor);font-style:italic;font-size:clamp(15px,1.6vw,20px);color:var(--coral-ink);line-height:1;margin-top:3px;}

/* ---------- dashboard ---------- */
.xr-home{display:flex;flex-direction:column;min-height:100vh;padding-left:76px;}
.xr-home-mast{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;padding:22px clamp(16px,4vw,44px) 16px;border-bottom:3px solid var(--ink);}
.xr-home-body{flex:1;width:100%;max-width:1160px;margin-inline:auto;padding:26px clamp(16px,4vw,44px) 60px;}
.xr-home-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:20px;}
.xr-home-h{font-family:var(--display);font-weight:700;font-size:26px;display:inline-flex;align-items:baseline;gap:9px;}
.xr-home-h em{font-family:var(--mono);font-style:normal;font-weight:700;font-size:16px;color:var(--cream);background:var(--ink);border-radius:11px;min-width:24px;padding:1px 8px;text-align:center;}
/* first-run welcome (the first thing a new visitor sees) */
.xr-home-welcome{display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;max-width:520px;margin:6vh auto 0;padding:40px 28px;border:2.5px solid var(--ink);border-radius:16px;background:var(--paper-2);}
.xr-home-welcome-badge{display:flex;align-items:center;justify-content:center;width:88px;height:88px;border-radius:50%;background:var(--coral);color:var(--ink);border:3px solid var(--ink);}
.xr-home-welcome h2{font-family:var(--display);font-weight:700;font-size:27px;color:var(--ink);}
.xr-home-welcome p{font-family:var(--flavor);font-style:italic;font-size:17px;line-height:1.5;color:var(--ink-2);max-width:40ch;}
.xr-home-welcome-btns{display:flex;gap:11px;flex-wrap:wrap;justify-content:center;margin-top:4px;}
.xr-home-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;}
.xr-list-card{position:relative;border:3px solid var(--ink);border-radius:var(--r);background:var(--paper-2);box-shadow:var(--shadow4);transition:transform var(--dur-normal) var(--curve-ease),box-shadow var(--dur-normal) var(--curve-ease);display:flex;flex-direction:column;overflow:hidden;}
.xr-list-card:hover{box-shadow:var(--shadow16);transform:translateY(-3px);}
.xr-list-open{flex:1;display:flex;flex-direction:column;align-items:flex-start;gap:8px;text-align:left;padding:16px 16px 12px;}
.xr-list-name{font-family:var(--display);font-weight:700;font-size:21px;line-height:1.15;}
.xr-list-meta{font-family:var(--ui);font-weight:500;font-size:15px;color:var(--ink-2);}
.xr-list-meta b{color:var(--ink);font-family:var(--mono);font-weight:700;font-size:16px;}
.xr-list-cmd{display:inline-flex;align-items:center;gap:5px;font-family:var(--ui);font-size:14px;font-weight:600;color:var(--brass);}
.xr-list-cmd em{font-style:normal;font-weight:500;color:var(--ink-2);}
.xr-list-desc{font-family:var(--flavor);font-style:italic;font-size:14.5px;color:var(--ink-2);line-height:1.35;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;}
.xr-list-tools{display:flex;gap:8px;padding:0 16px 14px;}
.xr-list-tools button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border:2px solid var(--ink-30);border-radius:9px;color:var(--ink-2);transition:.12s;}
.xr-list-tools button:hover{border-color:var(--ink);color:var(--ink);background:var(--paper-3);}
.xr-list-tools button:last-child:hover{background:var(--coral);border-color:var(--coral-ink);color:#fff;}
.xr-home-empty{display:flex;flex-direction:column;align-items:center;gap:14px;width:100%;border:3px dashed var(--ink-30);border-radius:var(--r);padding:56px 24px;color:var(--ink-2);font-family:var(--display);font-weight:600;font-size:20px;transition:.14s;}
.xr-home-empty:hover{border-color:var(--ink);color:var(--ink);background:var(--paper-2);}
/* builder first-unit call */
.xr-firstunit{display:flex;align-items:center;gap:16px;width:100%;text-align:left;border:2.5px solid var(--ink);border-radius:14px;background:var(--paper-2);padding:20px 22px;transition:transform .14s cubic-bezier(.2,.8,.2,1),box-shadow .14s,background .14s;}
.xr-firstunit:hover{background:var(--paper-3);transform:translateY(-2px);box-shadow:0 6px 16px rgba(31,61,46,.15);}
.xr-firstunit-badge{flex:none;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--coral);color:var(--ink);border:2.5px solid var(--ink);}
.xr-firstunit-txt{display:flex;flex-direction:column;gap:3px;}
.xr-firstunit-txt b{font-family:var(--display);font-weight:700;font-size:22px;color:var(--ink);}
.xr-firstunit-txt i{font-family:var(--flavor);font-style:italic;font-size:15.5px;color:var(--ink-2);}

/* ---------- builder ---------- */
/* ---------- nav rail (view controls, grouped) ---------- */
.xr-rail{position:fixed;left:0;top:0;bottom:0;width:76px;z-index:40;background:linear-gradient(180deg,#137a45,#116f89);display:flex;flex-direction:column;align-items:center;padding:14px 0;gap:16px;}
.xr-rail-logo{width:44px;height:44px;display:flex;align-items:center;justify-content:center;color:#E8C860;}
.xr-rail-nav{display:flex;flex-direction:column;gap:6px;width:100%;align-items:center;}
/* points muster at the foot of the rail: size stepper, a vertical fill bar, a
   status chip, and the running total pinned to the very bottom. */
.xr-railmuster{margin-top:auto;display:flex;flex-direction:column;align-items:center;gap:7px;width:100%;padding-top:10px;}
.xr-railmuster-cap{font-family:var(--ui);font-weight:700;font-size:8.5px;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.6);}
.xr-railsize{display:flex;flex-direction:row;align-items:center;gap:3px;}
.xr-railsize-btn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:6px;color:rgba(255,255,255,.85);font-family:var(--display);font-weight:700;font-size:16px;line-height:1;background:rgba(255,255,255,.12);transition:background var(--dur-fast) var(--curve-ease);}
.xr-railsize-btn:hover{background:rgba(255,255,255,.24);color:#fff;}
.xr-railsize-val{min-width:24px;text-align:center;font-family:var(--mono);font-weight:700;font-size:17px;color:#fff;font-variant-numeric:tabular-nums;}
.xr-railbar{position:relative;width:14px;flex:1;min-height:80px;display:flex;align-items:flex-end;border-radius:8px;background:rgba(0,0,0,.22);overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);}
.xr-railbar-fill{display:block;width:100%;background:var(--cream);border-radius:0 0 7px 7px;transition:height var(--dur-slow) var(--curve-ease);}
.xr-railbar.near .xr-railbar-fill{background:#F0C64E;}
.xr-railbar.over .xr-railbar-fill{background:#FFD9B0;}
.xr-railstatuswrap{position:relative;}
.xr-railstatus{padding:4px 8px;font-size:13px;border-width:2px;background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.35);color:#fff;}
.xr-railstatus.ok{background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.4);color:#fff;}
.xr-railstatus.err{background:#fff;border-color:#fff;color:var(--coral-ink);}
.xr-railpop{position:absolute;left:calc(100% + 8px);bottom:0;top:auto;}
.xr-railpts{display:flex;flex-direction:column;align-items:center;line-height:1;font-family:var(--mono);font-variant-numeric:tabular-nums;color:#fff;}
.xr-railpts b{font-size:22px;font-weight:700;}
.xr-railpts span{font-size:12px;color:rgba(255,255,255,.75);margin-top:1px;}
.xr-railpts.over b{color:#FFD9B0;}
/* rules reference modal */
.xr-rref-cols{columns:2;column-gap:30px;}
.xr-rref{break-inside:avoid;margin-bottom:16px;}
.xr-rref-h{font-family:var(--display);font-weight:700;font-variant:small-caps;letter-spacing:.03em;font-size:18px;color:var(--ink);padding-bottom:5px;border-bottom:2px solid var(--ink-30);margin-bottom:8px;}
.xr-rref-intro{font-family:var(--body);font-size:15px;line-height:1.5;color:var(--ink);margin-bottom:7px;}
.xr-rref .xr-rule-list{font-size:15px;color:var(--ink);}
@media(max-width:720px){.xr-rref-cols{columns:1;}}
.xr-rail .xr-rail-btn{width:62px;display:flex;flex-direction:column;align-items:center;gap:4px;padding:9px 2px;border-radius:11px;color:rgba(255,255,255,.82);font-family:var(--display);font-weight:600;font-size:12.5px;letter-spacing:.02em;transition:background var(--dur-fast) var(--curve-ease),color var(--dur-fast) var(--curve-ease);}
.xr-rail .xr-rail-btn:hover{background:rgba(255,255,255,.16);color:#fff;}
.xr-rail .xr-rail-btn.on{background:var(--cream);color:var(--brand-deep-blue);}

/* ---------- collapsible section (progressive disclosure) ---------- */
.xr-sec{border-top:none;}
.xr-sec-h{display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:6px 2px 8px;font-family:var(--display);font-weight:700;letter-spacing:.03em;font-size:20px;line-height:1.4;color:var(--ink);min-height:44px;}
.xr-sec-title{flex:1;}
.xr-sec-count{font-family:var(--mono);font-style:normal;font-weight:700;font-size:14px;min-width:26px;height:26px;padding:0 7px;display:inline-flex;align-items:center;justify-content:center;background:var(--ink);color:var(--cream);border-radius:13px;}
.xr-sec-caret{color:var(--ink-2);transition:transform .15s;flex:none;}
.xr-sec.open .xr-sec-caret{transform:rotate(180deg);}
.xr-sec-body{padding-bottom:14px;animation:xr-rise .2s cubic-bezier(.2,.8,.2,1);}

/* ---------- sticky add-unit ---------- */
.xr-ulist-rows{display:flex;flex-direction:column;gap:7px;}
.xr-add-sticky{position:sticky;bottom:14px;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:10px;width:100%;font-family:var(--body);font-weight:700;font-size:18px;color:var(--cream);background:var(--ink);border:2px solid var(--ink);padding:14px;border-radius:12px;box-shadow:0 3px 12px rgba(31,61,46,.22);transition:.13s;}
.xr-add-sticky:hover{background:var(--brand-deep-blue);border-color:var(--brand-deep-blue);}
.xr-add-sticky:active{transform:scale(.98);}

.xr-build{display:flex;flex-direction:column;min-height:100vh;padding-left:76px;}
.xr-mast{position:sticky;top:0;z-index:30;background:var(--paper);border-bottom:3px solid var(--ink);padding:14px clamp(14px,3vw,30px) 12px;}
.xr-mast-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}
.xr-detname{flex:1;min-width:170px;font-family:var(--display);font-weight:600;font-size:22px;color:var(--ink);background:transparent;border:none;border-bottom:2px solid var(--ink-30);padding:4px 2px 6px;}
.xr-detname::placeholder{color:var(--ink-2);opacity:.7;}
/* compact points readout in the mast; only shown on mobile (see media query) */
.xr-mastpts{display:none;align-items:center;gap:2px;font-family:var(--mono);font-weight:700;color:var(--ink);border:2px solid var(--ink-30);border-radius:9px;padding:4px 9px;flex:none;}
.xr-mastpts b{font-size:18px;}
.xr-mastpts span{font-size:13px;color:var(--ink-2);}
.xr-mastpts.over{border-color:var(--coral-ink);}
.xr-mastpts.over b{color:var(--coral-ink);}
.xr-mastpts-s{display:inline-flex;align-items:center;gap:2px;font-style:normal;font-size:12.5px;margin-left:5px;}
.xr-mastpts-s.ok{color:var(--sage);}
.xr-mastpts-s.err{color:var(--coral-ink);}
/* the whole points-badge wrapper is mobile only; the desktop rail muster owns
   the status popover, so gating the wrapper here avoids a double popover */
.xr-mastptswrap{display:none;position:relative;}
.xr-mastpop{left:auto;right:0;z-index:60;}
.xr-mastpop-h{display:flex;align-items:center;gap:7px;font-family:var(--display);font-weight:700;font-size:15px;color:var(--coral-ink);}
.xr-mastpop-ok{display:flex;align-items:center;gap:8px;font-family:var(--body);font-weight:600;font-size:15px;color:var(--sage);line-height:1.4;}
.xr-mastpop-ok svg,.xr-mastpop-h svg{flex:none;}
.xr-detname:focus{outline:none;border-bottom-color:var(--coral);}
.xr-actions{display:flex;gap:8px;flex-wrap:wrap;margin-left:auto;}
.xr-mast-row2{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:12px;}
.xr-budget{display:flex;align-items:center;gap:6px;flex-wrap:wrap;}
.xr-budget-l{font-family:var(--display);font-weight:600;font-size:16px;color:var(--ink-2);margin-right:2px;}
.xr-budgetrow{display:flex;align-items:center;gap:8px 14px;flex-wrap:wrap;}
.xr-budget-chip{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;font-family:var(--mono);font-weight:600;font-size:15px;min-width:44px;min-height:44px;padding:2px 10px;border:2px solid var(--ink-30);border-radius:9px;color:var(--ink-2);transition:.12s;}
.xr-budget-chip:hover{border-color:var(--ink);color:var(--ink);}
.xr-budget-num{font-size:16px;line-height:1;}
/* 24 is the standard game: a solid, "whole" fill even when unselected */
.xr-budget-chip.std{border-color:var(--ink);background:var(--paper-3);color:var(--ink);}
.xr-budget-chip.on{background:var(--ink);border-color:var(--ink);color:var(--cream);}
.xr-budget-rec{font-family:var(--ui);font-style:normal;font-weight:700;font-size:8.5px;letter-spacing:.04em;text-transform:uppercase;line-height:1;color:var(--coral-ink);}
.xr-budget-chip.std.on .xr-budget-rec{color:var(--cream);}
/* custom game size: a "Custom" tab that expands to a floating-label number field */
.xr-budget-customwrap{position:relative;display:inline-flex;align-items:center;}
.xr-budget-customtab{display:inline-flex;align-items:center;justify-content:center;min-width:44px;min-height:44px;padding:2px 12px;font-family:var(--ui);font-weight:600;font-size:14.5px;border:2px dashed var(--ink-30);border-radius:9px;color:var(--ink-2);transition:.12s;}
.xr-budget-customtab:hover{border-color:var(--ink);color:var(--ink);}
.xr-budget-customwrap.open .xr-budget-customtab{position:absolute;top:-9px;left:10px;z-index:1;min-width:0;min-height:0;padding:0 5px;font-size:10.5px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;border:none;background:var(--paper-2);color:var(--coral-ink);}
.xr-budget-custom{width:82px;min-height:44px;font-family:var(--mono);font-weight:700;font-size:17px;text-align:center;color:var(--ink);background:var(--paper-2);border:2px solid var(--ink-30);border-radius:9px;padding:6px 4px;}
.xr-budget-customwrap.on .xr-budget-custom{border-color:var(--coral);}
.xr-budget-custom:focus{outline:none;border-color:var(--coral);}
.xr-muster{display:flex;align-items:center;gap:12px;flex:1;min-width:200px;}
.xr-muster-read{font-family:var(--mono);font-weight:700;white-space:nowrap;font-variant-numeric:tabular-nums;}
.xr-muster-read b{font-size:24px;}
.xr-muster-read span{font-size:16px;color:var(--ink-2);}
.xr-muster-track{position:relative;flex:1;height:6px;border:1px solid var(--ink-30);background:var(--paper-2);border-radius:4px;overflow:hidden;}
.xr-muster-fill{display:block;height:100%;background:var(--brand-grad);transition:width var(--dur-slow) var(--curve-ease);}
.xr-muster.near .xr-muster-fill{background:var(--brass);}
.xr-muster.over .xr-muster-fill{background:var(--coral);}
/* points and unit-count dock: pinned bottom-left, just right of the nav rail */
.xr-musterdock{position:sticky;bottom:0;align-self:flex-start;z-index:30;display:flex;align-items:center;gap:12px;margin-top:auto;padding:8px 16px;background:var(--paper);border:2px solid var(--ink);border-bottom:none;border-top-right-radius:14px;border-top-left-radius:14px;box-shadow:0 -4px 18px rgba(31,61,46,.16);}
.xr-musterdock .xr-muster-read b{font-size:22px;}
.xr-musterdock .xr-muster-read.xr-muster-pts{margin-left:-4px;}
.xr-musterdock .xr-muster-track{width:130px;flex:none;}
.xr-musterdock.near .xr-muster-fill{background:var(--brass);}
.xr-musterdock.over .xr-muster-fill{background:var(--coral);}
.xr-musterdock .xr-status{padding:6px 11px;font-size:14.5px;}
.xr-issue-pop.up{top:auto;bottom:calc(100% + 8px);right:auto;left:0;}
/* game-size incrementer inside the dock */
.xr-sizestep{display:inline-flex;align-items:center;gap:6px;}
.xr-sizestep-btn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;border:2px solid var(--ink-30);border-radius:8px;background:var(--paper-2);color:var(--ink);font-family:var(--display);font-weight:700;font-size:20px;line-height:1;transition:border-color .12s,background .12s;}
.xr-sizestep-btn:hover{border-color:var(--ink);background:var(--paper-3);}
.xr-sizestep-val{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;min-width:30px;line-height:1;font-family:var(--mono);font-weight:700;font-size:22px;color:var(--ink);font-variant-numeric:tabular-nums;}
.xr-size-default{font-family:var(--ui);font-style:normal;font-weight:700;font-size:8px;letter-spacing:.03em;text-transform:uppercase;color:var(--coral-ink);margin-top:1px;}
.xr-natl-sel{font-family:var(--body);font-size:15px;font-weight:600;color:var(--ink);background:var(--paper-2);border:2px solid var(--ink-30);border-radius:9px;padding:8px 9px;min-height:44px;width:100%;cursor:pointer;}
.xr-natl-sel:focus{outline:none;border-color:var(--coral);}
/* detachment settings popover */
.xr-settingswrap{position:relative;}
.xr-settings-scrim{position:fixed;inset:0;z-index:39;background:transparent;border:none;cursor:default;}
.xr-settings-pop{position:absolute;right:0;top:calc(100% + 8px);z-index:40;width:min(320px,86vw);display:flex;flex-direction:column;gap:14px;background:var(--paper);border:2.5px solid var(--ink);border-radius:12px;box-shadow:0 12px 34px rgba(31,61,46,.26);padding:14px;animation:xr-pop .18s cubic-bezier(.2,.8,.2,1);}
.xr-set-delete{justify-content:center;margin-top:2px;border-top:2px solid var(--ink-18);padding-top:14px;border-radius:0;border-left:none;border-right:none;border-bottom:none;}
.xr-set-toggle{display:flex;align-items:flex-start;gap:10px;text-align:left;padding:9px;border:2px solid var(--ink-30);border-radius:10px;background:var(--paper-2);transition:.13s;}
.xr-set-toggle:hover{border-color:var(--ink);}
.xr-set-toggle.on{border-color:var(--iris);background:#6A4A8C14;}
.xr-set-toggle-box{flex:none;width:24px;height:24px;margin-top:1px;display:flex;align-items:center;justify-content:center;border:2px solid var(--ink);border-radius:6px;background:var(--paper);color:var(--cream);}
.xr-set-toggle.on .xr-set-toggle-box{background:var(--iris);border-color:var(--iris);}
.xr-set-toggle-txt{display:flex;flex-direction:column;gap:2px;}
.xr-set-toggle-txt b{font-family:var(--ui);font-weight:600;font-size:16px;color:var(--ink);}
.xr-set-toggle-txt i{font-style:normal;font-size:13.5px;line-height:1.35;color:var(--ink-2);}
.xr-set-field{display:flex;flex-direction:column;gap:6px;}
.xr-set-field-l{font-family:var(--ui);font-weight:600;font-size:14px;color:var(--ink);}
.xr-set-field-h{font-size:13px;line-height:1.35;color:var(--ink-2);}
.xr-set-field-rule{font-style:italic;font-family:var(--flavor);font-size:14px;line-height:1.4;color:var(--ink-2);border-left:3px solid var(--ink-30);padding-left:9px;margin-top:2px;}
.xr-status{display:inline-flex;align-items:center;gap:7px;font-family:var(--ui);font-weight:600;font-size:15px;padding:8px 13px;border-radius:9px;border:2px solid var(--ink);}
.xr-status.ok{color:var(--sage);border-color:var(--sage);background:var(--paper-2);}
.xr-status.err{color:var(--coral-ink);border-color:var(--coral-ink);background:#F4604C18;}
.xr-status.empty{color:var(--ink-2);border-color:var(--ink-30);}
/* floating issues: reveal on hover, click, or tap */
.xr-statuswrap{position:relative;}
.xr-statuswrap .xr-status{cursor:pointer;}
.xr-status.err,.xr-status.err *{cursor:pointer;}
.xr-issue-pop{position:absolute;top:calc(100% + 8px);right:0;z-index:35;min-width:270px;max-width:380px;background:var(--paper);border:2px solid var(--ink);border-radius:12px;box-shadow:0 8px 26px rgba(31,61,46,.24);padding:12px;display:none;flex-direction:column;gap:8px;}
.xr-statuswrap:hover .xr-issue-pop,.xr-issue-pop.open{display:flex;}
.xr-issues{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;}
.xr-issue{font-family:var(--ui);font-weight:600;font-size:14.5px;padding:6px 11px;border-radius:8px;border-left:4px solid;background:var(--paper-2);}
.xr-issue.err{color:var(--coral-ink);border-color:var(--coral-ink);}
.xr-issue.warn{color:var(--brass);border-color:var(--brass);}
/* error boundary screen */
.xr-errscreen{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:14px;padding:40px 22px;background:var(--paper-3);}
.xr-errscreen-badge{display:flex;align-items:center;justify-content:center;width:84px;height:84px;border-radius:50%;background:var(--coral);color:var(--ink);border:3px solid var(--ink);}
.xr-errscreen-h{font-family:var(--display);font-weight:700;font-size:30px;color:var(--ink);}
.xr-errscreen-p{font-family:var(--body);font-size:18px;line-height:1.5;color:var(--ink-2);max-width:52ch;}
.xr-errscreen-detail{font-family:var(--mono);font-size:13px;color:var(--coral-ink);background:var(--paper);border:2px solid var(--ink-30);border-radius:9px;padding:9px 12px;max-width:min(92vw,640px);overflow:auto;white-space:pre-wrap;text-align:left;}
.xr-errscreen-btns{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:6px;}
.xr-errscreen-foot{font-family:var(--flavor);font-style:italic;font-size:15px;color:var(--ink-2);margin-top:8px;}
.xr-errscreen-foot a{color:var(--brand-deep-blue);}

.xr-build-body{flex:1;display:grid;grid-template-columns:minmax(320px,430px) 1fr;gap:0;align-items:start;}
.xr-ulist{display:flex;flex-direction:column;gap:10px;padding:18px clamp(12px,1.6vw,20px) 72px;}
.xr-detail{align-self:start;border-left:3px solid var(--ink);min-height:320px;}
.xr-detail-hint{display:flex;flex-direction:column;align-items:center;gap:10px;padding:80px 20px;color:var(--ink-2);font-family:var(--display);font-size:19px;}
.xr-detoverview{padding:20px clamp(14px,2vw,26px) 30px;display:flex;flex-direction:column;}
.xr-detoverview-head{display:flex;align-items:center;gap:14px;margin-bottom:18px;}
.xr-detoverview-img{flex:none;width:56px;height:56px;border-radius:12px;border:2px solid var(--ink);background:var(--paper-2) center/contain no-repeat;}
.xr-detoverview-name{font-family:var(--display);font-weight:700;font-size:24px;line-height:1.15;color:var(--ink);}
.xr-detoverview-meta{font-family:var(--mono);font-weight:700;font-size:15px;color:var(--ink-2);}
.xr-detoverview-notes{width:100%;min-height:150px;resize:vertical;}
.xr-detoverview-hint{display:flex;align-items:center;gap:7px;margin-top:14px;font-family:var(--flavor);font-style:italic;font-size:15px;color:var(--ink-2);}

/* compact unit rows */
.xr-urow{display:flex;flex-direction:row;align-items:center;gap:10px;text-align:left;border:2px solid var(--ink);border-left-width:6px;border-radius:9px;background:var(--paper-2);padding:7px 12px;transition:transform .13s cubic-bezier(.2,.8,.2,1),background .13s,box-shadow .13s;touch-action:pan-y;-webkit-user-select:none;user-select:none;}
.xr-urow-body{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0;}
.xr-urow-img{flex:none;width:40px;height:40px;border-radius:7px;border:2px solid var(--ink);background-size:contain;background-repeat:no-repeat;background-position:center;background-color:var(--paper-3);}
.xr-urow-ic{flex:none;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:7px;border:2px solid var(--ink);background:var(--cream);color:var(--ink);}
.xr-urow.cat-inf .xr-urow-ic{color:var(--sage);}
.xr-urow.cat-xeno .xr-urow-ic{color:var(--iris);}
.xr-urow.cat-veh .xr-urow-ic{color:var(--rust);}
.xr-urow.sel .xr-urow-ic{background:var(--paper);}
.xr-urow:hover{background:var(--paper-3);transform:translateX(3px);box-shadow:0 3px 9px rgba(31,61,46,.12);}
.xr-urow.sel{background:var(--ink);color:var(--cream);}
.xr-urow.sel .xr-urow-sub,.xr-urow.sel .xr-urow-pts i{color:var(--paper-3);}
.xr-urow.cat-inf{border-left-color:var(--sage);}
.xr-urow.cat-xeno{border-left-color:var(--iris);}
.xr-urow.cat-veh{border-left-color:var(--rust);}
.xr-urow-top{display:flex;align-items:center;gap:8px;width:100%;}
.xr-urow-crown{color:var(--brass);flex:none;}
.xr-urow.sel .xr-urow-crown{color:#E8C860;}
.xr-urow-name{font-family:var(--display);font-weight:700;font-size:16px;line-height:1.15;flex:1;min-width:0;}
.xr-urow-pts{font-family:var(--mono);font-weight:700;font-size:16px;white-space:nowrap;}
.xr-urow-pts i{font-style:normal;font-size:12px;color:var(--ink-2);margin-left:3px;}
.xr-urow-sub{font-family:var(--ui);font-weight:500;font-size:12.5px;color:var(--ink-2);line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.xr-urow-sub em{font-style:italic;}
/* duplicate/delete live on the left unit card, in a reserved right gutter.
   dragging is instant (no transition, tracks the pointer 1:1); other rows
   glide out of the way with a short transition to open a gap. */
.xr-urow-wrap{position:relative;transition:transform 150ms ease;}
.xr-urow-wrap.dragging{transition:none;z-index:20;}
.xr-urow-wrap>.xr-urow{width:100%;padding-right:98px;cursor:grab;}
.xr-urow-wrap.dragging>.xr-urow{cursor:grabbing;transform:none;}
/* tools: drag handle, duplicate, and delete, sitting in the reserved right gutter */
.xr-urow-tools{position:absolute;top:0;bottom:0;right:6px;width:86px;display:flex;align-items:center;justify-content:flex-end;gap:4px;}
.xr-drag-handle{flex:none;width:18px;align-self:stretch;display:flex;align-items:center;justify-content:center;color:var(--ink-2);touch-action:none;cursor:grab;opacity:.5;transition:opacity .12s,color .12s;}
.xr-drag-handle:hover{opacity:1;color:var(--ink);}
.xr-urow-wrap.dragging .xr-drag-handle{cursor:grabbing;}
.xr-urow-tools button{width:28px;height:36px;flex:none;display:flex;align-items:center;justify-content:center;border-radius:6px;border:2px solid var(--ink-30);background:var(--paper);color:var(--ink-2);box-shadow:var(--shadow4);transition:border-color .12s,color .12s,background .12s,opacity .12s;}
.xr-urow-tools button:hover{border-color:var(--ink);color:var(--ink);background:var(--paper-3);}
.xr-urow-tools button.danger:hover{border-color:var(--coral-ink);color:var(--coral-ink);background:#F4604C14;}
.xr-urow-tools button:disabled{opacity:.32;cursor:default;box-shadow:none;}
.xr-urow-tools button:disabled:hover{border-color:var(--ink-30);color:var(--ink-2);background:var(--paper);}

/* the "file by" ordering toolbar above the roster rows */
.xr-ulist-file{display:flex;align-items:center;gap:7px;flex-wrap:wrap;padding:2px 2px 4px;}
.xr-file-l{font-family:var(--ui);font-weight:700;font-size:12.5px;letter-spacing:.03em;text-transform:uppercase;color:var(--ink-2);}
.xr-file-btn{font-family:var(--ui);font-weight:600;font-size:13.5px;color:var(--ink);background:var(--paper);border:2px solid var(--ink-30);border-radius:20px;padding:4px 13px;min-height:36px;transition:border-color .12s,background .12s,color .12s;}
.xr-file-btn:hover{border-color:var(--ink);background:var(--paper-3);}
.xr-file-btn:active{transform:scale(.96);}

/* unit panel */
.xr-panel{padding:16px clamp(14px,2vw,24px) 40px;animation:xr-rise var(--dur-gentle) var(--curve-decel-min);}
/* brand unit-type banner (green to blue) */
.xr-typebanner{display:flex;align-items:center;gap:9px;background:var(--brand-deep);color:#fff;border-radius:10px;padding:9px 14px;margin-bottom:14px;box-shadow:var(--shadow4);}
.xr-typebanner-ic{display:flex;color:#fff;opacity:.92;}
.xr-typebanner-t{font-family:var(--ui);font-weight:700;font-size:15px;letter-spacing:.09em;text-transform:uppercase;}
.xr-typebanner-cmd{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-family:var(--ui);font-weight:700;font-size:12.5px;letter-spacing:.04em;text-transform:uppercase;background:rgba(255,255,255,.22);padding:3px 9px;border-radius:20px;}
.xr-panel-head{display:flex;align-items:center;gap:12px;padding-bottom:12px;}
.xr-panel-back{display:none;}
/* image upload widget */
.xr-imgup{position:relative;flex:none;}
.xr-imgup.square,.xr-imgup.square .xr-imgup-thumb,.xr-imgup.square .xr-imgup-add{width:64px;height:64px;border-radius:11px;}
.xr-imgup-add{display:flex;align-items:center;justify-content:center;border:2px dashed var(--ink-30);background:var(--paper-2);color:var(--ink-2);transition:.13s;}
.xr-imgup-add:hover{border-color:var(--ink);color:var(--ink);background:var(--paper-3);}
.xr-imgup-thumb{display:block;border:2px solid var(--ink);background-size:contain;background-repeat:no-repeat;background-position:center;background-color:var(--paper-3);cursor:pointer;padding:0;}
.xr-imgup-x{position:absolute;top:-12px;right:-12px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:2px solid var(--ink);background:var(--coral);color:#3a1206;transition:.12s;}
.xr-imgup-x:hover{background:var(--coral-ink);color:#fff;}
/* detachment picture on masthead + dashboard */
.xr-mast-img{flex:none;width:44px;height:44px;border-radius:9px;border:2px solid var(--ink);background-size:contain;background-repeat:no-repeat;background-position:center;background-color:var(--paper-3);}
.xr-mast-emblem{flex:none;display:flex;padding:0;border-radius:9px;transition:transform .12s;}
.xr-mast-emblem:hover{transform:translateY(-1px);}
.xr-mast-emblem:hover .xr-mast-img{border-color:var(--brand-deep-blue);}
.xr-mast-emblem-add{display:flex;align-items:center;justify-content:center;color:var(--ink-2);}
.xr-list-img{width:100%;height:120px;border-radius:8px;border:2px solid var(--ink);background-size:contain;background-repeat:no-repeat;background-position:center;background-color:var(--paper-3);margin-bottom:2px;}
.xr-set-img-row{display:flex;align-items:center;gap:11px;}
.xr-panel-id{flex:1;min-width:0;}
.xr-namefield{position:relative;display:block;border:2px solid var(--ink-30);border-radius:10px;background:var(--paper-2);padding:17px 12px 6px;cursor:text;transition:border-color .12s;}
.xr-namefield:hover{border-color:var(--ink);}
.xr-namefield:focus-within{border-color:var(--coral);background:var(--paper);}
.xr-namefield-l{position:absolute;top:6px;left:13px;display:inline-flex;align-items:center;gap:7px;font-family:var(--ui);font-weight:600;font-size:12.5px;line-height:1;color:var(--ink-2);}
.xr-namefield-l .xr-tag-cmd{font-size:10.5px;padding:1px 6px;gap:3px;}
.xr-namefield:focus-within .xr-namefield-l{color:var(--coral-ink);}
.xr-panel-name{width:100%;font-family:var(--display);font-weight:700;font-size:clamp(19px,2vw,24px);color:var(--ink);background:transparent;border:none;padding:0;line-height:1.1;}
.xr-panel-name:focus{outline:none;}
/* floating-label unit name: default label sits over the field, lifts on edit */
.xr-flname{position:relative;border:2px solid var(--ink-30);border-radius:10px;background:var(--paper-2);padding:16px 12px 6px;cursor:text;transition:border-color var(--dur-fast) var(--curve-ease),background var(--dur-fast) var(--curve-ease);}
.xr-flname:hover{border-color:var(--ink);}
.xr-flname:focus-within{border-color:var(--brand-deep-blue);background:var(--paper);}
.xr-flname-l{position:absolute;left:13px;top:50%;transform:translateY(-50%);font-family:var(--display);font-weight:700;font-size:clamp(19px,2vw,23px);line-height:1.1;color:var(--ink-2);pointer-events:none;transition:top var(--dur-fast) var(--curve-ease),font-size var(--dur-fast) var(--curve-ease),color var(--dur-fast) var(--curve-ease);white-space:nowrap;overflow:hidden;max-width:calc(100% - 24px);text-overflow:ellipsis;}
.xr-flname.up .xr-flname-l{top:7px;transform:none;font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.03em;color:var(--brand-deep-blue);}
.xr-flname-in{position:relative;width:100%;font-family:var(--display);font-weight:700;font-size:clamp(19px,2vw,23px);color:var(--ink);background:transparent;border:none;padding:0;line-height:1.1;}
.xr-flname-in:focus{outline:none;}
.xr-panel-name::placeholder{color:var(--ink-2);opacity:.7;}
.xr-panel-type{font-family:var(--ui);font-size:14.5px;color:var(--ink-2);display:inline-flex;align-items:center;gap:6px;}
.xr-tag-cmd{display:inline-flex;align-items:center;gap:4px;font-weight:700;font-size:13.5px;color:var(--cream);background:var(--brass);padding:2px 8px;border-radius:6px;}
.xr-panel-pts{font-family:var(--mono);font-weight:700;white-space:nowrap;}
.xr-panel-pts b{font-size:26px;}
.xr-panel-pts i{font-style:normal;font-size:14px;color:var(--ink-2);margin-left:3px;}
.xr-panel-tools{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 0;}
.xr-cmd-btn{flex:none;justify-content:center;white-space:nowrap;}
.xr-panel-notes{margin-top:16px;border-top:2px solid var(--ink-30);padding-top:12px;}
.xr-notes-l{display:block;font-family:var(--display);font-weight:700;font-size:16px;color:var(--ink);margin-bottom:6px;}
.xr-notes-area{width:100%;min-height:60px;resize:vertical;}
/* two-column panel: stats left, rules + abilities on the right */
.xr-panel-cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(288px,1fr));gap:8px 28px;align-items:start;}
.xr-panel-col{min-width:0;}
.xr-col-stats{max-width:380px;}
.xr-col-abil .xr-abil{margin-top:0;}
.xr-panel-col>.xr-sec:first-child .xr-sec-h{padding-top:4px;}
@media(max-width:900px){.xr-panel-cols{grid-template-columns:1fr;gap:0;}.xr-col-stats{max-width:none;}}
.xr-group{margin-top:18px;}
.xr-group-h{display:flex;align-items:center;gap:7px;font-family:var(--display);font-weight:700;letter-spacing:.03em;font-size:20px;line-height:1.4;color:var(--ink);padding-bottom:6px;border-bottom:2px solid var(--ink-30);margin-bottom:10px;}
/* abilities summary in the unit panel */
.xr-abil{margin-top:18px;padding-top:4px;}
.xr-abil-bar{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
/* buy-abilities dialog search: was a bare, unstyled input with no CSS rule at
   all, so it rendered at the browser default height (~21px), well under the
   44px minimum tap target on any viewport */
.xr-abil-searchbar{display:flex;align-items:center;gap:8px;margin-bottom:14px;}
.xr-abil-search{flex:1;min-width:0;height:44px;font-family:var(--body);font-size:15.5px;color:var(--ink);background:var(--paper-2);border:2px solid var(--ink-30);border-radius:10px;padding:0 14px;transition:border-color .12s,background .12s;}
.xr-abil-search::placeholder{color:var(--ink-2);opacity:.75;}
.xr-abil-search:hover{border-color:var(--ink);}
.xr-abil-search:focus{outline:none;border-color:var(--coral);background:var(--paper);}
.xr-abil-head{display:flex;align-items:center;gap:14px;margin-bottom:10px;}
.xr-abil-h{font-family:var(--display);font-weight:700;font-size:20px;line-height:1.4;color:var(--ink);}
.xr-abil-list{display:flex;flex-direction:column;gap:7px;}
.xr-abil-item{border:2px solid var(--ink-30);border-radius:10px;background:var(--paper-2);overflow:hidden;transition:border-color .12s;}
.xr-abil-item.open{border-color:var(--ink);}
.xr-abil-item.custom{border-color:var(--iris);}
.xr-abil-item.psy{border-color:var(--iris);}
.xr-abil-item-badge{flex:none;font-family:var(--mono);font-weight:700;font-size:13.5px;color:var(--iris);background:#6A4A8C14;border-radius:6px;padding:1px 7px;}
.xr-abil-item-kind{flex:none;font-family:var(--ui);font-weight:600;font-size:10.5px;letter-spacing:.03em;text-transform:uppercase;color:var(--ink-2);border:1px solid var(--ink-18);border-radius:5px;padding:1px 6px;}
.xr-abil-item.xeno .xr-abil-item-kind{color:var(--iris);border-color:#6A4A8C40;}
.xr-abil-item.psy .xr-abil-item-kind{color:var(--iris);border-color:#6A4A8C40;}
.xr-abil-item.custom .xr-abil-item-kind{color:var(--rust);border-color:#B06A2C40;}
.xr-abil-item-h{display:flex;align-items:center;gap:9px;width:100%;text-align:left;padding:10px 12px;min-height:46px;transition:background .12s;}
.xr-abil-item-h:hover{background:var(--paper-3);}
.xr-abil-item-caret{flex:none;color:var(--ink-2);transition:transform .16s;}
.xr-abil-item.open .xr-abil-item-caret{transform:rotate(180deg);}
.xr-abil-item-name{flex:1;font-family:var(--ui);font-weight:600;font-size:15.5px;color:var(--ink);}
.xr-abil-item-cost{flex:none;font-family:var(--mono);font-weight:700;font-size:15px;color:var(--coral-ink);}
.xr-abil-item-text{font-family:var(--body);font-size:15.5px;line-height:1.5;color:var(--ink);padding:0 12px 12px;animation:xr-rise .18s ease;}
.xr-abil-empty{font-family:var(--flavor);font-size:16px;font-style:italic;color:var(--ink-2);}
/* abilities modal: type groups + footer */
.xr-abil-group{margin-bottom:18px;}
.xr-abil-group-h{position:sticky;top:-16px;background:var(--paper);z-index:1;font-family:var(--display);font-weight:700;letter-spacing:.03em;font-size:20px;color:var(--ink);padding:6px 0 8px;border-bottom:2px solid var(--ink-30);margin-bottom:6px;}
.xr-modal-foot{padding:12px 20px;border-top:2px solid var(--ink-30);display:flex;justify-content:flex-end;}
/* configurable-xeno row: current setting + a Configure button */
.xr-xcfg{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:4px 4px 10px 60px;}
.xr-xcfg-cur{font-family:var(--ui);font-weight:600;font-size:14.5px;color:var(--iris);}
/* config modal: tier cards */
.xr-cfg-cards{display:grid;gap:11px;}
.xr-cfg-card{position:relative;display:flex;flex-direction:column;gap:4px;text-align:left;border:2.5px solid var(--ink-30);background:var(--paper-2);border-radius:12px;padding:13px 46px 13px 15px;transition:border-color .12s,background .12s,transform .12s;}
.xr-cfg-card:hover{border-color:var(--ink);background:var(--paper-3);}
.xr-cfg-card.on{border-color:var(--iris);background:#6A4A8C10;}
.xr-cfg-card-top{display:flex;align-items:baseline;gap:10px;}
.xr-cfg-card-top b{font-family:var(--display);font-weight:700;font-size:18px;color:var(--ink);}
.xr-cfg-card-top i{font-style:normal;font-family:var(--mono);font-weight:700;font-size:15px;color:var(--coral-ink);}
.xr-cfg-card-sub{font-family:var(--ui);font-weight:600;font-size:13.5px;color:var(--ink-2);}
.xr-cfg-card-desc{font-family:var(--body);font-size:15px;line-height:1.45;color:var(--ink);}
.xr-cfg-card-check{position:absolute;top:13px;right:14px;color:var(--iris);}
/* mercenary table */
.xr-merc-roll{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px;}
.xr-merc-note{font-family:var(--flavor);font-style:italic;font-size:14.5px;color:var(--ink-2);flex:1;min-width:180px;}
.xr-merc-table{display:grid;gap:8px;}
.xr-merc-row{position:relative;display:flex;align-items:flex-start;gap:12px;text-align:left;border:2px solid var(--ink-30);background:var(--paper-2);border-radius:11px;padding:11px 44px 11px 11px;transition:border-color .12s,background .12s;}
.xr-merc-row:hover{border-color:var(--ink);background:var(--paper-3);}
.xr-merc-row.on{border-color:var(--coral-ink);background:#F4604C10;}
.xr-merc-d{flex:none;width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:8px;border:2px solid var(--ink);background:var(--cream);font-family:var(--mono);font-weight:700;font-size:17px;}
.xr-merc-body{display:flex;flex-direction:column;gap:2px;}
.xr-merc-body b{font-family:var(--display);font-weight:700;font-size:16.5px;color:var(--ink);}
.xr-merc-body i{font-family:var(--body);font-style:normal;font-size:14.5px;line-height:1.4;color:var(--ink-2);}
.xr-merc-check{position:absolute;top:12px;right:14px;color:var(--coral-ink);}
/* modal form fields */
.xr-modal-narrow{width:min(520px,100%);}
.xr-field{display:block;margin-bottom:18px;}
.xr-field-l{display:block;font-family:var(--display);font-weight:600;letter-spacing:.03em;font-size:16px;color:var(--ink-2);margin-bottom:6px;}
.xr-field-l em{font-style:italic;font-variant:normal;font-size:13.5px;margin-left:6px;}
.xr-field-in{width:100%;font-family:var(--body);font-size:17px;color:var(--ink);background:var(--paper-2);border:2px solid var(--ink-30);border-radius:10px;padding:11px 13px;min-height:48px;}
.xr-field-roll{display:flex;gap:8px;align-items:stretch;}
.xr-field-roll .xr-field-in{flex:1;}
/* email-style floating-label field */
.xr-ff{position:relative;margin-bottom:18px;}
.xr-ff-in{width:100%;font-family:var(--body);font-size:16.5px;color:var(--ink);background:var(--paper);border:2px solid var(--ink-30);border-radius:10px;padding:16px 13px 14px;transition:border-color var(--dur-fast) var(--curve-ease);}
.xr-ff.area .xr-ff-in{resize:vertical;min-height:86px;line-height:1.5;}
.xr-ff-in:focus{outline:none;border-color:var(--brand-deep-blue);}
.xr-ff-l{position:absolute;left:10px;top:16px;padding:0 6px;font-family:var(--body);font-size:16.5px;color:var(--ink-2);background:var(--paper);pointer-events:none;transition:top var(--dur-fast) var(--curve-ease),font-size var(--dur-fast) var(--curve-ease),color var(--dur-fast) var(--curve-ease);white-space:nowrap;max-width:calc(100% - 20px);overflow:hidden;text-overflow:ellipsis;}
.xr-ff.up .xr-ff-l{top:-9px;font-size:12.5px;font-weight:600;color:var(--brand-deep-blue);}
/* new-detachment emblem row + inline links */
.xr-newimg-row{display:flex;align-items:center;gap:13px;margin-bottom:20px;}
.xr-newimg{flex:none;width:64px;height:64px;border-radius:12px;border:2px solid var(--ink);background:var(--paper-2);color:var(--ink);display:flex;align-items:center;justify-content:center;overflow:hidden;transition:border-color .12s,background .12s;}
.xr-newimg:hover{border-color:var(--brand-deep-blue);background:var(--paper-3);}
.xr-newimg-face{width:64px;height:64px;border:none;border-radius:0;background-size:contain;background-repeat:no-repeat;background-position:center;}
.xr-newimg-face.xr-dicon-glyph{background:transparent;color:var(--ink);}
.xr-newimg-add{display:flex;color:var(--ink-2);}
.xr-newimg-txt{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0;}
.xr-newimg-txt b{font-family:var(--display);font-weight:700;font-size:16px;color:var(--ink);}
.xr-linky{align-self:flex-start;display:inline-flex;align-items:center;gap:5px;font-family:var(--ui);font-weight:600;font-size:14.5px;color:var(--brand-deep-blue);text-decoration:underline;text-underline-offset:2px;background:none;padding:6px 0;}
.xr-linky:hover{color:var(--ink);}
.xr-name-random{margin:-10px 0 18px;}
.xr-coll-chips{display:flex;flex-wrap:wrap;gap:6px;margin:-8px 0 4px;}
.xr-coll-chip{font-family:var(--ui);font-weight:600;font-size:13.5px;color:var(--ink-2);background:var(--paper-2);border:2px solid var(--ink-30);border-radius:20px;padding:4px 12px;min-height:44px;transition:.12s;}
.xr-coll-chip:hover{border-color:var(--ink);color:var(--ink);}
.xr-coll-chip.on{background:var(--ink);border-color:var(--ink);color:var(--cream);}
/* emblem picker — two-pane desktop / bottom-sheet mobile */
.xr-epicker-back{align-items:center;justify-content:center;}
.xr-epicker{display:flex;flex-direction:column;width:min(920px,96vw);max-height:88vh;background:var(--paper);border:2px solid var(--ink-30);border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.28);}
.xr-epicker-head{display:flex;align-items:center;justify-content:space-between;padding:14px 18px 12px;border-bottom:1px solid var(--ink-18);flex-shrink:0;}
.xr-epicker-layout{display:flex;flex:1;min-height:0;}
.xr-epicker-side{display:flex;flex-direction:column;width:190px;flex-shrink:0;border-right:1px solid var(--ink-18);background:var(--paper-2);}
.xr-epicker-side-body{flex:1;overflow-y:auto;padding:10px 8px 6px;}
.xr-epicker-side-hd{font:700 11px/1 var(--display);text-transform:uppercase;letter-spacing:.06em;color:var(--ink-2);padding:8px 8px 4px;margin:0;}
.xr-epicker-citem{display:flex;align-items:center;gap:6px;width:100%;padding:6px 8px;border:none;background:none;border-radius:8px;cursor:pointer;color:var(--ink);font:14px/1.2 var(--body);text-align:left;}
.xr-epicker-citem:hover{background:var(--paper-3);}
.xr-epicker-citem.on{background:var(--ink);color:var(--cream);}
.xr-epicker-dot{display:inline-block;width:9px;height:9px;border-radius:50%;background:var(--ink-30);flex-shrink:0;}
.xr-epicker-citem.on .xr-epicker-dot{background:rgba(255,255,255,.5);}
.xr-epicker-cname{flex:1;}
.xr-epicker-cct{font:12px/1 var(--mono);color:var(--ink-2);opacity:.7;}
.xr-epicker-citem.on .xr-epicker-cct{opacity:.8;color:var(--cream);}
.xr-epicker-divider{border:none;border-top:1px solid var(--ink-18);margin:8px 0;}
.xr-epicker-side-foot{padding:10px 8px;border-top:1px solid var(--ink-18);}
.xr-epicker-pills{display:none;flex-direction:column;gap:6px;padding:10px 14px 6px;border-bottom:1px solid var(--ink-18);flex-shrink:0;}
.xr-epicker-prow{display:flex;align-items:center;gap:8px;overflow:hidden;}
.xr-epicker-plbl{font:700 10px/1 var(--display);text-transform:uppercase;letter-spacing:.06em;color:var(--ink-2);flex-shrink:0;width:46px;}
.xr-epicker-pscroll{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding-bottom:2px;}
.xr-epicker-pscroll::-webkit-scrollbar{display:none;}
.xr-epicker-pill{display:flex;align-items:center;gap:4px;white-space:nowrap;padding:5px 11px;border-radius:20px;border:1.5px solid var(--ink-30);background:none;color:var(--ink);font:13px/1 var(--body);cursor:pointer;flex-shrink:0;}
.xr-epicker-pill:hover{background:var(--paper-2);}
.xr-epicker-pill.on{background:var(--ink);color:var(--cream);border-color:var(--ink);}
.xr-epicker-pdot{display:inline-block;width:7px;height:7px;border-radius:50%;flex-shrink:0;}
.xr-epicker-pill.on .xr-epicker-pdot{opacity:.8;}
.xr-epicker-main{display:flex;flex-direction:column;flex:1;min-width:0;}
.xr-epicker-toolbar{display:flex;gap:8px;padding:10px 14px 8px;flex-shrink:0;}
.xr-epicker-search{flex:1;padding:7px 11px;border:1.5px solid var(--ink-30);border-radius:8px;background:var(--paper-2);color:var(--ink);font:14px/1 var(--body);}
.xr-epicker-search:focus{outline:none;border-color:var(--ink);}
.xr-epicker-sort{padding:7px 10px;border:1.5px solid var(--ink-30);border-radius:8px;background:var(--paper-2);color:var(--ink);font:13px/1 var(--body);cursor:pointer;}
.xr-epicker-grid-wrap{flex:1;overflow-y:auto;padding:0 14px 10px;}
.xr-epicker-sec-lbl{font:700 11px/1 var(--display);text-transform:uppercase;letter-spacing:.06em;color:var(--ink-2);padding:10px 0 6px;display:flex;align-items:center;gap:8px;}
.xr-epicker-ct{font:12px/1 var(--mono);background:var(--ink-18);border-radius:20px;padding:2px 7px;color:var(--ink);}
.xr-epicker-empty{color:var(--ink-2);font-style:italic;padding:20px 0;text-align:center;}
.xr-epicker-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:6px;}
.xr-epicker-cell{display:flex;align-items:center;justify-content:center;aspect-ratio:1;position:relative;border:2px solid var(--ink-30);border-radius:10px;background:var(--paper-2);color:var(--ink);cursor:pointer;transition:border-color .1s,background .1s,transform .1s,opacity .1s;}
.xr-epicker-cell svg{width:60%;height:60%;}
.xr-epicker-cell:hover{border-color:var(--coral);background:var(--paper-3);transform:translateY(-2px);}
.xr-epicker-cell.sel{border-color:var(--ink);background:var(--ink);color:var(--cream);box-shadow:0 0 0 3px var(--coral);}
.xr-epicker-cell.dim{opacity:.35;}
.xr-epicker-tip{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);background:var(--ink);color:var(--cream);font:12px/1.3 var(--body);white-space:nowrap;padding:4px 8px;border-radius:6px;pointer-events:none;opacity:0;transition:opacity .12s;z-index:10;}
.xr-epicker-cell:hover .xr-epicker-tip{opacity:1;}
.xr-epicker-foot{display:flex;align-items:center;gap:10px;padding:10px 14px;border-top:1px solid var(--ink-18);flex-shrink:0;min-height:56px;}
.xr-epicker-foot-prev{display:flex;align-items:center;flex-shrink:0;}
.xr-epicker-foot-info{flex:1;display:flex;flex-direction:column;gap:2px;font:14px/1.2 var(--body);}
.xr-epicker-foot-info em{font:11px/1 var(--display);font-style:normal;color:var(--ink-2);text-transform:uppercase;letter-spacing:.04em;}
.xr-epicker-foot-empty{flex:1;color:var(--ink-2);font-style:italic;font:13px/1 var(--body);}
.xr-epicker-upload-m{display:none;}
/* chosen-badge glyph rendering inside the detachment image slots */
.xr-dicon-glyph{display:flex;align-items:center;justify-content:center;color:var(--ink);background:var(--paper-3);}
/* collection groups on the dashboard */
.xr-home-group{margin-bottom:24px;}
.xr-home-grouph{font-family:var(--display);font-weight:700;font-size:19px;color:var(--ink);letter-spacing:.02em;padding-bottom:6px;margin-bottom:12px;border-bottom:2px solid var(--ink-18);}
.xr-fac-empty{font-family:var(--flavor);font-style:italic;color:var(--ink-2);padding:10px 2px;}
.xr-field-in:focus{outline:none;border-color:var(--coral);}
.xr-field-area{resize:vertical;min-height:76px;line-height:1.5;}
/* custom abilities tab */
.xr-custom-tab{display:flex;flex-direction:column;gap:12px;}
.xr-custom-intro{font-family:var(--flavor);font-style:italic;font-size:15.5px;color:var(--ink-2);margin-bottom:2px;}
.xr-custom-row{border:1.5px dashed var(--iris);border-radius:10px;padding:10px 12px;background:var(--paper-2);}
.xr-custom-row-head{display:flex;align-items:center;gap:10px;}
.xr-custom-row-name{flex:1;font-family:var(--ui);font-weight:600;font-size:16px;}
.xr-custom-row-text{font-family:var(--flavor);font-style:italic;font-size:15.5px;color:var(--ink-2);margin-top:6px;}
.xr-iconbtn.small{width:44px;height:44px;flex:none;}
.xr-custom-form{border:1.5px solid var(--ink-30);border-radius:10px;padding:14px;background:var(--paper-2);}
.xr-custom-cost{max-width:110px;}
.xr-custom-form-foot{display:flex;justify-content:flex-end;gap:10px;}
.xr-chips{display:flex;flex-direction:column;gap:6px;}
.xr-chipwrap{display:flex;flex-direction:column;}
.xr-chip{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;font-weight:600;font-size:15.5px;border:1.5px solid var(--ink-30);border-radius:8px;padding:6px 10px 6px 12px;min-height:44px;transition:.12s;}
.xr-chip:hover{border-color:var(--ink);background:var(--paper-2);}
.xr-chip-caret{color:var(--ink-2);transition:transform .15s;}
.xr-chip:hover .xr-chip-caret{color:var(--ink);}
.xr-chipwrap.open .xr-chip{background:var(--ink);color:var(--cream);border-color:var(--ink);}
.xr-chipwrap.open .xr-chip-caret{transform:rotate(180deg);color:var(--cream);}
.xr-chip-text{font-family:var(--body);font-style:normal;font-size:16px;color:var(--ink);line-height:1.5;padding:8px 2px 4px;}
.xr-flavor{display:block;font-family:var(--flavor);font-style:italic;font-size:15.5px;line-height:1.4;color:var(--ink-2);margin-bottom:5px;}
.xr-rule-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px;}
.xr-rule-list li{position:relative;padding-left:17px;line-height:1.45;}
.xr-rule-list li::before{content:"";position:absolute;left:3px;top:.62em;width:5px;height:5px;border-radius:50%;background:var(--coral);}

/* option rows */
.xr-row{border-bottom:1px solid var(--ink-18);padding:4px 0;}
.xr-row:last-child{border-bottom:none;}
.xr-row-line{display:flex;align-items:stretch;gap:6px;}
.xr-row-hit{flex:1;display:flex;align-items:center;gap:10px;text-align:left;padding:8px 4px;min-height:48px;border-radius:8px;transition:.12s;}
.xr-row-hit:hover{background:var(--paper-2);}
.xr-row-hit:disabled{opacity:.5;cursor:not-allowed;}
.xr-row-cost{flex:none;min-width:44px;text-align:center;font-family:var(--mono);font-weight:700;font-size:16.5px;padding:3px 7px;border-radius:8px;border:1.5px solid var(--ink-30);background:var(--paper-2);}
.xr-row-cost.pos{background:var(--coral);color:var(--ink);border-color:var(--coral-ink);}
.xr-row-cost.neg{background:var(--sage);color:var(--cream);border-color:var(--sage);}
.xr-check{flex:none;width:26px;height:26px;border:2px solid var(--ink);border-radius:7px;display:flex;align-items:center;justify-content:center;background:var(--paper);}
.xr-row.on .xr-check{background:var(--ink);color:var(--cream);}
.xr-row-name{font-weight:600;font-size:16.5px;line-height:1.25;}
.xr-row-info{flex:none;width:34px;align-self:center;height:34px;border:1.5px solid var(--ink-30);border-radius:50%;color:var(--ink-2);font-weight:700;font-size:16px;transition:.12s;}
.xr-row-info:hover{background:var(--ink);border-color:var(--ink);color:var(--cream);}
.xr-row-text{font-family:var(--body);font-style:normal;font-size:16px;color:var(--ink);line-height:1.5;padding:2px 4px 8px 60px;}
.xr-row-lore{font-family:var(--flavor);font-style:italic;font-size:15px;line-height:1.4;color:var(--ink-2);padding:0 4px 8px 60px;}
/* compact d6 outcome table (mercenary, and any table-shaped rule) */
.xr-d6{display:grid;gap:4px;margin-top:4px;}
.xr-d6-row{display:grid;grid-template-columns:26px 1fr;gap:9px;align-items:start;}
.xr-d6-n{font-family:var(--mono);font-weight:700;font-size:14px;text-align:center;color:var(--ink);background:var(--paper-3);border:1.5px solid var(--ink-30);border-radius:6px;line-height:24px;}
.xr-d6-b{font-family:var(--body);font-size:15px;line-height:1.4;color:var(--ink);}
.xr-d6-b b{font-family:var(--display);}
.xr-d6-flavor{font-family:var(--flavor);font-style:italic;color:var(--ink-2);}
.xr-subs{margin-left:44px;border-left:2px solid var(--ink-18);padding-left:8px;}
.xr-tiers{display:flex;gap:7px;flex-wrap:wrap;padding:2px 4px 10px 60px;}
.xr-tier{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:15.5px;border:2px solid var(--ink-30);border-radius:8px;padding:7px 12px;min-height:44px;transition:border-color .12s,background .12s;}
.xr-tier-l{display:inline-flex;flex-direction:column;line-height:1.15;text-align:left;}
.xr-tier-l em{font-style:normal;font-family:var(--ui);font-weight:500;font-size:11.5px;color:var(--ink-2);}
.xr-tier.on .xr-tier-l em{color:var(--cream);}
/* psychic powers picker */
.xr-psy-powers{margin-top:16px;border-top:2px solid var(--ink-30);padding-top:14px;}
.xr-psy-powers-h{display:flex;align-items:center;gap:14px;margin-bottom:9px;}
.xr-psy-powers-h h4{font-family:var(--display);font-weight:700;font-size:18px;color:var(--ink);}
.xr-psy-count{font-family:var(--mono);font-weight:700;font-size:13.5px;color:var(--ink-2);padding:3px 9px;border:1.5px solid var(--ink-30);border-radius:8px;}
.xr-psy-count.full{color:var(--iris);border-color:var(--iris);background:#6A4A8C10;}
.xr-psy-table{display:flex;flex-direction:column;gap:5px;overflow-x:auto;}
.xr-psy-tr{display:grid;grid-template-columns:30px 130px 46px 150px 148px minmax(230px,1fr);gap:10px;align-items:start;min-width:730px;text-align:left;}
.xr-psy-head{font-family:var(--ui);font-weight:600;font-size:12.5px;color:var(--ink-2);padding:0 8px 5px;border-bottom:2px solid var(--ink-30);}
.xr-psy-row{padding:9px 8px;border:2px solid var(--ink-30);border-radius:9px;background:var(--paper-2);transition:border-color .12s,background .12s;}
.xr-psy-row:hover:not(:disabled){border-color:var(--brand-deep-blue);}
.xr-psy-row.on{border-color:var(--iris);background:#6A4A8C14;}
.xr-psy-row:disabled{opacity:.5;cursor:not-allowed;}
.xr-psy-check{width:22px;height:22px;flex:none;display:flex;align-items:center;justify-content:center;border:2px solid var(--ink);border-radius:6px;background:var(--paper);color:var(--cream);}
.xr-psy-row.on .xr-psy-check{background:var(--iris);border-color:var(--iris);}
.xr-psy-name{font-family:var(--ui);font-weight:600;font-size:15px;color:var(--ink);}
.xr-psy-diff{font-family:var(--mono);font-weight:700;font-size:15px;color:var(--iris);}
.xr-psy-target,.xr-psy-dur,.xr-psy-effect{font-size:13px;line-height:1.4;color:var(--ink-2);}
.xr-tier:hover{border-color:var(--ink);}
.xr-tier.on{background:var(--ink);color:var(--cream);border-color:var(--ink);}
.xr-tier i{font-style:normal;font-family:var(--mono);}
.xr-cmd-tables{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:8px;}
.xr-cmd-blurb{font-family:var(--flavor);font-size:16px;font-style:italic;color:var(--ink-2);margin-bottom:10px;}
/* commander summary card in the abilities column */
.xr-cmdcard{border:2px solid var(--brass);border-radius:12px;background:#8A6A1F0e;padding:11px 13px;margin-top:16px;}
.xr-cmdcard-h{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:7px;}
.xr-cmdcard-t{display:inline-flex;align-items:center;gap:6px;font-family:var(--display);font-weight:700;font-size:16px;color:var(--brass);}
.xr-cmdcard-trait{font-family:var(--body);font-size:15.5px;line-height:1.45;color:var(--ink);}
.xr-cmdcard-trait b{font-family:var(--display);color:var(--ink);}
.xr-trait-flavor{font-family:var(--flavor);font-style:italic;color:var(--ink-2);}
.xr-cmdcard-none{font-family:var(--flavor);font-style:italic;color:var(--ink-2);}
/* commander modal */
.xr-cmd-step{display:block;font-family:var(--display);font-weight:700;font-variant:small-caps;letter-spacing:.03em;font-size:15px;color:var(--ink-2);margin:2px 0 9px;}
.xr-cmd-step:not(:first-child){margin-top:20px;border-top:1.5px solid var(--ink-18);padding-top:16px;}
.xr-cmd-tablecards{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;}
.xr-cmd-tablecard{position:relative;display:flex;flex-direction:column;gap:3px;text-align:left;border:2px solid var(--ink-30);background:var(--paper-2);border-radius:11px;padding:11px 40px 11px 13px;transition:border-color .12s,background .12s;}
.xr-cmd-tablecard:hover{border-color:var(--ink);}
.xr-cmd-tablecard.on{border-color:var(--brass);background:#8A6A1F12;}
.xr-cmd-tablecard b{font-family:var(--display);font-weight:700;font-size:17px;color:var(--ink);}
.xr-cmd-tablecard i{font-family:var(--flavor);font-style:italic;font-size:14px;line-height:1.35;color:var(--ink-2);}
.xr-cmd-tablecard-check{position:absolute;top:11px;right:13px;color:var(--brass);}
.xr-traitpick-btns{display:flex;gap:8px;flex-wrap:wrap;}
.xr-trait-choices{display:flex;flex-direction:column;gap:6px;margin-top:10px;animation:xr-rise .18s ease;}
.xr-trait-choice{display:flex;flex-direction:column;gap:2px;text-align:left;border:2px solid var(--ink-30);border-radius:9px;padding:8px 12px;min-height:44px;background:var(--paper-2);transition:border-color .12s,background .12s,transform .12s;}
.xr-trait-choice:hover{border-color:var(--brass);transform:translateX(2px);}
.xr-trait-choice.on{border-color:var(--brass);background:#8A6A1F14;}
.xr-trait-choice b{font-family:var(--ui);font-weight:600;font-size:15.5px;color:var(--brass);}
.xr-trait-choice span{font-size:14.5px;line-height:1.4;color:var(--ink-2);}
.xr-trait{margin-top:10px;border:2px solid var(--brass);border-radius:10px;padding:10px 14px;background:var(--paper-2);}
.xr-trait-name{font-family:var(--display);font-weight:700;font-size:17.5px;color:var(--brass);}
.xr-trait-rule{font-family:var(--body);font-style:normal;font-size:16px;line-height:1.5;color:var(--ink);}

/* add-unit modal */
.xr-modal-backdrop{position:fixed;inset:0;background:rgba(31,61,46,.55);display:flex;align-items:center;justify-content:center;padding:20px;z-index:90;animation:xr-fade var(--dur-fast) var(--curve-decel);}
.xr-modal{width:min(880px,100%);max-height:88vh;background:var(--paper);border:3px solid var(--ink);border-radius:16px;box-shadow:var(--shadow64);display:flex;flex-direction:column;overflow:hidden;animation:xr-pop var(--dur-slow) var(--curve-decel);}
/* fixed height so switching tabs does not resize/move the window */
.xr-modal.xr-modal-tall{height:min(680px,86vh);}
.xr-modal-head{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:3px solid var(--ink);}
.xr-modal-title{display:flex;align-items:center;gap:9px;font-family:var(--display);font-weight:700;font-size:24px;line-height:1.33;}
.xr-modal-tabs{display:flex;gap:6px;padding:10px 16px;border-bottom:2px solid var(--ink-18);flex-wrap:wrap;}
/* smooth sliding tabs (add-unit categories) */
.xr-stabs{position:relative;display:grid;grid-template-columns:repeat(var(--n),1fr);margin:12px clamp(14px,3vw,20px);padding:4px;background:var(--paper-3);border-radius:11px;border:2px solid var(--ink-30);}
.xr-stabs-ind{position:absolute;top:4px;bottom:4px;left:calc(4px + var(--i) * (100% - 8px) / var(--n));width:calc((100% - 8px)/var(--n));border-radius:8px;background:var(--brand-deep);box-shadow:var(--shadow4);transition:left var(--dur-gentle) var(--curve-ease-max);}
.xr-stabs .xr-stab{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;min-width:0;padding:0 4px;font-family:var(--ui);font-weight:600;font-size:16px;color:var(--ink-2);border-radius:8px;transition:color var(--dur-fast) var(--curve-ease);}
.xr-stab:hover:not(.on){color:var(--ink);}
.xr-stab.on{color:#fff;}
.xr-stabs .xr-stab span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;}
.xr-stabs .xr-stab svg{flex:none;}
@media(max-width:480px){.xr-stabs .xr-stab{gap:5px;font-size:14px;}.xr-stabs .xr-stab svg{width:16px;height:16px;}}
@media(max-width:400px){.xr-stabs .xr-stab{flex-direction:column;gap:2px;font-size:12px;line-height:1.1;}}
.xr-modal-tab{display:inline-flex;align-items:center;gap:6px;font-family:var(--display);font-weight:600;font-size:14px;color:var(--ink-2);border:2px solid var(--ink-30);background:var(--paper);padding:5px 12px;border-radius:8px;min-height:38px;transition:.12s;}
.xr-modal-tab:hover{border-color:var(--ink);color:var(--ink);}
.xr-modal-tab.on{color:var(--cream);background:var(--ink);border-color:var(--ink);}
.xr-tab-n{font-style:normal;font-family:var(--mono);font-weight:700;font-size:13px;background:var(--cream);color:var(--ink);border-radius:10px;min-width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;padding:0 5px;}
.xr-modal-count{margin-right:auto;font-family:var(--ui);font-weight:500;font-size:14.5px;color:var(--ink-2);}
.xr-modal-tab.cat-inf.on{background:var(--sage);border-color:var(--sage);}
.xr-modal-tab.cat-xeno.on{background:var(--iris);border-color:var(--iris);}
.xr-modal-tab.cat-veh.on{background:var(--rust);border-color:var(--rust);}
.xr-modal-body{overflow-y:auto;padding:16px 20px 24px;}
.xr-modal.xr-modal-wide{width:min(1080px,100%);height:min(840px,92vh);}
/* the add-unit box is roomier so the cards can carry full role text and rules */
.xr-modal.xr-modal-addunit{width:min(1320px,100%);height:min(920px,94vh);}
.xr-pick-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(292px,1fr));gap:14px;}
.xr-cat-card{display:flex;flex-direction:column;text-align:left;border:2.5px solid var(--ink);background:var(--paper-2);padding:14px 15px 12px;border-radius:var(--r);transition:transform .14s cubic-bezier(.2,.8,.2,1),background .14s,box-shadow .14s;}
.xr-cat-card:hover{background:var(--paper-3);box-shadow:0 6px 15px rgba(31,61,46,.16);transform:translateY(-3px);}
.xr-cat-card:active{transform:scale(.98);}
.xr-cat-top{display:flex;align-items:flex-start;gap:10px;}
.xr-cat-badge{flex:none;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:9px;border:2px solid var(--ink);background:var(--cream);color:var(--ink);}
.xr-abbr{font-family:var(--ui);font-weight:800;letter-spacing:.02em;line-height:1;color:inherit;}
.xr-cat-card.cat-inf .xr-cat-badge{color:var(--sage);}
.xr-cat-card.cat-xeno .xr-cat-badge{color:var(--iris);}
.xr-cat-card.cat-veh .xr-cat-badge{color:var(--rust);}
.xr-cat-name{flex:1;}
.xr-cat-stamp{margin-left:auto;}
.xr-cat-stamp{flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;width:52px;height:52px;border-radius:50%;background:var(--coral);color:var(--ink);border:2px solid var(--ink);}
.xr-cat-stamp b{font-family:var(--mono);font-weight:700;font-size:18px;line-height:1;}
.xr-cat-stamp i{font-style:normal;font-size:11px;font-weight:700;}
.xr-cat-name{font-family:var(--display);font-weight:700;font-size:18px;line-height:1.15;}
.xr-cat-role{font-family:var(--flavor);font-style:italic;font-size:14.5px;line-height:1.4;color:var(--ink-2);margin:3px 0 9px;}
/* activation row of 4, colour-coded like the builder dice, distinct from the profile values */
.xr-cat-acts{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:8px;}
.xr-cat-act{display:flex;flex-direction:column;align-items:center;gap:1px;padding:4px 2px;border-radius:7px;border:1.5px solid var(--ink-30);background:var(--paper);}
.xr-cat-act b{font-family:var(--mono);font-weight:700;font-size:15px;color:var(--ink);}
.xr-cat-act b sup{font-size:8px;color:var(--coral-ink);}
.xr-cat-act em{font-family:var(--ui);font-style:normal;font-weight:600;font-size:9.5px;letter-spacing:.02em;color:var(--ink-2);text-transform:uppercase;}
.xr-cat-act.k-atk{border-color:var(--coral-ink);background:#F4604C14;}
.xr-cat-act.k-mov{border-color:var(--sage);background:#5C7A5214;}
.xr-cat-act.k-sho{border-color:var(--iris);background:#6A4A8C14;}
.xr-cat-act.k-cou{border-color:var(--brass);background:#8A6A1F14;}
.xr-cat-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:6px 6px;margin-bottom:8px;}
.xr-cat-rules{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;}
.xr-cat-rule{font-family:var(--ui);font-weight:600;font-size:11px;color:var(--ink-2);background:var(--cream);border:1px solid var(--ink-18);border-radius:5px;padding:1px 6px;cursor:help;}
.xr-cat-rule:hover{border-color:var(--ink-30);color:var(--ink);}
.xr-cat-stat{display:flex;align-items:center;gap:7px;}
.xr-cat-stat img{flex:none;opacity:.9;}
.xr-cat-stat b{font-family:var(--mono);font-weight:700;font-size:16px;color:var(--ink);font-variant-numeric:tabular-nums;}
.xr-cat-add{margin-top:auto;display:inline-flex;align-items:center;justify-content:center;gap:7px;font-family:var(--display);font-weight:600;font-size:15px;color:var(--cream);background:var(--ink);border-radius:9px;padding:8px 12px;min-height:40px;}
.xr-cat-add b{font-family:var(--display);font-weight:700;}
.xr-cat-card:hover .xr-cat-add{background:var(--brand-deep-blue);}
/* dashboard action buttons */
.xr-home-bar-btns{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
/* load-a-preset modal */
.xr-preset-blurb{font-size:16px;line-height:1.45;color:var(--ink-2);margin-bottom:14px;}
.xr-preset-blurb b{font-family:var(--display);color:var(--ink);}
.xr-preset-epi{border-left:3px solid var(--brand-deep-blue);padding:3px 0 3px 16px;margin-bottom:8px;max-width:62ch;}
.xr-preset-quote{font-family:var(--flavor);font-style:italic;font-size:17px;line-height:1.5;color:var(--ink);}
.xr-preset-by{font-family:var(--ui);font-weight:600;font-size:13.5px;letter-spacing:.02em;color:var(--brand-deep-blue);margin-top:6px;}
.xr-preset-notes{font-family:var(--ui);font-size:13px;color:var(--ink-2);margin-bottom:14px;display:flex;flex-wrap:wrap;gap:4px 10px;}
.xr-preset-notes a{color:var(--brand-deep-blue);text-decoration:none;font-weight:600;word-break:break-all;}
.xr-preset-img{display:flex;align-items:center;justify-content:center;width:100%;height:118px;border-radius:8px;border:2px solid var(--ink);background-size:contain;background-repeat:no-repeat;background-position:center;background-color:var(--paper-3);margin-bottom:9px;}
.xr-preset-img.xr-dicon-glyph svg{width:90px;height:90px;}
.xr-preset-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:13px;}
.xr-preset-card{display:flex;flex-direction:column;gap:3px;text-align:left;border:2.5px solid var(--ink);background:var(--paper-2);padding:13px 15px 11px;border-radius:var(--r);transition:.13s;}
.xr-preset-card:hover{background:var(--paper-3);box-shadow:0 3px 10px rgba(31,61,46,.14);}
.xr-preset-card:active{transform:scale(.98);}
.xr-preset-name{font-family:var(--display);font-weight:700;font-size:18px;line-height:1.15;}
.xr-preset-sub{font-family:var(--flavor);font-style:italic;font-size:15px;color:var(--ink-2);line-height:1.3;margin-bottom:8px;}
.xr-preset-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:auto;padding-top:8px;}
.xr-preset-meta{font-family:var(--ui);font-weight:500;font-size:13.5px;color:var(--ink-2);}
.xr-preset-load{display:inline-flex;align-items:center;gap:5px;font-family:var(--display);font-weight:600;font-size:14.5px;color:var(--cream);background:var(--ink);border-radius:8px;padding:6px 11px;}
.xr-preset-card:hover .xr-preset-load{background:var(--brand-deep-blue);}

/* ---------- print ---------- */
.xr-printview{--pg-w:210mm;--pg-h:297mm;--pg-m:11mm;min-height:100vh;background:var(--paper-3);padding-left:76px;}
.xr-print-chrome{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:14px clamp(14px,3vw,30px);border-bottom:3px solid var(--ink);background:var(--paper);position:sticky;top:0;z-index:20;}
.xr-print-h{font-family:var(--display);font-weight:700;font-size:24px;margin-right:8px;}
.xr-print-opts{display:flex;align-items:center;gap:8px 14px;flex-wrap:wrap;}
.xr-print-optlabel{font-family:var(--display);font-weight:600;font-size:16px;color:var(--ink-2);}
.xr-print-check{display:inline-flex;align-items:center;gap:7px;font-weight:600;font-size:15.5px;min-height:44px;cursor:pointer;}
.xr-print-check input{width:20px;height:20px;accent-color:var(--ink);cursor:pointer;}
/* the preview is sized to a real A4 page, with faint guide lines at each physical
   page break so the sheet reads as the pages it will actually print to */
.xr-sheet{width:var(--pg-w);max-width:100%;box-sizing:border-box;margin:22px auto 56px;color:#1a1a1a;padding:var(--pg-m);box-shadow:0 4px 22px rgba(31,61,46,.22);background-color:#fff;background-image:repeating-linear-gradient(#0000 0,#0000 calc(var(--pg-h) - 2px),rgba(190,51,25,.30) calc(var(--pg-h) - 2px),rgba(190,51,25,.30) var(--pg-h));background-clip:border-box;}
.xr-sheet-head{display:flex;align-items:center;justify-content:space-between;gap:6px 10px;flex-wrap:wrap;border-bottom:1.5px solid #1a1a1a;padding-bottom:3px;margin-bottom:7px;}
.xr-sheet-emblem{flex:none;width:22px;height:22px;color:#1a1a1a;background:transparent;}
.xr-sheet-emblem.xr-dicon-glyph{background:transparent;}
/* meta ("Xenos Rampant · N/24 pts · N units") never shrank below its own text
   width (default min-width:auto on a flex item), so all the squeeze landed on
   the title instead and long detachment names overflowed their box. Giving
   meta flex-basis:100% always drops it to its own full-width line below the
   title/emblem, so the title keeps the whole row and never has to compete
   for space; overflow-wrap is a backstop for a single very long name. */
.xr-sheet-title{flex:1;min-width:0;font-family:var(--display);font-weight:700;font-size:17px;line-height:1.1;overflow-wrap:break-word;}
.xr-sheet-meta{flex:1 0 100%;font-family:var(--ui);font-weight:500;font-size:11px;color:#555;}
.xr-sheet-natl{font-family:var(--flavor);font-style:italic;font-size:13.5px;line-height:1.4;margin:0 0 8px;padding:6px 10px;border-left:4px solid #8A6A1F;background:#8A6A1F14;}
.xr-sheet-natl b{font-style:normal;}
.xr-sheet-natl b{color:#6b5218;}
.xr-sheet-table{width:100%;border-collapse:collapse;font-size:14.5px;}
.xr-sheet-table th{font-family:var(--display);font-weight:700;font-size:13.5px;text-align:center;border-bottom:2px solid #1a1a1a;padding:5px 6px;}
.xr-sheet-table th.l,.xr-sheet-table td.l{text-align:left;}
.xr-sheet-table td{text-align:center;padding:6px;border-bottom:1px solid #bbb;font-family:var(--mono);font-size:14.5px;}
.xr-sheet-table td.name{font-family:var(--body);font-weight:700;font-size:15px;}
.xr-sheet-table td.type{font-family:var(--body);font-style:italic;}
.xr-sheet-table td.pts{font-weight:700;}
.xr-sheet-table td.free{font-weight:700;color:#c23a1e;text-decoration:underline;text-underline-offset:2px;}
.xr-sheet-table td.free .fmk,.xr-sheet-note .fmk{font-family:var(--display);font-weight:700;color:#c23a1e;text-decoration:none;}
.xr-sheet-table td .fmk{font-size:10px;margin-left:1px;}
.xr-sheet-crown{vertical-align:-2px;margin-right:4px;}
.xr-sheet-note{font-size:13.5px;font-style:italic;color:#444;margin-top:9px;}
.xr-sheet-note .fmk{font-style:normal;}
@media print{.xr-sheet-note .fmk{color:#000;}}
/* print stat cards */
.xr-sheet-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:7px;margin-top:9px;align-items:start;}
.xr-pc{border:1.5px solid #1a1a1a;border-radius:0;padding:6px 10px 7px;break-inside:avoid;}
.xr-pc-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap;border-bottom:1.5px solid #1a1a1a;padding-bottom:3px;margin-bottom:4px;}
.xr-pc-img{flex:none;width:26px;height:26px;border-radius:5px;border:1px solid #1a1a1a;background-size:contain;background-repeat:no-repeat;background-position:center;}
.xr-pc-name{font-family:var(--display);font-weight:700;font-size:15.5px;display:inline-flex;align-items:center;gap:5px;}
.xr-pc-type{font-family:var(--flavor);font-style:italic;font-size:12.5px;color:#444;}
.xr-pc-pts{margin-left:auto;font-family:var(--mono);font-weight:700;font-size:10px;color:#555;}
.xr-pc-stats{display:flex;flex-direction:column;gap:7px;}
.xr-pc-line{display:flex;align-items:flex-start;gap:9px;}
.xr-pc-ll{font-family:var(--ui);font-weight:700;font-size:10px;letter-spacing:.05em;text-transform:uppercase;color:#777;width:44px;flex:none;padding-top:5px;}
.xr-pc-chips{display:flex;gap:6px;flex-wrap:wrap;}
.xr-pc-chip{display:inline-flex;flex-direction:column;align-items:center;gap:1px;min-width:42px;border:1.5px solid #1a1a1a;border-radius:7px;padding:3px 5px 4px;background:#f3efe4;}
.xr-pc-chip b{font-family:var(--mono);font-weight:700;font-size:15px;line-height:1;}
.xr-pc-chip em{font-family:var(--ui);font-style:normal;font-size:9.5px;color:#555;}
.xr-pc-chip .fmk{font-family:var(--display);font-weight:700;font-size:9px;color:#c23a1e;}
.xr-pc-vals{display:flex;gap:5px 12px;flex-wrap:wrap;align-items:center;}
.xr-pc-stat{display:inline-flex;align-items:center;gap:4px;}
.xr-pc-stat img{opacity:.8;}
.xr-pc-stat em{font-family:var(--ui);font-style:normal;font-size:11px;color:#555;}
.xr-pc-stat b{font-family:var(--mono);font-weight:700;font-size:13.5px;}
@media print{.xr-pc-chip .fmk{color:#000;}}
/* the print card reuses the builder StatTable, tightened to fit the card and to
   keep the two value columns (Activate, Value) side by side per stat */
.xr-pc-stt{margin-top:0;}
.xr-pc-stt .xr-stt{padding:0;}
.xr-pc-stt .xr-stt-head{grid-template-columns:minmax(0,1.4fr) 42px minmax(0,1fr);gap:1px 8px;font-size:8px;letter-spacing:.02em;text-transform:uppercase;padding-bottom:1px;color:#777;border-color:#1a1a1a;}
.xr-pc-stt .xr-stt-head em{font-size:8px;}
.xr-pc-stt .xr-stt-row{grid-template-columns:minmax(0,1.4fr) 42px minmax(0,1fr);gap:1px 8px;padding:1px 0;border-color:#e2e2e2;}
.xr-pc-stt .xr-stt-stat{font-size:11.5px;gap:5px;color:#1a1a1a;}
.xr-pc-stt .xr-stt-ic{width:14px;height:14px;}
.xr-pc-stt .xr-stt-cell b{font-size:13px;}
/* strength points as bubbles on the print sheet */
.xr-stt-bubbles{display:inline-flex;flex-wrap:wrap;align-items:center;gap:2px;}
.xr-bub-num{font-family:var(--mono);font-weight:700;font-size:13px;line-height:1;margin-right:5px;color:#1a1a1a;}
.xr-bub{display:inline-block;width:9px;height:9px;border:1.5px solid #1a1a1a;border-radius:50%;}
.xr-bub.half{width:11px;height:11px;border-width:2.5px;background:#f6cdbe;-webkit-print-color-adjust:exact;print-color-adjust:exact;box-shadow:0 0 0 1.5px #fff, 0 0 0 3px #c2401f;margin:0 3px;}
.xr-printview.contrast .xr-bub.half{background:#fff;box-shadow:0 0 0 1.5px #fff,0 0 0 3px #000;border-color:#000;}
.xr-printview.large .xr-bub-num{font-size:16px;}
.xr-printview.large .xr-bub{width:11px;height:11px;}
.xr-printview.large .xr-bub.half{width:13px;height:13px;}
.xr-pc-stt .xr-rng{font-size:10.5px;}
.xr-pc-stt .xr-mod-dir{display:none;}
.xr-pc-stt .xr-die{width:36px;font-size:12.5px;padding:1px 3px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
/* keep each activation die tinted with its stat colour on the printed sheet
   (screen alpha tints wash out on paper, so give print solid colour) */
.xr-pc-stt .xr-die.k-atk{background:#f7ddd8;border-color:#c2401f;color:#5e1a0e;}
.xr-pc-stt .xr-die.k-mov{background:#dde7d9;border-color:#42603a;color:#25391e;}
.xr-pc-stt .xr-die.k-sho{background:#e3daee;border-color:#6A4A8C;color:#38235a;}
.xr-pc-stt .xr-die.k-cou{background:#efe4c8;border-color:#8A6A1F;color:#523d0f;}
.xr-pc-stt .xr-die.free{padding-left:6px;background:#f6cdbe;border-color:#c2401f;color:#3a1206;}
.xr-pc-stt .xr-die-free{font-size:7px;right:2px;}
.xr-printview.contrast .xr-pc-stt .xr-die{background:#fff !important;border-color:#000 !important;color:#000 !important;}
.xr-pc-note{font-family:var(--flavor);font-style:italic;font-size:12px;line-height:1.35;color:#333;margin-top:5px;border-top:1px dotted #bbb;padding-top:4px;}
.xr-sheet-notes{font-family:var(--body);font-size:13.5px;line-height:1.45;color:#333;margin:0 0 10px;white-space:pre-wrap;}
.xr-pc-rules{margin-top:4px;border-top:1px solid #ccc;padding-top:3px;}
.xr-pc-rules p{font-family:var(--body);font-size:9.5px;line-height:1.28;margin-bottom:1px;}
.xr-pc-rules p b{font-weight:700;}
.xr-pc-std b{font-weight:700;}
.xr-pc-nested{color:#555;padding-left:8px;border-left:2px solid #ddd;}
.xr-pc-rules .xr-pc-ref{font-size:13px;line-height:1.35;color:#1a1a1a;margin-top:4px;}
.xr-pc-rules .xr-pc-ref b{font-weight:800;font-size:13px;}
.xr-pc-rules .xr-pc-ref i{font-family:var(--flavor);font-style:italic;color:#777;}
.xr-printview.contrast .xr-pc-ref,.xr-printview.contrast .xr-pc-ref i{color:#000;}
.xr-printview.large .xr-pc-rules .xr-pc-ref{font-size:14px;}
.xr-sheet-ref{margin-top:12px;padding-top:7px;}
.xr-sheet-ref-h{font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:5px;}
.xr-sheet-ref-grid{column-count:2;column-gap:24px;}
.xr-sheet-ref-item{font-family:var(--body);font-size:10.5px;line-height:1.3;margin-bottom:3px;break-inside:avoid;}
.xr-sheet-ref-item b{font-weight:700;}
.xr-printview.contrast .xr-sheet-ref,.xr-printview.contrast .xr-sheet-ref-h{border-color:#000;}
.xr-printview.large .xr-sheet-ref-h{font-size:20px;}
.xr-printview.large .xr-sheet-ref-item{font-size:14px;}
@media(max-width:720px){.xr-sheet-ref-grid{column-count:1;}}
.xr-printview.contrast .xr-pc-std{color:#000;}
.xr-printview.contrast .xr-pc-nested{color:#000;border-left-color:#000;}
.xr-printview.large .xr-pc-name{font-size:18px;}
.xr-printview.large .xr-pc-stt .xr-stt-cell b{font-size:16px;}
.xr-printview.large .xr-pc-stt .xr-stt-stat{font-size:14px;}
.xr-printview.large .xr-pc-rules p{font-size:14px;}
.xr-printview.contrast .xr-pc,.xr-printview.contrast .xr-pc-head{border-color:#000;}
.xr-printview.contrast .xr-pc-type,.xr-printview.contrast .xr-pc-ll,.xr-printview.contrast .xr-pc-stt .xr-stt-stat{color:#000;}
.xr-sheet-units{margin-top:20px;column-count:2;column-gap:28px;}
.xr-sheet-unit{break-inside:avoid;margin-bottom:14px;}
.xr-sheet-unit h3{font-family:var(--display);font-size:17px;border-bottom:1.5px solid #1a1a1a;padding-bottom:2px;margin-bottom:5px;}
.xr-sheet-unit h3 em{font-weight:400;font-style:italic;font-size:14.5px;}
.xr-sheet-unit p{font-family:var(--body);font-style:normal;font-size:13.5px;line-height:1.45;margin-bottom:5px;}
.xr-sheet-unit p b{font-style:normal;}
.xr-sheet-gloss{margin-top:12px;border-top:2px solid #1a1a1a;padding-top:7px;}
.xr-sheet-gloss h2{font-family:var(--display);font-size:18px;margin-bottom:5px;}
.xr-sheet-gloss p{font-family:var(--body);font-style:normal;font-size:12.5px;line-height:1.4;margin-bottom:4px;}
.xr-sheet-gloss p b{font-style:normal;}
.xr-sheet-gloss p i{font-family:var(--flavor);font-style:italic;color:#333;}
.xr-sheet-foot{margin-top:22px;border-top:1px solid #bbb;padding-top:8px;font-size:12.5px;font-style:italic;color:#555;}
.xr-printview.large .xr-sheet{font-size:17px;}
.xr-printview.large .xr-sheet-table td,.xr-printview.large .xr-sheet-table th{font-size:16.5px;padding:8px 7px;}
.xr-printview.large .xr-sheet-unit p,.xr-printview.large .xr-sheet-gloss p{font-size:16px;}
/* high-contrast: force every printed element to solid black and heavier weight */
.xr-printview.contrast .xr-sheet,.xr-printview.contrast .xr-sheet *{color:#000 !important;}
.xr-printview.contrast .xr-sheet-table td{border-bottom-color:#000;}
.xr-printview.contrast .xr-pc,.xr-printview.contrast .xr-pc-head{border-color:#000;border-width:2px;}
.xr-printview.contrast .xr-pc-stt .xr-stt-row{border-color:#000;}
.xr-printview.contrast .xr-pc-stt .xr-stt-head{border-color:#000;}
.xr-printview.contrast .xr-sheet-note,.xr-printview.contrast .xr-sheet-foot{color:#000;}
/* compact: 3-column card grid with slightly tighter sizing */
.xr-printview.compact .xr-sheet-cards{grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:5px;}
.xr-printview.compact .xr-pc{padding:4px 8px 5px;}
.xr-printview.compact .xr-pc-head{padding-bottom:2px;margin-bottom:2px;}
.xr-printview.compact .xr-pc-name{font-size:13px;}
.xr-printview.compact .xr-pc-type{font-size:11px;}
.xr-printview.compact .xr-pc-stt .xr-stt-head,.xr-printview.compact .xr-pc-stt .xr-stt-row{grid-template-columns:minmax(0,1.4fr) 36px minmax(0,1fr);gap:1px 5px;}
.xr-printview.compact .xr-pc-stt .xr-die{width:30px;font-size:11px;padding:1px 2px;}
.xr-printview.compact .xr-pc-stt .xr-die-free{font-size:6px;right:1px;}
.xr-printview.compact .xr-pc-stt .xr-stt-stat{font-size:10px;gap:4px;}
.xr-printview.compact .xr-pc-stt .xr-stt-ic{width:12px;height:12px;}
.xr-printview.compact .xr-pc-stt .xr-stt-cell b{font-size:11px;}
.xr-printview.compact .xr-pc-stt .xr-rng{font-size:9px;}
.xr-printview.compact .xr-pc-rules p{font-size:8.5px;line-height:1.22;}
.xr-printview.compact .xr-pc-rules .xr-pc-ref{font-size:11px;line-height:1.3;}
.xr-printview.compact .xr-pc-note{font-size:10.5px;}
.xr-printview.compact .xr-bub{width:8px;height:8px;}
.xr-printview.compact .xr-bub-num{font-size:11px;}

/* ---------- toasts ---------- */
.xr-toaster{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:200;display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none;width:max-content;max-width:calc(100vw - 24px);}
.xr-toast{display:flex;align-items:center;gap:9px;background:var(--ink);color:var(--cream);font-family:var(--body);font-size:15px;font-weight:600;line-height:1.3;padding:11px 16px;border-radius:12px;box-shadow:0 10px 30px rgba(31,61,46,.34);animation:xr-toast-in .22s ease-out;max-width:100%;}
.xr-toast span{overflow-wrap:anywhere;}
.xr-toast svg{flex:none;}
.xr-toast-act{pointer-events:auto;flex:none;margin-left:6px;background:transparent;border:1.5px solid var(--cream);color:var(--cream);font-family:var(--body);font-weight:700;font-size:14px;padding:8px 12px;min-height:44px;border-radius:8px;cursor:pointer;transition:background .12s,color .12s;}
.xr-toast-act:hover{background:var(--cream);color:var(--ink);}
.xr-toast.tone-ok svg{color:#8FD08A;}
.xr-toast.tone-err{background:var(--coral-ink);}
.xr-toast.tone-err svg{color:#FFE1DA;}
.xr-toast.tone-info svg{color:#F4C95D;}
@keyframes xr-toast-in{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
@media(prefers-reduced-motion:reduce){.xr-toast{animation:none;}}

/* ---------- play ---------- */
.xr-play{display:flex;flex-direction:column;min-height:100vh;padding-left:76px;}
.xr-play-mast{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:14px clamp(14px,3vw,30px);border-bottom:3px solid var(--ink);background:var(--paper);position:sticky;top:0;z-index:20;}
.xr-play-h{font-family:var(--display);font-weight:700;font-size:22px;flex:1;min-width:140px;}
.xr-play-turn{font-family:var(--mono);font-size:18px;color:var(--ink-2);}
.xr-play-turn b{font-size:24px;color:var(--ink);}
.xr-play-grid{flex:1;display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:16px;padding:20px clamp(14px,3vw,30px) 50px;align-content:start;}
.xr-pcard{position:relative;border:3px solid var(--ink);border-radius:var(--r);background:var(--paper-2);padding:14px 16px;display:flex;flex-direction:column;gap:12px;transition:.15s;}
.xr-pcard-prof{display:flex;flex-wrap:wrap;gap:8px 14px;padding-top:2px;border-top:1.5px solid var(--ink-18);}
.xr-pcard-prof span{display:inline-flex;align-items:center;gap:5px;font-size:15px;color:var(--ink-2);}
.xr-pcard-prof img{opacity:.85;}
.xr-pcard-prof b{font-family:var(--mono);font-size:16px;color:var(--ink);}
.xr-pcard-prof i{font-style:normal;font-family:var(--mono);font-size:13px;color:var(--ink-2);}
.xr-pcard.acted{opacity:.62;}
.xr-pcard.sup{background:#F4604C1E;}
.xr-pcard-head{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;}
.xr-pcard-crown{color:var(--brass);align-self:center;}
.xr-pcard-name{font-family:var(--display);font-weight:700;font-size:19.5px;flex:1;}
.xr-pcard-type{font-size:15px;font-style:italic;color:var(--ink-2);}
.xr-pcard-dice{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;}
.xr-pcard-die{display:flex;flex-direction:column;align-items:center;gap:3px;}
.xr-pcard-die .xr-die{width:56px;font-size:21px;padding:6px 4px;}
.xr-pcard-die i{font-style:normal;font-size:13.5px;font-weight:600;color:var(--ink-2);}
.xr-pcard-sp{display:flex;align-items:center;gap:4px;flex-wrap:wrap;}
.xr-pip{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:9px;color:var(--coral-ink);transition:.12s;}
.xr-pip:hover{background:var(--paper-3);}
.xr-pip.lost{color:var(--ink-30);}
.xr-pcard-spread{margin-left:auto;font-family:var(--mono);font-size:16px;color:var(--ink-2);}
.xr-pcard-spread b{font-size:20px;color:var(--ink);}
.xr-pcard-toggles{display:flex;gap:8px;}
.xr-ptog{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:7px;font-weight:600;font-size:15.5px;border:2px solid var(--ink-30);border-radius:9px;padding:9px 8px;min-height:44px;color:var(--ink-2);transition:.12s;}
.xr-ptog.on{background:var(--ink);border-color:var(--ink);color:var(--cream);}
.xr-ptog.warn.on{background:var(--coral);border-color:var(--coral-ink);color:#fff;}
.xr-pcard-dead{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:10px;background:rgba(244,236,216,.82);border-radius:8px;font-family:var(--display);font-weight:700;font-size:24px;color:var(--coral-ink);}

/* ---------- footer (Pacific Command pattern, WarLore gold-on-black) ---------- */
.game-info-footer{border-top:1.5px solid var(--ink);background:var(--paper-3);padding:8px clamp(10px,2vw,18px);color:var(--ink-2);}
.gif-inner{display:flex;flex-wrap:wrap;align-items:center;gap:5px 7px;font-size:13px;}
.gif-title{font-family:var(--display);font-weight:700;color:var(--ink);}
.gif-sep{color:var(--ink-30);}
.game-info-footer a{color:var(--brand-deep-blue);text-decoration:none;font-weight:600;}
.game-info-footer a:hover{text-decoration:underline;}
.gif-builder{margin-left:auto;}
.game-info-footer a.warlore-mark{font-family:'Terminal Grotesque Open','Zilla Slab',monospace;font-size:17px;letter-spacing:.03em;color:#FFCC00;background:#000;padding:1px 8px;text-decoration:none;font-weight:400;transition:color .12s,background .12s;}
.game-info-footer a.warlore-mark:hover{color:#000;background:#FFCC00;}
.warlore-mark .wl-lore{font:inherit;}
@media(max-width:600px){.gif-sep{display:none;}.gif-builder{margin-left:0;}}

/* ---------- animations ---------- */
@keyframes xr-fade{from{opacity:0;}to{opacity:1;}}
@keyframes xr-pop{from{opacity:0;transform:scale(.97) translateY(8px);}to{opacity:1;transform:none;}}
@keyframes xr-rise{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}
@keyframes xr-slidein{from{opacity:0;transform:translateX(-8px);}to{opacity:1;transform:none;}}
@keyframes xr-dotpulse{0%,100%{transform:scale(1);opacity:1;}50%{transform:scale(1.5);opacity:.6;}}
.xr-mod-dot{animation:xr-dotpulse 2.4s ease-in-out infinite;}
.xr-abil-item{transition:border-color .12s,transform .12s,box-shadow .12s;}
.xr-abil-item:hover{transform:translateY(-1px);box-shadow:0 3px 9px rgba(31,61,46,.1);}
.xr-fac-card img,.xr-cat-badge svg,.xr-urow-ic svg{transition:transform .16s cubic-bezier(.2,.8,.2,1);}
.xr-fac-card:hover img,.xr-cat-card:hover .xr-cat-badge svg,.xr-urow:hover .xr-urow-ic svg{transform:scale(1.12);}

/* ---------- mobile ---------- */
@media(max-width:880px){
  /* emblem picker — bottom sheet */
  .xr-epicker-back{align-items:flex-end;padding:0;}
  .xr-epicker{width:100%;max-height:92vh;border-radius:18px 18px 0 0;animation:xr-sheet-up .22s ease;}
  @keyframes xr-sheet-up{from{transform:translateY(60px);opacity:.7}to{transform:none;opacity:1}}
  .xr-epicker-side{display:none;}
  .xr-epicker-pills{display:flex;}
  .xr-epicker-grid{grid-template-columns:repeat(4,1fr);gap:8px;}
  .xr-epicker-cell svg{width:56%;height:56%;}
  .xr-epicker-tip{display:none;}
  .xr-epicker-upload-m{display:flex;}
  .xr-epicker-side-foot{display:none;}
  .xr-build-body{display:block;}
  .xr-musterdock{align-self:stretch;border-radius:0;border-left:none;border-right:none;justify-content:center;}
  .xr-ulist{padding-bottom:24px;}
  /* explicit height, not just inset:0 - a fixed box whose height is left to
     resolve from top+bottom can end up sized to its content instead of the
     viewport once content is tall enough, which leaves it unclipped and
     unscrollable (fixed elements don't move with document scroll, and
     overflow-y:auto never engages because nothing overflows the box itself) */
  .xr-detail{position:fixed;inset:0;height:100vh;height:100dvh;z-index:60;background:var(--paper);border-left:none;max-height:none;overflow-y:auto;display:none;}
  .xr-build-body.has-sel .xr-detail{display:block;animation:xr-fade .18s ease;}
  .xr-panel-back{display:flex;}
  .xr-detail-hint{display:none;}
  .xr-stt-head,.xr-stt-row{grid-template-columns:1fr 88px 96px;}
  .xr-pcard-dice{grid-template-columns:repeat(2,1fr);}
  .xr-row-text{padding-left:4px;}
  .xr-tiers{padding-left:4px;}
  .xr-subs{margin-left:12px;}
  /* the panel head packs close/picture/name/roll/pts/commander into one row;
     at phone widths those fixed-size controls alone exceed the available
     width, so the flexible name field gets squeezed to nothing and the
     commander button overflows. Drop the least essential control and shrink
     the rest so the name field actually gets room to show text. */
  .xr-name-roll{display:none;}
  .xr-panel-head .xr-imgup.square,.xr-panel-head .xr-imgup.square .xr-imgup-thumb,.xr-panel-head .xr-imgup.square .xr-imgup-add{width:46px;height:46px;border-radius:9px;}
  /* even with the roll button gone and the avatar shrunk, back+avatar+pts+the
     commander button still don't leave the name field enough room to show a
     name at all. Let the row wrap instead of continuing to squeeze the name
     field towards zero width: give it a floor width and push the commander
     button (the least urgent control) onto its own line when space is tight. */
  .xr-panel-head{flex-wrap:wrap;}
  .xr-panel-id{flex:1 1 140px;min-width:140px;}
  .xr-cmd-btn{margin-left:auto;}
  /* icon buttons stay labelled on mobile, but with a very small caption so the
     icon reads as the primary target (per the "bring the text back, tiny" ask) */
  .xr-cmd-btn{flex-direction:column;gap:2px;padding:6px 8px;min-width:48px;min-height:44px;white-space:normal;}
  .xr-cmd-btn span{display:block;font-size:9.5px;font-weight:700;line-height:1.05;text-align:center;letter-spacing:.01em;text-transform:uppercase;}
  .xr-act{flex-direction:column;gap:2px;padding:5px 8px;min-width:48px;min-height:44px;}
  .xr-act span{display:block;font-size:9.5px;font-weight:700;line-height:1;letter-spacing:.02em;text-transform:uppercase;}
  .xr-actions{gap:6px;}
  /* add-unit picker: a fixed 292px card column was wider than the phone modal,
     so cards overflowed and the mini stat rows got crushed. One full-width
     column fixes both and gives the act/stat grids real room */
  .xr-pick-grid{grid-template-columns:1fr;gap:12px;}
  .xr-modal-body{padding:14px 14px 20px;}
  /* print preview: the base rule's minmax(310px,1fr) columns are wider than
     the sheet's own content box on a phone screen (the @media print override
     only applies to the physical page, not this on-screen preview), so cards
     overflowed the sheet horizontally */
  .xr-sheet-cards{grid-template-columns:1fr;}
  /* the per-unit duplicate/remove buttons were 24px squares, too small to tap
     reliably on a phone; give them a proper target without dominating the row */
  .xr-urow-tools{width:114px;gap:7px;right:8px;}
  .xr-urow-tools button{width:34px;height:44px;}
  .xr-drag-handle{width:28px;opacity:.8;}
  .xr-urow-wrap>.xr-urow{padding-right:130px;}
  /* the rail becomes a top bar on mobile; page headers stick just below it
     instead of at the true viewport top, so the fixed bar never covers them */
  .xr-rail{top:0;bottom:auto;left:0;right:0;width:auto;height:60px;flex-direction:row;padding:0 4px;gap:0;justify-content:space-around;border-top:none;border-bottom:2px solid var(--ink-2);}
  .xr-rail-logo{display:none;}
  .xr-rail-nav{flex-direction:row;justify-content:space-around;height:100%;align-items:stretch;width:100%;}
  .xr-rail-btn{flex:1;max-width:96px;justify-content:center;border-radius:0;gap:2px;}
  .xr-railmuster{display:none;}
  .xr-mastptswrap{display:block;}
  .xr-mastpts{display:inline-flex;min-height:44px;}
  .xr-home,.xr-build,.xr-printview,.xr-play{padding-left:0;padding-top:60px;padding-bottom:0;}
  .xr-mast,.xr-print-chrome,.xr-play-mast{top:60px;}
  /* play mast was wrapping into a tall stack that ate the screen; keep the title
     row compact and drop the turn controls onto their own full-width line */
  .xr-play-mast{gap:8px 10px;padding:10px clamp(12px,3vw,20px);}
  .xr-play-h{font-size:18px;min-width:0;}
  .xr-play-turn{font-size:15px;}
  .xr-play-turn b{font-size:19px;}
  .xr-play-mast .xr-actions{flex:1 1 100%;margin-left:0;gap:8px;}
  .xr-play-mast .xr-actions .xr-btn{flex:1;min-height:44px;padding:8px 10px;font-size:15px;}
  /* name field placeholder was clipped at phone width; smaller font lets the full
     hint text breathe alongside the emblem button and points readout */
  .xr-detname{font-size:17px;min-height:44px;}
  .xr-file-btn{min-height:44px;}
  .xr-btn.small.xr-manage{min-height:44px;}
  .xr-sharewrap .xr-settings-pop{position:fixed;top:64px;right:10px;left:10px;width:auto;}
}

/* ---------- @media print ---------- */
@media print{
  .xr-app{background:#fff;}
  .xr-rail,.xr-print-chrome,.game-info-footer{display:none !important;}
  .xr-printview{background:#fff;padding-left:0;}
  .xr-sheet{box-shadow:none;margin:0;width:auto;max-width:none;padding:0;background-image:none;}
  .xr-sheet-cards{grid-template-columns:1fr 1fr;gap:6px;}
  .xr-printview.compact .xr-sheet-cards{grid-template-columns:1fr 1fr 1fr;gap:5px;}
  .xr-pc{break-inside:avoid;}
  @page{size:A4;margin:11mm;}
}
`;
