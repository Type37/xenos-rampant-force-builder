/* Lists preset entries the builder cannot load as written: unknown unit
   types, options a unit type does not have, unknown xeno rules. The builder
   drops those silently. Run: npm run check:presets. Exits 1 while any remain. */
import { UNIT_BY_ID, XENO_BY_ID } from "../src/data.js";
import { SETTINGS } from "../src/premade.js";

let found = 0;
for (const s of SETTINGS) {
  for (const d of s.detachments || []) {
    for (const e of d.units) {
      const t = UNIT_BY_ID[e.typeId];
      const bad = !t ? [`unknown unit type ${e.typeId}`] : [
        ...(e.options || []).filter((id) => !t.options.some((o) => o.id === id)).map((id) => `option ${id} is not on ${t.id}`),
        ...Object.keys(e.xenos || {}).filter((id) => !XENO_BY_ID[id]).map((id) => `unknown xeno rule ${id}`),
      ];
      for (const msg of bad) { found++; console.log(`${s.name} / ${d.name} / ${e.label || e.typeId}: ${msg}`); }
    }
  }
}
console.log(found ? `\n${found} to fix in src/premade.js.` : "All presets load as written.");
process.exit(found ? 1 : 0);
