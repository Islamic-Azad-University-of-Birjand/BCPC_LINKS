import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import router from "@/router";

const Navbar = () => {
  return (
    <NavigationMenu className="mx-2 gap-2">
      <NavigationMenuList>
        {router.map((item, index: number) => (
          <NavigationMenuItem key={index}>
            <NavLink to={item ? item.path : ""}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
