/**
 * Commercial service pages.
 *
 * Deliberately few. The obvious move is a page per keyword —
 * /fintech-product-consultant, /saas-product-consultant,
 * /marketplace-product-consultant — but pages that differ only by the noun are
 * the doorway pattern Google's helpful-content guidance targets, and this site's
 * entire advantage is that its pages carry first-hand numbers. A service page
 * has none by default.
 *
 * So a vertical earns a page only when there is enough published work behind it
 * to say something specific, and every page is anchored to case studies that
 * carry real figures.
 *
 * Marketplaces was initially skipped on a miscount \u2014 the remittance and
 * comparison-platform work was missed \u2014 and has five genuine case studies.
 *
 * The SaaS page is the weakest of the five and says so in its own opening
 * paragraph: there is no subscription-SaaS case study here, so it is scoped to
 * the B2B platform and lead-conversion work that is actually evidenced rather
 * than claiming trial-conversion or NRR experience. It should be the first page
 * to get a real case study behind it.
 *
 * script/check-services.ts enforces the minimum and verifies every cited case
 * study is real.
 */

export const MIN_CASE_STUDIES_PER_SERVICE = 3;

export interface ServiceOffer {
  name: string;
  /** What the client ends up holding. */
  outcome: string;
  timeframe: string;
  /**
   * Left undefined until Yogesh sets real prices — the page renders "Pricing on
   * request" rather than a placeholder number, which is both honest and a normal
   * consulting pattern. Fill these in and they appear automatically.
   */
  price?: string;
}

export interface Service {
  slug: string;
  /** H1. */
  heading: string;
  /** Opening paragraphs — the argument, not a keyword restatement. */
  intro: string[];
  /** "What this actually involves" — concrete, not adjectives. */
  workItems: { title: string; body: string }[];
  /** Case studies that evidence this service. Must be real slugs. */
  caseStudies: string[];
  /** Blog posts that go deeper. */
  relatedPosts: string[];
}

export const OFFERS: ServiceOffer[] = [
  {
    name: "Product Growth Diagnostic",
    outcome:
      "A written diagnosis of the single biggest constraint on growth, with the evidence behind it and what to do first. Most teams are optimising the wrong step; this establishes which one matters.",
    timeframe: "2 weeks",
  },
  {
    name: "Growth Funnel Audit",
    outcome:
      "Acquisition through activation, conversion and retention mapped end to end, with the drop-offs quantified and ranked by what recovering each one is worth.",
    timeframe: "3 weeks",
  },
  {
    name: "Monetisation Audit",
    outcome:
      "Pricing, packaging, paywall placement and revenue leakage reviewed against how your users actually behave, with specific changes and expected impact.",
    timeframe: "3 weeks",
  },
  {
    name: "90-Day Growth Sprint",
    outcome:
      "Hands-on implementation of the changes an audit identifies — instrumentation, experiments and shipped product work, accountable to an agreed metric.",
    timeframe: "90 days",
  },
  {
    name: "Fractional Product Growth Lead",
    outcome:
      "Ongoing product and growth leadership for founders without a senior product hire: roadmap ownership, prioritisation, and the calls that need someone who has made them before.",
    timeframe: "Ongoing, monthly",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "fintech-product-consultant",
    heading: "Fintech Product Consultant",
    intro: [
      "Fintech funnels fail differently from other funnels. The drop-off is rarely where the analytics point: it clusters around the moments a user is asked to trust you with money, identity or both, and those moments are often several steps before the one that shows the loss.",
      "Nine of the case studies on this site are fintech — insurance funnels, lending decisions, remittance comparison, purchase prediction and the systems underneath them. The work below is what that looks like in practice, with the numbers it produced.",
    ],
    workItems: [
      {
        title: "Find where trust breaks, not where the chart dips",
        body: "Rebuilding a broken insurance purchase funnel produced 1200% revenue growth in 12 months, through six parallel interventions rather than one fix. The interventions that mattered were upstream of the step the data blamed.",
      },
      {
        title: "Make the funnel worth the traffic before buying more",
        body: "Channel-level attribution, rebuilt from scratch, cut blended acquisition cost 30% while holding volume — because the cheapest channel was delivering users who never transacted.",
      },
      {
        title: "Use models where they change a decision",
        body: "Purchase prediction, LTV modelling and behavioural segmentation, applied to who gets targeted and what gets shown, not to produce a dashboard nobody acts on.",
      },
      {
        title: "Build for the volume that breaks things",
        body: "A vehicle enforcement CRM that collapsed at 22K transactions, rebuilt to handle 180K+ monthly at 99.6% uptime. Regulated fintech fails at the seams, not in the feature list.",
      },
    ],
    caseStudies: [
      "insurance-funnel-1200-growth",
      "user-acquisition-cac-30",
      "ml-insurance-prediction",
      "crm-180k-transactions",
      "fintech-trust-ui-patterns",
      "rank-1-fintech-keywords",
    ],
    relatedPosts: ["reduce-customer-acquisition-cost", "pricing-strategy-framework"],
  },
  {
    slug: "consumer-app-growth-consultant",
    heading: "Consumer App Growth Consultant",
    intro: [
      "Consumer apps do not grow by adding features. They grow when a loop exists — a thing users do for their own reasons that happens to produce the next user, or the next session — and most apps that plateau have no loop at all, just a funnel with paid traffic poured into it.",
      "The work here covers scaling a consumer app from 3.8M to 45M+ monthly active users, and the retention, notification and organic acquisition systems that made it hold rather than spike.",
    ],
    workItems: [
      {
        title: "Build a loop, not a campaign",
        body: "CarInfo reached 45M+ monthly active users on programmatic organic pages, engagement loops and referral — 22% of installs referral-driven. Loops compound; campaigns stop the day spend stops.",
      },
      {
        title: "Fix activation before acquisition",
        body: "The window between install and first real use is where most consumer apps lose the game, and it is usually the least instrumented part of the product.",
      },
      {
        title: "Earn retention with utility, not notifications",
        body: "A trigger-based notification engine for 1M+ users, and a multi-calculator finance app that earned daily use by being reliably useful at a specific moment rather than by adding engagement mechanics.",
      },
      {
        title: "Make organic carry the load",
        body: "Programmatic pages brought organic acquisition cost to ₹31 per user and eventually 61% of acquisition — a channel whose marginal cost approaches zero as it compounds.",
      },
    ],
    caseStudies: [
      "carinfo-45m-mau",
      "growth-loop-repeat-users",
      "scalable-notification-system",
      "finance-calculator-app-retention",
      "predict-user-dropoff-churn-model",
      "seo-0-to-100k",
    ],
    relatedPosts: ["growth-loops-product-management", "retention-strategies-consumer-apps"],
  },
  {
    slug: "product-monetisation-consultant",
    heading: "Product Monetisation Consultant",
    intro: [
      "Monetisation problems are usually mistaken for pricing problems. The price is rarely the reason revenue is flat — more often the product asks for money at a moment the user has no reason to say yes, or it converts users whose lifetime value never covers what they cost to acquire.",
      "This work covers revenue funnels, paywall and CTA placement, willingness to pay, and the acquisition economics underneath — the part that decides whether growth is worth having.",
    ],
    workItems: [
      {
        title: "Ask at a moment that makes sense",
        body: "Moving an insurance CTA out of the results screen — where users are processing information, not buying — was one of six interventions behind 1200% revenue growth, and doubled CTA performance on its own.",
      },
      {
        title: "Price against behaviour, not against competitors",
        body: "Packaging and paywall design driven by what users actually do in the product, rather than by a comparison table of what everyone else charges.",
      },
      {
        title: "Acquire users who pay back",
        body: "Behavioural LTV modelling raised revenue per acquired user 61% and cut blended CAC 34%, by changing who was targeted rather than what they were charged.",
      },
      {
        title: "Find the leak before adding a tier",
        body: "Most revenue lost in consumer products leaks between intent and payment. Recovering it is cheaper than any new pricing tier and does not risk the existing base.",
      },
    ],
    caseStudies: [
      "insurance-funnel-1200-growth",
      "insurance-cta-2x-growth",
      "predict-high-ltv-users-ml",
      "user-acquisition-cac-30",
    ],
    relatedPosts: ["monetization-models-digital-products", "balancing-growth-monetization"],
  },
  {
    slug: "marketplace-product-consultant",
    heading: "Marketplace & Comparison Platform Consultant",
    intro: [
      "Comparison platforms look like content problems and are actually data problems. The interface is the easy part; keeping upstream prices, rates and availability honest at scale is what decides whether anyone returns, and it is where most of these products quietly fail.",
      "The work here covers a real-time cab fare engine aggregating across Uber, Ola and InDrive, a remittance comparison platform built for the Indian market, and scaling one of them from 1K to 100K monthly users on organic acquisition alone.",
    ],
    workItems: [
      {
        title: "Aggregation is an operations problem, not a UI problem",
        body: "Real-time fare comparison across three ride-hailing platforms reached 80K monthly active users and 38% D30 retention, with surge prediction at 88% accuracy. The hard part was never the comparison table.",
      },
      {
        title: "Make the comparison finish, not just load",
        body: "A remittance comparison platform for India reached 180K monthly active users and 3.8x application completion across five languages. Users comparing money transfers abandon at the handoff, so that is the step to instrument first.",
      },
      {
        title: "Own the query before the competitor does",
        body: "Mapping what competitors ranked for, and where their coverage was shallow enough to beat, produced 10x traffic growth, 100+ top-10 keywords and 3x comparison clicks on MoneyRateFinder.",
      },
      {
        title: "Grow on pages that compound, not spend",
        body: "Scaling the same product from 1K to 100K monthly users meant 92x traffic growth across 4,700 indexed pages and 1,850 top-10 keywords \u2014 an acquisition channel whose marginal cost approaches zero.",
      },
    ],
    caseStudies: [
      "cab-fare-comparison-engine",
      "comparison-platform-india",
      "seo-moat-remittance",
      "scaling-moneyratefinder-growth",
      "programmatic-seo-calculators",
    ],
    relatedPosts: ["programmatic-seo-guide", "growth-loops-product-management"],
  },
  {
    slug: "saas-product-consultant",
    heading: "B2B & SaaS Product Consultant",
    intro: [
      "A caveat worth stating before you read further: the deepest published work on this site is consumer and fintech, not subscription SaaS. If your question is specifically about trial conversion, net revenue retention or seat expansion, that is a different problem from the ones documented below, and you should ask me directly what I have actually done rather than take a service page's word for it.",
      "What the work here does cover is the B2B side of platform products: systems that hold under transaction volume, lead conversion engines that move real revenue, and the operational architecture underneath both. That is usually what breaks first in a B2B product, and it is what the case studies below are about.",
    ],
    workItems: [
      {
        title: "Build for the volume that breaks things",
        body: "A CRM that collapsed at 22K transactions, rebuilt to handle 180K+ monthly at 99.6% uptime \u2014 10x transaction capacity. B2B platforms fail at the architectural seams, not in the feature list.",
      },
      {
        title: "Convert leads with scoring, not with follow-up volume",
        body: "A real-time intent scoring engine produced \u20b94.2Cr of incremental revenue and a 10x conversion lift, by acting on which leads were worth attention rather than working the whole list harder.",
      },
      {
        title: "Make the platform's own messaging earn its place",
        body: "A trigger-based notification system for 1M+ users lifted revenue per user 34% while cutting unsubscribes 61% \u2014 engagement infrastructure that adds revenue without costing trust.",
      },
      {
        title: "Validate before building the roadmap",
        body: "An MVP shipped in 7 days, instrumented from day one: 11.4% email capture, 6.2% pricing page click-through, 29% D3 return. Scoping discipline is the transferable part, not the speed.",
      },
    ],
    caseStudies: [
      "crm-180k-transactions",
      "real-time-intent-scoring-engine",
      "scalable-notification-system",
      "mvp-in-7-days",
      "ai-recommendation-engine",
    ],
    relatedPosts: ["writing-effective-prds-guide", "product-led-growth-guide"],
  },
];

/** Commercial pages live under /consulting/ so the buyer-intent surface is one
 *  coherent section rather than loose pages at the site root. */
export const CONSULTING_BASE = "/consulting";

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function servicePath(slug: string): string {
  return `${CONSULTING_BASE}/${slug}`;
}
