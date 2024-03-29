import cultureImg1 from "../../assets/images/partners/1.svg";
import cultureImg2 from "../../assets/images/cola_placeholder2.png";
import cultureImg3 from "../../assets/images/cola_placeholder2.png";

import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const ItemImgs = [
  cultureImg1,
  cultureImg2,
  cultureImg3,
  cultureImg1,
  cultureImg2,
  cultureImg3,
  cultureImg1,
  cultureImg2,
  cultureImg3,
];
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
          <ItemCard
            key={"industry-item-" + index}
            item={item}
            index={index}
            inView={inView}
          />
        ))}
      </section>
    </article>
  );
};

const ItemCard = ({
  item,
  index,
  inView,
}: {
  item: any;
  index: number;
  inView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="pt-10 pb-2 px-6 border-b border-black relative"
      initial={inView ? { y: 2000 } : { y: 0 }}
      animate={inView ? { y: 0 } : { y: 2000 }}
      transition={{ duration: 0.4 * (index + 1) }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <p>{item}</p>

      {isHovered && (
        <motion.div
          className="absolute bottom-2 right-3 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={ItemImgs[index]}
            alt={item}
            className="w-12 h-12 rounded-full object-cover"
          />
          <img
            src={ItemImgs[index + 1]}
            alt={item}
            className="w-12 h-12 rounded-full object-cover"
          />
          <img
            src={ItemImgs[index + 2]}
            alt={item}
            className="w-12 h-12 rounded-full object-cover"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Industries;
