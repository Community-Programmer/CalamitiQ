import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { loginUser } from "@/http/authApi";
import { toast } from "react-toastify";
import { toastOptions } from "@/config/Toastify";
import { login } from "@/store/authSlice";


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  const loginmutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      dispatch(login(res.data))
      toast.success("Login Successful", toastOptions);
      navigate('/')
    },
    onError: (error) => {
      const errResponse = error.response?.data;
      console.log(errResponse)
      toast.error(errResponse.message, toastOptions);
    },
  });

  const handleLogin = async() =>{
    loginmutation.mutate(credentials);
  }


  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mail@company.domain"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" onClick={handleLogin}>
                Login
              </Button>
              <Button variant="outline" className="w-full gap-3">
                <FaGoogle />
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="#" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="https://drive.drii.org/wp-content/uploads/sites/2/2019/08/World-Flood.jpg"
            alt="Image showing a pictorial representation of the interactive learing"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default Login;