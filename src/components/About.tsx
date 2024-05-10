import bg_img from "../assets/images/about.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const About = () => {
  const navigate = useNavigate();
  const [isViewed, setIsViewed] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setIsViewed(true);
    }
  }, [inView]);

  return (
    <article className="px-[2%] md:px-[7%] relative">
      <h2 className="stroke-black text-[#4F4F4F] text-[70px] px-4 md:px-0  md:pt-16  text-left  font-extrabold absolute top-4">
        About
      </h2>

      <article className="pb-10  lg:pt-2  pl-4 md:pl-0 overflow-hidden text-black bg-white flex items-start justify-between ">
        <section
          ref={ref}
          className=" pt-20 pb-20 flex flex-col md:flex-row items-center justify-between"
        >
          <motion.div
            className="w-full lg:w-[55%] lg:px-0 "
            initial={inView ? { x: isViewed ? 0 : -600 } : { x: 0 }}
            animate={inView ? { x: 0 } : { x: isViewed ? 0 : -600 }}
            transition={{ duration: 1 }}
          >
            <h5 className="font-extrabold text-4xl mt-8 mb-3 md:mb-0">
              We Take The Stage
            </h5>
            <p className="mt-2 text-[#4f4f4f] text-lg md:text-2xl">
              We are a leading creative communications, marketing, and
              advertising agency in Ethiopia sparking bold, trendsetting ideas.
              Our innovative strategies amplify brands and businesses, making
              them stand out.
            </p>

            <div className="expandButtonContainerSecondary mt-6">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/about");
                }}
                type="button"
                className="expandButton bg-black px-4 text-white py-2 text-sm font-normal flex gap-4 items-center"
              >
                <p className="text-nowrap">Learn More</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={24}
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[40%] hidden lg:flex justify-center items-start  pt-4 "
            initial={inView ? { x: isViewed ? 0 : 1000 } : { x: 0 }}
            animate={inView ? { x: 0 } : { x: isViewed ? 0 : 1000 }}
            transition={{ duration: 1 }}
          >
            <img src={bg_img} alt="" className="max-w-[28rem]" />
          </motion.div>
        </section>
      </article>
    </article>
  );
};

export default About;
