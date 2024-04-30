import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Leading = ({
  img,
  title,
  secondaryTitle,
  textBody,
}: {
  img: any;
  title: string;
  secondaryTitle?: string;
  textBody: string;
}) => {
  const [ref, inView] = useInView({ threshold: 0.5 }); // Adjust threshold as needed
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsViewed(true);
    }
  }, [inView]);

  return (
    <article className="px-[3%] lg:px-[10%] overflow-hidden text-white bg-black flex items-center justify-between ">
      <section
        ref={ref}
        className="flex flex-col lg:flex-row items-stretch justify-between"
      >
        <motion.div
          className="w-full lg:w-[45%] flex justify-center items-start  pt-4"
          initial={inView ? { x: isViewed ? 0 : -1600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: isViewed ? 0 : -1600 }}
          transition={{ duration: 0.7 }}
        >
          <img src={img} alt="" className="max-w-[30rem]" />
        </motion.div>

        <motion.div
          className="w-full lg:w-[45%] mt-16 lg:mt-0 flex flex-col justify-center"
          initial={inView ? { x: isViewed ? 0 : 1000 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: isViewed ? 0 : 1000 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[#fff] text-5xl lg:text-6xl font-extrabold w-full text-left">
            {title}
          </h2>
          {secondaryTitle && (
            <h2 className="text-[#fff] text-5xl lg:text-6xl font-extrabold">
              {secondaryTitle}
            </h2>
          )}
          <p className="mt-10 text-[#777777] lg:text-2xl">{textBody}</p>
        </motion.div>
      </section>
    </article>
  );
};

export default Leading;
