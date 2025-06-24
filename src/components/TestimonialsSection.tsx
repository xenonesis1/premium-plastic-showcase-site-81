
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "John Richardson",
      handle: "@jrichardson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Premier LeatherCom's PVC leather exceeded our expectations. The quality and durability for our automotive interiors is unmatched.",
  },
  {
    author: {
      name: "Sarah Mitchell",
      handle: "@sarahmitchell",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "We've been using their PVC flooring for our transport fleet for 3 years. Zero complaints - exceptional quality and service.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@michaelchen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Their technical support team helped us find the perfect PVC geomembrane solution. Professional service from start to finish.",
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyrod",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "ISO certified quality shows in every product. Our healthcare facility renovation used their PVC films - excellent results.",
  },
  {
    author: {
      name: "David Thompson",
      handle: "@davidthompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Premier LeatherCom's pool liners transformed our facility. Quality materials and competitive pricing - highly recommended.",
  },
  {
    author: {
      name: "Lisa Wang",
      handle: "@lisawang",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with them since 1992 - consistent quality, innovative products, and excellent customer service every time.",
  }
];

const TestimonialsComponent = () => {
  return (
    <TestimonialsSection
      title="Trusted by Industry Leaders Since 1992"
      description="Join thousands of businesses worldwide who rely on our premium PVC leather and artificial leather products for their critical applications"
      testimonials={testimonials}
    />
  );
};

export default TestimonialsComponent;
