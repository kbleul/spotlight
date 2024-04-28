import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cultureImg from "../../assets/images//Culture.png";

import cultureImg1 from "../../assets/images/culture/1.png";
import cultureImg2 from "../../assets/images/culture/2.png";
import cultureImg3 from "../../assets/images/culture/3.png";
import cultureTrace from "../../assets/images/Culture.svg";

import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Culture = () => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [, setShowImageIndex] = useState<number | null>(null);
  const [, setSmallImagePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLImageElement>,
    index: number
  ) => {
    setShowImageIndex(index);
    setSmallImagePosition({ x: event.clientX, y: event.clientY - 20 });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    setSmallImagePosition({ x: event.clientX, y: event.clientY - 20 });
  };

  const handleMouseLeave = () => {
    setShowImageIndex(null);
  };

  return (
    <article
      ref={ref}
      className="bg-white flex justify-center items-center h-screen lg:px-12 relative overflow-hidden"
    >
      <motion.div
        className="w-full flex flex-col lg:flex-row justify-between items-start px-[3%] lg:px-0 h-[105vh] lg:h-[80%]"
        initial={inView ? { y: -1000, x: 0 } : { y: 0, x: 0 }}
        animate={inView ? { y: 0, x: 0 } : { y: 1000, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="px-2 md:px-0 w-full lg:w-1/2 flex flex-col items-start lg:items-center gap-y-[6vh] lg:gap-y-[18vh] h-full relative order-2 lg:order-1  mt-10 lg:mt-0">
          <img
            src={cultureImg2}
            alt=""
            className="w-3/5 z-10"
            onMouseEnter={(event: React.MouseEvent<HTMLImageElement>) =>
              handleMouseEnter(event, 1)
            }
            onMouseMove={(event: React.MouseEvent<HTMLImageElement>) =>
              handleMouseMove(event)
            }
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={cultureImg3}
            alt=""
            className="w-3/5 z-10 absolute bottom-0"
            onMouseEnter={(event: React.MouseEvent<HTMLImageElement>) =>
              handleMouseEnter(event, 2)
            }
            onMouseMove={(event: React.MouseEvent<HTMLImageElement>) =>
              handleMouseMove(event)
            }
            onMouseLeave={handleMouseLeave}
          />

          <img
            src={cultureImg1}
            alt=""
            className="absolute  h-[80%] mt-[10%] w-3/5 mr-3"
            style={{
              right: 0,
            }}
            onMouseEnter={(event: React.MouseEvent<HTMLImageElement>) =>
              handleMouseEnter(event, 3)
            }
            onMouseMove={(event: React.MouseEvent<HTMLImageElement>) =>
              handleMouseMove(event)
            }
            onMouseLeave={handleMouseLeave}
          />
        </section>
        <section className="w-full lg:w-1/2 lg:px-[8%] order-1 lg:order-2">
          <img src={cultureTrace} alt="" className="w-full max-w-[500px]" />

          <div className="pl-3 w-full">
            <h4 className="font-extrabold mt-8 md:mt-4 text-2xl">
              We are Spotlight
            </h4>

            <p className=" mt-4  text-[#4f4f4f] font-semibold lg:text-lg">
              We are creative, we are diverse, we are ever-changing. We debate,
              laugh, craft and bring together perspectives that challenge the
              status quo.
            </p>

            <div className="expandButtonContainerSecondary mt-6">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/culture");
                }}
                className="expandButton bg-black pl-6 text-white py-2 text-sm font-normal flex gap-2 items-center"
              >
                <p className="text-nowrap">Explore</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={32}
                />
              </button>
            </div>
          </div>
        </section>
      </motion.div>

      {/* {showImageIndex && (
        <img
          src={
            showImageIndex === 1
              ? cultureImg3
              : showImageIndex === 2
              ? cultureImg1
              : cultureImg2
          }
          alt=""
          className="absolute w-20 h-20 lg:w-40 lg:h-40 z-20"
          style={{
            top: smallImagePosition.y + 10,
            left: smallImagePosition.x + 10,
          }}
        />
      )} */}
    </article>
  );
};

export default Culture;
