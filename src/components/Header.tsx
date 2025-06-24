
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "News & Updates", href: "/news-updates" },
    { name: "Investors", href: "#investors" },
    { name: "Contact Us", href: "#contact" },
  ];

  const productItems = [
    { name: "Range of PVC Flooring", href: "/pvc-flooring" },
    { name: "PVC Leather", href: "/pvc-leather" },
    { name: "PVC Film & Sheeting", href: "/pvc-film" },
    { name: "Walltastic Vinyl Wallpaper", href: "/wallpaper" },
    { name: "Swimming Pool Liners", href: "/pool-liners" },
    { name: "AQUALINING PVC Geomembrane", href: "/pvc-geomembrane" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📧 premierpoly@premierpoly.com</span>
            <span>📞 +91 89208 31225</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✓</span>
            <span>📧</span>
            <span>🔔</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate("/")}
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  PREMIER POLYFILM LTD
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}

              {/* Products Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200">
                      Our Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                        <div className="space-y-2">
                          {productItems.map((product) => (
                            <button
                              key={product.name}
                              onClick={() => handleNavigation(product.href)}
                              className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 rounded-md transition-colors duration-200"
                            >
                              {product.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Button className="bg-green-600 hover:bg-green-700 text-white">
                🔍
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="text-left text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Our Products</h4>
                  {productItems.map((product) => (
                    <button
                      key={product.name}
                      onClick={() => handleNavigation(product.href)}
                      className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 py-1 pl-4 text-sm transition-colors duration-200"
                    >
                      {product.name}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;
