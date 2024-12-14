import React from "react";
import Container from "../common/Container";
import Lottie from "lottie-react";
import bannerAnimation from "/public/bannerAnimation.json";
import Button from "../common/Button";
const Banner = () => {
  return (
    <Container>
      <div className="min-h-calc-vh flex justify-between gap-2 flex-col md:flex-row items-center border">
        <div className="w-full lg:w-1/2 space-y-4 mt-4 lg:mt-0">
          <h1 className="text-4xl lg:max-w-md font-semibold">
            Your Trusted Partner for Safe and Timely Deliveries.
          </h1>
          <h4 className="text-[15px]">
            Experience a new standard in parcel delivery with a system designed
            to optimize logistics, reduce delays, and provide peace of mind with
            real-time updates.
          </h4>

          <Button title="Get Started" isPrimary={true} />
        </div>
        <div className="w-full lg:w-1/2 justify-end">
          <Lottie
            animationData={bannerAnimation}
            className="w-full h-[300px] md:w-[400px]  lg:h-[450px]"
            loop={true}
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
