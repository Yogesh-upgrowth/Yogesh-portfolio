export const EXECUTION_CONTENT: Record<string, string> = {

"writing-effective-prds-guide": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The product requirement document is both the most universally agreed-upon PM artifact and the one that is most consistently done badly. Engineers complain about them. Designers work around them. PMs spend hours on them and then wonder why they didn't help. The problem is rarely that PRDs exist — it's that most PRDs are the wrong kind of document for what they're trying to accomplish.
  </p>

  <p>A PRD that engineers don't use is a document, not a PRD. A PRD that produces what was spec'd but not what was needed is a failure dressed as success. Here's how to write ones that actually work.</p>

  <hr class="my-12 border-border/50" />

  <h2>What a PRD Is Actually For</h2>

  <p>Before you write a word, be clear about why the PRD exists. A PRD serves several functions — and understanding which one you're primarily writing for changes how you structure it:</p>

  <p><strong>Alignment document:</strong> Making sure everyone agrees on what's being built and why, before anyone starts building. This version needs to capture the reasoning and the decision-making, not just the spec.</p>

  <p><strong>Specification:</strong> Giving engineers enough detail to build the right thing without needing to ask constant questions. This version needs to be precise about behavior, edge cases, and acceptance criteria.</p>

  <p><strong>Memory:</strong> Creating a record of what was decided and why, so that future you and future team members understand the rationale. This version needs context, alternatives considered, and explicit decisions.</p>

  <p>Most PRDs try to serve all three functions with the same document. This produces compromised versions of all three. Consider writing separate documents for alignment (shorter, higher-level) and specification (detailed, technical).</p>

  <hr class="my-12 border-border/50" />

  <h2>The Structure That Actually Works</h2>

  <h3>Section 1: The problem statement (the most important section)</h3>
  <p>This is the section that most PRDs get wrong. It's where you explain what problem you're solving, for whom, and why it matters now. A good problem statement is specific enough that two people reading it would agree on whether a proposed solution does or doesn't solve it.</p>

  <p><strong>What to include:</strong> The user behavior or outcome that is currently suboptimal. The evidence that this is actually a problem (data, user research, support tickets). The magnitude of the problem. Why this is the right time to solve it.</p>

  <p><strong>What to exclude:</strong> The solution. The problem statement should be written before you've decided what to build. If you write the problem statement with a solution already in mind, you'll unconsciously write a problem statement that justifies your preferred solution.</p>

  <h3>Section 2: Goals and success metrics</h3>
  <p>What does success look like? Be specific. "Improve onboarding" is not a success criterion. "Increase the percentage of users who reach the first key action within 24 hours of signup from 35% to 50%" is a success criterion.</p>

  <p>Also include non-goals: what explicitly are you not trying to achieve with this feature? This prevents scope creep and helps the team make trade-off decisions without escalating.</p>

  <h3>Section 3: Context and background</h3>
  <p>What does someone reading this document need to know to understand the decisions? This might include: relevant user research, competitive landscape, technical constraints, historical context about why previous approaches didn't work, and how this feature connects to broader product strategy.</p>

  <h3>Section 4: User stories</h3>
  <p>Describe the feature from the user's perspective. The standard format is "As a [user type], I want to [action] so that [outcome]." More important than the format: the stories should describe what users need to do, not how the product will help them do it. The "how" is for design and engineering to solve.</p>

  <h3>Section 5: Functional requirements</h3>
  <p>For each user story, what specific behaviors does the product need to exhibit? This is the technical spec layer. Requirements should be clear, testable, and unambiguous. "The system should be fast" is not a functional requirement. "The search results page should load within 2 seconds at the 95th percentile" is.</p>

  <h3>Section 6: Edge cases and error handling</h3>
  <p>What happens when things go wrong? What are the unusual conditions that the spec needs to account for? Empty states, error conditions, boundary cases, and unusual user paths — these need to be specified before engineering, not discovered during QA.</p>

  <h3>Section 7: Open questions</h3>
  <p>What don't you know yet? Every PRD has open questions. Document them explicitly rather than leaving them implicit. An open question listed is one that gets answered. An open question hidden is one that becomes a surprise late in development.</p>

  <hr class="my-12 border-border/50" />

  <h2>Common PRD Failures and How to Avoid Them</h2>

  <h3>The feature description disguised as a PRD</h3>
  <p>Many PRDs describe what the feature will look like rather than what it needs to accomplish. They specify UI elements, interaction patterns, and visual design rather than the functional requirements and user outcomes. This is the designer's job, not the PM's. A PRD that specifies UI is a PM who doesn't trust their design team — and it produces worse outcomes than a PRD that specifies the problem and lets design solve it.</p>

  <h3>The PRD that's never read</h3>
  <p>A PRD that nobody reads is worse than no PRD — it creates the impression of clarity without the actual clarity. The most common reason PRDs aren't read: they're too long. A 40-page PRD signals to engineers that the PM isn't sure what the important parts are. Ruthless editing — cutting everything that doesn't help engineers make good decisions — is as important as writing.</p>

  <h3>The PRD written too late</h3>
  <p>PRDs written after key design and engineering decisions are already made are retrospective documents, not planning ones. The PRD should be written early enough to influence the decisions it's supposed to inform.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">PRDs not landing with your engineering team?</h3>
    <p class="text-lg text-muted-foreground mb-6">I can help you develop a PRD process that your team actually uses. Sometimes the format change is more valuable than the content change.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's fix your PRD process</a>
  </div>
`,

"agile-vs-scrum-vs-kanban": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The Agile vs Scrum vs Kanban debate has consumed enormous amounts of PM attention and produced enormous amounts of confusion — mostly because these three things are not comparable. Agile is a philosophy. Scrum is a framework. Kanban is a method. Comparing them is a category error that leads to unproductive debates about which is "better."
  </p>

  <p>Let me clarify what each actually is, where each works well, and — more usefully — how to choose the right approach for your specific team and context.</p>

  <hr class="my-12 border-border/50" />

  <h2>Agile: The Philosophy</h2>

  <p>Agile is not a process. It's a set of values and principles articulated in the Agile Manifesto (2001). The core values:</p>

  <ul>
    <li>Individuals and interactions over processes and tools</li>
    <li>Working software over comprehensive documentation</li>
    <li>Customer collaboration over contract negotiation</li>
    <li>Responding to change over following a plan</li>
  </ul>

  <p>These are directional preferences, not absolutes. The manifesto explicitly says "while there is value in the items on the right, we value the items on the left more." Agile doesn't say "no documentation" — it says working software matters more than documentation.</p>

  <p>Agile is an attitude toward uncertainty: given that we don't know everything at the start, we should build processes that allow us to learn and adapt. This is in contrast to traditional "waterfall" approaches that treat uncertainty as something to be eliminated through planning.</p>

  <h2>Scrum: The Framework</h2>

  <p>Scrum is one implementation of agile principles. It has specific practices:</p>

  <p><strong>Time-boxed sprints (usually 2 weeks):</strong> Work is organized into fixed periods. The team commits to a set of work at the sprint start and delivers it at the sprint end.</p>

  <p><strong>Three roles:</strong> Product Owner (prioritizes the backlog), Scrum Master (facilitates the process), Development Team (does the work).</p>

  <p><strong>Ceremonies:</strong> Sprint planning, daily standup, sprint review, sprint retrospective. These are structured meetings with specific purposes.</p>

  <p><strong>Artifacts:</strong> Product backlog (everything that could be built), sprint backlog (what's committed for this sprint), increment (working software produced by the sprint).</p>

  <h3>Where Scrum works well</h3>
  <p>Scrum works best in environments where: the work can be broken into roughly sprint-sized units, the team is co-located or closely integrated, the product requirements can be reasonably defined at the sprint level, and there's a need for structured accountability around sprint commitments.</p>

  <h3>Where Scrum struggles</h3>
  <p>Scrum struggles when: work is highly unpredictable or interrupt-driven (support, operations), requirements can't be defined at the sprint level because they depend on earlier work, team members are specialists who don't work on the same tasks simultaneously, or the overhead of sprint ceremonies is disproportionate to the team size.</p>

  <h2>Kanban: The Method</h2>

  <p>Kanban originated in manufacturing and was adapted for software development by David Anderson in the 2000s. It's based on three principles: visualize the work (the Kanban board), limit work in progress (WIP limits), and manage flow (optimize the throughput of the system).</p>

  <p>Unlike Scrum, Kanban doesn't have sprints. Work flows continuously — when a task is complete, the next highest-priority item is pulled. The focus is not on a time-boxed commitment but on steady, sustainable flow.</p>

  <h3>Where Kanban works well</h3>
  <p>Kanban works best in environments where: work is unpredictable or interrupt-driven, tasks have widely varying sizes, the team handles multiple types of work (features, bugs, support requests), and there's no need for the coordination overhead of sprint planning.</p>

  <h3>Where Kanban struggles</h3>
  <p>Kanban struggles when: you need strong deadline commitments (no sprint commitments means less predictability), the team needs structured ceremony to stay aligned, or stakeholders need regular release cadence for planning purposes.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Choose</h2>

  <p>Ignore the ideological debates and focus on what your team and context actually need:</p>

  <p><strong>If your work is predictable and can be sprint-sized:</strong> Scrum.</p>
  <p><strong>If your work is unpredictable, interrupt-driven, or variable in size:</strong> Kanban.</p>
  <p><strong>If your team is mature and can self-manage without strong ceremony:</strong> Either, with lighter processes.</p>
  <p><strong>If your team needs structure and accountability to stay aligned:</strong> Scrum with its structured ceremonies.</p>

  <p>The right answer is almost always a hybrid. Scrum's sprint cadence for planning and review, Kanban's WIP limits and flow visualization for day-to-day management, and Agile's values as the underlying philosophy. The companies that do this well don't call it anything — they just use what works.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Process slowing your team down?</h3>
    <p class="text-lg text-muted-foreground mb-6">Sometimes the problem isn't which framework you're using — it's how it's being implemented. I help teams tune their process to match their actual work and team dynamics.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's look at your process</a>
  </div>
`,

"sprint-planning-best-practices": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Poor sprint planning is one of the most common and most avoidable sources of engineering team frustration. The symptoms are familiar: sprint commitments that consistently slip, engineers who don't understand why they're building what they're building, and retrospectives dominated by the same problems cycle after cycle.
  </p>

  <p>Most of these problems are not engineering problems. They're planning problems — and they're the PM's responsibility to fix.</p>

  <hr class="my-12 border-border/50" />

  <h2>Before Sprint Planning: The Preparation That Matters</h2>

  <h3>Backlog refinement is not optional</h3>
  <p>The most common sprint planning failure is showing up to the planning meeting with a backlog full of items that aren't ready to be built. Stories without acceptance criteria. Stories that describe an outcome without the context engineering needs to implement. Stories with dependencies that haven't been resolved.</p>

  <p>Backlog refinement — the process of ensuring that the items in the top of the backlog are ready to be worked on — should happen continuously, not in the sprint planning meeting. Sprint planning is for commitment and capacity planning. If you're doing refinement during sprint planning, you're doing it wrong.</p>

  <p>A backlog item is ready to be planned when: the story is clearly understood by the team, the acceptance criteria are specific and testable, dependencies have been identified and either resolved or explicitly planned for, and the implementation approach is discussed enough that the team can estimate with reasonable confidence.</p>

  <h3>Know your team's real capacity</h3>
  <p>Velocity (the average story points completed per sprint) is a guide, not a ceiling. But many teams plan to 100% of historical velocity without accounting for planned absences, context-switching costs, meetings, and the unexpected work that always appears.</p>

  <p>A more honest approach: plan to 70-80% of historical velocity unless you have specific reason to believe this sprint will be cleaner than average. The 20-30% buffer is not slack — it's the space for the bugs, the conversations, the learning, and the unexpected that every sprint contains.</p>

  <hr class="my-12 border-border/50" />

  <h2>During Sprint Planning: The Meeting That Should Be Short</h2>

  <p>A two-week sprint with a well-prepared backlog should need no more than 2 hours of planning. If your sprint planning takes longer, the problem is usually insufficient backlog refinement — you're doing in the planning meeting the work that should have happened beforehand.</p>

  <h3>Start with the goal, not the backlog</h3>
  <p>Before touching the backlog, articulate the sprint goal: what is the most important outcome this sprint should produce? Not "ship features X, Y, and Z" but "reduce onboarding completion time by 20%" or "resolve the key enterprise customer blocker." The sprint goal gives the team a shared purpose and helps them make prioritization decisions when trade-offs arise during the sprint.</p>

  <h3>Let engineering drive the commitment</h3>
  <p>The sprint commitment should be made by the team, not handed down by the PM. The PM's role is to present the prioritized backlog and explain the goal. The team's role is to assess what they can commit to delivering in the sprint, given their capacity and the complexity of the work.</p>

  <p>PMs who hand down sprint commitments without team input will consistently see commitments missed — because the people doing the work are the ones who know what's realistically achievable.</p>

  <hr class="my-12 border-border/50" />

  <h2>After Sprint Planning: Protecting the Sprint</h2>

  <p>Sprint commitments are fragile. The most common threat: "urgent" work that gets added mid-sprint, disrupting the committed work without a clear trade-off decision.</p>

  <p>The discipline that protects sprints: every item added mid-sprint should have an item removed to make room for it. This is not about rigidity — sometimes genuinely urgent work appears that outweighs the committed work. But making the trade-off explicit ("we're adding this, so we're removing this") prevents the slow accumulation of commitments that makes completion impossible.</p>

  <p>The PM's role during the sprint: be available to answer questions and unblock decisions, track progress without micromanaging it, and shield the team from mid-sprint scope changes unless those changes are genuinely more important than the committed work.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Sprint commitments consistently slipping?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is almost always a planning problem, not an engineering problem. I help teams identify where their planning is breaking down and how to fix it.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's diagnose it</a>
  </div>
`,

"managing-cross-functional-teams": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Cross-functional product teams are the dominant organizational model in tech, and for good reason: they put all the people needed to ship a product — engineering, design, data, sometimes marketing and sales — in the same team, working toward the same goals. In theory, this eliminates the handoff delays and miscommunications that plague functional silos.
  </p>

  <p>In practice, cross-functional teams are hard to run well. The challenges are not about the structure — they're about the inherent complexity of managing people with different expertise, different incentives, and different ways of defining success. Here's what I've learned about making these teams work.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Fundamental Challenge: Accountability Without Authority</h2>

  <p>The defining characteristic of the PM role in a cross-functional team is accountability without authority. You're accountable for the product outcomes, but you don't manage the engineers, designers, or data analysts on the team. They have functional managers who own their performance reviews, career development, and day-to-day management.</p>

  <p>This creates a real tension that never fully resolves. The PM needs the team to do specific things, but can't compel them to do those things through managerial authority. The only tools are influence, context, and credibility.</p>

  <p>Understanding this reality — and building your influence accordingly — is the foundational challenge of cross-functional team management.</p>

  <hr class="my-12 border-border/50" />

  <h2>Building the Influence That Makes Teams Work</h2>

  <h3>Share the "why" relentlessly</h3>
  <p>People work better when they understand why they're doing what they're doing. Engineers who know why a feature matters — what user problem it solves, how it connects to business outcomes, what data supports the priority — make better implementation decisions than engineers executing tasks they don't understand.</p>

  <p>This seems obvious. The failure mode in practice: PMs share the "what" (what we're building) but ration the "why" (why it matters). Sometimes because they're in a hurry. Sometimes because they assume the team knows the context. The assumption is almost always wrong.</p>

  <h3>Be right about the important things</h3>
  <p>The deepest source of PM influence is track record. Teams follow the judgment of PMs who have consistently been right about what matters — who predicted that users would respond well to a decision, who caught a problem before it became expensive, who made a call that turned out to be correct when others were skeptical.</p>

  <p>Building this track record requires being willing to make explicit predictions and having them tracked. The PM who is vague enough to never be demonstrably wrong is also too vague to be demonstrably right — and doesn't build the credibility that comes from being right.</p>

  <h3>Resolve conflicts explicitly</h3>
  <p>Cross-functional teams have conflicts — about priorities, about implementation approaches, about how to interpret user research, about trade-offs between quality and speed. These conflicts don't go away if you ignore them. They fester and create the kind of team dysfunction that makes every subsequent decision harder.</p>

  <p>The PM's role in team conflicts: not to avoid them but to surface them, name them clearly, and facilitate a resolution. Often the resolution is a decision the PM makes after hearing both sides. Sometimes it's a decision the team makes together. The important thing is that it gets resolved explicitly rather than through passive avoidance.</p>

  <hr class="my-12 border-border/50" />

  <h2>Working With Functional Managers</h2>

  <p>Cross-functional teams exist within a matrix organization where team members have both a PM (who directs their product work) and a functional manager (who owns their career). Managing this dual-reporting reality requires explicit coordination with functional managers.</p>

  <p>Practical approaches that work:</p>

  <p><strong>Regular syncs with functional managers.</strong> Meet with the engineering manager, the design manager, and other functional managers regularly — not just when there's a conflict, but as an ongoing relationship. These conversations build the mutual understanding that makes escalation rare.</p>

  <p><strong>Transparency about what the team is working on and why.</strong> Functional managers should never be surprised by what their reports are working on. Keep them informed of major priorities and decisions. This prevents the awkward situation where a functional manager hears from their report that they're being asked to do something that conflicts with their functional priorities.</p>

  <p><strong>Explicit conversation about career growth.</strong> One of the most valuable things a PM can do for cross-functional team members is actively support their professional development — by giving them challenging work that builds skills, by providing feedback to their functional manager, and by advocating for them in the broader organization. This investment produces loyalty and discretionary effort that functional authority can't buy.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Managing a cross-functional team that's not working well together?</h3>
    <p class="text-lg text-muted-foreground mb-6">Team dynamics are one of the hardest things to fix without an outside perspective. I help PMs diagnose what's going wrong and build the relationships and processes that make teams work.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's talk team dynamics</a>
  </div>
`,

"roadmap-planning-practical-guide": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The product roadmap is the artifact that PMs spend the most time on and get the most grief about. Stakeholders want more detail than you can commit to. Engineering wants less commitment than stakeholders want. Leadership wants confidence you don't have. Users want features you haven't prioritized.
  </p>

  <p>No roadmap satisfies everyone. The best roadmaps satisfy the right people in the right ways — and the key is understanding who the roadmap is for and what it needs to communicate to each audience.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Multiple Audiences for a Product Roadmap</h2>

  <p>The roadmap isn't a single document for a single audience. It's different things for different people:</p>

  <p><strong>For the team:</strong> The roadmap is an alignment tool. It answers "what are we working on and in what order?" for people building the product. This version needs enough detail for the team to understand priorities and plan their work.</p>

  <p><strong>For leadership:</strong> The roadmap is a strategic communication. It shows how product investment connects to business goals and where the product is heading. This version needs to connect product work to business outcomes, not just list features.</p>

  <p><strong>For customers:</strong> The roadmap is a promise about the future. It sets expectations about what's coming and when. This version should be directional rather than committed, and should be very careful about dates.</p>

  <p><strong>For sales:</strong> The roadmap is a selling tool. It helps sales handle "does the product do X?" questions. This version needs to be specific enough to be useful in a sales conversation but honest about what's committed vs. what's aspirational.</p>

  <p>The failure to recognize these different audiences leads to the most common roadmap problems: either one roadmap that's trying to serve all audiences and serves none well, or no shared roadmap at all because stakeholders can't agree on what it should say.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Roadmap Time Horizons</h2>

  <p>The most practical roadmap structure I've used is a three-horizon model:</p>

  <h3>Now (current sprint / quarter)</h3>
  <p>High specificity. Committed work. Engineers know what they're building. Design knows what they're designing. This is the only part of the roadmap where specific features and timelines are appropriate.</p>

  <h3>Next (next 1-3 quarters)</h3>
  <p>Medium specificity. Directional commitments. These are the areas you're planning to invest in, with a reasonable understanding of what that investment will produce. Not feature-level commitments — problem-level commitments. "We're investing in enterprise workflow improvements" rather than "We're building advanced permission management and audit logs."</p>

  <h3>Later (6+ months out)</h3>
  <p>Low specificity. Aspirational. These are the bets you're making about where the market is going and where you want to be. They should be honest about their uncertainty — "we believe this will matter and we're exploring what to build" is more honest and more useful than a specific feature commitment that will almost certainly change.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Process: How to Build a Roadmap That Survives Contact With Reality</h2>

  <h3>Start with goals, not features</h3>
  <p>The roadmap should flow from business goals to product goals to initiatives to features. If you start with features — the things you want to build — you'll have a list of features that may or may not connect to business goals. If you start with business goals, every item on the roadmap has a clear connection to something the business is trying to achieve.</p>

  <h3>Make trade-offs explicit</h3>
  <p>Every item on the roadmap represents a choice not to do other things. The roadmap is more useful — and the conversation around it is more productive — when the alternatives considered are named. "We chose to invest in onboarding improvements rather than the enterprise dashboard feature because the data shows onboarding is limiting our ability to hit retention targets" is more useful than "we're working on onboarding improvements."</p>

  <h3>Build in review points</h3>
  <p>A roadmap that can't be changed is a schedule, not a roadmap. Build explicit review points — quarterly at minimum — where the roadmap is revisited in light of what you've learned. The goal is not to change the roadmap constantly but to ensure that changes in understanding lead to changes in direction, rather than team continues building toward a target that's no longer the right one.</p>

  <h3>Communicate the uncertainty honestly</h3>
  <p>The single biggest communication failure in roadmap presentations is false precision. Stakeholders interpret a date on a roadmap as a commitment. If it's a best estimate, say so. If it's aspirational, say so. The short-term discomfort of managing expectations honestly is far less costly than the relationship damage of missing commitments that weren't real commitments in the first place.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Roadmap process not working for your team or stakeholders?</h3>
    <p class="text-lg text-muted-foreground mb-6">I help product teams develop roadmapping processes that satisfy the legitimate needs of different stakeholders without making commitments you can't keep.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's rebuild it</a>
  </div>
`,

};

export function getExecutionContent(slug: string): string | undefined {
  return EXECUTION_CONTENT[slug];
}
