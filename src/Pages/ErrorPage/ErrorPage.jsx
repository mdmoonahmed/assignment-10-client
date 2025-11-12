import { motion } from "framer-motion";
import { Car, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-zinc-900 to-black text-gray-200 relative overflow-hidden">
      {/* Animated Car Icon */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <div className="relative flex items-center justify-center">
          <Car size={100} className="text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]" />
          <motion.div
            className="absolute w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Error Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-6xl md:text-8xl font-extrabold text-yellow-500 mb-2"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-2xl text-gray-400 mb-8 text-center px-4"
      >
        Oops! The road ends here. The page you're looking for doesn’t exist.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-yellow-500/20 transition-all duration-150"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </motion.div>

      {/* Ambient Motion Glow in Background */}
      <motion.div
        className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-yellow-500/10 to-transparent blur-2xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ErrorPage;
