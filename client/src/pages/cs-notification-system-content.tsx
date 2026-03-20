import { TrendingUp, Zap, Target, Bell, Brain, BarChart3, Users, Layers } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function NotificationSystemContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Day Our Notification System Killed Engagement</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We crossed 1 million registered users. The growth team celebrated. Then we looked at the notification analytics: <strong className="text-foreground">push notification opt-out rate had climbed to 61%</strong>. In the previous quarter, it was 31%.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We had been sending 4–7 notifications per day across our user base. Marketing had its campaigns. Product had its feature announcements. Support had its reminders. Nobody owned the full notification experience — and collectively, we were destroying it.</p>
        <ProblemBox>Our notification system had become a broadcast tool for every internal team's agenda — with zero consideration for what the user on the other end actually needed.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The real cost: every opted-out user was a permanently broken re-engagement channel. Notifications are push-permission assets. You get one chance. We'd burned through it carelessly on bulk campaigns.</p>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Notification Audit</h2>
        <DataTable
          headers={["Notification Type", "Volume/Month", "Open Rate", "Unsubscribe Rate", "Conversion"]}
          rows={[
            ["Marketing Campaign Blasts", "8.4M sends", "4.2%", "1.8% per send", "0.3%"],
            ["Feature Announcements", "2.1M sends", "9.8%", "0.8% per send", "1.4%"],
            ["Price Alerts (user-set)", "1.2M sends", "61%", "0.1% per send", "38%"],
            ["Transactional / Status", "0.8M sends", "78%", "0.02%", "N/A"],
            ["Re-engagement Drip", "3.2M sends", "3.1%", "2.4% per send", "0.2%"],
          ]}
        />
        <InsightBox>Price alerts (user-set, triggered by product events) had 61% open rate and 38% conversion. Marketing blasts had 4.2% open rate and 0.3% conversion. The best notifications weren't campaigns — they were answers to questions users had already asked.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">User Notification Tolerance Profiles</h2>
        <DataTable
          headers={["Profile", "% of Users", "Tolerance", "Preferred Channel", "Opt-Out Trigger"]}
          rows={[
            ["Engaged Transactors", "22%", "High — for relevant content", "Push + Email", "Irrelevant content"],
            ["Occasional Users", "38%", "Medium — 1–2/week max", "Email preferred", "Frequency > 2/week"],
            ["Alert-Centric Users", "14%", "High — for price events only", "Push only for alerts", "Any non-alert push"],
            ["Passive Users", "26%", "Very Low — any interruption", "Email only (if at all)", "Any push notification"],
          ]}
        />
        <TakeawayBox>26% of users had near-zero tolerance for push notifications. Sending them 4–7 per day was actively accelerating opt-out — and making future re-engagement impossible.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Notifications are a distribution channel — use them for all communication</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Push permission is a finite asset. Every send is a spend. Only spend on notifications that create value the user would thank you for.</p>
          </div>
        </div>
        <BlockQuote>A notification is not a message. It's an interruption. An interruption is justified only when the value of the information exceeds the cost of the interruption — which is never zero.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Precision Engagement Architecture (PEA)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">PEA treats every notification as a product decision — scored, routed, and capped by a centralized intelligence layer before it reaches any user.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Target className="h-5 w-5 text-primary" />} title="Notification Score" body="Every notification request scored 0–100 on: user relevance, timing, frequency cap status, channel preference, and historical response rate for that notification type." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Bell className="h-5 w-5 text-green-600" />} title="Frequency Governor" body="Hard caps: push max 3/week per user (adjusted down for low-engagement users). Email max 2/week. No override — even for marketing campaigns." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Layers className="h-5 w-5 text-purple-600" />} title="Channel Intelligence" body="Each user has a preferred channel learned from behavior: open rates on push vs email vs SMS. Notification routed to highest-probability-of-open channel." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<Brain className="h-5 w-5 text-orange-600" />} title="Send-Time Optimization" body="Send-time predicted per user from historical open behavior. Not time zones — actual individual open patterns. STO increased open rates 34% vs fixed-time sending." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Notification Score Threshold", "Action", "Rationale"]}
          rows={[
            ["≥80 (Critical / Price Event)", "Send immediately, all channels", "User set this — they want it now"],
            ["60–79 (High Relevance)", "Send in optimal window, preferred channel", "High value, user tolerant"],
            ["40–59 (Medium Relevance)", "Batch to weekly digest", "Some value, don't interrupt daily"],
            ["< 40 (Low Relevance)", "Block — not sent", "Not worth the opt-out risk"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Notification Intelligence Hub", points: ["Centralized notification request API — all teams must route through it", "Score calculated at request time using user preference profile + frequency governor", "Blocked notifications logged — teams see send volume without seeing irrelevant mass sends"] },
            { layer: "Layer 2", title: "User Preference Engine", points: ["Explicit preferences: push/email/SMS toggles by notification category", "Inferred preferences: open rate behavior per channel, last-open timestamp patterns", "Preference profile updated weekly — behavior changes preferences over time"] },
            { layer: "Layer 3", title: "Send-Time Optimization", points: ["Per-user send-time model: built from 6-month historical open timestamp data", "Sends queued until optimal window: next personal open-pattern match", "Fallback: if no personal data, use cohort-level time optimization"] },
            { layer: "Layer 4", title: "Performance Dashboard", points: ["Real-time notification performance: open rate, click rate, opt-out rate by notification type", "Frequency governor dashboard: how many sends blocked per day, by team", "Opt-out rate trend: if rising, auto-alert to notification governance owner"] },
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
          <Phase num="Phase 1" period="0–4 Weeks" title="Audit & Governance" actions={["Full notification audit: 12 notification types, 5 teams sending", "Opt-out rate mapped per notification type", "Governance model proposed: all sends through central hub"]} result="Audit complete; governance model approved by leadership" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="4–8 Weeks" title="Hub Build" actions={["Centralized notification API built", "Frequency governor implemented: 3 push/week hard cap", "Score model built for 12 notification types"]} result="Hub live — all teams onboarded" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="8–12 Weeks" title="Intelligence Layer" actions={["User preference engine deployed", "Send-time optimization added (STO)", "Opt-out rate: 61% → 34% in 8 weeks"]} result="Opt-out rate halved" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="12+ Weeks" title="Quality Compounding" actions={["Weekly digest launched for batched medium-relevance sends", "Marketing campaign volume down 68% — same revenue outcome", "Notification-to-revenue attribution fully tracked"]} result="Push open rate 4.2% → 31%, opt-out 61% → 18%" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="31%" label="Push Open Rate" sub="from 4.2% baseline" color="text-green-600" />
          <MetricCard value="18%" label="Opt-Out Rate" sub="from 61% (−70%)" color="text-primary" />
          <MetricCard value="−68%" label="Notification Volume" sub="same revenue outcome" color="text-green-600" />
          <MetricCard value="34%" label="STO Open Rate Lift" sub="vs fixed-time sending" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before PEA", "After PEA (12 Weeks)"]}
          rows={[
            ["Push Open Rate (blended)", "4.2%", "31%"],
            ["Opt-Out Rate (monthly)", "61%", "18%"],
            ["Notification Volume/Month", "15.7M sends", "5.0M sends (−68%)"],
            ["Marketing Conversion from Push", "0.3%", "1.8%"],
            ["Revenue per 1K sends", "₹12", "₹74 (6.2×)"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Push permission is a finite asset — treat it like budget" body="Every low-value push notification reduces future notification effectiveness. The opt-out rate is the real cost metric — not notification volume. You're spending an asset you can't refill." />
          <Insight num="02" title="Governance is a product problem, not a policy problem" body="Telling teams to 'send fewer notifications' doesn't work. Building a central hub that technically enforces limits works. Design the system to produce the behavior, don't rely on compliance." />
          <Insight num="03" title="User-triggered notifications always outperform brand-triggered" body="Price alerts: 61% open, 38% conversion. Marketing blast: 4.2% open, 0.3% conversion. The user who asked for the notification is 10× more likely to act on it. Build mechanisms that let users create their own notification triggers." />
          <Insight num="04" title="Send-time optimization is personal, not demographic" body="Sending to 'morning people' or 'evening users' by demographic is approximation. Building a per-user send-time model from individual historical behavior is precision. 34% open rate lift at 1M scale is not trivial." />
          <Insight num="05" title="Less volume = more revenue per send" body="68% reduction in volume with 6.2× improvement in revenue per 1K sends. This is not a paradox — it's the math of targeting. Sending to people who will act is always more efficient than sending to everyone who won't unsubscribe." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Marketing team circumvented the hub initially" why="Marketing found they could bypass the central API by using a third-party tool directly. Frequency governor was ineffective for 3 weeks post-launch." fix="All third-party push tools integrated into the hub or blocked. Compliance enforced technically, not by policy." />
          <FailurePoint title="STO delayed critical transactional notifications" why="STO system queued ALL notifications — including 'Your transfer is complete' messages — to the 'optimal window.' Users complained about delayed transaction confirmations." fix="Created notification priority tiers: Tier 1 (transactional, time-sensitive) always sent immediately, bypasses STO. Only Tier 2–3 go through STO queue." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Predictive Notification Relevance" body="ML model that predicts whether a specific user will open a specific notification type — before sending. Block sends where open probability < 15%." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Conversational Notifications" body="Rich push notifications with inline actions — approve, compare, book — without opening the app. Reduces friction between notification and conversion." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Notification Fatigue Index" body="Per-user fatigue score based on recent opt-outs, open rate decline, and session behavior. Automatic reduction of notification frequency when fatigue index rises." />
        </div>
        <BlockQuote>We sent 68% fewer notifications and generated 6× more revenue per send. Quality is not a constraint on quantity. It is a superior strategy.</BlockQuote>
      </section>
    </div>
  );
}
