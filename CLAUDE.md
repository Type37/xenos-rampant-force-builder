# Xenos Rampant Force Builder

A web app for building, printing, and playing a Xenos Rampant detachment (Osprey Games,
2022). It is modelled on Mike Hutchinson's Hobgoblin builder: a saved-lists dashboard, a
master-detail build screen (compact unit rows plus a detail/edit panel), a dedicated print
view, and an at-the-table play tracker. Built by WarLore, deployed for real use.

- Live: https://type37.github.io/xenos-rampant-force-builder/
- Repo: https://github.com/Type37/xenos-rampant-force-builder

Architecture at a glance. Four views behind a tiny hash router (`#/`, `#/build`,
`#/build/<unitKey>`, `#/print`, `#/play`): the Dashboard (saved detachments), the Builder
(master-detail; on mobile the detail panel becomes a full-screen drill-down), the PrintView
(live roster-table preview with section and accessibility toggles), and the PlayView (per-unit
SP damage pips, activation dice, activated/suppressed toggles, turn counter). Detachments and
per-game play state persist in `localStorage`. The Field Almanac skin is retained (cream paper,
bottle-green ink, coral). The previous single-screen version is kept, unimported, at
`src/legacy/App-v1.jsx` for reference; `REDESIGN-BRIEF.md` documents its redesign history.

## Stack and commands

Vite + React 18. No backend, no state library, no router package (a ~10-line hash router).
All app state lives in React inside `src/App.jsx`, mirrored to `localStorage`. Node 18 or newer.

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

- `src/data.js` is the source of truth for stats, options, rules, and traits. Hand built from the rulebook. See the data model below. Verified against an independent transcription (dickloraine/xenos-rampant-builder, MIT); it is clean.
- `src/App.jsx` is the whole app in one file: the icon layer (Phosphor, bundled offline), helpers, the hash router, the four views (Dashboard, Builder, PrintView, PlayView) plus their sub-components, and an embedded CSS string in a template literal at the bottom, injected via a `<style>` tag scoped under `.xr-app`.
- `src/legacy/App-v1.jsx` is the earlier single-screen version, kept for reference and NOT imported anywhere.
- `src/main.jsx` mounts `App`. `src/index.css` is a near-empty body reset; component styling is the CSS string in `App.jsx`.
- `public/fonts/` holds the bundled Velvetyne faces (Hyper Scrypt, Sligoil, Terminal Grotesque Open) and their OFL licenses.
- `index.html`, `vite.config.js` (sets the Pages base path), `.github/workflows/deploy.yml`.
- `documents/` is gitignored local reference (rulebook scans, the Hobgoblin design reference); never committed.

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

The direction is "Field Almanac": warm cream paper (`--paper #F4ECD8`), bottle-green ink
(`--ink #1F3D2E`), coral fill (`--coral #F4604C`, fill only, never as small text), with
category tints sage (infantry), iris (xenomorphs), rust (vehicles) and brass (Commander).
Palette, radii, and type are CSS variables at the top of the CSS string under `.xr-app`.
Minimum on-screen type is 16px, contrast is AA, targets are 44px+, motion honours
`prefers-reduced-motion`, and there is a visible `:focus-visible` ring.

Fonts (Google `@import` plus bundled Velvetyne faces): the Xenos Rampant title is **Hyper
Scrypt** (stencil display), stat and numeric readouts are **Sligoil Micro** (`--mono`),
headings/labels are **Zilla Slab** (`--display`), body and flavour are **Source Serif 4**
(`--body`). The WarLore footer credit is the **Terminal Grotesque Open** wordmark, and per a
standing brand rule it is ALWAYS gold (`#FFCC00`) on black, inverting on hover. The Order
column of the stat table uses colour-tinted "die chips" (one per activation, coral/sage/
iris/brass) so activation rolls read differently from bare Profile values.

Detachments persist in `localStorage` (`xrb.lists`, `xrb.current`); per-game play state under
`xrb.play.<listId>`. A share-by-URL scheme and a print QR code are sensible future additions.

## Icons

One cohesive set: **Phosphor** solid fills from Iconify (`@iconify-icons/ph/<slug>`), bundled
offline as inline SVG (no runtime, no network). The `mk()` helper near the top of `App.jsx`
wraps each imported icon-data object into a small component (viewBox defaults to 256 for
Phosphor). To swap an icon, import a different `ph` slug and point the alias at it; confirm
the slug exists at `node_modules/@iconify-icons/ph/<slug>.js`. Stat/category icons are
deliberately restrained (Hobgoblin uses text for unit types); do not reintroduce icon soup.

## Copy conventions

UI text and any docs in this repo follow these rules. No em-dashes and no hyphen used as dash
punctuation. No interpunct separators. Sentence case. Vary sentence length. Avoid tricolons
and three-adjective stacks. No marketing filler. Use active voice on controls, and let a
button and the result it produces share a word.

## Provenance

All values are transcribed from Xenos Rampant (Osprey Games, 2022). This is a fan tool, not an
official product.
