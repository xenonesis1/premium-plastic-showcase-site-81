
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion } from "@/components/ui/accordion";
import { MenuItem, NavbarProps } from "./types";
import { MobileMenuItem } from "./MobileMenuItem";

interface MobileNavigationProps {
  logo: NavbarProps['logo'];
  menu: MenuItem[];
  mobileExtraLinks: NavbarProps['mobileExtraLinks'];
  auth: NavbarProps['auth'];
}

export const MobileNavigation = ({ logo, menu, mobileExtraLinks, auth }: MobileNavigationProps) => {
  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-between">
        <Link to={logo!.url} className="flex items-center gap-3">
          <img 
            src={logo!.src} 
            className="w-8 h-8 rounded-lg shadow-md" 
            alt={logo!.alt} 
          />
          <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {logo!.title}
          </span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="hover:bg-green-50 transition-colors">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto bg-white/95 backdrop-blur-lg">
            <SheetHeader>
              <SheetTitle>
                <Link to={logo!.url} className="flex items-center gap-3">
                  <img 
                    src={logo!.src} 
                    className="w-8 h-8 rounded-lg shadow-md" 
                    alt={logo!.alt} 
                  />
                  <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {logo!.title}
                  </span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="my-8 flex flex-col gap-6">
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4"
              >
                {menu.map((item) => (
                  <MobileMenuItem key={item.title} item={item} />
                ))}
              </Accordion>
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-2">
                  {mobileExtraLinks!.map((link, idx) => (
                    <Link
                      key={idx}
                      className="inline-flex h-12 items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-green-50 hover:text-green-600"
                      to={link.url}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild variant="outline" className="hover:bg-green-50 hover:border-green-300 transition-colors">
                  <Link to={auth!.login.url}>{auth!.login.text}</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                  <Link to={auth!.signup.url}>{auth!.signup.text}</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
