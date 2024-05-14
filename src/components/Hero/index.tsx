import { useEffect, useState } from "react";
import Header from "../Header";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState<string | null>(null);

  const handleImageLoad = () => {
    import("../../assets/images/bgvid.gif").then((module) => {
      setImageLoaded(module.default);
    });
  };

  useEffect(() => {
    handleImageLoad();
  }, []);

  return (
    <article
      className="absolute top-0 px-6 md:px-12 pt-[10%] w-full min-h-[40vh] md:min-h-[100vh] bg-black"
      style={
        imageLoaded
          ? {
              backgroundImage: `url(${imageLoaded})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="absolute top-0 w-full left-0">
        <Header />
      </div>

      <div className="w-full mt-[18vh] h-full  flex flex-col justify-center items-center lg:mt-[10vh]">
        <h2 className="w-full text-[#fff] text-[80px] text-center md:text-[120px] lg:text-[200px] leading-[8rem] lg:leading-[12rem] font-extrabold">
          SHINE
        </h2>
        <h2 className="w-full  text-[#fff] text-[80px] text-center md:text-[120px] lg:text-[200px] leading-[2rem] lg:leading-[12rem] font-extrabold">
          BRIGHT
        </h2>
      </div>
    </article>
  );
};

export default Hero;
