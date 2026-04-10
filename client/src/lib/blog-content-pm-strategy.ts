export const PM_STRATEGY_CONTENT: Record<string, string> = {

"outcome-driven-roadmaps": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    A feature roadmap is a list of bets. An outcome roadmap is a set of commitments to what changes for users. Most product teams are running on the first type while believing they have the second. The cost of this confusion is enormous — and almost entirely hidden until it's too late.
  </p>

  <p>In 2019, I inherited a roadmap that was 127 items long. I'm not exaggerating. There was a Jira backlog that had been growing for three years, a Confluence page called "Product Roadmap" that hadn't been updated since Q4 of the previous year, and a slide deck called "2019 Priorities" that the previous PM had put together in January — and that bore no relationship to what the team was actually working on.</p>

  <p>The engineering lead had stopped looking at any of them. He just waited for the PM to come to sprint planning and tell him what was important this week. Three months of this and nothing meaningful shipped. The team was "in progress" on seventeen different things simultaneously. Everyone was busy. Nothing was moving.</p>

  <p>I deleted all three artifacts. I told the team we were starting over. Not because the ideas were bad — many of them were fine — but because a roadmap that nobody uses isn't a roadmap. It's documentation of good intentions.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Fundamental Problem with Feature Roadmaps</h2>

  <p>Feature roadmaps answer the question: what will we build? They're lists of functionality, organized by time. They look organized and plannable. They give stakeholders a clear picture of what's coming. They make the team feel like they have a plan.</p>

  <p>But a roadmap is not a construction schedule. It's a strategy document. It should answer: what outcomes are we trying to create, and what's our current theory about how to create them? A feature list doesn't answer that. A feature list is the output of a strategy, not the strategy itself. When you skip directly to features, you've skipped the part where you figure out whether those features will actually change anything.</p>

  <p>The consequences are predictable: teams ship on time and miss on impact. Features get launched to muted response because the team was answering "what should we build" when they should have been answering "what change do we need to see in user behavior, and what's the most efficient way to create that change?"</p>

  <p>I've reviewed post-mortems from teams that delivered everything on their roadmap and still missed their business goals. Their roadmap was accurate. Their strategy was wrong. The roadmap gave them no way to see that, because the roadmap didn't contain any strategy.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Outcome-Driven Roadmaps Look Like</h2>

  <p>An outcome-driven roadmap organizes work around the changes you're trying to create in the world, not around the features you're going to ship. The structure is different. The conversations it creates are different. The decisions it enables are different.</p>

  <h3>Level 1: The goal (what changes in the world)</h3>
  <p>This is the outcome you're pursuing. Not "launch onboarding redesign" — that's a feature. The outcome is something measurable that changes for the user or the business. "New users reach their first value moment in under 5 minutes" is an outcome. "Enterprise customers can manage access permissions without a support ticket" is an outcome. Outcomes are measurable, user-relevant, and independent of any specific implementation.</p>

  <h3>Level 2: The hypothesis (why we think this approach will work)</h3>
  <p>For each outcome, you have a current best theory about how to create it. "We believe that the main reason new users don't reach their first value moment quickly is that the initial data setup takes too long, so we're going to streamline the import flow." This is a hypothesis, not a fact. It's specific enough to be testable and clear enough that the team understands the reasoning. When the hypothesis is wrong, you update it — and you update the roadmap accordingly.</p>

  <h3>Level 3: The experiments (what we're trying right now)</h3>
  <p>These are the actual features, experiments, and initiatives you're running to test your hypotheses. They're clearly linked to the hypothesis they're testing. When an experiment succeeds or fails, the link back to the hypothesis tells you what to do next — double down or try a different approach.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Conversation This Changes</h2>

  <p>When you show stakeholders a feature roadmap, the conversation is about the features. Do they agree with the priority? Is the feature big enough? Could it be expanded? This conversation is exhausting, because every stakeholder has opinions about features.</p>

  <p>When you show stakeholders an outcome roadmap, the conversation is about the outcomes. Do we agree that this is the most important outcome to pursue? Is this hypothesis our best current theory about how to create it? This is a much more productive conversation, because outcomes connect to business goals in a way that features don't.</p>

  <p>I've watched this play out in real rooms. A head of sales who was constantly pushing for specific features — "we're losing deals without X, put X on the roadmap" — became a genuinely collaborative partner when the conversation shifted to outcomes. Because the head of sales actually cares about closing deals, not about features. When we talked about "reducing time-to-value for enterprise prospects," she had useful insight: the specific friction points she was seeing in sales cycles. That insight improved our hypothesis. It never would have emerged from a feature conversation.</p>

  <hr class="my-12 border-border/50" />

  <h2>Making the Shift: Practical First Steps</h2>

  <p>If your current roadmap is feature-first, here's how to begin shifting it this week:</p>

  <p>First, take your top 5 roadmap items and ask: what user or business outcome is each designed to create? If you can't answer clearly, that's your first problem. The team doesn't know why they're building these things. Fix that before anything else.</p>

  <p>Second, once you have the outcomes, check whether the features you've planned are really the best way to create those outcomes. You might find that a much simpler intervention — a change to an existing flow, better copy, a different default setting — would create the same outcome faster and at lower cost.</p>

  <p>Third, make your hypotheses explicit and time-bound. "We believe X will create outcome Y, and we'll know by date Z whether this hypothesis is correct." This practice makes the roadmap a learning document rather than just a commitment document.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-muted-foreground text-xl leading-relaxed">
    "A roadmap that commits you to features is a cage. A roadmap that commits you to outcomes is a compass. Only one of them helps you navigate."
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Is your roadmap driving the right conversations?</h3>
    <p class="text-muted-foreground mb-4">I've helped product teams make the shift from feature roadmaps to outcome roadmaps — and the difference in team alignment and business impact is significant. Let's talk about your roadmap.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"how-to-build-winning-product-strategy": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Most "product strategies" are vision statements with a slide deck. A real product strategy is a set of choices — about what you will and won't do — that are specific enough to create genuine trade-offs. Here's what that actually looks like in practice.
  </p>

  <p>The clearest description of strategy I've encountered came from Roger Martin's "Playing to Win": strategy is an integrated cascade of choices about where to play and how to win. Not aspirations. Choices. And choices only count as choices if they exclude something. If your strategy is "do everything well," you don't have a strategy — you have a hope.</p>

  <p>I've reviewed product strategies from dozens of companies at various stages. The most common failure mode: documents that sound strategic but don't make any actual choices. They commit to being "the best product in the market" without defining which market. They say they'll "focus on enterprise while not ignoring SMB." They promise to "prioritize retention without sacrificing growth." Every one of those statements is a failure to choose.</p>

  <p>Real strategy is uncomfortable. It requires saying explicitly: we will do this, and not that. Serve these users, not those. Compete here, not there. The discomfort of those exclusions is the reason most strategies avoid them. And it's exactly why most strategies are useless in practice.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Five Choices That Define a Product Strategy</h2>

  <p>When I help teams build product strategy, I organize it around five decisions. Each one is a real choice with real exclusions. If you can't make each of these choices clearly, you don't have a strategy yet — you have material to work with.</p>

  <h3>1. Who is the user you're optimizing for?</h3>

  <p>Not your entire user base. Not "everyone who might conceivably use our product." The specific user whose success you will prioritize when you have to make trade-offs. This is the hardest choice for most teams because it feels like abandoning users — but the alternative is building a mediocre product for everyone instead of a great product for someone.</p>

  <p>Figma's early strategy was clear: designers. Not business users. Not non-technical stakeholders. Designers. Every decision was made through that lens. The collaboration features they built, the pricing model they chose, the integrations they prioritized — all of it optimized for designers. Other users could and did use Figma, but they weren't the primary optimization target. This clarity is a significant reason Figma took market share from Sketch and InVision.</p>

  <h3>2. What specific problem are you solving?</h3>

  <p>Not a general problem category — a specific one. "We help teams collaborate" is not a problem. "We eliminate the round-trip between designers and developers caused by handoff friction" is a problem. Specific enough that you can measure whether you're solving it. Narrow enough that you can actually be the best solution for it.</p>

  <h3>3. Where do you compete and where do you defer?</h3>

  <p>This is your market scope choice. Which customer segments, geographies, use cases, and price points are you actively pursuing? Which are you deliberately leaving to others — at least for now? This choice determines where you invest in sales, marketing, product, and support.</p>

  <h3>4. What is your moat — your source of sustainable advantage?</h3>

  <p>Why will users choose you over alternatives in two years? Not because your product is better today — because you're building something that compounds over time. Network effects. Data advantages. Switching costs that increase as users invest more. Brand that resonates deeply with a specific segment. If you can't describe your moat clearly, you're probably competing on features — which is a temporary and exhausting way to compete.</p>

  <h3>5. What capabilities do you need to build, and what must you do first?</h3>

  <p>Strategy is not just about what you'll do but in what order. The sequencing of capability building often determines whether a strategy succeeds or fails. A company that tries to serve enterprise before it has reliable security and compliance tooling will fail. A consumer product that scales marketing before it has retention will fail. What's the first domino? What has to be true before the rest of the strategy can work?</p>

  <hr class="my-12 border-border/50" />

  <h2>The Process: Building Strategy from Evidence</h2>

  <p>Strategy doesn't emerge from a two-day offsite with sticky notes. It emerges from rigorous thinking about reality — your users' reality, your competitive reality, and your organizational reality — combined with the courage to make genuine choices.</p>

  <p><strong>Start with honest diagnosis.</strong> Before strategizing about the future, be clear about the present. Who are your current highest-value users? What do they actually use the product for? Where does the product work beautifully and where does it break down? What competitive threats are real versus theoretical? Honest diagnosis of the current state is the foundation of useful strategy.</p>

  <p><strong>Identify the strategic question.</strong> Usually there's one key question that determines which direction makes sense: Should we go upmarket to enterprise or stay in SMB? Should we expand internationally now or consolidate domestically? Should we build adjacent features or deepen the core? Identifying the actual strategic question is half the work.</p>

  <p><strong>Generate options, evaluate them rigorously.</strong> For each direction, what would have to be true for this to be the right choice? What evidence do you have? What evidence would you need? Which option creates the most defensible position over three years?</p>

  <p><strong>Choose, document, and communicate.</strong> Make the choice. Write it down with the reasoning. Share it widely enough that the team can make daily decisions that are consistent with it. A strategy that lives only in the PM's head is not a strategy — it's a personal conviction.</p>

  <hr class="my-12 border-border/50" />

  <h2>When Strategy Goes Wrong</h2>

  <p><strong>Strategy by consensus:</strong> When every stakeholder has veto power over every choice, you end up with a strategy that offends no one and excludes nothing. Good strategy requires someone with enough organizational credibility to make choices that some people won't like.</p>

  <p><strong>Strategy as aspiration:</strong> "We will be the leading platform for X." This is a destination, not a route. Strategy describes the choices you'll make to reach the destination, not just the destination itself.</p>

  <p><strong>Strategy as annual event:</strong> Strategy written once a year and not revisited until the next annual cycle is strategy divorced from reality. Markets move. The strategy should be a living document that gets updated when evidence suggests it should — not when the calendar says it should.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Working on product strategy?</h3>
    <p class="text-muted-foreground mb-4">I've helped founders and product leaders build strategies that make real choices and create real clarity. If you're at an inflection point and need to think through the strategic options, let's connect.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"prioritization-frameworks-every-pm": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    RICE. ICE. MoSCoW. Kano. Weighted scoring. Story points. Every PM has a framework. Almost nobody has a prioritization practice that actually works. Here's what prioritization actually requires — and why frameworks are only the beginning.
  </p>

  <p>The first time I ran a proper RICE scoring session with a team, I was proud of how organized it felt. We assigned reach, impact, confidence, and effort scores to every item in the backlog. We calculated the numbers. We ranked them. We had a clean, prioritized list that we could present to stakeholders with confidence.</p>

  <p>Then the head of sales came to the next planning meeting and asked why the feature her enterprise customer needed wasn't at the top. I showed her the RICE score. She was unimpressed. "The scores are based on our assumptions," she said. "Our assumptions about enterprise customers are wrong because we've never actually talked to enterprise customers in depth."</p>

  <p>She was right. The RICE score was a precise number derived from imprecise inputs. Precision is not the same as accuracy. And the false confidence of a scored list can be more dangerous than having no framework at all — because it stops people from questioning the underlying assumptions.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where the Frameworks Are Actually Useful</h2>

  <p><strong>RICE</strong> (Reach × Impact × Confidence ÷ Effort) is useful for forcing explicit consideration of four dimensions that PMs often weight implicitly. The discipline of assigning rough numbers creates useful conversations — even if the numbers themselves are approximate. Where it breaks down: it treats all four dimensions as equally important and can produce misleading results when the underlying estimates diverge widely from reality.</p>

  <p><strong>ICE</strong> (Impact × Confidence × Ease) is RICE's simpler cousin. Useful when you need a quick, rough cut at prioritization. Dangerous when used as a substitute for deeper analysis on consequential decisions.</p>

  <p><strong>MoSCoW</strong> (Must Have, Should Have, Could Have, Won't Have) is useful for aligning teams on what's essential versus nice-to-have, particularly in project contexts with a fixed deadline. Think of it as a conversation starter rather than a prioritization system.</p>

  <p><strong>Kano model</strong> is the most sophisticated of the standard frameworks. It distinguishes between basic needs (hygiene factors that must exist), performance needs (more is better), and delighters (unexpected features that create disproportionate satisfaction). Genuinely useful for thinking about user psychology, but requires actual user research to apply correctly — not just PM intuition.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Real Questions That Determine Priority</h2>

  <p>Real prioritization requires answering four questions before any framework enters the picture:</p>

  <h3>What is the strategic context right now?</h3>
  <p>What are we trying to accomplish this quarter? What does success look like for the business and for the user? If you don't have clear answers, any prioritization you do is disconnected from strategy. You're optimizing locally without knowing what the global objective is.</p>

  <h3>What are we optimizing for in this planning cycle?</h3>
  <p>Prioritization always involves a trade-off, and different objectives create different rankings. The same backlog looks completely different when you're optimizing for new user acquisition versus retention versus revenue versus engineering health. Before scoring anything, be explicit about the current optimization target.</p>

  <h3>What do we know, and what are we assuming?</h3>
  <p>Most prioritization exercises produce rankings that are primarily a function of assumptions. The discipline of separating knowledge from assumption — and being honest about how much of the scoring is informed judgment versus genuine evidence — changes how confident you should be in the output.</p>

  <h3>What are the dependencies and sequencing constraints?</h3>
  <p>The highest-priority item might be blocked by infrastructure work that needs to happen first. The second-highest item might unlock three others. Prioritization divorced from sequencing often produces roadmaps that can't actually be executed in the order they're listed.</p>

  <hr class="my-12 border-border/50" />

  <h2>When to Throw the Framework Out</h2>

  <p>There are situations where frameworks actively mislead. Here's when to trust judgment over scores:</p>

  <p><strong>When the decision is about direction, not optimization.</strong> Should we build for enterprise or SMB? Should we invest in a new product line or deepen the core product? These are strategic questions. No scoring system can answer them. They require strategic judgment and organizational alignment.</p>

  <p><strong>When the stakes are asymmetric.</strong> A feature that has a small chance of being a breakout success versus many features that are safe bets — this is a portfolio question, not a scoring question. Frameworks treat all risks as symmetric. Real product bets often involve asymmetric upside.</p>

  <p><strong>When the team already knows what's right.</strong> Sometimes the most important thing a prioritization session produces is honest alignment around what everyone already believes. If the team thinks X is the right priority and the RICE score says Y, examine your RICE scores — don't override the team's judgment.</p>

  <p>The best prioritization I've seen combines frameworks with something no framework can replace: a clear strategic context, an honest assessment of uncertainty, and the courage to make a real choice instead of a hedged list.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Prioritization not working?</h3>
    <p class="text-muted-foreground mb-4">The most common prioritization problem isn't the wrong framework — it's the wrong starting conditions. If your team constantly re-prioritizes or ships things that don't move the needle, the problem is upstream. Let's find it.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"setting-strong-product-vision": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    A product vision that nobody can remember three months after it's written is not a vision. It's a slide. Here's what makes a vision actually work — and why most of them don't.
  </p>

  <p>I've written product visions I'm not proud of. One of them was a beautifully crafted paragraph about "empowering users to reach their full potential." It was four years ago. I couldn't tell you anything specific about what it meant in practice or what we built to achieve it. The team remembered the phrase for about two weeks, used it in one all-hands presentation, and then went back to making decisions based on whatever was loudest in the room that week.</p>

  <p>A vision that doesn't change decisions isn't doing its job. A vision exists to create alignment and to guide difficult choices — to give teams a way to say "that fits our vision" or "that doesn't" when the pressure to go in multiple directions is highest. If your vision can't do that work, you need a different vision.</p>

  <hr class="my-12 border-border/50" />

  <h2>What a Vision That Works Looks Like</h2>

  <h3>It describes a specific future state, not a vague aspiration</h3>

  <p>The best product visions I've encountered describe a specific, observable future: what the world looks like for a specific user when you've succeeded. Not "we will be the best platform for X" — that's a market position statement. A vision looks like: "A small business owner in Pune can get a business loan approved in the same time it takes to order lunch." Specific. Concrete. Tied to a real human experience.</p>

  <p>This specificity matters because it creates a test. When you're deciding whether to build a feature, you can ask: does this move the world toward the state we described? If yes, it fits the vision. If no, you need to make a deliberate choice about whether to pursue it anyway.</p>

  <h3>It's ambitious enough to be inspiring but grounded enough to be believable</h3>

  <p>A vision that's too conservative becomes a plan. A vision that's too ambitious becomes science fiction. The right level: possible within your planning horizon if everything goes reasonably well, but not guaranteed without significant work and smart decisions.</p>

  <h3>It's relevant to everyone on the team, not just leadership</h3>

  <p>The designer should be able to connect their daily work to the vision. The engineer should be able to evaluate architectural decisions against it. The support rep should feel the vision in the feedback they give customers. If the vision only makes sense at the VP level, it's not a team vision — it's a leadership talking point.</p>

  <hr class="my-12 border-border/50" />

  <h2>Why Most Visions Fail in Practice</h2>

  <p>The vision-to-execution gap is real, and it's almost always the PM's fault. Not because the vision is bad, but because the PM treats it as a launch artifact — something to announce and then move on from — rather than as an ongoing practice.</p>

  <p>A vision only stays alive if it's invoked regularly in actual decisions. When reviewing a feature, ask: does this bring us closer to the vision? When writing a quarterly strategy, connect the priorities explicitly to the vision. When onboarding a new team member, walk them through the vision before explaining the roadmap. The vision should be the first thing new team members learn and the lens through which they understand everything else.</p>

  <p>Teams that have a living vision — genuinely used in decision-making — make faster decisions with less political friction. Because the hard questions aren't "what does the PM think" or "what does leadership want" — they're "what does the vision say we should do here?" The vision absorbs the organizational energy that would otherwise go into internal debate.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Build One in Practice</h2>

  <p>Start by collecting stories, not words. What are the moments you've heard from users that most viscerally captured the problem you're solving? The CEO's memory of the customer conversation that changed how they thought about the product? The support ticket that made everyone cry? The user interview where someone described their current situation in a way that made the whole team realize how much better it could be?</p>

  <p>Build the vision from those stories. A vision rooted in specific human experiences is more durable than one built from abstract business language. It's harder to forget. It's easier to feel. And it's more likely to make a designer think twice before cutting a step that matters to a real person.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Building or refreshing your product vision?</h3>
    <p class="text-muted-foreground mb-4">I've facilitated product vision work with teams at seed through growth stage. A good vision session surfaces the strategic clarity that's usually already present in the team — it just needs structure to emerge. Let's build yours.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"product-leadership-vs-management": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    At some point in every senior PM's career, the job changes from managing the product to leading the people who manage the product. The transition is often announced. It's rarely prepared for. And the skills that made you great as an individual contributor almost all transfer badly.
  </p>

  <p>The conversation that changed how I thought about this happened in a coffee shop in 2021. I was sitting with a VP of Product who had recently been promoted to CPO. I asked her what was different about her new role.</p>

  <p>She said: "I used to know what was happening. I had my hand on everything. I knew every user complaint, every metric that was moving, every decision my team was making. I was good at that. When I became VP, I tried to stay that close to everything. It almost destroyed my relationship with every PM who reported to me."</p>

  <p>She paused. "The shift is from knowing to enabling. It's not less work. It's completely different work."</p>

  <p>That framing has stayed with me. The individual PM's job is to know the product deeply and make good decisions about it. The leader's job is to create conditions where a team of PMs can each know their products deeply and make decisions — better decisions than you would make if you were doing it yourself.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Signals You're Ready to Lead</h2>

  <p>The transition to product leadership usually happens before you feel ready. Here are the signals that you're ready, whether or not it feels that way:</p>

  <p><strong>You're a better editor than author.</strong> You can read a PRD and make it significantly better in 20 minutes of comments, faster than you could write one yourself. You've developed pattern recognition for PM work quality that lets you accelerate others.</p>

  <p><strong>You think about teams more than features.</strong> You notice how the team is functioning — who's energized, who's stuck, where collaboration is breaking down — as much as you notice what's being built. Team health is starting to feel like a product problem you want to solve.</p>

  <p><strong>You're frustrated by individual contributor constraints.</strong> There are things you want to change that require organizational authority you don't have. You want to fix how discovery works across teams, or how strategy connects to execution. These systemic improvements require positional authority.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Actually Changes When You Lead</h2>

  <p><strong>Your output becomes your team's output.</strong> You're not valued for individual contributions. You're valued for what the team accomplishes. This sounds obvious but is psychologically difficult for high performers who've built their identity around personal excellence.</p>

  <p><strong>Relationships become the work.</strong> As a PM, relationships with engineering and design are tools that help you do the job. As a product leader, relationships with your PM team, with other VPs, and with the CEO are the job itself. Your ability to create clarity, build trust, and navigate conflict at the leadership level determines your effectiveness more than any individual product decision.</p>

  <p><strong>You make fewer decisions but they're bigger.</strong> The individual PM makes 20 small decisions a day. The product leader makes 2-3 significant decisions a week. Learning to reserve your decision-making energy for genuinely high-leverage moments — and not wasting it on things your team should decide — is one of the hardest habits to build.</p>

  <p><strong>Hiring becomes your most important product decision.</strong> The team you build determines the ceiling of what's possible. A product leader who is excellent at product but mediocre at hiring will always be rate-limited by team quality. Learning to hire well — not just for skills but for the combination of judgment, drive, and team-fit that produces exceptional PMs — is the most leveraged investment a product leader makes.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Making the transition to product leadership?</h3>
    <p class="text-muted-foreground mb-4">The shift from individual contributor to leader is one of the biggest transitions in a PM's career. I've made it and helped others make it. If you're navigating this, let's talk about the specific challenges in your situation.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"strategic-thinking-senior-pm": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Strategic thinking is the most cited quality in senior PM promotions — and the most vague requirement in every job description. Here's what it actually means, what it looks like in practice, and how to develop it deliberately.
  </p>

  <p>The most useful definition of strategic thinking I've encountered came from a CPO who told me: "Strategic thinking is the ability to see the current moment in the context of a longer story — and to act now in ways that make the future story better."</p>

  <p>That definition is useful because it's specific. Strategic thinking isn't big-picture thinking in the sense of ignoring details. It's the ability to hold the present and the future simultaneously, to make near-term decisions with awareness of their long-term implications, and to resist the very human instinct to optimize for the immediate at the expense of the important.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Strategic Thinking Looks Like Day-to-Day</h2>

  <p>Strategic thinking isn't reserved for quarterly planning sessions. It shows up — or fails to show up — in daily decisions.</p>

  <p>When engineering asks whether to add a quick hack or do it properly, the strategic PM considers not just the sprint but the twelve months of maintenance cost that follow. When sales asks for a custom feature for one enterprise customer, the strategic PM asks whether that feature is part of a pattern indicating a segment opportunity — or a one-off that will create platform debt. When a competitor launches something new, the strategic PM doesn't react immediately — they think about what the move signals about the competitor's priorities and what response, if any, is appropriate.</p>

  <p>In each of these moments, the strategic PM is asking: what's the 3-year implication of this 3-day decision? Not paralyzed by it — but informed by it.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Three Moves of Strategic Thinking</h2>

  <h3>Move 1: Zoom out before zooming in</h3>
  <p>Before engaging with the specifics of any decision, take a moment to place it in context. What's the bigger picture? What direction is the product supposed to be moving? What does this decision look like from 12 months out? This habit of zooming out before zooming in takes 60 seconds and improves the quality of thousands of decisions over a career.</p>

  <h3>Move 2: Ask what would have to be true</h3>
  <p>Rather than debating options based on current beliefs, ask: what would have to be true for each option to be the right choice? This reframe shifts the conversation from opinion-based to evidence-based. You might find that the key assumptions that would justify one option are clearly wrong — or that both options rest on assumptions you haven't tested.</p>

  <h3>Move 3: Name the real trade-off explicitly</h3>
  <p>Every significant product decision involves a trade-off. Strategic thinkers name it explicitly instead of pretending it doesn't exist. "We can build this for speed or build it for quality — here's what each choice costs us." Naming trade-offs makes them manageable. Hiding them makes them land as surprises.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Develop Strategic Thinking</h2>

  <p>The practice that's done more for my strategic thinking than any book or course: weekly writing. Every Friday, I write one paragraph that answers: what was the most consequential decision made this week, and what will it look like in 12 months? Over time, this practice builds pattern recognition for consequential versus non-consequential decisions — and sharpens the instinct for long-term implications.</p>

  <p>The second practice: deliberate exposure to adjacent domains. Strategic thinking requires understanding context, and context comes from breadth. Read about your industry's economics. Understand your competitors' business models. Follow the investors who are backing companies in your space. The strategic PM is better-read than the average PM — not just in product management, but in the world that surrounds the product.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Developing strategic thinking in your PM team?</h3>
    <p class="text-muted-foreground mb-4">Strategic thinking is learnable, but it requires the right environment and feedback loops. I work with senior PMs and product leaders to develop this capability. Let's talk about what that looks like.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"long-term-vs-short-term-product-strategy": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Every product team lives under two competing pressures: deliver results now, and build a defensible position for the future. Managing both simultaneously — without sacrificing one entirely for the other — is the core challenge of product strategy.
  </p>

  <p>There's a pattern I've watched play out multiple times in product teams. The company faces pressure to show quarterly results. The product team focuses exclusively on things that move metrics in the next 90 days. Twelve months later, the product has shipped a lot but built very little. The technical architecture is messier. The user experience is more fragmented. The team is exhausted. And the product isn't more defensible than it was a year ago — just slightly more feature-complete.</p>

  <p>This is the short-term trap. Easy to fall into, because the pressure to ship is real and immediate. The consequences of failing to ship are visible right now. The consequences of not building long-term foundations are delayed and invisible — until suddenly they're catastrophically not.</p>

  <hr class="my-12 border-border/50" />

  <h2>Understanding the Two Timescales</h2>

  <h3>The short term: 0–6 months</h3>
  <p>Short-term product strategy is about delivering value that users experience and that the business can measure quickly. It's tactical — you're working within existing constraints of architecture, team capacity, and market position. Short-term wins are essential because they fund the long-term work and provide the evidence base for larger strategic bets. Teams that never ship never learn. Quarterly metrics matter.</p>

  <h3>The long term: 12–36 months</h3>
  <p>Long-term strategy is about positioning. Where do you want to be in three years? What capabilities, network effects, data advantages, or brand position will make you hard to displace? What architectural decisions today will limit or enable what you can build in 18 months? Long-term thinking is inherently speculative — you're making bets about the future state of your market, your users, and your capabilities. That's fine. The bets just need to be deliberate.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Practice of Holding Both Timescales</h2>

  <p>The solution isn't to balance short-term and long-term thinking. It's to make them explicitly separate workstreams with different rhythms, different success metrics, and different conversations.</p>

  <p>In practice: every product team should have a weekly or sprint-level cadence focused on near-term delivery — what's shipping, what's blocked, what do we learn from this week's data. And every product team should have a monthly or quarterly cadence focused on the longer arc — are we moving toward our three-year position? Is the architecture evolving in the right direction? Are we building capabilities or just shipping features?</p>

  <p>The most important thing: assign accountability for both. Someone needs to be thinking about the long term, and that work needs to be protected from constant short-term pressure. In healthy teams, this is the PM's job — but it requires explicit protection and senior organizational cover to actually happen.</p>

  <p>One practical technique I've used: maintain a "long-term health" section in every quarterly strategy document. Just three questions: What did we do this quarter that improves our three-year position? What did we do that compromised it? What do we need to change next quarter to rebalance? Making this visible and recurring creates accountability for long-term thinking in the same way quarterly OKRs create accountability for short-term results.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-muted-foreground text-xl leading-relaxed">
    "Short-term thinking without long-term context produces features. Long-term thinking without short-term delivery produces plans. You need both, running in parallel, in separate conversations."
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Struggling with short-term pressure vs. long-term vision?</h3>
    <p class="text-muted-foreground mb-4">This tension is one of the defining challenges of product leadership. I've helped teams create the structures and practices that make it manageable. Let's talk about what's happening in your organization.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"decision-making-frameworks-product-leaders": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The quality of your decisions is your most important output as a PM. Not the features you ship or the OKRs you write — the quality of the judgments you make under uncertainty, with incomplete information, while smart people disagree. Here's how to make those judgments better.
  </p>

  <p>The most important product decision I ever made was also the most uncomfortable. We had a feature that had been in development for four months, was three weeks from launch, and that I had been championing internally for most of that time. Then new data came in that strongly suggested we were solving the wrong problem. The users we thought would love it weren't our future — a different segment was.</p>

  <p>I killed the feature. After four months of development. Three weeks before launch. With the engineering team looking at me like I'd lost my mind.</p>

  <p>It was the right call. And it was one of the hardest calls I've made — not because the analysis was hard, but because of the social and political cost of being wrong about something I'd been publicly confident about. The decision-making framework I needed wasn't RICE or a prioritization matrix. It was the courage to update beliefs when evidence changed — and the organizational credibility to execute the change without destroying team trust.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Six Decision Types Every PM Faces</h2>

  <p>Before applying any framework, identify what type of decision you're making. Different types require different approaches.</p>

  <p><strong>Reversible vs. irreversible.</strong> Amazon's famous "two-way door" distinction. Reversible decisions should be made quickly, with less analysis, by whoever is closest to the situation. Irreversible decisions — architecture choices, pricing models, major product pivots — deserve more rigor, more stakeholders, and slower deliberation.</p>

  <p><strong>Tactical vs. strategic.</strong> Tactical decisions optimize within existing constraints. Strategic decisions change the constraints. Most PMs are better at tactical decisions and systematically under-invest in the mental energy required for strategic ones.</p>

  <p><strong>Data-rich vs. data-poor.</strong> When you have good data, use it. When you don't, be explicit about how much of your decision is evidence versus informed judgment. The danger is treating data-poor decisions as data-rich because some data — even poor-quality data — is available.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Framework That Actually Works</h2>

  <h3>Step 1: Name the actual decision in one sentence</h3>
  <p>Not the situation — the decision. "Should we build Feature X in Q2?" rather than "We're trying to figure out the onboarding problem." Naming the decision precisely focuses subsequent analysis and prevents scope creep.</p>

  <h3>Step 2: Identify who should be involved and why</h3>
  <p>Who has information relevant to this decision? Who will be affected by it? Who needs to feel heard to support the outcome? Involving the right people upfront is faster and less painful than making the decision alone and dealing with objections after.</p>

  <h3>Step 3: Generate at least three options</h3>
  <p>Most decisions get presented as binary: do this or don't. Forcing yourself to generate at least three options — usually: do it fully, do a reduced version, don't do it but do something else — produces better decisions. The third option is often the one nobody thought of and the one that turns out to be right.</p>

  <h3>Step 4: Make key assumptions explicit</h3>
  <p>For each option, what assumptions are you making? Which are you most uncertain about? Which, if wrong, would change your decision? This step is the one most teams skip — and it's where the most dangerous gaps in thinking hide.</p>

  <h3>Step 5: Decide, document, and set a review point</h3>
  <p>Make the decision. Write down what you decided, why, and what assumptions you're betting on. Set a date to review whether those assumptions proved correct. This practice, done consistently, is how PMs develop genuine judgment — by creating a feedback loop between predictions and reality.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Facing a high-stakes product decision?</h3>
    <p class="text-muted-foreground mb-4">The best decisions come from good process, not just good intuition. I work with product leaders to build decision quality at the team level. If you're navigating a significant decision or want to improve how your team makes them, let's talk.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`

};

export function getPmStrategyContent(slug: string): string | undefined {
  return PM_STRATEGY_CONTENT[slug];
}
