import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import HeroBanner from "./HeroBanner";
import FeaturedCars from "./FeaturedCars";
import WhyRentWithUs from "./WhyRentWithUs";
import CompareCars from "./CompareCars";
import Testimonials from "./Testimonials";
import { Car } from "lucide-react";

const Home = () => {
  const latestCars = useLoaderData();

  return (
    <div className="">
      <HeroBanner></HeroBanner>
      <Suspense
        fallback={
          <div className="py-20 text-center">
            <Car
              className="inline-block fill-yellow-600 animate-spin"
              size={40}
            />
          </div>
        }
      >
        <FeaturedCars latestCars={latestCars}></FeaturedCars>
      </Suspense>
      <WhyRentWithUs></WhyRentWithUs>
      <CompareCars></CompareCars>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
