import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, ArrowLeft } from "lucide-react";

const testimonials = [
  {
    name: "Rahul M.",
    role: "CEO, FinTechStart",
    initials: "RM",
    quote:
      "Yogesh completely transformed our monetization strategy. We went from struggling to convert free users to seeing a 300% increase in paid subscriptions within 3 months.",
    highlight: "300% increase in paid subscriptions",
    tag: "Monetisation",
  },
  {
    name: "Sarah K.",
    role: "VP of Growth, EcomScale",
    initials: "SK",
    quote:
      "Working with Yogesh was the best investment we made this year. He rolled up his sleeves and helped us optimize our entire funnel. Our CAC dropped by 40%.",
    highlight: "CAC dropped by 40%",
    tag: "Growth",
  },
  {
    name: "Amit V.",
    role: "Founder, SaaSFlow",
    initials: "AV",
    quote:
      "Yogesh brings a rare combination of data-driven rigor and creative problem solving. He helped us unlock a new revenue stream that now accounts for 20% of our MRR.",
    highlight: "20% of our MRR",
    tag: "Revenue",
  },
];

export default function Testimonials() {
  const [featured, setFeatured] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: sectionRef, inView: sectionVisible } = useInView<HTMLDivElement>();

  const next = useCallback(() => setFeatured(p => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setFeatured(p => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [isPaused, next]);

  const featuredItem = testimonials[featured];
  const sideItems = testimonials.filter((_, i) => i !== featured);

  return (
    <section
      className="relative py-28 bg-background overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 460px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes tFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .t-fade { animation: tFadeIn 0.5s ease-out forwards; }
      `}</style>

      {/* Decorative background quote mark */}
      <div
        className="absolute -top-8 left-4 md:left-12 pointer-events-none select-none"
        style={{
          fontSize: "clamp(12rem, 22vw, 20rem)",
          lineHeight: 1,
          fontFamily: "Georgia, serif",
          color: "#2563EB",
          opacity: 0.04,
          fontWeight: 700,
        }}
        aria-hidden
      >
        "
      </div>

      <div className="relative container px-4 md:px-6 mx-auto">

        {/* Header */}
        <div
          ref={sectionRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 reveal ${sectionVisible ? "in-view" : ""}`}
        >
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">What People Say</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Trusted by founders<br className="hidden md:block" /> &amp; leaders.
            </h2>
          </div>
          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              data-testid="testimonial-prev"
              className="h-11 w-11 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all group"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            <button
              onClick={next}
              data-testid="testimonial-next"
              className="h-11 w-11 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all group"
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            {/* Dot counter */}
            <div className="flex items-center gap-1.5 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFeatured(i)}
                  data-testid={`testimonial-dot-${i}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === featured ? "bg-primary w-6 h-2" : "bg-border hover:bg-primary/40 w-2 h-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main layout: featured left + stacked right */}
        <div className="grid lg:grid-cols-[1.45fr_1fr] gap-5 items-stretch">

          {/* Featured quote — large */}
          <div
            key={featured}
            className="t-fade relative flex flex-col justify-between p-8 md:p-12 rounded-3xl bg-foreground text-background overflow-hidden min-h-[320px]"
          >
            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Radial glow */}
            <div
              className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
              style={{
                background: "radial-gradient(circle at bottom right, rgba(37,99,235,0.18) 0%, transparent 65%)",
              }}
            />

            <div className="relative">
              {/* Tag */}
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 bg-primary/15 text-primary mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {featuredItem.tag}
              </span>

              {/* Opening mark */}
              <div
                className="font-serif font-bold text-primary leading-none mb-4"
                style={{ fontSize: "4rem", lineHeight: 0.8, opacity: 0.7 }}
                aria-hidden
              >
                "
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                {featuredItem.quote}
              </blockquote>
            </div>

            {/* Attribution */}
            <div className="relative flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-base shrink-0">
                {featuredItem.initials}
              </div>
              <div>
                <p className="font-serif font-bold text-white text-base">{featuredItem.name}</p>
                <p className="text-white/45 text-xs font-medium mt-0.5">{featuredItem.role}</p>
              </div>
              <div className="ml-auto text-right hidden sm:block">
                <p className="text-[11px] text-white/30 uppercase tracking-widest font-medium mb-1">Key Result</p>
                <p className="text-primary text-sm font-bold">{featuredItem.highlight}</p>
              </div>
            </div>
          </div>

          {/* Stacked side cards */}
          <div className="flex flex-col gap-5">
            {sideItems.map((item, i) => {
              const originalIndex = testimonials.indexOf(item);
              return (
                <button
                  key={originalIndex}
                  onClick={() => setFeatured(originalIndex)}
                  data-testid={`testimonial-card-${originalIndex}`}
                  className="group text-left flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-muted/30 border border-border/60 hover:border-primary/30 hover:bg-primary/[0.025] hover:shadow-[0_0_30px_rgba(37,99,235,0.06)] transition-all duration-300 flex-1 cursor-pointer"
                >
                  {/* Tag */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-border bg-background text-muted-foreground group-hover:border-primary/25 group-hover:text-primary transition-colors mb-4">
                      {item.tag}
                    </span>

                    {/* Opening mark */}
                    <p
                      className="font-serif font-bold text-primary/25 group-hover:text-primary/40 transition-colors leading-none mb-3"
                      style={{ fontSize: "2.5rem", lineHeight: 0.9 }}
                      aria-hidden
                    >
                      "
                    </p>

                    <p className="text-foreground/70 text-sm md:text-base leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors font-serif italic">
                      {item.quote}
                    </p>
                  </div>

                  {/* Attribution */}
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/50 group-hover:border-primary/15 transition-colors">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0 transition-colors">
                      {item.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
