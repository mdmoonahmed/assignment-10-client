import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroBanner = () => {
  return (
    <div className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        className="h-[50vh] md:h-[80vh]"
      >
        <SwiperSlide>
          <div className="relative h-[50vh] md:h-[80vh] overflow-hidden">
            
              <img
              className="absolute inset-0 w-full h-full object-cover z-0 animate-zoomBg"
              src="https://wallpapercave.com/wp/wp4479757.jpg" alt="car" />
            <div className="absolute inset-0 z-10 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Find Your Perfect Ride
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Browse trusted local rentals and book instantly.
              </p>
              <a
                href="/browse-cars"
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold"
              >
                Browse Cars
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[50vh] md:h-[80vh] overflow-hidden">
           
              <img 
              alt='car'
              className="absolute inset-0 w-full h-full object-cover z-0 animate-zoomBg"
              src="https://wallpapercave.com/wp/wp13649620.jpg" />
            
            <div className="absolute inset-0 z-10 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Rent. Drive. Explore.
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Book your favorite cars with flexible pricing and easy pickup.
              </p>
              <a
                href="/browse-cars"
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold"
              >
                Book Now
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[50vh] md:h-[80vh] overflow-hidden">
            {/* 🔹 Background Image */}
            <img
              src="https://wallpapercave.com/wp/wp13335462.jpg"
              alt="car"
              className="absolute inset-0 w-full h-full object-cover z-0 animate-zoomBg"
            />

            {/* 🔹 Overlay + Text */}
            <div className="absolute inset-0 z-10 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Earn by Listing Your Car
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Join our network of providers and start earning today.
              </p>
              <a
                href="/add-car"
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
              >
                Add Your Car
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
