import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useMutation } from "react-query";
import { toastOptions } from "@/config/Toastify";
import { toast } from "react-toastify";
import { logoutUser } from "@/http/authApi";
import { logout } from "@/store/authSlice";

const Navbar = () => {

  const { isAuthenticated, user } = useSelector((state) => state.auth);
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
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CALAMITIQ
          </span>

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
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Button variant="secondary">{user}</Button>
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
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to='/'
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Affected areas
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  weather forecast
                </Link>
              </li>
              <li>
                <Link
                  to='/disaster-map'
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Disaster Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
