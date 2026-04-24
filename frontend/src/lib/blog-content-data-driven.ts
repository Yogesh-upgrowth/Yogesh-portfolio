export const DATA_DRIVEN_CONTENT: Record<string, string> = {

"data-driven-product-management": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Data-driven product management is one of the most cited practices in modern product development — and one of the most misapplied. Data is not a substitute for judgment. But judgment without data is guessing. Here's how to use both.
  </p>

  <p>The worst product decision I've seen made "using data" was a feature sunset that destroyed a product's core value proposition. The data showed that only 8% of users used the feature. The team interpreted this as evidence of low value. They removed it. Within three months, churn spiked. Post-churn surveys revealed that the 8% of users who used the feature were the power users — the ones who referred everyone else, who had the highest lifetime value, and who left when the product stopped serving their needs.</p>

  <p>The data was accurate. The interpretation was catastrophically wrong. And this is the central challenge of data-driven product management: data tells you what happened. It doesn't tell you why. It doesn't tell you what to do. Those steps require judgment, context, and careful reasoning — none of which the data can provide on its own.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Data-Driven Actually Means</h2>

  <p>There's a common confusion between "data-driven" and "data-informed." Truly data-driven decision-making, taken to its logical extreme, would mean you only act when data clearly indicates a direction. This breaks down immediately in product work, because most of the decisions that matter most are made before you have sufficient data. You're deciding what to build based on early signals, qualitative research, market intuition, and competitive context — not regression-analyzed certainty.</p>

  <p>Data-informed is more accurate. It means you use data to calibrate judgment, to test hypotheses, to identify patterns you might have missed, and to validate or invalidate assumptions. The judgment still exists. The data makes it better.</p>

  <p>The PM who says "we can't decide until we have the data" is often using data as an excuse to avoid making hard calls. The PM who says "the data shows X so we'll do X" is often using data to avoid thinking. The PM who says "the data shows X, here's what I think it means, here are the assumptions I'm making, and here's my recommendation" is doing the actual job.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where Data-Driven PM Breaks Down</h2>

  <h3>Confusing correlation with causation</h3>
  <p>This is the oldest statistical error and the one product teams make most frequently. Users who use Feature A have 40% better retention. Therefore, if we get more users to use Feature A, retention will improve. Maybe. Or maybe users who use Feature A are the more engaged users to begin with, and Feature A usage is a symptom of engagement, not its cause. The correlation is real. The causal relationship is assumed, not established.</p>

  <h3>Optimizing for measurable metrics at the expense of unmeasurable ones</h3>
  <p>Everything you can measure will get optimized. Everything you can't measure will get sacrificed. Product quality, brand trust, team morale, long-term user relationships — these matter enormously for durable product success and are very hard to quantify. When every decision gets made based on what the dashboard shows, the things that don't show up on the dashboard erode until they become a crisis.</p>

  <h3>Letting data mask a strategy problem</h3>
  <p>A/B tests can tell you which of two variants performs better. They can't tell you whether you're testing the right thing. A team that runs 50 A/B tests optimizing the checkout flow might generate a 3% conversion lift while missing the fact that their main conversion problem is acquisition targeting, not checkout friction. Data can make you very good at optimizing the wrong thing.</p>

  <hr class="my-12 border-border/50" />

  <h2>Building a Data Practice That Actually Works</h2>

  <h3>Start with questions, not dashboards</h3>
  <p>The most common data dysfunction: teams build dashboards and then look at them every day hoping the data will tell them what to do. It won't. Data is most useful when it's answering a specific question you already have. Before you open the analytics tool, write down the question you're trying to answer. Then look at the data through that lens.</p>

  <h3>Separate exploration from validation</h3>
  <p>Data exploration — looking at data with an open mind to find unexpected patterns — is valuable. Data validation — using data to test a specific hypothesis — is valuable. Mixing them is dangerous, because it's too easy to look at exploratory data and convince yourself you've validated something you've merely noticed.</p>

  <h3>Require context with every metric</h3>
  <p>Any metric shared in a meeting should come with context: compared to what? Over what time period? What was happening in the product or market during that period? Absolute numbers without context are almost always misleading. A 20% increase in signup rate sounds great until you learn that a competitor just shut down.</p>

  <h3>Build qualitative and quantitative loops together</h3>
  <p>The most powerful data practice combines both. Quantitative data tells you where to look. Qualitative research tells you what you're seeing. A drop in retention at day 30 is a quantitative signal. User interviews with churned users at day 30 are the qualitative context that explains the signal. Neither alone is sufficient. Together, they're very powerful.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Building a data-driven product culture?</h3>
    <p class="text-muted-foreground mb-4">The difference between data-driven and data-decorated product teams is significant — and it shows in outcomes. I work with product teams to build the practices that make data genuinely useful. Let's talk about where to start.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"metrics-that-matter-product-managers": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Not all metrics are created equal. Most dashboards measure activity, not impact. Here's how to tell the difference — and how to build a metrics framework that actually guides product decisions.
  </p>

  <p>I've sat in quarterly business reviews where teams proudly reported 40% growth in feature usage, 25% increase in time-on-product, and a 15-point NPS improvement. Then the CFO asked a simple question: "Is revenue growing?" Silence. Revenue was flat. The product was generating more engagement, not more value. The team had been optimizing for the wrong things and calling it success.</p>

  <p>This is the metric selection problem. Every metric you measure is a choice about what matters. Choose wrongly, and you build a team that is diligent, organized, and working hard at the wrong goals. Choose well, and the metrics themselves create alignment — because everyone can see what success looks like and whether you're moving toward it.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Metric Hierarchy</h2>

  <p>The most useful mental model for metrics is a hierarchy: each level should causally connect to the one above it. At the top is your ultimate business outcome — revenue, margin, market share, or whatever the business fundamentally optimizes for. Below that is the user outcome — the change in user behavior that drives the business outcome. Below that are the leading indicators — the product behaviors that predict the user outcome. At the bottom are the operational metrics — the things you track to ensure the product is functioning correctly.</p>

  <p>When metrics at different levels of this hierarchy are misaligned — when leading indicators are improving but user outcomes aren't, or when user outcomes are improving but business outcomes aren't — that's a signal that either your metrics are wrong or your theory of how the product creates value is wrong. Both are important to know.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Metrics Most PMs Get Wrong</h2>

  <h3>DAU and MAU</h3>
  <p>Daily and monthly active users are the most cited product metrics and among the least useful in isolation. They tell you how many people showed up — not whether they got value, whether they'll come back, or whether they're paying customers. A product with 1 million MAU and 5% retention is a leaky bucket. A product with 100,000 MAU and 80% retention is a compounding machine. MAU alone doesn't tell you which one you have.</p>

  <h3>Session length</h3>
  <p>Longer sessions are better. Usually. Except when long sessions mean users can't find what they're looking for. Or when your product is a utility where speed of task completion is the value proposition. Time-on-product as a success metric is an Instagram-era assumption that doesn't apply to most products. Ask: for what type of product is longer session time actually better? Only track it if the answer is clearly yours.</p>

  <h3>Feature adoption rate</h3>
  <p>X% of users have tried feature Y. This tells you about awareness and initial use — it says nothing about whether the feature is creating value. A feature that 30% of users try once and never use again has 30% adoption. A feature that 15% of users use weekly and credit for their continued subscription has 15% adoption. Which one matters more? Track retention and frequency of use, not one-time adoption.</p>

  <hr class="my-12 border-border/50" />

  <h2>Building a Metric Framework That Works</h2>

  <p>Start by answering: what is the one thing that has to be true for this product to be valuable? For a messaging app, it might be: messages get delivered and read quickly. For a task manager, it might be: tasks get completed. For a fintech product, it might be: users make better financial decisions. Whatever that core thing is, build your primary metric around it.</p>

  <p>Then build guardrails: metrics that tell you when something is going wrong even if your primary metric looks fine. Revenue is great, but if NPS is collapsing, something is wrong that will show up later. Activation is improving, but if support tickets are spiking, something needs attention. Guardrail metrics catch what your primary metrics miss.</p>

  <p>Finally, assign ownership. Every metric should have a human being who is accountable for it. Not "the team" — a specific person whose decisions primarily drive that metric. When metrics don't have owners, they don't move on purpose. They move because of random variation or external factors, and nobody learns anything from them.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Working on your metrics framework?</h3>
    <p class="text-muted-foreground mb-4">The right metrics framework is specific to your product's business model and growth stage. I've helped teams identify the metrics that actually drive their business and build dashboards around them. Let's build yours.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"north-star-metrics-how-to": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    A North Star metric should focus your entire team on a single measure of the value your product creates. Most don't. They either measure business outcomes instead of user value, or they're so vague they're impossible to act on. Here's how to get it right.
  </p>

  <p>The North Star metric concept comes from the observation that the most effective product teams organize around a single number that captures the core value their product creates for users. The logic: if you can identify the metric that best represents "users are getting value from this product," and if you can make your entire team responsible for moving it, you get alignment without constant coordination overhead.</p>

  <p>In theory, elegant. In practice, most North Star implementations fail because teams choose the wrong metric — or choose the right metric but fail to connect it to the daily work of the team.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Makes a Good North Star Metric</h2>

  <p>A good North Star metric has four properties:</p>

  <p><strong>It measures user value, not business outcomes.</strong> Revenue is not a North Star metric. Revenue is what happens when you create user value at scale. The North Star should measure the value creation, not the result of it. Airbnb's "nights booked" captures value for both hosts and guests. Spotify's "time spent listening" captures music discovery and enjoyment. These are user behaviors that indicate value, not financial results.</p>

  <p><strong>It's a leading indicator of business health.</strong> When the North Star goes up, business outcomes — revenue, retention, referrals — should eventually follow. When it goes down, they should eventually fall. If there's no causal connection between your North Star and business outcomes, you've picked the wrong metric.</p>

  <p><strong>It's specific enough to be actionable.</strong> "Users get value" is not a North Star metric. It's an intention. The metric needs to be specific enough that when you look at it, you know whether it went up or down and you can reason about why. "% of users who complete a project within their first week" is actionable. "User satisfaction" is not.</p>

  <p><strong>It's understandable by everyone on the team.</strong> If an engineer has to ask what the North Star metric means, it's too complex. The North Star should be simple enough that every person in the company can hold it in their head and reason about how their work affects it.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Process for Finding Yours</h2>

  <p>Start by asking: what's the moment when a user gets genuine value from our product? Not discovers it. Not signs up for it. The moment the core value proposition is delivered. For a task management app, it might be when a user completes their first important task. For a collaboration tool, it might be when a team successfully ships something together. For a marketplace, it might be when a transaction successfully completes for both parties.</p>

  <p>Find that moment. Then find a metric that captures how often it's happening, for how many users, with what frequency. That's your North Star candidate.</p>

  <p>Test it against the four criteria above. Does it measure user value? Does it lead to business health? Is it specific enough to be actionable? Is it understandable? If it fails any of these, refine it until it passes all four.</p>

  <p>Then comes the harder part: connecting the North Star to the team's daily work. The North Star is a lagging indicator for teams — it captures the accumulated result of many decisions and changes. To make it useful for day-to-day work, you need to identify the input metrics that drive it. What user behaviors, product features, and operational factors are the key drivers of the North Star? Those become the focus of the team's weekly work.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Finding your North Star?</h3>
    <p class="text-muted-foreground mb-4">Identifying the right North Star metric and connecting it to the team's work is one of the most valuable things you can do for product clarity. I've helped multiple teams do this well. Let's talk about your product and find yours.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"funnel-analysis-product-managers": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Every user interaction is a funnel. Most PMs only look at the top (acquisition) and the bottom (conversion or retention). What happens in the middle is where the product either earns or loses users — and most teams have almost no visibility into it.
  </p>

  <p>Funnel analysis is one of those tools that seems simple and is actually very sophisticated. The idea: map out the steps users take to accomplish a goal, track how many users complete each step, and identify where they fall off. Fix the biggest drop-offs. Repeat.</p>

  <p>In practice, funnel analysis fails product teams in predictable ways. They build the wrong funnels. They analyze drop-offs without understanding why they're happening. They optimize individual steps without understanding how changes to one step affect the rest of the funnel. And they miss the funnels that matter most — the ones that happen between their defined steps.</p>

  <hr class="my-12 border-border/50" />

  <h2>Why Most Funnel Analyses Miss the Point</h2>

  <p>The most common funnel analysis mistake: defining the funnel as the steps you can measure rather than the steps users actually take. If your analytics tracks sign-up, email verification, profile setup, and first action — you'll build a funnel with those four steps and optimize for completion of each. But if users have to do three things between "email verification" and "profile setup" that you're not tracking, you're optimizing within a funnel that doesn't represent the real user journey.</p>

  <p>The second mistake: treating all drop-offs as problems to be fixed. Some drop-offs are healthy. If 60% of users who reach your paywall don't subscribe, that's not necessarily a paywall problem — it might be a qualification problem. You're attracting users who were never going to convert, and the paywall is doing its job of separating them from the buyers. Trying to improve that conversion rate might mean converting users who churn quickly, which is worse than a lower conversion rate of long-term subscribers.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Build Funnel Analysis That's Actually Useful</h2>

  <h3>Start from the user's goal, not your product's flow</h3>
  <p>Define the funnel by what the user is trying to accomplish, not by the screens they pass through in your product. "User wants to book a service" is a user goal. "User visits homepage → searches → views listing → contacts provider → books" is a funnel. The funnel should map the path to the user's goal, not your product's navigation.</p>

  <h3>Segment your funnels by user type</h3>
  <p>Aggregate funnel data is often misleading because different user segments have different funnels. New users have a different path than returning users. Mobile users have different conversion rates than desktop users. Enterprise users navigate differently than SMB users. Running funnel analysis on undifferentiated user populations produces averages that may not describe any actual user group accurately.</p>

  <h3>Pair quantitative drop-offs with qualitative research</h3>
  <p>Funnel data tells you where users are falling off. It doesn't tell you why. A 40% drop-off at step 3 could mean: the step is confusing, the step is too long, users get a phone call and never come back, users find what they need in step 2 and don't need step 3, or users are discovering that the product doesn't solve their problem and are self-selecting out. Each of these diagnoses leads to a completely different solution. You need qualitative research — user interviews, session recordings, or on-page surveys — to determine which one is actually happening.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Diagnosing your conversion funnel?</h3>
    <p class="text-muted-foreground mb-4">I've helped teams identify the real drop-off points in their user journeys — the ones that traditional funnel analysis misses. If you're seeing unexplained drop-offs or conversion stagnation, let's find out what's actually happening.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"ab-testing-product-decisions": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    A/B testing is the most widely used and most widely misused tool in product management. It's easy to run a test. It's hard to run a test that actually tells you something real. Here's the honest guide to doing it right.
  </p>

  <p>The most dangerous A/B test I've seen wasn't one that had bad results — it was one that had good results that weren't actually valid. The team had run a test on their checkout flow. Variant B showed a 12% improvement in conversion rate with p < 0.05. They shipped it. Conversion rate improved for two weeks. Then it returned to baseline. The test had detected a novelty effect, not a genuine improvement. They'd run it during a holiday promotional period when buyer intent was elevated for external reasons. The A/B test design hadn't accounted for any of this.</p>

  <p>This is what good A/B testing prevents. And it's what most teams aren't doing.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Prerequisites Most Teams Skip</h2>

  <h3>Statistical significance is necessary but not sufficient</h3>
  <p>Most teams treat p < 0.05 as the signal to ship. It means your result is unlikely to have occurred by chance — but "unlikely by chance" is not the same as "definitely real." You also need adequate sample size (pre-calculated, not post-hoc), a consistent testing period that spans at least one full user behavior cycle, and guardrail metrics to ensure your improvement on one metric isn't degrading another.</p>

  <h3>Test one variable at a time</h3>
  <p>If you change the headline AND the button color AND the image AND the layout in your variant, you can't know which change drove the result. This is basic experimental design and it's violated constantly in product A/B testing because teams want to test their big redesign instead of individual elements. Multivariate testing exists for this purpose — but it requires much larger sample sizes.</p>

  <h3>Define success metrics before running the test</h3>
  <p>Defining what you'll measure after you see the results is how p-hacking happens. Decide before launch: what is the primary success metric? What are the guardrail metrics that must not degrade? What threshold of improvement is meaningful enough to ship? Document this. Then run the test. Then look only at those metrics in evaluating the result.</p>

  <hr class="my-12 border-border/50" />

  <h2>What A/B Testing Can and Can't Tell You</h2>

  <p>A/B testing can tell you: whether variant B performs better than variant A on your defined metrics, within the context of the users who were exposed to the test, during the period of the test.</p>

  <p>A/B testing cannot tell you: why the result happened, whether the result will hold for users not in the test, whether the result will persist over time, or whether you were testing the right thing in the first place.</p>

  <p>The PMs who use A/B testing most effectively treat test results as confirmation of hypotheses, not as answers. When variant B wins, they ask: why did it win? What does this tell us about user behavior? What follow-on hypotheses does this generate? The test is a step in a learning cycle, not a decision-making machine.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Building your experimentation practice?</h3>
    <p class="text-muted-foreground mb-4">Good experimentation is one of the highest-leverage capabilities a product team can build. I've helped teams move from ad-hoc testing to systematic experimentation. Let's talk about what that looks like for your product.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"product-analytics-improve-retention": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Acquisition gets the headlines and the budget. Retention is where the business lives or dies. Here's how to use product analytics to understand, protect, and improve your retention — in that order.
  </p>

  <p>The economics of retention are not subtle. A product with 40% month-1 retention and a product with 80% month-1 retention, both starting with 10,000 new users, will have roughly 4,000 and 8,000 users after month one. After six months, compounding this difference, the high-retention product might have 3-4x the active user base of the low-retention product despite identical acquisition. Retention is the most leveraged metric in any subscription or engagement-based product, and it's systematically underinvested because the consequences are delayed.</p>

  <hr class="my-12 border-border/50" />

  <h2>Understanding Your Retention Curve</h2>

  <p>The retention curve — a chart showing what percentage of users from a given cohort remain active over time — is the most important visualization in product analytics. Here's what to look for:</p>

  <p><strong>Where does it flatten?</strong> Most retention curves slope sharply downward in the first few weeks, then flatten to a sustained level. The level at which it flattens is your "engaged user" percentage — the core of users who have genuinely found value. If this number is very low (below 10-15% for most consumer products), you have a fundamental product-market fit problem. If it's moderate but declining over multiple cohorts, you have a value erosion problem.</p>

  <p><strong>How do different cohorts compare?</strong> Comparing retention curves across cohorts — users who signed up in Q1 vs Q2 vs Q3 — tells you whether your retention is improving, declining, or stable. If newer cohorts have better retention than older ones, your product is getting better at delivering early value. If older cohorts have better retention, you may have changed something that damaged the product for new users.</p>

  <p><strong>Where is the biggest drop?</strong> For most products, the biggest single drop is in the first 7 days. This is the critical activation window — the period where users are deciding whether the product is worth their continued attention. Improvements in day-1 and day-7 retention typically compound dramatically over the lifetime of the user.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Analytics Interventions That Actually Move Retention</h2>

  <h3>Identify and activate your "aha moment"</h3>
  <p>Every product has a moment where users genuinely get it — where the value proposition clicks. The analytics job is to find this moment. Look at what behaviors distinguish users who retain well from users who churn in the first 30 days. Typically there's a specific action or set of actions that strongly predicts retention. Find it, and then redesign your onboarding to get users to that action faster.</p>

  <h3>Build behavioral cohorts</h3>
  <p>Instead of analyzing all users together, segment them by the behaviors that matter. Compare retention for users who completed profile setup vs. those who didn't. Compare retention for users who connected a specific integration vs. those who didn't. Compare retention by acquisition source, by plan type, by company size. These behavioral cohorts will reveal which user journeys lead to strong retention — and which ones lead to churn.</p>

  <h3>Analyze churn moments, not just churn rates</h3>
  <p>When do users churn? Not just in terms of calendar time but in terms of what was happening in their product journey. Were they churning after not using a specific feature? After hitting a paywall they weren't expecting? After a failed workflow? The timing and context of churn events is far more actionable than the overall churn rate.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Working on retention?</h3>
    <p class="text-muted-foreground mb-4">Retention is where product and growth intersect most powerfully. I've helped teams across fintech, mobility, and SaaS diagnose and improve their retention using analytics. Let's look at yours.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"data-driven-product-culture": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Culture, not tools, is what makes an organization genuinely data-driven. You can give a team the best analytics stack in the world and watch them make the same decisions they would have made without it. Here's what actually needs to change.
  </p>

  <p>I've worked with teams that had Mixpanel, Amplitude, Looker, Segment, and a dedicated data analyst team — and still made most of their important product decisions based on the founder's intuition. I've also worked with a lean startup that had basic Google Analytics and a shared spreadsheet — and made genuinely excellent data-informed decisions every week.</p>

  <p>The difference wasn't the tools. It was the habits, the norms, and the expectations around how decisions got made. Culture.</p>

  <hr class="my-12 border-border/50" />

  <h2>What a Data-Driven Culture Actually Looks Like</h2>

  <p>In a genuinely data-driven culture, the default question before any significant decision is: what do we know, and what are we assuming? This question is asked not by the PM alone but by the entire team. Engineers ask it before committing to an approach. Designers ask it before proposing a solution. Leadership asks it before approving a direction. It's a shared norm, not a PM process.</p>

  <p>In a non-data-driven culture, the default question is: what does the CEO think? Or: what did the big customer ask for? Or: what have we always done? Data is brought in after the fact to justify a decision that was already made. It's decoration, not input.</p>

  <p>The gap between these two cultures is the gap between making mistakes once and making them repeatedly. Data-driven cultures generate learning. Non-data-driven cultures generate activity.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Build It</h2>

  <h3>Make data questions a team habit, not a PM responsibility</h3>
  <p>The most common pattern: the PM is the only one who brings data to discussions. Engineers just build what they're told. Designers propose without asking what we know about the problem. This makes the PM the bottleneck for data literacy and makes the culture dependent on one person's initiative. Instead, make "what does the data say?" a question that anyone can and should ask, and praise it when people do.</p>

  <h3>Celebrate being wrong when the data shows it</h3>
  <p>Data-driven cultures can only exist where being corrected by data is rewarded, not punished. If PMs and leaders who hold strong opinions feel organizational pressure to be "right," they'll resist data that contradicts them. The culture change is making "I was wrong, and here's what the data showed me" a moment of respect, not weakness.</p>

  <h3>Separate learning experiments from delivery commitments</h3>
  <p>Not all work is the same. Some work is a bet — you're testing a hypothesis, and the outcome might be negative. Some work is an investment — you're improving something you know is important. These two types of work should be treated differently. Bets should have explicit success and failure criteria defined before the work starts. Investments should be evaluated on quality of execution. Mixing them creates confusion about what "success" means.</p>

  <h3>Make data accessible to everyone, not just analysts</h3>
  <p>Data democratization — giving the whole team access to product data, not just the analytics team — is the prerequisite for a data-driven culture. When engineers can query the database, designers can look at heatmaps, and customer success can review churn analytics without filing a ticket, data becomes part of the daily workflow instead of a formal process.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Building a data-driven team?</h3>
    <p class="text-muted-foreground mb-4">Changing how a team makes decisions is culture change — which requires more than training and tools. I've helped product teams build genuine data practices. Let's talk about where you're starting from.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`

};

export function getDataDrivenContent(slug: string): string | undefined {
  return DATA_DRIVEN_CONTENT[slug];
}
