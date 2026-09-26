/**
 * Wider service set, for marketplaces only.
 *
 * Deliberately not mirrored onto pmyogesh.com. The two surfaces reward
 * opposite things: search rewards a site that is unmistakably about one thing,
 * and diluting the site with content-writing pages would undo the topical
 * focus the whole build rests on. Marketplace search is category-based — a
 * profile only appears in a category it has a listing in — so breadth there
 * raises lead volume with no cost to the site.
 *
 * Every category still has to be evidenced. These are all backed by published
 * case studies; anything that is not stays off the list.
 */

export interface MarketplaceService {
  name: string;
  /** The category buyers actually browse on marketplaces. */
  category: string;
  /** What makes the claim credible. Must trace to published work. */
  evidence: string;
  evidenceUrl: string;
  /** Entry price for review velocity, then the real rate. */
  entryPrice: string;
  corePrice: string;
}

export const MARKETPLACE_SERVICES: MarketplaceService[] = [
  {
    name: "Product growth & monetisation consulting",
    category: "Product Management / Growth",
    evidence: "3.8M to 45M+ monthly active users; 1200% insurance revenue growth in 12 months",
    evidenceUrl: "https://pmyogesh.com/case-study/carinfo-45m-mau",
    entryPrice: "$149 / ₹12,000 — 48-hour growth teardown",
    corePrice: "$1,500 / ₹1,25,000 — 2-week diagnostic",
  },
  {
    name: "Programmatic SEO builds",
    category: "SEO / Technical SEO",
    evidence: "0 to 100K monthly organic sessions; 380+ top-10 rankings; organic CAC ₹31",
    evidenceUrl: "https://pmyogesh.com/case-study/seo-0-to-100k",
    entryPrice: "$199 / ₹16,000 — programmatic SEO opportunity audit",
    corePrice: "$4,000 / ₹3,30,000 — full build",
  },
  {
    name: "SEO strategy & competitor teardowns",
    category: "SEO",
    evidence: "#1 rankings in a competitive fintech niche; 10x traffic growth by reverse-engineering competitors",
    evidenceUrl: "https://pmyogesh.com/case-study/rank-1-fintech-keywords",
    entryPrice: "$149 / ₹12,000 — competitor SEO teardown",
    corePrice: "$2,000 / ₹1,65,000 — strategy engagement",
  },
  {
    name: "Long-form content & content strategy",
    category: "Writing / Content Strategy",
    evidence: "57 published long-form articles and 30 case studies; content engine behind 100K monthly sessions",
    evidenceUrl: "https://pmyogesh.com/blog",
    entryPrice: "$99 / ₹8,000 per article",
    corePrice: "$1,200 / ₹1,00,000 per month — content programme",
  },
  {
    name: "PRDs, specs & product documentation",
    category: "Technical Writing / Product",
    evidence: "Nine years writing product specs across fintech, mobility and multi-product teams",
    evidenceUrl: "https://pmyogesh.com/blog/writing-effective-prds-guide",
    entryPrice: "$99 / ₹8,000 per PRD",
    corePrice: "$75 / ₹6,000 per hour",
  },
  {
    name: "Product analytics & funnel instrumentation",
    category: "Data & Analytics",
    evidence: "Channel-level attribution rebuilt from scratch, cutting blended CAC 30% with volume held",
    evidenceUrl: "https://pmyogesh.com/case-study/user-acquisition-cac-30",
    entryPrice: "$149 / ₹12,000 — funnel instrumentation review",
    corePrice: "$2,500 / ₹2,10,000 — full audit",
  },
  {
    name: "ML-driven growth & scoring models",
    category: "Machine Learning / Growth",
    evidence: "Intent scoring worth ₹4.2Cr incremental revenue; LTV modelling at 81% precision",
    evidenceUrl: "https://pmyogesh.com/case-study/real-time-intent-scoring-engine",
    entryPrice: "$199 / ₹16,000 — model opportunity assessment",
    corePrice: "$5,000 / ₹4,10,000 — build",
  },
  {
    name: "Workflow automation (n8n)",
    category: "Automation",
    evidence: "Automation pipelines for content and growth operations",
    evidenceUrl: "https://pmyogesh.com/about-yogesh-yadav",
    entryPrice: "$99 / ₹8,000 per workflow",
    corePrice: "$75 / ₹6,000 per hour",
  },
];

/** Rates that never get discounted, whatever the platform. */
export const RATE_CARD = {
  marketplace_hourly_usd: 55,
  direct_hourly_usd: 120,
  expert_network_call_usd: 300,
  note:
    "Marketplace hourly sits above Upwork's $25-45 PM band rather than inside it: the proof justifies it and pricing at the floor attracts the wrong brief. Direct and expert-network rates are never discounted to match a marketplace.",
};
