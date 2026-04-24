import { MousePointerClick, Zap, Target, Brain, BarChart3, TrendingUp } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function InsuranceCtaContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">We Changed Three Words. Revenue Doubled.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">That's the headline. It's technically accurate. It's also almost entirely misleading — because we didn't just change three words. We ran 14 failed experiments first, misread the data twice, and almost cancelled the whole program before the winning variant appeared.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">This is the version with the messy middle included.</p>
        <InsightBox>The actual insight from this project wasn't about button copy. It was about the psychological state users were in at the moment of CTA — and how wrong our assumptions about that state had been for years.</InsightBox>
      </section>

      <SectionDivider label="Where We Started" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Comparison Page Problem</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Our insurance comparison page had a single CTA: "Get Quote." Click-through rate: 6.8%. For a page where users had already spent an average of 7.4 minutes comparing plans — deeply engaged, clearly intent-driven — 6.8% felt inexplicably low.</p>
        <DataTable
          headers={["Page Metric", "Value", "Interpretation"]}
          rows={[
            ["Avg time on comparison page", "7.4 minutes", "High engagement"],
            ["Plans compared per session", "3.8", "Active decision-making"],
            ["CTA click-through rate", "6.8%", "Far below expectation"],
            ["Users who scrolled past CTA", "91%", "Saw it, didn't click"],
            ["Exit rate after seeing CTA", "73%", "Left at the moment of ask"],
          ]}
        />
        <p className="text-foreground/80 leading-[1.85] mt-5">73% of users left the page immediately after seeing the CTA. Not before seeing it — after. The CTA wasn't invisible. It was actively causing exits. Something about the ask itself was wrong.</p>
      </section>

      <SectionDivider label="What We Thought vs Reality" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Assumption We Got Wrong for Three Years</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We had assumed users at the comparison stage were ready to buy. That's why the CTA said "Get Quote" — the next logical step in a purchase funnel. But qualitative research (5 user interviews, a quick survey, and session recording analysis) told a different story.</p>
        <div className="grid sm:grid-cols-2 gap-5 mt-4">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-3 text-sm uppercase tracking-wider">What We Assumed</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>→ Users at comparison stage = ready to buy</li>
              <li>→ "Get Quote" = next logical step</li>
              <li>→ Friction is minimal — they've already decided</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">What Users Said</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>→ "I'm still not sure — I want to understand more"</li>
              <li>→ "Getting a quote feels like committing"</li>
              <li>→ "I want to compare one more option first"</li>
            </ul>
          </div>
        </div>
        <InsightBox>The comparison stage wasn't decision-ready. It was still uncertainty. "Get Quote" felt like a commitment. Users who weren't certain yet — which was most of them — chose the exit over the uncertainty of what came next.</InsightBox>
      </section>

      <SectionDivider label="The Framework" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Matching CTA Language to Psychological State</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We reframed the CTA design problem: instead of optimizing the button copy in isolation, we needed to match the ask to where users actually were psychologically — not where we wished they were.</p>
        <BlockQuote>The best CTA is the one that feels like the natural next step — not the company's preferred next step. Users at the comparison stage need to feel like they can learn more, not that they're committing.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">We mapped 5 psychological states users could be in on the comparison page, and designed CTA variants for each. Then we tested which state was dominant — and which CTA performed best across the broadest range of users.</p>
      </section>

      <SectionDivider label="The Experiments" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">14 Tests. 1 Winner.</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">We ran a structured experiment program. Most failed. Some failed interestingly. Here are the key variants and what they told us:</p>
        <DataTable
          headers={["CTA Variant", "Psychological Frame", "CTR", "vs Control"]}
          rows={[
            ["Get Quote (control)", "Purchase commitment", "6.8%", "—"],
            ["Buy Now", "Purchase urgency", "4.1%", "−40% (worse)"],
            ["See Full Details", "Information seeking", "9.2%", "+35%"],
            ["Check Eligibility", "Low-commitment entry", "11.4%", "+68%"],
            ["View My Options", "Autonomy + exploration", "13.8%", "+103%"],
            ["Unlock This Plan", "Exclusivity framing", "10.1%", "+49%"],
            ["Start My Cover (winner)", "Ownership + low commitment", "14.9%", "+119%"],
          ]}
        />
        <TakeawayBox>"Start My Cover" outperformed the control by 119%. The word "My" created ownership without commitment. "Start" implied beginning, not ending. "Cover" was less clinical than "Quote." Three words, three psychological jobs done simultaneously.</TakeawayBox>
      </section>

      <SectionDivider label="What Else Changed" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Beyond the Button</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">CTA copy was the visible result. But we also changed the supporting context around the button — the sub-text, the placement, and the anxiety-reducing elements nearby. These compounded the effect.</p>
        <div className="space-y-4">
          {[
            { title: "Sub-CTA Reassurance Text", points: ["Added below button: 'No payment required. Takes 2 minutes.'", "Removed: 'Best price guaranteed' (too salesy, undermined trust in testing)", "Added: 'You can compare more before deciding' — explicitly gave users permission to continue"] },
            { title: "CTA Placement", points: ["Moved from bottom of plan card to inline — visible without scrolling", "Added secondary floating CTA on scroll depth > 60% of page", "Mobile: sticky bottom bar with CTA appeared after 2 minutes on page"] },
            { title: "Trust Signals Adjacent to CTA", points: ["Star rating (4.7★, 12,400 reviews) placed within 40px of CTA", "IRDAI logo and SEBI badge directly adjacent — regulatory credibility", "'X people bought this plan today' social proof — urgency without pressure"] },
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

      <SectionDivider label="Execution" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Testing Timeline</h2>
        <div className="space-y-4">
          <Phase num="Weeks 1–3" period="Qualitative Research" title="Understanding Why Users Left" actions={["5 user interviews: unmoderated session recordings reviewed", "Exit survey added: 'What stopped you from continuing?' (300 responses)", "Key insight: 67% cited uncertainty about what came next"]} result="Hypothesis: CTA felt like commitment; users wanted to feel low-risk." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Weeks 4–8" period="Batch 1 Testing" title="First 8 Variants" actions={["8 CTA variants tested via A/B framework (2-week minimum per variant)", "4 failed to beat control; 3 beat by <25%; 1 beat by 68%", "'Check Eligibility' emerged as early winner"]} result="Progress, but inconclusive. Continued testing." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Weeks 9–13" period="Batch 2 + Context" title="Context Layer Added" actions={["6 more CTA variants + 3 supporting context variants", "'Start My Cover' emerged: +119% vs control", "Sub-text, placement, and trust signal variants layered in"]} result="Full package (CTA + context): +2.1× conversion vs original" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Final Numbers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="+119%" label="CTA Click-Through Rate" sub="6.8% → 14.9%" color="text-green-600" />
          <MetricCard value="2.1×" label="Page Conversion Rate" sub="full package uplift" color="text-primary" />
          <MetricCard value="−31%" label="Exit Rate at CTA" sub="73% → 42%" color="text-green-600" />
          <MetricCard value="14" label="Experiments Run" sub="to find the winner" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After"]}
          rows={[
            ["CTA Click-Through Rate", "6.8%", "14.9%"],
            ["Page-to-Quote Conversion", "6.8%", "14.3%"],
            ["Revenue per 1,000 Visitors", "₹18,400", "₹39,600"],
            ["Exit Rate at CTA", "73%", "42%"],
            ["Mobile CTA Engagement", "4.1%", "12.8%"],
          ]}
        />
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What This Actually Taught Me</h2>
        <div className="space-y-6">
          <Insight num="01" title="The CTA is a promise, not a command" body="'Get Quote' is a command. 'Start My Cover' is a promise — that the next step is low-commitment, self-directed, and explorable. Users follow promises. They resist commands when they're uncertain." />
          <Insight num="02" title="Qualitative context is what makes quantitative results interpretable" body="'See Full Details' at +35% could have been the winner if we'd stopped early. Understanding why users left — the commitment fear — told us there was a bigger unlock. The qual insight directed the next 6 experiments." />
          <Insight num="03" title="Supporting context doubles the impact of copy changes" body="CTA copy alone: +119% CTR. CTA + sub-text + trust signals + placement: +2.1× full conversion. The button is the peak — but the surrounding context determines whether users climb to reach it." />
          <Insight num="04" title="'My' is one of the most powerful words in a CTA" body="Ownership language consistently outperformed in our testing. 'My Options,' 'My Cover,' 'My Quote' outperformed equivalent variants without 'My' by 30–40%. Users want to feel in control of their next step." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Didn't Work</h2>
        <div className="space-y-4">
          <FailurePoint title="'Buy Now' made things significantly worse" why="Dropped CTR 40% vs control. Users who were uncertain about commitment responded to urgency language by leaving faster. The opposite of the intended effect." fix="Removed urgency framing entirely from subsequent tests. Shifted focus to autonomy and low-commitment language. Every subsequent variant outperformed urgency framing." />
          <FailurePoint title="We almost stopped at 'Check Eligibility'" why="After Batch 1, 'Check Eligibility' was the winner at +68%. We nearly called it done. An additional round of ideation almost didn't happen." fix="Kept testing. 'Start My Cover' outperformed by another 51% on top. The difference between stopping at +68% and continuing to +119% was one more batch of experiments." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We're Testing Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Archetype-Specific CTAs" body="Different archetypes have different decision triggers. Price Hunters may respond differently to Researchers. Testing archetype-specific CTA language for each of the 7 buyer segments." />
          <FutureCard icon={<MousePointerClick className="h-5 w-5 text-primary" />} title="Dynamic Copy by Dwell Time" body="CTA copy changes based on how long the user has been on the page. <2 minutes: exploratory copy. 5+ minutes: decision-stage copy. CTA adapts to where the user is in their own timeline." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Micro-Conversion Funnels" body="Test micro-CTAs before the main CTA. 'Save this comparison' → 'See full policy document' → 'Start My Cover.' Graduated commitment ladder before asking for the main action." />
        </div>
        <BlockQuote>We didn't double revenue by changing button copy. We doubled it by finally understanding what users needed to feel before they'd take the next step — and then saying exactly that.</BlockQuote>
      </section>
    </div>
  );
}
