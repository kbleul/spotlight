import newsImg1 from "../assets/images/news/news1.svg";
import newsImg2 from "../assets/images/news/news2.svg";
import newsImg3 from "../assets/images/news/news3.svg";
import newsImg4 from "../assets/images/news/news4.svg";
import newsImg5 from "../assets/images/news/news5.svg";

import { useState } from "react";

import { motion } from "framer-motion";

const FeedImgList = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <article className="hidden lg:block w-full">
        <section className="flex w-full justify-center relative ">
          <div
            className="w-[750px] relative flex justify-center"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={newsImg1} alt="" className="w-[300px] z-50" />

            <motion.img
              src={newsImg2}
              alt=""
              className="w-[220px] absolute  left-0 "
              style={{
                top: 40,
              }}
              initial={isHovered ? { x: 0 } : { x: -225 }}
              animate={isHovered ? { x: -225 } : { x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.img
              src={newsImg3}
              alt=""
              className="w-[240px] absolute left-0"
              style={{
                top: 30,
                left: "100px",
              }}
              initial={isHovered ? { x: 0 } : { x: -108 }}
              animate={isHovered ? { x: -108 } : { x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.img
              src={newsImg4}
              alt=""
              className="w-[240px]  absolute left-0  z-10"
              style={{
                top: 30,
                left: "420px",
              }}
              initial={isHovered ? { x: 0 } : { x: 90 }}
              animate={isHovered ? { x: 90 } : { x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.img
              src={newsImg5}
              alt=""
              className="w-[220px]  absolute left-0 "
              style={{
                top: 40,
                left: "560px",
              }}
              initial={isHovered ? { x: 0 } : { x: 188 }}
              animate={isHovered ? { x: 188 } : { x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </section>
      </article>

      <article className="lg:hidden w-full border">
        <section className="flex w-full justify-center relative ">
          <div
            className="w-[750px] relative flex justify-center"
            onClick={() => setIsHovered((prev) => !prev)}
            onMouseOut={() => setIsHovered(false)}
          >
            <img src={newsImg1} alt="" className="w-[30%] z-50" />

            <motion.img
              src={newsImg2}
              alt=""
              className="w-[22%] absolute   "
              style={{
                top: 14,
                left: "15%",
              }}
              initial={isHovered ? { x: 0 } : { x: -60 }}
              animate={isHovered ? { x: -60 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.img
              src={newsImg3}
              alt=""
              className="w-1/4 absolute left-0"
              style={{
                top: 9,
                left: "25%",
              }}
              initial={isHovered ? { x: 0 } : { x: -30 }}
              animate={isHovered ? { x: -30 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.img
              src={newsImg4}
              alt=""
              className="w-1/4 absolute left-0  z-10"
              style={{
                top: 10,
                left: "52%",
              }}
              initial={isHovered ? { x: 0 } : { x: 30 }}
              animate={isHovered ? { x: 30 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.img
              src={newsImg5}
              alt=""
              className="w-[22%]  absolute left-0 "
              style={{
                top: 15,
                left: "65%",
              }}
              initial={isHovered ? { x: 0 } : { x: 60 }}
              animate={isHovered ? { x: 60 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </section>
      </article>
    </>
  );
};

export default FeedImgList;
