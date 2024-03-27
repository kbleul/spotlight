import cultureImg1 from "../../assets/images/partners/1.svg";
import cultureImg2 from "../../assets/images/cola_placeholder2.png";
import cultureImg3 from "../../assets/images/cola_placeholder2.png";

import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const INDUSTRY_ITEMS = [
  "Telecom",
  "Fashion",
  "Film",
  "Finance",
  "Technology",
  "Real Estate",
];
const Industries = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
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
      className="bg-white flex items-start pl-[5%] h-[100vh] overflow-hidden relative"
    >
      <motion.section
        className="w-[55%] h-full pt-10 pb-[5%] border-r border-black flex flex-col justify-between"
        initial={inView ? { x: -600 } : { x: 0 }}
        animate={inView ? { x: 0 } : { x: -600 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[#4F4F4F] text-[110px] font-extrabold">
          Industries
        </h2>

        <p className="px-10 font-bold text-[#4F4F4F]">
          Lorem ipsum dolor sit amet consectetur. Pretium mattis sit aliquet
          hendrerit imperdiet tortor lectus auctor. Malesuada vitae nunc orci
          faucibus. Faucibus nisl nec eu accumsan. Neque in nisl sit nisl semper
          pulvinar pharetra. Congue commodo praesent.
        </p>
      </motion.section>

      <section className="w-[45%] my-[7%]  flex flex-col text-[2.5rem] text-[#4f4f4f] capitalize font-extrabold">
        {INDUSTRY_ITEMS.map((item, index) => (
          <motion.p
            key={"industry-item-" + index}
            className="pt-10 pb-2 px-6 border-b border-black relative"
            initial={inView ? { y: 2000 } : { y: 0 }}
            animate={inView ? { y: 0 } : { y: 2000 }}
            transition={{ duration: 0.4 * (index + 1) }}
          >
            {item}
          </motion.p>
        ))}
        {/* <motion.p
          className="pt-10 pb-2 px-6 border-b border-black relative"
          initial={inView ? { y: 2000 } : { y: 0 }}
          animate={inView ? { y: 0 } : { y: 2000 }}
          transition={{ duration: 0.5 }}
        >
          Telecom
        </motion.p>
        <motion.p
          className="pt-10 pb-2 px-6 border-b border-black"
          initial={inView ? { y: 2000 } : { y: 0 }}
          animate={inView ? { y: 0 } : { y: 2000 }}
          transition={{ duration: 0.8 }}
        >
          Fashion
        </motion.p>
        <motion.p
          className="pt-10 pb-2 px-6 border-b border-black"
          initial={inView ? { y: 2000 } : { y: 0 }}
          animate={inView ? { y: 0 } : { y: 2000 }}
          transition={{ duration: 1.1 }}
        >
          Film
        </motion.p>
        <motion.p
          className="pt-10 pb-2 px-6 border-b border-black"
          initial={inView ? { y: 2000 } : { y: 0 }}
          animate={inView ? { y: 0 } : { y: 2000 }}
          transition={{ duration: 1.4 }}
        >
          Finance
        </motion.p>
        <motion.p
          className="pt-10 pb-2 px-6 border-b border-black"
          initial={inView ? { y: 2000 } : { y: 0 }}
          animate={inView ? { y: 0 } : { y: 2000 }}
          transition={{ duration: 1.7 }}
        >
          Technology
        </motion.p>
        <motion.p
          className="pt-10 pb-2 px-6 border-b border-black"
          initial={inView ? { y: 2000 } : { y: 0 }}
          animate={inView ? { y: 0 } : { y: 2000 }}
          transition={{ duration: 2 }}
        >
          Real Estate
        </motion.p> */}
      </section>

      {showImageIndex && (
        <div
          className="absolute bg-black z-20 rounded-full overflow-hidden w-28 h-28 "
          style={{
            top: smallImagePosition.y + 10,
            left: smallImagePosition.x + 10,
            pointerEvents: "none",
          }}
        >
          <img
            src={
              showImageIndex === 1
                ? cultureImg3
                : showImageIndex === 2
                ? cultureImg1
                : cultureImg2
            }
            alt=""
            className="w-full h-full rounded-full bg-cover"
          />
        </div>
      )}
    </article>
  );
};

export default Industries;
