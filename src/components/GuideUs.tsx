import bulbImg from "../assets/images/light_small.svg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GuideUs = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <article className="pl-[3%] overflow-hidden text-black bg-white ">
      <img src={bulbImg} alt="" className="w-48" />

      <section className="px-[4%]">
        <h4 className="text-7xl font-extrabold">What Guides Us</h4>

        <p className="mt-4 text-[#777777] w-1/2 max-w-[600px] ml-[30%] font-bold">
          Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer sed
          euismod pellentesque. Eget fermentum leo diam tortor vitae tellus
          lacus pellentesque sed.
        </p>
      </section>

      {/* <section ref={ref} className="flex items-stretch justify-between">
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
    </section> */}
    </article>
  );
};

export default GuideUs;
