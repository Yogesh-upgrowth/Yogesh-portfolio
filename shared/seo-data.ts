// Centralized slug + date registry for sitemap.xml and SEO metadata.
// Safe to import from both server (Node) and client (browser) — contains no asset imports.

export const SITE_URL = "https://pmyogesh.com";
export const SITE_NAME = "Yogesh Yadav";
export const SITE_TAGLINE = "Product Growth & Monetisation Consultant";
export const DEFAULT_OG_IMAGE = "https://pmyogesh.com/og-image.png";
export const OG_IMAGE_ALT =
  "Yogesh Yadav — Product Growth & Monetisation Consultant";

export const STATIC_ROUTES: { path: string; priority: number; changefreq: string }[] = [
  { path: "/",            priority: 1.0, changefreq: "weekly" },
  { path: "/work",        priority: 0.9, changefreq: "monthly" },
  { path: "/case-studies",priority: 0.9, changefreq: "weekly" },
  { path: "/blog",        priority: 0.9, changefreq: "weekly" },
  { path: "/contact",     priority: 0.7, changefreq: "yearly" },
];

export const WORK_STORY_SLUGS = ["loanwiser", "carinfo", "knipex", "upgrowth"];

export const BLOG_SLUGS = [
  "how-i-think-about-product-framework",
  "how-ai-is-changing-product-decisions",
  "product-frameworks-at-scale",
  "research-beyond-surveys",
  "what-makes-product-scalable",
  "leadership-not-feature-ownership",
  "what-does-a-pm-actually-do",
  "evolution-of-product-management",
  "core-skills-every-product-manager",
  "pm-vs-product-owner-vs-project-manager",
  "product-lifecycle-explained",
  "user-centric-product-thinking",
  "how-pms-balance-business-tech-ux",
  "product-management-misconceptions",
  "outcome-driven-roadmaps",
  "how-to-build-winning-product-strategy",
  "prioritization-frameworks-every-pm",
  "setting-strong-product-vision",
  "product-leadership-vs-management",
  "strategic-thinking-senior-pm",
  "long-term-vs-short-term-product-strategy",
  "decision-making-frameworks-product-leaders",
  "data-driven-product-management",
  "metrics-that-matter-product-managers",
  "north-star-metrics-how-to",
  "funnel-analysis-product-managers",
  "ab-testing-product-decisions",
  "product-analytics-improve-retention",
  "data-driven-product-culture",
  "ai-changing-product-management",
  "ai-tools-product-managers",
  "ai-product-discovery-techniques",
  "ai-roadmap-planning",
  "ai-improve-product-analytics",
  "generative-ai-writing-prds",
  "ai-user-research",
  "ai-copilots-for-pms",
  "building-ai-first-products",
  "future-role-pms-ai-world",
  "growth-loops-product-management",
  "activation-metrics-product-growth",
  "retention-strategies-consumer-apps",
  "monetization-models-digital-products",
  "pricing-strategy-framework",
  "product-led-growth-guide",
  "balancing-growth-monetization",
  "writing-effective-prds-guide",
  "agile-vs-scrum-vs-kanban",
  "sprint-planning-best-practices",
  "managing-cross-functional-teams",
  "roadmap-planning-practical-guide",
  "become-product-manager-india",
  "product-manager-interview-questions",
  "pm-skills-gap-analysis",
  "building-pm-portfolio",
  "pm-career-path-complete-guide",
];

export const CASE_STUDY_SLUGS = [
  "carinfo-45m-mau",
  "insurance-funnel-1200-growth",
  "crm-180k-transactions",
  "user-acquisition-cac-30",
  "ml-insurance-prediction",
  "predict-high-ltv-users-ml",
  "real-time-intent-scoring-engine",
  "ml-reduce-cac-segmentation",
  "predict-user-dropoff-churn-model",
  "ml-user-clustering-insurance",
  "scaling-moneyratefinder-growth",
  "insurance-cta-2x-growth",
  "growth-loop-repeat-users",
  "funnel-dropoff-ux-optimization",
  "zero-cost-growth-engine",
  "cab-fare-comparison-engine",
  "comparison-platform-india",
  "scalable-notification-system",
  "finance-calculator-app-retention",
  "mvp-in-7-days",
  "ux-redesign-conversion-28",
  "fintech-trust-ui-patterns",
  "microcopy-ctr-increase",
  "reduce-cognitive-load",
  "seo-0-to-100k",
  "seo-moat-remittance",
  "rank-1-fintech-keywords",
  "programmatic-seo-calculators",
  "ai-recommendation-engine",
  "ml-ux-growth-3x-conversion",
];

/**
 * The complete, de-duplicated list of route paths that should be prerendered
 * and listed in the sitemap. Derived from the slug registries above, so adding
 * a page there automatically flows through to prerendering, the sitemap and
 * internal-link validation. Canonical form: no trailing slash (except "/").
 */
export function getAllRoutePaths(): string[] {
  const paths = [
    ...STATIC_ROUTES.map((r) => r.path),
    ...WORK_STORY_SLUGS.map((s) => `/work/${s}`),
    ...CASE_STUDY_SLUGS.map((s) => `/case-study/${s}`),
    ...BLOG_SLUGS.map((s) => `/blog/${s}`),
  ];
  return Array.from(new Set(paths));
}

