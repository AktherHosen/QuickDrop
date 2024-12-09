import React from "react";
import Container from "../common/Container";
import Lottie from "lottie-react";
import bannerAnimation from "/public/bannerAnimation.json";
import Button from "../common/Button";
const Banner = () => {
  return (
    <Container>
      <div className="min-h-calc-vh border flex justify-between gap-2 flex-col md:flex-row items-center">
        <div className="md:max-w-lg space-y-4">
          <h1 className="text-4xl max-w-md font-semibold">
            Your Trusted Partner for Safe and Timely Deliveries.
          </h1>
          <h4 className="text-[15px]">
            Experience a new standard in parcel delivery with a system designed
            to optimize logistics, reduce delays, and provide peace of mind with
            real-time updates.
          </h4>
          <Button title="Get Started" isPrimary={true} />
        </div>
        <div className="md:w-1/2">
          <Lottie
            animationData={bannerAnimation}
            className="h-[450px] w-full"
            loop={true}
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
