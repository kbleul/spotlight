import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.5 }); // Adjust threshold as needed

  const heroVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8, // Initial scale for a subtle zoom-in effect
    },
    visible: {
      opacity: 1,
      scale: 1, // Full scale
      transition: {
        duration: 1, // Animation duration in seconds (adjust as desired)
        ease: "easeInOut", // Timing function for smooth animation
      },
    },
  };

  return (
    <article className="h-[90vh] bg-white flex justify-center items-center">
      <motion.article
        ref={ref}
        variants={heroVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="h-[85vh] pt-[20vh] text-[#777777] bg-white flex flex-col justify-start items-center "
      >
        <div className="flex gap-5">
          <motion.p
            className="text-8xl font-extrabold capitalize tracking-wider" // Adjust font size and style
            variants={heroVariants}
          >
            We create{" "}
          </motion.p>
          <motion.p
            className="text-8xl font-extrabold capitalize text-black tracking-wider" // Adjust font size and style
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            modern
          </motion.p>
        </div>

        <motion.p
          className="py-4 text-8xl font-extrabold capitalize tracking-wider" // Adjust font size and style
          variants={heroVariants}
        >
          experiences for
        </motion.p>
        <motion.p
          className="text-8xl font-extrabold capitalize text-black tracking-wider" // Adjust font size and style
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          tomorrow’s brands
        </motion.p>
      </motion.article>
    </article>
  );
};

export default Hero;
