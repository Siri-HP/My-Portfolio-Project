import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="w-full px-6 py-0 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
      <div className="w-full flex items-center justify-between px-8 py-4">
        <Link to="/" className="text-2xl font-bold text-teal-600">
          Siri<span className="text-gray-900">Dev</span>
        </Link>

        <NavigationMenuList className="flex gap-3 items-center ">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/about">About Me</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/skill">Skills</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/contact">Contact Me</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* CTA Button */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a
                href="https://drive.google.com/file/d/1fWVbB36oTEnmZPZW4Gyf2pqCs4wtfw4h/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 rounded-full bg-teal-600 px-5 py-2 text-white font-semibold hover:bg-teal-700 transition"
              >
                DOWNLOAD RESUME
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
