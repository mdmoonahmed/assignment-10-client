import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Ayesha Rahman",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      review:
        "RentWheels made my Dhaka trip so easy! Booking was quick, and the car was clean and comfortable. Highly recommend!",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      name: "Farhan Ahmed",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 4.8,
      review:
        "Great experience overall. Prices are affordable and support was available 24/7. I’ll definitely rent again.",
      location: "Chittagong, Bangladesh",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      image: "https://i.pravatar.cc/150?img=36",
      rating: 4.9,
      review:
        "The app is so easy to use! I found a luxury car in minutes. The provider was polite and punctual.",
      location: "Sylhet, Bangladesh",
    },
  ];

  return (
    <section className="relative py-20 bg-linear-to-b from-zinc-900 to-black text-gray-200">
       <div className="absolute top-0 left-0 w-full h-[2px] animate-pulse bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-3 heading-text">
          What Our <span className="text-primary">Customers</span> Say
        </h2>
        <p className="text-gray-400 mb-5">
          Thousands of happy renters trust RentWheels every day
        </p>
        <div className="h-px w-32 bg-linear-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {reviews.map((r, index) => (
            <motion.div
              key={r.id}
              className="bg-zinc-800/70 border border-zinc-700 p-8 hover:border-yellow-400 hover:shadow-yellow-500/20
                   rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-red-500"
                />
                <h3 className="text-lg font-semibold text-white">
                  {r.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{r.location}</p>

              
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.round(r.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
               <Quote className="absolute top-4 right-4 text-zinc-700" size={48} />
                <p className="text-gray-300 italic leading-relaxed relative">
                    
                  “{r.review}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
