import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/minimalist_professional_abstract_geometric_background_with_blue_and_gray_tones.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-10 md:opacity-20 pointer-events-none">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover object-right-top"
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Available for new projects
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
                I help consumer & <span className="text-primary">B2B products</span> grow revenue, retention, and scale.
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Product Leader with 9+ years across Fintech, Mobility, Marketplaces, SaaS & E-commerce.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                <a href="#contact">Work with me <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                <a href="#impact">See my work</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Monetisation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
