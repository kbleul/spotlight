import { Suspense, lazy, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { scrollToContactSection } from "../utils/func";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const ProjectCard = lazy(() => import("./Projects/ProjectCard"));

const ProjectsGrid = ({ projects }: { projects: any[] }) => {
  const [, setIsViewed] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsViewed(true);
    }
  }, [inView]);

  return (
    <article
      ref={ref}
      className="lg:w-[90%] lg:ml-[5%] flex justify-center mt-10"
    >
      <motion.div
        className="w-full gap-6 flex flex-col lg:flex-row justify-start items-center lg:items-stretch max-w-[1800px] mt-14 lg:mt-0"
        initial={inView ? { y: -1000, x: 0 } : { y: 0, x: 0 }}
        animate={inView ? { y: 0, x: 0 } : { y: 1000, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="w-[90%] lg:w-1/3 max-w-[700px] flex flex-col gap-8 rounded-md">
          <Suspense fallback={<></>}>
            <ProjectCard project={projects[0]} />
          </Suspense>
          <Suspense fallback={<></>}>
            <ProjectCard project={projects[3]} />
          </Suspense>
        </section>
        <section className="w-[90%] lg:w-1/3 max-w-[700px]  flex flex-col justify-between gap-6 ">
          <Suspense fallback={<></>}>
            <ProjectCard project={projects[1]} isMid />
          </Suspense>

          <section className="hidden lg:flex h-[30vh] px-4 bg-white text-black rounded-md flex-col gap-4 justify-center items-center">
            <h4 className="font-extrabold w-full text-center">See Our Wins.</h4>
            <p className="w-full text-center text-[#777777]">
              Explore our success stories of creating strategically creative
              communications solutions.
            </p>
            <div className="expandButtonContainerSecondary mt-16  pl-3">
              <button
                onClick={() => scrollToContactSection()}
                type="button"
                className="expandButton bg-black px-4 text-white py-2 border k font-normal flex gap-4 items-center"
              >
                <p className="text-base text-nowrap">Connect</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={33}
                />
              </button>
            </div>
          </section>
        </section>
        <section className="w-[90%] lg:w-1/3 max-w-[700px] flex flex-col gap-8 rounded-md">
          <Suspense fallback={<></>}>
            <ProjectCard project={projects[2]} />
          </Suspense>
          <Suspense fallback={<></>}>
            <ProjectCard project={projects[4]} />
          </Suspense>
          <section className="flex lg:hidden py-8 lg:py-0 lg:h-[50vh] px-4 bg-white text-black rounded-md flex-col gap-4 justify-center items-center">
            <h4 className="font-extrabold w-full text-center">
              Are You Looking For Something Special Or Different?
            </h4>
            <p className="w-full text-center text-[#777777]">
              Lorem ipsum dolor sit amet consectetur. Egestas accumsan tristique
              sed nibh suspendisse orci. Sed faucibus quis id vitae elementum
              libero.
            </p>
            <div className="expandButtonContainerSecondary mt-4 lg:mt-16  pl-3">
              <button
                type="button"
                className="expandButton bg-black px-4 text-white py-2 border k font-normal flex gap-4 items-center"
              >
                <p className="text-base text-nowrap">Connect</p>
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

export default ProjectsGrid;
