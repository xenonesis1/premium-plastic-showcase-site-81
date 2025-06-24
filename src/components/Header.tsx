
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
      alt: "Premier LeatherCom Logo",
      title: "Premier LeatherCom",
    },
    menu: [
      { title: "Home", url: "/" },
      { title: "About Us", url: "#about" },
      {
        title: "Our Products",
        url: "#",
        items: [
          {
            title: "PVC Flooring",
            description: "Superior flooring solutions for transport industries",
            icon: <Book className="size-5 shrink-0" />,
            url: "/pvc-flooring",
          },
          {
            title: "PVC Leather",
            description: "Artificial leather for automotive & transport",
            icon: <Trees className="size-5 shrink-0" />,
            url: "/pvc-leather",
          },
          {
            title: "PVC Film & Sheeting",
            description: "For automotive, interiors, and healthcare",
            icon: <Sunset className="size-5 shrink-0" />,
            url: "/pvc-film",
          },
          {
            title: "Wallpaper",
            description: "Self adhesive films and decoration wallpapers",
            icon: <Zap className="size-5 shrink-0" />,
            url: "/wallpaper",
          },
          {
            title: "Pool Liners",
            description: "High-quality pool liners and accessories",
            icon: <Book className="size-5 shrink-0" />,
            url: "/pool-liners",
          },
          {
            title: "PVC Geomembrane",
            description: "Underground structure waterproofing solutions",
            icon: <Trees className="size-5 shrink-0" />,
            url: "/pvc-geomembrane",
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
            title: "Industries Served",
            description: "Automotive, transport, construction & more",
            icon: <Sunset className="size-5 shrink-0" />,
            url: "#industries",
          },
          {
            title: "Custom Solutions",
            description: "Tailored products for specific requirements",
            icon: <Trees className="size-5 shrink-0" />,
            url: "#contact",
          },
          {
            title: "Technical Support",
            description: "Expert consultation and competitive quotes",
            icon: <Book className="size-5 shrink-0" />,
            url: "#contact",
          },
        ],
      },
      {
        title: "News & Updates",
        url: "/news-updates",
      },
      {
        title: "Contact",
        url: "#contact",
      },
    ],
    mobileExtraLinks: [
      { name: "Investors", url: "#investors" },
      { name: "Careers", url: "#careers" },
      { name: "Privacy Policy", url: "#privacy" },
      { name: "Terms of Service", url: "#terms" },
    ],
    auth: {
      login: { text: "Get Quote", url: "#contact" },
      signup: { text: "Contact Us", url: "#contact" },
    },
  };

  // Custom navigation handler for the navbar
  const enhancedNavbarData = {
    ...navbarData,
    menu: navbarData.menu.map(item => ({
      ...item,
      items: item.items?.map(subItem => ({
        ...subItem,
        onClick: () => handleNavigation(subItem.url)
      }))
    }))
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📧 info@premierleathercom.com</span>
            <span>📞 +91 89208 31225</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 text-white hover:bg-green-700"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <span className="text-sm">ISO Certified Since 1992</span>
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
