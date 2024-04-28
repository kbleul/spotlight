import { IoIosArrowRoundForward } from "react-icons/io";
import projectTraceImage from "../../assets/images/Projects.svg";
import FeedCard from "../Feeds/FeedCard";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const handleNavigateToCaseStudy = (item: any, navigate: any) => {
  window.scrollTo(0, 0);
  const rootElement = document.getElementById("root-body");
  if (rootElement) {
    rootElement.style.overflowY = "scroll";
  }
  navigate("/case-study/" + item.id, { state: { item } });
};

const ServicesProjects = () => {
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["allProjects"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}projects`).then(
        (res) => res.json()
      ),
  });

  //loading
  if (isPending) return <article className="bg-white h-screen" />;

  if (error) return <></>;

  const projectsArr: any[] = data.data.data;

  return (
    <article className="bg-white flex flex-col lg:flex-row items-start px-[5%] pt-0 lg:py-16">
      <section className="w-full lg:w-1/2 pt-12 flex flex-col  justify-center items-center gap-8 order-2 lg:order-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={"ServicesProjects-" + i} className="max-w-[800px]">
            <FeedCard
              item={projectsArr[i]}
              handleClick={() =>
                handleNavigateToCaseStudy(projectsArr[i], navigate)
              }
              showArrow
            />
          </div>
        ))}

        {/* <div className="expandButtonContainerSecondary mt-6">
          <button
            type="button"
            className="expandButton bg-black px-4 text-white py-2 text-sm font-normal flex gap-4 items-center"
          >
            <p className="text-nowrap">Load More</p>
            <IoIosArrowRoundForward className="expandButtonIcon" size={24} />
          </button>
        </div> */}
      </section>
      <section className="w-full lg:w-1/2 pt-12 flex flex-col  justify-center items-center gap-8 order-1 lg:order-2">
        <img src={projectTraceImage} alt="Projects" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={"ServicesProjects-secondary" + i} className="max-w-[800px]">
            <FeedCard
              item={projectsArr[i + 3]}
              handleClick={() =>
                handleNavigateToCaseStudy(projectsArr[i + 3], navigate)
              }
              showArrow
            />
          </div>
        ))}
      </section>
    </article>
  );
};

export default ServicesProjects;
