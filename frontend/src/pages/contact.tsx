import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/Contact";
import { Seo, breadcrumbSchema } from "@/lib/seo";

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title="Contact | Hire Yogesh Yadav for Product Growth & Monetisation"
        description="Get in touch with Yogesh Yadav for product growth, monetisation, SEO strategy and fintech advisory engagements. Response within 24 hours."
        path="/contact"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-20 md:pt-24">
        {/* Desktop Header */}
        <div className="hidden md:block container px-4 mx-auto text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 leading-tight">Hire a Product Growth &amp; Monetisation Consultant</h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell me what you’re building. Let’s see if I can help you scale it.
            </p>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden px-4 mb-4">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-10 translate-x-10" />
            <h1 className="text-3xl font-serif font-bold mb-3 leading-tight relative">
              Let's Scale<br/>Your Product
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed relative">
              Tell me what you're building. I usually respond within 24 hours.
            </p>
          </div>
        </div>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
