import aiHero from "@assets/generated_images/robot_hand_shaking_human_hand_product_decision.png";
import resourceHero from "@assets/generated_images/product_framework_blueprint_schematic.png";
import researchHero from "@assets/generated_images/market_research_data_analysis_abstract.png";
import knowledgeHero from "@assets/generated_images/scalable_product_architecture_abstract.png";
import leadershipHero from "@assets/generated_images/leadership_steering_wheel_compass.png";

import teamStock from "@assets/stock_images/product_management_t_88b107ee.jpg";
import dataStock from "@assets/stock_images/data_analytics_dashb_3073aad5.jpg";
import meetingStock from "@assets/stock_images/modern_office_meetin_da6ae2cf.jpg";
import officeStock from "@assets/stock_images/tech_startup_open_of_92404904.jpg";
import codingStock from "@assets/stock_images/coding_laptop_coffee_c93af597.jpg";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author?: string;
  isFeatured?: boolean;
  isMostPopular?: boolean;
}

export interface BlogPostContent {
  id: string;
  content: string;
}

export const BLOG_CATEGORIES = [
  "AI & Product",
  "PM Career",
  "Experiments",
  "Growth & SEO",
  "Comparisons",
  "Founder Notes"
];

export const BLOG_POSTS: BlogPost[] = [
  // Featured Post (About Me / How I Work)
  { 
    id: "featured-1", 
    slug: "how-i-think-about-product", 
    title: "How I Think About Product: My Framework After 9 Years", 
    description: "A deep dive into my mental models, decision frameworks, and lessons learned building products at scale.", 
    category: "Founder Notes", 
    date: "2025-01-15", 
    readTime: "12 min read", 
    image: leadershipHero,
    author: "Yogesh Yadav",
    isFeatured: true,
    isMostPopular: true
  },

  // AI & Product
  { id: "ai-1", slug: "how-ai-is-changing-product-decisions", title: "How AI Is Actually Changing Product Decision-Making", description: "It's not about replacing PMs. It's about shifting from intuition-based bets to data-validated hypotheses at scale.", category: "AI & Product", date: "2025-03-15", readTime: "8 min read", image: aiHero, author: "Yogesh Yadav", isMostPopular: true },
  { id: "ai-2", slug: "what-pms-get-wrong-about-ai", title: "What PMs Get Wrong About AI Adoption", description: "AI isn't a feature; it's an enabler. Stop shipping 'AI wrappers' and start solving core user problems.", category: "AI & Product", date: "2025-03-10", readTime: "5 min read", image: dataStock, author: "Yogesh Yadav" },
  { id: "ai-3", slug: "ai-vs-automation-value", title: "AI vs Automation: Where the Real Value Lies", description: "Automation saves time. AI creates new possibilities. Knowing the difference is key to your roadmap.", category: "AI & Product", date: "2025-03-05", readTime: "7 min read", image: codingStock, author: "Yogesh Yadav", isMostPopular: true },
  { id: "ai-4", slug: "ai-product-discovery", title: "Using AI for Product Discovery", description: "How to use LLMs to simulate user interviews and analyze feedback without losing the human touch.", category: "AI & Product", date: "2025-02-28", readTime: "6 min read", image: teamStock, author: "Yogesh Yadav" },
  { id: "ai-5", slug: "ai-metrics-that-matter", title: "AI Metrics That Matter", description: "Vanity metrics in AI products are dangerous. Here's what you should actually be tracking.", category: "AI & Product", date: "2025-02-22", readTime: "8 min read", image: officeStock, author: "Yogesh Yadav" },
  { id: "ai-6", slug: "founders-ai-roadmaps", title: "How Founders Should Think About AI Roadmaps", description: "Move beyond the hype cycle. Build defensible AI moats, not just features.", category: "AI & Product", date: "2025-02-18", readTime: "5 min read", image: meetingStock, author: "Yogesh Yadav" },
  { id: "ai-7", slug: "cost-blind-ai-implementation", title: "The Cost of Blind AI Implementation", description: "Implementing AI without a clear use case is the fastest way to burn runway.", category: "AI & Product", date: "2025-02-12", readTime: "6 min read", image: aiHero, author: "Yogesh Yadav" },
  { id: "ai-8", slug: "ai-pm-copilot", title: "AI as a PM Copilot, Not a Replacement", description: "Why the best PMs are using AI to amplify their strategic thinking, not outsource it.", category: "AI & Product", date: "2025-02-08", readTime: "4 min read", image: codingStock, author: "Yogesh Yadav" },

  // PM Career
  { id: "pm-1", slug: "product-frameworks-at-scale", title: "Product Frameworks I Actually Use at Scale", description: "Forget the textbook theory. These are the frameworks that survive the chaos of hypergrowth.", category: "PM Career", date: "2025-03-14", readTime: "8 min read", image: resourceHero, author: "Yogesh Yadav", isMostPopular: true },
  { id: "pm-2", slug: "guide-product-metrics", title: "A Practical Guide to Product Metrics", description: "How to define North Star metrics that actually align teams and drive outcomes.", category: "PM Career", date: "2025-03-08", readTime: "6 min read", image: meetingStock, author: "Yogesh Yadav", isMostPopular: true },
  { id: "pm-3", slug: "influence-without-authority", title: "How to Influence Without Authority", description: "The core skill of every great PM. Getting engineering and design on board.", category: "PM Career", date: "2025-03-06", readTime: "7 min read", image: meetingStock, author: "Yogesh Yadav", isMostPopular: true },
  { id: "pm-4", slug: "prds-engineers-respect", title: "How to Structure PRDs That Engineers Respect", description: "Stop writing novels. Start writing clear, actionable specs that engineers love building.", category: "PM Career", date: "2025-02-25", readTime: "7 min read", image: teamStock, author: "Yogesh Yadav" },
  { id: "pm-5", slug: "prioritisation-without-politics", title: "Prioritisation Without Politics", description: "How to use frameworks like RICE and MoSCoW to make objective decisions.", category: "PM Career", date: "2025-02-20", readTime: "6 min read", image: dataStock, author: "Yogesh Yadav" },
  { id: "pm-6", slug: "mentoring-pms", title: "Mentoring PMs Effectively", description: "How to grow the next generation of product leaders.", category: "PM Career", date: "2025-02-09", readTime: "7 min read", image: codingStock, author: "Yogesh Yadav" },

  // Experiments
  { id: "exp-1", slug: "research-beyond-surveys", title: "Market Research Beyond Surveys", description: "Surveys are biased. Here are 5 better ways to understand your market.", category: "Experiments", date: "2025-03-12", readTime: "7 min read", image: researchHero, author: "Yogesh Yadav" },
  { id: "exp-2", slug: "run-discovery-sessions", title: "How to Run Product Discovery Sessions", description: "A step-by-step guide to facilitating workshops that uncover real user needs.", category: "Experiments", date: "2025-02-10", readTime: "8 min read", image: codingStock, author: "Yogesh Yadav" },
  { id: "exp-3", slug: "qualitative-vs-quantitative", title: "Qualitative vs Quantitative: When to Use What", description: "A framework for balancing data analytics with user interviews.", category: "Experiments", date: "2025-02-26", readTime: "6 min read", image: researchHero, author: "Yogesh Yadav" },
  { id: "exp-4", slug: "sense-noisy-feedback", title: "Making Sense of Noisy Feedback", description: "How to filter signal from noise when everyone has an opinion.", category: "Experiments", date: "2025-02-11", readTime: "6 min read", image: codingStock, author: "Yogesh Yadav" },

  // Growth & SEO
  { id: "growth-1", slug: "what-makes-product-scalable", title: "What Makes a Product Scalable", description: "Scalability isn't just about backend code. It's about operational and design leverage.", category: "Growth & SEO", date: "2025-03-13", readTime: "7 min read", image: knowledgeHero, author: "Yogesh Yadav", isMostPopular: true },
  { id: "growth-2", slug: "designing-for-retention", title: "Designing for Retention First", description: "Acquisition is expensive. Retention is where the profit is. Build for it.", category: "Growth & SEO", date: "2025-02-23", readTime: "6 min read", image: teamStock, author: "Yogesh Yadav" },
  { id: "growth-3", slug: "growth-without-breaking", title: "Growth Without Breaking the Product", description: "How to scale user base without degrading the core experience.", category: "Growth & SEO", date: "2025-02-17", readTime: "7 min read", image: knowledgeHero, author: "Yogesh Yadav" },
  { id: "growth-4", slug: "monetisation-without-killing-ux", title: "Monetisation Without Killing UX", description: "Balancing revenue goals with user satisfaction.", category: "Growth & SEO", date: "2025-02-13", readTime: "6 min read", image: codingStock, author: "Yogesh Yadav" },

  // Comparisons
  { id: "comp-1", slug: "pmf-not-finish-line", title: "PMF Is Not the Finish Line", description: "Product-market fit is a moving target. Here's how to keep hitting it.", category: "Comparisons", date: "2025-03-09", readTime: "5 min read", image: dataStock, author: "Yogesh Yadav" },
  { id: "comp-2", slug: "product-tradeoffs", title: "Product Trade-offs No One Talks About", description: "Speed vs. Quality. Features vs. Platform. How to make the hard calls.", category: "Comparisons", date: "2025-02-27", readTime: "8 min read", image: meetingStock, author: "Yogesh Yadav" },
  { id: "comp-3", slug: "when-to-kill-feature", title: "When to Kill a Feature", description: "Sunsetting features is painful but necessary. Here's the playbook.", category: "Comparisons", date: "2025-02-07", readTime: "5 min read", image: dataStock, author: "Yogesh Yadav" },

  // Founder Notes
  { id: "fn-1", slug: "leadership-not-feature-ownership", title: "Product Leadership Is Not Feature Ownership", description: "Moving from managing tickets to managing outcomes and teams.", category: "Founder Notes", date: "2025-03-11", readTime: "6 min read", image: leadershipHero, author: "Yogesh Yadav" },
  { id: "fn-2", slug: "working-with-founders", title: "Working With Founders as a PM", description: "How to earn trust and become a strategic partner to the founding team.", category: "Founder Notes", date: "2025-02-19", readTime: "6 min read", image: dataStock, author: "Yogesh Yadav" },
  { id: "fn-3", slug: "saying-no-without-burning-trust", title: "Saying No Without Burning Trust", description: "Protecting the roadmap while maintaining healthy stakeholder relationships.", category: "Founder Notes", date: "2025-02-14", readTime: "5 min read", image: leadershipHero, author: "Yogesh Yadav" },
  { id: "fn-4", slug: "decision-making-uncertainty", title: "Decision-Making Under Uncertainty", description: "How to move forward when you don't have all the data.", category: "Founder Notes", date: "2025-01-31", readTime: "6 min read", image: teamStock, author: "Yogesh Yadav" },
  { id: "fn-5", slug: "lessons-scaling-products", title: "Leadership Lessons from Scaling Products", description: "What I learned growing products from zero to millions of users.", category: "Founder Notes", date: "2025-01-26", readTime: "7 min read", image: meetingStock, author: "Yogesh Yadav" }
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getFeaturedPost() {
  return BLOG_POSTS.find(post => post.isFeatured);
}

export function getMostPopularPosts(limit = 6) {
  return BLOG_POSTS.filter(post => post.isMostPopular).slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}
