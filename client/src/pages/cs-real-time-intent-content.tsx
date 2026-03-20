import { Zap, Target, Layers, Brain, BarChart3, Database, TrendingUp, Activity } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function RealTimeIntentContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Leak We Couldn't See</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Our lead-to-conversion rate was 3.2%. Industry benchmark was 8.4%. The gap wasn't a product problem. It wasn't a pricing problem. It was a <strong className="text-foreground">timing problem</strong>.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We were calling every lead at the same time — 24 hours after signup. But some users were ready to convert in 12 minutes. Others needed 4 days. By calling at 24 hours, we were calling the fast-intent users too late (they'd already left) and the slow-intent users too early (they weren't ready).</p>
        <ProblemBox>We had a one-size-fits-all outreach system trying to serve three completely different intent profiles.</ProblemBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Dashboard Before the Fix</h2>
        <DataTable
          headers={["Metric", "Value", "Problem"]}
          rows={[
            ["Lead Volume (Monthly)", "3,800 leads", "—"],
            ["Lead-to-Conversion Rate", "3.2%", "2.6× below benchmark"],
            ["Sales Call Connect Rate", "34%", "66% of calls never answered"],
            ["Avg Time to First Contact", "22 hours", "Too late for high-intent"],
            ["Leads Contacted After 48 hrs", "41%", "Effectively dead leads"],
            ["Cost per Conversion", "₹4,200", "Unsustainable unit economics"],
          ]}
        />
        <InsightBox>34% connect rate means 66% of our sales team's time was burning on calls that would never happen. Intent decays — fast.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Three Intent Profiles Inside Every Lead List</h2>
        <DataTable
          headers={["Profile", "Share of Leads", "Conversion Window", "Best Contact Time", "Conversion Rate"]}
          rows={[
            ["Hot Intent", "18%", "< 2 hours", "Within 15 minutes of signup", "19.4%"],
            ["Warm Intent", "44%", "2–48 hours", "Day 1–2, evening slot", "7.8%"],
            ["Cold Intent", "38%", "> 48 hours or never", "Day 3–5, nurture-first", "1.1%"],
          ]}
        />
        <p className="text-foreground/80 leading-[1.85] mt-4">Hot-intent users converted at 19.4% when contacted within 15 minutes. At 24 hours, that same user converted at 2.3%. <strong className="text-foreground">Intent has a half-life — and it's shorter than you think.</strong></p>
        <TakeawayBox>The leads weren't bad. The sequencing was. We were systematically wasting our best leads by contacting them too late.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Contact all leads at the same time with the same message</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Score intent in real-time → route to appropriate speed and message</p>
          </div>
        </div>
        <BlockQuote>Sales velocity is not a sales team problem. It's a systems design problem.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Real-Time Intent Velocity Engine (RIVE)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">RIVE scores each lead's intent every 60 seconds from signup — and routes them to one of three response tracks automatically.</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <FrameworkDimension
            icon={<Activity className="h-5 w-5 text-red-500" />}
            title="Hot Track (Score ≥ 75)"
            body="Instant SMS + automated calendar link sent. Sales rep alerted within 60 seconds. Call attempt within 15 minutes."
            color="bg-red-50 border-red-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-orange-500" />}
            title="Warm Track (Score 40–74)"
            body="Personalized email sequence, Day 1 and Day 2. Call attempt at optimal time window (evening, 6–8 PM). Nurture content in between."
            color="bg-orange-50 border-orange-200"
          />
          <FrameworkDimension
            icon={<Database className="h-5 w-5 text-primary" />}
            title="Cold Track (Score < 40)"
            body="Long-form nurture sequence, 14-day drip. No direct sales call until re-engagement signal detected. Lower CAC, automated."
            color="bg-primary/5 border-primary/20"
          />
        </div>
        <DataTable
          headers={["Intent Signal", "Weight", "Rationale"]}
          rows={[
            ["Pricing page visit", "0.30", "Highest buying intent signal"],
            ["Calculator used", "0.22", "Decision-stage engagement"],
            ["Form partially filled", "0.20", "Active intent, interrupted"],
            ["3+ pages visited in 1 session", "0.15", "Depth of exploration"],
            ["Return visit within 1 hour", "0.13", "Active consideration state"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Data Intelligence", points: ["Real-time event stream from product → scoring API (P99 latency < 300ms)", "Intent score updated every 60 seconds from signup through first 72 hours", "Score decay function applied: intent halved every 3 hours without new signals"] },
            { layer: "Layer 2", title: "Product Triggers", points: ["Exit-intent modal for users above score 60 — offer direct booking link", "In-session chat widget unlocked at score ≥75 (high-intent gets immediate human access)", "Personalized social proof served based on intent profile"] },
            { layer: "Layer 3", title: "CRM & Sales Ops", points: ["RIVE score surfaced in real-time inside CRM — no manual checking", "Hot leads bypass queue, auto-assigned to senior reps", "Call scripts differentiated: Hot = urgency + decision, Warm = value + comparison, Cold = education"] },
            { layer: "Layer 4", title: "Feedback Loop", points: ["Actual conversion outcome fed back to model weekly", "Score thresholds recalibrated quarterly", "A/B tested contact windows: Morning vs Evening for Warm track — evening won by 2.1×"] },
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
          <Phase num="Phase 1" period="0–3 Weeks" title="Signal Discovery" actions={["Analyzed 4,200 historical leads — mapped behavior to outcome", "Identified 5 highest-weight intent signals", "Built manual scoring spreadsheet to validate hypothesis"]} result="Hypothesis confirmed: intent profile predictable" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="3–6 Weeks" title="RIVE Build" actions={["Real-time scoring API built — 60-second refresh", "CRM integration: live score visible per lead", "Three contact tracks defined and scripted"]} result="System live for 30% of new leads" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="6–10 Weeks" title="Full Rollout" actions={["All new leads scored by RIVE", "Hot track: avg contact time reduced 22 hrs → 14 mins", "Sales rep productivity measured by track efficiency"]} result="Conversion rate 3.2% → 7.4%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="10+ Weeks" title="Optimization" actions={["Exit-intent trigger added for score ≥60", "Warm track evening window A/B validated", "Cold track nurture sequence conversion: 1.1% → 2.8%"]} result="Cost per conversion down 46%" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="2.3×" label="Lead Conversion Rate" sub="3.2% → 7.4%" color="text-green-600" />
          <MetricCard value="98%" label="Time to First Contact" sub="22 hrs → 14 mins (Hot track)" color="text-primary" />
          <MetricCard value="46%" label="Cost per Conversion" sub="₹4,200 → ₹2,270" color="text-green-600" />
          <MetricCard value="2.1×" label="Sales Rep Efficiency" sub="more conversions, same team size" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After"]}
          rows={[
            ["Lead-to-Conversion Rate", "3.2%", "7.4%"],
            ["Avg Time to First Contact", "22 hours", "14 minutes (Hot track)"],
            ["Hot-Lead Conversion Rate", "2.3%", "19.4%"],
            ["Cost per Conversion", "₹4,200", "₹2,270 (−46%)"],
            ["Sales Connect Rate", "34%", "58%"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Intent has a half-life — design for it" body="Every hour you delay contacting a high-intent lead, conversion probability drops by ~18%. This isn't theory — it's measured, per-lead decay data. Speed is your biggest conversion lever." />
          <Insight num="02" title="One-size-fits-all outreach destroys ROI" body="Sending the same sequence to Hot and Cold leads means you're either too slow for the Hot ones or too aggressive for the Cold ones. Segmentation isn't a nice-to-have — it's unit-economics arithmetic." />
          <Insight num="03" title="Sales efficiency comes from systems, not headcount" body="We 2.1× output without adding a single sales rep. The team got better because the system stopped feeding them dead leads and started feeding them hot signals." />
          <Insight num="04" title="Cold leads aren't dead — they need a different path" body="The Cold track went from 1.1% conversion to 2.8% with long-form nurture. They weren't unconvertible; they just needed education before sales contact." />
          <Insight num="05" title="Real-time means real-time — not hourly" body="A 60-second refresh cadence was the architecture decision that made the Hot track work. Hourly scoring would have missed the conversion window entirely for 34% of hot leads." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Too many signals in v1 scoring model" why="27 signals created noise. Score was jumping erratically — reps didn't trust it. Adoption of RIVE stalled at 40% rep usage." fix="Reduced to 5 highest-weight signals. Score became stable and explainable. Rep adoption rose to 91% within 3 weeks." />
          <FailurePoint title="Hot track automation without rep override" why="Early version auto-dialled leads with no rep option to snooze. Rep calling at wrong personal moment created friction." fix="Added snooze window: rep could push call 30 minutes forward. Conversion maintained; rep satisfaction improved." />
          <FailurePoint title="No score visible to customer success" why="CS onboarding team treating high-LTV converts with same energy as low-intent ones. Post-conversion experience inconsistent." fix="Score shared with CS. High-score new customers got executive check-in call at Day 3. Retention rate +14% for that cohort." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Predictive Contact Timing" body="ML model that predicts optimal contact time per user — based on historical pattern of when similar profiles picked up and converted." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="AI-Personalized Outreach" body="Auto-generated first message based on user's specific browsing path — not a template, a personalized opening line referencing what they actually explored." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Pipeline Intent Map" body="Real-time view of all active leads scored on a 2D intent × urgency matrix — replacing the static CRM list with a living signal map." />
        </div>
        <BlockQuote>We didn't increase our sales team's effort. We gave them a system where effort finally went to the right leads at the right time.</BlockQuote>
      </section>
    </div>
  );
}
