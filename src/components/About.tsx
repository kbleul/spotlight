import bg_img from "../assets/images/about.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <article className="px-[2%] md:px-[10%] pt-2 pb-32 lg:pt-16 lg:py-52 overflow-hidden text-white bg-black flex items-start justify-between ">
      <section
        ref={ref}
        className="flex flex-col md:flex-row items-start justify-between"
      >
        <motion.div
          className="w-full lg:w-[45%] px-[5%] lg:px-0"
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[#4F4F4F] text-[90px] text-center lg:text-left md:text-[115px] font-extrabold">
            About
          </h2>
          <h5 className="font-semibold text-lg md:text-xl mt-8 mb-3 md:mb-0">
            We Take The Stage
          </h5>
          <p className="mt-2 lg:text-lg">
            We are a leading creative communications, marketing, and advertising
            agency in Ethiopia sparking bold, trendsetting ideas. Our innovative
            strategies amplify brands and businesses, making them stand out.
          </p>

          <div className="expandButtonContainerSecondary mt-6">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/about");
              }}
              type="button"
              className="expandButton bg-white px-4 text-black py-2 text-sm font-normal flex gap-4 items-center"
            >
              <p className="text-nowrap">Learn More</p>
              <IoIosArrowRoundForward className="expandButtonIcon" size={24} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[45%] hidden lg:flex justify-center items-start  pt-4"
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
