import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { X } from "lucide-react";

const UpdateCar = ({ carId, onClose, onUpdated }) => {
  const [carData, setCarData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(
          `https://rent-wheel-nine.vercel.app/cars/${carId}`
        );
        const data = await res.json();
        // console.log(data.result);

        setCarData(data?.result);
      } catch (err) {
        console.error("Error fetching car:", err);
        toast.error("Failed to fetch car data!");
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [carId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecsChange = (e) => {
    const { name, value } = e.target;
    setCarData((prev) => ({
      ...prev,
      specs: { ...prev.specs, [name]: value },
    }));
  };

  // Update car
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { _id, ...dataToUpdate } = carData;

      const res = await fetch(
        `https://rent-wheel-nine.vercel.app/cars/${carId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToUpdate),
        }
      );

      if (res.ok) {
        toast.success("Car updated successfully!");
        onUpdated();
        onClose();
      } else {
        toast.error("Failed to update car!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating car!");
    }
  };

  if (loading)
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/70 text-white z-50">
        Loading...
      </div>
    );

  return (
    <AnimatePresence>
      {carData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={onClose} // Close on background click
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900 border border-zinc-700 w-full max-w-2xl rounded-2xl shadow-lg p-6 md:p-8 text-gray-200 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-yellow-500">
                Update Car Details
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                <X></X>
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
              {/* Car Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Car Name</label>
                  <input
                    type="text"
                    name="carName"
                    value={carData.carName || ""}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Category</label>
                  <select
                    name="category"
                    value={carData.category || ""}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  >
                    <option value="">Select Category</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm mb-1">Description</label>
                <textarea
                  name="description"
                  value={carData.description || ""}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white h-24"
                />
              </div>

              {/* Rent + Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Rent Price (per day)
                  </label>
                  <input
                    type="number"
                    name="rentPricePerDay"
                    value={carData.rentPricePerDay || ""}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={carData.location || ""}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm mb-1">Image URL</label>
                <input
                  type="text"
                  name="imageURL"
                  value={carData.imageURL || ""}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                />
              </div>

              {/* Specs Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Fuel Type</label>
                  <input
                    type="text"
                    name="fuelType"
                    value={carData.specs?.fuelType || ""}
                    onChange={handleSpecsChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Transmission</label>
                  <input
                    type="text"
                    name="transmission"
                    value={carData.specs?.transmission || ""}
                    onChange={handleSpecsChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Engine</label>
                  <input
                    type="text"
                    name="engine"
                    value={carData.specs?.engine || ""}
                    onChange={handleSpecsChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Seats</label>
                  <input
                    type="number"
                    name="seats"
                    value={carData.specs?.seats || ""}
                    onChange={handleSpecsChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Mileage</label>
                  <input
                    type="text"
                    name="mileage"
                    value={carData.specs?.mileage || ""}
                    onChange={handleSpecsChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Top Speed</label>
                  <input
                    type="text"
                    name="topSpeed"
                    value={carData.specs?.topSpeed || ""}
                    onChange={handleSpecsChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Year</label>
                  <input
                    type="number"
                    name="year"
                    value={carData.specs?.year || ""}
                    onChange={handleSpecsChange}
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                  />
                </div>
              </div>

              {/* Provider Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <div>
                  <label className="block text-sm mb-1">Provider Name</label>
                  <input
                    type="text"
                    value={carData.providerName || ""}
                    disabled
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Provider Email</label>
                  <input
                    type="text"
                    value={carData.providerEmail || ""}
                    disabled
                    className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-gray-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  Update Car
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UpdateCar;
