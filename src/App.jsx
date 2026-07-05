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
  NATIONAL_TRAITS, NATIONAL_BY_ID, PSYCHIC_POWERS,
} from "./data.js";
import { SETTINGS } from "./premade.js";
import { ALL_GENRES, randomName } from "./factions.js";
import { RULES_REFERENCE, RULES_CATS } from "./rules.js";

const FACTION_BASE = import.meta.env.BASE_URL;
const factionIconUrl = (icon) => (icon ? `${FACTION_BASE}factions/${icon}` : null);

/* ================================================================== *
 * XENOS RAMPANT: FORCE BUILDER
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
  Book = mk(icBook), Gear = mk(icGear), Image = mk(icImage), Bolt = mk(icBolt);

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
  const minU = Math.max(3, Math.round((3 * budget) / 24));
  const maxU = Math.round((10 * budget) / 24);
  const cmds = roster.filter((u) => u.isCmd).length;
  const heavyVeh = roster.filter((u) => UNIT_BY_ID[u.typeId].heavy).length;
  const heavyCap = Math.floor(budget / 18);
  const vehPts = roster.filter((u) => UNIT_BY_ID[u.typeId].cls === VEHICLE).reduce((s, u) => s + unitPoints(u), 0);
  if (used > budget) issues.push({ lvl: "err", msg: `Over budget by ${used - budget} points.` });
  if (count > 0) {
    if (cmds === 0) issues.push({ lvl: "err", msg: "No Commander. Crown one unit." });
    if (cmds > 1) issues.push({ lvl: "err", msg: `${cmds} Commanders. Only one is allowed.` });
    if (count < minU) issues.push({ lvl: "err", msg: `Too few units. A detachment needs ${minU} to ${maxU} units at ${budget} points. Turn on Free play to ignore this.` });
    if (count > maxU) issues.push({ lvl: "err", msg: `Above maximum size (${minU} to ${maxU} units at ${budget} points).` });
    if (heavyVeh > heavyCap) issues.push({ lvl: "err", msg: `${heavyVeh} fighting/transport vehicles. The limit is ${heavyCap} (one per full 18 points).` });
    if (vehPts > budget / 2) issues.push({ lvl: "err", msg: `Vehicles are ${vehPts} points; no more than half (${Math.floor(budget / 2)}) may be vehicles.` });
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
        isCmd: false, traitTable: "aggressive", traitIndex: undefined,
        options, xenos: { ...(e.xenos || {}) }, custom: [],
      }));
    }
  });
  if (roster.length) roster[0].isCmd = true;
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

/* ---------------- hash routing ---------------- */
function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, "");
  const [view, arg] = h.split("/");
  if (view === "build") return { view: "build", unitKey: arg || null };
  if (view === "print") return { view: "print" };
  if (view === "play") return { view: "play" };
  return { view: "home" };
}
const nav = (h) => { window.location.hash = h; };

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
const STAT_MODS = {
  "assault-doctrine": { prof: { atk: "3+" } },
  "close-quarters": { prof: { sho: "4+ / 12\"" } },
  "mobile": { movDelta: 4 },
  "super-heavy-armour": { prof: { arm: 5 }, movDelta: -2 },
  "increased-squad": { prof: { atk: "5+", def: "4+", sho: "5+ / 18\"" } },
  "undisciplined": { act: { cou: "5+" } },
  "enthusiastic": { atkWorsen: 1 },
  "even-heavier": { prof: { arm: 4, atk: "3+" } },
  "veteran": { prof: { def: "5+" } },
  "artillery": { prof: { sho: "4+ / 48\"" } },
  "sniper-team": { prof: { sho: "5+ / 24\"" } },
  "mob": { prof: { atk: "3+", def: "5+" } },
  "swarm": { prof: { atk: "3+" } },
  "young-warriors": { act: { cou: "5+" } },
  "cunning": { prof: { def: "5+" } },
  "scythes": { prof: { atk: "5+" } },
  "walker": { prof: { atk: "4+" }, movDelta: -2 },
  "light-armoured": { armDelta: -1 },
  "civilian": { prof: { arm: 2 } },
  "improvised-armour": { prof: { arm: 4 }, movDelta: -2 },
  "large-vehicle": { movDelta: -2 },
  "transport-15": { movDelta: -2 },
  "technical": { act: { sho: "6+" }, prof: { sho: "5+ / 18\"" } },
  "green-crew": { prof: { sho: "5+ / 18\"" } },
  "ravenous-horde": { act: { sho: "n/a" }, prof: { atk: "7+", sho: "n/a" } },
  "primitive-missiles": { act: { sho: "6+" }, prof: { sho: "6 / 6\"" } },
  // xeno rules
  "slow": { movDelta: -2 },
  "fanatical-discipline": { couImprove: 1 },
  "fearful": { couWorsen: 1 },
  "unarmed": { act: { sho: "n/a" }, prof: { sho: "n/a" } },
  "boarding-shields": { defImprove: 1 },
};
function deriveStats(u, t) {
  const act = { ...t.act };
  const prof = { ...t.prof };
  const changed = new Set();
  const setBlock = (obj, block, kv) => { for (const k in kv) { if (String(obj[k]) !== String(kv[k])) { obj[k] = kv[k]; changed.add(`${block}:${k}`); } } };
  const ids = [...Object.keys(u.options || {}).filter((k) => u.options[k]), ...Object.keys(u.xenos || {})];
  ids.forEach((id) => {
    const m = STAT_MODS[id];
    if (!m) return;
    if (m.act) setBlock(act, "act", m.act);
    if (m.prof) setBlock(prof, "prof", m.prof);
    if (m.movDelta) { prof.mov = adjInches(prof.mov, m.movDelta); changed.add("prof:mov"); }
    if (m.armDelta != null) { prof.arm = Number(prof.arm) + m.armDelta; changed.add("prof:arm"); }
    if (m.couImprove) { act.cou = improveTgt(act.cou, m.couImprove); changed.add("act:cou"); }
    if (m.couWorsen) { act.cou = worsenTgt(act.cou, m.couWorsen); changed.add("act:cou"); }
    if (m.atkWorsen) { prof.atk = worsenTgt(prof.atk, m.atkWorsen); changed.add("prof:atk"); }
    if (m.defImprove) { prof.def = improveTgt(prof.def, m.defImprove); changed.add("prof:def"); }
  });
  return { act, prof, changed };
}
function StatTable({ t, sp, u }) {
  const d = u ? deriveStats(u, t) : { act: t.act, prof: t.prof, changed: new Set() };
  const spMod = !!u && sp !== t.sp;
  return (
    <div className="xr-stt">
      <div className="xr-stt-head">
        <span>Stat</span><span>Activate <em>2d6</em></span><span>Value</span>
      </div>
      {STAT_ROWS.map((row) => {
        const o = row.order ? orderFrom(d.act, row.key, t.noAttack) : null;
        const v = row.val ? profFrom(d.prof, sp, row.key) : null;
        const modO = d.changed.has(`act:${row.key}`);
        const modV = d.changed.has(`prof:${row.key}`) || (row.key === "sp" && spMod);
        return (
          <div className="xr-stt-row" key={row.key} title={row.tip}>
            <span className="xr-stt-stat"><img className="xr-stt-ic" src={row.img} alt="" width="28" height="28" />{row.label}</span>
            <span className={`xr-stt-cell ${modO ? "mod" : ""}`} title={modO ? "Changed by an ability" : undefined}>
              {o ? <Die k={row.key} free={o.free}>{o.val}</Die> : <span className="xr-dash">-</span>}
              {modO && <span className="xr-mod-dot" aria-hidden="true" />}
            </span>
            <span className={`xr-stt-cell ${modV ? "mod" : ""}`} title={modV ? "Changed by an ability" : undefined}>
              {v ? <><b>{v.main}</b>{v.range && <i className="xr-rng"> / {v.range} range</i>}</> : <span className="xr-dash">-</span>}
              {modV && <span className="xr-mod-dot" aria-hidden="true" />}
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
        <span className="gif-builder">Force builder by <a className="warlore-mark" href="https://jetwong.neocities.org" target="_blank" rel="noopener" title="WarLore">War<span className="wl-lore">Lore</span></a></span>
        <span className="gif-sep">|</span>
        <a href="https://github.com/Type37/xenos-rampant-force-builder" target="_blank" rel="noopener">Source on GitHub</a>
        <span className="gif-sep">|</span>
        <a href="https://jetwong.neocities.org/wargaming" target="_blank" rel="noopener">More WarLore tools</a>
        <span className="gif-sep">|</span>
        <a href="mailto:warlore1@outlook.com">Send feedback</a>
      </div>
    </footer>
  );
}

/* persistent nav rail: groups the view controls in one place (left on desktop, bottom on mobile) */
function RailNav({ view }) {
  const items = [
    { v: "home", Icon: House, label: "Lists", hash: "#/" },
    { v: "build", Icon: Edit, label: "Build", hash: "#/build" },
    { v: "print", Icon: Printer, label: "Print", hash: "#/print" },
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
      </div>
      <button className="xr-rail-btn xr-rail-rules" title="Quick rules reference"
        onClick={() => window.dispatchEvent(new CustomEvent("xr-open-rules"))}>
        <Book size={22} /><span>Rules</span>
      </button>
    </nav>
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
  const isCustom = !BUDGET_PRESETS.includes(budget);
  const [editing, setEditing] = useState(isCustom);
  return (
    <div className="xr-budget" role="group" aria-label="Game size">
      {BUDGET_PRESETS.map((b) => (
        <button key={b} className={`xr-budget-b ${b === 24 ? "rec" : ""} ${budget === b ? "on" : ""}`}
          title={b === 24 ? "Standard game size, recommended" : `${b}-point game`}
          onClick={() => { onChange(b); setEditing(false); }}>
          {b}{b === 24 && <span className="xr-budget-rec" aria-hidden="true">★</span>}
        </button>
      ))}
      {editing || isCustom ? (
        <label className={`xr-budget-cust ${isCustom ? "on" : ""}`}>
          <span className="xr-budget-cust-l">Custom</span>
          <input type="number" min="1" max="999" value={budget} autoFocus aria-label="Custom points value"
            onChange={(e) => { const v = parseInt(e.target.value, 10); onChange(v > 0 ? Math.min(999, v) : 1); }} />
        </label>
      ) : (
        <button className="xr-budget-b xr-budget-cbtn" onClick={() => setEditing(true)} title="Set any points value">Custom</button>
      )}
    </div>
  );
}

/* faction picker: genre -> group -> faction. picking one themes the detachment
   (sets its icon) and hands over a name pool for the randomiser. */
/* a true drill-down: one screen at a time (genre, then group, then faction),
   each with a back arrow, rather than tabs that show every level at once. */
function FactionModal({ onPick, onClose }) {
  const [gid, setGid] = useState(null);
  const [grpId, setGrpId] = useState(null);
  const [q, setQ] = useState("");
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const genre = ALL_GENRES.find((g) => g.id === gid);
  const group = genre && genre.groups.find((g) => g.id === grpId);
  const step = group ? 3 : genre ? 2 : 1;
  const back = () => { if (step === 3) setGrpId(null); else if (step === 2) setGid(null); };
  const needle = q.trim().toLowerCase();
  const factions = group ? group.factions.filter((f) => !needle || f.name.toLowerCase().includes(needle) || (f.tag || "").toLowerCase().includes(needle)) : [];
  const title = step === 1 ? "Pick a setting" : step === 2 ? genre.label : group.label;
  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-tall xr-modal-wide" role="dialog" aria-modal="true" aria-label="Pick a faction" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          {step > 1 && <button className="xr-iconbtn" onClick={back} aria-label="Back"><Back size={20} /></button>}
          <span className="xr-modal-title"><Dice size={22} /> {title}</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>
        {step === 1 && (
          <div className="xr-modal-body">
            <p className="xr-fac-lead">What kind of setting is this detachment?</p>
            <div className="xr-fac-genre-grid">
              {ALL_GENRES.map((g) => (
                <button key={g.id} className="xr-fac-genre-card" onClick={() => setGid(g.id)}>
                  <b>{g.label}</b><i>{g.blurb}</i>
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="xr-modal-body">
            <p className="xr-fac-lead">{genre.blurb}</p>
            <div className="xr-fac-genre-grid">
              {genre.groups.map((g) => (
                <button key={g.id} className="xr-fac-genre-card" onClick={() => setGrpId(g.id)}>
                  <b>{g.label}</b><i>{g.factions.length} {g.factions.length === 1 ? "faction" : "factions"}</i>
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <>
            <div className="xr-fac-sub">
              <input className="xr-fac-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search factions" spellCheck={false} autoFocus />
            </div>
            <div className="xr-modal-body">
              <div className="xr-fac-grid">
                {factions.map((f) => {
                  const url = factionIconUrl(f.icon);
                  return (
                    <button key={f.id} className="xr-fac-card" onClick={() => onPick({ ...f, genre: genre.id, group: group.id })} title={`${f.pool.length} names`}>
                      <span className="xr-fac-ic">{url ? <img src={url} alt="" loading="lazy" /> : <Alien size={22} />}</span>
                      <span className="xr-fac-body">
                        <span className="xr-fac-name">{f.name}</span>
                        <span className="xr-fac-tag">{f.tag}</span>
                      </span>
                    </button>
                  );
                })}
                {factions.length === 0 && <p className="xr-fac-empty">No factions match that search.</p>}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* new-army creation modal */
function NewArmyModal({ onCreate, onClose }) {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState(24);
  const [desc, setDesc] = useState("");
  const [faction, setFaction] = useState(null);
  const [picking, setPicking] = useState(false);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const roll = () => { if (faction) setName(randomName(faction.pool, name)); };
  const create = () => onCreate({ name: name.trim(), budget, description: desc.trim(), faction: faction || undefined });
  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-narrow" role="dialog" aria-modal="true" aria-label="New detachment" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Plus size={22} /> New detachment</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>
        <div className="xr-modal-body">
          <div className="xr-field">
            <span className="xr-field-l">Faction <em>sets a theme and a name pool</em></span>
            <button className="xr-faction-pick" onClick={() => setPicking(true)}>
              {faction
                ? <><span className="xr-fac-ic sm">{factionIconUrl(faction.icon) ? <img src={factionIconUrl(faction.icon)} alt="" /> : <Alien size={18} />}</span><b>{faction.name}</b><i>{faction.tag}</i></>
                : <><Dice size={18} /> Pick a faction</>}
            </button>
          </div>
          <label className="xr-field">
            <span className="xr-field-l">Name</span>
            <div className="xr-field-roll">
              <input className="xr-field-in" value={name} onChange={(e) => setName(e.target.value)} placeholder="Eg. Fennec Fusiliers" autoFocus
                onKeyDown={(e) => { if (e.key === "Enter") create(); }} spellCheck={false} />
              <button className="xr-iconbtn" onClick={roll} disabled={!faction} title={faction ? "Roll a name from the faction pool" : "Pick a faction first"} aria-label="Roll a name"><Dice size={19} /></button>
            </div>
          </label>
          <div className="xr-field">
            <span className="xr-field-l">Game size</span>
            <BudgetPicker budget={budget} onChange={setBudget} />
          </div>
          <label className="xr-field">
            <span className="xr-field-l">Description <em>optional</em></span>
            <textarea className="xr-field-in xr-field-area" value={desc} onChange={(e) => setDesc(e.target.value)}
              placeholder="Backstory, tactics, or notes." rows={3} />
          </label>
        </div>
        <div className="xr-modal-foot">
          <button className="xr-btn primary" onClick={create}><Plus size={17} /> Create detachment</button>
        </div>
      </div>
      {picking && <FactionModal onPick={(f) => { setFaction(f); if (!name.trim()) setName(randomName(f.pool)); setPicking(false); }} onClose={() => setPicking(false)} />}
    </div>
  );
}

/* load-a-preset modal: pick a genre setting, then a ready-made detachment */
function LoadPresetModal({ onLoad, onClose }) {
  const [sid, setSid] = useState(SETTINGS[0] ? SETTINGS[0].id : null);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const setting = SETTINGS.find((s) => s.id === sid) || SETTINGS[0];
  if (!setting) return null;
  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-tall xr-modal-wide" role="dialog" aria-modal="true" aria-label="Load a preset detachment" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Book size={22} /> Load a preset</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>
        <div className="xr-modal-tabs" role="tablist">
          {SETTINGS.map((s) => (
            <button key={s.id} role="tab" aria-selected={sid === s.id} className={`xr-modal-tab ${sid === s.id ? "on" : ""}`} onClick={() => setSid(s.id)}>
              {s.name.split(":")[0]}
            </button>
          ))}
        </div>
        <div className="xr-modal-body">
          <p className="xr-preset-blurb"><b>{setting.name}.</b> {setting.blurb}</p>
          <div className="xr-preset-grid">
            {setting.detachments.map((d) => (
              <button className="xr-preset-card" key={d.n} onClick={() => onLoad(d, setting)}>
                <span className="xr-preset-name">{d.name}</span>
                {d.subtitle && <span className="xr-preset-sub">{d.subtitle}</span>}
                <span className="xr-preset-foot">
                  <span className="xr-preset-meta">{detachmentUnits(d)} units, {detachmentPoints(d)} pts</span>
                  <span className="xr-preset-load"><Plus size={15} /> Load</span>
                </span>
              </button>
            ))}
          </div>
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
  return (
    <div className="xr-home">
      <RailNav view="home" />
      <header className="xr-home-mast">
        <div className="xr-titlestack">
          <h1 className="xr-word">Xenos Rampant</h1>
          <span className="xr-sub">Force Builder</span>
        </div>
      </header>
      <main className="xr-home-body">
        {arr.length > 0 && (
          <div className="xr-home-bar">
            <h2 className="xr-home-h">Detachments <em>{arr.length}</em></h2>
            <div className="xr-home-bar-btns">
              {SETTINGS.length > 0 && (
                <button className="xr-btn" onClick={() => setLoading(true)} title="Start from a ready-made detachment out of the rulebook"><Book size={19} /> Load a preset</button>
              )}
              <button className="xr-btn primary" onClick={() => setCreating(true)}><Plus size={20} /> New detachment</button>
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
              {SETTINGS.length > 0 && (
                <button className="xr-btn" onClick={() => setLoading(true)}><Book size={18} /> Load a preset</button>
              )}
            </div>
          </div>
        ) : (
          <div className="xr-home-grid">
            {arr.map((l) => {
              const { used, count } = validate(l.roster, l.budget, l.freeplay);
              const cmdIdx = l.roster.findIndex((u) => u.isCmd);
              const cmd = cmdIdx >= 0 ? l.roster[cmdIdx] : null;
              return (
                <div className="xr-list-card" key={l.id}>
                  <button className="xr-list-open" onClick={() => onOpen(l.id)}>
                    {(l.image || factionIconUrl(l.faction && l.faction.icon)) && <span className="xr-list-img" style={{ backgroundImage: `url(${l.image || factionIconUrl(l.faction.icon)})` }} aria-hidden="true" />}
                    <span className="xr-list-name">{l.name || "Untitled detachment"}</span>
                    <span className="xr-list-meta">
                      <b>{used}</b>/{l.budget} pts, {count} {count === 1 ? "unit" : "units"}
                    </span>
                    {cmd && (
                      <span className="xr-list-cmd"><Crown size={14} /> {unitDisplayName(cmd, cmdIdx)} <em>{UNIT_BY_ID[cmd.typeId].name}</em></span>
                    )}
                    {l.description && <span className="xr-list-desc">{l.description}</span>}
                  </button>
                  <div className="xr-list-tools">
                    <button onClick={() => onDup(l.id)} aria-label="Duplicate" title="Duplicate"><CopyIc size={19} /></button>
                    <button onClick={() => onDel(l.id)} aria-label="Delete" title="Delete"><Trash size={19} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
      {creating && <NewArmyModal onCreate={(opts) => { onCreate(opts); setCreating(false); }} onClose={() => setCreating(false)} />}
      {loading && <LoadPresetModal onLoad={(det, setting) => { onLoadPreset(det, setting); setLoading(false); }} onClose={() => setLoading(false)} />}
      <SiteFooter />
    </div>
  );
}

/* ================================================================== *
 * BUILDER: compact rows + detail panel
 * ================================================================== */
const UnitRow = React.memo(function UnitRow({ u, i, selected }) {
  const t = UNIT_BY_ID[u.typeId];
  const pts = unitPoints(u);
  const taken = [
    ...t.options.filter((o) => u.options[o.id]).map((o) => o.name),
    ...XENO_RULES.filter((x) => x.id in u.xenos).map((x) => x.name),
  ];
  return (
    <button className={`xr-urow cat-${catOf(t)} ${selected ? "sel" : ""}`} onClick={() => nav(selected ? "#/build" : `#/build/${u.key}`)} aria-expanded={selected}>
      {u.image
        ? <span className="xr-urow-img" style={{ backgroundImage: `url(${u.image})` }} aria-hidden="true" />
        : <span className="xr-urow-ic" aria-hidden="true"><UnitIcon id={u.typeId} size={26} /></span>}
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
              <span className="xr-d6-b"><b>{r.name}</b> {r.text}</span>
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
const AbilityItem = React.memo(function AbilityItem({ name, cost, badge, text, tone }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`xr-abil-item ${tone || ""} ${open ? "open" : ""}`}>
      <button className="xr-abil-item-h" onClick={() => setOpen((o) => !o)} aria-expanded={open} title={open ? "Hide rule text" : "Show rule text"}>
        <Caret className="xr-abil-item-caret" size={14} />
        <span className="xr-abil-item-name">{name}</span>
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
              <b>{tr.name}</b><span>{tr.rule}</span>
            </button>
          ))}
        </div>
      )}
      {trait && (
        <div className="xr-trait">
          <div className="xr-trait-name">{trait.name}</div>
          <p className="xr-trait-rule">{trait.rule}</p>
        </div>
      )}
    </div>
  );
}

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

function UnitPanel({ u, index, onClose, dispatch, onBuyAbilities, onEditCommander, factionPool }) {
  const t = UNIT_BY_ID[u.typeId];
  const pts = unitPoints(u);
  const sp = unitSP(u);
  const elig = useMemo(() => eligibleXenos(t), [t]);
  const topOpts = t.options.filter((o) => !o.requires);
  const stdRules = t.special.filter((s) => s !== "None");
  const tbl = u.traitTable || "aggressive";
  const trait = u.isCmd && typeof u.traitIndex === "number" ? COMMANDER_TABLES[tbl].traits[u.traitIndex] : null;
  const boughtOpts = t.options.filter((o) => u.options[o.id]);
  const boughtXenos = XENO_RULES.filter((x) => x.id in u.xenos);
  const custom = u.custom || [];
  const hasAbilities = true;

  return (
    <section className="xr-panel" aria-label="Unit editor">
      <div className="xr-typebanner">
        <span className="xr-typebanner-ic" aria-hidden="true"><UnitIcon id={u.typeId} size={18} /></span>
        <span className="xr-typebanner-t">{t.name}</span>
        {u.isCmd && <span className="xr-typebanner-cmd"><Crown size={13} /> Commander</span>}
      </div>
      <div className="xr-panel-head">
        <button className="xr-iconbtn xr-panel-back" onClick={onClose} aria-label="Close unit"><Back size={20} /></button>
        <ImageUpload image={u.image} onChange={(img) => dispatch({ type: "image", key: u.key, image: img })} title="Add a picture to ID this unit" />
        <div className="xr-panel-id">
          <label className="xr-namefield">
            <span className="xr-namefield-l">Unit name</span>
            <input className="xr-panel-name" value={u.name} placeholder={`${t.name} ${index + 1}`}
              onChange={(e) => dispatch({ type: "name", key: u.key, name: e.target.value })} spellCheck={false} />
          </label>
        </div>
        {factionPool && factionPool.length > 0 && (
          <button className="xr-iconbtn xr-name-roll" onClick={() => dispatch({ type: "name", key: u.key, name: randomName(factionPool, u.name) })}
            title="Roll a name from the faction pool" aria-label="Roll a unit name"><Dice size={19} /></button>
        )}
        <span className="xr-panel-pts"><b>{pts}</b><i>pts</i></span>
      </div>

      <div className="xr-panel-tools">
        <button className={`xr-btn small xr-cmd-btn ${u.isCmd ? "gold" : ""}`} onClick={() => dispatch({ type: "cmd", key: u.key })}
          title={u.isCmd ? "This unit is your Commander" : "Make this unit your Commander (free)"}>
          <Crown size={17} /> {u.isCmd ? "Commander" : "Make Commander"}
        </button>
        {u.isCmd && (
          <button className="xr-btn small" onClick={onEditCommander} title="Choose the Commander's trait table and trait">
            <Book size={16} /> Traits
          </button>
        )}
        <span className="xr-panel-tools-sp" />
        <button className="xr-btn small icon" onClick={() => dispatch({ type: "dup", key: u.key })} title="Duplicate this unit" aria-label="Duplicate this unit"><CopyIc size={16} /></button>
        <button className="xr-btn small icon danger" onClick={() => { dispatch({ type: "del", key: u.key }); onClose(); }} title="Remove this unit" aria-label="Remove this unit"><Trash size={16} /></button>
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
                  <AbilityItem key={o.id} name={o.name} cost={optCost(o)} text={o.text} />
                ))}
                {boughtXenos.map((x) => (
                  <AbilityItem key={x.id} name={`${x.name}${x.tiers ? ` (${x.tiers[u.xenos[x.id]].label})` : ""}`} cost={xenoCost(x, u.xenos[x.id])} text={x.text} />
                ))}
                {(u.psychic || []).map((name) => {
                  const pw = PSYCHIC_POWERS.find((p) => p.name === name);
                  return pw ? <AbilityItem key={`pw-${name}`} name={pw.name} badge={pw.difficulty} tone="psy" text={`${pw.target} ${pw.duration} ${pw.effect}`} /> : null;
                })}
                {custom.map((c) => (
                  <AbilityItem key={c.id} name={c.name} cost={c.cost} text={c.text} tone="custom" />
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
                ? <p className="xr-cmdcard-trait"><b>{trait.name}.</b> {trait.rule}</p>
                : <p className="xr-cmdcard-none">No trait rolled or picked yet.</p>}
            </div>
          )}
        </div>
      </div>

    </section>
  );
}

/* which xeno rules open a config step when selected */
const isConfigurable = (x) => !!x.tiers || x.id === "mercenary";
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
    if (x.id === "psychic") { const n = (u.psychic || []).length; s += ` · ${n} of ${t.powers} powers`; }
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
  if (topOpts.length) tabs.push({ id: "load", label: "Loadout", n: topOpts.filter((o) => u.options[o.id]).length });
  if (eligXeno.length) tabs.push({ id: "xeno", label: "Xeno rules", n: eligXeno.filter((x) => x.id in u.xenos).length });
  if (eligPsy.length) tabs.push({ id: "psychic", label: "Psychic", n: eligPsy.filter((x) => x.id in u.xenos).length });
  tabs.push({ id: "custom", label: "Custom", n: custom.length });
  const [tab, setTab] = useState(tabs[0] ? tabs[0].id : "load");
  const [config, setConfig] = useState(null);
  const openConfig = (id, step) => setConfig({ id, step });
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
        <span className="xr-cat-badge" aria-hidden="true"><UnitIcon id={t.id} size={26} /></span>
        <span className="xr-cat-name">{t.name}</span>
        <span className="xr-cat-stamp"><b>{t.base}</b><i>pts</i></span>
      </span>
      <span className="xr-cat-role">{t.role}</span>
      <span className="xr-cat-stats">
        {CATALOG_STATS.map((s) => {
          const raw = s.get(t);
          const v = raw == null || raw === "n/a" || raw === "—" ? "-" : String(raw);
          return (
            <span className="xr-cat-stat" key={s.label} title={s.label}>
              <img src={s.img} alt="" width="24" height="24" />
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
      <span className="xr-cat-add"><Plus size={16} /> Add unit</span>
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
      <div className="xr-modal xr-modal-tall xr-modal-wide" role="dialog" aria-modal="true" aria-label="Add unit" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Plus size={22} /> Add unit</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>
        <div className="xr-modal-tabs" role="tablist">
          {CATS.map((c) => (
            <button key={c.id} role="tab" aria-selected={cat === c.id}
              className={`xr-modal-tab cat-${c.id} ${cat === c.id ? "on" : ""}`} onClick={() => setCat(c.id)}>
              <c.Icon size={18} /> {c.label}
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
  const [factionOpen, setFactionOpen] = useState(false);
  const detImg = list.image || factionIconUrl(list.faction && list.faction.icon);
  const { issues, used, count } = useMemo(() => validate(roster, budget, list.freeplay), [roster, budget, list.freeplay]);
  const errors = issues.filter((i) => i.lvl === "err");
  const status = errors.length ? "err" : count === 0 ? "empty" : "ok";
  const selIdx = roster.findIndex((u) => u.key === selectedKey);
  const sel = selIdx >= 0 ? roster[selIdx] : null;
  const pct = Math.min(100, budget ? (used / budget) * 100 : 0);
  const over = used > budget;

  const copyList = () => {
    const lines = [`${list.name || "Untitled detachment"} (${used}/${budget} pts, ${count} units)`];
    if (list.nationalTrait && NATIONAL_BY_ID[list.nationalTrait]) lines.push(`National trait: ${NATIONAL_BY_ID[list.nationalTrait].name}`);
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
    navigator.clipboard?.writeText(lines.join("\n"));
  };

  return (
    <div className="xr-build">
      <RailNav view="build" />
      <header className="xr-mast">
        <div className="xr-mast-row">
          {detImg && <span className="xr-mast-img" style={{ backgroundImage: `url(${detImg})` }} aria-hidden="true" />}
          <input className="xr-detname" value={list.name} placeholder="Name your detachment"
            onChange={(e) => updateList({ name: e.target.value })} spellCheck={false} />
          <div className="xr-actions">
            <button className="xr-btn small" onClick={copyList} title="Copy the roster to the clipboard as text"><CopyIc size={17} /> Copy</button>
            <button className="xr-btn small" onClick={() => nav("#/print")} title="Open the print sheet"><Printer size={17} /> Print</button>
            <div className="xr-settingswrap">
              <button className={`xr-btn small ${list.freeplay ? "gold" : ""}`} onClick={() => setSettingsOpen((o) => !o)}
                title="Detachment settings" aria-expanded={settingsOpen}><Gear size={17} /> Settings</button>
              {settingsOpen && (
                <>
                  <button className="xr-settings-scrim" aria-label="Close settings" onClick={() => setSettingsOpen(false)} />
                  <div className="xr-settings-pop" role="dialog" aria-label="Detachment settings">
                    <label className="xr-set-field">
                      <span className="xr-set-field-l">Description <em>optional</em></span>
                      <textarea className="xr-field-in xr-field-area" value={list.description || ""} onChange={(e) => updateList({ description: e.target.value })}
                        placeholder="Backstory, tactics, or notes." rows={3} />
                    </label>
                    <div className="xr-set-field">
                      <span className="xr-set-field-l">Faction</span>
                      <button className="xr-faction-pick" onClick={() => { setSettingsOpen(false); setFactionOpen(true); }}>
                        {list.faction
                          ? <><span className="xr-fac-ic sm">{factionIconUrl(list.faction.icon) ? <img src={factionIconUrl(list.faction.icon)} alt="" /> : <Alien size={18} />}</span><b>{list.faction.name}</b><i>{list.faction.tag}</i></>
                          : <><Dice size={18} /> Pick a faction</>}
                      </button>
                      <span className="xr-set-field-h">Sets the detachment icon and the name pool used to roll unit names.</span>
                    </div>
                    <div className="xr-set-field xr-set-img">
                      <span className="xr-set-field-l">Custom picture</span>
                      <div className="xr-set-img-row">
                        <ImageUpload image={list.image} onChange={(img) => updateList({ image: img || undefined })} title="Upload a detachment picture" />
                        <span className="xr-set-field-h">Overrides the faction icon on the card and header.</span>
                      </div>
                    </div>
                    <button className={`xr-set-toggle ${list.freeplay ? "on" : ""}`} onClick={() => updateList({ freeplay: !list.freeplay })} aria-pressed={!!list.freeplay}>
                      <span className="xr-set-toggle-box">{list.freeplay && <Check size={14} />}</span>
                      <span className="xr-set-toggle-txt"><b>Free play</b><i>Ignore composition limits (unit count, vehicles, one Commander).</i></span>
                    </button>
                    <label className="xr-set-field">
                      <span className="xr-set-field-l">National trait</span>
                      <select className="xr-natl-sel" value={list.nationalTrait || ""} onChange={(e) => updateList({ nationalTrait: e.target.value || undefined })}>
                        <option value="">None</option>
                        {NATIONAL_TRAITS.map((n) => <option key={n.id} value={n.id}>{n.name}</option>)}
                      </select>
                      <span className="xr-set-field-h">Weird War optional rule for the whole detachment.</span>
                      {list.nationalTrait && NATIONAL_BY_ID[list.nationalTrait] && (
                        <span className="xr-set-field-rule">{NATIONAL_BY_ID[list.nationalTrait].rule}</span>
                      )}
                    </label>
                    <button className="xr-btn small danger xr-set-delete" onClick={onDelete}><Trash size={16} /> Delete this detachment</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="xr-mast-row2">
          <div className="xr-budgetrow">
            <span className="xr-budget-l">Budget</span>
            <BudgetPicker budget={budget} onChange={(b) => updateList({ budget: b })} />
          </div>
          <div className={`xr-muster ${over ? "over" : pct >= 90 ? "near" : ""}`}>
            <span className="xr-muster-read"><b>{used}</b><span>/{budget} pts</span></span>
            <span className="xr-muster-track"><span className="xr-muster-fill" style={{ width: `${pct}%` }} /></span>
          </div>
          <div className="xr-statuswrap">
            <button className={`xr-status ${status}`} onClick={() => setIssuesOpen((o) => !o)}
              aria-expanded={issues.length ? issuesOpen : undefined} title={issues.length ? "See the issues" : undefined}>
              {status === "ok" && <><Check size={16} /> {count} {count === 1 ? "unit" : "units"}</>}
              {status === "err" && <><Warn size={16} /> {errors.length} {errors.length === 1 ? "issue" : "issues"}</>}
              {status === "empty" && <>Empty</>}
            </button>
            {issues.length > 0 && (
              <div className={`xr-issue-pop ${issuesOpen ? "open" : ""}`} role="region" aria-label="Issues">
                {issues.map((it, i) => <span key={i} className={`xr-issue ${it.lvl}`}>{it.msg}</span>)}
              </div>
            )}
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
              <div className="xr-ulist-rows">
                {roster.map((u, i) => (
                  <UnitRow key={u.key} u={u} i={i} selected={u.key === selectedKey} />
                ))}
              </div>
              <button className="xr-add-sticky" onClick={() => setAdding(true)}><Plus size={20} /> Add unit</button>
            </>
          )}
        </main>
        <div className="xr-detail">
          {sel ? (
            <UnitPanel key={sel.key} u={sel} index={selIdx} dispatch={dispatch} onClose={() => nav("#/build")} onBuyAbilities={() => setAbilOpen(true)} onEditCommander={() => setCmdOpen(true)} factionPool={list.faction && list.faction.pool} />
          ) : (
            roster.length > 0 && <div className="xr-detail-hint"><Alien size={36} /><span>Select a unit</span></div>
          )}
        </div>
      </div>

      {adding && <AddUnitModal onAdd={(id) => { dispatch({ type: "add", typeId: id }); setAdding(false); }} onClose={() => setAdding(false)} />}
      {abilOpen && sel && <AbilitiesModal u={sel} dispatch={dispatch} onClose={() => setAbilOpen(false)} />}
      {cmdOpen && sel && sel.isCmd && <CommanderModal u={sel} dispatch={dispatch} onClose={() => setCmdOpen(false)} />}
      {factionOpen && <FactionModal onPick={(f) => { updateList({ faction: f }); setFactionOpen(false); }} onClose={() => setFactionOpen(false)} />}
      <SiteFooter />
    </div>
  );
}

/* ================================================================== *
 * PRINT: preview + options
 * ================================================================== */
function PrintView({ list }) {
  const { roster, budget } = list;
  const [opts, setOpts] = useState({ stats: true, upgrades: true, glossary: true, traits: true, contrast: false, large: false });
  const { used, count } = useMemo(() => validate(roster, budget, list.freeplay), [roster, budget, list.freeplay]);
  const tog = (k) => setOpts((o) => ({ ...o, [k]: !o[k] }));

  const glossary = useMemo(() => {
    const names = new Set();
    roster.forEach((u) => UNIT_BY_ID[u.typeId].special.forEach((s) => { if (s !== "None") names.add(s); }));
    return [...names].sort().map((n) => ({ name: n, text: SPECIAL_RULES[n] })).filter((g) => g.text);
  }, [roster]);

  return (
    <div className={`xr-printview ${opts.contrast ? "contrast" : ""} ${opts.large ? "large" : ""}`}>
      <RailNav view="print" />
      <div className="xr-print-chrome">
        <button className="xr-iconbtn" onClick={() => nav("#/build")} aria-label="Back to builder"><Back size={20} /></button>
        <h2 className="xr-print-h">Print</h2>
        <div className="xr-print-opts">
          <span className="xr-print-optlabel">Sections</span>
          {[["stats", "Stat table"], ["upgrades", "Upgrades and xeno rules"], ["glossary", "Special rules glossary"], ["traits", "Commander trait"]].map(([k, lab]) => (
            <label key={k} className="xr-print-check">
              <input type="checkbox" checked={opts[k]} onChange={() => tog(k)} /> {lab}
            </label>
          ))}
          <span className="xr-print-optlabel">Readability</span>
          <label className="xr-print-check"><input type="checkbox" checked={opts.contrast} onChange={() => tog("contrast")} /> High contrast</label>
          <label className="xr-print-check"><input type="checkbox" checked={opts.large} onChange={() => tog("large")} /> Larger type</label>
          <button className="xr-btn primary" onClick={() => window.print()}><Printer size={18} /> Print</button>
        </div>
      </div>

      <div className="xr-sheet">
        <div className="xr-sheet-head">
          <h1 className="xr-sheet-title">{list.name || "Untitled detachment"}</h1>
          <div className="xr-sheet-meta">Xenos Rampant &nbsp; {used}/{budget} pts &nbsp; {count} {count === 1 ? "unit" : "units"}</div>
        </div>
        {list.nationalTrait && NATIONAL_BY_ID[list.nationalTrait] && (
          <p className="xr-sheet-natl"><b>National trait, {NATIONAL_BY_ID[list.nationalTrait].name}:</b> {NATIONAL_BY_ID[list.nationalTrait].rule}</p>
        )}

        {roster.length > 0 && (
          <div className="xr-sheet-cards">
            {roster.map((u, i) => {
              const t = UNIT_BY_ID[u.typeId];
              const a = t.act, p = t.prof;
              const order = ACT_KEYS.map(({ key, label }) => { const c = parseAct(t.noAttack && key === "atk" ? "n/a" : a[key]); return { label, val: c.val === "n/a" ? "-" : c.val, free: c.free }; });
              const prof = [
                { label: "Attack", val: p.atk === "n/a" ? "-" : p.atk },
                { label: "Defence", val: p.def },
                { label: "Shoot", val: splitRange(p.sho).main === "n/a" ? "-" : p.sho },
                { label: "Armour", val: p.arm },
                { label: "Move", val: p.mov },
                { label: "Strength", val: unitSP(u) },
              ];
              const os = t.options.filter((o) => u.options[o.id]);
              const xs = XENO_RULES.filter((x) => x.id in u.xenos);
              const cs = u.custom || [];
              const trait = opts.traits && u.isCmd && typeof u.traitIndex === "number" ? COMMANDER_TABLES[u.traitTable || "aggressive"].traits[u.traitIndex] : null;
              const powers = (u.psychic || []).map((n) => PSYCHIC_POWERS.find((pp) => pp.name === n)).filter(Boolean);
              const stdRules = opts.glossary ? [] : t.special.filter((s) => s !== "None");
              const hasRules = os.length || xs.length || cs.length || trait || powers.length;
              return (
                <div className="xr-pc" key={u.key}>
                  <div className="xr-pc-head">
                    <span className="xr-pc-name">{u.isCmd && <Crown size={13} className="xr-sheet-crown" />}{unitDisplayName(u, i)}</span>
                    <span className="xr-pc-type">{t.name}</span>
                    <span className="xr-pc-pts">{unitPoints(u)} pts, {unitSP(u)} SP</span>
                  </div>
                  {opts.stats && (
                    <div className="xr-pc-stats">
                      <div className="xr-pc-line"><span className="xr-pc-ll">Activate</span>{order.map((o) => <span className="xr-pc-cell" key={o.label}><em>{o.label}</em><b>{o.val}{o.free && <sup className="fmk">F</sup>}</b></span>)}</div>
                      <div className="xr-pc-line"><span className="xr-pc-ll">Value</span>{prof.map((o) => <span className="xr-pc-cell" key={o.label}><em>{o.label}</em><b>{o.val}</b></span>)}</div>
                    </div>
                  )}
                  {opts.upgrades && hasRules && (
                    <div className="xr-pc-rules">
                      {os.map((o) => <p key={o.id}><b>{o.name}</b> ({costLabel(optCost(o))}): {o.text}</p>)}
                      {xs.map((x) => <p key={x.id}><b>{x.name}</b> ({costLabel(xenoCost(x, u.xenos[x.id]))}): {typeof x.text === "string" ? x.text : <>{x.text.flavor && <i>{x.text.flavor} </i>}{ruleBodyText(x.text)}</>}</p>)}
                      {powers.map((pw) => <p key={pw.name}><b>Psychic power, {pw.name}</b> ({pw.difficulty}): {pw.effect}</p>)}
                      {cs.map((c) => <p key={c.id}><b>{c.name}</b> ({costLabel(c.cost)}){c.text ? `: ${c.text}` : ""}</p>)}
                      {trait && <p><b>Commander trait, {trait.name}:</b> {trait.rule}</p>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        {opts.stats && <p className="xr-sheet-note"><b className="fmk">F</b> = free action, activates on its own, no roll needed.</p>}

        {opts.glossary && glossary.length > 0 && (
          <div className="xr-sheet-gloss">
            <h2>Special rules</h2>
            {glossary.map((g) => (
              <p key={g.name}>
                <b>{g.name}.</b>{" "}
                {typeof g.text === "string" ? g.text : <>{g.text.flavor && <i>{g.text.flavor} </i>}{ruleBodyText(g.text)}</>}
              </p>
            ))}
          </div>
        )}

        <div className="xr-sheet-foot">Xenos Rampant is by Daniel Mersey and Richard Cowen (Osprey Games, 2022). Roster built with the WarLore force builder.</div>
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
    units: Object.fromEntries(Object.entries(s.units).map(([k, v]) => [k, { ...v, act: false }])),
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
                  const c = orderCell(t, key);
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
                  const v = profCellVal(t, sp, d.key);
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
                      onClick={() => patch(u.key, { dmg: lost ? sp - pi - 1 : sp - pi })}>
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
    setLists((ls) => ({ ...ls, [id]: { id, name: opts.name || "", budget: opts.budget || 24, description: opts.description || "", roster: [], faction: opts.faction || undefined, updated: Date.now() } }));
    setCurrentId(id);
    nav("#/build");
  };
  const loadPreset = (det, setting) => {
    const id = uid();
    const roster = rosterFromDetachment(det);
    const bookPts = detachmentPoints(det);
    const budget = BUDGET_PRESETS.find((b) => b >= bookPts) || BUDGET_PRESETS[BUDGET_PRESETS.length - 1] || 24;
    setLists((ls) => ({ ...ls, [id]: { id, name: det.name, budget, description: det.subtitle || "", roster, setting: setting.id, nationalTrait: undefined, updated: Date.now() } }));
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
      {route.view === "home" && <Dashboard lists={lists} onOpen={openList} onCreate={createList} onLoadPreset={loadPreset} onDup={dupList} onDel={delList} />}
      {route.view === "build" && <Builder list={current} selectedKey={route.unitKey} dispatch={dispatch} updateList={updateList} onDelete={() => delList(current.id)} />}
      {route.view === "print" && <PrintView list={current} />}
      {route.view === "play" && <PlayView list={current} />}
      {rulesOpen && <RulesModal onClose={() => setRulesOpen(false)} />}
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
.xr-btn.small{min-height:42px;padding:8px 13px;font-size:15.5px;}
.xr-btn.small.icon{padding:8px 10px;}
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
.xr-stt-cell.mod b{color:var(--coral-ink);}
.xr-stt-cell.mod .xr-die{border-color:var(--coral-ink);box-shadow:inset 0 0 0 1px var(--coral-ink);}
.xr-mod-dot{position:absolute;top:-1px;left:-9px;width:6px;height:6px;border-radius:50%;background:var(--coral);}

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
.xr-list-desc{font-family:var(--flavor);font-style:italic;font-size:14.5px;color:var(--ink-2);line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
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
.xr-rail-rules{margin-top:auto;}
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
.xr-sec{border-top:2px solid var(--ink-30);}
.xr-sec-h{display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:11px 2px;font-family:var(--display);font-weight:700;letter-spacing:.03em;font-size:20px;line-height:1.4;color:var(--ink);min-height:46px;}
.xr-sec-title{flex:1;}
.xr-sec-count{font-family:var(--mono);font-style:normal;font-weight:700;font-size:14px;min-width:26px;height:26px;padding:0 7px;display:inline-flex;align-items:center;justify-content:center;background:var(--ink);color:var(--cream);border-radius:13px;}
.xr-sec-caret{color:var(--ink-2);transition:transform .15s;flex:none;}
.xr-sec.open .xr-sec-caret{transform:rotate(180deg);}
.xr-sec-body{padding-bottom:14px;animation:xr-rise .2s cubic-bezier(.2,.8,.2,1);}

/* ---------- sticky add-unit ---------- */
.xr-ulist-rows{display:flex;flex-direction:column;gap:10px;}
.xr-add-sticky{position:sticky;bottom:14px;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:10px;width:100%;font-family:var(--body);font-weight:700;font-size:18px;color:var(--cream);background:var(--ink);border:2px solid var(--ink);padding:14px;border-radius:12px;box-shadow:0 3px 12px rgba(31,61,46,.22);transition:.13s;}
.xr-add-sticky:hover{background:var(--brand-deep-blue);border-color:var(--brand-deep-blue);}
.xr-add-sticky:active{transform:scale(.98);}

.xr-build{display:flex;flex-direction:column;min-height:100vh;padding-left:76px;}
.xr-mast{position:sticky;top:0;z-index:30;background:var(--paper);border-bottom:3px solid var(--ink);padding:14px clamp(14px,3vw,30px) 12px;}
.xr-mast-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}
.xr-detname{flex:1;min-width:170px;font-family:var(--display);font-weight:600;font-size:22px;color:var(--ink);background:transparent;border:none;border-bottom:2px solid var(--ink-30);padding:4px 2px 6px;}
.xr-detname::placeholder{color:var(--ink-2);opacity:.7;}
.xr-detname:focus{outline:none;border-bottom-color:var(--coral);}
.xr-actions{display:flex;gap:8px;flex-wrap:wrap;}
.xr-mast-row2{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:12px;}
.xr-budget{display:flex;align-items:center;gap:6px;flex-wrap:wrap;}
.xr-budget-l{font-family:var(--display);font-weight:600;font-size:16px;color:var(--ink-2);margin-right:2px;}
.xr-budget-b{font-family:var(--mono);font-weight:600;font-size:16px;border:2px solid var(--ink);min-width:46px;min-height:44px;padding:6px 8px;border-radius:9px;transition:.12s;}
.xr-budget-b:hover{background:var(--paper-2);}
.xr-budget-b.on{background:var(--ink);color:var(--cream);}
.xr-budgetrow{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
.xr-budget-b.rec{position:relative;}
.xr-budget-rec{position:absolute;top:-6px;right:-5px;font-size:11px;line-height:1;color:var(--brass);}
.xr-budget-b.rec.on .xr-budget-rec{color:#E8C860;}
.xr-budget-cbtn{font-family:var(--display);font-size:15px;font-weight:600;border-style:dashed;border-color:var(--ink-30);color:var(--ink-2);}
.xr-budget-cbtn:hover{border-color:var(--ink);color:var(--ink);}
.xr-budget-cust{position:relative;display:inline-flex;flex-direction:column;justify-content:center;gap:1px;min-width:70px;min-height:44px;border:2px solid var(--coral);border-radius:9px;padding:3px 8px;background:var(--paper);}
.xr-budget-cust-l{font-family:var(--display);font-weight:600;letter-spacing:.04em;font-size:11px;line-height:1;color:var(--coral-ink);}
.xr-budget-cust input{width:58px;font-family:var(--mono);font-weight:700;font-size:16px;color:var(--ink);background:transparent;border:none;padding:0;}
.xr-budget-cust input:focus{outline:none;}
.xr-muster{display:flex;align-items:center;gap:12px;flex:1;min-width:200px;}
.xr-muster-read{font-family:var(--mono);font-weight:700;white-space:nowrap;font-variant-numeric:tabular-nums;}
.xr-muster-read b{font-size:24px;}
.xr-muster-read span{font-size:16px;color:var(--ink-2);}
.xr-muster-track{position:relative;flex:1;height:14px;border:2px solid var(--ink);background:var(--paper-2);border-radius:6px;overflow:hidden;}
.xr-muster-fill{display:block;height:100%;background:var(--brand-grad);transition:width var(--dur-slow) var(--curve-ease);}
.xr-muster.near .xr-muster-fill{background:var(--brass);}
.xr-muster.over .xr-muster-fill{background:var(--coral);}
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

.xr-build-body{flex:1;display:grid;grid-template-columns:minmax(320px,430px) 1fr;gap:0;align-items:start;}
.xr-ulist{display:flex;flex-direction:column;gap:10px;padding:18px clamp(12px,1.6vw,20px) 40px;}
.xr-detail{align-self:start;border-left:3px solid var(--ink);min-height:320px;}
.xr-detail-hint{display:flex;flex-direction:column;align-items:center;gap:10px;padding:80px 20px;color:var(--ink-2);font-family:var(--display);font-size:19px;}

/* compact unit rows */
.xr-urow{display:flex;flex-direction:row;align-items:center;gap:11px;text-align:left;border:2.5px solid var(--ink);border-left-width:7px;border-radius:10px;background:var(--paper-2);padding:11px 14px;transition:transform .13s cubic-bezier(.2,.8,.2,1),background .13s,box-shadow .13s;}
.xr-urow-body{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;}
.xr-urow-img{flex:none;width:52px;height:52px;border-radius:8px;border:2px solid var(--ink);background-size:cover;background-position:center;background-color:var(--paper-3);}
.xr-urow-ic{flex:none;width:52px;height:52px;display:flex;align-items:center;justify-content:center;border-radius:8px;border:2px solid var(--ink);background:var(--cream);color:var(--ink);}
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
.xr-urow-name{font-family:var(--display);font-weight:700;font-size:18.5px;line-height:1.15;flex:1;min-width:0;}
.xr-urow-pts{font-family:var(--mono);font-weight:700;font-size:19px;white-space:nowrap;}
.xr-urow-pts i{font-style:normal;font-size:14px;color:var(--ink-2);margin-left:3px;}
.xr-urow-sub{font-family:var(--ui);font-weight:500;font-size:14.5px;color:var(--ink-2);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.xr-urow-sub em{font-style:italic;}

/* unit panel */
.xr-panel{padding:16px clamp(14px,2vw,24px) 40px;animation:xr-rise var(--dur-gentle) var(--curve-decel-min);}
/* brand unit-type banner (green to blue) */
.xr-typebanner{display:flex;align-items:center;gap:9px;background:var(--brand-deep);color:#fff;border-radius:10px;padding:9px 14px;margin-bottom:14px;box-shadow:var(--shadow4);}
.xr-typebanner-ic{display:flex;color:#fff;opacity:.92;}
.xr-typebanner-t{font-family:var(--ui);font-weight:700;font-size:15px;letter-spacing:.09em;text-transform:uppercase;}
.xr-typebanner-cmd{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-family:var(--ui);font-weight:700;font-size:12.5px;letter-spacing:.04em;text-transform:uppercase;background:rgba(255,255,255,.22);padding:3px 9px;border-radius:20px;}
.xr-panel-head{display:flex;align-items:center;gap:12px;padding-bottom:12px;border-bottom:2px solid var(--ink-30);}
.xr-panel-back{display:none;}
/* image upload widget */
.xr-imgup{position:relative;flex:none;}
.xr-imgup.square,.xr-imgup.square .xr-imgup-thumb,.xr-imgup.square .xr-imgup-add{width:64px;height:64px;border-radius:11px;}
.xr-imgup-add{display:flex;align-items:center;justify-content:center;border:2px dashed var(--ink-30);background:var(--paper-2);color:var(--ink-2);transition:.13s;}
.xr-imgup-add:hover{border-color:var(--ink);color:var(--ink);background:var(--paper-3);}
.xr-imgup-thumb{display:block;border:2px solid var(--ink);background-size:cover;background-position:center;background-color:var(--paper-3);cursor:pointer;padding:0;}
.xr-imgup-x{position:absolute;top:-7px;right:-7px;width:22px;height:22px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:2px solid var(--ink);background:var(--coral);color:#3a1206;transition:.12s;}
.xr-imgup-x:hover{background:var(--coral-ink);color:#fff;}
/* detachment picture on masthead + dashboard */
.xr-mast-img{flex:none;width:44px;height:44px;border-radius:9px;border:2px solid var(--ink);background-size:cover;background-position:center;background-color:var(--paper-3);}
.xr-list-img{width:100%;height:120px;border-radius:8px;border:2px solid var(--ink);background-size:cover;background-position:center;background-color:var(--paper-3);margin-bottom:2px;}
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
.xr-panel-name::placeholder{color:var(--ink-2);opacity:.7;}
.xr-panel-type{font-family:var(--ui);font-size:14.5px;color:var(--ink-2);display:inline-flex;align-items:center;gap:6px;}
.xr-tag-cmd{display:inline-flex;align-items:center;gap:4px;font-weight:700;font-size:13.5px;color:var(--cream);background:var(--brass);padding:2px 8px;border-radius:6px;}
.xr-panel-pts{font-family:var(--mono);font-weight:700;white-space:nowrap;}
.xr-panel-pts b{font-size:26px;}
.xr-panel-pts i{font-style:normal;font-size:14px;color:var(--ink-2);margin-left:3px;}
.xr-panel-tools{display:flex;gap:8px;flex-wrap:wrap;padding:10px 0;}
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
.xr-abil{margin-top:18px;border-top:2px solid var(--ink-30);padding-top:14px;}
.xr-abil-bar{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
.xr-abil-head{display:flex;align-items:center;gap:14px;margin-bottom:10px;}
.xr-abil-h{font-family:var(--display);font-weight:700;font-size:20px;line-height:1.4;color:var(--ink);}
.xr-abil-list{display:flex;flex-direction:column;gap:7px;}
.xr-abil-item{border:2px solid var(--ink-30);border-radius:10px;background:var(--paper-2);overflow:hidden;transition:border-color .12s;}
.xr-abil-item.open{border-color:var(--ink);}
.xr-abil-item.custom{border-color:var(--iris);}
.xr-abil-item.psy{border-color:var(--iris);}
.xr-abil-item-badge{flex:none;font-family:var(--mono);font-weight:700;font-size:13.5px;color:var(--iris);background:#6A4A8C14;border-radius:6px;padding:1px 7px;}
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
/* custom points value */
.xr-budget-custom{width:66px;min-height:44px;font-family:var(--mono);font-weight:700;font-size:16px;text-align:center;color:var(--ink);background:var(--paper-2);border:2px dashed var(--ink-30);border-radius:9px;padding:6px 4px;margin-left:6px;}
.xr-budget-custom:focus{outline:none;border-style:solid;border-color:var(--coral);}
/* modal form fields */
.xr-modal-narrow{width:min(520px,100%);}
.xr-field{display:block;margin-bottom:18px;}
.xr-field-l{display:block;font-family:var(--display);font-weight:600;letter-spacing:.03em;font-size:16px;color:var(--ink-2);margin-bottom:6px;}
.xr-field-l em{font-style:italic;font-variant:normal;font-size:13.5px;margin-left:6px;}
.xr-field-in{width:100%;font-family:var(--body);font-size:17px;color:var(--ink);background:var(--paper-2);border:2px solid var(--ink-30);border-radius:10px;padding:11px 13px;min-height:48px;}
.xr-field-roll{display:flex;gap:8px;align-items:stretch;}
.xr-field-roll .xr-field-in{flex:1;}
/* faction picker */
.xr-faction-pick{display:inline-flex;align-items:center;gap:9px;width:100%;text-align:left;font-family:var(--ui);font-weight:600;font-size:15.5px;color:var(--ink);border:2px solid var(--ink-30);background:var(--paper-2);border-radius:10px;padding:9px 12px;min-height:50px;transition:border-color .12s,background .12s;}
.xr-faction-pick:hover{border-color:var(--ink);background:var(--paper-3);}
.xr-faction-pick b{font-weight:700;}
.xr-faction-pick i{font-style:normal;font-size:13.5px;color:var(--ink-2);margin-left:auto;}
.xr-fac-sub{display:flex;align-items:center;gap:10px 14px;flex-wrap:wrap;padding:10px clamp(14px,3vw,22px) 0;}
.xr-fac-lead{font-family:var(--flavor);font-style:italic;font-size:16px;color:var(--ink-2);padding:12px clamp(14px,3vw,22px) 4px;}
.xr-fac-genre-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;}
.xr-fac-genre-card{display:flex;flex-direction:column;gap:5px;text-align:left;border:2.5px solid var(--ink);background:var(--paper-2);border-radius:13px;padding:16px 18px;min-height:76px;transition:transform .13s cubic-bezier(.2,.8,.2,1),box-shadow .13s,background .13s;}
.xr-fac-genre-card:hover{background:var(--paper-3);transform:translateY(-2px);box-shadow:0 5px 14px rgba(31,61,46,.15);}
.xr-fac-genre-card b{font-family:var(--display);font-weight:700;font-size:19px;color:var(--ink);}
.xr-fac-genre-card i{font-family:var(--flavor);font-style:italic;font-size:14.5px;color:var(--ink-2);}
.xr-fac-search{min-width:220px;flex:1;font-family:var(--body);font-size:15px;color:var(--ink);background:var(--paper-2);border:2px solid var(--ink-30);border-radius:9px;padding:8px 11px;min-height:40px;}
.xr-fac-search:focus{outline:none;border-color:var(--coral);}
.xr-fac-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px;}
.xr-fac-card{display:flex;align-items:center;gap:11px;text-align:left;border:2px solid var(--ink-30);background:var(--paper-2);border-radius:11px;padding:10px 12px;min-height:62px;transition:transform .12s cubic-bezier(.2,.8,.2,1),border-color .12s,box-shadow .12s;}
.xr-fac-card:hover{border-color:var(--ink);transform:translateY(-2px);box-shadow:0 5px 13px rgba(31,61,46,.14);}
.xr-fac-ic{flex:none;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:9px;border:2px solid var(--ink);background:var(--cream);color:var(--ink-2);overflow:hidden;}
.xr-fac-ic img{width:100%;height:100%;object-fit:contain;padding:3px;}
.xr-fac-ic.sm{width:30px;height:30px;border-radius:7px;}
.xr-fac-ic.sm img{padding:2px;}
.xr-fac-body{display:flex;flex-direction:column;gap:1px;min-width:0;}
.xr-fac-name{font-family:var(--ui);font-weight:600;font-size:15px;color:var(--ink);line-height:1.2;}
.xr-fac-tag{font-family:var(--flavor);font-style:italic;font-size:13px;color:var(--ink-2);}
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
.xr-iconbtn.small{width:34px;height:34px;flex:none;}
.xr-custom-form{border:1.5px solid var(--ink-30);border-radius:10px;padding:14px;background:var(--paper-2);}
.xr-custom-cost{max-width:110px;}
.xr-custom-form-foot{display:flex;justify-content:flex-end;gap:10px;}
.xr-chips{display:flex;flex-direction:column;gap:6px;}
.xr-chipwrap{display:flex;flex-direction:column;}
.xr-chip{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;font-weight:600;font-size:15.5px;border:1.5px solid var(--ink-30);border-radius:8px;padding:6px 10px 6px 12px;min-height:38px;transition:.12s;}
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
.xr-subs{margin-left:44px;border-left:2px solid var(--ink-18);padding-left:8px;}
.xr-tiers{display:flex;gap:7px;flex-wrap:wrap;padding:2px 4px 10px 60px;}
.xr-tier{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:15.5px;border:2px solid var(--ink-30);border-radius:8px;padding:7px 12px;min-height:42px;transition:border-color .12s,background .12s;}
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
.xr-trait-choice{display:flex;flex-direction:column;gap:2px;text-align:left;border:2px solid var(--ink-30);border-radius:9px;padding:8px 12px;background:var(--paper-2);transition:border-color .12s,background .12s,transform .12s;}
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
.xr-modal-tabs{display:flex;gap:8px;padding:12px 20px;border-bottom:2px solid var(--ink-18);flex-wrap:wrap;}
.xr-modal-tab{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:600;font-size:16.5px;color:var(--ink-2);border:2px solid var(--ink-30);background:var(--paper);padding:8px 15px;border-radius:9px;min-height:44px;transition:.12s;}
.xr-modal-tab:hover{border-color:var(--ink);color:var(--ink);}
.xr-modal-tab.on{color:var(--cream);background:var(--ink);border-color:var(--ink);}
.xr-tab-n{font-style:normal;font-family:var(--mono);font-weight:700;font-size:13px;background:var(--cream);color:var(--ink);border-radius:10px;min-width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;padding:0 5px;}
.xr-modal-count{margin-right:auto;font-family:var(--ui);font-weight:500;font-size:14.5px;color:var(--ink-2);}
.xr-modal-tab.cat-inf.on{background:var(--sage);border-color:var(--sage);}
.xr-modal-tab.cat-xeno.on{background:var(--iris);border-color:var(--iris);}
.xr-modal-tab.cat-veh.on{background:var(--rust);border-color:var(--rust);}
.xr-modal-body{overflow-y:auto;padding:16px 20px 24px;}
.xr-modal.xr-modal-wide{width:min(1080px,100%);height:min(780px,90vh);}
.xr-pick-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(228px,1fr));gap:13px;}
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
.xr-cat-name{font-family:var(--display);font-weight:700;font-size:19px;line-height:1.15;padding-top:2px;}
.xr-cat-role{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-family:var(--flavor);font-style:italic;font-size:15px;line-height:1.38;color:var(--ink-2);margin:4px 0 9px;}
.xr-cat-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px 6px;margin-bottom:9px;}
.xr-cat-rules{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:11px;}
.xr-cat-rule{font-family:var(--ui);font-weight:600;font-size:12px;color:var(--ink-2);background:var(--cream);border:1px solid var(--ink-18);border-radius:6px;padding:2px 7px;cursor:help;}
.xr-cat-rule:hover{border-color:var(--ink-30);color:var(--ink);}
.xr-cat-stat{display:flex;align-items:center;gap:7px;}
.xr-cat-stat img{flex:none;opacity:.9;}
.xr-cat-stat b{font-family:var(--mono);font-weight:700;font-size:17px;color:var(--ink);font-variant-numeric:tabular-nums;}
.xr-cat-add{margin-top:auto;display:inline-flex;align-items:center;justify-content:center;gap:7px;font-family:var(--display);font-weight:600;font-size:15.5px;color:var(--cream);background:var(--ink);border-radius:9px;padding:8px 12px;min-height:40px;}
.xr-cat-card:hover .xr-cat-add{background:var(--brand-deep-blue);}
/* dashboard action buttons */
.xr-home-bar-btns{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
/* load-a-preset modal */
.xr-preset-blurb{font-size:16px;line-height:1.45;color:var(--ink-2);margin-bottom:14px;}
.xr-preset-blurb b{font-family:var(--display);color:var(--ink);}
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
.xr-printview{min-height:100vh;background:var(--paper-3);padding-left:76px;}
.xr-print-chrome{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:14px clamp(14px,3vw,30px);border-bottom:3px solid var(--ink);background:var(--paper);position:sticky;top:0;z-index:20;}
.xr-print-h{font-family:var(--display);font-weight:700;font-size:24px;margin-right:8px;}
.xr-print-opts{display:flex;align-items:center;gap:8px 14px;flex-wrap:wrap;}
.xr-print-optlabel{font-family:var(--display);font-weight:600;font-size:16px;color:var(--ink-2);}
.xr-print-check{display:inline-flex;align-items:center;gap:7px;font-weight:600;font-size:15.5px;min-height:44px;cursor:pointer;}
.xr-print-check input{width:20px;height:20px;accent-color:var(--ink);cursor:pointer;}
.xr-sheet{max-width:880px;margin:26px auto 60px;background:#fff;color:#1a1a1a;padding:34px 38px;box-shadow:0 4px 22px rgba(31,61,46,.2);}
.xr-sheet-head{display:flex;align-items:baseline;justify-content:space-between;gap:16px;flex-wrap:wrap;border-bottom:3px solid #1a1a1a;padding-bottom:10px;margin-bottom:16px;}
.xr-sheet-title{font-family:var(--display);font-weight:700;font-size:29px;}
.xr-sheet-meta{font-family:var(--ui);font-weight:500;font-size:15px;}
.xr-sheet-natl{font-family:var(--flavor);font-style:italic;font-size:14px;line-height:1.45;margin:-6px 0 14px;padding:8px 12px;border-left:4px solid #8A6A1F;background:#8A6A1F14;}
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
.xr-sheet-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:10px;margin-top:14px;align-items:start;}
.xr-pc{border:1.5px solid #1a1a1a;border-radius:8px;padding:9px 13px 10px;break-inside:avoid;}
.xr-pc-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;border-bottom:1.5px solid #1a1a1a;padding-bottom:5px;margin-bottom:7px;}
.xr-pc-name{font-family:var(--display);font-weight:700;font-size:16.5px;display:inline-flex;align-items:center;gap:5px;}
.xr-pc-type{font-family:var(--flavor);font-style:italic;font-size:13.5px;color:#444;}
.xr-pc-pts{margin-left:auto;font-family:var(--mono);font-weight:700;font-size:13.5px;}
.xr-pc-stats{display:flex;flex-direction:column;gap:4px;}
.xr-pc-line{display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap;}
.xr-pc-ll{font-family:var(--ui);font-weight:600;font-size:11.5px;color:#666;width:50px;flex:none;}
.xr-pc-cell{display:inline-flex;align-items:baseline;gap:4px;}
.xr-pc-cell em{font-family:var(--ui);font-style:normal;font-size:11.5px;color:#555;}
.xr-pc-cell b{font-family:var(--mono);font-weight:700;font-size:14px;}
.xr-pc-cell .fmk{font-family:var(--display);font-weight:700;color:#c23a1e;}
@media print{.xr-pc-cell .fmk{color:#000;}}
.xr-pc-rules{margin-top:8px;border-top:1px solid #ccc;padding-top:7px;}
.xr-pc-rules p{font-family:var(--body);font-size:12.5px;line-height:1.42;margin-bottom:3px;}
.xr-pc-rules p b{font-weight:700;}
.xr-printview.large .xr-pc-name{font-size:18px;}
.xr-printview.large .xr-pc-cell b{font-size:15.5px;}
.xr-printview.large .xr-pc-rules p{font-size:14px;}
.xr-printview.contrast .xr-pc,.xr-printview.contrast .xr-pc-head{border-color:#000;}
.xr-printview.contrast .xr-pc-type,.xr-printview.contrast .xr-pc-cell em,.xr-printview.contrast .xr-pc-ll{color:#000;}
.xr-sheet-units{margin-top:20px;column-count:2;column-gap:28px;}
.xr-sheet-unit{break-inside:avoid;margin-bottom:14px;}
.xr-sheet-unit h3{font-family:var(--display);font-size:17px;border-bottom:1.5px solid #1a1a1a;padding-bottom:2px;margin-bottom:5px;}
.xr-sheet-unit h3 em{font-weight:400;font-style:italic;font-size:14.5px;}
.xr-sheet-unit p{font-family:var(--body);font-style:normal;font-size:13.5px;line-height:1.45;margin-bottom:5px;}
.xr-sheet-unit p b{font-style:normal;}
.xr-sheet-gloss{margin-top:20px;border-top:2px solid #1a1a1a;padding-top:10px;}
.xr-sheet-gloss h2{font-family:var(--display);font-size:19px;margin-bottom:8px;}
.xr-sheet-gloss p{font-family:var(--body);font-style:normal;font-size:13.5px;line-height:1.45;margin-bottom:6px;}
.xr-sheet-gloss p b{font-style:normal;}
.xr-sheet-gloss p i{font-family:var(--flavor);font-style:italic;color:#333;}
.xr-sheet-foot{margin-top:22px;border-top:1px solid #bbb;padding-top:8px;font-size:12.5px;font-style:italic;color:#555;}
.xr-printview.large .xr-sheet{font-size:17px;}
.xr-printview.large .xr-sheet-table td,.xr-printview.large .xr-sheet-table th{font-size:16.5px;padding:8px 7px;}
.xr-printview.large .xr-sheet-unit p,.xr-printview.large .xr-sheet-gloss p{font-size:16px;}
.xr-printview.contrast .xr-sheet{color:#000;}
.xr-printview.contrast .xr-sheet-table td{border-bottom-color:#000;}
.xr-printview.contrast .xr-sheet-note,.xr-printview.contrast .xr-sheet-foot{color:#000;}

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
.xr-pip{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border-radius:9px;color:var(--coral-ink);transition:.12s;}
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
.game-info-footer{border-top:1.5px solid var(--ink);background:var(--paper-3);padding:12px clamp(16px,3vw,30px);color:var(--ink-2);}
.gif-inner{display:flex;flex-wrap:wrap;align-items:center;gap:7px;font-size:15px;}
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
  .xr-build-body{display:block;}
  .xr-detail{position:fixed;inset:0;z-index:60;background:var(--paper);border-left:none;max-height:none;overflow-y:auto;display:none;}
  .xr-build-body.has-sel .xr-detail{display:block;animation:xr-fade .18s ease;}
  .xr-panel-back{display:flex;}
  .xr-detail-hint{display:none;}
  .xr-stt-head,.xr-stt-row{grid-template-columns:1fr 88px 96px;}
  .xr-pcard-dice{grid-template-columns:repeat(2,1fr);}
  .xr-row-text{padding-left:4px;}
  .xr-tiers{padding-left:4px;}
  .xr-subs{margin-left:12px;}
  .xr-rail{top:auto;bottom:0;left:0;right:0;width:auto;height:60px;flex-direction:row;padding:0 4px;gap:0;justify-content:space-around;border-top:2px solid var(--ink-2);}
  .xr-rail-logo{display:none;}
  .xr-rail-nav{flex-direction:row;justify-content:space-around;height:100%;align-items:stretch;}
  .xr-rail-btn{flex:1;max-width:96px;justify-content:center;border-radius:0;gap:2px;}
  .xr-home,.xr-build,.xr-printview,.xr-play{padding-left:0;padding-bottom:64px;}
}

/* ---------- @media print ---------- */
@media print{
  .xr-app{background:#fff;}
  .xr-rail,.xr-print-chrome,.game-info-footer{display:none !important;}
  .xr-printview{background:#fff;padding-left:0;}
  .xr-sheet{box-shadow:none;margin:0;max-width:none;padding:0;}
  .xr-sheet-cards{grid-template-columns:1fr 1fr;gap:8px;}
  .xr-pc{break-inside:avoid;}
  @page{margin:12mm;}
}
`;
