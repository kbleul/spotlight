import { useState } from "react";

import { motion } from "framer-motion";

const ImageCard = ({ employee }: { employee: any }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section
      key={employee.id}
      className="relative w-32 md:w-[14rem] bg-white  h-[33vh] flex items-end border"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.img
        src={employee.img}
        alt=""
        className="h-full w-full z-50 object-cover"
        style={{
          top: -40,
        }}
        initial={isHover ? { x: 0, y: 0 } : { x: -40, y: -37 }}
        animate={isHover ? { x: -40, y: -37 } : { x: 0, y: 0 }}
        transition={{ duration: 0.4 }}
      />
      <div className="absolute bottom- 0 w-full px-3 py-2 flex justify-between items-center text-black font-medium">
        <h3 className="">{employee.name}</h3>
        <p className="">{employee.title}</p>
      </div>
    </section>
  );
};

export default ImageCard;
