import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";
import FeedCard from "./FeedCard";
import { useRef, useState } from "react";

const Feeds: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsMouseDown(true);
    setStartX(e.pageX - -scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !scrollRef.current) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current || !e.touches[0]) return;

    setIsMouseDown(true);
    setStartX(e.touches[0].pageX - -scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsMouseDown(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMouseDown || !scrollRef.current || !e.touches[0]) return;

    e.preventDefault();

    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <article
      ref={ref}
      className="pt-[10vh] pb-[5rem] overflow-hidden text-black bg-white"
    >
      <section className="flex items-start justify-between px-[5%]">
        <motion.div
          className="w-full"
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

      <section
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        className="scroll-tab-container flex gap-6 w-full pb-6 ml-[5%]"
      >
        <div className="w-[45%] feed max-w-[450px] flex-shrink-0">
          <FeedCard />
        </div>
        <div className="w-[45%] feed max-w-[450px] flex-shrink-0">
          <FeedCard />
        </div>
        <div className="w-[45%] feed max-w-[450px] flex-shrink-0">
          <FeedCard />
        </div>
        <div className="w-[45%] feed max-w-[450px] flex-shrink-0">
          <FeedCard />
        </div>
        <div className="w-[45%] feed max-w-[450px] flex-shrink-0">
          <FeedCard />
        </div>
        <div className="w-[45%] feed max-w-[450px] flex-shrink-0 mr-32">
          <FeedCard />
        </div>
      </section>
    </article>
  );
};

export default Feeds;
