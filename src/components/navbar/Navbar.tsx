
import { NavbarProps } from "./types";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

const defaultProps: NavbarProps = {
  logo: {
    url: "/",
    src: "/lovable-uploads/a556f86d-7451-4853-9fd8-081a090e5d91.png",
    alt: "ToptexVinyl Logo",
    title: "ToptexVinyl",
  },
  menu: [],
  mobileExtraLinks: [],
  auth: {
    login: { text: "Get Quote", url: "/contact-us" },
    signup: { text: "Contact Us", url: "/contact-us" },
  },
};

export const Navbar = (props: NavbarProps) => {
  const mergedProps = { ...defaultProps, ...props };
  
  return (
    <section className="py-4">
      <div className="container">
        <DesktopNavigation
          logo={mergedProps.logo}
          menu={mergedProps.menu!}
          auth={mergedProps.auth}
        />
        <MobileNavigation
          logo={mergedProps.logo}
          menu={mergedProps.menu!}
          mobileExtraLinks={mergedProps.mobileExtraLinks}
          auth={mergedProps.auth}
        />
      </div>
    </section>
  );
};
