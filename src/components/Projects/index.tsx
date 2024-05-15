import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProjectsGrid from "../ProjectsGrid";

const Projects = () => {
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["allProjects"],
    queryFn: () =>
      fetch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}featured-projects`
      ).then((res) => res.json()),
  });

  if (error || isPending) return <></>;
  return (
    <article className="px-4 lg:px-[5%] pb-[5rem] md:pt-8 overflow-hidden text-white bg-black ">
      <section className="flex items-start justify-between">
        <div className="w-full ">
          <div className="flex justify-between items-start">
            <h2 className="font-poppins text-[#4F4F4F] text-[70px] text-center lg:text-left md:text-[90px] lg:text-[115px] font-extrabold">
              Projects
            </h2>
            <div className="hidden lg:block expandButtonContainerSecondary mt-12">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/works");
                }}
                type="button"
                className="expandButton bg-white px-4 text-black py-2 text-sm font-normal flex gap-4 items-center"
              >
                <p className="text-nowrap">Explore All</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={24}
                />
              </button>
            </div>
          </div>

          <p className="lg:ml-[15%] max-w-[1000px] mt-4 lg:pr-[7%] text-[#B9B9B9] lg:text-2xl">
            From global titans to innovative startups, our brands shine. Explore
            our campaigns that have stood out and captured hearts.
          </p>
        </div>
      </section>

      <ProjectsGrid projects={data.data.data} />
    </article>
  );
};

export default Projects;
