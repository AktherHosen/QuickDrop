import React, { useState } from "react";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import { Link, Outlet } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col bg-darkText dark:bg-darkBg">
      {/* Navbar */}
      <div className="flex bg-darkText dark:border-black dark:bg-darkBg border-b justify-between items-center py-4 px-7 fixed top-0 w-full h-[64px]  z-10 shadow-sm">
        <div
          className={`flex justify-between items-center gap-2 ${
            toggle ? "w-[55px] justify-center" : "w-[224px]"
          }  `}
        >
          <Link to="/" className={` ${toggle ? "hidden" : "flex"}`}>
            Quick Drop
          </Link>
          <span onClick={() => setToggle(!toggle)}>
            <BsReverseLayoutSidebarInsetReverse className="text-[19px] ms-1" />
          </span>
        </div>
        <p>
          <FiUser className="text-[22px] " />
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 pt-[64px]">
        <div>
          <Sidebar toggle={toggle} />
        </div>

        <div
          className={`${
            toggle ? "ml-[80px]" : "ml-[80px] md:ml-[120px] lg:ml-[250px]"
          } flex-1 overflow-y-auto  bg-darkText dark:bg-darkBg
           p-6 `}
          style={{ height: "calc(100vh - 64px)" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
