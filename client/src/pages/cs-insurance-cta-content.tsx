import { TrendingUp, Zap, Target, Clock, Brain, BarChart3, MousePointer, Lightbulb } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function InsuranceCtaContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Button Nobody Was Pressing</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Users were landing on our insurance policy pages in volume. Scroll depth was good. Session time was respectable. But the CTA button — the one action that mattered — was converting at 2.8%.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The design team had run 12 A/B tests in 6 months. Blue button vs orange. Large vs small. "Get Quote" vs "Compare Plans." Nothing moved the needle by more than 0.4%. The obvious levers had been pulled. The problem was somewhere deeper.</p>
        <ProblemBox>Every design test was optimizing the button. The real problem was what was happening to the user's emotional state before they got to the button.</ProblemBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Conversion Funnel: Before</h2>
        <DataTable
          headers={["Funnel Step", "Completion Rate", "Drop-Off", "Most Common Exit"]}
          rows={[
            ["Page Load → First Scroll", "94%", "6%", "Slow load / wrong landing"],
            ["First Scroll → Plan Comparison", "71%", "23%", "Overwhelm — too many options"],
            ["Plan Comparison → CTA Hover", "38%", "33%", "Decision paralysis"],
            ["CTA Hover → CTA Click", "41%", "59%", "Trust / anxiety spike"],
            ["CTA Click → Form Completion", "67%", "33%", "Form length friction"],
          ]}
        />
        <InsightBox>The biggest drop was at "CTA Hover → Click" (59% drop). Users were reaching the button and then freezing. This is anxiety, not design. You don't solve anxiety with button color.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Was Happening at the CTA</h2>
        <p className="text-foreground/80 leading-[1.85] mb-4">Session recordings and heatmaps revealed three patterns at the CTA stage:</p>
        <div className="space-y-4">
          {[
            { type: "The Paralyzed Hoverer (34%)", behavior: "Hovered CTA 3–8 times, read fine print repeatedly, scrolled back up to re-read coverage", cause: "Anxiety about commitment. Fear of wrong choice.", fix: "Added 'No commitment' and 'Cancel anytime' language directly adjacent to CTA. Conversion from this cohort +62%." },
            { type: "The Price Checker (28%)", behavior: "Scrolled to price, back to CTA, to price again. Often exited to check competitor.", cause: "Uncertainty about value. No price confidence signal.", fix: "'Lowest price guaranteed' badge added. Price lock messaging. Conversion +44%." },
            { type: "The Ready Mover (38%)", behavior: "Linear: read plan, clicked CTA, completed form.", cause: "No friction needed removing — they self-converted.", fix: "Streamlined form path. Don't add friction to the already-converting segment." },
          ].map((item) => (
            <div key={item.type} className="p-5 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-foreground mb-2">{item.type}</p>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div><p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Behavior</p><p className="text-foreground/70">{item.behavior}</p></div>
                <div><p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Root Cause</p><p className="text-foreground/70">{item.cause}</p></div>
                <div><p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Intervention</p><p className="text-foreground/70">{item.fix}</p></div>
              </div>
            </div>
          ))}
        </div>
        <TakeawayBox>Two-thirds of non-converters weren't undecided — they were anxious. Remove anxiety, not options. The job of the CTA environment is emotional safety, not information density.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Optimize the button: color, size, copy, position</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Design the emotional environment around the button — reduce anxiety, build confidence, time the trigger</p>
          </div>
        </div>
        <BlockQuote>The CTA is never the problem. The problem is the user's emotional state when they arrive at it.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Behavioural Trigger Timing System (BTTS)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">BTTS maps the insurance decision journey as an emotional curve — anxiety spikes at key points — and deploys precision triggers to reduce friction at each spike.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Clock className="h-5 w-5 text-primary" />} title="Trigger 1: Commitment Anxiety" body="Fired when hover-without-click detected 2+ times. Shows 'No commitment required' and 'Compare for free' tooltip. Reduces decision weight." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Target className="h-5 w-5 text-green-600" />} title="Trigger 2: Price Uncertainty" body="Fired when scroll pattern indicates price comparison (repeated up-down). Shows price guarantee badge, 'We've checked all providers' reassurance." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Brain className="h-5 w-5 text-purple-600" />} title="Trigger 3: Social Proof Moment" body="Fired at 60-second mark for users showing deliberation pattern. Shows real-time count: 'X people got quotes in the last hour' — normalizes the action." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<MousePointer className="h-5 w-5 text-orange-600" />} title="Trigger 4: Exit Intent Rescue" body="Fired on cursor-to-top-of-page movement. Offers 'Save your comparison' — converts exit into email capture for nurture, or delays decision." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Trigger", "Behavioral Signal", "Intervention", "Conversion Lift"]}
          rows={[
            ["Commitment Anxiety", "2+ hover-without-click", "'No commitment required' tooltip", "+62% for that cohort"],
            ["Price Uncertainty", "Repeated price-scroll pattern", "Price guarantee badge", "+44%"],
            ["Social Proof Moment", "60+ seconds, deliberation pattern", "'X people compared recently'", "+28%"],
            ["Exit Intent Rescue", "Cursor exit movement", "'Save comparison' slide-in", "31% email capture rate"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Behavioral Signal Detection", points: ["Hover events tracked per element with timestamp", "Scroll velocity and direction pattern classified server-side", "Session time + page interaction combined into anxiety index score"] },
            { layer: "Layer 2", title: "Trigger Engine", points: ["Rule-based trigger system: anxiety index ≥ threshold → trigger fires", "Each trigger fires once per session (no spam)", "Trigger timing calibrated against conversion window per page type"] },
            { layer: "Layer 3", title: "Content Layer", points: ["Trigger content A/B tested independently", "Social proof count updated in real-time via API", "Exit intent email sequence: 3 emails over 7 days, plan-specific"] },
            { layer: "Layer 4", title: "Attribution & Feedback", points: ["Trigger → conversion tracked as separate conversion event", "Heatmaps overlaid with trigger fire points", "Weekly trigger effectiveness review — low-lift triggers retired"] },
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
          <Phase num="Phase 1" period="0–3 Weeks" title="Behavioral Audit" actions={["2,400 session recordings analyzed for pre-CTA patterns", "3 anxiety archetypes identified and documented", "Anxiety index formula defined from heatmap + timing data"]} result="Root cause confirmed: anxiety, not button design" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="3–5 Weeks" title="Trigger Build" actions={["4 triggers designed, each targeting one anxiety archetype", "Trigger engine built in JavaScript — fires client-side, < 50ms", "Exit intent email sequence copywritten and designed"]} result="BTTS deployed to 30% of traffic" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="5–9 Weeks" title="A/B Validation" actions={["Each trigger tested independently against control", "Trigger 1 (commitment anxiety) showed highest lift first", "Social proof count (Trigger 3) required real-time API — built week 7"]} result="CTA click rate 2.8% → 5.1%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="9+ Weeks" title="Full Rollout" actions={["All 4 triggers live, full traffic", "Exit intent email sequence live — 31% email capture rate", "Form simplified post-CTA: 9 fields → 5 (eliminated redundant)"]} result="Overall CTA conversion 2.8% → 5.9% (2.1×)" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="2.1×" label="CTA Conversion" sub="2.8% → 5.9%" color="text-green-600" />
          <MetricCard value="31%" label="Exit Intent Capture" sub="email capture rate" color="text-primary" />
          <MetricCard value="+62%" label="Anxiety Cohort" sub="commitment trigger lift" color="text-green-600" />
          <MetricCard value="Zero" label="Design Changes" sub="same button, different environment" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After"]}
          rows={[
            ["CTA Conversion Rate", "2.8%", "5.9% (+111%)"],
            ["CTA Hover-to-Click Rate", "41%", "67%"],
            ["Exit Intent Email Capture", "0%", "31%"],
            ["Exit Email → Conversion (7 day)", "—", "14.8%"],
            ["Overall Page Conversion", "1.9%", "3.4%"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="CRO is psychology, not design" body="12 design A/B tests moved conversion by 0.4% total. 4 behavioral trigger interventions moved it 3.1%. The button was never the problem. User emotional state was." />
          <Insight num="02" title="Hover-without-click is your most valuable signal" body="A user who hovers and doesn't click is telling you something. They're interested but blocked. Measuring and responding to this signal is more valuable than any button test." />
          <Insight num="03" title="Social proof must be real-time to be credible" body="Static 'X,000 satisfied customers' doesn't work anymore. Real-time '14 people compared in the last hour' works because it's now, specific, and true. Credibility is immediacy." />
          <Insight num="04" title="Exit intent is a conversion opportunity, not a failure" body="31% exit intent email capture converted at 14.8% within 7 days. Users who were leaving were actually just not ready yet — giving them a save path let them convert on their timeline." />
          <Insight num="05" title="Anxiety is the invisible conversion killer" body="No one A/B tests their user's emotional state. But in high-stakes decisions (insurance, finance, healthcare), anxiety is the #1 conversion blocker. Naming it, measuring it, and designing for it is your edge." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Trigger 3 (social proof) backfired in low-traffic periods" why="'14 people compared in the last hour' during 2 AM sessions showed '0 people' — destroyed trust. Conversion on those sessions dropped 18%." fix="Added floor value: never show '0'. Show 'Thousands of users' as fallback when count < 5. Also removed trigger between 11 PM–7 AM." />
          <FailurePoint title="Exit intent modal fired too aggressively at first" why="Trigger fired when users scrolled up to re-read content — misclassified as exit. Frustrated users who weren't leaving." fix="Added 10-second minimum session time and cursor-past-navigation-bar threshold. False positive rate dropped from 41% to 9%." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Anxiety Score Personalization" body="ML model that predicts each user's anxiety level from the first 30 seconds and pre-loads the right trust environment before anxiety triggers fire." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Voice of Customer Integration" body="Real customer quotes shown contextually — e.g., 'I was nervous too before I compared' — displayed when hovering anxiety trigger fires." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Trigger Cascade Optimization" body="If Trigger 1 fires but no conversion in 30s, automatically escalate to Trigger 3. Tiered cascade that matches intervention intensity to signal strength." />
        </div>
        <BlockQuote>We doubled conversion without touching the button once. The button was never broken. The emotional journey before it was.</BlockQuote>
      </section>
    </div>
  );
}
