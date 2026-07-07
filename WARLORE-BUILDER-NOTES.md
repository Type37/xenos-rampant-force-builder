# WarLore builder notes

Working principles for the WarLore wargaming builders, and how the icon system works,
so any of these apps (Xenos Rampant, Dropfleet, ABS, Steel Rift, and the rest) get
built the same way. Written from everything drilled in during the Xenos Rampant sessions.
Point me at this file at the start of a session and say "follow the WarLore notes."

---

## 1. How to work with me

- **Act, don't interview.** When the ask is clear, do it. Recommend one option, don't
  survey five. Only stop to ask when the choice is genuinely yours to make and I can't
  get it from the code, the request, or a sensible default.
- **Recover context.** When you say "I already told you," dig through the prior session
  transcripts before asking again. The answer is usually there.
- **Verify in the browser, then show proof.** Run the dev server, drive it, read the DOM,
  screenshot the result. Don't ask you to check by hand.
- **Build before shipping.** `npm run build` has to pass. Commit and push only when asked;
  push to `main` and let Pages auto-deploy.
- **Fix the root cause, then add a net.** When a preset crashed the panel, I fixed the bad
  data path *and* added an error boundary so a stray throw shows a recovery screen, not a
  white page.
- **Batch the work, commit in coherent chunks.** A big list becomes several focused commits,
  each verified.
- **Copyright.** These are fan tools. Game stats and rules are transcribed as *data*, kept
  faithful and concise. I won't paste long rulebook prose into docs, and I won't reproduce
  anyone's product art myself. Images you want used, you drop as files and I place them.

## 2. Copy and voice

- No em dashes. No hyphen used as a dash. No interpunct separators. No ellipsis as filler.
- Sentence case everywhere. Vary sentence length. No tricolons, no three-adjective stacks,
  no marketing slop, no "unlock/elevate/seamless" AI filler.
- Active voice on controls. A button and the thing it does should share a word.
- When you post something publicly, it reads like *you*: a person who likes the game and
  wants friends to play it, not SEO copy.

## 3. The Field Almanac design system

- **Palette:** cream paper `#F4ECD8`, bottle-green ink `#1F3D2E`, coral `#F4604C` (fill only,
  never as small text). Category tints: sage (infantry), iris (xenomorphs), rust (vehicles),
  brass (Commander).
- **Type:** Hyper Scrypt for the title, Sligoil Micro for stat/number readouts, Zilla Slab /
  Source Serif for headings and body, Terminal Grotesque Open for the **WarLore** wordmark.
  The wordmark is **always gold `#FFCC00` on black**, and inverts on hover. That's a standing
  brand rule, don't touch it.
- **A11y:** minimum 16px on-screen type, AA contrast, 44px+ targets, honour
  `prefers-reduced-motion`, keep a visible `:focus-visible` ring.
- Palette, radii and type live as CSS variables at the top of the CSS string under `.xr-app`.

## 4. Print philosophy

- **Print math must match the builder math.** Print runs each unit through the same
  `deriveStats` the builder uses, so options and xeno rules that change a stat (Super Heavy
  Armour, Mobile, Increased Squad Size, Unarmed) read correctly, never the base numbers.
- **Attach rules to their unit.** Each unit card carries its own special rules. No floating
  glossary detached from the units it belongs to.
- **Only define a *granted* rule.** A nested rule is pulled in only when an ability genuinely
  grants it (Demonic grants Fearsome and Unstable), not just because the wording names another
  rule. Curated grants map, not a text scan.
- **Condense.** Psychic prints as its class plus the chosen powers, not the whole rule.
  Tiered rules show their level (Force Field, class).
- **Dense and real.** A4 page proportions, small tight text, Strength Points as bubbles, the
  sheet header kept small. It should look like the page that will actually print.

## 5. Layout preferences (learned the hard way)

- Points / game-size dock lives **bottom-left, sticky, above the footer** (not fixed below it).
- Game size is a **stepper** in that dock, 24 marked "default". No separate switcher.
- Commander toggle sits **top-right** of a unit's page. Duplicate/delete live on the unit's
  **left card**, not in the panel.
- The detachment **emblem box is clickable**: it opens the picker (library or upload).
- **New detachment** uses email-style floating-label fields, in order: emblem, name (with a
  "get a random one" roll from the full name pool), game size, description, save-to-setting.
- **Save to setting** files a detachment into a collection; the five rulebook settings are
  offered as ready collections. The dashboard groups by collection.
- Removed for good: Faction from settings, National trait, the free-chip legend on print.

## 6. Data rules that bite

- **Tiered xeno rules store a numeric tier index, never `true`.** A boolean where a tier
  index belongs crashes every tier lookup. `sanitize` now coerces bad values to tier 0, and
  lookups are guarded, so old saved and shared lists heal.
- **Points fields must equal computed points.** A hand-typed `points` on a preset unit has to
  match what `unitPoints` computes, or the card and the builder disagree (Scrapbots read 23
  while the real total was 24).
- Summaries spell out tiered rules: the psychic class and chosen powers, the force-field level.
- WIP preset sections are flagged (`hidden` or `comingSoon`) so their data stays wired but they
  don't show until they're ready.

---

## 7. Icons: how they work and how to ask for them

Every icon is an [Iconify](https://icon-sets.iconify.design/) glyph, bundled **offline** as
inline SVG. No runtime, no network, nothing to fetch.

### Telling me which icon you want

Give me the Iconify id in **`set:name`** form, exactly as it appears on
`icon-sets.iconify.design`. For example: `game-icons:dragon-head`, `mdi:skull-crossbones`,
`fa6-brands:mandalorian`. You can paste a whole list. I'll wire up every one that resolves and
tell you which didn't.

### How I bundle one

```js
// set:name  ->  @iconify-icons/<set>/<name>
import icDragon from "@iconify-icons/game-icons/dragon-head";

// mk() wraps the icon data into a tiny component. viewBox comes from the icon,
// so any set works. Offline, inline, no runtime.
const Dragon = mk(icDragon);
// then <Dragon size={24} />
```

For the detachment **emblem picker**, the icon also gets an entry in `DETACH_ICON_LIST`
with a stable `id` (stored on the saved list) and the `mk()` component.

### Rules for picking sets

- **Monochrome only.** Emblems are all black and white. Single-colour sets (game-icons,
  mdi, tabler, Font Awesome, Simple Icons, arcticons, CoreUI `cil`, healthicons,
  material-symbols, iconamoon, file-icons, `ic`) render in the ink colour and are safe.
- **Colour and two-tone sets get forced to mono.** `material-icon-theme`, `streamline-*-color`,
  `icon-park-solid` / `icon-park-twotone` hardcode colours. The extraction pipeline (below)
  rewrites every `fill`/`stroke` to `currentColor` (leaving `fill="none"` and opacity alone), so
  even these end up black and white.
- **Sets with no per-icon package are extracted, not skipped.** `streamline-sharp`,
  `streamline-cyber`, `streamline-ultimate`, `meteor-icons`, `token`, `picon` have no
  `@iconify-icons` package. For those, install `@iconify-json/<set>` (the whole-set JSON), run a
  small Node script that pulls only the icons wanted, forces them mono, and writes
  `src/emblems-extra.js` (data baked inline). Then uninstall the heavy JSON deps: nothing ships
  but the icons used. `fa7-*` maps to the `fa6-*` packages (where the Star Wars brands live).
- Simple per-icon sets: `npm install @iconify-icons/<set>`, then import per icon (tree-shaken).

### Currently bundled emblems (116, all monochrome)

Removed on request and no longer offered: gooey-daemon, spiked-shield, robot-golem,
cyborg-face, rocket-thruster, bat-mask, shield-echoes, alien-bug, cultist.

**game-icons** — crossed-swords, spartan-helmet, eagle-emblem, checked-shield,
skull-crossed-bones, death-skull, crown, laurel-crown, wolf-head, dragon-head, battle-tank,
crosshair, biohazard, star-formation, mailed-fist, angel-wings, gears, radar-dish, flame,
gun-rose, meeple-army, bear-face, double-dragon, dragon-spiral, monster-grasp, dead-eye,
centurion-helmet, elf-helmet, knight-banner, mounted-knight, crowned-skull, visored-helm,
barbute, alien-fire, alien-stare, spiky-explosion, crossed-pistols, wolf-howl, raven,
spider-alt, hydra, tiger-head

**mdi** — skull-crossbones, crosshairs-gps, cross-celtic, chess-knight, alien, cross-bolnisi,
crosshairs

**tabler** — meteor, sword

**simple-icons** — gunicorn, dassaultsystemes, gitlab

**fa6-brands** — empire, jedi-order, mandalorian, gitkraken, galactic-senate, joomla,
phoenix-squadron, watchman-monitoring, fulcrum, first-order, old-republic

**fa6-solid** — dragon, skull, khanda

**cil** — compress, functions-alt, football, diamond, life-ring, spa

**arcticons** — attacktheblock, openchaoschess, ai-chat, aaaaxy-alt, triodos-bank

**healthicons** — death, death-outline, skull

**material-symbols** — swords, chess-knight-sharp &nbsp; · &nbsp; **iconamoon** —
winking-face-fill &nbsp; · &nbsp; **file-icons** — dragonflybsd &nbsp; · &nbsp; **ic** —
twotone-shield-moon &nbsp; · &nbsp; **healthicons** — death-alt-outline &nbsp; · &nbsp;
**simple-icons** — redragon

Extracted from whole-set JSON and forced mono (`src/emblems-extra.js`): **streamline-sharp** —
sword-attack &nbsp; · &nbsp; **streamline-cyber** — crosshair-1 &nbsp; · &nbsp;
**streamline-ultimate** — space-rocket-earth-bold &nbsp; · &nbsp; **streamline-ultimate-color** —
martial-arts-helmet &nbsp; · &nbsp; **meteor-icons** — chevrons-up, gitlab, binance, bluesky
&nbsp; · &nbsp; **token** — gunz &nbsp; · &nbsp; **picon** — skull, fist &nbsp; · &nbsp;
**material-icon-theme** — dinophp &nbsp; · &nbsp; **game-icons** — warlord-helmet &nbsp; · &nbsp;
**arcticons** — dpg-fruhjahrstagungen, infinity-army, squad-busters, honor-ai-space,
essential-space, last-day-on-earth-survival, ac-odyssey-map, 7metronome, 7-literoj, waifu2x-ncnn
&nbsp; · &nbsp; **icon-park-solid** — dragon-zodiac &nbsp; · &nbsp; **icon-park-twotone** — halo,
cross-ring &nbsp; · &nbsp; **cryptocurrency** — spacehbit

### UI and stat icons (not emblems)

The interface uses **Phosphor** (`ph:*`) solid fills for controls (sword-fill, crosshair-simple-fill,
crown-simple-fill, printer-fill, dice-six-fill, and so on), plus `game-icons:alien-bug` and
`game-icons:apc` for the xenomorph and vehicle category marks. Stat-row icons (attack, move,
shoot, courage, defence, armour, strength) are hand-supplied PNGs knocked out to the ink colour,
in `src/assets/stat/`.
