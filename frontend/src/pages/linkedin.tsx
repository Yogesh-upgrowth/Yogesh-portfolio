import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Linkedin as LinkedinIcon, ArrowRight } from "lucide-react";

export default function Linkedin() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-grow flex items-center justify-center py-16 md:py-24 px-4">
        <div className="max-w-2xl w-full text-center space-y-6 md:space-y-8">
          <div className="h-16 w-16 md:h-20 md:w-20 bg-[#0077b5]/10 text-[#0077b5] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <LinkedinIcon className="h-8 w-8 md:h-10 md:w-10" />
          </div>
          
          <h1 className="text-3xl md:text-6xl font-serif font-bold tracking-tight">
            Connect on LinkedIn
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            I share practical product, growth, and monetisation insights on LinkedIn. Join the conversation and follow my latest breakdowns.
          </p>

          <div className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-base md:text-lg rounded-full bg-[#0077b5] hover:bg-[#0077b5]/90 w-full sm:w-auto" asChild>
              <a href="https://www.linkedin.com/in/yogesh-productmanager/" target="_blank" rel="noopener noreferrer">
                Follow Yogesh Yadav <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-base md:text-lg rounded-full w-full sm:w-auto" asChild>
              <a href="/">Back to Website</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left mt-12 md:mt-16 pt-12 md:pt-16 border-t border-border">
            <div className="space-y-2">
              <h3 className="font-bold">Product Breakdowns</h3>
              <p className="text-sm text-muted-foreground">Deep dives into how top companies grow.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Growth Lessons</h3>
              <p className="text-sm text-muted-foreground">Tactical advice on reducing CAC and increasing LTV.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Leadership Insights</h3>
              <p className="text-sm text-muted-foreground">Building and managing high-performance product teams.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
