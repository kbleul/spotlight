import { FaPlayCircle } from "react-icons/fa";
import bgImg from "../../assets/images/culture.png";
import { useEffect, useState } from "react";
import { Player } from "video-react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Header from "../Header";
import { useInView } from "react-intersection-observer";

const CultureHero = () => {
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

  return (
    <article className="w-full h-[100vh]  z-0">
      <section
        ref={ref}
        className="absolute top-0 h-[100vh] w-full"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        {!showVideo && (
          <>
            <div className="px-[5%] text-5xl lg:leading-[6rem] lg:text-[96px] text-white font-bold capitalize  absolute bottom-28 lg:bottom-14">
              <p className="">relentless</p>
              <p className="">commitment</p>
              <p className="">to work and play</p>

              <button
                type="button"
                className="flex gap-4 items-center justify-start text-xl mt-10 hover:font-medium"
                onClick={() => {
                  const rootElement = document.getElementById("root-body");
                  if (rootElement) {
                    rootElement.style.overflowY = "hidden";
                  }
                  isFirstTime && setIsFirstTime(false);
                  setShowVideo(true);
                }}
              >
                <FaPlayCircle size={25} className="pt-1" />
                <p className="border-b hover:border-b-green-200">Watch Video</p>
              </button>
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
                  onClick={() => setShowVideo(false)}
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
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </motion.div>
        )}
      </section>
    </article>
  );
};

export default CultureHero;
