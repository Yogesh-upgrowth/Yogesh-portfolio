export const AI_PM_CONTENT: Record<string, string> = {

"ai-changing-product-management": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    AI is not coming for product managers. It's already here — reshaping how we research, how we write, how we analyze data, and how we make decisions. The PMs who understand what's actually changing will be far more effective than those who are still debating whether to care.
  </p>

  <p>Three years ago, I wrote a quarterly strategy document that took me two full days. Research, synthesis, competitive analysis, user data review, stakeholder input synthesis, and finally writing. Two days for a document that, in retrospect, was about 60% as useful as it should have been given the time invested.</p>

  <p>Last quarter, I did the same process in five hours. Better research. Deeper synthesis. More complete competitive landscape. More specific user insights. The tools I was using handled the information gathering and initial structuring; I handled the judgment, the prioritization, and the writing. The output was meaningfully better. The time was dramatically less.</p>

  <p>This is what AI is doing to product management. Not replacing judgment. Compressing the time between information and insight.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI Is Actually Changing the Job</h2>

  <h3>User research at scale</h3>
  <p>Traditional user research is expensive and slow. Recruiting, scheduling, conducting, transcribing, and synthesizing interviews takes weeks and produces insights from a small sample. AI tools can now analyze thousands of support tickets, app store reviews, customer success call recordings, and survey responses in minutes, surfacing patterns, common themes, and outlier signals that would take a human team weeks to identify manually.</p>

  <p>This doesn't replace qualitative research — it augments it. The AI tells you where to look. The human researcher goes deep on the important questions. The combination is more powerful than either alone.</p>

  <h3>Competitive intelligence</h3>
  <p>Keeping up with competitor products, pricing changes, feature announcements, and market positioning used to require either a dedicated research function or a PM who spent significant time on competitive monitoring. AI tools can now track competitor websites, product changelogs, press mentions, job postings (which signal where competitors are investing), and user reviews — and synthesize the relevant updates weekly. The PM gets competitive intelligence without the competitive monitoring.</p>

  <h3>PRD and documentation</h3>
  <p>First drafts of product requirement documents, user stories, acceptance criteria, and feature specifications are now much faster to produce with AI assistance. The PM provides the context — the problem, the constraints, the target user, the success criteria — and the AI produces a structured first draft. The PM edits, refines, and adds judgment. The result is often better than what the PM would have written from scratch, because the AI draft surfaces gaps and edge cases the PM might have missed.</p>

  <h3>Data analysis</h3>
  <p>Querying data, building analyses, and interpreting results used to require either SQL skills or a data analyst's time. Natural language data interfaces are increasingly making this accessible to PMs who can describe what they want to know without writing queries. This is still early, but the direction is clear: PMs who can formulate good analytical questions will have much more data access than PMs who need to wait for analyst support.</p>

  <hr class="my-12 border-border/50" />

  <h2>What AI Is Not Changing</h2>

  <p>The parts of the PM job that AI makes faster are, without exception, the parts that involve processing and synthesizing existing information. The parts AI cannot do are the parts that require judgment about what matters — and why.</p>

  <p>AI can tell you what 10,000 users said in their support tickets. It cannot tell you which of those problems is worth solving, in what order, for which segment, with what priority relative to the business's strategic position. That requires a human who understands the business, the users, and the market in combination.</p>

  <p>AI can generate a PRD structure. It cannot write the section that explains why we're making this particular trade-off in this particular way, given our specific context. That explanation requires judgment that comes from being embedded in the organization, knowing the team's constraints, and understanding the business strategy.</p>

  <p>AI can analyze churn data and surface patterns. It cannot make the judgment call that this particular churn pattern matters more than another, given what you know about customer segment economics that isn't in the data.</p>

  <p>The PM's value has always been judgment under uncertainty. AI increases the information available to that judgment — which makes the judgment more important, not less. The PM who uses AI well is exercising better judgment with better information. The PM who doesn't use AI is exercising the same judgment with less information. Over time, that gap compounds.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Skills That Become More Valuable</h2>

  <p>When AI handles more of the information processing, the skills that can't be automated become more valuable:</p>

  <p><strong>Stakeholder influence.</strong> Getting alignment, managing conflict, navigating organizational dynamics — none of this gets easier with AI. If anything, as teams move faster with AI assistance, the human coordination challenges intensify.</p>

  <p><strong>Strategic judgment.</strong> Which market to pursue. What to build versus buy. When to change direction. How to sequence capabilities. These are judgment calls that require contextual wisdom AI cannot replicate.</p>

  <p><strong>User empathy at depth.</strong> AI can summarize what users say. The PM who talks to users, builds genuine understanding of their lives and goals, and develops intuition for what they need but haven't articulated — that PM is doing work that AI cannot replace.</p>

  <p><strong>Writing that creates clarity.</strong> AI can produce competent prose. The PM who can write a document that creates genuine clarity — that makes a complex decision obvious, that aligns a team, that changes how stakeholders think about a problem — is doing work that's harder for AI to replicate well.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Adapting your PM practice for the AI era?</h3>
    <p class="text-muted-foreground mb-4">The PMs who figure out how to use AI well over the next two years will have a significant advantage. I've been thinking hard about this for a while and am happy to share what I've found. Let's talk.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"ai-tools-product-managers": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Not a list of hype. A practical, opinionated breakdown of the AI tools that have actually changed how I work — and which ones I've tried and quietly stopped using.
  </p>

  <p>Every month there's a new wave of "AI tools for PMs" articles. Most of them are sponsored or written by people who've used the tools for three days. This is a different kind of assessment: six months of real use, real product work, and real results — or lack of them.</p>

  <p>The tools that stuck are the ones that changed the ratio of time-to-insight, not just the ones that sounded impressive. Let me share what actually made it into my regular workflow.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Tools That Changed My Work</h2>

  <h3>LLMs for synthesis (Claude, GPT-4)</h3>
  <p>I use language models for synthesis more than for generation. I paste in 50 customer interview transcripts and ask the model to identify the top 10 themes and the three most surprising insights. I paste in a competitor's product changelog from the last six months and ask what their strategic priorities appear to be. I paste in a draft document and ask what questions it leaves unanswered. In each case, I'm not asking AI to create the output — I'm asking it to help me process information faster so I can apply my judgment to a better-synthesized set of inputs.</p>

  <h3>AI-powered analytics interfaces</h3>
  <p>Natural language query interfaces on top of analytics data are genuinely transformative. I can ask "which features are correlated with 90-day retention?" or "which segments have the highest activation rates?" and get answers in seconds that would have taken an analyst request and a 24-hour wait. Not every platform has this, but the ones that do have changed how quickly I can move from question to answer.</p>

  <h3>AI meeting assistants (Otter.ai, Fireflies)</h3>
  <p>Automatic transcription and summary of user research interviews, stakeholder meetings, and customer calls. The specific value: I no longer have to take notes during conversations. I can be fully present in the discussion, knowing that the AI is capturing the full transcript and will produce a summary I can review afterward. The summaries aren't perfect, but they're good enough that reviewing and correcting them is faster than taking notes manually.</p>

  <h3>AI-assisted writing (for first drafts only)</h3>
  <p>I use AI to generate first drafts of user stories, acceptance criteria, and structured outlines for PRDs. Key emphasis on "first drafts" — I revise substantially before anything goes to the team. The value is that the first draft gives me something to react to, which is faster than starting from a blank page. It also surfaces edge cases and questions I might have missed.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Tools I Stopped Using</h2>

  <h3>AI roadmap generators</h3>
  <p>Multiple tools now offer to generate roadmaps from your goals or user feedback. I've tried three of them. They produce well-structured, generic roadmaps that look reasonable and contain no genuine strategy. A roadmap generated without the context of your specific business situation, team capabilities, competitive position, and organizational dynamics is a template, not a strategy. I haven't found one that's useful beyond giving junior PMs a starting structure to react to.</p>

  <h3>AI-generated personas</h3>
  <p>Generating personas from user data using AI produces statistically plausible personas that feel real but aren't grounded in actual user observation. Real personas are built from specific user quotes, specific behaviors observed in research, and specific tensions that only emerge from genuine interaction with users. AI-generated personas smooth over the specific details that make personas actually useful.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Rule I've Developed</h2>

  <p>The tools that work are the ones where I'm using AI to handle information volume that would slow me down, so I can apply my judgment to a better synthesis. The tools that don't work are the ones where I'm using AI to make the judgment itself. Synthesis: yes. Analysis: yes. Research: yes. Strategy, prioritization, stakeholder management, user empathy: no.</p>

  <p>The moment you're using AI to make the product judgment, you've outsourced the PM job. The moment you're using AI to make the information processing faster so your judgment lands on better inputs — that's leverage.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Figuring out how to use AI in your PM workflow?</h3>
    <p class="text-muted-foreground mb-4">The specific tools and workflows depend heavily on your product context and team setup. I'm happy to share what I've learned from six months of real experimentation. Let's compare notes.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"ai-product-discovery-techniques": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    AI can simulate user interviews, analyze feedback at scale, and find patterns no human analyst would catch in time. Here's how to use it in your discovery process — and where human judgment is still irreplaceable.
  </p>

  <p>Product discovery has always had a scaling problem. You need to talk to users to understand their problems. But "talking to users" doesn't scale easily — every interview takes scheduling, conducting, transcribing, and synthesizing. A team of two PMs can realistically do 10-15 interviews per quarter if everything goes well. Meanwhile, the product generates thousands of user signals every day through support tickets, app reviews, NPS surveys, and behavioral analytics. Most of that signal goes unread.</p>

  <p>AI is changing this. Not by replacing user interviews — qualitative conversations with real humans remain irreplaceable for the depth of understanding they provide. But by dramatically expanding the signal surface that PMs can process and by helping synthesize insights from large volumes of unstructured data.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI Genuinely Helps Discovery</h2>

  <h3>Large-scale text analysis</h3>
  <p>Feed an LLM a year's worth of support tickets, app store reviews, customer success call transcripts, or NPS survey responses, and it can surface thematic clusters, identify the most commonly expressed frustrations, and highlight patterns that your team has been too busy to read systematically. This isn't a substitute for reading selected samples yourself — it's a tool for deciding which samples to read, by understanding the distribution before you dive in.</p>

  <h3>Interview synthesis</h3>
  <p>After conducting user interviews, AI can synthesize transcripts across multiple sessions to identify common threads, contradictions between what different users said, and hypotheses that emerge from the patterns. The PM still needs to do the interpretation, but the initial synthesis is faster and more comprehensive than manual review.</p>

  <h3>Assumption mapping</h3>
  <p>When you describe a product idea to an LLM and ask it to identify all the assumptions the idea depends on, it will produce a more complete list than most PMs generate alone. This is useful not because the AI knows which assumptions are correct, but because it's good at identifying what needs to be validated. The PM still has to go validate those assumptions — but starting from a complete map is better than starting from an incomplete one.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI Discovery Falls Short</h2>

  <p><strong>Simulated user interviews:</strong> Some tools offer to simulate user interviews using AI personas trained on your user data. These are interesting for exploring hypothesis space but dangerous if mistaken for real user insight. AI personas reflect the aggregate patterns in existing data. They cannot represent users who don't yet exist in your data — which is often exactly who you should be talking to when doing discovery for new product areas.</p>

  <p><strong>Emotional context:</strong> User interviews are valuable partly because of what users don't say — the pause before they answer, the way they light up when describing a workaround they're proud of, the frustration that comes through in their tone. AI can process text. It cannot process emotional context from non-verbal signals. For deeply human products, this limitation matters a lot.</p>

  <p><strong>Novel problem discovery:</strong> AI synthesizes what's already been expressed. The problems users don't know how to articulate, the needs that haven't yet surfaced in feedback, the opportunities that exist in adjacent spaces — these require the kind of creative, exploratory thinking that emerges from genuine human-to-human conversation and observation. AI-assisted discovery is excellent at going deep on known problems. It's not a tool for finding unknown ones.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Improving your discovery process?</h3>
    <p class="text-muted-foreground mb-4">The best discovery combines AI-assisted synthesis with genuine human conversation. I've worked on how to integrate both effectively. If you're thinking about your discovery workflow, let's talk through what might work for your context.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"ai-roadmap-planning": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Can AI help you build better roadmaps? Sort of. The reality is more nuanced than the demos suggest — and the places where AI helps are not the places most PMs expect.
  </p>

  <p>I tested four different AI roadmap tools over three months last year. All of them could produce a roadmap. None of them produced a useful one without substantial human input that amounted to most of the strategic work being done by the human anyway.</p>

  <p>This doesn't mean AI has nothing to offer in roadmap planning. It means you have to be precise about what AI can and can't do in this context.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI Helps in Roadmap Planning</h2>

  <h3>Synthesizing input from multiple sources</h3>
  <p>Roadmap planning involves aggregating input from users, sales, customer success, engineering, leadership, market research, and competitive intelligence. The sheer volume of inputs is often what makes roadmap planning feel overwhelming. AI can help synthesize these inputs — identifying which themes appear across multiple sources, which requests are truly unique, and which are expressing the same underlying need in different ways. This synthesis still requires human judgment to prioritize, but the starting point is more organized.</p>

  <h3>Identifying gaps and blind spots</h3>
  <p>When you describe your product strategy and current roadmap to an LLM, it can ask useful questions: What user segments does this roadmap not address? What competitive moves does this roadmap not respond to? What capabilities would these features require that you haven't planned for? These aren't insights the AI generates from nowhere — they're structured questions that help you stress-test your own thinking.</p>

  <h3>Communicating the roadmap</h3>
  <p>Different stakeholders need different roadmap representations. Engineering needs delivery sequencing. Sales needs feature timing and messaging. Leadership needs strategic context. AI can help transform a single source-of-truth roadmap into audience-specific communications — formatting, emphasizing, and framing the same underlying plan for different audiences.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI Falls Short in Roadmap Planning</h2>

  <p><strong>Strategic choices:</strong> The most important roadmap decisions are strategic: which market to prioritize, which user segment to optimize for, which capabilities to build versus buy, in what order to sequence major investments. These require contextual judgment that AI doesn't have. Feeding your strategic context into an LLM and asking for a recommendation will produce a plausible answer — not necessarily the right one for your specific situation.</p>

  <p><strong>Stakeholder management:</strong> The hardest part of roadmap planning is often not figuring out what to build but getting organizational alignment around it. This requires navigating real human relationships, competing incentives, and political dynamics. No AI tool helps with this. It's human work.</p>

  <p><strong>Knowing when the plan is wrong:</strong> A well-formatted, well-synthesized roadmap can look convincing even when the underlying strategy is wrong. AI that helps you produce a better-looking roadmap might actually make it harder to see that the strategy needs revisiting — because the output is more polished and less obviously flawed than what you'd have produced without it.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Working on your roadmap planning process?</h3>
    <p class="text-muted-foreground mb-4">Roadmap planning is as much a social process as an analytical one. I've helped teams build roadmap practices that work both analytically and organizationally. Let's talk about where yours breaks down.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"ai-improve-product-analytics": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Traditional analytics tells you what happened. AI analytics starts to tell you why — and sometimes what to do about it. Here's what this shift looks like in practice and what it means for product teams.
  </p>

  <p>The analytics stack of five years ago was powerful and limited. Powerful because it could track almost anything. Limited because it required a human analyst to translate raw data into insight, and human analysts have finite time and cognitive bandwidth. The bottleneck wasn't data — it was interpretation.</p>

  <p>AI is moving that bottleneck. Not eliminating it — interpretation still requires judgment. But compressing the time from data to hypothesis dramatically.</p>

  <hr class="my-12 border-border/50" />

  <h2>How AI Changes Product Analytics in Practice</h2>

  <h3>Automated anomaly detection</h3>
  <p>The old way: someone notices a metric moving and alerts the team. The new way: the analytics system notices the metric moving, identifies it as statistically anomalous, and alerts the team with context about what else was happening at the same time. Instead of catching anomalies when someone checks the dashboard, you catch them when they happen — with the initial correlational analysis already done.</p>

  <h3>Behavioral pattern identification</h3>
  <p>Identifying the behavioral patterns that predict retention, conversion, or churn used to require either expensive data science work or the specific intuition of an experienced PM. Machine learning models can now identify these patterns at scale — finding the combination of behaviors that distinguishes your high-value retained users from your churned users, across thousands of variables simultaneously.</p>

  <h3>Natural language analytics interfaces</h3>
  <p>The shift from SQL-based analytics to natural language queries is early but real. PMs who can ask "which segments have the best 90-day retention?" or "what's the path most taken by users who convert to paid?" and get immediate answers — without waiting for an analyst or learning SQL — are getting answers to questions they previously couldn't afford to ask. The cost of curiosity has dropped dramatically.</p>

  <h3>Predictive signals</h3>
  <p>Rather than reporting on what already happened, AI-enhanced analytics can generate predictions: which users are likely to churn in the next 30 days based on their current behavioral pattern? Which acquisition cohorts are likely to have high LTV? Which feature combinations predict whether a user will upgrade? These predictions aren't always right, but they're better than guessing — and they're available to PMs who couldn't previously afford dedicated data science support.</p>

  <hr class="my-12 border-border/50" />

  <h2>What AI Analytics Doesn't Replace</h2>

  <p>Analytics tells you where to look. It doesn't tell you what to do. When AI surfaces a pattern — users who do X have 40% better retention — the PM still needs to figure out why, whether X is causal or merely correlated, and what intervention would actually improve retention for users who currently don't do X. That's judgment and research work, not analytics work.</p>

  <p>The PM who treats AI-generated insights as finished analysis rather than as starting points for investigation will make expensive errors with high confidence. The PM who uses AI insights as hypotheses to be tested and understood will make better decisions faster.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Building your analytics capability?</h3>
    <p class="text-muted-foreground mb-4">Good analytics practice is as much about the questions you ask as the tools you use. I've helped product teams build analytics workflows that generate real insight. Let's talk about yours.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"generative-ai-writing-prds": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    I've been using generative AI to assist with PRD writing for over a year. Here's what it's genuinely good at, where it falls flat, and what I've kept in my workflow after the novelty wore off.
  </p>

  <p>The promise of AI for PRDs sounds almost too good: you describe a feature, the AI writes the requirements document, you review and edit. Hours of work compressed into minutes. The reality is more nuanced — but still quite useful, once you understand the right way to use it.</p>

  <hr class="my-12 border-border/50" />

  <h2>What AI Does Well in PRD Writing</h2>

  <h3>Generating comprehensive first drafts</h3>
  <p>If you give an LLM sufficient context — the problem you're solving, the target user, the proposed solution, the success criteria, the constraints — it will produce a structured first draft that covers most of the standard PRD sections. The draft won't be right in all the specifics, but it will be a useful starting point that's faster to edit than to write from scratch. More importantly, it will surface structural gaps and sections you might have skipped if writing quickly.</p>

  <h3>Edge case identification</h3>
  <p>Ask an LLM to identify the edge cases for a feature description, and it will produce a more exhaustive list than most PMs generate under time pressure. Some of these won't be relevant. But the process of going through the list and deciding which ones matter is faster than generating the list yourself. And catching edge cases in the PRD is cheaper than catching them in QA or production.</p>

  <h3>Technical constraint articulation</h3>
  <p>When working with engineers who have provided technical constraints verbally in a planning session, I'll use AI to help me translate those verbal constraints into clear, written requirements language. This is particularly useful when the technical context is complex and I want to make sure the documented constraint accurately reflects what was said.</p>

  <hr class="my-12 border-border/50" />

  <h2>What AI Fails at in PRD Writing</h2>

  <h3>Context and strategy</h3>
  <p>The most important sections of any PRD are the ones that explain why. Why this problem? Why now? Why this solution over alternatives? These sections require deep context about the business, the user, the competitive position, and the strategic priorities — context that doesn't exist in a prompt. AI-generated "why" sections are generic and often wrong for your specific situation. These sections must be written by the PM who has the context.</p>

  <h3>Trade-off documentation</h3>
  <p>Good PRDs document the trade-offs considered and the reasoning behind choices. AI doesn't know what alternatives you considered, what constraints shaped your choices, or what you decided not to do and why. This institutional memory lives with the PM and needs to be written by the PM.</p>

  <h3>Stakeholder-specific framing</h3>
  <p>A PRD is a communication document. The best ones are calibrated to their specific audience — they anticipate the engineering lead's concerns, address the design team's questions, and provide the context that leadership needs to understand the priority. AI doesn't know your stakeholders. It produces generic documentation that doesn't anticipate specific audience needs.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Working on PRD quality?</h3>
    <p class="text-muted-foreground mb-4">The most impactful PRDs are ones that create genuine clarity for the team — not just documentation of decisions. I've developed strong PRD practices over the years and am happy to share what works. Let's talk.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"ai-user-research": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    AI can speed up user research dramatically. It can also introduce bias at scale. Here's an honest assessment of the opportunities and the risks — and how to get the upside without the downside.
  </p>

  <p>The promise: AI can process thousands of user feedback signals simultaneously, surface patterns invisible to human analysts, and dramatically compress the time between data collection and insight. The risk: AI trained on existing data can bake in the biases of that data, surface patterns that look meaningful but aren't, and create false confidence in research conducted without genuine human contact.</p>

  <p>Both the promise and the risk are real. The question is how to maximize the first while managing the second.</p>

  <hr class="my-12 border-border/50" />

  <h2>AI Techniques That Work in User Research</h2>

  <h3>Transcript analysis at scale</h3>
  <p>If your team has conducted 50+ user interviews over the past year, you have a rich dataset that's almost certainly underanalyzed. Most teams read through the interviews they conducted recently and forget the older ones. AI can systematically analyze the full corpus, identify thematic changes over time, and surface insights that emerge only across many sessions — the kind of pattern recognition that human analysts would love to do but rarely have time for.</p>

  <h3>Survey response synthesis</h3>
  <p>Open-ended survey responses are often the most valuable data in a survey and the least analyzed — because reading and categorizing hundreds of text responses manually is laborious. AI can categorize, theme, and synthesize open-ended responses much faster, giving PMs a structured view of a dataset that would otherwise be too large to engage with deeply.</p>

  <h3>Competitive user research</h3>
  <p>App store reviews, Reddit discussions, and social media posts about competitor products are a rich source of user insight that most teams don't have time to monitor systematically. AI can aggregate and synthesize this data, revealing what users love and hate about alternatives — which is invaluable context for understanding the competitive landscape from the user's perspective.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI User Research Goes Wrong</h2>

  <h3>Representational bias</h3>
  <p>AI synthesizes patterns from the users who have generated data. This means it reflects the perspectives of users who are vocal in reviews, who respond to surveys, who contact support, or who were included in past research. Users who are silent — who churn quietly, who never leave a review, who don't know your product exists yet — are invisible to AI-assisted research. If these users are important to your strategy, AI research will systematically mislead you about them.</p>

  <h3>Fluency masking uncertainty</h3>
  <p>AI-generated research summaries are typically well-written and confident-sounding. This fluency can mask genuine uncertainty in the underlying data. A summary that says "users primarily find the onboarding confusing because..." sounds more certain than the actual data might support. PMs need to be skeptical about the precision implied in AI research output and maintain awareness of the limitations of the underlying data.</p>

  <p>The synthesis: use AI to process what you have, but maintain genuine human conversation with users as an irreplaceable component of your research practice. Neither alone is sufficient. Together, they're very powerful.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Building better user research practice?</h3>
    <p class="text-muted-foreground mb-4">Research quality is one of the most underinvested areas in most product teams. I've built research practices that combine depth and scale. Let's talk about what would work for your context.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"ai-copilots-for-pms": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The framing of AI as a "copilot" for product managers is either the most useful metaphor in tech or the most dangerous. It depends entirely on whether you understand what copilots actually do — and what they don't.
  </p>

  <p>In aviation, a copilot is not a second pilot who happens to be sitting in the other seat. The copilot's role is specific: to monitor systems, handle checklist items, and manage the communications that would otherwise distract the pilot. The pilot flies the plane and makes the judgment calls. The copilot handles the procedural overhead so the pilot can focus on judgment.</p>

  <p>That's actually a very good description of how AI should work for PMs. Not making the decisions. Not determining the strategy. Not replacing the user research. Handling the procedural overhead — the synthesis, the formatting, the first-draft generation, the checklist items — so the PM can focus on what requires judgment.</p>

  <p>When PMs use AI as a copilot in this sense, it works very well. When they use it as an autopilot — letting it make the calls — it's dangerous.</p>

  <hr class="my-12 border-border/50" />

  <h2>AI as Copilot: What This Looks Like</h2>

  <p><strong>Managing information flow:</strong> A PM's information environment is overwhelming — Slack, email, JIRA, analytics dashboards, user research, competitive intelligence, stakeholder requests. AI copilots can help triage, summarize, and surface the information that requires the PM's attention, filtering the noise. This is procedural overhead that doesn't require PM judgment to handle — just PM direction about what matters.</p>

  <p><strong>Handling first drafts:</strong> Every PRD, every user story, every stakeholder update, every strategy document starts with a blank page. AI can fill that blank page with a structured starting point that the PM then shapes, refines, and makes genuinely their own. The PM's judgment determines the direction. The AI's drafting removes the friction of starting.</p>

  <p><strong>Checking completeness:</strong> After the PM makes a decision, an AI copilot can review it against a checklist: have you considered edge cases? Have you defined success criteria? Have you communicated the decision to all relevant stakeholders? Have you identified dependencies? These are procedural checks that don't require judgment — they require thoroughness. AI handles thoroughness well.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Autopilot Failure Mode</h2>

  <p>The risk of the copilot metaphor is that it's tempting to let the copilot do more than handle overhead. When the PM is tired, under pressure, or facing an ambiguous situation, the appeal of "let the AI figure this out" is real.</p>

  <p>But product management is fundamentally a judgment role. The value a PM provides is not in managing information or producing documents — any competent AI can do that now. The value is in the judgment calls: which problems matter most, which solutions are worth building, which direction creates the most defensible position. These calls cannot be delegated to an AI that doesn't have the organizational context, the user understanding, or the strategic awareness that makes the PM's judgment worth anything.</p>

  <p>The PM who uses AI as an autopilot is not a PM using AI well. They're a PM who has automated the least important part of their job and is still doing the most important part manually — just with less time and attention for it because the AI is handling the easier stuff.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Figuring out the right AI workflow for your PM role?</h3>
    <p class="text-muted-foreground mb-4">The right use of AI in product work is highly context-dependent. I've been thinking hard about this and have strong opinions about what actually works. Let's compare approaches.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"building-ai-first-products": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    An AI-first product is not a product with an AI feature. It's a product where AI is the core capability — where the entire value proposition is built around what AI makes possible. Building one requires a fundamentally different PM mindset.
  </p>

  <p>I've worked on two kinds of AI products. The first: traditional products where AI was added as a feature. A recommendation engine here. A predictive text field there. A "smart" filter option that used ML under the hood. These are valuable improvements, but they're not AI-first products. The product would still exist and still create value without the AI layer.</p>

  <p>The second kind: a product where AI is the core. Remove the AI, and there's no product. The value proposition is inseparable from what the model can do. Building these is a categorically different challenge.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Makes AI-First Products Different</h2>

  <h3>The product is the model's capabilities</h3>
  <p>In traditional products, the PM defines the product requirements and engineering implements them. In AI-first products, the PM is partly defining the requirements and partly navigating the capabilities of the model — which are fluid, improving over time, and often surprising. The product's possibilities evolve as the model improves, which means the PM has to continuously re-evaluate what's possible and what the product should be.</p>

  <h3>Quality is probabilistic, not deterministic</h3>
  <p>Traditional software does what it's programmed to do. Every time. AI outputs are probabilistic. The model might give an excellent answer 90% of the time and a wrong one 10% of the time. Managing this uncertainty — through model fine-tuning, output validation, human-in-the-loop design, and graceful failure handling — is a uniquely AI-first product challenge. The PM needs to think about quality as a distribution, not a specification.</p>

  <h3>Data is a core product asset</h3>
  <p>AI-first products are only as good as the data they're trained on or can access. This makes data strategy a core product strategy question, not an engineering implementation detail. Where does the model's data come from? How does the product generate proprietary data advantages over time? How does user feedback improve the model's outputs? These are PM questions, not just ML engineering questions.</p>

  <h3>Evaluation is continuous, not launch-based</h3>
  <p>In traditional products, you launch, you measure, you iterate. In AI-first products, the model's behavior can change with fine-tuning, with new training data, or even with changes in user input distribution. The PM needs to build continuous evaluation systems — not just post-launch metrics, but ongoing monitoring of output quality, safety, and alignment with product goals. This is a different kind of analytics than most PMs are used to.</p>

  <hr class="my-12 border-border/50" />

  <h2>The PM Skills That Matter Most in AI-First Products</h2>

  <p>Technical fluency matters more than in traditional product work. Not deep ML engineering knowledge — but enough understanding of how models work, what their failure modes are, and how training data affects outputs to have useful conversations with your ML engineers and to make informed product decisions about AI capabilities.</p>

  <p>Ethics and safety awareness are non-negotiable. AI-first products have failure modes that don't exist in traditional products: bias in outputs, confidentiality risks with user data, misinformation risks, and misuse vectors. The PM who doesn't think systematically about these risks is building a product that will hurt users — often the users with the least power to protect themselves.</p>

  <p>User expectation management is a unique challenge. Users have widely varying expectations of AI, from unrealistic trust to unrealistic skepticism. The PM's job includes designing the product's communication about what AI can and can't do — setting expectations that lead to appropriate trust and catching users before they rely on AI outputs they shouldn't.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Building an AI-first product?</h3>
    <p class="text-muted-foreground mb-4">The PM challenges in AI-first products are genuinely different from traditional product work. I've thought deeply about this space and worked on products where AI was core to the value proposition. Let's talk about what you're building.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`,

"future-role-pms-ai-world": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    In five years, some of what PMs do today will be automated. What remains — and what expands — is worth planning for now. Here's my honest read on where the role is going.
  </p>

  <p>The question I get asked most in this moment of AI acceleration: will product managers be replaced by AI? My honest answer: some PMs will be, and others will be more valuable than ever. The determining factor is whether your value comes from information processing or from judgment. And the distribution of value between those two has been shifting dramatically for several years.</p>

  <p>Let me be specific about what I think will change and what won't.</p>

  <hr class="my-12 border-border/50" />

  <h2>What AI Will Automate (That PMs Currently Do)</h2>

  <p><strong>Routine research synthesis:</strong> Collecting and synthesizing competitive intelligence, user feedback, market data, and product analytics is already faster with AI — and will become substantially faster. The PM who spends 40% of their time on information gathering will need to spend much less time on it. This is good for PMs who use the freed capacity for judgment. It's threatening for PMs whose entire value was in the synthesis.</p>

  <p><strong>Documentation production:</strong> PRDs, user stories, sprint notes, stakeholder updates — the routine documentation that PMs spend significant time producing will increasingly be first-drafted by AI. The PM's role shifts from writing to directing and editing. Less time on keystrokes, more time on clarity of thinking.</p>

  <p><strong>Structured analysis:</strong> Building a feature analysis, scoring options against criteria, creating a competitive landscape matrix — these structured analytical tasks are increasingly AI-assisted. The PM who can define what they want to analyze will still have a job. The PM who was primarily valuable for executing the analysis may not.</p>

  <hr class="my-12 border-border/50" />

  <h2>What AI Will Not Automate</h2>

  <p><strong>Organizational navigation:</strong> Getting a feature prioritized, getting an engineering team to believe in a direction, managing a difficult stakeholder who has competing incentives, navigating a product pivot that requires changing how a team thinks about their work — these are deeply human challenges. AI can help prepare for these conversations. It cannot have them.</p>

  <p><strong>Strategic judgment in novel situations:</strong> AI excels at pattern recognition in domains where it has training data. Product strategy in a specific business context, at a specific moment in time, with a specific competitive landscape — this is a novel situation where the AI's patterns from historical data may be actively misleading. The strategic PM's judgment is more valuable in novel situations, not less.</p>

  <p><strong>User empathy at depth:</strong> AI can analyze what users say. Building a genuine understanding of users' lives, goals, frustrations, and mental models — the kind of empathy that leads to product decisions that feel magical to users — requires human observation, human conversation, and human intuition about human experience. This is irreplaceable.</p>

  <p><strong>Culture building and team leadership:</strong> As PMs become product leaders and VP-level, the work increasingly involves building culture, developing people, and creating organizational conditions for great product work. This is fundamentally human work and will remain so.</p>

  <hr class="my-12 border-border/50" />

  <h2>What Expands for PMs in an AI World</h2>

  <p>The PMs who thrive in an AI-accelerated environment will likely see their scope expand, not contract. With AI handling more of the synthesis and documentation overhead, the PM has more capacity for the high-judgment work: deeper user research, more strategic thinking, stronger stakeholder relationships, more deliberate team leadership. The ceiling of what a PM can do in a given week rises significantly.</p>

  <p>The PMs who struggle will be the ones who don't adapt — who keep doing information processing work manually long after AI can do it better, and who don't develop the uniquely human capabilities that become more valuable as AI handles more of the rest.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-muted-foreground text-xl leading-relaxed">
    "The PM who is valuable because they can synthesize information will be under pressure. The PM who is valuable because they have great judgment about what to do with synthesized information will be in enormous demand."
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
    <h3 class="text-xl font-bold mb-3">Thinking about your PM career in an AI world?</h3>
    <p class="text-muted-foreground mb-4">I've been thinking hard about this question for a while and have strong views on how to position yourself for the next five years. Let's have that conversation.</p>
    <a href="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">Work with Yogesh →</a>
  </div>
`

};

export function getAiPmContent(slug: string): string | undefined {
  return AI_PM_CONTENT[slug];
}
