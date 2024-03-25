import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import aboutImg from "../../assets/images/about.svg";
import shineImg from "../../assets/images/shine.svg";
import handsImg from "../../assets/images/hands.png";
import GuideUs from "../GuideUs";

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
      <article className=" bg-black text-white pt-[10vh]">
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

          <div className="w-4/5 ml-[10%] mt-20 flex justify-end text-[#777777]">
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

      <div className="py-48 bg-black">
        <Leading
          img={aboutImg}
          title="Leading the"
          secondaryTitle="Change"
          textBody={`Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
      sed euismod pellentesque. Eget fermentum leo diam tortor vitae
      tellus lacus pellentesque sed. Fringilla ut blandit faucibus a. Vel
      vitae neque egestas risus fermentum porta. Purus mauris elementum
      erat mi non quam augue. Consectetur sed vivamus nulla tempor
      ultrices augue est. Varius ac sed viverra magna velit nisi.
      Tincidunt sollicitudin fermentum enim vel sem. Duis molestie id
      aliquam quisque dui lacus eget egestas.`}
        />
      </div>

      <div className="pb-48 bg-black">
        <Leading
          img={shineImg}
          title="Shining a Light"
          textBody={`Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
      sed euismod pellentesque. Eget fermentum leo diam tortor vitae
      tellus lacus pellentesque sed. Fringilla ut blandit faucibus a. Vel
      vitae neque egestas risus fermentum porta. Purus mauris elementum
      erat mi non quam augue. Consectetur sed vivamus nulla tempor
      ultrices augue est. Varius ac sed viverra magna velit nisi.
      Tincidunt sollicitudin fermentum enim vel sem. Duis molestie id
      aliquam quisque dui lacus eget egestas.`}
        />
      </div>

      <div className="pb-48 bg-black">
        <Connections
          img={handsImg}
          title="Connecting on a"
          secondaryTitle="Human Level"
          textBody={`Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
sed euismod pellentesque. Eget fermentum leo diam tortor vitae
tellus lacus pellentesque sed. Fringilla ut blandit faucibus a. Vel
vitae neque egestas risus fermentum porta. Purus mauris elementum
erat mi non quam augue. Consectetur sed vivamus nulla tempor
ultrices augue est. Varius ac sed viverra magna velit nisi.
Tincidunt sollicitudin fermentum enim vel sem. Duis molestie id
aliquam quisque dui lacus eget egestas.`}
        />
      </div>

      <GuideUs />
    </>
  );
};

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
    <article className="px-[10%]  overflow-hidden text-white bg-black flex items-start justify-between ">
      <section ref={ref} className="flex items-start justify-between">
        <motion.div
          className="w-[45%] flex justify-center items-start  pt-4"
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 0.7 }}
        >
          <img src={img} alt="" className="max-w-[20rem]" />
        </motion.div>

        <motion.div
          className="w-[45%] "
          initial={inView ? { x: 1000 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: 1000 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[#fff] text-6xl font-extrabold">{title}</h2>
          {secondaryTitle && (
            <h2 className="text-[#fff] text-6xl font-extrabold">
              {secondaryTitle}
            </h2>
          )}
          <p className="mt-10 text-[#777777]">{textBody}</p>
        </motion.div>
      </section>
    </article>
  );
};

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

export default AboutHero;
