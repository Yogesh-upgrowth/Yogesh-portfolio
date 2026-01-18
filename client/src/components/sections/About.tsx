import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
            I don't just ship features. <br className="hidden md:block"/>
            I build <span className="text-primary/90 decoration-primary/30 underline decoration-2 underline-offset-4">engines for growth</span>.
          </h3>
          
          <div className="prose prose-lg prose-slate text-muted-foreground leading-relaxed space-y-6">
            <p>
              For over 9 years, I've been in the trenches of product management, partnering with founders and leadership teams to turn ambitious visions into scalable realities. My background spans Fintech, Mobility, Marketplaces, and SaaS, but the core mission remains the same: <strong>sustainable growth through rigorous execution.</strong>
            </p>
            <p>
              I believe that great products are born at the intersection of deep user empathy and cold, hard data. I don't rely on gut feeling alone; I use analytics to uncover friction points and leverage points that others miss.
            </p>
            <p>
              Whether it's optimizing a funnel to reduce CAC by 30% or building a monetization strategy from scratch to process thousands of daily transactions, I take end-to-end ownership. I'm not just a consultant; I'm a strategic partner who cares as much about your P&L as you do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
