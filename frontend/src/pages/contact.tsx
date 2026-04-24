import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container px-4 mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Talk</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell me what you’re building. Let’s see if I can help you scale it.
            </p>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
