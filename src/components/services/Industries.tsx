import cultureImg1 from "../../assets/images/partners/1.svg";
import cultureImg2 from "../../assets/images/cola_placeholder2.png";
import cultureImg3 from "../../assets/images/cola_placeholder2.png";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";

const Industries = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsViewed(true);
    }
  }, [inView]);

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
      className="bg-white flex flex-col lg:flex-row  items-start lg:px-0 lg:pl-[5%] lg:h-[100vh] overflow-hidden relative"
    >
      <motion.section
        className="w-full lg:w-[49.5%] lg:h-full px-[3%] pt-10 pb-[5%] lg:border-r border-black flex flex-col justify-between"
        initial={inView ? { x: isViewed ? 0 : -600 } : { x: 0 }}
        animate={inView ? { x: 0 } : { x: isViewed ? 0 : -600 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[#E0E0E0] lg:text-[#4F4F4F] stroke-black text-[70px] md:text-[110px] text-center lg:text-left font-extrabold">
          Industries
        </h2>

        <p className="mt-4 lg:mt-0 lg:font-bold text-[#4F4F4F] max-w-[600px] ">
          Our expertise seamlessly navigates diverse sectors, expertly devising
          industry-attuned solutions that propel brands forward. By pushing
          innovation boundaries and elevating consumer experiences, we cement
          brand eminence across industries. Our multidisciplinary prowess
          catalyzes growth transcending verticals.
        </p>
      </motion.section>

      <section className="w-full lg:w-[55%]  h-full flex flex-col justify-center text-[2.5rem] text-[#4f4f4f] capitalize font-extrabold pb-20">
        {data.data.map((item: any, index: number) => (
          <ItemCard
            key={"industry-item-" + index}
            item={item}
            index={index}
            inView={inView}
            isViewed={isViewed}
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
  isViewed,
}: {
  item: any;
  index: number;
  inView: boolean;
  isViewed: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const clientImages: any[] = item.client_images;

  return (
    <motion.div
      className={`h-[14%] pt-6 lg:pt-0 lg:pb-2 px-6 ${
        index !== 5 && " border-b "
      }  border-black relative flex items-end cursor-pointer hover:bg-black hover:text-white`}
      initial={inView ? { y: isViewed ? 0 : 2000 } : { y: 0 }}
      animate={inView ? { y: 0 } : { y: isViewed ? 0 : 2000 }}
      transition={{ duration: 0.4 * (index + 1) }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <p>{item.name}</p>

      {isHovered && (
        <motion.div
          className="absolute bottom-4 right-4 md:right-10 flex items-center gap-4"
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
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                />
              ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Industries;
