import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { imageUpload } from "../../api/utils";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const { loading, setLoading, createUser, setUser, updateUserProfile } =
    useAuth();
  const location = useLocation();
  const from = location?.state || "/";
  const navigate = useNavigate();

  // Registration
  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const profilePhoto = form.profilePhoto.files[0];
    const userType = form.userType.value;
    const password = form.password.value;

    let image_url = "";
    if (profilePhoto) {
      // Only upload the image if a file is provided
      try {
        image_url = await imageUpload(profilePhoto);
      } catch (err) {
        console.error("Image upload failed:", err.message);
        toast.error("Failed to upload profile photo.");
        return;
      }
    }

    const userInfo = {
      name,
      email,
      profilePhoto: image_url,
      userType,
    };

    try {
      setLoading(true);

      // Sign up
      const result = await createUser(email, password);
      // Update profile
      await updateUserProfile(name, image_url);
      toast.success("Registration successful");
      navigate(from);
    } catch (err) {
      toast.error(err?.message || "Registration failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Registration | QuickDrop</title>
      </Helmet>
      <section className="max-w-[1240px] h-[100vh] flex items-center justify-center mx-auto px-6 sm:px-5 lg:px-4">
        <div className="border dark:border-gray-500 rounded-md shadow-xs w-[450px] mx-auto ">
          <div className="px-4">
            <div className="mt-6">
              <div>
                <img src={Logo} alt="" className="h-12 w-12 mx-auto" />
              </div>

              <h2 className="text-[1.2rem] font-semibold mx-auto text-center">
                Get Started
              </h2>
            </div>
            <form
              onSubmit={handleRegistration}
              className="flex flex-col gap-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="quickdrop"
                  className="ps-2 py-3 border-2 rounded-md w-full mt-1 focus:outline-none focus:ring-2 dark:bg-darkBg dark:border-gray-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="hello@quickdrop.com"
                  className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 dark:bg-darkBg dark:border-gray-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2/3">
                  <label htmlFor="profilePhoto" className="text-sm">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    name="profilePhoto"
                    id="profilePhoto"
                    accept="image/*"
                    className="file-input file-input-bordered file-input-md focus:outline-none focus:ring-2 outline-none dark:bg-darkBg dark:border-gray-500 focus:border-transparent  ps-2 py-3 border rounded-md w-full mt-1"
                  />
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="userType"
                    className="block text-sm font-medium"
                  >
                    Type
                  </label>
                  <select
                    name="userType"
                    id="userType"
                    className="select bg-gray-50 text-gray-700 ps-2 py-3.5 border border-gray-300 rounded-md w-full mt-1.5 shadow-sm focus:outline-none focus:ring-2 dark:bg-darkBg dark:border-gray-500 focus:border-transparent hover:bg-gray-100 transition-colors dark:text-darkText"
                    defaultValue={"select"}
                  >
                    <option value="select" disabled>
                      Select
                    </option>
                    <option value="user">User</option>
                    <option value="deliveryMan">Delivery Man</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    name="password"
                    className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 dark:bg-darkBg dark:text-darkText dark:border-gray-500 focus:border-transparent block"
                  />
                  <div
                    className="absolute right-3 top-[28%] cursor-pointer"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <IoMdEye className="text-xl" />
                    ) : (
                      <IoMdEyeOff className="text-xl" />
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-gray-800 text-darkText  dark:border-gray-500 dark:bg-primary dark:text-darkText rounded-md w-full py-3 h-[48px] border"
              >
                Register
              </button>
            </form>
            <h4 className="my-4 text-center text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#1a32cb] hover:underline hover:underline-offset-2 dark:text-darkText dark:underline dark:underline-offset-2 "
              >
                Login
              </Link>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
