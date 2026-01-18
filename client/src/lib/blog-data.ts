export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const BLOG_CATEGORIES = [
  "AI Update",
  "Product Resources",
  "Market Research",
  "Product Knowledge",
  "Leadership"
];

export const BLOG_POSTS: BlogPost[] = [
  // AI Update (10)
  {
    id: "ai-1",
    slug: "how-ai-is-changing-product-decisions",
    title: "How AI Is Actually Changing Product Decision-Making",
    description: "It's not about replacing PMs. It's about shifting from intuition-based bets to data-validated hypotheses at scale.",
    category: "AI Update",
    date: "March 15, 2025",
    readTime: "6 min read",
    image: "/assets/blog-ai.png"
  },
  {
    id: "ai-2",
    slug: "what-pms-get-wrong-about-ai",
    title: "What PMs Get Wrong About AI Adoption",
    description: "AI isn't a feature; it's an enabler. Stop shipping 'AI wrappers' and start solving core user problems.",
    category: "AI Update",
    date: "March 10, 2025",
    readTime: "5 min read",
    image: "/assets/blog-ai.png"
  },
  {
    id: "ai-3",
    slug: "ai-vs-automation-value",
    title: "AI vs Automation: Where the Real Value Lies",
    description: "Automation saves time. AI creates new possibilities. Knowing the difference is key to your roadmap.",
    category: "AI Update",
    date: "March 5, 2025",
    readTime: "7 min read",
    image: "/assets/blog-ai.png"
  },
  {
    id: "ai-4",
    slug: "ai-product-discovery",
    title: "Using AI for Product Discovery (Without Losing Judgment)",
    description: "How to use LLMs to simulate user interviews and analyze feedback without losing the human touch.",
    category: "AI Update",
    date: "Feb 28, 2025",
    readTime: "6 min read",
    image: "/assets/blog-ai.png"
  },
  {
    id: "ai-5",
    slug: "ai-metrics-that-matter",
    title: "AI Metrics That Matter (And Ones That Don’t)",
    description: "Vanity metrics in AI products are dangerous. Here's what you should actually be tracking.",
    category: "AI Update",
    date: "Feb 22, 2025",
    readTime: "8 min read",
    image: "/assets/blog-ai.png"
  },
  {
    id: "ai-6",
    slug: "founders-ai-roadmaps",
    title: "How Founders Should Think About AI Roadmaps",
    description: "Move beyond the hype cycle. Build defensible AI moats, not just features.",
    category: "AI Update",
    date: "Feb 18, 2025",
    readTime: "5 min read",
    image: "/assets/blog-ai.png"
  },
  {
    id: "ai-7",
    slug: "cost-blind-ai-implementation",
    title: "The Cost of Blind AI Implementation",
    description: "Implementing AI without a clear use case is the fastest way to burn runway.",
    category: "AI Update",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    image: "/assets/blog-ai.png"
  },
  {
    id: "ai-8",
    slug: "ai-pm-copilot",
    title: "AI as a PM Copilot, Not a Replacement",
    description: "Why the best PMs are using AI to amplify their strategic thinking, not outsource it.",
    category: "AI Update",
    date: "Feb 8, 2025",
    readTime: "4 min read",
    image: "/assets/blog-ai.png"
  },
  {
    id: "ai-9",
    slug: "what-ai-wont-fix",
    title: "What AI Won’t Fix in Your Product",
    description: "If your core value prop is broken, adding AI won't save it. Fix the foundation first.",
    category: "AI Update",
    date: "Feb 2, 2025",
    readTime: "5 min read",
    image: "/assets/blog-ai.png"
  },
  {
    id: "ai-10",
    slug: "next-12-months-ai-product",
    title: "The Next 12 Months of AI for Product Teams",
    description: "Predictions on how the role of product management will evolve in the AI era.",
    category: "AI Update",
    date: "Jan 28, 2025",
    readTime: "7 min read",
    image: "/assets/blog-ai.png"
  },

  // Product Resources (10)
  {
    id: "res-1",
    slug: "product-frameworks-at-scale",
    title: "Product Frameworks I Actually Use at Scale",
    description: "Forget the textbook theory. These are the frameworks that survive the chaos of hypergrowth.",
    category: "Product Resources",
    date: "March 14, 2025",
    readTime: "8 min read",
    image: "/assets/blog-resources.png"
  },
  {
    id: "res-2",
    slug: "guide-product-metrics",
    title: "A Practical Guide to Product Metrics",
    description: "How to define North Star metrics that actually align teams and drive outcomes.",
    category: "Product Resources",
    date: "March 8, 2025",
    readTime: "6 min read",
    image: "/assets/blog-resources.png"
  },
  {
    id: "res-3",
    slug: "go-to-product-templates",
    title: "My Go-To Product Templates (And Why They Work)",
    description: "Simple, effective templates for PRDs, strategy docs, and post-mortems.",
    category: "Product Resources",
    date: "March 3, 2025",
    readTime: "5 min read",
    image: "/assets/blog-resources.png"
  },
  {
    id: "res-4",
    slug: "prds-engineers-respect",
    title: "How to Structure PRDs That Engineers Respect",
    description: "Stop writing novels. Start writing clear, actionable specs that engineers love building.",
    category: "Product Resources",
    date: "Feb 25, 2025",
    readTime: "7 min read",
    image: "/assets/blog-resources.png"
  },
  {
    id: "res-5",
    slug: "prioritisation-without-politics",
    title: "Prioritisation Without Politics",
    description: "How to use frameworks like RICE and MoSCoW to make objective decisions, not emotional ones.",
    category: "Product Resources",
    date: "Feb 20, 2025",
    readTime: "6 min read",
    image: "/assets/blog-resources.png"
  },
  {
    id: "res-6",
    slug: "product-review-docs",
    title: "Product Review Docs That Drive Decisions",
    description: "How to run efficient product reviews that result in 'Go' or 'No Go', not endless debate.",
    category: "Product Resources",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    image: "/assets/blog-resources.png"
  },
  {
    id: "res-7",
    slug: "run-discovery-sessions",
    title: "How to Run Product Discovery Sessions",
    description: "A step-by-step guide to facilitating workshops that uncover real user needs.",
    category: "Product Resources",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    image: "/assets/blog-resources.png"
  },
  {
    id: "res-8",
    slug: "writing-docs-that-get-read",
    title: "Writing Product Docs That Get Read",
    description: "Communication is a product skill. Learn to write concisely and persuasively.",
    category: "Product Resources",
    date: "Feb 5, 2025",
    readTime: "4 min read",
    image: "/assets/blog-resources.png"
  },
  {
    id: "res-9",
    slug: "roadmapping-without-false-commitments",
    title: "Roadmapping Without False Commitments",
    description: "How to build roadmaps that provide direction without locking you into bad ideas.",
    category: "Product Resources",
    date: "Jan 30, 2025",
    readTime: "6 min read",
    image: "/assets/blog-resources.png"
  },
  {
    id: "res-10",
    slug: "tools-teams-overuse",
    title: "Tools Every Product Team Overuses",
    description: "You probably don't need another Jira plugin. Focus on the basics.",
    category: "Product Resources",
    date: "Jan 25, 2025",
    readTime: "5 min read",
    image: "/assets/blog-resources.png"
  },

  // Market Research (10)
  {
    id: "mr-1",
    slug: "research-beyond-surveys",
    title: "Market Research Beyond Surveys",
    description: "Surveys are biased. Here are 5 better ways to understand your market.",
    category: "Market Research",
    date: "March 12, 2025",
    readTime: "7 min read",
    image: "/assets/blog-research.png"
  },
  {
    id: "mr-2",
    slug: "identify-real-user-pain",
    title: "How to Identify Real User Pain",
    description: "Distinguishing between 'nice to have' feedback and critical pain points.",
    category: "Market Research",
    date: "March 7, 2025",
    readTime: "6 min read",
    image: "/assets/blog-research.png"
  },
  {
    id: "mr-3",
    slug: "why-research-fails",
    title: "Why Most Market Research Fails",
    description: "Asking the wrong questions leads to the wrong product. Here's how to fix it.",
    category: "Market Research",
    date: "March 2, 2025",
    readTime: "5 min read",
    image: "/assets/blog-research.png"
  },
  {
    id: "mr-4",
    slug: "qualitative-vs-quantitative",
    title: "Qualitative vs Quantitative: When to Use What",
    description: "A framework for balancing data analytics with user interviews.",
    category: "Market Research",
    date: "Feb 26, 2025",
    readTime: "6 min read",
    image: "/assets/blog-research.png"
  },
  {
    id: "mr-5",
    slug: "signals-predict-growth",
    title: "Research Signals That Predict Growth",
    description: "Early indicators that you've found product-market fit.",
    category: "Market Research",
    date: "Feb 21, 2025",
    readTime: "7 min read",
    image: "/assets/blog-research.png"
  },
  {
    id: "mr-6",
    slug: "talking-to-users-scale",
    title: "Talking to Users at Scale",
    description: "How to set up a continuous discovery engine.",
    category: "Market Research",
    date: "Feb 16, 2025",
    readTime: "5 min read",
    image: "/assets/blog-research.png"
  },
  {
    id: "mr-7",
    slug: "sense-noisy-feedback",
    title: "Making Sense of Noisy Feedback",
    description: "How to filter signal from noise when everyone has an opinion.",
    category: "Market Research",
    date: "Feb 11, 2025",
    readTime: "6 min read",
    image: "/assets/blog-research.png"
  },
  {
    id: "mr-8",
    slug: "research-mistakes-early-stage",
    title: "Research Mistakes Early-Stage Teams Make",
    description: "Confirmation bias is the enemy. Learn how to validate honestly.",
    category: "Market Research",
    date: "Feb 6, 2025",
    readTime: "5 min read",
    image: "/assets/blog-research.png"
  },
  {
    id: "mr-9",
    slug: "research-into-roadmap",
    title: "Turning Research into Roadmap Decisions",
    description: "Bridging the gap between insights and execution.",
    category: "Market Research",
    date: "Feb 1, 2025",
    readTime: "7 min read",
    image: "/assets/blog-research.png"
  },
  {
    id: "mr-10",
    slug: "research-for-monetisation",
    title: "Market Research for Monetisation",
    description: "How to determine willingness to pay before writing a line of code.",
    category: "Market Research",
    date: "Jan 27, 2025",
    readTime: "6 min read",
    image: "/assets/blog-research.png"
  },

  // Product Knowledge (10)
  {
    id: "pk-1",
    slug: "what-makes-product-scalable",
    title: "What Makes a Product Scalable",
    description: "Scalability isn't just about backend code. It's about operational and design leverage.",
    category: "Product Knowledge",
    date: "March 13, 2025",
    readTime: "7 min read",
    image: "/assets/blog-knowledge.png"
  },
  {
    id: "pk-2",
    slug: "pmf-not-finish-line",
    title: "PMF Is Not the Finish Line",
    description: "Product-market fit is a moving target. Here's how to keep hitting it.",
    category: "Product Knowledge",
    date: "March 9, 2025",
    readTime: "5 min read",
    image: "/assets/blog-knowledge.png"
  },
  {
    id: "pk-3",
    slug: "metrics-reflect-health",
    title: "Metrics That Actually Reflect Product Health",
    description: "Moving beyond MAU. Look at retention cohorts and engagement depth.",
    category: "Product Knowledge",
    date: "March 4, 2025",
    readTime: "6 min read",
    image: "/assets/blog-knowledge.png"
  },
  {
    id: "pk-4",
    slug: "product-tradeoffs",
    title: "Product Trade-offs No One Talks About",
    description: "Speed vs. Quality. Features vs. Platform. How to make the hard calls.",
    category: "Product Knowledge",
    date: "Feb 27, 2025",
    readTime: "8 min read",
    image: "/assets/blog-knowledge.png"
  },
  {
    id: "pk-5",
    slug: "designing-for-retention",
    title: "Designing for Retention First",
    description: "Acquisition is expensive. Retention is where the profit is. Build for it.",
    category: "Product Knowledge",
    date: "Feb 23, 2025",
    readTime: "6 min read",
    image: "/assets/blog-knowledge.png"
  },
  {
    id: "pk-6",
    slug: "growth-without-breaking",
    title: "Growth Without Breaking the Product",
    description: "How to scale user base without degrading the core experience.",
    category: "Product Knowledge",
    date: "Feb 17, 2025",
    readTime: "7 min read",
    image: "/assets/blog-knowledge.png"
  },
  {
    id: "pk-7",
    slug: "monetisation-without-killing-ux",
    title: "Monetisation Without Killing UX",
    description: "Balancing revenue goals with user satisfaction.",
    category: "Product Knowledge",
    date: "Feb 13, 2025",
    readTime: "6 min read",
    image: "/assets/blog-knowledge.png"
  },
  {
    id: "pk-8",
    slug: "when-to-kill-feature",
    title: "When to Kill a Feature",
    description: "Sunsetting features is painful but necessary. Here's the playbook.",
    category: "Product Knowledge",
    date: "Feb 7, 2025",
    readTime: "5 min read",
    image: "/assets/blog-knowledge.png"
  },
  {
    id: "pk-9",
    slug: "decisions-at-1m-users",
    title: "Product Decisions at 1M+ Users",
    description: "How decision-making changes when you have massive scale.",
    category: "Product Knowledge",
    date: "Feb 3, 2025",
    readTime: "6 min read",
    image: "/assets/blog-knowledge.png"
  },
  {
    id: "pk-10",
    slug: "building-long-term-leverage",
    title: "Building for Long-Term Leverage",
    description: "Investing in internal tools and platforms that pay dividends for years.",
    category: "Product Knowledge",
    date: "Jan 29, 2025",
    readTime: "7 min read",
    image: "/assets/blog-knowledge.png"
  },

  // Leadership (10)
  {
    id: "lead-1",
    slug: "leadership-not-feature-ownership",
    title: "Product Leadership Is Not Feature Ownership",
    description: "Moving from managing tickets to managing outcomes and teams.",
    category: "Leadership",
    date: "March 11, 2025",
    readTime: "6 min read",
    image: "/assets/blog-leadership.png"
  },
  {
    id: "lead-2",
    slug: "influence-without-authority",
    title: "How to Influence Without Authority",
    description: "The core skill of every great PM. Getting engineering and design on board.",
    category: "Leadership",
    date: "March 6, 2025",
    readTime: "7 min read",
    image: "/assets/blog-leadership.png"
  },
  {
    id: "lead-3",
    slug: "leading-cross-functional-teams",
    title: "Leading Cross-Functional Teams at Scale",
    description: "Orchestrating complex initiatives across marketing, sales, and engineering.",
    category: "Leadership",
    date: "March 1, 2025",
    readTime: "8 min read",
    image: "/assets/blog-leadership.png"
  },
  {
    id: "lead-4",
    slug: "making-hard-product-calls",
    title: "Making Hard Product Calls",
    description: "How to navigate disagreement and make the final decision with confidence.",
    category: "Leadership",
    date: "Feb 24, 2025",
    readTime: "5 min read",
    image: "/assets/blog-leadership.png"
  },
  {
    id: "lead-5",
    slug: "working-with-founders",
    title: "Working With Founders as a PM",
    description: "How to earn trust and become a strategic partner to the founding team.",
    category: "Leadership",
    date: "Feb 19, 2025",
    readTime: "6 min read",
    image: "/assets/blog-leadership.png"
  },
  {
    id: "lead-6",
    slug: "saying-no-without-burning-trust",
    title: "Saying No Without Burning Trust",
    description: "Protecting the roadmap while maintaining healthy stakeholder relationships.",
    category: "Leadership",
    date: "Feb 14, 2025",
    readTime: "5 min read",
    image: "/assets/blog-leadership.png"
  },
  {
    id: "lead-7",
    slug: "mentoring-pms",
    title: "Mentoring PMs Effectively",
    description: "How to grow the next generation of product leaders.",
    category: "Leadership",
    date: "Feb 9, 2025",
    readTime: "7 min read",
    image: "/assets/blog-leadership.png"
  },
  {
    id: "lead-8",
    slug: "handling-stakeholder-pressure",
    title: "Handling Stakeholder Pressure",
    description: "Dealing with 'HiPPO's and urgent requests without derailing the strategy.",
    category: "Leadership",
    date: "Feb 4, 2025",
    readTime: "6 min read",
    image: "/assets/blog-leadership.png"
  },
  {
    id: "lead-9",
    slug: "decision-making-uncertainty",
    title: "Decision-Making Under Uncertainty",
    description: "How to move forward when you don't have all the data.",
    category: "Leadership",
    date: "Jan 31, 2025",
    readTime: "6 min read",
    image: "/assets/blog-leadership.png"
  },
  {
    id: "lead-10",
    slug: "lessons-scaling-products",
    title: "Leadership Lessons from Scaling Products",
    description: "What I learned growing products from zero to millions of users.",
    category: "Leadership",
    date: "Jan 26, 2025",
    readTime: "7 min read",
    image: "/assets/blog-leadership.png"
  }
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find(post => post.slug === slug);
}
