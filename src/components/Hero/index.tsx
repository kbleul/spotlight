import logo from "../../assets/images/logo.svg";
import scrollArrow from "../../assets/images/arrow_scroll.svg";

const Hero = () => {
  return (
    <article className="px-12 pt-6 mt-10 relative">
      <div className="w-full flex justify-center">
        <img src={logo} alt="logo" className="w-full max-w-[1400px]" />
      </div>

      <section className="w-full flex justify-end mt-10">
        <div className="w-1/2 mt-6 pr-12">
          <h2 className="text-2xl font-extrabold">
            We make it simple to stand out
          </h2>
          <p className="mt-2 text-[#777777] font-medium text-lg">
            Lorem ipsum dolor sit amet consectetur. Amet nulla viverra in
            dictumst tortor at. Faucibus bibendum et tellus ultricies amet
            molestie non neque eget. Turpis elit consectetur vehicula sapien
            faucibus. Vitae etiam non sem tempus.
          </p>
        </div>
      </section>

      <img
        src={scrollArrow}
        alt="logo"
        className="absolute w-8"
        style={{
          bottom: -150,
        }}
      />
    </article>
  );
};

export default Hero;
