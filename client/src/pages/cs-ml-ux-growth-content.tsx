import { TrendingUp, Zap, Target, Layers, Brain, BarChart3, Cpu, Users } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function MlUxGrowthContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">When Combining Three Disciplines Does What None Could Alone</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Conversion was 3.8%. We'd tried pure growth hacking — A/B tests, landing page changes, ad creative variations. Conversion hit 4.1% in 6 months. A 0.3% improvement on ₹8L monthly ad spend. The growth team was grinding.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We brought together three disciplines that typically work in silos: <strong className="text-foreground">Machine Learning</strong> (for user prediction and personalization), <strong className="text-foreground">UX Design</strong> (for cognitive experience optimization), and <strong className="text-foreground">Growth Engineering</strong> (for distribution, funnel, and loop design). Separately, each had hit its ceiling. Together, they produced conversion of 11.4% — a 3× improvement in 4 months.</p>
        <InsightBox>The ceiling of any single discipline is where the combination of disciplines begins. ML predicts the right user. UX serves the right experience. Growth puts both in front of more people and keeps them coming back.</InsightBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Three Ceilings</h2>
        <DataTable
          headers={["Team / Discipline", "Conversion Before Collaboration", "What They'd Optimized", "What Was Left on Table"]}
          rows={[
            ["Growth Team (Ads + Funnels)", "4.1% (from 3.8%)", "Landing pages, CTA copy, ad creative", "Sending wrong users into funnel"],
            ["UX Team (Design + Copy)", "4.3% on redesigned pages", "Page narrative, trust signals, form flow", "Not accounting for user segment differences"],
            ["ML Team (Data + Models)", "LTV model built, unused", "Predicted who high-LTV users were", "Model outputs not connected to any product experience"],
          ]}
        />
        <ProblemBox>ML team knew who would convert. UX team had designed a better experience. Growth team had optimized the distribution. None of them were connected to each other — and each was optimizing into a vacuum.</ProblemBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Combined User Picture</h2>
        <DataTable
          headers={["User Segment", "ML Score (LTV Prediction)", "UX Profile (Cluster)", "Growth Path", "Combined Conversion"]}
          rows={[
            ["High-LTV + Trust-First", "Score ≥75", "C5 cluster (needs trust)", "Fast-track: trust UI + dedicated onboarding", "34.2%"],
            ["High-LTV + Research-Driven", "Score ≥75", "C2 cluster (needs depth)", "Nurture path: detailed comparison + follow-up", "28.4%"],
            ["Mid-LTV + Price-First", "Score 45–74", "C1 cluster (needs speed)", "Direct path: lowest price prominently, fast CTA", "18.8%"],
            ["Low-LTV + Casual", "Score < 45", "C6 cluster (confused)", "Education path: guide first, comparison second", "4.1%"],
            ["Average (before collaboration)", "—", "—", "One path for all", "3.8%"],
          ]}
        />
        <TakeawayBox>High-LTV + Trust-First users converting at 34.2% vs 3.8% average. These were users the ML team could identify, the UX team could serve, and the growth team could acquire more of — but only when all three worked together.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Siloed Thinking</p>
            <p className="font-medium text-foreground">Growth acquires → UX serves → ML predicts (separately, in sequence, disconnected)</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">Unified Thinking</p>
            <p className="font-medium text-foreground">ML predicts user profile → UX serves profile-appropriate experience → Growth acquires more of proven profiles</p>
          </div>
        </div>
        <BlockQuote>The best product decisions happen at the intersection of disciplines, not in their isolated optimizations. The users ML predicts are the users UX should serve and growth should acquire. Make these conversations happen.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Full-Stack Conversion Amplification System (FCAS)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">FCAS is the integration architecture that connects ML output to UX delivery to growth distribution — creating a unified loop where each discipline amplifies the others.</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <FrameworkDimension icon={<Cpu className="h-5 w-5 text-primary" />} title="ML Layer: Predict" body="Real-time user scoring: LTV probability + UX cluster assignment within 60 seconds of session start. Score and cluster stored as session metadata available to all systems." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Layers className="h-5 w-5 text-green-600" />} title="UX Layer: Serve" body="Experience rendered from session metadata: trust architecture for Trust-First, depth content for Research-Driven, price-first UI for Price-First. Dynamic component rendering." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-purple-600" />} title="Growth Layer: Amplify" body="High-LTV profiles converted: those profiles become lookalike seeds. Acquisition optimized toward high-LTV cluster characteristics. Growth compounds the ML+UX gains." color="bg-purple-50 border-purple-200" />
        </div>
        <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 mb-4">
          <p className="font-bold text-foreground mb-3">The FCAS Flywheel</p>
          <div className="flex flex-wrap gap-2 items-center text-sm font-medium text-foreground/80">
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary">ML predicts high-LTV</span>
            <span className="text-primary">→</span>
            <span className="px-3 py-1.5 rounded-full bg-green-100 text-green-700">UX converts them at 34%</span>
            <span className="text-green-700">→</span>
            <span className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700">Growth builds lookalike from converted</span>
            <span className="text-purple-700">→</span>
            <span className="px-3 py-1.5 rounded-full bg-orange-100 text-orange-700">More high-LTV users acquired</span>
            <span className="text-orange-700">→</span>
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary">ML has better training data</span>
            <span className="text-primary">→ ♻</span>
          </div>
        </div>
        <DataTable
          headers={["System", "Input", "Output", "Feeds Into"]}
          rows={[
            ["ML Layer", "User session behavior (60s)", "LTV score + UX cluster", "UX Layer (serving)"],
            ["UX Layer", "ML cluster assignment", "Profile-specific experience", "Conversion → Growth Layer"],
            ["Growth Layer", "Converted user profiles", "Lookalike audience + CAC targets", "ML Layer (better data)"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Real-Time Scoring API", points: ["Combined LTV + UX cluster scoring: single API call returns both", "P99 latency: < 200ms — fast enough for first-page load personalization", "Score cached per session: not re-computed per page (performance + consistency)"] },
            { layer: "Layer 2", title: "Experience Rendering Engine", points: ["React context: session score exposed to all component trees", "Component variants: 5 versions per key UI element (one per profile)", "A/B framework embedded: 10% holdout group always gets default experience for baseline comparison"] },
            { layer: "Layer 3", title: "Growth Data Pipeline", points: ["Converted user profiles exported weekly to ad platforms as custom audiences", "High-LTV segment (score ≥75) becomes lookalike seed — refreshed monthly", "CAC ceiling per segment: High-LTV ≤₹1,200, Mid-LTV ≤₹400, Low-LTV ≤₹180"] },
            { layer: "Layer 4", title: "Cross-Team Intelligence Layer", points: ["Weekly unified dashboard: ML score distribution, UX conversion by cluster, Growth CAC by segment", "One meeting, three teams: 45 min weekly to review and adjust all three systems together", "Shared OKR: 'Conversion rate of High-LTV acquired users' — owned by all three teams"] },
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
          <Phase num="Phase 1" period="Month 1" title="Integration Architecture" actions={["Three teams aligned on shared OKR: conversion rate of high-LTV users", "API design: single scoring endpoint outputting both LTV score and UX cluster", "Shared data model: what does each team need from each other?"]} result="Integration blueprint signed off by all three teams" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Month 2" title="Build + Connect" actions={["Scoring API built: ML model deployed, P99 < 200ms confirmed", "UX component variants built for 5 profiles", "Growth lookalike seed export pipeline built"]} result="FCAS integrated in staging — all 3 systems connected" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Month 3" title="A/B Test" actions={["FCAS vs unified default for 50% traffic split", "High-LTV + Trust-First segment: 34.2% conversion (vs 3.8%)", "Growth CAC for High-LTV lookalike: ₹890 (vs ₹340 blended)"]} result="A/B conclusive: FCAS 3× overall conversion" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Month 4" title="Full Rollout" actions={["FCAS live 100% traffic", "Weekly unified review established — all three teams", "Overall conversion: 3.8% → 11.4%"]} result="3× conversion, self-reinforcing flywheel active" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="3×" label="Conversion Rate" sub="3.8% → 11.4%" color="text-green-600" />
          <MetricCard value="34.2%" label="High-LTV Segment" sub="conversion rate" color="text-primary" />
          <MetricCard value="2.8×" label="Revenue per User" sub="of acquired cohort" color="text-green-600" />
          <MetricCard value="1" label="Shared OKR" sub="three teams, one metric" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before FCAS", "After FCAS"]}
          rows={[
            ["Overall Conversion Rate", "3.8%", "11.4% (3×)"],
            ["High-LTV User Conversion", "3.8% (generic)", "34.2% (personalized)"],
            ["Revenue per Acquired User", "₹210", "₹588 (+2.8×)"],
            ["High-LTV Acquisition Share", "N/A", "31% of new users"],
            ["Blended CAC", "₹340", "₹225 (−34%)"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Organizational silos are the biggest product constraint" body="The ML model existed. The UX redesign existed. The growth lookalike capability existed. None were connected. The problem wasn't capability — it was architecture. Connecting three existing systems produced 3× conversion." />
          <Insight num="02" title="Shared OKRs create collaboration that aligned incentives cannot" body="Three teams with one shared metric stopped optimizing their individual KPIs and started optimizing the system. The weekly unified meeting was the most valuable 45 minutes of the week." />
          <Insight num="03" title="Personalization at score assignment moment is more valuable than personalization at page level" body="Assigning ML score + UX cluster in the first 60 seconds allowed every subsequent experience to be personalized — not just the landing page. The earlier you segment, the more the personalization compounds." />
          <Insight num="04" title="The flywheel is the compounding mechanism" body="Each high-LTV conversion improves the lookalike seed → better acquisition → more high-LTV users → more model training data → better scores. This is not linear improvement — it's compound improvement." />
          <Insight num="05" title="Discipline integration produces non-linear outcomes" body="ML alone moved conversion 0.3%. UX redesign alone moved it 1.2%. Growth optimization alone moved it 0.3%. All three together: 7.6 percentage points. 1+1+1=10 when the systems are connected and reinforcing." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Initial API latency was 800ms — too slow for first-page load" why="Combined ML scoring model was too complex for real-time inference. 800ms delay before page personalized — users saw unrendered state first." fix="Model simplified: top 8 features only (from 34). Latency dropped to 140ms. Feature reduction also improved stability. Won on both speed and accuracy." />
          <FailurePoint title="Three-team coordination became 3 separate meetings at first" why="Each team wanted its own briefing. 3 weekly meetings = 3× overhead. Teams reverted to siloed updates within 2 weeks." fix="Enforced single unified meeting: 45 min, all three teams, single shared dashboard. No per-team briefings. Monthly async report for leaders." />
          <FailurePoint title="High-LTV lookalike seed included power users who weren't profitable" why="Power users (high usage, high engagement) were included in High-LTV seed but some had negotiated pricing that made them LTV-negative. Lookalike performed poorly." fix="Seed criteria changed: revenue-verified high-LTV only. Users with < 90-day actual revenue data excluded from seed. Lookalike quality improved immediately." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Continuous Score Updates" body="Move from session-level scoring to continuous scoring — updated every 5 minutes based on in-session behavior. Experience adapts as the user reveals more signal." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Post-Conversion Personalization" body="Extend FCAS beyond conversion: onboarding, retention, upsell — all personalized by ML profile. High-LTV users get priority support, tailored features, executive check-ins." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Full Lifecycle Revenue Attribution" body="Attribute every conversion and lifetime revenue event back to: ML score accuracy, UX experience served, and growth source. Full-stack attribution enables full-stack optimization." />
        </div>
        <BlockQuote>We didn't 3× conversion by working harder within our disciplines. We 3× it by eliminating the white space between them — and making three separate systems into one unified amplification engine.</BlockQuote>
      </section>
    </div>
  );
}
