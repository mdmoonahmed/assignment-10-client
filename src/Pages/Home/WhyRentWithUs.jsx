import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Clock, ThumbsUp } from "lucide-react";

const WhyRentWithUs = () => {
  const benefits = [
    {
      icon: <Clock size={40} className="text-yellow-500 mb-3" />,
      title: "Easy Booking",
      desc: "Book your car in just a few clicks with instant confirmation and hassle-free process.",
    },
    {
      icon: <DollarSign size={40} className="text-green-400 mb-3" />,
      title: "Affordable Rates",
      desc: "We offer competitive daily rental prices without any hidden charges.",
    },
    {
      icon: <ShieldCheck size={40} className="text-blue-400 mb-3" />,
      title: "Trusted Providers",
      desc: "All cars are verified and maintained by trusted local owners and agencies.",
    },
    {
      icon: <ThumbsUp size={40} className="text-yellow-400 mb-3" />,
      title: "24/7 Support",
      desc: "Need help? Our customer support is always available to assist you anytime.",
    },
  ];

  return (
    <section className="relative py-10 md:py-16 bg-linear-to-b from-zinc-900 to-black text-gray-300 overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-[2px] animate-pulse bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-6xl mx-auto text-center px-4">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 heading-text">
          Why <span className="text-yellow-500">Rent</span> With Us
        </h2>
        <p className="text-gray-400 mb-5">
          Experience the easiest and most reliable car rental service in Bangladesh
        </p>

          <div className="h-px w-32 bg-linear-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-10"></div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/70 border border-zinc-700 hover:border-yellow-500 hover:shadow-yellow-500/20 hover:shadow-lg p-8 rounded-2xl  transition-all ease-out backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRentWithUs;
