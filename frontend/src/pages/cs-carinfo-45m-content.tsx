import { TrendingUp, Zap, Target, BarChart3, Search, Users } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function CarInfo45mContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The App That Had Everything Except Growth</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">When I joined the CarInfo product team, the platform had genuinely useful data. Real-time RC details, insurance status, owner history, challan records — information millions of Indian vehicle owners actively needed. The product worked. Users who found it loved it.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The problem: barely anyone was finding it. Monthly active users sat around 3.8M. Growth was slow, organic, and driven entirely by word of mouth and a handful of Google rankings that had accumulated by accident. No systematic growth engine. No compounding flywheel. Traffic came in, didn't stick, and didn't bring friends.</p>
        <ProblemBox>We had product-market fit. We did not have a growth model. The users who found us loved us — but the funnel between "exists online" and "user opens the app" was essentially a random walk.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85]">My job was to go from 3.8M to a number that made the platform defensible — not just larger, but compounding. A platform where growth fed growth. We ended up at 45M+ MAU. Here's exactly how.</p>
      </section>

      <SectionDivider label="The Data Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Numbers Were Actually Saying</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Before building anything, I spent three weeks doing nothing but reading data. Cohort curves, acquisition source analysis, in-app event funnels, search console data, keyword rankings. What I found reshaped the entire strategy.</p>
        <DataTable
          headers={["Metric", "Baseline", "Insight"]}
          rows={[
            ["Monthly Active Users", "3.8M", "Growing ~4% MoM organically — too slow"],
            ["D30 Retention", "11%", "Good for category; problem was upstream, not downstream"],
            ["Search Impressions (GSC)", "4.2M/month", "Huge — but click-through rate was 1.8%"],
            ["Top Landing Page", "RC Details", "62% of all traffic; single point of dependency"],
            ["Avg Session Duration", "3m 12s", "Users found their answer and left — no pull to stay"],
            ["Push Notification CTR", "2.1%", "Below benchmark; notifications weren't earning attention"],
          ]}
        />
        <InsightBox>4.2 million monthly search impressions at 1.8% CTR means 3.9 million people saw CarInfo in search results and didn't click. The distribution problem wasn't SEO — it was conversion from impression to visit. That's a title/meta/intent alignment problem, not a content problem.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">The D30 retention was actually healthy at 11% — above category benchmark for a utility app. The scale problem was entirely upstream: insufficient acquisition, not insufficient product quality. We didn't need to fix retention. We needed to fix discovery.</p>
      </section>

      <SectionDivider label="Where the Volume Was Hiding" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Long-Tail Mapping Exercise That Changed Everything</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Most product teams track 10–20 keywords. I tracked 4,200. The volume distribution was staggering.</p>
        <DataTable
          headers={["Search Category", "Monthly Volume (India)", "Current CarInfo Rank", "Opportunity"]}
          rows={[
            ["[vehicle number] RC details", "38M queries/month", "Avg pos. 4.2", "CTR optimization"],
            ["[state] vehicle check", "12M queries/month", "Avg pos. 8.7", "Content gap"],
            ["challan check by number", "9.4M queries/month", "Avg pos. 18.4", "New landing page"],
            ["insurance expiry check", "7.1M queries/month", "Not ranking", "Entirely untapped"],
            ["vehicle owner details", "4.8M queries/month", "Avg pos. 31", "Content architecture needed"],
            ["RTO code [city]", "3.9M queries/month", "Not ranking", "Entirely untapped"],
          ]}
        />
        <TakeawayBox>The keyword landscape showed 55M+ monthly searches directly relevant to CarInfo — and we were capturing about 4.2M impressions from it. The TAM wasn't being exhausted. It was barely being touched.</TakeawayBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">The insight that drove the architecture: most of these searches were hyper-specific, hyper-intent, and hyper-local. Someone searching "UP32AB1234 RC details" is not browsing — they're doing something. They have a vehicle. They have a reason. They need data right now. This is the highest-intent traffic category that exists. We just weren't building for it at scale.</p>
      </section>

      <SectionDivider label="The Reframe" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">We Weren't a Vehicle Info App. We Were a Decision-Making Tool.</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The internal framing had always been: "We're an RC check app." That positioning constrained everything — what features got built, what content got created, what SEO architecture got prioritised. I pushed for a reframe.</p>
        <BlockQuote>CarInfo isn't a vehicle information app. It's the tool Indian vehicle owners reach for the moment they need to make any vehicle-related decision — buy, sell, renew, verify, transfer.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">This shifted the entire content and product strategy. Instead of one dominant use case (RC check), we built for ten: challan lookup, insurance validity, fitness certificate expiry, ownership transfer guide, RTO code finder, vehicle valuation, resale history, hypothecation status. Each was a standalone search category with millions of monthly queries. Each became its own programmatic landing page architecture.</p>
      </section>

      <SectionDivider label="The Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Three-Layer Growth Architecture</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <FrameworkDimension
            icon={<Search className="h-5 w-5 text-primary" />}
            title="Layer 1: Programmatic SEO at Scale"
            body="5,000+ vehicle number, RTO, state, and city specific landing pages. Each page dynamically populated with real data. Built to capture the long-tail query landscape that no competitor was systematically addressing."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<TrendingUp className="h-5 w-5 text-green-600" />}
            title="Layer 2: In-App Engagement Loops"
            body="Reminders for insurance renewal, fitness certificate expiry, and challan clearance. Not generic push notifications — personalised, vehicle-specific, triggered by real expiry data. Users had a genuine reason to open the app without us reminding them."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Users className="h-5 w-5 text-purple-600" />}
            title="Layer 3: Referral + Social Loop"
            body="'Share vehicle info' feature turned every lookup into a distribution event. A user checking their car details could share it — to a buyer, a family member, an insurer. Each share = new potential user arriving with specific intent and context."
            color="bg-purple-50 border-purple-200"
          />
        </div>
        <InsightBox>The architecture was designed to be self-reinforcing. SEO brought users in. Engagement loops made them return. The referral loop made them bring others. Each layer fed the next — which is what separates growth from acquisition.</InsightBox>
      </section>

      <SectionDivider label="What We Actually Built" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Programmatic SEO Architecture</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Most apps publish static pages. We built a system that generated thousands of contextually relevant, data-rich landing pages — automatically, at scale, with real unique content per page.</p>
        <div className="space-y-4">
          {[
            { title: "Vehicle Number Pages", points: ["One page per common vehicle number pattern (UP32, MH12, DL01...)", "Real data: make, model, registration year, fuel type, insurance status", "Schema markup: FAQSchema, VehicleSchema for Google rich results", "Meta optimised per region/category — not generic"] },
            { title: "Challan Lookup Pages", points: ["State-specific challan check pages for all 28 states + 8 UTs", "Step-by-step local RTO process with actual fee structures", "Integration with Parivahan API for live challan data", "Built to rank for '[state] challan check', '[city] traffic fine' queries"] },
            { title: "Insurance Validity Pages", points: ["Expiry check pages optimised for '[vehicle type] insurance expiry check'", "Real policy data surfaced where available; partner insurer deep links", "Urgency-based CTAs wired to expiry timing: 30 days, 7 days, expired"] },
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

      <SectionDivider label="Rollout" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 18-Month Build</h2>
        <div className="space-y-4">
          <Phase num="Month 1–3" period="Foundation" title="SEO Audit + Architecture Design" actions={["4,200 keyword audit across all vehicle-related searches in India", "Competitive gap analysis: mapped every ranking competitor page by page", "Programmatic page template architecture: 9 page types designed", "Internal linking strategy mapped to push ranking authority to new pages"]} result="Technical architecture complete. 400 initial pages deployed." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 4–8" period="Scale" title="Programmatic Pages Live — First Ranking Signals" actions={["1,800 additional pages live across challan, insurance, RTO categories", "CTR optimisation on existing RC pages: title rewrites, structured data", "In-app engagement loop v1: expiry reminders based on policy data", "Push notification quality overhaul: calendar-based replaced by event-triggered"]} result="Organic clicks +180%. MAU: 3.8M → 9.2M." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 9–14" period="Compounding" title="Loops Activating — Referral Engine Live" actions={["'Share vehicle info' feature shipped: contextual sharing within lookup flow", "Share events tracked; referral attribution built", "Long-tail pages ranking page 1: 380+ new keyword positions captured", "D30 retention improving: engagement loops driving 3.1 avg sessions/retained user"]} result="MAU: 9.2M → 28M. Referral share of new installs: 22%." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Month 15–18" period="Flywheel" title="Compounding Kicks In" actions={["SEO authority compounding — new pages ranking faster as domain authority grew", "Referral loop self-sustaining: 22% of new users bringing in more users", "Insurance cross-sell revenue funding further growth investment", "Push notification CTR: 2.1% → 8.4% (event-triggered, vehicle-specific)"]} result="MAU: 28M → 45M+. YoY growth 1,084%." color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">From 3.8M to 45M: The Full Picture</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="45M+" label="Monthly Active Users" sub="from 3.8M baseline" color="text-primary" />
          <MetricCard value="1,084%" label="YoY Growth" sub="18-month period" color="text-green-600" />
          <MetricCard value="5,000+" label="SEO Pages Live" sub="fully programmatic" color="text-primary" />
          <MetricCard value="22%" label="Referral-Driven Installs" sub="at peak monthly" color="text-green-600" />
        </div>
        <DataTable
          headers={["Metric", "Month 0", "Month 18"]}
          rows={[
            ["Monthly Active Users", "3.8M", "45M+"],
            ["Organic Search Traffic", "4.2M impressions/mo", "38M impressions/mo"],
            ["Push Notification CTR", "2.1%", "8.4%"],
            ["D30 Retention", "11%", "19%"],
            ["Page-1 Keyword Rankings", "~40", "420+"],
            ["Avg Sessions per User (retained)", "1.4", "3.1"],
          ]}
        />
        <TakeawayBox>Growth at this scale isn't one thing working. It's three things working in parallel: acquisition that compounds, engagement that returns, and distribution that self-propagates. Build for all three simultaneously, not sequentially.</TakeawayBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What I'd Tell the Earlier Version of Myself</h2>
        <div className="space-y-6">
          <Insight num="01" title="CTR optimisation on existing pages beats building new ones — initially" body="We spent month 1 on title/meta rewrites for our existing 40 pages before building new ones. CTR went from 1.8% to 4.1% on existing impressions alone. That alone was equivalent to doubling organic traffic — without a single new page. Always fix conversion before adding more surface area." />
          <Insight num="02" title="Programmatic SEO only works if the data is real and unique per page" body="Generic thin pages with no real data get filtered out by Google quickly. Every page we built surfaced real vehicle data — actual challan amounts, real RTO codes, live insurance status where available. The differentiation was substance, not structure. Google rewards genuinely useful pages." />
          <Insight num="03" title="Push notification quality is more important than push notification volume" body="Our 2.1% CTR baseline was caused by sending too many generic notifications. When we switched to event-triggered (insurance expires in 7 days, challan unpaid, fitness certificate lapsing) CTR hit 8.4%. Frequency went down 70%. Engagement went up 300%. Less noise, more signal." />
          <Insight num="04" title="Referral attribution is a product discipline, not a marketing one" body="We didn't build a referral program. We built a sharing feature that happened to bring in users. The distinction matters: sharing is user-motivated (I want to show someone this info), referral is platform-motivated (I want to earn credits). User-motivated sharing has higher conversion because the context is already set." />
        </div>
      </section>

      <SectionDivider label="What Hurt Us First" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Mistakes Before We Got It Right</h2>
        <div className="space-y-4">
          <FailurePoint title="Deployed thin programmatic pages in batch — Google penalised them" why="First batch of 800 pages went live with 90% identical content structure and minimal unique data per page. Google flagged them as thin content. Rankings didn't materialise. We'd built scale without substance." fix="Rebuilt page templates with dynamic data requirements: each page must surface at least 4 unique data points (real RTO code, jurisdiction, fee schedules, challan categories). Redeployed 600 of the 800 pages. Rankings started improving within 6 weeks." />
          <FailurePoint title="In-app engagement loops fired at wrong moments" why="First version of expiry reminders fired at a fixed date — 30 days before expiry for everyone. For users who renewed immediately, the notification was noise. For users with policies expiring in 2 days, 30 days felt irrelevant." fix="Segmented reminder cadence: 45, 30, 14, 7, 3, 1, 0 days. Notification copy changed per segment to reflect urgency. Users with <7 days received a 'Critical' alert; users >30 days received an informational 'heads up'. Conversion from notification to renewal action improved 3.4×." />
          <FailurePoint title="Referral feature buried — 4 taps deep in the app" why="We built the share feature but put it in the profile menu. Usage rate was under 0.3% of users. It might as well not have existed." fix="Moved share CTA to appear at the natural completion moment of every lookup — after RC data loaded, after challan resolved, after insurance status confirmed. 'Share this info' appearing when the user already has the result in front of them. Share rate went from 0.3% to 7.1% of sessions." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where the Platform Goes Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Vehicle Valuation Engine" body="Real-time resale value based on make, model, year, registration state, mileage, and market demand signals. The next major high-intent use case: every vehicle owner wondering what their car is worth before selling." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="B2B API Products" body="The data asset built by 45M MAU is a platform for insurance companies, RTO vendors, financial institutions, and fleet operators. API monetisation at enterprise scale without any marginal user acquisition cost." />
          <FutureCard icon={<Target className="h-5 w-5 text-primary" />} title="Hyper-Local Push Intelligence" body="Using registration zone, vehicle age cohort, and seasonal data to predict upcoming expiry peaks by city. Proactive nudges before users think to look — the jump from reactive utility to proactive assistant." />
        </div>
        <BlockQuote>45M MAU didn't happen because we built a better app. It happened because we built a better distribution engine — and then made the app worth returning to once users arrived.</BlockQuote>
      </section>
    </div>
  );
}
