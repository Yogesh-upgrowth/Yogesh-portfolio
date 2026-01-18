import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Lazy load pages for performance
const Home = lazy(() => import("@/pages/home"));
const Blog = lazy(() => import("@/pages/blog"));
const Linkedin = lazy(() => import("@/pages/linkedin"));
const ContactPage = lazy(() => import("@/pages/contact"));
const Work = lazy(() => import("@/pages/work"));

// Loading fallback
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Suspense fallback={<PageLoader />}><Home /></Suspense>} />
      <Route path="/blog" component={() => <Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
      <Route path="/linkedin" component={() => <Suspense fallback={<PageLoader />}><Linkedin /></Suspense>} />
      <Route path="/contact" component={() => <Suspense fallback={<PageLoader />}><ContactPage /></Suspense>} />
      <Route path="/work" component={() => <Suspense fallback={<PageLoader />}><Work /></Suspense>} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
