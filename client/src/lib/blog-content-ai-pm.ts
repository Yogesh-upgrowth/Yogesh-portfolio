export const AI_PM_CONTENT: Record<string, string> = {

"ai-changing-product-management": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    I want to be honest about something: I've been in enough "AI is transforming everything" conversations to last a lifetime. The hype cycle around AI in product management has produced a lot of content that is either breathlessly optimistic ("AI will replace PMs in 5 years") or dismissively skeptical ("AI is just a toy"). Neither is useful.
  </p>

  <p>What I can offer is what I've actually observed — in my own work and in the teams I've advised — about how AI is genuinely changing what product managers do, where the impact is real and significant, and where it's more marginal than the demos suggest.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Changes That Are Real and Already Happening</h2>

  <h3>Research synthesis at scale</h3>
  <p>The most significant change I've seen is in research synthesis. The work of taking 30 user interview transcripts, extracting themes, and producing a coherent synthesis document — work that used to take a capable researcher 2-3 full days — can now be substantially assisted by AI in a fraction of the time.</p>

  <p>This isn't just an efficiency gain. It changes the volume of research that's feasible. Teams that previously could do deep synthesis on 15-20 interviews per quarter can now synthesize far more, and in closer to real time. The feedback loop between user research and product decisions gets tighter.</p>

  <p>The caveat: AI synthesis is not the same as good synthesis. It can identify themes that appear frequently. It's less good at identifying the quietly recurring insight that appeared in only 3 of 30 interviews but turns out to be the most important one. The PM's role in research shifts from doing the synthesis to supervising it — and being skeptical of what the AI missed.</p>

  <h3>First-draft generation</h3>
  <p>PRDs, user stories, competitive analyses, stakeholder communications — AI has meaningfully reduced the time it takes to produce the first draft of these documents. Not the best draft. The first draft.</p>

  <p>What this does for PMs: it removes the blank page problem. The cognitive burden of starting a document from nothing is real. When you can prompt an AI to produce a rough structure and first pass, the work shifts from generation (which is hard) to editing and refinement (which is often faster and uses different cognitive skills).</p>

  <p>What this doesn't do: it doesn't improve the quality of strategic thinking. A PRD that reflects shallow thinking looks better when drafted with AI assistance, but it's still a PRD that reflects shallow thinking. The underlying thinking has to be yours.</p>

  <h3>Code comprehension (for PMs who want it)</h3>
  <p>PMs who work closely with engineering have found AI tools useful for understanding what specific code does — not to write it, but to read it. The ability to paste a code snippet and ask "what does this do and what edge cases does it have?" is a genuine capability expansion for technically curious PMs.</p>

  <h3>Hypothesis generation in brainstorming</h3>
  <p>AI tools have turned out to be surprisingly useful brainstorming partners — not because their ideas are always good, but because they generate many ideas quickly, including some that the PM would never have considered. Using AI to rapidly generate 20 hypotheses about why a metric is declining, and then filtering them with your own judgment, is faster and often more comprehensive than generating hypotheses purely through human brainstorming.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Changes That Are Overhyped</h2>

  <h3>Automated decision-making</h3>
  <p>The promise of AI that recommends product decisions — "based on your data and your goals, the AI recommends prioritizing feature X" — has not materialized in the way the demos suggested it would. The AI can synthesize data. It can surface patterns. It can generate options. But the judgment about which option is right, given the full strategic context, remains human work.</p>

  <p>The companies selling AI roadmap tools often produce recommendations that sound plausible but miss crucial context that the AI doesn't have: the competitive dynamic, the organizational constraint, the user insight that wasn't in the data, the strategic bet the company is making. PMs who tried to outsource roadmap decisions to AI tools have generally found that the recommendations require so much revision that the savings are minimal.</p>

  <h3>AI product discovery</h3>
  <p>The idea that AI can replace user interviews is seductive — imagine understanding users at scale, without the laborious process of recruiting, scheduling, conducting, and analyzing interviews. The reality is more limited. AI can synthesize existing feedback at scale. It can analyze support tickets and reviews to surface themes. It cannot replicate the nuanced, probing, direction-changing conversation that a skilled researcher has with a user. The understanding you get from AI analysis of feedback is more like a survey response: broad but shallow. Deep user understanding still requires human conversation.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Skills That Become More Valuable</h2>

  <p>The most important question for PMs thinking about AI is not "will AI replace me?" but "what skills become more valuable as AI handles more of the routine work?"</p>

  <p><strong>Strategic judgment:</strong> If AI handles more of the analytical and synthesis work, the distinctly human contribution becomes more strategic. The PM who can identify the right problem to solve — who understands competitive dynamics, user psychology, and organizational constraints in ways that AI doesn't — becomes more valuable.</p>

  <p><strong>Critical evaluation of AI output:</strong> AI produces output. Not always good output. The PM who can quickly distinguish AI output that is reliable from output that is confidently wrong is an invaluable skill in an AI-augmented team. This requires enough domain expertise and analytical skill to audit what AI produces.</p>

  <p><strong>Relationship and trust building:</strong> AI cannot build the relationships with engineers, designers, stakeholders, and users that determine whether a PM can do their job. If AI handles more of the documentation and analysis work, the relationship work that AI can't do becomes proportionately more important.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-xl">
    The PMs who will be most valuable in an AI-augmented product world are not the ones who know how to use AI tools. It's the ones who have the judgment to know when AI is wrong, the strategic insight that AI doesn't have, and the relationship skills that AI can't replicate.
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Thinking through AI's impact on your product work?</h3>
    <p class="text-lg text-muted-foreground mb-6">I'm actively working in this space and happy to share what I'm seeing. Let's have an honest conversation about what's changing and what's staying the same.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's talk AI and product</a>
  </div>
`,

"ai-tools-product-managers": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Every few months, a new list of "AI tools every PM needs" circulates on LinkedIn. Most of these lists are a mix of genuinely useful tools, tools that are impressive in demos but underwhelming in daily use, and tools that are solving problems PMs don't actually have.
  </p>

  <p>What I want to give you instead is my honest assessment — based on what I actually use, what I've seen teammates use effectively, and what I've tried and abandoned — of which AI tools are creating real value in product management work right now.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Tools That Are Genuinely Changing PM Work</h2>

  <h3>Claude and GPT-4o (for thinking and writing)</h3>
  <p>I'll be honest: I use both, for different purposes. Claude tends to be better for longer-form reasoning tasks — writing strategy documents, synthesizing complex user research, generating nuanced analysis. GPT-4o is faster and often better for shorter, structured tasks — generating a list of hypotheses, drafting a stakeholder email, creating user story templates.</p>

  <p>The most valuable use is as a thinking partner, not a writing assistant. "I'm trying to decide between prioritizing activation improvement and building an enterprise feature. Here's the context [paste context]. What are the strongest arguments for each?" This kind of structured reasoning exercise often produces considerations I hadn't explicitly formulated, which I can then evaluate with my own judgment.</p>

  <p>The failure mode: using these tools as a shortcut for thinking you haven't done. An LLM can generate convincing-sounding arguments for any position. If you feed it a conclusion and ask it to justify that conclusion, it will — regardless of whether the conclusion is right. Use it to challenge your thinking, not to validate it.</p>

  <h3>Notion AI / Confluence AI (for documentation)</h3>
  <p>For teams already using Notion or Confluence, the AI layers are genuinely useful for documentation work. The ability to quickly summarize a long meeting note, generate a first-draft PRD structure from a prompt, or find related content across a large knowledge base — these are real time savings.</p>

  <p>The limitation: these tools work on the content that exists. They can't help you think through a problem you haven't written about yet. The thinking still happens in your head (or in a conversation with Claude).</p>

  <h3>Otter.ai / Fireflies (for meeting capture and research)</h3>
  <p>Automatic meeting transcription and summarization has become genuinely useful for product research. Running user interviews with automatic transcription, then having the AI produce a structured summary of themes, saves hours of note-taking and transcription work.</p>

  <p>The caveat I've mentioned before: AI summaries of user interviews are first passes, not finished analyses. They'll surface the most frequently mentioned themes. They'll miss the quietly repeated insight that only appeared twice but was clearly a source of frustration both times.</p>

  <h3>Perplexity (for research and competitive analysis)</h3>
  <p>I've found Perplexity more useful than a Google search for product research tasks — it synthesizes from multiple sources and provides citations, which makes it faster to get to a useful overview of a topic. For competitive analysis research, market sizing estimates, and exploring a domain I'm not familiar with, it's a significant time saver.</p>

  <p>The limitations: it can be confidently wrong about specifics. Anything that needs to be accurate — specific company metrics, regulatory details, recent events — needs to be verified against primary sources.</p>

  <h3>Amplitude / Mixpanel with AI features</h3>
  <p>The AI features in analytics platforms are increasingly useful for surface anomaly detection and natural language querying. Being able to ask "why did our D30 retention drop last month?" and get an initial analysis — rather than writing SQL from scratch — is a meaningful efficiency gain for PMs doing analytical work.</p>

  <hr class="my-12 border-border/50" />

  <h2>Tools I've Tried and Found Less Useful Than Expected</h2>

  <h3>AI roadmap tools</h3>
  <p>Several tools promise to help you build smarter roadmaps with AI assistance. My experience: they're good at organizing and visualizing roadmap data, but the "intelligence" they add to the prioritization process is more limited than it appears. The recommendations are often generic ("focus on high-impact, low-effort items") in ways that reflect the tool's defaults rather than your specific context.</p>

  <h3>AI user research synthesis platforms</h3>
  <p>Specialized tools that promise to synthesize user research automatically. The output quality is highly variable. For pattern identification in large datasets (500+ responses to a survey), they're useful. For synthesis of nuanced qualitative research, they lose too much of what makes qualitative research valuable.</p>

  <hr class="my-12 border-border/50" />

  <h2>How to Evaluate Any New AI Tool</h2>

  <p>The question to ask about any AI tool claiming to improve PM work:</p>

  <p><strong>What specific task does this make better?</strong> Not "it uses AI" or "it automates things" — what specific, concrete task does this tool do better than my current approach?</p>

  <p><strong>What does "better" mean in this context?</strong> Faster? More accurate? More comprehensive? These are different values that matter differently in different situations. A tool that produces more comprehensive research synthesis in twice the time might still be valuable. A tool that produces faster but less accurate analysis might not be.</p>

  <p><strong>What does the tool do with my data?</strong> AI tools typically need your data to be useful. What are the privacy implications? For many PMs working with user data, this is a real constraint.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Thinking about your AI toolchain?</h3>
    <p class="text-lg text-muted-foreground mb-6">I'm happy to share what I've found works and what's mostly hype. Sometimes the best answer is "not yet."</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's compare notes</a>
  </div>
`,

"ai-product-discovery-techniques": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Product discovery is the process of figuring out what to build before you build it. It's the most important and most poorly understood part of product management. Most product failures are discovery failures — teams building the wrong thing because they didn't understand the problem deeply enough, or because they tested the solution against an insufficiently representative sample of users.
  </p>

  <p>AI is genuinely changing what's possible in product discovery — in some dimensions dramatically, in others not at all. Here's an honest assessment of both.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI Is Creating Real Discovery Value</h2>

  <h3>Feedback analysis at scale</h3>
  <p>Every product generates feedback at a volume that humans can't fully process: app store reviews, support tickets, user interviews, NPS surveys, social media mentions, community forum posts. Before AI, the standard approach was to sample — read a representative subset and extrapolate. This meant that patterns appearing in only 2-3% of feedback were often missed.</p>

  <p>AI-assisted analysis can process thousands of pieces of feedback in the time it would take a researcher to read dozens. The ability to identify themes, cluster related concerns, and quantify the frequency of different issues across a large feedback corpus is a genuine capability expansion.</p>

  <p>I've used this in practice on a fintech product with thousands of support tickets per week. The AI analysis identified a pattern — users getting confused about a specific workflow after a recent update — that our human sampling had missed because it appeared in only 4% of tickets. But 4% of thousands of tickets is hundreds of users with the same problem, which turned out to be a significant issue.</p>

  <h3>Synthetic user simulation</h3>
  <p>LLMs can be used to simulate user responses to product concepts — not as a replacement for real user research, but as a preliminary filter. Before running real user interviews, you can describe a product concept to an LLM and ask "how would a 35-year-old freelance designer in Mumbai respond to this product?" The simulation is imperfect, but it's faster and cheaper than real research, and it can help refine your hypotheses before you invest in real data collection.</p>

  <p>The limitation is significant: LLMs simulate the average user based on training data. They struggle with specific user contexts, recent market changes, and edge cases. Use them for early-stage concept testing, not for decisions that require real user validation.</p>

  <h3>Competitive intelligence synthesis</h3>
  <p>Understanding the competitive landscape — what products exist, how they're positioned, what users say about them, where they're weak — has always been time-intensive work. AI tools can dramatically compress this research. Analyzing app store reviews of competitors, synthesizing what users say about competitor products, and identifying patterns in competitor feature sets — these are tasks where AI-assisted analysis produces significant time savings.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI Discovery Has Real Limits</h2>

  <h3>Identifying the right problem in the first place</h3>
  <p>The hardest and most important discovery question is: what problem should we be solving? This requires understanding user context, organizational strategy, competitive dynamics, and technical feasibility in ways that AI doesn't have access to. The AI can synthesize feedback about problems users have already articulated. It can't help you identify the problem users don't know they have — the one that becomes obvious only after a skilled interviewer probes deeply into user behavior.</p>

  <h3>Generating genuinely novel ideas</h3>
  <p>AI generates ideas that are combinations and variations of existing concepts in its training data. For incremental improvements to existing product patterns, this is often sufficient. For genuinely novel approaches to user problems — solutions that reimagine the entire interaction paradigm — AI is not the source. These come from deep user empathy, cross-domain insight, and creative human thinking.</p>

  <h3>Real user emotional response</h3>
  <p>The moment when a user encounters a product concept for the first time — their initial reaction, their spontaneous questions, their instinctive resistance — is a primary source of discovery insight. This can't be simulated. The hesitation a user shows when asked to enter their financial information, the delight when they discover a feature solves something they'd given up on, the confusion when the terminology doesn't match their mental model — these are real signals that no AI simulation can produce.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Hybrid Discovery Approach</h2>

  <p>The best discovery work I've seen integrates AI and human approaches deliberately:</p>

  <p><strong>AI first, humans second for feedback analysis.</strong> Use AI to identify the most important themes in large feedback datasets. Then use human judgment to validate those themes, identify what the AI missed, and develop insight about the "why" behind the patterns.</p>

  <p><strong>Humans first, AI synthesis for interview analysis.</strong> Conduct real user interviews with real humans — don't try to simulate this. But use AI to assist with the time-consuming work of transcription, initial theme extraction, and cross-interview pattern identification. The human insight comes from being in the conversation. The AI helps you process and organize what you learned.</p>

  <p><strong>AI for scale, humans for depth.</strong> Use AI to cover breadth — large feedback corpora, competitive landscape — and human researchers for depth — the 5-10 conversations that produce genuine, nuanced understanding of the problem and the user.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Improving your discovery process?</h3>
    <p class="text-lg text-muted-foreground mb-6">I help teams build discovery practices that generate real insight — combining AI efficiency with human depth where it matters most.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's talk discovery</a>
  </div>
`,

"ai-roadmap-planning": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Let me tell you what AI roadmap planning tools actually do in 2026, versus what the marketing material says they do. This matters because I've watched teams buy expensive AI roadmapping tools expecting strategic insight and receiving sophisticated-looking task lists.
  </p>

  <p>The distinction between AI-assisted roadmapping (real, valuable) and AI-generated roadmapping (largely hype) is where a lot of PM energy and budget is going wrong.</p>

  <hr class="my-12 border-border/50" />

  <h2>What AI Roadmapping Tools Actually Do Well</h2>

  <h3>Organizing and visualizing existing information</h3>
  <p>AI roadmapping tools are generally excellent at taking structured information you've already gathered — features, user feedback, business priorities — and organizing them into a visual format. This is useful. It's not the same as strategic roadmapping, but it's a real time saver for the mechanical work of roadmap maintenance.</p>

  <h3>Surfacing connections in large datasets</h3>
  <p>When you have hundreds of user feedback items, feature requests from multiple sources, and a complex backlog, AI tools are good at identifying which items address similar underlying needs. This clustering can surface patterns that manual review would miss — and it can help you see that 30 different feature requests from 30 different sources are all expressions of the same unmet need.</p>

  <h3>Generating first-pass prioritization</h3>
  <p>If you input your criteria — business impact, user value, technical effort, strategic alignment — some AI tools can score items against these criteria and produce a first-pass prioritization. The output is a reasonable starting point. It's not a final answer, and it should be treated as a hypothesis to be interrogated rather than a recommendation to be followed.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI Roadmapping Fails</h2>

  <h3>Strategic context it doesn't have</h3>
  <p>The most important inputs to roadmap decisions are often not in any database or document: the conversation you had with a major customer last week, the competitor move you heard about from a board member, the technical constraint your engineering lead mentioned in passing, the organizational dynamic that makes certain initiatives politically difficult. AI tools can't access this context. Roadmaps built from data alone, without this tacit knowledge, will be wrong in ways that look subtle until the decision is made.</p>

  <h3>Distinguishing strategic priorities from tactical ones</h3>
  <p>An AI tool that scores features by user demand and business impact will consistently surface the most popular features at the highest priority. This is right for tactical decisions. It's often wrong for strategic ones. The strategically most important work — building a platform capability that unlocks a new market, investing in a technical foundation that enables future features, making a bet on an emerging user behavior — often scores poorly on current-user demand because it's creating future value rather than serving current users.</p>

  <h3>Accounting for organizational reality</h3>
  <p>The best roadmap for your team's capability set and organizational constraints is not the same as the theoretically optimal roadmap. An AI tool doesn't know that your best frontend engineer is leaving next month, that your VP of Sales promised a key customer a specific feature, or that your engineering team needs 3 months of focused technical debt work before they can execute on new features effectively. These realities profoundly shape what goes on the roadmap.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Right Way to Use AI in Roadmap Planning</h2>

  <p>AI is most useful in roadmap planning as a way to reduce the cognitive burden of information organization, not as a way to substitute for strategic judgment.</p>

  <p><strong>Let AI handle the information gathering and organization.</strong> Synthesizing user feedback, organizing backlog items, tracking feature requests across multiple channels — these are time-intensive tasks where AI creates real efficiency.</p>

  <p><strong>Use AI to generate options, not to evaluate them.</strong> "What are 20 ways we could address the problem of users not completing onboarding?" is a great AI prompt. "Which of these 20 options should we build?" requires your judgment, your strategic context, and your understanding of organizational reality that the AI doesn't have.</p>

  <p><strong>Use AI to stress-test your thinking.</strong> "I'm planning to prioritize X this quarter over Y. Here's my reasoning. What am I missing? What are the strongest arguments for prioritizing Y instead?" This kind of adversarial use of AI — asking it to challenge your thinking — is more valuable than asking it to confirm your conclusions.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Rethinking your roadmap process?</h3>
    <p class="text-lg text-muted-foreground mb-6">I help product teams build roadmapping processes that are both data-informed and strategically sound. Happy to share what I've found works.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's redesign the process</a>
  </div>
`,

"ai-improve-product-analytics": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Traditional product analytics tells you what happened. The dashboard shows you that your D7 retention dropped 8 points last month. Now what? You know the what. You don't know the why. And you definitely don't know what to do about it.
  </p>

  <p>AI-augmented analytics is closing — partially — the gap between "what happened" and "why did it happen and what should we do." Not completely. Not perfectly. But meaningfully. Here's where it's working and where it's still falling short.</p>

  <hr class="my-12 border-border/50" />

  <h2>Anomaly Detection: The First Real Win</h2>

  <p>The most immediately useful AI application in product analytics is automated anomaly detection. Traditional analytics requires you to know what to look for. AI-powered anomaly detection watches everything and alerts you when something unexpected happens — before you'd normally notice it.</p>

  <p>In practice: instead of noticing in the weekly review that retention dropped, you get an alert Tuesday morning that the D7 retention for users acquired through the iOS app has dropped 12% in the past 48 hours — correlated with a deployment that went out Sunday night. You catch it in 48 hours instead of 2 weeks.</p>

  <p>The detection speed alone is valuable. Problems that compound over weeks cause more damage than problems caught quickly. AI anomaly detection is the smoke alarm, not the firefighter — it tells you something is wrong, not what to do about it.</p>

  <hr class="my-12 border-border/50" />

  <h2>Natural Language Querying</h2>

  <p>The democratization of data access is one of the more quietly significant changes AI is enabling. The ability to ask "show me D30 retention for users who completed the onboarding tutorial versus those who didn't, segmented by acquisition channel, for the last 3 months" in plain language — rather than writing SQL — makes data exploration accessible to PMs who previously needed a data analyst to get this information.</p>

  <p>This isn't just about convenience. It changes the nature of exploration. When you need to write SQL (or ask an analyst) for every query, you ask fewer questions and tend toward questions you already know how to formulate. When querying is conversational, you explore more freely — you follow tangents, you ask "and what about this?" — and you find insights you wouldn't have looked for in a more structured query environment.</p>

  <h3>The limitations to be aware of</h3>
  <p>Natural language querying against analytics data is still imperfect. The AI doesn't always interpret your question the way you intended. It may query on slightly different dimensions than what you asked, producing results that look accurate but are measuring something subtly different. The remedy: always inspect what query was generated for your natural language question, and verify that it matches your intent before drawing conclusions.</p>

  <hr class="my-12 border-border/50" />

  <h2>Pattern Identification at Scale</h2>

  <p>The most sophisticated AI analytics applications are starting to identify patterns in user behavior that humans wouldn't notice — not because the patterns are hidden, but because they exist at a dimensionality that human analysts can't efficiently process.</p>

  <p>Example: a pattern where users who experience a specific sequence of three events in their first session — not any one of the events alone, but the combination in that specific order — have dramatically better 90-day retention. An analyst looking at individual events wouldn't find this. An analyst building a model of event sequences might, but it would take weeks of work. An AI system that can explore the feature space of event sequences systematically can find this pattern in a fraction of the time.</p>

  <p>This kind of pattern identification is where AI analytics is creating genuinely new insight — not just making existing analysis faster, but enabling analysis that wasn't practically feasible before.</p>

  <hr class="my-12 border-border/50" />

  <h2>Where AI Analytics Is Still Struggling</h2>

  <p><strong>Causation vs. correlation:</strong> AI is good at finding patterns. It's not reliably good at distinguishing patterns that reflect causal relationships from patterns that are correlational coincidences. The metric that strongly correlates with retention might not cause retention — it might just be a marker of the type of user who would have retained anyway. Distinguishing causal from correlational signals still requires human reasoning and, ideally, controlled experiments.</p>

  <p><strong>Context that isn't in the data:</strong> A product analytics dataset reflects user behavior inside the product. It doesn't capture why users are behaving that way, what's happening in their lives, what they're comparing your product to, or what would make them behave differently. AI that operates only on in-product data is blind to the context that explains the behavior.</p>

  <p><strong>Strategic interpretation:</strong> The AI can tell you what's happening. It cannot tell you what it means for your product strategy. That interpretation requires understanding your market, your users, your competitive position, and your organizational capabilities in ways that go beyond what's in the data.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Making the most of your product analytics?</h3>
    <p class="text-lg text-muted-foreground mb-6">I help product teams build analytics practices that generate real insight — not just dashboards. Let's look at what your data is telling you.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's dig into your data</a>
  </div>
`,

"generative-ai-writing-prds": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    I've been using AI to draft PRDs for about 18 months now. Long enough to have a genuine opinion. The short version: it saves time, but it doesn't save thinking. And the place where most PMs go wrong with AI-assisted PRD writing is confusing the two.
  </p>

  <hr class="my-12 border-border/50" />

  <h2>What AI Actually Does Well in PRD Writing</h2>

  <h3>Structure and scaffolding</h3>
  <p>One of the consistent time costs in PRD writing is structure — deciding what sections to include, in what order, with what level of detail. AI is excellent at generating sensible structures for standard PRD components: problem statement, user stories, acceptance criteria, edge cases, technical considerations, metrics.</p>

  <p>Given a brief description of the feature and the context, a good LLM will produce a structured outline that covers the major elements. This doesn't mean the structure is always right — sometimes you need to add, remove, or reorganize. But having a starting structure is faster than starting from blank.</p>

  <h3>Generating user story variations</h3>
  <p>"Given I've described this feature, generate 10 user stories that cover the main use cases" — this is a task where AI is genuinely useful. It's not that you couldn't generate these yourself. It's that the AI does it faster and often includes stories you would have missed because they represent edge cases or secondary user types you weren't thinking about.</p>

  <h3>Edge case identification</h3>
  <p>"Here's the happy path for this feature. What edge cases should I consider?" This prompt reliably produces useful output. AI has been trained on enough software requirements documentation to have a comprehensive sense of what can go wrong with common feature patterns — empty states, error handling, concurrent access, international characters, accessibility requirements.</p>

  <h3>Cross-referencing consistency</h3>
  <p>Long PRDs can have internal inconsistencies — a user story in section 3 that contradicts an acceptance criterion in section 5. AI can catch some of these if you ask it to review for consistency. Not all of them — it's not a perfect proofreader — but enough to catch obvious conflicts.</p>

  <hr class="my-12 border-border/50" />

  <h2>What AI Gets Wrong (And Why It Matters)</h2>

  <h3>The thinking behind the spec</h3>
  <p>The most important parts of a PRD are the reasoning: why this feature, why now, why this solution rather than alternatives, what tradeoffs are we accepting. AI can write convincing-sounding reasoning, but it's reasoning based on the patterns of PRDs it's seen, not on the actual strategic context of your product.</p>

  <p>I've used AI to draft the "why" sections of PRDs and found that they often sound plausible but miss the specific business context that makes the decision correct (or incorrect). These sections need to be written by a human who actually understands the strategic context — or heavily rewritten if AI-drafted.</p>

  <h3>Acceptance criteria depth</h3>
  <p>AI-generated acceptance criteria tend to be generic. "The feature should load within 2 seconds" is an AI-generated criterion that's technically correct but doesn't reflect the actual requirements for your specific context. The specific performance thresholds, the specific data formats, the specific integration requirements — these require human knowledge of your system and your users.</p>

  <h3>What the users actually do vs. what the spec assumes</h3>
  <p>AI generates PRDs based on what a typical user might do. Your users might do something quite different. The quirks of your specific user base — how they actually use the product, what language they use, what mental models they have — are not in the AI's training data. PRDs that don't reflect these specifics will produce features that work for a generic user but not for your actual one.</p>

  <hr class="my-12 border-border/50" />

  <h2>My Actual Workflow</h2>

  <p>Here's what I currently do with AI in my PRD writing process:</p>

  <p><strong>Phase 1: Thinking (no AI).</strong> Before I touch any tool, I spend time with the problem. What are we solving? Why? For whom? What alternatives did we consider? What will success look like? I often do this thinking on paper. The outputs of this phase are my raw notes — messy, non-linear, but genuinely mine.</p>

  <p><strong>Phase 2: Structure (AI-assisted).</strong> I share my raw thinking with an LLM and ask it to produce a structured PRD outline with the major sections filled in. I review this against my notes and restructure where it doesn't match.</p>

  <p><strong>Phase 3: User stories and edge cases (AI-first, human review).</strong> I use AI to generate a comprehensive first set of user stories and edge cases. I then review this against my knowledge of the product and users, removing what's not relevant and adding what's missing.</p>

  <p><strong>Phase 4: Critical sections (human-written).</strong> The problem statement, the strategic rationale, the success metrics, and the key decisions and tradeoffs — these I write myself. These are the parts that actually drive whether the PRD succeeds.</p>

  <p><strong>Phase 5: Review and editing (human).</strong> Final review is always human. I read the whole document for coherence, accuracy, and whether it actually reflects what we're trying to build.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Improving your PRD process?</h3>
    <p class="text-lg text-muted-foreground mb-6">I've developed a PRD template and process that combines AI efficiency with the thinking quality that makes PRDs actually useful. Happy to share it.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's talk about it</a>
  </div>
`,

"ai-user-research": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    User research is the practice that most directly determines whether you're building the right thing. It's also the practice that is most vulnerable to being done badly while appearing to be done well. And AI introduces new ways to do user research badly while creating the impression that you're doing it well.
  </p>

  <p>I want to be honest about both the genuine opportunities AI creates in user research and the specific risks it introduces — because both are real, and understanding both is necessary to use AI in this context responsibly.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Genuine Opportunities</h2>

  <h3>Transcription and initial analysis</h3>
  <p>The time cost of user research has historically been dominated not by the research itself but by what happens after: transcribing interviews, organizing notes, identifying themes across sessions. AI has made this mechanical work dramatically faster.</p>

  <p>A 60-minute interview that used to require 3-4 hours of post-processing work can now be transcribed and have a preliminary theme analysis generated in about 30 minutes. This is a 6-8x efficiency gain on the post-processing work. For teams that were doing 10 interviews per quarter because of capacity constraints, this makes 30-40 interviews feasible.</p>

  <h3>Scale — reaching qualitative insight across many users</h3>
  <p>Traditional qualitative research operates at small scale — 8-12 interviews is typical for a discovery project. This is enough to find major themes but often misses minority viewpoints that turn out to be important.</p>

  <p>AI-assisted analysis of large text datasets — support tickets, app reviews, forum posts, NPS open responses — can bring qualitative insight to larger samples. You're not getting the depth of a direct interview, but you can identify patterns across thousands of user expressions rather than dozens.</p>

  <h3>Research question refinement</h3>
  <p>AI tools can be useful for refining research questions before you conduct interviews. "I want to understand why users are abandoning our checkout flow. Here are my current research questions. What's missing? What would be a better way to frame question 3?" This kind of structured brainstorming with AI as a partner can improve the quality of research design.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Real Risks</h2>

  <h3>Confirmation bias at scale</h3>
  <p>The most serious risk is what I think of as "confirmation bias at scale." When you synthesize user feedback with AI, the model will find what you ask it to find. If you phrase your analysis prompts in ways that assume a particular conclusion, the AI will produce analysis that confirms that conclusion — drawing selectively from the data to support the framing you've provided.</p>

  <p>This is exactly what happens in bad qualitative research when humans do it. AI makes it worse because it works at scale (more data processed with the same bias) and produces more authoritative-looking output (the AI synthesis feels more objective than your personal notes).</p>

  <p>The remedy is the same as for human-conducted research: diverse and open-ended analysis prompts, explicit searching for disconfirming evidence, and a deliberate attempt to find themes that contradict your current assumptions.</p>

  <h3>Missing the nuance that doesn't pattern</h3>
  <p>AI finds patterns. User research often produces its most important insights from the things that don't fit the pattern — the user who responded in an unexpected way, the hesitation that didn't match the verbal response, the secondary behavior that contradicted the primary one.</p>

  <p>A skilled researcher notices these exceptions and investigates them. AI summarization tends to smooth them out — the exception gets averaged into the pattern or gets listed as a minority viewpoint without the analysis of why that exception exists and what it reveals.</p>

  <h3>Synthetic research that replaces real research</h3>
  <p>The most dangerous trend I'm seeing: teams using AI to simulate user responses rather than conducting actual user research. "I'll ask GPT-4 how our target user would respond to this design" is not user research. It's a simulation of user research that feels like user research but lacks the crucial element — actual humans responding to the actual stimulus in their actual context.</p>

  <p>Use synthetic research to generate hypotheses to test with real users. Don't use it to replace the testing.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Right Balance</h2>

  <p>The framework I use: AI is excellent at the mechanical parts of user research (transcription, initial theme extraction, quantification of patterns across large datasets). It's poor at the judgment parts (identifying which themes matter most, understanding why a pattern exists, probing beneath stated preferences to find unstated motivations).</p>

  <p>Invest in AI-assisted efficiency for the mechanical parts. Protect the budget and time for human judgment in the analysis and interpretation parts. Don't let AI efficiency gains become a justification for cutting the research hours that produce real insight.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Building better user research practices?</h3>
    <p class="text-lg text-muted-foreground mb-6">I help product teams design research programs that generate genuine insight — using AI where it adds value without sacrificing the human depth that good research requires.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's talk research</a>
  </div>
`,

"ai-copilots-for-pms": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The "AI copilot" framing is interesting because it gets something important right and something important wrong simultaneously. What it gets right: the PM remains the pilot, in command of the direction and responsible for the outcomes. What it gets wrong: a copilot is a peer who brings equivalent expertise and judgment. AI is not a peer. It's more like a very fast, very knowledgeable, sometimes unreliable junior analyst.
  </p>

  <p>How you relate to AI as a PM — whether you treat it like a copilot, a junior analyst, an oracle, or a search engine — shapes how you use it and how much value you get. Let me share how I've come to think about this.</p>

  <hr class="my-12 border-border/50" />

  <h2>The PM-AI Relationship That Works</h2>

  <h3>AI as a thinking partner for structured exploration</h3>
  <p>The most consistently valuable use I've found: structured exploration of a problem before I've formed a conclusion. I describe a product situation — a metric anomaly, a prioritization dilemma, a user insight — and ask the AI to help me think through it systematically.</p>

  <p>This works not because the AI's analysis is always right, but because it forces me to articulate my thinking clearly (a benefit independent of the AI's response) and because it generates angles of analysis I might not have considered. The value is in the process, not just the output.</p>

  <h3>AI as a first-draft generator for time-consuming documents</h3>
  <p>I've described this in the PRD writing context, but it applies broadly: for any structured document where the format is relatively standard and the content requires significant typing, AI as a first-draft generator creates real time savings. The PM's job becomes direction and editing rather than typing.</p>

  <h3>AI as an adversarial reviewer</h3>
  <p>One of the most useful things you can do with AI is ask it to argue against your position. "Here's my plan for Q2. What are the strongest arguments against this approach? What am I most likely to be wrong about?" The AI will generate counterarguments — some obvious, some you hadn't considered. This is not about letting the AI make the decision. It's about using AI to expand the range of considerations before you make it.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Traps to Avoid</h2>

  <h3>Using AI to avoid thinking</h3>
  <p>The biggest risk I see in PMs using AI as a copilot: it becomes a way to feel productive without doing the hard thinking. You get a document, you get a list of options, you get a structured framework — but you haven't actually grappled with the problem. The document is polished, the list is comprehensive, and the thinking is shallow.</p>

  <p>The test: after using AI for a task, ask yourself what you actually understand now that you didn't before. If you used AI to write a PRD but you can't explain the core decisions in the PRD without referring to the document, the thinking didn't happen.</p>

  <h3>Trusting AI output without verification</h3>
  <p>AI is confidently wrong at a meaningful rate — not most of the time, but often enough that verification is non-optional. Factual claims, specific metrics, regulatory requirements, technical assertions — all of these should be verified against primary sources before you rely on them for important decisions.</p>

  <p>The failure mode: AI produces a competitive analysis that contains several inaccurate facts about competitor products. You use it in a stakeholder presentation. A colleague who knows the competitive landscape catches the errors. Your credibility takes a hit that would have been entirely avoidable.</p>

  <h3>Using AI output directly with stakeholders</h3>
  <p>AI-generated content often has a particular texture — comprehensive, slightly generic, covering all the expected topics without the specific context that makes a document genuinely useful for your specific situation. Experienced stakeholders can often tell the difference between AI-generated and genuinely-thought-through content. Before sharing anything with stakeholders, make sure it reflects your actual thinking, not just AI's template.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Integrating AI into your PM workflow?</h3>
    <p class="text-lg text-muted-foreground mb-6">I've been thinking carefully about this for the past 18 months. Happy to share what I've found works, what doesn't, and what the right mental model is.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's compare approaches</a>
  </div>
`,

"building-ai-first-products": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    Building an AI-first product is genuinely different from building a product that uses AI as a feature. The difference is not in the technology — it's in the product philosophy, the design decisions, the metrics you track, and the risks you accept.
  </p>

  <p>I've worked on both kinds of products: products where AI was added as a feature on top of an existing core, and products where AI capability was central to the product's value proposition from the start. The experiences are quite different. Here's what I've learned.</p>

  <hr class="my-12 border-border/50" />

  <h2>What "AI-First" Actually Means</h2>

  <p>An AI-first product is one where AI is the mechanism through which the core user value is created. Remove the AI, and the product's core value proposition doesn't work.</p>

  <p>Examples: GitHub Copilot is AI-first — the product exists to provide AI-assisted code completion, and without that capability the product doesn't exist. A social media platform with an AI-powered content recommendation algorithm is not AI-first — the platform existed before AI recommendations, and would continue to exist (differently, but functionally) without them.</p>

  <p>This distinction matters for how you think about PM responsibilities:</p>

  <h3>In AI-first products, the model behavior is a product decision</h3>
  <p>When AI generates outputs that users interact with directly, decisions about model behavior — how confident the model sounds, what it refuses to generate, how it handles ambiguity — are product decisions, not just engineering ones. The PM needs to be involved in defining these behaviors, testing them with users, and iterating on them the way they would iterate on any feature.</p>

  <p>This is unfamiliar territory for PMs who are used to dealing with deterministic software. When software has a bug, the output is consistently wrong. When an AI model makes a mistake, the output is probabilistically wrong — sometimes right, sometimes wrong, in ways that are hard to predict for any given input. This changes how you test, how you communicate with users, and how you think about quality.</p>

  <h3>The user experience of uncertainty</h3>
  <p>AI products are often non-deterministic — the same input can produce different outputs, and the outputs are not always correct. Users have to learn to work with this uncertainty. How you design the user experience around this uncertainty is one of the most important PM decisions in AI-first products.</p>

  <p>Design choices that work: showing confidence levels alongside outputs, making it easy to request regeneration, providing context that helps users evaluate whether the output is correct, building in easy mechanisms to report errors. Design choices that backfire: presenting AI outputs as authoritative without appropriate caveats, making correction difficult, or hiding the AI nature of the product in ways that create unrealistic expectations.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Metrics That Are Different</h2>

  <p>Standard product metrics don't fully capture AI product performance. You need additional metrics specific to the AI component:</p>

  <p><strong>Task completion rate:</strong> For AI-assisted tasks, what percentage of users complete the task they started with AI assistance? This captures whether the AI is actually helping or creating frustration.</p>

  <p><strong>Edit rate:</strong> For generative AI products, what percentage of AI-generated outputs do users edit before using? A high edit rate suggests the AI output isn't close enough to what users want. A zero edit rate might suggest users aren't reading the output carefully.</p>

  <p><strong>Retry rate:</strong> How often do users regenerate or ask for a different result? High retry rates indicate the first response isn't meeting expectations.</p>

  <p><strong>Acceptance rate:</strong> For AI suggestions that users can accept or reject, what percentage are accepted? This is a direct measure of suggestion quality from the user's perspective.</p>

  <p><strong>Harm metrics:</strong> For any AI product generating content, tracking harmful outputs — factually incorrect, biased, or otherwise problematic — is a non-negotiable metric. These should be tracked as bugs, with the same urgency as product-breaking bugs in traditional software.</p>

  <hr class="my-12 border-border/50" />

  <h2>The Trust Problem</h2>

  <p>The central challenge in AI-first product design is trust calibration. You want users to trust the AI enough to use it and get value from it. You don't want them to trust it so much that they don't catch its mistakes.</p>

  <p>Both failure modes are real:</p>

  <p><strong>Under-trust:</strong> Users are so skeptical of AI output that they verify everything manually, eliminating the efficiency benefit of using AI at all. Often the result of early bad experiences with the product.</p>

  <p><strong>Over-trust:</strong> Users accept AI output without sufficient scrutiny, leading to errors propagating into real outputs. This is the failure mode that creates reputational and liability risk.</p>

  <p>Designing for appropriate trust calibration is one of the most nuanced UX challenges in AI-first products. It requires understanding your specific user population's priors about AI, the stakes of errors in your specific use case, and the mechanisms that help users evaluate AI output quality.</p>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Building an AI-first product?</h3>
    <p class="text-lg text-muted-foreground mb-6">I've been in the trenches of AI product development and have opinions on what works. Happy to talk through the specific challenges you're navigating.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's dig into it</a>
  </div>
`,

"future-role-pms-ai-world": `
  <p class="lead text-xl text-foreground font-medium mb-8">
    The honest answer to "what will product managers do in an AI world?" is: we don't know exactly. But we can reason about it carefully. The parts of the PM role that are most at risk are the ones that involve information processing, routine documentation, and pattern matching. The parts that are most durable are the ones that involve judgment, relationships, and ethics.
  </p>

  <p>Let me try to be precise about what this means for how you should be developing your career and your skills today.</p>

  <hr class="my-12 border-border/50" />

  <h2>The PM Tasks Most Likely to Be Automated</h2>

  <h3>Routine documentation</h3>
  <p>User stories, meeting notes, status updates, basic PRD structures — these are already substantially AI-assisted, and the assistance will deepen. The PM who spends significant time on routine documentation today will find that work increasingly automated in 3-5 years. This is largely positive — these tasks were not the highest-value use of PM time. The challenge is that they were visible, tangible outputs. Their automation will require PMs to demonstrate value in less tangible ways.</p>

  <h3>Basic analytical tasks</h3>
  <p>Reading a dashboard, identifying obvious trends, generating a first-pass hypothesis about what a metric change means — these tasks will become AI-assisted to a degree that changes the PM's role. The PM will shift from performing the analysis to supervising it: setting the analytical questions, evaluating the AI's output, and deciding what to investigate further.</p>

  <h3>Information aggregation</h3>
  <p>Competitive research, market sizing, technology landscape assessment — gathering and organizing information from diverse sources is increasingly AI-accelerated. The PM will still need to ask the right questions and evaluate the answers, but the information gathering itself will require much less time.</p>

  <hr class="my-12 border-border/50" />

  <h2>The PM Capabilities That Become More Valuable</h2>

  <h3>Judgment in genuinely ambiguous situations</h3>
  <p>AI is good at well-defined problems with clear success criteria. Product management is full of genuinely ill-defined problems where the success criteria are themselves uncertain and contested. The PM who can navigate these situations — who can make intelligent decisions when the goal is unclear, the data is incomplete, and the stakeholders disagree — is doing something AI cannot replicate.</p>

  <h3>Building trust and relationships</h3>
  <p>The PM's job involves a significant amount of relationship building: with engineering (to make things get built), with design (to make things work well), with leadership (to secure resources and alignment), with customers (to understand their needs). None of this is automatable. And as more of the PM's analytical and documentation work gets AI-assisted, the relationship work becomes proportionately more central.</p>

  <h3>Ethical judgment</h3>
  <p>AI products raise ethical questions that AI tools can't resolve: how much user data should we collect? How do we handle potential harms to vulnerable users? What do we do when the AI's best practice conflicts with user privacy? These are questions that require human judgment about values — and someone has to make these calls. The PM is often that person.</p>

  <h3>Cross-domain synthesis</h3>
  <p>The PM's most distinctive value has always been integrating information from many domains — user research, competitive intelligence, technical constraints, business strategy — into coherent product decisions. AI can process information from each of these domains. It's less good at the integration that requires understanding how insights from one domain constrain or enable options in another. This synthesis is distinctly human work.</p>

  <hr class="my-12 border-border/50" />

  <h2>What to Build in Your Career Today</h2>

  <p>Given this assessment, here's where I'd focus PM career development in 2026:</p>

  <p><strong>Deepen your domain expertise.</strong> An AI tool can research any industry. It can't replicate your 5 years of fintech industry knowledge, your relationships with key customers, your intuitive understanding of the regulatory landscape. Domain depth becomes more valuable as generic information becomes more accessible.</p>

  <p><strong>Develop genuine strategic thinking.</strong> The PM who can reason carefully about competitive dynamics, business model trade-offs, and long-term product direction is doing something AI augments but doesn't replace. Study strategy deliberately — read widely, practice structured analysis, seek exposure to senior strategic decision-making.</p>

  <p><strong>Get better at the human parts.</strong> Stakeholder influence, conflict resolution, team building, executive communication — invest in these explicitly. They don't come from courses or reading. They come from experience and deliberate reflection on that experience.</p>

  <p><strong>Learn to work with AI well.</strong> The PM who knows how to get the most out of AI tools — who can formulate good prompts, evaluate AI output critically, and integrate AI into their workflow without losing their own judgment — will be more effective than peers who haven't developed this fluency. This is a skill worth building now.</p>

  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-xl">
    The product managers who will thrive in an AI world are not the ones who know the most about AI. They're the ones who know themselves — who have genuine expertise, genuine relationships, and genuine judgment that AI tools can amplify but not replicate.
  </blockquote>

  <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center mt-12">
    <h3 class="text-2xl font-serif font-bold mb-4">Planning your PM career for an AI world?</h3>
    <p class="text-lg text-muted-foreground mb-6">This is a question I find genuinely important. I'm happy to think through it with you — specifically for your situation, not generically.</p>
    <a href="/contact" class="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">Let's think it through</a>
  </div>
`,

};

export function getAiPmContent(slug: string): string | undefined {
  return AI_PM_CONTENT[slug];
}
