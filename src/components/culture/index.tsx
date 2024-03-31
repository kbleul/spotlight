import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import cultureImg1 from "../../assets/images/culture/1.svg";
import cultureImg2 from "../../assets/images/culture/2.svg";
import cultureImg3 from "../../assets/images/culture/3.svg";
import cultureTrace from "../../assets/images/Culture.svg";

import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

const Culture = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [showImageIndex, setShowImageIndex] = useState<number | null>(null);
  const [smallImagePosition, setSmallImagePosition] = useState({ x: 0, y: 0 });

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
      className="bg-white lg:h-[100vh] pt-[1vh] md:pt-[3vh] lg:px-12 relative overflow-hidden"
    >
      <motion.div
        className="w-full flex flex-col lg:flex-row justify-between items-start px-[3%] lg:px-0"
        initial={inView ? { y: -1000, x: 0 } : { y: 0, x: 0 }}
        animate={inView ? { y: 0, x: 0 } : { y: 1000, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="w-full lg:w-1/2 flex flex-col gap-y-[6vh] lg:gap-y-[18vh] relative order-2 lg:order-1  mt-10 lg:mt-0">
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
            className="w-3/5 z-10"
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
            className="absolute  h-[80%] mt-[10%] w-3/5"
            style={{
              right: -30,
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
              Good Times for All.
            </h4>

            <p className=" mt-4  text-[#4f4f4f] font-semibold">
              Lorem ipsum dolor sit amet consectetur. Vitae vitae tincidunt
              viverra turpis pulvinar netus euismod id dui. Dolor purus dui
              sodales maecenas sed luctus aenean et odio. Orci magnis vel
              ullamcorper rhoncus luctus consequat. Diam rhoncus sit id enim
              cras.
            </p>

            <div className="expandButtonContainerSecondary mt-6">
              <button
                type="button"
                className="expandButton bg-black px-4 text-white py-2 text-sm font-normal flex gap-2 items-center"
              >
                <p className="text-nowrap">Our Culture</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={32}
                />
              </button>
            </div>
          </div>
        </section>
      </motion.div>

      {showImageIndex && (
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
      )}
    </article>
  );
};

export default Culture;
