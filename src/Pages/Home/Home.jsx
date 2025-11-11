import React from "react";
import { useLoaderData } from "react-router";
import CarCard from "../../Components/CarCard";
import HeroBanner from "./HeroBannner";
import FeaturedCars from "./FeaturedCars";
import WhyRentWithUs from "./WhyRentWithUs";

const Home = () => {
  const latestCars = useLoaderData();

  return (
    <div className ="">
      <HeroBanner></HeroBanner>
      <FeaturedCars latestCars={latestCars}></FeaturedCars>
      <WhyRentWithUs></WhyRentWithUs>
    </div>
  );
};

export default Home;
