import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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

  return (
    <article className="px-[3%] lg:px-[10%] overflow-hidden text-white bg-black flex items-start justify-between ">
      <section
        ref={ref}
        className="flex flex-col lg:flex-row items-start justify-between"
      >
        <motion.div
          className="w-full lg:w-[45%] flex justify-center items-start  pt-4"
          initial={inView ? { x: -1600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -1600 }}
          transition={{ duration: 0.7 }}
        >
          <img src={img} alt="" className="max-w-[20rem]" />
        </motion.div>

        <motion.div
          className="w-full lg:w-[45%] mt-16 lg:mt-0"
          initial={inView ? { x: 1000 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: 1000 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[#fff] text-5xl lg:text-6xl font-extrabold">
            {title}
          </h2>
          {secondaryTitle && (
            <h2 className="text-[#fff] text-5xl lg:text-6xl font-extrabold">
              {secondaryTitle}
            </h2>
          )}
          <p className="mt-10 text-white lg:text-[#777777]">{textBody}</p>
        </motion.div>
      </section>
    </article>
  );
};

export default Leading;
