import { useContext, useState } from "react";

import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";

const AddCar = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddCar = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const carData = {
      carName: form.carName.value,
      description: form.description.value,
      category: form.category.value,
      rentPricePerDay: parseFloat(form.rentPricePerDay.value),
      location: form.location.value,
      imageURL: form.imageURL.value,
      providerName: user?.displayName || "Unknown",
      providerEmail: user?.email || "Unknown",
      status: "Available",
      createdAt: new Date().toISOString(),
      specs: {
        fuelType: form.fuelType.value,
        transmission: form.transmission.value,
        engine: form.engine.value,
        seats: parseInt(form.seats.value),
        mileage: form.mileage.value,
        topSpeed: form.topSpeed.value,
        year: form.year.value,
      },
    };

    try {
      const res = await fetch("https://rent-wheel-nine.vercel.app/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      });

      if (res.ok) {
        toast.success("🚗 Car added successfully!");
        form.reset();
      } else {
        toast.error("Failed to add car.");
      }
    } catch (error) {
      console.error("Error adding car:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-gray-200 flex flex-col items-center justify-center px-5 py-16">
      <Toaster position="top-center" reverseOrder={false} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-zinc-800/80 border border-zinc-700 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Add Your <span className="text-yellow-500">Car</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Fill out all the details below to list your car for rent.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAddCar} className="space-y-6">
          {/* Car Info */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Car Name
            </label>
            <input
              type="text"
              name="carName"
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="e.g., Toyota Corolla Axio"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Description
            </label>
            <textarea
              name="description"
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="3"
              placeholder="Write a short description about the car..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Category
              </label>
              <select
                name="category"
                required
                className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Select Category</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Rent Price (per day)
              </label>
              <input
                type="number"
                name="rentPricePerDay"
                required
                min="0"
                className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="e.g., 3500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Location
            </label>
            <input
              type="text"
              name="location"
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="e.g., Dhaka, Bangladesh"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Hosted Image URL
            </label>
            <input
              type="url"
              name="imageURL"
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Paste image URL from Unsplash or Google"
            />
          </div>

          {/* Specs Section */}
          <div className="pt-6 border-t border-zinc-700">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Car Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Fuel Type
                </label>
                <input
                  type="text"
                  name="fuelType"
                  required
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., Petrol"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Transmission
                </label>
                <input
                  type="text"
                  name="transmission"
                  required
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., Manual"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Engine
                </label>
                <input
                  type="text"
                  name="engine"
                  required
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., 796cc"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Seats
                </label>
                <input
                  type="number"
                  name="seats"
                  required
                  min="1"
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., 4"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Mileage
                </label>
                <input
                  type="text"
                  name="mileage"
                  required
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., 18 km/l"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Top Speed
                </label>
                <input
                  type="text"
                  name="topSpeed"
                  required
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., 140 km/h"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  required
                  min="2000"
                  max="2025"
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., 2023"
                />
              </div>
            </div>
          </div>

          {/* Provider Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-700">
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Provider Name
              </label>
              <input
                type="text"
                name="providerName"
                value={user?.displayName || ""}
                readOnly
                className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-400 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Provider Email
              </label>
              <input
                type="email"
                name="providerEmail"
                value={user?.email || ""}
                readOnly
                className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-yellow-500/20 transition-all duration-150"
            >
              {loading ? "Adding..." : "Add Car"}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default AddCar;
