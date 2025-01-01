import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/logo.png";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import defaultImg from "../../assets/images/default.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { user, logOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b border-gray-200 pb-2">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-4 lg:px-2 mt-2.5">
        <nav className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <img src={Logo} alt="Logo" className="h-14 w-14" />
              <h1 className="font-pacifico text-lg hidden lg:flex tracking-wide ">
                Quick Drop
              </h1>
            </div>
            <h1 className="font-pacifico text-xl lg:hidden  tracking-wide ">
              Quick Drop
            </h1>
            {/* Desktop Menu */}
            <ul className=" font-raleway flex items-center gap-x-2 text-sm">
              <li className="hidden lg:flex py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
                <a href="#">Home</a>
              </li>
              <li className="hidden lg:flex py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
                <a href="#">Dashboard</a>
              </li>
              <li className="hidden lg:flex py-2 hover:underline hover:underline-offset-4 transition-all duration-300  items-center ">
                <IoNotificationsSharp className="text-xl hover:text-[#75a3e9] transition-all duration-300" />
                <a href="#" className="lg:hidden">
                  Notification
                </a>
              </li>

              <li
                className={`hidden lg:flex border-l-2 border-black h-4 items-center hover:underline hover:underline-offset-4 transition-all duration-300`}
              >
                <Link
                  to="/login"
                  onClick={user && (() => logOut())}
                  className={`pl-2 ${user ? "text-red-600 font-medium" : ""}`}
                >
                  {user ? "Logout" : "Login"}
                </Link>
              </li>

              {/* Mobile Menu Toggle */}
              <div className="flex items-center gap-x-2">
                <div>
                  {user && (
                    <img
                      src={user?.photoURL || defaultImg}
                      className="h-9 w-9 rounded-full"
                      lazyLoad="true"
                      onError={(e) => {
                        e.target.src = { defaultImg };
                      }}
                      alt="User Profile"
                    />
                  )}
                </div>

                <div className="lg:hidden w-[40px] bg-secondary bg-opacity-20 rounded-md shadow-sm border p-1 flex items-center justify-center cursor-pointer">
                  <span onClick={toggleMenu}>
                    {isMenuOpen ? (
                      <IoCloseSharp className="text-[28px]" />
                    ) : (
                      <GiHamburgerMenu className="text-[28px]" />
                    )}
                  </span>
                </div>
              </div>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`overflow-hidden transition-[max-height] duration-500 ease-in ${
              isMenuOpen ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <ul className="mt-4 flex flex-col text-start ps-4 rounded-md w-full bg-primary bg-opacity-20 text-black lg:hidden">
              <li className="py-2 hover:underline hover:underline-offset-2 flex items-center gap-1">
                <FaHome className="text-[14px]" />
                <a href="#" className="text-[14px]">
                  Home
                </a>
              </li>
              <li className="py-2 hover:underline hover:underline-offset-2 flex items-center gap-1">
                <TbLayoutDashboardFilled className="text-[14px]" />
                <a href="#" className="text-[14px]">
                  Dashboard
                </a>
              </li>
              <li className="py-2 hover:underline hover:underline-offset-2 flex items-center gap-1">
                <IoNotificationsSharp className="text-[14px]" />
                <a href="#" className="text-[14px]">
                  Notification
                </a>
              </li>

              <li className="py-2 mb-2">
                <Link
                  to={user ? "" : "/login"}
                  onClick={user && (() => logOut())}
                  className={`text-[14px] ${
                    user ? "bg-red-600" : "bg-primary"
                  } w-fit px-5 py-1.5 rounded-sm text-white`}
                >
                  {user ? "Logout" : "Login"}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
