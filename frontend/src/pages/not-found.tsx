import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4 mt-16">
        <div className="w-full max-w-md mx-auto text-center flex flex-col items-center">
          <div className="h-20 w-20 bg-muted/50 rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="h-10 w-10 text-muted-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">404</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Button asChild className="rounded-full px-8 h-12 w-full sm:w-auto">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
