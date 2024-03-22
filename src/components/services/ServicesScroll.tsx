import bgImg from "../../assets/images/services_gradient.png";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CONTENT = [
  {
    id: "services001",
    title: "Public Relations",
    body: [
      "trust",
      "increased visibility",
      "audience connections",
      "constructing stories",
      "enhancing brand",
      "nurturing connections",
    ],
  },
  {
    id: "services002",
    title: "Marketing",
    body: [
      "trust",
      "increased visibility",
      "audience connections",
      "constructing stories",
      "enhancing brand",
      "nurturing connections",
    ],
  },
  {
    id: "services003",
    title: "Advertising",
    body: [
      "trust",
      "increased visibility",
      "audience connections",
      "constructing stories",
      "enhancing brand",
      "nurturing connections",
    ],
  },
  {
    id: "services004",
    title: "Brand & Design",
    body: [
      "trust",
      "increased visibility",
      "audience connections",
      "constructing stories",
      "enhancing brand",
      "nurturing connections",
    ],
  },
  {
    id: "services005",
    title: "Production",
    body: [
      "trust",
      "increased visibility",
      "audience connections",
      "constructing stories",
      "enhancing brand",
      "nurturing connections",
    ],
  },
  {
    id: "services004",
    title: "Event Managment",
    body: [
      "trust",
      "increased visibility",
      "audience connections",
      "constructing stories",
      "enhancing brand",
      "nurturing connections",
    ],
  },
];

const ServicesScroll = () => {
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

        if (currentContent > CONTENT.length) {
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
        currentContent >= 5
          ? "relative h-[108vh] w-full  bg-black rounded-[3rem] mb-20"
          : "relative h-[108vh] w-full  "
      }
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {inView && (
        <motion.div
          className="px-[10%] h-[95%] text-white  py-20 flex flex-col justify-center  items-center"
          initial={{ y: -15 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-2xl text-center font-bold text-[#4F4F4F] mb-12">
            We’ve multiple Services
          </h2>
          {currentContent == 0 && (
            <>
              <motion.div
                className="text-6xl text-white font-bold"
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
                className="w-1/2  mt-4 font-semibold capitalize grid grid-cols-2 gap-10 items-center justify-center pl-20"
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
                {CONTENT[0].body.map((item, index) => (
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
  );
};

export default ServicesScroll;
