import { useEffect, useState } from "react";
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
  const [imageLoaded, setImageLoaded] = useState<string | null>(null);

  const handleImageLoad = () => {
    import("../../assets/images/bgvid.gif").then((module) => {
      setImageLoaded(module.default);
    });
  };

  useEffect(() => {
    handleImageLoad();
  }, []);

  useEffect(() => {
    if (!inView) {
      setShowVideo(false);
      setIsFirstTime(true);
    }
  }, [inView]);

  return (
    <article className="w-full h-[55vh] lg:h-[88vh]  z-0">
      <section
        ref={ref}
        className="absolute top-0 h-[60vh] lg:h-[100vh] w-full bg-black"
        style={
          imageLoaded
            ? {
                backgroundImage: `url(${imageLoaded})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <Header />

        <div className="px-[5%] text-5xl lg:leading-[6rem] lg:text-[96px] text-white font-bold capitalize  absolute bottom-10  lg:bottom-14">
          <p className="">We are Spotlight</p>
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
      </section>
    </article>
  );
};

export default CultureHero;
