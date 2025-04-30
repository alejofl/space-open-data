import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Link } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/">Launches</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/astronauts">Astronauts</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/timeline">Mission Timeline</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Dialog>
          <DialogTrigger asChild>
            <NavigationMenuLink asChild>
              <Info className="size-8"/>
            </NavigationMenuLink>
          </DialogTrigger>
          <DialogContent className="bold-anchors">
            <DialogHeader>
              <DialogTitle>About Us</DialogTitle>
              <DialogDescription>
                Space Open Data is a project carried out in an academic environment, as part of the curriculum of <strong>Data Ethics & Open Data</strong> from <a href="https://www.technikum-wien.at/en/" target="_blank">University of Applied Sciences Technikum Wien (UASTW)</a>.
              </DialogDescription>
            </DialogHeader>
            <p>
              All content in this project is licensed under the <a href="https://opensource.org/license/mit" target="_blank">MIT License</a>.
            </p>
            <p>
              The data used in this project is sourced from <a href="https://thespacedevs.com/llapi" target="_blank">TheSpaceDevs</a> and <a href="https://www.kaggle.com/datasets/agirlcoding/all-space-missions-from-1957/data" target="_blank">Kaggle</a>. All of the data is publicly available and can be accessed through their respective APIs.
            </p>
            <p>
              The background image used in this project is sourced from <a href="https://wall.alphacoders.com/big.php?i=106826" target="_blank">DUBSTEP (Alpha Coders)</a>.
            </p>
            <p>
              The project was developed using <a href="https://react.dev/" target="_blank">React</a>, <a href="https://ui.shadcn.com/" target="_blank">ShadCN</a> and <a href="https://www.tailwindcss.com/" target="_blank">Tailwind CSS</a>. The icons used in this project are sourced from <a href="https://lucide.dev/" target="_blank">Lucide</a>.
            </p>
            <p>
              The project is developed by <a href="https://github.com/alejofl" target="_blank">Alejo Flores Lucey</a>, <a href="https://github.com/FabianLonden" target="_blank">Fabian Londen</a> and <a href="https://github.com/ludigon" target="_blank">Lucia Digon</a>.
            </p>
          </DialogContent>
        </Dialog>
        
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
