import { TrendingUp, Share2, Users, Zap, Brain, BarChart3 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function ZeroCostGrowthContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Marketing Budget Was Cut to Zero</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">October. Q3 reviews done, Q4 budgets getting tighter. The CFO made a call: all paid marketing paused for 90 days while the finance team figured out unit economics. Marketing budget: ₹0.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The initial reaction was panic. Six months of acquisition infrastructure — Meta campaigns, Google Ads, affiliate networks — all paused. The growth team had two choices: sit on their hands for 90 days, or figure out how to grow without money.</p>
        <ProblemBox>We chose the second option. Not because we were confident it would work, but because the alternative was three months of doing nothing while the business needed growth. Constraints force creativity in ways that comfortable budgets don't.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">What emerged in those 90 days became a permanent part of our growth strategy — even after the paid budgets came back.</p>
      </section>

      <SectionDivider label="Starting Point" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Had to Work With</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Zero paid budget. A product with 28,000 registered users, 6,400 monthly actives. An email list. A WhatsApp community of 1,200 users that nobody had seriously invested in. And a comparison tool that users genuinely found useful when they engaged with it.</p>
        <DataTable
          headers={["Asset", "Scale", "Status", "Potential"]}
          rows={[
            ["Registered Users", "28,000", "Active engagement system: minimal", "High"],
            ["Email List", "28,000", "Monthly newsletter, 18% open rate", "Medium"],
            ["WhatsApp Community", "1,200 members", "Unmonitored, low activity", "High (underused)"],
            ["Content (blog/guides)", "42 articles", "Low organic traffic; no distribution", "Medium"],
            ["Referral Program", "None", "Had discussed, never built", "High"],
            ["Partner Integrations", "3 active", "Traffic-sharing agreements; unused", "Medium"],
          ]}
        />
        <InsightBox>The most underused asset was the existing user base. 28,000 registered users who had enough interest to sign up — but a referral mechanism that didn't exist and a community that was dormant. The growth engine was already there. It just hadn't been turned on.</InsightBox>
      </section>

      <SectionDivider label="The Strategy" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Three Growth Loops, No Budget</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We identified three mechanisms that could compound without paid spend. All required engineering or content time — neither of which was constrained. Budget was cut; people weren't.</p>
        <DataTable
          headers={["Growth Loop", "Mechanism", "Time to First Impact", "90-Day Contribution"]}
          rows={[
            ["Referral Program", "Users invite others; both get benefit", "3 weeks (build time)", "34% of new users"],
            ["WhatsApp Community", "Curated value → organic shares → referrals", "1 week", "18% of new users"],
            ["SEO Content Velocity", "3× content output; programmatic distribution", "6 weeks (SEO lag)", "28% of new traffic"],
          ]}
        />
      </section>

      <SectionDivider label="The Reframe" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Zero Budget Forces You to Think About</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Paid acquisition is addictive because it's controllable. Turn up the budget; acquisition goes up. Turn it down; acquisition falls. It feels like driving with the steering wheel perfectly responsive to your input.</p>
        <BlockQuote>Organic and product-led growth is the opposite: inconsistent input, delayed output, but compounding returns. You plant things and wait. The budget constraint forced us to start planting — because that was the only option.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The mindset shift: every user is a potential acquisition channel. If the product is genuinely valuable, users will share it — if you make sharing easy, contextual, and mutually beneficial.</p>
      </section>

      <SectionDivider label="What We Built" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Three Engines</h2>
        <div className="space-y-5">
          <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-3 text-lg">Engine 1: Referral Program</p>
            <p className="text-foreground/80 text-sm leading-relaxed mb-3">Built in 3 weeks. Mechanic: users get ₹200 cashback on their next purchase for each successful referral; referred user gets ₹100 off first purchase. Both-sided reward because one-sided referral programs have poor viral coefficients.</p>
            <DataTable
              headers={["Metric", "Value"]}
              rows={[
                ["Build time", "3 weeks (2 engineers)"],
                ["Viral coefficient (K)", "0.34 in first month, 0.48 by month 3"],
                ["Cost per referred user", "₹220 (vs ₹340 paid CAC)"],
                ["Referral share of new users", "34% by Week 12"],
              ]}
            />
          </div>
          <div className="p-6 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-3 text-lg">Engine 2: WhatsApp Community Activation</p>
            <p className="text-foreground/80 text-sm leading-relaxed mb-3">The 1,200-member community had been dormant. We assigned a dedicated community manager (existing team member, 20% time) and changed the content strategy: 3 posts/week, all high-value and shareable — rate change alerts, money-saving tips, comparison breakdowns.</p>
            <DataTable
              headers={["Metric", "Before", "After 8 Weeks"]}
              rows={[
                ["Community Members", "1,200", "4,800"],
                ["Weekly Active Members", "~80 (6.7%)", "1,240 (25.8%)"],
                ["Shares per week", "Negligible", "~140"],
                ["New users attributable", "0", "~18% of new signups"],
              ]}
            />
          </div>
          <div className="p-6 rounded-xl border border-purple-200 bg-purple-50">
            <p className="font-bold text-purple-700 mb-3 text-lg">Engine 3: SEO Content Velocity</p>
            <p className="text-foreground/80 text-sm leading-relaxed mb-3">Tripled content output using a combination of freelance writers (existing budget, just redirected from paid ads) and a content template system. Focus: long-tail, high-intent comparison queries. Each piece of content built to rank and convert — not just inform.</p>
            <DataTable
              headers={["Metric", "Before", "After 90 Days"]}
              rows={[
                ["Monthly content output", "8 pieces", "24 pieces"],
                ["Organic sessions (monthly)", "12,400", "28,800"],
                ["New organic keyword rankings", "—", "+840"],
                ["SEO-attributed new users", "18%", "28% of new signups"],
              ]}
            />
          </div>
        </div>
      </section>

      <SectionDivider label="Execution" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 90-Day Timeline</h2>
        <div className="space-y-4">
          <Phase num="Weeks 1–3" period="Foundation" title="Referral Build + Community Reset" actions={["Referral program engineered and launched (Week 3)", "WhatsApp content strategy written; cadence established", "Content template system created; 8 briefs written for freelancers"]} result="First referrals coming in. Community engagement picking up." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Weeks 4–7" period="Growth" title="Compounding Begins" actions={["Referral K-factor measured: 0.34 (for every 10 users, 3.4 new users acquired)", "WhatsApp community growth organic: members sharing the group link", "First 24 content pieces published; tracking rankings"]} result="Week 7: first week with zero paid acquisition that still hit growth target." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Weeks 8–12" period="Scaling" title="System Running" actions={["Referral share of new users: rising from 8% → 34%", "Community members: 1,200 → 4,800", "Organic sessions growing weekly"]} result="Total new user volume: down 18% from paid peak, but CAC dropped 53%. Revenue per user improved." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">90 Days, No Marketing Budget</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="₹0" label="Paid Acquisition Spend" sub="for entire 90 days" color="text-green-600" />
          <MetricCard value="−18%" label="New User Volume" sub="vs paid peak (expected 40%+ drop)" color="text-primary" />
          <MetricCard value="−53%" label="Blended CAC" sub="referral + organic vs paid" color="text-green-600" />
          <MetricCard value="0.48" label="Viral Coefficient" sub="by end of 90 days" color="text-primary" />
        </div>
        <TakeawayBox>We expected volume to collapse without paid acquisition. It fell 18%. We expected CAC to be unmeasurable without clear attribution. It was 53% lower than our paid blended CAC. The constraint forced us to find channels that should have been running all along.</TakeawayBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Budget Constraint Taught Us</h2>
        <div className="space-y-6">
          <Insight num="01" title="Paid acquisition crowds out product-led growth" body="When paid is working, there's no urgency to build referral or community. The budget cut forced us to build what we'd been procrastinating on. Both should have been running in parallel from the beginning." />
          <Insight num="02" title="Referral programs need both-sided rewards" body="Our first referral concept (reward only for the referrer) had a K-factor of 0.11. Two-sided rewards (both referrer and new user benefit): 0.34 immediately, growing to 0.48. The referred user's motivation to actually join and engage is what drives the viral loop." />
          <Insight num="03" title="Community value-density determines growth rate" body="The WhatsApp community grew fastest during weeks when we shared genuinely scarce information — rate change alerts, limited-time comparisons. Generic posts plateaued engagement. Value density (how useful each post is) drives sharing more than posting frequency." />
          <Insight num="04" title="Organic acquisition quality is consistently higher than paid" body="Referral users had 2.4× better D30 retention than our average paid user. Organic SEO users converted at 1.8× the paid rate. Users who came because someone recommended the product or because they found it through genuine search showed more intent." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Got Wrong</h2>
        <div className="space-y-4">
          <FailurePoint title="First referral mechanic was too transactional" why="Initial version: 'Invite a friend, get ₹200.' Felt like a coupon program. Users shared it but conversationally signaled they felt awkward about it. Referral velocity was lower than K-factor suggested it should be." fix="Reframed the referral communication: not 'here's your code' but 'people you refer to will get a better rate than the average user.' Positioned as helping the friend, not incentivizing yourself. Referral sharing comfort increased noticeably." />
          <FailurePoint title="Community content tried to be educational, not useful" why="First 2 weeks of WhatsApp content: explainers and how-to guides. Engagement: low. Members weren't there to learn insurance — they were there to save money and make better decisions." fix="Shifted to: rate change alerts, 'today's best rate for X', quick comparison breakdowns. Specific, timely, actionable. Engagement jumped within 3 days of the content pivot." />
        </div>
      </section>

      <SectionDivider label="After the Budget Came Back" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Kept</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">When paid acquisition came back in Q1, we didn't abandon the organic engines. We ran them in parallel. The result was a diversified acquisition mix that was more resilient and, on a blended basis, more profitable.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Share2 className="h-5 w-5 text-primary" />} title="Referral as Permanent Channel" body="Referral stayed live post-budget restoration. At K=0.48, it generates 1 new user for every 2 who join — a compounding acquisition asset that paid channels can't replicate." />
          <FutureCard icon={<Users className="h-5 w-5 text-primary" />} title="Community as Distribution" body="WhatsApp community is now the fastest distribution channel for new features, rate alerts, and content. 4,800 engaged members = 4,800 people who can share to their networks organically." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Budget-Proof Growth Mix" body="Goal: no single acquisition channel >40% of total. Paid channels are efficient but fragile. The 90-day constraint built resilience into the acquisition mix that survives budget cycles." />
        </div>
        <BlockQuote>The budget cut was the best thing that happened to our growth strategy. Not because we wanted it — but because it forced us to build things we'd been comfortable not building while paid was working.</BlockQuote>
      </section>
    </div>
  );
}
