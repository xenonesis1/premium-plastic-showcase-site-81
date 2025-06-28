
import { Link } from "react-router-dom";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { MenuItem } from "./types";

interface MobileMenuItemProps {
  item: MenuItem;
}

export const MobileMenuItem = ({ item }: MobileMenuItemProps) => {
  if (item.items) {
    return (
      <AccordionItem value={item.title} className="border-b-0">
        <AccordionTrigger className="py-3 font-semibold hover:no-underline hover:text-green-600 transition-colors">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          <div className="grid gap-2">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                className="flex select-none gap-4 rounded-lg p-3 leading-none outline-none transition-all hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 group"
                to={subItem.url}
              >
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                  {subItem.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold group-hover:text-green-700 transition-colors">
                    {subItem.title}
                  </div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-muted-foreground group-hover:text-gray-600 transition-colors mt-1">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link 
      to={item.url} 
      className="font-semibold py-2 hover:text-green-600 transition-colors"
    >
      {item.title}
    </Link>
  );
};
