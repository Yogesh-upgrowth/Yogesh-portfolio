import { TrendingUp, Zap, Target, Globe, Brain, BarChart3, Users, Layers } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function ComparisonPlatformContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Building a Fintech Comparison Platform in the Most Crowded Market in the World</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">India-to-overseas remittance is a ₹6.8 lakh crore annual market. It's also served by dozens of established players, global incumbents, and comparison platforms from the UK and US that had already cracked the English-language market.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We entered in 2023 with MoneyRateFinder — a comparison platform specifically built for the Indian diaspora sending money home and the NRI sending money overseas. The challenge: these users were split across 40+ destination countries, spoke 12 major languages, and had wildly different regulatory requirements.</p>
        <ProblemBox>Generic global comparison platforms existed. They showed 5 options for India-to-UK with generic fees. We needed to show 18 options with FEMA-compliant limits, RBI regulations, TDS implications, and corridor-specific advice — in a way that felt instant, not overwhelming.</ProblemBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Market Audit: Why Existing Platforms Failed Indian Users</h2>
        <DataTable
          headers={["Platform Type", "Coverage (India corridors)", "INR as base currency", "FEMA / TDS info", "Local payment methods"]}
          rows={[
            ["Global platforms (Monito, etc.)", "12–15 corridors", "Partial", "None", "Card only"],
            ["Bank transfer calculators", "All corridors", "Yes", "Partial", "NEFT/RTGS only"],
            ["Individual provider apps", "Provider-specific", "Yes", "None", "Provider-specific"],
            ["MoneyRateFinder (our build)", "40+ corridors", "Yes (primary)", "Full", "UPI, NEFT, Card, Wallet"],
          ]}
        />
        <InsightBox>No platform showed TDS implications on LRS transfers above ₹7 lakh. This was the biggest pain point for HNI remitters — and was entirely unaddressed. We built it as a core feature, not an afterthought.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Five Remittance User Profiles</h2>
        <DataTable
          headers={["Profile", "% of Users", "Transfer Frequency", "Avg Amount", "Primary Concern"]}
          rows={[
            ["Family Support (NRI)", "34%", "Monthly", "₹25,000–60,000", "Consistency + low fees"],
            ["Education Payment", "18%", "Quarterly/semester", "₹1.5L–5L", "Timing + compliance"],
            ["Investment Overseas", "14%", "Occasional (large)", "₹5L+", "LRS limits + TDS clarity"],
            ["Business Payment", "12%", "Weekly", "₹50K–3L", "Speed + GST invoice"],
            ["Traveller / Ad hoc", "22%", "Irregular", "₹10K–50K", "Best rate + speed"],
          ]}
        />
        <TakeawayBox>The Investment Overseas segment (14% of users) drove 41% of transaction value. Building LRS/TDS features specifically for them was the highest-ROI product decision — small segment, massive monetary impact.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Generic Platform Thinking</p>
            <p className="font-medium text-foreground">Build a universal comparison tool with India as one input option</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">India-First Platform Thinking</p>
            <p className="font-medium text-foreground">Build the definitive India-origin remittance intelligence platform — regulatory context, local payment rails, INR-first, TDS-aware</p>
          </div>
        </div>
        <BlockQuote>Global platforms serve the global market. We served one market with world-class depth. The narrower the focus, the deeper the moat.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Localised Fintech Comparison Stack (LFCS)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">LFCS is a 4-layer architecture that makes comparison genuinely India-native — not a global tool with INR as a currency switch.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Globe className="h-5 w-5 text-primary" />} title="Layer 1: Regulatory Intelligence" body="FEMA limits, LRS annual tracker per user, TDS calculator for amounts >₹7L. Not information cards — active calculation based on user's transfer amount and history." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Users className="h-5 w-5 text-green-600" />} title="Layer 2: Local Payment Rails" body="UPI (instant), NEFT (bank to provider), Card (Visa/Mastercard). Each provider's available payment methods shown — because the fastest money transfer using your preferred method may not be the cheapest overall." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Layers className="h-5 w-5 text-purple-600" />} title="Layer 3: Total Cost Intelligence" body="Fee + exchange rate spread + payment method fee + TDS (if applicable) = Total Cost. Not just 'exchange rate' — the number that actually lands in the recipient's account." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<Brain className="h-5 w-5 text-orange-600" />} title="Layer 4: Transfer History + Recommendations" body="User's past transfers logged. 'You typically send ₹30K on the 28th of the month — here's today's best rate for that amount to UK.' Personalized before they even ask." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Feature", "Global Platforms", "MoneyRateFinder", "User Benefit"]}
          rows={[
            ["TDS calculation", "None", "Real-time, per user", "Avoid tax surprise"],
            ["LRS limit tracker", "None", "Annual dashboard", "Legal compliance clarity"],
            ["UPI as source payment", "None", "Yes (primary)", "Fastest INR transfer"],
            ["Total cost (all-in)", "Rate only", "Rate + fees + spread + TDS", "True comparison"],
            ["Corridor-specific advice", "Generic", "FEMA-compliant per corridor", "Trust + accuracy"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Provider Data Architecture", points: ["18 provider APIs integrated — rate + fee + availability + payment method", "Rate refresh: every 15 minutes (provider contractual minimums)", "Fallback: if API fails, last known rate shown with 'Last updated X min ago' flag"] },
            { layer: "Layer 2", title: "Regulatory Engine", points: ["FEMA rules encoded as calculation rules, updated quarterly", "TDS calculator: triggered automatically when transfer amount > ₹7L", "LRS tracker: user's annual usage logged across all sessions with consent"] },
            { layer: "Layer 3", title: "UX Architecture", points: ["Primary display: Total Cost (not just exchange rate) — ranked best to worst", "Provider card: shows rate, fee, total cost, delivery time, payment method", "One-tap to provider: deep link into provider app with pre-filled amount and route"] },
            { layer: "Layer 4", title: "SEO Infrastructure", points: ["Programmatic pages: 40+ corridors × 18 providers = 720 unique comparison pages", "Each corridor page: live rates embedded, updated every 15 min", "High-intent queries: 'Send money India to UK', 'Wise vs Remitly fees India'"] },
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
          <Phase num="Phase 1" period="0–8 Weeks" title="Core Platform" actions={["6 provider APIs integrated (top volume corridors)", "Total Cost calculation engine built", "India-to-UK, US, Canada, Australia launched"]} result="MVP live — 5 corridors, 6 providers" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="8–16 Weeks" title="Regulatory Layer" actions={["TDS calculator integrated", "LRS annual tracker built with user account system", "FEMA compliance notes added per corridor"]} result="First platform with TDS-aware comparison" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="16–24 Weeks" title="SEO Scale" actions={["Programmatic corridor pages launched: 40 corridors × 18 providers", "Long-tail SEO content: 120 articles targeting India-origin queries", "Organic traffic: 1K → 28K/month in 90 days"]} result="28K organic sessions/month, 180+ top-10 rankings" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="24+ Weeks" title="Monetization" actions={["Affiliate commissions from providers on click-through", "Premium accounts: LRS tracker + rate alerts + transfer history", "B2B API: financial advisors querying rates for clients"]} result="₹6.2L MRR from affiliate + premium" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="28×" label="Organic Traffic Growth" sub="1K → 28K/month in 90 days" color="text-green-600" />
          <MetricCard value="180+" label="Top-10 Rankings" sub="India-origin remittance keywords" color="text-primary" />
          <MetricCard value="₹6.2L" label="MRR" sub="affiliate + premium" color="text-green-600" />
          <MetricCard value="First" label="TDS-Aware Platform" sub="India remittance comparison" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Month 1", "Month 6"]}
          rows={[
            ["Organic Traffic", "1,000/month", "28,000/month"],
            ["Provider Integrations", "6", "18"],
            ["Corridors Covered", "5", "40+"],
            ["Top-10 Keyword Rankings", "0", "180+"],
            ["MRR", "₹0", "₹6.2L"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Depth in a niche beats breadth in a market" body="Global platforms had 80% breadth. We had 20% of their corridors but 10× depth per corridor. Users making large, compliance-sensitive transfers chose depth every time." />
          <Insight num="02" title="Regulatory features are the highest-moat differentiator" body="Any competitor can scrape exchange rates. Building TDS calculators, LRS trackers, and FEMA-compliant corridor notes requires domain expertise and ongoing maintenance. This is the moat that's hard to copy." />
          <Insight num="03" title="Total cost beats best rate in high-stakes comparisons" body="When sending ₹3L overseas, a 0.2% better exchange rate can be offset by a ₹600 payment fee. Showing Total Cost instead of just Rate is not a design choice — it's an accuracy choice that builds trust." />
          <Insight num="04" title="Programmatic SEO compounds differently than content SEO" body="720 corridor comparison pages rank for 720 different keyword sets. As each page accumulates authority, it shares it with others through internal linking. The SEO compound rate of programmatic pages exceeds manual content." />
          <Insight num="05" title="Localization is not translation — it's context" body="Hindi-language tooltips weren't enough. FEMA and LRS terminology had to be explained in context — at the moment the user was deciding whether to send ₹8L. Context-sensitive regulatory guidance is a product feature, not a support article." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Launched too many corridors too fast" why="Month 3: launched 40 corridors simultaneously. 14 corridors had unreliable provider APIs — showing stale rates or errors. User trust eroded." fix="Implemented corridor health score. Only corridors with > 95% data reliability shown. Others marked 'coming soon'. Reliability > coverage." />
          <FailurePoint title="TDS calculator initially had a legal disclaimer that terrified users" why="Overly cautious legal team added 3-paragraph disclaimer above TDS results. Users thought they were in trouble. Bounce rate +34% on TDS pages." fix="Shortened to 1 sentence: 'This is an estimate — consult a CA for advice specific to your situation.' Bounce rate returned to baseline. Clarity beats caution." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="AI Tax Advisor Integration" body="For LRS transfers >₹7L, connect with a CA API for real-time, personalized TDS advice before the transfer — not after." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Scheduled Transfer Alerts" body="'Send on Thursday — rates historically 1.4% better mid-week for USD corridor.' Calendar-based rate optimization." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Annual Transfer Intelligence" body="Year-end report: 'You sent ₹4.2L in 8 transfers. You saved ₹18,400 vs using your bank directly. Here's your LRS utilization.' Financial wellness layer." />
        </div>
        <BlockQuote>We didn't compete with global platforms. We built for the one market they couldn't serve with depth — and made depth our moat.</BlockQuote>
      </section>
    </div>
  );
}
