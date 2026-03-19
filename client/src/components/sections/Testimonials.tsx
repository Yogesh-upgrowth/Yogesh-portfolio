import { Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Rahul M.",
    role: "CEO, FinTechStart",
    initials: "RM",
    color: "bg-blue-500",
    quote: "Yogesh completely transformed our monetization strategy. We went from struggling to convert free users to seeing a 300% increase in paid subscriptions within 3 months."
  },
  {
    name: "Sarah K.",
    role: "VP of Growth, EcomScale",
    initials: "SK",
    color: "bg-emerald-500",
    quote: "Working with Yogesh was the best investment we made this year. He rolled up his sleeves and helped us optimize our entire funnel. Our CAC dropped by 40%."
  },
  {
    name: "Amit V.",
    role: "Founder, SaaSFlow",
    initials: "AV",
    color: "bg-purple-500",
    quote: "Yogesh brings a rare combination of data-driven rigor and creative problem solving. He helped us unlock a new revenue stream that now accounts for 20% of our MRR."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: sectionRef, inView: sectionVisible } = useInView<HTMLDivElement>();

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => { nextSlide(); }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="py-24 bg-muted/20 border-y border-border/50">
      <div className="container px-4 mx-auto max-w-4xl">
        <div
          ref={sectionRef}
          className={`text-center mb-12 reveal ${sectionVisible ? "in-view" : ""}`}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">What People Say</h2>
          <h3 className="text-3xl font-serif font-bold">Trusted by founders & leaders</h3>
        </div>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="w-full shrink-0 px-2">
                <div className="p-8 md:p-10 bg-background rounded-2xl border border-border/60 shadow-sm relative hover-glow">
                  <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />
                  <div className="mt-6">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic relative z-10 text-center">
                      "{item.quote}"
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-center gap-4 pt-6 border-t border-border/40">
                    <div className={`h-14 w-14 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                      {item.initials}
                    </div>
                    <div className="text-left">
                      <div className="font-bold font-serif text-foreground text-lg">{item.name}</div>
                      <div className="text-sm font-medium text-primary uppercase tracking-wide">{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              data-testid={`testimonial-dot-${index}`}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
