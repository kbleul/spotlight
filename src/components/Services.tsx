import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import service1_img from "../assets/images/services1.svg";
import service2_img from "../assets/images/services2.svg";
import service3_img from "../assets/images/services3.svg";
import service4_img from "../assets/images/Want.svg";

import { IoIosArrowRoundForward } from "react-icons/io";

const CONTENT = [
  {
    id: "services001",
    title: "Public Relations",
    body: "Specializing in crafting narratives that elevate brands, our Public Relations excels in weaving resonant stories, enhancing brand perception, and nurturing lasting connections. Gain increased visibility, trust, and audience connections through our strategic storytelling expertise.",
    img: service1_img,
  },
  {
    id: "services002",
    title: "Marketing",
    body: "Seamlessly blending research, strategy, and execution, our Marketing service ensures your brand’s comprehensive visibility. Drive your brand to the forefront with tailored strategies that elevate its market positioning and enhance overall presence.",
    img: service2_img,
  },
  {
    id: "services003",
    title: "Advertising",
    body: "Masterfully coordinating channels, our Advertising service ensures effective brand connection, increasing engagement and market share. From traditional to digital platforms, connect seamlessly with your audience and elevate your brand’s impact.",
    img: service3_img,
  },
  {
    id: "services004",
    title: "Want More?",
    body: "View more",
    img: service4_img,
  },
];

const Services = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.9 });

  useEffect(() => {
    if (inView) {
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
    const handleScroll = (event: any) => {
      event.preventDefault();

      if (inView) {
        const delta = event.deltaY;

        if (delta < 0 && currentContent > 0) {
          setCurrentContent((prevContent) => prevContent - 1);
        } else if (delta > 0) {
          setCurrentContent((prevContent) => prevContent + 1);
        }

        if (currentContent >= 9) {
          const rootElement = document.getElementById("root-body");

          if (rootElement && rootElement.style.overflowY === "hidden") {
            rootElement.style.overflowY = "scroll";
            setTimeout(() => setCurrentContent(0), 2000);
          }
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentContent, inView]);

  return (
    <article
      ref={ref}
      className={
        currentContent % 2 === 0 && currentContent !== 0
          ? "relative h-[108vh] bg-white mb-20 "
          : "relative h-[108vh] bg-black mb-20 "
      }
    >
      {inView && (
        <>
          {currentContent < 3 && (
            <div
              className="h-[108vh] w-full bg-black flex justify-evenly items-center "
              // initial={inView ? { x: 2000 } : { x: 0 }}
              // animate={inView ? { x: 0 } : { x: 2000 }}
              // transition={{ duration: 1 }}
            >
              <section className="w-[45%] max-w-[600px] text-white">
                <h2 className="text-[115px] font-extrabold text-[#4F4F4F] mb-6">
                  Services
                </h2>

                <div className="font-bold text-2xl">
                  <h4>{CONTENT[0].title}</h4>
                </div>

                <div className="max-w-[600px] mt-4">{CONTENT[0].body}</div>
              </section>
              <section className="w-[45%] flex justify-center items-start  pt-4 ">
                <motion.img
                  src={CONTENT[0].img}
                  alt="logo"
                  className="max-w-[25rem] max-h-[25rem]"
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.7 }}
                />
              </section>
            </div>
          )}

          {currentContent >= 3 && currentContent < 6 && (
            <motion.div
              className="h-[108vh] w-full bg-white flex justify-evenly items-center "
              initial={inView ? { x: 2000 } : { x: 0 }}
              animate={inView ? { x: 0 } : { x: 2000 }}
              transition={{ duration: 1 }}
            >
              <section className="w-[45%] max-w-[600px]">
                <h2 className="text-[115px] font-extrabold text-[#4F4F4F] mb-6">
                  Services
                </h2>

                <motion.div
                  className="font-bold text-2xl"
                  initial={{ y: -15 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h4>{CONTENT[1].title}</h4>
                </motion.div>

                <motion.div
                  className="max-w-[600px] mt-4"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {CONTENT[1].body}
                </motion.div>
              </section>
              <section className="w-[45%] flex justify-center items-start  pt-4 ">
                <img
                  src={CONTENT[1].img}
                  alt="logo"
                  className="max-w-[25rem] max-h-[25rem]"
                />
              </section>
            </motion.div>
          )}

          {currentContent >= 6 && currentContent < 9 && (
            <motion.div
              className="h-[108vh] w-full bg-black flex justify-evenly items-center "
              initial={inView ? { x: 2000 } : { x: 0 }}
              animate={inView ? { x: 0 } : { x: 2000 }}
              transition={{ duration: 1 }}
            >
              <section className="w-[45%] max-w-[600px] text-white">
                <h2 className="text-[115px] font-extrabold text-[#4F4F4F] mb-6">
                  Services
                </h2>

                <div className="font-bold text-2xl">
                  <h4>{CONTENT[2].title}</h4>
                </div>

                <div className="max-w-[600px] mt-4">{CONTENT[2].body}</div>
              </section>
              <section className="w-[45%] flex justify-center items-start  pt-4 ">
                <img
                  src={CONTENT[2].img}
                  alt="logo"
                  className="max-w-[25rem] max-h-[25rem]"
                />
              </section>
            </motion.div>
          )}

          {currentContent >= 9 && (
            <article className="h-[108vh]">
              <section className="w-1/2 "></section>

              <motion.div
                className="absolute top-0 right-0 w-2/5 h-[110vh] bg-white flex flex-col justify-start items-center px-[5%]  pt-[30vh] "
                initial={inView ? { x: 2000 } : { x: 0 }}
                animate={inView ? { x: 0 } : { x: 2000 }}
                transition={{ duration: 1 }}
              >
                <img className="" src={CONTENT[3].img} alt="" />

                <p className="py-16 text-[#777777] font-medium">
                  Lorem ipsum dolor sit amet consectetur. Ut et vestibulum
                  lectus nullam tellus aliquet pellentesque a dui. Nunc leo at
                  sit fusce.
                </p>
                <div className="expandButtonContainerThird">
                  <button
                    type="button"
                    className="expandButton bg-white px-4 text-black py-2 border border-black font-normal flex gap-4 items-center"
                  >
                    <p className="text-base text-nowrap">{CONTENT[3].body}</p>
                    <IoIosArrowRoundForward
                      className="expandButtonIcon"
                      size={33}
                    />
                  </button>
                </div>
              </motion.div>
            </article>
          )}
        </>
      )}
    </article>
  );
};

export default Services;
