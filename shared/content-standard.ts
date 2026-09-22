/**
 * The PMYogesh content standard, as something the build measures rather than a
 * document nobody re-reads.
 *
 * Two rules that pull against each other, deliberately:
 *
 *  1. Depth — important pages carry 2,000-4,000 words.
 *  2. Evidence — every factual claim is classified, and anything that cannot be
 *     substantiated is not published as fact.
 *
 * When those conflict, evidence wins and the page stays short. A 950-word page
 * built entirely from verifiable material is worth more than a 2,500-word page
 * padded to hit a number, and padding is the specific failure mode Google's
 * guidance on scaled, low-value content describes. The checker therefore reports
 * shortfalls rather than inviting anyone to fill them with filler.
 */

export type PageType =
  | "core"        // service, industry, pillar — the commercial and authority pages
  | "case-study"  // operator stories with numbers
  | "research"    // original datasets and analysis
  | "article"     // supporting editorial
  | "functional"; // contact, tools, indexes — bloating these would be vandalism

export interface StandardBand {
  type: PageType;
  min: number;
  ideal: [number, number];
  note: string;
}

export const STANDARD: Record<PageType, StandardBand> = {
  core: {
    type: "core",
    min: 2000,
    ideal: [2500, 4000],
    note: "Service, industry and pillar pages. Depth here has to come from first-hand operating detail, not restatement.",
  },
  "case-study": {
    type: "case-study",
    min: 2000,
    ideal: [2000, 3500],
    note: "Must show the thinking, including what did not work — not problem/solution/result.",
  },
  research: {
    type: "research",
    min: 3000,
    ideal: [3000, 7000],
    note: "Original dataset, methodology and limitations on the page itself, not behind a download.",
  },
  article: {
    type: "article",
    min: 1200,
    ideal: [2000, 3000],
    note: "Supporting editorial. Below 1,200 words it is usually a section of another page.",
  },
  functional: {
    type: "functional",
    min: 0,
    ideal: [0, 0],
    note: "Contact, tool interfaces, indexes. Exempt by design — padding these damages them.",
  },
};

/**
 * How a claim is substantiated. Recorded per claim in the proof database so the
 * standard is auditable rather than asserted.
 */
export type EvidenceKind =
  | "first-hand"    // Yogesh did it. His account is the source.
  | "documented"    // A result with a figure we can point at on this site.
  | "public"        // External fact; must cite an original source.
  | "interpretation"// Yogesh's reading of events, labelled as opinion.
  | "estimate"      // A model; assumptions must be shown.
  | "anonymised"    // Real client work, details withheld; must say so.
  | "unverified";   // Cannot substantiate. Not publishable as fact.

export const EVIDENCE_RULES: Record<EvidenceKind, string> = {
  "first-hand": "Publishable. Written in the first person so the reader knows whose account it is.",
  documented: "Publishable. Must match a figure recorded in the proof database.",
  public: "Publishable only with a citation to the original source, not to an article about it.",
  interpretation: "Publishable when clearly marked as Yogesh's view rather than established fact.",
  estimate: "Publishable only alongside its assumptions, so a reader can disagree with the model.",
  anonymised: "Publishable only if the page states the details are anonymised.",
  unverified: "Not publishable as fact. Either substantiate it, attribute it, or cut it.",
};

/** Page-type assignment by route shape. */
export function pageTypeFor(routePath: string): PageType {
  if (routePath === "/contact") return "functional";
  if (routePath === "/product-growth-score") return "functional";
  if (routePath.startsWith("/research/")) return "research";
  if (routePath.startsWith("/case-study/")) return "case-study";
  if (routePath.startsWith("/blog/")) return "article";
  // Indexes list other pages; their value is navigational.
  if (["/blog", "/case-studies", "/work"].includes(routePath)) return "functional";
  if (routePath.startsWith("/case-studies/")) return "core";
  if (routePath === "/") return "core";
  if (routePath.startsWith("/work/")) return "case-study";
  return "core";
}
