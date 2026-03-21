import { MapPin, TrendingUp, Zap, Brain, BarChart3, Target } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function CabFareContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Auto-Rickshaw Insight That Started Everything</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">I was on my way to a client meeting in Bangalore, stuck in one of those peculiarly still traffic jams where nobody is moving and nobody seems bothered by it. The auto driver and I got talking — as you do.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">He told me he'd stopped taking Ola bookings in the evenings because "the surge pricing is too unpredictable — passengers get angry when the app shows one price and they're charged another." He'd switched to a mix of Rapido and street hails. He didn't know — and had no way to know — that across town, a completely different surge situation was unfolding on Uber.</p>
        <InsightBox>That conversation stuck. Here was someone whose income depended entirely on platform-specific surge dynamics — and he had no visibility into the comparative landscape. The same invisibility problem existed for the 2 million daily cab users in Tier 1 Indian cities.</InsightBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">That insight became the premise for a cab fare comparison engine: not just which app is cheapest right now, but a real-time, route-specific view across platforms — with surge prediction baked in.</p>
      </section>

      <SectionDivider label="The Market Gap" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Users Were Doing Without a Comparison Tool</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Before building, we surveyed 400 frequent cab users in Bangalore, Mumbai, and Delhi. The current "comparison" behavior was manual and painful.</p>
        <DataTable
          headers={["Behavior", "% of Users", "Time Spent", "Success Rate"]}
          rows={[
            ["Open 2–3 apps manually and compare", "68%", "3–7 minutes", "Moderate (surge changes during this time)"],
            ["Stick to one platform always", "21%", "0 minutes", "Low (missing better deals)"],
            ["Ask colleague/friend what they're using", "8%", "1–2 minutes", "Low"],
            ["Use comparison tool (existing options)", "3%", "—", "Poor (none were real-time)"],
          ]}
        />
        <p className="text-foreground/80 leading-[1.85] mt-5">The existing 3% using comparison tools were using browser extensions or third-party apps that scraped static data — not real-time pricing. A user who opened a comparison at 7:55pm was seeing data from 7:40pm, by which time surge multipliers had often changed significantly.</p>
        <ProblemBox>The comparison problem wasn't information access — it was information velocity. Cab fares change every 2–4 minutes during peak hours. Any comparison tool that wasn't updating at that frequency was creating false confidence in stale data.</ProblemBox>
      </section>

      <SectionDivider label="Who Needed This Most" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Five Types of Cab Users</h2>
        <DataTable
          headers={["User Type", "% of Market", "Price Sensitivity", "Key Need", "Comparison Value"]}
          rows={[
            ["Daily Commuter", "34%", "High", "Predictability + lowest morning fare", "Highest — repeat value"],
            ["Weekend Leisure", "22%", "Medium", "Convenience over price", "Medium"],
            ["Corporate Traveler", "18%", "Low (expensed)", "Reliability + receipt", "Low"],
            ["Late Night User", "15%", "High", "Safety + availability", "High — surge sensitivity"],
            ["Airport Shuttle", "11%", "Medium-High", "Fixed-price predictability", "High — single high-value trip"],
          ]}
        />
        <TakeawayBox>Daily Commuters (34% of users) were the core segment — high price sensitivity, repeat use, predictable routes. If the tool saved a commuter ₹40/day on a daily commute, that was ₹880/month in real savings. That's the value proposition that builds daily habits.</TakeawayBox>
      </section>

      <SectionDivider label="The Core Insight" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Comparison Isn't Enough — Prediction Is the Differentiator</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Every competitor showed current fares. That was necessary but not sufficient. The higher-value feature — and the technically harder one — was surge prediction: telling users not just what prices are now, but whether waiting 8 minutes would drop the surge multiplier.</p>
        <BlockQuote>The best comparison tool in the world fails if the comparison it shows becomes wrong before the user acts on it. Real-time was table stakes. Prediction was the moat.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">Surge patterns are predictable with enough historical data. An 8:15am Monday ride from Koramangala to MG Road follows a consistent surge curve. We had the data. The question was whether users would trust and act on a prediction.</p>
      </section>

      <SectionDivider label="What We Built" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Engine Design</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<MapPin className="h-5 w-5 text-primary" />}
            title="Real-Time Fare Fetching"
            body="Platform API integrations + scraping layer for platforms without public APIs. Fare refresh every 90 seconds. Route-specific (not city-wide) pricing — because surge varies by pickup zone within the same city at the same time."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-green-600" />}
            title="Surge Prediction Model"
            body="LSTM model trained on 14 months of route-specific surge data. Features: time of day, day of week, weather (rain increases surge 40–80%), local events, historical patterns for that specific origin-destination pair. Output: 15-minute surge forecast."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Wait vs Book Recommendation"
            body="'Wait 8 minutes — surge likely to drop from 1.8× to 1.2×, saving ~₹65' or 'Book now — surge rising over next 15 minutes.' Probabilistic recommendation with confidence level shown. Users see the bet they're making."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Zap className="h-5 w-5 text-orange-600" />}
            title="Commute Route Memory"
            body="Repeat commuters: save up to 3 frequent routes. One-tap comparison for saved route. Daily commute digest: 'Your 8:30am Koramangala → MG Road: best fare right now is Rapido at ₹128.' Habit-forming format."
            color="bg-orange-50 border-orange-200"
          />
        </div>
        <DataTable
          headers={["Feature", "Adoption Rate", "Impact on Return Rate"]}
          rows={[
            ["Saved Commute Routes", "61% of daily users", "+3.2× D30 retention vs non-savers"],
            ["Surge Prediction (used)", "44% of sessions", "+28% conversion to app open"],
            ["Wait/Book Recommendation", "38% followed it", "88% found it accurate per exit survey"],
            ["Real-Time Refresh", "Base feature", "Foundation of trust metrics"],
          ]}
        />
      </section>

      <SectionDivider label="Technical Architecture" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Data Layer That Made It Work</h2>
        <div className="space-y-4">
          {[
            { title: "Data Ingestion", points: ["Ola/Uber/Rapido APIs polled every 90 seconds per active route query", "Route-level pricing stored: city + zone + time + fare + surge multiplier", "Historical surge data: 14 months, 6 cities, 840 route pairs"] },
            { title: "Prediction Pipeline", points: ["LSTM model: sequence input (last 6 hours of surge for that route) → 15-minute surge forecast", "Weather API integration: rain detection adds 45–80% to surge probability", "Model accuracy: 78% within ±10% of actual surge at 15-minute horizon"] },
            { title: "User Experience Layer", points: ["Saved routes: one-tap comparison on app open", "Push notification: 'Your commute route looks good right now — low surge until 8:45am'", "Fare alert: notify when fare crosses user-set threshold for specific route"] },
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Growth Without Paid Acquisition</h2>
        <div className="space-y-4">
          <Phase num="Month 1" period="Launch" title="Bangalore + Delhi Only" actions={["Launched with 6 cities' route data; Bangalore and Delhi prioritized", "No paid acquisition — organic only (word of mouth, LinkedIn post, tech communities)", "First 2,000 users within 10 days"]} result="D7 retention: 41% (far above typical fintech; habit forming quickly)" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2–3" period="Surge Prediction Launch" title="The Differentiating Feature" actions={["Surge prediction launched; initially beta-gated to 20% of users", "In-app accuracy feedback: users reported 88% found it useful or very useful", "Wait/Book feature launched and became most-used non-comparison feature"]} result="DAU growing organically 18% week-over-week through sharing" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 4–6" period="Scale" title="4 New Cities + Commute Routes" actions={["Mumbai, Hyderabad, Chennai, Pune added", "Saved commute routes launched — adopted by 61% of daily users within 4 weeks", "80,000 monthly active users; primarily organic"]} result="80K MAU. ₹3.2L avg monthly user savings across active users. D30 retention: 38%." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Six-Month Numbers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="80K" label="Monthly Active Users" sub="organic growth only" color="text-green-600" />
          <MetricCard value="38%" label="D30 Retention" sub="habit-grade engagement" color="text-primary" />
          <MetricCard value="88%" label="Surge Prediction Accuracy" sub="per user exit survey" color="text-green-600" />
          <MetricCard value="₹3.2L" label="Monthly User Savings" sub="across active user base" color="text-primary" />
        </div>
        <InsightBox>The metric I'm most proud of: 80,000 users who came back every month without a single rupee of paid acquisition. Every user came because someone told them about it, or because they searched for "cheapest cab in Bangalore" and we showed up. That's product-market fit in its clearest form.</InsightBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Built the Habit</h2>
        <div className="space-y-6">
          <Insight num="01" title="Saved routes are retention mechanisms, not convenience features" body="Users who saved commute routes had 3.2× better D30 retention than users who didn't. The route save wasn't a convenience — it was a commitment to return. The product held something they'd invested in setting up." />
          <Insight num="02" title="Prediction accuracy above 80% is the threshold for behavioral trust" body="Below 80%, users tried the surge prediction and filed it as 'interesting but unreliable.' Above 80%, they started making booking decisions based on it — waiting when told to wait, booking when told to book. Trust threshold: 80%." />
          <Insight num="03" title="Real-time refresh cadence directly correlates with user trust" body="When we experimented with 5-minute refresh (to reduce API costs), user complaints about 'wrong prices' increased significantly. When we moved back to 90-second refresh, complaints fell. Accuracy and recency are inseparable in pricing contexts." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where We Got It Wrong</h2>
        <div className="space-y-4">
          <FailurePoint title="First prediction model used city-level surge, not route-level" why="Initial LSTM trained on city-wide average surge data. Bangalore as a whole doesn't surge — Koramangala surges while Whitefield might not. City-level predictions were often directionally wrong." fix="Rebuilt model with 840 route-pair specific models. Each popular origin-destination pair gets its own surge model trained on that route's specific historical data. Prediction accuracy: 61% → 78%." />
          <FailurePoint title="Weekend surge patterns were different; model didn't know" why="The initial model was trained and performed well on weekday commute patterns. Weekend surge is driven by entertainment venues, late nights, weather events — completely different pattern. Weekend predictions were poor." fix="Separate weekday/weekend model training. Weekend model includes proximity to entertainment districts, historical event data, late-night surge decay curves. Weekend prediction accuracy improved from 54% to 74%." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Roadmap</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Auto-Book Integration" body="When a user sets a fare alert and the threshold is hit, auto-initiate the booking in the preferred app — eliminating the step between notification and action where surge can change again." />
          <FutureCard icon={<MapPin className="h-5 w-5 text-primary" />} title="Tier 2 City Expansion" body="Extending to Tier 2 cities where Rapido and local platforms have gained significant share. The comparison value is higher in markets where platform fragmentation is greater." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Monthly Savings Report" body="Personal savings report: 'This month you saved ₹2,340 by using our comparison tool.' Real, attributable savings that reinforce the habit and create referral motivation." />
        </div>
        <BlockQuote>The auto driver who started the conversation saved ₹600/week by switching platforms based on surge patterns. He didn't use our app — but the 80,000 people who did were solving the same problem he described in that traffic jam.</BlockQuote>
      </section>
    </div>
  );
}
