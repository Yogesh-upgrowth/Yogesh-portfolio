import { TrendingUp, Zap, Target, Brain, BarChart3, Layers, Cpu, Lightbulb } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function AiRecommendationContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Why Generic Recommendations Were Costing Us ₹3.2 Crore Annually</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Our comparison platform showed all 18 providers for every query, ranked by exchange rate or price. It was objectively fair and chronically unconverted. The problem: fairness and personalization are opposites.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">A 24-year-old student sending ₹15,000 tuition to her college in Australia doesn't need the same recommendation as a 48-year-old NRI businessman sending ₹40L to his investment account in Dubai. We were giving them identical lists ranked by the same metric.</p>
        <ProblemBox>Our "fair" ranking was a product failure. Showing everyone the same list isn't fair — it's lazy. A genuinely useful recommendation system understands who is asking, what they actually need, and what the optimal answer is for them specifically.</ProblemBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Baseline: Before AI Recommendations</h2>
        <DataTable
          headers={["Metric", "Value", "Problem"]}
          rows={[
            ["Platform Conversion Rate", "6.2%", "Users saw 18 options — chose to research elsewhere"],
            ["Top Provider Click Rate", "Position 1 (rate-ranked)", "34% clicked #1 — correct for only ~28% of users"],
            ["User Satisfaction (NPS)", "38", "Confusion after selection — wrong product for their need"],
            ["Repeat Use Rate", "14%", "Wrong recommendation → bad experience → no return"],
            ["Support: 'Wrong provider selected'", "22% of tickets", "Recommendation mismatch at scale"],
          ]}
        />
        <InsightBox>22% of support tickets were 'I chose the wrong provider' — users following our list and ending up with the wrong product for their situation. Our ranking was technically accurate but contextually wrong.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 5 Real User Decision Profiles</h2>
        <DataTable
          headers={["Profile", "% of Users", "Primary Need", "Optimal Ranking Signal", "'Best Rate' Ranking Fit"]}
          rows={[
            ["Speed-Critical (business, student payment deadline)", "24%", "Fastest delivery", "Transfer speed", "Poor — rate ≠ speed"],
            ["Cost-Minimizer (regular monthly transfer)", "31%", "Lowest all-in cost", "Total cost (rate + fee)", "Good — but needs total cost, not rate alone"],
            ["Compliance-Sensitive (LRS transfer, large amount)", "18%", "Regulatory clarity", "FEMA compliance clarity + limit", "None — rate is irrelevant to this user"],
            ["Reliability-First (HNI, first-time user)", "15%", "Trusted, established provider", "Brand trust score + years in market", "Poor — rate ≠ trust"],
            ["Feature-Rich (business, multi-currency)", "12%", "Multiple currencies, API access", "Feature set match", "None — rate is not the metric"],
          ]}
        />
        <TakeawayBox>Only 31% of users (Cost-Minimizers) were well-served by a rate-ranked list. 69% of our users were getting recommendations optimized for someone else's need.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Rank all providers by a single metric (rate) — let users sort from there</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Detect user profile from signals → compute optimal ranking per profile → surface one pinned recommendation with reasoning</p>
          </div>
        </div>
        <BlockQuote>A recommendation engine that gives everyone the same answer is a search result. A recommendation engine that gives each user the right answer for their situation is a product.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Collaborative Intent Filtering Engine (CIFE)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">CIFE combines three recommendation approaches — collaborative filtering, content-based matching, and rule-based compliance — to produce a single, pinned recommendation per user with transparent reasoning.</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <FrameworkDimension icon={<Brain className="h-5 w-5 text-primary" />} title="Collaborative Filtering" body="'Users like you chose provider X and were satisfied.' Profile-based pattern matching from 180K historical transactions. Most powerful for high-volume profiles." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Target className="h-5 w-5 text-green-600" />} title="Content-Based Matching" body="User's transfer attributes (amount, urgency, destination, purpose) matched to provider strengths (speed, LRS expertise, business features). Direct attribute-to-feature matching." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Cpu className="h-5 w-5 text-purple-600" />} title="Rule-Based Compliance Layer" body="Hard rules: LRS transfer >₹7L → only FEMA-compliant providers. Speed-critical → only providers with < 4hr average delivery. Rules override collaborative signal." color="bg-purple-50 border-purple-200" />
        </div>
        <DataTable
          headers={["Profile Detected", "Recommendation Signal", "Pinned Provider Basis", "Conversion (after)"]}
          rows={[
            ["Speed-Critical", "Transfer time API data", "Fastest verified average delivery", "19.4%"],
            ["Cost-Minimizer", "Total cost (rate + all fees)", "Lowest all-in cost for their amount", "22.1%"],
            ["Compliance-Sensitive", "LRS compliance + TDS clarity", "Best LRS documentation + limit clarity", "16.8%"],
            ["Reliability-First", "Brand age + review count + support rating", "Highest composite trust score", "14.2%"],
            ["Feature-Rich", "Feature matrix match", "Best feature match for their use case", "18.9%"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "User Profile Detection", points: ["Transfer parameters capture: amount, destination, urgency (user-stated), purpose (dropdown)", "Account history: past transfers, provider feedback, NPS responses", "Profile classification model: Random Forest on 14 features → 5 profiles with confidence score"] },
            { layer: "Layer 2", title: "Recommendation Engine", points: ["Collaborative model: matrix factorization on 180K transactions", "Content model: provider attribute × user attribute scoring", "Rule engine: 12 hard rules (compliance, speed SLAs, minimum amounts)", "Final score: weighted ensemble with compliance rules as override"] },
            { layer: "Layer 3", title: "Transparency Layer", points: ["Every recommendation shown with reason: 'Recommended for you because: fastest for your ₹X transfer to Y country'", "Show top 3 alternatives clearly labeled: 'If price matters more: [Provider B]'", "Recommendation confidence shown to internal team (not users) for monitoring"] },
            { layer: "Layer 4", title: "Feedback Loop", points: ["Post-transfer NPS: 'Was this recommendation right for you?'", "User's actual choice tracked vs recommendation — calibrates model", "Weekly model performance review: recommendation acceptance rate per profile"] },
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
          <Phase num="Phase 1" period="Month 1–2" title="Profile Research" actions={["180K historical transactions labeled with outcome (satisfaction, repeat use)", "5 user profiles identified via clustering", "Profile detection model built: 82% accuracy"]} result="Profile taxonomy validated, model ready" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Month 2–4" title="Engine Build" actions={["Collaborative filtering model built", "Content-based matching for 18 providers × 12 attributes", "Compliance rule engine: 12 hard rules implemented"]} result="CIFE live in staging — recommendation for all 5 profiles" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Month 4–5" title="A/B Test" actions={["50% CIFE recommendation, 50% rate-ranked list", "Primary metric: conversion rate", "CIFE: 18.2% conversion vs 6.2% control (+193%)"]} result="A/B conclusive — CIFE 3× higher conversion" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Month 5+" title="Full Rollout + Refinement" actions={["CIFE live for 100% of users", "Transparency layer: 'Recommended because' text added", "Support tickets 'wrong provider': 22% → 6%"]} result="Platform NPS: 38 → 64. Revenue +₹3.2Cr annualised" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="3×" label="Platform Conversion" sub="6.2% → 18.2%" color="text-green-600" />
          <MetricCard value="64" label="NPS Score" sub="from 38 (near-doubled)" color="text-primary" />
          <MetricCard value="73%" label="Support Ticket Drop" sub="'wrong provider' complaints" color="text-green-600" />
          <MetricCard value="₹3.2Cr" label="Annual Revenue Uplift" sub="attributable to recommendation engine" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before CIFE", "After CIFE"]}
          rows={[
            ["Platform Conversion Rate", "6.2%", "18.2%"],
            ["Repeat Use Rate", "14%", "34%"],
            ["NPS Score", "38", "64"],
            ["'Wrong Provider' Support %", "22%", "6%"],
            ["Annual Revenue", "Baseline", "+₹3.2Cr (attributed to CIFE)"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Personalization is not about data — it's about understanding decision type" body="We didn't need more data. We needed a framework for understanding what type of decision each user was making. 5 decision types, 5 ranking signals. Simple taxonomy, massive impact." />
          <Insight num="02" title="Showing reason alongside recommendation builds trust" body="'Recommended because: fastest for your ₹X transfer' was a crucial addition. Users accepting the recommendation with reasoning: 74% vs without reasoning: 51%. Transparent AI is trusted AI." />
          <Insight num="03" title="Compliance rules must override ML signals" body="A collaborative filter might recommend Provider X for a ₹8L transfer — but if Provider X has known LRS compliance issues, the filter is wrong regardless of pattern matching. Hard rules are product safety." />
          <Insight num="04" title="Support tickets are the most honest recommendation quality test" body="'Wrong provider selected' tickets dropped 73% — meaning users who followed the recommendation found it genuinely matched their need. This is better than NPS for recommendation quality testing." />
          <Insight num="05" title="Repeat use is the real recommendation quality metric" body="Repeat use went from 14% to 34% — users were returning because the recommendation worked. A recommendation that drives one conversion but no repeat use is not a good recommendation system." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Cold start problem for new users" why="No historical data for new users → collaborative filter defaulted to population-average recommendation. 24% of first-time users got wrong profile assignment." fix="Added 2-question intake: 'What matters most? (Speed / Cost / Reliability)' and 'Transfer purpose?' Lightweight but sufficient for accurate profile assignment on first session." />
          <FailurePoint title="Recommendation changed between sessions — confused repeat users" why="Model retrained weekly. User who received Provider A recommendation on Monday got Provider B on Thursday. Repeat users found inconsistency jarring." fix="Added recommendation consistency window: same profile → same recommendation for 14 days unless user signals change. Model updates applied gradually, not immediately." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Real-Time Profile Updates" body="Profile updated in real-time based on in-session signals — urgency stated mid-session shifts recommendation before the user selects." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Multi-Transfer Optimization" body="For users who send regularly: 'You sent ₹30K on the 28th last month. Current rates for that amount: Provider X is 0.8% better this month than last.' Calendar-aware recommendations." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Provider Feedback Integration" body="Provider outcomes data (actual delivery time, customer satisfaction) fed back into recommendation scoring. Live outcome data, not just provider-stated attributes." />
        </div>
        <BlockQuote>We stopped showing users what was technically best. We started showing them what was actually right for them — and the difference was ₹3.2 crore in annual revenue and a platform people started trusting again.</BlockQuote>
      </section>
    </div>
  );
}
