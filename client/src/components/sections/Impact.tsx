import { useInView } from "@/hooks/useInView";

const impacts = [
  {
    index: "01",
    company: "CarInfo",
    metric: "45M+",
    label: "Monthly Active Users",
    desc: "Scaled platform usage through aggressive product optimisation and organic growth loops.",
    delay: "0s",
  },
  {
    index: "02",
    company: "Insurance Funnel",
    metric: "1200%",
    label: "Revenue Growth · 1 Year",
    desc: "Redesigned the entire purchase flow and monetisation levers for exponential revenue scale.",
    delay: "0.1s",
  },
  {
    index: "03",
    company: "CRM Platform",
    metric: "180K+",
    label: "Monthly Transactions",
    desc: "Built a high-reliability CRM handling massive challan transaction volume end-to-end.",
    delay: "0.2s",
  },
  {
    index: "04",
    company: "User Acquisition",
    metric: "−30%",
    label: "CAC Reduction",
    desc: "Optimised marketing funnels and landing pages to drastically cut acquisition costs.",
    delay: "0.3s",
  },
];

export default function Impact() {
  const { ref: headRef, inView: headVisible } = useInView<HTMLDivElement>();
  const { ref: rowsRef, inView: rowsVisible } = useInView<HTMLDivElement>();

  return (
    <section
      id="impact"
      className="relative py-24 bg-foreground text-background overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 520px" }}
    >
      <style>{`
        @keyframes impactRowIn {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes impactNumIn {
          from { opacity: 0; transform: translateY(8px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .impact-row {
          opacity: 0;
        }
        .impact-rows-visible .impact-row {
          animation: impactRowIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .impact-num {
          opacity: 0;
        }
        .impact-rows-visible .impact-num {
          animation: impactNumIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Subtle horizontal scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "100% 80px",
        }}
      />

      {/* Side radial glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 100% 50%, rgba(37,99,235,0.09) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[300px] h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(37,99,235,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative container px-4 md:px-6 mx-auto">

        {/* Header */}
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 reveal ${headVisible ? "in-view" : ""}`}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Proof / Impact
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-background leading-tight">
              Numbers don't lie.
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Real outcomes across fintech, mobility, SaaS, and marketplaces — at scale.
          </p>
        </div>

        {/* Top divider line */}
        <div className="h-px bg-white/10 mb-0" />

        {/* Data rows */}
        <div
          ref={rowsRef}
          className={rowsVisible ? "impact-rows-visible" : ""}
        >
          {impacts.map((item, i) => (
            <div
              key={i}
              className="impact-row group"
              style={{ animationDelay: item.delay }}
            >
              {/* Row layout */}
              <div className="relative grid grid-cols-[32px_1fr] md:grid-cols-[48px_180px_1fr_320px] gap-x-6 md:gap-x-10 items-center py-8 hover:bg-white/[0.025] transition-colors duration-200 px-2 -mx-2 rounded-lg">

                {/* Index */}
                <span className="text-xs font-mono text-white/20 group-hover:text-primary/40 transition-colors self-start mt-1 md:mt-0 md:self-center">
                  {item.index}
                </span>

                {/* Company — hidden on mobile row 1 */}
                <div className="hidden md:flex flex-col justify-center">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-white/35 group-hover:text-white/55 transition-colors">
                    {item.company}
                  </span>
                </div>

                {/* Metric — the visual hero */}
                <div className="col-span-1 md:col-span-1 flex flex-col gap-0.5">
                  {/* Company label on mobile */}
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 md:hidden mb-1">
                    {item.company}
                  </span>

                  <span
                    className="impact-num font-serif font-bold text-primary leading-none"
                    style={{
                      fontSize: "clamp(3rem, 6vw, 5rem)",
                      textShadow: "0 0 60px rgba(37,99,235,0.5), 0 0 120px rgba(37,99,235,0.2)",
                      animationDelay: item.delay,
                    }}
                  >
                    {item.metric}
                  </span>
                </div>

                {/* Label + desc */}
                <div className="col-start-2 col-end-3 md:col-auto mt-2 md:mt-0 flex flex-col justify-center">
                  <p className="text-white/80 font-semibold text-sm md:text-base leading-snug mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-white/35 text-xs md:text-sm leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.07] group-hover:bg-white/[0.12] transition-colors" />
            </div>
          ))}
        </div>

        {/* Footer stats row */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10 pt-10">
          {[
            { v: "9+", l: "Years" },
            { v: "5",  l: "Industries" },
            { v: "26", l: "Case Studies" },
          ].map(({ v, l }, i) => (
            <div key={l} className="flex items-center gap-3">
              {i > 0 && <span className="hidden md:block text-white/10 text-lg">·</span>}
              <div className="text-center md:text-left">
                <span className="font-serif font-bold text-xl text-primary">{v}</span>
                <span className="text-white/35 text-xs ml-2 uppercase tracking-widest font-medium">{l}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
