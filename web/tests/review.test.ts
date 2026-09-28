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

import { judgeOutcomes, needsEscalation, JudgeVerdict } from "../lib/gates/judge";

const clean: JudgeVerdict = {
  answer_first: true, claims_ok: true, violations: [], intent_ok: true,
  offending_sections: [], voice_score: 5, voice_notes: [],
  unique_items: ["device-checked INR", "dated history", "an owned verdict"],
  extracted_answer: "It charges 1699 a year.", answerable: true, unique_value: 5,
  sibling_overlap: [], experience_faithful: true, notes: "",
};

describe("judge — prompts/review-judge.md", () => {
  it("passes every gate on a clean verdict", () => {
    expect(judgeOutcomes(clean).every((o) => o.pass)).toBe(true);
  });
  it("fails G12 when a claim is untraceable", () => {
    const v = { ...clean, claims_ok: false,
      violations: [{ sentence: "Retention is 43%.", type: "untraceable number" }] };
    expect(judgeOutcomes(v).find((o) => o.gate === "G12")!.pass).toBe(false);
  });
  it("fails G12 when the experience block is not faithful, even if claims are fine", () => {
    // Q7 — the only check that a first-person claim still matches what Yogesh
    // actually said. My first pass ignored it entirely.
    const v = { ...clean, experience_faithful: false, notes: "numbers rounded" };
    const g12 = judgeOutcomes(v).find((o) => o.gate === "G12")!;
    expect(g12.pass).toBe(false);
    expect(g12.detail).toMatch(/faithfully/);
  });
  it("fails G20 on fewer than three unique items even at a high score", () => {
    const v = { ...clean, unique_items: ["one", "two"] };
    expect(judgeOutcomes(v).find((o) => o.gate === "G20")!.pass).toBe(false);
  });
  it("fails G20 when the page cannot answer its own H1", () => {
    expect(judgeOutcomes({ ...clean, answerable: false })
      .find((o) => o.gate === "G20")!.pass).toBe(false);
  });
  it("fails G13 below a voice score of 4", () => {
    expect(judgeOutcomes({ ...clean, voice_score: 3 })
      .find((o) => o.gate === "G13")!.pass).toBe(false);
  });
  it("reports sibling overlap, which similarity scoring misses when wording differs", () => {
    const v = { ...clean, sibling_overlap: [
      { sibling_url: "/teardowns/duolingo/monetization", repeated_point: "annual is the default" }] };
    expect(judgeOutcomes(v).find((o) => o.gate === "Q6")!.pass).toBe(false);
  });
  it("escalates a borderline 3 to the larger model rather than deciding", () => {
    expect(needsEscalation({ ...clean, unique_value: 3 })).toBe(true);
    expect(needsEscalation({ ...clean, unique_value: 4 })).toBe(false);
  });
});
