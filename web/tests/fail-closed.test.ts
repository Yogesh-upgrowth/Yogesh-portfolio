/**
 * The suite must be fail-closed: an empty page cannot pass.
 *
 * Four checks in this project have been caught reporting success while checking
 * nothing — gates.ts reading a fact-usage index that was never generated,
 * publish.ts never consulting gate results, similarity_check.py walking a
 * directory that did not exist, check-launch.ts probing a port that was down.
 * Every one was in the plumbing: an absent input read as "nothing to check".
 *
 * An audit of the gates themselves found the opposite — their logic holds. A
 * page with no facts, no prose, no links, no visuals, no schema and no CTA is
 * caught by eight of them. This test pins that down, because the gates are the
 * only thing standing between a draft and Google, and the failure mode above is
 * silent by nature: nobody notices a check that stops checking.
 *
 * The seven gates that do pass are vacuous by design, not broken — no numbers
 * means nothing unsourced, no money means no missing conversion. They are
 * listed explicitly so that a gate joining them has to be a deliberate choice.
 */
import { describe, it, expect } from "vitest";
import { runGates, loadGateConfig, type GateInput } from "../lib/gates";
import { loadAllPages } from "../lib/content/loader";

/** A page stripped of everything a gate could look at. */
function emptyInput(): GateInput {
  const real = loadAllPages()[0];
  expect(real).toBeDefined();
  const meta = {
    ...real!.meta,
    facts_used: [], internal_links: [], experience_used: [],
    visuals: [], schema_types: [], faq: [],
    cta: { primary: { label: "", href: "" } },
  } as never;
  return {
    meta, body: "", facts: [], factUsage: new Map(), sharedFacts: new Set(),
    experience: new Map(), corpus: [], config: loadGateConfig(),
  } as GateInput;
}

// Vacuous on an empty page because they have nothing to examine, which is a
// correct pass rather than a hole.
const VACUOUS = ["G03", "G11", "G12", "G13", "G15", "G17", "CR"];

describe("the gate suite is fail-closed", () => {
  it("never reports an empty page as ready", () => {
    const results = runGates(emptyInput());
    const stopped = results.filter((r) => r.status === "fail" || r.status === "blocked");
    expect(stopped.length).toBeGreaterThanOrEqual(8);
  });

  it("passes only the gates that are vacuous by design", () => {
    const passed = runGates(emptyInput())
      .filter((r) => r.status === "pass")
      .map((r) => r.id)
      .sort();
    // A new id here means a gate stopped checking something. Confirm it has
    // genuinely nothing to look at on an empty page before adding it above.
    expect(passed).toEqual([...VACUOUS].sort());
  });

  it("catches the absence of evidence, structure, links, schema, visuals and a CTA", () => {
    const by = new Map(runGates(emptyInput()).map((r) => [r.id, r]));
    // Each of these asserts a positive property that an empty page lacks, so
    // each must refuse it rather than report the property it cannot have.
    for (const id of ["G01", "G06", "G07", "G08", "G09", "G10", "G14", "G16"]) {
      const r = by.get(id);
      expect(r, `${id} missing from the suite`).toBeDefined();
      expect(["fail", "blocked"], `${id} passed an empty page`).toContain(r!.status);
    }
  });
});
