import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { scrollToContactSection } from "../../utils/func";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["allProjects"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}projects`).then(
        (res) => res.json()
      ),
  });

  //loading

  if (error || isPending) return <></>;

  return (
    <article className=" px-[5%] pb-[5rem] overflow-hidden text-white bg-black">
      <section className="flex items-start justify-between">
        <div className="w-full ">
          <div className="flex justify-between items-start">
            <h2 className="text-[#4F4F4F] text-[75px] text-center lg:text-left md:text-[90px] lg:text-[115px] font-extrabold">
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
                <p className="text-nowrap">Read More</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={24}
                />
              </button>
            </div>
          </div>

          <p className="lg:ml-[15%] max-w-[1000px] mt-4 lg:pr-[7%] text-[#B9B9B9] lg:text-lg">
            From global titans to innovative startups, our brands shine. Explore
            our campaigns that have stood out and captured hearts.
          </p>
        </div>
      </section>

      <ProjectsGrid projects={data.data.data} />
    </article>
  );
};

const ProjectsGrid = ({ projects }: { projects: any[] }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <article ref={ref} className="w-full flex justify-center">
      <motion.div
        className="w-full gap-6 flex flex-col lg:flex-row justify-center items-center max-w-[1000px] mt-14 lg:mt-0"
        initial={inView ? { y: -1000, x: 0 } : { y: 0, x: 0 }}
        animate={inView ? { y: 0, x: 0 } : { y: 1000, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="w-[90%] lg:w-1/3 max-w-[400px] flex flex-col gap-8 rounded-md">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
        </section>
        <section className="w-[90%] lg:w-1/3 max-w-[400px]  flex flex-col gap-6 lg:mt-[3vh] ">
          <ProjectCard project={projects[2]} />
          <section className="hidden lg:flex h-[50vh] px-4 bg-white text-black rounded-md flex-col gap-4 justify-center items-center">
            <h4 className="font-extrabold w-full text-center">
              Shape your Success: Partner with Our Experts!
            </h4>
            <p className="w-full text-center text-[#777777]">
              Explore our standout projects and let's craft your brand's success
              story together. Get in touch now!
            </p>
            <div className="expandButtonContainerSecondary mt-16  pl-3">
              <button
                onClick={() => scrollToContactSection()}
                type="button"
                className="expandButton bg-black px-4 text-white py-2 border k font-normal flex gap-4 items-center"
              >
                <p className="text-base text-nowrap">Contact</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={33}
                />
              </button>
            </div>
          </section>
        </section>
        <section className="w-[90%] lg:w-1/3 max-w-[400px] flex flex-col gap-8 rounded-md">
          <ProjectCard project={projects[3]} />
          <ProjectCard project={projects[4]} />
          <section className="flex lg:hidden h-[50vh] px-4 bg-white text-black rounded-md flex-col gap-4 justify-center items-center">
            <h4 className="font-extrabold w-full text-center">
              Are You Looking For Something Special Or Different?
            </h4>
            <p className="w-full text-center text-[#777777]">
              Lorem ipsum dolor sit amet consectetur. Egestas accumsan tristique
              sed nibh suspendisse orci. Sed faucibus quis id vitae elementum
              libero.
            </p>
            <div className="expandButtonContainerSecondary mt-16  pl-3">
              <button
                type="button"
                className="expandButton bg-black px-4 text-white py-2 border k font-normal flex gap-4 items-center"
              >
                <p className="text-base text-nowrap">Contact</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={33}
                />
              </button>
            </div>
          </section>
        </section>
      </motion.div>
    </article>
  );
};

export default Projects;
