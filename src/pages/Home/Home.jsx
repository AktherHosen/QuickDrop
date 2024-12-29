import React from "react";
import Banner from "../../components/home/Banner";
import Cta from "../../components/home/Cta";
import DeliveryThings from "../../components/home/DeliveryThings";
import Statistics from "../../components/home/Statistics";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | QuickDrop</title>
      </Helmet>
      <Banner />
      <DeliveryThings />
      <Cta />
      <Statistics />
    </>
  );
};

export default Home;
