import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

/** Scoped to web/ so the Vite app's root config is not inherited. */
export default defineConfig({
  root: fileURLToPath(new URL(".", import.meta.url)),
  test: { include: ["tests/**/*.test.ts"], environment: "node" },
});
