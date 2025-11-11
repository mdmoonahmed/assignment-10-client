import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Clock, ThumbsUp } from "lucide-react";

const WhyRentWithUs = () => {
  const benefits = [
    {
      icon: <Clock size={40} className="text-red-500 mb-3" />,
      title: "Easy Booking",
      desc: "Book your car in just a few clicks with instant confirmation and hassle-free process.",
    },
    {
      icon: <DollarSign size={40} className="text-green-500 mb-3" />,
      title: "Affordable Rates",
      desc: "We offer competitive daily rental prices without any hidden charges.",
    },
    {
      icon: <ShieldCheck size={40} className="text-blue-500 mb-3" />,
      title: "Trusted Providers",
      desc: "All cars are verified and maintained by trusted local owners and agencies.",
    },
    {
      icon: <ThumbsUp size={40} className="text-yellow-500 mb-3" />,
      title: "24/7 Support",
      desc: "Need help? Our customer support is always available to assist you anytime.",
    },
  ];

  return (
    <section className="py-10 md:py-20 ">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className=" text-3xl sm:text-4xl font-bold text-white heading-text mb-3">Why <span className="text-primary">Rent</span> With Us</h2>
        <p className="text-secondary mb-7 md:mb-12">
          Experience the easiest and most reliable car rental service in Bangladesh
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRentWithUs;
