import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project page lives at https://type37.github.io/xenos-rampant-force-builder/
export default defineConfig({
  base: "/xenos-rampant-force-builder/",
  plugins: [react()],
});
