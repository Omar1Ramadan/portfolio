"use client"

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const menuTitles = [
    { 
        path : "/", 
        title: " Home",
        content:
            "Learn More About Me",  
    },
    { 
        path : "/work", 
        title: " Work", 
        content: 
            "Look At What Im Passionate About"
    },
    { 
        path : "/about", 
        title: "About",
        content:
            "Want To Know More About What Makes Me Tick?"
    },
    { 
        path : "/contact", 
        title: "Contact",
        content:
            "Contact Me In Any Form Listed"
    },
    { 
        path : "/futureprojects", 
        title: "Projects", 
        content: 
            "What I'm Interested In The Coming Future"
    }
];
const NavMenu = () => {
    return(
        <NavigationMenu className="h-16 p-5 border-double">
            <div className="flex bg-gradient-to-r from-primary from-95% to-white to-5% opacity-95 rounded items-center justify-center">
                <NavigationMenuList className = "grid gap-20 p-7">
                    {menuTitles.map( (link) =>
                        <NavigationMenuItem className="flex items-center bg-secondary hover:opacity-85 rounded-s-sm text-white justify-center">
                            <Link href = {link.path} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {link.title}
                                </NavigationMenuLink>
                            </Link>       
                        </NavigationMenuItem>
                    )}
                </NavigationMenuList>
            </div>
        </NavigationMenu>
    )
}

export default NavMenu;


