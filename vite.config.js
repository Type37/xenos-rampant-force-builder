import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project page lives at https://type37.github.io/xenos-rampant-force-builder/
// Production build keeps the Pages base path; the dev server serves at root so
// local preview tooling can reach it without the subpath.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/xenos-rampant-force-builder/" : "/",
  plugins: [react()],
  // emblem pictures ship as files, not base64 inside the app's JavaScript:
  // they only load when the picker or a card shows them
  build: { assetsInlineLimit: (file) => (file.includes("/emblems/") ? false : undefined) },
  // honour a PORT env var (preview tooling assigns one) so the dev server binds
  // where the harness expects; falls back to Vite's default for plain `npm run dev`.
  server: process.env.PORT ? { port: Number(process.env.PORT), strictPort: true } : undefined,
}));
