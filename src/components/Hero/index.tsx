import logo from "../../assets/images/logo.svg";
import scrollArrow from "../../assets/images/arrow_scroll.svg";

const Hero = () => {
  return (
    <article className="px-6 md:px-12 pt-6 mt-10 relative min-h-[40vh] md:min-h-[70vh]">
      <div className="w-full flex flex-col justify-center">
        <h2 className="w-full  text-[#4F4F4F] text-[80px] text-center md:text-[120px] lg:text-[200px] leading-[8rem] lg:leading-[12rem] font-extrabold">
          SHINE
        </h2>
        <h2 className="w-full  text-[#4F4F4F] text-[80px] text-center md:text-[120px] lg:text-[200px] leading-[4rem] lg:leading-[12rem] font-extrabold">
          BRIGHT
        </h2>
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

      <img
        src={scrollArrow}
        alt="logo"
        className="absolute w-5 md:w-8 left-4 md:left-8"
        style={{
          bottom: -50,
        }}
      />
    </article>
  );
};

export default Hero;
