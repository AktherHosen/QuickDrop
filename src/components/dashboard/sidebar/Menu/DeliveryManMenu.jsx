import React from "react";
import Menu from "./Menu";
import { RiFileListLine } from "react-icons/ri";
import { BiChat } from "react-icons/bi";

const DeliveryManMenu = ({ toggle }) => {
  return (
    <>
      <Menu
        label="delivery list"
        address="statistics"
        icon={RiFileListLine}
        toggle={toggle}
      />
      <Menu label="reviews" address="reviews" icon={BiChat} toggle={toggle} />
    </>
  );
};

export default DeliveryManMenu;
