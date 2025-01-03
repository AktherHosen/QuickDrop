import Container from "../common/Container";
import { BsBoxSeam, BsGift, BsViewList } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { PiDevicesLight } from "react-icons/pi";

const DeliveryThings = () => {
  return (
    <Container>
      <div className="max-w-2xl space-y-3 mx-auto text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Delivering Everything You Need
        </h1>
        <h4 className="text-xs md:text-sm">
          Fast, reliable, and hassle-free delivery of groceries, packages,
          meals, and more!
        </h4>
      </div>
      <div className="min-h-[200px] grid grid-cols-2 lg:grid-cols-5 items-center gap-x-4 gap-y-8 lg:gap-4 mt-8">
        <div className="min-h-[150px] border-2 dark:border-none border-gray-100 shadow-sm transition-all duration-300 rounded-md border-b-[3.2px]  hover:ease-linear hover:border-b-primary px-6 py-2.5 flex justify-center flex-col items-center gap-4">
          <BsBoxSeam className="text-[45px] text-primary transition-colors duration-300" />
          <div className="space-y-2 text-center">
            <span className="block text-sm lg:text-[1rem]">Package</span>
          </div>
        </div>
        <div className="min-h-[150px] border dark:border-none border-gray-100 shadow-sm transition-all duration-300 rounded-md border-b-[3.2px] hover:ease-linear hover:border-b-primary px-6  py-2.5 flex justify-center flex-col items-center gap-4">
          <BsGift className="text-[45px] text-primary transition-colors duration-300" />
          <div className="space-y-2 text-center">
            <span className="block text-sm lg:text-[1rem]">Gift</span>
          </div>
        </div>
        <div className="min-h-[150px] border dark:border-none border-gray-100 shadow-sm transition-all duration-300 rounded-md border-b-[3.2px] hover:ease-linear hover:border-b-primary px-6  py-2.5 flex justify-center flex-col items-center gap-4">
          <BsViewList className="text-[45px] text-primary transition-colors duration-300" />
          <div className="space-y-2 text-center">
            <span className="block text-sm lg:text-[1rem]">Accessories</span>
          </div>
        </div>
        <div className="min-h-[150px] border dark:border-none border-gray-100 shadow-sm transition-all duration-300 rounded-md border-b-[3.2px] hover:ease-linear hover:border-b-primary px-6  py-2.5 flex justify-center flex-col items-center gap-4">
          <HiOutlineDocumentText className="text-[45px]  text-primary transition-colors duration-300" />
          <div className="space-y-2 text-center">
            <span className="block text-sm lg:text-[1rem]">Document</span>
          </div>
        </div>
        <div className="min-h-[150px] border dark:border-none border-gray-100 shadow-sm transition-all duration-300 rounded-md border-b-[3.2px] hover:ease-linear hover:border-b-primary px-6  py-2.5 flex justify-center flex-col items-center gap-4">
          <PiDevicesLight className="text-[45px]  text-primary transition-colors duration-300" />
          <div className="space-y-2 text-center">
            <span className="block text-sm lg:text-[1rem]">Device</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DeliveryThings;
