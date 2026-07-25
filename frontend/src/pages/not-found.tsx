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
        <Card className="w-full max-w-md mx-auto shadow-sm border-border bg-card">
          <CardContent className="pt-8 md:pt-10 pb-8 text-center flex flex-col items-center">
            <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="h-8 w-8 text-muted-foreground" />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-serif font-bold mb-3">Page Not Found</h1>
            <p className="text-sm md:text-base text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Button asChild className="rounded-full px-8 h-12 w-full sm:w-auto">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
