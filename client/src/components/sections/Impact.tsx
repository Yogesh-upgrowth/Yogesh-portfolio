import { useInView } from "@/hooks/useInView";

const impacts = [
  {
    company: "CarInfo",
    metric: "45M+",
    label: "Monthly Active Users",
    desc: "Scaled platform usage through aggressive product optimisation and organic growth loops.",
    bar: 95,
    delay: "0s",
    icon: "◈",
  },
  {
    company: "Insurance Funnel",
    metric: "1200%",
    label: "Revenue Growth · 1 Year",
    desc: "Scaled monetisation by redesigning the full purchase flow and optimising conversion levers.",
    bar: 100,
    delay: "0.15s",
    icon: "◈",
  },
  {
    company: "CRM Platform",
    metric: "180K+",
    label: "Monthly Transactions",
    desc: "Built a robust CRM handling massive challan transaction volume with high reliability.",
    bar: 72,
    delay: "0.3s",
    icon: "◈",
  },
  {
    company: "User Acquisition",
    metric: "−30%",
    label: "CAC Reduction",
    desc: "Optimised marketing funnels and landing pages to drastically lower acquisition costs.",
    bar: 68,
    delay: "0.45s",
    icon: "◈",
  },
];

export default function Impact() {
  const { ref: headRef, inView: headVisible } = useInView<HTMLDivElement>();
  const { ref: cardsRef, inView: cardsVisible } = useInView<HTMLDivElement>();

  return (
    <section
      id="impact"
      className="relative py-28 bg-foreground text-background overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 520px" }}
    >
      {/* CSS keyframes for animated bars */}
      <style>{`
        @keyframes impactBarFill {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes impactFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .impact-bar {
          transform-origin: left center;
          transform: scaleX(0);
          opacity: 0;
        }
        .impact-cards-visible .impact-bar {
          animation: impactBarFill 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .impact-metric {
          opacity: 0;
          transform: translateY(10px);
        }
        .impact-cards-visible .impact-metric {
          animation: impactFadeUp 0.7s ease-out forwards;
        }
      `}</style>

      {/* Background: subtle circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background: centre radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative container px-4 md:px-6 mx-auto">

        {/* Section Header */}
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 reveal ${headVisible ? "in-view" : ""}`}
        >
          <div>
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
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
            <p className="text-white/45 text-base mt-3 max-w-md">
              Real outcomes across fintech, mobility, SaaS, and marketplaces.
            </p>
          </div>

          {/* Right: summary figures */}
          <div className="flex items-center gap-6 md:gap-10 border border-white/10 rounded-2xl px-6 py-4 bg-white/[0.03] backdrop-blur-sm">
            {[
              { v: "9+", l: "Years" },
              { v: "5", l: "Industries" },
              { v: "26", l: "Case Studies" },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <p className="text-xl font-serif font-bold text-primary leading-none">{v}</p>
                <p className="text-xs text-white/40 mt-1 font-medium tracking-wide uppercase">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Metric Cards */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-5 ${cardsVisible ? "impact-cards-visible" : ""}`}
        >
          {impacts.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden group"
            >
              {/* Glowing top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, #2563EB 40%, #2563EB 60%, transparent 100%)`,
                  opacity: 0.7,
                }}
              />
              {/* Top-right glow on hover */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(37,99,235,0.15) 0%, transparent 70%)",
                }}
              />

              {/* Corner brackets */}
              <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-primary/30 group-hover:border-primary/60 transition-colors" />
              <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-primary/30 group-hover:border-primary/60 transition-colors" />
              <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-primary/30 group-hover:border-primary/60 transition-colors" />
              <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-primary/30 group-hover:border-primary/60 transition-colors" />

              {/* Source label */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-white/40 group-hover:text-white/60 transition-colors">
                  {item.company}
                </span>
              </div>

              {/* Metric */}
              <div
                className="impact-metric font-serif font-bold text-primary leading-none mb-1"
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                  textShadow: "0 0 40px rgba(37,99,235,0.55), 0 0 80px rgba(37,99,235,0.2)",
                  animationDelay: item.delay,
                }}
              >
                {item.metric}
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-white/80 mb-3 leading-snug">
                {item.label}
              </div>

              {/* Description */}
              <p className="text-white/45 text-xs leading-relaxed flex-1 mb-5">
                {item.desc}
              </p>

              {/* Animated progress bar */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] text-white/25 uppercase tracking-widest font-medium">Impact scale</span>
                  <span className="text-[10px] text-primary/70 font-bold">{item.bar}%</span>
                </div>
                <div className="h-[3px] rounded-full bg-white/[0.07] overflow-hidden">
                  <div
                    className="impact-bar h-full rounded-full"
                    style={{
                      width: `${item.bar}%`,
                      background: "linear-gradient(90deg, #2563EB, #60a5fa)",
                      animationDelay: item.delay,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
