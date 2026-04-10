export const EXECUTION_CONTENT: Record<string, string> = {

"writing-effective-prds-guide": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    A PRD that engineers don't read is not a PRD. It's a liability. Here's what separates product requirement documents that actually drive excellent engineering from the ones that get skimmed and ignored.
  </p>

  <p>The worst PRD I ever wrote was 47 pages long. It had a table of contents. It had a requirements traceability matrix. It had mockups for every state, extensive edge case documentation, and a comprehensive glossary. The engineering lead read the first three pages and then started asking me clarifying questions that were answered on page 12, page 23, and page 38. Three weeks into the sprint, the team was building something that wasn't quite what I meant by what I'd written.</p>

  <p>The best PRD I ever wrote was 4 pages. It had a clear problem statement, three user stories that captured the core scenarios, a handful of acceptance criteria, and a brief section on constraints. The engineering lead read it once and said "got it." We shipped something that matched the intent exactly.</p>

  <p>Length is not quality. Comprehensiveness is not clarity. The purpose of a PRD is to create shared understanding, not to demonstrate thoroughness.</p>

  <hr class="my-12 border-border/50" />

  <h2>What a Good PRD Actually Contains</h2>

  <h3>The problem statement (the most important section)</h3>
  <p>Before describing the solution, describe the problem with precision. Who is experiencing it? In what context? What are the consequences if it's not solved? What evidence do you have that this problem is real and worth solving?</p>

  <p>The problem statement is the section most PMs underinvest in and most engineers wish were better. When the problem is described clearly, engineers can make good implementation decisions independently — because they understand the goal, not just the specification. When the problem is vague or absent, engineers build exactly what they're told and you get a product that technically matches the spec but doesn't solve the problem.</p>

  <h3>The solution overview (high-level, not exhaustive)</h3>
  <p>Describe the solution at the level of user behavior, not engineering implementation. "Users can connect a bank account and see their balance updated in real time" is a user behavior description. "The system will poll the bank API every 30 seconds and update the database record with the new balance, refreshing the frontend via WebSocket" is an implementation description. The first belongs in the PRD. The second belongs in the technical design document that engineering produces based on the PRD.</p>

  <p>This distinction matters because implementation details don't belong to the PM. They belong to engineering. When PMs specify implementation in PRDs, they constrain engineers to a specific approach that may not be the best one available. Describe what the product needs to do. Let engineering figure out how.</p>

  <h3>User stories or scenarios</h3>
  <p>Three to five scenarios that capture the primary use cases in user-centric language. Not all edge cases — the primary flows. "A first-time user who has never connected a bank account before." "A returning user who needs to switch from one bank to another." "A user whose bank connection has expired and needs to reconnect." These scenarios should be real — based on actual users you've talked to, not hypothetical profiles you've invented.</p>

  <h3>Acceptance criteria</h3>
  <p>Clear, binary criteria that determine whether the feature is done. Not "the feature should be fast" — that's not testable. "API responses under 500ms for 95% of requests" — that's testable. Not "users should understand the interface" — not testable. "Users can complete the bank connection flow in under 5 minutes without any help text, as validated by 5 unmoderated user tests" — testable.</p>

  <h3>What's out of scope</h3>
  <p>Explicitly stating what is not included in this version is as important as stating what is included. "We are not building multi-bank support in this version." "We are not handling corporate account connections in this version." This prevents scope creep during development and aligns stakeholder expectations before the sprint starts.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Make Your PRDs Actually Get Read</h2>

  <p><strong>Shorter is almost always better.</strong> If you can say it in 2 pages, don't take 5. Compression forces clarity. Long PRDs often reflect unclear thinking more than comprehensive thinking.</p>

  <p><strong>Lead with the most important information.</strong> Many engineers read the first section carefully and skim the rest. Put the problem statement and the core solution overview first, where they'll be read. Put appendices, detailed edge case handling, and reference documentation at the end, where they'll be consulted as needed.</p>

  <p><strong>Include context, not just specifications.</strong> The best PRDs explain why the feature is being built, what alternatives were considered, and what trade-offs were made. This context helps engineers make good decisions when they encounter situations the PRD doesn't cover — which is inevitable.</p>

  <p><strong>Walk the team through it before it's final.</strong> A PRD walkthrough session — where you present the document and take questions before it's considered final — is one of the most valuable things you can do. It catches misunderstandings early, surfaces questions the PRD should answer but doesn't, and creates shared ownership of the direction before engineering begins.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Improving your PRD quality?</h3>
    <p class="text-muted-foreground mb-4">PRD quality is one of the clearest signals of PM quality. The best PRDs I've read created genuine clarity and drove excellent outcomes. I'm happy to share templates, examples, and frameworks. Let's talk about what would help you most.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"agile-vs-scrum-vs-kanban": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Agile, Scrum, and Kanban are often used interchangeably. They shouldn't be. They're related but distinct, and choosing the right one for your team's context matters more than most PMs realize. Here's the clear breakdown.
  </p>

  <p>The confusion starts at the naming. Agile is a set of values and principles, not a methodology. Scrum is a framework for implementing Agile. Kanban is a workflow management system. They're related the way "healthy eating" is related to "intermittent fasting" and "Mediterranean diet" — the second and third are specific implementations of the first, not synonyms for it.</p>

  <p>In practice, most teams that say they're "doing Agile" are doing some mixture of Scrum ceremonies and Kanban workflow management, informed loosely by Agile principles. This isn't wrong — it often works fine. But not understanding the differences makes it harder to diagnose why things aren't working when they aren't.</p>

  <hr class="my-12 border-border/50" />

  <h2>Agile: The Philosophy</h2>

  <p>The Agile Manifesto (2001) established four values: individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; responding to change over following a plan. These are principles, not instructions. They tell you what to prioritize, not how to organize your work.</p>

  <p>Agile emerged as a reaction to waterfall development, where requirements were gathered completely upfront, software was designed and built over months, and the first user feedback came at launch — often too late to be actionable. Agile proposed an alternative: build iteratively, get feedback continuously, and adjust direction based on what you learn.</p>

  <p>If your team is doing that — iterating based on learning, prioritizing working software over extensive documentation, staying flexible to changing requirements — you're being Agile in the meaningful sense, regardless of which specific framework you use.</p>

  <hr class="my-12 border-border/50" />

  <h2>Scrum: The Framework</h2>

  <p>Scrum structures work into time-boxed iterations called sprints (typically 2 weeks), with specific roles (Product Owner, Scrum Master, Development Team), specific ceremonies (Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective), and specific artifacts (Product Backlog, Sprint Backlog, Increment).</p>

  <p>Scrum works best when: the team is working on a well-defined product with clear direction, the work can be meaningfully planned in 2-week increments, and the team is stable enough to develop shared rhythm and working agreements.</p>

  <p>Scrum struggles when: requirements are changing too frequently for 2-week planning to be meaningful, the team is too small for the overhead of Scrum ceremonies to be justified, or the work is service-based (responding to inbound requests) rather than project-based (building toward a defined goal).</p>

  <h3>Common Scrum failure modes</h3>
  <p>The team runs the ceremonies without the mindset — daily standups become status reports, retrospectives become complaint sessions, sprint reviews become demos for show. The framework's value comes from the discipline of planning, doing, reviewing, and improving. When the ceremonies are hollow, so are the benefits.</p>

  <hr class="my-12 border-border/50" />

  <h2>Kanban: The Flow System</h2>

  <p>Kanban doesn't use sprints or time boxes. Instead, it manages workflow through visual boards, work-in-progress (WIP) limits, and continuous flow. Work items move through defined stages (To Do → In Progress → Review → Done) and WIP limits prevent team members from taking on more items than they can complete before the earlier ones are done.</p>

  <p>Kanban works best for: operational or support work where items arrive continuously and must be handled as they come; mature products in maintenance mode where the work is primarily bug fixes and small improvements; teams that need predictability about time-to-completion rather than about quarterly capacity.</p>

  <p>Kanban's power is in its simplicity and its forcing function of WIP limits. When you limit how many items can be in progress at once, you force the team to finish before starting — which eliminates the multitasking waste that plagues many software teams.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Choose</h2>

  <p>The most useful heuristic: is the team's primary challenge planning and predictability, or flow and throughput?</p>

  <p>If the team has a defined roadmap, works in project-based increments, and needs to give stakeholders reliable quarterly delivery expectations — Scrum's sprint structure provides the planning discipline to deliver on that.</p>

  <p>If the team handles continuous incoming work, needs to respond quickly to changing priorities, and struggles with multitasking and long cycle times — Kanban's flow focus is more appropriate.</p>

  <p>If neither describes your team — if you're doing early-stage product discovery where the work is highly exploratory and unpredictable — both Scrum and Kanban may be too heavyweight. Lighter-weight continuous prioritization with weekly alignment might serve you better than either formal framework.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Reconsidering your team's process?</h3>
    <p class="text-muted-foreground mb-4">Process is important, but the most effective teams I've worked with were more focused on outcomes than on process fidelity. If your current framework isn't serving you, let's think through what would. Let's talk.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"sprint-planning-best-practices": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Bad sprint planning wastes weeks. Good sprint planning sets up your team to finish what they start, learn from what they ship, and adjust before the next sprint. Here's what actually makes the difference.
  </p>

  <p>Sprint planning is the ceremony most teams do poorly — and the one whose quality has the biggest downstream effect on everything else. If you go into a sprint without a clear shared understanding of what the team is committing to and why, you'll spend the sprint managing miscommunication instead of building product.</p>

  <p>The version of sprint planning most teams practice: the PM presents a stack-ranked backlog of items, engineering estimates them, and the team takes items off the top until they've filled the sprint capacity. This is not sprint planning. It's task assignment with ceremony.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Sprint Planning Should Accomplish</h2>

  <p>Good sprint planning produces three things: a shared commitment to a sprint goal, a set of user stories or tasks that the team believes will achieve that goal, and a shared understanding of any significant technical risks or dependencies.</p>

  <p>The sprint goal is the most important and most neglected element. "This sprint, we'll complete X, Y, and Z" is a task list, not a sprint goal. "This sprint, our goal is that users can successfully complete bank account connection for the first time" is a goal. The goal is what the team is trying to achieve for users. The tasks are how they plan to achieve it. These are different things, and treating them as the same is how sprints drift into task completion without user impact.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Sprint Planning Process That Works</h2>

  <h3>Before the meeting: PM preparation</h3>
  <p>The PM should enter sprint planning with clear answers to three questions: What do we want to achieve for users this sprint? What's the current state of the backlog items we're considering — have they been refined, do they have clear acceptance criteria, are there known dependencies? What are the constraints on this sprint — any planned absences, upcoming deadlines, or external dependencies the team needs to be aware of?</p>

  <p>Sprint planning that requires the PM to figure out these things in real time is sprint planning that's going to take two hours and leave the team with a vague commitment.</p>

  <h3>In the meeting: create shared understanding, not assignment</h3>
  <p>Walk the team through each story you're proposing for the sprint. Not to present the solution, but to ensure the team understands the problem. "This story is about the bank connection flow failing for users with two-factor authentication — here's what's happening to users and why we think it's important to fix this sprint." Engineers who understand the problem are infinitely more valuable than engineers who understand the specification.</p>

  <p>Let engineering identify risks and unknowns before committing. The stories that seem straightforward to the PM are often the ones where engineering sees a hidden dependency or technical risk that changes the estimate significantly. Creating space for this in planning — rather than discovering it mid-sprint — is how you keep sprints on track.</p>

  <h3>At the end: the commitment is a team commitment</h3>
  <p>Sprint planning ends with the team — not the PM — committing to a set of work. The PM can propose. The engineers decide. This isn't semantic — it's the difference between a team that owns its sprint and a team that's executing someone else's list. Teams that own their commitments are teams that take those commitments seriously.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Sprint planning not working?</h3>
    <p class="text-muted-foreground mb-4">Sprint planning problems are often symptoms of upstream issues — unclear strategy, poor backlog health, or misaligned expectations between PM and engineering. I can help you diagnose what's actually causing the friction. Let's talk.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"managing-cross-functional-teams": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    You have accountability but no authority. You're responsible for outcomes that depend on people who don't report to you. This is the defining challenge of product management — and the skill that separates truly effective PMs from those who are always fighting uphill.
  </p>

  <p>The cross-functional team dynamic is unique in organizations. In most functions, accountability and authority are aligned — you're responsible for what the people you manage produce. In product management, they're deliberately misaligned. The PM is accountable for the product, but engineering, design, data, legal, and marketing all have their own reporting lines, their own priorities, and their own definitions of success.</p>

  <p>Managing this dynamic is not primarily a management skill. It's a trust, clarity, and communication skill. You can't manage people who don't report to you. But you can lead them — if you've built the credibility, the relationships, and the shared context that make leadership possible.</p>

  <hr class="my-12 border-border/50" />

  <h2>Building Credibility With Each Function</h2>

  <h3>With engineering</h3>
  <p>Engineers respect PMs who understand technical constraints, who don't over-specify solutions, who write clear requirements, who protect engineering time from low-value stakeholder requests, and who acknowledge technical debt instead of pretending it doesn't exist. The PM who consistently demonstrates these qualities earns a kind of credibility with engineering teams that makes collaboration genuinely enjoyable instead of tolerable.</p>

  <p>The fastest way to lose credibility with engineering: overpromise to stakeholders without consulting the team first. Nothing damages the PM-engineering relationship faster than external commitments that the team discovers through a stakeholder announcement rather than through conversation.</p>

  <h3>With design</h3>
  <p>Designers respect PMs who understand that design is solving a problem, not decorating a solution. Who give clear problem statements without prescribing solutions. Who create space for design exploration rather than arriving with wireframes. Who trust design expertise rather than overruling it based on personal aesthetic preference. And who involve designers early in discovery rather than late in the process when direction is already set.</p>

  <h3>With data and analytics</h3>
  <p>Data teams respect PMs who ask good questions, who understand statistical significance, who don't cherry-pick data to confirm existing conclusions, and who give analysts enough context about the decision they're trying to inform to make the analysis actually useful. The PM who comes to analytics with "I need data that shows our new feature is working" is a PM who will always get what they ask for and never get what they need.</p>

  <hr class="my-12 border-border/50" />

  <h2>Managing Conflict in Cross-Functional Teams</h2>

  <p>Conflict in cross-functional teams is normal and healthy. The problem isn't conflict — it's unresolved conflict, which festers into dysfunction. The PM's role in conflict is not to arbitrate — that would require authority the PM doesn't have. The PM's role is to make the conflict explicit, create a space for it to be resolved, and ensure that resolution happens.</p>

  <p>"I want to name a tension I'm seeing between what design is proposing and what engineering has flagged as a constraint. Can we spend 20 minutes working through this so we're aligned before we go further?" This kind of naming — calm, non-blaming, action-oriented — is one of the highest-value things a PM can do in a cross-functional meeting.</p>

  <p>The PMs who are most effective at cross-functional leadership are often not the most forceful. They're the most clear. Clarity about what the team is trying to achieve, clarity about what's been decided and what's still open, clarity about who is responsible for what — this clarity is the foundation on which effective cross-functional work is built.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Struggling with cross-functional dynamics?</h3>
    <p class="text-muted-foreground mb-4">Cross-functional leadership is one of the skills that's hardest to develop without a thoughtful mentor or coach. I've navigated complex cross-functional dynamics across multiple organizations and can help you find the right approach for your situation. Let's talk.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"roadmap-planning-practical-guide": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    A roadmap is not a schedule. It's a communication tool — a way of conveying strategic direction and current priorities to multiple audiences simultaneously. Most teams use it as a schedule and wonder why it keeps going wrong.
  </p>

  <p>The classic roadmap problem: the PM spends two weeks building a beautiful quarterly roadmap. Stakeholders approve it in a planning meeting. One month later, a major customer has a critical need, a competitor launches something significant, or the CEO changes strategic direction. The roadmap becomes outdated. The team is caught between the plan they committed to and the reality they're operating in.</p>

  <p>This happens not because roadmaps are inherently bad tools but because the roadmap is being used as a commitment device instead of a communication device. When a roadmap is a commitment, changing it is a breach of trust. When a roadmap is a communication device about current thinking, updating it as thinking evolves is the expected and healthy behavior.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Audience Problem: One Roadmap Doesn't Serve Everyone</h2>

  <p>Different stakeholders need different things from a roadmap. Engineering needs to know what they're building in the next 6 weeks with enough precision to make technical decisions. Sales needs to know what's coming in the next 6 months with enough specificity to inform customer conversations. Leadership needs to understand the 12-18 month direction with enough clarity to make resource allocation decisions. Investors or board members need to see the 2-3 year vision.</p>

  <p>One roadmap cannot serve all these audiences well simultaneously. A roadmap detailed enough for engineering is too granular for investors. A roadmap abstract enough for investors is too vague for engineering. The solution is layered roadmaps — different representations of the same underlying strategy at different levels of precision for different audiences.</p>

  <p>The underlying strategy is the source of truth. The roadmap representations are audience-specific views into it. When the strategy changes, all the representations update from the same source. When an audience asks a question, the PM can explain which view they're looking at and pull up a different view to answer the question.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Practical Roadmap Structure That Works</h2>

  <h3>Now (current quarter): high specificity</h3>
  <p>What the team is committed to delivering in the current quarter, broken down by sprint or month. Specific enough for engineering planning and stakeholder expectation-setting. Updated at the start of each sprint based on what was actually completed and what shifted.</p>

  <h3>Next (following 1-2 quarters): medium specificity</h3>
  <p>The direction you're heading and the major problems you're planning to solve, with rough sizing and sequencing but without detailed feature specifications. This is where you're making strategic commitments without technical over-commitment. Change is expected as you learn from the current quarter's work.</p>

  <h3>Later (6+ months): strategic direction</h3>
  <p>The major themes and opportunities you're exploring, with intentional vagueness about specific features. "We believe that enterprise account management is a major opportunity in H2" is an appropriate level of specificity for this horizon. Specific features in this bucket are likely to change significantly as you learn more.</p>

  <hr class="my-12 border-border/50" />

  <h2>Maintaining Roadmap Health</h2>

  <p>A roadmap's health can be assessed by one question: does the team use it to make decisions, or do they use it only to communicate what's been decided elsewhere? A roadmap that's consulted when making prioritization decisions is a healthy roadmap. A roadmap that's updated after decisions have been made elsewhere is a reporting artifact, not a planning tool.</p>

  <p>The PM who runs the quarterly planning process by filling in the roadmap template from their own thinking, presenting it for approval, and then updating it as events dictate is operating a communications system. The PM who runs the quarterly planning process by facilitating discussions about strategic direction, having those discussions in the roadmap format, and using stakeholder feedback to refine the roadmap before finalizing — that PM is running a genuine planning system.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Roadmap planning not working?</h3>
    <p class="text-muted-foreground mb-4">Roadmap dysfunction is usually a symptom of either unclear strategy or poor stakeholder communication — and often both. I've helped teams build roadmap practices that actually work for planning. Let's diagnose what's not working for you.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`

};

export function getExecutionContent(slug: string): string | undefined {
  return EXECUTION_CONTENT[slug];
}
