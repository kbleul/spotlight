import { motion } from "framer-motion";
import serviceImg from "../../assets/images/Services-Page---Banner.jpg";

const Hero = () => {
  return (
    <motion.div
      className="lg:h-[100vh] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <article className="px-[5%]">
        <h2 className="text-[#e0e0e0] stroke-black lg:text-[#4F4F4F] text-[70px] text-center lg:text-left lg:text-[110px] font-extrabold">
          Services
        </h2>

        <p className="w-full lg:w-4/5 md:ml-[10%] text-[#4f4f4f] text-lg md:text-2xl">
          We are storytellers and brand advocates. We craft compelling
          narratives that grow brands, nurture meaningful connections, and
          inspire audiences through experiences across the full spectrum of
          strategy, marketing, advertising, branding, production, and event
          services.
        </p>

        {/* <p className="lg:ml-[20%] text-[#4f4f4f] mt-4">
          We connect with people to promote, manage and protect brands and
          reputations
        </p> */}

        <div className="w-full flex justify-center mt-5">
          <img
            src={serviceImg}
            alt=""
            className="mt-10 w-full lg:w-[90%]  bg-cover"
          />
        </div>
      </article>
    </motion.div>
  );
};

export default Hero;
