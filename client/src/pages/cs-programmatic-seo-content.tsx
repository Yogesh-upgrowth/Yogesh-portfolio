import { Layers, Search, TrendingUp, Brain, BarChart3, Zap } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function ProgrammaticSeoContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">One Google Sheet Generated 1,400 Pages and 40K Monthly Visitors</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The insight came from a boring analysis. We pulled our top 50 converting organic pages and noticed something: 34 of them followed the same pattern — "Best [Product] in [City]" or "[Brand A] vs [Brand B]" or "Average [Product] Price in [City]." They weren't bespoke content pieces. They were templates filled with location-specific or comparison-specific data.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">If 34 of our best pages were templated, and we had 800+ location-product combinations we hadn't built pages for, the math was straightforward. The question was whether we could build those pages at scale without compromising quality enough to get penalized.</p>
        <InsightBox>The tension in programmatic SEO: templated pages can look spammy to search engines if the template is thin. The resolution: templates are fine, but only when each instantiation contains genuinely unique, locally-relevant data — not boilerplate with a city name swapped in.</InsightBox>
      </section>

      <SectionDivider label="The Opportunity Map" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Mapping the Untapped Demand</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We started with a keyword opportunity analysis across four programmatic content types. The goal: estimate the total addressable traffic opportunity before building anything.</p>
        <DataTable
          headers={["Content Type", "Pattern", "Estimated Combinations", "Avg Monthly Search Volume/Page", "Total Opportunity"]}
          rows={[
            ["Location × Product", "'Health Insurance in [City]'", "340", "800", "272K monthly searches"],
            ["Brand Comparison", "'[Brand A] vs [Brand B]'", "210", "1,200", "252K monthly searches"],
            ["Price Benchmarks", "'Average [Product] Cost in [City]'", "280", "400", "112K monthly searches"],
            ["Provider Reviews", "'[Insurer] Health Insurance Review'", "45", "2,800", "126K monthly searches"],
          ]}
        />
        <p className="text-foreground/80 leading-[1.85] mt-5">Total estimated addressable traffic: ~762K monthly searches across 875 page opportunities. We had built 38 of them. The spreadsheet made the scale of the opportunity visible in a way that individual keyword research had obscured.</p>
      </section>

      <SectionDivider label="The Quality Problem" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Makes a Programmatic Page Not Spam</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We looked at examples of programmatic SEO across our industry — some ranking well, some penalized, some just existing with zero traffic. The pattern was consistent.</p>
        <div className="grid sm:grid-cols-2 gap-5 my-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-3 text-sm uppercase tracking-wider">Penalized / Low-Ranking Pages</p>
            <ul className="space-y-1.5 text-sm text-foreground/70">
              <li>→ City name swapped into generic template</li>
              <li>→ No locally-specific data or insight</li>
              <li>→ Same content, different URL</li>
              <li>→ No user engagement signals (bounce immediately)</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-3 text-sm uppercase tracking-wider">Ranking / Converting Pages</p>
            <ul className="space-y-1.5 text-sm text-foreground/80">
              <li>→ Unique local data (city-specific rates, availability)</li>
              <li>→ Comparison data specific to that location</li>
              <li>→ User-generated content (reviews from that city)</li>
              <li>→ Interactive tool with locally-relevant defaults</li>
            </ul>
          </div>
        </div>
        <TakeawayBox>The quality bar for programmatic SEO is the same as manual SEO: would a real user searching this query find this page genuinely useful? The only way to pass that bar at scale is to have unique, locally-relevant data for each page. Without it, you're building spam. With it, you're building an efficient content machine.</TakeawayBox>
      </section>

      <SectionDivider label="The Data Infrastructure" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Made Scale Possible</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The key technical investment wasn't the template system — it was the data infrastructure that gave each page something unique to say. Without location-specific data, we'd have had 1,400 pages saying approximately the same thing.</p>
        <BlockQuote>Programmatic SEO is a data problem disguised as a content problem. If you have unique, structured data for each page, the content writes itself. If you don't, you're manufacturing spam at scale — which is worse than not building it at all.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">We built a data layer first: city-specific insurance rate data from provider APIs, city-level claim settlement ratios from IRDAI data, network hospital counts by city for each major insurer, and user review data disaggregated by city from our existing reviews.</p>
      </section>

      <SectionDivider label="Technical Architecture" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Programmatic Page System</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-primary" />}
            title="Data Layer"
            body="PostgreSQL database with: city × product × insurer rate tables (updated monthly from provider APIs), city-level claim settlement data from IRDAI, network hospital counts by city × insurer, user reviews tagged by city. Each page pulls from this database at render time."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Search className="h-5 w-5 text-green-600" />}
            title="Template System"
            body="Next.js with server-side rendering. Template components accept city, product, insurer parameters. Dynamic content sections: rate table (city-specific), plan comparison (city-available plans), hospital count (city-specific), reviews (city-filtered). Static sections: methodology, glossary, FAQ."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Zap className="h-5 w-5 text-purple-600" />}
            title="URL and Sitemap Management"
            body="Pages generated for all valid combinations (city × product with > 3 insurers available). Cities with < 3 insurer options: no page generated (not enough unique content). Sitemap auto-generated and submitted. Crawl budget managed: lowest-traffic pages in sitemap with lower priority."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<TrendingUp className="h-5 w-5 text-orange-600" />}
            title="Quality Control"
            body="Automated content quality check before publication: minimum data completeness (>70% of fields must have city-specific data), minimum word count (>800 words), no duplicate content score above threshold. Manual review queue for pages flagging quality issues."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Execution" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How It Was Built and Validated</h2>
        <div className="space-y-4">
          <Phase num="Month 1" period="Infrastructure" title="Data Layer First" actions={["Data pipeline built: provider APIs → normalized rate database", "IRDAI data parsed and structured for city-level access", "Review data retroactively tagged with city from user profiles"]} result="Data layer ready. 340 city-product combinations had sufficient unique data to build pages." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2" period="Pilot" title="50 Pages, Manual Review" actions={["First 50 location × product pages built and manually reviewed", "Quality check: each page reviewed against 'is this genuinely useful?' standard", "Submitted to Google; monitored for indexing and ranking"]} result="43 of 50 indexed within 3 weeks. First rankings appearing for low-competition city terms." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 3–5" period="Scale" title="Full 1,400-Page Rollout" actions={["Automated generation for all 1,400 qualifying combinations", "Quality gate: 18% failed minimum data completeness; held for data enrichment", "Comparison pages (Brand A vs Brand B): 210 pages published"]} result="40K+ organic sessions/month by Month 5. Ranking for 890 long-tail keywords." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">At Month 6</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="1,400" label="Programmatic Pages" sub="across 4 content types" color="text-green-600" />
          <MetricCard value="40K+" label="Monthly Sessions" sub="from programmatic pages alone" color="text-primary" />
          <MetricCard value="890" label="New Keyword Rankings" sub="long-tail, high-intent" color="text-green-600" />
          <MetricCard value="₹38" label="Organic CAC" sub="from programmatic traffic" color="text-primary" />
        </div>
        <DataTable
          headers={["Content Type", "Pages", "Sessions/Month", "Conversion Rate"]}
          rows={[
            ["Location × Product", "340", "18,200", "7.4%"],
            ["Brand Comparison", "210", "12,800", "9.1%"],
            ["Price Benchmarks", "280", "6,400", "4.2%"],
            ["Provider Reviews", "45", "2,800", "11.8%"],
          ]}
        />
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Building at Scale Taught Me</h2>
        <div className="space-y-6">
          <Insight num="01" title="Data infrastructure is the actual investment; templates are just execution" body="We spent 60% of the total project time on the data layer. The template system took 3 weeks. The data pipeline took 6. This is correct prioritization: without unique data, the templates produce spam. With unique data, the templates produce value." />
          <Insight num="02" title="Quality gates have to be automated — you can't review 1,400 pages manually" body="The automated quality check (data completeness, word count, duplicate content score) prevented 18% of pages from publishing that would have lowered overall domain quality. Manual review at that scale is impossible; automated gates are the only realistic approach." />
          <Insight num="03" title="Brand comparison pages have the highest conversion rate and the highest search intent" body="'[Insurer A] vs [Insurer B]' pages converted at 9.1% — the highest of any programmatic content type. Users comparing two specific brands are almost at the decision stage. They have the highest intent and need the least convincing." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Went Wrong</h2>
        <div className="space-y-4">
          <FailurePoint title="First batch: 15 pages published with stale rate data" why="Data pipeline had a caching bug that served 90-day-old rate data for 15 city-product combinations. Users who arrived via SEO saw incorrect premium quotes. Two complained via support; we caught the bug from the ticket." fix="Added data freshness validation to publishing pipeline. Each page displays 'Rates updated: [date]'. Any page showing data >45 days old triggers a re-fetch and holds publication until fresh data is available." />
          <FailurePoint title="Price benchmark pages had lower quality than expected" why="'Average health insurance cost in Chennai' — we had average data, but not enough city-specific context to make the page genuinely useful. Pages indexed but ranked poorly. Bounce rate: 78%." fix="Added city-specific context requirements: at minimum, the 3 cheapest plans available in that city, the most popular plan in that city (from our own sales data), and at least 2 city-specific reviews. 78% bounce → 54% bounce after content enrichment." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Programmatic Roadmap</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="User-Generated Data Integration" body="User reviews, purchase data, and comparison behavior from our own platform becoming inputs to programmatic pages. As more users transact, the data gets richer — and the pages become more valuable. Self-compounding data asset." />
          <FutureCard icon={<Search className="h-5 w-5 text-primary" />} title="Tier 2 and 3 City Expansion" body="Currently covers 40 major cities. Expanding to 120 Tier 2 and 3 cities with lower competition and often lower data availability from incumbent competitors. First-mover advantage in underserved markets." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Dynamic Content Freshness" body="Move from monthly data refresh to weekly for high-traffic pages. Rate changes that affect premium quotes by > 10% trigger immediate page refresh and Google Search Console re-index request." />
        </div>
        <BlockQuote>One Google Sheet with 1,400 rows became 1,400 pages and 40,000 monthly visitors. Not because we gamed the algorithm — because we had the data to make each page genuinely useful for someone in a specific city making a specific decision.</BlockQuote>
      </section>
    </div>
  );
}
