import { TrendingUp, Target, Brain, BarChart3, PieChart, Filter } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function MlReduceCacContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The CFO Said No. She Was Right.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Q2 planning. Marketing team had built a case for a 40% increase in paid acquisition budget. The slide deck was polished. The CAC benchmarks were industry-standard. The growth projections curved upward satisfyingly.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Our CFO, Sunita, looked at it and asked one question: "What percentage of the users we're currently acquiring are profitable at 90 days?" Nobody in the room knew the answer. That was the problem.</p>
        <ProblemBox>We were spending ₹2.4 crore per month on acquisition without knowing which 33% of that spend was generating 89% of the value. Budget approved with conditions: prove channel-level LTV within 60 days.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">That condition was the forcing function that built what became our most impactful data initiative of the year.</p>
      </section>

      <SectionDivider label="The Starting Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">We Were Spending Money Blind</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">When we finally built the attribution model, the channel-level LTV data was stunning in how unequal it was. Same blended CAC across all channels. Completely different value being delivered.</p>
        <DataTable
          headers={["Acquisition Channel", "Monthly Spend", "CAC", "90-Day LTV", "LTV:CAC", "Profitability"]}
          rows={[
            ["Google Search (branded)", "₹28L", "₹210", "₹890", "4.2×", "✓ Strong"],
            ["Google Search (non-branded)", "₹41L", "₹380", "₹720", "1.9×", "✓ Marginal"],
            ["Facebook/Instagram", "₹62L", "₹295", "₹310", "1.05×", "✗ Break-even"],
            ["YouTube Pre-roll", "₹35L", "₹440", "₹280", "0.64×", "✗ Losing"],
            ["Affiliate Network", "₹74L", "₹160", "₹195", "1.22×", "✗ Marginal"],
          ]}
        />
        <InsightBox>YouTube and Affiliate together represented 45% of our acquisition spend and were generating value at 0.64× and 1.22× LTV:CAC respectively. We were actively subsidizing unprofitable growth.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">The CFO's instinct was right. We hadn't needed more budget — we needed to understand where the budget we had was actually working.</p>
      </section>

      <SectionDivider label="Why the Channels Differed" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The User Quality Gap Was Behavioral, Not Demographic</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We expected the high-LTV channels to have demographically different users: higher income, different cities, older. They didn't. The difference was entirely behavioral — intent level at the moment of acquisition.</p>
        <DataTable
          headers={["Channel", "D1 Depth (avg features used)", "D7 Return Rate", "90-Day LTV", "Key Behavioral Difference"]}
          rows={[
            ["Google Search (branded)", "3.8", "61%", "₹890", "Already knew the product; came to convert"],
            ["Google Search (generic)", "2.9", "44%", "₹720", "Research-intent; comparing options"],
            ["Facebook", "1.6", "28%", "₹310", "Passive discovery; low initial intent"],
            ["YouTube", "1.2", "19%", "₹280", "Passive awareness; rarely converts to habit"],
            ["Affiliate", "1.9", "31%", "₹195", "Deal-seeking; high early churn"],
          ]}
        />
        <TakeawayBox>The differentiating factor was intent at entry. High-LTV channels brought users with existing intent. Low-LTV channels were trying to manufacture intent through exposure — which rarely produces durable user behavior.</TakeawayBox>
      </section>

      <SectionDivider label="The Reframe" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Stop Optimizing CAC. Start Optimizing LTV:CAC.</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The marketing team's north star had been CAC minimization. That metric, optimized in isolation, actively incentivized acquiring cheap, low-quality users from affiliate and display channels.</p>
        <BlockQuote>A ₹160 CAC from an affiliate user with ₹195 LTV is a worse investment than a ₹380 CAC from a search user with ₹720 LTV. The math is obvious. The dashboards had been hiding it.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">We replaced CAC as the primary metric with LTV:CAC ratio and 90-day payback period. Every channel had to hit a minimum LTV:CAC of 2.5× to keep receiving budget allocation. That single metric change restructured the entire acquisition strategy.</p>
      </section>

      <SectionDivider label="The Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Channel Quality Scoring</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">We built a system that assigned every acquisition channel a quality score updated monthly, driving budget allocation algorithmically rather than through quarterly planning cycles.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Filter className="h-5 w-5 text-primary" />}
            title="User Quality Signals"
            body="D1 feature depth, D7 return rate, D30 transaction rate — all by acquisition channel. Tracked as cohorts, not blended. Channel quality score = weighted average of these three signals."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<PieChart className="h-5 w-5 text-green-600" />}
            title="Budget Allocation Algorithm"
            body="Budget allocated proportionally to channel LTV:CAC ratio, with floor protection for strategic channels (brand, SEO). Channels below 2.5× threshold placed on 30-day improvement plan before budget cuts."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Lookalike Seeding"
            body="High-LTV user behavioral profiles (not demographics) exported to Meta and Google for lookalike targeting. Updated monthly. Each cycle narrowed the target to higher-quality incoming cohorts."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-orange-600" />}
            title="Real-Time LTV Prediction"
            body="ML model scoring new users at 72 hours with predicted 90-day LTV. Enables faster channel quality assessment than waiting 90 days. Channel quality updated from predictions, not just actuals."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Technical Build" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Attribution Pipeline</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The technical challenge was connecting acquisition channel (ad platform data) to 90-day revenue (product database) through a userId that persisted across anonymous → registered → transacting user states. That join was the hard part.</p>
        <div className="space-y-4">
          {[
            { title: "Attribution Stitching", points: ["Anonymous device ID linked to acquisition UTMs at landing page", "ID stitching: anonymous ID → registered user ID upon signup via deterministic match", "Revenue events joined to acquisition source through persistent userId chain"] },
            { title: "LTV Prediction Model", points: ["XGBoost model: 72-hour behavioral features → 90-day LTV prediction", "Training data: 14 months of matched acquisition-to-revenue pairs", "Output: predicted LTV per user, attributed back to channel + campaign + creative"] },
            { title: "Channel Quality Dashboard", points: ["Real-time: LTV:CAC by channel (using 72hr predicted LTV)", "Lagging: actual 90-day LTV by channel cohort (monthly refresh)", "Budget reallocation proposals auto-generated weekly based on LTV:CAC movement"] },
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How It Unfolded</h2>
        <div className="space-y-4">
          <Phase num="Weeks 1–3" period="Attribution Build" title="Stitching the Data" actions={["Built anonymous-to-registered ID stitching pipeline", "Matched 14 months of revenue data to acquisition source", "First channel-level LTV report produced"]} result="Data confirmed: YouTube and Affiliate significantly below LTV:CAC threshold." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Weeks 4–6" period="Reallocation" title="Budget Restructure" actions={["YouTube spend cut 80% (from ₹35L to ₹7L monthly)", "Affiliate network renegotiated: CPA model replaced CPL", "Released budget redirected to Google branded and non-branded"]} result="Immediate CAC improvement as channel mix shifted to higher-quality sources." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Weeks 7–10" period="ML Layer" title="Predictive LTV Scoring" actions={["72-hour LTV prediction model built and validated", "Channel quality dashboard updated weekly from predictions", "Lookalike audiences rebuilt from High-LTV behavioral profiles"]} result="First month: LTV:CAC blended ratio improved from 1.8× to 2.9×" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Month 3+" period="Compounding" title="Ongoing Optimization" actions={["Monthly model refresh with actual LTV outcomes", "Affiliate partners tiered: top 12% (highest LTV users) got 3× commission", "Programmatic display eliminated entirely"]} result="Blended LTV:CAC reached 3.8×. Acquisition volume maintained. Spend down 31%." color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Quarter-on-Quarter Impact</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="−31%" label="Monthly Acquisition Spend" sub="same volume maintained" color="text-green-600" />
          <MetricCard value="3.8×" label="Blended LTV:CAC" sub="from 1.8× baseline" color="text-primary" />
          <MetricCard value="+67%" label="Profitable User Share" sub="of new cohorts" color="text-green-600" />
          <MetricCard value="₹1.8Cr" label="Monthly Budget Released" sub="redirected to SEO + product" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After (90 Days)"]}
          rows={[
            ["Monthly Acquisition Spend", "₹2.4Cr", "₹1.66Cr (−31%)"],
            ["Blended LTV:CAC", "1.8×", "3.8×"],
            ["% Users Above 2.5× LTV:CAC", "33%", "71%"],
            ["90-Day Payback Period", "68 days", "41 days"],
            ["Budget on Profitable Channels", "55%", "89%"],
          ]}
        />
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Harder Lessons</h2>
        <div className="space-y-6">
          <Insight num="01" title="CAC minimization without LTV context is self-defeating" body="Optimizing CAC alone will reliably drive you toward cheap, low-intent acquisition channels. Those channels produce users with poor engagement and high churn — which then requires more spend to compensate. It's a feedback loop that looks like growth but isn't." />
          <Insight num="02" title="The attribution join is the technical bottleneck" body="Most teams can't do channel-level LTV analysis because they can't reliably join acquisition source to long-term revenue. The anonymous-to-registered ID stitch is unglamorous data work — but it's the foundation everything else depends on." />
          <Insight num="03" title="Channel quality varies more than channel cost" body="YouTube CAC was ₹440 vs Facebook's ₹295. Facebook looked like the better deal. But YouTube LTV:CAC was 0.64× vs Facebook's 1.05×. Both were bad, but different bad. Same cost, different quality — and quality is harder to see." />
          <Insight num="04" title="Lookalike audiences from LTV data outperform demographic targeting" body="We rebuilt all our paid audiences from behavioral signals of High-LTV users rather than demographic profiles. The first cohort acquired via behavioral lookalikes had 2.3× better LTV than the demographic-targeted cohort at the same spend." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Got Wrong</h2>
        <div className="space-y-4">
          <FailurePoint title="Cut affiliate spend too aggressively, too fast" why="Reduced affiliate spend 60% in Month 1. Acquisition volume fell sharply and we had no immediate alternative at scale. Revenue targets missed for 6 weeks." fix="Tiered approach: cut bottom 60% of affiliates by LTV quality. Retained top performers, increased their commission. Net spend fell 28% but volume recovered within 3 weeks." />
          <FailurePoint title="Used the same CAC target across all geographies" why="Metro cities had higher LTVs but also higher CACs. Our single CAC ceiling was constraining metro acquisition disproportionately — where the economics actually worked best." fix="Geo-specific LTV:CAC targets. Metro cities: CAC ceiling raised 40%. Tier-2: ceiling reduced. Blended ratio improved further as metro mix increased." />
        </div>
      </section>

      <SectionDivider label="What's Next" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Next Layer</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Creative-Level LTV Attribution" body="We can attribute LTV to channel and campaign. Next: attribute to individual creative. Which ad copy and visual format predicts highest-LTV users? Creative briefing informed by downstream revenue, not just CTR." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Real-Time Budget Reallocation" body="Currently monthly reallocation based on LTV data. Next: weekly automated budget shifts between channels within predefined bounds. Respond to quality changes in real-time rather than monthly planning cycles." />
          <FutureCard icon={<TrendingUp className="h-5 w-5 text-primary" />} title="Lifetime Value Bidding" body="Feed 90-day LTV predictions into Google and Meta bidding algorithms. Bid not for the click — bid for the predicted downstream value of the user that click is likely to produce." />
        </div>
        <BlockQuote>We didn't need more budget. We needed to know which 33% of our existing budget was doing 89% of the work — and then do more of that.</BlockQuote>
      </section>
    </div>
  );
}
