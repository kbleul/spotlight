import partner_img1 from "../assets/images/partners/1.svg";
import partner_img2 from "../assets/images/partners/2.svg";
import partner_img3 from "../assets/images/partners/3.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <article ref={ref} className="bg-black pt-4 pb-6">
      <h4 className="text-[#4F4F4F] font-bold text-xl text-center w-full">
        Our Partners
      </h4>

      <section className="w-4/5 ml-[10%] flex  justify-center items-center gap-[10%] mt-6">
        <motion.img
          src={partner_img1}
          alt=""
          className="max-w-[12rem]"
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src={partner_img2}
          alt=""
          className="max-w-[12rem]"
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={partner_img3}
          alt=""
          className="max-w-[12rem]"
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 1.3 }}
        />
      </section>
    </article>
  );
};

export default Partners;
