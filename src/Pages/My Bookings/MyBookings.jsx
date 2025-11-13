import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Car, Trash2, CalendarCheck } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  //  user's bookings
  const fetchBookings = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(
        `https://rent-wheel-nine.vercel.app/bookings?email=${user.email}`
      );
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [user?.email]);

  const handleCancel = async (bookingId, carId) => {
    const confirm = window.confirm("Cancel this booking?");
    if (!confirm) return;

    try {
      const res = await fetch(
        `https://rent-wheel-nine.vercel.app/bookings/${bookingId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        // update car back to available
        await fetch(`https://rent-wheel-nine.vercel.app/cars/${carId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "Available" }),
        });

        setBookings(bookings.filter((b) => b._id !== bookingId));
        toast.success("Booking cancelled successfully!");
      } else {
        toast.error("Failed to cancel booking");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error cancelling booking");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-gray-200 px-4 py-16">
      <Toaster position="top-center" reverseOrder={false} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-zinc-800/70 border border-zinc-700 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-yellow-500/10 p-6 md:p-8 transition-all"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="text-center sm:text-left mb-3 sm:mb-0">
            <h2 className="text-3xl font-bold text-white heading-text">
              My <span className="text-yellow-500">Bookings</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1 heading-text">
              Manage and review your booked cars here.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-yellow-500">
            <Car size={22} /> <span>{bookings.length} total</span>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-400 py-20">
            Loading your bookings...
          </p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-400 py-20">
            You haven't booked any cars yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-zinc-900/80 text-yellow-500 text-left">
                  <th className="py-3 px-4 rounded-tl-lg">Car Name</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Booking Date</th>
                  <th className="py-3 px-4">Return Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 rounded-tr-lg text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, index) => (
                  <motion.tr
                    key={b._id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-zinc-700 hover:bg-zinc-800/60 transition"
                  >
                    <td className="py-4 px-4 font-medium text-white">
                      {b.carName}
                    </td>
                    <td className="py-4 px-4 text-green-400 font-semibold">
                      ৳{b.rentPricePerDay}
                    </td>
                    <td className="py-4 px-4 text-gray-400">
                      {new Date(b.bookingDate).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 text-gray-400">
                      {new Date(b.returnDate).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          b.status === "Confirmed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center flex justify-center gap-3">
                      <button
                        className="flex items-center gap-1 px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
                        onClick={() => handleCancel(b._id, b.carId)}
                      >
                        <Trash2 size={16} />
                        Cancel
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default MyBookings;
