import { Bell, BellOff, Brain, BarChart3, Target, Zap } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function NotificationSystemContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">We Sent Fewer Notifications. Revenue Went Up.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The counterintuitive result came in on a Tuesday. The experiment had been running for 3 weeks: Group A got our standard notification cadence (11 per month), Group B got our new intelligent system (4.2 per month on average). The rule of thumb says more touchpoints equals more engagement.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Group B had 28% higher click-through, 34% higher revenue per user, and 61% lower unsubscribe rate. We'd been spamming ourselves into lower performance for over a year.</p>
        <ProblemBox>Notifications aren't engagement tools. They're trust tokens. Every notification you send that isn't relevant is a withdrawal from the trust account. When you overdraw, users unsubscribe — permanently. You don't get a second opt-in.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The rebuild wasn't about sending fewer notifications. It was about building a system that only sent notifications that were genuinely worth interrupting someone for.</p>
      </section>

      <SectionDivider label="The Problem State" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Our Notification System Actually Was</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Before the rebuild, our "notification system" was a collection of trigger scripts written by 7 different engineers over 18 months, each optimized for their individual feature's engagement metric. Nobody owned the full notification experience.</p>
        <DataTable
          headers={["Notification Type", "Frequency", "Open Rate", "Click Rate", "Contribution to Unsubscribes"]}
          rows={[
            ["Weekly digest (generic)", "4/month", "14.2%", "3.1%", "28%"],
            ["Product feature updates", "2/month", "8.4%", "1.8%", "19%"],
            ["Price change alerts (all changes)", "3.2/month avg", "41.2%", "22.4%", "11%"],
            ["Re-engagement nudges", "1.5/month", "6.1%", "2.2%", "31%"],
            ["Promotional offers", "0.8/month", "9.8%", "4.1%", "11%"],
          ]}
        />
        <InsightBox>The generic weekly digest had a 3.1% click rate and contributed 28% of all unsubscribes. We were sending 4 notifications per month that were generating 3 clicks per 100 users and destroying our ability to reach 28% of users who received them.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">Contrast: price change alerts had 22.4% click-through and low unsubscribe contribution. The pattern was clear — event-driven, specific, relevant notifications performed 7× better than calendar-driven generic ones.</p>
      </section>

      <SectionDivider label="The Notification Quality Spectrum" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Not All Notifications Are Equal</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We classified every notification type across two dimensions: relevance specificity (generic → personalized → event-triggered) and user value (low → medium → high). The matrix was revealing.</p>
        <DataTable
          headers={["Classification", "Example", "Click Rate", "Unsubscribe Rate", "Strategy"]}
          rows={[
            ["Generic + Low Value", "Weekly digest (all users)", "3.1%", "High", "Eliminate"],
            ["Generic + Medium Value", "Feature update", "1.8%", "High", "Eliminate or in-app only"],
            ["Personalized + Medium Value", "Rate changed for your category", "12.4%", "Low", "Optimize and keep"],
            ["Event-triggered + High Value", "Your alert: Hdfc rate dropped ₹340", "22.4%", "Very Low", "Scale"],
            ["Behavioral + High Value", "You left a quote mid-way — here it is", "31.2%", "Very Low", "Expand"],
          ]}
        />
        <TakeawayBox>The decision matrix was stark: the bottom two rows (event-triggered and behavioral) produced 7–10× better click rates at a fraction of the unsubscribe cost. The top two rows were actively harming our deliverability and user trust while contributing almost nothing to business metrics.</TakeawayBox>
      </section>

      <SectionDivider label="Design Principles" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The New Notification Philosophy</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We wrote a one-page notification philosophy that every engineer working on the system had to sign off on. It sounds dramatic. It was necessary — because without explicit principles, the default behavior is always "add more notifications."</p>
        <BlockQuote>A notification is an interruption. Every interruption needs to justify itself against the question: "Is this worth stopping what this user is doing right now?" If the answer isn't a confident yes — it doesn't send.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">Three rules that governed every notification decision: (1) No calendar-based sends — only event or behavior triggers; (2) Every notification must be specific to something in the user's own data, not general market data; (3) Frequency limits per user are hard limits, not guidelines — the system enforces them, engineers don't override them.</p>
      </section>

      <SectionDivider label="The New System" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Rebuilt System Does</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-primary" />}
            title="Relevance Scoring"
            body="Every potential notification scored before sending: user data match, time since last notification, channel fatigue level, user segment, historical engagement with this notification type for this user. Score < 60/100 = don't send."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Bell className="h-5 w-5 text-green-600" />}
            title="Hard Frequency Caps"
            body="Maximum 2 push notifications per 7 days per user. Maximum 4 emails per month. Per-channel, per-user. System-enforced. The highest-priority notification wins the available slot if multiple are queued. No override except manual customer success."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Content Personalization Engine"
            body="Every notification body generated from user-specific data: their plan name, their savings amount, their comparison. Not merge tags in a template — a content generation layer that produces genuinely personalized copy per notification instance."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<BellOff className="h-5 w-5 text-orange-600" />}
            title="Negative Signal Learning"
            body="Unopened notifications for a user type → reduce send probability for that type for that user. Clicked: increase. Dismissed without opening: minor decrease. Unsubscribed: permanent kill for that channel. Preference signals respected, not re-asked."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Technical Implementation" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How the System Was Built</h2>
        <div className="space-y-4">
          {[
            { title: "Notification Eligibility Engine", points: ["Central service: every notification request passes through eligibility check before queuing", "Checks: frequency cap, channel preference, relevance score, time of day, recent engagement", "If ineligible: request rejected with reason code (for analytics)"] },
            { title: "Content Generation Layer", points: ["Templating system replaced with dynamic content generation per user", "User data injected at generation time: plan name, amount, comparison data", "Fallback logic: if user data unavailable, notification held (not sent with generic content)"] },
            { title: "Engagement Feedback Loop", points: ["Delivery, open, click, dismiss events all fed back to user preference model", "Model updates user-level engagement history per notification type", "Weekly model refresh: frequency cap adjustments per user segment based on engagement patterns"] },
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

      <SectionDivider label="Results" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">A/B Test and Outcomes</h2>
        <div className="space-y-4">
          <Phase num="Weeks 1–3" period="Audit" title="Mapping the Existing System" actions={["Catalogued all 14 notification types across the platform", "Measured click rate, unsubscribe contribution, revenue attribution per type", "Classified each notification on the relevance-value matrix"]} result="Identified 6 notification types to eliminate immediately; 3 to redesign; 2 to scale." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Weeks 4–8" period="Build" title="New System Implementation" actions={["Eligibility engine built and integrated with all notification trigger points", "Content personalization layer replaced template system", "Engagement feedback loop implemented"]} result="New system running in parallel. A/B test initiated at 50/50 split." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Weeks 9–12" period="A/B Results" title="Statistical Significance Reached" actions={["New system: 4.2 notifications/user/month vs 11 in control", "Statistical significance at Week 9 for click-through metric", "Unsubscribe delta significant by Week 11"]} result="New system: +28% CTR, +34% revenue/user, −61% unsubscribes. Full rollout." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <MetricCard value="+28%" label="Notification CTR" sub="at 62% lower volume" color="text-green-600" />
          <MetricCard value="+34%" label="Revenue per User" sub="notification-attributed" color="text-primary" />
          <MetricCard value="−61%" label="Unsubscribe Rate" sub="trust account restored" color="text-green-600" />
          <MetricCard value="4.2" label="Avg Monthly Sends" sub="down from 11" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What This Changed About How I Think About Notifications</h2>
        <div className="space-y-6">
          <Insight num="01" title="Notification volume and notification effectiveness are inversely related above a threshold" body="Below 4 notifications/month: users feel you're not communicating. Above 8: fatigue sets in and each marginal notification generates negative returns (unsubscribes, dismissed without reading). The sweet spot for our context was 4–6 per month." />
          <Insight num="02" title="Unsubscribes are a metric you should watch as carefully as CTR" body="High CTR but rising unsubscribes = you're burning your future reach to generate today's clicks. The notification system should be judged on lifetime deliverability (ability to reach users over months), not single-send performance." />
          <Insight num="03" title="Generic notifications are expensive even when they 'work'" body="A 14% open rate sounds acceptable. But if those opens produce 3.1% clicks and 28% of your unsubscribes — the math collapses. The correct metric for any notification type is revenue per notification, net of unsubscribe cost." />
          <Insight num="04" title="Ownership matters for cross-system experiences" body="The pre-rebuild system had 7 engineers adding notifications independently. No one owned the user's full notification experience. One team's engagement optimization was another team's reputation damage. Unified ownership of the notification experience is not optional." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Got Wrong in the Build</h2>
        <div className="space-y-4">
          <FailurePoint title="Frequency caps initially applied at platform level, not per-channel" why="Platform-level cap of 2 per week meant a user could get 2 push + 2 email = 4 contacts in 7 days. That's too many. The cap needed to be per-channel, not total." fix="Per-channel hard caps: 2 push/week, 4 email/month. If push quota full and a high-priority notification triggered, held for next week — not overflowed to email." />
          <FailurePoint title="Relevance scoring initially had no time-of-day component" why="A price alert at 2:47am is less useful than one at 9:15am — even if the content is identical. Initial scoring model had no time component." fix="Added send-time optimization: each user has a predicted high-engagement window (inferred from historical open times). Notifications held and sent in that window where possible. CTR improved further 11%." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where the System Goes Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Per-User Frequency Optimization" body="Current frequency caps are category-level averages. Next: per-user optimal frequency modeled from individual engagement history. Some users want daily; some want monthly. Let them self-select through behavior." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Channel Arbitration" body="When the same alert could be push, email, or SMS — current system uses default channel. Next: select channel based on user's historical engagement by channel and time of day." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Lifetime Deliverability Metric" body="Track per-user delivery health over time: unsubscribed channels, open rate trends, dismiss rate. Flag users whose deliverability is declining before unsubscribe — intervene with re-permission campaign before losing the channel." />
        </div>
        <BlockQuote>We sent 62% fewer notifications and achieved 28% higher engagement. The lesson isn't to minimize notifications — it's to only send notifications that earn the interruption they're asking for.</BlockQuote>
      </section>
    </div>
  );
}
