import { TrendingUp, Zap, Target, Search, Brain, BarChart3, Layers, Link2 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function Seo0To100kContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Zero to 100,000 Monthly Visitors: The System That Made It Inevitable</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Month 1: 0 organic sessions. A blank Search Console. A domain that Google had never seen. Month 14: 100,000+ organic sessions per month, 2,400+ keyword rankings, and SEO accounting for 61% of all customer acquisition.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Most teams describe this as luck, a viral post, or a single great piece of content. This was none of those things. It was the execution of a precise, intentional SEO architecture built around a single insight about how demand flows in a competitive market.</p>
        <InsightBox>The insight: in any competitive market, the most valuable traffic is not at the head of the keyword demand curve — it's in the long tail, where intent is high, competition is low, and conversion is predictably excellent.</InsightBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Starting Conditions</h2>
        <DataTable
          headers={["Metric", "Month 1", "Month 6", "Month 14"]}
          rows={[
            ["Organic Sessions", "0", "8,400", "100,000+"],
            ["Keyword Rankings (any position)", "0", "340", "2,400+"],
            ["Top-10 Rankings", "0", "28", "380+"],
            ["Domain Authority (Moz)", "0", "24", "41"],
            ["Organic CAC", "N/A", "₹89", "₹31"],
          ]}
        />
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm">Why Most SEO Strategies Fail</p>
            <ul className="space-y-1 text-sm text-foreground/70"><li>→ Target head keywords (competitive, slow to rank)</li><li>→ Publish blog posts without conversion architecture</li><li>→ No internal linking strategy</li><li>→ Measure rankings, not conversions</li></ul>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2 text-sm">What We Did Differently</p>
            <ul className="space-y-1 text-sm text-foreground/80"><li>→ Long-tail keyword clusters (intent-first)</li><li>→ Every page designed to convert, not inform</li><li>→ Internal linking as authority distribution</li><li>→ Measured organic-attributable revenue</li></ul>
          </div>
        </div>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">SEO Traffic Isn't One Thing — It's Five</h2>
        <DataTable
          headers={["Intent Cluster", "% of SEO Traffic", "Conversion Rate", "Revenue Attribution", "Page Type"]}
          rows={[
            ["Comparison Intent", "22%", "8.4%", "41% of organic revenue", "Provider comparison pages"],
            ["How-To / Educational", "38%", "2.1%", "18%", "Guide content"],
            ["Calculator / Tool", "18%", "11.2%", "29%", "Interactive tools"],
            ["Brand / Provider Query", "14%", "6.8%", "9%", "Provider review pages"],
            ["Location-Based", "8%", "14.2%", "3%", "Geo-specific landing pages"],
          ]}
        />
        <TakeawayBox>Calculator pages (18% of traffic) converted at 11.2% — 5× higher than educational content. We were building mostly educational content. The highest-converting content type was a fraction of our output.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Publish helpful content → rank for keywords → get traffic</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Map intent clusters → build the highest-converting page type per cluster → connect clusters with strategic internal links → compound authority</p>
          </div>
        </div>
        <BlockQuote>SEO is not a content strategy. It's a demand capture architecture. The question isn't 'what should we write?' — it's 'what is every user in this market asking, at every stage of their decision, and what page type converts them best?'</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Programmatic Intent Coverage Engine (PICE)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">PICE maps, classifies, and builds coverage for every intent cluster in the market — using the page type that maximizes conversion for each intent, not just the easiest page to produce.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Search className="h-5 w-5 text-primary" />} title="Intent Mapping Layer" body="All queries for target market mapped across 5 intent stages: awareness, consideration, comparison, decision, brand. Volume × competition × conversion potential scored per cluster." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Layers className="h-5 w-5 text-green-600" />} title="Page Type Selection" body="Each intent cluster gets the optimal page type: comparison pages for comparison intent, calculator for tool intent, review pages for brand intent. Build what converts — not what's easiest." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Link2 className="h-5 w-5 text-purple-600" />} title="Internal Linking Graph" body="Every page is a node in an authority graph. Links flow: awareness → comparison → decision. Authority accumulates at decision-stage pages. Deliberate, not default." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-orange-600" />} title="Compounding Architecture" body="Each month's new pages link to all previous pages. Domain authority distributes across the full graph. Rankings compound: pages getting traffic generate authority for pages that aren't ranked yet." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Month", "Pages Published", "Total Keywords Ranking", "Top-10 Rankings", "Organic Sessions"]}
          rows={[
            ["1–2", "30 (foundation)", "0", "0", "0 (indexed, not ranked)"],
            ["3–4", "+40 (expansion)", "340", "28", "8,400"],
            ["5–7", "+60 (comparison scale)", "890", "110", "28,000"],
            ["8–11", "+80 (calculator layer)", "1,600", "240", "64,000"],
            ["12–14", "+50 (optimization)", "2,400", "380", "100,000+"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Keyword Intelligence", points: ["Intent cluster mapping: Ahrefs + Search Console + PAA scraping", "Keyword opportunity score: (volume × intent quality) / competition", "Monthly cluster prioritization: which clusters to attack next"] },
            { layer: "Layer 2", title: "Content Architecture", points: ["Page type decision tree: what type of page for this intent cluster", "Template library: comparison template, calculator template, review template", "Content brief: keyword, intent, conversion CTA, internal links (mandatory)"] },
            { layer: "Layer 3", title: "Technical SEO Foundation", points: ["Schema markup: FAQ, HowTo, Review, BreadcrumbList per page type", "Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1 enforced", "Canonical tags, hreflang (for multi-region), XML sitemap auto-generation"] },
            { layer: "Layer 4", title: "Internal Linking System", points: ["Every new page: mandatory links to 3 existing pages + receives link from 3 existing pages", "Pillar-cluster structure: high-authority pillar pages link to all cluster pages", "Monthly link audit: identify orphan pages (no internal links pointing in)"] },
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
          <Phase num="Phase 1" period="Month 1–2" title="Foundation Build" actions={["30 foundation pages published across 5 intent clusters", "Technical SEO: schema, Core Web Vitals, sitemap", "Internal linking structure established"]} result="Google indexing confirmed; first rankings appearing" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Month 3–4" title="First Ranking Wave" actions={["Long-tail keywords: first top-10 rankings at month 3", "Comparison pages outperforming educational pages 4× on conversion", "Organic sessions: 0 → 8,400"]} result="28 top-10 rankings; first organic revenue" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Month 5–11" title="Programmatic Scale" actions={["Calculator layer: 18 interactive tools published", "Comparison page scale: 80+ provider comparison pages", "Calculator pages ranking top-10 in 6 weeks each"]} result="100+ top-10 rankings; 64,000 sessions/month" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Month 12–14" title="Compounding Acceleration" actions={["Existing pages ranking higher due to accumulated authority", "New pages ranking faster due to internal link establishment", "100,000+ sessions/month crossed"]} result="SEO self-sustaining: each page makes next page rank faster" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results at Month 14</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="100K+" label="Monthly Organic Sessions" sub="from 0 in Month 1" color="text-green-600" />
          <MetricCard value="380+" label="Top-10 Rankings" sub="across all intent clusters" color="text-primary" />
          <MetricCard value="₹31" label="Organic CAC" sub="vs ₹285 blended paid CAC" color="text-green-600" />
          <MetricCard value="61%" label="Customer Acquisition" sub="now from organic SEO" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Month 1", "Month 14"]}
          rows={[
            ["Monthly Organic Sessions", "0", "100,000+"],
            ["Top-10 Keyword Rankings", "0", "380+"],
            ["Total Keyword Rankings", "0", "2,400+"],
            ["Organic CAC", "N/A", "₹31"],
            ["SEO Share of Acquisition", "0%", "61%"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="SEO is not linear — it's exponential after Month 6" body="The first 6 months feel like failure. 340 rankings with 28 top-10 positions. Month 14: 2,400 rankings, 380 top-10. The compounding begins at the authority threshold — build through it." />
          <Insight num="02" title="Page type is more important than content quality" body="A poorly written calculator page outconverts a well-written educational article 5× — because it matches the user's intent at the decision stage. Match page type to intent stage first, then optimize quality." />
          <Insight num="03" title="Internal linking is authority engineering" body="Deliberately linking from high-authority pages to low-authority new pages accelerates ranking for new content. Every new page you publish is either connected to the authority graph or an orphan. Orphans don't rank." />
          <Insight num="04" title="Long-tail keywords compound into head keyword authority" body="By ranking for 2,400 long-tail keywords, we accumulated enough domain authority to rank for competitive head terms that would have been impossible to target directly at month 1." />
          <Insight num="05" title="Organic CAC improves over time (unlike paid CAC)" body="Paid CAC rises with competition. Organic CAC falls as authority compounds. At month 14, organic CAC was ₹31 vs paid ₹285 — and organic CAC was still improving while paid was rising." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="First 10 articles targeted head keywords — zero rankings" why="'Best insurance in India' — DA 0 vs competitors at DA 60+. 0 rankings after 3 months. Morale dropped." fix="Pivoted to long-tail: 'Best bike insurance for 2020 Honda Activa in Delhi.' Ranked top 5 within 6 weeks. Validated the long-tail-first approach definitively." />
          <FailurePoint title="Calculator pages built on JavaScript — not indexed" why="Interactive calculators built in React without SSR. Google couldn't crawl the content. 0 rankings despite high quality." fix="Added SSR for calculator output + static HTML fallback. Re-indexed within 3 weeks. All 18 calculators ranking within 2 months." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="AI Content at Scale" body="GPT-powered content generation for remaining 1,000+ untapped long-tail clusters — with human editorial review for quality. 10× content velocity." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="User-Generated SEO" body="User reviews, comparison submissions, and calculator outputs create unique long-tail content automatically — UGC as an SEO compounding mechanism." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="SEO Revenue Attribution" body="Full attribution stack: keyword → landing page → conversion → customer LTV. Every ranking tracked to its revenue contribution, not just sessions." />
        </div>
        <BlockQuote>We didn't chase the top of the search results. We mapped every question in the market and built a page that answered each one — better than anyone else. Then we connected them all. The 100K sessions were the inevitable outcome of that system.</BlockQuote>
      </section>
    </div>
  );
}
