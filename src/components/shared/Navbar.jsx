import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/logo.png";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b border-gray-200 pb-2">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-4 lg:px-2 mt-2.5">
        <nav className="flex flex-col">
          {/* Top Section */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-12 lg:h-14 lg:w-14"
              />
              <h1 className="font-poppins text-lg hidden lg:flex font-semibold">
                Quick Drop
              </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden font-raleway lg:flex items-center gap-x-2 text-sm">
              <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
                <a href="#">Home</a>
              </li>
              <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
                <a href="#">Dashboard</a>
              </li>
              <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300 flex items-center">
                <IoNotificationsSharp className="text-xl hover:text-[#75a3e9] transition-all duration-300" />
                <a href="#" className="lg:hidden">
                  Notification
                </a>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
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

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`overflow-hidden transition-[max-height] duration-500 ease-in ${
              isMenuOpen ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <ul className="mt-4 flex flex-col text-start ps-4 rounded-md w-full bg-primary bg-opacity-20 text-black lg:hidden">
              <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300 flex gap-1">
                <FaHome className="text-[14px]" />
                <a href="#">Home</a>
              </li>
              <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300 flex gap-1">
                <TbLayoutDashboardFilled className="text-[14px]" />
                <a href="#">Dashboard</a>
              </li>
              <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300 flex gap-1">
                <IoNotificationsSharp className="text-[14px]" />
                <a href="#">Notification</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
