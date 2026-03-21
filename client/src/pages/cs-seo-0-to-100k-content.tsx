import { TrendingUp, Search, Link2, Layers, Brain, BarChart3 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function Seo0To100kContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Month 3: 28 Top-10 Rankings. Team Thought It Was Failing.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The first 90 days of the SEO program were genuinely demoralizing. Zero organic sessions at launch. Three months of publishing, and we had 28 top-10 rankings — which felt like nothing against competitors with thousands. The budget committee asked whether to continue funding it.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We continued. Month 6: 64,000 sessions. Month 14: 100,000+ sessions per month, 2,400+ keyword rankings, 61% of customer acquisition from organic. The shape of SEO growth is front-loaded with apparent failure — which is why most companies stop too early.</p>
        <InsightBox>The insight that made the difference wasn't a tactic. It was understanding that SEO is an infrastructure investment, not a campaign. You're not buying traffic — you're building an asset. The asset doesn't pay dividends until month 5 or 6. Teams that quit in month 3 never see the compounding.</InsightBox>
      </section>

      <SectionDivider label="Starting Point" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Month 1: A Blank Search Console</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">New domain. Google had never seen it. Competitors with DA 50+ dominating every target keyword. The starting conditions were as difficult as they get in SEO — zero authority, zero indexing, strong incumbents.</p>
        <DataTable
          headers={["Metric", "Month 1", "Month 6", "Month 14"]}
          rows={[
            ["Organic Sessions", "0", "64,000", "100,000+"],
            ["Keyword Rankings (any position)", "0", "890", "2,400+"],
            ["Top-10 Rankings", "0", "110", "380+"],
            ["Domain Authority (Moz)", "0", "24", "41"],
            ["Organic CAC", "N/A", "₹52", "₹31"],
          ]}
        />
        <p className="text-foreground/80 leading-[1.85] mt-5">Our first 10 articles targeted head keywords — "best health insurance India," "cheapest term life insurance." We had DA 0. Competitors had DA 60+. Three months later: 0 rankings for any of those articles. The approach was wrong, and it cost us 3 months.</p>
      </section>

      <SectionDivider label="Traffic Isn't One Thing" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Five Intent Clusters, Five Conversion Rates</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Once we had enough data to analyze (Month 6 onward), the insight that changed our entire content strategy: organic traffic is not one audience with one conversion potential. It's five distinct intent types with dramatically different revenue contribution.</p>
        <DataTable
          headers={["Intent Cluster", "Traffic Share", "Conversion Rate", "Revenue Attribution", "Best Page Type"]}
          rows={[
            ["Comparison Intent", "22%", "8.4%", "41%", "Provider comparison pages"],
            ["Calculator / Tool", "18%", "11.2%", "29%", "Interactive calculators"],
            ["How-To / Educational", "38%", "2.1%", "18%", "Long-form guides"],
            ["Brand / Provider Query", "14%", "6.8%", "9%", "Provider review pages"],
            ["Location-Based", "8%", "14.2%", "3%", "Geo-specific landing pages"],
          ]}
        />
        <TakeawayBox>Calculator pages (18% of traffic) converted at 11.2% — 5× higher than educational content (2.1%). We had been producing mostly educational content because it was easiest to produce. We needed to produce more calculators and comparison pages, which were hardest but most valuable.</TakeawayBox>
      </section>

      <SectionDivider label="The Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">SEO as Demand Capture Architecture</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The conventional SEO playbook: "write helpful content → rank for keywords → get traffic." That's necessary but not sufficient. The problem is it produces content-heavy, conversion-light programs that look good in session metrics and underperform on revenue.</p>
        <BlockQuote>SEO is not a content strategy. It's a demand capture architecture. Every query in your market represents someone with a specific question at a specific stage of their decision. The question is: do you have the right type of page for each stage — not just content?</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The shift: map every query to an intent stage → assign the page type that converts best for that intent stage → build the page → link everything together. Content quality still matters — but page type and intent alignment determine whether the content converts.</p>
      </section>

      <SectionDivider label="The Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Programmatic Intent Coverage Engine</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">We called it PICE internally. Four layers, each feeding the next.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Search className="h-5 w-5 text-primary" />}
            title="Intent Mapping"
            body="All queries for the target market classified into 5 intent stages. Each query scored on: volume × intent quality × competition. Output: prioritized list of keyword opportunities by stage and page type."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-green-600" />}
            title="Page Type Selection"
            body="Each intent cluster mapped to its optimal page type based on conversion data. Comparison intent → comparison pages. Calculator intent → interactive tools. Educational intent → guides. We stopped producing the easiest type and started producing the most converting type."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Link2 className="h-5 w-5 text-purple-600" />}
            title="Internal Linking Graph"
            body="Every page connects to at least 3 other pages and receives links from 3 others. Authority flows from awareness pages toward decision pages. New pages plugged into existing authority immediately on publication — no orphaned content."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<TrendingUp className="h-5 w-5 text-orange-600" />}
            title="Compounding Architecture"
            body="Each month's new pages link to all existing pages. Domain authority distributes across the full graph. New pages rank faster because they inherit authority from established pages. Month 12 pages rank in weeks; Month 3 pages took months."
            color="bg-orange-50 border-orange-200"
          />
        </div>
        <DataTable
          headers={["Month", "Pages Published", "Total Rankings", "Top-10 Rankings", "Sessions"]}
          rows={[
            ["1–2", "30 (foundation)", "0", "0", "0 (indexed, not ranked)"],
            ["3–4", "+40", "340", "28", "8,400"],
            ["5–7", "+60", "890", "110", "28,000"],
            ["8–11", "+80", "1,600", "240", "64,000"],
            ["12–14", "+50", "2,400+", "380+", "100,000+"],
          ]}
        />
      </section>

      <SectionDivider label="Technical Foundation" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Made It Actually Work</h2>
        <div className="space-y-4">
          {[
            { title: "Long-Tail First Strategy", points: ["Month 1–4: exclusively targeted 3+ word queries with monthly volume under 5,000 and low competition", "'Best bike insurance for 2020 Honda Activa in Delhi' vs 'best bike insurance'", "First top-10 rankings appeared within 6 weeks vs 0 for head keywords after 3 months"] },
            { title: "Calculator Page Architecture", points: ["18 interactive calculators built and published as SEO assets", "Initial version: React with client-side rendering — Google couldn't crawl output", "Rebuilt with SSR + static HTML fallback — ranked within 3 weeks of reindex", "Calculator pages: average 11.2% conversion rate across all calculator keyword traffic"] },
            { title: "Internal Link Engineering", points: ["Every new page: mandatory 3 outgoing links to existing content + 3 incoming links from existing content", "Pillar-cluster structure: high-authority pillar pages link to all cluster pages in the topic", "Monthly orphan audit: pages with fewer than 2 incoming internal links flagged and connected"] },
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

      <SectionDivider label="Results" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Month 14 Numbers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="100K+" label="Monthly Organic Sessions" sub="from 0 at launch" color="text-green-600" />
          <MetricCard value="380+" label="Top-10 Rankings" sub="across all intent clusters" color="text-primary" />
          <MetricCard value="₹31" label="Organic CAC" sub="vs ₹285 blended paid CAC" color="text-green-600" />
          <MetricCard value="61%" label="Acquisition Share" sub="from organic SEO" color="text-primary" />
        </div>
        <InsightBox>The organic CAC declining to ₹31 while paid CAC was rising to ₹285 was the inflection point that changed the company's acquisition strategy permanently. Paid CAC rises with competition; organic CAC falls with authority. The two curves run in opposite directions over time.</InsightBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What 14 Months of Building This System Taught Me</h2>
        <div className="space-y-6">
          <Insight num="01" title="SEO is exponential after Month 6 — linear until then" body="The first 5 months feel like failure. 28 top-10 rankings feels like nothing. The compounding starts when your authority crosses a threshold — then new pages rank faster, existing pages rank higher, and every new piece of content benefits from the authority you've accumulated." />
          <Insight num="02" title="Page type is more important than content quality" body="A well-written educational article converts at 2.1%. A mediocre calculator page converts at 7–8%. Match page type to intent before optimizing content quality. Intent alignment is the higher-leverage variable." />
          <Insight num="03" title="Internal linking is authority engineering" body="Linking from established high-authority pages to new low-authority ones accelerates ranking for new content. Every orphan page is leaving ranking potential behind. The internal link graph is an asset — maintain it deliberately, not as an afterthought." />
          <Insight num="04" title="Long-tail volume compounds into head keyword authority" body="By ranking for 2,400+ long-tail keywords, we accumulated enough domain authority to rank for competitive head terms we couldn't target in Month 1. The long-tail-first strategy wasn't a compromise — it was the only viable path to eventually ranking for the competitive terms." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Mistakes That Cost Us 3 Months</h2>
        <div className="space-y-4">
          <FailurePoint title="Started with head keywords — wasted months 1–3" why="'Best health insurance India' has 60,000 monthly searches. Seemed like the obvious target. DA 0 vs DA 60+ competitors. Zero rankings after 12 weeks. Demoralizing and wasteful." fix="Pivoted hard to long-tail: 'Best family health insurance for 3 members under ₹12,000 in Bangalore.' Ranked top 5 within 6 weeks. The long-tail win restored team confidence and validated the approach definitively." />
          <FailurePoint title="Calculator pages built in client-side React — none indexed" why="All 18 calculators built with React without server-side rendering. Google's crawler couldn't process the JavaScript. Zero rankings despite high-quality tools and 6 weeks of build time." fix="Added server-side rendering + static HTML fallback for all calculator content. Re-indexed within 3 weeks of rebuild. All 18 calculators ranking within 2 months. SSR is non-negotiable for SEO-dependent content." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Next 14 Months</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="AI-Assisted Content at Scale" body="GPT-powered first-draft generation for the 1,000+ remaining untapped long-tail clusters. Human editorial review for quality and accuracy. 10× content velocity without 10× team growth." />
          <FutureCard icon={<Search className="h-5 w-5 text-primary" />} title="User-Generated SEO" body="User reviews, comparison submissions, and calculator outputs create unique, indexable long-tail content automatically. UGC as a compounding SEO mechanism — better content that scales without editorial cost." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Revenue Attribution by Keyword" body="Full attribution: keyword → landing page → conversion → LTV. Every ranking tracked to its revenue contribution, not just sessions. The SEO program justified on customer value, not traffic metrics." />
        </div>
        <BlockQuote>We didn't chase the top of the search results. We mapped every question in the market and built the right type of page for each one. Then we connected them all. The 100K sessions were the inevitable outcome of that system — not luck, not a viral piece, just accumulated authority.</BlockQuote>
      </section>
    </div>
  );
}
