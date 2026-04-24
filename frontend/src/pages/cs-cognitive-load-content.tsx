import { Brain, Minus, Layers, Target, Zap, BarChart3 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function CognitiveLoadContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">We Simplified the Product. Conversions Dropped. Here's What We Missed.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The redesign had strong conviction behind it. The existing comparison interface showed 14 data points per insurance plan — premium, IDV, claim settlement ratio, NCB, zero depreciation availability, roadside assistance, and 8 more. It was overwhelming. Users were clearly spending too much time processing it.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We simplified. Cut to 6 data points. Cleaner layout. Less cognitive load. The A/B test ran for 3 weeks. Conversions fell 18%. We were confused for about 10 days before we figured out what had happened.</p>
        <ProblemBox>We had reduced cognitive load — but we'd also removed the information users needed to feel confident in their decision. The "overwhelming" interface was overwhelming because it contained too much data. But the simplified version was unconverting because it contained too little trust.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The real insight wasn't about how much information to show. It was about <em>which</em> information reduces anxiety vs which information creates it — and those are different questions entirely.</p>
      </section>

      <SectionDivider label="What the Data Said" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Why the Simplification Failed</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Post-test analysis, user interviews, and session recording review told a coherent story about why conversion fell when we simplified.</p>
        <DataTable
          headers={["Removed Data Point", "User Quote from Interviews", "Impact of Removal"]}
          rows={[
            ["Claim Settlement Ratio", "'How do I know they'll actually pay?'", "Trust metric — absence increased anxiety"],
            ["Network Hospital Count", "'I want to check if my hospital is covered'", "Personal relevance signal — absence stalled decision"],
            ["IDV Explanation", "'What does IDV mean? Is it important?'", "Jargon without context created confusion"],
            ["Policy Document Link", "'Where do I see the actual terms?'", "Transparency signal — absence felt like hiding"],
            ["User Rating + Count", "'Do people actually buy this?'", "Social proof — absence removed peer confidence"],
          ]}
        />
        <InsightBox>Every piece of information we removed was something that a segment of users needed to feel confident enough to proceed. We'd read "high time-on-page" as confusion. Some of it was. But some of it was deliberate due diligence — users doing exactly what we should want them to do.</InsightBox>
      </section>

      <SectionDivider label="Two Types of Cognitive Load" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Not All Load Is the Same</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The mistake was treating cognitive load as a single thing to minimize. Research and user interviews showed two distinct load types — and they require opposite responses.</p>
        <div className="grid sm:grid-cols-2 gap-5 my-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-3 text-sm uppercase tracking-wider">Extraneous Load — Reduce This</p>
            <p className="text-sm text-foreground/80 mb-3">Load from poor design: confusing layout, technical jargon, irrelevant data, visual clutter. This load doesn't help users decide — it just exhausts them.</p>
            <ul className="space-y-1 text-xs text-foreground/60">
              <li>→ Insurance jargon without explanation</li>
              <li>→ 14 data points with no priority hierarchy</li>
              <li>→ Compare button buried below the fold</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-3 text-sm uppercase tracking-wider">Germane Load — Preserve This</p>
            <p className="text-sm text-foreground/80 mb-3">Load from the inherent complexity of the decision itself. This load is the product of genuine due diligence. Remove it and users feel uncertain, not confident.</p>
            <ul className="space-y-1 text-xs text-foreground/60">
              <li>→ Claim settlement ratio comparison</li>
              <li>→ Network hospital check</li>
              <li>→ Policy document review</li>
            </ul>
          </div>
        </div>
        <TakeawayBox>We had reduced both types of load simultaneously by removing 8 data points. The extraneous load reduced correctly — users spent less time confused by jargon and visual noise. The germane load reduced incorrectly — users lost the information they needed to feel confident, and responded by not converting.</TakeawayBox>
      </section>

      <SectionDivider label="The Reframe" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">From "Show Less" to "Show the Right Things at the Right Time"</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The redesign question changed: not "how many data points?" but "which data points, presented how, at which stage of the decision?"</p>
        <BlockQuote>A 35-year-old buying health insurance for their family needs claim settlement ratio, network hospitals, and room rent limits. An 18-year-old buying bike insurance needs premium price, zero depreciation, and roadside assistance. Same interface; completely different decision-critical information.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The solution was progressive disclosure by decision stage — not wholesale simplification — combined with jargon elimination to reduce extraneous load without removing decision-relevant information.</p>
      </section>

      <SectionDivider label="The New Design" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Actually Built</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-primary" />}
            title="Progressive Disclosure by User Type"
            body="Default view: 5 core metrics relevant to the detected user type (health vs motor vs life). 'See all details' expands to full comparison. User type inferred from product category and initial browsing behavior. Right information first; full transparency available."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-green-600" />}
            title="Jargon Elimination Layer"
            body="All insurance terms accompanied by plain-language tooltips triggered on tap. 'Claim Settlement Ratio' → 'What % of claims this insurer paid last year (higher = better)'. Extraneous load from jargon reduced; germane load of actual content preserved."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Priority Ranking by Decision Relevance"
            body="Data points ranked by decision importance for the specific user's situation — not alphabetically or by insurer preference. A first-time buyer's default view differs from a renewal buyer's. Rank by usefulness, not convention."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Minus className="h-5 w-5 text-orange-600" />}
            title="Visual Hierarchy for Comparison"
            body="Strongest data point for each plan highlighted visually. Weakest data point (vs competitive set) marked differently. Users process relative comparison faster than absolute numbers. Reduce processing load through visual comparison rather than requiring mental math."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Technical Build" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Implementation Details</h2>
        <div className="space-y-4">
          {[
            { title: "User Type Inference", points: ["Product category (health/motor/life) drives default data point set", "Behavioral signals: if user filters by price first → price-sensitive view; if user checks claim ratio first → trust-sensitive view", "User type stored in session: view preference consistent across comparison pages"] },
            { title: "Jargon Tooltip System", points: ["Plain-language definitions for 140+ insurance terms", "Triggered on tap (mobile) / hover (desktop)", "Tooltip content reviewed quarterly for accuracy with IRDAI guidelines"] },
            { title: "Visual Comparison System", points: ["Per data point: best value in comparison highlighted green, worst value highlighted red", "Competitive position shown as percentile: 'Better than 78% of plans in this category'", "No absolute numbers required for comparison — visual encoding does the cognitive work"] },
          ].map((l) => (
            <div key={l.title} className="p-6 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-foreground mb-3 text-primary">{l.title}</p>
              <ul className="space-y-2">
                {l.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/70"><span className="text-primary mt-0.5 shrink-0">→</span>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Execution" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Diagnosis, Redesign, and Recovery</h2>
        <div className="space-y-4">
          <Phase num="Weeks 1–3" period="Post-Mortem" title="Understanding Why It Failed" actions={["10-day analysis: session recordings, user interviews, data point usage tracking", "Identified: extraneous vs germane load distinction", "Specific data points mapped to their impact on decision confidence"]} result="Root cause confirmed: removed germane load. Redesign brief written." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Weeks 4–7" period="Redesign" title="Progressive Disclosure Architecture" actions={["User type inference built and tested", "Jargon tooltip system implemented for 140+ terms", "Visual comparison system built (highlight best/worst per metric)"]} result="New design in staging. Ready for A/B test." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Weeks 8–11" period="A/B Test" title="New Design vs Original" actions={["Progressive disclosure vs original 14-point view", "Not vs the failed simplification — vs the original", "User type inference validated: correct type detected 78% of first session"]} result="New design: +31% vs original. Extraneous load reduced; germane load preserved." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Recovering and Then Exceeding Baseline</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="+31%" label="Conversion vs Original" sub="after progressive disclosure redesign" color="text-green-600" />
          <MetricCard value="−18%" label="Initial Simplification" sub="the failure that taught the lesson" color="text-primary" />
          <MetricCard value="−28%" label="Time on Comparison Step" sub="less time, better conversion" color="text-green-600" />
          <MetricCard value="78%" label="User Type Inference Accuracy" sub="correct on first session" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What This Changed About How I Think About Complexity</h2>
        <div className="space-y-6">
          <Insight num="01" title="'Reduce cognitive load' is the right goal applied to the wrong object" body="Reduce extraneous load (jargon, poor layout, irrelevant data). Preserve germane load (the complexity inherent in the decision itself). Conflating the two produces a simplified interface that users distrust — because they can feel that something important is missing." />
          <Insight num="02" title="High time-on-page isn't always confusion" body="We interpreted 4+ minutes on the comparison page as evidence of overwhelming complexity. Some of it was. But interview data showed that power users — the ones with highest conversion — spent more time on the comparison, not less. Engagement time and confusion time are different signals that look identical in analytics." />
          <Insight num="03" title="Progressive disclosure needs a reliable user type signal to work" body="Our progressive disclosure only works if we correctly infer the user's decision context. When we get it wrong, users see an unhelpful default view and have to expand manually — adding friction. The inference quality directly determines the disclosure system's value." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Hurt — Besides the Initial Failure</h2>
        <div className="space-y-4">
          <FailurePoint title="We shipped the simplification without enough user research" why="The simplification decision was driven primarily by time-on-page analytics and internal team sentiment ('this is too complex'). We had 2 user interviews that confirmed 'confusion' — but didn't investigate whether the complexity was extraneous or germane." fix="Now require: any information architecture change must include 5+ user interviews specifically asking 'what information do you need to feel confident before deciding?' before design begins." />
          <FailurePoint title="User type inference had poor accuracy for first-time visitors" why="First-time visitors showed no behavioral signal to infer user type from — they hadn't filtered by anything yet. We defaulted to 'general' view which was generic and unhelpful." fix="Added product-category detection from entry page and UTM source. 'Health insurance' landing page users see health-optimized default. Accuracy improved from 51% to 78% for first-session visitors." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where This Goes</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Decision Stage Detection" body="Different information is needed at different stages of the decision. Early-stage user needs category overview; late-stage user needs fine-grained comparison. Detect stage and adjust the view dynamically." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Explicit Personalization" body="Ask users explicitly on entry: 'What's most important to you?' (Price / Coverage / Claim History / All of the above). Use their answer to drive initial view. Explicit beats inferred when the question is simple enough to ask." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Per-Field Engagement Analytics" body="Track which data points users interact with most (tooltip opened, comparison time spent). Use engagement data to continuously reorder the default view to surface what users actually look at first." />
        </div>
        <BlockQuote>The simplest interface isn't the one with the fewest elements. It's the one that makes the decision feel possible. Sometimes that requires more information, not less — presented with more clarity, not removed entirely.</BlockQuote>
      </section>
    </div>
  );
}
