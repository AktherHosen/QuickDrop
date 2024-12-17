import React from "react";
import Banner from "../../components/home/Banner";
import Cta from "../../components/home/Cta";
import DeliveryThings from "../../components/home/DeliveryThings";
import Statistics from "../../components/home/Statistics";

const Home = () => {
  return (
    <>
      <Banner />
      <DeliveryThings />
      <Cta />
      <Statistics />
    </>
  );
};

export default Home;
