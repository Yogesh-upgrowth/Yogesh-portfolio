import { TrendingUp, Zap, Target, Calculator, Brain, BarChart3, Layers, Search } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function ProgrammaticSeoContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">When One Calculator Template Became 500 Ranking Pages</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We had manually written 40 SEO articles in 6 months. Each took 6–8 hours. Total: 240–320 hours of content work. Organic traffic: 28,000 sessions/month — decent, but slow to scale.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Then we built one EMI calculator template — parameterized for any loan amount, tenure, and bank — and generated <strong className="text-foreground">500 unique, rankable calculator pages in 6 days</strong>. Each page targeted a specific long-tail query. Total production time: 60 hours (engineering + content strategy).</p>
        <InsightBox>Programmatic SEO is not a hack. It's the recognition that when user intent is parametric (same type of question, different parameters), the content solution should also be parametric — built once, scaled to every variation.</InsightBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Manual vs Programmatic Math</h2>
        <DataTable
          headers={["Approach", "Pages Produced", "Time Cost", "Avg Monthly Traffic/Page", "Total Organic Traffic"]}
          rows={[
            ["Manual articles (Month 1–6)", "40", "6–8 hrs/page = 280 hrs", "700 sessions", "28,000/month"],
            ["Programmatic calculators (Month 7)", "500", "0.12 hrs/page = 60 hrs total", "220 sessions", "110,000/month additive"],
            ["Combined (Month 8+)", "540", "—", "—", "138,000+ sessions/month"],
          ]}
        />
        <InsightBox>Each manual article took 7 hours and generated ~700 sessions/month. Each programmatic page took 7 minutes and generated ~220 sessions/month. The ROI per hour of programmatic content is 3× higher — at infinite scale.</InsightBox>
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm">The Risk People Fear</p>
            <p className="text-foreground/70 text-sm">Thin content penalty. Google Helpful Content update. Duplicate content issues. Scaled content spam perception.</p>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2 text-sm">Why It Worked</p>
            <p className="text-foreground/80 text-sm">Each page served genuine user need (specific loan calculation). Content was unique per page (different bank, rate, tenure = different output). Interactive tool = high engagement. No thin content.</p>
          </div>
        </div>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Calculator Demand Landscape</h2>
        <DataTable
          headers={["Calculator Category", "Unique Query Variations", "Avg Monthly Volume Each", "Conversion Rate", "Revenue Potential"]}
          rows={[
            ["Home Loan EMI (bank × amount × tenure)", "200+", "1,200–4,800", "8.4%", "Very High"],
            ["Car Loan EMI (bank × model × tenure)", "180+", "800–2,400", "6.2%", "High"],
            ["Personal Loan EMI (bank × salary × tenure)", "120+", "600–1,800", "7.1%", "High"],
            ["FD Calculator (bank × amount × tenure)", "80+", "400–1,200", "4.8%", "Medium"],
            ["SIP Calculator (fund × target × duration)", "60+", "300–900", "9.2%", "Very High"],
          ]}
        />
        <TakeawayBox>The SIP calculator category had the smallest volume per variation but 9.2% conversion — the highest of any category. Small volume × high conversion × 60 pages = outsized revenue from a small content investment.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Write one piece of content per keyword manually</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Identify parametric intent → build one template → generate coverage for every parameter variation — at 60× the speed</p>
          </div>
        </div>
        <BlockQuote>Manual SEO scales linearly — each piece of content takes the same time to produce. Programmatic SEO scales exponentially — each template can serve thousands of long-tail queries. The question isn't whether to do it. It's which intent categories are parametric enough to support it.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Calculator-Driven SEO Flywheel (CDSF)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">CDSF identifies parametric intent categories, builds one high-quality template per category, generates pages from a parameter database, and distributes authority across the full set.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Calculator className="h-5 w-5 text-primary" />} title="Template Architecture" body="One calculator template: dynamically fills bank name, loan rate, tenure, and amount from database. Unique calculation output + unique contextual content per page = unique, non-thin content." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Search className="h-5 w-5 text-green-600" />} title="Parameter Database" body="Database of: 28 banks, 6 tenure options, 12 amount brackets, 5 loan types = 28 × 6 × 12 × 5 = 10,080 possible pages. Start with highest-volume 500, expand by demand." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Layers className="h-5 w-5 text-purple-600" />} title="Content Differentiation Layer" body="Beyond calculator output, each page has: bank-specific context (rates, eligibility, branch network), comparison to 2 competitor banks for this category, FAQ specific to that bank × loan type combination." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-orange-600" />} title="Internal Linking Flywheel" body="All 500 pages link to: category pillar (home loan EMI), bank pillar (SBI loan products), and 3 related specific pages. Authority accumulates at pillar pages and distributes to all individual pages." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Page Component", "Manual vs Programmatic", "Quality Maintained?"]}
          rows={[
            ["Calculator tool", "Identical (same code)", "Yes — same interactive tool"],
            ["Calculation result", "Unique per parameters", "Yes — different answer per page"],
            ["Bank context content", "Template with bank-specific data", "Yes — unique facts per bank"],
            ["Competitor comparison", "Template with live rates", "Yes — real current data"],
            ["FAQ section", "Template with page-specific Qs", "Yes — parameterized questions"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Parameter Database", points: ["Google Sheets database: 28 banks × rates × features × eligibility criteria", "Rate update process: weekly manual update (6 minutes per row)", "Bank data API where available: automates rate freshness for 12 of 28 banks"] },
            { layer: "Layer 2", title: "Template Engine", points: ["Next.js dynamic routes: /emi-calculator/[bank]/[loantype]/[amount]/[tenure]", "Template renders from database: no unique page code per variation", "Unique elements per page: h1, meta title, meta description, calculator default values, bank context section"] },
            { layer: "Layer 3", title: "Quality Gates", points: ["Minimum uniqueness threshold: > 200 words unique content per page (vs template)", "Calculator output must be mathematically accurate — unit tested", "No pages created for parameter combinations with < 50 monthly search volume"] },
            { layer: "Layer 4", title: "Internal Link Automation", points: ["Script generates internal link blocks: 3 related pages per page", "Category hub pages link to all pages in that category", "Sitemap auto-generated from parameter database: submitted to Google Search Console"] },
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
          <Phase num="Phase 1" period="Week 1" title="Design + Data" actions={["Parameter database built: 28 banks × 5 loan types", "Template designed: calculator + 5 unique content sections", "Quality gate criteria defined"]} result="500-page set ready for generation" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Week 2" title="Build + Publish" actions={["Next.js dynamic routes built", "500 pages generated, quality-checked (random 50 manually audited)", "Sitemap submitted to Search Console"]} result="500 pages indexed within 14 days" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Month 2–3" title="First Rankings" actions={["Long-tail specific queries ranking in top 10 by week 4", "Internal link flywheel: pillar pages accumulating authority", "First organic conversions from programmatic pages: week 6"]} result="110K sessions/month (Month 2 end)" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Month 3+" title="Expansion" actions={["250 additional pages for FD + SIP categories", "Rate update automation for 12 banks", "Category pillar pages ranking top 3 for head terms"]} result="138K+ combined organic sessions/month" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="500" label="Pages in 6 Days" sub="one template → 500 variations" color="text-green-600" />
          <MetricCard value="3.9×" label="Traffic per Hour Invested" sub="programmatic vs manual" color="text-primary" />
          <MetricCard value="110K" label="Sessions Added" sub="month 2 from programmatic alone" color="text-green-600" />
          <MetricCard value="₹0" label="Content Agency Cost" sub="100% internal engineering" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Manual Only (Month 6)", "Programmatic Added (Month 8)"]}
          rows={[
            ["Total Pages", "40", "540 (+500)"],
            ["Monthly Organic Sessions", "28,000", "138,000 (+110,000)"],
            ["Content Production Rate", "6 pages/month", "+500 pages in week 1"],
            ["Cost per Session", "₹0.14", "₹0.04 (−71%)"],
            ["Conversion from SEO", "1,428/month", "7,244/month"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Parametric intent is a signal, not a trend" body="When the same underlying question gets asked with different parameters (EMI for X bank at Y tenure for Z amount), that's a programmatic SEO opportunity. Look for the pattern, not the individual keyword." />
          <Insight num="02" title="Quality gates prevent Google penalties — don't skip them" body="50 random pages manually audited before publishing. 3 pages failed quality check and were removed. The 3 pages that would have triggered thin content issues were caught before indexing." />
          <Insight num="03" title="Interactive tools are immune to thin content penalties" body="A calculator page with unique computation output + unique bank context + unique FAQ cannot be 'thin.' The tool itself differentiates every page. Build calculators, not just text." />
          <Insight num="04" title="Internal linking at scale requires automation" body="500 pages manually linking to each other = 500 × 3 = 1,500 manual link decisions. Script-generated internal links at page generation time cost zero effort and compound authority automatically." />
          <Insight num="05" title="Programmatic and manual content compound differently" body="Programmatic content earns rankings quickly for specific long-tail terms. Manual pillar content earns authority and helps programmatic pages rank. They reinforce each other — neither alone is optimal." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="First batch included 40 pages with outdated rates" why="Rate data for 4 banks hadn't been updated in our database for 6 weeks. Published pages showed wrong rates. 2 users complained. Trust risk." fix="Added rate freshness date to every page: 'Rates last updated: [date]'. Added automated alert if any bank's rate is > 30 days old. Rate update became weekly SLA." />
          <FailurePoint title="Some parameter combinations produced nonsensical results" why="EMI calculator for ₹1L home loan at 30-year tenure — mathematically valid but commercially absurd. Pages ranked but had high bounce as users saw impractical results." fix="Added parameter validation: home loan minimum ₹10L, maximum 30-year tenure only for ≥₹20L loans. Removed 28 nonsensical pages. Bounce improved 44% on remaining pages." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="AI-Generated Unique Sections" body="GPT writes bank-specific context sections from structured data — no human writing required. Maintains uniqueness at scale while eliminating manual content bottleneck entirely." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="User-Input SEO" body="When users submit their own calculation parameters, those submissions generate new parameter combinations for new pages — user behavior drives programmatic content expansion automatically." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Revenue-Weighted Page Expansion" body="Track revenue per page — expand parameter space in highest-converting categories first. Programmatic content investment directed by actual revenue data, not volume estimates." />
        </div>
        <BlockQuote>We didn't write 500 pages. We wrote one page 500 times better than anyone else — by automating the parameterization while maintaining the quality. Scale without compromise is a systems problem, not a staffing problem.</BlockQuote>
      </section>
    </div>
  );
}
