import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

// Lazy load below-the-fold sections
const Trust = lazy(() => import("@/components/sections/Trust"));
const TrustStack = lazy(() => import("@/components/sections/TrustStack"));
const Impact = lazy(() => import("@/components/sections/Impact"));
const Clients = lazy(() => import("@/components/sections/Clients"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const Contact = lazy(() => import("@/components/sections/Contact"));

// Minimal section loading placeholder
function SectionLoader() {
  return <div className="py-16" />;
}

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Trust />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TrustStack />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Impact />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
