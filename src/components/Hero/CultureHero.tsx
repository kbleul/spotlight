import { FaPlayCircle } from "react-icons/fa";
import bgImg from "../../assets/images/culture.png";
import { useState } from "react";
import { Player } from "video-react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const CultureHero = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <article
      className="w-full h-[100vh] z-0"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!showVideo && (
        <>
          <div className="px-[5%] leading-[7rem] text-[105px] text-white font-bold capitalize pt-[40vh]">
            <p className="">relentless</p>
            <p className="">commitment</p>
            <p className="">to work and play</p>

            <button
              type="button"
              className="flex gap-4 items-center justify-start text-xl mt-10 hover:font-medium"
              onClick={() => setShowVideo(true)}
            >
              <FaPlayCircle size={25} className="pt-1" />
              <p className="border-b hover:border-b-green-200">Watch Video</p>
            </button>
          </div>

          <motion.div
            className="h-[100vh] w-full bg-black z-10 absolute top-0"
            initial={{ x: 0 }}
            animate={{ x: -1600 }}
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

            <Player
              fluid={false}
              height="100%"
              autoPlay={false}
              controls={false}
              stopOnUnmount
            >
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </motion.div>
        </>
      )}

      {showVideo && (
        <motion.div
          className="h-[100vh] w-full bg-black z-10 relative"
          initial={{ x: -1600 }}
          animate={{ x: showVideo ? 0 : -1600 }}
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
    </article>
  );
};

export default CultureHero;
