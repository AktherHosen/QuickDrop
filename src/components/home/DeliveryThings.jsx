import React from "react";
import Container from "../common/Container";
import { BsFillBoxSeamFill, BsGiftFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

const DeliveryThings = () => {
  return (
    <Container>
      <div className="max-w-xl space-y-3 mx-auto text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Delivering Everything You Need
        </h1>
        <h4 className="text-sm">
          Fast, reliable, and hassle-free delivery of groceries, packages,
          meals, and more!
        </h4>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-4 mt-8">
        <div className="hover:border-b-4 transition-all duration-300 rounded-md hover:border-primary px-6 py-2 flex justify-center flex-col items-center gap-4">
          <BsFillBoxSeamFill className="text-[60px] text-primary" />
          <div className="space-y-2 text-center">
            <span className="block">Package</span>
            <button className="bg-primary text-white px-3 py-1.5 rounded-sm">
              Book Now
            </button>
          </div>
        </div>
        <div className="hover:border-b-4 transition-all duration-300 rounded-md hover:border-primary px-6 py-2  flex justify-center flex-col items-center gap-4">
          <BsGiftFill className="text-[60px] text-primary" />
          <div className="space-y-2 text-center">
            <span className="block">Gift</span>
            <button className="bg-primary text-white px-3 py-1.5 rounded-sm">
              Book Now
            </button>
          </div>
        </div>
        <div className="hover:border-b-4 transition-all duration-300 rounded-md hover:border-primary px-6 py-2  flex justify-center flex-col items-center gap-4">
          <FaThList className="text-[60px] text-primary" />
          <div className="space-y-2 text-center">
            <span className="block">Accessories</span>
            <button className="bg-primary text-white px-3 py-1.5 rounded-sm">
              Book Now
            </button>
          </div>
        </div>
        <div className="hover:border-b-4 transition-all duration-300 rounded-md hover:border-primary px-6 py-2  flex justify-center flex-col items-center gap-4">
          <HiDocumentText className="text-[60px] text-primary" />
          <div className="space-y-2 text-center">
            <span className="block">Document</span>
            <button className="bg-primary text-white px-3 py-1.5 rounded-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DeliveryThings;
