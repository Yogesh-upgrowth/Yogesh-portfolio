import aiHero from "@assets/generated_images/robot_hand_shaking_human_hand_product_decision.png";
import resourceHero from "@assets/generated_images/product_framework_blueprint_schematic.png";
import researchHero from "@assets/generated_images/market_research_data_analysis_abstract.png";
import knowledgeHero from "@assets/generated_images/scalable_product_architecture_abstract.png";
import leadershipHero from "@assets/generated_images/leadership_steering_wheel_compass.png";

// Stock images for variety
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
  content?: string;
}

export const BLOG_CATEGORIES = [
  "AI Update",
  "Product Resources",
  "Market Research",
  "Product Knowledge",
  "Leadership"
];

export const BLOG_POSTS: BlogPost[] = [
  // ==================================================================================
  // CATEGORY 1: AI UPDATE
  // ==================================================================================
  {
    id: "ai-1",
    slug: "how-ai-is-changing-product-decisions",
    title: "How AI Is Actually Changing Product Decision-Making",
    description: "It's not about replacing PMs. It's about shifting from intuition-based bets to data-validated hypotheses at scale.",
    category: "AI Update",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: aiHero,
    content: `
      <p class="lead text-xl text-foreground font-medium mb-8">
        We are witnessing the biggest shift in product management since the move from Waterfall to Agile. But it’s not what you think.
      </p>

      <p>
        Most people think AI in product management is about writing PRDs faster or summarizing user interviews. While those are useful efficiencies, they are <em>incremental</em> improvements. The <em>exponential</em> shift is happening in how we make decisions.
      </p>

      <h2>The Death of the "HiPPO"</h2>
      <p>
        For decades, product decisions were often swayed by the <strong>Highest Paid Person’s Opinion (HiPPO)</strong>. Why? Because data was scarce, slow to access, and hard to interpret. In the absence of clear signal, intuition (and seniority) ruled.
      </p>
      <p>
        AI changes the math on data accessibility. We can now process unstructured feedback from thousands of support tickets, sales calls, and app reviews in seconds. The cost of "knowing" has dropped to near zero.
      </p>

      <div class="bg-muted/30 p-6 rounded-xl border border-border/50 my-8">
        <h4 class="text-lg font-bold mb-2 mt-0">Data Insight</h4>
        <p class="mb-0 text-muted-foreground">
          Teams using AI-driven insights platforms report a <strong>40% reduction</strong> in decision-making time and a <strong>3x increase</strong> in experiment velocity.
        </p>
      </div>

      <h3>From Prediction to Simulation</h3>
      <p>
        Traditionally, we’d launch an MVP to test a hypothesis. This is expensive. We build, we market, we wait, we measure.
      </p>
      <p>
        With advanced LLMs, we are moving toward <strong>Synthetic User Testing</strong>. We can simulate how different user personas might react to a value proposition or a pricing change before writing a line of code.
      </p>
      <ul>
        <li><strong>Old Way:</strong> Build a landing page, buy ads, wait 2 weeks for conversion data.</li>
        <li><strong>New Way:</strong> Run 1,000 simulations of your persona against the value prop to identify obvious friction points instantly.</li>
      </ul>

      <h2>The New PM Skill Stack</h2>
      <p>
        If AI can analyze data and simulate users, what is left for the PM?
      </p>
      <ol>
        <li><strong>Taste & Judgment:</strong> AI can generate 100 variations. You need the taste to pick the winning one.</li>
        <li><strong>Strategic Narrative:</strong> AI is bad at context. You must weave the data into a compelling story that aligns the organization.</li>
        <li><strong>Ethics & Empathy:</strong> AI optimizes for the metric you give it. You must ensure that metric reflects human value, not just engagement traps.</li>
      </ol>

      <h3>Practical Steps to Adopt AI-Driven Decision Making</h3>
      <p>
        Don't try to boil the ocean. Start small:
      </p>
      <p>
        <strong>1. Automate the "What":</strong> Use AI to tag and categorize every piece of qualitative feedback you receive. Stop doing this manually.<br>
        <strong>2. Augment the "Why":</strong> Use AI to look for patterns in churn data that correlate with specific feature usage.<br>
        <strong>3. Own the "So What":</strong> Spend your energy deciding what to do with these insights.
      </p>

      <h2>Conclusion</h2>
      <p>
        AI won't replace product managers. But product managers who use AI to make faster, higher-confidence decisions will replace those who rely solely on gut feel. The barrier to entry for "being data-driven" has disappeared. Now, the differentiator is execution.
      </p>

      <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
        <h3 class="text-2xl font-serif font-bold mb-4">Need to upgrade your product stack?</h3>
        <p class="text-lg text-muted-foreground mb-6">
          I help teams integrate AI into their product workflows to move faster and build better.
        </p>
        <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
          Work with me
        </a>
      </div>
    `
  },
  {
    id: "ai-2",
    slug: "what-pms-get-wrong-about-ai",
    title: "What PMs Get Wrong About AI Adoption",
    description: "AI isn't a feature; it's an enabler. Stop shipping 'AI wrappers' and start solving core user problems.",
    category: "AI Update",
    date: "March 10, 2025",
    readTime: "5 min read",
    image: dataStock
  },
  { id: "ai-3", slug: "ai-vs-automation-value", title: "AI vs Automation: Where the Real Value Lies", description: "Automation saves time. AI creates new possibilities. Knowing the difference is key to your roadmap.", category: "AI Update", date: "March 5, 2025", readTime: "7 min read", image: codingStock },
  { id: "ai-4", slug: "ai-product-discovery", title: "Using AI for Product Discovery", description: "How to use LLMs to simulate user interviews and analyze feedback without losing the human touch.", category: "AI Update", date: "Feb 28, 2025", readTime: "6 min read", image: teamStock },
  { id: "ai-5", slug: "ai-metrics-that-matter", title: "AI Metrics That Matter", description: "Vanity metrics in AI products are dangerous. Here's what you should actually be tracking.", category: "AI Update", date: "Feb 22, 2025", readTime: "8 min read", image: officeStock },
  { id: "ai-6", slug: "founders-ai-roadmaps", title: "How Founders Should Think About AI Roadmaps", description: "Move beyond the hype cycle. Build defensible AI moats, not just features.", category: "AI Update", date: "Feb 18, 2025", readTime: "5 min read", image: meetingStock },
  { id: "ai-7", slug: "cost-blind-ai-implementation", title: "The Cost of Blind AI Implementation", description: "Implementing AI without a clear use case is the fastest way to burn runway.", category: "AI Update", date: "Feb 12, 2025", readTime: "6 min read", image: aiHero },
  { id: "ai-8", slug: "ai-pm-copilot", title: "AI as a PM Copilot, Not a Replacement", description: "Why the best PMs are using AI to amplify their strategic thinking, not outsource it.", category: "AI Update", date: "Feb 8, 2025", readTime: "4 min read", image: codingStock },
  { id: "ai-9", slug: "what-ai-wont-fix", title: "What AI Won’t Fix in Your Product", description: "If your core value prop is broken, adding AI won't save it. Fix the foundation first.", category: "AI Update", date: "Feb 2, 2025", readTime: "5 min read", image: dataStock },
  { id: "ai-10", slug: "next-12-months-ai-product", title: "The Next 12 Months of AI for Product Teams", description: "Predictions on how the role of product management will evolve in the AI era.", category: "AI Update", date: "Jan 28, 2025", readTime: "7 min read", image: teamStock },

  // ==================================================================================
  // CATEGORY 2: PRODUCT RESOURCES
  // ==================================================================================
  {
    id: "res-1",
    slug: "product-frameworks-at-scale",
    title: "Product Frameworks I Actually Use at Scale",
    description: "Forget the textbook theory. These are the frameworks that survive the chaos of hypergrowth.",
    category: "Product Resources",
    date: "March 14, 2025",
    readTime: "8 min read",
    image: resourceHero,
    content: `
      <p class="lead text-xl text-foreground font-medium mb-8">
        I have a confession: I hate most product frameworks.
      </p>
      <p>
        They look beautiful on a slide deck. The "Double Diamond," the "Kano Model," the "Hooked Model." But when you're in the trenches, dealing with a server outage, a furious key customer, and a sales team demanding a new feature by Friday, those diamonds tend to look more like scribbles.
      </p>
      <p>
        However, frameworks <em>are</em> useful when they are stripped down to their utility. Over 9 years of scaling products, I've abandoned 90% of them and kept the 10% that actually help me move faster. Here they are.
      </p>

      <h2>1. The "Working Backwards" (Amazon Style)</h2>
      <p>
        <strong>Use When:</strong> Defining a new feature or product line.<br>
        <strong>The Core:</strong> Write the Press Release first.
      </p>
      <p>
        Most PRDs start with technical constraints. "We have this database, so we can do X." This is backwards. Start with the customer experience. If you can't write a compelling one-page press release about why a customer would care, you shouldn't build it.
      </p>
      <div class="bg-muted/30 p-6 rounded-xl border border-border/50 my-8">
        <h4 class="text-lg font-bold mb-2 mt-0">Pro Tip</h4>
        <p class="mb-0 text-muted-foreground">
          Don't just write the features. Write the <em>quote</em> from the happy customer in your press release. That quote is your North Star.
        </p>
      </div>

      <h2>2. RICE Scoring (Simplified)</h2>
      <p>
        <strong>Use When:</strong> Prioritizing a messy backlog.<br>
        <strong>The Core:</strong> (Reach × Impact × Confidence) / Effort.
      </p>
      <p>
        The most important variable here is <strong>Confidence</strong>.
      </p>
      <ul>
        <li><strong>100% Confidence:</strong> We have user data / signed contracts.</li>
        <li><strong>80% Confidence:</strong> We have strong survey results / usability tests.</li>
        <li><strong>50% Confidence:</strong> "I have a gut feeling" / The CEO wants it.</li>
      </ul>
      <p>
        If you have low confidence, your RICE score tanks. This forces the team to go get data (Discovery) before building (Delivery).
      </p>

      <h2>3. The "Pre-Mortem"</h2>
      <p>
        <strong>Use When:</strong> Before launching a high-risk initiative.<br>
        <strong>The Core:</strong> "Assume it's 6 months from now and the project failed. Why did it fail?"
      </p>
      <p>
        Post-mortems are sad. Pre-mortems are strategic. By forcing the team to envision failure, you uncover the hidden risks—legal compliance, operations load, customer confusion—that usually get ignored in the excitement of a launch.
      </p>

      <h3>How to Apply These Tomorrow</h3>
      <p>
        Don't announce "We are now using RICE!" to your team. Just start using the language. Ask "How confident are we in this impact?" in your next meeting. Write a mock press release for your next feature and share it. Frameworks work best when they feel invisible.
      </p>

      <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
        <h3 class="text-2xl font-serif font-bold mb-4">Need a roadmap audit?</h3>
        <p class="text-lg text-muted-foreground mb-6">
          I help growth-stage startups clean up their product processes and focus on what matters.
        </p>
        <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
          Work with me
        </a>
      </div>
    `
  },
  { id: "res-2", slug: "guide-product-metrics", title: "A Practical Guide to Product Metrics", description: "How to define North Star metrics that actually align teams and drive outcomes.", category: "Product Resources", date: "March 8, 2025", readTime: "6 min read", image: meetingStock },
  { id: "res-3", slug: "go-to-product-templates", title: "My Go-To Product Templates", description: "Simple, effective templates for PRDs, strategy docs, and post-mortems.", category: "Product Resources", date: "March 3, 2025", readTime: "5 min read", image: officeStock },
  { id: "res-4", slug: "prds-engineers-respect", title: "How to Structure PRDs That Engineers Respect", description: "Stop writing novels. Start writing clear, actionable specs that engineers love building.", category: "Product Resources", date: "Feb 25, 2025", readTime: "7 min read", image: teamStock },
  { id: "res-5", slug: "prioritisation-without-politics", title: "Prioritisation Without Politics", description: "How to use frameworks like RICE and MoSCoW to make objective decisions.", category: "Product Resources", date: "Feb 20, 2025", readTime: "6 min read", image: dataStock },
  { id: "res-6", slug: "product-review-docs", title: "Product Review Docs That Drive Decisions", description: "How to run efficient product reviews that result in 'Go' or 'No Go', not endless debate.", category: "Product Resources", date: "Feb 15, 2025", readTime: "5 min read", image: resourceHero },
  { id: "res-7", slug: "run-discovery-sessions", title: "How to Run Product Discovery Sessions", description: "A step-by-step guide to facilitating workshops that uncover real user needs.", category: "Product Resources", date: "Feb 10, 2025", readTime: "8 min read", image: codingStock },
  { id: "res-8", slug: "writing-docs-that-get-read", title: "Writing Product Docs That Get Read", description: "Communication is a product skill. Learn to write concisely and persuasively.", category: "Product Resources", date: "Feb 5, 2025", readTime: "4 min read", image: meetingStock },
  { id: "res-9", slug: "roadmapping-without-false-commitments", title: "Roadmapping Without False Commitments", description: "How to build roadmaps that provide direction without locking you into bad ideas.", category: "Product Resources", date: "Jan 30, 2025", readTime: "6 min read", image: officeStock },
  { id: "res-10", slug: "tools-teams-overuse", title: "Tools Every Product Team Overuses", description: "You probably don't need another Jira plugin. Focus on the basics.", category: "Product Resources", date: "Jan 25, 2025", readTime: "5 min read", image: resourceHero },

  // ==================================================================================
  // CATEGORY 3: MARKET RESEARCH
  // ==================================================================================
  {
    id: "mr-1",
    slug: "research-beyond-surveys",
    title: "Market Research Beyond Surveys",
    description: "Surveys are biased. Here are 5 better ways to understand your market.",
    category: "Market Research",
    date: "March 12, 2025",
    readTime: "7 min read",
    image: researchHero,
    content: `
      <p class="lead text-xl text-foreground font-medium mb-8">
        "Everybody lies." — Dr. House. Also, every user taking a survey.
      </p>
      <p>
        If you ask a user "Would you buy this product for $50?", they will say "Yes" to be nice. Then, when you launch, they won't buy it. Survey data, especially regarding future intent, is notoriously unreliable.
      </p>
      <p>
        To build products that win, you need to move beyond what people <em>say</em> and observe what they <em>do</em>. Here are 5 methods I use to get the truth.
      </p>

      <h2>1. The "Fake Door" Test (Painted Door)</h2>
      <p>
        <strong>The Concept:</strong> Put a button for the feature on your site before building it.
      </p>
      <p>
        When users click "Advanced Analytics," show a modal: "Thanks for your interest! We're building this. Join the waitlist."
      </p>
      <p>
        <strong>Why it wins:</strong> A click is a behavior. It costs energy. It is a much stronger signal of intent than a checkbox on a survey.
      </p>

      <h2>2. Search Volume Analysis</h2>
      <p>
        People are honest with Google. Use tools like Ahrefs or Google Trends to see what people are searching for.
      </p>
      <ul>
        <li>Are they searching for a solution to the problem you're solving?</li>
        <li>What specific language do they use? (e.g., "cheap CRM" vs "enterprise sales tool")</li>
      </ul>
      <p>
        This tells you the <em>existing demand</em> in the market.
      </p>

      <h2>3. Competitor Review Mining</h2>
      <p>
        Go to G2, Capterra, or the App Store. Read the 1-star and 2-star reviews of your competitors.
      </p>
      <p>
        <strong>Look for:</strong> "I hate that [Competitor] makes me do X to get Y."<br>
        <strong>Opportunity:</strong> That is your roadmap. Solve the specific pain point your competitor is ignoring.
      </p>

      <div class="bg-muted/30 p-6 rounded-xl border border-border/50 my-8">
        <h4 class="text-lg font-bold mb-2 mt-0">Common Mistake</h4>
        <p class="mb-0 text-muted-foreground">
          Don't just copy features. Copy the <em>solution to the pain</em>. If users hate the complexity of Salesforce, don't build a lighter Salesforce; build a tool that removes the need for manual entry entirely.
        </p>
      </div>

      <h2>4. Sales Call Listening</h2>
      <p>
        If you are in B2B, your sales team is talking to the market every day. Listen to the recordings (Gong/Chorus).
      </p>
      <p>
        When do prospects' eyes light up? When do they groan? What objections do they raise about pricing? This is raw, unfiltered market data.
      </p>

      <h2>5. Customer Support Ticket Analysis</h2>
      <p>
        Your support tickets are a graveyard of broken product promises.
      </p>
      <p>
        Every "How do I do X?" ticket is a UI failure. Every "It's broken" ticket is a trust failure. Analyzing these clusters gives you the "negative roadmap"—what you need to fix to stop bleeding users.
      </p>

      <h3>Conclusion</h3>
      <p>
        Surveys have their place (mostly for satisfaction scores like NPS). But for strategic direction, rely on behavioral data. Watch what they click, what they search, and where they struggle. That is the truth.
      </p>

      <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
        <h3 class="text-2xl font-serif font-bold mb-4">Struggling to find product-market fit?</h3>
        <p class="text-lg text-muted-foreground mb-6">
          I help founders decode market signals and pivot to growth.
        </p>
        <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
          Work with me
        </a>
      </div>
    `
  },
  { id: "mr-2", slug: "identify-real-user-pain", title: "How to Identify Real User Pain", description: "Distinguishing between 'nice to have' feedback and critical pain points.", category: "Market Research", date: "March 7, 2025", readTime: "6 min read", image: teamStock },
  { id: "mr-3", slug: "why-research-fails", title: "Why Most Market Research Fails", description: "Asking the wrong questions leads to the wrong product. Here's how to fix it.", category: "Market Research", date: "March 2, 2025", readTime: "5 min read", image: dataStock },
  { id: "mr-4", slug: "qualitative-vs-quantitative", title: "Qualitative vs Quantitative: When to Use What", description: "A framework for balancing data analytics with user interviews.", category: "Market Research", date: "Feb 26, 2025", readTime: "6 min read", image: researchHero },
  { id: "mr-5", slug: "signals-predict-growth", title: "Research Signals That Predict Growth", description: "Early indicators that you've found product-market fit.", category: "Market Research", date: "Feb 21, 2025", readTime: "7 min read", image: officeStock },
  { id: "mr-6", slug: "talking-to-users-scale", title: "Talking to Users at Scale", description: "How to set up a continuous discovery engine.", category: "Market Research", date: "Feb 16, 2025", readTime: "5 min read", image: meetingStock },
  { id: "mr-7", slug: "sense-noisy-feedback", title: "Making Sense of Noisy Feedback", description: "How to filter signal from noise when everyone has an opinion.", category: "Market Research", date: "Feb 11, 2025", readTime: "6 min read", image: codingStock },
  { id: "mr-8", slug: "research-mistakes-early-stage", title: "Research Mistakes Early-Stage Teams Make", description: "Confirmation bias is the enemy. Learn how to validate honestly.", category: "Market Research", date: "Feb 6, 2025", readTime: "5 min read", image: researchHero },
  { id: "mr-9", slug: "research-into-roadmap", title: "Turning Research into Roadmap Decisions", description: "Bridging the gap between insights and execution.", category: "Market Research", date: "Feb 1, 2025", readTime: "7 min read", image: teamStock },
  { id: "mr-10", slug: "research-for-monetisation", title: "Market Research for Monetisation", description: "How to determine willingness to pay before writing a line of code.", category: "Market Research", date: "Jan 27, 2025", readTime: "6 min read", image: dataStock },

  // ==================================================================================
  // CATEGORY 4: PRODUCT KNOWLEDGE
  // ==================================================================================
  {
    id: "pk-1",
    slug: "what-makes-product-scalable",
    title: "What Makes a Product Scalable",
    description: "Scalability isn't just about backend code. It's about operational and design leverage.",
    category: "Product Knowledge",
    date: "March 13, 2025",
    readTime: "7 min read",
    image: knowledgeHero,
    content: `
      <p class="lead text-xl text-foreground font-medium mb-8">
        "Will it scale?" is the most annoying question in tech. Usually, engineers ask it about the database. But the real scalability bottlenecks are rarely technical—they are operational and organizational.
      </p>
      <p>
        I've seen products with perfect Kubernetes clusters fail to scale because their customer onboarding was manual. I've seen startups implode because their pricing model forced them to hire a support agent for every 100 customers.
      </p>
      <p>
        True product scalability is about <strong>Leverage</strong>.
      </p>

      <h2>1. Operational Leverage</h2>
      <p>
        <strong>The Test:</strong> Does adding your 10,000th customer cost the same operational effort as adding your 10th?
      </p>
      <p>
        If you have a manual "Review" step, or a "Sales Call" requirement, or a "Configuration" process that requires a human, you are not scalable. You are a service business disguised as a product.
      </p>
      <p>
        <strong>The Fix:</strong> Productize the service. Build the self-serve wizard. Automate the review. If you can't, raise your prices to cover the human cost (Service-as-a-Software).
      </p>

      <h2>2. Design Leverage (The Component System)</h2>
      <p>
        <strong>The Test:</strong> Can you ship a new feature without designing new UI elements?
      </p>
      <p>
        In the early days, you design every page. At scale, this creates "Design Debt." Inconsistent buttons, 15 shades of gray, fragmented UX. This slows development to a crawl.
      </p>
      <p>
        <strong>The Fix:</strong> Invest in a Design System early. It’s not just for aesthetics; it’s for velocity.
      </p>

      <h2>3. Data Leverage (Network Effects)</h2>
      <p>
        <strong>The Test:</strong> Does the product get better for User A when User B joins?
      </p>
      <p>
        This is the holy grail. Waze gets better with every driver. Slack gets stickier with every colleague. If your product is single-player, your cost of acquisition (CAC) will eventually eat you alive because you have to buy every user.
      </p>

      <div class="bg-muted/30 p-6 rounded-xl border border-border/50 my-8">
        <h4 class="text-lg font-bold mb-2 mt-0">Strategic Question</h4>
        <p class="mb-0 text-muted-foreground">
          Look at your roadmap. How many items are "Features" (linear value) vs. "Platforms" (exponential value)? If you aren't building leverage, you're just building a to-do list.
        </p>
      </div>

      <h2>Conclusion</h2>
      <p>
        Scalability is a mindset. It’s about ruthlessly eliminating manual friction. It’s about building systems, not just screens. Before you write more code, ask yourself: "If 100,000 people showed up tomorrow, what would break?" That is your roadmap.
      </p>

      <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
        <h3 class="text-2xl font-serif font-bold mb-4">Ready to scale your product ops?</h3>
        <p class="text-lg text-muted-foreground mb-6">
          I help teams identify and remove the hidden bottlenecks to growth.
        </p>
        <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
          Work with me
        </a>
      </div>
    `
  },
  { id: "pk-2", slug: "pmf-not-finish-line", title: "PMF Is Not the Finish Line", description: "Product-market fit is a moving target. Here's how to keep hitting it.", category: "Product Knowledge", date: "March 9, 2025", readTime: "5 min read", image: dataStock },
  { id: "pk-3", slug: "metrics-reflect-health", title: "Metrics That Actually Reflect Product Health", description: "Moving beyond MAU. Look at retention cohorts and engagement depth.", category: "Product Knowledge", date: "March 4, 2025", readTime: "6 min read", image: officeStock },
  { id: "pk-4", slug: "product-tradeoffs", title: "Product Trade-offs No One Talks About", description: "Speed vs. Quality. Features vs. Platform. How to make the hard calls.", category: "Product Knowledge", date: "Feb 27, 2025", readTime: "8 min read", image: meetingStock },
  { id: "pk-5", slug: "designing-for-retention", title: "Designing for Retention First", description: "Acquisition is expensive. Retention is where the profit is. Build for it.", category: "Product Knowledge", date: "Feb 23, 2025", readTime: "6 min read", image: teamStock },
  { id: "pk-6", slug: "growth-without-breaking", title: "Growth Without Breaking the Product", description: "How to scale user base without degrading the core experience.", category: "Product Knowledge", date: "Feb 17, 2025", readTime: "7 min read", image: knowledgeHero },
  { id: "pk-7", slug: "monetisation-without-killing-ux", title: "Monetisation Without Killing UX", description: "Balancing revenue goals with user satisfaction.", category: "Product Knowledge", date: "Feb 13, 2025", readTime: "6 min read", image: codingStock },
  { id: "pk-8", slug: "when-to-kill-feature", title: "When to Kill a Feature", description: "Sunsetting features is painful but necessary. Here's the playbook.", category: "Product Knowledge", date: "Feb 7, 2025", readTime: "5 min read", image: dataStock },
  { id: "pk-9", slug: "decisions-at-1m-users", title: "Product Decisions at 1M+ Users", description: "How decision-making changes when you have massive scale.", category: "Product Knowledge", date: "Feb 3, 2025", readTime: "6 min read", image: meetingStock },
  { id: "pk-10", slug: "building-long-term-leverage", title: "Building for Long-Term Leverage", description: "Investing in internal tools and platforms that pay dividends for years.", category: "Product Knowledge", date: "Jan 29, 2025", readTime: "7 min read", image: officeStock },

  // ==================================================================================
  // CATEGORY 5: LEADERSHIP
  // ==================================================================================
  {
    id: "lead-1",
    slug: "leadership-not-feature-ownership",
    title: "Product Leadership Is Not Feature Ownership",
    description: "Moving from managing tickets to managing outcomes and teams.",
    category: "Leadership",
    date: "March 11, 2025",
    readTime: "6 min read",
    image: leadershipHero,
    content: `
      <p class="lead text-xl text-foreground font-medium mb-8">
        The transition from "Senior PM" to "Product Leader" (Director/VP) is the hardest jump in the career ladder. Why? Because the skills that got you here—writing great specs, managing the backlog, shipping fast—are not the skills that will keep you here.
      </p>
      <p>
        As an individual contributor (IC), your product is the <strong>Software</strong>.
        <br>
        As a leader, your product is the <strong>Team</strong> and the <strong>Strategy</strong>.
      </p>

      <h2>1. Letting Go of the Legos</h2>
      <p>
        The most common mistake new leaders make is micro-management. You see a PRD that isn't written exactly how you would do it, so you rewrite it. You see a design that is slightly off, so you jump into Figma.
      </p>
      <p>
        <strong>Stop.</strong>
      </p>
      <p>
        Your job is no longer to make the right decision. Your job is to ensure the <em>team</em> makes the right decision. If you make every call, you become the bottleneck, and your team never learns. You have to let them fail (on small things) so they can grow.
      </p>

      <h2>2. Managing Up and Out</h2>
      <p>
        IC PMs spend 80% of their time with Engineers and Designers.
        <br>
        Product Leaders spend 80% of their time with Sales, Marketing, Finance, and the CEO.
      </p>
      <p>
        You are the translator. You explain to Sales why the feature they want isn't being built. You explain to Finance why the roadmap shifted. You explain to the CEO why "Technical Debt" matters. If you hide in the engineering corner, you are not leading.
      </p>

      <h2>3. Defining the "Why", Delegating the "How"</h2>
      <p>
        <strong>Your Output:</strong> Clear Vision, Strategic Pillars, Success Metrics.<br>
        <strong>Team's Output:</strong> Features, UI, Implementation details.
      </p>
      <p>
        If you find yourself arguing about button placement, you have zoomed in too far. If you find your team working on random features that don't move the needle, you haven't defined the Vision clearly enough.
      </p>

      <div class="bg-muted/30 p-6 rounded-xl border border-border/50 my-8">
        <h4 class="text-lg font-bold mb-2 mt-0">Leadership Mantra</h4>
        <p class="mb-0 text-muted-foreground">
          "My success is measured by how well my team operates when I am not in the room."
        </p>
      </div>

      <h2>Conclusion</h2>
      <p>
        Leadership is lonely. It involves hard conversations, firing people, and saying "No" to exciting ideas. But it is also the highest leverage activity in the world. When you unlock a team's potential, you build not just a product, but a machine that builds products.
      </p>

      <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
        <h3 class="text-2xl font-serif font-bold mb-4">Transitioning to leadership?</h3>
        <p class="text-lg text-muted-foreground mb-6">
          I coach new Product Leaders on how to navigate the shift from execution to strategy.
        </p>
        <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
          Work with me
        </a>
      </div>
    `
  },
  { id: "lead-2", slug: "influence-without-authority", title: "How to Influence Without Authority", description: "The core skill of every great PM. Getting engineering and design on board.", category: "Leadership", date: "March 6, 2025", readTime: "7 min read", image: meetingStock },
  { id: "lead-3", slug: "leading-cross-functional-teams", title: "Leading Cross-Functional Teams at Scale", description: "Orchestrating complex initiatives across marketing, sales, and engineering.", category: "Leadership", date: "March 1, 2025", readTime: "8 min read", image: teamStock },
  { id: "lead-4", slug: "making-hard-product-calls", title: "Making Hard Product Calls", description: "How to navigate disagreement and make the final decision with confidence.", category: "Leadership", date: "Feb 24, 2025", readTime: "5 min read", image: officeStock },
  { id: "lead-5", slug: "working-with-founders", title: "Working With Founders as a PM", description: "How to earn trust and become a strategic partner to the founding team.", category: "Leadership", date: "Feb 19, 2025", readTime: "6 min read", image: dataStock },
  { id: "lead-6", slug: "saying-no-without-burning-trust", title: "Saying No Without Burning Trust", description: "Protecting the roadmap while maintaining healthy stakeholder relationships.", category: "Leadership", date: "Feb 14, 2025", readTime: "5 min read", image: leadershipHero },
  { id: "lead-7", slug: "mentoring-pms", title: "Mentoring PMs Effectively", description: "How to grow the next generation of product leaders.", category: "Leadership", date: "Feb 9, 2025", readTime: "7 min read", image: codingStock },
  { id: "lead-8", slug: "handling-stakeholder-pressure", title: "Handling Stakeholder Pressure", description: "Dealing with 'HiPPO's and urgent requests without derailing the strategy.", category: "Leadership", date: "Feb 4, 2025", readTime: "6 min read", image: officeStock },
  { id: "lead-9", slug: "decision-making-uncertainty", title: "Decision-Making Under Uncertainty", description: "How to move forward when you don't have all the data.", category: "Leadership", date: "Jan 31, 2025", readTime: "6 min read", image: teamStock },
  { id: "lead-10", slug: "lessons-scaling-products", title: "Leadership Lessons from Scaling Products", description: "What I learned growing products from zero to millions of users.", category: "Leadership", date: "Jan 26, 2025", readTime: "7 min read", image: meetingStock }
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find(post => post.slug === slug);
}
