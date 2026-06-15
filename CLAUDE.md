# Xenos Rampant Force Builder

A single page web app for building a Xenos Rampant detachment (Osprey Games, 2022).
You pick units from a catalogue, configure loadouts and xeno rules inline, watch a
points gauge and live validation, then print a roster. It began as a UX flow study
by WarLore and is deployed for real use.

- Live: https://type37.github.io/xenos-rampant-force-builder/
- Repo: https://github.com/Type37/xenos-rampant-force-builder

Active work: a full visual redesign is specced in `REDESIGN-BRIEF.md`. Read that brief before
changing the UI. It inverts the current aesthetic, sets hard rules (min 16px type, AA contrast,
larger targets, icon plus text stats, cost on the left, columns, motion, a WarLore footer), and
maps every change to file and line anchors.

## Stack and commands

Vite + React 18. No router, no backend, no state library. Every bit of state lives in
React (`useState`) inside `src/App.jsx`. Node 18 or newer.

- `npm install` to set up
- `npm run dev` for the dev server
- `npm run build` for a production build into `dist/` (the Pages base path is `/xenos-rampant-force-builder/`)
- `npm run preview` to serve a build locally

There is no test suite. Verify changes by building and loading the dev server.

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to
GitHub Pages automatically, so app updates need nothing else. The link on the WarLore
wargaming hub (jetwong.neocities.org/wargaming) already points at the Pages URL, so
shipping a new build does not require any Neocities change.

Do not commit secrets. This repo is public. No API keys or tokens belong in it. Your
local git credentials handle the push; any manual Neocities or GitHub operations should
get their credentials from outside the repo and never be written into a file here.

## File map

- `src/data.js` is the source of truth for stats, options, rules, and traits. Hand built from the rulebook. See the data model below.
- `src/App.jsx` is the entire UI in one file: the icon layer, the calculation and validation helpers, all components, and an embedded CSS string. The CSS sits in a template literal at the bottom and is injected through a `<style>` tag, scoped under `.xr-app`.
- `src/main.jsx` mounts `App`.
- `src/index.css` is nearly empty (a body reset). Component styling is the CSS string in `App.jsx`.
- `index.html`, `vite.config.js` (sets the Pages base path), `.github/workflows/deploy.yml`.

## Data model (read before editing data.js)

Each unit in `UNIT_TYPES` carries two distinct stat blocks, because the game itself has both:

- `act` is the Activation block: the 2d6 target numbers you roll against to order an action (`atk`, `mov`, `sho`, `cou`). These are strings, sometimes `"Free (5+)"` or `"(Free) 6+"`. A `"—"` means the unit cannot take that action.
- `prof` is the combat profile: `atk` (Attack Value), `def` (Defence Value), `sho` (Shoot Value with range, e.g. `"4+ / 18\""`), `arm` (Armour, a flat integer rather than a target number), and `mov` (Maximum Movement, a distance). Strength Points come from the top level `sp` plus any option that raises it.

To-hit values are normalised to target number form (`N+`). The rulebook prints the worst
value as a bare `6`, which means `6+`, confirmed by its own "6 becomes 5+" wording. Keep
that convention when you edit. Official game terms keep their internal hyphens (Anti-Tank,
Armour-Piercing, High-Powered Blades, Soft-skin); those are data, not prose.

Options, xeno rules, and special rules all carry full rulebook text, which the UI and the
print sheet display. Option constraints:

- `conflicts` lists mutually exclusive options, cleared automatically when you select one.
- `requires` names a parent option, used for nested sub-options (for example the add-ons under Xenomorph Ranged Attack or a Technical).
- `sp` raises Strength Points.

Xeno rules may carry `tiers` (variable cost, e.g. Force Field, Psychic), `requiresXeno` or
`requiresAny` (gated until a prerequisite rule is taken), and `infantryOnly`. The
`sanitize()` helper in `App.jsx` drops anything whose prerequisite is missing after every
change, so keep calling it from any mutation. Per unit xeno eligibility is `xenoPolicy`,
which is `all`, `except` (a denylist), or `allowOnly` (an allowlist).

## Composition rules (in `validate()`)

Standard game is 24 points, with presets of 12, 18, 24, 30, and 36. At 24 points a
detachment is 3 to 10 units, scaled proportionally for other budgets. Exactly one unit is
the Commander (free, costing no points). At most one Fighting or Transport vehicle per full
18 points. Vehicle points, Soft-skin included, may not exceed half the budget.

## Design system

The direction is a warm "muster terminal", sitting between sci-fi and 40k with Dune weight.
Background is a warm near-black, not pure black. Palette and type are CSS variables at the
top of the CSS string under `.xr-app`. Accents are role coded: spice orange for infantry and
xenomorphs, gunmetal steel for vehicles, imperial gold for the Commander, blood red for over
budget and errors. Text is a bone parchment.

Fonts load via a Google Fonts `@import`: Big Shoulders Display carries the monumental display
work, Oswald handles condensed labels and stat numerals, Barlow sets body and rule text. The
signature element is the "Muster" gauge in the header, whose fill shifts from spice to gold to
blood as you approach and then cross the budget.

This is a real deployed app rather than a Claude.ai artifact, so browser storage works here.
There is currently no persistence; lists live in memory and reset on reload. localStorage or
a share by URL scheme would be a sensible addition.

## Icons

Icons come from Iconify, bundled offline (no runtime and no network call) and rendered as
inline SVG. `game-icons` supplies the thematic glyphs (stats, crown, dice, category headers)
and `tabler` supplies the plain controls (plus, trash, copy, check, printer, rotate). The
`mk()` helper at the top of `App.jsx` wraps each imported icon data object into a small
component and aliases them to the old lucide names, so usage still reads like
`<Swords size={17} />`. To swap an icon, import a different one from
`@iconify-icons/game-icons/<slug>` or `@iconify-icons/tabler/<slug>` and point the alias at
it. Confirm a slug exists by checking `node_modules/@iconify-icons/<set>/<slug>.js`.

## Copy conventions

UI text and any docs in this repo follow these rules. No em-dashes and no hyphen used as dash
punctuation. No interpunct separators. Sentence case. Vary sentence length. Avoid tricolons
and three-adjective stacks. No marketing filler. Use active voice on controls, and let a
button and the result it produces share a word.

## Provenance

All values are transcribed from Xenos Rampant (Osprey Games, 2022). This is a fan tool, not an
official product.
