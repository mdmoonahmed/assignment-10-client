import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Pencil, Trash2, Car } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";
import UpdateCar from "../UpdateCar/UpdateCar";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCar, setEditingCar] = useState(null);

  // ✅ Move this OUTSIDE useEffect
  const fetchMyCars = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(
        `https://rent-wheel-nine.vercel.app/my-cars?email=${user.email}`
      );
      const data = await res.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching my cars:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Now you can call it here
  useEffect(() => {
    fetchMyCars();
  }, [user?.email]);

  // ✅ Delete function
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this car?");
    if (!confirm) return;

    try {
      const res = await fetch(`https://rent-wheel-nine.vercel.app/cars/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setCars(cars.filter((c) => c._id !== id));
        toast.success("Car deleted successfully!");
      } else {
        toast.error("Failed to delete car!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error deleting car!");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-gray-200 px-4 py-16">
      <Toaster position="top-center" reverseOrder={false} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-zinc-800/70 border border-zinc-700 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-yellow-500/10 p-6 md:p-8 transition-all"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="text-center sm:text-left mb-3 sm:mb-0">
            <h2 className="text-3xl font-bold text-white">
              My <span className="text-yellow-500">Listings</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1 heading-text">
              Manage your added cars here.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-yellow-500">
            <Car size={22} /> <span>{cars.length} total</span>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-400 py-20">
            Loading your cars...
          </p>
        ) : cars.length === 0 ? (
          <p className="text-center text-gray-400 py-20">
            You haven’t listed any cars yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-zinc-900/80 text-yellow-500 text-left">
                  <th className="py-3 px-4 rounded-tl-lg">Car Name</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Rent / Day</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 rounded-tr-lg text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <motion.tr
                    key={car._id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-zinc-700 hover:bg-zinc-800/60 transition"
                  >
                    <td className="py-4 px-4 font-medium text-white">
                      {car.carName}
                    </td>
                    <td className="py-4 px-4 text-gray-400">{car.category}</td>
                    <td className="py-4 px-4 text-green-400 font-semibold">
                      ৳{car.rentPricePerDay}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          car.status === "Available"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {car.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center flex justify-center gap-3">
                      {/* Update Button */}
                      <button
                        className="flex items-center gap-1 px-3 py-1 rounded-md bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold transition"
                        onClick={() => setEditingCar(car?._id)}
                      >
                        <Pencil size={16} />
                        Update
                      </button>

                      {/* Delete Button */}
                      <button
                        className="flex items-center gap-1 px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
                        onClick={() => handleDelete(car._id)}
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* ✅ Update Modal */}
      {editingCar && (
        <UpdateCar
          carId={editingCar}
          onClose={() => setEditingCar(null)}
          onUpdated={fetchMyCars} // ✅ works now because it's defined outside useEffect
        />
      )}
    </section>
  );
};

export default MyListing;
