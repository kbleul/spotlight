import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.5 }); // Adjust threshold as needed

  const heroVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <article className="lg:h-[90vh] pt-16  pb-28 lg:pt-0 lg:pb-0 bg-white flex justify-center items-center">
      <motion.article
        ref={ref}
        variants={heroVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="lg:h-[85vh] pt-[4vh] lg:pt-[20vh] text-[#777777] bg-white flex flex-col justify-start items-center text-3xl lg:text-8xl "
      >
        <div className="flex gap-2 lg:gap-5 ">
          <motion.p
            className=" font-extrabold capitalize tracking-wider"
            variants={heroVariants}
          >
            We make{" "}
          </motion.p>
          <motion.p
            className=" font-extrabold capitalize text-black tracking-wider"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            standing
          </motion.p>
        </div>

        <motion.p
          className="lg:py-4  font-extrabold capitalize tracking-wider"
          variants={heroVariants}
        >
          <span className="text-black">out</span> simple
        </motion.p>
        {/* <motion.p
          className=" font-extrabold capitalize text-black tracking-wider"
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          
        </motion.p> */}
      </motion.article>
    </article>
  );
};

export default Hero;
