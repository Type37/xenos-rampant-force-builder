/* Lists every preset whose printed book points (units[].points in premade.js)
   differ from what the builder adds up from data.js, plus options a unit type
   does not have (the builder drops those silently) and units under 1 point.

   Run: npm run check:presets. Exits 1 while anything is listed.

   The points sum mirrors unitPoints in src/App.jsx: base, plus option costs,
   plus xeno rule costs, with a tiered rule stored as `true` read as its first
   tier (as sanitize does). Most mismatches are exactly that: a preset that says
   force-field or exploder without a level, so the builder prices the cheapest. */
import { UNIT_BY_ID, XENO_BY_ID } from "../src/data.js";
import { SETTINGS } from "../src/premade.js";

function price(e) {
  const t = UNIT_BY_ID[e.typeId];
  if (!t) return { p: null, notes: [`unknown unit type ${e.typeId}`] };
  let p = t.base;
  const notes = [];
  for (const id of e.options || []) {
    const o = t.options.find((x) => x.id === id);
    if (o) p += o.cost || 0;
    else notes.push(`option ${id} is not on ${t.id}, dropped`);
  }
  for (const [id, v] of Object.entries(e.xenos || {})) {
    const r = XENO_BY_ID[id];
    if (!r) { notes.push(`unknown xeno rule ${id}`); continue; }
    if (r.tiers) {
      const ti = typeof v === "number" ? v : 0;
      if (typeof v !== "number") notes.push({ soft: true, msg: `${id} has no level, priced as ${r.tiers[0].label}` });
      p += r.tiers[ti].cost;
    } else p += r.cost || 0;
  }
  if (p !== null && p < 1) notes.push("under 1 point");
  return { p, notes };
}

let flagged = 0;
for (const s of SETTINGS) {
  for (const d of s.detachments || []) {
    let book = 0, calc = 0;
    const rows = [];
    for (const e of d.units) {
      const n = e.count || 1;
      const { p, notes } = price(e);
      book += (e.points || 0) * n;
      calc += (p ?? 0) * n;
      // a level hint only matters on a unit whose points are already off
      const hard = notes.some((x) => typeof x === "string");
      if (p !== e.points || hard) {
        const said = notes.map((x) => (typeof x === "string" ? x : x.msg));
        rows.push(`  ${e.label || e.typeId}${n > 1 ? ` x${n}` : ""}: book ${e.points}, builder ${p}${said.length ? ` (${said.join("; ")})` : ""}`);
      }
    }
    if (!rows.length && book === calc) continue;
    flagged++;
    console.log(`${s.hidden ? "[hidden] " : ""}${s.name} / ${d.name}: book ${book}, builder ${calc}`);
    rows.forEach((r) => console.log(r));
  }
}
console.log(flagged ? `\n${flagged} presets to check against the rulebook.` : "All presets match their book points.");
process.exit(flagged ? 1 : 0);
