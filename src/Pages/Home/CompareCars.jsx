import { motion } from "framer-motion";
import { Car, Star } from "lucide-react";
import { useEffect, useState } from "react";

const CompareCars = () => {
  const [cars, setCars] = useState([]);
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("https://rent-wheel-nine.vercel.app/cars");
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  const handleSelect = (id, isFirst) => {
    const selectedCar = cars.find((c) => c._id === id);
    isFirst ? setCar1(selectedCar) : setCar2(selectedCar);
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        <Car className="inline-block fill-yellow-600 animate-spin" size={40} />
      </div>
    );
  }

  return (
    <section className="relative py-10 md:py-16 bg-gradient-to-b from-zinc-900 to-black text-gray-300">
      <div className="absolute top-0 left-0 w-full h-[2px] animate-pulse bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white heading-text">
          Compare <span className="text-yellow-500">Cars</span>
        </h2>
        <p className="text-gray-400 mb-6 md:mb-7">
          Choose two cars from our collection to see how they compare.
        </p>

        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-10"></div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <select
            className="bg-zinc-800 text-gray-200 border border-zinc-700 rounded-lg p-3 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-100"
            onChange={(e) => handleSelect(e.target.value, true)}
          >
            <option value="">Select First Car</option>
            {cars.map((car) => (
              <option key={car._id} value={car._id}>
                {car.carName}
              </option>
            ))}
          </select>

          <select
            className="bg-zinc-800 text-gray-200 border border-zinc-700 rounded-lg p-3 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-100"
            onChange={(e) => handleSelect(e.target.value, false)}
          >
            <option value="">Select Second Car</option>
            {cars.map((car) => (
              <option key={car._id} value={car._id}>
                {car.carName}
              </option>
            ))}
          </select>
        </div>

        {car1 && car2 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-5 md:mt-10 text-left"
          >
            {[car1, car2].map((car, index) => (
              <div
                key={index}
                className="bg-zinc-800/70 border border-zinc-700 hover:border-yellow-500 hover:shadow-yellow-500/20 hover:shadow-lg rounded-2xl transition-all duration-100 overflow-hidden backdrop-blur-sm"
              >
                <img
                  src={car.imageURL}
                  alt={car.carName}
                  className="w-full h-40 md:h-56 object-cover"
                />
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                    {car.carName}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-[15px] mb-2">
                    {car.category}
                  </p>
                  <p className="text-green-400 text-sm md:text-[16px] font-semibold mb-2">
                    ৳{car.rentPricePerDay} / day
                  </p>
                  <p className="text-yellow-400 text-sm md:text-[16px] mb-3 flex items-center">
                    <Star height={18} className="fill-yellow-400 mr-1" />{" "}
                    {car.rating?.toFixed(1) || "N/A"} / 5
                  </p>
                  <span
                    className={`inline-block px-3 py-1 text-xs md:text-sm rounded-full ${
                      car.status === "Available"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {car.status}
                  </span>

                  {car.specs && (
                    <div className="mt-4 text-gray-300 text-sm space-y-1">
                      <p>
                        <strong>Fuel:</strong> {car.specs.fuelType}
                      </p>
                      <p>
                        <strong>Transmission:</strong> {car.specs.transmission}
                      </p>
                      <p>
                        <strong>Engine:</strong> {car.specs.engine}
                      </p>
                      <p>
                        <strong>Seats:</strong> {car.specs.seats}
                      </p>
                      <p>
                        <strong>Mileage:</strong> {car.specs.mileage}
                      </p>
                      <p>
                        <strong>Top Speed:</strong> {car.specs.topSpeed}
                      </p>
                      <p>
                        <strong>Year:</strong> {car.specs.year}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <p className="text-gray-500 mt-10">
            Select two cars above to compare their details.
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default CompareCars;
