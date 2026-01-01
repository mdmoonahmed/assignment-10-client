import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import SlideContent from "./SlideContent";
import { Search } from "lucide-react";

const slidesData = [
  {
    words: [" Find Your Perfect Ride"],
    imageUrl: "https://wallpapercave.com/wp/wp4479757.jpg",
    tagline: "Browse trusted local rentals and book instantly.",
    buttonText: "Browse Cars",
    buttonHref: "/browse-cars",
    buttonBg: "bg-primary",
  },
  {
    words: ["Rent. Drive. Explore."],
    imageUrl: "https://wallpapercave.com/wp/wp13649620.jpg",
    tagline: "Book your favorite cars with flexible pricing and easy pickup.",
    buttonText: "Book Now",
    buttonHref: "/browse-cars",
    buttonBg: "bg-yellow-500",
  },
  {
    words: ["Earn by Listing Your Car"],
    imageUrl: "https://wallpapercave.com/wp/wp13335462.jpg",
    tagline: "Join our network of providers and start earning today.",
    buttonText: "Add Your Car",
    buttonHref: "/add-car",
    buttonBg: "bg-green-500",
  },
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/browse-cars?query=${searchTerm}`);
  };

  return (
    <div className="hero-section relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-[60vh] md:h-[80vh]"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent slide={slide} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Glowing Responsive Search Bar */}
      <div className="absolute z-40  top-6 left-1/2 md:left-auto md:right-8 transform md:transform-none -translate-x-1/2 md:translate-x-0 w-[50%] px-4 md:px-0 md:w-auto">

        <form
          onSubmit={handleSearch}
          className="mx-auto w-full max-w-xs  md:max-w-lg relative"
        >
          <input
            type="text"
            placeholder="Search car by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full shadow-orange-300  pl-12 pr-4 py-2 text-sm md:text-md md:py-3 rounded-lg bg-zinc-900/70 text-gray-200 placeholder-gray-400 focus:outline-none ring-2 ring-yellow-400/60 shadow-md  backdrop-blur-sm transition-all duration-300"
          />
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </form>
      </div>


    </div>
  );
};

export default HeroBanner;
