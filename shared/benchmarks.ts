/**
 * Benchmark dataset behind /benchmarks/[metric]/[industry].
 *
 * Every datapoint must carry a publisher and a URL. A benchmark page whose
 * numbers cannot be traced is worth less than no page: it is the scaled thin
 * content Google's guidance describes, and it is the same failure as the
 * testimonials that quoted a 40% CAC drop nobody could check.
 *
 * Where published sources disagree — and on retention they disagree badly —
 * the page shows the disagreement rather than picking a figure. That is the
 * editorial angle: most benchmark pages state one number with false
 * confidence, and a founder comparing their own metric against a single
 * number draws the wrong conclusion.
 *
 * `needsPrimaryCheck` marks figures taken from a publisher's summary that have
 * not been read against the primary report. The build prints them; treat them
 * as provisional.
 */

export interface Source {
  publisher: string;
  url: string;
  /** When the figure was published or last updated, as stated by the source. */
  asOf: string;
}

export interface Datapoint {
  /** Single value, or a low-high range where the source gives one. */
  value: number | [number, number];
  unit: "percent" | "usd" | "inr" | "ratio";
  source: Source;
  /** Qualifier that must travel with the number, e.g. "subscription apps only". */
  qualifier?: string;
  needsPrimaryCheck?: boolean;
}

export interface BenchmarkMetric {
  slug: string;
  name: string;
  /** What the metric means, in a sentence a founder would not dispute. */
  definition: string;
  /** How it is commonly measured wrong. */
  measurementTrap: string;
}

export interface BenchmarkIndustry {
  slug: string;
  name: string;
}

export const METRICS: BenchmarkMetric[] = [
  {
    slug: "d1-retention",
    name: "Day 1 retention",
    definition:
      "The share of users who open the app again on the day after they first install it.",
    measurementTrap:
      "Day 1 means the calendar day after install for some tools and a rolling 24 hours for others. The two differ by several points, which is enough to change whether you think you are above or below benchmark.",
  },
  {
    slug: "d7-retention",
    name: "Day 7 retention",
    definition: "The share of users still returning one week after install.",
    measurementTrap:
      "Some platforms report D7 as 'returned on day 7 exactly', others as 'returned at any point in the first 7 days'. The second is always the flattering one.",
  },
  {
    slug: "d30-retention",
    name: "Day 30 retention",
    definition: "The share of users still returning a month after install.",
    measurementTrap:
      "D30 is where published benchmarks diverge most, because it is most sensitive to whether a cohort is paid or organic. A benchmark drawn mostly from paid installs will sit far below one drawn from organic.",
  },
];

export const INDUSTRIES: BenchmarkIndustry[] = [
  { slug: "fintech", name: "Fintech & banking" },
  { slug: "ecommerce", name: "E-commerce & retail" },
  { slug: "gaming", name: "Gaming" },
  { slug: "health-fitness", name: "Health & fitness" },
  { slug: "social", name: "Social & communication" },
  { slug: "productivity", name: "Productivity" },
];

/** Keyed `${metric}/${industry}`. Multiple datapoints per cell is the point. */
export const DATA: Record<string, Datapoint[]> = {
  "d1-retention/fintech": [
    {
      value: [22, 30],
      unit: "percent",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
    {
      value: 15,
      unit: "percent",
      qualifier: "APAC region specifically; MENA 18%, Europe 17%, LATAM and North America 13%",
      source: { publisher: "Apptrove, State of Fintech User Acquisition & Attribution", url: "https://apptrove.com/the-state-of-fintech-user-acquisition-attribution/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d7-retention/fintech": [
    {
      value: 17.6,
      unit: "percent",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d30-retention/fintech": [
    {
      value: [10, 15],
      unit: "percent",
      source: { publisher: "Pushwoosh", url: "https://www.pushwoosh.com/blog/increase-user-retention-rate/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
    {
      value: 11.6,
      unit: "percent",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
    {
      value: 2,
      unit: "percent",
      qualifier: "Reported as the finance vertical, down from 3% the prior year — a 33% year-on-year fall. Far below the other sources here.",
      source: { publisher: "Business of Apps, Finance App Benchmarks", url: "https://www.businessofapps.com/data/finance-app-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d1-retention/ecommerce": [
    {
      value: [18, 24.5],
      unit: "percent",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d7-retention/ecommerce": [
    {
      value: 10.7,
      unit: "percent",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d30-retention/ecommerce": [
    {
      value: [3, 6],
      unit: "percent",
      source: { publisher: "Pushwoosh", url: "https://www.pushwoosh.com/blog/increase-user-retention-rate/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
    {
      value: [4.8, 5],
      unit: "percent",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d1-retention/gaming": [
    {
      value: 33,
      unit: "percent",
      qualifier: "Hyper-casual titles; mid-core sits nearer 45%",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d7-retention/gaming": [
    {
      value: 12,
      unit: "percent",
      qualifier: "Hyper-casual; mid-core nearer 22%",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d30-retention/gaming": [
    {
      value: [4, 8],
      unit: "percent",
      source: { publisher: "Pushwoosh", url: "https://www.pushwoosh.com/blog/increase-user-retention-rate/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
    {
      value: 4,
      unit: "percent",
      qualifier: "Hyper-casual; mid-core nearer 10%",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d1-retention/health-fitness": [
    {
      value: [20, 27],
      unit: "percent",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d7-retention/health-fitness": [
    {
      value: 7,
      unit: "percent",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d30-retention/health-fitness": [
    {
      value: 3,
      unit: "percent",
      source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d30-retention/social": [
    {
      value: [15, 20],
      unit: "percent",
      source: { publisher: "Pushwoosh", url: "https://www.pushwoosh.com/blog/increase-user-retention-rate/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
  "d30-retention/productivity": [
    {
      value: [10, 18],
      unit: "percent",
      source: { publisher: "Pushwoosh", url: "https://www.pushwoosh.com/blog/increase-user-retention-rate/", asOf: "2026" },
      needsPrimaryCheck: true,
    },
  ],
};

/** Cross-cutting findings that apply to every retention page. */
export const RETENTION_CONTEXT = [
  {
    finding: "Business model predicts retention better than category does",
    detail:
      "Subscription apps retain around 14% at D30 against 5.4% for ad-supported ones. A subscription gaming app retains better than an ad-supported fintech app, which means comparing yourself to your category average can mislead you in either direction.",
    source: { publisher: "Business of Apps", url: "https://www.businessofapps.com/data/finance-app-benchmarks/", asOf: "2026" },
  },
  {
    finding: "The all-category median is roughly 4% and tells you nothing",
    detail:
      "Retention varies four to five times across industries, so a global average is not a benchmark, it is an artefact of whichever mix of apps the sample contained.",
    source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-retention-benchmarks/", asOf: "2026" },
  },
  {
    finding: "Roughly two thirds of fintech installs in India are organic",
    detail:
      "Which matters for reading any paid-heavy benchmark against your own numbers: an organic-led cohort retains differently, and most published benchmarks do not separate the two.",
    source: { publisher: "Apptrove", url: "https://apptrove.com/the-state-of-fintech-user-acquisition-attribution/", asOf: "2026" },
  },
];

/** Only cells with at least one datapoint become pages. */
export function benchmarkRoutes(): { metric: BenchmarkMetric; industry: BenchmarkIndustry; key: string }[] {
  const out: { metric: BenchmarkMetric; industry: BenchmarkIndustry; key: string }[] = [];
  for (const metric of METRICS) {
    for (const industry of INDUSTRIES) {
      const key = `${metric.slug}/${industry.slug}`;
      if (DATA[key]?.length) out.push({ metric, industry, key });
    }
  }
  return out;
}

export const BENCHMARK_PATHS = benchmarkRoutes().map((r) => `/benchmarks/${r.key}`);
