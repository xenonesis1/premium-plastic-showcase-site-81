
import { Link } from "react-router-dom";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./types";

interface DesktopMenuItemProps {
  item: MenuItem;
}

export const DesktopMenuItem = ({ item }: DesktopMenuItemProps) => {
  if (item.items) {
    return (
      <NavigationMenuItem className="text-muted-foreground">
        <NavigationMenuTrigger className="hover:bg-green-50 hover:text-green-700 transition-colors font-medium">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-72 p-3 bg-white/95 backdrop-blur-lg border border-gray-100 shadow-xl rounded-xl">
            <NavigationMenuLink>
              <div className="grid gap-1">
                {item.items.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      className="flex select-none gap-3 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:shadow-md group"
                      to={subItem.url}
                    >
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                        {subItem.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <p className="text-xs leading-relaxed text-muted-foreground group-hover:text-gray-600 transition-colors mt-1">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </div>
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-green-50 hover:text-green-700 hover:shadow-sm"
      to={item.url}
    >
      {item.title}
    </Link>
  );
};
