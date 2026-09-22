/**
 * Canonical proof database — one source of truth for every headline number the
 * site claims about Yogesh's work.
 *
 * Why this exists: the site had independently drifting copies of the same
 * claims. The homepage said "250+ Team Size Led" while /work said "50+ Team
 * Members Led"; two pages said "26 Case Studies" while the registry held 30; a
 * case study was titled "Reduce CAC by 38%" when its own metrics recorded -31%.
 * A founder doing diligence finds these, and each one costs more trust than the
 * number was ever worth.
 *
 * Every headline stat rendered anywhere must come from here, and every entry
 * must declare where the number comes from. script/check-proof.ts enforces it
 * at build time: two claims that mean the same thing may not disagree, and a
 * claim sourced to a case study must match that case study's own metrics.
 */

export type ProofSource =
  /** Verifiable against CASE_STUDY_METRICS for this slug. */
  | { kind: "case-study"; slug: string }
  /** Stated in the narrative of a work story; quote the line. */
  | { kind: "work-story"; slug: string; quote: string }
  /** Biographical facts that need no engagement evidence (years, industries). */
  | { kind: "biographical" }
  /** No evidence on the site. Surfaced by the checker until sourced or removed. */
  | { kind: "unsourced"; reason: string };

export interface ProofClaim {
  id: string;
  value: string;
  label: string;
  source: ProofSource;
  /** A caveat that must travel with the number wherever it is shown. */
  note?: string;
}

export const PROOF: ProofClaim[] = [
  {
    id: "years-experience",
    value: "9+",
    label: "Years Experience",
    source: { kind: "biographical" },
  },
  {
    id: "industries",
    value: "5",
    label: "Industries",
    source: { kind: "biographical" },
    note: "Fintech, Mobility, SaaS, Marketplaces, E-commerce.",
  },
  {
    id: "insurance-growth",
    value: "680×",
    label: "Insurance Growth",
    source: {
      kind: "work-story",
      slug: "carinfo",
      quote:
        "the 680× figure that appears in summary decks refers to a specific insurance revenue line, not the blended total",
    },
    note: "A single insurance revenue line, not blended revenue — the CarInfo story says so explicitly. Do not relabel this as overall growth.",
  },
  {
    id: "disbursement-improvement",
    value: "90%",
    label: "Better Disbursement",
    source: {
      kind: "unsourced",
      reason:
        "Shown on /work as a headline stat. No matching figure in the Loanwiser story or in any case study's metrics.",
    },
  },
  {
    id: "dau-scaled",
    value: "1.2M+",
    label: "DAU Scaled To",
    source: {
      kind: "unsourced",
      reason: "Shown on the homepage. Appears in no case study or work story.",
    },
  },
  {
    id: "daily-transactions",
    value: "10K+",
    label: "Daily Transactions",
    source: {
      kind: "unsourced",
      reason:
        "Shown on the homepage. Note the CRM case study documents 180K+ monthly transactions, which is a different and larger claim.",
    },
  },
  {
    id: "team-led",
    // The homepage claimed 250+ and /work claimed 50+ for the same thing. 50+ is
    // the only figure the site corroborates ("a team of 50+ people" in the
    // UpGrowth story), so it is used everywhere until Yogesh confirms which is
    // right. Raising it back is a one-line change once there is a source.
    value: "50+",
    label: "Team Members Led",
    source: {
      kind: "work-story",
      slug: "upgrowth",
      quote: "The results at UpGrowth were produced by a team of 50+ people",
    },
    note: "The homepage previously claimed 250+ for the same metric. If that is the correct career total, update this entry and add the engagement it refers to.",
  },
];

const BY_ID = new Map(PROOF.map((c) => [c.id, c]));

/** Look up a claim, failing loudly rather than rendering a silent blank. */
export function proof(id: string): ProofClaim {
  const c = BY_ID.get(id);
  if (!c) throw new Error(`[proof] no claim registered with id "${id}"`);
  return c;
}

/** Convenience for stat rows: [{ value, label }] in the given order. */
export function proofStats(ids: string[]): { value: string; label: string }[] {
  return ids.map((id) => {
    const c = proof(id);
    return { value: c.value, label: c.label };
  });
}
