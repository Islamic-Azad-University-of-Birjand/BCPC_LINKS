import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink} from "react-router";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
const router = [
  {
    title : <img src="https://api.iconify.design/lineicons:baloon.svg" />,
    path :"/" 
  },
  {
    title : "Log",
    path :"/log" 
  },
  {
    title : "Contact",
    path : "/contact"
  }
]

const  Navbar = () => {
return (
<NavigationMenu className="mx-2 gap-2">
  <NavigationMenuList>
        {router.map((item,index : number) => 
    <NavigationMenuItem key={index}>
      <NavLink to={item.path}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
      </NavLink>
    </NavigationMenuItem>
     )}
  </NavigationMenuList>
</NavigationMenu>
)}

export default Navbar;
