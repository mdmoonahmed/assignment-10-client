import React from "react";
import { useLoaderData } from "react-router";
import CarCard from "../../Components/CarCard";
import HeroBanner from "./HeroBannner";

const Home = () => {
  const cars = useLoaderData();
  console.log(cars);

  return (
    <div className ="">
      <HeroBanner></HeroBanner>
      {cars.map((car) => (
        <CarCard key={car._id} car={car}></CarCard>
      ))}
    </div>
  );
};

export default Home;
