
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary-700">
            Slynk
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/courses">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Browse
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {isLoggedIn && (
                <>
                  <NavigationMenuItem>
                    <Link to="/create">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Create
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/profile">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Dashboard
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="search"
              placeholder="Search for notes, skills..."
              className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Link to="/profile">
              <Button variant="ghost" className="text-sm">
                My Account
              </Button>
            </Link>
          ) : (
            <Link to="/auth">
              <Button className="bg-primary-600 hover:bg-primary-700">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
