# Xenos Rampant Detachment Builder

A free browser tool for building a Xenos Rampant army and getting it to the table. Made by WarLore.

**Use it:** https://type37.github.io/xenos-rampant-force-builder/

## Why this exists

I played a bit of Xenos Rampant, had a good time, and I want more of my friends playing
tabletop games. The tedious part is writing the list on paper and adding up the points by
hand, so I got the computer to do that part. You pick your units, it keeps the list legal
and totals the points as you go, and then you print it and play.

## What it does

- Build a detachment from every unit in the book. All the weapon options and xeno rules are
  there, with the full rules text.
- Points update live and the list checks itself, so you can't accidentally bring something
  illegal.
- Roll or pick your Commander's traits.
- Ready-made lists to start from, including a few Combat Patrol boxes rebuilt as Xenos
  Rampant forces (handy if a mate owns the 40k models but doesn't play).
- A print sheet laid out for actual use at the table.
- An at-the-table tracker for damage, activations and turns.
- Share a list as a link. No account, no login, works on a phone.

## Running it yourself

Small Vite and React app, almost all of it in one file (`src/App.jsx`), no backend.
Node 18 or newer.

- `npm install` to set up
- `npm run dev` for a local server
- `npm run build` for a production build into `dist/`

Pushing to `main` deploys it to GitHub Pages on its own.

## Credits and the legal bit

Xenos Rampant is by Daniel Mersey and Richard Cowen, published by Osprey Games. This is a
fan tool. It is unofficial and not affiliated with Osprey. If you like it,
[buy the game](https://www.ospreypublishing.com/us/xenos-rampant-9781472852366/).

Fonts are open source from [Velvetyne](https://velvetyne.fr) under the SIL Open Font License,
and the license texts ship in `public/fonts/`.

## Feedback

Bug, feature idea, or a stat I got wrong? Let me know: warlore1@outlook.com, or through the
WarLore links at https://linktr.ee/warlore
