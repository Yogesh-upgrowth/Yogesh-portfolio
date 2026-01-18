import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { Suspense, lazy } from "react";

// Lazy load pages for performance
const Home = lazy(() => import("@/pages/home"));
const Blog = lazy(() => import("@/pages/blog"));
const Linkedin = lazy(() => import("@/pages/linkedin"));
const ContactPage = lazy(() => import("@/pages/contact"));
const Work = lazy(() => import("@/pages/work"));
const BlogPost = lazy(() => import("@/pages/blog-post"));

// Minimal loading fallback
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Suspense fallback={<PageLoader />}><Home /></Suspense>} />
      <Route path="/blog" component={() => <Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
      <Route path="/blog/:slug" component={() => <Suspense fallback={<PageLoader />}><BlogPost /></Suspense>} />
      <Route path="/linkedin" component={() => <Suspense fallback={<PageLoader />}><Linkedin /></Suspense>} />
      <Route path="/contact" component={() => <Suspense fallback={<PageLoader />}><ContactPage /></Suspense>} />
      <Route path="/work" component={() => <Suspense fallback={<PageLoader />}><Work /></Suspense>} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Toaster />
      <Router />
    </>
  );
}

export default App;
