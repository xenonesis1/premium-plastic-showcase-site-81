
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { MenuItem, NavbarProps } from "./types";
import { DesktopMenuItem } from "./DesktopMenuItem";

interface DesktopNavigationProps {
  logo: NavbarProps['logo'];
  menu: MenuItem[];
  auth: NavbarProps['auth'];
}

export const DesktopNavigation = ({ logo, menu, auth }: DesktopNavigationProps) => {
  return (
    <nav className="hidden justify-between lg:flex">
      <div className="flex items-center gap-8">
        <Link to={logo!.url} className="flex items-center gap-3 group">
          <img 
            src={logo!.src} 
            className="w-10 h-10 rounded-lg shadow-md group-hover:shadow-lg transition-shadow" 
            alt={logo!.alt} 
          />
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {logo!.title}
          </span>
        </Link>
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {menu.map((item) => (
                <DesktopMenuItem key={item.title} item={item} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex gap-3">
        <Button asChild variant="outline" size="sm" className="hover:bg-green-50 hover:border-green-300 transition-colors">
          <Link to={auth!.login.url}>{auth!.login.text}</Link>
        </Button>
        <Button asChild size="sm" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-md hover:shadow-lg transition-all">
          <Link to={auth!.signup.url}>{auth!.signup.text}</Link>
        </Button>
      </div>
    </nav>
  );
};
