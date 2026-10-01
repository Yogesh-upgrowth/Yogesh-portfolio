/**
 * The publish path's gate check.
 *
 * Two things are worth pinning down. gates.ts is a script that ended in
 * `process.exit(main())`; publish.ts now imports gatePage from it, so if that
 * guard regresses, importing it would run the whole gate suite and exit — and
 * the symptom would be a publish script that mysteriously prints a gate report
 * and dies. And the verdict reduction decides what publishing refuses, where
 * treating a skip as a block would make publishing impossible and treating a
 * block as a skip would make it unsafe.
 */
import { describe, it, expect } from "vitest";
import { gatePage, gateContext } from "../scripts/gates";
import { loadAllPages } from "../lib/content/loader";

describe("publish's gate check", () => {
  it("imports gates.ts without running it or exiting", () => {
    // Reaching this line at all is the assertion: a bare `process.exit(main())`
    // would have killed the worker during the import above.
    expect(typeof gatePage).toBe("function");
    expect(typeof gateContext).toBe("function");
  });

  it("gives every page in the corpus exactly one verdict", () => {
    const ctx = gateContext();
    const pages = loadAllPages();
    expect(pages.length).toBeGreaterThan(0);
    for (const page of pages) {
      const { worst, results } = gatePage(page, ctx);
      expect(["READY", "INCOMPLETE", "FAILED", "BLOCKED"]).toContain(worst);
      expect(results.length).toBeGreaterThan(0);
    }
  });

  it("calls a page with a blocked gate BLOCKED, and a skip-only page INCOMPLETE", () => {
    const ctx = gateContext();
    const pages = loadAllPages();
    for (const page of pages) {
      const { worst, results } = gatePage(page, ctx);
      const blocked = results.some((r) => r.status === "blocked");
      const failed = results.some((r) => r.status === "fail");
      const skipped = results.some((r) => r.status === "skipped");
      if (blocked) expect(worst).toBe("BLOCKED");
      else if (failed) expect(worst).toBe("FAILED");
      else if (skipped) expect(worst).toBe("INCOMPLETE");
      else expect(worst).toBe("READY");
    }
  });

  it("would refuse nothing in the corpus today, since no gate fails or blocks", () => {
    // The state the launch rests on. If this ever goes red, publishing is
    // correctly blocked and the gate report says why.
    const ctx = gateContext();
    const unready = loadAllPages()
      .map((p) => ({ url: p.meta.url, ...gatePage(p, ctx) }))
      .filter((r) => r.worst === "FAILED" || r.worst === "BLOCKED")
      .map((r) => r.url);
    expect(unready).toEqual([]);
  });
});
