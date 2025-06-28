
import { Book, Sunset, Trees, Zap } from "lucide-react";
import { Navbar } from "../navbar/Navbar";
import { NavbarProps } from "../navbar/types";

// Default navbar configuration with the new logo
const defaultNavbarData: NavbarProps = {
  logo: {
    url: "/",
    src: "/lovable-uploads/a556f86d-7451-4853-9fd8-081a090e5d91.png",
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
          icon: <Book className="size-5 shrink-0 text-blue-600" />,
          url: "/upholstery",
        },
        {
          title: "Automotive",
          description: "High-quality car seat covers and interior solutions",
          icon: <Trees className="size-5 shrink-0 text-red-600" />,
          url: "/automotive",
        },
        {
          title: "Shoes",
          description: "Durable artificial leather for footwear manufacturing",
          icon: <Sunset className="size-5 shrink-0 text-orange-600" />,
          url: "/shoes",
        },
        {
          title: "Belts",
          description: "Premium synthetic leather for belt manufacturing",
          icon: <Zap className="size-5 shrink-0 text-yellow-600" />,
          url: "/belts",
        },
        {
          title: "Jackets",
          description: "Fashion-grade artificial leather for outerwear",
          icon: <Book className="size-5 shrink-0 text-purple-600" />,
          url: "/jackets",
        },
        {
          title: "Office Chairs",
          description: "Professional grade leather for office furniture",
          icon: <Trees className="size-5 shrink-0 text-teal-600" />,
          url: "/office-chairs",
        },
        {
          title: "Diary Covers",
          description: "Elegant leather for stationery applications",
          icon: <Sunset className="size-5 shrink-0 text-pink-600" />,
          url: "/diary-covers",
        },
        {
          title: "Bean Bag Chairs",
          description: "Comfortable synthetic leather for casual furniture",
          icon: <Zap className="size-5 shrink-0 text-indigo-600" />,
          url: "/bean-bag-chairs",
        },
        {
          title: "Sports Equipment",
          description: "Specialized leather for cricket, football & sports gear",
          icon: <Book className="size-5 shrink-0 text-green-600" />,
          url: "/sports-equipment",
        },
      ],
    },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "Custom Solutions",
          description: "Tailored products for specific requirements",
          icon: <Trees className="size-5 shrink-0 text-blue-600" />,
          url: "/contact-us",
        },
        {
          title: "Technical Support",
          description: "Expert consultation and competitive quotes",
          icon: <Book className="size-5 shrink-0 text-purple-600" />,
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
    { name: "Technical Support", url: "/contact-us" },
    { name: "Privacy Policy", url: "#privacy" },
    { name: "Terms of Service", url: "#terms" },
  ],
  auth: {
    login: { text: "Get Quote", url: "/contact-us" },
    signup: { text: "Contact Us", url: "/contact-us" },
  },
};

const Navbar1 = (props: NavbarProps) => {
  const mergedProps = { ...defaultNavbarData, ...props };
  return <Navbar {...mergedProps} />;
};

export { Navbar1 };
