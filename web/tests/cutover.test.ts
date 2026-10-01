/**
 * The cutover guard.
 *
 * The cutover is a Vercel project setting, so nothing in this repo can block it
 * — the only protection is that someone runs `pnpm cutover:check` and believes
 * the answer. These tests make sure the answer is right, because the failure is
 * silent and expensive: 301-ing a ranking URL onto a noindex page loses exactly
 * the equity the redirect was built to move.
 */
import { describe, it, expect } from "vitest";
import { cutoverVerdict } from "../scripts/check-cutover";
import { loadAllPages } from "../lib/content/loader";

describe("cutover readiness", () => {
  it("imports without running or exiting", () => {
    expect(typeof cutoverVerdict).toBe("function");
  });

  it("never reports safe while a redirect points at a noindex page", () => {
    const v = cutoverVerdict();
    if (v.onNoindex.length > 0) expect(v.safe).toBe(false);
    else expect(v.safe).toBe(true);
  });

  it("cannot report safe while no page is indexable", () => {
    // The state today: every page ships noindex until publish.ts flips it, and
    // 127 redirects are already live in the Next build. If this ever passes with
    // zero indexable pages, the guard has stopped guarding.
    const v = cutoverVerdict();
    if (v.indexable === 0) expect(v.safe).toBe(false);
  });

  it("agrees with the content model about what is indexable", () => {
    const v = cutoverVerdict();
    const fromContent = loadAllPages().filter((p) => p.meta.indexable).length;
    expect(v.indexable).toBe(fromContent);
    expect(v.total).toBe(loadAllPages().length);
  });
});
