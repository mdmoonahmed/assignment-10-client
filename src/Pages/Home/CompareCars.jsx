import { useEffect, useState } from "react";

const CompareCars = () => {
  const [cars, setCars] = useState([]);
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:4000/cars");
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
        Loading <span className="loading-ball loading-xl"></span>
      </div>
    );
  }

  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-3 heading-text text-white">Compare <span className="text-primary">Cars</span></h2>
        <p className="text-secondary mb-10">
          Choose two cars from our collection to see how they compare.
        </p>

       
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <select
            className="border bg-base-300 text-white border-gray-300 rounded-lg p-3 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
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
            className="border bg-base-300  border-gray-300 rounded-lg p-3 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 text-left">
            {[car1, car2].map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <img
                  src={car.imageURL}
                  alt={car.carName}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {car.carName}
                  </h3>
                  <p className="text-gray-500 mb-2">{car.category}</p>
                  <p className="text-green-600 font-semibold mb-2">
                    ৳{car.rentPricePerDay} / day
                  </p>
                  <p className="text-yellow-500 mb-2">
                    ⭐ {car.rating?.toFixed(1) || "N/A"} / 5
                  </p>
                  <span
                    className={`inline-block px-3 py-1 text-sm rounded-full ${
                      car.status === "Available"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {car.status}
                  </span>

                 
                  {car.specs && (
                    <div className="mt-4 text-gray-700 text-sm space-y-1">
                      <p><strong>Fuel:</strong> {car.specs.fuelType}</p>
                      <p><strong>Transmission:</strong> {car.specs.transmission}</p>
                      <p><strong>Engine:</strong> {car.specs.engine}</p>
                      <p><strong>Seats:</strong> {car.specs.seats}</p>
                      <p><strong>Mileage:</strong> {car.specs.mileage}</p>
                      <p><strong>Top Speed:</strong> {car.specs.topSpeed}</p>
                      <p><strong>Year:</strong> {car.specs.year}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-10">
            Select two cars above to compare their details.
          </p>
        )}
      </div>
    </section>
  );
};

export default CompareCars;
