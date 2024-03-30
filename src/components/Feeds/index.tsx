import { IoIosArrowRoundForward } from "react-icons/io";
import FeedCard from "./FeedCard";
import { useRef, useState } from "react";
import feedsTrace from "../../assets/images/Feeds.svg";

const Feeds: React.FC = () => {
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

  const positionElement = (e: React.MouseEvent<HTMLDivElement>) => {
    const cursorItem = document.getElementById("cursorItem");

    if (cursorItem) {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursorItem.style.display = "block";
      cursorItem.style.transform = `translate3d(${mouseX}px, ${
        mouseY + 100
      }px, 0)`;
    }
  };

  const hidePositionElement = () => {
    const cursorItem = document.getElementById("cursorItem");
    if (cursorItem) {
      cursorItem.style.display = "hidden";
    }
  };

  return (
    <article
      className="border-t-[28px] border-[#F9F9F9] mt-[8vh] pt-[1vh] pb-[5rem] overflow-hidden text-black bg-white"
      onMouseMove={positionElement}
      onMouseLeave={hidePositionElement}
    >
      <div id="cursorItem" className="hidden customCursor" />

      <section className="flex items-start justify-between px-[5%]">
        <div className="w-full mb-8">
          <div className="flex justify-between items-center">
            <img src={feedsTrace} alt="" className="w-1/2 max-w-[500px]" />

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
        </div>
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
