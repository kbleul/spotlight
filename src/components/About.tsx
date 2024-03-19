import bg_img from "../assets/images/about.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  return (
    <article className="px-[10%] py-36 overflow-hidden text-white bg-black flex items-start justify-between ">
      <section ref={ref} className="flex items-start justify-between">
        <motion.div
          className="w-[45%] "
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[#4F4F4F] text-[100px] font-extrabold">About</h2>
          <h5 className="font-semibold text-xl">
            Where Creativity Meets Strategy
          </h5>
          <p className="mt-2">
            We provide a broad spectrum of services because we are a
            multifaceted business that meets the various needs of businesses.
            With this all-inclusive range of services, we enable businesses to
            effectively accomplish their goals, engage their audiences, and
            improve their brand presence.
          </p>

          <div className="expandButtonContainerSecondary mt-6">
            <button className="expandButton bg-white px-4 text-black py-2 text-sm font-normal flex gap-4 items-center">
              <p className="text-nowrap">Read More</p>
              <IoIosArrowRoundForward className="expandButtonIcon" size={24} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="w-[45%] flex justify-center items-start  pt-4"
          initial={inView ? { x: 1000 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: 1000 }}
          transition={{ duration: 1 }}
        >
          <img src={bg_img} alt="" className="max-w-[20rem]" />
        </motion.div>
      </section>
    </article>
  );
};

export default About;
