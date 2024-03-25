import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";
import FeedCard from "./FeedCard";

const Feeds = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  return (
    <article
      ref={ref}
      className="pt-[10vh]  pb-[5rem] overflow-hidden text-black bg-white"
    >
      <section className="flex items-start justify-between px-[5%] hover:overflow-x-scroll border-4">
        <motion.div
          className="w-full "
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-between items-start">
            <h2 className="text-[#4F4F4F] text-[115px] font-extrabold">
              Feeds
            </h2>
            <div className="expandButtonContainerSecondary mt-12">
              <button
                type="button"
                className="expandButton bg-black px-4 text-white py-2 text-sm font-normal flex gap-4 items-center"
              >
                <p className="text-nowrap pl-2">View All</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={24}
                />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="flex  gap-6 w-full overflow-x-scroll pb-6 feeds_scroll pl-[5%]">
        <motion.div
          className="w-[37%] flex-shrink-0"
          initial={inView ? { x: 1200 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: 1200 }}
          transition={{ duration: 0.7 }}
        >
          <FeedCard />
        </motion.div>
        <motion.div
          className="w-[37%] flex-shrink-0"
          initial={inView ? { x: 1200 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: 1200 }}
          transition={{ duration: 1.2 }}
        >
          <FeedCard />
        </motion.div>
        <motion.div
          className="w-[37%] flex-shrink-0"
          initial={inView ? { x: 1200 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: 1200 }}
          transition={{ duration: 1.6 }}
        >
          <FeedCard />
        </motion.div>
      </section>
    </article>
  );
};

export default Feeds;
