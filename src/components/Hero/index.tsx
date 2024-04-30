import logo from "../../assets/images/Shine.png";
import scrollArrow from "../../assets/images/arrow_scroll.svg";
import Header from "../Header";

const Hero = () => {
  return (
    <article
      className="absolute top-0 px-6 md:px-12 pt-[10%] w-full min-h-[40vh] md:min-h-[100vh] bg-black"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 w-full left-0">
        <Header />
      </div>

      <div className="w-full flex flex-col justify-center mt-[10vh]">
        <h2 className="w-full  text-[#fff] text-[80px] text-center md:text-[120px] lg:text-[200px] leading-[8rem] lg:leading-[12rem] font-extrabold">
          SHINE
        </h2>
        <h2 className="w-full  text-[#fff] text-[80px] text-center md:text-[120px] lg:text-[200px] leading-[8rem] lg:leading-[12rem] font-extrabold">
          BRIGHT
        </h2>
        {/* <h2 className="w-full lg:w-1/4  text-[#fff] text-[80px] text-center lg:text-right lg:mr-[5%] md:text-[120px] lg:text-[80px] leading-[4rem] lg:leading-[6rem] font-extrabold">
          BRIGHT
        </h2> */}
      </div>

      {/* <section className="w-full flex justify-end mt-6 md:mt-10">
        <div className="w-[95%] lg:w-1/2 mt-6 lg:pr-12">
          <h2 className="text-lg md:tet-xl lg:text-2xl font-extrabold">
            We make it simple to stand out
          </h2>
          <p className="mt-2 text-[#777777] font-medium md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Amet nulla viverra in
            dictumst tortor at. Faucibus bibendum et tellus ultricies amet
            molestie non neque eget. Turpis elit consectetur vehicula sapien
            faucibus. Vitae etiam non sem tempus.
          </p>
        </div>
      </section> */}

      {/* <img
        src={scrollArrow}
        alt="logo"
        className="absolute w-5 md:w-8 max-h-24 left-4 md:left-8"
        style={{
          bottom: -50,
        }}
      /> */}
    </article>
  );
};

export default Hero;
