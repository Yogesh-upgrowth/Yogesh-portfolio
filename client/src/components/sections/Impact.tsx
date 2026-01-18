import { motion } from "framer-motion";

const impacts = [
  {
    company: "CarInfo",
    metric: "650K → 1.2M+",
    label: "Daily Active Users",
    desc: "Scaled platform usage through aggressive product optimization and organic growth loops."
  },
  {
    company: "Insurance Tech",
    metric: "680x Growth",
    label: "Daily Transactions",
    desc: "Scaled monetization from 10/day to 6800+/day by redesigning the purchase flow."
  },
  {
    company: "User Acquisition",
    metric: "-30%",
    label: "CAC Reduction",
    desc: "Optimized marketing funnels and landing pages to drastically lower acquisition costs."
  },
  {
    company: "UpGrowth",
    metric: "Portfolio Lead",
    label: "Leadership",
    desc: "Led strategy and execution for multiple portfolio companies, driving collective growth."
  }
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-foreground text-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-widest text-primary-foreground/70 uppercase mb-3">Proof / Impact</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-background leading-tight">
              Numbers don't lie. <br/>
              <span className="text-primary-foreground/60">Real results, scalable growth.</span>
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-sm font-medium text-white/50 mb-4 tracking-wider uppercase">{item.company}</div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-serif text-primary">{item.metric}</div>
              <div className="text-lg font-semibold text-white/90 mb-3">{item.label}</div>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
