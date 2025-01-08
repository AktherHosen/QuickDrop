import React from "react";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import DeliveryManMenu from "./Menu/DeliveryManMenu";
import "./Sidebar.css";
const Sidebar = ({ toggle }) => {
  return (
    <div
      className={`fixed border-r-2 dark:border-r dark:border-r-black bg-darkText dark:bg-darkBg h-full transition-all overscroll-y-scroll duration-300 ${
        toggle ? "w-[80px] ps-2 pt-6" : "w-[250px] ps-2 pt-6"
      }`}
      style={{ top: "34px" }}
    >
      {/* Container for menus with overflow-y-auto for scrolling */}
      <div className="h-full overflow-y-auto sidebar-container px-2">
        <AdminMenu toggle={toggle} />
        <UserMenu toggle={toggle} />
        <DeliveryManMenu toggle={toggle} />
      </div>
    </div>
  );
};

export default Sidebar;
