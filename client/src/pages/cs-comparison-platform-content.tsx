import { Layers, TrendingUp, Target, Brain, BarChart3, Users } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function ComparisonPlatformContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">"The Market Is Too Crowded." They Were Right — and Wrong.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Every investor meeting in 2021 started the same way: "BankBazaar is already doing this. PolicyBazaar is already doing this. What's your differentiation?" The question was fair. The implied advice — don't build it — was wrong.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Crowded markets aren't uniformly served markets. BankBazaar was dominant but desktop-first, and genuinely terrible on mobile. PolicyBazaar owned insurance but had minimal presence in the lending comparison space. The "crowded" market had significant whitespace — it just wasn't visible from the incumbent's perspective.</p>
        <InsightBox>The strategic insight wasn't "this market is wide open." It was: "this market has been served by incumbents optimizing for their original acquisition patterns — desktop, English-speaking, financially literate. A huge segment of the market is underserved by those patterns."</InsightBox>
      </section>

      <SectionDivider label="The Market Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Incumbents Were Missing</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We ran a 3-month competitive analysis — not just product features but user experience, language support, mobile behavior, and the segments each platform was built for.</p>
        <DataTable
          headers={["Platform Gap", "User Segment Affected", "Our Opportunity"]}
          rows={[
            ["Desktop-first UX on mobile", "65% of Indian internet users (mobile-only)", "Mobile-native design as baseline"],
            ["English-only interface", "Hindi and regional language speakers", "Hindi + 4 regional languages from launch"],
            ["Financial jargon throughout", "First-time borrowers / insurance buyers", "Plain language, in-context explanations"],
            ["No EMI calculator in comparison", "EMI-sensitive borrowers", "EMI-first display, not APR-first"],
            ["No offline-adjacent features", "Users with variable connectivity", "Comparison caching for offline review"],
          ]}
        />
        <p className="text-foreground/80 leading-[1.85] mt-5">The gaps weren't random. They reflected the incumbents' founding context — built in 2008–2013, when India's internet user base was heavily urban, English-speaking, and desktop-centric. The market had moved; the products hadn't fully moved with it.</p>
      </section>

      <SectionDivider label="Our User" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Building for the User the Incumbents Weren't Building For</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We did 40 user interviews in Tier 1 and Tier 2 cities. The pattern that emerged defined our entire product approach.</p>
        <DataTable
          headers={["User Profile", "Current Behavior", "Pain Point", "What They Needed"]}
          rows={[
            ["Tier-2 city first-time borrower", "Walks into bank branch", "No online option that speaks his language", "Hindi UX + EMI-first comparison"],
            ["Mid-20s mobile-only user", "Googles, opens 4 apps", "No unified comparison; too much jargon", "One-screen comparison, plain language"],
            ["Self-employed professional", "Compares manually, asks CA", "Products assume salaried income", "NACH/alternative income acknowledgment"],
            ["First insurance buyer", "Relies on agent recommendation", "Doesn't understand policy terms", "Term-by-term plain language breakdown"],
          ]}
        />
        <TakeawayBox>Every profile we interviewed had some version of the same complaint: "I don't understand what they're asking me." Not confusion about which product to choose — confusion about what the words meant. Clarity was the product, not just a feature.</TakeawayBox>
      </section>

      <SectionDivider label="Strategy" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Product Strategy That Unlocked the Market</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The strategic frame wasn't "build a better BankBazaar." It was "build the first comparison platform that actually works for someone who's never done this before, on a phone, possibly in Hindi."</p>
        <BlockQuote>Incumbents optimize for the user who already understands the category. The bigger opportunity is always the user who doesn't understand it yet — because that's where the market is actually growing.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">Three non-negotiable design principles: (1) EMI before APR — show the number users think about, not the number that's technically more accurate; (2) Every term must be explainable in one sentence of plain language; (3) Mobile-first meant the desktop version was built second, not adapted from desktop.</p>
      </section>

      <SectionDivider label="Product Architecture" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Differentiated the Platform</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-primary" />}
            title="EMI-First Comparison Architecture"
            body="Interest rate displayed second; monthly EMI displayed first and prominently. Comparison sorted by EMI by default, not APR. Users make decisions in EMI terms — the interface respects that reality rather than correcting it."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Users className="h-5 w-5 text-green-600" />}
            title="Multi-Language Interface"
            body="Hindi at launch; Tamil, Telugu, Marathi, Kannada by Month 4. Language detection from device locale; manual toggle available. Not translation — native copy written in each language, not translated from English."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-purple-600" />}
            title="Plain-Language Term Engine"
            body="Every financial term in the platform has a one-sentence plain-language equivalent stored. Tooltip on tap (mobile) or hover (desktop) shows the explanation. Built as a content system — 400+ term definitions, maintained separately from product code."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-orange-600" />}
            title="Eligibility Pre-Check"
            body="Before showing full comparison, 4-question eligibility pre-check that surfaces only products the user is likely to qualify for. Reduces comparison overwhelm; increases application completion rate by 3.8×."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Technical Build" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Was Hard to Build</h2>
        <div className="space-y-4">
          {[
            { title: "Multi-Language Content System", points: ["Content management system built to handle 5 languages simultaneously", "All UI strings externalized — no hardcoded English anywhere in the codebase", "Translator partnership: native speakers in each language, not translation APIs", "Launch QA in each language required native-speaker review, not just functional testing"] },
            { title: "Eligibility Engine", points: ["4-question pre-check maps to 40+ lender eligibility criteria under the hood", "Rules engine maintained by credit team, not engineering — configurable without code deploy", "Output: 'likely eligible,' 'possibly eligible,' 'likely not eligible' per product (never hard no)", "Lender criteria updated monthly; rules versioned and auditable"] },
            { title: "Mobile Performance", points: ["Target: LCP < 2.5 seconds on 4G; <4 seconds on 3G (prevalent in Tier 2)", "Comparison data cached after first load; offline browsing of cached comparison supported", "Images: WebP with AVIF fallback; all optimized to sub-30KB per product card", "Critical path: full comparison rendered in <1.2 seconds from tap to data visible"] },
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

      <SectionDivider label="Traction" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">18 Months of Building and Learning</h2>
        <div className="space-y-4">
          <Phase num="Month 1–4" period="Foundation" title="Core Product + Hindi Launch" actions={["Core loan comparison: personal loan, home loan, credit card", "Hindi language version at parity with English", "EMI-first comparison architecture live"]} result="First 12,000 users. Hindi-speaking users: 44% of signups (vs 15% industry benchmark)" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 5–9" period="Regional Languages" title="4 More Languages + Insurance" actions={["Tamil, Telugu, Marathi, Kannada added", "Insurance comparison launched (term life, health, motor)", "Eligibility pre-check live for loan products"]} result="60,000 MAU. Regional language users: 38% of total." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 10–18" period="Scale" title="Tier 2 + Product Depth" actions={["SEO content in 5 languages — drove 48% of acquisition", "Offline comparison caching launched (key for Tier 2 connectivity)", "180,000 MAU; application completion 3.8× industry benchmark"]} result="180K MAU. Application completion rate: 3.8× incumbents. CAC: 40% lower via SEO." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">At Month 18</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="180K" label="Monthly Active Users" sub="18 months from zero" color="text-green-600" />
          <MetricCard value="3.8×" label="Application Completion" sub="vs incumbent average" color="text-primary" />
          <MetricCard value="5" label="Languages" sub="from day one for Hindi" color="text-green-600" />
          <MetricCard value="−40%" label="CAC" sub="vs incumbent benchmark (SEO-led)" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Building in a "Crowded" Market Taught Me</h2>
        <div className="space-y-6">
          <Insight num="01" title="Crowded markets have uncrowded segments" body="BankBazaar and PolicyBazaar are dominant in the English-first, financially-literate, urban segment. They had minimal presence in Hindi-speaking Tier 2 cities. The market looked crowded from the outside; from the inside, the specific segment we targeted was wide open." />
          <Insight num="02" title="Language is a product decision, not a localization decision" body="Adding Hindi wasn't translating the English product. It was rebuilding the product from first principles for a user whose context, vocabulary, and decision process were different. Translated products feel translated. Native products feel native." />
          <Insight num="03" title="Application completion rate is the real platform conversion metric" body="Generating comparisons is table stakes. What actually matters is whether users complete the application on the lender's platform. Our 3.8× industry-benchmark completion rate came from eligibility pre-screening — users who applied were users who'd already pre-qualified." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Got Wrong Early</h2>
        <div className="space-y-4">
          <FailurePoint title="First Hindi version was a translation, not a localization" why="We translated the English UI copy into Hindi using a freelance translator. The result was grammatically correct but felt unnatural — financial Hindi as written, not spoken. User testing feedback: 'It sounds like a bank circular.'" fix="Hired native Hindi speakers to rewrite all copy from scratch, using conversational Hindi. The rewrite took 6 weeks but produced copy that felt like a trusted friend explaining finance — which was the goal." />
          <FailurePoint title="EMI calculator was accurate but confusing" why="First version showed annual EMI, monthly EMI, total interest payable — all on one screen. Too much information. Users with lower financial literacy were more confused after seeing the calculator than before." fix="Default: only monthly EMI and total repayment shown. 'Show more' expands to full breakdown for users who want it. Simplicity for the majority; depth for the minority." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where This Goes</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Personalized Comparison Ranking" body="Rank comparison results by individual user's predicted approval probability, not just rate. A lender who rarely approves users with the applicant's profile moves down the list — even if their rate is better." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Credit Score Advisory" body="For users who don't qualify for preferred products, a 90-day credit improvement plan — what to do to reach the next tier of products. Retention mechanism and trust builder simultaneously." />
          <FutureCard icon={<TrendingUp className="h-5 w-5 text-primary" />} title="Embedded Finance" body="Move from comparison to facilitation — completing the application in-platform, not redirecting to lender. Remove the last point of drop-off." />
        </div>
        <BlockQuote>"The market is too crowded" is rarely the full story. It's too crowded for the obvious approach. The real question is: for which specific user, in which specific language, with which specific context, does the right product not yet exist?</BlockQuote>
      </section>
    </div>
  );
}
