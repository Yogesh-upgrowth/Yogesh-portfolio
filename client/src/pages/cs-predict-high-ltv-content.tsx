import { TrendingUp, Zap, Target, Layers, Lightbulb, Database, BarChart3, Users, Brain } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function PredictHighLtvContent() {
  return (
    <div className="space-y-2">

      {/* HOOK */}
      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Moment the Revenue Model Broke</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We had 40,000 registered users. Revenue was flat. Marketing was spending ₹12 per user acquisition — and our finance lead pulled up a chart that made the room go quiet.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The chart showed that <strong className="text-foreground">2.3% of users were generating 71% of all revenue.</strong> Everyone else — the 97.7% we'd spent millions acquiring — were essentially break-even or negative.</p>
        <ProblemBox>We weren't growing a business. We were running an expensive lottery to find the 2% who actually mattered.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The question wasn't "how do we get more users." It was: <strong className="text-foreground">can we identify who the 2% will be — before we spend money acquiring them?</strong></p>
      </section>

      <SectionDivider label="Ground Reality" />

      {/* EARLY DATA */}
      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Early Stage Data: What the Dashboard Showed</h2>
        <DataTable
          headers={["Metric", "Value", "Interpretation"]}
          rows={[
            ["Registered Users", "40,000", "Vanity metric"],
            ["Monthly Active Users", "8,200 (20.5%)", "High churn, shallow engagement"],
            ["Revenue-Generating Users", "920 (2.3%)", "The real customers"],
            ["Avg Revenue per User (all)", "₹18/mo", "Misleading average"],
            ["Avg Revenue per High-LTV User", "₹1,390/mo", "The real signal"],
            ["CAC (blended)", "₹340", "Losing money on 97% of users"],
          ]}
        />
        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">What Teams Thought</p>
            <ul className="space-y-1 text-sm text-foreground/70">
              <li>→ We need more users</li>
              <li>→ Improve onboarding flow</li>
              <li>→ Run re-engagement campaigns</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">What Was Actually Happening</p>
            <ul className="space-y-1 text-sm text-foreground/80">
              <li>→ Wrong users being acquired</li>
              <li>→ High-LTV users had distinct early signals</li>
              <li>→ 72-hour behavior predicted 90-day LTV</li>
            </ul>
          </div>
        </div>
        <InsightBox>The average LTV was a fiction. It was hiding two completely separate customer populations in one number.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Two Populations Inside Your User Base</h2>
        <DataTable
          headers={["Cohort", "Size", "72-hr Behavior", "90-Day LTV", "Revenue Share"]}
          rows={[
            ["Explorer (never converts)", "58%", "Browses, 1 session", "₹0", "0%"],
            ["One-and-Done", "29%", "1 transaction, gone", "₹45", "9%"],
            ["Recurrent User", "10.7%", "3+ sessions, 2+ features used", "₹380", "20%"],
            ["High-LTV Power User", "2.3%", "5+ sessions, 4+ features, returns D3", "₹1,390", "71%"],
          ]}
        />
        <InsightBox>The High-LTV cohort didn't become valuable over time. They showed their signal within 72 hours. The question was whether we were reading it.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-4">The 72-hour behavioral fingerprint of a Power User: <strong className="text-foreground">deep feature exploration, comparison behavior, return visit on Day 2 or 3, and a specific sequencing pattern</strong> — not just usage, but the order of actions taken.</p>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Problem Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Acquire more users → optimize for volume → revenue will follow</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Identify LTV signals → score users in real-time → acquire and nurture the 2%</p>
          </div>
        </div>
        <BlockQuote>You don't need more users. You need to find the right users faster — and stop subsidizing everyone else.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Lifetime Value Signal Architecture (LVSA)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">We built LVSA — a 4-dimension prediction system that scored every new user within 72 hours of signup and routed them into distinct experience tracks.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Database className="h-5 w-5 text-primary" />}
            title="Signal Layer"
            body="Behavioral events captured in real-time: session depth, feature sequencing, return timing, comparison actions. Each event weighted by predictive power, not recency."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-green-600" />}
            title="Scoring Engine"
            body="XGBoost model trained on 18 months of historical data. Output: LTV Probability Score (0–100) at the 72-hour mark. Threshold 65+ = High-LTV candidate."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Routing Layer"
            body="High-LTV candidates routed to white-glove onboarding, priority support queue, early access to premium features. Low scorers enter standard retention flows."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<TrendingUp className="h-5 w-5 text-orange-600" />}
            title="Feedback Loop"
            body="Model retrained monthly with actual 90-day LTV outcomes. Each cycle improves prediction precision. Score drift alerts trigger manual review."
            color="bg-orange-50 border-orange-200"
          />
        </div>
        <DataTable
          headers={["Behavioral Signal", "Weight", "Why It Matters"]}
          rows={[
            ["Return visit within 72 hours", "0.28", "Strongest single predictor of retention"],
            ["4+ features used in session 1", "0.22", "Depth of exploration = intent seriousness"],
            ["Comparison action performed", "0.18", "Decision-stage behavior"],
            ["Session duration > 8 min", "0.15", "Engagement depth"],
            ["Share or export action", "0.10", "Product-as-tool signal"],
            ["Push notification opt-in", "0.07", "Communication consent"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design: 4-Layer Architecture</h2>
        <div className="space-y-4">
          {[
            {
              layer: "Layer 1", title: "Data Intelligence",
              points: [
                "Event stream via Segment → Kafka → real-time feature store",
                "72-hour behavioral feature vector per user (26 features)",
                "LTV Probability Score computed at the 72-hour mark",
              ],
            },
            {
              layer: "Layer 2", title: "Product Experience System",
              points: [
                "High-LTV users: personalized dashboard, curated feature suggestions",
                "Manual check-in from product team for score ≥80 users",
                "Early access to premium tier unlocked at 65+ score",
              ],
            },
            {
              layer: "Layer 3", title: "Marketing & Acquisition",
              points: [
                "Lookalike audiences built from High-LTV cohort profiles",
                "CAC targets differentiated: High-LTV ≤₹1,200 OK vs standard ≤₹180",
                "Source-level LTV scoring: organic > paid search > social (2.1× difference)",
              ],
            },
            {
              layer: "Layer 4", title: "Feedback & Iteration",
              points: [
                "Monthly model refresh with actual 90-day outcome data",
                "A/B tested routing logic: white-glove vs standard onboarding",
                "Score drift dashboard monitored weekly by growth team",
              ],
            },
          ].map((l) => (
            <div key={l.layer} className="p-6 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-foreground mb-3">
                <span className="text-primary font-mono text-sm">{l.layer} · </span>{l.title}
              </p>
              <ul className="space-y-2">
                {l.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/70">
                    <span className="text-primary mt-0.5 shrink-0">→</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Execution" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Execution Journey</h2>
        <div className="space-y-4">
          <Phase num="Phase 1" period="0–30 Days" title="Validation" actions={["Manually tagged 6 months of users as High/Low LTV", "Built correlation heatmap of 60+ behavioral signals", "Identified top 6 predictive signals with 0.78 AUC"]} result="Signal hypothesis validated" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="30–60 Days" title="Model Build" actions={["XGBoost trained on 18 months, 12K labelled users", "72-hour score threshold A/B tested: 60 vs 65 vs 70", "65 selected: 81% precision, 74% recall"]} result="Model live in staging" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="60–90 Days" title="Routing & Activation" actions={["High-LTV routing live: white-glove emails, priority support", "Lookalike audiences pushed to Meta and Google", "CAC ceiling raised 3× for High-LTV targeted campaigns"]} result="Revenue per acquired user +61%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="90+ Days" title="Optimization" actions={["Monthly model refresh cycle established", "Source-level LTV attribution added to dashboards", "Low-LTV acquisition paused from 3 underperforming channels"]} result="Blended CAC down 34%" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="61%" label="Revenue per User" sub="from acquired cohort" color="text-green-600" />
          <MetricCard value="34%" label="Blended CAC Reduction" sub="across all channels" color="text-primary" />
          <MetricCard value="81%" label="Model Precision" sub="at 65-score threshold" color="text-green-600" />
          <MetricCard value="2.7×" label="High-LTV Acquisition" sub="YoY vs baseline" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After (90 Days)"]}
          rows={[
            ["High-LTV User Share", "2.3%", "6.1% of new cohort"],
            ["Revenue per Acquired User", "₹18/mo avg", "₹29/mo avg (+61%)"],
            ["Blended CAC", "₹340", "₹225 (−34%)"],
            ["Model Prediction Accuracy", "—", "81% precision"],
            ["Paid Channel ROAS", "1.8×", "3.4× (High-LTV targeted)"],
          ]}
        />
        <TakeawayBox>We didn't find more customers. We learned to recognize the right ones before they revealed themselves — and built a system to do that at scale.</TakeawayBox>
      </section>

      <SectionDivider label="Second-Order Effects" />

      <section id="second-order" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Compounded (Second-Order Effects)</h2>
        <div className="space-y-3">
          {[
            "Better acquisition targeting → Higher-quality cohorts → More signal for model training → Even better targeting",
            "White-glove High-LTV onboarding → Higher activation → More feature usage → Deeper product stickiness",
            "Source-level LTV data → Budget shifted to organic and search → CAC fell further without targeting changes",
            "Low-LTV signals identified → Product team improved onboarding for that cohort → Some converted to mid-LTV",
          ].map((effect, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-xl border border-border bg-muted/20">
              <span className="text-primary font-bold shrink-0">{i + 1}.</span>
              <p className="text-sm text-foreground/80">{effect}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="LTV is a sorting problem, not a growth problem" body="Most teams try to grow LTV by building more features. The real leverage is in sorting: route high-LTV users to intensive engagement, low-LTV to efficient self-serve. The features already existed — the routing did not." />
          <Insight num="02" title="The 72-hour window is the signal window" body="Post-signup behavior in the first 3 days predicts 90-day LTV with more accuracy than any survey or demographic data. Users show you who they are before they know it themselves." />
          <Insight num="03" title="Averages are lies your dashboard tells you" body="Average LTV across all users was ₹18. Real LTV for target users was ₹1,390. Making decisions on blended averages is building strategy on fiction." />
          <Insight num="04" title="CAC ceilings should be LTV-differentiated" body="If you set one CAC ceiling for all users, you underspend on acquiring high-LTV users and overspend on low-LTV ones. Segmented CAC limits change the economics of every channel." />
          <Insight num="05" title="Lookalike audiences compound" body="Once you know who your High-LTV users are, Meta and Google can find more of them. The model output becomes your best creative brief, your best audience brief, and your best product brief simultaneously." />
          <Insight num="06" title="Prediction precision matters more than recall" body="At 81% precision and 74% recall, we chose to miss some High-LTV users rather than over-invest in false positives. The cost of white-glove treatment on low-LTV users was higher than missing some true positives." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="First model used too many features" why="83 features caused overfitting. Validation AUC looked good (0.84) but live performance degraded fast — the model was memorizing noise." fix="Dropped to top 10 features by mutual information. AUC fell to 0.78 in validation but improved to 0.81 in live scoring — more stable." />
          <FailurePoint title="White-glove routing at score 60 created too many false positives" why="We initially activated white-glove treatment at score ≥60. 40% of those users churned within 30 days. Too expensive for poor outcomes." fix="Raised threshold to 65. Reduced false positives by 51%. Manual outreach reserved for score ≥80 — where conversion to paid was 3.4×." />
          <FailurePoint title="Model score wasn't surfaced to sales team" why="High-LTV users were being handled identically to regular users by sales reps who had no visibility into the score." fix="Score integrated into CRM view. Reps given tiered playbooks by score band. High-score users got VP-level outreach within 4 hours." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Real-Time Score Updates" body="Move from 72-hour static scoring to continuous score updates — recalculated every 6 hours based on live behavior." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="In-Product LTV Nudges" body="Automatically surface features that convert mid-LTV users to High-LTV. Personalised nudges triggered by score velocity, not just score level." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Churn-Weighted LTV" body="Incorporate churn probability into the LTV score. A user with high LTV but high churn probability needs a different intervention than a stable mid-LTV user." />
        </div>
        <BlockQuote>We didn't need more users. We needed to find the right ones before we'd spent money on the wrong ones.</BlockQuote>
      </section>
    </div>
  );
}
