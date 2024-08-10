import React from "react";
import { Link } from "react-router-dom";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              to="/"
              className="text-foreground transition-colors hover:text-foreground"
            >
              CALAMITIQ
            </Link>
            <Link
              to="#"
              className="text-foreground transition-colors hover:text-foreground"
            >
              News
            </Link>
            <Link
              to="/disaster-map"
              className="text-foreground transition-colors hover:text-foreground"
            >
              DisasterMap
            </Link>
            <Link
              to="#"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Community
            </Link>
            <Link
              to="/weather"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Weather
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link to="/" className="hover:text-foreground">
                  CALAMITIQ
                </Link>
                <Link to="#" className="hover:text-foreground">
                  News
                </Link>
                <Link to="/disaster-map" className="hover:text-foreground">
                  DisasterMap
                </Link>
                <Link to="#" className="hover:text-foreground">
                  Community
                </Link>
                <Link to="/weather" className="hover:text-foreground">
                  Weather
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative"></div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
