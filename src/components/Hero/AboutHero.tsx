import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutHero = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

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
    <>
      <article className="lg:h-full px-[3%] lg:px-0 bg-black text-white pt-[5vh] lg:pt-[10vh]">
        <motion.article
          ref={ref}
          variants={heroVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className=""
        >
          <div className="lg:ml-[25%] flex flex-col items-center lg:block">
            <h2 className=" text-6xl md:text-8xl text-center lg:text-left font-extrabold  tracking-wider">
              Under the
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-8xl text-center lg:text-left font-extrabold capitalize tracking-wider">
              Spotlight
            </h2>
          </div>

          <div className="w-full lg:w-4/5 lg:ml-[5%] mt-8 lg:mt-20 flex justify-center lg:justify-end text-[#777777]">
            <p className="px-3 lg:px-0 max-w-[600px] lg:max-w-none lg:w-1/2 text-white lg:text-[#777777]">
              We don’t stop until we put our brands front-and-center. Through
              deep insights, creative strategy, and spotless execution, we
              showcase brands as must-see icons and thought leaders that inspire
              their action.
            </p>
          </div>
        </motion.article>
      </article>
    </>
  );
};

export default AboutHero;
