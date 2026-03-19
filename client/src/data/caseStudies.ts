export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  /* ── LIVE FLAGSHIP ── */
  {
    slug: "ml-insurance-prediction",
    title: "How We Used ML to Predict Insurance Buyers (50,000+ Data Points)",
    description: "Using predictive modeling to increase insurance conversions by 32%",
    category: "Machine Learning",
    tags: ["ML", "Fintech", "Conversion"],
    readTime: "12 min read",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },

  /* ── MACHINE LEARNING + GROWTH ── */
  {
    slug: "predict-high-ltv-users-ml",
    title: "How We Predicted High-LTV Users Using Behavioral ML (100K+ Sessions)",
    description: "Using behavioral ML to identify high-value users and optimize monetisation.",
    category: "Machine Learning",
    tags: ["ML", "Growth", "LTV"],
    readTime: "10 min read",
    date: "Feb 2024",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80"
  },
  {
    slug: "real-time-intent-scoring-engine",
    title: "Building a Real-Time Intent Scoring Engine for Lead Conversion",
    description: "Designing a system to score user intent in real-time and improve conversions.",
    category: "Machine Learning",
    tags: ["ML", "Growth", "Product"],
    readTime: "9 min read",
    date: "Mar 2024",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
  },
  {
    slug: "ml-reduce-cac-segmentation",
    title: "Using ML to Reduce CAC by 38% via Smart Audience Segmentation",
    description: "Reducing acquisition cost using intelligent ML-driven segmentation.",
    category: "Machine Learning",
    tags: ["ML", "Growth", "CAC"],
    readTime: "8 min read",
    date: "Apr 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    slug: "predict-user-dropoff-churn-model",
    title: "Predicting User Drop-Off Before It Happens (Churn Prevention Model)",
    description: "Using ML to predict churn and proactively retain users before they leave.",
    category: "Machine Learning",
    tags: ["ML", "Product", "Retention"],
    readTime: "10 min read",
    date: "May 2024",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
  },
  {
    slug: "ml-user-clustering-insurance",
    title: "Personalizing Insurance Offers Using ML-Driven User Clustering",
    description: "Clustering users to personalise offers and boost conversion rates.",
    category: "Machine Learning",
    tags: ["ML", "Growth", "Personalisation"],
    readTime: "8 min read",
    date: "Jun 2024",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80"
  },

  /* ── GROWTH + PRODUCT ── */
  {
    slug: "scaling-moneyratefinder-growth",
    title: "From 1K to 10K Monthly Users: Scaling MoneyRateFinder with SEO + Product Loops",
    description: "Scaling traffic and retention using compounding growth loops and organic SEO.",
    category: "Growth",
    tags: ["Growth", "Product", "SEO"],
    readTime: "9 min read",
    date: "Jul 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    slug: "insurance-cta-2x-growth",
    title: "How We Increased Insurance CTA Clicks by 2X Using Behavioral Triggers",
    description: "Improving click-through rate using behavioural triggers and precision timing.",
    category: "Growth",
    tags: ["Growth", "Product", "CRO"],
    readTime: "6 min read",
    date: "Aug 2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    slug: "growth-loop-repeat-users",
    title: "Designing a Growth Loop That Brought 30% Repeat Users in 14 Days",
    description: "Creating a viral retention loop that drives users back within two weeks.",
    category: "Growth",
    tags: ["Growth", "Product", "Retention"],
    readTime: "7 min read",
    date: "Sep 2024",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80"
  },
  {
    slug: "funnel-dropoff-ux-optimization",
    title: "Optimizing Funnel Drop-Off Using Micro UX Interventions",
    description: "Reducing drop-offs at each funnel stage with targeted UX improvements.",
    category: "Growth",
    tags: ["Growth", "Design", "Funnel"],
    readTime: "7 min read",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
  },
  {
    slug: "zero-cost-growth-engine",
    title: "How We Built a Zero-Cost Growth Engine Using Organic + Product Hooks",
    description: "Scaling growth to 50K users per month without any paid acquisition budget.",
    category: "Growth",
    tags: ["Growth", "Product", "Organic"],
    readTime: "8 min read",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80"
  },

  /* ── PRODUCT DEEP DIVES ── */
  {
    slug: "cab-fare-comparison-engine",
    title: "Building a Real-Time Cab Fare Comparison Engine (Uber vs Ola vs InDrive)",
    description: "Aggregating real-time fares across ride-hailing platforms at scale.",
    category: "Product",
    tags: ["Product", "Growth", "Mobility"],
    readTime: "11 min read",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
  },
  {
    slug: "comparison-platform-india",
    title: "Designing a Comparison Platform Like Monito for the Indian Market",
    description: "Building a fintech comparison platform tailored for India's remittance landscape.",
    category: "Product",
    tags: ["Product", "SEO", "Fintech"],
    readTime: "10 min read",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
  },
  {
    slug: "scalable-notification-system",
    title: "Creating a Scalable Notification System for 1M+ Users (Trigger-Based)",
    description: "Designing a trigger-based push notification engine that drives action at scale.",
    category: "Product",
    tags: ["Product", "Growth", "Engagement"],
    readTime: "9 min read",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  },
  {
    slug: "finance-calculator-app-retention",
    title: "How We Built a Multi-Calculator Finance App That Drives Daily Retention",
    description: "Building a utility product with compounding daily retention loops.",
    category: "Product",
    tags: ["Product", "Growth", "SEO"],
    readTime: "8 min read",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
  },
  {
    slug: "mvp-in-7-days",
    title: "From Idea to MVP in 7 Days: Building a High-Intent Utility Product",
    description: "Rapid product development, validation, and first-user acquisition in one week.",
    category: "Product",
    tags: ["Product", "Launch", "GTM"],
    readTime: "7 min read",
    date: "Apr 2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  },

  /* ── DESIGN + CONVERSION ── */
  {
    slug: "ux-redesign-conversion-28",
    title: "UX Redesign That Improved Conversion by 28% (Before vs After Breakdown)",
    description: "A full design audit and redesign cycle driven by heatmaps and user testing.",
    category: "Design",
    tags: ["Design", "Growth", "CRO"],
    readTime: "9 min read",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  },
  {
    slug: "fintech-trust-ui-patterns",
    title: "Designing Trust in Fintech: UI Patterns That Increased User Confidence",
    description: "Building credibility through design systems, visual hierarchy, and social proof.",
    category: "Design",
    tags: ["Design", "Product", "Fintech"],
    readTime: "7 min read",
    date: "Jun 2025",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"
  },
  {
    slug: "microcopy-ctr-increase",
    title: "How Microcopy Increased Click-Through Rate by 35% (UX Writing Case Study)",
    description: "Improving CTR with precision UX writing — button labels, headlines, and nudges.",
    category: "Design",
    tags: ["Design", "Growth", "Copy"],
    readTime: "6 min read",
    date: "Jul 2025",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
  },
  {
    slug: "reduce-cognitive-load",
    title: "Reducing Cognitive Load to Improve Funnel Completion (UX Case Study)",
    description: "Simplifying complex flows to drive significantly higher task completion rates.",
    category: "Design",
    tags: ["Design", "Growth", "UX"],
    readTime: "8 min read",
    date: "Aug 2025",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
  },

  /* ── SEO + GROWTH ── */
  {
    slug: "seo-0-to-100k",
    title: "Scaling SEO from 0 to 100K Monthly Traffic Using Programmatic Pages",
    description: "Driving massive organic traffic using a programmatic SEO architecture.",
    category: "SEO",
    tags: ["SEO", "Growth", "Content"],
    readTime: "10 min read",
    date: "Sep 2025",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80"
  },
  {
    slug: "seo-moat-remittance",
    title: "Building an SEO Moat in the Remittance Space (MoneyRateFinder Case Study)",
    description: "Creating defensible, compounding SEO advantage in a competitive fintech niche.",
    category: "SEO",
    tags: ["SEO", "Product", "Fintech"],
    readTime: "9 min read",
    date: "Oct 2025",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
  },
  {
    slug: "rank-1-fintech-keywords",
    title: "How We Ranked #1 for High-Intent Keywords in a Competitive Fintech Niche",
    description: "A systematic approach to winning top rankings for conversion-driving keywords.",
    category: "SEO",
    tags: ["SEO", "Fintech", "Content"],
    readTime: "8 min read",
    date: "Nov 2025",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
  },
  {
    slug: "programmatic-seo-calculators",
    title: "Programmatic SEO for Calculators: Driving 10X Organic Traffic",
    description: "Scaling organic traffic using calculator-based programmatic page templates.",
    category: "SEO",
    tags: ["SEO", "Product", "Scale"],
    readTime: "8 min read",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },

  /* ── HYBRID ── */
  {
    slug: "ai-recommendation-engine",
    title: "How We Built an AI-Powered Recommendation Engine for Financial Products",
    description: "Recommending financial products using AI personalisation and collaborative filtering.",
    category: "Machine Learning",
    tags: ["ML", "Product", "AI"],
    readTime: "12 min read",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
  },
  {
    slug: "ml-ux-growth-3x-conversion",
    title: "Combining ML + UX + Growth to Increase Conversion by 3X (Full Stack Case Study)",
    description: "End-to-end conversion optimisation using ML intent scoring, UX redesign, and growth loops.",
    category: "Machine Learning",
    tags: ["ML", "Growth", "Design"],
    readTime: "14 min read",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
];

export const categoryColors: Record<string, string> = {
  "Machine Learning": "bg-purple-100 text-purple-700 border-purple-200",
  "Growth":           "bg-green-100 text-green-700 border-green-200",
  "SEO":              "bg-orange-100 text-orange-700 border-orange-200",
  "Design":           "bg-pink-100 text-pink-700 border-pink-200",
  "Product":          "bg-blue-100 text-blue-700 border-blue-200",
};
