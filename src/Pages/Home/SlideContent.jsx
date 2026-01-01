import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Car } from "lucide-react";

const SlideContent = ({ slide, isActive }) => {
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setHasTyped(false);
    }
  }, [isActive]);

  const handleLoopDone = () => {
    setHasTyped(true);
  };

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0 animate-zoomBg"
        src={slide.imageUrl}
        alt="car"
      />

      <div className="absolute inset-0 z-10 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-6xl font-bold  md:mb-4 heading-text">
          {isActive && !hasTyped ? (
            <Typewriter
              words={slide.words}
              loop={1}
              cursor
              cursorStyle= {<Car className="inline-block fill-yellow-600 animate-bounce ml-2" size={60} />}
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={1000}
              onLoopDone={handleLoopDone}
            />
          ) : (
            <>{slide.words[0]}</>
          )}
        </h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm md:text-xl mb-2 md:mb-6"
        >
          {slide.tagline}
        </motion.p>
        <motion.a
         initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1 , scale: 1}}
          transition={{ duration: 0.5, delay: 0.5 }}
          href={slide.buttonHref}
          className={`btn-hover ${slide.buttonBg} z-1 group relative overflow-hidden rounded-lg px-4 md:px-6 py-3  md:text-lg font-semibold  transition duration-300 ease-out text-black`}
        >
          <span className="">{slide.buttonText}</span>
        </motion.a>
      </div>
    </div>
  );
};

export default SlideContent;
