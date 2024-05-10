import { useState } from "react";
import projectTraceImage from "../../assets/images/avatar3.svg";

import { motion } from "framer-motion";

const ImageCard = ({ employee }: { employee: any }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <section
      key={employee.id}
      className="relative w-[12rem] h-[35vh]  md:w-[14rem] bg-white  md:h-[33vh] flex items-end border"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.img
        src={employee.image.url}
        alt=""
        className="w-[12rem] h-[35vh] md:w-[14rem]  md:h-[33vh]  z-50 object-cover"
        style={{
          top: -40,
        }}
        initial={isHover ? { x: 0, y: 0 } : { x: -40, y: -51 }}
        animate={isHover ? { x: -40, y: -51 } : { x: 0, y: 0 }}
        transition={{ duration: 0.4 }}
      />
      <div className="absolute w-full px-1 lg:px-3 pb-1 flex flex-col justify-between items-center text-black font-medium">
        <h3 className="self-start font-semibold ">{employee.name}</h3>
        <p className="self-start text-sm ">{employee.position}</p>
      </div>
    </section>
  );
};

export default ImageCard;
