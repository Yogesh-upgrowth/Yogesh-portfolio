import { TrendingUp, Zap, Target, Layers, Brain, BarChart3, ArrowDown, CheckCircle2 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function FunnelDropoffContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">93% of Users Entering the Funnel Never Converted</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The growth team had been optimizing the top of the funnel for two quarters. Traffic was up 34%. CPA was trending down. The product team was getting congratulated. Then finance pulled the actual numbers.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Of every 100 users who started the signup and comparison flow, <strong className="text-foreground">7 converted</strong>. The other 93 evaporated somewhere between step 1 and step 6. The traffic growth meant nothing — we were just delivering more people to the same leaky process.</p>
        <ProblemBox>The top of the funnel was healthy. The middle was broken. We had a conversion infrastructure failure dressed up as a traffic success story.</ProblemBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 6-Step Funnel Before Intervention</h2>
        <DataTable
          headers={["Step", "Action", "Completion Rate", "Drop-Off", "Primary Exit Reason"]}
          rows={[
            ["Step 1", "Enter details (name, vehicle)", "82%", "18%", "Form length anxiety"],
            ["Step 2", "Select coverage type", "64%", "22%", "Too many unfamiliar options"],
            ["Step 3", "View comparison results", "51%", "20%", "Overwhelm, no recommendation"],
            ["Step 4", "Select plan", "31%", "39%", "Decision paralysis"],
            ["Step 5", "Review and confirm", "18%", "42%", "Fine print anxiety"],
            ["Step 6", "Payment", "7%", "61%", "Trust failure + payment friction"],
          ]}
        />
        <InsightBox>The biggest single drop was Step 6: payment. 61% of users who reached the payment page still didn't convert. At this point, they had invested 8+ minutes. The product had failed them at the moment of highest commitment.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Exit Patterns by Funnel Stage</h2>
        <DataTable
          headers={["Exit Stage", "% of All Drop-Off", "Root Cause Category", "Fixable?"]}
          rows={[
            ["Step 1–2 (Early Exit)", "28%", "Friction: form complexity, unfamiliar language", "High — UX fix"],
            ["Step 2–3 (Mid Exit)", "31%", "Overwhelm: too many options, no guidance", "High — UX + copy fix"],
            ["Step 3–4 (Decision Exit)", "24%", "Paralysis: no recommendation, comparison overload", "High — product fix"],
            ["Step 5–6 (Trust Exit)", "17%", "Anxiety: fine print, unknown provider, payment trust", "Medium — trust design"],
          ]}
        />
        <TakeawayBox>82% of drop-off came from fixable UX, language, and trust issues — not from users being the wrong audience. The funnel was failing people who wanted to buy.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Drive more traffic into the top of the funnel</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Fix the 93% falling through — every 1% improvement at the bottom is worth 10× more than the same improvement at the top</p>
          </div>
        </div>
        <BlockQuote>Optimizing the funnel top is addictive but optimizing the middle is transformative. A 10% improvement in Step 6 completion is worth more than doubling Step 1 traffic.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Friction Surface Audit System (FSAS)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">FSAS maps every funnel step as a <strong className="text-foreground">friction surface</strong> — identifying specific micro-frictions and the exact moment they cause exit. Each friction has a type, and each type has a fix protocol.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Layers className="h-5 w-5 text-primary" />} title="Cognitive Friction" body="Too many choices, unfamiliar terminology, complex layout. Fix: reduce options, explain jargon inline, progressive disclosure." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Target className="h-5 w-5 text-green-600" />} title="Decision Friction" body="Paralysis from options parity, no recommendation engine, no social proof at decision point. Fix: AI recommendation + 'most popular' signals." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Brain className="h-5 w-5 text-purple-600" />} title="Anxiety Friction" body="Fine print overwhelm, unknown provider, payment trust gap. Fix: trust design layer, guarantee messaging, familiar payment UI." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<ArrowDown className="h-5 w-5 text-orange-600" />} title="Physical Friction" body="Form field count, mobile keyboard issues, page load between steps. Fix: auto-fill, field reduction, pre-loading next step." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Step", "Friction Type", "Specific Fix", "Conversion Impact"]}
          rows={[
            ["Step 1", "Physical", "Form: 8 fields → 3 (auto-fill rest)", "+24% step completion"],
            ["Step 2", "Cognitive", "Coverage options: 7 → 3 with plain-English descriptions", "+31% step completion"],
            ["Step 3", "Decision", "AI recommended plan pinned; 'Most Popular' badge", "+28% plan selection"],
            ["Step 4", "Decision", "Comparison simplified to 3 key attributes (not 12)", "+19% selection rate"],
            ["Step 5", "Anxiety", "'Fully refundable in 14 days' + provider trust badges", "+44% confirm rate"],
            ["Step 6", "Anxiety + Physical", "UPI/wallet first, 'Encrypted' badge, 1-tap payment", "+61% payment completion"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Friction Mapping", points: ["Session recording analysis: 3,200 sessions across all 6 steps", "Click heatmaps + scroll maps per step", "Exit survey (8 questions) for non-converters — 12% response rate"] },
            { layer: "Layer 2", title: "UX Redesign Execution", points: ["Form reduced from 8 to 3 fields — phone number + vehicle reg + intent", "Coverage options rewritten in plain English by consumer copywriter", "AI recommendation model: chose best plan for user profile, pinned first"] },
            { layer: "Layer 3", title: "Trust Architecture", points: ["Provider trust badges added to Step 5: regulator logo, media mentions, user count", "14-day refund guarantee added — reduced perceived risk", "Payment step: UPI moved to primary (62% of users prefer it), card secondary"] },
            { layer: "Layer 4", title: "Step Performance Dashboard", points: ["Step-level completion rate dashboarded daily", "Conversion by device, by channel, by entry page", "A/B framework: each fix tested independently, not bundled"] },
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
          <Phase num="Phase 1" period="0–3 Weeks" title="Friction Audit" actions={["3,200 session recordings analyzed", "6 friction types mapped across 6 steps", "Exit survey deployed — 380 responses analyzed"]} result="Complete friction map with priority ranking" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="3–7 Weeks" title="Form + Language Fix" actions={["Steps 1–2 redesigned: fewer fields, plain English", "A/B test: each change isolated", "Step 1 completion: 82% → 91%"]} result="Top-funnel steps fixed; 11% completion gain" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="7–11 Weeks" title="Decision + Trust Fix" actions={["AI recommendation built and integrated (Step 3)", "Trust layer deployed at Step 5", "Step 3 selection rate: 51% → 68%"]} result="Middle funnel converting significantly better" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="11+ Weeks" title="Payment Fix" actions={["UPI moved to primary payment option", "14-day refund guarantee added to Step 6", "Overall funnel conversion: 7% → 19%"]} result="Funnel conversion nearly tripled" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="2.7×" label="Funnel Conversion" sub="7% → 19%" color="text-green-600" />
          <MetricCard value="61%" label="Payment Completion" sub="Step 6 improvement" color="text-primary" />
          <MetricCard value="₹0" label="Extra Traffic Spend" sub="same traffic, more revenue" color="text-green-600" />
          <MetricCard value="44%" label="Step 5 Confirm Rate" sub="trust layer impact" color="text-primary" />
        </div>
        <DataTable
          headers={["Funnel Step", "Before", "After", "Improvement"]}
          rows={[
            ["Step 1 (Form entry)", "82%", "91%", "+11%"],
            ["Step 2 (Coverage select)", "64%", "84%", "+31%"],
            ["Step 3 (Plan view)", "51%", "68%", "+33%"],
            ["Step 4 (Plan select)", "31%", "52%", "+68%"],
            ["Step 5 (Confirm)", "18%", "38%", "+111%"],
            ["Step 6 (Payment)", "7%", "19%", "+171%"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Funnel bottom fixes are always higher ROI than funnel top" body="Step 6 was 61% drop. Fixing it to 19% overall conversion was worth more than tripling Step 1 traffic. The math: same traffic × 3× conversion = 3× revenue. No CAC increase." />
          <Insight num="02" title="Choice reduction is conversion design" body="Reducing coverage options from 7 to 3 drove +31% step completion. Users didn't want more options — they wanted fewer, better-explained ones. Curation is a product feature." />
          <Insight num="03" title="Refund guarantees are the cheapest conversion lever" body="'14-day full refund' added ₹0 in actual refund cost (< 1% claim rate) but drove +44% Step 5 completion. The psychological value of a safety net far exceeds the economic cost." />
          <Insight num="04" title="Payment UX is product UX" body="Moving UPI to primary position at Step 6 drove +61% payment completion — because 62% of our users preferred UPI and we were forcing them to see card options first. Know your user's preferred action path." />
          <Insight num="05" title="Session recordings are the only honest funnel diagnostic" body="Analytics told us where users dropped. Recordings told us why. The 'why' is what enables a fix. Measuring drop rates without understanding the behavior that caused them leads to guessing, not solving." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Bundled A/B tests hid individual fix impact" why="Initially ran all Step 2 changes as one test — couldn't tell which change drove the lift. When the bundle underperformed, we didn't know what to fix." fix="Split every change into its own test. Slower to ship, but every data point is clean. Changed team culture: 'one variable, one test.'" />
          <FailurePoint title="AI recommendation used wrong optimization target" why="Recommendation model optimized for highest coverage plan. Users saw expensive plans first. Bounce rate at recommendation card increased 18%." fix="Changed recommendation target to: best coverage-to-price ratio for user profile. 'Best value' framing. Conversion improved 28% vs the 'best coverage' frame." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Predictive Friction Detection" body="ML model that predicts which users are about to exit at which step — and fires a relevant intervention before they leave." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="One-Click Re-entry" body="Abandoned funnel users get a deep-link email that picks up exactly where they left off — no re-entry required. Reduces re-entry friction from Step 1." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Micro-Friction Heatmapping" body="Real-time heatmap of friction scores per step — updated daily. Alerts product team when any step's friction score crosses threshold." />
        </div>
        <BlockQuote>We tripled revenue without spending a rupee more on acquisition. The users were always there. We just stopped making it so hard for them to give us money.</BlockQuote>
      </section>
    </div>
  );
}
