import React, { useState, useMemo, useEffect } from "react";
/* Icons pulled from Iconify and bundled offline (rendered as inline SVG, so no
   network request and no runtime): game-icons for thematic glyphs, tabler for controls. */
import icCrossedSwords from "@iconify-icons/game-icons/crossed-swords";
import icRun from "@iconify-icons/game-icons/run";
import icCrossedPistols from "@iconify-icons/game-icons/crossed-pistols";
import icBugle from "@iconify-icons/game-icons/bugle-call";
import icBroadsword from "@iconify-icons/game-icons/broadsword";
import icShield from "@iconify-icons/game-icons/shield";
import icBullseye from "@iconify-icons/game-icons/bullseye";
import icArmorVest from "@iconify-icons/game-icons/armor-vest";
import icPathDistance from "@iconify-icons/game-icons/path-distance";
import icHealth from "@iconify-icons/game-icons/health-normal";
import icCrown from "@iconify-icons/game-icons/crown";
import icDarkSquad from "@iconify-icons/game-icons/dark-squad";
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
const Plus = mk(icPlus), Crown = mk(icCrown), Copy = mk(icCopy), Trash2 = mk(icTrash),
  ChevronDown = mk(icChevron), X = mk(icX), Dices = mk(icDice), AlertTriangle = mk(icAlert),
  Check = mk(icCheck), Printer = mk(icPrinter), RotateCcw = mk(icRotate),
  Swords = mk(icCrossedSwords), Footprints = mk(icRun), Crosshair = mk(icCrossedPistols),
  Flame = mk(icBugle), Sword = mk(icBroadsword), Shield = mk(icShield), Target = mk(icBullseye),
  ShieldHalf = mk(icArmorVest), Ruler = mk(icPathDistance), Heart = mk(icHealth),
  Skull = mk(icAlienSkull), Truck = mk(icBattleTank), Users = mk(icDarkSquad);
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
  if (!s || s === "—" || s === "-") return { val: "—", free: false };
  const free = /free/i.test(s);
  const m = s.match(/(\d+\+?)/);
  return { val: m ? m[1] : s, free };
}
/* shoot value "4+ / 18\"" -> { main:"4+", range:"18\"" } */
function splitRange(s) {
  if (!s || s === "—") return { main: "—", range: "" };
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
  if (count === 0) issues.push({ lvl: "warn", msg: "No units yet. Add one from the catalogue." });
  else {
    if (cmds === 0) issues.push({ lvl: "err", msg: "No Commander. Crown one unit." });
    if (cmds > 1) issues.push({ lvl: "err", msg: `${cmds} Commanders. Only one is allowed.` });
    if (count < minU) issues.push({ lvl: "warn", msg: `Below minimum size (${minU}\u2013${maxU} units at ${budget} points).` });
    if (count > maxU) issues.push({ lvl: "err", msg: `Above maximum size (${minU}\u2013${maxU} units at ${budget} points).` });
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
  return (
    <div className={`xr-stat ${val === "—" ? "muted" : ""}`}>
      <Icon className="xr-stat-ic" size={17} strokeWidth={2} />
      <div className="xr-stat-body">
        <div className="xr-stat-val">{val}</div>
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
  return (
    <div className={`xr-stat ${main === "—" ? "muted" : ""}`}>
      <Icon className="xr-stat-ic" size={17} strokeWidth={2} />
      <div className="xr-stat-body">
        <div className="xr-stat-val">{main}{range && <span className="xr-stat-rng">{range}</span>}</div>
        <div className="xr-stat-key">{def.label}</div>
      </div>
    </div>
  );
}

/* ---------------- catalogue card ---------------- */
function CatalogCard({ t, onAdd }) {
  const cat = catOf(t);
  return (
    <button className={`xr-cat-card cat-${cat}`} onClick={() => onAdd(t.id)}>
      <div className="xr-cat-top">
        <span className="xr-cat-name">{t.name}</span>
        <span className="xr-cat-cost">{t.base}<i>pts</i></span>
      </div>
      <p className="xr-cat-role">{t.role}</p>
      <div className="xr-cat-ribbon">
        <span><Sword size={12} strokeWidth={2.2} />{t.prof.atk}</span>
        <span><Shield size={12} strokeWidth={2.2} />{t.prof.def}</span>
        <span><Target size={12} strokeWidth={2.2} />{splitRange(t.prof.sho).main}</span>
        <span><ShieldHalf size={12} strokeWidth={2.2} />{t.prof.arm}</span>
        <span><Heart size={12} strokeWidth={2.2} />{t.sp}</span>
        <span className="xr-cat-add"><Plus size={14} strokeWidth={2.6} /></span>
      </div>
    </button>
  );
}

/* ---------------- option / xeno rows ---------------- */
function Row({ active, disabled, name, cost, text, onToggle, sub, children }) {
  return (
    <div className={`xr-row ${active ? "on" : ""} ${disabled ? "off" : ""} ${sub ? "sub" : ""}`}>
      <button className="xr-row-hit" onClick={onToggle} disabled={disabled}>
        <span className="xr-check">{active ? <Check size={13} strokeWidth={3} /> : null}</span>
        <span className="xr-row-name">{name}</span>
        <span className={`xr-row-cost ${cost < 0 ? "neg" : cost > 0 ? "pos" : ""}`}>{costLabel(cost)}</span>
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
      <div className="xr-group-bar"><Crown size={14} strokeWidth={2.4} /> Command</div>
      <div className="xr-cmd-tables">
        {Object.entries(COMMANDER_TABLES).map(([key, t]) => (
          <button key={key} className={`xr-cmd-tab ${tbl === key ? "on" : ""}`} onClick={() => onTable(key)}>
            {t.label}
          </button>
        ))}
      </div>
      <p className="xr-cmd-blurb">{COMMANDER_TABLES[tbl].blurb}</p>
      <button className="xr-roll" onClick={onRoll}>
        <Dices size={16} strokeWidth={2.2} /> {trait ? "Reroll trait" : "Roll a trait"}
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
          <Crown size={18} strokeWidth={2.2} />
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
          <button onClick={() => onDup(u.key)} aria-label="Duplicate" title="Duplicate"><Copy size={16} /></button>
          <button onClick={() => onDel(u.key)} aria-label="Remove" title="Remove"><Trash2 size={16} /></button>
        </div>
      </div>

      {/* stat groups */}
      <div className="xr-stats">
        <div className="xr-statgroup">
          <div className="xr-statgroup-h">Activation <em>2d6</em></div>
          <div className="xr-statgrid act">
            {ACT_DEFS.map((d) => (
              <ActCell key={d.key} def={d} raw={t.noAttack && d.key === "atk" ? "—" : t.act[d.key]} />
            ))}
          </div>
        </div>
        <div className="xr-statgroup">
          <div className="xr-statgroup-h">Profile</div>
          <div className="xr-statgrid prof">
            {PROF_DEFS.map((d) => (
              <ProfCell key={d.key} def={d} prof={t.prof} sp={sp} />
            ))}
          </div>
        </div>
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
        <div className="xr-pr-meta">Xenos Rampant &middot; {used}/{budget} pts &middot; {count} units</div>
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
                <em> — {t.name}</em>
              </span>
              <span className="xr-pr-unit-pts">{pts} pts &middot; {sp} SP</span>
            </div>
            <div className="xr-pr-stats">
              <span>Act &mdash; A {parseAct(t.noAttack ? "—" : a.atk).val} / M {parseAct(a.mov).val} / S {parseAct(a.sho).val} / C {parseAct(a.cou).val}</span>
              <span>Prof &mdash; A {p.atk} / D {p.def} / S {p.sho} / Arm {p.arm} / Mov {p.mov}</span>
            </div>
            <div className="xr-pr-rules">{t.special.filter((s) => s !== "None").join(", ")}</div>
            {opts.map((o) => (
              <div className="xr-pr-line" key={o.id}><b>{o.name}</b> ({costLabel(optCost(o))}) — {o.text}</div>
            ))}
            {xenos.map((x) => (
              <div className="xr-pr-line" key={x.id}><b>{x.name}</b> ({costLabel(xenoCost(x, u.xenos[x.id]))}) — {x.text}</div>
            ))}
            {trait && <div className="xr-pr-line"><b>Trait: {trait.name}</b> — {trait.rule}</div>}
          </div>
        );
      })}
    </div>
  );
}

/* ================================================================== *
 * APP
 * ================================================================== */
export default function App() {
  const [budget, setBudget] = useState(24);
  const [det, setDet] = useState("");
  const [roster, setRoster] = useState([]);

  const { issues, used, count } = useMemo(() => validate(roster, budget), [roster, budget]);
  const errors = issues.filter((i) => i.lvl === "err");
  const status = errors.length ? "err" : count === 0 ? "empty" : "ok";

  /* mutations */
  const addUnit = (typeId) =>
    setRoster((r) => [
      ...r,
      { key: uid(), typeId, name: "", isCmd: r.length === 0, traitTable: "aggressive", traitIndex: undefined, options: {}, xenos: {} },
    ]);
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
    const lines = [`${det || "Untitled Detachment"} — ${used}/${budget} pts, ${count} units`, ""];
    roster.forEach((u, i) => {
      const t = UNIT_BY_ID[u.typeId];
      lines.push(`${u.isCmd ? "[CMD] " : ""}${u.name || `${t.name} ${i + 1}`} — ${t.name} (${unitPoints(u)} pts, ${unitSP(u)} SP)`);
      t.options.filter((o) => u.options[o.id]).forEach((o) => lines.push(`  · ${o.name} (${costLabel(optCost(o))})`));
      XENO_RULES.filter((x) => x.id in u.xenos).forEach((x) => lines.push(`  · ${x.name} (${costLabel(xenoCost(x, u.xenos[x.id]))})`));
      if (u.isCmd && typeof u.traitIndex === "number") {
        const tr = COMMANDER_TABLES[u.traitTable || "aggressive"].traits[u.traitIndex];
        lines.push(`  · Trait: ${tr.name}`);
      }
    });
    navigator.clipboard?.writeText(lines.join("\n"));
  };

  const grouped = CATS.map((c) => ({ ...c, units: UNIT_TYPES.filter((t) => catOf(t) === c.id) }));

  return (
    <div className="xr-app">
      <style>{CSS}</style>

      {/* masthead */}
      <header className="xr-mast">
        <div className="xr-mast-row">
          <div className="xr-brand">
            <h1 className="xr-word">Xenos Rampant</h1>
            <span className="xr-sub">Force Builder</span>
          </div>
          <div className="xr-mast-right">
            <Muster used={used} budget={budget} />
            <div className="xr-actions">
              <button className="xr-act" onClick={() => window.print()}><Printer size={15} strokeWidth={2.2} /> Print</button>
              <button className="xr-act" onClick={copyList}><Copy size={15} strokeWidth={2.2} /> Copy</button>
              <button className="xr-act danger" onClick={clearAll}><RotateCcw size={15} strokeWidth={2.2} /> Clear</button>
            </div>
          </div>
        </div>
        <div className="xr-mast-row2">
          <input className="xr-detname" value={det} placeholder="Name your detachment" onChange={(e) => setDet(e.target.value)} spellCheck={false} />
          <div className="xr-budget">
            <span className="xr-budget-l">Budget</span>
            {BUDGET_PRESETS.map((b) => (
              <button key={b} className={`xr-budget-b ${budget === b ? "on" : ""}`} onClick={() => setBudget(b)}>{b}</button>
            ))}
          </div>
          <div className={`xr-status ${status}`}>
            {status === "ok" && (<><Check size={14} strokeWidth={3} /> {count} units, legal</>)}
            {status === "err" && (<><AlertTriangle size={14} strokeWidth={2.6} /> {errors.length} {errors.length === 1 ? "issue" : "issues"}</>)}
            {status === "empty" && (<>Empty detachment</>)}
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
        {/* catalogue */}
        <aside className="xr-catalogue">
          {grouped.map((g) => (
            <section className="xr-catsec" key={g.id}>
              <div className={`xr-catsec-h cat-${g.id}`}><g.Icon size={15} strokeWidth={2.3} /> {g.label}</div>
              <div className="xr-catsec-list">
                {g.units.map((t) => <CatalogCard key={t.id} t={t} onAdd={addUnit} />)}
              </div>
            </section>
          ))}
        </aside>

        {/* roster */}
        <main className="xr-roster">
          {roster.length === 0 ? (
            <div className="xr-empty">
              <Skull size={40} strokeWidth={1.3} />
              <p>Pick units from the catalogue to muster your detachment.</p>
              <span>Standard games are 24 points. One unit must be your Commander.</span>
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

      <PrintSheet roster={roster} det={det} budget={budget} used={used} count={count} />
    </div>
  );
}

/* ================================================================== *
 * STYLE
 * ================================================================== */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600;700;800&family=Oswald:wght@400;500;600;700&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

.xr-app{
  --void:#15110B; --slab:#1F1A12; --slab2:#26201533; --panel:#221C13;
  --edge:#3C3322; --edge2:#4D4230;
  --bone:#ECE3CC; --bone-dim:#B6AA8C; --ash:#8A7E64; --faint:#6A5F49;
  --spice:#C9701E; --spice-br:#E58A2E; --spice-soft:#C9701E22;
  --gold:#C8A53C; --gold-br:#E0BE52; --gold-soft:#C8A53C22;
  --steel:#7C8A92; --steel-br:#A6B6BF; --steel-soft:#7C8A9222;
  --blood:#C2402E; --blood-soft:#C2402E22;
  --disp:'Big Shoulders Display',sans-serif;
  --cond:'Oswald',sans-serif;
  --body:'Barlow',system-ui,sans-serif;
  background:
    radial-gradient(120% 80% at 50% -10%, #221b11 0%, var(--void) 60%) fixed,
    var(--void);
  color:var(--bone); font-family:var(--body); font-size:16px; line-height:1.5;
  min-height:100vh;
}
.xr-app *{box-sizing:border-box;}
.xr-app button{font-family:inherit;cursor:pointer;color:inherit;background:none;border:none;}
.xr-app input{font-family:inherit;}
.xr-app ::selection{background:var(--spice);color:#1a1209;}
.xr-app :focus-visible{outline:2px solid var(--spice-br);outline-offset:2px;}

/* ---------- masthead ---------- */
.xr-mast{
  position:sticky; top:0; z-index:30;
  background:linear-gradient(180deg,#1c160e 0%, #18130c 100%);
  border-bottom:1px solid var(--edge);
  box-shadow:0 10px 30px -12px #000a;
  padding:14px clamp(12px,3vw,30px) 12px;
}
.xr-mast-row{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;}
.xr-brand{display:flex;align-items:baseline;gap:14px;}
.xr-word{
  font-family:var(--disp); font-weight:800; font-size:clamp(30px,5vw,52px);
  letter-spacing:.06em; text-transform:uppercase; line-height:.82; margin:0;
  color:var(--bone);
  text-shadow:0 2px 0 #0007;
}
.xr-sub{
  font-family:var(--cond); font-weight:600; text-transform:uppercase;
  letter-spacing:.42em; font-size:clamp(11px,1.4vw,15px); color:var(--spice);
  padding-bottom:3px;
}
.xr-mast-right{display:flex;align-items:center;gap:18px;flex-wrap:wrap;}
.xr-actions{display:flex;gap:8px;}
.xr-act{
  display:inline-flex;align-items:center;gap:7px;
  font-family:var(--cond);font-weight:500;text-transform:uppercase;letter-spacing:.12em;
  font-size:13px;color:var(--bone-dim);
  border:1px solid var(--edge2);background:#ffffff05;
  padding:9px 13px;border-radius:2px;transition:.13s;
}
.xr-act:hover{color:var(--bone);border-color:var(--spice);background:var(--spice-soft);}
.xr-act.danger:hover{color:#fff;border-color:var(--blood);background:var(--blood-soft);}

/* gauge */
.xr-muster{min-width:230px;}
.xr-muster-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:5px;}
.xr-muster-label{font-family:var(--cond);font-weight:600;text-transform:uppercase;letter-spacing:.3em;font-size:11px;color:var(--ash);}
.xr-muster-read{font-family:var(--disp);font-weight:700;line-height:1;}
.xr-muster-read b{font-size:30px;color:var(--bone);}
.xr-muster-slash{font-size:20px;color:var(--faint);margin:0 2px;}
.xr-muster-budget{font-size:22px;color:var(--bone-dim);}
.xr-muster-pts{font-family:var(--cond);font-weight:500;font-size:12px;color:var(--ash);text-transform:uppercase;letter-spacing:.14em;margin-left:5px;}
.xr-muster-track{
  position:relative;height:14px;border:1px solid var(--edge2);
  background:#0d0a06;border-radius:2px;overflow:hidden;
}
.xr-muster-fill{height:100%;transition:width .25s cubic-bezier(.4,0,.2,1);
  background:linear-gradient(90deg,var(--spice),var(--spice-br));}
.xr-muster.near .xr-muster-fill{background:linear-gradient(90deg,var(--gold),var(--gold-br));}
.xr-muster.over .xr-muster-fill{background:linear-gradient(90deg,var(--blood),#E0563F);}
.xr-muster-over{position:absolute;inset:0;border:1px solid var(--blood);pointer-events:none;
  box-shadow:inset 0 0 12px var(--blood-soft);}
.xr-muster-ticks{position:absolute;inset:0;pointer-events:none;
  background-image:repeating-linear-gradient(90deg,#0000 0 calc(10% - 1px),#00000055 calc(10% - 1px) 10%);}

.xr-mast-row2{display:flex;align-items:center;gap:16px;margin-top:13px;flex-wrap:wrap;}
.xr-detname{
  flex:1;min-width:180px;
  font-family:var(--disp);font-weight:600;font-size:21px;letter-spacing:.02em;
  color:var(--bone);background:transparent;
  border:none;border-bottom:1px solid var(--edge2);padding:4px 2px 6px;
}
.xr-detname::placeholder{color:var(--faint);}
.xr-detname:focus{outline:none;border-bottom-color:var(--spice);}
.xr-budget{display:flex;align-items:center;gap:5px;}
.xr-budget-l{font-family:var(--cond);font-weight:600;text-transform:uppercase;letter-spacing:.2em;font-size:11px;color:var(--ash);margin-right:4px;}
.xr-budget-b{
  font-family:var(--cond);font-weight:600;font-size:14px;color:var(--bone-dim);
  border:1px solid var(--edge2);min-width:38px;padding:6px 4px;border-radius:2px;transition:.12s;
}
.xr-budget-b:hover{border-color:var(--spice);color:var(--bone);}
.xr-budget-b.on{background:var(--spice);border-color:var(--spice);color:#1a1209;}
.xr-status{
  display:inline-flex;align-items:center;gap:7px;
  font-family:var(--cond);font-weight:600;text-transform:uppercase;letter-spacing:.12em;font-size:12px;
  padding:7px 12px;border-radius:2px;border:1px solid var(--edge2);
}
.xr-status.ok{color:#9bd17e;border-color:#3f5a35;background:#9bd17e12;}
.xr-status.err{color:#e8927f;border-color:#5a342c;background:var(--blood-soft);}
.xr-status.empty{color:var(--ash);}
.xr-issues{display:flex;flex-wrap:wrap;gap:7px;margin-top:11px;}
.xr-issue{font-family:var(--cond);font-weight:500;font-size:12.5px;letter-spacing:.02em;
  padding:5px 10px;border-radius:2px;border-left:3px solid;}
.xr-issue.err{color:#e8927f;background:var(--blood-soft);border-color:var(--blood);}
.xr-issue.warn{color:var(--gold-br);background:var(--gold-soft);border-color:var(--gold);}

/* ---------- body ---------- */
.xr-body{display:grid;grid-template-columns:minmax(280px,360px) 1fr;gap:0;align-items:start;}
@media(max-width:880px){.xr-body{grid-template-columns:1fr;}}

/* catalogue */
.xr-catalogue{
  position:sticky;top:166px;align-self:start;max-height:calc(100vh - 166px);overflow-y:auto;
  padding:18px clamp(10px,1.5vw,16px) 40px;border-right:1px solid var(--edge);
}
@media(max-width:880px){.xr-catalogue{position:static;max-height:none;border-right:none;border-bottom:1px solid var(--edge);}}
.xr-catsec{margin-bottom:22px;}
.xr-catsec-h{
  display:flex;align-items:center;gap:8px;
  font-family:var(--disp);font-weight:700;text-transform:uppercase;letter-spacing:.16em;
  font-size:16px;color:var(--bone);padding-bottom:8px;margin-bottom:10px;
  border-bottom:1px solid var(--edge2);
}
.xr-catsec-h.cat-inf{color:var(--spice-br);}
.xr-catsec-h.cat-xeno{color:var(--spice-br);}
.xr-catsec-h.cat-veh{color:var(--steel-br);}
.xr-catsec-list{display:flex;flex-direction:column;gap:8px;}
.xr-cat-card{
  text-align:left;border:1px solid var(--edge);background:var(--slab);
  border-left:3px solid var(--spice);padding:11px 13px;border-radius:2px;transition:.13s;
}
.xr-cat-card.cat-veh{border-left-color:var(--steel);}
.xr-cat-card:hover{background:#2a2316;border-color:var(--edge2);transform:translateX(2px);}
.xr-cat-card:hover .xr-cat-add{background:var(--spice);color:#1a1209;border-color:var(--spice);}
.xr-cat-top{display:flex;align-items:baseline;justify-content:space-between;gap:10px;}
.xr-cat-name{font-family:var(--disp);font-weight:700;font-size:19px;letter-spacing:.02em;color:var(--bone);}
.xr-cat-cost{font-family:var(--disp);font-weight:700;font-size:20px;color:var(--spice-br);}
.xr-cat-card.cat-veh .xr-cat-cost{color:var(--steel-br);}
.xr-cat-cost i{font-family:var(--cond);font-weight:500;font-style:normal;font-size:10px;color:var(--ash);text-transform:uppercase;letter-spacing:.1em;margin-left:3px;}
.xr-cat-role{font-size:12.5px;line-height:1.42;color:var(--bone-dim);margin:5px 0 9px;}
.xr-cat-ribbon{display:flex;align-items:center;gap:11px;flex-wrap:wrap;}
.xr-cat-ribbon span{display:inline-flex;align-items:center;gap:3px;
  font-family:var(--cond);font-weight:600;font-size:13px;color:var(--ash);}
.xr-cat-ribbon span svg{color:var(--faint);}
.xr-cat-add{margin-left:auto;display:inline-flex;align-items:center;justify-content:center;
  width:24px;height:24px;border:1px solid var(--edge2);border-radius:2px;color:var(--bone-dim);transition:.13s;}

/* roster */
.xr-roster{padding:18px clamp(12px,2.5vw,28px) 80px;display:flex;flex-direction:column;gap:16px;}
.xr-empty{
  border:1px dashed var(--edge2);border-radius:3px;padding:70px 30px;text-align:center;
  color:var(--ash);margin-top:24px;
}
.xr-empty svg{color:var(--faint);margin-bottom:14px;}
.xr-empty p{font-family:var(--disp);font-weight:600;font-size:20px;color:var(--bone-dim);margin:0 0 6px;letter-spacing:.02em;}
.xr-empty span{font-size:13.5px;}

.xr-unit{
  border:1px solid var(--edge);background:linear-gradient(180deg,var(--panel),#1d180f);
  border-radius:3px;border-left:4px solid var(--spice);overflow:hidden;
  box-shadow:0 12px 26px -18px #000;
}
.xr-unit.role-veh{border-left-color:var(--steel);}
.xr-unit.role-cmd{border-left-color:var(--gold);box-shadow:0 0 0 1px var(--gold-soft),0 12px 26px -18px #000;}

.xr-unit-head{display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid var(--edge);background:#ffffff04;}
.xr-crown{
  flex:none;width:38px;height:38px;border:1px solid var(--edge2);border-radius:2px;
  display:flex;align-items:center;justify-content:center;color:var(--faint);transition:.13s;
}
.xr-crown:hover{color:var(--gold);border-color:var(--gold);}
.xr-crown.on{color:#1a1209;background:var(--gold);border-color:var(--gold);}
.xr-unit-id{flex:1;min-width:0;}
.xr-unit-name{
  width:100%;font-family:var(--disp);font-weight:700;font-size:clamp(22px,3vw,30px);
  letter-spacing:.02em;color:var(--bone);background:transparent;border:none;
  border-bottom:1px solid transparent;padding:0 0 1px;line-height:1.04;
}
.xr-unit-name::placeholder{color:var(--faint);}
.xr-unit-name:focus{outline:none;border-bottom-color:var(--edge2);}
.xr-unit-type{font-family:var(--cond);font-weight:500;text-transform:uppercase;letter-spacing:.16em;font-size:12px;color:var(--ash);margin-top:3px;}
.xr-tag-cmd{color:var(--gold);margin-right:9px;border:1px solid var(--gold-soft);background:var(--gold-soft);padding:1px 6px;border-radius:2px;letter-spacing:.12em;}
.xr-unit-readout{text-align:right;flex:none;}
.xr-ro-pts{font-family:var(--disp);font-weight:800;font-size:30px;line-height:.9;color:var(--bone);}
.xr-ro-pts i{font-family:var(--cond);font-weight:500;font-style:normal;font-size:11px;color:var(--ash);text-transform:uppercase;letter-spacing:.12em;margin-left:3px;}
.xr-ro-sp{display:inline-flex;align-items:center;gap:3px;font-family:var(--cond);font-weight:600;font-size:12px;color:var(--spice-br);margin-top:2px;}
.xr-unit.role-veh .xr-ro-sp{color:var(--steel-br);}
.xr-unit-tools{display:flex;gap:4px;flex:none;}
.xr-unit-tools button{width:34px;height:34px;border:1px solid var(--edge2);border-radius:2px;color:var(--ash);display:flex;align-items:center;justify-content:center;transition:.12s;}
.xr-unit-tools button:hover{color:var(--bone);border-color:var(--spice);background:var(--spice-soft);}
.xr-unit-tools button:last-child:hover{color:#fff;border-color:var(--blood);background:var(--blood-soft);}

/* stat groups */
.xr-stats{display:grid;grid-template-columns:auto 1fr;gap:1px;background:var(--edge);}
@media(max-width:620px){.xr-stats{grid-template-columns:1fr;}}
.xr-statgroup{background:#1d180f;padding:11px 14px 13px;}
.xr-statgroup-h{font-family:var(--cond);font-weight:600;text-transform:uppercase;letter-spacing:.24em;font-size:10.5px;color:var(--ash);margin-bottom:9px;}
.xr-statgroup-h em{font-style:normal;color:var(--faint);margin-left:5px;letter-spacing:.1em;}
.xr-statgrid{display:grid;gap:7px 9px;}
.xr-statgrid.act{grid-template-columns:repeat(2,1fr);}
.xr-statgrid.prof{grid-template-columns:repeat(3,1fr);}
@media(max-width:620px){.xr-statgrid.prof{grid-template-columns:repeat(3,1fr);}}
.xr-stat{display:flex;align-items:center;gap:8px;}
.xr-stat-ic{color:var(--spice);flex:none;}
.xr-unit.role-veh .xr-stat-ic{color:var(--steel);}
.xr-stat.muted .xr-stat-ic{color:var(--faint);}
.xr-stat-body{min-width:0;line-height:1;}
.xr-stat-val{font-family:var(--cond);font-weight:600;font-size:21px;color:var(--bone);}
.xr-stat-rng{font-family:var(--cond);font-weight:500;font-size:12px;color:var(--ash);margin-left:3px;}
.xr-stat.muted .xr-stat-val{color:var(--faint);}
.xr-stat-key{font-family:var(--cond);font-weight:500;text-transform:uppercase;letter-spacing:.1em;font-size:10px;color:var(--ash);margin-top:2px;}
.xr-free{font-style:normal;color:var(--spice-br);margin-left:5px;letter-spacing:.08em;}

/* groups */
.xr-group{border-top:1px solid var(--edge);padding:13px 14px;}
.xr-group-bar{display:inline-flex;align-items:center;gap:7px;font-family:var(--cond);font-weight:600;text-transform:uppercase;letter-spacing:.22em;font-size:11px;color:var(--spice-br);margin-bottom:11px;}
.xr-unit.role-veh .xr-group-bar{color:var(--steel-br);}
.xr-group-bar svg{color:inherit;}

.xr-rules{display:flex;flex-direction:column;gap:9px;}
.xr-defn-name{font-family:var(--cond);font-weight:600;font-size:14px;color:var(--bone);letter-spacing:.02em;}
.xr-defn-text{font-size:13px;line-height:1.46;color:var(--bone-dim);margin:2px 0 0;}

/* rows (options / xeno) */
.xr-row{border-top:1px solid #00000030;padding:8px 0;}
.xr-row:first-of-type{border-top:none;}
.xr-row-hit{display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:2px 0;}
.xr-check{flex:none;width:18px;height:18px;border:1px solid var(--edge2);border-radius:2px;display:flex;align-items:center;justify-content:center;color:#1a1209;transition:.12s;}
.xr-row.on .xr-check{background:var(--spice);border-color:var(--spice);}
.xr-row-name{flex:1;font-family:var(--cond);font-weight:500;font-size:15px;color:var(--bone-dim);}
.xr-row.on .xr-row-name{color:var(--bone);font-weight:600;}
.xr-row-cost{font-family:var(--disp);font-weight:700;font-size:16px;color:var(--ash);min-width:34px;text-align:right;}
.xr-row-cost.pos{color:var(--spice-br);}
.xr-row-cost.neg{color:#8fbf6e;}
.xr-row-text{font-size:12.5px;line-height:1.45;color:var(--ash);margin:5px 0 0 28px;}
.xr-row.on .xr-row-text{color:var(--bone-dim);}
.xr-row.off{opacity:.45;}
.xr-row.off .xr-row-hit{cursor:not-allowed;}
.xr-subs{margin:8px 0 2px 28px;padding-left:12px;border-left:1px solid var(--edge2);}
.xr-row.sub{padding:6px 0;}
.xr-row.sub .xr-row-name{font-size:14px;}
.xr-row.sub .xr-row-text{margin-left:28px;}

.xr-tiers{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 2px 28px;}
.xr-tier{font-family:var(--cond);font-weight:500;font-size:12.5px;color:var(--bone-dim);border:1px solid var(--edge2);padding:5px 9px;border-radius:2px;transition:.12s;}
.xr-tier i{font-style:normal;color:var(--ash);margin-left:4px;}
.xr-tier:hover{border-color:var(--spice);}
.xr-tier.on{background:var(--spice-soft);border-color:var(--spice);color:var(--bone);}
.xr-tier.on i{color:var(--spice-br);}

/* command */
.xr-command{background:linear-gradient(180deg,#241d0f,#1d1709);}
.xr-command .xr-group-bar{color:var(--gold-br);}
.xr-cmd-tables{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;}
@media(max-width:520px){.xr-cmd-tables{grid-template-columns:repeat(2,1fr);}}
.xr-cmd-tab{font-family:var(--cond);font-weight:600;text-transform:uppercase;letter-spacing:.1em;font-size:12px;color:var(--bone-dim);border:1px solid var(--edge2);padding:8px 4px;border-radius:2px;transition:.12s;}
.xr-cmd-tab:hover{border-color:var(--gold);}
.xr-cmd-tab.on{background:var(--gold);border-color:var(--gold);color:#1a1209;}
.xr-cmd-blurb{font-size:12.5px;color:var(--ash);margin:9px 0;font-style:italic;}
.xr-roll{display:inline-flex;align-items:center;gap:8px;font-family:var(--cond);font-weight:600;text-transform:uppercase;letter-spacing:.12em;font-size:13px;color:var(--gold-br);border:1px solid var(--gold);background:var(--gold-soft);padding:9px 15px;border-radius:2px;transition:.12s;}
.xr-roll:hover{background:var(--gold);color:#1a1209;}
.xr-trait{margin-top:11px;border:1px solid var(--gold-soft);border-left:3px solid var(--gold);background:#00000028;padding:10px 13px;border-radius:2px;}
.xr-trait-name{font-family:var(--disp);font-weight:700;font-size:19px;color:var(--gold-br);letter-spacing:.02em;}
.xr-trait-rule{font-size:13px;line-height:1.46;color:var(--bone-dim);margin:4px 0 0;}

/* ---------- print sheet ---------- */
.xr-printsheet{display:none;}

@media print{
  .xr-app{background:#fff !important;color:#000;}
  .xr-mast,.xr-body{display:none !important;}
  .xr-printsheet{display:block;font-family:Georgia,'Times New Roman',serif;color:#000;padding:0;}
  .xr-pr-head{border-bottom:2px solid #000;padding-bottom:8px;margin-bottom:14px;}
  .xr-pr-title{font-family:var(--disp);font-weight:800;font-size:30px;text-transform:uppercase;letter-spacing:.03em;}
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
