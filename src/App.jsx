import React, { useState, useMemo, useEffect, useCallback } from "react";
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
import icSkull from "@iconify-icons/ph/skull-fill";
import icEdit from "@iconify-icons/ph/pencil-simple-fill";
import icCaret from "@iconify-icons/ph/caret-down-bold";
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
} from "./data.js";

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
  House = mk(icHouse), Skull = mk(icSkull), Edit = mk(icEdit), Caret = mk(icCaret);

const STAT_ROWS = [
  { key: "atk", label: "Attack", img: icoAttack, order: true, val: true, tip: "Attack: melee to-hit value. Order is the 2d6 target to activate an Attack." },
  { key: "mov", label: "Move", img: icoMove, order: true, val: true, tip: "Move: maximum movement distance. Order is the 2d6 target to activate a Move." },
  { key: "sho", label: "Shoot", img: icoShoot, order: true, val: true, tip: "Shoot: ranged to-hit value and range. Order is the 2d6 target to activate a Shoot." },
  { key: "cou", label: "Courage", img: icoCourage, order: true, val: false, tip: "Courage: the 2d6 target for Courage and Rally tests." },
  { key: "def", label: "Defence", img: icoDefence, order: false, val: true, tip: "Defence: the value an attacker must roll to hit this unit." },
  { key: "arm", label: "Armour", img: icoArmour, order: false, val: true, tip: "Armour: hits needed before this unit loses a Strength Point." },
  { key: "sp", label: "Strength", img: icoStrength, order: false, val: true, tip: "Strength Points: the unit's health and model count." },
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
  return { ...u, options, xenos };
}
function validate(roster, budget) {
  const issues = [];
  const used = roster.reduce((s, u) => s + unitPoints(u), 0);
  const count = roster.length;
  const minU = Math.max(2, Math.round((3 * budget) / 24));
  const maxU = Math.round((10 * budget) / 24);
  const cmds = roster.filter((u) => u.isCmd).length;
  const heavyVeh = roster.filter((u) => UNIT_BY_ID[u.typeId].heavy).length;
  const heavyCap = Math.floor(budget / 18);
  const vehPts = roster.filter((u) => UNIT_BY_ID[u.typeId].cls === VEHICLE).reduce((s, u) => s + unitPoints(u), 0);
  if (used > budget) issues.push({ lvl: "err", msg: `Over budget by ${used - budget} points.` });
  if (count > 0) {
    if (cmds === 0) issues.push({ lvl: "err", msg: "No Commander. Crown one unit." });
    if (cmds > 1) issues.push({ lvl: "err", msg: `${cmds} Commanders. Only one is allowed.` });
    if (count < minU) issues.push({ lvl: "warn", msg: `Below minimum size (${minU} to ${maxU} units at ${budget} points).` });
    if (count > maxU) issues.push({ lvl: "err", msg: `Above maximum size (${minU} to ${maxU} units at ${budget} points).` });
    if (heavyVeh > heavyCap) issues.push({ lvl: "err", msg: `${heavyVeh} fighting/transport vehicles. The limit is ${heavyCap} (one per full 18 points).` });
    if (vehPts > budget / 2) issues.push({ lvl: "err", msg: `Vehicles are ${vehPts} points; no more than half (${Math.floor(budget / 2)}) may be vehicles.` });
  }
  return { issues, used, count };
}
const unitDisplayName = (u, i) => u.name || `${UNIT_BY_ID[u.typeId].name} ${i + 1}`;

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

/* ---------------- small shared pieces ---------------- */
function Die({ k, children }) {
  return <span className={`xr-die k-${k}`} title="Order value: roll 2d6 this or higher to activate this action">{children}</span>;
}
function orderCell(t, key) {
  const raw = t.noAttack && key === "atk" ? "n/a" : t.act[key];
  const { val, free } = parseAct(raw);
  return val === "n/a" ? null : { val, free };
}
function profCellVal(t, sp, key) {
  if (key === "sp") return { main: String(sp) };
  if (key === "sho") { const r = splitRange(t.prof.sho); return r.main === "n/a" ? null : r; }
  const v = t.prof[key];
  return v == null || v === "n/a" || v === "—" ? null : { main: String(v) };
}
function StatTable({ t, sp }) {
  return (
    <div className="xr-stt">
      <div className="xr-stt-head">
        <span>Stat</span><span>Order <em>2d6</em></span><span>Profile</span>
      </div>
      {STAT_ROWS.map((d) => {
        const o = d.order ? orderCell(t, d.key) : null;
        const v = d.val ? profCellVal(t, sp, d.key) : null;
        return (
          <div className="xr-stt-row" key={d.key} title={d.tip}>
            <span className="xr-stt-stat"><img className="xr-stt-ic" src={d.img} alt="" width="20" height="20" />{d.label}</span>
            <span className="xr-stt-cell">
              {o ? <><Die k={d.key}>{o.val}</Die>{o.free && <em className="xr-free">free</em>}</> : <span className="xr-dash">-</span>}
            </span>
            <span className="xr-stt-cell">
              {v ? <><b>{v.main}</b>{v.range && <i className="xr-rng">{v.range}</i>}</> : <span className="xr-dash">-</span>}
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
      <div className="xr-rail-logo" aria-hidden="true"><Skull size={26} /></div>
      <div className="xr-rail-nav">
        {items.map((it) => (
          <button key={it.v} className={`xr-rail-btn ${view === it.v ? "on" : ""}`} title={it.v === "home" ? "All detachments" : it.label}
            onClick={() => nav(it.hash)} aria-current={view === it.v ? "page" : undefined}>
            <it.Icon size={22} /><span>{it.label}</span>
          </button>
        ))}
      </div>
    </nav>
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

/* new-army creation modal */
function NewArmyModal({ onCreate, onClose }) {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState(24);
  const [desc, setDesc] = useState("");
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const create = () => onCreate({ name: name.trim(), budget, description: desc.trim() });
  return (
    <div className="xr-modal-backdrop" onClick={onClose}>
      <div className="xr-modal xr-modal-narrow" role="dialog" aria-modal="true" aria-label="New detachment" onClick={(e) => e.stopPropagation()}>
        <div className="xr-modal-head">
          <span className="xr-modal-title"><Plus size={22} /> New detachment</span>
          <button className="xr-iconbtn" onClick={onClose} aria-label="Close"><XIc size={20} /></button>
        </div>
        <div className="xr-modal-body">
          <label className="xr-field">
            <span className="xr-field-l">Name</span>
            <input className="xr-field-in" value={name} onChange={(e) => setName(e.target.value)} placeholder="Eg. Fennec Fusiliers" autoFocus
              onKeyDown={(e) => { if (e.key === "Enter") create(); }} spellCheck={false} />
          </label>
          <div className="xr-field">
            <span className="xr-field-l">Game size</span>
            <div className="xr-budget">
              {BUDGET_PRESETS.map((b) => (
                <button key={b} className={`xr-budget-b ${budget === b ? "on" : ""}`} onClick={() => setBudget(b)}>{b}</button>
              ))}
              <input className="xr-budget-custom" type="number" min="1" max="999" value={budget} aria-label="Custom points" title="Custom points value"
                onChange={(e) => { const v = parseInt(e.target.value, 10); setBudget(v > 0 ? Math.min(999, v) : 1); }} />
            </div>
          </div>
          <label className="xr-field">
            <span className="xr-field-l">Description <em>optional</em></span>
            <textarea className="xr-field-in xr-field-area" value={desc} onChange={(e) => setDesc(e.target.value)}
              placeholder="Backstory, how to play, a note to your future self..." rows={3} />
          </label>
        </div>
        <div className="xr-modal-foot">
          <button className="xr-btn primary" onClick={create}><Plus size={17} /> Create detachment</button>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== *
 * DASHBOARD (saved detachments)
 * ================================================================== */
function Dashboard({ lists, onOpen, onCreate, onDup, onDel }) {
  const [creating, setCreating] = useState(false);
  const arr = Object.values(lists).sort((a, b) => (b.updated || 0) - (a.updated || 0));
  return (
    <div className="xr-home">
      <header className="xr-home-mast">
        <h1 className="xr-word">Xenos Rampant</h1>
        <span className="xr-sub">Force Builder</span>
      </header>
      <main className="xr-home-body">
        <div className="xr-home-bar">
          <h2 className="xr-home-h">Detachments</h2>
          <button className="xr-btn primary" onClick={() => setCreating(true)}><Plus size={20} /> New detachment</button>
        </div>
        {arr.length === 0 ? (
          <button className="xr-home-empty" onClick={() => setCreating(true)}>
            <Alien size={44} />
            <span>Muster your first detachment</span>
          </button>
        ) : (
          <div className="xr-home-grid">
            {arr.map((l) => {
              const { issues, used, count } = validate(l.roster, l.budget);
              const err = issues.some((i) => i.lvl === "err");
              return (
                <div className="xr-list-card" key={l.id}>
                  <button className="xr-list-open" onClick={() => onOpen(l.id)}>
                    <span className="xr-list-name">{l.name || "Untitled detachment"}</span>
                    <span className="xr-list-meta">
                      <b>{used}</b>/{l.budget} pts, {count} {count === 1 ? "unit" : "units"}
                    </span>
                    <span className={`xr-list-status ${count === 0 ? "empty" : err ? "err" : "ok"}`}>
                      {count === 0 ? "Empty" : err ? "Has issues" : "Legal"}
                    </span>
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
      <SiteFooter />
    </div>
  );
}

/* ================================================================== *
 * BUILDER: compact rows + detail panel
 * ================================================================== */
function UnitRow({ u, i, selected, onSelect }) {
  const t = UNIT_BY_ID[u.typeId];
  const pts = unitPoints(u);
  const taken = [
    ...t.options.filter((o) => u.options[o.id]).map((o) => o.name),
    ...XENO_RULES.filter((x) => x.id in u.xenos).map((x) => x.name),
  ];
  return (
    <button className={`xr-urow cat-${catOf(t)} ${selected ? "sel" : ""}`} onClick={onSelect} aria-expanded={selected}>
      <span className="xr-urow-top">
        {u.isCmd && <Crown className="xr-urow-crown" size={17} />}
        <span className="xr-urow-name">{unitDisplayName(u, i)}</span>
        <b className="xr-urow-pts">{pts}<i>pts</i></b>
      </span>
      <span className="xr-urow-sub">
        {t.name}, {unitSP(u)} SP{taken.length > 0 && <em> · {taken.join(", ")}</em>}
      </span>
    </button>
  );
}

function OptionRow({ active, disabled, name, cost, text, onToggle, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`xr-row ${active ? "on" : ""} ${disabled ? "off" : ""}`}>
      <div className="xr-row-line">
        <button className="xr-row-hit" onClick={onToggle} disabled={disabled}>
          <span className={`xr-row-cost ${cost < 0 ? "neg" : cost > 0 ? "pos" : ""}`}>{costLabel(cost)}</span>
          <span className="xr-check" aria-hidden="true">{active ? <Check size={16} /> : null}</span>
          <span className="xr-row-name">{name}</span>
        </button>
        <button className="xr-row-info" onClick={() => setOpen((o) => !o)} aria-label={open ? "Hide rule text" : "Show rule text"} aria-expanded={open}>?</button>
      </div>
      {(open || active) && <p className="xr-row-text">{text}</p>}
      {children}
    </div>
  );
}

function RuleChip({ name, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`xr-chipwrap ${open ? "open" : ""}`}>
      <button className="xr-chip" onClick={() => setOpen((o) => !o)} aria-expanded={open}>{name}</button>
      {open && text && <p className="xr-chip-text">{text}</p>}
    </div>
  );
}

function UnitPanel({ u, index, onClose, dispatch }) {
  const t = UNIT_BY_ID[u.typeId];
  const pts = unitPoints(u);
  const sp = unitSP(u);
  const elig = useMemo(() => eligibleXenos(t), [t]);
  const topOpts = t.options.filter((o) => !o.requires);
  const stdRules = t.special.filter((s) => s !== "None");
  const tbl = u.traitTable || "aggressive";
  const trait = u.isCmd && typeof u.traitIndex === "number" ? COMMANDER_TABLES[tbl].traits[u.traitIndex] : null;
  const [abilOpen, setAbilOpen] = useState(false);
  const boughtOpts = t.options.filter((o) => u.options[o.id]);
  const boughtXenos = XENO_RULES.filter((x) => x.id in u.xenos);
  const hasAbilities = topOpts.length > 0 || elig.length > 0;

  return (
    <section className="xr-panel" aria-label="Unit editor">
      <div className="xr-panel-head">
        <button className="xr-iconbtn xr-panel-back" onClick={onClose} aria-label="Close unit"><Back size={20} /></button>
        <div className="xr-panel-id">
          <input className="xr-panel-name" value={u.name} placeholder={`${t.name} ${index + 1}`}
            onChange={(e) => dispatch({ type: "name", key: u.key, name: e.target.value })} spellCheck={false} />
          <span className="xr-panel-type">{u.isCmd && <b className="xr-tag-cmd"><Crown size={13} /> Commander</b>} {t.name}</span>
        </div>
        <span className="xr-panel-pts"><b>{pts}</b><i>pts</i></span>
      </div>

      <div className="xr-panel-tools">
        <button className={`xr-btn small ${u.isCmd ? "gold" : ""}`} onClick={() => dispatch({ type: "cmd", key: u.key })}
          title={u.isCmd ? "This unit is your Commander" : "Make this unit your Commander (free)"}>
          <Crown size={17} /> {u.isCmd ? "Commander" : "Make Commander"}
        </button>
        {hasAbilities && (
          <button className="xr-btn primary" onClick={() => setAbilOpen(true)} title="Buy loadout options and xeno rules">
            <Plus size={17} /> Buy abilities
          </button>
        )}
        <button className="xr-btn small" onClick={() => dispatch({ type: "dup", key: u.key })} title="Duplicate this unit"><CopyIc size={17} /> Duplicate</button>
        <button className="xr-btn small danger" onClick={() => { dispatch({ type: "del", key: u.key }); onClose(); }} title="Remove this unit"><Trash size={17} /> Remove</button>
      </div>

      <div className="xr-panel-cols">
        <div className="xr-panel-left">
          <StatTable t={t} sp={sp} />
        </div>
        <div className="xr-panel-right">
          {stdRules.length > 0 && (
            <Section title="Standard rules" count={stdRules.length} defaultOpen>
              <div className="xr-chips">
                {stdRules.map((name) => (
                  <RuleChip key={name} name={name} text={SPECIAL_RULES[name]} />
                ))}
              </div>
            </Section>
          )}

          {hasAbilities && (
            <div className="xr-abil">
              <h3 className="xr-abil-h">Abilities</h3>
              {boughtOpts.length + boughtXenos.length > 0 ? (
                <div className="xr-abil-chips">
                  {boughtOpts.map((o) => (
                    <button key={o.id} className="xr-abil-chip" onClick={() => setAbilOpen(true)} title={o.text}>
                      {o.name} <i>{costLabel(optCost(o))}</i>
                    </button>
                  ))}
                  {boughtXenos.map((x) => (
                    <button key={x.id} className="xr-abil-chip" onClick={() => setAbilOpen(true)} title={x.text}>
                      {x.name}{x.tiers ? ` (${x.tiers[u.xenos[x.id]].label})` : ""} <i>{costLabel(xenoCost(x, u.xenos[x.id]))}</i>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="xr-abil-empty">None yet. Tap Buy abilities above.</p>
              )}
            </div>
          )}

          {u.isCmd && (
            <Section title="Command" defaultOpen>
              <div className="xr-cmd-tables">
                {Object.entries(COMMANDER_TABLES).map(([key, ct]) => (
                  <button key={key} className={`xr-tier ${tbl === key ? "on" : ""}`} onClick={() => dispatch({ type: "table", key: u.key, tbl: key })}>
                    {ct.label}
                  </button>
                ))}
              </div>
              <p className="xr-cmd-blurb">{COMMANDER_TABLES[tbl].blurb}</p>
              <button className="xr-btn small" onClick={() => dispatch({ type: "roll", key: u.key })}>
                <Dice size={18} /> {trait ? "Reroll trait" : "Roll a trait"}
              </button>
              {trait && (
                <div className="xr-trait">
                  <div className="xr-trait-name">{trait.name}</div>
                  <p className="xr-trait-rule">{trait.rule}</p>
                </div>
              )}
            </Section>
          )}
        </div>
      </div>

      {abilOpen && <AbilitiesModal u={u} dispatch={dispatch} onClose={() => setAbilOpen(false)} />}
    </section>
  );
}

/* buy-abilities modal: abilities in tabs by type (progressive disclosure) */
function AbilitiesModal({ u, dispatch, onClose }) {
  const t = UNIT_BY_ID[u.typeId];
  const topOpts = t.options.filter((o) => !o.requires);
  const subsOf = (pid) => t.options.filter((o) => o.requires === pid);
  const elig = useMemo(() => eligibleXenos(t), [t]);
  const tabs = [];
  if (topOpts.length) tabs.push({ id: "load", label: "Loadout", n: topOpts.filter((o) => u.options[o.id]).length });
  if (elig.length) tabs.push({ id: "xeno", label: "Xeno rules", n: Object.keys(u.xenos).length });
  const [tab, setTab] = useState(tabs[0] ? tabs[0].id : "load");
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const bought = t.options.filter((o) => u.options[o.id]).length + Object.keys(u.xenos).length;
  return (
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
          {tab === "xeno" && elig.map((x) => {
            const sel = x.id in u.xenos;
            const reqMet = xenoReqMet(x, u);
            const disabled = !sel && !reqMet;
            const val = u.xenos[x.id];
            return (
              <OptionRow key={x.id} active={sel} disabled={disabled} name={x.name} cost={xenoCost(x, val)}
                text={disabled && x.requiresXeno ? `Requires the ${XENO_BY_ID[x.requiresXeno].name} xeno rule. ${x.text}` : x.text}
                onToggle={() => dispatch({ type: "xeno", key: u.key, xid: x.id })}>
                {sel && x.tiers && (
                  <div className="xr-tiers">
                    {x.tiers.map((tier, i) => (
                      <button key={i} className={`xr-tier ${val === i ? "on" : ""}`}
                        onClick={() => dispatch({ type: "tier", key: u.key, xid: x.id, i })}>
                        {tier.label} <i>{costLabel(tier.cost)}</i>
                      </button>
                    ))}
                  </div>
                )}
              </OptionRow>
            );
          })}
        </div>
        <div className="xr-modal-foot">
          <span className="xr-modal-count">{bought} bought</span>
          <button className="xr-btn primary" onClick={onClose}><Check size={17} /> Done</button>
        </div>
      </div>
    </div>
  );
}

function CatalogCard({ t, onAdd }) {
  return (
    <button className={`xr-cat-card cat-${catOf(t)}`} onClick={() => onAdd(t.id)}>
      <span className="xr-cat-stamp"><Plus size={16} /><b>{t.base}</b><i>pts</i></span>
      <span className="xr-cat-main">
        <span className="xr-cat-name">{t.name}</span>
        <span className="xr-cat-role">{t.role}</span>
        <span className="xr-cat-ribbon">
          <span>Atk <em>{t.prof.atk}</em></span>
          <span>Def <em>{t.prof.def}</em></span>
          <span>Sho <em>{splitRange(t.prof.sho).main}</em></span>
          <span>Arm <em>{t.prof.arm}</em></span>
          <span>SP <em>{t.sp}</em></span>
        </span>
      </span>
    </button>
  );
}

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
      <div className="xr-modal xr-modal-tall" role="dialog" aria-modal="true" aria-label="Add unit" onClick={(e) => e.stopPropagation()}>
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

function Builder({ list, selectedKey, dispatch, updateList }) {
  const { roster, budget } = list;
  const [adding, setAdding] = useState(false);
  const [issuesOpen, setIssuesOpen] = useState(false);
  const { issues, used, count } = useMemo(() => validate(roster, budget), [roster, budget]);
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
          <input className="xr-detname" value={list.name} placeholder="Name your detachment"
            onChange={(e) => updateList({ name: e.target.value })} spellCheck={false} />
          <div className="xr-actions">
            <button className="xr-btn small" onClick={copyList} title="Copy the roster to the clipboard as text"><CopyIc size={17} /> Copy</button>
            <button className="xr-btn small" onClick={() => nav("#/print")} title="Open the print sheet"><Printer size={17} /> Print</button>
          </div>
        </div>
        <div className="xr-mast-row2">
          <div className="xr-budget" role="group" aria-label="Points budget">
            <span className="xr-budget-l">Budget</span>
            {BUDGET_PRESETS.map((b) => (
              <button key={b} className={`xr-budget-b ${budget === b ? "on" : ""}`} title={`${b}-point game`} onClick={() => updateList({ budget: b })}>{b}</button>
            ))}
            <input className="xr-budget-custom" type="number" min="1" max="999" value={budget} aria-label="Custom points value"
              title="Set any points value for your game size"
              onChange={(e) => { const v = parseInt(e.target.value, 10); updateList({ budget: v > 0 ? Math.min(999, v) : 1 }); }} />
          </div>
          <div className={`xr-muster ${over ? "over" : pct >= 90 ? "near" : ""}`}>
            <span className="xr-muster-read"><b>{used}</b><span>/{budget} pts</span></span>
            <span className="xr-muster-track"><span className="xr-muster-fill" style={{ width: `${pct}%` }} /></span>
          </div>
          <div className="xr-statuswrap">
            <button className={`xr-status ${status}`} onClick={() => setIssuesOpen((o) => !o)}
              aria-expanded={issues.length ? issuesOpen : undefined} title={issues.length ? "See the issues" : undefined}>
              {status === "ok" && <><Check size={16} /> {count} {count === 1 ? "unit" : "units"}, legal</>}
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
            <button className="xr-home-empty" onClick={() => setAdding(true)}>
              <Alien size={40} />
              <span>Add your first unit</span>
            </button>
          ) : (
            <>
              <div className="xr-ulist-rows">
                {roster.map((u, i) => (
                  <UnitRow key={u.key} u={u} i={i} selected={u.key === selectedKey}
                    onSelect={() => nav(u.key === selectedKey ? "#/build" : `#/build/${u.key}`)} />
                ))}
              </div>
              <button className="xr-add-sticky" onClick={() => setAdding(true)}><Plus size={20} /> Add unit</button>
            </>
          )}
        </main>
        <div className="xr-detail">
          {sel ? (
            <UnitPanel u={sel} index={selIdx} dispatch={dispatch} onClose={() => nav("#/build")} />
          ) : (
            roster.length > 0 && <div className="xr-detail-hint"><Alien size={36} /><span>Select a unit</span></div>
          )}
        </div>
      </div>

      {adding && <AddUnitModal onAdd={(id) => { dispatch({ type: "add", typeId: id }); setAdding(false); }} onClose={() => setAdding(false)} />}
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
  const { used, count } = useMemo(() => validate(roster, budget), [roster, budget]);
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
          {[["stats", "Stat table"], ["upgrades", "Upgrades and xeno rules"], ["glossary", "Standard rules glossary"], ["traits", "Commander trait"]].map(([k, lab]) => (
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

        {opts.stats && (
          <table className="xr-sheet-table">
            <thead>
              <tr>
                <th className="l">Unit</th><th className="l">Type</th>
                <th colSpan={4}>Order 2d6 (A / M / S / C)</th>
                <th colSpan={5}>Profile (A / D / S / Arm / Mv)</th>
                <th>SP</th><th>Pts</th>
              </tr>
            </thead>
            <tbody>
              {roster.map((u, i) => {
                const t = UNIT_BY_ID[u.typeId];
                const a = t.act, p = t.prof;
                const av = (k) => parseAct(t.noAttack && k === "atk" ? "n/a" : a[k]);
                return (
                  <tr key={u.key}>
                    <td className="l name">{u.isCmd && <Crown size={13} className="xr-sheet-crown" />}{unitDisplayName(u, i)}</td>
                    <td className="l type">{t.name}</td>
                    {ACT_KEYS.map(({ key }) => {
                      const c = av(key);
                      return <td key={key}>{c.val === "n/a" ? "-" : c.val}{c.free ? "*" : ""}</td>;
                    })}
                    <td>{p.atk === "n/a" ? "-" : p.atk}</td>
                    <td>{p.def}</td>
                    <td>{splitRange(p.sho).main === "n/a" ? "-" : p.sho}</td>
                    <td>{p.arm}</td>
                    <td>{p.mov}</td>
                    <td>{unitSP(u)}</td>
                    <td className="pts">{unitPoints(u)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {opts.stats && <p className="xr-sheet-note">* free action. Order is the 2d6 activation target; Profile is how the action resolves.</p>}

        {opts.upgrades && roster.some((u) => Object.keys(u.options).length || Object.keys(u.xenos).length || (opts.traits && u.isCmd && typeof u.traitIndex === "number")) && (
          <div className="xr-sheet-units">
            {roster.map((u, i) => {
              const t = UNIT_BY_ID[u.typeId];
              const os = t.options.filter((o) => u.options[o.id]);
              const xs = XENO_RULES.filter((x) => x.id in u.xenos);
              const trait = opts.traits && u.isCmd && typeof u.traitIndex === "number" ? COMMANDER_TABLES[u.traitTable || "aggressive"].traits[u.traitIndex] : null;
              if (!os.length && !xs.length && !trait) return null;
              return (
                <div className="xr-sheet-unit" key={u.key}>
                  <h3>{unitDisplayName(u, i)} <em>({t.name})</em></h3>
                  {os.map((o) => <p key={o.id}><b>{o.name}</b> ({costLabel(optCost(o))}): {o.text}</p>)}
                  {xs.map((x) => <p key={x.id}><b>{x.name}</b> ({costLabel(xenoCost(x, u.xenos[x.id]))}): {x.text}</p>)}
                  {trait && <p><b>Commander trait, {trait.name}:</b> {trait.rule}</p>}
                </div>
              );
            })}
          </div>
        )}

        {opts.glossary && glossary.length > 0 && (
          <div className="xr-sheet-gloss">
            <h2>Standard rules</h2>
            {glossary.map((g) => <p key={g.name}><b>{g.name}:</b> {g.text}</p>)}
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
                      <Die k={key}>{c ? c.val : "-"}</Die>
                      <i>{label}{c && c.free ? " (free)" : ""}</i>
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
              {dead && <div className="xr-pcard-dead"><Skull size={26} /> Destroyed</div>}
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

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
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
        setRoster((r) => [...r, { key, typeId: a.typeId, name: "", isCmd: r.length === 0, traitTable: "aggressive", traitIndex: undefined, options: {}, xenos: {} }]);
        nav(`#/build/${key}`);
        break;
      }
      case "del": setRoster((r) => r.filter((u) => u.key !== a.key)); break;
      case "dup":
        setRoster((r) => {
          const i = r.findIndex((u) => u.key === a.key);
          if (i < 0) return r;
          const copy = { ...r[i], key: uid(), isCmd: false, options: { ...r[i].options }, xenos: { ...r[i].xenos } };
          const next = [...r]; next.splice(i + 1, 0, copy); return next;
        });
        break;
      case "name": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, name: a.name } : u))); break;
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
          if (a.xid in xenos) delete xenos[a.xid];
          else xenos[a.xid] = rule.tiers ? 0 : true;
          return sanitize({ ...u, xenos });
        }));
        break;
      case "tier": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, xenos: { ...u.xenos, [a.xid]: a.i } } : u))); break;
      case "table": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, traitTable: a.tbl } : u))); break;
      case "roll": setRoster((r) => r.map((u) => (u.key === a.key ? { ...u, traitIndex: Math.floor(Math.random() * 6) } : u))); break;
      default: break;
    }
  }, [setRoster]);

  const createList = (opts = {}) => {
    const id = uid();
    setLists((ls) => ({ ...ls, [id]: { id, name: opts.name || "", budget: opts.budget || 24, description: opts.description || "", roster: [], updated: Date.now() } }));
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
      <Dashboard lists={lists} onOpen={openList} onCreate={createList} onDup={dupList} onDel={delList} />
    </div>;
  }

  return (
    <div className="xr-app">
      <style>{CSS}</style>
      {route.view === "home" && <Dashboard lists={lists} onOpen={openList} onCreate={createList} onDup={dupList} onDel={delList} />}
      {route.view === "build" && <Builder list={current} selectedKey={route.unitKey} dispatch={dispatch} updateList={updateList} />}
      {route.view === "print" && <PrintView list={current} />}
      {route.view === "play" && <PlayView list={current} />}
    </div>
  );
}

/* ================================================================== *
 * CSS (Field Almanac: cream paper, bottle-green ink, coral stamps)
 * ================================================================== */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
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
  --display:'Zilla Slab',Georgia,serif;
  --body:'Source Serif 4',Georgia,serif;
  --title:'Hyper Scrypt','Zilla Slab',Georgia,serif;
  --mono:'Sligoil Micro',ui-monospace,Consolas,monospace;
  --r:12px;
  background:var(--paper);color:var(--ink);font-family:var(--body);
  font-size:17px;line-height:1.55;min-height:100vh;
}
.xr-app *{box-sizing:border-box;margin:0;}
.xr-app button{font-family:inherit;font-size:inherit;cursor:pointer;color:inherit;background:none;border:none;}
.xr-app :focus-visible{outline:3px solid var(--iris);outline-offset:2px;border-radius:4px;}
@media (prefers-reduced-motion: reduce){.xr-app *{animation:none !important;transition:none !important;}}

/* shared controls */
.xr-btn{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:16px;color:var(--ink);border:2px solid var(--ink);background:var(--paper-2);padding:10px 16px;border-radius:10px;min-height:46px;transition:.13s;}
.xr-btn:hover{background:var(--paper-3);}
.xr-btn:active{transform:scale(.97);}
.xr-btn.primary{background:var(--ink);color:var(--cream);}
.xr-btn.primary:hover{background:var(--iris);border-color:var(--iris);}
.xr-btn.danger:hover{background:var(--coral);border-color:var(--coral-ink);color:#fff;}
.xr-btn.small{min-height:42px;padding:8px 13px;font-size:15.5px;}
.xr-btn.gold{background:var(--brass);border-color:var(--brass);color:var(--cream);}
.xr-btn:disabled{opacity:.45;cursor:not-allowed;}
.xr-iconbtn{width:46px;height:46px;flex:none;display:flex;align-items:center;justify-content:center;border:2px solid var(--ink);border-radius:10px;color:var(--ink);background:var(--paper-2);transition:.12s;}
.xr-iconbtn:hover{background:var(--paper-3);}
.xr-iconbtn:active{transform:scale(.95);}

/* die chips */
.xr-die{display:inline-flex;align-items:center;justify-content:center;min-width:44px;padding:3px 9px;border-radius:9px;border:1.5px solid var(--ink-30);background:var(--paper-2);font-family:var(--mono);font-weight:700;font-size:18px;color:var(--ink);font-variant-numeric:tabular-nums;}
.xr-die.k-atk{background:#F4604C22;border-color:var(--coral-ink);}
.xr-die.k-mov{background:#5C7A5222;border-color:var(--sage);}
.xr-die.k-sho{background:#6A4A8C22;border-color:var(--iris);}
.xr-die.k-cou{background:#8A6A1F22;border-color:var(--brass);}
.xr-free{font-style:italic;font-weight:600;font-size:14.5px;color:var(--coral-ink);margin-left:5px;}
.xr-dash{color:var(--ink-2);opacity:.45;}
.xr-rng{font-family:var(--mono);font-style:normal;font-size:15px;color:var(--ink-2);margin-left:5px;}

/* stat table */
.xr-stt{padding:4px 0 0;}
.xr-stt-head{display:grid;grid-template-columns:168px 92px 104px;gap:6px 10px;padding:0 0 7px;border-bottom:2px solid var(--ink-30);font-family:var(--display);font-weight:600;font-variant:small-caps;letter-spacing:.03em;font-size:15.5px;color:var(--ink-2);}
.xr-stt-head em{font-style:italic;font-variant:normal;font-size:13.5px;}
.xr-stt-row{display:grid;grid-template-columns:168px 92px 104px;gap:6px 10px;align-items:center;padding:8px 0;border-bottom:1px solid var(--ink-18);}
.xr-stt-row:last-child{border-bottom:none;}
.xr-stt-stat{display:flex;align-items:center;gap:9px;font-family:var(--display);font-weight:600;font-size:16.5px;}
.xr-stt-ic{color:var(--ink-2);flex:none;}
.xr-stt-cell b{font-family:var(--mono);font-weight:700;font-size:20px;font-variant-numeric:tabular-nums;}

/* masthead + wordmark */
.xr-word{font-family:var(--title);font-weight:400;font-size:clamp(30px,4.6vw,46px);letter-spacing:.02em;line-height:1.02;color:var(--ink);}
.xr-sub{font-style:italic;font-size:clamp(16px,1.5vw,18px);color:var(--coral-ink);}

/* ---------- dashboard ---------- */
.xr-home{display:flex;flex-direction:column;min-height:100vh;}
.xr-home-mast{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;padding:22px clamp(16px,4vw,44px) 16px;border-bottom:3px solid var(--ink);}
.xr-home-body{flex:1;width:100%;max-width:1160px;margin-inline:auto;padding:26px clamp(16px,4vw,44px) 60px;}
.xr-home-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:20px;}
.xr-home-h{font-family:var(--display);font-weight:700;font-size:26px;}
.xr-home-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;}
.xr-list-card{position:relative;border:3px solid var(--ink);border-radius:var(--r);background:var(--paper-2);transition:.14s;display:flex;flex-direction:column;}
.xr-list-card:hover{box-shadow:0 3px 10px rgba(31,61,46,.14);}
.xr-list-open{flex:1;display:flex;flex-direction:column;align-items:flex-start;gap:8px;text-align:left;padding:16px 16px 12px;}
.xr-list-name{font-family:var(--display);font-weight:700;font-size:21px;line-height:1.15;}
.xr-list-meta{font-family:var(--mono);font-size:16px;color:var(--ink-2);}
.xr-list-meta b{color:var(--ink);}
.xr-list-status{font-size:15px;font-weight:600;padding:3px 10px;border-radius:8px;border:1.5px solid;}
.xr-list-status.ok{color:var(--sage);border-color:var(--sage);}
.xr-list-status.err{color:var(--coral-ink);border-color:var(--coral-ink);}
.xr-list-status.empty{color:var(--ink-2);border-color:var(--ink-30);}
.xr-list-tools{display:flex;gap:8px;padding:0 16px 14px;}
.xr-list-tools button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border:2px solid var(--ink-30);border-radius:9px;color:var(--ink-2);transition:.12s;}
.xr-list-tools button:hover{border-color:var(--ink);color:var(--ink);background:var(--paper-3);}
.xr-list-tools button:last-child:hover{background:var(--coral);border-color:var(--coral-ink);color:#fff;}
.xr-home-empty{display:flex;flex-direction:column;align-items:center;gap:14px;width:100%;border:3px dashed var(--ink-30);border-radius:var(--r);padding:56px 24px;color:var(--ink-2);font-family:var(--display);font-weight:600;font-size:20px;transition:.14s;}
.xr-home-empty:hover{border-color:var(--ink);color:var(--ink);background:var(--paper-2);}

/* ---------- builder ---------- */
/* ---------- nav rail (view controls, grouped) ---------- */
.xr-rail{position:fixed;left:0;top:0;bottom:0;width:76px;z-index:40;background:var(--ink);display:flex;flex-direction:column;align-items:center;padding:14px 0;gap:16px;}
.xr-rail-logo{width:44px;height:44px;display:flex;align-items:center;justify-content:center;color:#E8C860;}
.xr-rail-nav{display:flex;flex-direction:column;gap:6px;width:100%;align-items:center;}
.xr-rail .xr-rail-btn{width:62px;display:flex;flex-direction:column;align-items:center;gap:4px;padding:9px 2px;border-radius:11px;color:var(--paper-3);font-family:var(--display);font-weight:600;font-size:12.5px;letter-spacing:.02em;transition:.12s;}
.xr-rail .xr-rail-btn:hover{background:rgba(246,239,221,.12);color:var(--cream);}
.xr-rail .xr-rail-btn.on{background:var(--paper);color:var(--ink);}

/* ---------- collapsible section (progressive disclosure) ---------- */
.xr-sec{border-top:2px solid var(--ink-30);}
.xr-sec-h{display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:14px 2px;font-family:var(--display);font-weight:700;font-variant:small-caps;letter-spacing:.03em;font-size:19px;color:var(--ink);min-height:52px;}
.xr-sec-title{flex:1;}
.xr-sec-count{font-family:var(--mono);font-style:normal;font-weight:700;font-size:14px;min-width:26px;height:26px;padding:0 7px;display:inline-flex;align-items:center;justify-content:center;background:var(--ink);color:var(--cream);border-radius:13px;}
.xr-sec-caret{color:var(--ink-2);transition:transform .15s;flex:none;}
.xr-sec.open .xr-sec-caret{transform:rotate(180deg);}
.xr-sec-body{padding-bottom:14px;}

/* ---------- sticky add-unit ---------- */
.xr-ulist-rows{display:flex;flex-direction:column;gap:10px;}
.xr-add-sticky{position:sticky;bottom:14px;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:10px;width:100%;font-family:var(--body);font-weight:700;font-size:18px;color:var(--cream);background:var(--ink);border:2px solid var(--ink);padding:14px;border-radius:12px;box-shadow:0 3px 12px rgba(31,61,46,.22);transition:.13s;}
.xr-add-sticky:hover{background:var(--iris);border-color:var(--iris);}
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
.xr-muster{display:flex;align-items:center;gap:12px;flex:1;min-width:200px;}
.xr-muster-read{font-family:var(--mono);font-weight:700;white-space:nowrap;font-variant-numeric:tabular-nums;}
.xr-muster-read b{font-size:24px;}
.xr-muster-read span{font-size:16px;color:var(--ink-2);}
.xr-muster-track{position:relative;flex:1;height:14px;border:2px solid var(--ink);background:var(--paper-2);border-radius:6px;overflow:hidden;}
.xr-muster-fill{display:block;height:100%;background:var(--sage);transition:width .3s;}
.xr-muster.near .xr-muster-fill{background:var(--brass);}
.xr-muster.over .xr-muster-fill{background:var(--coral);}
.xr-status{display:inline-flex;align-items:center;gap:7px;font-weight:600;font-size:16px;padding:8px 13px;border-radius:9px;border:2px solid var(--ink);}
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
.xr-issue{font-weight:600;font-size:15.5px;padding:6px 11px;border-radius:8px;border-left:4px solid;background:var(--paper-2);}
.xr-issue.err{color:var(--coral-ink);border-color:var(--coral-ink);}
.xr-issue.warn{color:var(--brass);border-color:var(--brass);}

.xr-build-body{flex:1;display:grid;grid-template-columns:minmax(320px,430px) 1fr;gap:0;align-items:start;}
.xr-ulist{display:flex;flex-direction:column;gap:10px;padding:18px clamp(12px,1.6vw,20px) 40px;}
.xr-detail{position:sticky;top:132px;align-self:start;max-height:calc(100vh - 132px);overflow-y:auto;border-left:3px solid var(--ink);min-height:320px;}
.xr-detail-hint{display:flex;flex-direction:column;align-items:center;gap:10px;padding:80px 20px;color:var(--ink-2);font-family:var(--display);font-size:19px;}

/* compact unit rows */
.xr-urow{display:flex;flex-direction:column;gap:3px;text-align:left;border:2.5px solid var(--ink);border-left-width:7px;border-radius:10px;background:var(--paper-2);padding:11px 14px;transition:.13s;}
.xr-urow:hover{background:var(--paper-3);}
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
.xr-urow-sub{font-size:15.5px;color:var(--ink-2);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.xr-urow-sub em{font-style:italic;}

/* unit panel */
.xr-panel{padding:16px clamp(14px,2vw,24px) 40px;}
.xr-panel-head{display:flex;align-items:center;gap:12px;padding-bottom:12px;border-bottom:2px solid var(--ink-30);}
.xr-panel-back{display:none;}
.xr-panel-id{flex:1;min-width:0;}
.xr-panel-name{width:100%;font-family:var(--display);font-weight:700;font-size:clamp(19px,2vw,24px);color:var(--ink);background:transparent;border:none;border-bottom:2px solid transparent;padding:0 0 2px;}
.xr-panel-name:focus{outline:none;border-bottom-color:var(--coral);}
.xr-panel-type{font-size:15.5px;color:var(--ink-2);display:inline-flex;align-items:center;gap:6px;}
.xr-tag-cmd{display:inline-flex;align-items:center;gap:4px;font-weight:700;font-size:13.5px;color:var(--cream);background:var(--brass);padding:2px 8px;border-radius:6px;}
.xr-panel-pts{font-family:var(--mono);font-weight:700;white-space:nowrap;}
.xr-panel-pts b{font-size:26px;}
.xr-panel-pts i{font-style:normal;font-size:14px;color:var(--ink-2);margin-left:3px;}
.xr-panel-tools{display:flex;gap:8px;flex-wrap:wrap;padding:12px 0;}
/* two-column panel: stats left, rules + abilities on the right */
.xr-panel-cols{display:grid;grid-template-columns:minmax(320px,380px) 1fr;gap:14px 30px;align-items:start;}
.xr-panel-right{min-width:0;}
.xr-panel-right .xr-abil{margin-top:0;}
.xr-panel-right>.xr-sec:first-child .xr-sec-h{padding-top:4px;}
@media(max-width:1100px){.xr-panel-cols{grid-template-columns:1fr;gap:0;}}
.xr-group{margin-top:18px;}
.xr-group-h{display:flex;align-items:center;gap:7px;font-family:var(--display);font-weight:700;font-variant:small-caps;letter-spacing:.03em;font-size:19px;color:var(--ink);padding-bottom:6px;border-bottom:2px solid var(--ink-30);margin-bottom:10px;}
/* abilities summary in the unit panel */
.xr-abil{margin-top:18px;border-top:2px solid var(--ink-30);padding-top:14px;}
.xr-abil-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px;}
.xr-abil-h{font-family:var(--display);font-weight:700;font-variant:small-caps;letter-spacing:.03em;font-size:19px;color:var(--ink);}
.xr-abil-chips{display:flex;flex-wrap:wrap;gap:8px;}
.xr-abil-chip{display:inline-flex;align-items:center;gap:6px;font-weight:600;font-size:15.5px;border:1.5px solid var(--ink-30);background:var(--paper-2);border-radius:9px;padding:7px 12px;min-height:40px;transition:.12s;}
.xr-abil-chip:hover{border-color:var(--ink);}
.xr-abil-chip i{font-style:normal;font-family:var(--mono);font-weight:700;color:var(--coral-ink);}
.xr-abil-empty{font-size:16px;font-style:italic;color:var(--ink-2);}
/* abilities modal: type groups + footer */
.xr-abil-group{margin-bottom:18px;}
.xr-abil-group-h{position:sticky;top:-16px;background:var(--paper);z-index:1;font-family:var(--display);font-weight:700;font-variant:small-caps;letter-spacing:.03em;font-size:20px;color:var(--ink);padding:6px 0 8px;border-bottom:2px solid var(--ink-30);margin-bottom:6px;}
.xr-modal-foot{padding:12px 20px;border-top:2px solid var(--ink-30);display:flex;justify-content:flex-end;}
/* custom points value */
.xr-budget-custom{width:66px;min-height:44px;font-family:var(--mono);font-weight:700;font-size:16px;text-align:center;color:var(--ink);background:var(--paper-2);border:2px dashed var(--ink-30);border-radius:9px;padding:6px 4px;margin-left:6px;}
.xr-budget-custom:focus{outline:none;border-style:solid;border-color:var(--coral);}
/* modal form fields */
.xr-modal-narrow{width:min(520px,100%);}
.xr-field{display:block;margin-bottom:18px;}
.xr-field-l{display:block;font-family:var(--display);font-weight:600;font-variant:small-caps;letter-spacing:.03em;font-size:16px;color:var(--ink-2);margin-bottom:6px;}
.xr-field-l em{font-style:italic;font-variant:normal;font-size:13.5px;margin-left:6px;}
.xr-field-in{width:100%;font-family:var(--body);font-size:17px;color:var(--ink);background:var(--paper-2);border:2px solid var(--ink-30);border-radius:10px;padding:11px 13px;min-height:48px;}
.xr-field-in:focus{outline:none;border-color:var(--coral);}
.xr-field-area{resize:vertical;min-height:76px;line-height:1.5;}
.xr-chips{display:flex;flex-direction:column;gap:6px;}
.xr-chipwrap{display:flex;flex-direction:column;}
.xr-chip{align-self:flex-start;font-weight:600;font-size:15.5px;border:1.5px solid var(--ink-30);border-radius:8px;padding:6px 12px;min-height:38px;transition:.12s;}
.xr-chip:hover{border-color:var(--ink);background:var(--paper-2);}
.xr-chipwrap.open .xr-chip{background:var(--ink);color:var(--cream);border-color:var(--ink);}
.xr-chip-text{font-size:16px;color:var(--ink-2);padding:8px 2px 4px;}

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
.xr-row-info{flex:none;width:38px;border:none;border-radius:8px;color:var(--ink-2);font-weight:700;font-size:17px;transition:.12s;}
.xr-row-info:hover{background:var(--paper-2);color:var(--ink);}
.xr-row-text{font-size:16px;color:var(--ink-2);padding:2px 4px 8px 60px;}
.xr-subs{margin-left:44px;border-left:2px solid var(--ink-18);padding-left:8px;}
.xr-tiers{display:flex;gap:7px;flex-wrap:wrap;padding:2px 4px 10px 60px;}
.xr-tier{font-weight:600;font-size:15.5px;border:2px solid var(--ink-30);border-radius:8px;padding:7px 12px;min-height:42px;transition:.12s;}
.xr-tier:hover{border-color:var(--ink);}
.xr-tier.on{background:var(--ink);color:var(--cream);border-color:var(--ink);}
.xr-tier i{font-style:normal;font-family:var(--mono);}
.xr-cmd-tables{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:8px;}
.xr-cmd-blurb{font-size:16px;font-style:italic;color:var(--ink-2);margin-bottom:10px;}
.xr-trait{margin-top:10px;border:2px solid var(--brass);border-radius:10px;padding:10px 14px;background:var(--paper-2);}
.xr-trait-name{font-family:var(--display);font-weight:700;font-size:17.5px;color:var(--brass);}
.xr-trait-rule{font-size:16px;color:var(--ink-2);}

/* add-unit modal */
.xr-modal-backdrop{position:fixed;inset:0;background:rgba(31,61,46,.42);display:flex;align-items:center;justify-content:center;padding:20px;z-index:90;animation:xr-fade .18s ease;}
.xr-modal{width:min(880px,100%);max-height:88vh;background:var(--paper);border:3px solid var(--ink);border-radius:16px;box-shadow:0 12px 40px rgba(31,61,46,.28);display:flex;flex-direction:column;overflow:hidden;animation:xr-pop .26s cubic-bezier(.2,.8,.2,1);}
/* fixed height so switching tabs does not resize/move the window */
.xr-modal.xr-modal-tall{height:min(680px,86vh);}
.xr-modal-head{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:3px solid var(--ink);}
.xr-modal-title{display:flex;align-items:center;gap:9px;font-family:var(--display);font-weight:700;font-size:24px;}
.xr-modal-tabs{display:flex;gap:8px;padding:12px 20px;border-bottom:2px solid var(--ink-18);flex-wrap:wrap;}
.xr-modal-tab{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:600;font-size:16.5px;color:var(--ink-2);border:2px solid var(--ink-30);background:var(--paper);padding:8px 15px;border-radius:9px;min-height:44px;transition:.12s;}
.xr-modal-tab:hover{border-color:var(--ink);color:var(--ink);}
.xr-modal-tab.on{color:var(--cream);background:var(--ink);border-color:var(--ink);}
.xr-tab-n{font-style:normal;font-family:var(--mono);font-weight:700;font-size:13px;background:var(--cream);color:var(--ink);border-radius:10px;min-width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;padding:0 5px;}
.xr-modal-count{margin-right:auto;font-family:var(--mono);font-size:15px;color:var(--ink-2);}
.xr-modal-tab.cat-inf.on{background:var(--sage);border-color:var(--sage);}
.xr-modal-tab.cat-xeno.on{background:var(--iris);border-color:var(--iris);}
.xr-modal-tab.cat-veh.on{background:var(--rust);border-color:var(--rust);}
.xr-modal-body{overflow-y:auto;padding:16px 20px 24px;}
.xr-pick-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:12px;}
.xr-cat-card{display:flex;gap:12px;text-align:left;border:2.5px solid var(--ink);background:var(--paper-2);padding:13px;border-radius:var(--r);transition:.13s;align-items:flex-start;}
.xr-cat-card:hover{background:var(--paper-3);box-shadow:0 3px 10px rgba(31,61,46,.14);}
.xr-cat-card:active{transform:scale(.98);}
.xr-cat-stamp{flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;width:58px;height:58px;border-radius:50%;background:var(--coral);color:var(--ink);border:2px solid var(--ink);}
.xr-cat-stamp b{font-family:var(--mono);font-weight:700;font-size:19px;line-height:1;}
.xr-cat-stamp i{font-style:normal;font-size:11.5px;font-weight:700;}
.xr-cat-name{display:block;font-family:var(--display);font-weight:700;font-size:19px;line-height:1.15;}
.xr-cat-role{display:block;font-style:italic;font-size:15.5px;line-height:1.4;color:var(--ink-2);margin:3px 0 7px;}
.xr-cat-ribbon{display:flex;gap:7px 13px;flex-wrap:wrap;}
.xr-cat-ribbon span{font-weight:600;font-size:15px;color:var(--ink-2);}
.xr-cat-ribbon em{font-style:normal;font-family:var(--mono);color:var(--ink);font-weight:700;}

/* ---------- print ---------- */
.xr-printview{min-height:100vh;background:var(--paper-3);padding-left:76px;}
.xr-print-chrome{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:14px clamp(14px,3vw,30px);border-bottom:3px solid var(--ink);background:var(--paper);position:sticky;top:0;z-index:20;}
.xr-print-h{font-family:var(--display);font-weight:700;font-size:24px;margin-right:8px;}
.xr-print-opts{display:flex;align-items:center;gap:8px 14px;flex-wrap:wrap;}
.xr-print-optlabel{font-family:var(--display);font-weight:600;font-variant:small-caps;font-size:16px;color:var(--ink-2);}
.xr-print-check{display:inline-flex;align-items:center;gap:7px;font-weight:600;font-size:15.5px;min-height:44px;cursor:pointer;}
.xr-print-check input{width:20px;height:20px;accent-color:var(--ink);cursor:pointer;}
.xr-sheet{max-width:880px;margin:26px auto 60px;background:#fff;color:#1a1a1a;padding:34px 38px;box-shadow:0 4px 22px rgba(31,61,46,.2);}
.xr-sheet-head{display:flex;align-items:baseline;justify-content:space-between;gap:16px;flex-wrap:wrap;border-bottom:3px solid #1a1a1a;padding-bottom:10px;margin-bottom:16px;}
.xr-sheet-title{font-family:var(--display);font-weight:700;font-size:29px;}
.xr-sheet-meta{font-family:var(--mono);font-size:16px;}
.xr-sheet-table{width:100%;border-collapse:collapse;font-size:14.5px;}
.xr-sheet-table th{font-family:var(--display);font-weight:700;font-size:13.5px;text-align:center;border-bottom:2px solid #1a1a1a;padding:5px 6px;}
.xr-sheet-table th.l,.xr-sheet-table td.l{text-align:left;}
.xr-sheet-table td{text-align:center;padding:6px;border-bottom:1px solid #bbb;font-family:var(--mono);font-size:14.5px;}
.xr-sheet-table td.name{font-family:var(--body);font-weight:700;font-size:15px;}
.xr-sheet-table td.type{font-family:var(--body);font-style:italic;}
.xr-sheet-table td.pts{font-weight:700;}
.xr-sheet-crown{vertical-align:-2px;margin-right:4px;}
.xr-sheet-note{font-size:13.5px;font-style:italic;color:#444;margin-top:7px;}
.xr-sheet-units{margin-top:20px;column-count:2;column-gap:28px;}
.xr-sheet-unit{break-inside:avoid;margin-bottom:14px;}
.xr-sheet-unit h3{font-family:var(--display);font-size:17px;border-bottom:1.5px solid #1a1a1a;padding-bottom:2px;margin-bottom:5px;}
.xr-sheet-unit h3 em{font-weight:400;font-style:italic;font-size:14.5px;}
.xr-sheet-unit p{font-size:13.5px;line-height:1.45;margin-bottom:5px;}
.xr-sheet-gloss{margin-top:20px;border-top:2px solid #1a1a1a;padding-top:10px;}
.xr-sheet-gloss h2{font-family:var(--display);font-size:19px;margin-bottom:8px;}
.xr-sheet-gloss p{font-size:13.5px;line-height:1.45;margin-bottom:6px;}
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
.xr-pcard{position:relative;border:3px solid var(--ink);border-left-width:8px;border-radius:var(--r);background:var(--paper-2);padding:14px 16px;display:flex;flex-direction:column;gap:12px;transition:.15s;}
.xr-pcard.cat-inf{border-left-color:var(--sage);}
.xr-pcard.cat-xeno{border-left-color:var(--iris);}
.xr-pcard.cat-veh{border-left-color:var(--rust);}
.xr-pcard.acted{opacity:.62;}
.xr-pcard.sup{background:#F4604C1E;}
.xr-pcard-head{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;}
.xr-pcard-crown{color:var(--brass);align-self:center;}
.xr-pcard-name{font-family:var(--display);font-weight:700;font-size:19.5px;flex:1;}
.xr-pcard-type{font-size:15px;font-style:italic;color:var(--ink-2);}
.xr-pcard-dice{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;}
.xr-pcard-die{display:flex;flex-direction:column;align-items:center;gap:3px;}
.xr-pcard-die .xr-die{min-width:52px;font-size:21px;padding:6px 10px;}
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
.game-info-footer a{color:var(--iris);text-decoration:none;font-weight:600;}
.game-info-footer a:hover{text-decoration:underline;}
.gif-builder{margin-left:auto;}
.game-info-footer a.warlore-mark{font-family:'Terminal Grotesque Open','Zilla Slab',monospace;font-size:17px;letter-spacing:.03em;color:#FFCC00;background:#000;padding:1px 8px;text-decoration:none;font-weight:400;transition:color .12s,background .12s;}
.game-info-footer a.warlore-mark:hover{color:#000;background:#FFCC00;}
.warlore-mark .wl-lore{font:inherit;}
@media(max-width:600px){.gif-sep{display:none;}.gif-builder{margin-left:0;}}

/* ---------- animations ---------- */
@keyframes xr-fade{from{opacity:0;}to{opacity:1;}}
@keyframes xr-pop{from{opacity:0;transform:scale(1.04) translateY(6px);}to{opacity:1;transform:none;}}

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
  .xr-build,.xr-printview,.xr-play{padding-left:0;padding-bottom:64px;}
}

/* ---------- @media print ---------- */
@media print{
  .xr-app{background:#fff;}
  .xr-print-chrome,.game-info-footer{display:none !important;}
  .xr-printview{background:#fff;}
  .xr-sheet{box-shadow:none;margin:0;max-width:none;padding:0;}
  .xr-sheet-table th,.xr-sheet-table td{padding:4px 5px;}
  @page{margin:14mm;}
}
`;
