import { IoIosArrowRoundForward } from "react-icons/io";
import FeedCard from "./FeedCard";
import { useRef, useState } from "react";
import feedsTrace from "../../assets/images/Feeds.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FeedModal from "../FeedModal";

const Feeds: React.FC = () => {
  const navigate = useNavigate();

  const [isFeedModalOpen, setIsFeednModalOpen] = useState<any>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { isPending, error, data } = useQuery({
    queryKey: ["latestBlogs"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}latest-blogs`).then(
        (res) => res.json()
      ),
  });

  //loading
  if (isPending) return <article className="bg-white h-screen" />;

  if (error) return <></>;

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

  const latestBlogs: any[] = data.data.data;

  return (
    <article
      className="border-t-[28px] border-[#F9F9F9] mt-[8vh] pt-[1vh] pb-[5rem] overflow-hidden text-black bg-white"
      onMouseMove={positionElement}
      onMouseLeave={hidePositionElement}
    >
      <div id="cursorItem" className="hidden lg:customCursor" />

      <section
        id="feedsContainer"
        className="flex items-start justify-between px-[5%]"
      >
        <div className="w-full mb-8">
          <div className="flex justify-between items-center">
            <img
              src={feedsTrace}
              alt=""
              className="w-full lgw-1/2 max-w-[500px]"
            />

            <div className="expandButtonContainerSecondary mt-12 hidden lg:block">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/feeds");
                }}
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
        className="scroll-tab-container hidden  lg:flex flex-col lg:flex-row gap-6 w-full pb-6 ml-[5%]"
      >
        {latestBlogs.slice(0, 8).map((blog: any) => (
          <div
            key={blog.id}
            className="w-full lg:w-[45%] feed max-w-[450px] flex-shrink-0"
          >
            <FeedCard
              item={blog}
              isFeed
              handleClick={() => setIsFeednModalOpen(blog)}
              showArrow={true}
            />
          </div>
        ))}
      </section>

      <section className=" flex lg:hidden flex-col lg:flex-row gap-6 w-full pb-6 px-[3%] lg:ml-[5%] lg:px-0 items-center">
        {latestBlogs.slice(0, 3).map((blog: any) => (
          <div
            key={blog.id}
            className="w-full lg:w-[45%] feed max-w-[450px] flex-shrink-0"
          >
            <FeedCard
              item={blog}
              isFeed
              handleClick={() => setIsFeednModalOpen(blog)}
              showArrow={true}
            />
          </div>
        ))}
      </section>

      {isFeedModalOpen && (
        <div className="mt-[10vh]">
          <FeedModal
            isFeedModalOpen={isFeedModalOpen}
            setIsFeednModalOpen={setIsFeednModalOpen}
          />
        </div>
      )}
    </article>
  );
};

export default Feeds;
