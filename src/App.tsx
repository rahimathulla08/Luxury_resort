// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { siteData } from "@/config/siteData";
import Index from "./pages/Index";
import About from "./pages/About";
// import Rooms from "./pages/Rooms";
import Amenities from "./pages/Amenities";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Scroll } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

// Update document title based on siteData
document.title = siteData.seo.title;

// Update meta description
const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  metaDescription.setAttribute("content", siteData.seo.description);
} else {
  const meta = document.createElement("meta");
  meta.name = "description";
  meta.content = siteData.seo.description;
  document.head.appendChild(meta);
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <Toaster /> */}
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/rooms" element={<Rooms />} /> */}
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
