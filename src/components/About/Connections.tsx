import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Connections = ({
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
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <article className="pl-[10%] overflow-hidden text-white bg-black flex items-start justify-between ">
      <section ref={ref} className="flex items-stretch justify-between">
        <motion.div
          className="w-[45%] "
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[#fff] text-6xl font-extrabold">{title}</h2>
          <h2 className="text-[#fff] text-6xl font-extrabold">
            {secondaryTitle}
          </h2>
          <p className="mt-14 text-[#777777]">{textBody}</p>
        </motion.div>

        <motion.div
          className="w-[45%] flex justify-center items-center  pt-4"
          initial={inView ? { x: 1000 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: 1000 }}
          transition={{ duration: 0.7 }}
        >
          <img src={img} alt="" className="" />
        </motion.div>
      </section>
    </article>
  );
};

export default Connections;
