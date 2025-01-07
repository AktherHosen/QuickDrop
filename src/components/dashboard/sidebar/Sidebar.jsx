import React from "react";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import DeliveryManMenu from "./Menu/DeliveryManMenu";

const Sidebar = ({ toggle }) => {
  return (
    <div
      className={`fixed border-r-2 dark:border-r dark:border-r-black  bg-darkText dark:bg-darkBg h-full transition-all duration-300 ${
        toggle ? "w-[80px] px-2 pt-6" : "w-[250px] p-6"
      }`}
      style={{ top: "64px" }}
    >
      <AdminMenu toggle={toggle} />
      <UserMenu toggle={toggle} />
      <DeliveryManMenu toggle={toggle} />
    </div>
  );
};

export default Sidebar;
