import cultureImg1 from "../../assets/images/partners/1.svg";
import cultureImg2 from "../../assets/images/cola_placeholder2.png";
import cultureImg3 from "../../assets/images/cola_placeholder2.png";

import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";

const Industries = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const { isPending, error, data } = useQuery({
    queryKey: ["industries"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}industries`).then(
        (res) => res.json()
      ),
  });

  //loading

  if (error || isPending) return <></>;

  return (
    <article
      ref={ref}
      className="bg-white flex flex-col lg:flex-row items-start lg:px-0 lg:pl-[5%] lg:h-[100vh] overflow-hidden relative"
    >
      <motion.section
        className="w-full lg:w-[55%] lg:h-full px-[3%] pt-10 pb-[5%] lg:border-r border-black flex flex-col justify-between"
        initial={inView ? { x: -600 } : { x: 0 }}
        animate={inView ? { x: 0 } : { x: -600 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[#E0E0E0] lg:text-[#4F4F4F] text-[70px] md:text-[110px] text-center lg:text-left font-extrabold">
          Industries
        </h2>

        <p className="mt-4 lg:mt-0 lg:font-bold text-[#4F4F4F] max-w-[600px] ">
          Lorem ipsum dolor sit amet consectetur. Pretium mattis sit aliquet
          hendrerit imperdiet tortor lectus auctor. Malesuada vitae nunc orci
          faucibus. Faucibus nisl nec eu accumsan. Neque in nisl sit nisl semper
          pulvinar pharetra. Congue commodo praesent.
        </p>
      </motion.section>

      <section className="w-full lg:w-[45%] h-full flex flex-col justify-center text-[2.5rem] text-[#4f4f4f] capitalize font-extrabold pb-20">
        {data.data.map((item: any, index: number) => (
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

  const clientImages: any[] = item.client_images;

  return (
    <motion.div
      className={`h-[14%] pt-6 lg:pt-0 lg:pb-2 px-6 ${
        index !== 5 && " border-b "
      }  border-black relative flex items-end cursor-pointer`}
      initial={inView ? { y: 2000 } : { y: 0 }}
      animate={inView ? { y: 0 } : { y: 2000 }}
      transition={{ duration: 0.4 * (index + 1) }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <p>{item.name}</p>

      {isHovered && (
        <motion.div
          className="absolute top-4 right-4 md:right-10 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {clientImages &&
            clientImages
              .slice(0, 4)
              .map((img: any) => (
                <img
                  key={img.uuid}
                  src={img.url}
                  alt={item.name}
                  className="w-8 h-8 md:w-14 md:h-14 rounded-full object-cover"
                />
              ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Industries;
