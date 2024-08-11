import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useMutation } from "react-query";
import { toastOptions } from "@/config/Toastify";
import { toast } from "react-toastify";
import { logoutUser } from "@/http/authApi";
import { logout } from "@/store/authSlice";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const { isAuthenticated, user, profileUrl, role } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutmutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      toast.success("Logout Successful", toastOptions);
      dispatch(logout());
      navigate("/");
    },
    onError: (error) => {
      const errResponse = error.response?.data;
      toast.error(errResponse.message, toastOptions);
    },
  });

  const handleLogout = () => {
    logoutmutation.mutate();
  };

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
              to="/news"
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
              to="/community"
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
            <Link
              to="/preparedness-guide"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Preparedness
            </Link>
            <Link to="/rssfeed-24hr" className="hover:text-foreground">
              Natural Disaster - Live feed
            </Link>
            <Link to="/donation" className="hover:text-foreground">
              Donation
            </Link>
            <Link to="/add-disaster" className="hover:text-foreground">
              create alerts
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
                <Link to="/news" className="hover:text-foreground">
                  News
                </Link>
                <Link to="/disaster-map" className="hover:text-foreground">
                  DisasterMap
                </Link>
                <Link to="/community" className="hover:text-foreground">
                  Community
                </Link>
                <Link to="/weather" className="hover:text-foreground">
                  Weather
                </Link>
                <Link to="/rssfeed-24hr" className="hover:text-foreground">
                  Natural Disaster - Live feed
                </Link>
                <Link to="/donation" className="hover:text-foreground">
              Donation
                </Link>
                <Link to="/add-disaster" className="hover:text-foreground">
                  create alerts
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            {!isAuthenticated ? (
              <div className="ml-auto flex-1 sm:flex-initial">
                <div className="flex gap-3 relative">
                  <Link to="/signup">
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-auto gap-1.5 text-sm"
                    >
                      Sign Up
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-auto gap-1.5 text-sm"
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex gap-1">
                    <Avatar>
                      <AvatarImage src={profileUrl} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Button variant="secondary">{user} - {role}</Button>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
