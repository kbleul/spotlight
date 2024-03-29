import { motion } from "framer-motion";
import serviceImg from "../../assets/images/service2.png";

const Hero = () => {
  return (
    <motion.div
      className="h-[100vh] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <article className="px-[5%]">
        <h2 className="text-[#4F4F4F] text-[110px] font-extrabold">Service</h2>

        <p className="ml-[20%] text-[#4f4f4f]">
          Lorem ipsum dolor sit amet consectetur. Pretium mattis sit aliquet
          hendrerit imperdiet tortor lectus auctor. Malesuada vitae nunc orci
          faucibus. Faucibus nisl nec eu accumsan. Neque in nisl sit nisl semper
          pulvinar pharetra. Congue commodo praesent. Lorem ipsum dolor sit amet
          consectetur. Pretium mattis sit aliquet hendrerit imperdiet tortor
          lectus auctor. Malesuada vitae nunc orci faucibus. Faucibus nisl nec
          eu accumsan. Neque in nisl sit nisl semper pulvinar pharetra. Congue
          commodo praesent.
        </p>

        <div className="w-full flex justify-center mt-10">
          <img src={serviceImg} alt="" className="mt-10 w-[90%]  bg-cover" />
        </div>
      </article>
    </motion.div>
  );
};

export default Hero;
