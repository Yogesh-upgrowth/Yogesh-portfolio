import { TrendingUp, Zap, Brain, BarChart3, AlertTriangle, Target, Activity, Shield } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function ChurnModelContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Users We Thought Were Fine Were Already Gone</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The cancellation email felt like a sucker punch every time. User churns, we send a win-back email, get maybe 8% back. The rest — gone forever. The problem wasn't the win-back email. It was that we were sending it <strong className="text-foreground">14 days after the point of no return</strong>.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">When we mapped churn behavior backwards, the pattern was clear: users were mentally gone 3–4 weeks before they actually cancelled. By the time churn happened, the decision had long been made. We were treating the symptom, not the disease.</p>
        <ProblemBox>Monthly churn was 8.4%. Industry benchmark was 4.2%. Every month, we were losing twice the industry average — and we had no early warning system to stop it.</ProblemBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Churn Dashboard: Before</h2>
        <DataTable
          headers={["Metric", "Value", "Insight"]}
          rows={[
            ["Monthly Churn Rate", "8.4%", "2× industry benchmark"],
            ["Win-Back Rate (post-churn)", "8.1%", "Too little, too late"],
            ["Median Time to Churn", "47 days from signup", "Fast churn = acquisition quality issue too"],
            ["Usage in Final 14 Days Pre-Churn", "1.2 sessions avg", "Ghost users before they left"],
            ["Revenue Lost to Churn (Monthly)", "₹11.8L", "Existential if unaddressed"],
            ["Engagement-Based Alerts", "None", "Completely reactive team"],
          ]}
        />
        <InsightBox>Users who churn show the signal weeks before they leave. The data was always there — we just weren't reading it in time.</InsightBox>
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm">What the Team Was Doing</p>
            <ul className="space-y-1 text-sm text-foreground/70"><li>→ Sending win-back emails post-cancellation</li><li>→ Monthly NPS survey to all users</li><li>→ Price promotions when cohort numbers looked weak</li></ul>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2 text-sm">What Was Needed</p>
            <ul className="space-y-1 text-sm text-foreground/80"><li>→ Predictive churn score per user</li><li>→ Intervention before the decision locked in</li><li>→ Cause-specific retention playbooks</li></ul>
          </div>
        </div>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Why Users Were Actually Churning</h2>
        <DataTable
          headers={["Churn Cause", "% of Churners", "Avg Churn Day", "Rescue-able?", "Intervention"]}
          rows={[
            ["Didn't see value fast enough", "34%", "Day 18–25", "High (78%)", "Onboarding acceleration + feature nudge"],
            ["Price sensitivity", "24%", "Day 35–45", "Medium (42%)", "Downgrade offer + ROI demonstration"],
            ["Competitor switch", "19%", "Day 40–60", "Low (21%)", "Feature gap analysis + retention credit"],
            ["Life event (role change etc.)", "14%", "Any", "Low (18%)", "Pause option + alumni path"],
            ["Bug / product failure", "9%", "Day 10–20", "High (84%)", "Priority fix + personal apology + credit"],
          ]}
        />
        <TakeawayBox>34% of churners left because they didn't see value fast enough — not because the value wasn't there. This is a UX and onboarding problem disguised as a churn problem.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">React to churn when it happens → win-back campaigns</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Predict churn 14+ days before it happens → cause-specific intervention before the decision locks in</p>
          </div>
        </div>
        <BlockQuote>Churn is not a cancellation event. Churn is a decision event — made weeks before the button is pressed. Design for the decision, not the button.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Churn Signal Cascade Model (CSCM)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">CSCM identifies churn not as a single event but as a <strong className="text-foreground">cascade of weakening signals</strong> — and intervenes at each cascade stage before the next drop.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Activity className="h-5 w-5 text-yellow-600" />} title="Stage 1: Engagement Decay (Day −21 to −14)" body="Session frequency drops 40%+. Feature usage narrows to 1–2 features. Trigger: educational content push + check-in email." color="bg-yellow-50 border-yellow-200" />
          <FrameworkDimension icon={<AlertTriangle className="h-5 w-5 text-orange-600" />} title="Stage 2: Value Disconnect (Day −14 to −7)" body="No new feature exploration. Support tickets or silence. Trigger: success team outreach, ROI report generation." color="bg-orange-50 border-orange-200" />
          <FrameworkDimension icon={<Shield className="h-5 w-5 text-red-600" />} title="Stage 3: Decision Formation (Day −7 to −3)" body="Pricing page visit. Export of data. Competitor research signal (referrer). Trigger: senior rep direct outreach + retention offer." color="bg-red-50 border-red-200" />
          <FrameworkDimension icon={<Brain className="h-5 w-5 text-primary" />} title="Model Core" body="Random Forest on 34 behavioral features, trained on 16-month dataset. Churn probability score refreshed every 24 hours per user." color="bg-primary/5 border-primary/20" />
        </div>
        <DataTable
          headers={["Feature", "Importance Score", "Cascade Stage"]}
          rows={[
            ["Session frequency drop (7-day vs prev 7-day)", "0.24", "Stage 1"],
            ["Feature breadth narrowing", "0.19", "Stage 1-2"],
            ["Support ticket opened (no resolution)", "0.16", "Stage 2"],
            ["Pricing page visited", "0.14", "Stage 3"],
            ["Data export action", "0.12", "Stage 3"],
            ["Login from 0 to 1 times in 7 days", "0.09", "Stage 1"],
            ["NPS score < 6 (if collected)", "0.06", "Stage 2"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Data Intelligence", points: ["Daily feature extraction per user: 34 behavioral signals", "Random Forest model — daily inference run, score stored per user", "Cohort-level churn risk dashboard for product and CS teams"] },
            { layer: "Layer 2", title: "Intervention Routing", points: ["Stage 1 (risk 30–50%): Automated email + in-app tip, no human required", "Stage 2 (risk 50–70%): CS team alert, outreach within 48 hours", "Stage 3 (risk 70%+): Senior rep call within 24 hours, retention offer unlocked"] },
            { layer: "Layer 3", title: "Cause-Specific Playbooks", points: ["5 churn causes mapped to 5 distinct playbooks (value, price, competitor, life, bug)", "Cause predicted by secondary model from support + behavior signals", "Each playbook has: opening message, offer, escalation path"] },
            { layer: "Layer 4", title: "Outcome Feedback", points: ["Every intervention outcome tracked: saved, churned, paused", "Playbook effectiveness ranked monthly — lowest-performing retired", "Model retrained quarterly with fresh churn outcomes"] },
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
          <Phase num="Phase 1" period="0–4 Weeks" title="Signal Mapping" actions={["Back-analyzed 800 churned users to map behavioral cascade", "Identified Stage 1, 2, 3 signal patterns", "Validated: model predicted 71% of churns 14+ days in advance"]} result="Model hypothesis validated" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="4–8 Weeks" title="Model & Routing" actions={["Random Forest trained on 16 months, 3,800 user outcomes", "Intervention routing engine built in-product", "Stage 2 and 3 alerts integrated into CS CRM view"]} result="Model live for 100% of active users" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="8–12 Weeks" title="Playbooks Live" actions={["5 cause-specific retention playbooks deployed", "Stage 1 automation: 4,200 at-risk users reached with zero CS effort", "Stage 3 outreach: 84% connect rate (vs 34% win-back rate)"]} result="Monthly churn 8.4% → 5.1%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="12+ Weeks" title="Optimization" actions={["Lowest-performing playbook (competitor) overhauled", "Onboarding redesigned to reduce Stage 1 churn cause by 34%", "Pause option added — rescued 12% of would-be churners"]} result="Monthly churn → 3.9% (below benchmark)" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="8.4%→3.9%" label="Monthly Churn Rate" sub="below industry benchmark" color="text-green-600" />
          <MetricCard value="₹8.4L/mo" label="Revenue Saved" sub="annualised ₹1.01Cr retained" color="text-primary" />
          <MetricCard value="71%" label="Prediction Accuracy" sub="14+ days before churn" color="text-green-600" />
          <MetricCard value="84%" label="Stage 3 Outreach Connect Rate" sub="vs 34% win-back" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After"]}
          rows={[
            ["Monthly Churn Rate", "8.4%", "3.9% (−54%)"],
            ["Annual Revenue Retained", "—", "+₹1.01Cr"],
            ["Win-Back Rate (post-churn)", "8.1%", "Still 8.1% — but used less often"],
            ["Churn Predicted 14+ Days Early", "0%", "71% of churns"],
            ["CS Team Outreach Efficiency", "Reactive", "82% proactive interventions"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Churn is a cascade, not an event" body="Users don't churn suddenly. They leave in stages — engagement drops, value disconnects, then the decision forms. Intervening at Stage 1 is 4× more effective than intervening at Stage 3." />
          <Insight num="02" title="Cause-specific beats generic retention" body="A generic discount offer works 12% of the time. A cause-specific intervention (value accelerator for value-gap churners, pause for life-event churners) works 38–62% of the time. Diagnosis before prescription." />
          <Insight num="03" title="Silence is a signal" body="A user who was logging in 4× per week suddenly going silent for 5 days is one of the strongest churn signals you can have. Most teams don't notice because silence doesn't create events." />
          <Insight num="04" title="Onboarding is the biggest churn lever" body="34% of churners left because they didn't see value fast enough. This is an onboarding problem — solved before the churn model even activates. Fixing Day 1–14 UX reduced Stage 1 churn causes by 34%." />
          <Insight num="05" title="Win-back campaigns are failure tax" body="Every win-back email is proof that your prediction system failed. Reducing dependency on win-back isn't just better economics — it's a measure of how well your product is serving users before they decide to leave." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Intervention too aggressive for Stage 1 users" why="Automated Stage 1 emails used 'We noticed you haven't logged in' language. Users perceived as surveillance. Complaint rate rose. Some users churned faster." fix="Reworded to value-forward: 'Here's a feature you haven't tried yet that might help.' Same trigger, different tone. Negative response dropped 80%." />
          <FailurePoint title="Cause prediction model underperformed" why="Secondary cause model had 58% accuracy — not much better than guessing. CS reps were using wrong playbook on wrong users." fix="Cause model retired. CS reps given Stage signal + user profile — they used context to choose playbook. Outcome improved more than model would have." />
          <FailurePoint title="No pause option at first" why="Users who wanted to pause for life events (travel, job change) had to cancel. We lost them permanently when a temporary hold would have kept them." fix="Pause plan (1–3 months) added. 12% of Stage 3 churners chose pause. 67% of paused users returned and resumed paid." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Personalized Re-engagement" body="AI-generated check-in messages based on each user's specific usage history — referencing the last thing they did, not a generic template." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="In-Product Rescue Paths" body="For Stage 2 users, in-product guided paths that re-demonstrate value — without requiring human CS intervention. Scale retention at near-zero marginal cost." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Churn Cohort Analytics" body="Saved-user cohort tracking to understand: do saved users genuinely recover or just delay churn by 60 days? Retrain interventions based on actual long-term outcome." />
        </div>
        <BlockQuote>The best retention strategy is an intervention that happens before the user has made the decision to leave. Everything else is negotiation after the fact.</BlockQuote>
      </section>
    </div>
  );
}
