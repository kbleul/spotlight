import img1 from "../../assets/images/cola_placeholder2.png";
import img2 from "../../assets/images/culture/3.svg";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { handleNavigateToCaseStudy } from "../Projects/ServicesProjects";
import { useNavigate } from "react-router-dom";

const CONTENT = [
  {
    id: "featured0001",
    title: "Coca Cola",
    body: "Specializing in crafting narratives that elevate brands, Specializing in crafting narratives that elevate brands",
    img: img1,
  },
  {
    id: "featured0002",
    title: "Safaricom",
    body: "Seamlessly blending research, strategy, and execution, our Marketing service ensures your brand’s, our Marketing service ensures your brand’s ",
    img: img2,
  },
  {
    id: "featured0003",
    title: "Nike",
    body: "Masterfully coordinating channels, our Advertising service ensures effective brand connection, increasing engagement and market share.",
    img: img1,
  },
  {
    id: "featured005",
    title: "Sun chips",
    body: "Specializing in crafting narratives that elevate brands Specializing in crafting narratives that elevate brands",
    img: img2,
  },
  {
    id: "featured0006",
    title: "Yango",
    body: "Specializing in crafting narratives that elevate brands Specializing in crafting narratives that elevate brands Specializing in crafting narratives that elevate brands",
    img: img1,
  },
  {
    id: "featured0007",
    title: "GER",
    body: "Specializing in crafting narratives that elevate brands Specializing in crafting narratives that elevate brands Specializing in crafting narratives that elevate brands",
    img: img2,
  },
];

const Featured = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const navigate = useNavigate();

  const [isZero, setIsZero] = useState(0);

  const [currentContent, setCurrentContent] = useState(0);
  const [, setScrolledAmountCounter] = useState(0);

  useEffect(() => {
    const scrollContainer = document.getElementById("scrollContainer");

    if (inView && scrollContainer) {
      const rootElement = document.getElementById("root-body");
      if (rootElement) {
        rootElement.style.overflowY = "hidden";
      }
    } else {
      const rootElement = document.getElementById("root-body");
      if (rootElement) {
        if (rootElement.style.overflowY === "hidden") {
          rootElement.style.overflowY = "scroll";
        }
      }
    }
  }, [inView]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      if (inView) {
        const delta = event.deltaY;

        setScrolledAmountCounter((prev) => {
          if (prev >= 13) {
            if (delta < 0) {
              if (currentContent > 0) {
                setCurrentContent((prevContent) => {
                  return prevContent > 0 ? prevContent - 1 : 0;
                });
                setIsZero(0);
              } else {
                setIsZero((prev) => prev + 1);
              }
            } else if (delta > 0) {
              setCurrentContent((prevContent) => {
                if (prevContent >= CONTENT.length - 1) {
                  const rootElement = document.getElementById("root-body");

                  if (rootElement && rootElement.style.overflowY === "hidden") {
                    rootElement.style.overflowY = "scroll";
                    setTimeout(() => setCurrentContent(0), 2000);
                  }
                }
                return prevContent + 1;
              });
            }

            setScrolledAmountCounter(0);
          }
          return prev + 1;
        });
      }
    };

    const scrollContainer = document.getElementById("scrollContainer");

    if (scrollContainer) {
      window.addEventListener("wheel", handleScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentContent, inView]);

  const { isPending, error, data } = useQuery({
    queryKey: ["galleries"],
    queryFn: () =>
      fetch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}featured-projects`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (isZero >= 2) {
      const rootElement = document.getElementById("root-body");
      if (rootElement) {
        rootElement.style.overflowY = "scroll";
      }
    }
  }, [isZero]);

  //loading
  if (isPending) return <article className="bg-white h-screen" />;

  if (error) return <></>;

  const featuredProjects: any[] = data.data.data;

  const contentDispatch = () => {
    return (
      <div
        className="w-1/2 max-w-[470px] "
        key={
          featuredProjects[
            currentContent >= featuredProjects.length - 1
              ? featuredProjects.length - 1
              : currentContent
          ]
        }
      >
        <motion.img
          src={
            featuredProjects[
              currentContent >= featuredProjects.length - 1
                ? featuredProjects.length - 1
                : currentContent
            ].cover.url
          }
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        />

        <section className="py-2 pl-2 flex items-start gap-4">
          <div className="w-1/2">
            <motion.h3
              className="text-3xl font-bold"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              0
              {currentContent >= featuredProjects.length - 1
                ? featuredProjects.length - 1
                : currentContent + 1}
            </motion.h3>
            <motion.p
              className="text-[#777777] text-xs  mt-4"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {
                featuredProjects[
                  currentContent >= featuredProjects.length - 1
                    ? featuredProjects.length - 1
                    : currentContent
                ].sub_title
              }
            </motion.p>

            <motion.div
              className="expandButtonContainerSecondary mt-6"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1 }}
            >
              <button
                type="button"
                className={
                  "expandButton bg-white px-4 text-black py-2 text-sm font-normal flex gap-4 items-center"
                }
                onClick={() =>
                  handleNavigateToCaseStudy(
                    featuredProjects[
                      currentContent >= featuredProjects.length - 1
                        ? featuredProjects.length - 1
                        : currentContent
                    ],
                    navigate
                  )
                }
              >
                <p className="text-nowrap pl-2">Read Me</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={24}
                />
              </button>
            </motion.div>
          </div>
          <motion.p
            className="w-1/2 text-sm"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {
              featuredProjects[
                currentContent >= featuredProjects.length - 1
                  ? featuredProjects.length - 1
                  : currentContent
              ].content
            }
          </motion.p>
        </section>
      </div>
    );
  };
  return (
    <>
      <article id="scrollContainer" className="hidden lg:block">
        <article
          className={
            "h-[105vh] px-[5%] pb-[5rem] overflow-hidden text-white bg-black"
          }
        >
          <h2 className="py-4 text-[#4F4F4F] text-[70px] lg:text-[100px] text-center lg:text-left font-extrabold">
            Featured
          </h2>

          <section ref={ref} className="w-full flex items-center mt-2 h-4/5 ">
            <div className="w-1/2 pl-[10%] pt-4 text-[#777777] text-4xl  font-extrabold ">
              {featuredProjects
                .slice(0, 6)
                .map((content: any, index: number) => (
                  <p
                    key={content.id}
                    className={
                      currentContent === index
                        ? "text-white mb-10 line-clamp-1"
                        : "mb-10 line-clamp-1"
                    }
                  >
                    {content.title}
                  </p>
                ))}
            </div>
            {contentDispatch()}
          </section>
        </article>
      </article>

      <article className="lg:hidden">
        <article
          className={"px-[5%] pb-[5rem] overflow-hidden text-white bg-black"}
        >
          <h2 className="py-4 text-[#4F4F4F] text-[70px] lg:text-[100px] text-center lg:text-left font-extrabold">
            Featured
          </h2>

          <motion.img
            src={
              CONTENT[currentContent >= CONTENT.length - 1 ? 5 : currentContent]
                .img
            }
            className="w-1/2 mx-[10%] mb-8"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          <section className="w-full flex items-center ">
            <div className="w-full px-[10%] text-[#777777] text-4xl  font-extrabold flex flex-col items-start ">
              {featuredProjects
                .slice(0, 6)
                .map((content: any, index: number) => (
                  <button
                    type="button"
                    onClick={() => setCurrentContent(index)}
                    key={content.id}
                    className={
                      currentContent === index ? "text-white mb-10" : "mb-10 "
                    }
                  >
                    {content.title}
                  </button>
                ))}
            </div>
          </section>
        </article>
      </article>
    </>
  );
};

export default Featured;
