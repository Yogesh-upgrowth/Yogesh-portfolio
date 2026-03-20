import { Brain, Target, Layers, TrendingUp, Zap, BarChart3, Users, Lightbulb } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function MlClusteringInsuranceContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">One Product. Eleven Customer Realities.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We had a single insurance comparison product serving customers as different as a 24-year-old first-time motorcycle buyer and a 52-year-old fleet manager renewing 40 commercial vehicles. Same platform. Same flow. Same messaging. Predictably — and catastrophically — wrong for nearly everyone.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Conversion was stuck at 4.1%. Support tickets were up 34%. NPS had flatlined at 28. The product team kept adding features, the growth team kept optimizing ads, and nothing moved.</p>
        <ProblemBox>We had built one product for an imaginary average user that didn't exist — and were optimizing it for a persona that represented no actual customer in our database.</ProblemBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Data Showed Before Clustering</h2>
        <DataTable
          headers={["Metric", "Value", "What It Hid"]}
          rows={[
            ["Overall Conversion Rate", "4.1%", "Ranged from 1.2% to 19.4% across user types"],
            ["Avg Session Duration", "4m 22s", "Some users done in 90s, others spent 18 min comparing"],
            ["Top Support Complaint", "'Too many options'", "Only true for 2 of 6 real user types"],
            ["Feature Usage (breadth)", "2.3 features/session avg", "Power users used 9+, most used 1"],
            ["NPS", "28", "Hidden: Promoter NPS = 71, Detractor NPS = −41"],
          ]}
        />
        <InsightBox>Blended metrics are management sedatives. They look calm while the underlying reality is chaotic. Clustering was the diagnosis our aggregated dashboard refused to give us.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 6 Real Customer Clusters</h2>
        <p className="text-foreground/80 leading-[1.85] mb-4">K-Means clustering on 31 behavioral and transactional features revealed 6 distinct segments — each with unique needs, journeys, and conversion levers.</p>
        <DataTable
          headers={["Cluster", "Label", "Size", "Conversion", "Primary Need", "Key Insight"]}
          rows={[
            ["C1", "Price-First Shoppers", "29%", "6.8%", "Cheapest valid option", "Convert instantly when sorted by price. Adding trust content slows them down."],
            ["C2", "Research-Driven", "18%", "11.4%", "Understanding coverage", "Read everything. Convert 2 days later. Nurture email works 3× better."],
            ["C3", "Time-Pressured", "14%", "14.2%", "Fast, correct selection", "Session < 90s. Need instant recommendation, not browsing."],
            ["C4", "Feature Maximizers", "9%", "19.4%", "Best coverage, not cheapest", "Highest LTV. Want detailed comparison. Never convert on mobile."],
            ["C5", "Trust Seekers", "16%", "2.8%", "Safety and legitimacy signals", "Never convert without review count visible. Exit if trust signals absent."],
            ["C6", "Lost / Confused", "14%", "0.9%", "Don't know what they need", "Wrong entry point. Redirect or educate first."],
          ]}
        />
        <TakeawayBox>C6 was 14% of traffic with 0.9% conversion. We were burning acquisition budget on users who had no idea what to buy. Routing them to an education flow first improved their conversion 4.2×.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Build the best single insurance comparison experience</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Build 6 micro-experiences dynamically served to the right cluster</p>
          </div>
        </div>
        <BlockQuote>There is no best experience. There is only the right experience for who is in front of you right now.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Behavioral Cluster Monetisation Engine (BCME)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">BCME assigns a cluster in real-time — within the first 90 seconds of a session — and dynamically adjusts the experience across 4 dimensions.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Target className="h-5 w-5 text-primary" />} title="Sort Order" body="C1: Price ascending by default. C4: Coverage score descending. C2: Balanced view. C3: AI recommended option pinned first." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Lightbulb className="h-5 w-5 text-green-600" />} title="Trust Layer" body="C5: Review count, trust badges, media mentions shown prominently. C1: Hidden to reduce friction. C4: Expert score visible." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Layers className="h-5 w-5 text-purple-600" />} title="Content Depth" body="C2: Detailed coverage explainers, comparison table expanded. C3: Collapsed, recommendation only. C6: Education modal before comparison." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-orange-600" />} title="Follow-up Path" body="C2: 48-hour email nurture. C1: Immediate push with limited-time price lock. C4: Detailed PDF sent. C5: Social proof follow-up." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Cluster Identification Signal", "Weight", "Timing"]}
          rows={[
            ["First sort action (price vs coverage)", "0.32", "Within 30 seconds"],
            ["Time on first result before action", "0.24", "45–90 seconds"],
            ["Scroll depth on comparison table", "0.18", "First 60 seconds"],
            ["Device type (mobile vs desktop)", "0.14", "Session start"],
            ["Entry page (price vs guide vs ad)", "0.12", "Pre-session"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Real-Time Cluster Scoring", points: ["Behavioral signals captured per event (click, scroll, hover, sort)", "Cluster probability scores updated every 30 seconds", "Cluster assignment locked at 90 seconds — experience adapts"] },
            { layer: "Layer 2", title: "Dynamic Experience Engine", points: ["UI components swappable per cluster — same URL, different layout", "Sort order, trust badges, content depth all cluster-driven", "A/B framework layered: cluster assignment vs static control"] },
            { layer: "Layer 3", title: "Post-Session Routing", points: ["Non-converters routed to cluster-appropriate nurture sequences", "C2 Research: 3-email educational sequence", "C5 Trust: social proof + guarantee email series"] },
            { layer: "Layer 4", title: "Cluster Drift Monitoring", points: ["Weekly cluster distribution tracked — if C6 (confused) grows, acquisition quality issue", "Cluster model retrained quarterly on new behavior data", "Cluster-conversion funnel dashboarded for product team weekly"] },
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
          <Phase num="Phase 1" period="0–5 Weeks" title="Clustering Research" actions={["K-Means run on 14-month, 28K session dataset", "6 clusters validated with silhouette score 0.68", "Cluster profiles named and conversion rates benchmarked"]} result="6 segments identified and validated" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="5–9 Weeks" title="Experience Design" actions={["6 cluster-specific UX variants designed", "Sort order, trust, content depth — 3 dimensions per cluster", "Engineering built dynamic component swap system"]} result="BCME in staging, ready to test" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="9–14 Weeks" title="Rollout & A/B" actions={["50% of traffic cluster-personalized, 50% static control", "C3 (Time-Pressured) conversion: 14.2% → 23.8%", "C5 (Trust Seekers): 2.8% → 8.1% with trust layer"]} result="Overall conversion 4.1% → 7.8%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="14+ Weeks" title="Optimization" actions={["C6 education modal reduced confused-user bounce by 41%", "C4 desktop-optimized experience drove highest LTV cohort ever", "Nurture sequences for C2 added — 31% conversion uplift"]} result="Conversion 9.2%, NPS 28 → 51" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="9.2%" label="Overall Conversion" sub="from 4.1% (+124%)" color="text-green-600" />
          <MetricCard value="51" label="NPS Score" sub="from 28 (near-doubled)" color="text-primary" />
          <MetricCard value="23.8%" label="C3 Conversion" sub="Time-Pressured cluster" color="text-green-600" />
          <MetricCard value="41%" label="C6 Bounce Drop" sub="after education modal" color="text-primary" />
        </div>
        <DataTable
          headers={["Cluster", "Before Conversion", "After Conversion", "Uplift"]}
          rows={[
            ["C1 Price-First", "6.8%", "9.4%", "+38%"],
            ["C2 Research-Driven", "11.4%", "14.9%", "+31%"],
            ["C3 Time-Pressured", "14.2%", "23.8%", "+68%"],
            ["C4 Feature Maximizers", "19.4%", "26.1%", "+34%"],
            ["C5 Trust Seekers", "2.8%", "8.1%", "+189%"],
            ["C6 Lost / Confused", "0.9%", "3.8%", "+322% (education first)"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="The 'best experience' is a category error" body="There is no single best insurance comparison experience. The best experience for a price-first shopper actively hurts a trust seeker. Designing for an average user is designing for no user." />
          <Insight num="02" title="Cluster size ≠ cluster importance" body="C4 (Feature Maximizers) was 9% of traffic but 31% of revenue — because of LTV. C1 was 29% of traffic but only 22% of revenue. Optimize for revenue share, not traffic share." />
          <Insight num="03" title="Trust signals slow down some users while saving others" body="Adding social proof for C1 users reduced their conversion by 8% — too much friction. The same trust layer increased C5 conversion by 189%. Every element you add helps someone and hurts someone else." />
          <Insight num="04" title="Confused users are a diagnostic signal" body="When C6 grew to 16% of traffic, it signaled a channel quality problem — we were buying traffic that wasn't in-market. Cluster distribution is an acquisition quality dashboard." />
          <Insight num="05" title="90 seconds is enough to classify a user" body="We were skeptical that behavioral signals in 90 seconds could reliably assign clusters. Silhouette score 0.68 proved otherwise. Short sessions have enough signal — you just need to know what to measure." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Initial clustering used 8 clusters (too many)" why="Silhouette score peaked at 6 clusters but PM team insisted on 8 for granularity. Engineering spent 3 weeks building 8 experience variants. 2 had < 4% traffic share — not enough data to validate." fix="Merged smallest clusters. 6 clusters had enough statistical power in each to make confident decisions. Saved 6 weeks of engineering." />
          <FailurePoint title="Cluster assignment locked too early (45 seconds)" why="Users misclassified in first 45 seconds due to landing page behavior bleeding into cluster signal. C3 and C1 looked identical at 45s." fix="Moved lock to 90 seconds. Misclassification rate dropped from 22% to 9%. Acceptable trade-off for slightly slower personalization." />
          <FailurePoint title="C2 nurture emails were too generic" why="Research-Driven users received generic 'Here are your quotes' email. Open rate 12%, click-through 3%." fix="Personalized email with exact policy they viewed + coverage comparison they hadn't seen. Open rate 44%, click-through 18%." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Cross-Visit Cluster Memory" body="Remember cluster assignment across sessions. A C2 user who returns tomorrow should get the research-first experience without re-classification." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Cluster-Specific Pricing" body="Dynamic pricing display — C1 sees lowest price prominently, C4 sees value-adjusted pricing with premium coverage highlighted. Same price, different frame." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Predictive Cluster Migration" body="Model that predicts when a user is shifting clusters (C5 trust seeker becoming C1 price shopper after research) and adapts experience in real-time." />
        </div>
        <BlockQuote>We stopped building for the average user and started building for every user. The compound effect of six well-served experiences outperformed one 'optimized' experience by a factor of two.</BlockQuote>
      </section>
    </div>
  );
}
