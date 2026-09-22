// Central per-page SEO registry: the target keyword, the keyword-first <title>
// (kept under 60 chars), and an optional description override (<155 chars).
// Blog posts and case studies fall back to their own content description when
// no override is given here, so editorial copy stays the source of truth.
//
// Keyed by canonical path (no trailing slash, except "/").

export interface PageSeo {
  /** Primary target keyword for the page (also used in the H1 / on-page SEO). */
  keyword: string;
  /** Keyword-first <title>, under 60 characters. */
  title: string;
  /** Optional meta-description override (under 155 chars). */
  description?: string;
}

export const PAGE_SEO: Record<string, PageSeo> = {
  /* ── Static pages ─────────────────────────────────────────── */
  "/": {
    keyword: "product growth and monetisation consultant",
    title: "Yogesh Yadav | Product Growth & Monetisation Consultant",
    description:
      "Product growth & monetisation consultant with 9+ years scaling Fintech, Mobility and consumer apps. I fix funnels, build monetisation, and grow revenue.",
  },
  "/work": {
    keyword: "product growth consulting",
    title: "Work With Me — Product Growth Consulting | Yogesh Yadav",
    description:
      "Advisory and hands-on product growth & monetisation consulting for founders. 9+ years scaling Fintech, Mobility and consumer internet products.",
  },
  "/case-studies": {
    // The /case-studies/growth hub now owns "product growth case studies";
    // the index covers all five topics, so it targets the broader term.
    keyword: "product and growth case studies",
    title: "30+ Product & Growth Case Studies | Yogesh Yadav",
    description:
      "30+ in-depth case studies on product growth, fintech, monetisation, ML and SEO — real numbers, real frameworks, real failures. By Yogesh Yadav.",
  },
  "/blog": {
    keyword: "product management blog",
    title: "Product Management Blog | Yogesh Yadav",
    description:
      "Long-form essays on product management, growth, AI in product, monetisation and SEO strategy. By Yogesh Yadav, product growth consultant.",
  },
  "/contact": {
    keyword: "hire a product growth consultant",
    title: "Hire a Product Growth Consultant | Yogesh Yadav",
    description:
      "Get in touch with Yogesh Yadav for product growth, monetisation, SEO strategy and fintech advisory. Based in India. Response within 24 hours.",
  },

  /* ── Service pages ────────────────────────────────────────── */
  "/fintech-product-consultant": {
    keyword: "fintech product consultant",
    title: "Fintech Product Consultant | Yogesh Yadav",
    description:
      "Fintech product and growth consulting backed by 9 published case studies — 1200% insurance revenue growth, CAC down 30%, a CRM rebuilt for 180K+ monthly transactions.",
  },
  "/consumer-app-growth-consultant": {
    keyword: "consumer app growth consultant",
    title: "Consumer App Growth Consultant | Yogesh Yadav",
    description:
      "Consumer app growth consulting from someone who scaled one to 45M+ monthly active users — growth loops, activation, retention and organic acquisition at \u20b931 per user.",
  },
  "/product-monetisation-consultant": {
    keyword: "product monetisation consultant",
    title: "Product Monetisation Consultant | Yogesh Yadav",
    description:
      "Monetisation consulting for consumer and fintech products: paywall and CTA placement, pricing against real behaviour, and acquisition economics that pay back.",
  },

  /* ── Case-study topic hubs ────────────────────────────────── */
  "/case-studies/growth": {
    keyword: "product growth case studies",
    title: "Product Growth Case Studies | Yogesh Yadav",
    description:
      "Eight growth case studies with the numbers attached — 45M MAU, 1200% revenue growth, CAC cut 30%. How each result was actually produced.",
  },
  "/case-studies/machine-learning": {
    keyword: "machine learning product case studies",
    title: "Machine Learning in Product: Case Studies | Yogesh Yadav",
    description:
      "ML applied to real product problems: purchase prediction, LTV modelling, churn, intent scoring and segmentation — with the outcomes they moved.",
  },
  "/case-studies/product": {
    keyword: "product management case studies",
    title: "Product Management Case Studies | Yogesh Yadav",
    description:
      "Product and platform case studies: scaling a CRM to 180K+ monthly transactions, notification systems, comparison platforms and 7-day MVPs.",
  },
  "/case-studies/seo": {
    keyword: "SEO case studies",
    title: "SEO Case Studies: 0 to 100K Traffic | Yogesh Yadav",
    description:
      "Programmatic SEO case studies with real traffic numbers — scaling to 100K monthly visits, ranking #1 for fintech terms, and building an SEO moat.",
  },
  "/case-studies/design": {
    keyword: "UX design case studies",
    title: "UX & Design Case Studies | Yogesh Yadav",
    description:
      "UX case studies measured in conversion, not aesthetics: redesigns worth 28% lift, microcopy worth 35% CTR, trust patterns and cognitive load.",
  },

  /* ── Work stories ─────────────────────────────────────────── */
  "/work/loanwiser": {
    keyword: "better lending decisions",
    title: "Loanwiser: Better Lending Decisions | Yogesh Yadav",
    description:
      "How we helped banks stop drowning in bad leads and make better lending decisions — the Loanwiser product growth story.",
  },
  "/work/carinfo": {
    keyword: "carinfo product growth story",
    title: "CarInfo: 45M Users & 1200% Revenue | Yogesh Yadav",
    description:
      "45M users and 1200% revenue growth: the CarInfo / AppFlix product strategy that scaled a consumer mobility app nobody saw coming.",
  },
  "/work/knipex": {
    keyword: "product lessons selling in india",
    title: "KNIPEX: Product Lessons from India | Yogesh Yadav",
    description:
      "What selling German pliers in India taught me about building software products — the KNIPEX Tools story.",
  },
  "/work/upgrowth": {
    keyword: "product leadership at scale",
    title: "UpGrowth: Leading 50 Across 4 Products | Yogesh Yadav",
    description:
      "Running 50 people across 4 products: what decision coherence at scale actually looks like — the UpGrowth story.",
  },

  /* ── Case studies ─────────────────────────────────────────── */
  "/case-study/carinfo-45m-mau": {
    keyword: "monthly active user growth",
    title: "Scaling a Consumer App to 45M+ MAU | Case Study",
  },
  "/case-study/insurance-funnel-1200-growth": {
    keyword: "insurance funnel conversion optimisation",
    title: "Insurance Funnel: 1200% Revenue Growth | Case Study",
  },
  "/case-study/crm-180k-transactions": {
    keyword: "building a high transaction CRM",
    title: "Scalable CRM for 180K+ Transactions | Case Study",
  },
  "/case-study/user-acquisition-cac-30": {
    keyword: "reduce user acquisition cost",
    title: "Cutting User Acquisition Cost by 30% | Case Study",
  },
  "/case-study/ml-insurance-prediction": {
    keyword: "ML insurance purchase prediction",
    title: "ML to Predict Insurance Buyers | Case Study",
  },
  "/case-study/predict-high-ltv-users-ml": {
    keyword: "predict high-LTV users with ML",
    title: "Predicting High-LTV Users with ML | Case Study",
  },
  "/case-study/real-time-intent-scoring-engine": {
    keyword: "real-time intent scoring engine",
    title: "Real-Time Intent Scoring Engine | Case Study",
  },
  "/case-study/ml-reduce-cac-segmentation": {
    keyword: "reduce CAC with ML segmentation",
    title: "Cutting CAC 31% with ML Segmentation | Case Study",
  },
  "/case-study/predict-user-dropoff-churn-model": {
    keyword: "churn prediction model for apps",
    title: "Churn Prediction Model for Apps | Case Study",
  },
  "/case-study/ml-user-clustering-insurance": {
    keyword: "ML user clustering for insurance",
    title: "ML User Clustering for Insurance | Case Study",
  },
  "/case-study/scaling-moneyratefinder-growth": {
    keyword: "scaling a fintech product with SEO",
    title: "Scaling MoneyRateFinder to 100K Users | Case Study",
  },
  "/case-study/insurance-cta-2x-growth": {
    keyword: "increase insurance CTA clicks",
    title: "Doubling Insurance CTA Clicks | Case Study",
  },
  "/case-study/growth-loop-repeat-users": {
    keyword: "growth loop for repeat users",
    title: "A Growth Loop Driving 30% Repeat Users | Case Study",
  },
  "/case-study/funnel-dropoff-ux-optimization": {
    keyword: "funnel drop-off UX optimisation",
    title: "Fixing Funnel Drop-Off with UX | Case Study",
  },
  "/case-study/zero-cost-growth-engine": {
    keyword: "zero-cost growth engine",
    title: "Building a Zero-Cost Growth Engine | Case Study",
  },
  "/case-study/cab-fare-comparison-engine": {
    keyword: "cab fare comparison engine",
    title: "Real-Time Cab Fare Comparison Engine | Case Study",
  },
  "/case-study/comparison-platform-india": {
    keyword: "comparison platform for India",
    title: "Building a Comparison Platform for India | Case Study",
  },
  "/case-study/scalable-notification-system": {
    keyword: "scalable notification system",
    title: "Scalable Notification System for 1M+ | Case Study",
  },
  "/case-study/finance-calculator-app-retention": {
    keyword: "finance calculator app retention",
    title: "Finance Calculator App Retention | Case Study",
  },
  "/case-study/mvp-in-7-days": {
    keyword: "build an MVP in 7 days",
    title: "From Idea to MVP in 7 Days | Case Study",
  },
  "/case-study/ux-redesign-conversion-28": {
    keyword: "UX redesign for conversion",
    title: "UX Redesign That Lifted Conversion 28% | Case Study",
  },
  "/case-study/fintech-trust-ui-patterns": {
    keyword: "fintech trust UI patterns",
    title: "Fintech Trust UI Patterns | Case Study",
  },
  "/case-study/microcopy-ctr-increase": {
    keyword: "microcopy click through rate",
    title: "Microcopy That Lifted CTR by 35% | Case Study",
  },
  "/case-study/reduce-cognitive-load": {
    keyword: "reduce cognitive load in UX",
    title: "Reducing Cognitive Load to Lift Conversion | Case Study",
  },
  "/case-study/seo-0-to-100k": {
    keyword: "programmatic SEO to 100K traffic",
    title: "Programmatic SEO: 0 to 100K Traffic | Case Study",
  },
  "/case-study/seo-moat-remittance": {
    keyword: "reverse engineer competitor SEO",
    title: "Building an SEO Moat in Remittance | Case Study",
  },
  "/case-study/rank-1-fintech-keywords": {
    keyword: "rank #1 for fintech keywords",
    title: "Ranking #1 for Fintech Keywords | Case Study",
  },
  "/case-study/programmatic-seo-calculators": {
    keyword: "programmatic SEO for calculators",
    title: "Programmatic SEO for Calculators | Case Study",
  },
  "/case-study/ai-recommendation-engine": {
    keyword: "AI recommendation engine for finance",
    title: "AI Recommendation Engine for Fintech | Case Study",
  },
  "/case-study/ml-ux-growth-3x-conversion": {
    keyword: "ML, UX and growth for 3x conversion",
    title: "ML + UX + Growth for 3X Conversion | Case Study",
  },

  /* ── Blog posts ───────────────────────────────────────────── */
  "/blog/how-i-think-about-product-framework": {
    keyword: "product thinking framework",
    title: "A Product Thinking Framework Built Over 9 Years",
    description:
      "A practical product thinking framework built over 9 years of scaling real products across growth, monetisation and operations.",
  },
  "/blog/how-ai-is-changing-product-decisions": {
    keyword: "AI in product decisions",
    title: "How AI Is Changing Product Decision-Making",
  },
  "/blog/product-frameworks-at-scale": {
    keyword: "product frameworks at scale",
    title: "Product Frameworks I Actually Use at Scale",
  },
  "/blog/research-beyond-surveys": {
    keyword: "market research beyond surveys",
    title: "Market Research Beyond Surveys",
  },
  "/blog/what-makes-product-scalable": {
    keyword: "what makes a product scalable",
    title: "What Makes a Product Scalable",
  },
  "/blog/leadership-not-feature-ownership": {
    keyword: "product leadership",
    title: "Product Leadership Is Not Feature Ownership",
  },
  "/blog/what-does-a-pm-actually-do": {
    keyword: "what does a product manager do",
    title: "What Does a Product Manager Actually Do?",
  },
  "/blog/evolution-of-product-management": {
    keyword: "evolution of product management",
    title: "The Evolution of Product Management",
  },
  "/blog/core-skills-every-product-manager": {
    keyword: "core product manager skills",
    title: "Core Skills Every Product Manager Must Master",
  },
  "/blog/pm-vs-product-owner-vs-project-manager": {
    keyword: "product manager vs product owner",
    title: "PM vs Product Owner vs Project Manager",
  },
  "/blog/product-lifecycle-explained": {
    keyword: "product lifecycle explained",
    title: "The Product Lifecycle Explained for PMs",
  },
  "/blog/user-centric-product-thinking": {
    keyword: "user-centric product thinking",
    title: "Understanding User-Centric Product Thinking",
  },
  "/blog/how-pms-balance-business-tech-ux": {
    keyword: "balancing business, tech and UX",
    title: "How PMs Balance Business, Tech and UX",
  },
  "/blog/product-management-misconceptions": {
    keyword: "product management misconceptions",
    title: "Common Product Management Misconceptions",
  },
  "/blog/outcome-driven-roadmaps": {
    keyword: "outcome-driven roadmaps",
    title: "Outcome-Driven Roadmaps: Why Features Don't Matter",
  },
  "/blog/how-to-build-winning-product-strategy": {
    keyword: "how to build a product strategy",
    title: "How to Build a Winning Product Strategy",
  },
  "/blog/prioritization-frameworks-every-pm": {
    keyword: "product prioritization frameworks",
    title: "Prioritization Frameworks Every PM Should Know",
  },
  "/blog/setting-strong-product-vision": {
    keyword: "setting a product vision",
    title: "Setting a Strong Product Vision Teams Follow",
  },
  "/blog/product-leadership-vs-management": {
    keyword: "product leadership vs management",
    title: "Product Leadership vs Product Management",
  },
  "/blog/strategic-thinking-senior-pm": {
    keyword: "strategic thinking for PMs",
    title: "Strategic Thinking for Senior Product Managers",
  },
  "/blog/long-term-vs-short-term-product-strategy": {
    keyword: "long-term vs short-term strategy",
    title: "Long-Term vs Short-Term Product Strategy",
  },
  "/blog/decision-making-frameworks-product-leaders": {
    keyword: "product decision-making frameworks",
    title: "Decision-Making Frameworks for Product Leaders",
  },
  "/blog/data-driven-product-management": {
    keyword: "data-driven product management",
    title: "Why Data-Driven Product Management Matters",
  },
  "/blog/metrics-that-matter-product-managers": {
    keyword: "product management metrics",
    title: "Metrics That Actually Matter for PMs",
  },
  "/blog/north-star-metrics-how-to": {
    keyword: "north star metric",
    title: "North Star Metrics: How to Define and Use Them",
  },
  "/blog/funnel-analysis-product-managers": {
    keyword: "funnel analysis for product managers",
    title: "Funnel Analysis for Product Managers",
  },
  "/blog/ab-testing-product-decisions": {
    keyword: "A/B testing for product decisions",
    title: "An A/B Testing Framework for Product Decisions",
  },
  "/blog/product-analytics-improve-retention": {
    keyword: "product analytics for retention",
    title: "Using Product Analytics to Improve Retention",
  },
  "/blog/data-driven-product-culture": {
    keyword: "data-driven product culture",
    title: "How to Build a Data-Driven Product Culture",
  },
  "/blog/ai-changing-product-management": {
    keyword: "AI in product management",
    title: "How AI Is Changing Product Management",
  },
  "/blog/ai-tools-product-managers": {
    keyword: "AI tools for product managers",
    title: "AI Tools Every Product Manager Should Use",
  },
  "/blog/ai-product-discovery-techniques": {
    keyword: "AI for product discovery",
    title: "Using AI for Product Discovery",
  },
  "/blog/ai-roadmap-planning": {
    keyword: "AI for roadmap planning",
    title: "AI for Roadmap Planning: Reality vs Hype",
  },
  "/blog/ai-improve-product-analytics": {
    keyword: "AI for product analytics",
    title: "How AI Can Improve Product Analytics",
  },
  "/blog/generative-ai-writing-prds": {
    keyword: "generative AI for PRDs",
    title: "Generative AI for Writing PRDs",
  },
  "/blog/ai-user-research": {
    keyword: "AI in user research",
    title: "AI in User Research: Opportunities and Risks",
  },
  "/blog/ai-copilots-for-pms": {
    keyword: "AI copilots for product managers",
    title: "AI Copilots for Product Managers",
  },
  "/blog/building-ai-first-products": {
    keyword: "building AI-first products",
    title: "Building AI-First Products: A PM's Perspective",
  },
  "/blog/future-role-pms-ai-world": {
    keyword: "future of product management with AI",
    title: "The Future Role of PMs in an AI World",
  },
  "/blog/growth-loops-product-management": {
    keyword: "growth loops",
    title: "Growth Loops Every Product Manager Should Know",
  },
  "/blog/activation-metrics-product-growth": {
    keyword: "activation metrics",
    title: "Activation Metrics That Drive Product Growth",
  },
  "/blog/retention-strategies-consumer-apps": {
    keyword: "retention strategies for consumer apps",
    title: "Retention Strategies for Consumer Apps",
  },
  "/blog/monetization-models-digital-products": {
    keyword: "monetization models for digital products",
    title: "Monetization Models for Digital Products",
  },
  "/blog/pricing-strategy-framework": {
    keyword: "product pricing strategy",
    title: "A Pricing Strategy Framework for PMs",
  },
  "/blog/product-led-growth-guide": {
    keyword: "product-led growth",
    title: "Product-Led Growth: A PM's Guide",
  },
  "/blog/balancing-growth-monetization": {
    keyword: "balancing growth and monetization",
    title: "Balancing Growth and Monetization",
  },
  "/blog/reduce-customer-acquisition-cost": {
    keyword: "how to reduce customer acquisition cost",
    title: "How to Reduce Customer Acquisition Cost",
    description:
      "Cutting spend doesn't move CAC \u2014 changing who you acquire does. Four levers that took blended CAC down 30%+ without losing acquisition volume.",
  },
  "/blog/programmatic-seo-guide": {
    keyword: "programmatic SEO",
    title: "Programmatic SEO Without Thin Pages",
    description:
      "How to scale organic traffic with programmatic pages that earn their place \u2014 the data model, templates and internal linking behind 100K+ monthly sessions.",
  },
  "/blog/writing-effective-prds-guide": {
    keyword: "how to write a PRD",
    title: "How to Write Effective PRDs",
  },
  "/blog/agile-vs-scrum-vs-kanban": {
    keyword: "agile vs scrum vs kanban",
    title: "Agile vs Scrum vs Kanban for PMs",
  },
  "/blog/sprint-planning-best-practices": {
    keyword: "sprint planning best practices",
    title: "Sprint Planning Best Practices for PMs",
  },
  "/blog/managing-cross-functional-teams": {
    keyword: "managing cross-functional teams",
    title: "Managing Cross-Functional Product Teams",
  },
  "/blog/roadmap-planning-practical-guide": {
    keyword: "product roadmap planning",
    title: "Roadmap Planning: A Practical Guide for PMs",
  },
  "/blog/become-product-manager-india": {
    keyword: "how to become a product manager in India",
    title: "How to Become a Product Manager in India",
  },
  "/blog/product-manager-interview-questions": {
    keyword: "product manager interview questions",
    title: "Product Manager Interview Questions & Answers",
  },
  "/blog/pm-skills-gap-analysis": {
    keyword: "product manager skills gap",
    title: "The PM Skills Gap: What to Learn Next",
  },
  "/blog/building-pm-portfolio": {
    keyword: "product manager portfolio",
    title: "How to Build a Product Manager Portfolio",
  },
  "/blog/pm-career-path-complete-guide": {
    keyword: "product manager career path",
    title: "The Product Manager Career Path: A Guide",
  },
};

export function getPageSeo(path: string): PageSeo | undefined {
  return PAGE_SEO[path];
}
