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
  {
    slug: "ml-insurance-prediction",
    title: "How We Used ML to Predict Insurance Buyers (50K+ Data Points)",
    description: "Using predictive modeling to increase insurance conversions by 32%",
    category: "Machine Learning",
    tags: ["ML", "Fintech", "Conversion"],
    readTime: "8 min read",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    slug: "smart-funnel-optimization",
    title: "Increasing Conversion by 42% with Smart Funnel Optimization",
    description: "Redesigning the purchase funnel using behavioural data and A/B testing at scale",
    category: "Growth",
    tags: ["Growth", "A/B Testing", "Funnel"],
    readTime: "6 min read",
    date: "Feb 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    slug: "real-time-fare-comparison",
    title: "Building a Real-Time Fare Comparison Engine (Uber vs Ola)",
    description: "Architecting a live pricing engine that processes 10K+ fare requests per minute",
    category: "Product",
    tags: ["Product", "Mobility", "Engineering"],
    readTime: "10 min read",
    date: "Mar 2024",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
  },
  {
    slug: "cac-reduction-intent-targeting",
    title: "How We Reduced CAC by 35% Using Intent-Based Targeting",
    description: "Rebuilding the acquisition strategy around user intent signals instead of demographics",
    category: "Growth",
    tags: ["Growth", "Ads", "CAC"],
    readTime: "7 min read",
    date: "Apr 2024",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80"
  },
  {
    slug: "seo-1k-to-100k-traffic",
    title: "Scaling SEO from 1K to 100K Monthly Traffic",
    description: "A systematic programmatic SEO playbook that compounded organic growth 100x in 12 months",
    category: "SEO",
    tags: ["SEO", "Content", "Growth"],
    readTime: "9 min read",
    date: "May 2024",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80"
  },
  {
    slug: "insurance-landing-page",
    title: "Designing a High-Converting Insurance Landing Page",
    description: "From 2.1% to 6.8% CVR — how layout, trust signals, and copy changes moved the needle",
    category: "Design",
    tags: ["Design", "Conversion", "Fintech"],
    readTime: "5 min read",
    date: "Jun 2024",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
  },
  {
    slug: "ai-personalization-financial",
    title: "AI-Based Personalization for Financial Products",
    description: "Deploying recommendation models that lifted cross-sell revenue by 28% in 90 days",
    category: "Machine Learning",
    tags: ["AI", "Personalization", "Fintech"],
    readTime: "11 min read",
    date: "Jul 2024",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
  },
  {
    slug: "trigger-based-retention",
    title: "Improving Retention with Trigger-Based Notifications",
    description: "Behavioural triggers that reduced 30-day churn by 22% without increasing notification volume",
    category: "Product",
    tags: ["Retention", "Notifications", "Engagement"],
    readTime: "7 min read",
    date: "Aug 2024",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  },
  {
    slug: "comparison-engine-india",
    title: "Building a Comparison Engine Like Monito (India Use Case)",
    description: "Creating a real-time money transfer comparison platform from scratch — tech, data, and GTM",
    category: "Product",
    tags: ["Product", "Marketplace", "Fintech"],
    readTime: "12 min read",
    date: "Sep 2024",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
  },
  {
    slug: "ml-ad-optimization-roas",
    title: "How We Increased ROAS Using ML Ad Optimization",
    description: "Training custom bidding models that delivered 3.4x ROAS improvement across paid channels",
    category: "Machine Learning",
    tags: ["ML", "Ads", "ROAS"],
    readTime: "8 min read",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
  },
  {
    slug: "fintech-viral-growth-loop",
    title: "Creating a Viral Growth Loop for a Fintech App",
    description: "Engineering referral mechanics that generated 40% of new users organically at near-zero cost",
    category: "Growth",
    tags: ["Growth", "Virality", "Fintech"],
    readTime: "6 min read",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80"
  },
  {
    slug: "ux-redesign-conversion",
    title: "UX Redesign That Improved Conversion by 28%",
    description: "A full design audit + redesign cycle driven by heatmaps, session recordings, and user interviews",
    category: "Design",
    tags: ["UX", "Design", "Conversion"],
    readTime: "9 min read",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
  },
  {
    slug: "predicting-user-dropoffs",
    title: "Predicting User Drop-offs Using Behavioral Data",
    description: "Building an early-warning model that identified at-risk users 7 days before they churned",
    category: "Machine Learning",
    tags: ["ML", "Retention", "Analytics"],
    readTime: "10 min read",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    slug: "product-recommendation-engine",
    title: "Building a Scalable Product Recommendation Engine",
    description: "A collaborative filtering engine that served 2M+ daily recommendations with <50ms latency",
    category: "Machine Learning",
    tags: ["ML", "Recommendations", "Scale"],
    readTime: "13 min read",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
  },
  {
    slug: "0-to-10k-users-growth",
    title: "From 0 to 10K Users in 30 Days (Growth Playbook)",
    description: "The exact channel mix, messaging, and distribution tactics behind a rapid cold-start launch",
    category: "Growth",
    tags: ["Growth", "Launch", "GTM"],
    readTime: "8 min read",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    slug: "trustworthy-fintech-ui",
    title: "Designing a Clean and Trustworthy Fintech UI",
    description: "How design psychology and visual trust signals improved sign-up completion by 19%",
    category: "Design",
    tags: ["Design", "Fintech", "UX"],
    readTime: "6 min read",
    date: "Apr 2025",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"
  },
  {
    slug: "automating-ad-campaigns",
    title: "Automating Ad Campaigns Across Platforms",
    description: "Building a unified automation layer across Google, Meta, and programmatic that cut ops time by 60%",
    category: "Growth",
    tags: ["Ads", "Automation", "Growth"],
    readTime: "7 min read",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
  },
  {
    slug: "insurance-cta-clicks-2x",
    title: "Increasing Clicks on Insurance CTAs by 2X",
    description: "Micro-copy, button placement, and urgency cues that doubled CTA engagement site-wide",
    category: "Design",
    tags: ["CRO", "Copy", "Fintech"],
    readTime: "5 min read",
    date: "Jun 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    slug: "ai-astrology-app",
    title: "Building an AI-Powered Astrology App",
    description: "From concept to 50K installs — product decisions, monetisation model, and ML personalisation",
    category: "Product",
    tags: ["AI", "Product", "Mobile"],
    readTime: "11 min read",
    date: "Jul 2025",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80"
  },
  {
    slug: "high-performance-comparison-website",
    title: "Creating a High-Performance Comparison Website",
    description: "Achieving sub-1s load times and 90+ Lighthouse scores on a content-heavy comparison platform",
    category: "Product",
    tags: ["Performance", "SEO", "Product"],
    readTime: "9 min read",
    date: "Aug 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  }
];

export const categoryColors: Record<string, string> = {
  "Machine Learning": "bg-purple-100 text-purple-700 border-purple-200",
  "Growth": "bg-green-100 text-green-700 border-green-200",
  "SEO": "bg-orange-100 text-orange-700 border-orange-200",
  "Design": "bg-pink-100 text-pink-700 border-pink-200",
  "Product": "bg-blue-100 text-blue-700 border-blue-200",
};
