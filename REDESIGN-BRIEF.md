# Xenos Rampant Force Builder, Redesign Brief

## 1. Purpose and how to use this brief

You are a fresh Claude Code session. This document is your complete spec. You have no other context. Execute it end to end.

**The app.** Xenos Rampant Force Builder is a single React app. Almost everything lives in one file, `src/App.jsx`, which holds the components, the print sheet, and a large embedded CSS template literal (the `<style>` string near the top of the JSX). Game data (units, options, xeno rules, traits, costs, rule text) lives in `src/data.js`. The HTML shell is `index.html`. Project docs are `README.md` and `CLAUDE.md`.

**The problem.** The current UI is generic dark-mode sci-fi dashboard output: a warm near-black "muster terminal" with glowing orange accents, condensed uppercase stencil type tracked out to .42em, 2px corners everywhere, sub-16px text in roughly twenty places, hairline 1px cards, tiny icons and tap targets, no animation, a full-bleed layout, badly grouped controls, and punctuation (em dashes and interpuncts) that the project's own `CLAUDE.md` bans. Your job is to invert all of that into one cohesive, deliberate, accessible aesthetic and to fix the structural and copy problems.

**How to work.**
1. Read this whole brief first. Then read `src/App.jsx`, `src/data.js`, `index.html`, `README.md`, and `CLAUDE.md` in full so the file:line anchors below line up with what you see (line numbers may have drifted; treat them as strong hints, confirm by reading).
2. Implement in the order of Section 4 (Groups 1 through 9). Group 1 (page shell plus tokens) and Group 2 (type and contrast) come first because everything else depends on them.
3. There is NO test suite. You verify by running the app. After each group, and again at the end, run:
   - `npm run dev` and open the local URL. Walk the UI: add units, toggle options, pick tiers, change budget, toggle the commander, print preview, copy to clipboard.
   - `npm run build` to confirm the production build compiles with no errors.
4. Verify accessibility and budgets by inspecting the rendered DOM, not by trusting prose. Concretely: in devtools, run a `querySelectorAll('*')` sweep checking `getComputedStyle(el).fontSize` is at least 16px on every text node; and scan visible text for the characters U+2014 (em dash) and U+00B7 (interpunct) to confirm the counts in Section 6.
5. Do not introduce new em dashes or interpuncts anywhere, including in code comments you write and in any docs you touch. The budget in Section 6 is a ceiling, not a quota; the target is zero of each, with a tiny documented allowance.

**A note on this brief's own copy.** This document deliberately uses no em dashes and no interpuncts. When you write UI strings, comments, and docs, do the same.

---

## 2. Non-negotiable mandates (global rules)

These fourteen mandates govern every change. Concrete numbers are binding.

- **M1 Grouping.** Things used together must be placed together. Ten current grouping failures are diagnosed in Section 4. Fix all of them.
- **M2 Anti-AI-slop.** Invert exactly nine of the current visual decisions toward one unrelated, cohesive aesthetic. The nine are tabled in Section 3.
- **M3 Punctuation.** The entire UI may contain at most 2 em dashes and at most 2 interpuncts, total. Target zero. Rewrite every other occurrence per Section 6.
- **M4 Type scale.** Minimum on-screen font size is 16px. Most text larger. Body 17px, rules and flavor 16px to 17px, stat values 24px, section names 22px, unit names 28px to 34px. Nothing renders below 16px.
- **M5 Motion.** Visible, satisfying feedback on everything interactive. Clicking a control makes obvious what was clicked. Add Unit gets a named pulse. Honor `prefers-reduced-motion`.
- **M6 Targets and icons.** Icons much larger across the board. Every interactive target at least 2x its current area, minimum 48px in its smaller dimension. Current sizes: catalogue add 24px, tool buttons 34px, checkboxes 18px, crown 38px. New floor 48px, primary actions larger.
- **M7 Contrast.** All text meets WCAG AA or better: 4.5:1 for text under 18px, 3:1 for large bold text at 18px and above, and 3:1 for meaningful graphics. Verified ratios are in Section 3. Coral is the one accent that fails as a foreground and is constrained accordingly.
- **M8 Stats.** Every stat shows ICON AND TEXT, both: an icon, a text label, and a value. Never icon-only (the catalogue ribbon currently violates this), never text-only.
- **M9 Width.** Not full width. Constrain to a centered max width. Cap at 1100px to 1200px, `margin-inline:auto`, with visible gutters.
- **M10 Cost placement.** The point cost of each clickable option (for example +2, -1, 0) sits inside the box you click, on the LEFT, read before the option name.
- **M11 Columns.** Use columns for far more content than today: a multi-column roster, a 2-column catalogue, and 2 to 3 column option and xeno lists inside cards.
- **M12 Flavor italic.** Lore and flavor sentences render in true italic, visually distinct from upright mechanical rules text. Canonical flavor example: "cheap shoddily assembled robots powered by an explosive core, at risk of damage if they exert themselves" (the Unstable rule, `src/data.js` around line 1524).
- **M13 Activation icons.** The four activation stat icons get a distinct treatment: filled colored roundels with rings, clearly unlike the open-line profile icons. Final look is intentionally open (see Section 9).
- **M14 Footer.** A WarLore branding footer at the bottom matching the Pacific Command and sibling builders, linking to the game, the publisher, the author, the WarLore Linktree and Neocities hub, and the GitHub repo. Exact set in Section 7.

Definition of done in Section 10 maps each mandate to where it is satisfied.

---

## 3. The new aesthetic

### Named direction: Field Almanac (Botanical Risograph)

A warm, paper-bright naturalist's field guide. The visual world of a 1970s Audubon or RHS plant almanac printed on a two-ink risograph, where the alien roster is catalogued like flora and fauna rather than mustered for war. Cream uncoated-paper grounds, a humanist slab serif for specimen names, generous air, plant-press line illustrations, and ink-stamp pulses replace the grimdark muster terminal entirely. The whole roster reads as a herbarium of specimens pressed and annotated by hand, which gives the build a calm, curatorial confidence that is the literal opposite of anxious dark-mode slop.

### The 9 inverted decisions

| # | Axis | Old Claude default (and why it is slop) | New opposite (concrete spec) |
|---|------|------------------------------------------|------------------------------|
| 1 | Color palette and mode | Warm near-black muster terminal: radial vignette `#221b11` to `--void #15110B`, bone text `#ECE3CC`, role-coded glowy accents (spice `#C9701E`, steel `#7C8A92`, gold `#C8A53C`, red `#C2402E`). Dark mode plus saturated accents is the single most reflexive AI default for anything tagged sci-fi or grimdark. | Light, paper-bright two-ink riso. Page ground cream `#F4ECD8`, card insets `#EFE4CB`. Ink 1 (structure, text, rules) bottle-green `#1F3D2E`. Accent coral `#F4604C` used as FILL only, never as foreground text (see fixes below). Category tints sage `#5C7A52`, iris `#6A4A8C`, rust `#B06A2C`, brass `#8A6A1F`. No glow, no vignette, no dark mode. Flat cream ground plus a faint 6% paper-grain noise overlay. |
| 2 | Typeface and character | Three condensed display sans: Big Shoulders Display, Oswald, Barlow. All grotesque, all industrial-military, the textbook AI tactical Google Fonts trio. | Humanist slab plus book serif, the type of a natural-history almanac. Specimen and section names in Zilla Slab 600/700. Body, rules, and true-italic flavor in Source Serif 4 (400/600). Stat numerals Source Serif 4 with tabular-nums. Drop all three current families. |
| 3 | Casing and tracking | Heavy uppercase with very wide tracking everywhere: `.06em` to `.42em` (the "Force Builder" subtitle at `.42em`), uppercase stat keys, group bars, pills. ALL-CAPS plus exaggerated tracking is AI shorthand for engraved and official. | Sentence case throughout, set tight and natural. Headings and unit names `text-transform:none; letter-spacing:-0.005em`. Genus dividers (Infantry, Xenomorphs, Vehicles) use `font-variant:small-caps` at `letter-spacing:.02em` in their category tint. Subtitle "Force builder" sentence case at `.02em`. |
| 4 | Density and type scale | Compact dense text: role 12.5px, rules 13px, stat keys 10px, statgroup headers 10.5px, many strings at 10px to 13px. Cramming sub-16px text reads as information-rich in a screenshot and is hostile to real readers. | Open, almanac-spacious scale. Base 17px / line-height 1.6. Rules 16px. Role and flavor 17px italic. Stat value 24px, stat label 16px small-caps. Section headers 22px. Unit name 28px to 34px. Cost numbers 20px bold. Nothing below 16px. 8px vertical rhythm, 24px between option rows. |
| 5 | Corner radius | Timid uniform 2px to 3px on every box: buttons, chips, cards, the muster track, checkboxes, pills. 2px never looks wrong and never looks like a decision. | Three deliberate radii. Specimen and catalogue cards `border-radius:14px` (die-cut index cards). Toggle rows, budget buttons, stamp buttons `border-radius:0` with 1.5px ruled separators in `--ink` at 18% (ledger feel). Cost stamps `border-radius:50%` (ink stamps). Keep ledger rules visibly heavy so square rows read as a printed ledger, not a hairline divider. |
| 6 | Borders, targets, activation icons | Hairline 1px borders plus colored left accent bars carry all structure (`--edge #3C3322`, 3px to 4px `border-left`). Activation icons are 17px line glyphs identical to profile icons. Tiny targets (24px add, 34px tools, 18px checks). The hairline-card-with-accent-bar is the most fingerprinted AI layout primitive there is. | Risograph ink-stamp blocks and pressed-specimen framing. Cards get a 3px solid `--ink` frame with dotted corner tick-marks (specimen mount), no left accent bar. Section headers are solid sage or coral ink bars with knocked-out cream text. Activation icons sit in 48px filled discs with a 2px `--ink` ring (final glyph color resolved in fixes below); profile icons stay open 24px line glyphs in `--ink`, so the two blocks read differently. Targets: add 48x48px, tools 48x48px, toggle rows full-width min-height 56px, checkboxes 28px. |
| 7 | Iconography | game-icons.net woodcut militaria: crossed swords, crossed pistols, alien skull, battle tank, bugle. Genre-perfect and zero-effort, which is exactly why it is slop. | Botanical and naturalist field pictograms. Attack a thorn mark, Move an animal track (not boots), Shoot a seed rendered as a flower center, Courage a campfire flame, Defence a leaf-shield, Armour a beetle shell, Strength a sprout, Range a ruler. Category plates are bespoke 64px inline-SVG drawings in `--ink` line on cream: fern (infantry), exotic bloom (xenomorphs), seed-pod-on-wheels (vehicles). All glyphs at least 24px, at least 28px in discs. These plates and several marks are bespoke inline SVG, not an off-the-shelf font; budget real illustration effort. |
| 8 | Budget readout metaphor | A thin 14px horizontal "Muster" progress bar that ramps spice to gold to blood near and over budget, with ticks and an inset glow. A progress-bar-that-reddens is the universal AI "X of Y used" default. | A herbarium "specimen tray" tally. The budget is a ruled tray of mounting cells (one per point or per 2 points). Each spent point stamps an inked specimen mark. Over-budget marks render outside the tray ruling. Large numerals beside it: 24px tabular Source Serif 4. The metaphor is "pages filled in a collection book", not "progress loaded". No gradient, no glow. Filled cells carry a 1.5px `--ink` outline so filled vs empty is legible without relying on coral hue (see fixes). |
| 9 | Motion, layout, grouping | Hover-only `.12s` transitions, `translateX(2px)` on card hover, one `.25s` gauge width tween, a full-bleed sticky-rail plus main-column skeleton, and related controls split apart (gauge away from budget, cost away from its checkbox). Subtle-transition-and-nothing-else is the AI "tasteful restraint" default; the grouping failures come free with the skeleton. | A bound book that is alive and hand-stamped. Centered `.field-book` `max-width:1100px` with a faint page-edge shadow. A 12-column grid so options and xeno rules render in 2 to 3 columns. Toggle press stamps an ink mark, Add Unit stamps a new card with a settle pulse, hover lifts the card with a paper-shadow. Everything used together is mounted together (regrouping per Section 4). |

### Verification critique fixes (apply these; they override the raw proposal)

The proposal's contrast claims were audited against the live source. The math exposed three real failures, all traceable to one root cause: coral `#F4604C` is only 2.69:1 on cream. Apply these resolutions everywhere coral or a tinted disc is used.

- **Coral is fill-only.** Coral `#F4604C` is 2.69:1 on cream, which fails AA for text at every size and fails the 3:1 graphics threshold. Coral may be used only as a FILL behind ink-colored text or glyphs, never as a foreground color on cream. For any coral-as-text role (cost numerals, "+2 / -1" stamps), render the digits in `--ink #1F3D2E` over a coral fill, OR use the darkened accent `--coral-ink #BE3319` (about 4.9:1 on cream) for the text itself. The 22% coral selection highlight is decorative only; never let selected body text depend on it for legibility.
- **Activation disc glyphs.** Glyph color depends on how light the disc fill is: a dark ink glyph only passes on a LIGHT fill. Verified per-disc spec (each clears the 3:1 graphics threshold): Attack = coral fill (light) with an INK thorn glyph, 3.75:1; Move = sage fill with a CREAM track glyph, 4.09:1; Courage = brass fill with a CREAM flame glyph, 4.29:1; Shoot = iris fill with a CREAM seed-flower glyph, 6.00:1. Only the coral disc (the lightest fill) takes an ink glyph; the three darker discs (sage, brass, iris) take cream glyphs. Do NOT put an ink glyph on sage (ink-on-sage is 2.47:1, FAIL) or brass (ink-on-brass is 2.36:1, FAIL). Re-verify every disc glyph and its 2px ring at 3:1 minimum against cream and against its fill.
- **Tally cells.** The specimen-tray filled cells lean on coral. Outline each coral cell with a 1.5px `--ink` stroke so the ink ring (about 9:1) carries the contrast and disambiguates filled from empty. Never signal near or over budget by coral hue alone; use position plus an "overgrown" label plus the 24px numeric readout as the primary legible signal.
- **Category divider text.** sage 4.09:1 and brass 4.29:1 are borderline and rust 3.61:1 fails AA as small text. Set category dividers at 18px+ bold (large-text threshold 3:1, which all four clear), or render the divider word in `--ink` and use the tint only as a fill bar behind knocked-out cream or as a rule line. Never set rust as small body text.
- **Ledger caution.** 0px square ledger rows risk re-importing the hairline-card fingerprint that decision 6 kills. Keep the 1.5px ink-at-18% rules visibly heavier than a Tailwind divider so rows read as a printed ledger.
- **Type pick.** Use the free face as the actual spec: Zilla Slab 600/700 for `--display`. Do not ship a commercial fallback as the primary.
- **Small-caps sizing.** Small-caps shrinks visual x-height. Set small-caps labels at 16px CAP size (so they do not render as roughly 12px), not 16px nominal.

### Design tokens

Define these on `.xr-app` (or `.field-book`) as the single source of truth. Sweep the CSS string and replace literals with these tokens.

**Fonts.**
```
--display: 'Zilla Slab', Georgia, serif;          /* 600/700, specimen + section names */
--body:    'Source Serif 4', Georgia, serif;      /* 400/600, rules, roles, flavor italic */
--num:     'Source Serif 4', Georgia, serif;      /* font-variant-numeric: tabular-nums */
```

**Color palette (hex, with contrast on cream `#F4ECD8` unless noted).**
```
--paper:     #F4ECD8   /* page ground */
--paper-2:   #EFE4CB   /* card insets; ink on this = 9.42:1 */
--paper-3:   #ECDFC0   /* footer band; ink on this = 9.00:1 */
--ink:       #1F3D2E   /* structure + body text; on paper = 10.10:1 PASS AA/AAA */
--coral:     #F4604C   /* FILL ONLY; as text = 2.69:1 FAIL, do not use as foreground */
--coral-ink: #BE3319   /* darkened coral for coral-as-TEXT; ~4.9:1 PASS AA */
--sage:      #5C7A52   /* infantry; 4.09:1 (large/bold or fill only) */
--iris:      #6A4A8C   /* xenomorphs; 6.00:1 PASS AA all sizes */
--rust:      #B06A2C   /* vehicles; 3.61:1 (large/bold or fill only, never small text) */
--brass:     #8A6A1F   /* commander; 4.29:1 (large/bold) */
--ink-18:    rgba(31,61,46,0.18)  /* ledger rules */
```
Disc glyph contrast (glyph on fill): coral disc with INK glyph 3.75:1 (graphics PASS), sage disc with CREAM glyph 4.09:1 PASS, brass disc with CREAM glyph 4.29:1 PASS, iris disc with CREAM glyph 6.00:1 PASS. Ink glyphs on sage (2.47:1) and brass (2.36:1) FAIL, so those discs use cream glyphs. Retire all dark-mode tokens: `--void`, `--bone`, `--bone-dim`, `--ash`, `--faint`, `--edge`, `--spice`, and the role-coded glow accents.

**Radius.** `--r-card:14px; --r-row:0; --r-stamp:50%`.

**Spacing (8px grid).** `--sp-1:8px; --sp-2:16px; --sp-3:24px; --sp-4:32px`. 24px between option rows. Card padding at least 18px.

**Type scale.** `--fs-min:16px; --fs-body:17px; --fs-label:16px; --fs-rule:16px; --fs-lg:22px; --fs-stat:24px; --fs-name:30px; --fs-cost:20px`.

**Shadow.** No glow anywhere. Page edge: `--shadow-page: 0 2px 18px rgba(31,61,46,0.10)`. Card hover lift: `--shadow-card: 0 3px 10px rgba(31,61,46,0.14)` (a soft paper-shadow, used in place of `translateX`).

---

## 4. Grouped change plan (the core)

Ten grouping failures to fix (M1): activation block split from profile block split from the head-row points; option cost on the far right away from its checkbox; rule text rendered outside and below its toggle; tier buttons detached from the cost they override; the commander crown control at the top with its Command panel at the bottom; catalogue add square detached from the cost at the top corner; budget presets, legality status, and issues strung across three masthead clusters; the muster gauge top-right divorced from the per-unit points that feed it; duplicate and delete tools icon-only with no labels; standard rules not visually distinguished from optional rules.

Implement the groups in order. Each lists current to target, anchors, selectors, notes, and acceptance checks.

### Group 1: Page shell, width cap, centering, column grid, aesthetic foundation
**Mandates: M9, M11, M2, M1.**
- **Current to target.** Full-bleed app, no max-width, `.xr-body` is `minmax(280px,360px) 1fr` spanning the viewport, roster is a single vertical flex column, dark muster-terminal theme. Target: a centered `.field-book` shell at `max-width:1100px` (cap no wider than 1200px), `margin-inline:auto`, with gutters; masthead, body, and footer all align to it; roster becomes a multi-column grid; catalogue becomes 2 columns at wide widths; the whole theme flips to Field Almanac per Section 3.
- **Anchors.** `src/App.jsx:589` (`<div className="xr-app">`); `src/App.jsx:631` (`.xr-body`); `src/App.jsx:645-670` (`.xr-roster`); `src/App.jsx:633-642` (`.xr-catalogue`); `src/App.jsx:681-700` (CSS root tokens plus background); `src/App.jsx:794-795` (`.xr-body` grid); `src/App.jsx:835` (`.xr-roster`).
- **Selectors.** `.xr-app`, `.field-book` (new), `.xr-body`, `.xr-roster`, `.xr-catalogue`, `.xr-catsec-list`, `.xr-mast`.
- **Notes.** Wrap masthead plus body plus footer in `.field-book { max-width:1100px; margin-inline:auto; }` with cream margins and `--shadow-page`. Change `.xr-roster` from flex column to `display:grid; grid-template-columns:repeat(auto-fill,minmax(360px,1fr)); gap:20px`. Change `.xr-catsec-list` to `display:grid; grid-template-columns:repeat(2,1fr)` above about 1100px. Replace the radial dark background with flat `--paper` plus the 6% grain overlay. Apply the nine inversions cohesively (Section 3) and document them in a CSS comment block. Keep `@media print` styles working. Do not exceed the M3 budget when relabeling.
- **Acceptance.** At 1400px the content column is centered with visible margins and does not exceed about 1100px. At 1100px the roster shows two or more cards side by side and the catalogue shows two columns. A reviewer can name the nine inverted axes. No element uses `--void` or the old display stack.

### Group 2: Type scale and contrast tokens
**Mandates: M4, M7.**
- **Current to target.** Base is 16px but roughly twenty selectors drop below it; many text colors are low-contrast on dark. Target: 16px floor, most text larger, every pair at AA.
- **Anchors.** `src/App.jsx:698` (base font-size and line-height); `src/App.jsx:685-691` (`--bone-dim`, `--ash`, `--faint`); every sub-16px selector below.
- **Sub-16px selectors to raise (each to at least 16px, micro-labels to 16px):** `.xr-act` 13px (CSS:734), `.xr-muster-label` 11px (743), `.xr-muster-pts` 12px (748), `.xr-budget-l` 11px (772), `.xr-budget-b` 14px (774), `.xr-status` 12px (781), `.xr-issue` 12.5px (788), `.xr-cat-cost i` 10px (825), `.xr-cat-role` 12.5px (826), `.xr-cat-ribbon span` 13px (828), `.xr-unit-type` 12px (867), `.xr-ro-pts i` 11px (871), `.xr-ro-sp` 12px (872), `.xr-statgroup-h` 10.5px (883), `.xr-stat-rng` 12px (895), `.xr-stat-key` 10px (897), `.xr-group-bar` 11px (902), `.xr-defn-name` 14px (907), `.xr-defn-text` 13px (908), `.xr-row-name` 15px (916), `.xr-row-text` 12.5px (921), `.xr-tier` 12.5px (931), `.xr-cmd-tab` 12px (942), `.xr-cmd-blurb` 12.5px (945), `.xr-trait-rule` 13px (950).
- **Notes.** Define the `--fs-*` tokens from Section 3. Sweep every `font-size` in the CSS string; raise anything below 16px. Stat values to 24px, section names to 22px. Replace `--bone-dim`, `--ash`, `--faint` text with `--ink` for body and a mid-ink that clears 4.5:1 for secondary text. Keep tabular-nums on numerals. Keep `:focus-visible` (CSS:705) and make its outline visible on cream (use `--ink` or `--iris`).
- **Acceptance.** Computed font-size of every text node is at least 16px (verify with a scripted `getComputedStyle` sweep). Body and rules at 16px+, labels and values visibly larger. Every text or background pair passes AA (4.5:1 under 18px, 3:1 large bold). No on-screen text uses old `--faint` or `--ash` below AA.

### Group 3: Stat blocks, icon AND text, distinct activation roundels
**Mandates: M8, M13, M6, M1, M11.**
- **Current to target.** ActCell and ProfCell render a 17px icon plus value plus a 10px key; activation icons share the flat profile treatment; catalogue ribbon is icon-only. Target: every stat shows icon plus a 16px+ label plus value; activation icons get distinct filled discs; catalogue ribbon gains text labels.
- **Anchors.** `src/App.jsx:224-236` (ActCell); `237-252` (ProfCell); `61-74` (ACT_DEFS / PROF_DEFS, which already carry `.label` and `.Icon`); `264-271` (catalogue ribbon, icon-only); `365-382` (stat groups markup).
- **Selectors.** `.xr-stat`, `.xr-stat-ic`, `.xr-stat-body`, `.xr-stat-val`, `.xr-stat-key`, `.xr-stat-rng`, `.xr-statgrid.act`, `.xr-statgrid.prof`, `.xr-statgroup`, `.xr-cat-ribbon`, `.xr-cat-ribbon span`, plus new `.xr-act-badge`, `.xr-act-atk`, `.xr-act-mov`, `.xr-act-sho`, `.xr-act-cou`.
- **Notes.** Bump icon props from `size={17}` to `size={26}`. `.xr-stat-key` from 10px to 16px, always rendered. For M13 add `.xr-act-badge { width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid var(--ink); }` with per-key fills: Attack coral fill plus INK thorn glyph (coral is the only light disc); Move sage fill plus CREAM track glyph; Shoot iris fill plus CREAM seed-flower glyph; Courage brass fill plus CREAM flame glyph. Do not use ink glyphs on sage or brass (they fail 3:1). Profile icons stay open 24px `--ink` line glyphs (no disc) so the two blocks contrast. Catalogue ribbon: add short labels (Atk, Def, Sho, Arm, SP) at 16px+ beside each icon plus value. Keep profile in 3 columns; render the two stat blocks as two clearly bounded regions.
- **Acceptance.** Every stat cell shows icon AND label AND value, all text 16px+. Activation icons sit in colored ringed discs, visually distinct from each other and from profile. Stat icons at least 24px. Catalogue stats show a text label per stat. Activation and profile read as two bounded regions.

### Group 4: Catalogue cards, cost inside the add box on the LEFT
**Mandates: M10, M6, M11, M1, M8.**
- **Current to target.** Cost is top-right, the add square is a separate 24px control at the ribbon end, cards stack in one column. Target: cost moves LEFT inside the primary clickable add zone; the whole card is a large left-aligned target; cards tile in columns.
- **Anchors.** `src/App.jsx:255-274` (CatalogCard); `259-262` (`.xr-cat-top` name plus cost); `270` (`.xr-cat-add`); `634-641` (section render); `813-832` (card CSS).
- **Selectors.** `.xr-cat-card`, `.xr-cat-top`, `.xr-cat-name`, `.xr-cat-cost`, `.xr-cat-add`, `.xr-cat-ribbon`, `.xr-catsec-list`.
- **Notes.** Restructure to a flex row `[cost+plus stamp on LEFT | name + role + stats]`. Render the cost as a coral-fill stamp with INK digits (Section 3 fix). Card padding at least 18px, primary target at least 48px, full card clickable. `.xr-catsec-list` to `grid-template-columns:repeat(auto-fill,minmax(220px,1fr))`. Name 20px+, cost 24px+, role 16px+. Keep role color-coding. Wire in the Group 6 Add pulse.
- **Acceptance.** Cost appears LEFT inside the add box, read before the name. Add target at least 2x prior area and at least 48px, full card clickable. Catalogue tiles in 2+ columns. Name and cost visibly larger, all card text 16px+.

### Group 5: Option, xeno, and tier rows, cost on the LEFT, flavor italic, bigger targets
**Mandates: M10, M12, M1, M6, M11.**
- **Current to target.** Row is `[check left][name][cost FAR RIGHT]` with rule text outside and below, indented 28px; tiers render as a detached strip; checkbox 18px; flavor and mechanics concatenated in one undifferentiated string. Target: cost LEFT next to the checkbox; check, cost, name, and text as one grouped region; leading flavor sentence in italic distinct from upright mechanics; checkboxes and rows at least 2x; tiers adjacent and driving the displayed cost.
- **Anchors.** `src/App.jsx:277-289` (Row); `280-284` (`.xr-row-hit`: check, name, cost); `285` (`.xr-row-text` outside the button); `399-418` (Loadout rows); `421-453` (Xeno rows plus tiers); `440-448` (`.xr-tiers`); `385-397` (Standard rules `.xr-defn`); `911-935` (row and tier CSS); `src/data.js` option and xeno `.text` strings, flavor plus mechanics concatenated (for example boarding-shields ~1218, contagious ~1246, unstable ~1524).
- **Selectors.** `.xr-row`, `.xr-row-hit`, `.xr-check`, `.xr-row-name`, `.xr-row-cost`, `.xr-row-cost.pos`, `.xr-row-cost.neg`, `.xr-row-text`, `.xr-subs`, `.xr-tiers`, `.xr-tier`, `.xr-defn-text`, plus new `.xr-flavor`.
- **Notes.** Reorder Row markup so `.xr-row-cost` is the FIRST child of `.xr-row-hit`, on the LEFT next to `.xr-check`; remove `margin-left:auto` and `text-align:right` from CSS:918 and give it a fixed left stamp with `.pos`/`.neg` color states (digits in `--ink` over coral fill, or `--coral-ink` text). Pull `.xr-row-text` inside the grouped region. Grow `.xr-check` 18px to at least 28px and row tap height to at least 56px. M12: `src/data.js` has no flavor field; preferred path is to add an optional `flavor` string to options and xeno rules and render it in `.xr-flavor { font-style:italic; }` with `.text` holding only mechanics; document the convention in a comment. Use the Unstable rule as the canonical flavor pattern. Keep `.xr-tiers` adjacent to the row and have the active tier drive the displayed cost figure. Optionally set option groups to 2 columns at wide width.
- **Acceptance.** For every option, xeno, and tier, the cost appears LEFT inside the clickable box, before the name. Each option renders a leading italic flavor sentence distinct from upright mechanics, via a documented data convention. Checkbox at least 28px, row at least 56px tall, both at least 2x prior. Check, cost, name, and text read as one region. Tiers sit with their row and the selected tier's cost shows in the row.

### Group 6: Interaction and animation system
**Mandates: M5, M6.**
- **Current to target.** Only `.12s` hover transitions, one gauge width tween, a single `translateX(2px)` hover, no keyframes, no click feedback, no Add Unit pulse, no entrance animation. Target: a reusable named animation system; every control gives immediate active feedback; Add Unit pulses and new cards animate in; reduced-motion honored. Full detail in Section 5.
- **Anchors.** `src/App.jsx:522-526` (addUnit); `255-274` (CatalogCard); `277-289` (Row); `441-447` (tiers); `601-605` (Print/Copy/Clear); `306-308` (roll); `681-705` (CSS top, add keyframes plus reduced-motion); `705` (`:focus-visible`).
- **Selectors.** `.xr-cat-card`, `.xr-cat-add`, `.xr-row-hit`, `.xr-check`, `.xr-tier`, `.xr-budget-b`, `.xr-cmd-tab`, `.xr-crown`, `.xr-roll`, `.xr-act`, `.xr-unit`, `:active`.
- **Acceptance.** Clicking any control gives an immediate visible active response that identifies the clicked element. Add Unit has a named pulse and new cards animate into the roster. Checkbox toggles animate. All motion disabled under reduced-motion. Targets enlarged per M6.

### Group 7: Icon and touch-target sizing scale
**Mandates: M6, M8.**
- **Current to target.** Small icons (stat 17, ribbon 12, add 14, crown 18, tools 16, masthead act 15, header 15, roll 16, check 13, SP heart 11, status/issue 14) and small targets (crown 38, tools 34, check 18, add 24, budget-b 38, tier pad 5x9, act pad 9x13). Target: one documented scale, every icon much bigger, every target at least 2x and at least 48px.
- **Anchors.** `src/App.jsx:29-30` (mk default size 18); `229,245` (stat 17); `265-270` (ribbon 12, add 14); `339` (crown 18); `359-360` (tools 16); `602-604` (acts 15); `636` (cat header 15); `281` (check 13); `854,875,914,832,775,931` (target sizes).
- **Notes.** Icon scale: stat 17 to 26, ribbon 12 to 20, add 14 to 24, crown 18 to 28, tools 16 to 24, masthead act 15 to 22, header 15 to 24, roll 16 to 24, check 13 to 20, SP heart 11 to 18, status/issue 14 to 20. Target scale (at least 48px, prefer 56px for primary): crown 38 to 56, tools 34 to 48, check 18 to 28, add 24 to 48, budget-b min 38 / pad 6 to min 56 / pad 14+, tier pad 5x9 to 12x16 (at least 48 tall), act pad 9x13 to 14x20 (at least 48 tall), cmd-tab and roll likewise. Document as tokens `--icon-sm/md/lg` and `--target-min:48px` (note: M6 floor in this brief is 48px, above the generic 44px). Keep within the centered grid.
- **Acceptance.** Every interactive control has a hit target at least 48px in its smaller dimension and about 2x prior area. Icons visibly larger (stats 24px+, control icons 20px+). A documented scale exists in code. Enlarged targets do not break the centered layout or columns.

### Group 8: WarLore branding footer
**Mandates: M14, M1.**
- **Current to target.** No footer at all. Target: a WarLore footer at the bottom inside the centered shell, matching the sibling builders, with the verified link set in Section 7.
- **Anchors.** `src/App.jsx:673-674` (end of App, after PrintSheet, before the closing div); `src/App.jsx:589` (`.xr-app` shell to align the footer within the cap).
- **Selectors.** `.game-info-footer`, `.gif-inner`, `.gif-title`, `.gif-sep`, `.gif-builder` (kept from the sibling pattern), plus the new aesthetic restyle.
- **Notes.** Use the sibling structure but obey M3: the Pacific Command footer separates every item with an interpunct (about nine of them), which collides with M3. Keep the sibling's link set, class names, and "Force builder by WarLore" credit, but REPLACE the interpunct separators with line breaks, flex-gap, or thin rule lines (the ledger idiom supports this). All links `target="_blank" rel="noopener"`. Footer text 16px+ and AA on the `--paper-3 #ECDFC0` band (ink at 9.00:1). Hide the footer in print.
- **Acceptance.** A WarLore footer renders at the bottom inside the centered column. It contains working links for the game, the Osprey site, the author, the WarLore Linktree and Neocities hub, and the GitHub repo. Styling matches the new aesthetic, structure parallels the sibling. All footer text 16px+ at AA. The footer alone does not exceed the global em-dash or interpunct budget (it uses zero of each).

### Group 9: Punctuation cleanup
**Mandates: M3.** Full audit and rewrite table in Section 6. Summary: replace the not-applicable stat glyph token in `src/data.js` and the `src/App.jsx` parsers and muted tests together in one pass (or the stat cells break); rewrite the print sheet and clipboard separators; reword prose dashes. Target zero em dashes and zero interpuncts, with the documented allowance from Section 6.
- **Anchors.** `src/App.jsx:97,104` (parseAct, splitRange sentinels); `111` (U+2212 minus, out of scope, keep); `187-188` (validate en dashes); `228,244,370` (rendered N/A glyph); `472,486,488,491-492,496,499,501` (print sheet); `572,575,576,577,580` (copyList); `src/data.js` act/prof `—` values (387,393,555,561,691,697,798,804) and costText en dashes (1282,1326,1402,1441).
- **Acceptance.** A rendered-DOM scan finds at most 2 em dashes (U+2014) and at most 2 interpuncts (U+00B7), target zero of each. N/A stat values no longer render an em dash; parseAct and splitRange still detect the N/A case. Clipboard and print use non-interpunct, non-em-dash separators. Negative-cost minus and numeric ranges reviewed; only genuine numeric signs remain.

---

## 5. Interaction and animation system
**Mandates: M5, M6.**

Define a named keyframe set near the top of the CSS string and apply utility classes so every interactive element gives tactile, ink-stamp feedback.

**Keyframes.**
- `@keyframes xr-press` quick `transform: scale(0.96)` settle, 90ms, for generic click feedback. Applied via `:active { transform: scale(0.97); }` on all buttons.
- `@keyframes xr-stamp` an `::after` ink mark that scales 0 to 1 with a tiny rotation, 320ms `cubic-bezier(.2,.8,.2,1)`, leaving a coral stamp, for toggle press.
- `@keyframes xr-pulse` the named Add Unit pulse: `scale(1) to 1.06 to 1` plus a one-shot ring (ring drawn in `--ink` or coral fill, no glow), about 380ms.
- `@keyframes xr-pop-in` new card entrance: opacity 0 to 1 with a press-down-and-settle `scale(1.04) to 1` plus a slight `translateY`, about 380ms.
- `@keyframes xr-check-pop` checkbox tick pop when toggled on.

**Reusable patterns.**
- Click feedback (M5): `:active { transform: scale(0.97); }` on `.xr-act`, `.xr-cat-card`, `.xr-row-hit`, `.xr-tier`, `.xr-budget-b`, `.xr-cmd-tab`, `.xr-crown`, `.xr-roll`.
- Toggle press: `.xr-row-hit` and `.xr-tier` get `xr-stamp` on activation, leaving a coral ink stamp.
- The named Add Unit pulse: apply `xr-pulse` to the catalogue add control. In `addUnit` (App.jsx:522) track a `justAddedKey` in state and apply `xr-pop-in` to the newest `.xr-unit` so the card stamps onto the tray; also stamp a new tally cell in the budget tray.
- Checkbox: animate `.xr-check.on` with `xr-check-pop`.
- Hover: cards lift with `--shadow-card` (a 2px paper-shadow), replacing the old `translateX(2px)`.
- Budget tray: keep a brief settle on cell fill; near-budget remaining cells pulse sage to coral (position and label carry meaning, not hue).

**Reduced motion.** Wrap all motion in:
```
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```
All motion is transform and opacity only; it changes no font below 16px and no contrast pairing.

---

## 6. Punctuation audit and budget
**Mandate: M3.**

**Rule.** At most 2 em dashes (U+2014) and at most 2 interpuncts (U+00B7) across the entire UI. The target is zero of each. `CLAUDE.md` already forbids both, and itself violates the rule (line 46), as does `README.md:1`; enforcing it means touching `App.jsx`, `data.js`, `index.html`, `README.md`, and `CLAUDE.md` together. The data-glyph token change must land in `data.js` and the `App.jsx` parsers and muted tests in the same pass, or stat cells break.

**Keep list (allowance, do not exceed).** The rule-correct ideal is to keep zero. If a reviewer insists on spending the budget, keep at most: one em dash at `index.html:8` (the browser tab `Brand Tagline`), and at most two interpuncts on the print stat separators (`App.jsx:488` plus one collapsed separator on `472`). Never keep the copy-export interpuncts. This brief recommends keeping zero.

**Rewrite table (every occurrence, file:line to fix).** In the Occurrence column the literal token shown is the character to be removed.

| File:line | Surface | Occurrence | Fix |
|-----------|---------|-----------|-----|
| App.jsx:56 | doc comment | ` — ` in banner | `* XENOS RAMPANT: FORCE BUILDER` (colon). |
| App.jsx:95 | doc comment | quotes the `—` marker | After the data token changes, quote the new marker, for example `n/a`. |
| App.jsx:97 | data-glyph | parseAct returns `—` | Accept legacy `—`/`-` as input, but return `{ val: "n/a", free: false }`. Stop emitting the em dash. |
| App.jsx:104 | data-glyph | splitRange returns `—` | Accept `—` as input, return `main: "n/a"` (or blank handled in CSS). Do not return the glyph. |
| App.jsx:228 | data-glyph | `val === "—"` test | Compare `val === "n/a"`. The `.muted` class carries the visual distinction. |
| App.jsx:244 | data-glyph | `main === "—"` test | Compare `main === "n/a"`. |
| App.jsx:370 | data-glyph | noAttack forces `—` | Pass the `n/a` token (or a sentinel) instead of the glyph. |
| App.jsx:486 | print | `<em> — {t.name}</em>` | Remove the dash; make unit type its own labelled element, or use a colon `{name}: {type}`. |
| App.jsx:491 | print | `Act &mdash; ...` | Use a colon: `Act: A {..} / M {..} / S {..} / C {..}`. |
| App.jsx:492 | print | `Prof &mdash; ...` | Use a colon: `Prof: A {..} / D {..} / ...`. |
| App.jsx:496 | print | `(cost) — {o.text}` | Put rule text in its own element, or colon after the cost. |
| App.jsx:499 | print | `(cost) — {x.text}` | Same as 496. |
| App.jsx:501 | print | `Trait: {name}</b> — {rule}` | Line-break the rule onto its own line (heading already has a colon). |
| App.jsx:572 | copy-export | header ` — ` | Put summary on its own line, or join with a comma. |
| App.jsx:575 | copy-export | unit ` — ` | Fold type into the parenthetical: `{name} ({type}, {pts} pts, {sp} SP)`. |
| App.jsx:472 | print | TWO `&middot;` on one line | Collapse to commas or three flex spans; keep at most one interpunct if spending budget. |
| App.jsx:488 | print | `{pts} pts &middot; {sp} SP` | Replace with a comma, or keep as one of the at-most-2 interpuncts. |
| App.jsx:576 | copy-export | `· ` list marker | Use `* ` or `- ` bullet. |
| App.jsx:577 | copy-export | `· ` list marker | Use `* ` or `- ` bullet. |
| App.jsx:580 | copy-export | `· Trait:` marker | Use `* ` or `- ` bullet. |
| index.html:8 | screen | `Xenos Rampant — Force Builder` | Keep candidate 1, or rewrite to `Xenos Rampant Force Builder`. |
| CLAUDE.md:46 | doc | `A "—" means...` | Update to `A "n/a" means the unit cannot take that action.` |
| README.md:1 | doc | `# Xenos Rampant — Force Builder` | `# Xenos Rampant Force Builder`. |
| data.js:387 | data-glyph | `"atk": "—"` | Change stored value to `"n/a"`. |
| data.js:393 | data-glyph | `"atk": "—"` | `"n/a"`. |
| data.js:555 | data-glyph | `"sho": "—"` | `"n/a"`. |
| data.js:561 | data-glyph | `"sho": "—"` | `"n/a"`. |
| data.js:691 | data-glyph | `"sho": "—"` | `"n/a"`. |
| data.js:697 | data-glyph | `"sho": "—"` | `"n/a"`. |
| data.js:798 | data-glyph | `"sho": "—"` | `"n/a"`. |
| data.js:804 | data-glyph | `"sho": "—"` | `"n/a"`. |

**Lower-priority dashes (review and reword; not em dash or interpunct but the copy rule bans dash punctuation).** En dashes: `App.jsx:187-188` validation ranges, rewrite `${minU}–${maxU}` to `${minU} to ${maxU}`. `data.js:1282/1326/1402/1441` costText ranges, rewrite `1–2 points.` to `1 to 2 points.` etc. `data.js:1281` Exploder body `– friend and foe alike –`, use parentheses `(friend and foe alike)`. `data.js:1359` and `data.js:1525` are stray OCR caption fragments ("Mantic Games Plague Detachment", "Veermyn Rumbler ... CHAPTER FIVE SCENARIOS"); strip the caption bleed or replace the dash with a comma. Keep the U+2212 minus in `costLabel` (App.jsx:111); it is a numeric sign, not in scope.

After the rewrite, build and scan the rendered DOM for U+2014 and U+00B7 to confirm the counts.

---

## 7. Footer / WarLore branding spec
**Mandate: M14.**

Match the canonical WarLore footer (reference repo Type37/pacific-command-builder, `app2/builder.jsx`, the most evolved copy in Type37/dropfleet-builder which carries the canonical `https://linktr.ee/warlore` credit). Keep the class names, the ordering, and the "Force builder by WarLore" credit pushed right via `margin-left:auto`. The one required deviation for M3: the sibling separates items with interpuncts; you must replace those separators with line breaks, flex-gap, or rule lines so the footer uses zero interpuncts.

**Exact verified link set (label and url).**

| Label | URL |
|-------|-----|
| Game title | Xenos Rampant (text, links to the Osprey product page below) |
| Buy the game (Osprey product page) | https://www.ospreypublishing.com/us/xenos-rampant-9781472852366/ |
| Osprey site (publisher) | https://www.ospreypublishing.com/ |
| Author (Daniel Mersey, Osprey author page) | https://www.ospreypublishing.com/us/author/daniel-mersey/ |
| Co-author blog (Richard Cowen, optional) | https://richardcowen.wordpress.com/ |
| WarLore Linktree (builder credit) | https://linktr.ee/warlore |
| WarLore wargaming hub (Neocities) | https://jetwong.neocities.org/wargaming |
| GitHub repo (this app) | https://github.com/Type37/xenos-rampant-force-builder |

Optional sibling-parity extras, all verified: Ko-fi `https://ko-fi.com/jetwong`, YouTube `https://www.youtube.com/@WarLore`, Amazon buy `https://www.amazon.com/Xenos-Rampant-Science-Fiction-Wargame/dp/1472852362`. Use the Osprey author page for Daniel Mersey (his Instagram `@mr_daniels_games_emporium` is unconfirmed; prefer the verified Osprey page).

**Markup pattern (adapt class names, drop the interpunct separators).**
```jsx
<footer className="game-info-footer">
  <div className="gif-inner">
    <span className="gif-title">Xenos Rampant</span>
    <span>Written by <a href="https://www.ospreypublishing.com/us/author/daniel-mersey/" target="_blank" rel="noopener">Daniel Mersey</a></span>
    <span>Published by <a href="https://www.ospreypublishing.com/" target="_blank" rel="noopener">Osprey Games</a></span>
    <a href="https://www.ospreypublishing.com/us/xenos-rampant-9781472852366/" target="_blank" rel="noopener">Buy the game</a>
    <a href="https://jetwong.neocities.org/wargaming" target="_blank" rel="noopener">More WarLore tools</a>
    <span className="gif-builder">Force builder by <a href="https://linktr.ee/warlore" target="_blank" rel="noopener">WarLore</a></span>
    <a href="https://github.com/Type37/xenos-rampant-force-builder" target="_blank" rel="noopener">Source on GitHub</a>
  </div>
</footer>
```
Note there are NO `gif-sep` interpunct spans. Use gap and rules instead.

**Style pattern (restyled to Field Almanac).**
```css
.game-info-footer {
  border-top: 1.5px solid var(--ink);
  background: var(--paper-3);            /* #ECDFC0, ink at 9.00:1 */
  padding: 16px var(--sp-3);
  font-family: var(--body);
  font-size: 16px;                       /* M4 */
  color: var(--ink);
}
.gif-inner {
  display: flex; flex-wrap: wrap; align-items: center;
  gap: 16px;                             /* gap replaces interpunct separators */
  max-width: 1100px; margin: 0 auto;
}
.gif-title { font-family: var(--display); font-weight: 700; }
.game-info-footer a { color: var(--ink); text-decoration: underline; text-underline-offset: 2px; }
.game-info-footer a:hover { color: var(--iris); }   /* iris is 6.00:1, AA-safe */
.gif-builder { margin-left: auto; }
@media (max-width: 600px) {
  .gif-inner { flex-direction: column; gap: 8px; align-items: flex-start; }
  .gif-builder { margin-left: 0; }
}
@media print { .game-info-footer { display: none; } }
```
Do not import the yellow-on-black WarLore terminal wordmark; it belongs to the dark theme. Render the credit in `--display` on cream instead.

---

## 8. Research appendix (verified external URLs)

Game: Xenos Rampant: Science Fiction Wargame Battles (2022), Osprey Games, a setting-agnostic 28mm sci-fi skirmish wargame in the Rampant series. Authors Daniel Mersey and Richard Cowen. Michael Doscher is the illustrator (not an author). All URLs below resolve (verified live unless flagged).

- Osprey product page (verified): https://www.ospreypublishing.com/us/xenos-rampant-9781472852366/
- Osprey Publishing site (verified): https://www.ospreypublishing.com/
- Daniel Mersey, Osprey author page (verified, canonical): https://www.ospreypublishing.com/us/author/daniel-mersey/
- Daniel Mersey, Instagram (unconfirmed, do not rely on): https://www.instagram.com/mr_daniels_games_emporium/
- Richard Cowen, blog "Audio, Video, Disco" (verified): https://richardcowen.wordpress.com/
- Richard Cowen, Xenos Rampant announcement post (verified): https://richardcowen.wordpress.com/2021/02/22/xenos-rampant-an-official-announcement/
- Amazon (verified, ISBN 9781472852366): https://www.amazon.com/Xenos-Rampant-Science-Fiction-Wargame/dp/1472852362
- Wargame Vault (correct page, blocks bots with 403, live for humans): https://www.wargamevault.com/product/415175/Xenos-Rampant
- GitHub repo (this app): https://github.com/Type37/xenos-rampant-force-builder
- WarLore Linktree: https://linktr.ee/warlore
- WarLore Neocities wargaming hub: https://jetwong.neocities.org/wargaming
- WarLore Ko-fi: https://ko-fi.com/jetwong
- WarLore YouTube: https://www.youtube.com/@WarLore

A web-search summary fabricated a Daniel Mersey blog at merseybooks.blogspot.com; it returns 404 and was discarded. Osprey URLs use the /us/ path; /uk/ and /ca/ equivalents exist.

---

## 9. Open decisions for the user

1. **Aesthetic direction.** Confirm Field Almanac (Botanical Risograph). It is a complete inversion of the dark muster terminal with no genre bleed-back. If you prefer a different unrelated direction (for example brutalist-light blueprint or a print-zine variant), say so before implementation, since Group 1 sets the foundation everything else builds on.
2. **Activation-icon final treatment (M13 is intentionally open).** The spec is filled colored discs with 2px ink rings: an ink glyph only on the light coral disc, and cream glyphs on the three darker discs (sage, brass, iris). Open choices: disc diameter (48px proposed), whether all four discs share one tint or use the four category-adjacent tints, and whether to add the dotted specimen-mount tick-marks around each disc. Any choice must keep glyph-on-fill at 3:1 or better per Section 3.
3. **Footer extras.** Confirm whether to include the optional Ko-fi, YouTube, and Amazon links, or keep the footer to the six required entries.
4. **Co-author credit.** Confirm whether to credit Richard Cowen and link his blog in the footer, or keep author attribution to Daniel Mersey only.

---

## 10. Definition of done

Build passes (`npm run build`) and the app runs (`npm run dev`) with the walkthrough in Section 1. Every mandate is checked below with where it is satisfied.

| Mandate | Done when | Where |
|---------|-----------|-------|
| M1 Grouping | All ten diagnosed splits fixed: cost beside checkbox, text inside the toggle region, tiers with their row, crown with its panel, add-with-cost, budget+status+issues in one block, gauge with its inputs, tools labelled, standard vs optional rules distinguished. | Section 4 Groups 3, 4, 5, 8 |
| M2 Anti-slop | Exactly nine axes inverted to Field Almanac, cohesive, documented in a CSS comment; no `--void`, no old display stack. | Section 3 table; Group 1 |
| M3 Punctuation | DOM scan finds at most 2 em dashes and at most 2 interpuncts (target zero); every other occurrence rewritten across all five files. | Section 6; Group 9 |
| M4 Type scale | Every computed font-size at least 16px; body 17px, rules 16px, stats 24px, names 28px+. | Section 3 tokens; Group 2 |
| M5 Motion | Active feedback on every control; named `xr-pulse` Add Unit pulse; `xr-pop-in` card entrance; reduced-motion honored. | Section 5; Group 6 |
| M6 Targets and icons | Every target at least 48px and about 2x prior; icons at 20px to 28px; documented sizing scale. | Section 3; Groups 3, 4, 5, 7 |
| M7 Contrast | Every pair at AA or better; coral fill-only; disc glyphs and tally cells verified at 3:1+; `--coral-ink` for coral-as-text. | Section 3 fixes and palette; Group 2 |
| M8 Stats | Every stat shows icon AND label AND value, including the catalogue ribbon. | Section 4 Group 3 |
| M9 Width | Centered `.field-book` at max-width 1100px with gutters; masthead, body, footer aligned. | Section 3; Group 1 |
| M10 Cost placement | Cost is the first child inside every clickable add box, option row, and tier, on the LEFT. | Section 4 Groups 4, 5 |
| M11 Columns | Multi-column roster, 2-column catalogue, 2 to 3 column option and xeno lists. | Section 3 decision 9; Groups 1, 4, 5 |
| M12 Flavor italic | Leading flavor sentence in true Source Serif 4 italic via a documented data convention, distinct from upright mechanics. | Section 4 Group 5 |
| M13 Activation icons | Four activation icons in filled ringed discs (ink glyph on the coral disc, cream glyphs on sage, brass, iris), distinct from open profile glyphs; verified at 3:1+. | Section 3 decision 6 and fixes; Group 3; Section 9 item 2 (open look) |
| M14 Footer | WarLore footer at the bottom inside the shell, matching the sibling pattern, with the six required verified links, zero interpunct separators, 16px+ at AA, hidden in print. | Section 7; Group 8 |