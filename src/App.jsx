import React, { useState, useMemo, useEffect } from "react";
/* Icons pulled from Iconify and bundled offline (rendered as inline SVG, so no
   network request and no runtime): game-icons for thematic glyphs, tabler for controls. */
/* Stat and category glyphs use sci-fi versions from game-icons. The alias names
   below (Swords, Crosshair, Flame, etc.) are kept so the rest of the file is
   untouched; only the underlying icon each alias points at changed. */
import icEnergySword from "@iconify-icons/game-icons/energy-sword";
import icRun from "@iconify-icons/game-icons/run";
import icLaserGun from "@iconify-icons/game-icons/laser-gun";
import icPowerLightning from "@iconify-icons/game-icons/power-lightning";
import icSaberSlash from "@iconify-icons/game-icons/saber-slash";
import icEnergyShield from "@iconify-icons/game-icons/energy-shield";
import icLaserPrecision from "@iconify-icons/game-icons/laser-precision";
import icShoulderArmor from "@iconify-icons/game-icons/shoulder-armor";
import icPathDistance from "@iconify-icons/game-icons/path-distance";
import icHeartBattery from "@iconify-icons/game-icons/heart-battery";
import icCrown from "@iconify-icons/game-icons/crown";
import icSpaceSuit from "@iconify-icons/game-icons/space-suit";
import icAlienSkull from "@iconify-icons/game-icons/alien-skull";
import icBattleTank from "@iconify-icons/game-icons/battle-tank";
import icDice from "@iconify-icons/game-icons/rolling-dices";
import icPlus from "@iconify-icons/tabler/plus";
import icCopy from "@iconify-icons/tabler/copy";
import icTrash from "@iconify-icons/tabler/trash";
import icCheck from "@iconify-icons/tabler/check";
import icAlert from "@iconify-icons/tabler/alert-triangle";
import icPrinter from "@iconify-icons/tabler/printer";
import icRotate from "@iconify-icons/tabler/rotate";
import icX from "@iconify-icons/tabler/x";
import icChevron from "@iconify-icons/tabler/chevron-down";

const mk = (data) => function Ic({ size, width, height, className, strokeWidth, ...rest }) {
  const s = size || width || height || 18;
  return (
    <svg
      className={className}
      width={s}
      height={s}
      viewBox={`0 0 ${data.width || 24} ${data.height || 24}`}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: data.body }}
      {...rest}
    />
  );
};
/* Custom inline icons recreated from the user's supplied art, for Shoot (targeting
   reticle), Strength (squad), and Move (double chevron). Authored as SVG so they
   recolor via currentColor and scale with the rest of the icon set. */
const icShoot = { width: 24, height: 24, body: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5l7 7-7 7-7-7z"/><path d="M4 7.5V4h3.5M16.5 4H20v3.5M20 16.5V20h-3.5M7.5 20H4v-3.5"/></g><path d="M12 9.2l2.8 2.8-2.8 2.8-2.8-2.8z" fill="currentColor"/><g fill="currentColor"><circle cx="12" cy="2.6" r="1"/><circle cx="21.4" cy="12" r="1"/><circle cx="12" cy="21.4" r="1"/><circle cx="2.6" cy="12" r="1"/></g>` };
const icStrength = { width: 24, height: 24, body: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8" r="2.6"/><circle cx="15.5" cy="8" r="2.6"/><path d="M3.5 19v-.4a4.6 4.6 0 0 1 7.7-3.4"/><path d="M12.8 15.2a4.6 4.6 0 0 1 7.7 3.4v.4"/></g>` };
const icMove = { width: 24, height: 24, body: `<path d="M5 5l7 7-7 7M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>` };
const Plus = mk(icPlus), Crown = mk(icCrown), Copy = mk(icCopy), Trash2 = mk(icTrash),
  ChevronDown = mk(icChevron), X = mk(icX), Dices = mk(icDice), AlertTriangle = mk(icAlert),
  Check = mk(icCheck), Printer = mk(icPrinter), RotateCcw = mk(icRotate),
  Swords = mk(icEnergySword), Footprints = mk(icMove), Crosshair = mk(icShoot),
  Flame = mk(icPowerLightning), Sword = mk(icSaberSlash), Shield = mk(icEnergyShield), Target = mk(icShoot),
  ShieldHalf = mk(icShoulderArmor), Ruler = mk(icMove), Heart = mk(icStrength),
  Skull = mk(icAlienSkull), Truck = mk(icBattleTank), Users = mk(icSpaceSuit);
import {
  INFANTRY, VEHICLE, UNIT_TYPES, XENO_RULES, SPECIAL_RULES,
  COMMANDER_TABLES, BUDGET_PRESETS, UNIT_BY_ID, XENO_BY_ID,
} from "./data.js";

/* ================================================================== *
 * XENOS RAMPANT — FORCE BUILDER
 * A UX flow study. Profiles transcribed from Xenos Rampant
 * (Osprey Games, 2022). Not an official product.
 * ================================================================== */

const ACT_DEFS = [
  { key: "atk", label: "Attack", Icon: Swords },
  { key: "mov", label: "Move", Icon: Footprints },
  { key: "sho", label: "Shoot", Icon: Crosshair },
  { key: "cou", label: "Courage", Icon: Flame },
];
const PROF_DEFS = [
  { key: "atk", label: "Attack", Icon: Sword },
  { key: "def", label: "Defence", Icon: Shield },
  { key: "sho", label: "Shoot", Icon: Target },
  { key: "arm", label: "Armour", Icon: ShieldHalf },
  { key: "mov", label: "Move", Icon: Ruler },
  { key: "sp", label: "Strength", Icon: Heart },
];

/* Unified per-unit stats: one row per stat, no duplication. Attack, Move, and Shoot
   each carry an Order roll (the 2d6 activation target) AND a Profile value; the rest
   carry only one. This is the single source of truth for the stat table on a card. */
const STAT_ROWS = [
  { key: "atk", label: "Attack",   Icon: Sword,      order: true,  val: true },
  { key: "mov", label: "Move",     Icon: Ruler,      order: true,  val: true },
  { key: "sho", label: "Shoot",    Icon: Target,     order: true,  val: true },
  { key: "cou", label: "Courage",  Icon: Flame,      order: true,  val: false },
  { key: "def", label: "Defence",  Icon: Shield,     order: false, val: true },
  { key: "arm", label: "Armour",   Icon: ShieldHalf, order: false, val: true },
  { key: "sp",  label: "Strength", Icon: Heart,      order: false, val: true },
];

const CATS = [
  { id: "inf", label: "Infantry", Icon: Users },
  { id: "xeno", label: "Xenomorphs", Icon: Skull },
  { id: "veh", label: "Vehicles", Icon: Truck },
];

/* ---------------- helpers ---------------- */
const uid = () => Math.random().toString(36).slice(2, 9);

function catOf(t) {
  if (t.id.includes("xeno")) return "xeno";
  if (t.cls === VEHICLE) return "veh";
  return "inf";
}
function roleOf(u) {
  if (u.isCmd) return "cmd";
  return UNIT_BY_ID[u.typeId].cls === VEHICLE ? "veh" : "spice";
}

/* activation strings: "Free (5+)", "(Free) 6+", "5+", "—" */
function parseAct(s) {
  if (!s || s === "—" || s === "-" || s === "n/a") return { val: "n/a", free: false };
  const free = /free/i.test(s);
  const m = s.match(/(\d+\+?)/);
  return { val: m ? m[1] : s, free };
}
/* shoot value "4+ / 18\"" -> { main:"4+", range:"18\"" } */
function splitRange(s) {
  if (!s || s === "—" || s === "n/a") return { main: "n/a", range: "" };
  if (s.includes("/")) {
    const [a, b] = s.split("/");
    return { main: a.trim(), range: b.trim() };
  }
  return { main: s.trim(), range: "" };
}
const costLabel = (n) => (n > 0 ? `+${n}` : n < 0 ? `\u2212${Math.abs(n)}` : "0");

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
  const vehPts = roster
    .filter((u) => UNIT_BY_ID[u.typeId].cls === VEHICLE)
    .reduce((s, u) => s + unitPoints(u), 0);

  if (used > budget) issues.push({ lvl: "err", msg: `Over budget by ${used - budget} points.` });
  if (count > 0) {
    if (cmds === 0) issues.push({ lvl: "err", msg: "No Commander. Crown one unit." });
    if (cmds > 1) issues.push({ lvl: "err", msg: `${cmds} Commanders. Only one is allowed.` });
    if (count < minU) issues.push({ lvl: "warn", msg: `Below minimum size (${minU} to ${maxU} units at ${budget} points).` });
    if (count > maxU) issues.push({ lvl: "err", msg: `Above maximum size (${minU} to ${maxU} units at ${budget} points).` });
    if (heavyVeh > heavyCap)
      issues.push({ lvl: "err", msg: `${heavyVeh} fighting/transport vehicles. The limit is ${heavyCap} (one per full 18 points).` });
    if (vehPts > budget / 2)
      issues.push({ lvl: "err", msg: `Vehicles are ${vehPts} points; no more than half (${Math.floor(budget / 2)}) may be vehicles.` });
  }
  return { issues, used, count };
}

/* ---------------- gauge ---------------- */
function Muster({ used, budget }) {
  const pct = budget ? (used / budget) * 100 : 0;
  const over = used > budget;
  const near = !over && pct >= 90;
  const fillClass = over ? "over" : near ? "near" : "ok";
  return (
    <div className={`xr-muster ${fillClass}`}>
      <div className="xr-muster-head">
        <span className="xr-muster-label">Muster</span>
        <span className="xr-muster-read">
          <b>{used}</b>
          <span className="xr-muster-slash">/</span>
          <span className="xr-muster-budget">{budget}</span>
          <span className="xr-muster-pts">pts</span>
        </span>
      </div>
      <div className="xr-muster-track">
        <div className="xr-muster-fill" style={{ width: `${Math.min(100, pct)}%` }} />
        {over && <div className="xr-muster-over" />}
        <div className="xr-muster-ticks" />
      </div>
    </div>
  );
}

/* ---------------- stat cells ---------------- */
function ActCell({ def, raw }) {
  const { val, free } = parseAct(raw);
  const { Icon } = def;
  const na = val === "n/a";
  return (
    <div className={`xr-stat ${na ? "muted" : ""}`}>
      <div className={`xr-act-disc k-${def.key}`}>
        <span className="xr-act-num">{val}</span>
      </div>
      <div className="xr-stat-body">
        <div className="xr-stat-key">{def.label}{free && <em className="xr-free">free</em>}</div>
      </div>
    </div>
  );
}
function ProfCell({ def, prof, sp }) {
  const { Icon } = def;
  let main, range = "";
  if (def.key === "sp") main = String(sp);
  else if (def.key === "sho") { const r = splitRange(prof.sho); main = r.main; range = r.range; }
  else main = prof[def.key];
  const na = main === "n/a";
  return (
    <div className={`xr-stat ${na ? "muted" : ""}`}>
      <Icon className="xr-stat-ic" size={26} strokeWidth={2} />
      <div className="xr-stat-body">
        <div className="xr-stat-val">{main}{range && <span className="xr-stat-rng">{range}</span>}</div>
        <div className="xr-stat-key">{def.label}</div>
      </div>
    </div>
  );
}

/* Unified stat table: one row per stat, Order column (2d6 activation) + Profile column. */
function orderCell(t, key) {
  const raw = t.noAttack && key === "atk" ? "—" : t.act[key];
  const { val, free } = parseAct(raw);
  return val === "n/a" ? null : { val, free };
}
function profCellVal(t, sp, key) {
  if (key === "sp") return { main: String(sp) };
  if (key === "sho") { const r = splitRange(t.prof.sho); return r.main === "n/a" ? null : r; }
  const v = t.prof[key];
  return v == null || v === "n/a" || v === "—" ? null : { main: String(v) };
}
function UnitStatTable({ t, sp }) {
  return (
    <div className="xr-stt">
      <div className="xr-stt-head">
        <span className="xr-stt-hstat">Stat</span>
        <span className="xr-stt-hcol">Order <em>2d6</em></span>
        <span className="xr-stt-hcol">Profile</span>
      </div>
      {STAT_ROWS.map((d) => {
        const { Icon } = d;
        const o = d.order ? orderCell(t, d.key) : null;
        const v = d.val ? profCellVal(t, sp, d.key) : null;
        return (
          <div className="xr-stt-row" key={d.key}>
            <span className="xr-stt-stat"><Icon className="xr-stt-ic" size={24} strokeWidth={2} />{d.label}</span>
            <span className="xr-stt-cell">
              {o ? <><span className={`xr-die k-${d.key}`}>{o.val}</span>{o.free && <em className="xr-free">free</em>}</> : <span className="xr-stt-dash">–</span>}
            </span>
            <span className="xr-stt-cell">
              {v ? <><b>{v.main}</b>{v.range && <i className="xr-stt-rng">{v.range}</i>}</> : <span className="xr-stt-dash">–</span>}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- catalogue card ---------------- */
function CatalogCard({ t, onAdd, pulsing }) {
  const cat = catOf(t);
  const sho = splitRange(t.prof.sho).main;
  return (
    <button className={`xr-cat-card cat-${cat} ${pulsing ? "pulsing" : ""}`} onClick={() => onAdd(t.id)}>
      <span className="xr-cat-stamp"><Plus size={18} strokeWidth={2.6} /><b>{t.base}</b><i>pts</i></span>
      <span className="xr-cat-main">
        <span className="xr-cat-top"><span className="xr-cat-name">{t.name}</span></span>
        <span className="xr-cat-role">{t.role}</span>
        <span className="xr-cat-ribbon">
          <span><Sword size={18} strokeWidth={2.2} />Atk <em>{t.prof.atk}</em></span>
          <span><Shield size={18} strokeWidth={2.2} />Def <em>{t.prof.def}</em></span>
          <span><Target size={18} strokeWidth={2.2} />Sho <em>{sho}</em></span>
          <span><ShieldHalf size={18} strokeWidth={2.2} />Arm <em>{t.prof.arm}</em></span>
          <span><Heart size={18} strokeWidth={2.2} />SP <em>{t.sp}</em></span>
        </span>
      </span>
    </button>
  );
}

/* ---------------- option / xeno rows ---------------- */
function Row({ active, disabled, name, cost, text, onToggle, sub, children }) {
  return (
    <div className={`xr-row ${active ? "on" : ""} ${disabled ? "off" : ""} ${sub ? "sub" : ""}`}>
      <button className="xr-row-hit" onClick={onToggle} disabled={disabled}>
        <span className={`xr-row-cost ${cost < 0 ? "neg" : cost > 0 ? "pos" : ""}`}>{costLabel(cost)}</span>
        <span className="xr-check">{active ? <Check size={18} strokeWidth={3} /> : null}</span>
        <span className="xr-row-name">{name}</span>
      </button>
      <p className="xr-row-text">{text}</p>
      {children}
    </div>
  );
}

/* ---------------- commander panel ---------------- */
function CommandPanel({ u, onTable, onRoll }) {
  const tbl = u.traitTable || "aggressive";
  const trait = typeof u.traitIndex === "number" ? COMMANDER_TABLES[tbl].traits[u.traitIndex] : null;
  return (
    <div className="xr-group xr-command">
      <div className="xr-group-bar"><Crown size={18} strokeWidth={2.4} /> Command</div>
      <div className="xr-cmd-tables">
        {Object.entries(COMMANDER_TABLES).map(([key, t]) => (
          <button key={key} className={`xr-cmd-tab ${tbl === key ? "on" : ""}`} onClick={() => onTable(key)}>
            {t.label}
          </button>
        ))}
      </div>
      <p className="xr-cmd-blurb">{COMMANDER_TABLES[tbl].blurb}</p>
      <button className="xr-roll" onClick={onRoll}>
        <Dices size={20} strokeWidth={2.2} /> {trait ? "Reroll trait" : "Roll a trait"}
      </button>
      {trait && (
        <div className="xr-trait">
          <div className="xr-trait-name">{trait.name}</div>
          <p className="xr-trait-rule">{trait.rule}</p>
        </div>
      )}
    </div>
  );
}

/* ---------------- roster unit card ---------------- */
function UnitCard({ u, index, onName, onCmd, onDup, onDel, onOpt, onXeno, onTier, onTable, onRoll }) {
  const t = UNIT_BY_ID[u.typeId];
  const role = roleOf(u);
  const pts = unitPoints(u);
  const sp = unitSP(u);
  const elig = useMemo(() => eligibleXenos(t), [t]);

  const topOpts = t.options.filter((o) => !o.requires);
  const subsOf = (pid) => t.options.filter((o) => o.requires === pid);

  return (
    <div className={`xr-unit role-${role}`}>
      <div className="xr-unit-head">
        <button
          className={`xr-crown ${u.isCmd ? "on" : ""}`}
          onClick={() => onCmd(u.key)}
          aria-label={u.isCmd ? "Remove Commander" : "Make Commander"}
          title={u.isCmd ? "Commander" : "Make Commander"}
        >
          <Crown size={26} strokeWidth={2.2} />
        </button>
        <div className="xr-unit-id">
          <input
            className="xr-unit-name"
            value={u.name}
            placeholder={`${t.name} ${index + 1}`}
            onChange={(e) => onName(u.key, e.target.value)}
            spellCheck={false}
          />
          <div className="xr-unit-type">
            {u.isCmd && <span className="xr-tag-cmd">Commander</span>}
            {t.name}
          </div>
        </div>
        <div className="xr-unit-readout">
          <div className="xr-ro-pts">{pts}<i>pts</i></div>
          <div className="xr-ro-sp"><Heart size={11} strokeWidth={2.4} />{sp} SP</div>
        </div>
        <div className="xr-unit-tools">
          <button onClick={() => onDup(u.key)} aria-label="Duplicate" title="Duplicate"><Copy size={22} /></button>
          <button onClick={() => onDel(u.key)} aria-label="Remove" title="Remove"><Trash2 size={22} /></button>
        </div>
      </div>

      {/* stat groups */}
      <div className="xr-stats">
        <UnitStatTable t={t} sp={sp} />
      </div>

      {/* standard rules */}
      {t.special.length > 0 && (
        <div className="xr-group">
          <div className="xr-group-bar">Standard rules</div>
          <div className="xr-rules">
            {t.special.map((name) => (
              <div className="xr-defn" key={name}>
                <div className="xr-defn-name">{name}</div>
                {SPECIAL_RULES[name] && <p className="xr-defn-text">{SPECIAL_RULES[name]}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* loadout */}
      {topOpts.length > 0 && (
        <div className="xr-group">
          <div className="xr-group-bar">Loadout</div>
          {topOpts.map((o) => {
            const on = !!u.options[o.id];
            const subs = subsOf(o.id);
            return (
              <Row key={o.id} active={on} name={o.name} cost={optCost(o)} text={o.text} onToggle={() => onOpt(u.key, o.id)}>
                {on && subs.length > 0 && (
                  <div className="xr-subs">
                    {subs.map((s) => (
                      <Row key={s.id} sub active={!!u.options[s.id]} name={s.name} cost={optCost(s)} text={s.text} onToggle={() => onOpt(u.key, s.id)} />
                    ))}
                  </div>
                )}
              </Row>
            );
          })}
        </div>
      )}

      {/* xeno rules */}
      {elig.length > 0 && (
        <div className="xr-group">
          <div className="xr-group-bar">Xeno rules</div>
          {elig.map((x) => {
            const sel = x.id in u.xenos;
            const reqMet = xenoReqMet(x, u);
            const disabled = !sel && !reqMet;
            const val = u.xenos[x.id];
            return (
              <Row
                key={x.id}
                active={sel}
                disabled={disabled}
                name={x.name}
                cost={xenoCost(x, val)}
                text={disabled && x.requiresXeno ? `Requires the ${XENO_BY_ID[x.requiresXeno].name} xeno rule. ${x.text}` : x.text}
                onToggle={() => onXeno(u.key, x.id)}
              >
                {sel && x.tiers && (
                  <div className="xr-tiers">
                    {x.tiers.map((tier, i) => (
                      <button key={i} className={`xr-tier ${val === i ? "on" : ""}`} onClick={() => onTier(u.key, x.id, i)}>
                        {tier.label} <i>{costLabel(tier.cost)}</i>
                      </button>
                    ))}
                  </div>
                )}
              </Row>
            );
          })}
        </div>
      )}

      {u.isCmd && <CommandPanel u={u} onTable={onTable} onRoll={onRoll} />}
    </div>
  );
}

/* ---------------- print sheet ---------------- */
function unitLine(u) {
  const t = UNIT_BY_ID[u.typeId];
  const p = t.prof;
  const a = t.act;
  return { t, p, a, pts: unitPoints(u), sp: unitSP(u) };
}
function PrintSheet({ roster, det, budget, used, count }) {
  return (
    <div className="xr-printsheet">
      <div className="xr-pr-head">
        <div className="xr-pr-title">{det || "Untitled Detachment"}</div>
        <div className="xr-pr-meta">Xenos Rampant, {used}/{budget} pts, {count} units</div>
      </div>
      {roster.map((u, i) => {
        const { t, p, a, pts, sp } = unitLine(u);
        const opts = t.options.filter((o) => u.options[o.id]);
        const xenos = XENO_RULES.filter((x) => x.id in u.xenos);
        const tbl = u.traitTable || "aggressive";
        const trait = u.isCmd && typeof u.traitIndex === "number" ? COMMANDER_TABLES[tbl].traits[u.traitIndex] : null;
        return (
          <div className="xr-pr-unit" key={u.key}>
            <div className="xr-pr-unit-head">
              <span className="xr-pr-unit-name">
                {u.isCmd && <b>[CMD] </b>}
                {u.name || `${t.name} ${i + 1}`}
                <em> ({t.name})</em>
              </span>
              <span className="xr-pr-unit-pts">{pts} pts, {sp} SP</span>
            </div>
            <div className="xr-pr-stats">
              <span>Act: A {parseAct(t.noAttack ? "—" : a.atk).val} / M {parseAct(a.mov).val} / S {parseAct(a.sho).val} / C {parseAct(a.cou).val}</span>
              <span>Prof: A {p.atk} / D {p.def} / S {p.sho} / Arm {p.arm} / Mov {p.mov}</span>
            </div>
            <div className="xr-pr-rules">{t.special.filter((s) => s !== "None").join(", ")}</div>
            {opts.map((o) => (
              <div className="xr-pr-line" key={o.id}><b>{o.name}</b> ({costLabel(optCost(o))}): {o.text}</div>
            ))}
            {xenos.map((x) => (
              <div className="xr-pr-line" key={x.id}><b>{x.name}</b> ({costLabel(xenoCost(x, u.xenos[x.id]))}): {x.text}</div>
            ))}
            {trait && <div className="xr-pr-line"><b>Trait: {trait.name}:</b> {trait.rule}</div>}
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- site footer ---------------- */
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
        <a href="https://www.amazon.com/Xenos-Rampant-Science-Fiction-Wargame/dp/1472852362" target="_blank" rel="noopener">Buy on Amazon</a>
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

/* ================================================================== *
 * APP
 * ================================================================== */
export default function App() {
  const [budget, setBudget] = useState(24);
  const [det, setDet] = useState("");
  const [roster, setRoster] = useState([]);
  const [pulseId, setPulseId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pickCat, setPickCat] = useState("inf");
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setDrawerOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  const { issues, used, count } = useMemo(() => validate(roster, budget), [roster, budget]);
  const errors = issues.filter((i) => i.lvl === "err");
  const status = errors.length ? "err" : count === 0 ? "empty" : "ok";

  /* mutations */
  const addUnit = (typeId) => {
    setRoster((r) => [
      ...r,
      { key: uid(), typeId, name: "", isCmd: r.length === 0, traitTable: "aggressive", traitIndex: undefined, options: {}, xenos: {} },
    ]);
    setPulseId(typeId);
    setTimeout(() => setPulseId((p) => (p === typeId ? null : p)), 420);
  };
  const dupUnit = (key) =>
    setRoster((r) => {
      const i = r.findIndex((u) => u.key === key);
      if (i < 0) return r;
      const copy = { ...r[i], key: uid(), isCmd: false, options: { ...r[i].options }, xenos: { ...r[i].xenos } };
      const next = [...r];
      next.splice(i + 1, 0, copy);
      return next;
    });
  const delUnit = (key) => setRoster((r) => r.filter((u) => u.key !== key));
  const nameUnit = (key, name) => setRoster((r) => r.map((u) => (u.key === key ? { ...u, name } : u)));
  const cmdUnit = (key) =>
    setRoster((r) => r.map((u) => (u.key === key ? { ...u, isCmd: !u.isCmd } : { ...u, isCmd: false })));
  const optToggle = (key, oid) =>
    setRoster((r) =>
      r.map((u) => {
        if (u.key !== key) return u;
        const t = UNIT_BY_ID[u.typeId];
        const o = t.options.find((x) => x.id === oid);
        const options = { ...u.options };
        if (options[oid]) delete options[oid];
        else { options[oid] = true; (o.conflicts || []).forEach((c) => delete options[c]); }
        return sanitize({ ...u, options });
      })
    );
  const xenoToggle = (key, xid) =>
    setRoster((r) =>
      r.map((u) => {
        if (u.key !== key) return u;
        const rule = XENO_BY_ID[xid];
        const xenos = { ...u.xenos };
        if (xid in xenos) delete xenos[xid];
        else xenos[xid] = rule.tiers ? 0 : true;
        return sanitize({ ...u, xenos });
      })
    );
  const xenoTier = (key, xid, i) =>
    setRoster((r) => r.map((u) => (u.key === key ? { ...u, xenos: { ...u.xenos, [xid]: i } } : u)));
  const setTable = (key, tbl) =>
    setRoster((r) => r.map((u) => (u.key === key ? { ...u, traitTable: tbl } : u)));
  const rollTrait = (key) =>
    setRoster((r) => r.map((u) => (u.key === key ? { ...u, traitIndex: Math.floor(Math.random() * 6) } : u)));
  const clearAll = () => { if (roster.length === 0 || window.confirm("Clear the whole detachment?")) setRoster([]); };

  const copyList = () => {
    const lines = [`${det || "Untitled Detachment"} (${used}/${budget} pts, ${count} units)`, ""];
    roster.forEach((u, i) => {
      const t = UNIT_BY_ID[u.typeId];
      lines.push(`${u.isCmd ? "[CMD] " : ""}${u.name || `${t.name} ${i + 1}`} (${t.name}, ${unitPoints(u)} pts, ${unitSP(u)} SP)`);
      t.options.filter((o) => u.options[o.id]).forEach((o) => lines.push(`  - ${o.name} (${costLabel(optCost(o))})`));
      XENO_RULES.filter((x) => x.id in u.xenos).forEach((x) => lines.push(`  - ${x.name} (${costLabel(xenoCost(x, u.xenos[x.id]))})`));
      if (u.isCmd && typeof u.traitIndex === "number") {
        const tr = COMMANDER_TABLES[u.traitTable || "aggressive"].traits[u.traitIndex];
        lines.push(`  - Trait: ${tr.name}`);
      }
    });
    navigator.clipboard?.writeText(lines.join("\n"));
  };

  const grouped = CATS.map((c) => ({ ...c, units: UNIT_TYPES.filter((t) => catOf(t) === c.id) }));

  return (
    <div className="xr-app">
      <style>{CSS}</style>
      <div className="field-book">

      {/* masthead */}
      <header className="xr-mast">
        <div className="xr-mast-row">
          <div className="xr-brand">
            <h1 className="xr-word">Xenos Rampant</h1>
            <span className="xr-sub">Force Builder</span>
          </div>
          <div className="xr-actions">
            <button className="xr-act primary" onClick={() => setDrawerOpen(true)}><Plus size={20} strokeWidth={2.8} /> Add unit</button>
            <button className="xr-act" onClick={() => window.print()}><Printer size={20} strokeWidth={2.2} /> Print</button>
            <button className="xr-act" onClick={copyList}><Copy size={20} strokeWidth={2.2} /> Copy</button>
            <button className="xr-act danger" onClick={clearAll}><RotateCcw size={20} strokeWidth={2.2} /> Clear</button>
          </div>
        </div>
        <div className="xr-mast-row2">
          <input className="xr-detname" value={det} placeholder="Name your detachment" onChange={(e) => setDet(e.target.value)} spellCheck={false} />
          <div className="xr-points">
            <div className="xr-budget">
              <span className="xr-budget-l">Budget</span>
              {BUDGET_PRESETS.map((b) => (
                <button key={b} className={`xr-budget-b ${budget === b ? "on" : ""}`} onClick={() => setBudget(b)}>{b}</button>
              ))}
            </div>
            <Muster used={used} budget={budget} />
            <div className={`xr-status ${status}`}>
              {status === "ok" && (<><Check size={18} strokeWidth={3} /> {count} units, legal</>)}
              {status === "err" && (<><AlertTriangle size={18} strokeWidth={2.6} /> {errors.length} {errors.length === 1 ? "issue" : "issues"}</>)}
              {status === "empty" && (<>Empty detachment</>)}
            </div>
          </div>
        </div>
        {issues.length > 0 && (
          <div className="xr-issues">
            {issues.map((it, i) => (
              <span key={i} className={`xr-issue ${it.lvl}`}>{it.msg}</span>
            ))}
          </div>
        )}
      </header>

      <div className="xr-body">
        {/* roster (full width; units are added from the slide-in drawer) */}
        <main className="xr-roster">
          {roster.length === 0 ? (
            <div className="xr-empty">
              <Skull size={56} strokeWidth={1.3} />
              <button className="xr-add-big" onClick={() => setDrawerOpen(true)}><Plus size={22} strokeWidth={2.8} /> Add your first unit</button>
            </div>
          ) : (
            roster.map((u, i) => (
              <UnitCard
                key={u.key}
                u={u}
                index={i}
                onName={nameUnit}
                onCmd={cmdUnit}
                onDup={dupUnit}
                onDel={delUnit}
                onOpt={optToggle}
                onXeno={xenoToggle}
                onTier={xenoTier}
                onTable={setTable}
                onRoll={rollTrait}
              />
            ))
          )}
        </main>
      </div>

      {/* add-unit modal with category tabs (pick a category, then a unit) */}
      {drawerOpen && (
        <div className="xr-modal-backdrop" onClick={() => setDrawerOpen(false)}>
          <div className="xr-modal" role="dialog" aria-label="Add unit" onClick={(e) => e.stopPropagation()}>
            <div className="xr-modal-head">
              <span className="xr-modal-title"><Plus size={24} strokeWidth={2.6} /> Add unit</span>
              <button className="xr-modal-x" onClick={() => setDrawerOpen(false)} aria-label="Close"><X size={24} strokeWidth={2.4} /></button>
            </div>
            <div className="xr-modal-tabs">
              {CATS.map((c) => (
                <button key={c.id} className={`xr-modal-tab cat-${c.id} ${pickCat === c.id ? "on" : ""}`} onClick={() => setPickCat(c.id)}>
                  <c.Icon size={20} strokeWidth={2.3} /> {c.label}
                </button>
              ))}
            </div>
            <div className="xr-modal-body">
              <div className="xr-pick-grid">
                {(grouped.find((g) => g.id === pickCat)?.units || []).map((t) => (
                  <CatalogCard key={t.id} t={t} onAdd={addUnit} pulsing={pulseId === t.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
      </div>

      <PrintSheet roster={roster} det={det} budget={budget} used={used} count={count} />
    </div>
  );
}

/* ================================================================== *
 * STYLE
 * ================================================================== */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
/* Terminal Grotesque Open (Velvetyne, OFL), bundled locally. Used only for the
   gold WarLore wordmark in the footer, the standing brand mark across WarLore builders. */
@font-face{font-family:'Terminal Grotesque Open';src:url('${import.meta.env.BASE_URL}fonts/terminal-grotesque-open.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap;}
/* Hyper Scrypt (Jeremy Landes, Velvetyne, OFL), stencil web cut. The Xenos Rampant title. */
@font-face{font-family:'Hyper Scrypt';src:url('${import.meta.env.BASE_URL}fonts/HyperScrypt-Stencil.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap;}
/* Sligoil Micro (Ariel Martin Perez, Velvetyne, OFL), a technical mono used for stat readouts. */
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
  --r-card:14px; --r-stamp:50%;
  --shadow-page:0 2px 18px rgba(31,61,46,.10);
  --shadow-card:0 6px 16px -8px rgba(31,61,46,.32);
  background:var(--paper);
  color:var(--ink); font-family:var(--body); font-size:17px; line-height:1.6;
  min-height:100vh;
}
.xr-app *{box-sizing:border-box;}
.xr-app button{font-family:inherit;cursor:pointer;color:inherit;background:none;border:none;}
.xr-app input{font-family:inherit;}
.xr-app ::selection{background:var(--coral);color:#fff;}
.xr-app :focus-visible{outline:3px solid var(--iris);outline-offset:2px;}
@media (prefers-reduced-motion: reduce){
  .xr-app *{animation:none !important; transition:none !important;}
}
@keyframes xr-pop-in{0%{opacity:0;transform:translateY(10px) scale(1.03);}60%{opacity:1;transform:translateY(0) scale(.99);}100%{transform:scale(1);}}
@keyframes xr-pulse{0%{transform:scale(1);}40%{transform:scale(1.05);}100%{transform:scale(1);}}
@keyframes xr-check{0%{transform:scale(0);}70%{transform:scale(1.2);}100%{transform:scale(1);}}

/* full-width book shell (was capped at 1100px and centered; opened to full viewport per request) */
.field-book{max-width:none;margin-inline:0;background:var(--paper);box-shadow:var(--shadow-page);min-height:100vh;}

/* ---------- masthead ---------- */
.xr-mast{position:sticky;top:0;z-index:30;background:var(--paper);border-bottom:3px solid var(--ink);padding:18px clamp(16px,3vw,30px) 16px;}
.xr-mast-row{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;}
.xr-brand{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;}
.xr-word{font-family:var(--title);font-weight:400;font-size:clamp(34px,5.6vw,56px);letter-spacing:.02em;line-height:1.02;margin:0;color:var(--ink);}
.xr-sub{font-family:var(--body);font-style:italic;font-weight:400;letter-spacing:.01em;font-size:clamp(16px,1.6vw,19px);color:var(--coral-ink);}
.xr-mast-right{display:flex;align-items:center;gap:20px;flex-wrap:wrap;}
.xr-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center;}
.xr-act.danger{margin-left:16px;}
/* points cluster: budget presets, muster gauge, and legality read together */
.xr-points{display:flex;align-items:center;gap:20px;flex-wrap:wrap;}
.xr-act{display:inline-flex;align-items:center;gap:8px;font-family:var(--body);font-weight:600;font-size:16px;color:var(--ink);border:2px solid var(--ink);background:var(--paper-2);padding:11px 16px;border-radius:10px;transition:.13s;min-height:48px;}
.xr-act:hover{background:var(--sage);color:var(--cream);border-color:var(--sage);}
.xr-act:active{transform:scale(.97);}
.xr-act.danger:hover{background:var(--coral);color:#fff;border-color:var(--coral-ink);}

/* gauge */
.xr-muster{min-width:240px;}
.xr-muster-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px;gap:10px;}
.xr-muster-label{font-family:var(--display);font-weight:600;font-size:16px;color:var(--ink-2);}
.xr-muster-read{font-family:var(--mono);font-weight:700;line-height:1;font-variant-numeric:tabular-nums;}
.xr-muster-read b{font-size:30px;color:var(--ink);}
.xr-muster-slash{font-size:22px;color:var(--ink-2);margin:0 3px;}
.xr-muster-budget{font-size:24px;color:var(--ink-2);}
.xr-muster-pts{font-family:var(--body);font-weight:600;font-size:16px;color:var(--ink-2);margin-left:6px;}
.xr-muster-track{position:relative;height:18px;border:2px solid var(--ink);background:var(--paper-2);border-radius:6px;overflow:hidden;}
.xr-muster-fill{height:100%;transition:width .3s cubic-bezier(.4,0,.2,1);background:var(--sage);}
.xr-muster.near .xr-muster-fill{background:var(--brass);}
.xr-muster.over .xr-muster-fill{background:var(--coral);}
.xr-muster-over{position:absolute;inset:0;border:2px solid var(--coral-ink);pointer-events:none;}
.xr-muster-ticks{position:absolute;inset:0;pointer-events:none;background-image:repeating-linear-gradient(90deg,#0000 0 calc(10% - 2px),var(--ink-18) calc(10% - 2px) 10%);}

.xr-mast-row2{display:flex;align-items:center;gap:16px;margin-top:16px;flex-wrap:wrap;}
.xr-detname{flex:1;min-width:200px;font-family:var(--display);font-weight:600;font-size:22px;color:var(--ink);background:transparent;border:none;border-bottom:2px solid var(--ink-30);padding:4px 2px 6px;}
.xr-detname::placeholder{color:var(--ink-2);opacity:.7;}
.xr-detname:focus{outline:none;border-bottom-color:var(--coral);}
.xr-budget{display:flex;align-items:center;gap:6px;flex-wrap:wrap;}
.xr-budget-l{font-family:var(--display);font-weight:600;font-size:16px;color:var(--ink-2);margin-right:4px;}
.xr-budget-b{font-family:var(--body);font-weight:600;font-size:17px;color:var(--ink);border:2px solid var(--ink);min-width:52px;min-height:48px;padding:8px 10px;border-radius:10px;transition:.12s;}
.xr-budget-b:hover{background:var(--paper-2);}
.xr-budget-b:active{transform:scale(.96);}
.xr-budget-b.on{background:var(--ink);color:var(--cream);}
.xr-status{display:inline-flex;align-items:center;gap:8px;font-family:var(--body);font-weight:600;font-size:16px;padding:9px 14px;border-radius:10px;border:2px solid var(--ink);}
.xr-status.ok{color:var(--sage);border-color:var(--sage);background:var(--paper-2);}
.xr-status.err{color:var(--coral-ink);border-color:var(--coral-ink);background:#F4604C18;}
.xr-status.empty{color:var(--ink-2);}
.xr-issues{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;}
.xr-issue{font-family:var(--body);font-weight:600;font-size:16px;padding:7px 12px;border-radius:8px;border-left:4px solid;background:var(--paper-2);}
.xr-issue.err{color:var(--coral-ink);border-color:var(--coral-ink);}
.xr-issue.warn{color:var(--brass);border-color:var(--brass);}

/* ---------- body ---------- */
.xr-body{display:block;}
@media(max-width:880px){.xr-body{grid-template-columns:1fr;}}

/* catalogue */
.xr-catalogue{position:sticky;top:190px;align-self:start;max-height:calc(100vh - 190px);overflow-y:auto;padding:20px clamp(12px,1.5vw,18px) 40px;border-right:3px solid var(--ink);}
@media(max-width:880px){.xr-catalogue{position:static;max-height:none;border-right:none;border-bottom:3px solid var(--ink);}}

/* add-unit modal: pick a category tab, then a unit from the grid */
.xr-modal-backdrop{position:fixed;inset:0;background:rgba(31,61,46,.42);display:flex;align-items:center;justify-content:center;padding:24px;z-index:90;animation:xr-fade .18s ease;}
.xr-modal{width:min(920px,100%);max-height:86vh;background:var(--paper);border:3px solid var(--ink);border-radius:16px;box-shadow:0 12px 40px rgba(31,61,46,.28);display:flex;flex-direction:column;overflow:hidden;animation:xr-pop-in .28s cubic-bezier(.2,.8,.2,1);}
.xr-modal-head{display:flex;align-items:center;justify-content:space-between;padding:16px 22px;border-bottom:3px solid var(--ink);}
.xr-modal-title{display:flex;align-items:center;gap:10px;font-family:var(--display);font-weight:700;font-size:26px;color:var(--ink);}
.xr-modal .xr-modal-x{width:48px;height:48px;flex:none;border:2px solid var(--ink);border-radius:10px;color:var(--ink);display:flex;align-items:center;justify-content:center;transition:.12s;}
.xr-modal .xr-modal-x:hover{background:var(--coral);color:#fff;border-color:var(--coral-ink);}
.xr-modal .xr-modal-x:active{transform:scale(.95);}
.xr-modal-tabs{display:flex;gap:8px;padding:14px 22px;border-bottom:2px solid var(--ink-18);flex-wrap:wrap;}
.xr-modal .xr-modal-tab{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:600;font-size:17px;color:var(--ink-2);border:2px solid var(--ink-30);background:var(--paper);padding:9px 16px;border-radius:10px;min-height:46px;transition:.12s;}
.xr-modal .xr-modal-tab:hover{border-color:var(--ink);color:var(--ink);}
.xr-modal .xr-modal-tab.on{color:var(--cream);background:var(--ink);border-color:var(--ink);}
.xr-modal .xr-modal-tab.cat-inf.on{background:var(--sage);border-color:var(--sage);}
.xr-modal .xr-modal-tab.cat-xeno.on{background:var(--iris);border-color:var(--iris);}
.xr-modal .xr-modal-tab.cat-veh.on{background:var(--rust);border-color:var(--rust);}
.xr-modal-body{overflow-y:auto;padding:20px 22px 26px;}
.xr-pick-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px;}
@keyframes xr-fade{from{opacity:0;}to{opacity:1;}}
@media (prefers-reduced-motion: reduce){.xr-modal-backdrop,.xr-modal{animation:none;}}

/* primary add-unit button and empty-state add */
.xr-act.primary{background:var(--ink);color:var(--cream);border-color:var(--ink);}
.xr-act.primary:hover{background:var(--iris);border-color:var(--iris);color:var(--cream);}
.xr-empty .xr-add-big{display:inline-flex;align-items:center;gap:10px;margin-top:22px;font-family:var(--body);font-weight:700;font-size:19px;color:var(--cream);background:var(--ink);border:2px solid var(--ink);padding:14px 26px;border-radius:12px;transition:.14s;}
.xr-add-big:hover{background:var(--iris);border-color:var(--iris);}
.xr-add-big:active{transform:scale(.97);}

/* order-value die chips: read as a die you roll, distinct from the bare profile numeral */
.xr-die{display:inline-flex;align-items:center;justify-content:center;min-width:46px;padding:4px 10px;border-radius:9px;border:1.5px solid var(--ink-30);background:var(--paper-2);font-family:var(--mono);font-weight:700;font-size:19px;color:var(--ink);font-variant-numeric:tabular-nums;}
.xr-die.k-atk{background:#F4604C22;border-color:var(--coral-ink);}
.xr-die.k-mov{background:#5C7A5222;border-color:var(--sage);}
.xr-die.k-sho{background:#6A4A8C22;border-color:var(--iris);}
.xr-die.k-cou{background:#8A6A1F22;border-color:var(--brass);}
.xr-catsec{margin-bottom:26px;}
.xr-catsec-h{display:flex;align-items:center;gap:10px;font-family:var(--display);font-weight:700;font-variant:small-caps;letter-spacing:.03em;font-size:24px;padding-bottom:8px;margin-bottom:12px;border-bottom:2px solid var(--ink-30);}
.xr-catsec-h.cat-inf{color:var(--sage);}
.xr-catsec-h.cat-xeno{color:var(--iris);}
.xr-catsec-h.cat-veh{color:var(--rust);}
.xr-catsec-list{display:grid;grid-template-columns:1fr;gap:12px;}

.xr-cat-card{display:flex;gap:12px;text-align:left;border:3px solid var(--ink);background:var(--paper-2);padding:14px;border-radius:var(--r-card);transition:.14s;align-items:flex-start;}
.xr-cat-card.cat-veh{border-color:var(--rust);}
.xr-cat-card.cat-xeno{border-color:var(--iris);}
.xr-cat-card:hover{box-shadow:var(--shadow-card);transform:translateY(-2px);}
.xr-cat-card:active{transform:scale(.99);}
.xr-cat-card.pulsing{animation:xr-pulse .42s cubic-bezier(.2,.8,.2,1);}
.xr-cat-stamp{flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;width:66px;min-height:66px;border-radius:var(--r-stamp);background:var(--coral);color:var(--ink);border:2px solid var(--ink);transition:.14s;}
.xr-cat-card:hover .xr-cat-stamp{background:var(--coral-ink);color:var(--cream);}
.xr-cat-stamp b{font-family:var(--display);font-weight:700;font-size:24px;line-height:1;}
.xr-cat-stamp i{font-family:var(--body);font-style:normal;font-weight:600;font-size:13px;}
.xr-cat-main{flex:1;min-width:0;display:flex;flex-direction:column;}
.xr-cat-top{display:flex;align-items:baseline;justify-content:space-between;gap:10px;}
.xr-cat-name{font-family:var(--display);font-weight:700;font-size:21px;color:var(--ink);}
.xr-cat-role{font-style:italic;font-size:16px;line-height:1.45;color:var(--ink-2);margin:4px 0 10px;}
.xr-cat-ribbon{display:flex;align-items:center;gap:10px 14px;flex-wrap:wrap;}
.xr-cat-ribbon span{display:inline-flex;align-items:center;gap:5px;font-family:var(--body);font-weight:600;font-size:16px;color:var(--ink-2);}
.xr-cat-ribbon span svg{color:var(--ink);}
.xr-cat-ribbon span em{font-style:normal;color:var(--ink);font-weight:700;}

/* roster */
.xr-roster{padding:20px clamp(14px,2.5vw,28px) 60px;display:grid;grid-template-columns:1fr;gap:20px;}
@media(min-width:1000px){.xr-roster{grid-template-columns:repeat(auto-fill,minmax(460px,1fr));}}
.xr-empty{grid-column:1/-1;display:flex;flex-direction:column;align-items:center;gap:6px;border:3px dashed var(--ink-30);border-radius:var(--r-card);padding:64px 30px;text-align:center;color:var(--ink-2);margin-top:10px;}
.xr-empty svg{color:var(--sage);margin-bottom:14px;}
.xr-empty p{font-family:var(--display);font-weight:600;font-size:22px;color:var(--ink);margin:0 0 8px;}
.xr-empty span{font-size:16px;font-style:italic;}

.xr-unit{border:3px solid var(--ink);background:var(--paper-2);border-radius:var(--r-card);overflow:hidden;animation:xr-pop-in .38s cubic-bezier(.2,.8,.2,1);}
.xr-unit.role-veh{border-color:var(--rust);}
.xr-unit.role-cmd{border-color:var(--brass);box-shadow:0 0 0 2px var(--brass) inset;}

.xr-unit-head{display:flex;align-items:center;gap:14px;padding:14px 16px;border-bottom:2px solid var(--ink-30);background:var(--paper);}
.xr-crown{flex:none;width:56px;height:56px;border:2px solid var(--ink);border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--ink-2);transition:.13s;}
.xr-crown:hover{color:var(--brass);border-color:var(--brass);}
.xr-crown:active{transform:scale(.95);}
.xr-crown.on{color:var(--cream);background:var(--brass);border-color:var(--brass);}
.xr-unit-id{flex:1;min-width:0;}
.xr-unit-name{width:100%;font-family:var(--display);font-weight:700;font-size:clamp(18px,1.8vw,24px);color:var(--ink);background:transparent;border:none;border-bottom:2px solid transparent;padding:0 0 2px;line-height:1.1;text-overflow:ellipsis;}
.xr-unit-name::placeholder{color:var(--ink-2);opacity:.6;}
.xr-unit-name:focus{outline:none;border-bottom-color:var(--coral);}
.xr-unit-type{font-family:var(--body);font-weight:600;font-size:16px;color:var(--ink-2);margin-top:4px;}
.xr-tag-cmd{color:var(--cream);background:var(--brass);margin-right:9px;padding:2px 8px;border-radius:6px;font-weight:700;}
.xr-unit-readout{text-align:right;flex:none;}
.xr-ro-pts{font-family:var(--mono);font-weight:700;font-size:32px;line-height:.9;color:var(--ink);font-variant-numeric:tabular-nums;}
.xr-ro-pts i{font-family:var(--body);font-weight:600;font-style:normal;font-size:15px;color:var(--ink-2);margin-left:4px;}
.xr-ro-sp{display:inline-flex;align-items:center;gap:4px;font-family:var(--body);font-weight:600;font-size:16px;color:var(--sage);margin-top:3px;}
.xr-unit.role-veh .xr-ro-sp{color:var(--rust);}
.xr-unit-tools{display:flex;flex-direction:column;gap:6px;flex:none;}
.xr-unit-tools button{width:48px;height:48px;border:2px solid var(--ink);border-radius:10px;color:var(--ink);display:flex;align-items:center;justify-content:center;transition:.12s;}
.xr-unit-tools button:hover{background:var(--paper);}
.xr-unit-tools button:active{transform:scale(.95);}
.xr-unit-tools button:last-child:hover{color:#fff;background:var(--coral);border-color:var(--coral-ink);}

/* stat groups */
.xr-stats{display:grid;grid-template-columns:1fr;gap:0;}
.xr-statgroup{padding:16px;border-bottom:2px solid var(--ink-18);}
.xr-statgroup:last-child{border-bottom:none;}
.xr-statgroup-h{font-family:var(--display);font-weight:600;font-variant:small-caps;letter-spacing:.03em;font-size:18px;color:var(--ink-2);margin-bottom:12px;}
.xr-statgroup-h em{font-style:italic;color:var(--ink-2);margin-left:6px;}
.xr-statgrid{display:grid;gap:14px 12px;}
.xr-statgrid.act{grid-template-columns:repeat(2,1fr);}
.xr-statgrid.prof{grid-template-columns:repeat(3,1fr);}
@media(max-width:520px){.xr-statgrid.prof{grid-template-columns:repeat(2,1fr);}}
.xr-stat{display:flex;align-items:center;gap:10px;}
.xr-stat-ic{color:var(--ink);flex:none;}
.xr-stat.muted{opacity:.5;}
.xr-stat-body{min-width:0;line-height:1.1;}
.xr-stat-val{font-family:var(--mono);font-weight:700;font-size:24px;color:var(--ink);font-variant-numeric:tabular-nums;}
.xr-stat-rng{font-family:var(--mono);font-weight:400;font-size:16px;color:var(--ink-2);margin-left:4px;}
.xr-stat-key{font-family:var(--mono);font-weight:400;font-size:16px;letter-spacing:.02em;color:var(--ink-2);margin-top:1px;}
.xr-free{font-style:italic;color:var(--coral-ink);margin-left:6px;}

/* activation discs */
.xr-act-disc{flex:none;width:48px;height:48px;border-radius:50%;border:2px solid var(--ink);display:flex;align-items:center;justify-content:center;}
.xr-act-num{font-family:var(--mono);font-weight:700;font-size:18px;line-height:1;}
/* unified stat table (one row per stat, Order + Profile columns) */
.xr-stt{padding:14px 16px 4px;}
.xr-stt-head{display:grid;grid-template-columns:1fr 92px 108px;gap:8px 12px;align-items:end;padding-bottom:8px;border-bottom:2px solid var(--ink-30);}
.xr-stt-hstat,.xr-stt-hcol{font-family:var(--display);font-weight:600;font-variant:small-caps;letter-spacing:.03em;font-size:16px;color:var(--ink-2);}
.xr-stt-hcol em{font-style:italic;font-variant:normal;font-size:14px;margin-left:3px;color:var(--ink-2);}
.xr-stt-row{display:grid;grid-template-columns:1fr 92px 108px;gap:8px 12px;align-items:center;padding:10px 0;border-bottom:1px solid var(--ink-18);}
.xr-stt-row:last-child{border-bottom:none;}
.xr-stt-stat{display:flex;align-items:center;gap:10px;font-family:var(--display);font-weight:600;font-size:18px;color:var(--ink);}
.xr-stt-ic{color:var(--ink);flex:none;}
.xr-stt-cell b{font-family:var(--mono);font-weight:700;font-size:22px;color:var(--ink);font-variant-numeric:tabular-nums;}
.xr-stt-rng{font-family:var(--mono);font-style:normal;font-size:16px;color:var(--ink-2);margin-left:5px;}
.xr-stt-dash{color:var(--ink-2);opacity:.45;font-size:18px;}
.xr-free{font-family:var(--body);font-style:italic;font-weight:600;font-size:15px;color:var(--coral-ink);margin-left:5px;}
.xr-act-disc.k-atk{background:var(--coral);color:var(--ink);}
.xr-act-disc.k-mov{background:var(--sage);color:var(--cream);}
.xr-act-disc.k-sho{background:var(--iris);color:var(--cream);}
.xr-act-disc.k-cou{background:var(--brass);color:var(--cream);}
.xr-stat.muted .xr-act-disc{background:var(--paper-2);color:var(--ink-2);}

/* groups */
.xr-group{border-top:2px solid var(--ink-18);padding:16px;}
.xr-group-bar{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:700;font-variant:small-caps;letter-spacing:.03em;font-size:19px;color:var(--sage);margin-bottom:12px;}
.xr-unit.role-veh .xr-group-bar{color:var(--rust);}
.xr-group-bar svg{color:inherit;}

.xr-rules{display:flex;flex-direction:column;gap:12px;}
.xr-defn-name{font-family:var(--display);font-weight:600;font-size:18px;color:var(--ink);}
.xr-defn-text{font-size:16px;line-height:1.5;color:var(--ink-2);margin:3px 0 0;}

/* rows (options / xeno) */
.xr-row{border-top:1.5px solid var(--ink-18);padding:12px 0;}
.xr-row:first-of-type{border-top:none;}
.xr-row-hit{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:4px 0;min-height:56px;}
.xr-row-cost{flex:none;width:52px;height:52px;border-radius:50%;border:2px solid var(--ink);background:var(--paper);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:700;font-size:18px;color:var(--ink-2);font-variant-numeric:tabular-nums;transition:.12s;}
.xr-row-cost.pos{color:var(--ink);background:var(--coral);}
.xr-row-cost.neg{color:var(--cream);background:var(--sage);border-color:var(--sage);}
.xr-check{flex:none;width:28px;height:28px;border:2px solid var(--ink);border-radius:7px;display:flex;align-items:center;justify-content:center;color:var(--cream);transition:.12s;}
.xr-row.on .xr-check{background:var(--sage);border-color:var(--sage);}
.xr-row.on .xr-check svg{animation:xr-check .25s cubic-bezier(.2,.8,.2,1);}
.xr-row-name{flex:1;font-family:var(--body);font-weight:600;font-size:18px;color:var(--ink);}
.xr-row-hit:active{transform:scale(.99);}
.xr-row-text{font-size:16px;line-height:1.5;color:var(--ink-2);margin:6px 0 0 64px;}
.xr-row.on .xr-row-text{color:var(--ink);}
.xr-row.off{opacity:.5;}
.xr-row.off .xr-row-hit{cursor:not-allowed;}
.xr-subs{margin:10px 0 2px 64px;padding-left:14px;border-left:2px solid var(--ink-18);}
.xr-row.sub{padding:8px 0;}
.xr-row.sub .xr-row-name{font-size:17px;}
.xr-row.sub .xr-row-text{margin-left:64px;}

.xr-tiers{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 2px 64px;}
.xr-tier{font-family:var(--body);font-weight:600;font-size:16px;color:var(--ink);border:2px solid var(--ink);padding:10px 14px;border-radius:8px;transition:.12s;min-height:48px;}
.xr-tier i{font-style:normal;color:var(--ink-2);margin-left:6px;}
.xr-tier:hover{background:var(--paper);}
.xr-tier:active{transform:scale(.96);}
.xr-tier.on{background:var(--sage);border-color:var(--sage);color:var(--cream);}
.xr-tier.on i{color:var(--cream);}

/* command */
.xr-command{background:var(--paper);}
.xr-command .xr-group-bar{color:var(--brass);}
.xr-cmd-tables{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;}
@media(min-width:520px){.xr-cmd-tables{grid-template-columns:repeat(4,1fr);}}
.xr-cmd-tab{font-family:var(--body);font-weight:600;font-size:16px;color:var(--ink);border:2px solid var(--ink);padding:11px 6px;border-radius:8px;transition:.12s;min-height:48px;}
.xr-cmd-tab:hover{background:var(--paper-2);}
.xr-cmd-tab:active{transform:scale(.96);}
.xr-cmd-tab.on{background:var(--brass);border-color:var(--brass);color:var(--cream);}
.xr-cmd-blurb{font-size:16px;color:var(--ink-2);margin:12px 0;font-style:italic;}
.xr-roll{display:inline-flex;align-items:center;gap:10px;font-family:var(--display);font-weight:700;font-size:18px;color:var(--cream);border:2px solid var(--brass);background:var(--brass);padding:12px 18px;border-radius:10px;transition:.12s;min-height:48px;}
.xr-roll:hover{background:var(--ink);border-color:var(--ink);}
.xr-roll:active{transform:scale(.97);}
.xr-trait{margin-top:14px;border:2px solid var(--brass);border-radius:10px;background:var(--paper-2);padding:14px;}
.xr-trait-name{font-family:var(--display);font-weight:700;font-size:20px;color:var(--brass);}
.xr-trait-rule{font-size:16px;line-height:1.5;color:var(--ink);margin:5px 0 0;}

/* ---------- footer ---------- */
/* footer modelled closely on the Pacific Command builder: pipe separators, compact,
   WarLore credit set in Terminal Grotesque small caps, pushed right. */
.game-info-footer{border-top:1.5px solid var(--ink);background:var(--paper-3);padding:12px clamp(16px,3vw,30px);color:var(--ink-2);}
.gif-inner{display:flex;flex-wrap:wrap;align-items:center;gap:7px;font-size:15px;}
.gif-title{font-family:var(--display);font-weight:700;color:var(--ink);}
.gif-sep{color:var(--ink-30);}
.game-info-footer a{color:var(--iris);text-decoration:none;font-weight:600;}
.game-info-footer a:hover{text-decoration:underline;}
.gif-builder{margin-left:auto;color:var(--ink-2);}
/* WarLore wordmark: ALWAYS gold on black (standing brand rule), inverts on hover. */
.game-info-footer a.warlore-mark{font-family:'Terminal Grotesque Open','Zilla Slab',monospace;font-size:17px;letter-spacing:.03em;color:#FFCC00;background:#000;padding:1px 8px;text-decoration:none;text-transform:none;font-weight:400;transition:color .12s,background .12s;}
.game-info-footer a.warlore-mark:hover{color:#000;background:#FFCC00;}
.warlore-mark .wl-lore{font:inherit;}
@media(max-width:600px){.gif-inner{gap:6px;}.gif-sep{display:none;}.gif-builder{margin-left:0;}}

/* ---------- print sheet ---------- */
.xr-printsheet{display:none;}

@media print{
  .xr-app{background:#fff !important;color:#000;}
  .xr-mast,.xr-body,.game-info-footer{display:none !important;}
  .field-book{box-shadow:none;max-width:none;}
  .xr-printsheet{display:block;font-family:Georgia,'Times New Roman',serif;color:#000;padding:0;}
  .xr-pr-head{border-bottom:2px solid #000;padding-bottom:8px;margin-bottom:14px;}
  .xr-pr-title{font-family:var(--display);font-weight:700;font-size:30px;}
  .xr-pr-meta{font-size:12px;color:#333;margin-top:3px;}
  .xr-pr-unit{border:1px solid #999;border-radius:3px;padding:9px 11px;margin-bottom:9px;page-break-inside:avoid;}
  .xr-pr-unit-head{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid #ccc;padding-bottom:4px;margin-bottom:5px;}
  .xr-pr-unit-name{font-size:16px;font-weight:700;}
  .xr-pr-unit-name em{font-weight:400;font-style:italic;color:#444;}
  .xr-pr-unit-name b{color:#000;}
  .xr-pr-unit-pts{font-size:13px;font-weight:700;white-space:nowrap;}
  .xr-pr-stats{display:flex;flex-wrap:wrap;gap:6px 22px;font-size:12px;margin-bottom:4px;}
  .xr-pr-stats span{font-variant-numeric:tabular-nums;}
  .xr-pr-rules{font-size:11.5px;font-style:italic;color:#333;margin-bottom:4px;}
  .xr-pr-line{font-size:11.5px;line-height:1.4;margin-top:2px;}
  .xr-pr-line b{font-weight:700;}
  @page{margin:14mm;}
}
`;
