
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Book, Trees, Sunset, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { Navbar1 } from "@/components/ui/navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  const navbarData = {
    logo: {
      url: "/",
      src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      alt: "ToptexVinyl Logo",
      title: "ToptexVinyl",
    },
    menu: [
      { title: "Home", url: "/" },
      { title: "About Us", url: "/about-us" },
      {
        title: "Our Products",
        url: "#",
        items: [
          {
            title: "Upholstery",
            description: "Premium artificial leather for sofas and chairs",
            icon: <Book className="size-5 shrink-0" />,
            url: "/upholstery",
          },
          {
            title: "Automotive",
            description: "High-quality car seat covers and interior solutions",
            icon: <Trees className="size-5 shrink-0" />,
            url: "/automotive",
          },
          {
            title: "Shoes",
            description: "Durable artificial leather for footwear manufacturing",
            icon: <Sunset className="size-5 shrink-0" />,
            url: "/shoes",
          },
          {
            title: "Belts",
            description: "Premium synthetic leather for belt manufacturing",
            icon: <Zap className="size-5 shrink-0" />,
            url: "/belts",
          },
          {
            title: "Jackets",
            description: "Fashion-grade artificial leather for outerwear",
            icon: <Book className="size-5 shrink-0" />,
            url: "/jackets",
          },
          {
            title: "Office Chairs",
            description: "Professional grade leather for office furniture",
            icon: <Trees className="size-5 shrink-0" />,
            url: "/office-chairs",
          },
          {
            title: "Diary Covers",
            description: "Elegant leather for stationery applications",
            icon: <Sunset className="size-5 shrink-0" />,
            url: "/diary-covers",
          },
          {
            title: "Bean Bag Chairs",
            description: "Comfortable synthetic leather for casual furniture",
            icon: <Zap className="size-5 shrink-0" />,
            url: "/bean-bag-chairs",
          },
          {
            title: "Sports Equipment",
            description: "Specialized leather for cricket, football & sports gear",
            icon: <Book className="size-5 shrink-0" />,
            url: "/sports-equipment",
          },
        ],
      },
      {
        title: "Services",
        url: "#",
        items: [
          {
            title: "Quality Assurance",
            description: "ISO certified quality management systems",
            icon: <Zap className="size-5 shrink-0" />,
            url: "#quality",
          },
          {
            title: "Custom Solutions",
            description: "Tailored products for specific requirements",
            icon: <Trees className="size-5 shrink-0" />,
            url: "/contact-us",
          },
          {
            title: "Technical Support",
            description: "Expert consultation and competitive quotes",
            icon: <Book className="size-5 shrink-0" />,
            url: "/contact-us",
          },
        ],
      },
      {
        title: "News & Updates",
        url: "/news-updates",
      },
      {
        title: "Contact",
        url: "/contact-us",
      },
    ],
    mobileExtraLinks: [
      { name: "Investors", url: "#investors" },
      { name: "Careers", url: "#careers" },
      { name: "Privacy Policy", url: "#privacy" },
      { name: "Terms of Service", url: "#terms" },
    ],
    auth: {
      login: { text: "Get Quote", url: "/contact-us" },
      signup: { text: "Contact Us", url: "/contact-us" },
    },
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-600 text-white text-xs sm:text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <span className="flex items-center gap-1">📧 contact@toptexvinyl.com</span>
            <span className="flex items-center gap-1">📞 +91 9810765284</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:bg-green-700"
            >
              <Sun className="h-3 w-3 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-3 w-3 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <span className="text-xs sm:text-sm whitespace-nowrap">ISO Certified Since 1992</span>
          </div>
        </div>
      </div>

      {/* Main Header with New Navbar */}
      <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar1 {...navbarData} />
        </motion.div>
      </header>
    </>
  );
};

export default Header;
