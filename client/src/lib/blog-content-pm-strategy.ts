export const PM_STRATEGY_CONTENT: Record<string, string> = {

"outcome-driven-roadmaps": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    In 2019, I was running product at a fintech startup. We had a beautiful roadmap — color-coded, quarter-by-quarter, full of feature names that sounded compelling. "Smart Transaction Categorization." "Cross-Bank Aggregation." "Customizable Spending Alerts." The board loved it. The investors loved it. The engineering team had a clear sense of what they were building.
  </p>

  <p>We shipped almost everything on that roadmap. And at the end of the year, our retention had barely improved, our conversion rate was flat, and one of our biggest enterprise prospects told us they were going with a competitor because we "didn't seem to understand their workflow."</p>

  <p>The roadmap worked perfectly. The product didn't.</p>

  <p>That experience was the most important lesson I've had in product management. It forced me to confront something uncomfortable: we were measuring and celebrating the wrong things. We were committed to features, not to outcomes.</p>

  <hr class="my-12 border-border/50" />

  <h2>What's Wrong with Feature Roadmaps</h2>

  <p>A feature roadmap is an answer to the question: "What are we building?" An outcome roadmap is an answer to the question: "What are we trying to change about the world, for whom, and how will we know if we succeeded?"</p>

  <p>Feature roadmaps feel comforting because they're concrete. You can look at them and see exactly what you're committing to. You can track whether things shipped on time. You can show stakeholders a steady flow of output.</p>

  <p>The problem is that a feature roadmap optimizes for the feeling of progress rather than actual progress. Here's why:</p>

  <h3>Features don't create value — outcomes do</h3>
  <p>A feature creates potential value. The user has to encounter it, understand it, and adopt it for that value to be realized. The gap between "feature shipped" and "outcome achieved" is enormous — and most teams treat the first as a proxy for the second.</p>

  <p>I've shipped features that were technically excellent, well-designed, and completely ignored by users. I've also shipped tiny changes — a copy edit, a UI simplification — that produced outsized business results. The feature was not the unit of value. The outcome was.</p>

  <h3>Feature commitments freeze learning</h3>
  <p>When you commit to a set of features for the next quarter, you're implicitly saying: "We already know enough to make this decision. Nothing we learn in the next three months will change what we build."</p>

  <p>This is almost never true. In almost every product I've worked on, the most important learning of the quarter came from shipping something and observing how users responded. If you're committed to a feature roadmap, that learning can't change your direction — you're already committed.</p>

  <h3>Feature roadmaps hide the "why"</h3>
  <p>When stakeholders see a feature roadmap, they see what's being built. They don't see why it's being built, what problem it's solving, or how success will be measured. This creates a dynamic where the roadmap is treated as the product strategy, when it's actually just an execution plan — and a plan that lacks the strategic context that would allow intelligent trade-offs.</p>

  <hr class="my-12 border-border/50" />

  <h2>What an Outcome-Driven Roadmap Actually Looks Like</h2>

  <p>An outcome-driven roadmap is organized around problems to solve and metrics to move, not features to ship. It looks fundamentally different from a feature roadmap.</p>

  <h3>The structure of an outcome-driven roadmap</h3>

  <p>Instead of "Q2: Ship Cross-Bank Aggregation," an outcome-driven roadmap entry looks like:</p>

  <p><strong>Problem:</strong> Users who connect multiple accounts have 40% lower activation rates than single-account users. We believe this is because the experience of managing multiple accounts is confusing at the integration step.</p>

  <p><strong>Target outcome:</strong> Increase 7-day activation rate for multi-account users from 60% to 80% by Q2 end.</p>

  <p><strong>Hypotheses we'll test:</strong> Simplifying the account connection flow (most likely), improving the error handling for failed connections, adding a "what to expect" onboarding for multi-account users.</p>

  <p><strong>Committed direction, not committed solution:</strong> We are committed to investing in this problem area this quarter. We are not committed to any specific feature solution.</p>

  <p>This approach preserves the direction — everyone knows what problem we're working on — without locking in the solution before we've done the work to discover the best one.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Outcome-Driven Roadmap in Practice</h2>

  <h3>How to write outcome-focused roadmap items</h3>

  <p>The hardest part of transitioning to outcome-driven roadmaps is writing the problems correctly. The typical failure mode is writing a solution disguised as a problem:</p>

  <p><em>Bad (solution disguised as problem):</em> "Users need a better filtering system so they can find their transactions faster."</p>
  <p><em>Good (actual problem):</em> "Users who need to find a specific transaction take an average of 2.4 minutes and often give up without finding it. This is causing 15% of support tickets and increasing churn among high-frequency traders."</p>

  <p>The second version gives you freedom to solve the problem in multiple ways — not just by building a better filter. Maybe the solution is a search bar. Maybe it's smarter auto-categorization. Maybe it's a recently-viewed transaction list. The problem statement doesn't constrain the solution.</p>

  <h3>How to choose the right outcomes</h3>

  <p>Outcome-driven roadmaps only work if the outcomes you're targeting actually connect to business value. The best framework I know for this is the outcome-metric-feature hierarchy:</p>

  <p>Business outcome → product metric → feature bets</p>

  <p>Start with the business outcome you're trying to drive (revenue, retention, acquisition). Identify the product metric that is most causally connected to that business outcome. Then identify feature bets that you believe will move that product metric.</p>

  <p>This hierarchy forces you to articulate the causal chain — the story of why building this thing will produce that business outcome. When the causal chain is clear, the roadmap decisions become much easier.</p>

  <h3>Managing stakeholder expectations</h3>

  <p>The most common objection to outcome-driven roadmaps is from stakeholders who want to know exactly what they'll get. Sales teams need to promise customers specific capabilities. Investors want to see a clear product development trajectory. Leadership wants to plan launches and marketing campaigns.</p>

  <p>The answer is not to abandon outcome orientation but to communicate at the right level of abstraction for each audience. For sales: "We are investing in improving multi-account users' experience, and here are the specific capabilities we expect to release." For investors: "We are focused on activation and retention this quarter, and here are the initiatives we're running to move those metrics." For marketing: "These are the launches we're planning, with the caveat that exact details will be confirmed closer to launch."</p>

  <p>Each audience gets the right level of commitment, and none of them get false precision about details that haven't been determined yet.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Transition: How to Move From Feature to Outcome Roadmaps</h2>

  <p>If your team is currently running on feature roadmaps and you want to make the transition, here's what I'd recommend:</p>

  <p><strong>Don't try to transition everything at once.</strong> Pick one product area or one quarter and run the outcome-driven process there. Build organizational confidence in the approach before trying to roll it out everywhere.</p>

  <p><strong>Start with metrics, not with roadmap items.</strong> Before you touch the roadmap, identify the 2-3 metrics you're trying to move this quarter. Make sure everyone agrees that these are the right metrics. Then work backward from the metrics to the problems to the potential solutions.</p>

  <p><strong>Write explicit problem statements.</strong> For every initiative on the roadmap, require a written problem statement that explains what user or business problem this is solving and how you'll measure success. If you can't write this, the initiative probably shouldn't be on the roadmap.</p>

  <p><strong>Build in explicit review points.</strong> Outcome-driven roadmaps work because they allow you to adapt based on what you learn. But adaptation only happens if you create explicit review points where you examine the data and decide whether to continue, pivot, or stop. Monthly metric reviews are the minimum. Bi-weekly is better.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-xl">
    The question to ask about every item on your roadmap: "If we shipped this and it didn't move any metric, would we have learned anything useful?" If the answer is no, you're building a feature, not running an experiment. Features are often necessary. But you should know which ones you're betting on vs. which ones you're certain about.
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Trying to shift to outcome-driven planning?</h3>
    <p class="text-lg text-muted-foreground mb-6">I've helped teams make this transition — and it's more about organizational change than framework change. Let's talk through what it would take for your team.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Start the conversation</a>
  </div>
`,

"how-to-build-winning-product-strategy": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Strategy is one of those words that means everything and nothing. Every company claims to have a product strategy. Very few have one that actually guides decisions. The test is simple: if two reasonable people on your team disagree about a product decision and can't resolve it by referring to the strategy, you don't have a real strategy.
  </p>

  <p>Let me share how I think about building a product strategy that passes this test — one that actually discriminates between good and bad decisions rather than just providing inspiring language for presentations.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Strategy Is (And What It Isn't)</h2>

  <p>The most useful definition of strategy I've found comes from Roger Martin's "Playing to Win": strategy is a set of integrated choices about where to play and how to win.</p>

  <p><strong>Where to play</strong> means: which customers, which problems, which markets, which channels. Where to play is also, critically, where not to play — the markets you're explicitly not pursuing, the customers you're actively choosing not to serve, the problems you're setting aside.</p>

  <p><strong>How to win</strong> means: why will you be chosen over alternatives? What makes your solution better in the context you've chosen? What capabilities do you need to have to deliver that advantage?</p>

  <p>Strategy is not:</p>
  <ul>
    <li>A vision statement ("We will be the best platform for X")</li>
    <li>A roadmap (a plan for what you'll build)</li>
    <li>A set of values (how you want to work)</li>
    <li>A market analysis (what the landscape looks like)</li>
  </ul>

  <p>All of these are inputs to strategy or outputs of strategy. None of them are strategy themselves.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Strategic Choices That Actually Determine Success</h2>

  <h3>The customer choice</h3>

  <p>You cannot build a strategy without a clear answer to "who is this for?" The more specific your answer, the more useful your strategy becomes.</p>

  <p>"Small and medium businesses" is not a specific enough customer definition. "Bootstrapped founders of software businesses with less than $5M revenue who are handling their own accounting" is specific. The specificity is what allows you to make the rest of the strategic choices — what problem to solve, what solution to build, what distribution to use.</p>

  <p>The hardest part of the customer choice is accepting who you are not building for. Every product team faces pressure to expand the customer definition — from sales ("we could win more deals if we also served enterprises"), from investors ("the market is bigger if you include segment X"), from the CEO's personal relationships. Resisting this pressure without a clear customer definition is almost impossible. With a clear one, the response is simple: "That's not our customer for this product."</p>

  <h3>The problem choice</h3>

  <p>Within the customer you've chosen, you can solve many different problems. The problem choice is about which of those problems you're committed to solving — and which you're explicitly not committed to, even when users ask.</p>

  <p>The trap here is "we solve many problems for our customer." This is usually either false (you solve a specific set of problems well and others poorly) or it means you've avoided making a real problem choice.</p>

  <p>The best product strategies are built around a core problem that is genuinely painful for the customer and for which existing solutions are genuinely inadequate. The more specific your problem definition, the more directly you can build toward the solution.</p>

  <h3>The differentiation choice</h3>

  <p>Why would a rational customer choose you over the alternatives? Not just why they should — why they actually will.</p>

  <p>The answers that don't count: "We're better quality" (everyone says this), "We're more focused on the customer" (everyone says this), "We're more innovative" (everyone says this). The answers that do count are specific and observable: "We're the only product that integrates natively with the three tools this customer uses every day," or "We're 40% cheaper for the specific use case this customer has," or "We have 10 years of proprietary data that makes our recommendations more accurate than anyone else's."</p>

  <p>Differentiation that can't be articulated specifically probably doesn't exist. Or it exists but hasn't been identified yet — which is the more hopeful version of the same problem.</p>

  <h3>The capability choice</h3>

  <p>What do you need to be excellent at in order to deliver your differentiation? This is the choice that determines what to invest in.</p>

  <p>If your differentiation is "fastest onboarding in the category," your critical capability is onboarding experience design and engineering. If your differentiation is "most accurate AI recommendations," your critical capability is data acquisition, model training, and feedback loops. If your differentiation is "best white-glove enterprise support," your critical capability is a highly trained customer success function.</p>

  <p>The capability choice determines where resources should be concentrated — not spread evenly, but concentrated at the point of differentiation. Companies that try to be equally excellent at everything are excellent at nothing.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Strategy-Building Process That Works</h2>

  <h3>Step 1: Audit the current reality honestly</h3>

  <p>Before you build a strategy, you need to understand your actual position. Not the position you want to be in — where you are right now. What customers are you actually serving? What problem are you actually solving for them? Why are they actually choosing you?</p>

  <p>This audit often reveals uncomfortable truths. You may be serving a customer you didn't intend to serve. Your actual differentiation may be different from what you thought it was. The problem you're solving may be adjacent to the problem you intended to solve.</p>

  <p>These revelations are not failures. They're information. The strategy you build from accurate information about current reality is almost always better than the strategy you build from the idealized version of reality.</p>

  <h3>Step 2: Map the competitive landscape with specificity</h3>

  <p>Who are you actually competing with? Not just direct competitors — all the alternatives your customer has, including doing nothing, using a spreadsheet, or hiring a person to do what your product does.</p>

  <p>For each alternative: what does it do well? What does it do poorly? What would cause a customer to choose it over you? What would cause a customer to choose you over it?</p>

  <p>The competitive map reveals the spaces that are genuinely available — the problems no current alternative solves well for your specific customer — and the spaces that are genuinely contested, where you'd be fighting head-to-head with better-resourced competitors.</p>

  <h3>Step 3: Make the explicit choices</h3>

  <p>With the audit and the competitive landscape in hand, make the explicit strategic choices:</p>
  <ul>
    <li>Who specifically is our customer?</li>
    <li>What specific problem are we solving?</li>
    <li>Why will customers choose us over alternatives?</li>
    <li>What capabilities do we need to build and protect?</li>
    <li>What are we explicitly not doing?</li>
  </ul>

  <p>Write these down. The exercise of writing makes the choices visible — and it's often the first time a team has been forced to state explicitly what they're choosing and what they're giving up.</p>

  <h3>Step 4: Test the choices for internal consistency</h3>

  <p>A good strategy is internally consistent — each choice reinforces the others. Test this by asking: does the problem we've chosen to solve naturally arise for the customer we've chosen? Does our differentiation address that problem in a way that's superior to alternatives? Does the capability we need to build actually enable that differentiation?</p>

  <p>Inconsistencies in the strategy reveal themselves in this step. Fix them before they manifest as product failures.</p>

  <h3>Step 5: Use it to make decisions</h3>

  <p>The final test of a strategy is whether it guides real decisions. The next time there's a disagreement about a product decision, refer to the strategy explicitly. Does this decision take us toward our chosen customer, solving our chosen problem, with our chosen differentiation? Or does it pull us away?</p>

  <p>If the strategy doesn't help resolve the disagreement, the strategy isn't specific enough.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Building or refining your product strategy?</h3>
    <p class="text-lg text-muted-foreground mb-6">I work with founders and product leaders to build strategies that actually guide decisions. This is some of the most impactful product work you can do.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's build it together</a>
  </div>
`,

"prioritization-frameworks-every-pm": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    I have a confession: I have never, in 9+ years of product management, used a prioritization framework exactly as described in any framework documentation. I've used parts of most of them. I've combined elements from different ones. I've used them as starting points and then overridden them with judgment. And I've found that this is how most good PMs actually work — not with religious adherence to any single framework, but with a working knowledge of many that gets applied flexibly.
  </p>

  <p>What I want to give you here is not a tutorial on RICE or MoSCoW. There are hundreds of those. What I want to give you is a perspective on when each framework is useful, what each framework is measuring (and missing), and when to put the frameworks aside and just exercise judgment.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Problem With Prioritization Frameworks</h2>

  <p>Prioritization frameworks share a fundamental limitation: they convert qualitative judgment into quantitative scores, and then treat those scores as if they're precise. The math gives false confidence.</p>

  <p>When you score items in RICE — Reach, Impact, Confidence, Effort — you're making 4 separate estimates that each carry uncertainty. Multiplying and dividing uncertain estimates doesn't reduce the uncertainty. It compounds it. A RICE score of 4,500 is not meaningfully more precise than "high priority" or "third on the list."</p>

  <p>This doesn't mean frameworks are useless. They're extremely useful — just not for the reason most people think. The real value of prioritization frameworks is not the score they produce. It's the conversation they force.</p>

  <p>When you score something in RICE and your colleague scores the same thing differently, you have to have a conversation about why. That conversation — about what "reach" means, about how to estimate "impact," about what level of certainty justifies a high "confidence" score — is the real work. The framework is just the scaffolding for that conversation.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Major Frameworks and What They're Actually Good For</h2>

  <h3>RICE (Reach, Impact, Confidence, Effort)</h3>

  <p><strong>Best for:</strong> Evaluating a large backlog where you need a consistent scoring mechanism across many items. Good when you have reasonable data on user behavior that helps you estimate reach and impact.</p>

  <p><strong>Formula:</strong> (Reach × Impact × Confidence) / Effort</p>

  <p><strong>What it misses:</strong> Strategic alignment. A high-RICE item might be tactically valuable but strategically wrong. RICE doesn't capture "should we be investing in this area at all?" — it only helps you rank items within an area you've already decided to invest in.</p>

  <p><strong>Common misuse:</strong> Using RICE to compare items across fundamentally different categories. A customer-facing feature and a platform investment are not commensurable in RICE. The comparison is apples to airplanes.</p>

  <h3>ICE (Impact, Confidence, Ease)</h3>

  <p><strong>Best for:</strong> Growth experiments and tactical improvements where you want a quick, lightweight scoring mechanism. ICE is faster to apply than RICE and good for teams that need to move fast.</p>

  <p><strong>What it misses:</strong> The same strategic alignment issue as RICE. ICE is a good tool for growth teams running experiments. It's a poor tool for strategic product decisions.</p>

  <p><strong>When I use it:</strong> When I'm helping a team triage a list of 30+ potential growth experiments and need a quick first-pass filter before going deeper on the top 10.</p>

  <h3>MoSCoW (Must Have, Should Have, Could Have, Won't Have)</h3>

  <p><strong>Best for:</strong> Scoping a release or a sprint where you need to communicate clearly with stakeholders about what's in and what's out. Excellent for managing scope with non-technical stakeholders who need a simple vocabulary.</p>

  <p><strong>What it misses:</strong> Relative ordering within categories. MoSCoW tells you what's in the release but not what to build first if the release is at risk.</p>

  <p><strong>A non-obvious use:</strong> I use MoSCoW to force explicit decisions about what's NOT happening. The "Won't Have" category is the most valuable one — it's where you make visible all the things you're consciously deferring. This creates a shared record of scope decisions that reduces future second-guessing.</p>

  <h3>Kano Model</h3>

  <p><strong>Best for:</strong> Understanding how features affect user satisfaction, particularly when you're trying to distinguish between hygiene features (expected and harm satisfaction if absent) and delighters (unexpected and increase satisfaction significantly when present).</p>

  <p><strong>What it misses:</strong> Effort, strategic fit, and business value. Kano tells you about user satisfaction, not about business outcomes.</p>

  <p><strong>When I find it most useful:</strong> When a team is debating whether to build a "nice to have" feature. Kano analysis often reveals that the feature is a hygiene requirement — users don't notice it when it's there, but they're frustrated when it's absent. This reframes the decision from "should we bother?" to "we have to do this or face churn."</p>

  <h3>Opportunity Scoring</h3>

  <p><strong>Best for:</strong> User-problem prioritization, specifically for finding the problems that are both important to users and underserved by existing solutions. Developed by Tony Ulwick and used in the Outcome-Driven Innovation framework.</p>

  <p><strong>How it works:</strong> Ask users two questions about each potential need: "How important is this to you?" and "How satisfied are you with existing solutions?" Calculate an opportunity score: Importance + max(Importance - Satisfaction, 0). High importance + low satisfaction = high opportunity.</p>

  <p><strong>When I use it:</strong> For discovery work when I have many potential problems I could solve and I need a principled way to choose which ones to investigate further. The survey data gives you a defensible basis for where to invest research effort.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Two Types of Prioritization</h2>

  <p>A crucial distinction that most prioritization discussions miss: there are two fundamentally different types of prioritization, and they require different approaches.</p>

  <h3>Type 1: Comparing items within an agreed-upon area</h3>
  <p>You've decided to invest in onboarding improvements. Now you have 15 potential onboarding improvements to choose from. RICE or ICE work well here. You're comparing commensurable items within a shared context. The framework gives you a consistent scoring system that helps surface the top items for closer evaluation.</p>

  <h3>Type 2: Comparing investments across different areas</h3>
  <p>Should we invest in onboarding improvements or in the enterprise dashboard feature or in the mobile app or in reducing tech debt? These are not commensurable in any simple scoring framework. They represent different bets about where value will come from.</p>

  <p>This type of prioritization is fundamentally strategic, not analytical. It requires understanding your business context, your competitive situation, your user needs, and your organizational capacity — and making a judgment call about where to concentrate resources. No framework resolves this. The PM's strategic judgment is what resolves this.</p>

  <hr class="my-12 border-border/50" />

  <h2>When to Override the Framework</h2>

  <p>Here are the situations where I set frameworks aside and rely on judgment:</p>

  <p><strong>When the strategic direction is unclear.</strong> If your team disagrees about what you're trying to achieve, no framework can tell you which items to prioritize. You need to resolve the strategic disagreement first. Prioritization frameworks are tactics in service of strategy, not substitutes for it.</p>

  <p><strong>When one item is clearly dominant.</strong> If you're debating between an item that would prevent significant churn and an item that would add a nice capability, you don't need a framework. The churn prevention wins. Framework analysis in obvious cases is theater.</p>

  <p><strong>When the stakes are existential.</strong> If there's a regulatory deadline, a security vulnerability, or a critical customer commitment, none of these belong in a normal prioritization process. They go to the top of the list and the framework handles everything else.</p>

  <p><strong>When the data doesn't exist.</strong> Frameworks that require data work poorly when the data isn't available. Rather than fake the numbers to make the framework run, just use judgment explicitly. "I'm making this call because of this reasoning" is more honest and more useful than "I scored it and this is what came out."</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Struggling with prioritization decisions?</h3>
    <p class="text-lg text-muted-foreground mb-6">Sometimes you need someone outside the team to help cut through the noise. I'm good at this — and happy to help.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Get an outside perspective</a>
  </div>
`,

"setting-strong-product-vision": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Most product vision statements are forgotten within three months of being written. They live in the company wiki, they get quoted in all-hands presentations, and they have essentially zero effect on how any specific product decision gets made.
  </p>

  <p>I've written vision statements that fell into this category. I've also worked on products where the vision was so vivid and so specific that it genuinely guided daily decisions — where engineers and designers could look at a product choice and intuitively know whether it was moving them toward the vision or away from it. The difference between these two kinds of vision is significant and learnable.</p>

  <hr class="my-12 border-border/50" />

  <h2>What a Vision Actually Does</h2>

  <p>A product vision has three jobs:</p>

  <p><strong>It orients decisions without requiring escalation.</strong> When two people on your team disagree about a product direction, a good vision gives them a way to resolve the disagreement without escalating to you. They can ask: "Which option moves us closer to where we're trying to go?" A vision that doesn't help resolve actual disagreements is decorative, not functional.</p>

  <p><strong>It creates coherence across time.</strong> Product teams make hundreds of decisions. Over time, without a strong orienting vision, these decisions start to pull in different directions. The product develops internal contradictions — features that undermine each other, design patterns that conflict, user experiences that don't add up to a coherent whole. A strong vision prevents this by giving every decision a single north.</p>

  <p><strong>It makes trade-offs legible.</strong> Every product decision is a trade-off. A vision makes some trade-offs obviously right and others obviously wrong. "We could add this feature, but it would make the product harder to explain to new users — and our vision is to be the simplest tool in this category. So we're not doing it." That's the vision doing its job.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Makes a Vision Stick</h2>

  <h3>It's specific enough to be wrong</h3>
  <p>A vision that can't be wrong is not useful. "We will be the best product for our users" is not a vision. It describes no specific future. It excludes nothing. It can never be falsified.</p>

  <p>A useful vision names a specific future state: "In 5 years, every Indian household will have access to a financial advisor — not just the wealthy ones — and we will be the product that makes this possible." This vision is specific enough that you can disagree with it, specific enough that it implies certain things about what you should and shouldn't build, and specific enough that you'll know whether you achieved it.</p>

  <h3>It describes the world, not just the product</h3>
  <p>The best product visions describe what the world looks like when the product has done its job — not what the product itself will do. This distinction sounds small and matters enormously.</p>

  <p>Product-focused vision: "We will build the most comprehensive personal finance platform in India."</p>
  <p>World-focused vision: "A generation of Indians will make financial decisions with confidence, not fear — because they finally have the tools and knowledge that were previously only accessible to the wealthy."</p>

  <p>The second version is motivating in a way the first isn't. It connects the product work to something that matters beyond the product itself. Teams that feel connected to a meaningful world-level vision work differently — with more energy, with more creative investment in their work, and with a stronger sense of what matters.</p>

  <h3>It survives translation</h3>
  <p>A practical test: can an engineer on your team explain your vision to someone at a dinner party without looking at their phone? If the vision requires consulting a document to remember, it's not a living vision — it's a document.</p>

  <p>Visions that survive translation are short, vivid, and memorable. They use concrete language rather than abstract language. "Every Indian household will have a financial advisor in their pocket" is vivid and memorable. "We will democratize financial services through accessible, technology-driven solutions" is abstract and forgettable, even if the underlying intent is the same.</p>

  <h3>It's ambitious enough to be inspiring, realistic enough to be credible</h3>
  <p>A vision that is too modest inspires no one. A vision that is clearly implausible produces cynicism rather than energy. The sweet spot is a vision that requires a genuine stretch — that represents something the team can't achieve with current capabilities or current assets — but that they can believe is achievable with hard work and smart decisions.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Process of Developing a Vision</h2>

  <h3>The observation phase</h3>
  <p>Before writing anything, spend time observing: your users at their most frustrated moments and their most successful moments; the gap between where your users are today and where they would be if the problem was perfectly solved; the full landscape of what's possible given technological and market trends.</p>

  <p>The best visions are grounded in deep observation, not wishful thinking. They see something that others have missed — about what users actually need, about what's now possible that wasn't before, about a gap in the market that is large and underserved.</p>

  <h3>The hypothesis phase</h3>
  <p>From your observations, form hypotheses about the future. What change is coming? Who will benefit from that change? What would it look like if the problem was fully solved? What does "the best version of the world" look like for your users?</p>

  <p>Write these hypotheses down. Share them. Argue about them. The vision that emerges from genuine argument about what the future should look like is stronger than the vision that emerges from a smooth consensus process.</p>

  <h3>The testing phase</h3>
  <p>Test the vision you've drafted against real decisions. Bring it into an actual product discussion and see if it helps resolve the disagreement. If it does — if people can look at the options and use the vision to identify which is better — you have something real. If it doesn't help, go back to the hypothesis phase.</p>

  <h3>The communication phase</h3>
  <p>A vision that exists only in your head is not a product vision. The communication work — making the vision vivid and accessible to everyone on the team — is as important as the content of the vision itself. This is where the short, concrete, memorable framing matters.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Trying to develop a compelling product vision?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is work I find genuinely engaging. I help product leaders develop visions that are ambitious, specific, and genuinely useful for the team. Let's work on it.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Work with me</a>
  </div>
`,

"product-leadership-vs-management": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The moment you move into product leadership — whether that's your first direct report as a PM or a VP of Product title — you face a transition that nobody adequately prepares you for. The skills that made you a great individual contributor are necessary but no longer sufficient. And some of the habits that served you well as an IC will actively work against you as a leader.
  </p>

  <p>I've watched smart, technically excellent PMs struggle in this transition. Not because they weren't smart enough — they were very smart. But because they didn't understand what the job had become.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Three Dimensions That Change</h2>

  <h3>From solving problems to enabling problem-solving</h3>

  <p>As an individual contributor PM, your job is to solve problems. You analyze the user data, define the right problem, design the solution, and guide the team toward building it. Your personal judgment is central to every important decision.</p>

  <p>As a product leader, your job is fundamentally different: to create the conditions under which other people can solve problems well. Your personal judgment still matters — but now it needs to manifest through the frameworks you create, the people you develop, and the culture you shape, rather than through your direct decisions.</p>

  <p>This shift is disorienting because it feels like giving up the thing you're good at. You know you could solve this problem better than the PM on your team who's working on it. Maybe you can. But the right move as a leader is to help them become better at solving it, not to take over.</p>

  <p>The IC who becomes a leader by continuing to do IC work is an IC with a leadership title, not a real leader. And they will never scale, because their organization will never develop the capability to operate without their personal intervention in every important decision.</p>

  <h3>From a single product to a portfolio</h3>

  <p>As an IC PM, you maintain deep context on one product. You know every user pain point, every metric, every technical constraint. This depth is how you do the work.</p>

  <p>As a product leader, you're responsible for a portfolio of products — and you can't maintain that same depth across all of them. You have to operate at a different altitude, making strategic decisions about where to invest, how to allocate resources across the portfolio, and which product bets to place.</p>

  <p>The transition in how you spend your time is significant. The IC PM spends most of their time in the details of their product. The product leader spends most of their time on organizational design, talent development, cross-functional alignment, and strategic direction — and much less time in the details of any specific product.</p>

  <p>This doesn't mean leaders can be ignorant of their products' details. A good product leader stays connected to the reality of what their teams are doing and what their users are experiencing. But they do this through sampling and review, not through direct daily involvement.</p>

  <h3>From peer relationships to reporting relationships</h3>

  <p>When you lead a team of PMs, the nature of your most important relationships changes. You now have reporting relationships — which means you're accountable for the performance and development of other people, not just your own work.</p>

  <p>This is where many first-time product leaders get into trouble. They continue to relate to their direct reports as peers — sharing opinions freely, giving unsolicited product feedback, weighing in on decisions that the PM is supposed to own. This inadvertently undermines the PM's authority and creates the impression that the leader doesn't trust the PM's judgment.</p>

  <p>The discipline of managing reporting relationships requires deliberate restraint. You need to learn how to share your perspective in ways that invite the PM to push back, rather than in ways that close off the conversation. "I wonder if X might be worth considering" lands differently than "Have you thought about X?" which lands differently than "I think you should do X." The same information, communicated differently, creates very different dynamics.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Skills That Transfer (And the Ones That Don't)</h2>

  <h3>What transfers well</h3>
  <p><strong>Product judgment.</strong> Your ability to evaluate product decisions remains valuable — the difference is that you now exercise it through coaching and review rather than direct decision-making. Good product leaders make their teams better because their product judgment informs the feedback and guidance they give, not because they make decisions for their teams.</p>

  <p><strong>Structured thinking.</strong> The ability to break complex problems into components, to think through second-order effects, to distinguish root causes from symptoms — this applies to organizational and strategic challenges just as much as product challenges.</p>

  <p><strong>Communication clarity.</strong> The ability to communicate complex things clearly becomes, if anything, more important as a leader. Now you're communicating to a larger group with more heterogeneous context. The premium on clear, crisp communication goes up.</p>

  <h3>What doesn't transfer</h3>
  <p><strong>Your opinion about product details.</strong> Your opinion about how a feature should be designed, what the copy should say, or how the onboarding should flow is now potentially harmful if expressed without care. It carries the weight of your authority, which means it can shut down the creative process of the people who should be making those decisions.</p>

  <p><strong>Your relationship with urgency.</strong> As an IC, urgency was often your friend — moving fast, making quick decisions, shipping before the window closed. As a leader, your urgency can cause your team to make reactive decisions that trade short-term speed for long-term quality. Learning to move urgently while creating space for your team to be thoughtful is a genuinely difficult skill.</p>

  <p><strong>Your tolerance for being in the details.</strong> As an IC, you were in the details all the time. As a leader, spending too much time in the details means not spending enough time on the strategic and organizational work that only you can do. This requires a tolerance for not knowing things that used to be a source of security.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Practices That Build Good Product Leaders</h2>

  <p><strong>Regular 1:1s with genuine intent.</strong> Not status updates. Not project reviews. Conversations about what the PM is learning, what they're struggling with, and what they want to develop. The 1:1 is the primary vehicle for PM development, and it's wasted when it's used for information exchange that could happen in writing.</p>

  <p><strong>Explicit feedback, given promptly.</strong> The most common failure mode of new product leaders is giving vague, delayed, or insufficient feedback. PMs can't develop without honest feedback about what they're doing well and what they need to improve. This feedback needs to be specific ("I noticed that in the roadmap review, you couldn't articulate the business case for the top priority") and timely (within a day or two of the observation, not in a quarterly review).</p>

  <p><strong>Delegating decision-making authority explicitly.</strong> The most important signal of trust you can send to a PM is clear, explicit delegation of decision-making authority. "This is your decision to make. I'll share my perspective if you want it, but I'm not the decision-maker here." PMs who feel they don't have real authority over their product will not develop the decision-making muscle they need to become leaders themselves.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-xl">
    The best product leader I've ever worked for said something I've thought about ever since: "My job is to make my team better than I ever was. If I'm the best PM in this organization, I've failed."
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Navigating the IC-to-leader transition?</h3>
    <p class="text-lg text-muted-foreground mb-6">This transition is hard and it's different for every person. I've been through it and helped others through it. Let's talk about what's making it difficult for you.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Have the conversation</a>
  </div>
`,

"strategic-thinking-senior-pm": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Strategic thinking is one of those capabilities that everyone claims to have and few people can demonstrate. The problem is that "strategic thinking" is used to describe several different cognitive activities — some of them genuinely valuable, some of them just sophisticated-sounding rationalization of decisions already made.
  </p>

  <p>Let me try to be precise about what strategic thinking actually is in the context of senior product management — what it looks like in practice, how it differs from tactical thinking, and how to develop it.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Strategic Thinking Is Not</h2>

  <p>First, the negative definition, because it's easier to identify the imposters:</p>

  <p><strong>Strategic thinking is not using strategy frameworks.</strong> Applying Porter's Five Forces or a SWOT analysis is framework application, not strategic thinking. The frameworks can be useful inputs to strategic thinking. They are not strategic thinking itself.</p>

  <p><strong>Strategic thinking is not long-term thinking.</strong> "Strategic" is often used as a synonym for "long-term" — the implication being that if you're thinking about what will happen in 3 years, you're thinking strategically. You might be. But you can also have very long-term thinking that is not strategic — you're imagining the future without having any insight about how to shape it, or without making any choices that affect it.</p>

  <p><strong>Strategic thinking is not having a big picture view.</strong> Taking a step back and thinking about the broader context is valuable. It's not the same as strategic thinking. Strategic thinking involves making choices within that context — choices that exclude other options and commit resources in a specific direction.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Strategic Thinking Actually Is</h2>

  <p>Strategic thinking, in the product context, is the ability to:</p>

  <p><strong>Identify the leverage point:</strong> Within a complex situation with many moving parts, identify the single variable that, if changed, would produce the most significant improvement in outcomes. Not the most obvious variable — the highest-leverage one.</p>

  <p><strong>Think several moves ahead:</strong> Consider not just the immediate effect of a decision but the chain of effects that follows. If we do X, then Y will likely happen, and then Z. If we don't do X, the alternative chain is A → B → C. Which chain produces better outcomes?</p>

  <p><strong>Hold multiple time horizons simultaneously:</strong> Make decisions that are good in the short term without foreclosing options in the medium term, while building toward the long-term position. This is hard because short-term pressures are always more urgent than long-term ones.</p>

  <p><strong>Recognize what you're actually competing for:</strong> Not just market share, but attention, trust, data, relationships, regulatory position. The product that wins on the metric you're tracking might be losing on the metric that actually determines long-term competitive position.</p>

  <hr class="my-12 border-border/50" />

  <h2>Strategic Thinking in Daily PM Work</h2>

  <p>The mistake most people make about strategic thinking is treating it as something that happens in quarterly strategy sessions. The senior PMs who are most strategically effective apply it in their daily decisions — not in grand strategy documents, but in the texture of their routine choices.</p>

  <h3>In backlog decisions</h3>
  <p>A tactical PM looks at a backlog item and asks: what's the value of this feature? A strategic PM asks: what does this feature signal about where we're going? What capabilities does it build? What does choosing this over the alternatives say about our priorities? What will we not be able to do in 6 months if we invest here now?</p>

  <h3>In stakeholder conversations</h3>
  <p>A tactical PM in a stakeholder conversation is trying to manage the immediate request. A strategic PM is tracking the meta-level question: what does this person's request tell me about the dynamics in this organization? What does the pattern of requests I'm receiving tell me about where the organization's priorities are heading? Where is there misalignment that needs to be surfaced and resolved at a higher level?</p>

  <h3>In product decisions under uncertainty</h3>
  <p>The defining characteristic of strategic thinking in product decisions is a willingness to think about what happens after the decision — not just in the expected case, but in the scenarios where you're wrong. If I build this feature and it doesn't work as expected, what have I lost? What have I learned? What options do I still have? The strategic PM designs for reversibility in high-uncertainty situations and for commitment in high-certainty ones.</p>

  <hr class="my-12 border-border/50" />

  <h2>Developing Strategic Thinking</h2>

  <p>Strategic thinking is a skill, which means it can be developed. Here's what I've found actually works:</p>

  <p><strong>Write strategy documents that require choices.</strong> The act of writing a strategy document forces you to be explicit about what you're choosing and what you're giving up. If your strategy document doesn't include explicit trade-offs — explicit statements about what you're not doing — it's not a strategy. Writing these documents consistently builds the muscle of making explicit choices.</p>

  <p><strong>Study competitive dynamics in depth.</strong> Pick 3-5 companies in adjacent markets and study their strategic decisions over time. What did they optimize for? How did their early choices constrain later options? Where did they get surprised by changes in the competitive landscape? This kind of case study analysis builds your intuition for how strategic choices play out over time.</p>

  <p><strong>Practice second-order thinking deliberately.</strong> For every significant decision, write down three second-order effects — things that will happen as a result of this decision that aren't the intended outcome. This practice gradually makes you more sensitive to unintended consequences.</p>

  <p><strong>Seek out situations with real stakes and genuine uncertainty.</strong> Strategic thinking develops fastest in situations where the decision actually matters and where you don't know the right answer. Comfortable, low-stakes situations don't build strategic capability. Hard, high-uncertainty ones do.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Developing your strategic thinking?</h3>
    <p class="text-lg text-muted-foreground mb-6">I work with senior PMs on strategic capability — specifically the parts that don't show up in books or courses. Let's have a direct conversation.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's talk strategy</a>
  </div>
`,

"long-term-vs-short-term-product-strategy": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Every product team I've ever worked with or advised faces the same tension: the things that would create the most value in three years are not the things that create the most value in the next quarter. And the pressure to produce results in the next quarter is always more immediate than the pressure to be positioned well in three years.
  </p>

  <p>This tension doesn't resolve. It's a permanent feature of product management. What changes is how well you manage it.</p>

  <hr class="my-12 border-border/50" />

  <h2>Why the Tension Is Real</h2>

  <p>Short-term and long-term product strategy are in genuine conflict, not just apparent conflict. Here's why:</p>

  <p><strong>Short-term priorities consume resources that could fund long-term bets.</strong> Every engineering week you spend on the feature that will close a deal this quarter is a week you're not spending on the platform capability that would unlock 10x growth in 2 years. The constraint is real — you have finite capacity.</p>

  <p><strong>Short-term optimizations can undermine long-term architecture.</strong> Building quickly to hit a deadline often means building with more technical debt. Technical debt is a real cost that accrues silently and eventually limits what's possible. A team that consistently optimizes for short-term delivery will find, a few years later, that their product is brittle and their development velocity has collapsed.</p>

  <p><strong>Short-term user choices can constrain long-term design.</strong> Once users are accustomed to an interface, workflow, or capability, changing it has a cost. Early design decisions lock in patterns that become increasingly difficult to change as the user base grows. This means the short-term choice to ship something "good enough" can become a long-term constraint on what's possible.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Frameworks for Managing This Tension</h2>

  <h3>The explicit portfolio allocation</h3>

  <p>The most practical framework I've used: explicitly allocate your engineering capacity across three time horizons, and hold to those allocations even when short-term pressure is high.</p>

  <p>A typical allocation I've used with early-stage product teams:</p>
  <ul>
    <li><strong>60-70%</strong> on current quarter priorities — features and improvements that drive near-term metrics</li>
    <li><strong>20-25%</strong> on horizon 2 (6-18 months) — capabilities that will take time to build but are needed to stay competitive</li>
    <li><strong>10-15%</strong> on horizon 3 (18+ months) — bets on where the market is going that need to start now to be ready in time</li>
  </ul>

  <p>The specific percentages matter less than the principle: a protected allocation for each time horizon. Without the explicit allocation, short-term priorities will consume 100% of capacity by default — because they're always more urgent than long-term ones.</p>

  <h3>The "two-pizza team" for long-term bets</h3>

  <p>Another approach that works well in larger organizations: create a small, protected team working explicitly on long-term product bets. This team is not accountable for quarterly metrics. They're accountable for generating the insights and prototypes that will shape the product's strategy in 2-3 years.</p>

  <p>The risk: this team can become disconnected from the reality of what the market needs, building internally compelling things that don't translate to user value. The mitigation: this team needs to be in regular contact with users and with the broader product team, so their long-term work is grounded in real insights rather than speculation.</p>

  <h3>The "tax" model</h3>

  <p>Some organizations handle this through a "tax" on short-term work: for every significant user-facing feature shipped, a proportional investment is made in long-term infrastructure or capability. The tax creates a forcing function that ensures long-term investment happens alongside short-term delivery, rather than being perpetually deferred.</p>

  <p>This works best in cultures with strong engineering leadership who can maintain the tax discipline even when business pressure is high. Without that discipline, the tax gets waived in every crisis — which means it gets waived constantly, because there's always a crisis.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Make the Case for Long-Term Investment</h2>

  <p>The biggest practical challenge with long-term product strategy is making the case for it in organizations where quarterly results dominate the conversation. Here's what I've found works:</p>

  <p><strong>Make the cost of not investing explicit.</strong> Long-term investments are often justified by their benefits. But benefits that are 18 months away are easy to discount. What's harder to discount are the costs of not investing now — the competitive capabilities you'll lack, the technical constraints you'll operate under, the user experiences you won't be able to offer. Make these costs vivid and specific.</p>

  <p><strong>Connect long-term work to short-term signals.</strong> If your platform work will eventually enable faster feature development, show how it's already reducing cycle time. If your AI capability will eventually power personalization, show the early signals of what personalization produces. The ability to connect long-term investments to near-term evidence is what sustains organizational support for those investments.</p>

  <p><strong>Create milestones for long-term bets.</strong> Long-term projects lose organizational support when they're invisible for quarters at a time. Create intermediate milestones that demonstrate progress — not in terms of user features, but in terms of capabilities built and hypotheses validated. Regular visibility maintains support.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Struggling to balance horizons?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is one of the most common challenges I see in growing product organizations. I'm happy to talk through what's pulling your balance off and what might help.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's figure it out</a>
  </div>
`,

"decision-making-frameworks-product-leaders": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The best product decision I ever made took about 20 minutes. I had all the relevant information, the trade-offs were clear, and my judgment about the right path was strong. I made the call and moved on.
  </p>

  <p>The worst product decision I ever made also took about 20 minutes — but for a different reason. I didn't have sufficient information, the trade-offs were poorly understood, and my judgment was overconfident. I made a call that felt clear and wasn't.</p>

  <p>Decision-making quality is not correlated with how quickly you decide. It's correlated with how well you understand what you're deciding and what's at stake. The frameworks I use are not shortcuts to faster decisions — they're structures that help me make better decisions, even when they take more time.</p>

  <hr class="my-12 border-border/50" />

  <h2>The First Frame: Reversibility</h2>

  <p>The single most important question I ask before any significant product decision is: how reversible is this? Jeff Bezos articulated this distinction at Amazon — Type 1 decisions (irreversible, high-consequence) require much more rigor and deliberation than Type 2 decisions (reversible, lower-consequence).</p>

  <p>The mistake most PMs make is applying Type 1 rigor to Type 2 decisions (causing decision paralysis) or applying Type 2 speed to Type 1 decisions (causing expensive mistakes).</p>

  <p>Type 1 product decisions: major pricing changes, deprecation of a core feature, fundamental architecture choices, major UX paradigm shifts. These decisions affect many users, are hard to undo, and require the highest level of evidence, deliberation, and stakeholder alignment.</p>

  <p>Type 2 product decisions: most A/B tests, copy changes, UI refinements, feature additions to a single workflow. These can be reversed quickly if they don't work. They should be made quickly, with adequate but not exhaustive deliberation.</p>

  <p>Calibrating this correctly — knowing which bucket a decision falls in before you decide how much process to apply — is one of the highest-leverage capabilities in product decision-making.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Information Completeness Framework</h2>

  <p>For any significant decision, I explicitly assess information completeness across three dimensions:</p>

  <p><strong>User insight:</strong> Do I understand what users need well enough to predict how they'll respond to this decision? Am I drawing on real data and real conversations, or on assumptions that feel plausible but haven't been tested?</p>

  <p><strong>Market context:</strong> Do I understand what competitors are doing, what the regulatory environment permits, and what market dynamics are shaping user expectations? Or am I making this decision in a vacuum?</p>

  <p><strong>Internal constraints:</strong> Do I understand the technical feasibility, the resource requirements, the opportunity cost, and the organizational implications of this decision? Or am I underestimating what it takes to execute?</p>

  <p>For each dimension, I rate my confidence on a simple scale: high (I have real evidence), medium (I have reasonable signals), low (I'm extrapolating with thin evidence). If any dimension is low-confidence, I either gather more information before deciding or I make the decision with explicit acknowledgment of what I don't know and build in mechanisms to detect if I'm wrong.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Pre-Mortem</h2>

  <p>One of the most valuable decision-making practices I know: before making a major decision, imagine that you've made it, implemented it, and it has failed spectacularly. Now write down all the reasons it failed.</p>

  <p>This practice — popularized by Gary Klein's research on "prospective hindsight" — consistently reveals risks and failure modes that forward-looking analysis misses. When you're evaluating a decision, you're (often unconsciously) constructing the case for it. When you're imagining failure, you're freed from that bias and can see the problems more clearly.</p>

  <p>I do this as a group exercise with my team before major product launches. The conversation is almost always humbling — it reveals things we hadn't adequately addressed, and it forces us to either fix those things or acknowledge them explicitly as known risks we're accepting.</p>

  <hr class="my-12 border-border/50" />

  <h2>The "Write It Down" Test</h2>

  <p>For any decision I feel uncertain about, I require myself to write down: the decision I'm making, the reasoning behind it, what I expect to happen, how I'll know if I'm right, and what I'll do if I'm wrong.</p>

  <p>This sounds laborious. It takes maybe 20-30 minutes for most decisions. And it has saved me from more bad decisions than any other single practice. The act of writing forces precision in a way that thinking doesn't.</p>

  <p>If I can't write down the reasoning clearly, that's a signal that the reasoning isn't actually as clear as it felt. If I can't articulate how I'll know if I'm right, that's a signal that the decision might not be testable — which means I might never learn from it.</p>

  <h2>Deciding When You Don't Have Enough Information</h2>

  <p>Sometimes you have to decide without sufficient information — because waiting would be more costly than deciding with uncertainty. In these situations:</p>

  <p><strong>Be explicit about what you don't know.</strong> Don't paper over the uncertainty with confident language. Name the uncertainties. "I'm making this call with high confidence about A and B, but medium confidence about C. If C plays out differently than I expect, here's what we'll do."</p>

  <p><strong>Build in early detection.</strong> Design the implementation to surface early signals about whether the decision was right. If you're launching a feature, what's the earliest metric you'll see that tells you whether users are engaging with it? If you're making a pricing change, what's the first signal of whether it's affecting conversion?</p>

  <p><strong>Reduce the blast radius.</strong> If you can, make the decision in a way that limits its scope until you've validated it. Launch to a segment before launching broadly. Run a pilot before rolling out. The ability to limit the consequences of a decision that turns out to be wrong is itself a form of decision quality.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Working through a hard decision?</h3>
    <p class="text-lg text-muted-foreground mb-6">Sometimes an outside perspective is exactly what a difficult decision needs. I'm happy to think through it with you.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's think it through</a>
  </div>
`,

};

export function getPmStrategyContent(slug: string): string | undefined {
  return PM_STRATEGY_CONTENT[slug];
}
