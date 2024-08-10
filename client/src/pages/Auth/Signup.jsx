import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { signupuser } from "@/http/authApi";
import { toastOptions } from "@/config/Toastify";
import { toast } from "react-toastify";


const Signup= () => {

  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    userDetails: { name: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setcredentials({
        ...credentials,
        userDetails: { ...credentials.userDetails, name: value },
      });
    } else {
      setcredentials({ ...credentials, [name]: value });
    }
  };


  const signUpmutation = useMutation({
    mutationFn: signupuser,
    onSuccess: (res) => {
      console.log(res.data);
      toast.success("Signup Successful", toastOptions);
      toast.info("Please login with your credentials",toastOptions)
      navigate("/login");
    },
    onError: (error) => {
      const errResponse = error.response?.data;
      toast.error(errResponse.message, toastOptions);
    },
  });

  const handleSignup = async () => {
    signUpmutation.mutate(credentials);
  };

  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Connect with us</h1>
              <p className="text-balance text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="Name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John"
                  value={credentials.userDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" onClick={handleSignup}>
                Create account
              </Button>
              <Button variant="outline" className="w-full gap-3">
                <FaGoogle />
                Continue with Google
              </Button>
              <p className="text-balance text-muted-foreground ">
                By clicking continue, you agree to our{" "}
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Privacy Policy
                </Link>
              </p>
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

export default Signup;