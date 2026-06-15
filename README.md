# Xenos Rampant — Force Builder

A force builder for [Xenos Rampant](https://ospreypublishing.com/) (Osprey Games, 2022), built as a UX flow study. Pick units from the catalog, configure loadouts inline, watch the points gauge, and keep the detachment legal as you go.

**Live:** https://type37.github.io/xenos-rampant-force-builder/

## What it does

- Single screen build flow. Unit catalog on the left, your force on the right, no modals.
- A points gauge that stays in the header and shifts colour as you approach and cross the budget. Going over is flagged, not blocked.
- Inline unit configuration with progressive disclosure. Options, special rules, and eligible Xeno Rules live on each unit card.
- Continuous validation against the published detachment rules: unit count, the single Commander requirement, the vehicle point ceiling, and the one vehicle per eighteen points limit. Each problem points at the unit causing it.
- Conflicting and dependent options clear themselves instead of throwing errors.
- Commander assignment is a crown toggle on any card, with a trait table picker and a dice roll for the random Trait.
- Plain text roster export to the clipboard.
- Responsive down to phone width, with the catalog as a pull up sheet. Honours reduced motion and focus visible.

## Stack

Vite, React 18, lucide-react. Styling is self contained in the component. Fonts (Chakra Petch, Inter, JetBrains Mono) load from Google Fonts.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Notes

Unit stats and point costs are the published profiles from the Xenos Rampant rulebook. This is an unofficial fan tool and a design exercise, not affiliated with Osprey Games.
