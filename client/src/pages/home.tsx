import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import Clients from "@/components/sections/Clients";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <Impact />
        <Clients />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
