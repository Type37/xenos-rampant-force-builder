#!/usr/bin/env node
/*
  Renders scripts/og/card.html to assets/logos/og-preview.png at 1200x630.

  Chrome is driven at device-scale-factor 2 and the 2400x1260 result is then
  downsampled, because rendering straight at 1x leaves the Deco hairlines and the
  tracked slab caps visibly chewed. --virtual-time-budget is what makes the shot
  wait for the Google Fonts request and the webp emblems to land; without it the
  screenshot is taken mid-load and the title comes out in Times.

  Run: node scripts/gen-og.mjs
  Then BUMP THE ?v= ON BOTH og:image AND twitter:image in index.html. Discord,
  Slack, iMessage and Twitter re-host the image on their own proxy keyed by URL,
  so a new file at the same URL changes nothing anyone sees for days.
*/
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CARD = join(ROOT, 'scripts', 'og', 'card.html');
const OUT = join(ROOT, 'public', 'og-image.png');
const TMP = join(ROOT, 'scripts', 'og', '.render');

const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const chrome = process.env.CHROME_PATH || CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) throw new Error('No Chrome found. Set CHROME_PATH.');

rmSync(TMP, { recursive: true, force: true });
mkdirSync(TMP, { recursive: true });

execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--default-background-color=00000000',
  '--force-device-scale-factor=2',
  '--window-size=1200,630',
  '--virtual-time-budget=10000',
  `--user-data-dir=${TMP}`,
  `--screenshot=${OUT}`,
  pathToFileURL(CARD).href,
], { stdio: 'inherit' });

// Downsample 2400x1260 -> 1200x630. sharp is not a dependency of this repo and
// is not worth becoming one for a script that runs twice a year, so this leans
// on the Pillow that scripts/ already assumes for the other image work.
execFileSync('python', ['-c', `
from PIL import Image
im = Image.open(r"${OUT}")
if im.size != (1200, 630):
    im.convert("RGB").resize((1200, 630), Image.LANCZOS).save(r"${OUT}", "PNG", optimize=True)
print("wrote", r"${OUT}", Image.open(r"${OUT}").size)
`], { stdio: 'inherit' });

rmSync(TMP, { recursive: true, force: true });
