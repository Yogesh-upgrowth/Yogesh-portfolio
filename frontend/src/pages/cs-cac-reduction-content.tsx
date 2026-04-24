import { TrendingUp, Zap, Target, BarChart3, Users, DollarSign } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function CacReductionContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">We Were Paying ₹340 to Acquire Users Who Cost ₹40 to Serve</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">At ₹340 blended CAC, the unit economics didn't work. The average first-month revenue per user was ₹280. We were losing money on every new user before they had a chance to become profitable. The growth team celebrated user count milestones. The finance team quietly flagged that we'd hit ₹2.8 crore in acquisition spend for ₹2.1 crore in first-month revenue.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">What made it worse: nobody had decomposed the ₹340 number. It was a blended average. Some channels were delivering users at ₹80. Others at ₹780. We had no idea which was which — or why — because we hadn't built the attribution infrastructure to find out.</p>
        <ProblemBox>The acquisition spend wasn't the problem. The absence of channel-level unit economics visibility was the problem. We were averaging our way to the wrong answer — blending highly efficient channels with catastrophically inefficient ones and treating the average as the truth.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85]">Six months later, blended CAC was ₹238. Revenue per acquired user in month 1 was ₹295. The business was cash-flow positive on first-month revenue for the first time. Here's the full breakdown.</p>
      </section>

      <SectionDivider label="Building the Attribution Layer" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Channel-Level Truth</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Before doing anything else, I spent 3 weeks building proper attribution. UTM discipline, install-to-event tracking, first-purchase attribution at channel + campaign + ad-set level. The numbers, when they came in, were striking.</p>
        <DataTable
          headers={["Acquisition Channel", "Monthly Spend", "Installs", "CAC", "D30 ARPU", "Unit Economics"]}
          rows={[
            ["Google App Campaigns (brand)", "₹18L", "22,500", "₹80", "₹340", "✓ Profitable D30"],
            ["Google App Campaigns (generic)", "₹34L", "19,000", "₹179", "₹210", "Break-even at ~D45"],
            ["Meta – Lookalike (custom)", "₹12L", "6,800", "₹176", "₹280", "Profitable D30"],
            ["Meta – Interest targeting", "₹28L", "6,200", "₹452", "₹190", "✗ Never profitable"],
            ["YouTube pre-roll", "₹14L", "3,900", "₹359", "₹180", "✗ Never profitable"],
            ["Influencer + affiliates", "₹8L", "1,200", "₹667", "₹110", "✗ Worst performer"],
          ]}
        />
        <InsightBox>Interest-targeted Meta ads (₹28L/month spend) were producing users with ₹190 ARPU who cost ₹452 to acquire. We were spending ₹262 more than we earned per user, at scale, every month. This channel had been running for 9 months. Nobody had computed this because channel-level ARPU hadn't been tracked against channel-level CAC.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">The attribution work revealed a clear pattern: channels that brought in high-intent users (brand searches, custom lookalikes from our best-value users) had fundamentally different economics than channels that brought volume from broad targeting. The problem wasn't the channels — it was the absence of economics discipline in how we allocated between them.</p>
      </section>

      <SectionDivider label="The User Quality Problem" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Not All Users Are Worth the Same CAC</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Beyond channel analysis, I pulled user quality cohorts by acquisition source. The 90-day LTV distribution told a more nuanced story than simple D30 ARPU.</p>
        <DataTable
          headers={["User Segment (by source)", "D30 ARPU", "D90 ARPU", "Churn by D90", "True LTV Signal"]}
          rows={[
            ["Brand search (high intent)", "₹340", "₹680", "28%", "Strong — deep engagement from day 1"],
            ["Custom lookalike (best users)", "₹280", "₹590", "31%", "Strong — similar profile to power users"],
            ["Generic app campaigns", "₹210", "₹340", "54%", "Medium — converts but shallow"],
            ["Interest targeting", "₹190", "₹220", "71%", "Weak — churns before second transaction"],
            ["Influencer/affiliate", "₹110", "₹130", "82%", "Minimal — one-time curiosity install"],
          ]}
        />
        <TakeawayBox>The interest-targeting user wasn't just more expensive to acquire — they also churned 2.5× faster than the brand-search user. The CAC disadvantage was compounded by a lower lifetime, meaning we were paying more for users who stayed less. These were two-sided unit economics failures, not one.</TakeawayBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">This analysis led to a strategic decision: stop optimising for volume and start optimising for value. The target wasn't a lower number of users per rupee. It was a higher revenue per rupee of acquisition spend — which meant being willing to pay more per install on channels that delivered high-LTV users.</p>
      </section>

      <SectionDivider label="The Reframe" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">CAC Is the Wrong Metric. LTV/CAC Is the Right One.</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The growth team had been optimising to minimise CAC. That's the wrong objective function. A user acquired at ₹450 who generates ₹1,800 over 12 months is more valuable than a user acquired at ₹150 who generates ₹180 and churns. One has LTV/CAC of 4.0; the other has 1.2.</p>
        <BlockQuote>The goal isn't a lower CAC number. The goal is a higher LTV/CAC ratio. These look similar but point to completely different optimisation strategies.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The reframe changed every downstream decision: which channels to scale, which to cut, what the landing page needed to communicate, how tight the funnel qualification should be.</p>
        <p className="text-foreground/80 leading-[1.85] mt-5">Specifically: we stopped bidding to maximise install volume on brand campaigns (which were already efficient) and started bidding on value signals — users whose profile matched our high-LTV cohort. We stopped buying YouTube and interest-targeting Meta at scale, and reinvested that budget into custom lookalikes built from the top-20% LTV user pool.</p>
      </section>

      <SectionDivider label="The Four Levers" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How We Moved the Number</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension
            icon={<DollarSign className="h-5 w-5 text-primary" />}
            title="Lever 1: Channel Reallocation"
            body="Cut interest-targeting Meta spend from ₹28L to ₹6L/month. Cut YouTube from ₹14L to ₹3L. Reinvested ₹33L/month into custom lookalikes and brand search expansion. Blended CAC dropped without reducing install volume."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-green-600" />}
            title="Lever 2: Landing Page Qualification"
            body="Rewrote ad creative and landing pages for intent-qualification: 'CarInfo is for people who own vehicles and need [specific task]'. Generic curiosity traffic filtered out. Conversion rate on landing → install dropped from 22% to 16%, but quality jumped: D30 ARPU of acquired users rose ₹60."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Users className="h-5 w-5 text-purple-600" />}
            title="Lever 3: Organic + Referral as CAC Offset"
            body="Built referral mechanic tied to insurance renewals (₹200 wallet credit). Referral installs have near-zero CAC and LTV matching the referring user profile. At peak: 22% of monthly installs came from referral. Blended CAC calculation absorbs this volume."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<BarChart3 className="h-5 w-5 text-orange-600" />}
            title="Lever 4: Funnel Conversion on High-Intent Channels"
            body="Brand search campaigns had ₹80 CAC but the install → first session → first transaction funnel still had a 34% drop-off at onboarding. Fixed onboarding flow for this segment: deep-link to specific lookup type based on ad creative. Drop-off reduced from 34% to 18%."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Rollout" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 6-Month Execution</h2>
        <div className="space-y-4">
          <Phase num="Month 1" period="Foundation" title="Attribution Infrastructure Built" actions={["UTM discipline enforced across all campaigns", "Install-to-event tracking implemented via Firebase + analytics layer", "Channel-level ARPU computed for first time; 6 channels profiled", "Unit economics document shared with growth team and leadership — reset expectations"]} result="Full attribution visibility. Channel economics mapped." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2–3" period="Reallocation" title="Budget Shifted to Efficient Channels" actions={["Interest-targeting Meta: ₹28L → ₹6L (gradual, 2-week ramp-down)", "YouTube: ₹14L → ₹3L", "Custom lookalike (top-20% LTV users): ₹6L → ₹26L", "Brand search: expanded match types + bid strategy shift to value-based"]} result="Blended CAC: ₹340 → ₹278. Install volume held steady." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 4" period="Quality Optimisation" title="Landing Page + Onboarding Redesign" actions={["Ad creative rewritten for intent-qualification (not volume maximisation)", "Deep-link from ad → specific app feature based on creative context", "Brand search onboarding drop-off: 34% → 18%", "D30 ARPU of acquired users: +₹60 vs. prior 30 days"]} result="CAC: ₹278 → ₹254. Per-user revenue rising." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Month 5–6" period="Compounding" title="Referral Scale + Optimisation Loop" actions={["Referral mechanic scaled: 22% of installs referral-sourced at peak", "LTV/CAC tracking dashboard built: live visibility per channel, per cohort", "Ongoing optimisation: weekly channel review against LTV/CAC threshold (minimum 2.0)", "Affiliate program shut down entirely: LTV/CAC was 0.28"]} result="Blended CAC: ₹238. D30 ARPU: ₹295. Unit economics positive." color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Outcome</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="−30%" label="Blended CAC" sub="₹340 → ₹238" color="text-green-600" />
          <MetricCard value="₹295" label="D30 ARPU" sub="up from ₹280 baseline" color="text-primary" />
          <MetricCard value="2.8×" label="LTV/CAC Ratio" sub="from 1.1× baseline" color="text-primary" />
          <MetricCard value="22%" label="Referral Share" sub="of monthly installs at peak" color="text-green-600" />
        </div>
        <DataTable
          headers={["Metric", "Month 0", "Month 6"]}
          rows={[
            ["Blended CAC", "₹340", "₹238"],
            ["D30 ARPU (acquired users)", "₹280", "₹295"],
            ["LTV/CAC Ratio (blended)", "1.1×", "2.8×"],
            ["Interest-targeting spend", "₹28L/month", "₹6L/month"],
            ["Referral share of installs", "4%", "22%"],
            ["Unit economics status", "Negative at D30", "Positive at D30"],
          ]}
        />
        <TakeawayBox>Reducing CAC by 30% while simultaneously improving per-user revenue isn't a coincidence. Both moved in the right direction because we stopped optimising for cheap volume and started optimising for quality-efficient volume. The channels that cost more per install delivered users who were worth more. That's the LTV/CAC bet — and it pays.</TakeawayBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Mental Models I Took Away</h2>
        <div className="space-y-6">
          <Insight num="01" title="Attribution infrastructure is growth infrastructure — not an analytics nice-to-have" body="Every month we ran without channel-level LTV tracking was a month of capital being misallocated at scale. The 3 weeks to build proper attribution paid back within the first month of reallocation decisions. Companies consistently under-invest in attribution because it produces invisible ROI. The ROI is in every budget decision you make more accurately afterward." />
          <Insight num="02" title="Intent-qualifying ad creative lowers volume and raises quality simultaneously" body="Counterintuitive but reliable: writing ad copy that describes the specific user the product is for reduces CTR (because fewer people who don't fit click) and dramatically increases post-install conversion. 'CarInfo: Instant RC lookup for vehicle owners' gets fewer clicks than 'Free Car History Report!' — but the people who click it install, use it, and pay. Qualification in the funnel entry is cheaper than filtering post-install." />
          <Insight num="03" title="The referral mechanic is the most underrated component of paid CAC reduction" body="Referral users have three cost advantages: near-zero acquisition cost, better-than-average LTV (they come with context from the referrer), and they self-select into the product because someone they trust used it. At 22% referral share of installs, the blended CAC calculation absorbed a large volume of effectively free high-quality installs. Every paid CAC optimization should be happening alongside an organic/referral growth initiative." />
          <Insight num="04" title="Onboarding quality matters more for high-CAC channels than low-CAC ones" body="We had a 34% drop-off from brand search install → first session. Brand search users cost ₹80 to acquire — the most efficient channel. But 1 in 3 of them never opened the app. Fixing that drop-off was worth ₹26 CAC equivalent per install. Onboarding optimisation isn't a retention investment — it's a completion investment on already-spent acquisition cost." />
        </div>
      </section>

      <SectionDivider label="What Hurt Us First" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Slowed Us Down</h2>
        <div className="space-y-4">
          <FailurePoint title="Turned off interest-targeting spend too fast — install volume dipped sharply" why="Week 1: cut interest-targeting from ₹28L to ₹6L in one move. Custom lookalike campaigns hadn't scaled up yet to absorb the volume. Total installs dropped 38% in 2 weeks. Leadership concern. We had demonstrated the unit economics case but moved the lever too fast." fix="Rebuilt the transition plan: ramp down 20%/week on low-LTV channels; ramp up replacement channels in parallel before reducing. Always ensure the volume replacement is available before cutting the source. CAC optimisation needs supply-side management, not just demand-side." />
          <FailurePoint title="Custom lookalike audiences built from total user base, not high-LTV users" why="First lookalike campaign: sourced from all-time app install list (3.4M users). Performance was only marginally better than interest targeting — because we'd included all the low-LTV users in the seed audience, diluting the signal." fix="Rebuilt lookalike audiences from top-20% LTV users only (users with D90 ARPU >₹400). Lookalike CAC dropped from ₹245 to ₹176. The quality of the seed is everything in lookalike modelling." />
          <FailurePoint title="Landing page A/B test ran simultaneously with ad creative change" why="Changed ad creative (intent-qualifying copy) and landing page (clearer value prop) in the same week. Metrics improved significantly — but we couldn't tell which change drove it. Wasted 3 weeks re-running isolated tests to get clean attribution of effect." fix="Strict test isolation: only one variable changes per test cycle. Built a testing calendar with 10-day minimum per test. Takes longer but produces actionable, attributable data. A 3-week clean result is more valuable than a 1-week ambiguous result." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where the Acquisition Model Goes Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Predictive LTV Bidding" body="Currently optimising toward D30 ARPU as the value signal. Building a model to predict D90 LTV from D3 behaviour signals — enabling ad platforms to bid directly against predicted long-term value, not early proxy metrics." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="SEO as CAC Deflation Engine" body="The programmatic SEO architecture drives organic installs at near-zero CAC. Each new ranking page adds to a permanent, compounding organic base. The long-term strategy is making paid acquisition a diminishing share of total installs as organic scales." />
          <FutureCard icon={<Target className="h-5 w-5 text-primary" />} title="B2B Acquisition Channel" body="Fleet operators, insurance agents, and RTO brokers represent high-LTV users who come in batches. Building a structured B2B acquisition motion: dedicated landing pages, custom onboarding, account management. LTV/CAC for B2B channel likely 6–8× vs. consumer." />
        </div>
        <BlockQuote>We didn't spend less money acquiring users. We spent the same money acquiring better ones — and let the compound effect of quality do the rest.</BlockQuote>
      </section>
    </div>
  );
}
