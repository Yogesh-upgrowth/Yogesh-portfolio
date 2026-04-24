import { Calculator, Brain, TrendingUp, Target, Zap, BarChart3 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function FinanceCalculatorContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">A User Wrote Us a Three-Paragraph Email About a Calculator</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Most user feedback is one line. "Good app" or "this is broken" or "when is feature X coming?" Priya from Pune wrote three paragraphs. I still have the email.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">She'd been trying to figure out whether to prepay part of her home loan or invest the same money in a mutual fund. Our EMI calculator gave her a monthly payment — useful, but not what she needed. She needed a comparison: prepay vs invest, over 10 years, accounting for tax benefits on home loan interest. She'd built a spreadsheet. It had taken her 4 hours. She was asking if we could build what she'd just built.</p>
        <InsightBox>That email was one user. But it described a problem that millions of middle-class Indian earners face every year: they have financial decisions to make that require calculation, they don't have financial advisors, and the tools that exist tell them what their EMI is — not what they should actually do.</InsightBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">We built Priya's spreadsheet into the product. Then we built 11 more like it. The result was a calculator suite that became our highest-retention, highest-acquisition, and most-referred feature.</p>
      </section>

      <SectionDivider label="What We Had" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Basic Calculator Problem</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Our existing calculators were functional but shallow — they answered single questions rather than decision questions. The gap between "how much will my EMI be?" and "should I prepay or invest?" is the gap between a computation and a decision.</p>
        <DataTable
          headers={["Calculator Type", "What It Answered", "What Users Actually Needed"]}
          rows={[
            ["EMI Calculator", "Monthly payment amount", "Which loan option is actually cheapest total cost?"],
            ["FD Return Calculator", "Return on fixed deposit", "Is this better than a liquid fund at my tax bracket?"],
            ["SIP Calculator", "Future value of SIP", "How much SIP to reach ₹1 crore by retirement at 58?"],
            ["Home Loan Calculator", "EMI for given principal", "Should I prepay or invest? What's break-even?"],
            ["Tax Savings Calculator", "Taxable income reduction", "Which 80C investments should I choose first?"],
          ]}
        />
        <InsightBox>Every existing calculator answered a calculation question. Every user email requesting new features was asking a decision question. The gap wasn't in computation capability — it was in the framing of what the tool was for.</InsightBox>
      </section>

      <SectionDivider label="The User Research" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Five Financial Decision Types We Kept Getting Asked About</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We went through 3 months of support emails, exit surveys, and user interviews. Five financial decision types came up repeatedly — these were the decisions users were building spreadsheets for and then asking us to automate.</p>
        <DataTable
          headers={["Decision Type", "Current Tool Gap", "User Pain Level", "Build Priority"]}
          rows={[
            ["Prepay home loan vs invest the money", "No comparison tool exists", "Very High", "1"],
            ["Which insurance tenure is best value", "No multi-year comparison", "High", "2"],
            ["How much to save monthly to retire by X age", "No goal-backward calculator", "High", "3"],
            ["Rent vs buy at current market", "No rent-vs-EMI calculator", "Very High", "4"],
            ["SIP vs lump sum in current market", "No mode comparison", "Medium", "5"],
          ]}
        />
      </section>

      <SectionDivider label="The Redesign" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">From Computation Tools to Decision Tools</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The design principle change was fundamental: calculators should answer "what should I do?" not "what is the answer?" That shift changed the input structure, the output format, and the way we thought about what "correct" meant.</p>
        <BlockQuote>A calculator that tells you your EMI is ₹28,450 is accurate but not useful. A calculator that tells you "with prepayment option B, you save ₹4.2L in interest over 10 years but miss ₹6.1L in equity returns — net: invest wins by ₹1.9L at 12% expected returns" is a decision tool.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The new calculator architecture: inputs are parameters of a decision, not components of a formula. Outputs show both outcomes of the decision with a clear recommendation, plus the assumption sensitivity (what changes if return rate changes from 12% to 9%).</p>
      </section>

      <SectionDivider label="What We Built" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Decision Calculator Suite</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Calculator className="h-5 w-5 text-primary" />}
            title="Prepay vs Invest Calculator"
            body="Inputs: outstanding loan, remaining tenure, interest rate, monthly surplus, expected investment returns, tax bracket. Output: net financial impact of prepayment vs investment over 5/10/15 year horizons, with sensitivity to return rate assumptions."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-green-600" />}
            title="Retirement Goal Calculator"
            body="Inputs: current age, target retirement age, current savings, expected expenses at retirement (inflation-adjusted). Output: monthly SIP required to reach goal, with adjustments for different return scenarios. Shows impact of starting 1 year later."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<TrendingUp className="h-5 w-5 text-purple-600" />}
            title="Rent vs Buy Calculator"
            body="Inputs: monthly rent, property price, down payment available, loan tenure, property appreciation assumption, investment alternative return. Output: break-even year for buying vs continuing to rent and invest. With 10-year wealth comparison."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-orange-600" />}
            title="Insurance Coverage Calculator"
            body="Inputs: annual income, current savings, dependents, existing coverage, liabilities. Output: recommended coverage amount with explanation of each component. Not just 'you need ₹1.5Cr' — 'here's why: income replacement + liability clearance + education fund.'"
            color="bg-orange-50 border-orange-200"
          />
        </div>
        <DataTable
          headers={["Calculator", "Monthly Users", "Share Rate", "Avg Session Time"]}
          rows={[
            ["Prepay vs Invest", "41,200", "High (38% share)", "6.2 min"],
            ["Retirement Goal", "38,800", "Very High (44% share)", "8.1 min"],
            ["Rent vs Buy", "29,400", "Very High (51% share)", "7.4 min"],
            ["Insurance Coverage", "24,600", "Medium (22% share)", "4.8 min"],
          ]}
        />
      </section>

      <SectionDivider label="Technical Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Sharable Results (The Viral Mechanism)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The highest-impact technical decision: making calculator results shareable as a unique URL. A user runs the Rent vs Buy calculation for their specific situation → gets a URL they can share with their spouse or family → the exact inputs and outputs persist at that URL.</p>
        <div className="space-y-4">
          {[
            { title: "Shareable Calculation URLs", points: ["Every calculation state encoded in URL parameters (no server-side storage needed)", "Shareable URL copies to clipboard with one tap after any calculation", "Results page optimized for social sharing: OG image generated with summary metrics"] },
            { title: "Assumption Sensitivity Visualization", points: ["Slider: 'What if returns are X% instead?' — output updates in real-time", "Best/expected/pessimistic scenario bands shown on charts", "Assumption disclosure: every default assumption displayed and editable"] },
            { title: "PDF Export", points: ["Full calculation results exportable as PDF: inputs, outputs, charts, assumptions", "Used by users to present to family, CAs, loan officers", "'Your financial advisor summary' positioning — creates professional-feeling artifact"] },
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How It Grew</h2>
        <div className="space-y-4">
          <Phase num="Month 1" period="First 3 Calculators" title="Prepay, Retirement, Rent vs Buy" actions={["Built 3 decision calculators in 6-week sprint", "Shareable URLs from day one", "No paid promotion — linked from blog and existing comparison pages"]} result="8,400 users in first month. 38% share rate on Prepay vs Invest." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2–3" period="SEO Traction" title="Organic Discovery" actions={["Ranked top 5 for 'prepay home loan or invest calculator India'", "Reddit mentions in r/IndiaInvestments drove sustained traffic", "PDF export launched — used as a lead magnet"]} result="42,000 monthly users. Calculator pages: 11.2% conversion to main platform." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 4–6" period="Suite Expansion" title="9 More Calculators" actions={["Completed 12-calculator suite based on user request priority", "Calculator index page as a standalone destination", "WhatsApp sharing integration added to shareable URL feature"]} result="134,000 monthly calculator users. 18% convert to main platform comparison. D30: 44%." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">6-Month Calculator Suite Performance</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="134K" label="Monthly Calculator Users" sub="organic growth only" color="text-green-600" />
          <MetricCard value="18%" label="Calculator → Platform CVR" sub="highest of any acquisition source" color="text-primary" />
          <MetricCard value="44%" label="Calculator User D30 Retention" sub="vs 14% platform average" color="text-green-600" />
          <MetricCard value="38%" label="Share Rate" sub="Prepay vs Invest calculator" color="text-primary" />
        </div>
        <TakeawayBox>Calculator users have 3× better D30 retention than users who come through any other acquisition path. They come with a specific decision to make, they make it with our tool, and the product has proven its value in a concrete, personal way before they leave. That's a different quality of first impression than a generic comparison page.</TakeawayBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Deeper Lessons</h2>
        <div className="space-y-6">
          <Insight num="01" title="Decision tools retain better than information tools" body="A calculator that helps someone make a ₹50L decision is not competing with other calculators — it's competing with spreadsheets, CAs, and WhatsApp groups where people ask for advice. When you win that comparison, you earn trust that no feature comparison can replicate." />
          <Insight num="02" title="Share rate is a proxy for value delivered" body="Users share tools that made them feel smart, informed, or capable. A 38% share rate on Prepay vs Invest meant 38% of users had a decision valuable enough to discuss with someone else. That's not an engagement metric — it's a value delivery metric." />
          <Insight num="03" title="Assumptions should be visible and editable" body="Financial calculators that hide their assumptions breed mistrust. Users with different expectations (8% vs 12% equity returns) get different answers and should be able to see how the answer changes. Transparency about assumptions increases trust even when it introduces uncertainty." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Didn't Work</h2>
        <div className="space-y-4">
          <FailurePoint title="First version showed too many scenarios at once" why="Rent vs Buy calculator displayed 5-year, 10-year, 15-year, 20-year comparison simultaneously. Users couldn't identify a single clear answer. Exit rate high." fix="Default to one timeline (user's expected stay duration, asked upfront). Other timelines available as tabs. Single clear answer first; detail expandable. Exit rate dropped 44%." />
          <FailurePoint title="Insurance calculator recommended too-low coverage" why="Initial model used industry standard 10× income multiplier. For users with high liabilities (home loan + car loan), this was dangerously low. One user emailed after getting a term life quote that would have barely covered their mortgage." fix="Added liability-aware calculation: recommended coverage = income replacement + all outstanding liabilities + education fund for dependents. Higher recommendation; more honest math." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Calculator Roadmap</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Calculator className="h-5 w-5 text-primary" />} title="Linked Calculator Journeys" body="'You've decided to invest instead of prepay — here's the best mutual fund for your risk profile.' Calculator decisions flow into product recommendations seamlessly." />
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Personalized Assumptions" body="Default assumption rates (equity returns, inflation) personalized based on user's risk profile and stated investment horizon. Not one-size-fits-all 12% equity return." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Decision Journal" body="Users save their key calculations and can revisit them. 'You decided to invest 18 months ago based on 12% return assumption — here's how that's tracking.' Builds long-term relationship with financial decisions." />
        </div>
        <BlockQuote>Priya's email asked for something specific and personal. The calculator we built for her helped 134,000 people make better financial decisions in the first 6 months. That's the leverage that comes from listening carefully to individual user pain.</BlockQuote>
      </section>
    </div>
  );
}
