import { AlertTriangle, Brain, TrendingDown, Target, Zap, BarChart3 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function ChurnModelContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Problem with Fixing Churn After It Happens</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Every Monday we'd pull the weekly retention report. Users who churned last week. Win-back campaigns sent. Discount codes deployed. Response rates: 3–7%. The users were already gone.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We were fighting churn retrospectively — responding to an event that had already happened rather than preventing it. The entire retention strategy was essentially a post-mortem dressed up as engagement.</p>
        <ProblemBox>By the time a user churns, you've already lost. The window to intervene is 10–14 days before the churn event — when behavior starts to degrade but the user is still reachable and still cares.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The goal shifted: stop measuring churn. Start predicting it. Specifically, predict it 14 days before it happens — when there's still something we can do about it.</p>
      </section>

      <SectionDivider label="What We Observed" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 14-Day Degradation Signal</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We pulled 2 years of churned user behavioral data and mapped it backwards from the churn date. The pattern was remarkably consistent: users who churned showed measurable behavioral degradation starting 14 days out.</p>
        <DataTable
          headers={["Days Before Churn", "Avg Session Frequency Change", "Avg Session Depth Change", "Transaction Rate Change"]}
          rows={[
            ["D-28 to D-21", "−8%", "−5%", "−3%"],
            ["D-21 to D-14", "−22%", "−18%", "−14%"],
            ["D-14 to D-7", "−41%", "−35%", "−28%"],
            ["D-7 to D-0 (churn)", "−67%", "−52%", "−47%"],
          ]}
        />
        <InsightBox>The sharpest degradation happened between D-21 and D-14. That 7-day window was both the earliest detectable signal and the last viable intervention window. Before D-21: too early, too noisy. After D-7: too late.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">The question was whether the D-21 to D-14 behavioral changes were specific enough to be predictive — or whether they were just statistical noise that looked like a pattern in retrospect.</p>
      </section>

      <SectionDivider label="Behavioral Fingerprint" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Pre-Churn Users Actually Did</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We labeled 8 months of churned users (N=4,200) and matched them against active users for the same period. Then we looked at behavioral differences starting at D-28 before churn.</p>
        <DataTable
          headers={["Behavioral Signal", "Pre-Churn Users (D-14)", "Retained Users (same period)", "Signal Strength"]}
          rows={[
            ["Session frequency drop >30%", "71%", "12%", "High"],
            ["No return within 7 days of last session", "68%", "18%", "High"],
            ["Core feature usage stopped", "61%", "9%", "Very High"],
            ["Last 3 sessions: browse only, no action", "54%", "14%", "High"],
            ["Support ticket OR complaint in D-30", "38%", "8%", "Moderate"],
            ["Comparison of competitor features viewed", "29%", "4%", "High"],
          ]}
        />
        <TakeawayBox>Core feature usage stopping was the strongest individual predictor — 61% of users who churned had stopped using the core feature 14+ days before churning. Most teams interpret this as "disengagement." It's actually the decision phase of leaving.</TakeawayBox>
      </section>

      <SectionDivider label="The Model" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">From Retrospective to Predictive</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The conceptual shift was simple to articulate, harder to execute: treat churn not as an event to respond to, but as a probability to be managed continuously. Every user, every day, has a churn probability. The job is to monitor that probability and intervene when it crosses a threshold.</p>
        <BlockQuote>A user doesn't churn suddenly. They decide slowly, then leave quickly. The decision phase is when you can still change the outcome. The leaving phase is where you lose the argument.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The model we needed wasn't a churn classifier — it was a churn probability monitor. The output wasn't "will this user churn?" but "what's the probability this user churns in the next 14 days, and is that probability increasing?"</p>
      </section>

      <SectionDivider label="Model Design" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Churn Risk Monitoring System</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">We built in four components, each necessary. The hardest was the intervention playbook — getting the model right was actually the easier half.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-primary" />}
            title="Daily Churn Probability Scoring"
            body="Gradient boosting model scoring every active user daily. Output: 0–100 churn probability for the next 14 days. Input: 22 behavioral features, rolling 28-day windows. Model retrained weekly with previous week's actual churn outcomes."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
            title="Risk Velocity Tracking"
            body="Not just the score — the rate of change. A user at 40% churn probability for 2 weeks is stable. A user who went from 20% to 55% in 3 days is in active degradation. Velocity triggers different (faster) interventions than level alone."
            color="bg-red-50 border-red-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Segmented Intervention Playbook"
            body="Three risk tiers: Yellow (40–60%), Orange (60–75%), Red (>75%). Each tier gets a different intervention: Yellow = product nudge; Orange = personalized email with relevant feature highlight; Red = human outreach within 24 hours."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Zap className="h-5 w-5 text-green-600" />}
            title="Intervention Outcome Tracking"
            body="Every intervention tagged with user ID, risk score at trigger, and intervention type. Churn outcomes tracked per intervention type × risk tier. Playbook updated quarterly based on what's actually working."
            color="bg-green-50 border-green-200"
          />
        </div>
        <DataTable
          headers={["Risk Tier", "Churn Probability", "Intervention", "Response Rate", "Churn Prevention Rate"]}
          rows={[
            ["Yellow", "40–60%", "Personalized in-app nudge", "34%", "61%"],
            ["Orange", "60–75%", "Email with relevant case study or feature", "28%", "44%"],
            ["Red", "75%+", "Human outreach within 24 hours", "51%", "38%"],
          ]}
        />
      </section>

      <SectionDivider label="Technical Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How It Runs Day-to-Day</h2>
        <div className="space-y-4">
          {[
            { title: "Daily Scoring Pipeline", points: ["Nightly batch job: feature extraction for all active users in last 30 days", "22 behavioral features per user: session frequency, depth, feature usage vectors, support interactions", "Model inference run at 2am IST; risk scores available by 6am for intervention queue"] },
            { title: "Intervention Queue", points: ["Yellow tier: in-app nudges queued for next active session", "Orange tier: personalized email generated and sent within 2 hours of morning score run", "Red tier: ticket created in CRM, assigned to customer success rep with context note"] },
            { title: "Human Outreach System", points: ["Red tier users: automated context card sent to CS rep — shows user's score history, last 3 sessions, what feature they stopped using", "CS rep playbook: first goal is understanding (why the withdrawal?), not retention offer", "Outcome logged: retained, partially retained (downgraded), or churned despite intervention"] },
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

      <SectionDivider label="Rollout" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">90 Days of Iteration</h2>
        <div className="space-y-4">
          <Phase num="Month 1" period="Model Training" title="Labeling + Feature Selection" actions={["4,200 churned users labeled manually from 8 months of data", "22 features selected from initial 60 candidates by importance score", "Model validation: AUC 0.81 at 14-day prediction horizon"]} result="Model live in staging. Daily scoring pipeline running but not yet triggering interventions." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2" period="Playbook Design" title="Intervention Testing" actions={["Yellow tier in-app nudges: A/B tested 6 message variants", "Orange tier email: personalized vs generic offer — personalized 2.8× better click rate", "Red tier: manual human outreach for first 6 weeks before systematizing"]} result="Intervention playbook drafted. First 200 at-risk users saved." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 3" period="Full Rollout" title="System Running at Scale" actions={["All 3 tiers automated (except Red — human loop preserved)", "Weekly model refresh established", "Churn prevention dashboard live for CS team"]} result="Monthly churn rate: 8.4% → 5.1%. Significant drop in first 60 days of full rollout." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Changed</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="−39%" label="Monthly Churn Rate" sub="8.4% → 5.1%" color="text-green-600" />
          <MetricCard value="51%" label="Red Tier Response Rate" sub="human outreach" color="text-primary" />
          <MetricCard value="₹2.1Cr" label="Annual Revenue Retained" sub="from prevented churn" color="text-green-600" />
          <MetricCard value="14 days" label="Prediction Horizon" sub="before churn event" color="text-primary" />
        </div>
        <TakeawayBox>The most surprising finding: Yellow tier (40–60% churn probability) had the highest prevention rate at 61%. These users hadn't made up their mind yet — a well-timed intervention shifted the outcome. The users most at risk (Red tier) were harder to save because the decision was further along.</TakeawayBox>
      </section>

      <SectionDivider label="Learnings" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Non-Obvious Findings</h2>
        <div className="space-y-6">
          <Insight num="01" title="Velocity matters more than level for urgent interventions" body="A user at 70% churn probability who's been there for 2 weeks is more stable than a user who jumped from 30% to 65% in 3 days. The second user is actively making the decision to leave. Score velocity should trigger faster intervention than score level alone." />
          <Insight num="02" title="The earliest intervention window has the highest success rate" body="Yellow tier (40–60%) had 61% prevention rate. Red tier (75%+) had 38%. Intervention earlier in the decision process — when users are ambivalent, not committed — is significantly more effective." />
          <Insight num="03" title="Human outreach beats automation for the highest-risk users" body="For Red tier users, automated messages felt tone-deaf. What worked was a CS rep who had context (what the user stopped doing, when, what they'd previously valued) and led with curiosity rather than retention offers." />
          <Insight num="04" title="Core feature abandonment is the single most predictive signal" body="Session frequency drops are visible but noisy — people go on vacation. Core feature abandonment is specific: a user who stops doing the thing they came for is making a statement about the product's value to them." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where We Got It Wrong First</h2>
        <div className="space-y-4">
          <FailurePoint title="Initial model had no velocity component" why="First version: daily score, static. A user at 65% for 3 weeks and a user who jumped to 65% in 2 days got the same intervention. Urgency was identical; it shouldn't have been." fix="Added 7-day score velocity as a feature. Users with velocity > 15-point increase per week flagged as urgent. Red tier expanded to include high-velocity users even below the 75% threshold." />
          <FailurePoint title="Yellow tier nudge was too generic" why="'We noticed you haven't been as active lately. Here's what's new.' Ignored by 73% of users. Too vague to be compelling, too generic to be personal." fix="Nudge personalized to the specific feature the user had stopped using. 'You haven't checked your rate alerts recently — here's a rate change that matches your saved comparison.' Click rate 4.2× better." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What's Still Left to Build</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Churn Root Cause Model" body="Current model predicts who will churn. Missing: why. A secondary classifier identifying whether the churn signal is price sensitivity, feature gap, or competitive. Different root causes need different interventions." />
          <FutureCard icon={<TrendingDown className="h-5 w-5 text-primary" />} title="Re-engagement Scoring" body="Churned users who come back are underserved by the current system. A re-engagement model that identifies which churned users have elevated return probability, and what triggered them to reconsider." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Product-Level Churn Attribution" body="Connect churn signals to specific product features or flows. Which parts of the product are consistently present in the journeys of churning users? Inform product roadmap with churn data, not just engagement metrics." />
        </div>
        <BlockQuote>Churn doesn't happen on the day someone cancels. It happens when they quietly start looking for reasons not to stay. The 14-day window is where the decision actually lives.</BlockQuote>
      </section>
    </div>
  );
}
