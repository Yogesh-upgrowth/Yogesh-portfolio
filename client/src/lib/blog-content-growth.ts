export const GROWTH_CONTENT: Record<string, string> = {

"growth-loops-product-management": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Growth funnels and growth loops are both used to describe how products acquire users. They're not the same thing, and the distinction matters enormously for how you build a product strategy.
  </p>

  <p>A funnel is linear: user enters at the top, progresses through stages, converts at the bottom. The metaphor is accurate but limiting — it implies that growth is about optimizing each stage of a one-time journey. A loop is circular: the output of one cycle becomes the input of the next, compounding over time. This is a fundamentally different mental model, and it produces fundamentally different product decisions.</p>

  <hr class="my-12 border-border/50" />

  <h2>Why Loops Are More Powerful Than Funnels</h2>

  <p>A funnel can be improved incrementally. You optimize each stage, reduce friction, increase conversion. This produces linear improvement — if you improve every stage by 10%, you get a 10% improvement overall.</p>

  <p>A loop compounds. If you improve the loop's efficiency by 10%, the improvement cascades through every subsequent cycle. Over time, small improvements to a well-designed loop produce exponential growth. This is the magic of compounding, applied to user acquisition.</p>

  <p>The most successful products of the past decade — Slack, Airbnb, LinkedIn, Duolingo — are not built on efficient funnels. They're built on powerful loops. Understanding what kind of loop your product can be built around is one of the most valuable strategic questions you can ask.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Major Growth Loop Types</h2>

  <h3>Viral loops</h3>
  <p>Viral loops exist when existing users bring new users to the product as a natural consequence of using it. The key word is "natural" — users invite others not because you incentivize them to, but because inviting others makes the product more valuable for them.</p>

  <p>WhatsApp is the canonical example. You join WhatsApp because someone in your network invited you. You then use WhatsApp to message people who aren't on WhatsApp yet — and some of them join. The product naturally pulls new users in because the existing users' communication needs drive adoption.</p>

  <p>The key metric for viral loops is the viral coefficient (K): the number of new users each existing user brings in on average. A K > 1 means the product is growing purely through viral spread. A K < 1 means the loop is contributing to growth but not sufficient on its own.</p>

  <p>The design challenge: viral loops work when inviting others increases the value of the product for the inviter. Products where network effects are weak (I don't benefit from you joining) have weak viral potential. Products with strong network effects have strong viral potential.</p>

  <h3>Content loops</h3>
  <p>Content loops exist when users create content that attracts other users. Reddit is built on this: users post content, that content attracts new users, some of those new users become content creators, their content attracts more users.</p>

  <p>TikTok's growth was substantially driven by a content loop: creators made videos, those videos attracted new users through external sharing (YouTube embed views, Twitter shares, Google search), some of those new users became creators, and the cycle continued.</p>

  <p>The design challenge for content loops: content quality. User-generated content loops require enough high-quality content to attract users who aren't already intrinsically motivated to join. This usually means investing in seeding early high-quality content, building moderation to remove low-quality content, and designing creation tools that make it easy to create good content.</p>

  <h3>Product loops (usage-driven acquisition)</h3>
  <p>Product loops exist when the output of product use is visible to or shareable with potential new users, who then acquire the product. Calendly is a great example: you schedule a meeting with someone, they receive a Calendly link, they see how easy Calendly makes scheduling, some of them sign up. Loom works similarly — you send a Loom recording, the recipient sees it, some of them become users.</p>

  <p>These loops are powerful because they're embedded in the natural workflow of product use. You're not asking users to do anything extra — the acquisition happens as a byproduct of the activity they're already doing.</p>

  <p>The design question for product loops: is there a natural moment when your product's output is shared with potential users? Can you engineer that moment to include a clear, low-friction path to adoption?</p>

  <h3>Paid acquisition loops</h3>
  <p>Paid loops exist when acquisition spending generates revenue that funds more acquisition spending. This sounds circular, and it is — it only works if LTV > CAC with enough margin to reinvest in acquisition.</p>

  <p>The design question: how quickly does a user generate enough revenue to fund acquiring another user? Products with high LTV and relatively rapid monetization (e-commerce, subscription SaaS) can run tight paid loops. Products with long payback periods need larger capital reserves to fund the loop.</p>

  <hr class="my-12 border-border/50" />

  <h2>Designing Your Growth Loop</h2>

  <p>Most products don't naturally have powerful growth loops — they have to be designed. The design process:</p>

  <p><strong>Identify the natural sharing moments.</strong> When do existing users naturally interact with potential new users in the context of your product? These are the moments where a loop could exist.</p>

  <p><strong>Map the acquisition path from that moment.</strong> When a potential new user encounters the product through an existing user, what's the clearest path from that encounter to adoption? How short can you make it?</p>

  <p><strong>Measure the loop's efficiency.</strong> How many new users does each existing user generate, through this loop, over some time period? Is this metric improving over time?</p>

  <p><strong>Optimize the bottlenecks.</strong> Where in the loop do potential users fall off? What friction can be removed from the path from encounter to adoption?</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-xl">
    The most valuable insight in growth strategy: every sustainable product eventually finds its loop. The products that fail are the ones that spend all their resources on top-of-funnel acquisition without ever building the loop that makes that acquisition compound.
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Trying to identify your product's growth loop?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is one of the most strategically valuable exercises a product team can do. I've helped several teams find and strengthen their loops.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's find your loop</a>
  </div>
`,

"activation-metrics-product-growth": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Between the moment a user signs up and the moment they become an active, retained user, there is a window that most products fail to take seriously enough. In this window, users are making their fundamental decision about whether your product is worth their time. Most of them decide it isn't.
  </p>

  <p>Activation is the bridge between acquisition and retention. Get activation right, and your retention improves, your LTV improves, and your paid acquisition economics improve. Get it wrong, and no amount of growth spending will save you — you're filling a leaky bucket.</p>

  <hr class="my-12 border-border/50" />

  <h2>Defining Activation (The Right Way)</h2>

  <p>Activation is often defined as completing a signup flow or reaching a specific screen. This is a weak definition. A user who completes your signup without experiencing any value has technically "activated" in this definition but is almost certainly going to churn.</p>

  <p>A better definition: activation is the moment when a user experiences the core value of your product for the first time. The "aha moment." The moment that makes the user think, even briefly, "oh, this is useful."</p>

  <p>Finding this moment requires data analysis. Compare the behaviors of your highest-retained users to your churned users in their first 7 days. What specific actions did retained users take that churned users didn't? What actions did retained users take more of, or faster?</p>

  <p>The behavior (or set of behaviors) that most reliably predicts long-term retention is your activation moment. This is your target — not "complete onboarding" but "reach the aha moment that retained users reliably reach."</p>

  <hr class="my-12 border-border/50" />

  <h2>The Metrics That Measure Activation Well</h2>

  <h3>Time-to-activation</h3>
  <p>How long does it take users to reach their first aha moment? This is one of the most actionable activation metrics. If users who activate within the first session retain at 60% and users who activate after 3 sessions retain at 30%, you have a clear goal: help users activate faster.</p>

  <p>The product investment this implies: remove friction from the path to the aha moment. Every step in your onboarding that doesn't contribute to reaching the aha moment is potentially extending time-to-activation and reducing activation rates.</p>

  <h3>Activation rate by cohort</h3>
  <p>What percentage of users who sign up reach your defined activation moment within 7 days? Track this as a cohort metric, not just an aggregate, so you can see whether your activation rate is improving or declining over time.</p>

  <h3>Depth of activation</h3>
  <p>Not all activation is equal. A user who takes one meaningful action has activated. A user who takes five meaningful actions across multiple features in their first week has activated more deeply — and probably retains much better.</p>

  <p>Track depth of activation alongside activation rate. If your activation rate is high but your depth is low, you're getting users to a surface-level aha moment without giving them enough of the product's value to develop a strong usage habit.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Most Common Activation Failures</h2>

  <h3>The too-long onboarding problem</h3>
  <p>Many products treat onboarding as a form-filling exercise — collect all the information you'll need before showing the user anything valuable. This is a fundamental mistake. Every step between signup and value is a potential dropout point. The optimal onboarding is the shortest path from signup to the aha moment.</p>

  <p>The test: remove each step in your onboarding and ask whether removal would meaningfully delay or prevent the user from reaching their aha moment. If the answer is no, the step probably shouldn't be there, or shouldn't be there yet.</p>

  <h3>The wrong aha moment problem</h3>
  <p>Sometimes teams optimize activation around a moment that doesn't actually predict retention. They improve the metric without improving the outcome. This happens when the activation definition was chosen based on what's easy to measure rather than what's causally connected to retention.</p>

  <p>If you've made significant onboarding improvements, seen activation rates improve, and not seen corresponding retention improvements — you might have the wrong activation definition. Go back to the data and reanalyze what behaviors actually predict retention.</p>

  <h3>The wrong user problem</h3>
  <p>Sometimes activation is poor not because your product is bad for users but because you're acquiring the wrong users. If your product is excellent for one user type but you're spending acquisition budget attracting a different user type, activation will be low — not because activation is broken, but because the users aren't a fit.</p>

  <p>The diagnostic: segment your activation data by acquisition channel. If some channels produce high activation rates and others produce low ones, you're either attracting different types of users through different channels, or different channels are setting different expectations that your product meets or fails to meet.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Activation rates not where you need them?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is one of the highest-leverage areas to invest in for growth. I've helped products identify and fix activation bottlenecks that were quietly undermining their growth metrics.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's look at your activation</a>
  </div>
`,

"retention-strategies-consumer-apps": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The apps people use daily — not just have installed, but actually open every day — represent a tiny fraction of the apps they've downloaded. The gap between "installed" and "used daily" is where most consumer apps fail. Understanding why users stay, not just why they leave, is the foundation of a retention strategy that actually works.
  </p>

  <hr class="my-12 border-border/50" />

  <h2>Why Consumer Retention Is Different</h2>

  <p>Consumer apps face a retention environment that enterprise software doesn't. There's no contract keeping users. There's no IT department that prevents them from switching. There's no sunk cost of training and data migration that creates switching friction. Users can and do delete apps in seconds and replace them with competing ones.</p>

  <p>This means consumer retention is earned continuously — not through lock-in, but through genuine ongoing value delivery. The moment your app stops being the best option, users leave. And in most categories, there's always a competitor working on being the better option.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Retention Strategies That Actually Work</h2>

  <h3>Habit formation design</h3>
  <p>The most durable retention is not driven by notifications or gamification — it's driven by habit. Users who have built your app into their daily routine stay because your app is part of how they structure their day, not because you're reminding them.</p>

  <p>Habit formation requires three elements: a trigger (internal or external cue that initiates the behavior), a routine (the behavior itself), and a reward (the variable reward that reinforces the habit loop). Consumer apps that achieve strong retention usually design deliberately around all three.</p>

  <p>The trigger: what cue prompts users to open your app? For a news app, it might be morning coffee. For a fitness app, it might be putting on workout clothes. For a social app, it might be boredom. Identifying and reinforcing the natural trigger is more effective than creating artificial ones through notifications.</p>

  <p>The routine: the behavior itself should be smooth, fast, and consistently satisfying. Friction in the core workflow is the enemy of habit formation.</p>

  <p>The reward: variable rewards — where the value of the outcome is unpredictable — are more addictive than fixed rewards. The social feed where you don't know what you'll see is more compelling than one where you know exactly what to expect.</p>

  <h3>Progress and investment mechanisms</h3>
  <p>Users who have invested in a product — stored data, built a profile, created content, accumulated history — are more likely to stay because leaving means abandoning that investment. The psychological term is the endowment effect: we value things more once we've invested in them.</p>

  <p>Design deliberate investment mechanisms: profile completion, history accumulation, customization options, connections to other users. Each of these makes leaving more costly and staying more valuable.</p>

  <p>Duolingo does this brilliantly: your streak, your XP, your levels, your ranking among friends — all of these are investments that become more valuable over time and more costly to abandon. The streak in particular is a masterclass in retention design.</p>

  <h3>Social and network-based retention</h3>
  <p>When user value increases with the number of users they're connected to, retention benefits are embedded in the social graph. WhatsApp's retention is phenomenally high because leaving means disconnecting from your social network — a cost no one wants to pay.</p>

  <p>The design implication: social features that create real dependencies (shared plans, collaborative content, friend connections) create stronger retention than social features that are peripheral to the core product value.</p>

  <h3>Progressive disclosure of value</h3>
  <p>Many apps front-load their value — showing everything they can do in the onboarding flow, then leaving users with nothing new to discover. Apps with strong long-term retention often have the opposite design: the core value is clear immediately, but the depth of the product reveals itself over time as users explore and as the product learns about them.</p>

  <p>This means the product should be better at 90 days than at day 1, because it knows more about the user and can deliver more tailored value. Personalization that improves with usage is a powerful retention mechanism.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Doesn't Work (Or Creates More Problems)</h2>

  <h3>Notification spam</h3>
  <p>Aggressive notification strategies produce a short-term bump in DAU and a medium-term increase in uninstalls. Users learn to ignore or disable notifications from apps that send too many. The notification strategy that optimizes for the long-term relationship — fewer, more relevant notifications that deliver genuine value — is almost always less aggressive than the strategy that optimizes for short-term engagement metrics.</p>

  <h3>Gamification as the primary retention mechanism</h3>
  <p>Gamification — points, badges, leaderboards — can create strong short-term engagement. It rarely creates the kind of durable habit that produces long-term retention. Users who stay because of gamification leave when the novelty wears off or when a competing product has more interesting gamification. Users who stay because the product solves a real problem better than alternatives stay much longer.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Retention not where it needs to be?</h3>
    <p class="text-lg text-muted-foreground mb-6">Retention strategy is one of my deepest areas of work. Let's look at your specific product and identify the highest-leverage interventions.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's build your retention strategy</a>
  </div>
`,

"monetization-models-digital-products": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Choosing a monetization model is one of the most consequential product decisions you'll make — not just because it affects revenue, but because the model shapes the entire product experience. Freemium products have different retention dynamics than subscription ones. Usage-based models attract different user behaviors than flat-fee models. The monetization model is not a wrapper on top of the product. It's part of the product.
  </p>

  <hr class="my-12 border-border/50" />

  <h2>The Major Monetization Models</h2>

  <h3>Subscription</h3>
  <p>Users pay a recurring fee for access to the product. This is the dominant model for SaaS products, streaming services, and professional tools.</p>

  <p><strong>What it does well:</strong> Predictable revenue. Strong alignment between the user's continued payment and the product's continued delivery of value — if the product stops being valuable, users cancel. This alignment creates a powerful incentive for product quality.</p>

  <p><strong>What it does poorly:</strong> It can create friction at adoption. Users have to commit to paying before they fully understand the value. The subscription also creates a monthly evaluation moment — when the renewal hits, users consciously decide whether to continue. This is a vulnerability if value delivery is inconsistent.</p>

  <p><strong>Best context:</strong> Products with recurring use cases (tools people need every week or every day), strong ongoing value delivery (the product gets better over time), and a user base with established willingness to pay for subscriptions.</p>

  <h3>Freemium</h3>
  <p>Basic features are free; advanced features require payment. This is a popular model for consumer apps and many SaaS tools.</p>

  <p><strong>What it does well:</strong> Removes friction at acquisition. Users can try the product without a payment commitment, which improves conversion from awareness to usage. The free tier creates a large user base, which provides social proof and sometimes network effects that benefit the paid tier.</p>

  <p><strong>What it does poorly:</strong> The conversion rate from free to paid is typically 2-5% — which means the free tier is expensive to support. If the free tier is too generous, users have little incentive to upgrade. If it's too restrictive, users leave instead of upgrading.</p>

  <p><strong>The most common freemium mistake:</strong> Building too generous a free tier early on to maximize adoption, then finding that conversion rates are too low to support the business — and being unable to restrict the free tier later without alienating users who have come to depend on it.</p>

  <h3>Usage-based / Metered pricing</h3>
  <p>Users pay based on how much they use the product — API calls, seats, storage, transactions.</p>

  <p><strong>What it does well:</strong> Aligns cost with value for users (you pay more only when you use more) and creates natural expansion revenue as users grow. Sales-friendly because the entry cost is low.</p>

  <p><strong>What it does poorly:</strong> Revenue is less predictable. High-usage events can create unexpectedly large bills that create user backlash. Requires more complex billing infrastructure.</p>

  <p><strong>Best context:</strong> Infrastructure products (cloud computing, APIs, SMS/email delivery), where usage is a clear proxy for value received and where usage scales with customer growth.</p>

  <h3>Marketplace / Transaction fees</h3>
  <p>The platform takes a percentage of each transaction between buyers and sellers.</p>

  <p><strong>What it does well:</strong> Revenue is directly tied to value created. Low friction at adoption for both sides. Scales well with platform activity.</p>

  <p><strong>What it does poorly:</strong> Creates an incentive for users to transact off-platform ("disintermediation") once the relationship is established. Requires critical mass on both sides before the model works — the cold start problem.</p>

  <h3>Advertising</h3>
  <p>The product is free to users; revenue comes from advertisers.</p>

  <p><strong>What it does well:</strong> Removes cost barriers for users, enabling massive scale. Works for products with high daily engagement and large audiences.</p>

  <p><strong>What it does poorly:</strong> Creates a misalignment between users (who want the best experience) and the business (which needs to maximize ad revenue). This misalignment can corrode product quality over time.</p>

  <hr class="my-12 border-border/50" />

  <h2>Choosing the Right Model</h2>

  <p>The right model depends on your specific product, user, and market context. Key questions:</p>

  <p><strong>What is the user's relationship with the value?</strong> Is it a one-time use, a recurring need, or a growing need? One-time use favors transaction models; recurring needs favor subscriptions; growing needs favor usage-based.</p>

  <p><strong>How does value scale with usage?</strong> If the product becomes more valuable the more you use it, usage-based pricing captures this well. If the value is constant regardless of usage, a flat subscription is simpler.</p>

  <p><strong>Who is the buyer vs. the user?</strong> In enterprise SaaS, the buyer is often not the user. This favors seat-based pricing that finance teams can understand and budget for, rather than usage-based pricing that is harder to forecast.</p>

  <p><strong>What are your acquisition economics?</strong> High acquisition costs favor models with high LTV — subscriptions with strong retention, or usage-based models with strong expansion. Low acquisition costs are compatible with thinner margins per user.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Rethinking your monetization model?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is a strategic decision that deserves rigorous thinking. I've helped multiple products redesign their monetization approach. Let's look at yours together.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's think through monetization</a>
  </div>
`,

"pricing-strategy-framework": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Pricing is one of the most powerful levers in a product business. A 1% improvement in conversion rate might add 1% to revenue. A 1% improvement in pricing typically adds nearly 1% directly to profit. Yet most product managers treat pricing as a finance decision rather than a product decision — and most companies dramatically underinvest in getting it right.
  </p>

  <hr class="my-12 border-border/50" />

  <h2>The Three Approaches to Pricing</h2>

  <h3>Cost-plus pricing</h3>
  <p>Calculate what it costs to deliver the product, add a margin, set the price. This is the most common pricing approach and the one that leaves the most money on the table.</p>

  <p>The problem: your costs have nothing to do with the value you're creating for customers. A product that saves a user 5 hours of work per week has a value that's unrelated to how much it cost to build. Cost-plus pricing captures your costs, not your value.</p>

  <h3>Competitive pricing</h3>
  <p>Price relative to competitors. Slightly below if you want to compete on price; slightly above if you want to signal premium positioning.</p>

  <p>This is better than cost-plus because it's rooted in market reality. But it anchors you to competitors' pricing decisions, which may themselves be arbitrary or suboptimal. You're telling the market "we're like our competitors, just slightly different" — which is not a differentiated position.</p>

  <h3>Value-based pricing</h3>
  <p>Price based on the value you create for customers. The question is not "what does this cost us to build?" or "what does the competition charge?" — it's "what is this worth to the customer?"</p>

  <p>This is the approach that maximizes value capture and produces sustainable pricing power. It's also the hardest to implement because it requires genuine understanding of the value you create — which most companies overestimate for some customers and underestimate for others.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Determine What Your Product Is Worth</h2>

  <h3>The value equation</h3>
  <p>For B2B products: what economic value does your product create? This might be time saved × the hourly cost of the people involved, or revenue generated, or cost of alternatives avoided. Quantifying this gives you a ceiling for what rational customers should be willing to pay.</p>

  <p>For consumer products: the value is harder to quantify but can be estimated by understanding what alternatives exist and how your product is better. If your product replaces a gym membership (₹3,000/month) and is 3x more convenient, you have evidence that value exists up to some multiple of ₹3,000/month.</p>

  <h3>Customer segment differences</h3>
  <p>The same product is worth different amounts to different customers. An enterprise customer who processes thousands of transactions per day gets more value from your product than an SMB processing dozens. A power user who uses every feature is getting more value than a casual user who uses one.</p>

  <p>This is why most mature products have tiered pricing — not because the product is fundamentally different for different customers, but because the value captured should scale with the value created.</p>

  <hr class="my-12 border-border/50" />

  <h2>Pricing as a Product Strategy Signal</h2>

  <p>Your pricing communicates something to the market. High prices signal quality and premium positioning. Low prices signal accessibility and volume. The price point is not just a revenue decision — it's a brand decision.</p>

  <p>Duolingo's free model is a brand statement: we believe language learning should be accessible to everyone. Notion's pricing has historically been aggressive for startups (cheap or free) because building habit in startups produces enterprise customers as those startups grow.</p>

  <p>Before you set or change a price, ask: what does this price say about who this product is for? Is that the message we want to send?</p>

  <h3>The price anchoring effect</h3>
  <p>The first price customers see shapes their perception of what's reasonable. If you launch at $10/month and then raise to $15, customers feel the price increased 50%. If you launch at $20/month and offer $15 as a "special rate," customers feel they're getting a deal.</p>

  <p>This anchoring effect means that early pricing decisions are more consequential than they appear. If you're planning to raise prices as you demonstrate more value, consider launching at the target price with a discount rather than launching at the low price and raising later.</p>

  <hr class="my-12 border-border/50" />

  <h2>When and How to Raise Prices</h2>

  <p>Many early-stage products are systematically underpriced — founders and PMs are afraid that raising prices will kill growth. The data usually suggests otherwise: for products with strong value delivery, modest price increases produce minimal churn and dramatically improved unit economics.</p>

  <p><strong>Signal that it's time to raise prices:</strong> Low churn rates, strong NPS from paying customers, a customer acquisition cost that's declining, and customers who report getting significantly more value than they expected at the current price.</p>

  <p><strong>How to raise prices without destroying trust:</strong> Grandfather existing customers at the current price (they're your advocates; don't punish them for being early). Announce the change with adequate notice. Explain what's changed to justify the increase (new features, better infrastructure, expanded support). The explanation doesn't have to be elaborate — customers understand that businesses need to be sustainable.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Rethinking your pricing strategy?</h3>
    <p class="text-lg text-muted-foreground mb-6">Pricing is where I see some of the biggest untapped value in growth-stage products. Let's look at your specific situation together.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's work on pricing</a>
  </div>
`,

"product-led-growth-guide": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Product-led growth is one of those concepts that's been so thoroughly marketized that it's become hard to find the actual insight beneath the buzzword. Let me try to strip it back to what it actually means and why it matters — and where it works and where it doesn't.
  </p>

  <hr class="my-12 border-border/50" />

  <h2>What PLG Actually Is</h2>

  <p>Product-led growth means the product itself is the primary mechanism for acquiring, activating, and retaining users — rather than sales, marketing, or channel partners.</p>

  <p>In a sales-led motion, you need a sales rep to get a prospect into the product. In a marketing-led motion, you need a campaign to bring them to the door. In a PLG motion, the product itself is the salesperson, the marketing, and the retention mechanism.</p>

  <p>Slack is the canonical PLG example: a team uses Slack for free, realizes they can't live without it, pays for advanced features and more seats. No sales rep touched the opportunity until the deal was significant enough to justify it. The product did the acquisition, activation, and initial retention work.</p>

  <hr class="my-12 border-border/50" />

  <h2>The PM's Role in PLG</h2>

  <p>PLG puts more responsibility on the product team than traditional sales-led models. In a sales-led model, the product just needs to be good enough to retain paying customers. In PLG, the product has to do the entire job — from convincing a new user it's worth trying, to helping them get value quickly, to giving them enough value that they pay.</p>

  <p>This changes what PMs need to prioritize:</p>

  <h3>Time-to-value becomes critical</h3>
  <p>In PLG, there's no sales rep to apologize for a rough onboarding experience or to help a user find the value they're looking for. The product has to do this on its own. The first session is the only first impression. Minimizing time-to-value is not a nice-to-have in PLG — it's survival-critical.</p>

  <h3>Self-serve must actually work</h3>
  <p>In PLG, users who can't figure out the product don't get help from a customer success manager — they leave. Every friction point in self-service is a dropout point. Every confusing UI element is a user you'll never see again. The investment in self-serve experience (documentation, in-product guidance, empty states, error messages) is part of the PLG motion, not a support function.</p>

  <h3>The product must make its own case for upgrade</h3>
  <p>In PLG, the product has to convince users to pay. This means in-product monetization design — the placement of upgrade prompts, the visibility of paid features, the friction of hitting free limits — becomes a PM responsibility with direct revenue implications.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where PLG Works and Where It Doesn't</h2>

  <h3>PLG works well when:</h3>
  <ul>
    <li>The product can be tried without approval from an IT department or budget owner</li>
    <li>The value is apparent quickly without significant setup or integration</li>
    <li>Individual users can adopt the product before the organization commits to it</li>
    <li>The use case is collaborative or viral — users bring colleagues in naturally</li>
    <li>The market is large enough to support a free tier at scale</li>
  </ul>

  <h3>PLG struggles when:</h3>
  <ul>
    <li>The product requires significant configuration or integration before delivering value</li>
    <li>The buying decision requires organizational approval, not just individual adoption</li>
    <li>The product handles sensitive data that requires security review before adoption</li>
    <li>The core use case is single-player and doesn't generate any viral or sharing dynamic</li>
    <li>The market is too narrow to support the volume needed to convert enough free users to paid</li>
  </ul>

  <p>Many products pursue PLG because it's fashionable, not because it fits their product and market. The result is an expensive free tier with poor conversion rates and a product experience that's trying to be both a self-serve product and an enterprise solution without doing either well.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Evaluating a PLG strategy?</h3>
    <p class="text-lg text-muted-foreground mb-6">PLG is powerful in the right context and expensive in the wrong one. I'm happy to think through whether it's the right motion for your specific product.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's figure out your growth motion</a>
  </div>
`,

"balancing-growth-monetization": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    There is a version of this conversation that sounds academic — "growth vs. monetization" — but in practice it's one of the most uncomfortable decisions product managers and founders face. Because growth and monetization are not just strategic trade-offs in a document. They're fights in conference rooms. They're the decision to charge a user who would otherwise churn. They're the feature that drives engagement metrics but makes the product worse for a subset of users who matter to revenue.
  </p>

  <p>The tension is real and it doesn't resolve neatly. Here's how I've learned to navigate it.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Core Tension</h2>

  <p>Growth optimizes for the size of the user base. Monetization optimizes for the revenue per user. In most products, these are in tension because the things that grow the user base — lower prices, fewer restrictions, more free features — reduce revenue per user, and the things that increase revenue per user — higher prices, premium gates, fewer free features — can slow user base growth.</p>

  <p>The ideal is a model where growth and monetization are in alignment — where the behaviors that grow the user base also increase revenue per user. Network effect businesses can achieve this: as the user base grows, the value of the network increases, which justifies higher monetization. But this is the exception, not the rule.</p>

  <hr class="my-12 border-border/50" />

  <h2>When to Prioritize Growth</h2>

  <p>Growth should dominate when:</p>

  <p><strong>You haven't found product-market fit yet.</strong> Monetizing before PMF is almost always a mistake. You need to understand what value you're creating before you can price it correctly. Monetizing too early can mask PMF signals — paid users have different retention dynamics than free ones, and small revenue numbers can feel like success when they're actually covering up a fundamental product problem.</p>

  <p><strong>Network effects are active in your product.</strong> If the product becomes more valuable as more users join, growing the user base increases the product's value for everyone — including paying users. In this case, free user growth is not just a marketing expense; it's a product investment.</p>

  <p><strong>The market is early and you're fighting for default status.</strong> In categories where there will eventually be one dominant player, being the default that users think of first is enormously valuable. Growing market share early — even at the expense of short-term revenue — can be the right bet if the winner-take-all dynamics are real.</p>

  <hr class="my-12 border-border/50" />

  <h2>When to Prioritize Monetization</h2>

  <p>Monetization should dominate when:</p>

  <p><strong>You have product-market fit and sustainable unit economics are not yet proven.</strong> If you know users love your product but you don't know if the unit economics work, finding that out now — when you have growth leverage — is better than finding out later when you have more users but still don't know if the business model works.</p>

  <p><strong>Your free users are consuming resources without a path to paying.</strong> Free users who will never pay are an operational cost, not a growth asset. If your analytics show that a large segment of your free user base has characteristics that predict they will never convert (wrong company size, wrong use case, wrong country), optimizing growth for this segment is actively harmful.</p>

  <p><strong>You're approaching a capital constraint.</strong> Growth without monetization requires either capital or a very fast path to monetization. If you're running low on capital and your path to sustainable revenue isn't clear, the time to solve the monetization problem is before you run out of money, not after.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Sequencing Framework</h2>

  <p>The framework I've found most useful: growth before monetization, but not as long as most people think.</p>

  <p>The typical pattern in consumer products: year 1 is about growth and PMF, year 2 introduces monetization carefully, year 3 optimizes the monetization model. This is roughly right for products with strong network effects. For products without them, the timeline often needs to be compressed — the monetization experiment needs to start before you feel ready.</p>

  <p>The signal that you've been in growth mode too long: you're measuring success primarily by user count rather than by any metric that connects to business value. At some point, the number of users is only valuable insofar as it relates to eventual revenue. If you can't articulate a clear path from your current user base to sustainable revenue, you've been in growth mode too long.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Navigating growth vs. monetization tradeoffs?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is one of the most common strategic challenges I work on with product leaders. Let's think through the specifics of your situation.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's work through it</a>
  </div>
`,

};

export function getGrowthContent(slug: string): string | undefined {
  return GROWTH_CONTENT[slug];
}
