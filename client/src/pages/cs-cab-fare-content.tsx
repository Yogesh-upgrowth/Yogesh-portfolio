import { TrendingUp, Zap, Target, Clock, Brain, BarChart3, MapPin, RefreshCw } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function CabFareContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The ₹40 Decision That Took 8 Minutes</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Every day, millions of Indians open two or three ride apps to compare prices before booking. It takes 4–8 minutes, involves switching between apps, and still results in a coin-flip decision because surge pricing changes while you're comparing.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">This wasn't a small pain point. It was a daily ritual for anyone who commuted — and it was entirely unsolved. No product existed that showed real-time Uber, Ola, and InDrive fares side-by-side for any route, in one interface, faster than switching apps.</p>
        <InsightBox>The market research showed that 74% of urban Indian cab users checked 2+ apps before booking. The average comparison time: 6.4 minutes. We could make that 8 seconds.</InsightBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Mapping the User's Current Pain</h2>
        <DataTable
          headers={["Current User Behavior", "Time Spent", "Success Rate", "Frustration Level"]}
          rows={[
            ["Open Uber, enter route, check fare", "2.1 min", "Gets fare", "Low"],
            ["Switch to Ola, re-enter route", "1.8 min", "Gets fare", "Medium (re-entry pain)"],
            ["Open InDrive, set own price", "2.4 min", "Uncertain outcome", "High (bidding confusion)"],
            ["Go back to decide", "1.2 min", "Sometimes surge changed", "Very High"],
            ["Total", "7.5 min avg", "62% book optimal option", "High daily friction"],
          ]}
        />
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm">Core Problem</p>
            <p className="text-foreground/70 text-sm">Prices change every 90 seconds. By the time you've compared manually, the fare you chose no longer exists. Users were making decisions on stale data.</p>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2 text-sm">The Opportunity</p>
            <p className="text-foreground/80 text-sm">A single interface: type route → see all 3 providers → ranked by current fare → book the winner. Sub-10-second comparison on live data.</p>
          </div>
        </div>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">User Segments and Booking Behavior</h2>
        <DataTable
          headers={["Segment", "% of Users", "Primary Decision Factor", "Usage Frequency", "Monetization Path"]}
          rows={[
            ["Daily Office Commuters", "38%", "Consistency + speed", "5× per week", "Premium subscription for saved routes"],
            ["Price-Sensitive Shoppers", "31%", "Cheapest fare always", "3× per week", "Ad-supported (high session volume)"],
            ["Occasional Travellers", "19%", "Reliability for new routes", "1–2× per month", "One-time premium for airport trips"],
            ["Business Travellers", "12%", "Speed + invoice compliance", "8× per week", "B2B team plan"],
          ]}
        />
        <TakeawayBox>Daily Office Commuters (38% of users) generated 61% of all sessions. Their saved route behavior was the killer feature that created a daily-use habit — not one-time comparison utility.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Frame</p>
            <p className="font-medium text-foreground">Build a price comparison tool for cab apps</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Frame</p>
            <p className="font-medium text-foreground">Build the daily travel assistant that makes the cheapest cab decision in under 10 seconds — and becomes a daily habit</p>
          </div>
        </div>
        <BlockQuote>A comparison tool is a utility. A daily travel assistant is a habit. We were building the wrong thing until we understood why users came back daily — not just occasionally.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Real-Time Price Decision Surface (RPDS)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">RPDS is built on three technical pillars that make the comparison genuinely real-time — not cached approximations.</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <FrameworkDimension icon={<RefreshCw className="h-5 w-5 text-primary" />} title="Pillar 1: Live Fare API" body="Direct API integration with Uber, Ola, and InDrive. Fares refreshed every 90 seconds — matching the actual surge pricing cycle of the apps themselves." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<MapPin className="h-5 w-5 text-green-600" />} title="Pillar 2: Smart Route Memory" body="Saved routes auto-populate on return visit. Daily commuter opens app → yesterday's route pre-loaded → 3-second comparison, not 10. Habit formation by design." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Clock className="h-5 w-5 text-purple-600" />} title="Pillar 3: Fare History + Prediction" body="Historical surge patterns shown per route per time-of-day. 'Leave in 12 minutes — price drops 22%.' Turns comparison into optimization." color="bg-purple-50 border-purple-200" />
        </div>
        <DataTable
          headers={["Feature", "User Benefit", "Engagement Impact"]}
          rows={[
            ["Live fare refresh (90s cycle)", "Always comparing current prices", "D7 retention +41% vs cached-fare version"],
            ["Saved routes", "Zero-friction daily use", "Daily active users 3.2× higher than occasional users"],
            ["Fare prediction ('Leave in X min')", "Optimize, not just compare", "Session depth +28%, premium conversion 2.1×"],
            ["Direct book button", "One tap to open cheapest provider", "Booking completion rate +34%"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Data Intelligence", points: ["Uber and Ola APIs: official integration with 90-second refresh cadence", "InDrive: scraping layer (no official API) + median price for route from historical data", "Surge prediction model: linear regression on historical surge × time-of-day × weather API signals"] },
            { layer: "Layer 2", title: "Product Experience", points: ["Home screen: saved routes front and center (repeat users)", "First-time flow: location autocomplete → instant 3-provider comparison → direct book deep link", "Fare prediction card: shows optimal departure window with expected savings"] },
            { layer: "Layer 3", title: "Infrastructure", points: ["Redis cache: fare data cached at route level, refreshed every 90s by background worker", "P99 latency target: < 800ms for fare load (vs 6+ minutes for manual comparison)", "Mobile-first, PWA architecture: app-like experience without app store dependency"] },
            { layer: "Layer 4", title: "Monetization Layer", points: ["Free: 5 comparisons/day, 2 saved routes", "Premium (₹99/month): unlimited, price alerts, fare history, 10 saved routes", "B2B: team dashboard for business travellers, GST invoice generation"] },
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
          <Phase num="Phase 1" period="0–6 Weeks" title="MVP" actions={["Uber + Ola API integration", "Basic comparison UI — route input → 3 results", "10 beta users: commuters in Bangalore"]} result="Core comparison working, 8-second average" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="6–12 Weeks" title="Retention Features" actions={["Saved routes feature shipped", "InDrive scraping layer added", "Daily notification: 'Your commute route fare is ₹X now'"]} result="D7 retention: 22% → 41%" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="12–20 Weeks" title="Monetization" actions={["Premium tier launched at ₹99/month", "Fare prediction model integrated", "B2B plan launched for corporate teams"]} result="1,200 premium users, ₹1.2L MRR" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="20+ Weeks" title="Scale" actions={["Expanded to Mumbai and Delhi", "WhatsApp integration: send route, get comparison in chat", "MAU: 45,000"]} result="₹4.8L MRR, 45K MAU" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="45K" label="Monthly Active Users" sub="5 months post-launch" color="text-green-600" />
          <MetricCard value="₹4.8L" label="Monthly Recurring Revenue" sub="at month 5" color="text-primary" />
          <MetricCard value="41%" label="D7 Retention" sub="with saved routes feature" color="text-green-600" />
          <MetricCard value="8s" label="Avg Comparison Time" sub="vs 7.5 min manual" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before Product", "After Product (Month 5)"]}
          rows={[
            ["User's comparison time", "7.5 minutes", "8 seconds (−98%)"],
            ["D7 Retention", "—", "41%"],
            ["Premium Conversion", "—", "4.2% of MAU"],
            ["MAU", "0", "45,000"],
            ["MRR", "0", "₹4.8L"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Time savings compound into habit" body="98% time reduction in comparison time wasn't just a convenience improvement — it was a habit formation threshold. 8 seconds is sub-conscious. 7.5 minutes is deliberate. The difference between daily use and occasional use." />
          <Insight num="02" title="Live data beats better design every time" body="Competitors had better-looking apps. We had live data refreshed every 90 seconds. Users chose live data over better design. Correctness is the UX." />
          <Insight num="03" title="Saved routes are the real product" body="The comparison tool was the hook. Saved routes were the product. Users who saved routes had 3.2× higher retention and 4.1× higher premium conversion. The feature that creates habit IS the product." />
          <Insight num="04" title="Surge prediction is worth more than surge comparison" body="Showing users the current surge comparison is valuable. Showing them 'wait 12 minutes and save 22%' is transformative. The shift from comparison to optimization is the premium tier's entire value proposition." />
          <Insight num="05" title="WhatsApp distribution unlocks non-app users" body="WhatsApp integration added 8,200 users in 6 weeks who never downloaded the app. Meeting users in their existing workflow is always faster than training them to adopt yours." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="InDrive scraping was unreliable" why="InDrive has no official API. Our scraper broke with every app update — often showing stale fares for 4–6 hours before we noticed." fix="Added 'Last updated' timestamp per provider. If data > 2 hours old, InDrive card shows 'fare unavailable — open app'. Transparency beats stale data." />
          <FailurePoint title="Fare prediction model was overconfident" why="Early model showed 'Fare drops in 8 minutes: 94% confident.' When prediction was wrong, user trust collapsed. 3-star reviews mentioning 'wrong predictions'." fix="Changed confidence display: 'Typically drops in this window (based on historical data)' — softer language, same insight. Complaint rate dropped 81%." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Auto-Book on Threshold" body="User sets: 'Book automatically if Uber fare drops below ₹180 for my home-to-office route.' Product handles the wait and books when condition is met." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Expand to Other On-Demand" body="Same real-time comparison engine applied to food delivery (Swiggy vs Zomato delivery fees), quick commerce (Blinkit vs Zepto). Platform play." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Commute Intelligence Dashboard" body="Monthly report: 'You made 42 trips this month. You saved ₹1,840 vs booking directly. Here's your most expensive route and the optimal time to take it.'" />
        </div>
        <BlockQuote>We didn't build an app that compared cab prices. We built a system that made the cheapest decision automatic — and in doing so, made ourselves indispensable to the daily commute.</BlockQuote>
      </section>
    </div>
  );
}
