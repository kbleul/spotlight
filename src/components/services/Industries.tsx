import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";
import heroimg from "../../assets/images/Illustration.svg";

const Industries = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const [isViewed, setIsViewed] = useState(false);
  const [isHovered, setIsHovered] = useState<any>(null);

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
      className="bg-white flex flex-col lg:flex-row  justify-start items-start lg:px-0  lg:h-[100vh] overflow-hidden relative"
    >
      <motion.section
        className="relative w-full  lg:w-[49.5%] lg:h-full   pt-10 pb-[5%] lg:border-r lg:border-black  flex flex-col justify-between"
        initial={inView ? { x: isViewed ? 0 : -600 } : { x: 0 }}
        animate={inView ? { x: 0 } : { x: isViewed ? 0 : -600 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:pl-[5%]">
          <h2 className="text-[#E0E0E0] lg:text-[#4F4F4F]  text-[60px] md:text-[110px] text-center lg:text-left font-extrabold">
            Industries
          </h2>

          <p className="mt-4 lg:mt-0 lg:font-bold text-[#4F4F4F] max-w-[600px] ">
            Our expertise seamlessly navigates diverse sectors, expertly
            devising industry-attuned solutions that propel brands forward. By
            pushing innovation boundaries and elevating consumer experiences, we
            cement brand eminence across industries. Our multidisciplinary
            prowess catalyzes growth transcending verticals.
          </p>
        </div>

        <div className="hidden lg:block w-full absolute bottom-10">
          <img src={heroimg} alt="" className="w-full" />
        </div>
      </motion.section>

      <section className="w-full lg:w-[55%]  h-full flex flex-col justify-center text-2xl md:text-[2.5rem] text-[#4f4f4f] capitalize font-extrabold pb-20">
        {data.data.map((item: any, index: number) => (
          <ItemCard
            key={"industry-item-" + index}
            item={item}
            index={index}
            inView={inView}
            isViewed={isViewed}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
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
  isHovered,
  setIsHovered,
}: {
  item: any;
  index: number;
  inView: boolean;
  isViewed: boolean;
  isHovered: any;
  setIsHovered: React.Dispatch<any>;
}) => {
  const clientImages: any[] = item.client_images;

  return (
    <motion.div
      className={`h-[14%] pt-6 lg:pt-0 lg:pb-2 px-6 ${
        index !== 5 && " border-b "
      }  border-black relative flex items-end cursor-pointer ${
        isHovered &&
        isHovered.id === item.id &&
        "bg-black text-white overflow-hidden"
      }  `}
      initial={inView ? { y: isViewed ? 0 : 2000 } : { y: 0 }}
      animate={inView ? { y: 0 } : { y: isViewed ? 0 : 2000 }}
      transition={{ duration: 0.4 * (index + 1) }}
      onMouseEnter={() => setIsHovered(item)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(!isHovered || isHovered.id !== item.id) && (
        <p className="py-3 md:py-0">{item.name}</p>
      )}

      {isHovered && isHovered.id === item.id && (
        <div className="carousel ">
          <motion.div
            className="carousel-track w-full flex items-center  pb-4 pt-2 lg:pt-0"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {clientImages &&
              Array.from({ length: 4 }).map((_) =>
                clientImages.map((img: any) => (
                  <img
                    key={img.uuid}
                    src={img.url}
                    alt={item.name}
                    className="w-1/5 h-12 md:h-14 object-contain mr-6"
                  />
                ))
              )}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Industries;
