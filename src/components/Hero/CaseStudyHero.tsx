import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Player } from "video-react";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  const location = useLocation();

  // Access the values or objects passed as state
  const { item } = location.state;

  const [showVideo, setShowVideo] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) {
      setShowVideo(false);
      setIsFirstTime(true);
    }
  }, [inView]);

  const handleShowVideo = () => {
    const rootElement = document.getElementById("root-body");
    if (rootElement) {
      rootElement.style.overflowY = "hidden";
    }
    window.scrollTo(0, 0);

    isFirstTime && setIsFirstTime(false);
    setShowVideo(true);
  };

  return (
    <article
      ref={ref}
      className="h-[90vh] w-full bg-black"
      style={{
        backgroundImage: `url(${item.cover.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!showVideo && (
        <>
          <div className="w-full px-[5%] text-3xl md:text-4xl lg:text-5xl lg:leading-[6rem] lg:text-[90px] text-white font-bold capitalize  absolute bottom-10 lg:bottom-14">
            <p className="w-full lg:max-w-[80%]">{item.title}</p>

            {item.video && item.video !== "" && (
              <button
                type="button"
                className="flex gap-4 items-center justify-start text-base lg:text-xl mt-10 hover:font-medium"
                onClick={handleShowVideo}
              >
                <FaPlayCircle size={25} className="pt-1" />
                <p className="border-b hover:border-b-green-200">Watch Video</p>
              </button>
            )}

            {item.services && (
              <article
                className={`w-full flex  ${
                  item.services.length >= 2 ? "justify-end" : "justify-start"
                }  mt-4  `}
              >
                <section className="text-white text-sm  grid grid-cols-2 gap-4 justify-end">
                  {item.services.map((service: any, index: number) => (
                    <p
                      key={"servie-cate" + index}
                      className="border px-4 py-2 lg:px-8 lg:py-3 rounded-full w-fit"
                    >
                      {service.name}
                    </p>
                  ))}
                </section>
              </article>
            )}
          </div>

          <motion.div
            className="h-[100vh]  w-full bg-black z-10 absolute top-0"
            initial={{ x: isFirstTime ? -3000 : 0 }}
            animate={{ x: -3000 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute top-8 right-12 text-gray-300 z-10">
              <button
                type="button"
                className=""
                onClick={() => {
                  setShowVideo(false);
                }}
              >
                <IoMdClose size={38} />
              </button>
            </div>
          </motion.div>
        </>
      )}

      {showVideo && (
        <motion.div
          className=" h-[100vh] w-full bg-black z-10 absolute top-0"
          initial={{ x: -3000 }}
          animate={{ x: showVideo ? 0 : -3000 }}
          transition={{ duration: 1.4 }}
        >
          <div className="absolute top-8 right-12 text-gray-300 z-10">
            <button
              type="button"
              className=""
              onClick={() => {
                const rootElement = document.getElementById("root-body");
                if (rootElement) {
                  rootElement.style.overflowY = "scroll";
                }
                setShowVideo(false);
              }}
            >
              <IoMdClose size={38} />
            </button>
          </div>

          <Player
            fluid={false}
            height="100%"
            autoPlay
            controls={false}
            stopOnUnmount
          >
            <source src={item.video.url} />
          </Player>
        </motion.div>
      )}
    </article>
  );
};

export default Hero;
