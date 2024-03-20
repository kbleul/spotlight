import bg_img from "../assets/images/about.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";

const Projects = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  return (
    <article className="px-[10%] h-[100vh] overflow-hidden text-white bg-black flex items-start justify-between ">
      <section ref={ref} className="flex items-start justify-between">
        <motion.div
          className="w-full "
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[#4F4F4F] text-[115px] font-extrabold">
            Projects
          </h2>

          <p className="ml-[45%]">
            We provide a broad spectrum of services because we are a
            multifaceted business that meets the various needs of businesses.
            With this all-inclusive range of services, we enable businesses to
            effectively accomplish their goals, engage their audiences, and
            improve their brand presence.
          </p>

          <div className="expandButtonContainerSecondary mt-6">
            <button
              type="button"
              className="expandButton bg-white px-4 text-black py-2 text-sm font-normal flex gap-4 items-center"
            >
              <p className="text-nowrap">Read More</p>
              <IoIosArrowRoundForward className="expandButtonIcon" size={24} />
            </button>
          </div>
        </motion.div>
      </section>
    </article>
  );
};

export default Projects;
