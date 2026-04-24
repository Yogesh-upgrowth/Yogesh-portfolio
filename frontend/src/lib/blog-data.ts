import aiRobot from "@assets/generated_images/robot_hand_shaking_human_hand_product_decision.png";
import aiAbstract from "@assets/generated_images/minimalist_abstract_line_art_representing_ai_and_data_flow.png";
import frameworkDiagram from "@assets/generated_images/product_framework_blueprint_schematic.png";
import growthChart from "@assets/generated_images/abstract_growth_chart_and_upward_trends_for_product_knowledge.png";
import leadershipAbstract from "@assets/generated_images/abstract_concept_of_leadership_and_connection.png";
import leadershipCompass from "@assets/generated_images/leadership_steering_wheel_compass.png";
import marketResearch from "@assets/generated_images/market_research_data_analysis_abstract.png";
import magnifyingGlass from "@assets/generated_images/stylized_magnifying_glass_and_data_points_for_market_research.png";
import geometricFramework from "@assets/generated_images/abstract_composition_of_geometric_shapes_representing_product_frameworks.png";
import scalableArch from "@assets/generated_images/scalable_product_architecture_abstract.png";
import minimalBg from "@assets/generated_images/minimalist_professional_abstract_geometric_background_with_blue_and_gray_tones.png";
import productFrameworkDiagram from "@assets/image_1768738376698.png";

import teamStock from "@assets/stock_images/product_management_t_88b107ee.jpg";
import dataStock from "@assets/stock_images/data_analytics_dashb_3073aad5.jpg";
import meetingStock from "@assets/stock_images/modern_office_meetin_da6ae2cf.jpg";
import officeStock from "@assets/stock_images/tech_startup_open_of_92404904.jpg";
import codingStock from "@assets/stock_images/coding_laptop_coffee_c93af597.jpg";
import professionalOne from "@assets/stock_images/professional_busines_c657916d.jpg";
import professionalTwo from "@assets/stock_images/professional_busines_d09c7189.jpg";
import startupStock from "@assets/stock_images/professional_startup_f5ba071b.jpg";

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
  // ── FEATURED POST ────────────────────────────────────────────────────────────
  {
    id: "featured-1",
    slug: "how-i-think-about-product-framework",
    title: "How I Think About Product: A Product Thinking Framework Built Over 9 Years",
    description: "A senior product leader shares a practical product thinking framework built over 9 years of scaling real products across growth, monetisation, and operations.",
    category: "Founder Notes",
    date: "2025-01-15",
    readTime: "15 min read",
    image: productFrameworkDiagram,
    author: "Yogesh Yadav",
    isFeatured: true,
    isMostPopular: true
  },

  // ── EXISTING POSTS WITH CONTENT ───────────────────────────────────────────────
  { id: "ai-1", slug: "how-ai-is-changing-product-decisions", title: "How AI Is Actually Changing Product Decision-Making", description: "It's not about replacing PMs. It's about shifting from intuition-based bets to data-validated hypotheses at scale.", category: "AI & Product", date: "2025-03-15", readTime: "8 min read", image: aiRobot, author: "Yogesh Yadav", isMostPopular: true },
  { id: "pm-1", slug: "product-frameworks-at-scale", title: "Product Frameworks I Actually Use at Scale", description: "Forget the textbook theory. These are the frameworks that survive the chaos of hypergrowth.", category: "PM Career", date: "2025-03-14", readTime: "8 min read", image: frameworkDiagram, author: "Yogesh Yadav", isMostPopular: true },
  { id: "exp-1", slug: "research-beyond-surveys", title: "Market Research Beyond Surveys", description: "Surveys are biased. Here are 5 better ways to understand your market.", category: "Experiments", date: "2025-03-12", readTime: "7 min read", image: magnifyingGlass, author: "Yogesh Yadav" },
  { id: "growth-1", slug: "what-makes-product-scalable", title: "What Makes a Product Scalable", description: "Scalability isn't just about backend code. It's about operational and design leverage.", category: "Growth & SEO", date: "2025-03-13", readTime: "7 min read", image: scalableArch, author: "Yogesh Yadav", isMostPopular: true },
  { id: "fn-1", slug: "leadership-not-feature-ownership", title: "Product Leadership Is Not Feature Ownership", description: "Moving from managing tickets to managing outcomes and teams.", category: "Founder Notes", date: "2025-03-11", readTime: "6 min read", image: leadershipCompass, author: "Yogesh Yadav" },

  // ── PM FUNDAMENTALS (8 blogs) ─────────────────────────────────────────────
  { id: "pmf-1", slug: "what-does-a-pm-actually-do", title: "What Does a Product Manager Actually Do in 2026?", description: "The job title is everywhere. The actual job is still wildly misunderstood. A ground-level look at what PMs really spend their days on.", category: "PM Career", date: "2025-04-10", readTime: "38 min read", image: teamStock, author: "Yogesh Yadav", isMostPopular: true },
  { id: "pmf-2", slug: "evolution-of-product-management", title: "The Evolution of Product Management: From Feature Owner to Business Owner", description: "How the PM role has been quietly redefined over the past decade — and what it means for your career.", category: "PM Career", date: "2025-04-09", readTime: "35 min read", image: professionalTwo, author: "Yogesh Yadav" },
  { id: "pmf-3", slug: "core-skills-every-product-manager", title: "Core Skills Every Product Manager Must Master", description: "Beyond frameworks and templates — the actual skills that separate good PMs from great ones.", category: "PM Career", date: "2025-04-08", readTime: "36 min read", image: startupStock, author: "Yogesh Yadav", isMostPopular: true },
  { id: "pmf-4", slug: "pm-vs-product-owner-vs-project-manager", title: "Product Manager vs Product Owner vs Project Manager: The Real Differences", description: "These three roles get confused constantly. Here's a clear, opinionated breakdown of how they actually differ.", category: "Comparisons", date: "2025-04-07", readTime: "34 min read", image: geometricFramework, author: "Yogesh Yadav" },
  { id: "pmf-5", slug: "product-lifecycle-explained", title: "The Product Lifecycle Explained for Modern PMs", description: "Introduction, growth, maturity, decline — and how smart PMs navigate each phase differently.", category: "PM Career", date: "2025-04-06", readTime: "35 min read", image: growthChart, author: "Yogesh Yadav" },
  { id: "pmf-6", slug: "user-centric-product-thinking", title: "Understanding User-Centric Product Thinking", description: "What it actually means to build for users — not what users ask for, but what they actually need.", category: "PM Career", date: "2025-04-05", readTime: "36 min read", image: magnifyingGlass, author: "Yogesh Yadav" },
  { id: "pmf-7", slug: "how-pms-balance-business-tech-ux", title: "How Product Managers Balance Business, Tech, and UX", description: "The impossible triangle of product management. How experienced PMs actually navigate competing pressures.", category: "PM Career", date: "2025-04-04", readTime: "35 min read", image: meetingStock, author: "Yogesh Yadav" },
  { id: "pmf-8", slug: "product-management-misconceptions", title: "Common Misconceptions About Product Management", description: "What people outside the role get wrong. And honestly, what people inside the role get wrong too.", category: "PM Career", date: "2025-04-03", readTime: "34 min read", image: officeStock, author: "Yogesh Yadav" },

  // ── PM STRATEGY & LEADERSHIP (8 blogs) ────────────────────────────────────
  { id: "pms-1", slug: "outcome-driven-roadmaps", title: "Outcome-Driven Roadmaps: Why Features Don't Matter", description: "A feature roadmap is a commitment to build things. An outcome roadmap is a commitment to change things. One of them works.", category: "Founder Notes", date: "2025-04-10", readTime: "37 min read", image: leadershipCompass, author: "Yogesh Yadav", isMostPopular: true },
  { id: "pms-2", slug: "how-to-build-winning-product-strategy", title: "How to Build a Winning Product Strategy", description: "Strategy is not a vision statement. It's a set of choices that exclude other choices. Here's how to make the right ones.", category: "Founder Notes", date: "2025-04-09", readTime: "38 min read", image: frameworkDiagram, author: "Yogesh Yadav" },
  { id: "pms-3", slug: "prioritization-frameworks-every-pm", title: "Prioritization Frameworks Every PM Should Know", description: "RICE, ICE, MoSCoW, Kano — and when to throw all of them out and just use judgment.", category: "PM Career", date: "2025-04-08", readTime: "36 min read", image: geometricFramework, author: "Yogesh Yadav" },
  { id: "pms-4", slug: "setting-strong-product-vision", title: "Setting a Strong Product Vision That Teams Follow", description: "Most product visions are forgotten within 3 months. Here's what makes one actually stick.", category: "Founder Notes", date: "2025-04-07", readTime: "35 min read", image: leadershipAbstract, author: "Yogesh Yadav" },
  { id: "pms-5", slug: "product-leadership-vs-management", title: "Product Leadership vs Product Management: What Changes at the Top", description: "When you stop managing features and start managing direction. The shift is more disorienting than people tell you.", category: "Comparisons", date: "2025-04-06", readTime: "35 min read", image: professionalOne, author: "Yogesh Yadav" },
  { id: "pms-6", slug: "strategic-thinking-senior-pm", title: "Strategic Thinking for Senior Product Managers", description: "What strategic thinking actually looks like in practice — not in MBA frameworks, but in daily product decisions.", category: "Founder Notes", date: "2025-04-05", readTime: "37 min read", image: scalableArch, author: "Yogesh Yadav" },
  { id: "pms-7", slug: "long-term-vs-short-term-product-strategy", title: "Building Long-Term vs Short-Term Product Strategy", description: "The tension between quarterly goals and three-year vision. How to hold both without losing either.", category: "Founder Notes", date: "2025-04-04", readTime: "36 min read", image: leadershipCompass, author: "Yogesh Yadav" },
  { id: "pms-8", slug: "decision-making-frameworks-product-leaders", title: "Decision-Making Frameworks for Product Leaders", description: "When data is incomplete, stakeholders disagree, and the clock is ticking — how senior PMs actually decide.", category: "Founder Notes", date: "2025-04-03", readTime: "37 min read", image: minimalBg, author: "Yogesh Yadav" },

  // ── DATA-DRIVEN PM (7 blogs) ─────────────────────────────────────────────
  { id: "dd-1", slug: "data-driven-product-management", title: "Why Data-Driven Product Management Matters (And Where It Breaks Down)", description: "Data is not a substitute for judgment. But judgment without data is guessing. Here's how to use both.", category: "Experiments", date: "2025-04-10", readTime: "36 min read", image: dataStock, author: "Yogesh Yadav" },
  { id: "dd-2", slug: "metrics-that-matter-product-managers", title: "Metrics That Actually Matter for Product Managers", description: "Not all metrics are created equal. Most dashboards measure activity, not impact. Here's how to tell the difference.", category: "Experiments", date: "2025-04-09", readTime: "35 min read", image: marketResearch, author: "Yogesh Yadav", isMostPopular: true },
  { id: "dd-3", slug: "north-star-metrics-how-to", title: "North Star Metrics: How to Define and Use Them", description: "A North Star metric should focus your entire team. Most don't. Here's why — and how to fix it.", category: "Experiments", date: "2025-04-08", readTime: "35 min read", image: growthChart, author: "Yogesh Yadav" },
  { id: "dd-4", slug: "funnel-analysis-product-managers", title: "Funnel Analysis for Product Managers", description: "Every user interaction is a funnel. Most PMs only look at the top and the bottom. Here's what you're missing.", category: "Experiments", date: "2025-04-07", readTime: "34 min read", image: dataStock, author: "Yogesh Yadav" },
  { id: "dd-5", slug: "ab-testing-product-decisions", title: "A/B Testing Framework for Product Decisions", description: "A/B testing is easy to run wrong. Here's how to design tests that actually give you reliable answers.", category: "Experiments", date: "2025-04-06", readTime: "35 min read", image: magnifyingGlass, author: "Yogesh Yadav" },
  { id: "dd-6", slug: "product-analytics-improve-retention", title: "Using Product Analytics to Improve Retention", description: "Acquisition gets the headlines. Retention is where the business lives or dies. Here's how to use data to protect it.", category: "Experiments", date: "2025-04-05", readTime: "36 min read", image: marketResearch, author: "Yogesh Yadav" },
  { id: "dd-7", slug: "data-driven-product-culture", title: "How to Build a Data-Driven Product Culture", description: "Culture, not tools, is what makes an organization actually data-driven. Here's how to build it from inside.", category: "Experiments", date: "2025-04-04", readTime: "35 min read", image: officeStock, author: "Yogesh Yadav" },

  // ── AI IN PM (10 blogs) ──────────────────────────────────────────────────
  { id: "ai-new-1", slug: "ai-changing-product-management", title: "How AI is Changing Product Management", description: "AI is reshaping what PMs do, how they research, how they write, and how they make decisions. A ground-level assessment.", category: "AI & Product", date: "2025-04-10", readTime: "38 min read", image: aiRobot, author: "Yogesh Yadav", isMostPopular: true },
  { id: "ai-new-2", slug: "ai-tools-product-managers", title: "AI Tools Every Product Manager Should Use", description: "Not a list of hype. A practical breakdown of AI tools that actually change how PMs work — and which ones to skip.", category: "AI & Product", date: "2025-04-09", readTime: "37 min read", image: aiAbstract, author: "Yogesh Yadav" },
  { id: "ai-new-3", slug: "ai-product-discovery-techniques", title: "Using AI for Product Discovery", description: "AI can simulate user interviews, analyze feedback at scale, and find patterns no human analyst would catch. Here's how.", category: "AI & Product", date: "2025-04-08", readTime: "36 min read", image: magnifyingGlass, author: "Yogesh Yadav" },
  { id: "ai-new-4", slug: "ai-roadmap-planning", title: "AI for Roadmap Planning: Reality vs Hype", description: "Can AI help you build better roadmaps? Sort of. The truth is more nuanced than the demos suggest.", category: "AI & Product", date: "2025-04-07", readTime: "35 min read", image: aiAbstract, author: "Yogesh Yadav" },
  { id: "ai-new-5", slug: "ai-improve-product-analytics", title: "How AI Can Improve Product Analytics", description: "Traditional analytics tells you what happened. AI analytics starts to tell you why — and what to do about it.", category: "AI & Product", date: "2025-04-06", readTime: "36 min read", image: dataStock, author: "Yogesh Yadav" },
  { id: "ai-new-6", slug: "generative-ai-writing-prds", title: "Generative AI for Writing PRDs", description: "I've been using AI to draft PRDs for six months. Here's what it's good at, where it falls flat, and what I've kept.", category: "AI & Product", date: "2025-04-05", readTime: "35 min read", image: codingStock, author: "Yogesh Yadav" },
  { id: "ai-new-7", slug: "ai-user-research", title: "AI in User Research: Opportunities and Risks", description: "AI can speed up research dramatically. It can also introduce bias at scale. Here's how to get the upside without the downside.", category: "AI & Product", date: "2025-04-04", readTime: "36 min read", image: aiRobot, author: "Yogesh Yadav" },
  { id: "ai-new-8", slug: "ai-copilots-for-pms", title: "AI Copilots for Product Managers", description: "The framing of AI as a 'copilot' is either the most useful metaphor in tech or the most dangerous. Here's my honest take.", category: "AI & Product", date: "2025-04-03", readTime: "35 min read", image: aiAbstract, author: "Yogesh Yadav" },
  { id: "ai-new-9", slug: "building-ai-first-products", title: "Building AI-First Products: A PM's Perspective", description: "What's actually different about building a product where AI is the core capability, not a feature bolted on.", category: "AI & Product", date: "2025-04-02", readTime: "38 min read", image: aiRobot, author: "Yogesh Yadav" },
  { id: "ai-new-10", slug: "future-role-pms-ai-world", title: "The Future Role of Product Managers in an AI World", description: "In 5 years, some of what PMs do today will be automated. What remains — and what expands — is worth planning for now.", category: "AI & Product", date: "2025-04-01", readTime: "37 min read", image: aiAbstract, author: "Yogesh Yadav" },

  // ── GROWTH & MONETIZATION (7 blogs) ──────────────────────────────────────
  { id: "gr-1", slug: "growth-loops-product-management", title: "Growth Loops Every Product Manager Should Know", description: "Funnels leak. Loops compound. Here's a practical guide to the growth mechanics that actually scale.", category: "Growth & SEO", date: "2025-04-10", readTime: "37 min read", image: growthChart, author: "Yogesh Yadav", isMostPopular: true },
  { id: "gr-2", slug: "activation-metrics-product-growth", title: "Activation Metrics That Drive Product Growth", description: "Users who don't activate don't stay. The window between signup and activation is where most products lose the game.", category: "Growth & SEO", date: "2025-04-09", readTime: "35 min read", image: marketResearch, author: "Yogesh Yadav" },
  { id: "gr-3", slug: "retention-strategies-consumer-apps", title: "Retention Strategies for Consumer Apps", description: "The top apps in the world obsess over one metric above all others. Here's what their retention playbooks actually look like.", category: "Growth & SEO", date: "2025-04-08", readTime: "36 min read", image: teamStock, author: "Yogesh Yadav" },
  { id: "gr-4", slug: "monetization-models-digital-products", title: "Monetization Models for Digital Products", description: "Freemium, subscription, usage-based, marketplace — each model has a context where it wins and contexts where it fails.", category: "Growth & SEO", date: "2025-04-07", readTime: "36 min read", image: growthChart, author: "Yogesh Yadav" },
  { id: "gr-5", slug: "pricing-strategy-framework", title: "Pricing Strategy Framework for Product Managers", description: "Pricing is a product decision, not a finance decision. Here's how PMs should think about it.", category: "Growth & SEO", date: "2025-04-06", readTime: "37 min read", image: dataStock, author: "Yogesh Yadav" },
  { id: "gr-6", slug: "product-led-growth-guide", title: "Product-Led Growth: A PM's Guide", description: "PLG is not a sales strategy. It's an entire way of thinking about how your product acquires, activates, and retains users.", category: "Growth & SEO", date: "2025-04-05", readTime: "38 min read", image: scalableArch, author: "Yogesh Yadav" },
  { id: "gr-7", slug: "balancing-growth-monetization", title: "Balancing Growth and Monetization", description: "Grow too fast and you burn cash. Monetize too early and you kill growth. How to find the right moment for each.", category: "Growth & SEO", date: "2025-04-04", readTime: "35 min read", image: marketResearch, author: "Yogesh Yadav" },

  // ── EXECUTION & DELIVERY (5 blogs) ────────────────────────────────────────
  { id: "ex-1", slug: "writing-effective-prds-guide", title: "How to Write Effective Product Requirement Documents (PRDs)", description: "A PRD that engineers don't read is not a PRD. It's a liability. Here's how to write ones that actually get built correctly.", category: "PM Career", date: "2025-04-10", readTime: "36 min read", image: codingStock, author: "Yogesh Yadav" },
  { id: "ex-2", slug: "agile-vs-scrum-vs-kanban", title: "Agile vs Scrum vs Kanban for Product Managers", description: "The difference between frameworks — and why choosing the right one for your team context matters more than most PMs realize.", category: "Comparisons", date: "2025-04-09", readTime: "35 min read", image: geometricFramework, author: "Yogesh Yadav" },
  { id: "ex-3", slug: "sprint-planning-best-practices", title: "Sprint Planning Best Practices for PMs", description: "Bad sprint planning wastes weeks. Good sprint planning sets up your team to actually finish what they start.", category: "PM Career", date: "2025-04-08", readTime: "35 min read", image: meetingStock, author: "Yogesh Yadav" },
  { id: "ex-4", slug: "managing-cross-functional-teams", title: "Managing Cross-Functional Product Teams", description: "You have accountability but no authority. Here's how to make cross-functional teams work despite that impossible dynamic.", category: "PM Career", date: "2025-04-07", readTime: "36 min read", image: professionalTwo, author: "Yogesh Yadav" },
  { id: "ex-5", slug: "roadmap-planning-practical-guide", title: "Roadmap Planning: A Practical Guide for PMs", description: "A roadmap is not a schedule. It's a communication tool. Here's how to use it to align teams without locking yourself in.", category: "PM Career", date: "2025-04-06", readTime: "36 min read", image: frameworkDiagram, author: "Yogesh Yadav" },

  // ── PM CAREER & INTERVIEWS (5 blogs) ──────────────────────────────────────
  { id: "cr-1", slug: "become-product-manager-india", title: "How to Become a Product Manager in India", description: "From CS grad to startup PM to FAANG — the realistic paths into product management in the Indian ecosystem.", category: "PM Career", date: "2025-04-10", readTime: "38 min read", image: startupStock, author: "Yogesh Yadav", isMostPopular: true },
  { id: "cr-2", slug: "product-manager-interview-questions", title: "Product Manager Interview Questions and Answers", description: "Real questions from real PM interviews at top companies — with the frameworks and thinking behind strong answers.", category: "PM Career", date: "2025-04-09", readTime: "42 min read", image: meetingStock, author: "Yogesh Yadav", isMostPopular: true },
  { id: "cr-3", slug: "engineer-to-product-manager", title: "Transitioning from Engineer to Product Manager", description: "The technical background is an advantage. What trips most engineers up is everything else. Here's how to make the switch.", category: "PM Career", date: "2025-04-08", readTime: "37 min read", image: codingStock, author: "Yogesh Yadav" },
  { id: "cr-4", slug: "product-manager-resume-guide", title: "How to Build a Strong Product Manager Resume", description: "Most PM resumes list responsibilities. Strong ones demonstrate impact. Here's the exact difference — with examples.", category: "PM Career", date: "2025-04-07", readTime: "36 min read", image: professionalOne, author: "Yogesh Yadav" },
  { id: "cr-5", slug: "pm-career-path-complete-guide", title: "Career Path for Product Managers: A Complete Guide", description: "APM to CPO — what each level actually expects, how long each stage takes, and what accelerates the climb.", category: "PM Career", date: "2025-04-06", readTime: "38 min read", image: leadershipAbstract, author: "Yogesh Yadav" },
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
