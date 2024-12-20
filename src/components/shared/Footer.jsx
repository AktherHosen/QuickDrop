import React from "react";
import Logo from "../../assets/images/logo.png";

import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90 text-secondary ">
      <div className="min-h-[300px] max-w-[1240px]  mx-auto px-6 sm:px-5 lg:px-4 py-4">
        <div className="mt-4 flex items-center">
          <img src={Logo} className="h-12 w-12 lg:h-14 lg:w-14" alt="" />
          <p className="font-pacifico tracking-wide text-lg">Quick Drop</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start gap-4 pt-10 pb-6 border-b border-gray-100 border-opacity-30">
          <div>
            <ul className="space-y-1">
              <li className="text-[16px] mb-2 font-bold">Company</li>
              <li className="text-secondary text-sm">
                <a href="#">About</a>
              </li>
              <li className="text-secondary text-sm">
                <a href="#">Product</a>
              </li>
              <li className="text-secondary text-sm">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-end md:justify-start">
            <ul className="space-y-1">
              <li className="text-[16px] mb-2 font-bold">Join Us</li>
              <li className="text-secondary text-sm">
                <a href="#">Driver Partner</a>
              </li>
              <li className="text-secondary text-sm">
                <a href="#">Merchant</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li className="text-[16px] mb-2 font-bold">
                Further Information
              </li>
              <li className="text-secondary text-sm">
                <a href="#">Terms & Condition</a>
              </li>
              <li className="text-secondary text-sm">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-end md:justify-start lg:justify-end">
            <ul className="space-y-1">
              <li className="text-[16px] mb-2 font-bold">Find Us On</li>
              <div className="flex items-center gap-2">
                <li className="text-secondary text-sm">
                  <a href="#">
                    <ImFacebook2 className="text-[24px]" />
                  </a>
                </li>
                <li className="text-secondary text-sm">
                  <a href="#">
                    <FaInstagramSquare className="text-[28px]" />
                  </a>
                </li>
                <li className="text-secondary text-sm">
                  <a href="#">
                    <FaSquareXTwitter className="text-[28px]" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
