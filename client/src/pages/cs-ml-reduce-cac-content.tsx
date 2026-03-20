import { TrendingUp, Zap, Target, Brain, BarChart3, Filter, Users, Layers } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function MlReduceCacContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">When Spending More Made Things Worse</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Quarter over quarter, our marketing budget had grown 40%. Our customer count had grown 18%. Our CFO's patience had grown approximately zero percent.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The math was simple and painful: we were buying the same kinds of users — broadly targeted, poorly qualified — and expecting different results. Every rupee of additional spend was yielding fewer and fewer quality customers. The acquisition machine was leaking.</p>
        <ProblemBox>CAC had risen 34% in 6 months while LTV remained flat. We weren't scaling efficiently — we were scaling the waste.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The assumption everyone held — that better creative and more budget would solve it — turned out to be completely wrong. The problem was upstream. We were targeting the wrong people with precision-looking tools that had no actual signal behind them.</p>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Data Actually Showed</h2>
        <DataTable
          headers={["Channel", "Monthly Spend", "Leads Generated", "CAC", "30-Day LTV", "ROI"]}
          rows={[
            ["Google Search (broad)", "₹3.2L", "1,840", "₹174", "₹210", "1.2×"],
            ["Meta Lookalike (1%)", "₹2.8L", "1,210", "₹231", "₹195", "0.84× (losing)"],
            ["Meta Interest-Based", "₹1.9L", "1,640", "₹116", "₹180", "1.55×"],
            ["Organic / SEO", "₹0.4L (ops)", "920", "₹43", "₹310", "7.2×"],
            ["Referral", "₹0.2L", "310", "₹64", "₹420", "6.6×"],
          ]}
        />
        <InsightBox>Meta Lookalike 1% — the channel everyone assumed was best — was the only channel losing money. The "best practice" was our biggest leak.</InsightBox>
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm">What Teams Assumed</p>
            <ul className="space-y-1 text-sm text-foreground/70"><li>→ 1% Lookalike = highest quality audience</li><li>→ Broad match catches volume</li><li>→ More spend = more scale</li></ul>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2 text-sm">What Was Actually True</p>
            <ul className="space-y-1 text-sm text-foreground/80"><li>→ Lookalike seed was too generic</li><li>→ Broad match buying junk traffic</li><li>→ Organic outperforming paid 6× on ROI</li></ul>
          </div>
        </div>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deconstructing the Customer Population</h2>
        <DataTable
          headers={["Segment", "Source Mix", "30-Day LTV", "Churn (90 Day)", "Payback Period"]}
          rows={[
            ["High-Quality Converters", "SEO + Referral dominant", "₹390", "12%", "< 30 days"],
            ["Medium-Quality Converters", "Search (exact/phrase)", "₹230", "28%", "45–60 days"],
            ["Low-Quality Converters", "Meta broad + Lookalike 1%", "₹110", "54%", "Never (negative ROI)"],
            ["Organic Self-Selectors", "Direct + organic", "₹480", "8%", "< 20 days"],
          ]}
        />
        <TakeawayBox>Acquisition is a sorting problem. The source of a customer predicts their quality more reliably than any demographic or psychographic signal.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Problem Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Reach more people → convert more → grow</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Compress audiences to high-signal segments → reduce spend → improve LTV cohort quality</p>
          </div>
        </div>
        <BlockQuote>Reach is not strategy. Precision is strategy. The question isn't how many people you can reach — it's how accurately you can identify the ones worth reaching.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Audience Compression Matrix (ACM)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">ACM maps every acquisition audience on two dimensions — <strong className="text-foreground">Signal Quality</strong> (how predictive the targeting signal is) and <strong className="text-foreground">Audience Purity</strong> (what % of the reached audience is genuinely in-market) — and routes budget accordingly.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Filter className="h-5 w-5 text-primary" />} title="High Signal + High Purity → Scale" body="These audiences get unlimited budget. Historical LTV data backs the spend. Own these channels before any other." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Target className="h-5 w-5 text-orange-500" />} title="High Signal + Low Purity → Prune" body="Keyword match types tightened. Audience interest layers narrowed. Budget capped until purity improves." color="bg-orange-50 border-orange-200" />
          <FrameworkDimension icon={<Brain className="h-5 w-5 text-blue-500" />} title="Low Signal + High Purity → Test" body="Small budgets only. Continuous conversion tracking. If LTV emerges, move to Scale. If not, exit." color="bg-blue-50 border-blue-200" />
          <FrameworkDimension icon={<Layers className="h-5 w-5 text-destructive" />} title="Low Signal + Low Purity → Kill" body="Pause immediately. Redirect budget to Scale channels. No exceptions." color="bg-destructive/5 border-destructive/20" />
        </div>
        <DataTable
          headers={["Audience", "Signal Quality", "Purity", "ACM Quadrant", "Budget Action"]}
          rows={[
            ["SEO / Organic", "High", "High", "Scale", "+60% investment"],
            ["Referral Program", "High", "High", "Scale", "+80% investment"],
            ["Search Exact Match", "High", "Medium", "Scale-Test", "+20%, monitor"],
            ["Meta Interest-Based", "Medium", "Medium", "Prune", "Narrow interests, cap at ₹1L"],
            ["Meta Lookalike 1%", "Low", "Low", "Kill", "Paused immediately"],
            ["Google Broad Match", "Low", "Low", "Kill", "Paused, shifted to phrase"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The ML Segmentation System</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Data Intelligence", points: ["Source-to-LTV attribution model built on 14-month customer dataset", "ML clustering (K-Means) on 22 behavioral + demographic features", "4 customer segments identified with distinct acquisition source patterns"] },
            { layer: "Layer 2", title: "Lookalike Seed Rebuild", points: ["New seed audience: only customers in Segment 1 (High LTV + Low Churn)", "Seed size: 1,840 customers vs previous 12,000 (more concentrated signal)", "Separate lookalike built per channel — Meta vs Google behave differently"] },
            { layer: "Layer 3", title: "Budget Reallocation System", points: ["Weekly CAC vs LTV dashboard for every channel and ad set", "Auto-pause rules: any ad set with CAC:LTV > 0.7 after 200 conversions paused", "Budget waterfall: Scale channels filled first, remainder to Test, nothing to Kill"] },
            { layer: "Layer 4", title: "Feedback Loop", points: ["Segment assignment of new customers fed back weekly", "Lookalike seed updated monthly with fresh high-LTV customers", "ACM quadrant review monthly — channel reclassification as data updates"] },
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
          <Phase num="Phase 1" period="0–3 Weeks" title="Attribution Audit" actions={["Source-level LTV mapping across all channels", "Identified ₹4.7L/month in negative-ROI spend", "ACM quadrant assigned to every running campaign"]} result="Kill list identified: 2 channels, 8 ad sets" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="3–6 Weeks" title="Compression" actions={["Meta Lookalike 1% paused — ₹2.8L/month freed", "Google broad match switched to phrase + exact", "SEO and referral budget doubled"]} result="Overall spend down 28%, quality up immediately" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="6–10 Weeks" title="Rebuild" actions={["ML clustering ran on customer base", "New lookalike seeds built from Segment 1 only", "Interest-based Meta narrowed to 3 validated signals"]} result="CAC dropping; LTV of new cohort +24%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="10+ Weeks" title="Scale" actions={["SEO and referral doubled again — both profitable", "Rebuilt Meta lookalike from high-LTV seed outperforming original by 2.8×", "Total acquisition volume recovered, quality much higher"]} result="CAC −38%, LTV of acquired cohort +31%" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="38%" label="CAC Reduction" sub="without volume drop" color="text-green-600" />
          <MetricCard value="31%" label="Cohort LTV Increase" sub="new acquirees, same period" color="text-primary" />
          <MetricCard value="2.8×" label="Lookalike Performance" sub="new seed vs old seed" color="text-green-600" />
          <MetricCard value="−₹4.7L" label="Waste Eliminated" sub="monthly negative-ROI spend killed" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After (90 Days)"]}
          rows={[
            ["Blended CAC", "₹228", "₹141 (−38%)"],
            ["Cohort 30-Day LTV", "₹210", "₹275 (+31%)"],
            ["CAC:LTV Ratio", "1.09 (losing)", "0.51 (profitable)"],
            ["Meta ROAS", "0.84×", "2.6×"],
            ["Total Marketing Spend", "₹8.5L/mo", "₹6.1L/mo (−28%)"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Your lookalike seed is your most important creative decision" body="The quality of your lookalike audience is entirely determined by who you put in the seed. A generic seed of all customers builds a generic audience. A seed of your best 5% builds something 2–3× more valuable." />
          <Insight num="02" title="Pausing bad spend is the fastest path to efficiency" body="We recaptured ₹4.7L/month in negative-ROI spend in 3 weeks. No new channels, no new creatives. Just stopping what wasn't working — which required having data to see it." />
          <Insight num="03" title="Source attribution is the missing layer in most analytics setups" body="Most teams measure conversion rate. They don't measure LTV by source. Without source-level LTV, you're optimizing for the wrong outcome at every funnel stage." />
          <Insight num="04" title="ML clustering changes what you target, not how much you spend" body="The segmentation model didn't find new audiences — it found the signal inside existing ones. K-Means on 22 features revealed that our best customers had a distinct behavioral DNA we'd never noticed." />
          <Insight num="05" title="Budget concentration beats budget distribution" body="Spreading budget across 8 channels to 'diversify risk' was the risk. Concentrating on 3 proven channels with clear LTV data outperformed across every metric." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="First lookalike rebuild used 30-day LTV as target" why="30-day LTV was too noisy — heavily influenced by promotional cycles. Model trained on noise, produced noisy audiences." fix="Switched to 90-day LTV with churn flag. Slower to build data but dramatically more stable and predictive audience signal." />
          <FailurePoint title="Paused Meta entirely — overreacted" why="After seeing Lookalike 1% performance, team wanted to kill all Meta spend. Interest-based was actually profitable at 1.55× ROI." fix="ACM quadrant review applied per ad set, not per channel. Saved ₹1.9L/month of genuinely profitable Meta spend." />
          <FailurePoint title="Referral program scaled without quality gates" why="Referral converted well but referral sources varied wildly in quality. Some referrers were bringing low-LTV users." fix="Applied LTV scoring to referred users. Referrer reward now paid at 30 days if referee reaches LTV threshold — aligns incentives." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Real-Time CAC Bidding" body="Move from weekly budget reviews to real-time bid adjustment based on live CAC:LTV ratio per ad set — automated via API to ad platforms." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Dynamic Seed Refresh" body="Lookalike seed automatically updated weekly with new high-LTV customers — keeping the audience continuously calibrated as the customer base evolves." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Predictive Channel Mix" body="ML model that predicts optimal channel mix for next month based on current market signals, seasonal patterns, and cohort quality trends." />
        </div>
        <BlockQuote>Reducing CAC isn't about being cheaper. It's about being more precise. The budget we freed didn't disappear — it went to the channels that deserved it.</BlockQuote>
      </section>
    </div>
  );
}
