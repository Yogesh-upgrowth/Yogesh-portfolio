import { describe, expect, it } from "vitest";
import { batchVerdict, sampleFor, seededRandom } from "../lib/review/sample";

const pages = Array.from({ length: 40 }, (_, i) => `p${i}`);

describe("sampleFor — 02 §3", () => {
  it("reviews Wave 1 in full", () => {
    expect(sampleFor("w1-x", 1, pages)).toHaveLength(40);
  });
  it("takes 20% from Wave 2", () => {
    expect(sampleFor("w2-x", 2, pages)).toHaveLength(8);
  });
  it("never goes below the five-page minimum", () => {
    expect(sampleFor("w2-x", 2, pages.slice(0, 10))).toHaveLength(5);
  });
  it("returns everything when the batch is at or under the minimum", () => {
    expect(sampleFor("w2-x", 2, pages.slice(0, 4))).toHaveLength(4);
  });
  it("is deterministic for a batch id, so the choice is auditable", () => {
    expect(sampleFor("w2-teardown-01", 2, pages))
      .toEqual(sampleFor("w2-teardown-01", 2, pages));
  });
  it("differs between batches, so it is a sample and not a fixed slice", () => {
    expect(sampleFor("w2-a", 2, pages)).not.toEqual(sampleFor("w2-b", 2, pages));
  });
  it("does not simply take the first n", () => {
    expect(sampleFor("w2-teardown-01", 2, pages)).not.toEqual(pages.slice(0, 8));
  });
});

describe("batchVerdict", () => {
  it("passes at or under 10% rejected", () => {
    expect(batchVerdict(10, ["design"]).pass).toBe(true);
  });
  it("fails above 10%", () => {
    expect(batchVerdict(10, ["design", "thin"]).pass).toBe(false);
  });
  it("fails on any fact rejection regardless of share", () => {
    const v = batchVerdict(100, ["fact"]);
    expect(v.pass).toBe(false);
    expect(v.reason).toMatch(/whole batch/);
  });
  it("fails on any experience rejection regardless of share", () => {
    expect(batchVerdict(100, ["experience"]).pass).toBe(false);
  });
  it("fails when nothing was reviewed", () => {
    expect(batchVerdict(0, []).pass).toBe(false);
  });
});

describe("seededRandom", () => {
  it("is stable for a seed", () => {
    const a = seededRandom("x"), b = seededRandom("x");
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
  });
  it("stays in range", () => {
    const r = seededRandom("y");
    for (let i = 0; i < 500; i++) {
      const v = r();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});
