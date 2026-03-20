import { TrendingUp, Zap, Target, Pen, Brain, BarChart3, MessageSquare, Lightbulb } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function MicrocopyContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How 8 Words Changed Our CTR by 35%</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We had a button. It said "Get Started." It converted at 4.1%. We changed it to "Compare Rates Free — Takes 60 Seconds." It converted at 5.5%. Eight words. Six weeks of testing. <strong className="text-foreground">35% improvement in CTR.</strong></p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">But the insight runs deeper than one button. When we systematically applied microcopy principles across every interaction point — error messages, placeholder text, tooltips, form labels, success states — the compounding effect was 3× larger than any single-element test.</p>
        <InsightBox>Microcopy is the writing that users read in the 2–4 seconds before making a micro-decision. Every button, label, placeholder, and error message is a micro-decision moment. Get them right consistently — and the product converts like a great salesperson, silently and at scale.</InsightBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Microcopy Audit: What We Found</h2>
        <DataTable
          headers={["Element", "Old Text", "Problem", "New Text", "Result"]}
          rows={[
            ["Primary CTA", "'Get Started'", "Generic, no value, no urgency", "'Compare Rates Free — 60 Seconds'", "+35% CTR"],
            ["Email field placeholder", "'Enter email'", "No context, no reason", "'Your comparison report goes here'", "+18% completion"],
            ["Error: wrong phone format", "'Invalid phone number'", "Blames user, no help", "'Use format: 98XXXXXXXX'", "−42% error repeats"],
            ["Password field hint", "'Password'", "No guidance", "'At least 8 characters — we'll remember it'", "+24% completion"],
            ["Form submit button", "'Submit'", "Dead, anonymous", "'See My Best Rate →'", "+29% form completion"],
            ["Success state", "'Done!'", "Immediate exit trigger", "'Your comparison is ready. Saving ₹X matters.'", "+22% next-step click"],
          ]}
        />
        <ProblemBox>Every piece of copy in our product had been written by developers and engineers to be technically correct. None of it had been written by anyone thinking about what the user was feeling when they read it.</ProblemBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where Microcopy Had the Highest Impact</h2>
        <DataTable
          headers={["Interaction Point", "Decision Being Made", "Copy Quality Impact", "Before → After CTR"]}
          rows={[
            ["Primary CTA", "'Should I start?'", "Very High", "4.1% → 5.5% (+35%)"],
            ["Error messages", "'Can I fix this? Is it worth it?'", "High", "Re-attempt rate +42%"],
            ["Form placeholder text", "'What do they need from me?'", "Medium-High", "Completion +18%"],
            ["Success state", "'What do I do next?'", "High", "Next-step click +22%"],
            ["Tooltip / helper text", "'Is this safe to answer?'", "Medium", "Drop-off −14%"],
          ]}
        />
        <TakeawayBox>The highest-impact microcopy moments are the ones that intercept fear or confusion — not just describe what to do. Error messages and CTAs carry the most decision weight.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Copy describes what the element does ('Submit', 'Enter email')</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Copy answers the user's implicit question at that moment ('What do I get?' 'Is this safe?' 'What happens next?')</p>
          </div>
        </div>
        <BlockQuote>The best microcopy doesn't describe the action. It answers the question the user didn't know they were asking.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Decision Language Optimization System (DLOS)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">DLOS maps every interaction element to the implicit question the user is asking at that moment — then writes copy that directly answers it.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<MessageSquare className="h-5 w-5 text-primary" />} title="Question: 'Should I start?'" body="CTA copy answers: what value do I get + how long does it take + what risk do I take? 'Compare Rates Free — 60 Seconds' answers all three." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Target className="h-5 w-5 text-green-600" />} title="Question: 'What do they need?'" body="Placeholder text answers: why this field matters to the user (not to the system). 'Your comparison report goes here' — user-benefit framing." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Pen className="h-5 w-5 text-purple-600" />} title="Question: 'Did I break something?'" body="Error messages answer: what went wrong (not accusation) + exactly how to fix it. 'Use format: 98XXXXXXXX' — instruction, not criticism." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-orange-600" />} title="Question: 'What happens next?'" body="Success state answers: what the user just accomplished + natural next action. Avoid dead ends — 'Done!' ends the conversation." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Copy Principle", "Rule", "Example"]}
          rows={[
            ["Benefit-first", "Lead with what user gets, not what they do", "'See My Best Rate' not 'Submit'"],
            ["Specific over generic", "Numbers and specifics always beat abstract", "'60 Seconds' not 'quick'"],
            ["User-first framing", "Who benefits in the sentence? (user, not system)", "'Your report' not 'Report generated'"],
            ["Forward momentum", "Every success state points to next action", "'Your comparison is ready →'"],
            ["Instruction over accusation", "Errors teach, never blame", "'Use format X' not 'Invalid input'"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Microcopy Inventory", points: ["Audited 87 distinct copy elements across 8 key screens", "Each element classified by: decision type, implicit user question, current answer quality", "Priority ranked by conversion impact × traffic volume"] },
            { layer: "Layer 2", title: "DLOS Rewriting", points: ["Top 20 elements rewritten using DLOS framework", "Each rewrite: 3 variants written, 1 selected by copywriter", "A/B tested individually — no bundled tests"] },
            { layer: "Layer 3", title: "Error Message System", points: ["All 31 error messages rewritten to instruction-first format", "Error message copy stored in centralized strings file", "UI engineer never writes user-facing copy — owned by content designer"] },
            { layer: "Layer 4", title: "Continuous Optimization", points: ["Monthly copy review: underperforming elements flagged by CTR tracking", "A/B framework: 1 copy test always running per key screen", "Copy changelog maintained — every change documented with outcome"] },
          ].map((l) => (
            <div key={l.layer} className="p-6 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-foreground mb-3"><span className="text-primary font-mono text-sm">{l.layer} · </span>{l.title}</p>
              <ul className="space-y-2">{l.points.map((p, i) => (<li key={i} className="flex gap-2 text-sm text-foreground/70"><span className="text-primary mt-0.5 shrink-0">→</span>{p}</li>))}</ul>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Execution" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Execution Journey</h2>
        <div className="space-y-4">
          <Phase num="Phase 1" period="Week 1–2" title="Audit + Priority" actions={["87 copy elements audited", "20 highest-impact elements identified", "DLOS rewrites produced for top 20"]} result="Priority copy rewrite queue established" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Week 3–4" title="CTA + Forms" actions={["Primary CTA rewrite: A/B test launched", "'Get Started' vs 'Compare Rates Free — 60 Seconds'", "Form field placeholders and labels rewritten"]} result="CTA CTR: 4.1% → 5.5% (+35%)" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Week 5–6" title="Error + Success" actions={["31 error messages rewritten to instruction format", "All success states updated with next-action orientation", "Error re-attempt rate improved 42%"]} result="Form completion rate +18%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Week 7+" title="Compounding" actions={["All 20 elements live", "Content designer hired as dedicated role", "Continuous A/B testing cycle established"]} result="Overall page conversion +31% (compound effect)" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="35%" label="Primary CTA CTR" sub="single element improvement" color="text-green-600" />
          <MetricCard value="31%" label="Overall Page Conversion" sub="compound microcopy effect" color="text-primary" />
          <MetricCard value="42%" label="Error Re-attempt Rate" sub="instruction-format error messages" color="text-green-600" />
          <MetricCard value="₹0" label="Engineering Cost" sub="copy changes require no code" color="text-primary" />
        </div>
        <DataTable
          headers={["Copy Element", "Before", "After", "Improvement"]}
          rows={[
            ["Primary CTA CTR", "4.1%", "5.5%", "+35%"],
            ["Form completion rate", "23%", "38%", "+65%"],
            ["Error re-attempt rate", "34%", "76%", "+42 pp"],
            ["Success state next-step click", "12%", "34%", "+183%"],
            ["Overall page conversion", "4.3%", "5.6%", "+31%"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Copy is a product decision, not a writing task" body="When engineers write copy, they describe system states. When copywriters write copy, they answer user questions. These are fundamentally different cognitive tasks — and the outcomes are measurably different." />
          <Insight num="02" title="Error messages are the most underrated conversion lever" body="Error messages are read by users who are still engaged enough to try again — that's a higher-intent moment than initial CTAs. Instruction-format errors converted re-attempts at 76% vs 34%." />
          <Insight num="03" title="Specificity creates movement" body="'Quick' means nothing. '60 Seconds' creates a mental simulation: the user imagines doing it in 60 seconds. That simulation drives action. Vagueness creates hesitation. Specificity creates forward motion." />
          <Insight num="04" title="Success states are the most wasted screen in most products" body="Most success states end the interaction. 'Done!' closes the user's context. Success states that point forward ('Your comparison is ready → See your result') extend the session and increase revenue per visit." />
          <Insight num="05" title="Microcopy compounds — individual wins add up to structural improvement" body="The CTA test alone gave +35%. The full 20-element program gave +31% overall conversion — because every interaction point was improved. Compound microcopy is greater than the sum of its parts." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="CTA specificity backfired in one segment" why="'Compare Rates Free — 60 Seconds' showed lower conversion for B2B users (who expected a sales call, not a self-serve flow). 60 seconds implied low-value product to them." fix="Detected B2B users via company email domain. Served variant: 'Get a Custom Quote — We'll Call You.' CTA CTR for B2B: +44% vs generic version." />
          <FailurePoint title="Overcrowded copy in error messages" why="Instruction-format rewrites sometimes became 2–3 sentences. Users skimmed and missed the fix. Re-attempt rate fell 12% for long-form errors vs short-form." fix="Hard rule: error messages max 12 words. Format: '[What happened]. [How to fix it].' Two sentences maximum, always." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Segment-Personalized Copy" body="Primary CTA and key copy served differently based on user segment — B2B vs consumer, first-time vs returning. Same element, different answer to the implicit question." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="AI Copy Generation" body="GPT-powered copy variant generation for every A/B test — 10 variants produced in minutes, best 3 selected for testing. Dramatically accelerate the testing velocity." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Copy Performance Index" body="Every piece of copy tracked with its own CTR, completion rate, or error re-attempt metric. Copy performance dashboard — identifies underperforming elements automatically." />
        </div>
        <BlockQuote>We changed 8 words on a button and got 35% more clicks. The best conversion optimizations don't require engineering — they require understanding what users are silently asking.</BlockQuote>
      </section>
    </div>
  );
}
