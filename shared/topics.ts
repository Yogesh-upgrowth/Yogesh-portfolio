/**
 * The topical layer that connects content types to each other.
 *
 * Measured before writing this: blog posts linked to no consulting page and no
 * benchmark, and the 30 case studies linked only to other case studies. The
 * strongest proof on the site was a closed loop — a reader finishing the
 * 1200% insurance funnel study had no route to monetisation consulting, and
 * nothing pointed at the benchmark pages from the 57 posts that share their
 * subject matter.
 *
 * Internal links are one of the few ranking levers entirely within our control,
 * and Google uses them to work out what a page is about and how pages relate.
 * Mapping is derived from tags and categories rather than hand-maintained, so
 * adding a case study or a benchmark wires itself in.
 */
import { SERVICE_SLUGS } from "./services";
import { DATA } from "./benchmarks";

export interface Topic {
  id: string;
  name: string;
  /** Tags / categories that place a piece of content in this topic. */
  matches: RegExp;
  /** The commercial page this topic sells into. */
  service: string;
  /** Benchmark cells worth surfacing alongside it. */
  benchmarks: string[];
  /**
   * How much a match here means. Raw match counts reward vague words: "growth"
   * and "funnel" appear in almost every title, so an insurance funnel study
   * scored as generic acquisition rather than fintech. Specific topics outrank
   * generic ones.
   */
  specificity: number;
}

export const TOPICS: Topic[] = [
  {
    id: "monetisation",
    name: "Monetisation & pricing",
    matches: /monetis|monetiz|revenue|pricing|paywall|ltv|arpu|subscription|cro/i,
    service: "product-monetisation-consultant",
    specificity: 3,
    benchmarks: ["arpu/subscription-apps", "trial-to-paid/subscription-apps", "install-to-purchase/ecommerce"],
  },
  {
    id: "retention",
    name: "Retention & engagement",
    matches: /retention|churn|engagement|habit|notification|repeat user|activation|consumer|mau|utility/i,
    service: "consumer-app-growth-consultant",
    specificity: 3,
    benchmarks: ["d30-retention/fintech", "d7-retention/ecommerce", "d1-retention/gaming"],
  },
  {
    id: "acquisition",
    name: "Acquisition & CAC",
    matches: /cac|acquisition|seo|organic|programmatic/i,
    service: "consumer-app-growth-consultant",
    specificity: 1,
    benchmarks: ["app-store-conversion/subscription-apps", "install-to-purchase/travel"],
  },
  {
    id: "fintech",
    name: "Fintech products",
    matches: /fintech|insurance|lend|loan|credit|remittance|payment|bank/i,
    service: "fintech-product-consultant",
    specificity: 4,
    benchmarks: ["d30-retention/fintech", "d1-retention/fintech"],
  },
  {
    id: "marketplace",
    name: "Marketplaces & comparison",
    matches: /marketplace|comparison|aggregat|fare comparison/i,
    service: "marketplace-product-consultant",
    specificity: 4,
    benchmarks: ["install-to-purchase/travel"],
  },
  {
    id: "platform",
    name: "B2B & platform",
    matches: /architecture|crm|platform|infrastructure|b2b|prd/i,
    service: "saas-product-consultant",
    specificity: 4,
    benchmarks: ["app-store-conversion/medical"],
  },
];

/** Topics a piece of content belongs to, best match first. */
export function topicsFor(signals: string[]): Topic[] {
  const text = signals.join(" ");
  const hits = TOPICS.map((t) => {
    const m = text.match(new RegExp(t.matches.source, "gi"));
    return { topic: t, score: (m ? m.length : 0) * t.specificity };
  })
    .filter((h) => h.score > 0)
    .sort((a, b) => b.score - a.score);
  return hits.map((h) => h.topic);
}

/** The single commercial page a piece of content should point at, if any. */
export function serviceFor(signals: string[]): string | undefined {
  const slug = topicsFor(signals)[0]?.service;
  return slug && SERVICE_SLUGS.includes(slug) ? slug : undefined;
}

/** Benchmark routes worth linking from this content, filtered to ones that exist. */
export function benchmarksFor(signals: string[], limit = 2): string[] {
  const seen = new Set<string>();
  for (const t of topicsFor(signals)) {
    for (const key of t.benchmarks) {
      if (DATA[key]?.length) seen.add(key);
      if (seen.size >= limit) break;
    }
    if (seen.size >= limit) break;
  }
  return Array.from(seen).map((k) => `/benchmarks/${k}`);
}
