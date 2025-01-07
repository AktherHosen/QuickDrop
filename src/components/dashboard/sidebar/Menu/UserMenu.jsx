import React from "react";
import Menu from "./Menu";
import { TbBrandBooking } from "react-icons/tb";
import { LiaBoxSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
const UserMenu = ({ toggle }) => {
  return (
    <>
      <Menu
        label="book percel"
        address="booking"
        icon={TbBrandBooking}
        toggle={toggle}
      />
      <Menu
        label="parcel"
        address="parcel"
        icon={LiaBoxSolid}
        toggle={toggle}
      />
      <Menu
        label="settings"
        address="profile"
        icon={IoSettingsOutline}
        toggle={toggle}
      />
    </>
  );
};

export default UserMenu;
