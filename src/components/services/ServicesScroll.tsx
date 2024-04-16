import bgImg from "../../assets/images/services_gradient.png";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MdArrowBack } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

const CONTENT = [
  {
    id: "services001",
    title: "Public Relations & Communications",
    body: [
      "Reputation Management",
      "Communications Strategy",
      "Risk and Crisis Management",
      "Media Training",
      "Media Relation",
    ],
  },
  {
    id: "services002",
    title: "Marketing",
    body: [
      "Market Research",
      "Marketing Strategy",
      "Shoppers Marketing",
      "Promotional Marketing",
      "Experiential Marketing",
    ],
  },
  {
    id: "services003",
    title: "Advertising",
    body: [
      "Television Advertising",
      "Radio Advertising",
      "Print Advertising",
      "Out-of-home Advertising",
      "Affiliate and Influencer Marketing",
      "Search Engine and Social Media Advertising",
    ],
  },
  {
    id: "services004",
    title: "Brand & Design",
    body: [
      "Brand Strategy",
      "Brand Identity",
      "Graphic Design",
      "UX/UI & Web Design",
    ],
  },
  {
    id: "services005",
    title: "Production",
    body: [
      "TVC",
      "Talk Shows",
      "Documentaries",
      "Event Documentation",
      "Photography",
      "Radio Ad and Jingle Production",
    ],
  },
  {
    id: "services004",
    title: "Event Managment",
    body: [
      "Event Planning",
      "Event Management",
      "Venue Sourcing",
      "Event Engagement and Entertainment",
      "Audio-visual Support",
    ],
  },
];

const ServicesScroll = () => {
  const [currentContent, setCurrentContent] = useState(0);

  const [isZero, setIsZero] = useState(0);

  const [ref, inView] = useInView({ threshold: 0.9 });

  const [, setScrolledAmountCounter] = useState(0);

  const handleNextClick = () => {
    setCurrentContent((prev) => (prev < CONTENT.length - 1 ? ++prev : prev));
  };

  const handleBackClick = () => {
    setCurrentContent((prev) => (prev > 0 ? --prev : prev));
  };

  useEffect(() => {
    let x = window.matchMedia("(max-width: 700px)");
    if (!x.matches) {
      console.log(x);

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
    }
  }, [inView]);

  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();

      if (inView) {
        const delta = event.deltaY;

        setScrolledAmountCounter((prev) => {
          if (prev >= 16) {
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
              setIsZero(0);
            }

            return 0;
          }
          return prev + 1;
        });
      }
    };

    const scrolledItem = document.getElementById("scrolledItem");
    if (scrolledItem) {
      window.addEventListener("wheel", handleScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentContent, inView]);

  useEffect(() => {
    const rootElement = document.getElementById("root-body");

    if (isZero >= 2 && rootElement) {
      rootElement.style.overflowY = "scroll";
    }
  }, [isZero]);

  return (
    <>
      <article
        id="scrolledItem"
        ref={ref}
        className={`hidden lg:block relative lg:h-[108vh] w-full mt-10 bg-black`}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {inView && (
          <motion.div
            className="px-[10%] lg:h-[95%] text-white py-20 flex flex-col items-start justify-center  lg:items-center"
            initial={{ y: -15 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl md:text-3xl lg:text-2xl lg:text-center font-extrabold lg:font-bold text-[#4F4F4F] mb-6 md:mb-12">
              We’ve multiple Services
            </h2>
            {currentContent == 0 && (
              <>
                <motion.div
                  className="text-4xl md:text-6xl text-white font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="">{CONTENT[0].title}</h4>
                </motion.div>

                <h2 className="text-2xl text-center font-semibold text-[#4F4F4F] mt-32 mb-8">
                  Includes
                </h2>

                <motion.div
                  className="w-1/2 lg:w-full lg:max-w-[600px]   mt-4 font-semibold capitalize grid grid-cols-2 gap-10 items-center justify-center pl-20"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {CONTENT[0].body.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </motion.div>
              </>
            )}
            {currentContent == 1 && (
              <>
                <motion.div
                  className="text-6xl text-white font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="">{CONTENT[1].title}</h4>
                </motion.div>

                <h2 className="text-2xl text-center font-semibold text-[#4F4F4F] mt-32 mb-8">
                  Includes
                </h2>

                <motion.div
                  className="w-1/2  mt-4 font-semibold capitalize grid grid-cols-2 gap-10 items-center justify-center pl-20"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {CONTENT[1].body.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </motion.div>
              </>
            )}

            {currentContent == 2 && (
              <>
                <motion.div
                  className="text-6xl text-white font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="">{CONTENT[2].title}</h4>
                </motion.div>

                <h2 className="text-2xl text-center font-semibold text-[#4F4F4F] mt-32 mb-8">
                  Includes
                </h2>

                <motion.div
                  className="w-1/2  mt-4 font-semibold capitalize grid grid-cols-2 gap-10 items-center justify-center pl-20"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {CONTENT[2].body.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </motion.div>
              </>
            )}

            {currentContent == 3 && (
              <>
                <motion.div
                  className="text-6xl text-white font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="">{CONTENT[3].title}</h4>
                </motion.div>

                <h2 className="text-2xl text-center font-semibold text-[#4F4F4F] mt-32 mb-8">
                  Includes
                </h2>

                <motion.div
                  className="w-1/2  mt-4 font-semibold capitalize grid grid-cols-2 gap-10 items-center justify-center pl-20"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {CONTENT[3].body.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </motion.div>
              </>
            )}

            {currentContent == 4 && (
              <>
                <motion.div
                  className="text-6xl text-white font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="">{CONTENT[4].title}</h4>
                </motion.div>

                <h2 className="text-2xl text-center font-semibold text-[#4F4F4F] mt-32 mb-8">
                  Includes
                </h2>

                <motion.div
                  className="w-1/2  mt-4 font-semibold capitalize grid grid-cols-2 gap-10 items-center justify-center pl-20"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {CONTENT[4].body.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </motion.div>
              </>
            )}

            {currentContent >= 5 && (
              <>
                <motion.div
                  className="text-6xl text-white font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="">{CONTENT[5].title}</h4>
                </motion.div>

                <h2 className="text-2xl text-center font-semibold text-[#4F4F4F] mt-32 mb-8">
                  Includes
                </h2>

                <motion.div
                  className="w-1/2  mt-4 font-semibold capitalize grid grid-cols-2 gap-10 items-center justify-center pl-20"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {CONTENT[5].body.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </motion.div>
              </>
            )}
          </motion.div>
        )}
      </article>

      <article
        className={`lg:hidden h-[100vh] relative w-full block  mt-10  bg-black`}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="px-[5%]  text-white py-20 flex flex-col items-start justify-center h-[85%]"
          initial={{ y: -15 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-xl md:text-3xl lg:text-2xl lg:text-center font-extrabold lg:font-bold text-[#4F4F4F] mb-6 md:mb-12">
            We’ve multiple Services
          </h2>
          <>
            <motion.div
              className="text-4xl md:text-6xl text-white font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="">
                {CONTENT[currentContent >= 5 ? 5 : currentContent].title}
              </h4>
            </motion.div>

            <h2 className="text-xl text-center font-bold text-[#4F4F4F] mt-8 mb-4">
              Includes
            </h2>

            <motion.div
              className="w-full capitalize grid grid-cols-2 gap-4 items-center justify-center "
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {CONTENT[currentContent >= 5 ? 5 : currentContent].body.map(
                (item, index) => (
                  <p key={index}>{item}</p>
                )
              )}
            </motion.div>
          </>
        </motion.div>

        <section className="pt-8 pb-10 text-white border-t w-full flex justify-center items-center gap-8 lg:hidden">
          <button
            type="button"
            disabled={currentContent === 0}
            className={`border-2 p-1 rounded-full ${
              currentContent === 0 && "border-[#777777] text-[#777777]"
            }`}
            onClick={handleBackClick}
          >
            <MdArrowBack size={24} />
          </button>
          <button
            type="button"
            disabled={currentContent >= CONTENT.length - 1}
            className={`border-2 p-1 rounded-full ${
              currentContent >= CONTENT.length - 1 &&
              "border-[#777777] text-[#777777]"
            }`}
            onClick={handleNextClick}
          >
            <IoArrowForward size={24} />
          </button>
        </section>
      </article>
    </>
  );
};

export default ServicesScroll;
