import { motion } from "framer-motion";
import img5 from "../../assets/images/6.jpg";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { handleNavigateToCaseStudy } from "../Projects/ServicesProjects";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import parse from "html-react-parser";
const Featured = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
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
                if (prevContent >= 6) {
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

  const featuredProjects: any[] = data.data.data.slice(0, 6);

  const contentDispatch = () => {
    return (
      <div
        className="w-1/2 cursor-pointer"
        key={
          featuredProjects[
            currentContent >= featuredProjects.length - 1
              ? featuredProjects.length - 1
              : currentContent
          ]
        }
        onClick={() =>
          featuredProjects[
            currentContent >= featuredProjects.length - 1
              ? featuredProjects.length - 1
              : currentContent
          ].content &&
          featuredProjects[
            currentContent >= featuredProjects.length - 1
              ? featuredProjects.length - 1
              : currentContent
          ].sub_title &&
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
        <div className="w-full flex justify-center">
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
            className="w-[90%] max-w-[510px]"
          />
        </div>

        <article className="w-full flex justify-center ">
          <section className="w-[90%] max-w-[510px] py-2 px-4 flex justify-around items-center gap-4 ">
            <div className="w-1/2">
              <motion.h3
                className="text-3xl font-bold"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                0
                {currentContent >= featuredProjects.length - 1
                  ? featuredProjects.length
                  : currentContent + 1}
              </motion.h3>
              {featuredProjects[
                currentContent >= featuredProjects.length - 1
                  ? featuredProjects.length - 1
                  : currentContent
              ].sub_title && (
                <motion.p
                  className="text-[#777777] text-sm line-clamp-3  mt-4 "
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {parse(
                    featuredProjects[
                      currentContent >= featuredProjects.length - 1
                        ? featuredProjects.length - 1
                        : currentContent
                    ].sub_title
                  )}
                </motion.p>
              )}

              {featuredProjects[
                currentContent >= featuredProjects.length - 1
                  ? featuredProjects.length - 1
                  : currentContent
              ].content &&
                featuredProjects[
                  currentContent >= featuredProjects.length - 1
                    ? featuredProjects.length - 1
                    : currentContent
                ].sub_title && (
                  <motion.div
                    className="expandButtonContainerSecondary mt-6"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1 }}
                  >
                    <div
                      className={
                        "expandButton bg-white px-4 lg:px-2 text-black py-2 text-sm font-normal flex gap-4 items-center"
                      }
                    >
                      {<p className="text-nowrap pl-2 lg:pl-1">Read Me</p>}
                      <IoIosArrowRoundForward
                        className="expandButtonIcon"
                        size={24}
                      />
                    </div>
                  </motion.div>
                )}
            </div>
            <motion.p
              className="w-1/2 text-sm line-clamp-[8]"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {parse(
                featuredProjects[
                  currentContent >= featuredProjects.length - 1
                    ? featuredProjects.length - 1
                    : currentContent
                ].content
              )}
            </motion.p>
          </section>
        </article>
      </div>
    );
  };

  return (
    <>
      {featuredProjects && featuredProjects.length > 0 && (
        <>
          {" "}
          <article className="hidden lg:block">
            <article
              className={
                "h-[101vh] px-[5%] pb-[5rem] overflow-hidden text-white bg-black"
              }
            >
              <h2 className="py-4 text-[#4F4F4F] text-[70px] lg:text-[100px] text-center lg:text-left font-extrabold stroke">
                Featured
              </h2>

              <section
                ref={ref}
                className="w-full flex items-stretch mt-[5vh] h-4/5 "
              >
                <div className="w-1/2  px-[5%] pt-4 text-[#777777] text-4xl  font-extrabold flex flex-col gap-[11%] items-start">
                  {featuredProjects
                    .slice(0, 5)
                    .map((content: any, index: number) => (
                      <button
                        type="button"
                        onMouseEnter={() => setCurrentContent(index)}
                        onClick={() =>
                          featuredProjects[
                            currentContent >= featuredProjects.length - 1
                              ? featuredProjects.length - 1
                              : currentContent
                          ].content &&
                          featuredProjects[
                            currentContent >= featuredProjects.length - 1
                              ? featuredProjects.length - 1
                              : currentContent
                          ].sub_title &&
                          handleNavigateToCaseStudy(
                            featuredProjects[
                              currentContent >= featuredProjects.length - 1
                                ? featuredProjects.length - 1
                                : currentContent
                            ],
                            navigate
                          )
                        }
                        key={content.id}
                        className={
                          currentContent === index
                            ? "text-white  line-clamp-1 w-full text-left"
                            : " line-clamp-1 w-full text-left hover:text-white"
                        }
                      >
                        {content.title}
                      </button>
                    ))}
                </div>
                {contentDispatch()}
              </section>
            </article>
          </article>
          <article className="lg:hidden ">
            <article
              className={
                "px-[2%]  pb-[5rem] overflow-hidden text-white bg-black"
              }
            >
              <h2 className=" py-4 text-[#4F4F4F] text-[70px] lg:text-[100px] text-center lg:text-left font-extrabold">
                Featured
              </h2>

              <section className="w-full flex items-center ">
                <div className="w-full  px-[10%] text-[#777777] text-4xl  font-extrabold flex flex-col items-start ">
                  {featuredProjects
                    .slice(0, 6)
                    .map((content: any, index: number) => (
                      <button
                        type="button"
                        onClick={() =>
                          featuredProjects[
                            currentContent >= featuredProjects.length - 1
                              ? featuredProjects.length - 1
                              : currentContent
                          ].content &&
                          featuredProjects[
                            currentContent >= featuredProjects.length - 1
                              ? featuredProjects.length - 1
                              : currentContent
                          ].sub_title &&
                          handleNavigateToCaseStudy(content, navigate)
                        }
                        key={content.id}
                        className={
                          currentContent === index
                            ? "text-white mb-10 text-left flex w-full "
                            : "mb-10  w-full text-left flex "
                        }
                      >
                        <p className=" w-full"> {content.title}</p>
                        <div
                          className=" mb-8 relative"
                          // onClick={() =>
                          //   handleNavigateToCaseStudy(
                          //     featuredProjects[currentContent],
                          //     navigate
                          //   )
                          // }
                        >
                          {featuredProjects[
                            currentContent >= featuredProjects.length - 1
                              ? featuredProjects.length - 1
                              : currentContent
                          ].content &&
                            featuredProjects[
                              currentContent >= featuredProjects.length - 1
                                ? featuredProjects.length - 1
                                : currentContent
                            ].sub_title && (
                              <div
                                className="absolute top-0 "
                                style={{
                                  right: -30,
                                }}
                              >
                                <MdArrowOutward className="" size={28} />
                              </div>
                            )}
                        </div>
                      </button>
                    ))}
                </div>
              </section>
            </article>
          </article>
        </>
      )}
    </>
  );
};

export default Featured;
