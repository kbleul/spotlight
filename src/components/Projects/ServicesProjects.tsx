import { IoIosArrowRoundForward } from "react-icons/io";
import projectTraceImage from "../../assets/images/Projects.svg";
import FeedCard from "../Feeds/FeedCard";

const ServicesProjects = () => {
  return (
    <article className="bg-white flex flex-col lg:flex-row items-start px-[5%] pt-0 lg:py-16">
      <section className="w-full lg:w-1/2 pt-12 flex flex-col justify-center items-center gap-8 order-2 lg:order-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={"ServicesProjects-" + i} className="max-w-[800px]">
            <FeedCard />
          </div>
        ))}

        <div className="expandButtonContainerSecondary mt-6">
          <button
            type="button"
            className="expandButton bg-black px-4 text-white py-2 text-sm font-normal flex gap-4 items-center"
          >
            <p className="text-nowrap">Load More</p>
            <IoIosArrowRoundForward className="expandButtonIcon" size={24} />
          </button>
        </div>
      </section>
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8 order-1 lg:order-2">
        <img src={projectTraceImage} alt="Projects" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={"ServicesProjects-secondary" + i} className="max-w-[800px]">
            <FeedCard />
          </div>
        ))}
      </section>
    </article>
  );
};

export default ServicesProjects;
