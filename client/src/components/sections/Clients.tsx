import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useInView } from "@/hooks/useInView";

const clientTypes = [
  {
    id: "001",
    label: "Startups (Seed to Series C) needing structure & scale",
    tag: "High Fit",
    detail: "Bring clarity to ambiguous product problems before they compound.",
  },
  {
    id: "002",
    label: "Founders looking for a product partner",
    tag: "High Fit",
    detail: "Thinking partner from strategy all the way through to execution.",
  },
  {
    id: "003",
    label: "Growth-stage consumer apps hitting a plateau",
    tag: "High Fit",
    detail: "Identify and unblock the real growth constraints, not surface symptoms.",
  },
  {
    id: "004",
    label: "B2B SaaS teams needing better conversion",
    tag: "High Fit",
    detail: "Redesign funnels and monetisation flows that compound over time.",
  },
  {
    id: "005",
    label: "Marketplaces & Fintech platforms optimising transactions",
    tag: "High Fit",
    detail: "Deep domain experience in high-volume, multi-sided product systems.",
  },
];

export default function Clients() {
  const { ref: headRef, inView: headVisible } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridVisible } = useInView<HTMLDivElement>();

  return (
    <section
      className="relative py-28 bg-background overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 480px" }}
    >
      {/* CSS keyframes */}
      <style>{`
        @keyframes clientCardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .client-card {
          opacity: 0;
        }
        .client-grid-visible .client-card {
          animation: clientCardIn 0.5s ease-out forwards;
        }
      `}</style>

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.028]"
        style={{
          backgroundImage:
            "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Top-left radial accent */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative container px-4 md:px-6 mx-auto max-w-5xl">

        {/* Section Header */}
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14 reveal ${headVisible ? "in-view" : ""}`}
        >
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Client Profiles
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Who I work<br />
              <span className="text-primary">best with.</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-xs leading-relaxed text-sm md:text-base">
            I work with a specific type of founder and team — where the problem is real, the ambition is high, and execution actually matters.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-4 ${gridVisible ? "client-grid-visible" : ""}`}
        >
          {clientTypes.map((item, i) => (
            <div
              key={item.id}
              className="client-card group relative flex flex-col p-6 rounded-2xl bg-background border border-border/70 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(37,99,235,0.07)] transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Left glowing accent bar */}
              <div className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-primary/60 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top glowing line */}
              <div
                className="absolute top-0 left-6 right-6 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, #2563EB 40%, #2563EB 60%, transparent 100%)",
                }}
              />

              {/* Corner brackets */}
              <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
              <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
              <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
              <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />

              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold tracking-widest text-muted-foreground/50 group-hover:text-primary/50 transition-colors font-mono">
                  {item.id}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary/70 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {item.tag}
                </span>
              </div>

              {/* Main label */}
              <p className="font-serif font-bold text-foreground text-base leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                {item.label}
              </p>

              {/* Detail */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}

          {/* CTA Card — "Your Company?" */}
          <Link href="/contact" className="group block">
            <div className="relative flex flex-col items-center justify-center text-center p-8 rounded-2xl border-2 border-dashed border-primary/25 bg-primary/[0.025] hover:border-primary/50 hover:bg-primary/[0.05] transition-all duration-300 min-h-[160px] overflow-hidden">
              {/* Pulsing centre glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Corner brackets */}
              <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-primary/30 group-hover:border-primary/70 transition-colors" />
              <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-primary/30 group-hover:border-primary/70 transition-colors" />
              <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-primary/30 group-hover:border-primary/70 transition-colors" />
              <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-primary/30 group-hover:border-primary/70 transition-colors" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase text-primary/60">
                    Open Slot
                  </span>
                </div>
                <p className="font-serif font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  Your Company?
                </p>
                <p className="text-muted-foreground text-sm mb-4">Let's see if we're a fit</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
