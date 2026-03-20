import { TrendingUp, Zap, RefreshCw, Target, Brain, BarChart3, Users, ArrowRight } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function GrowthLoopContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">When Acquisition Is the Addiction, Not the Strategy</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Every month we hit the same cycle: pour money into acquisition, hit a traffic peak, watch it decay, pour in more money. The retention cohort graphs looked like steep ski slopes — everyone leaving within 30 days.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">D1 retention was 42% — not terrible. D7 retention: 18%. D14: 8%. D30: 4%. We were spending ₹180 to acquire users who had a 96% probability of never returning by day 30.</p>
        <ProblemBox>We had an acquisition business, not a product business. The growth machine was a leaky bucket running at full speed — and we were optimizing the faucet instead of fixing the holes.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The decision was either to keep spending to compensate for churn — or to architect a system where users came back because the product gave them a reason to, not because we paid to remind them.</p>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Retention Cohort Reality</h2>
        <DataTable
          headers={["Cohort Day", "Retention Rate", "Sessions/User (avg)", "Revenue/User"]}
          rows={[
            ["D1", "42%", "1.0", "₹0 (onboarding day)"],
            ["D7", "18%", "1.4", "₹28"],
            ["D14", "8%", "1.2", "₹41"],
            ["D30", "4%", "1.1", "₹58"],
            ["D60", "2.1%", "0.9", "₹72"],
          ]}
        />
        <InsightBox>D7 users had only 1.4 sessions in 7 days. They weren't engaged — they were drifting. A product that doesn't pull users back within 7 days doesn't pull them back at all.</InsightBox>
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm">What Growth Was Doing</p>
            <ul className="space-y-1 text-sm text-foreground/70"><li>→ More retargeting ads</li><li>→ Push notification blasts (3× per week)</li><li>→ Discount offers at D7 to salvage retention</li></ul>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2 text-sm">What Was Needed</p>
            <ul className="space-y-1 text-sm text-foreground/80"><li>→ Product-native return triggers</li><li>→ Value events that created habit</li><li>→ Loops that made returning the natural next action</li></ul>
          </div>
        </div>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Returning 4% vs the Departing 96%</h2>
        <DataTable
          headers={["Behavior (D1–7)", "D30 Retention", "Pattern"]}
          rows={[
            ["Set price alert on D1", "41%", "Created a reason to return (alert trigger)"],
            ["Saved comparison on D1", "34%", "Product now holds their work — return to use it"],
            ["3+ features used on D1", "28%", "Depth of initial engagement predicts return"],
            ["Invited a friend on D1–3", "38%", "Social commitment mechanism"],
            ["Read a guide or article", "8%", "Information consumption, no product hook"],
            ["No core action on D1", "3%", "Never found value — no reason to return"],
          ]}
        />
        <TakeawayBox>Users who set a price alert on Day 1 had 41% D30 retention — 10× better than the base rate. The alert wasn't a notification feature. It was a retention mechanism disguised as a product feature.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Remind users to come back via notifications and retargeting</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Design product moments that make returning the natural, self-motivated next action</p>
          </div>
        </div>
        <BlockQuote>Retention is not a notification problem. It's a product design problem. Build something that creates reasons to return — not reminders to return.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Retention Orbit Loop Framework</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">The Retention Orbit Loop creates a gravitational pull back to the product by chaining <strong className="text-foreground">value moments to natural triggers</strong> — so users return because something changed, not because we reminded them.</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <FrameworkDimension icon={<RefreshCw className="h-5 w-5 text-primary" />} title="Loop 1: Price Alert Loop" body="User sets alert → Price changes → Alert fires → User returns to compare → Completes action → Sets next alert. Self-reinforcing loop with product-native trigger." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Target className="h-5 w-5 text-green-600" />} title="Loop 2: Savings Report Loop" body="Weekly email: 'Your saved comparison moved — here's what changed.' Personal, specific, tied to user's own data. Not a notification — a useful update." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Users className="h-5 w-5 text-purple-600" />} title="Loop 3: Referral Return Loop" body="User invites friend → Friend joins → User gets status update: 'Your friend just saved ₹X.' Social proof + progress → User returns to share outcome." color="bg-purple-50 border-purple-200" />
        </div>
        <DataTable
          headers={["Loop", "Return Trigger", "D14 Retention (Loop Users)", "D30 Retention"]}
          rows={[
            ["Price Alert Loop", "Price change event (product)", "52%", "38%"],
            ["Savings Report Loop", "Weekly data update (product)", "41%", "29%"],
            ["Referral Return Loop", "Friend's activity (social)", "48%", "34%"],
            ["No Loop (control)", "Push notification / retargeting", "12%", "4%"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Data Intelligence", points: ["User's D1 actions classified into loop eligibility buckets", "Price alert data fetched from partner APIs every 4 hours", "Savings calculation model: actual vs benchmark market rate"] },
            { layer: "Layer 2", title: "Loop Activation System", points: ["D1 onboarding optimized to drive price alert + comparison save as primary actions", "'Setup your alert' made the hero action — not 'browse plans'", "Referral flow simplified: 1-tap invite from within comparison result"] },
            { layer: "Layer 3", title: "Notification Quality Control", points: ["Notifications only fired by product events — never calendar-based blast", "Price alert notification: specific plan name, exact change amount", "Weekly savings report: personalized, shows their actual saved comparison vs current market"] },
            { layer: "Layer 4", title: "Loop Compounding", points: ["Loop 1 users 4× more likely to do Loop 2 (habit formation)", "Referral users have 2.8× D30 retention of direct acquirees — social commitment", "Loop users show in top 20% revenue cohort — high LTV proxy"] },
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
          <Phase num="Phase 1" period="0–3 Weeks" title="Retention Diagnosis" actions={["Mapped 12-month retention cohorts by D1 action type", "Identified: alert-setters had 10× better D30 vs non-alert-setters", "Defined 3 loops based on highest-retention behavior patterns"]} result="Loop hypothesis validated from historical data" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="3–6 Weeks" title="Onboarding Redesign" actions={["D1 flow redesigned: price alert setup as primary CTA", "Comparison save made default — 'Your comparison is saved' message", "Referral nudge added to day 2 email"]} result="D1 loop activation rate: 18% → 47%" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="6–10 Weeks" title="Loop Infrastructure" actions={["Price change notification system built — 4-hour refresh cadence", "Weekly savings report email system launched", "Referral activity feed added to dashboard"]} result="D14 retention rising: 8% → 19%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="10+ Weeks" title="Compounding Effects" actions={["Loop 1 users upgrading to Loop 2 at 41%", "Retargeting ad spend cut 40% — organic return increased", "New D30 retention: 18% (from 4%)"]} result="D30 retention 4% → 18%. Retention 4.5× improved." color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="4.5×" label="D30 Retention" sub="4% → 18%" color="text-green-600" />
          <MetricCard value="47%" label="D1 Loop Activation" sub="from 18% baseline" color="text-primary" />
          <MetricCard value="40%" label="Retargeting Spend Cut" sub="replaced by organic return" color="text-green-600" />
          <MetricCard value="2.8×" label="Referral User Retention" sub="vs direct acquisition" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After"]}
          rows={[
            ["D30 Retention", "4%", "18% (+350%)"],
            ["D14 Retention", "8%", "19% (+138%)"],
            ["Revenue per User (D30)", "₹58", "₹127 (+119%)"],
            ["Retargeting Spend", "₹2.1L/month", "₹1.3L/month (−40%)"],
            ["Organic Return Rate", "18%", "43%"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Retention is designed on Day 1, not Day 14" body="D1 action type predicted D30 retention with 0.74 correlation. By the time users hit Day 14 without a loop, they were effectively gone. The retention battle is won or lost in the first session." />
          <Insight num="02" title="Notifications only work when tied to user value, not product schedule" body="Calendar-based notifications (3× per week) produced 3.8% click-through. Product-event notifications (price alert fired) produced 61% open rate, 38% return visit. The difference: one is noise, one is signal." />
          <Insight num="03" title="Social loops are the most durable retention mechanism" body="Users with a referral relationship had 2.8× retention of non-referrers. Social commitment creates accountability that no notification can replicate. Referral isn't an acquisition tool — it's a retention tool." />
          <Insight num="04" title="The best feature for retention is data that changes" body="The price alert worked because prices actually change. The weekly report worked because market data moved. Give users a reason to check back by building features that update — not static information." />
          <Insight num="05" title="Cutting retargeting spend improved retention — not the reverse" body="When we cut 40% of retargeting spend and redirected engineering toward loops, retention improved. More budget on push doesn't fix pull. Fix pull instead." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Price alert notification frequency was too high" why="Initially notified on any price change > 0.1%. Users received 3–4 notifications per day. Notification fatigue → unsubscribe rate 34%." fix="Set threshold to >2% change AND a personalized relevance filter. Notifications dropped from 4/day to 1.4/week. Unsubscribe rate fell to 3%." />
          <FailurePoint title="Savings report email used generic market benchmark" why="'You could save ₹1,200 vs market average' felt abstract. Users didn't trust the comparison." fix="Switched to: 'Your saved plan [Name] has changed ₹X since you compared. Here's the current best option.' Specific to their plan. Click rate 4× improved." />
          <FailurePoint title="D1 loop activation CTA overshadowed product's core value" why="Making price alert setup the hero action confused users who came to browse first, not commit." fix="Added browse path first — then surfaced alert setup after first comparison viewed. 'Save this comparison' CTA at natural completion point. Less friction, same loop activation rate." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Predictive Alert Triggers" body="Instead of waiting for price changes, predict when prices are likely to change (seasonal patterns, provider cycles) and alert users proactively before the change." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Cross-Product Loops" body="Extend retention loops across product lines — insurance alert user also gets car loan rate alert. Cross-sell path becomes a retention mechanism." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Loop Health Dashboard" body="Real-time dashboard showing loop activation rates, loop return rates, and which loops are degrading. Enables product team to intervene before retention metrics decline." />
        </div>
        <BlockQuote>We didn't solve retention by spending more on notifications. We solved it by building a product that gave users a genuine reason to come back — one built into the core experience.</BlockQuote>
      </section>
    </div>
  );
}
