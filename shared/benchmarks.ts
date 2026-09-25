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
  /** The period the figure covers. Figures on different bases must not be spanned. */
  basis?: "daily" | "monthly" | "annual" | "cohort";
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
  {
    slug: "install-to-purchase",
    name: "Install-to-purchase conversion",
    definition:
      "The share of installs that go on to make a first purchase.",
    measurementTrap:
      "Almost every published figure here omits the window. A 1.4% rate over 90 days and a 1.4% rate over 7 days describe very different products, and sources rarely say which they measured.",
  },
  {
    slug: "app-store-conversion",
    name: "App store conversion rate",
    definition:
      "The share of people who install after encountering your store listing.",
    measurementTrap:
      "This is the worst-defined metric in mobile. Impression-to-install runs around 3.6%; page-view-to-install runs around 8.56%. Both get published as \"app store conversion rate\", and the second is more than double the first. Check which one a benchmark means before comparing.",
  },
  {
    slug: "arpu",
    name: "Average revenue per user",
    definition: "Revenue divided by users over a period.",
    measurementTrap:
      "Published ARPU mixes monthly and annual figures without saying so \u2014 gaming ARPU is often quoted annually, subscription ARPU monthly. A 7x difference between two numbers can be nothing more than the period. It also varies by whether the denominator is all users or paying users.",
  },
  {
    slug: "trial-to-paid",
    name: "Trial-to-paid conversion",
    definition:
      "The share of users starting a free trial who convert to a paid subscription.",
    measurementTrap:
      "Trial-to-paid looks healthy in isolation while the install-to-trial step quietly fails. The two must be read together: 60% of a trial cohort that is 3% of installs is a worse business than 40% of a cohort that is 25%.",
  },
];

export const INDUSTRIES: BenchmarkIndustry[] = [
  { slug: "fintech", name: "Fintech & banking" },
  { slug: "ecommerce", name: "E-commerce & retail" },
  { slug: "gaming", name: "Gaming" },
  { slug: "health-fitness", name: "Health & fitness" },
  { slug: "social", name: "Social & communication" },
  { slug: "productivity", name: "Productivity" },
  { slug: "travel", name: "Travel" },
  { slug: "entertainment", name: "Entertainment" },
  { slug: "medical", name: "Medical & healthcare" },
  { slug: "subscription-apps", name: "Subscription apps" },
];

/** Keyed `${metric}/${industry}`. Multiple datapoints per cell is the point. */
export const DATA: Record<string, Datapoint[]> = {
  "install-to-purchase/ecommerce": [
    { value: 1.38, unit: "percent", qualifier: "Reported for retail apps", source: { publisher: "Insider Intelligence / EMARKETER", url: "https://www.insiderintelligence.com/industry-kpis/64c7cf56505e09bb76835eeb", asOf: "2026" }, needsPrimaryCheck: true },
    { value: [1, 2], unit: "percent", qualifier: "The cross-category range most apps fall in", source: { publisher: "UXCam", url: "https://uxcam.com/blog/mobile-app-conversion-rate/", asOf: "2026" }, needsPrimaryCheck: true },
  ],
  "install-to-purchase/travel": [
    { value: 2.41, unit: "percent", source: { publisher: "Insider Intelligence / EMARKETER", url: "https://www.insiderintelligence.com/industry-kpis/64c7cf56505e09bb76835eeb", asOf: "2026" }, needsPrimaryCheck: true },
  ],
  "app-store-conversion/medical": [
    { value: 7.8, unit: "percent", qualifier: "Highest of any iOS category, impression-to-install", source: { publisher: "SEM Nexus", url: "https://semnexus.com/app-store-conversion-funnel-impression-to-install-benchmarks-2026", asOf: "2026" }, needsPrimaryCheck: true },
  ],
  "app-store-conversion/entertainment": [
    { value: 1.1, unit: "percent", qualifier: "Lowest of any iOS category, impression-to-install", source: { publisher: "SEM Nexus", url: "https://semnexus.com/app-store-conversion-funnel-impression-to-install-benchmarks-2026", asOf: "2026" }, needsPrimaryCheck: true },
  ],
  "app-store-conversion/subscription-apps": [
    { value: 3.6, unit: "percent", qualifier: "App Store, impression-to-install, all categories", source: { publisher: "Business of Apps, App Conversion Rates", url: "https://www.businessofapps.com/data/app-conversion-rates/", asOf: "2026" }, needsPrimaryCheck: true },
    { value: 3.8, unit: "percent", qualifier: "US data published May 2026, impression-based", source: { publisher: "AppTweak", url: "https://www.apptweak.com/en/aso-blog/average-app-conversion-rate-per-category", asOf: "2026" }, needsPrimaryCheck: true },
    { value: 8.56, unit: "percent", qualifier: "Page-view-to-install \u2014 a different funnel step, routinely published under the same name. Food & Drink reaches 52.8%; Games-Trivia 5.2%.", source: { publisher: "Adapty", url: "https://adapty.io/blog/app-store-conversion-rate/", asOf: "2026" }, needsPrimaryCheck: true },
  ],
  "arpu/subscription-apps": [
    { value: 8.41, unit: "usd", basis: "monthly", qualifier: "Average monthly subscription ARPU", source: { publisher: "AppsFlyer, State of App Monetization", url: "https://www.appsflyer.com/resources/reports/app-marketing-monetization-report/", asOf: "2026" }, needsPrimaryCheck: true },
    { value: [3, 9], unit: "usd", basis: "monthly", qualifier: "Typical monthly range for subscription apps", source: { publisher: "AppsFlyer, State of App Monetization", url: "https://www.appsflyer.com/resources/reports/app-marketing-monetization-report/", asOf: "2026" }, needsPrimaryCheck: true },
    { value: [0.5, 1], unit: "usd", basis: "monthly", qualifier: "Ad-supported apps, monthly \u2014 roughly an order of magnitude below subscription", source: { publisher: "AppsFlyer, State of App Monetization", url: "https://www.appsflyer.com/resources/reports/app-marketing-monetization-report/", asOf: "2026" }, needsPrimaryCheck: true },
  ],
  "arpu/gaming": [
    { value: 57.64, unit: "usd", basis: "annual", qualifier: "Annual, not monthly \u2014 do not compare directly against the monthly subscription figures", source: { publisher: "Perkox, ARPDAU Benchmarks", url: "https://blog.perkox.com/2026/08/arpdau-benchmarks-2026/", asOf: "2026" }, needsPrimaryCheck: true },
    { value: [0.02, 0.5], unit: "usd", basis: "daily", qualifier: "ARPDAU by sub-genre: hyper-casual 0.02\u20130.05, casual 0.05\u20130.15, mid-core 0.10\u20130.30, hardcore 0.15\u20130.50", source: { publisher: "Perkox, ARPDAU Benchmarks", url: "https://blog.perkox.com/2026/08/arpdau-benchmarks-2026/", asOf: "2026" }, needsPrimaryCheck: true },
  ],
  "trial-to-paid/subscription-apps": [
    { value: [40, 65], unit: "percent", qualifier: "Trial to paid, for apps described as healthy", source: { publisher: "AppsFlyer, State of App Monetization", url: "https://www.appsflyer.com/resources/reports/app-marketing-monetization-report/", asOf: "2026" }, needsPrimaryCheck: true },
    { value: [15, 30], unit: "percent", qualifier: "The preceding step \u2014 install to trial. Read the two together.", source: { publisher: "AppsFlyer, State of App Monetization", url: "https://www.appsflyer.com/resources/reports/app-marketing-monetization-report/", asOf: "2026" }, needsPrimaryCheck: true },
  ],
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
