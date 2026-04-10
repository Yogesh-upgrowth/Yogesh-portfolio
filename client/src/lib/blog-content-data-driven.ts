export const DATA_DRIVEN_CONTENT: Record<string, string> = {

"data-driven-product-management": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Let me tell you about the most expensive product decision I've made. I had a clear hypothesis, strong user research backing it, and logical reasoning that I could walk any stakeholder through. But I didn't have the data to confirm it. So I ignored the data gap, went ahead, and shipped a major feature that our most active users quietly stopped using.
  </p>

  <p>It took three months of confused dashboards before we figured out what had happened. The feature had solved the problem I thought users had — but in a way that created two new problems I hadn't anticipated. If I'd had better instrumentation, I would have caught this in the first two weeks.</p>

  <p>Data-driven product management is not a guarantee against mistakes. It's a system that makes mistakes cheaper — easier to detect, faster to diagnose, and less likely to compound before you catch them.</p>

  <hr class="my-12 border-border/50" />

  <h2>What "Data-Driven" Actually Means</h2>

  <p>The term gets used loosely. Some teams use it to mean "we have dashboards." Others use it to mean "we run A/B tests." Still others use it to mean "we never make a decision without a spreadsheet to justify it."</p>

  <p>None of these are quite right. Data-driven product management is a discipline with three components:</p>

  <p><strong>Instrumentation:</strong> The ability to observe what users actually do with your product, at the level of granularity that allows you to understand behavior rather than just measure aggregate outcomes. This is a technical foundation that many teams underinvest in.</p>

  <p><strong>Analysis:</strong> The ability to derive meaning from data — not just to read dashboards, but to formulate hypotheses, test them rigorously, and distinguish genuine signals from noise and correlation from causation.</p>

  <p><strong>Integration:</strong> The ability to incorporate data into decision-making processes in a way that actually changes what gets built. Data analysis that sits in a Notion page without influencing anyone's decisions is not data-driven product management. It's data theater.</p>

  <p>Most teams are reasonably competent at analysis but weak at instrumentation and integration. The analysis capabilities are visible (someone runs the numbers) but the quality of the inputs (poor instrumentation) and the connection to decisions (weak integration) limit their actual impact.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Instrumentation Foundation</h2>

  <p>Good data starts with good instrumentation. Bad instrumentation produces data that looks authoritative but is systematically misleading.</p>

  <h3>The most common instrumentation failures</h3>

  <p><strong>Tracking what's convenient rather than what matters.</strong> Most analytics tools make some events easy to track (page views, button clicks) and others harder (the completion of a multi-step workflow). Teams tend to track what's easy and then analyze what they've tracked — rather than deciding what they need to know and building the instrumentation to answer those specific questions.</p>

  <p><strong>Missing the user identity thread.</strong> If you can't link events to specific users across sessions and devices, you can measure activity but not behavior. You can see that someone clicked "upgrade" but not whether they actually upgraded. You can see that someone opened the app but not whether they're the same person who opened it yesterday. User identity threading is not easy but it's the foundation of behavioral analytics.</p>

  <p><strong>Not measuring outcomes, only actions.</strong> A user can complete a flow without achieving the outcome the flow was designed for. A user can sign up without activating. A user can click on a recommendation without finding it useful. Tracking only the action rather than the downstream outcome gives you activity data that doesn't tell you whether anything is actually working.</p>

  <h3>The instrumentation questions to ask</h3>

  <p>Before writing any instrumentation specification, I ask these questions:</p>
  <ul>
    <li>What user behavior are we trying to understand?</li>
    <li>What event or sequence of events would indicate that behavior?</li>
    <li>What user attributes do we need to understand this behavior in context?</li>
    <li>How will we use this data to make a specific decision?</li>
  </ul>

  <p>If I can't answer all four, the instrumentation isn't ready to be specified. The fourth question is the most important: if you can't articulate how the data will change a decision, you probably don't need the data.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where Data-Driven Thinking Breaks Down</h2>

  <p>I've seen teams become so committed to data-driven decision-making that they make worse decisions than they would have with good judgment alone. Here are the failure modes to watch for:</p>

  <h3>Analysis paralysis</h3>
  <p>Waiting for data that never quite achieves sufficient confidence before making a decision. The result is decisions made by default — by inaction — rather than by choice. This is particularly costly in fast-moving markets where the cost of waiting can be higher than the cost of being wrong.</p>

  <h3>Metric gaming</h3>
  <p>When a specific metric becomes the target, people optimize for it — sometimes at the expense of the outcome the metric was supposed to represent. Goodhart's Law: when a measure becomes a target, it ceases to be a good measure. The data-driven team that becomes obsessed with a single metric will find ways to move that metric without creating real user value.</p>

  <h3>Ignoring what data can't measure</h3>
  <p>Some of the most important things in product management are not easily measurable: brand trust, user delight, emotional connection to the product, the quality of a user's mental model of how the product works. Data-driven teams that discount unmeasurable factors will systematically underinvest in the things that create durable competitive advantage.</p>

  <h3>Confusing statistical significance with practical significance</h3>
  <p>An A/B test can produce a result that is statistically significant — unlikely to have occurred by chance — but practically insignificant — too small to matter. A 0.2% improvement in conversion rate might be real, but if it required 6 weeks of engineering and the improvement is too small to affect business metrics, the decision to run the test was probably wrong.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Complementarity of Data and Judgment</h2>

  <p>The framing of "data-driven vs. intuition-driven" is a false dichotomy. The best product decisions combine both. The data tells you what happened. Judgment tells you what to do about it. The user research tells you why something happened. The strategic context tells you which "why" matters most.</p>

  <p>My personal mental model: data is the input, judgment is the processing, and the decision is the output. You can have bad inputs (poor data) with good processing (sound judgment) and still make poor decisions. You can have good inputs (excellent data) with bad processing (poor judgment) and still make poor decisions. The combination matters.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-xl">
    Data-driven product management doesn't mean doing what the data says. It means using data to reduce the uncertainty in your judgment — and being honest about how much uncertainty remains.
  </blockquote>

  <hr class="my-12 border-border/50" />

  <h2>Building the Practice Incrementally</h2>

  <p>If you're trying to develop a more data-driven product practice in an organization that doesn't have a strong foundation, here's the sequence that works:</p>

  <p><strong>Month 1-2: Audit your instrumentation.</strong> Identify the gaps between what you need to know and what you're currently able to measure. Prioritize closing the most critical gaps.</p>

  <p><strong>Month 2-3: Define your core metrics clearly.</strong> What 3-5 metrics, if they moved in the right direction, would indicate the product is working? Make sure these are agreed upon across the team and leadership.</p>

  <p><strong>Month 3-6: Build the habit of asking "what does the data say?" before deciding.</strong> This sounds obvious. It requires deliberate practice. Before every significant product decision, make it a team norm to check what existing data is relevant and what gaps remain.</p>

  <p><strong>Month 6+: Close the feedback loop.</strong> For every major decision, track the outcome explicitly against the prediction. Share these retrospectives with the team. The accumulated learning from making predictions and checking them is how analytical judgment improves.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Building a data-driven product practice?</h3>
    <p class="text-lg text-muted-foreground mb-6">I help product teams build the instrumentation, analytical, and decision-making foundations for data-driven work. This is a process, not a tool purchase.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's talk about it</a>
  </div>
`,

"metrics-that-matter-product-managers": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Every PM has a dashboard. Most dashboards measure things that feel important but don't actually track whether the product is succeeding or failing. The proliferation of metrics is not the same as the clarity of metrics. And in my experience, teams with 40 metrics on their dashboard have less insight into their product than teams with 5 well-chosen ones.
  </p>

  <p>The question is not "what can we measure?" We can measure almost anything. The question is "what should we measure, and what should we do when those measures change?" These are harder questions. Let me share how I think through them.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Metric Hierarchy</h2>

  <p>Metrics exist at different levels of the business, and confusing these levels is one of the most common failures in product measurement.</p>

  <h3>Business metrics</h3>
  <p>Revenue, profit, market share, customer lifetime value. These are what the business ultimately cares about. They're what shows up in investor reports and board presentations. They're also — and this is the key insight — too high-level to be actionable in daily product work. If revenue dropped last month, that doesn't tell you which product decision caused it or what to change.</p>

  <h3>Product metrics</h3>
  <p>Activation rate, retention, engagement depth, feature adoption. These are the metrics that connect product behavior to business outcomes. They're more specific than business metrics, and more actionable — if activation drops, you have a specific product problem to investigate.</p>

  <p>The critical requirement of a good product metric: there should be a clear, plausible causal path from the product metric to the business metric. If you can't articulate why improving activation would improve revenue, activation might not be the right metric for your business.</p>

  <h3>Leading indicators</h3>
  <p>Metrics that predict future performance of product or business metrics. If you know that users who complete X in their first 3 days have 3x better 30-day retention, then "X completion in first 3 days" is a leading indicator for retention. Leading indicators let you course-correct before problems become expensive.</p>

  <h3>Operational metrics</h3>
  <p>Load times, error rates, deployment frequency, support ticket volume. These measure the health of your product's technical execution. They don't directly measure user value, but poor performance on these will eventually destroy user value.</p>

  <p>The discipline is to build your measurement system with all four levels in mind, to ensure you have clear metrics at each level, and to understand the connections between levels.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Metrics That Matter Most (By Business Stage)</h2>

  <h3>Pre-product-market fit</h3>
  <p>In the early stage, before you have product-market fit, the most important metric is retention. Specifically: are the users who try your product coming back?</p>

  <p>Acquisition metrics are misleading at this stage. You can always find users willing to try something new. The question is whether they find enough value to return. A product with 20% month-2 retention is a fundamentally different business than one with 60% month-2 retention — and the right next steps are completely different.</p>

  <p>The other metric that matters at this stage: the net promoter score among your most active users. Not your average users — your most active ones. Are the people who use your product the most enthusiastic about it? If not, you haven't built something genuinely valuable yet.</p>

  <h3>Growth stage</h3>
  <p>Once you have evidence of product-market fit, the metrics shift to growth efficiency: how much does it cost to acquire a user, and how much is that user worth?</p>

  <p>CAC:LTV ratio is the foundational growth stage metric. If it costs you ₹5,000 to acquire a user who generates ₹8,000 in lifetime value over 18 months, you have a business. If it costs you ₹5,000 to acquire a user who generates ₹4,000, you have a problem that growth will make worse, not better.</p>

  <p>Activation rate is also critical at this stage — the percentage of acquired users who reach the "aha moment" that predicts long-term engagement. The gap between acquisition and activation is often where growth strategies fail: you're acquiring users but not converting them into active ones.</p>

  <h3>Maturity stage</h3>
  <p>In maturity, the focus shifts to monetization efficiency and defensibility metrics. How much value are you capturing per user? What's your revenue per activated user? What's your churn rate by segment? How are expansion revenue trends looking?</p>

  <p>At maturity, NPS becomes more actionable — because you have enough users and enough stability to track NPS trends over time and correlate them with product changes.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Metrics That Look Important But Often Aren't</h2>

  <h3>Daily Active Users (in isolation)</h3>
  <p>DAU is a useful number. It's also easy to inflate with notifications, email campaigns, and gamification that drives visits without driving value. A product that has growing DAU but declining session depth, declining retention, and declining NPS is probably heading for trouble — the DAU is masking the underlying problem.</p>

  <h3>Page views and session count</h3>
  <p>More page views could mean users are more engaged — or it could mean they're confused and clicking through multiple screens to find what they need. Session count alone doesn't tell you whether the experience is good or bad. Always pair these with outcome metrics.</p>

  <h3>Feature adoption rate (without retention)</h3>
  <p>A feature that 40% of users try once and then never use again has a 40% "adoption rate" and is probably failing to deliver value. Feature adoption should always be measured alongside repeat usage — and alongside the correlation between feature usage and overall retention.</p>

  <h3>Vanity social metrics</h3>
  <p>App store ratings, social media followers, press mentions. These can be indicators of brand health but are easy to inflate and hard to connect to business outcomes. Use them as context, not as primary metrics.</p>

  <hr class="my-12 border-border/50" />

  <h2>Designing a Metric System That Works</h2>

  <p>Here's the process I use when setting up a product metrics system:</p>

  <p><strong>Start with the business outcome.</strong> What specific business outcome is this product responsible for? Revenue growth? Retention? Market expansion?</p>

  <p><strong>Identify the 2-3 product metrics most causally connected to that outcome.</strong> Not the most correlated — the most causally connected. You want metrics where improving the metric genuinely causes improvement in the business outcome, not just metrics that happen to move together.</p>

  <p><strong>For each product metric, identify 2-3 leading indicators.</strong> What user behaviors predict improvements in this metric? These become your early-warning system.</p>

  <p><strong>For each leading indicator, identify the specific product behaviors that drive it.</strong> Now you have a clear chain: product behavior → leading indicator → product metric → business outcome. This chain tells you where to intervene when something goes wrong.</p>

  <p><strong>Set up instrumentation to track all four levels.</strong> And build a regular review cadence that checks all levels — not just the ones that are easy to see.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Struggling with your metrics strategy?</h3>
    <p class="text-lg text-muted-foreground mb-6">I help product teams design metric systems that are actually connected to the decisions they're making — not just dashboards that look impressive.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's look at your metrics together</a>
  </div>
`,

"north-star-metrics-how-to": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The North Star metric is one of those ideas that sounds obvious in theory and turns out to be genuinely hard in practice. The theory: identify the single metric that best represents the value your product delivers to users, align your team around improving it, and use it to guide roadmap decisions. The practice: most North Star metrics are poorly chosen, poorly communicated, and have only superficial influence on actual product decisions.
  </p>

  <p>I've helped teams define and use North Star metrics in several different contexts. Here's what I've learned about doing it well.</p>

  <hr class="my-12 border-border/50" />

  <h2>What a North Star Metric Should Do</h2>

  <p>A North Star metric is a proxy for the value your product creates for users. When the metric goes up, users are getting more value. When it goes down, they're getting less. The metric serves as a shared focus for the entire product team — a single number that everyone can agree represents "the product is working."</p>

  <p>This sounds simple. The reason it's not: most obvious metrics are either too close to business outcomes (revenue, which reflects value captured but not necessarily value created) or too distant from them (page views, which can go up even when the product is getting worse). Finding the sweet spot — a metric that tracks genuine user value AND connects to business outcomes — is genuinely difficult.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Properties of a Good North Star Metric</h2>

  <h3>It reflects genuine user value creation</h3>
  <p>Spotify's North Star metric is time spent listening. This works because time spent listening is a proxy for users getting value from the product — they continue to listen because they're enjoying it. If the metric were "songs played," users could game it by skipping constantly. If it were "app opens," users could open the app and immediately close it. Time spent listening requires that the product actually deliver an enjoyable experience.</p>

  <p>The test: could a bad product produce high numbers on this metric? If yes, it's probably not measuring genuine value creation.</p>

  <h3>It leads business outcomes</h3>
  <p>The North Star metric should predict business outcomes — ideally before the business outcomes are visible. If user value is high this month, revenue should be high next month. If the North Star is declining, it's an early warning that business outcomes will suffer.</p>

  <p>The test: is there a clear, data-supported relationship between this metric and revenue or retention? If you can't show this relationship, the metric might not be a reliable proxy for business health.</p>

  <h3>It's comprehensible across the team</h3>
  <p>A North Star metric that only data scientists understand is not a North Star metric — it's an analytical metric with aspirational branding. Every person on the product team should be able to explain the metric, understand why it matters, and connect their daily work to it.</p>

  <p>The test: ask five different people on your team to explain the North Star metric and why it matters. If you get five significantly different answers, the metric isn't sufficiently clear and shared.</p>

  <h3>It's influenced by product decisions, not just external factors</h3>
  <p>A metric that is primarily driven by factors outside your control — seasonality, competitor activity, broad market trends — is a poor North Star. You need a metric where your product decisions have clear, attributable influence on the outcome.</p>

  <hr class="my-12 border-border/50" />

  <h2>North Star Metrics by Product Type</h2>

  <p>Different product types naturally gravitate toward different North Star metrics:</p>

  <p><strong>Marketplaces:</strong> Number of successful transactions, or Gross Merchandise Value among returning buyers. Both capture genuine value creation — a successful transaction represents value delivered to both sides of the marketplace.</p>

  <p><strong>Consumer apps:</strong> DAU or WAU — but only if you can verify that active usage represents genuine value creation rather than notification-driven visits. Time-in-app can be a better proxy for some apps.</p>

  <p><strong>SaaS B2B:</strong> Number of users reaching a specific "aha moment" (completing a key workflow, integrating a data source, collaborating with a teammate). Expansion revenue among existing accounts is also strong because it reflects customers getting enough value to buy more.</p>

  <p><strong>Fintech:</strong> Number of users performing meaningful financial actions (investments made, savings goals set, budgets tracked). Transaction volume can work but can be inflated by a small number of power users in ways that obscure problems in the broader base.</p>

  <p><strong>Developer tools:</strong> Projects created, integrations connected, API calls made. The metric that best captures "the developer did real work with this tool."</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Define Your North Star Metric</h2>

  <p>Here's the process I use:</p>

  <p><strong>Step 1: Define the value moment.</strong> What is the specific moment when a user gets genuine value from your product? Not "when they sign up" — when they actually experience the thing the product is supposed to deliver. For a food delivery app, that's when the food arrives. For a language learning app, it's when the user successfully completes a lesson or uses the language in a real context.</p>

  <p><strong>Step 2: Find the metric that best counts value moments.</strong> How do you count the value moments happening across your user base? This becomes your candidate North Star metric.</p>

  <p><strong>Step 3: Test the metric's properties.</strong> Run it through the properties listed above. Does it reflect genuine value? Does it lead business outcomes? Is it comprehensible? Is it influenced by product decisions?</p>

  <p><strong>Step 4: Test the metric's actionability.</strong> Can you break it into components that your different product teams can own? A good North Star metric should decompose into contributing metrics that different teams can drive. This is how a single North Star creates alignment across a large team without everyone working on exactly the same thing.</p>

  <p><strong>Step 5: Run it for a quarter.</strong> Try the metric out. Check whether it behaves the way you expected — whether it moves when you expect it to move, whether it stays stable when you expect stability, whether it leads the business outcomes you predicted. Refine based on what you learn.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-xl">
    The most important thing about a North Star metric is not getting it perfectly right on the first try. It's building the organizational muscle of focusing on a shared metric and making decisions in reference to it. You can refine the metric. You can't easily fix an organization that doesn't have a shared focus.
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Need help defining your North Star?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is one of the most valuable exercises a product team can do together. I've facilitated it many times and can help you get to a metric that actually works.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's define it together</a>
  </div>
`,

"funnel-analysis-product-managers": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Every PM knows what a funnel is. Fewer know how to analyze one properly. And a surprising number treat funnel analysis as a reporting exercise rather than a diagnostic one — they look at where users drop off, note the percentage, and move on without ever identifying why the drop-off is happening or what to do about it.
  </p>

  <p>Funnel analysis is one of the most powerful tools in a PM's analytical toolkit — when used correctly. When used incorrectly, it produces a confident-looking set of numbers that point in the wrong direction.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Two Types of Funnels Every PM Should Track</h2>

  <h3>The acquisition-to-activation funnel</h3>
  <p>This funnel tracks the journey from first contact with your product to the point where a user has experienced enough value to become an ongoing user. The stages typically look like:</p>

  <ul>
    <li>Awareness / first touch</li>
    <li>Signup or download</li>
    <li>Onboarding completion</li>
    <li>First key action</li>
    <li>Activation (completing the "aha moment")</li>
    <li>Second-session engagement</li>
  </ul>

  <p>The most common mistake in analyzing this funnel: looking at the aggregate drop-off percentage without segmenting by acquisition source, user type, or cohort. A 60% drop-off between signup and activation looks very different depending on whether the users who dropped off came from paid search vs. organic product use, or whether they signed up on mobile vs. web, or whether they saw the onboarding flow vs. bypassed it.</p>

  <h3>The feature-usage funnel</h3>
  <p>Every feature has an internal funnel — the sequence of steps users go through to use it. Feature funnel analysis reveals where users get stuck, confused, or decide not to complete the workflow.</p>

  <p>The value of feature funnel analysis: it's actionable at a granular level. If 70% of users start a workflow and 40% complete it, you can identify the specific step where users are most likely to drop off — and investigate whether that step has a UX problem, a performance issue, or a conceptual mismatch with user expectations.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Most Teams Miss in Funnel Analysis</h2>

  <h3>The multi-touch journey</h3>
  <p>Funnels assume a linear journey: step 1 → step 2 → step 3. Real user journeys are rarely linear. Users go back, they skip steps, they complete step 3 before step 2, they leave and return. A funnel that only shows the linear path misses the majority of what's actually happening.</p>

  <p>The solution: supplement funnel analysis with path analysis — visualizing the actual routes users take through your product, including the non-linear ones. The paths that appear most frequently, and especially the unexpected paths, often reveal the most important insights.</p>

  <h3>Time-to-completion</h3>
  <p>Funnel analysis usually shows the percentage of users who complete each step. It often doesn't show how long it takes. Time-to-completion is a critical signal: if 80% of users complete step 2, but half of them take more than 5 minutes to do it, you have a friction problem that the completion rate masks.</p>

  <h3>The re-entry pattern</h3>
  <p>Who comes back to an incomplete funnel? How long after the initial drop-off do they return? Do returners complete the funnel at higher rates than first-timers? These questions reveal whether your re-engagement strategy is working and whether friction at a specific step is structural (users can't complete it) or situational (they ran out of time but came back later).</p>

  <h3>Segmentation before diagnosis</h3>
  <p>Before diagnosing why users drop off at a given step, segment your users into groups that might have different drop-off reasons. New vs. returning users. Mobile vs. desktop. Users who came from ad campaigns vs. organic search. Power users vs. casual users. The drop-off reason is often different for different segments — and solving for the aggregate can mean not solving for anyone.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Diagnostic Process</h2>

  <p>When I identify a significant drop-off in a funnel, my diagnostic process looks like this:</p>

  <p><strong>Quantify the problem precisely.</strong> What's the drop-off rate? Has it changed recently? Is it concentrated in a particular segment? What's the business impact of improving it by 10%?</p>

  <p><strong>Generate hypotheses about the cause.</strong> Not one hypothesis — several. The drop-off could be caused by: a UX issue (users can't figure out what to do next); a performance issue (the page is slow); a content issue (the copy doesn't explain what's expected); a feature gap (users are looking for something that doesn't exist); a trust issue (users are hesitant for reasons related to security or value proposition).</p>

  <p><strong>Design cheap tests of each hypothesis.</strong> Before rebuilding the entire step, find the cheapest way to test each hypothesis. Add a help text to test the content hypothesis. Measure the page load time to test the performance hypothesis. Watch session recordings to look for UX confusion patterns. Interview 5 users who dropped off at this step.</p>

  <p><strong>Implement and measure.</strong> Once you have a strong hypothesis, implement the change and measure the specific outcome — not overall conversion, but conversion at the specific step, for the specific segment you're targeting.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Funnel problems slowing your growth?</h3>
    <p class="text-lg text-muted-foreground mb-6">Funnel optimization is one of the fastest ways to improve product performance without building new features. I can help you find the highest-leverage drop-off points.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's look at your funnels</a>
  </div>
`,

"ab-testing-product-decisions": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    A/B testing is simultaneously the most misunderstood practice in product management and one of the most valuable when done correctly. I've seen it used to generate confident-looking results that pointed in completely the wrong direction. I've also seen it prevent enormously expensive mistakes that would have been invisible without it.
  </p>

  <p>The difference between these two outcomes is almost entirely in how the test is designed, not how it's executed. A well-designed A/B test run poorly is better than a poorly-designed one run with perfect statistical rigor.</p>

  <hr class="my-12 border-border/50" />

  <h2>What A/B Testing Actually Is (And What It Isn't)</h2>

  <p>An A/B test is a randomized controlled experiment: you randomly assign users to one of two conditions (the control and the treatment), expose each group to their respective experience, and measure whether there's a statistically significant difference in outcomes between the groups.</p>

  <p>The key word is "randomized." Without randomization, you don't have an A/B test — you have a comparison between two groups that might differ in ways you haven't accounted for. The randomization is what makes it a controlled experiment rather than an observational study.</p>

  <p>What A/B testing is not: a replacement for product judgment. A well-designed A/B test can tell you whether version A or version B produces better outcomes on the metric you're measuring. It can't tell you whether you're measuring the right metric. It can't tell you whether the problem you're trying to solve is the most valuable one to be working on. These are judgment calls that the experiment can't make for you.</p>

  <hr class="my-12 border-border/50" />

  <h2>Designing a Good A/B Test</h2>

  <h3>Start with a clear hypothesis</h3>
  <p>An A/B test without a specific hypothesis is just data collection. A hypothesis includes: the change you're making, the mechanism by which you expect the change to produce an improvement, and the specific metric you're measuring.</p>

  <p>Bad hypothesis: "We'll add a progress bar to onboarding and see if conversion improves."</p>
  <p>Good hypothesis: "We'll add a progress bar to the onboarding flow because we believe users are abandoning midway because they don't know how much longer it will take. We expect this to increase onboarding completion rates by at least 5% among mobile users who start the flow on their first visit."</p>

  <p>The good hypothesis specifies the mechanism, the specific user segment, the specific metric, and the minimum effect size worth detecting.</p>

  <h3>Determine sample size before running the test</h3>
  <p>One of the most common A/B testing mistakes is running a test until you see a "significant" result and then stopping. This practice — called p-hacking or optional stopping — dramatically inflates the false positive rate. You'll end up "discovering" that many changes work when they actually don't.</p>

  <p>Before running any test, calculate the sample size you need to detect the minimum effect size that would be meaningful for your business, at your chosen significance level (typically 95%) and power (typically 80%). Most A/B testing tools have sample size calculators. Use them.</p>

  <h3>Choose the right metric</h3>
  <p>The primary metric for your A/B test should be the metric most directly connected to the hypothesis you're testing. Don't test for conversions when your hypothesis is about onboarding completion. Don't test for revenue when your hypothesis is about feature adoption.</p>

  <p>Also track guardrail metrics — metrics that should not decrease as a result of your change. If you're optimizing for conversion, your guardrail might be NPS or session depth. If your change improves conversion but damages product experience, you haven't made a good decision.</p>

  <h3>Ensure a clean experiment</h3>
  <p>Cross-contamination — users seeing both the control and treatment — invalidates a test. Make sure your assignment mechanism is consistent across sessions. Make sure users who are assigned to the control don't accidentally see the treatment through a different path.</p>

  <p>Also be aware of novelty effects: sometimes a change produces a short-term improvement simply because it's new and users engage with it out of curiosity. If you're testing a UI change, run the test long enough for the novelty to wear off before drawing conclusions.</p>

  <hr class="my-12 border-border/50" />

  <h2>Interpreting Results Honestly</h2>

  <p>A statistically significant result is not the end of the analysis. Ask:</p>

  <p><strong>Is the effect size practically meaningful?</strong> A 0.1% improvement in conversion that is statistically significant represents real evidence of a small effect — but is it worth shipping? Consider the implementation cost, the ongoing maintenance, and the opportunity cost.</p>

  <p><strong>Is the result consistent across segments?</strong> Sometimes a test produces a positive result on average but negative results for an important segment. If your change helps new users but hurts power users, you need to know that before deciding whether to ship.</p>

  <p><strong>Does the result make sense mechanistically?</strong> If a result surprises you, don't just accept it — investigate. Sometimes surprising results indicate a test design problem rather than a genuine effect. Ask whether the result is consistent with what you'd expect based on your understanding of users.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-xl">
    The most valuable thing about A/B testing isn't the results — it's the discipline of defining what you're trying to achieve, how you'll measure it, and what you'll conclude before you run the test. That discipline improves product thinking even when you don't have the data to run a test.
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Building an experimentation practice?</h3>
    <p class="text-lg text-muted-foreground mb-6">I help product teams design and interpret experiments that actually inform decisions — not just produce impressive-looking statistics.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's set up your experiments right</a>
  </div>
`,

"product-analytics-improve-retention": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Retention is the single most important metric for a sustainable product business. If you're acquiring users and losing them at the same rate, you're running on a treadmill. If you're losing them faster than you're acquiring them, you're running backward — and no growth hack will fix that.
  </p>

  <p>The question most PMs struggle with: where does retention actually break down, and what do you do about it once you know? Product analytics is the tool that answers the first question. The second requires judgment, but the analytics has to come first.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Retention Framework That Actually Works</h2>

  <p>Before you can improve retention, you need to measure it in a way that tells you something useful. The two most common ways are not always useful:</p>

  <p><strong>Monthly active users:</strong> Tells you how many users are active. Doesn't tell you whether your retention is improving or declining, because it mixes new users with returning ones.</p>

  <p><strong>Average retention rate:</strong> The aggregate percentage of users who return. Hides the distribution — whether you're retaining almost everyone for a long time, or retaining a small percentage forever and losing everyone else quickly.</p>

  <p>The framework that gives you real insight: cohort retention analysis. Track each cohort of users (grouped by the week or month they first used the product) separately over time. This shows you whether retention is improving over cohorts, and whether you've identified an intervention that actually works.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Retention Curve and What It Tells You</h2>

  <p>When you plot retention for a single cohort over time — percentage of users still active at day 7, day 14, day 30, day 60 — you typically see a curve that drops steeply at first and then flattens. The shape of this curve tells you a lot about your product's retention dynamics.</p>

  <h3>The initial drop (D1-D7)</h3>
  <p>The steepest drop happens immediately after acquisition. Users who don't return within the first 7 days are unlikely to ever return. The size of this drop is a measure of your onboarding and initial value delivery. A steep D1-D7 drop suggests an onboarding problem — users aren't reaching the value your product offers quickly enough.</p>

  <h3>The middle period (D7-D30)</h3>
  <p>Users who survived the initial period are still at risk of churning in the medium term. D7-D30 retention reflects the strength of the habit you're creating and the depth of value users are experiencing. Users who churn in this period often did get initial value but didn't develop a strong enough use habit to sustain engagement.</p>

  <h3>The long-tail period (D30+)</h3>
  <p>The retention curve should flatten out — where it flattens is your "retained" user base. If the curve doesn't flatten but continues to decline gradually, your product doesn't have a retained core — everyone eventually churns. If it flattens at a meaningful level (what counts as meaningful depends on your product category), you have a durable user base to build on.</p>

  <hr class="my-12 border-border/50" />

  <h2>Finding the Behaviors That Predict Retention</h2>

  <p>The highest-leverage retention insight is identifying the specific user behaviors that predict long-term retention. Once you find these, they become your activation targets — the things you want every new user to do as early as possible.</p>

  <p>The analytical approach: segment your users into "retained" (active at 60 days) and "churned" (not active at 60 days) cohorts. For each segment, analyze what they did in their first 7 days. Which actions were taken by 80% of retained users but only 20% of churned users? Those are your predictive behaviors.</p>

  <p>Twitter famously found that users who followed at least 30 accounts in their first week were dramatically more likely to be retained. Facebook found that users who connected with 7 friends in 10 days had much better retention. These "aha moments" became onboarding targets — the product guided new users toward these behaviors because the data showed they predicted retention.</p>

  <p>Finding your product's equivalent requires analysis, not intuition. The behaviors that predict retention often aren't the ones you'd guess.</p>

  <hr class="my-12 border-border/50" />

  <h2>Using Analytics to Improve Retention: The Intervention Points</h2>

  <h3>Pre-churn intervention</h3>
  <p>The most effective retention intervention is preventing churn before users decide to leave. This requires identifying early signals of disengagement — users who are showing decreased activity patterns — and intervening before the decrease becomes absence.</p>

  <p>Product analytics makes this possible: track engagement frequency, session depth, and feature usage for individual users over time. Build alerts or automated workflows that trigger when users show early churn signals. The intervention might be a re-engagement email, an in-product prompt, or a customer success call for high-value users.</p>

  <h3>Activation improvement</h3>
  <p>If your D7 retention is low, the problem is likely in your onboarding. Product analytics can identify exactly where users are dropping off in the onboarding flow, what they're doing (and not doing) in their first session, and which acquisition channels are producing better-retained users.</p>

  <p>The most common finding: the sequence of steps in your onboarding doesn't match the optimal sequence for users to experience value. Sometimes reordering the onboarding steps — without changing anything else — produces significant retention improvements.</p>

  <h3>Habit reinforcement</h3>
  <p>For users who have activated but haven't yet developed a strong usage habit, analytics can identify the trigger points that bring them back. When do retained users typically return to the product — in response to what events, at what time of day, in what context? Using this insight to build habit-reinforcing mechanisms (contextual notifications, weekly digest emails, social signals from other users) can meaningfully improve medium-term retention.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Retention declining or plateauing?</h3>
    <p class="text-lg text-muted-foreground mb-6">I help product teams build the analytical infrastructure to understand their retention dynamics and identify the highest-leverage interventions. Let's look at your numbers together.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's diagnose it</a>
  </div>
`,

"data-driven-product-culture": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    I've worked with teams that had excellent analytics tools, robust data infrastructure, and sophisticated dashboards — and still made most of their significant product decisions based on whoever in the room had the strongest opinion. And I've worked with teams that had modest tooling but made consistently better decisions because data was genuinely integrated into how they thought and talked about the product.
  </p>

  <p>The difference is culture. Not tools. Not process. Culture — the shared set of values, beliefs, and behaviors that determine how decisions actually get made, regardless of what the playbook says.</p>

  <p>Building a data-driven culture is harder than building a data-driven process. Here's what it actually takes.</p>

  <hr class="my-12 border-border/50" />

  <h2>What a Data-Driven Culture Actually Looks Like</h2>

  <p>A genuinely data-driven product culture has a few identifiable characteristics:</p>

  <p><strong>Claims require evidence.</strong> When someone in a meeting says "users want X," the natural follow-up is "what data tells us that?" not "interesting, let's build it." This isn't adversarial — it's just the default epistemic standard.</p>

  <p><strong>Predictions are made explicitly.</strong> Before a feature launches, the team articulates what they expect to happen and why. After it launches, they check whether their prediction was right. The learning loop is closed.</p>

  <p><strong>Being wrong is okay; being unaware is not.</strong> Teams that punish being wrong create cultures where people hide uncertainty behind confident-sounding claims. Teams that normalize being wrong but demand honest engagement with data build cultures where problems surface quickly and get fixed.</p>

  <p><strong>Data informs but doesn't dictate.</strong> The best data-driven cultures use data as a primary input to judgment, not as a replacement for it. They hold both in tension — "the data says X, but our judgment says Y, so let's investigate the tension."</p>

  <hr class="my-12 border-border/50" />

  <h2>Why Culture Change Is Harder Than Tool Change</h2>

  <p>The instinct when starting a data-driven transformation is to buy tools — a better analytics platform, a data visualization layer, maybe a data science team. These things help. They don't create a data-driven culture on their own.</p>

  <p>Culture is shaped by behavior, not by tools or declarations. If the senior people in the organization consistently make decisions without data — or override data when it conflicts with their intuition — the team will learn that data is a ritual, not a requirement. No tool purchase changes this.</p>

  <p>The behaviors that shape culture are the ones that happen in the moments of consequence: when a decision is made, when a conflict is resolved, when a launch goes wrong. How leaders behave in these moments sets the cultural standard for how everyone else behaves.</p>

  <hr class="my-12 border-border/50" />

  <h2>Building the Culture: What Actually Works</h2>

  <h3>Model the behavior yourself, consistently</h3>
  <p>If you want the team to cite data in decisions, cite data in your own decisions. If you want people to make predictions and check them, make predictions and check them yourself, publicly, including when you're wrong. Culture follows the behavior of people with influence — and the PM has significant influence over team culture.</p>

  <h3>Create rituals that reinforce data-driven thinking</h3>
  <p>Regular rituals create habits. The weekly metrics review — where the team looks at the numbers together and discusses what they're seeing — builds the habit of data engagement. The pre-mortem before a launch — where the team explicitly predicts what will happen and what could go wrong — builds the habit of prediction. The post-launch retrospective — where the team compares predictions to actuals — closes the learning loop.</p>

  <p>These rituals don't need to be long. A 30-minute weekly metrics review, done consistently, is more valuable than a 3-hour quarterly deep dive.</p>

  <h3>Lower the cost of admitting uncertainty</h3>
  <p>In many organizations, admitting "I don't know" is perceived as weakness. This creates a culture where people overstate their confidence, skip the data check, and make intuitive decisions that they dress up as data-supported ones. The antidote is to model intellectual humility yourself and explicitly praise uncertainty acknowledged honestly. "I'm not sure — let's look at the data before we decide" should be treated as a sign of good judgment, not weakness.</p>

  <h3>Give people access to their own data</h3>
  <p>A common failure mode: teams don't use data because they need to ask a data analyst for every query, and the friction is too high. Invest in data democratization — giving product and engineering team members the tools and training to access their own data directly. Amplitude, Mixpanel, Looker, and similar tools are specifically designed for this purpose. When the data is a Slack message away from the person who needs it, it gets used. When it requires a ticket to a data team, it often doesn't.</p>

  <h3>Track the culture, not just the data</h3>
  <p>Periodically assess how data-driven the team's decision-making actually is — not how much data they have access to, but how often data informs significant decisions. You can do this through retrospectives, through asking team members directly, or through reviewing the decision documentation for recent major choices. The gap between "we have data tools" and "we use data to make better decisions" is the gap the culture work closes.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Building a data-driven product culture?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is a process of organizational change, not just tool deployment. I help product leaders understand what changes are needed and how to make them stick.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's build it together</a>
  </div>
`,

};

export function getDataDrivenContent(slug: string): string | undefined {
  return DATA_DRIVEN_CONTENT[slug];
}
