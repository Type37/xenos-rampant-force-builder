import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project page lives at https://type37.github.io/xenos-rampant-force-builder/
// Production build keeps the Pages base path; the dev server serves at root so
// local preview tooling can reach it without the subpath.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/xenos-rampant-force-builder/" : "/",
  plugins: [react()],
}));
