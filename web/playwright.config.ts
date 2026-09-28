import { defineConfig } from "@playwright/test";

/**
 * Smoke suite across the templates (03 §9.9).
 *
 * executablePath points at the pre-installed Chromium: PLAYWRIGHT_BROWSERS_PATH
 * is set in this environment and "playwright install" would re-download a
 * browser that is already on disk.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3210",
    launchOptions: {
      executablePath:
        process.env.CHROMIUM_PATH ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
      args: ["--no-sandbox"],
    },
  },
  webServer: process.env.SMOKE_BASE_URL
    ? undefined
    : {
        command: "pnpm build && pnpm start -p 3210",
        url: "http://127.0.0.1:3210/about",
        timeout: 180_000,
        reuseExistingServer: true,
      },
});
