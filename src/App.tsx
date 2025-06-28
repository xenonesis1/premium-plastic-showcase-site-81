
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
import Upholstery from "./pages/Upholstery";
import Automotive from "./pages/Automotive";
import Shoes from "./pages/Shoes";
import Belts from "./pages/Belts";
import Jackets from "./pages/Jackets";
import OfficeChairs from "./pages/OfficeChairs";
import DiaryCovers from "./pages/DiaryCovers";
import BeanBagChairs from "./pages/BeanBagChairs";
import SportsEquipment from "./pages/SportsEquipment";
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
            <Route path="/upholstery" element={<Upholstery />} />
            <Route path="/automotive" element={<Automotive />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/belts" element={<Belts />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/office-chairs" element={<OfficeChairs />} />
            <Route path="/diary-covers" element={<DiaryCovers />} />
            <Route path="/bean-bag-chairs" element={<BeanBagChairs />} />
            <Route path="/sports-equipment" element={<SportsEquipment />} />
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
