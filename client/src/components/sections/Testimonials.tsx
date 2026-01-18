import { Quote } from "lucide-react";

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
  return (
    <section className="py-24 bg-muted/20 border-y border-border/50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
           <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">What People Say</h2>
           <h3 className="text-3xl font-serif font-bold">Trusted by founders & leaders</h3>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow relative flex flex-col min-w-[320px] md:min-w-[380px] snap-center shrink-0"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 left-6" />
              
              <div className="mt-8 flex-grow">
                 <p className="text-muted-foreground leading-relaxed italic relative z-10">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/40">
                <div className={`h-12 w-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {item.initials}
                </div>
                <div className="text-left">
                  <div className="font-bold font-serif text-foreground">{item.name}</div>
                  <div className="text-xs font-medium text-primary uppercase tracking-wide">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
