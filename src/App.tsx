
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PVCFlooring from "./pages/PVCFlooring";
import PVCLeather from "./pages/PVCLeather";
import PVCFilm from "./pages/PVCFilm";
import Wallpaper from "./pages/Wallpaper";
import PoolLiners from "./pages/PoolLiners";
import PVCGeomembrane from "./pages/PVCGeomembrane";
import NewsUpdates from "./pages/NewsUpdates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/pvc-flooring" element={<PVCFlooring />} />
            <Route path="/pvc-leather" element={<PVCLeather />} />
            <Route path="/pvc-film" element={<PVCFilm />} />
            <Route path="/wallpaper" element={<Wallpaper />} />
            <Route path="/pool-liners" element={<PoolLiners />} />
            <Route path="/pvc-geomembrane" element={<PVCGeomembrane />} />
            <Route path="/news-updates" element={<NewsUpdates />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
