import React from "react";
import Logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90 text-secondary ">
      <div className="min-h-[300px] max-w-[1240px]  mx-auto px-6 sm:px-5 lg:px-4 py-4">
        <div className="mt-4 flex items-center">
          <img src={Logo} className="h-16 w-16" alt="" />
          <p className="font-pacifico tracking-wide text-lg">Quick Drop</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10"></div>
      </div>
    </div>
  );
};

export default Footer;
