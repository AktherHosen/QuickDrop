import React from "react";
import Container from "../common/Container";
import Lottie from "lottie-react";
import CTA from "/public/cta.json";
import Button from "../common/Button";
const Cta = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center transition-all duration-500 ease-in-out my-16 lg:my-10">
        <div className="w-full">
          <Lottie
            animationData={CTA}
            className="w-full h-[250px] lg:h-[350px] lg:mx-[-21%] xl:mx-[-25%]"
            loop={true}
          />
        </div>
        <div className="space-y-4 flex flex-col justify-center items-start lg:items-start max-w-lg mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-start">
            Need It Delivered Fast? <br />{" "}
            <span className="text-primary font-bold">Drop</span> It With Us!
          </h1>
          <p className="text-sm lg:text-[1rem] text-start">
            Experience seamless, reliable, and lightning-fast parcel delivery.
            Whether it's urgent documents, gifts, or packages—Quick Drop ensures
            your parcels reach their destination on time, every time.
          </p>
          <Button label={"Contact Us"} isPrimary={true} />
        </div>
      </div>
    </Container>
  );
};

export default Cta;
