import React from "react";
import Container from "../common/Container";
import Lottie from "lottie-react";
import bannerAnimation from "/public/bannerAnimation.json";
import Button from "../common/Button";
const Banner = () => {
  return (
    <Container>
      <div className="min-h-calc-vh flex justify-center lg:justify-between  gap-2 flex-col-reverse lg:flex-row items-center w-full">
        <div className="space-y-4 mt-4 lg:mt-0 flex flex-col max-w-lg items-center">
          <h1 className="text-3xl md:text-3xl lg:text-4xl lg:max-w-md font-semibold text-center lg:text-start">
            Your Trusted Partner for Safe and Timely Deliveries.
          </h1>
          <p className="text-sm lg:text-[1rem] text-center lg:text-start">
            Experience a new standard in parcel delivery with a system designed
            to optimize logistics, reduce delays, and provide peace of mind with
            real-time updates.
          </p>

          <Button label="Get Started" isPrimary={true} />
        </div>
        <div className="w-full">
          <Lottie
            animationData={bannerAnimation}
            className="w-full h-[350px]"
            loop={true}
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
