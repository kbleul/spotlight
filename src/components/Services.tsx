import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import service1_img from "../assets/images/services1.svg";
import service2_img from "../assets/images/services2.svg";
import service3_img from "../assets/images/services3.svg";
import service4_img from "../assets/images/Want.svg";

import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  const [scrollPrecentage, setScrollPercentage] = useState(0);
  const [scrollPrecentageUp, setScrollPercentageUp] = useState(0);

  function handleWheel(event: WheelEvent) {
    if (inView) {
      const rootElement = document.getElementById("root-body");
      if (rootElement) {
        rootElement.style.overflowY = "hidden";
      }
      const container: HTMLElement | null =
        document.querySelector("#container");
      const container2: HTMLElement | null =
        document.querySelector("#container2");
      const container3: HTMLElement | null =
        document.querySelector("#container3");
      const container4: HTMLElement | null =
        document.querySelector("#container4");
      if (event.deltaY < 0) {
        setScrollPercentage((prev) => {
          if (prev === 0 && scrollPrecentageUp === 0) {
            rootElement.style.overflowY = "scroll";
          } else {
            rootElement.style.overflowY = "hidden";
          }

          return 0;
        });
        if (container && container2 && container3 && container4) {
          container.style.transform = `translateX(+${scrollPrecentageUp}%)`;
          container2.style.transform = `translateX(+${scrollPrecentageUp}%)`;
          container3.style.transform = `translateX(+${scrollPrecentageUp}%)`;
          container4.style.transform = `translateX(+${scrollPrecentageUp}%)`;
        }

        setScrollPercentageUp((prev) => {
          if (prev <= 3) {
            return 0;
          }

          return Math.max(prev - 5, 5);
        });
      } else {
        setScrollPercentageUp(0);
        if (container && container2 && container3 && container4) {
          container.style.transform = `translateX(-${scrollPrecentage}%)`;
          container2.style.transform = `translateX(-${scrollPrecentage}%)`;
          container3.style.transform = `translateX(-${scrollPrecentage}%)`;
          container4.style.transform = `translateX(-${scrollPrecentage}%)`;
        }

        setScrollPercentage((prev) => {
          if (prev >= 250) {
            const rootElement = document.getElementById("root-body");

            if (rootElement) {
              setTimeout(() => {
                rootElement.style.overflowY = "scroll";
              }, 1000);
            }

            return 250;
          }

          return Math.max(prev + 5, 5);
        });
      }
    } else {
      const rootElement = document.getElementById("root-body");
      if (rootElement) {
        rootElement.style.overflowY = "scroll";
      }
    }
  }

  const handleMouseLeave = () => {
    const container: HTMLElement | null = document.querySelector("#container");
    const container2: HTMLElement | null =
      document.querySelector("#container2");
    const container3: HTMLElement | null =
      document.querySelector("#container3");
    const container4: HTMLElement | null =
      document.querySelector("#container4");

    if (container && container2 && container3 && container4) {
      setTimeout(() => {
        container.style.transform = `translateX(-${0}%)`;
        container2.style.transform = `translateX(-${0}%)`;
        container3.style.transform = `translateX(-${0}%)`;
        container4.style.transform = `translateX(-${0}%)`;
      }, 1000);

      setScrollPercentage(0);
      setScrollPercentageUp(0);
    }
  };

  useEffect(() => {
    const rootElement = document.getElementById("root-body");

    if (inView) {
      if (rootElement) {
        rootElement.style.overflowY = "hidden";
      }
    } else {
      if (rootElement) {
        if (rootElement.style.overflowY === "hidden") {
          rootElement.style.overflowY = "scroll";
        }
      }

      handleMouseLeave();
    }
  }, [inView]);

  return (
    <>
      <article
        id="container-article"
        ref={ref}
        className="h-[105vh] w-full bg-transparent hidden lg:flex overflow-hidden"
        onWheel={handleWheel}
        onMouseLeave={handleMouseLeave}
      >
        <div
          id="container"
          className="w-full flex-shrink-0 h-[105vh] flex justify-evenly items-center bg-black"
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
            <img
              src={CONTENT[0].img}
              alt="logo"
              className="max-w-[25rem] max-h-[25rem]"
            />
          </section>
        </div>
        <div
          id="container2"
          className="w-full flex-shrink-0 h-[105vh] flex justify-evenly items-center bg-[#fce8bb]"
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
        </div>
        <div
          id="container3"
          className="w-full flex-shrink-0 h-[105vh] flex justify-evenly items-center bg-black"
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
        </div>
        <div
          id="container4"
          className="w-full flex-shrink-0 h-[105vh] flex flex-col justify-evenly items-start bg-white "
        >
          <section className="w-[40%] flex flex-col items-start pl-[5%]">
            <img className="" src={CONTENT[3].img} alt="" />

            <p className="py-16 text-[#777777] font-medium">
              Lorem ipsum dolor sit amet consectetur. Ut et vestibulum lectus
              nullam tellus aliquet pellentesque a dui. Nunc leo at sit fusce.
            </p>
            <div className="expandButtonContainerThird w-full flex justify-center">
              <button
                type="button"
                className="expandButton bg-white px-4 text-black py-2 border border-black font-normal flex gap-4 items-center"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/services");
                }}
              >
                <p className="text-base text-nowrap">{CONTENT[3].body}</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={33}
                />
              </button>
            </div>
          </section>
        </div>
      </article>

      <article className="lg:hidden w-full bg-black flex flex-col overflow-hidden">
        <h2 className="w-full text-center text-[80px] font-extrabold text-[#4F4F4F] mb-6">
          Services
        </h2>
        <div className="w-full flex-shrink-0  flex flex-col justify-evenly items-center bg-black  px-[5%]">
          <section className="w-full text-white">
            <div className="font-bold text-2xl">
              <h4>{CONTENT[0].title}</h4>
            </div>

            <div className="max-w-[600px] mt-4">{CONTENT[0].body}</div>
          </section>
          <section className="w-[45%] flex justify-center items-start  pt-4 ">
            <img
              src={CONTENT[0].img}
              alt="logo"
              className="max-w-[15rem] max-h-[15rem] mt-12 mb-20"
            />
          </section>
        </div>
        <div className="w-full flex-shrink-0  flex flex-col justify-evenly items-center bg-black  px-[5%]">
          <section className="w-full text-white">
            <div className="font-bold text-2xl">
              <h4>{CONTENT[1].title}</h4>
            </div>

            <div className="max-w-[600px] mt-4">{CONTENT[1].body}</div>
          </section>
          <section className="w-[45%] flex justify-center items-start  pt-4 ">
            <img
              src={CONTENT[1].img}
              alt="logo"
              className="max-w-[15rem] max-h-[15rem] mt-12 mb-20"
            />
          </section>
        </div>
        <div className="w-full flex-shrink-0 flex flex-col justify-evenly items-center bg-black px-[5%]">
          <section className="w-full text-white">
            <div className="font-bold text-2xl">
              <h4>{CONTENT[2].title}</h4>
            </div>

            <div className="max-w-[600px] mt-4">{CONTENT[2].body}</div>
          </section>
          <section className="w-[45%] flex justify-center items-start  pt-4 ">
            <img
              src={CONTENT[2].img}
              alt="logo"
              className="max-w-[15rem] max-h-[15rem] mt-12 mb-20"
            />
          </section>
        </div>
        <div className="w-full flex-shrink-0 min-h-[80vh] flex flex-col justify-evenly items-start bg-white  px-[5%]">
          <section className="w-full flex flex-col items-start px-[5%] gap-[5vh] ">
            <h2 className="text-5xl font-extrabold text-[#4F4F4F] mb-6 text-nowrap">
              Want More?
            </h2>

            <div className="w-full flex justify-center">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/services");
                }}
                className=" bg-white px-10 text-black py-3 border-2 border-black font-normal flex gap-4 items-center"
              >
                <p className="text-base text-nowrap text-center w-full">
                  {CONTENT[3].body}
                </p>
              </button>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default Services;
