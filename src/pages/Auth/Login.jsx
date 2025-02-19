import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Google from "../../assets/images/google.png";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const { signInWithGoogle, user, signIn, setLoading, resetPassword } =
    useAuth();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  console.log(user);
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate("/");
      toast.success("Logged in successfully");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      let existingUser;
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/${user.email}`
        );
        existingUser = res.data;
      } catch (err) {
        if (err.response?.status === 404) {
          existingUser = null;
        } else {
          throw err;
        }
      }

      if (!existingUser) {
        const newUserInfo = {
          email: user.email,
          name: user.displayName,
          profilePhoto: user.photoURL,
          role: "User",
          status: "Verified",
        };

        await axios.put(`${import.meta.env.VITE_API_URL}/user`, newUserInfo);
      }

      navigate("/");
      toast.success("Logged in successfully");
    } catch (err) {
      console.error("Google sign-in failed:", err?.message);
      toast.error("Google sign-in failed. Please try again.");
    }
  };

  const handleResetPassword = async (e) => {
    if (!email) return toast.error("Please write your email first!");
    try {
      await resetPassword(email);
      toast.success("Request success. Please check your email...");
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | QuickDrop</title>
      </Helmet>
      <section className="max-w-[1240px] h-[100vh] flex justify-center items-center mx-auto px-6 sm:px-5 lg:px-4 ">
        <div className="border dark:border-gray-500 rounded-md shadow-xs w-[450px]">
          <div className="px-4 w-full">
            <div className="my-2 relative">
              <Link
                to="/"
                className="my-6 text-white font-semibold rounded-full bg-gray-600 dark:bg-primary flex items-center justify-center p-1 w-fit absolute top-0 left-0"
              >
                <IoMdArrowBack className="inline text-xl " />
              </Link>
              <div className="mt-6">
                <img src={Logo} alt="" className="h-12 w-12 mx-auto" />
              </div>
              <div className="flex flex-col justify-center items-center mb-6">
                <h2 className="text-[1.2rem] font-semibold">Welcome Back</h2>
                <p className="text-gray-600 dark:text-darkText text-sm">
                  Please enter your details to login
                </p>
              </div>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onBlur={(e) => setEmail(e.target.value)}
                  placeholder="hello@quickdrop.com"
                  className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2  focus:border-transparent dark:bg-darkBg dark:border-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    name="password"
                    className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 dark:bg-darkBg dark:border-gray-500 focus:border-transparent block"
                  />
                  <div
                    className="absolute right-4 top-[28%] cursor-pointer"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <IoMdEye className="text-2xl" />
                    ) : (
                      <IoMdEyeOff className="text-2xl" />
                    )}
                  </div>
                </div>
              </div>

              <span
                onClick={handleResetPassword}
                className="text-[#1a32cb] dark:text-darkText text-sm hover:underline hover:underline-offset-2 dark:underline dark:underline-offset-2"
              >
                Forgot password?
              </span>
              <button
                type="submit"
                className="bg-gray-800  text-darkText rounded-md w-full py-3 h-[48px]  dark:bg-primary dark:text-darkText"
              >
                Login
              </button>
            </form>
            <div className="flex items-center my-2">
              <hr className="flex-grow border-t border-gray-400" />
              <span className="px-4 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-400" />
            </div>
            <button
              type="submit"
              onClick={handleGoogleSignIn}
              className="bg-trasparent dark:border-gray-500 rounded-md w-full py-3 h-[48px] border border-gray-800 shadow-none"
            >
              <img src={Google} alt="" className="h-6 w-6 inline" />{" "}
              <span className="uppercase ms-2 dark:text-darkText text-normal text-sm text-gray-800">
                Sign in via google
              </span>
            </button>
            <h4 className="my-4 text-center text-sm">
              Don't have an account?{" "}
              <Link
                to="/registration"
                className="text-[#1a32cb] dark:text-darkText dark:underline  dark:underline-offset-2 hover:underline hover:underline-offset-2"
              >
                Register
              </Link>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
