import { TrendingUp, Zap, Target, BarChart3, Database, Layers } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function Crm180kContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The System That Couldn't Handle the Load It Was Built For</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The brief sounded straightforward: build a CRM to handle challan transactions across multiple states. Track vehicle violations, link them to RC owners, enable resolution workflows for field enforcement teams, produce compliance reports.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Six months after the first version launched, the system was processing about 18,000 transactions per month. At 22,000, it started throwing errors. At 26,000, it would intermittently lock up. At 30,000, it crashed entirely — twice in one week. Field teams in three states had to stop operations.</p>
        <ProblemBox>The irony was sharp: a CRM built specifically to handle high-volume enforcement operations couldn't sustain the volume of actual enforcement operations. The architecture had been designed for the expected case, not the real case. We needed a complete rethink, not a patch.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85]">I led the product rebuild from the ground up. Eight months later, the system was processing 180,000+ monthly transactions with 99.6% uptime. Here's everything I learned doing it.</p>
      </section>

      <SectionDivider label="What Broke and Why" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Forensics</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Before writing a single line of new architecture, I needed to understand exactly why the old system failed. Three weeks of forensics — log analysis, database query profiling, user workflow observation, and interviews with 14 field operators across 3 states.</p>
        <DataTable
          headers={["Failure Point", "Root Cause", "Impact"]}
          rows={[
            ["Database lock contention", "All transactions writing to single table with row-level locks", "System freeze at >22K concurrent records"],
            ["Synchronous API calls", "Every challan lookup triggered 3 blocking external API calls in series", "Response times of 12–18s; timeout cascades under load"],
            ["No transaction queue", "All writes attempted immediately on user action", "Spike overload — bulk uploads caused full table locks"],
            ["Missing state machine", "Transaction status handled via ad-hoc flag fields", "Inconsistent states; orphaned records that couldn't be resolved"],
            ["No pagination on reports", "Compliance report queries scanned full table unindexed", "Report generation: 45–90 seconds; crashed at month-end volumes"],
            ["Monolithic deployment", "All features in one process; any crash took down everything", "Single challan sync failure cascaded to CRM unavailability"],
          ]}
        />
        <InsightBox>The architecture had been built to demonstrate functionality — it had never been stress-tested. Every individual feature worked at 100 transactions. The integration of all features at 20,000 transactions was never validated. This is the classic prototype-to-production gap.</InsightBox>
      </section>

      <SectionDivider label="User Reality" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Who Was Actually Using This — and How</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The field team interviews revealed usage patterns the original design had completely missed. This was the most important research I did on the entire project.</p>
        <DataTable
          headers={["User Type", "Volume", "Key Behaviour", "System Implication"]}
          rows={[
            ["Field enforcement officers", "420 active users", "Batch uploads at end of shift (50–200 challans at once)", "Spike pattern; need async ingestion"],
            ["RTO desk supervisors", "85 active users", "Real-time dashboard checks during peak hours (9–11am, 3–5pm)", "Read performance critical; must not degrade under write load"],
            ["State compliance managers", "23 active users", "Month-end bulk reports (20K+ record exports)", "Report queries need separate read replicas"],
            ["Vehicle owners (resolution)", "~6,000/month", "One-time access to pay/dispute a challan", "Stateless; no session persistence needed; can be a separate service"],
          ]}
        />
        <TakeawayBox>Field officers weren't using the system as a continuous input stream — they were uploading in batches. The architectural assumption of a uniform transaction flow was wrong. The real pattern was: long quiet periods followed by 200-record spikes. The old system's synchronous write model was catastrophically wrong for this usage shape.</TakeawayBox>
      </section>

      <SectionDivider label="The Architectural Reframe" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">From a Database to an Event-Driven System</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The core architectural shift: stop thinking of the CRM as a database with a UI and start thinking of it as a workflow state machine with an event log.</p>
        <BlockQuote>A CRM at this scale isn't a database that gets queried. It's an event log that gets processed. The distinction changes the entire technical architecture.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">Old model: User action → immediate database write → response. This model breaks under concurrency because every write contends for the same resources.</p>
        <p className="text-foreground/80 leading-[1.85] mt-5">New model: User action → event queued → async processor → database write → state updated → notification sent. Decoupled. Each step independently scalable. Failures isolated and retryable.</p>
        <p className="text-foreground/80 leading-[1.85] mt-5">The field officer no longer waited for the system to confirm each record. They uploaded their batch, received a queue confirmation, and went home. The system processed it reliably over the next 2–4 minutes without any user impact on the RTO desk dashboards running simultaneously.</p>
      </section>

      <SectionDivider label="The New Architecture" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Four Pillars of the Rebuilt System</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension
            icon={<Database className="h-5 w-5 text-primary" />}
            title="1. Event Queue + Async Processing"
            body="All transaction ingestion queued via a message broker. Batch uploads acknowledged immediately; processed asynchronously. Workers scaled horizontally during spikes. Field officer experience: instant confirmation, zero waiting."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-green-600" />}
            title="2. Transaction State Machine"
            body="Every challan record exists in an explicit state (received → validated → matched → resolved → archived). No ad-hoc flags. Every state transition is an event. Invalid transitions rejected at the application layer. Zero orphaned records."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<BarChart3 className="h-5 w-5 text-purple-600" />}
            title="3. Read/Write Separation"
            body="Writes go to primary. Supervisors' dashboards and compliance reports read from replica. Write spikes no longer degrade read performance. Month-end reports no longer compete with live transaction processing."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Zap className="h-5 w-5 text-orange-600" />}
            title="4. Service Decomposition"
            body="Vehicle owner resolution flow broken out as a stateless microservice. Challan sync service separated from CRM core. Any individual service failure isolated — field officers can still upload even if the owner-resolution portal is down."
            color="bg-orange-50 border-orange-200"
          />
        </div>
        <DataTable
          headers={["Capability", "Old Architecture", "New Architecture"]}
          rows={[
            ["Max stable transactions/month", "22,000", "200,000+"],
            ["Batch upload (200 records)", "12–18s per record (blocking)", "Instant acknowledgement; processed in 3m"],
            ["Dashboard during peak load", "Degraded to 15–25s load", "Sub-2s consistently"],
            ["Month-end compliance report", "45–90s; crash at >50K rows", "12–18s; pre-aggregated"],
            ["System availability", "~94%", "99.6%"],
            ["Failure recovery", "Manual restart required", "Automatic retry with dead-letter queue"],
          ]}
        />
      </section>

      <SectionDivider label="Rollout" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 8-Month Build and Migration</h2>
        <div className="space-y-4">
          <Phase num="Month 1–2" period="Design" title="Architecture + User Research" actions={["14 field operator interviews across 3 states; mapped actual usage patterns", "Failure forensics: 6 root causes identified and classified by severity", "New architecture designed; migration strategy planned", "Zero-downtime migration approach defined — parallel-run old and new system"]} result="Architecture approved. Team aligned. Migration path de-risked." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 3–5" period="Core Rebuild" title="Event Queue + State Machine Live" actions={["Message queue implemented; async processing workers deployed", "Transaction state machine: all 9 states, all valid transitions", "Read/write separation: replica provisioned, read queries migrated", "Parallel operation: both systems running; cross-validation active"]} result="Parallel system handling 40K transactions/month. Zero errors." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 6–7" period="Migration" title="Cutover + Service Decomposition" actions={["Owner resolution service extracted and deployed independently", "Challan sync service decoupled from CRM core", "Old system decommissioned after 3-week overlap validation", "Field operator training: new upload flow demonstrated in 3 states"]} result="New system at 100% of traffic. Volume ramping: 40K → 120K/mo." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Month 8" period="Optimisation" title="Performance Tuning + Dashboard Overhaul" actions={["Query index audit; 18 missing indexes added", "Pre-aggregation jobs for month-end reports: nightly batch computation", "Supervisor dashboard: 5 key real-time metrics surfaced above fold", "Monitoring: automated alerts for queue depth, processing lag, error rate"]} result="180K+ monthly transactions. 99.6% uptime. Month-end reports: 14s avg." color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Changed</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="180K+" label="Monthly Transactions" sub="from 18K stable ceiling" color="text-primary" />
          <MetricCard value="99.6%" label="System Uptime" sub="from ~94% baseline" color="text-green-600" />
          <MetricCard value="10×" label="Transaction Capacity" sub="without hardware scale" color="text-primary" />
          <MetricCard value="14s" label="Month-End Report" sub="from 45–90s" color="text-green-600" />
        </div>
        <DataTable
          headers={["Metric", "Before Rebuild", "After Rebuild"]}
          rows={[
            ["Max stable monthly transactions", "22,000", "200,000+"],
            ["System uptime", "~94%", "99.6%"],
            ["Batch upload user experience", "12–18s per record, blocking", "Instant acknowledgement"],
            ["Dashboard load during peak", "15–25 seconds", "<2 seconds"],
            ["Month-end compliance report", "45–90 seconds", "12–18 seconds"],
            ["Field team crash incidents", "2/month avg (severe)", "0 in 6+ months post-launch"],
          ]}
        />
        <TakeawayBox>The transaction volume went up 10× because the system stopped being a bottleneck. The operations teams didn't change. The enforcement rates didn't change. The system simply stopped saying no. Sometimes the constraint is architecture, not demand.</TakeawayBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What This Project Taught Me About Product at Scale</h2>
        <div className="space-y-6">
          <Insight num="01" title="Usage patterns are more important than user counts for infrastructure design" body="We had usage analytics showing 420 field officers. What we didn't have was temporal usage data — when they uploaded, in what volumes, with what frequency. The batch-upload pattern at shift-end was invisible in the aggregate metrics but it was the entire architectural constraint. Observe the shape of usage, not just the volume." />
          <Insight num="02" title="Async-first design eliminates an entire class of scaling problems" body="Every synchronous blocking call is a point of failure under load. When we converted the write path to async, the field officer experience actually improved — instant confirmation vs. waiting 18 seconds. And the backend processing burden became smoothed over time instead of spiked at the user's moment of action. Async is usually the user-experience win, not just the engineering win." />
          <Insight num="03" title="Read/write separation should be default architecture for any CRM at scale" body="Reads and writes have fundamentally different scaling needs. Reads need consistency and speed. Writes need durability and isolation. Running them on the same resource means each degrades the other under load. We gained this insight the hard way — month-end reports killing the live dashboard during exactly the moments supervisors needed it most." />
          <Insight num="04" title="State machines are under-used in product engineering" body="The orphaned record problem — transactions stuck in unknown states because the system had multiple ways to represent 'partially processed' — cost us 3 months of manual data cleaning post-rebuild. An explicit state machine with validated transitions would have made this impossible. For any workflow that has more than 3 states, a formal state machine pays for itself in the first week of production." />
        </div>
      </section>

      <SectionDivider label="What Hurt Us First" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Expensive Mistakes</h2>
        <div className="space-y-4">
          <FailurePoint title="Started migration without a parallel-run validation period" why="First attempt at migration: switched traffic to new system on a Friday (classic mistake). Discovered that 340 transaction records had a state mapping difference between old and new schema. Had to roll back. 6 hours of manual reconciliation. Significant field team disruption." fix="Designed a 3-week parallel-run: both systems processed all incoming transactions simultaneously. Automated comparison jobs checked for divergence daily. Zero differences observed for 3 consecutive weeks before cutover. Migration was then uneventful." />
          <FailurePoint title="Queue depth monitoring not set up before going live" why="Async queues are opaque by default — you can't see what's backed up unless you instrument it. Week 1 of live operation: a worker process silently died. Queue depth grew to 12,000 unprocessed records over 6 hours before anyone noticed. Field teams saw 'uploaded' confirmations but their records weren't in the dashboard." fix="Implemented queue depth alerts at 500, 2000, and 5000 records. Worker health checks every 30 seconds. Dead-letter queue for failed records with auto-notification to ops team. This infrastructure should have been in place before go-live, not after the first incident." />
          <FailurePoint title="Field operator training underestimated — new flow felt unfamiliar" why="New upload flow was objectively better (instant acknowledgement vs. 18-second wait) but it felt different. Field officers who had memorised the old flow were confused by the new confirmation UX: 'It says queued — does that mean it worked?' Support tickets spiked 380% in week 1." fix="Created a '2-minute explainer video' for the new flow with Hindi audio. Ran 3 live demo sessions with field team leads. Added a persistent 'last batch: 200 records processed ✓' status line to the upload screen. Support tickets normalised within 2 weeks." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where the Platform Scales Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Database className="h-5 w-5 text-primary" />} title="National Coverage" body="Current deployment: 3 states. Architecture now supports multi-region data partitioning for national rollout. State-level data isolation (regulatory requirement) was designed into the schema from day one of the rebuild — expansion is a deployment exercise, not an architectural one." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Predictive Compliance Patterns" body="At 180K monthly transactions across 3 states, we have enough data to model enforcement patterns by zone, vehicle type, day of week, and weather. Predictive alerting for supervisors: 'Zone 4 historically has 3× violation density on Monday mornings — resource allocation suggestion.'" />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Real-Time Resolution Dashboard" body="Current owner resolution time: 3–7 days. With direct UPI integration for challan payment and digital acknowledgement, resolution time can compress to same-day. Building the real-time resolution pipeline is the next major feature milestone." />
        </div>
        <BlockQuote>We didn't process 180K transactions because we scaled the hardware. We processed 180K transactions because we stopped designing the system as if every operation needed to happen right now.</BlockQuote>
      </section>
    </div>
  );
}
