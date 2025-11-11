const FeaturedCars = ({ latestCars }) => {
  return (
    <section className="py-10 md:py-16 ">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl heading-text md:text-4xl font-bold text-white">Featured <span className="text-primary">Cars</span></h2>
        <p className="text-secondary mt-2">Explore our newest additions available for rent</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 px-4">
        {latestCars.map((car) => (
          <div key={car._id} className="bg-white hover:scale-105 ease-in-out rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <img src={car.imageURL} alt={car.carName} className="w-full animate-zoomImg  h-56 object-cover" />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{car.carName}</h3>
              <p className="text-gray-500 mb-2">{car.category}</p>
              <p className="text-lg font-bold text-green-600 mb-4">৳{car.rentPricePerDay} / day</p>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Provider: {car.providerName}</span>
                <a
                  href={`/cars/${car._id}`}
                  className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition-all duration-200"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
