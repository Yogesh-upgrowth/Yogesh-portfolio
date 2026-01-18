import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import testimonial1 from "@assets/stock_images/professional_busines_c657916d.jpg";
import testimonial2 from "@assets/stock_images/professional_busines_d09c7189.jpg";
import testimonial3 from "@assets/stock_images/professional_startup_f5ba071b.jpg";

const testimonials = [
  {
    name: "Rahul M.",
    role: "CEO, FinTechStart",
    image: testimonial1,
    quote: "Yogesh completely transformed our monetization strategy. We went from struggling to convert free users to seeing a 300% increase in paid subscriptions within 3 months. His insight into user psychology is unmatched."
  },
  {
    name: "Sarah K.",
    role: "VP of Growth, EcomScale",
    image: testimonial2,
    quote: "Working with Yogesh was the best investment we made this year. He didn't just give us a deck of slides; he rolled up his sleeves and helped us optimize our entire funnel. Our CAC dropped by 40%."
  },
  {
    name: "Amit V.",
    role: "Founder, SaaSFlow",
    image: testimonial3,
    quote: "I've worked with many product consultants, but Yogesh is different. He brings a rare combination of data-driven rigor and creative problem solving. He helped us unlock a new revenue stream that now accounts for 20% of our MRR."
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-background rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow relative flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 left-6" />
              
              <div className="mt-8 flex-grow">
                 <p className="text-muted-foreground leading-relaxed italic relative z-10">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/40">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/10 shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold font-serif text-foreground">{item.name}</div>
                  <div className="text-xs font-medium text-primary uppercase tracking-wide">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
