import { TrendingUp, Zap, Target, Layers, Brain, BarChart3, Share2, RefreshCw } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function ZeroCostGrowthContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">When the Marketing Budget Hit Zero</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">It wasn't a strategic choice. The Series A fell through. The runway compressed to 4 months. The marketing budget went from ₹8L per month to ₹0. Literally zero.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Most startups in this position either pivot, panic, or raise a down round. We made a different bet: <strong className="text-foreground">if we couldn't buy growth, we'd have to earn it from inside the product</strong>. Every user had to become a growth engine, or we'd die quietly.</p>
        <ProblemBox>We had 12,000 registered users, a product with real value, and ₹0 to acquire the next user. The next 4 months would either prove the product was genuinely valuable — or prove we'd been papering over a weak product with ad spend.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">What followed was a masterclass in building compounding growth from inside the product — and taught us lessons we would never have learned if the money hadn't run out.</p>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Starting Position</h2>
        <DataTable
          headers={["Metric", "At Budget Cut", "Notes"]}
          rows={[
            ["Monthly New Users (paid)", "2,800", "About to hit zero"],
            ["Monthly Organic Users", "310", "3.9% of total — tiny base"],
            ["NPS Score", "34", "Some promoters — untapped"],
            ["Referral Rate", "1.2%", "Users referring almost nobody"],
            ["Content / SEO", "None", "No blog, no SEO infrastructure"],
            ["Product Virality (K-factor)", "0.04", "Far below break-even (1.0)"],
          ]}
        />
        <InsightBox>K-factor of 0.04 means every 100 users brought in 4 new users through word-of-mouth. We needed to get this above 0.6 to sustain growth without ads.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where the Real Growth Potential Was</h2>
        <DataTable
          headers={["Segment", "Size", "NPS", "Referral Rate", "Organic Share Behavior", "Potential"]}
          rows={[
            ["Power Users (NPS 9–10)", "640 users", "Promoter", "4.8%", "Occasionally share results", "High — need friction removed"],
            ["Active Users (NPS 7–8)", "2,100", "Passive", "0.8%", "Rarely share", "Medium — need incentive"],
            ["Occasional Users", "4,200", "Mixed", "0.2%", "Never share", "Low without re-engagement"],
            ["Dormant (30+ days inactive)", "5,060", "Unknown", "0%", "None", "Reactivation priority"],
          ]}
        />
        <TakeawayBox>640 Power Users were referring at 4.8% with zero incentive, no easy share mechanism, and no ask. This was free growth waiting to be unlocked. We just needed to make it effortless.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Buy users through paid channels, supplement with content</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Turn every satisfied user into a distribution channel; build compounding content; make the product itself shareable</p>
          </div>
        </div>
        <BlockQuote>Paid growth buys you time. Product-led growth compounds. The best time to build the compound engine is before you need it — the second best time is when you have no other choice.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Zero-CAC Compounding Loop System</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">Three independent loops, each self-reinforcing, each adding to the others.</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <FrameworkDimension icon={<Share2 className="h-5 w-5 text-primary" />} title="Loop 1: Viral Sharing" body="Result pages made natively shareable with branded cards. 'I just saved ₹X on insurance' — personal, specific, proud. No cash incentive — social currency incentive." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<RefreshCw className="h-5 w-5 text-green-600" />} title="Loop 2: SEO Compounding" body="Launched 30-article content engine targeting high-intent, long-tail insurance and fintech queries. Each article feeds backlinks, which feeds rankings, which feeds traffic." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-purple-600" />} title="Loop 3: Power User Referral" body="Identified top 640 NPS promoters. Built 1-tap referral mechanism into result page. Offered feature early access (not cash) as incentive. Referral rate 4.8% → 18.4%." color="bg-purple-50 border-purple-200" />
        </div>
        <DataTable
          headers={["Loop", "Input Cost", "Monthly New Users (M3)", "K-Factor Contribution", "Compounding?"]}
          rows={[
            ["Viral Sharing", "₹0 (product work only)", "480", "0.21", "Yes — more users = more shares"],
            ["SEO Content", "₹40K (writer + ops)", "890", "0.38", "Yes — content compounds over time"],
            ["Power User Referral", "₹0 (feature access incentive)", "310", "0.14", "Moderate — limited by promoter pool"],
            ["Total / Combined", "₹40K/month", "1,680", "0.73", "Approaching break-even"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Viral Product Design", points: ["Result page: branded share card generated with user's actual savings figure", "Share button on every quote result: WhatsApp (primary), Twitter, link copy", "Referred user lands on personalized page: 'Your friend found this deal'"] },
            { layer: "Layer 2", title: "SEO Infrastructure", points: ["30 articles launched in Month 1: 'Best insurance for X', 'How to compare Y in India'", "Internal linking: each article linked to 3 comparison tool pages", "Schema markup added: FAQ schema, HowTo schema for featured snippet targeting"] },
            { layer: "Layer 3", title: "Referral Mechanism", points: ["1-tap referral added to comparison result page — not buried in settings", "Incentive: early access to new features for referrer + 1 free premium report for referee", "Referral tracking: unique link per user, dashboard showing who referred and when"] },
            { layer: "Layer 4", title: "Measurement", points: ["K-factor tracked weekly: (invites sent × invite acceptance rate)", "SEO traffic in GA4: organic sessions, keyword rankings via Search Console", "Viral share tracking: UTM on shared links, attribution within 7-day window"] },
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
          <Phase num="Phase 1" period="Week 1–2" title="Immediate Wins" actions={["Result page share card designed and shipped", "Top 640 NPS promoters personally emailed by founder", "Referral link added to result page"]} result="First 180 organic referrals generated in 2 weeks" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Week 2–6" title="Content Engine Launch" actions={["30 articles outlined, 10 published in first 2 weeks", "SEO targeting: low-competition, high-intent insurance queries", "Internal linking structure built across all articles"]} result="First organic rankings appearing at week 6" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Month 2–3" title="Compounding Begins" actions={["SEO articles ranking top 10 for 18 keywords by month 3", "Viral share mechanism: 8.2% of users sharing (from 0%)", "K-factor climbing: 0.04 → 0.58"]} result="1,680 new users/month at ₹40K spend" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Month 4+" title="Break-Even Achieved" actions={["K-factor crossed 0.6 — product growing itself", "SEO traffic now 1,900 sessions/month (from 310)", "Series A closed — but organic base now self-sustaining"]} result="Organic growth > 50% of all new users" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results at 4 Months</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="0.73" label="K-Factor" sub="from 0.04 baseline" color="text-green-600" />
          <MetricCard value="6.1×" label="Organic Traffic" sub="310 → 1,900/month" color="text-primary" />
          <MetricCard value="18.4%" label="Referral Rate" sub="Power User segment" color="text-green-600" />
          <MetricCard value="₹40K" label="Total Growth Spend" sub="vs ₹8L/month before" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before (Budget Cut)", "After (Month 4)"]}
          rows={[
            ["Monthly New Users", "2,800 (paid)", "1,680 (organic/referral)"],
            ["K-Factor (Virality)", "0.04", "0.73"],
            ["Organic Traffic/Month", "310", "1,900"],
            ["Growth Cost", "₹8L/month", "₹40K/month (−95%)"],
            ["CAC (blended)", "₹285", "₹24"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Virality is a product design decision, not a marketing campaign" body="The share card wasn't a growth hack — it was a product feature designed to generate social currency. 'I saved ₹X' is genuinely shareable. Generic product links are not." />
          <Insight num="02" title="Content compounds; ads don't" body="₹40K in content produced 890 monthly users by month 3 — and it grows every month as more keywords rank. ₹40K in ads produces users while the spend continues and zero the month it stops." />
          <Insight num="03" title="Feature access is a better referral incentive than cash" body="Cash incentives attract low-quality referrals. Feature early access attracts your best users' networks — who tend to look like your best users. Quality > quantity in referral incentives." />
          <Insight num="04" title="K-factor below 0.6 means you need paid growth forever" body="A K-factor of 0.04 means the product isn't self-sustaining. Getting above 0.6 means every 100 users bring 60 more — and the curve eventually sustains itself. This is the threshold that matters." />
          <Insight num="05" title="Constraints force creativity; abundance creates comfort" body="The best product decisions we made in 18 months happened in 4 months of ₹0 budget. Remove the option to buy your way out and you're forced to build your way out. Every team should do this intentionally at least once." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="First viral card was too branded, not personal enough" why="Initial share card showed logo prominently. 'Check out [Company Name]' — felt like an ad. Share rate was 1.2%." fix="Switched to 'I just saved ₹1,840 on my bike insurance' with user's actual figure. Branded card, but user-first. Share rate jumped to 8.2%." />
          <FailurePoint title="SEO content initially targeted wrong keywords" why="First 10 articles targeted competitive head keywords (e.g., 'best car insurance India'). Page 8+ rankings, zero traffic." fix="Shifted to long-tail, comparison-intent queries ('Bajaj vs HDFC car insurance for 5-year-old sedan'). Month 2 saw first page 2 rankings, month 3 saw page 1." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Community-Led Growth" body="Build a WhatsApp / Telegram community for Power Users. They compare notes, share results, attract peers. Community becomes an organic acquisition channel." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Programmatic SEO" body="Scale from 30 manual articles to 500+ programmatic comparison pages. Each corridor generates long-tail traffic at zero marginal cost per page." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Virality Optimization Lab" body="Dedicated team running monthly virality experiments — share card variants, referral incentive types, viral trigger moments. Treat virality like a product feature, not a campaign." />
        </div>
        <BlockQuote>We didn't grow without budget. We grew by making every user worth ₹24 in CAC instead of ₹285. The constraint taught us what abundance never would have.</BlockQuote>
      </section>
    </div>
  );
}
