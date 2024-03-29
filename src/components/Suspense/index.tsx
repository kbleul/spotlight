import { useEffect, useState } from "react";
import light_bulb from "../../assets/images/Light_black.svg";
import logo_light from "../../assets/images/logo_white.svg";

import { motion } from "framer-motion";

const Loading = ({
  setIsLoading,
}: {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isSecondImageVisible, setIsSecondImageVisible] = useState(false);
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSecondImageVisible(true);

      setTimeout(() => setIsLoadingVisible(true), 2000);

      setIsLoading && setTimeout(() => setIsLoading(false), 6000);
    }, 2000); // Set delay to 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative h-[100vh] w-full bg-gradient-to-b from-[#292929] to-[#000] flex flex-col justify-start items-center">
      <motion.img
        src={light_bulb}
        alt="bulb"
        className="w-3/5 "
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      />

      {isSecondImageVisible && (
        <motion.img
          src={logo_light}
          alt="logo"
          className="w-2/5 absolute top-[50vh]"
          initial={{ y: -100, x: -100 }}
          animate={{ y: 0, x: 0 }}
          transition={{ duration: 1 }}
        />
      )}

      <motion.div
        className="elipces_shadow bg-[#1a1a1a] shadow-xl w-2/5 h-8 absolute top-[75vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {isLoadingVisible && (
        <div className="bg-black w-4/5 h-[2px] rounded-full absolute bottom-20">
          <motion.div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      )}
    </main>
  );
};

export default Loading;
