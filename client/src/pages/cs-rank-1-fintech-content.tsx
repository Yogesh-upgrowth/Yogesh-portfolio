import { TrendingUp, Zap, Target, Trophy, Brain, BarChart3, Search, Layers } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function Rank1FintechContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How We Outranked Banks, Insurance Giants, and Media Houses</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The keywords we were targeting were defended by SBI, HDFC, PolicyBazaar, Economic Times, and MoneyControl — organizations with domain authorities of 70–90 and teams of 50+ SEO professionals.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We were a 14-month-old startup with DA 41. And we were ranking #1 for 12 of our top target keywords — above every one of those incumbents. This is the story of how we found the gap in their armour.</p>
        <InsightBox>High-DA sites often rank for keywords they've ignored the user intent behind. They rank because of authority, not because their page is genuinely the best answer. When you build a genuinely better answer — with better UX, better data, and better conversion design — authority eventually follows intent quality.</InsightBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Analyzing the Competitor Ranking Pages</h2>
        <DataTable
          headers={["Competitor", "Domain Authority", "Page Type for Key Query", "User Signals (est.)", "Our Advantage"]}
          rows={[
            ["SBI Official", "82", "Static product page", "Low engagement, high bounce", "Interactive comparison, live data"],
            ["PolicyBazaar", "74", "Lead gen form wall", "High intent, gated content", "Open comparison, no gate"],
            ["Economic Times", "78", "News article (2019)", "Outdated information", "Fresh data, updated monthly"],
            ["MoneyControl", "76", "Generic overview", "Shallow, no depth", "5× deeper content, tools embedded"],
            ["Our page (DA 41)", "41", "Interactive calculator + comparison", "High engagement, low bounce", "—"],
          ]}
        />
        <ProblemBox>The incumbents were ranking for authority, not for quality. Their pages for our target keywords were often lead-gen walls, outdated articles, or shallow overviews. Authority was protecting bad content — and that was our opportunity.</ProblemBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Google Signals Actually Measured</h2>
        <DataTable
          headers={["Ranking Signal", "Incumbent Pages (est.)", "Our Pages", "Why Ours Won"]}
          rows={[
            ["Bounce rate", "74% (industry estimate)", "31%", "We delivered value — they gated it"],
            ["Session duration", "1m 12s", "4m 38s", "Interactive tools extend sessions"],
            ["Scroll depth", "38%", "72%", "Structured content draws deeper reading"],
            ["CTR from SERP", "2.1% (generic titles)", "6.8% (benefit-first titles)", "Better title copy = more clicks = more ranking signal"],
            ["Return visits", "4%", "22%", "Live data gives users reason to return"],
          ]}
        />
        <TakeawayBox>We couldn't outrank them on domain authority. We outranked them on every user engagement signal — and Google's algorithm responds to engagement signals, not domain authority alone.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">We can't rank against high-DA sites — focus on long-tail only</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Find keywords where high-DA sites have authority but weak user experience — then build the genuinely best page in the market</p>
          </div>
        </div>
        <BlockQuote>Domain authority wins the first mile — it gets your page in the race. User experience wins the actual race. Build for the user, and eventually the algorithm aligns with you.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The High-Intent Keyword Dominance System (HIKDS)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">HIKDS has three selection criteria for target keywords — and only attacks keywords that meet all three.</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <FrameworkDimension icon={<Target className="h-5 w-5 text-primary" />} title="Criterion 1: Weak Incumbent Pages" body="Top 3 results have average session duration < 2 minutes OR bounce rate > 65% (estimated from SimilarWeb). Authority is protecting low-quality content." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Trophy className="h-5 w-5 text-green-600" />} title="Criterion 2: High Commercial Intent" body="Query contains comparison, best, vs, review, or calculator intent. These queries have direct purchase intent — ranking for them has direct revenue impact." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-purple-600" />} title="Criterion 3: Our 10× Page is Buildable" body="We can build a page that is objectively 10× better: live data, interactive tools, named testimonials, deeper coverage. If we can't, we don't target it." color="bg-purple-50 border-purple-200" />
        </div>
        <DataTable
          headers={["Target Keyword", "Monthly Volume", "Incumbent Weakness", "Our Advantage", "Months to #1"]}
          rows={[
            ["Best term insurance plan India", "48,000/mo", "Static insurer product pages", "Live comparison, claim ratio data", "5"],
            ["Wise vs Remitly India", "12,000/mo", "Generic review (2020)", "Current data, real fees, 5 scenarios", "3"],
            ["EMI calculator home loan 2024", "38,000/mo", "Bank calculators (no comparison)", "Multi-bank comparison calculator", "4"],
            ["Money transfer India to UK cheapest", "22,000/mo", "Lead gen walls", "Instant comparison, no gate", "6"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Competitor Page Intelligence", points: ["SimilarWeb estimated engagement metrics for top-ranking pages", "Manual audit: is the top result gated? Outdated? Static? Low-depth?", "HIKDS scoring: only target keywords where incumbents score < 50/100"] },
            { layer: "Layer 2", title: "10× Page Architecture", points: ["Live data embedded (rates updated daily/monthly)", "Interactive tools (calculator, comparison) — not just static text", "Structured content: FAQ schema, HowTo schema, comparison table schema"] },
            { layer: "Layer 3", title: "Title + Meta Copy Optimization", points: ["A/B test titles via Search Console CTR data", "Benefit-first titles: 'Best Term Insurance 2024: Compare 18 Plans, Live Claim Ratios'", "Meta descriptions: answer the question + invite click — not generic summaries"] },
            { layer: "Layer 4", title: "Link Building for Competitive Keywords", points: ["For high-competition keywords: targeted link building required (not just internal links)", "Outreach to fintech bloggers, CA community, FIRE community", "HARO responses for financial media: earned 3 ET and MoneyControl backlinks"] },
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
          <Phase num="Phase 1" period="Month 1–2" title="Target Selection" actions={["100 high-volume keywords analyzed via HIKDS", "18 keywords passed all 3 criteria — target list finalized", "10× page design brief created for each"]} result="18-keyword hit list with page architecture" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Month 3–5" title="First 5 Pages" actions={["5 highest-opportunity pages built with live data + tools", "Link building campaign: 20 outreach per page, 8% success rate", "Title A/B testing via Search Console"]} result="3 pages ranking top 5 within 90 days" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Month 5–9" title="Scale to 18 Pages" actions={["Remaining 13 pages built and published", "Live data integrations for all pages", "HARO responses yielding press backlinks"]} result="12 of 18 pages ranking top 3" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Month 9+" title="Position Consolidation" actions={["Monthly data freshness updates — keeping pages current", "Expanding FAQs based on People Also Ask", "Pages held top 3 across 6-month observation"]} result="12 keywords at #1, combined: 180K+ monthly traffic" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="12" label="Keywords at #1" sub="above SBI, PolicyBazaar, ET" color="text-green-600" />
          <MetricCard value="180K+" label="Monthly Traffic" sub="from 18 target keywords" color="text-primary" />
          <MetricCard value="6.8%" label="SERP CTR" sub="vs 2.1% incumbent average" color="text-green-600" />
          <MetricCard value="3m 26s" label="Engagement Gap" sub="4m38s ours vs 1m12s incumbents" color="text-primary" />
        </div>
        <DataTable
          headers={["Target Keywords", "Our Ranking", "Incumbent Displaced", "Monthly Traffic from Keyword"]}
          rows={[
            ["Best term insurance plan India", "#1", "PolicyBazaar (#4)", "24,000"],
            ["Wise vs Remitly India", "#1", "Monito (#3)", "6,400"],
            ["EMI calculator home loan 2024", "#1", "HDFC Bank (#5)", "18,000"],
            ["Money transfer India to UK cheapest", "#1", "CompareRemit (#4)", "8,200"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Authority defends bad content — until it doesn't" body="High-DA incumbents rank for intent they've never genuinely served. When a genuinely better page enters the SERP, engagement signals accumulate against the incumbent over 3–6 months — then the rankings shift." />
          <Insight num="02" title="Live data is the moat incumbents can't easily copy" body="Banks and insurers can't show competitor comparison data. Media companies can't update rates daily. Our live, multi-provider comparison data was technically impossible for most incumbents to replicate." />
          <Insight num="03" title="CTR from SERP is a ranking signal — and it's copyable" body="Writing better title tags — benefit-first, specific, year-stamped — improved CTR from 2.1% to 6.8%. More clicks → more positive engagement signal → higher ranking. Title optimization has outsized SEO impact." />
          <Insight num="04" title="Content freshness is a quality signal Google measures" body="Our pages with monthly data updates consistently outranked competitor pages published in 2019–2021 for current-year queries. Freshness isn't just about users — it's an algorithm signal." />
          <Insight num="05" title="Earned press mentions improve rankings faster than guest posts" body="3 HARO-earned backlinks from MoneyControl and Economic Times drove more ranking improvement than 40 lower-quality outreach links. Domain relevance + authority of linking domain matters more than link count." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Featured snippet targeting required structured data we'd skipped" why="3 high-volume keywords had available featured snippets. We weren't winning them because our content wasn't structured for snippet extraction." fix="Added definition blocks, comparison tables with proper markup, and question-answer pairs for top FAQ queries. Won 2 of 3 featured snippets within 8 weeks." />
          <FailurePoint title="Rankings volatile for 2 months before stabilizing" why="New pages entering competitive SERPs get 'Google sandbox' — rankings jump erratically between positions 4 and 23 before stabilizing. Team morale dropped during this period." fix="Expected and communicated the sandbox period to leadership upfront. Built 3-month timeline into all competitive keyword targets. After month 3, all rankings stabilized in top 5." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="AI-Freshness Layer" body="GPT-generated monthly update sections for each target page — ensuring freshness signals without full rewrites. 'Updated [Month Year]: here's what changed.'" />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Video SEO Layer" body="YouTube explainer videos embedded in target pages. Video content in SERP increases CTR 2× for certain intent types. Compound distribution: YouTube + Google." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="SERP Position Defense System" body="Automated ranking monitor — alerts if any target keyword drops below position 3. Trigger: immediate page update + internal link reinforcement. Defend positions proactively." />
        </div>
        <BlockQuote>We didn't outspend the incumbents. We outserved the users that the incumbents were ranking for — and ranking followed intent quality, exactly as it should.</BlockQuote>
      </section>
    </div>
  );
}
