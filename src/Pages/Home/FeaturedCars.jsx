import { motion } from "framer-motion";

const FeaturedCars = ({ latestCars }) => {
  return (
    <section className="relative py-10 md:py-16 bg-linear-to-b from-zinc-900 to-black text-gray-200">
       <div className="absolute top-0 left-0 w-full h-[2px] animate-pulse bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="text-center mb-6 md:mb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white heading-text">
          Featured <span className="text-yellow-500">Cars</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Explore our newest additions available for rent
        </p>
      </div>
      <div className="h-px w-32 bg-linear-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-10"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 px-4">
        {latestCars.map((car, index) => (
          <motion.div
            key={car._id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="bg-zinc-800/80 border border-zinc-700 hover:border-yellow-500 hover:shadow-yellow-500/20 hover:shadow-md rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm"
          >

            <div className="relative">
              <img
                src={car.imageURL}
                alt={car.carName}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 bg-yellow-500/80 text-xs text-black font-medium px-3 py-1 rounded-full">
                {car.category}
              </span>
            </div>

          
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-1  drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]">
                {car.carName}
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Provider: {car.providerName}
              </p>
              <p className="text-lg font-bold text-green-400 mb-4">
                ৳{car.rentPricePerDay} / day
              </p>

              <div className="flex items-center justify-between text-sm">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    car.status === "Available"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {car.status}
                </span>
                <a
                  href={`/cars/${car._id}`}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-4 py-2 rounded-lg transition-all duration-200"
                >
                  View Details
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;

