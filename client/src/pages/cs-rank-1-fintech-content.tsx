import { Trophy, Search, TrendingUp, Brain, BarChart3, Target } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function Rank1FintechContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Position 4 to Position 1. The 8-Month Story.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The keyword was "best health insurance India." 90,000 monthly searches. Our highest-value commercial keyword. We were at position 4, consistently, for 6 months. Positions 1–3 were occupied by competitors with 5+ years of domain authority and backlink profiles we couldn't easily match.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The temptation was to focus elsewhere. The calculation said don't: the traffic difference between position 4 (estimated 7.2% CTR) and position 1 (estimated 28.5%) was 19,300 visits per month. At our conversion rate and LTV, that gap was worth ₹1.8 crore monthly. It was worth fighting for.</p>
        <InsightBox>The conventional SEO advice is "don't target keywords where you can't win." That's wrong when you're at position 4 for a ₹1.8Cr/month keyword. The correct frame is: can you win, and if so, what would it take? The answer turned out to be different from what we expected.</InsightBox>
      </section>

      <SectionDivider label="The Starting Gap" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Why We Were at 4 and They Were at 1</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We ran a competitive gap analysis between our page and the position 1 incumbent. The gaps were specific and addressable — not just generic "they have more authority."</p>
        <DataTable
          headers={["Factor", "Our Page", "Position 1 Competitor", "Gap"]}
          rows={[
            ["Domain Authority", "38", "61", "Large — not closeable quickly"],
            ["Referring Domains", "214", "892", "Large — not closeable quickly"],
            ["Content Depth (word count)", "1,840", "3,200", "Addressable in 2 weeks"],
            ["Coverage of sub-questions", "4 of 12 key questions", "11 of 12", "Addressable in 4 weeks"],
            ["User engagement (time on page)", "2.1 min", "4.8 min", "Addressable — content quality"],
            ["Page speed (LCP)", "3.8 sec", "2.1 sec", "Addressable in 1 week"],
            ["Structured data (FAQ schema)", "None", "Full FAQ schema", "Addressable in 2 days"],
          ]}
        />
        <InsightBox>Domain authority and backlinks were large gaps we couldn't close quickly. But 4 of the 7 gaps were addressable in weeks — and among them were content depth, sub-question coverage, page speed, and structured data. Those 4 factors alone could significantly shift ranking dynamics.</InsightBox>
      </section>

      <SectionDivider label="The User Intent Analysis" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What People Actually Wanted When They Typed That Query</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We analyzed the top 20 questions being asked about health insurance in India through Search Console data, People Also Ask boxes, Reddit threads, and Quora answers. The position 1 competitor answered 11 of them. We answered 4.</p>
        <DataTable
          headers={["User Question", "Our Page", "Position 1", "Priority"]}
          rows={[
            ["Which insurer has best claim settlement ratio?", "No", "Yes", "High"],
            ["What's the difference between individual and family floater?", "No", "Yes", "High"],
            ["Is there a waiting period for pre-existing conditions?", "Brief", "Comprehensive", "High"],
            ["What's covered vs not covered?", "Partial", "Comprehensive", "High"],
            ["How much coverage do I actually need?", "No", "Yes (calculator)", "High"],
            ["What are the top 5 plans under ₹15,000/year?", "No", "Yes", "High"],
            ["Can I port my existing policy?", "No", "Yes", "Medium"],
          ]}
        />
        <TakeawayBox>Google's ranking algorithm is increasingly a user intent satisfaction metric. The position 1 page answered more of what users came to the query wanting. Our page was accurate and useful — it just answered fewer questions. The path to position 1 was answering more questions, not gaming the algorithm.</TakeawayBox>
      </section>

      <SectionDivider label="The Strategy" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Content Depth as the Winning Lever</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The traditional response to losing an SEO battle is link building. We took a different view: the fastest, most controllable path to ranking improvement was content quality — answering more questions, more deeply, more usefully. Link building would compound over time, but content quality was the variable we could control in weeks.</p>
        <BlockQuote>Don't build links to a page that doesn't deserve to rank. Build a page so comprehensively useful that it earns links and outranks competitors on user satisfaction signals — then the links follow naturally.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The goal: build the single most comprehensive, most useful resource on health insurance comparison in India. Not just ranking for "best health insurance India" — being the actual best answer to every question a user might have when asking that query.</p>
      </section>

      <SectionDivider label="The Rebuild" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Page Became</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Search className="h-5 w-5 text-primary" />}
            title="Question-Complete Content"
            body="All 12 key user questions identified. Each answered with dedicated section: claim settlement data (updated quarterly), coverage comparison table, waiting period guide, porting process, coverage calculator. Page grew from 1,840 to 4,200 words — with better structure, not just more text."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Trophy className="h-5 w-5 text-green-600" />}
            title="Claim Settlement Data Integration"
            body="Live IRDAI claim settlement ratio data integrated into the page, updated automatically when new IRDAI reports publish. The only page in the ranking that showed real-time CSR data. Became a unique data asset Google couldn't get elsewhere."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Structured Data Implementation"
            body="FAQ schema added for all 12 questions. HowTo schema for the comparison process. Review schema for the top 5 plans mentioned. BreadcrumbList for navigation hierarchy. Rich results in SERPs improved click-through independent of ranking position."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<TrendingUp className="h-5 w-5 text-orange-600" />}
            title="Page Speed Overhaul"
            body="LCP from 3.8 to 1.9 seconds: image compression, lazy loading, critical CSS inlining, CDN implementation. Page experience signals are a Google ranking factor — at near-equal content quality, technical performance is a tiebreaker."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Link Building" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Link Strategy</h2>
        <div className="space-y-4">
          {[
            { title: "Data-Led Link Building", points: ["IRDAI claim settlement data: journalists and personal finance writers need this data; page became a cited source", "Proactive outreach to personal finance bloggers with data exclusive to our page", "Secured 18 editorial links in 6 months from sources with DA > 40"] },
            { title: "Internal Authority Distribution", points: ["All related content pages (health insurance guides, calculators, provider reviews) linked to target page", "7 supporting pages created specifically to build internal link authority toward target page", "Navigation and footer links updated to elevate the target page sitewide"] },
            { title: "Digital PR for Visibility", points: ["'India Health Insurance Satisfaction Survey' designed and published: 2,200 respondents", "Survey results pitched to 3 major personal finance publications — 2 covered it with backlinks", "Survey data integrated into target page as unique data asset"] },
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

      <SectionDivider label="Ranking Timeline" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 8-Month Journey</h2>
        <div className="space-y-4">
          <Phase num="Month 1" period="Content Rebuild" title="Page Expansion + Structured Data" actions={["Page rewritten: 1,840 → 4,200 words, 12 questions answered", "FAQ + HowTo + Review schema implemented", "LCP improved from 3.8 to 1.9 seconds"]} result="Position 4 → Position 3 within 6 weeks of republish" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2–4" period="Link Building" title="Data PR + Outreach" actions={["Survey published; 2 major backlinks secured", "IRDAI data citations: 18 new referring domains", "Internal authority distribution completed"]} result="Position 3 → Position 2. Time on page: 2.1 → 4.4 minutes." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 5–6" period="Refinement" title="Content Gap Closure" actions={["Remaining 1 unanswered question (porting guide) added", "Coverage calculator embedded from our calculator suite", "Monthly CSR data refresh automated"]} result="Position 2. Holding with occasional Position 1 appearances." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Month 7–8" period="Position 1" title="Sustained #1 Ranking" actions={["Consistent Position 1 held for 6+ weeks", "Rich results (FAQ in SERPs) driving 34% higher CTR than position alone", "23,400 organic sessions/month from this keyword alone"]} result="Position 1 held. 23,400 sessions/month. ₹1.9Cr estimated monthly revenue contribution." color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Position 1 in Numbers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="#1" label="SERP Position" sub="held for 8+ weeks" color="text-green-600" />
          <MetricCard value="23.4K" label="Monthly Sessions" sub="from target keyword" color="text-primary" />
          <MetricCard value="+112%" label="Organic Traffic" sub="from this keyword vs Position 4" color="text-green-600" />
          <MetricCard value="4.4 min" label="Avg Time on Page" sub="vs 2.1 min before rebuild" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Moving From 4 to 1 Taught Me</h2>
        <div className="space-y-6">
          <Insight num="01" title="Content comprehensiveness beats domain authority more often than expected" body="We outranked a competitor with 23 more domain authority points primarily through content quality improvements. Google's algorithm increasingly rewards intent satisfaction — answering every question a user might have. DA matters, but it's not absolute." />
          <Insight num="02" title="User engagement signals are ranking factors — not metaphorically" body="Time on page improved from 2.1 to 4.4 minutes after the content rebuild. That improvement preceded and likely contributed to the ranking improvement. Google observes user engagement with search results; pages that satisfy users get promoted." />
          <Insight num="03" title="Unique data assets are the most defensible SEO moat" body="The live IRDAI claim settlement ratio data embedded in our page was something competitors couldn't easily replicate without the same data pipeline. Data assets create ranking advantages that persist — unlike content quality, which can be copied." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Didn't Work</h2>
        <div className="space-y-4">
          <FailurePoint title="Initial link outreach was too generic" why="First outreach campaign: cold emails to personal finance bloggers with a generic 'we have great content' pitch. Response rate: 2.1%. 4 responses, 1 link." fix="Switched to data-led outreach: 'We have exclusive claim settlement ratio data for 2023 you might want to reference.' Response rate: 18.4%. 23 responses, 14 links. Specificity drives outreach performance." />
          <FailurePoint title="Structured data implementation had errors" why="First FAQ schema deployment had malformed JSON-LD that failed Google's Rich Results Test. No rich results appeared despite 3 weeks of expected impact." fix="Added Rich Results Test to pre-publish checklist for all structured data. Schema validator run before every deployment. Rich results appeared within 2 weeks of corrected implementation." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Holding and Expanding</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Trophy className="h-5 w-5 text-primary" />} title="Ranking Defense Monitoring" body="Automated weekly monitoring for competitors' content improvements and link acquisition on target keyword. Early warning system for ranking threats before they materialize in position changes." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Adjacent Keyword Cluster" body="Position 1 for 'best health insurance India' creates authority to pursue adjacent high-value terms: 'best family floater India', 'best health insurance for senior citizens'. Authority compounds to adjacent clusters." />
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="User-Specific Personalization" body="The page currently shows the same content to all users. Next: dynamic section reordering based on detected user type (individual vs family, age inferred from query signals). Personalized intent satisfaction for the same URL." />
        </div>
        <BlockQuote>Position 4 to Position 1 wasn't a backlink campaign. It was answering more questions, more thoroughly, faster, with better data. The ranking followed the quality — not the other way around.</BlockQuote>
      </section>
    </div>
  );
}
