
import {
  Pen,
  PaintBucket,
  Home,
  Ruler,
  PenTool,
  Building2,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react"

export const services = [
  {
    icon: <Pen className="w-5 h-5 sm:w-6 sm:h-6" />,
    secondaryIcon: <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
    title: "PVC Flooring",
    description:
      "Superior flooring solutions for bus transport, metros, auto and rail applications. Heavy-duty, anti-slip, and fire-resistant materials designed for high-traffic environments.",
    position: "left" as const,
  },
  {
    icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
    secondaryIcon: <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
    title: "PVC Leather",
    description:
      "Premium artificial leather for automotive and transport industries. UV resistant, easy to clean, and available in various textures and colors for seating solutions.",
    position: "left" as const,
  },
  {
    icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
    secondaryIcon: <Star className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
    title: "PVC Film & Sheeting",
    description:
      "Specialized films for automotive, interiors, and healthcare applications. Medical grade, flexible, and chemical resistant materials for various industrial uses.",
    position: "left" as const,
  },
  {
    icon: <PaintBucket className="w-5 h-5 sm:w-6 sm:h-6" />,
    secondaryIcon: <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
    title: "Wallpaper Solutions",
    description:
      "Self-adhesive films for car wrapping, exterior and interior decoration. Weather-resistant, bubble-free application, and removable adhesive options.",
    position: "right" as const,
  },
  {
    icon: <Ruler className="w-5 h-5 sm:w-6 sm:h-6" />,
    secondaryIcon: <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
    title: "Pool Liners",
    description:
      "Premium pool liners and water feature solutions. UV resistant, chemical resistant, leak-proof materials for residential and commercial swimming pools.",
    position: "right" as const,
  },
  {
    icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    secondaryIcon: <Star className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
    title: "PVC Geomembrane",
    description:
      "Underground structure waterproofing solutions. Heavy-duty membranes for foundation protection, root resistant, and puncture-proof materials.",
    position: "right" as const,
  },
]
