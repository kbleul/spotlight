import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutHero = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  const heroVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <article className="h-full bg-black text-white pt-[10vh]">
        <motion.article
          ref={ref}
          variants={heroVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="   "
        >
          <div className="ml-[25%]">
            <h2 className=" text-8xl font-extrabold  tracking-wider">
              Under the
            </h2>
            <h2 className="text-8xl font-extrabold capitalize tracking-wider">
              Spotlight
            </h2>
          </div>

          <div className="w-4/5 ml-[5%] mt-20 flex justify-end text-[#777777]">
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
              sed euismod pellentesque. Eget fermentum leo diam tortor vitae
              tellus lacus pellentesque sed. Fringilla ut blandit faucibus a.
              Vel vitae neque egestas risus fermentum porta. Purus mauris
              elementum erat mi non quam augue. Consectetur sed vivamus nulla
              tempor ultrices augue est. Varius ac sed viverra magna velit nisi.
              Tincidunt sollicitudin fermentum enim vel sem. Duis molestie id
              aliquam quisque dui lacus eget egestas.
            </p>
          </div>
        </motion.article>
      </article>
    </>
  );
};

export default AboutHero;
