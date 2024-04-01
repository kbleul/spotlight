import communityImg from "../assets/images/community.svg";
import communityImg2 from "../assets/images/culture.png";

const Values = () => {
  return (
    <article className="px-[5%] py-20 lg:h-[103vh] bg-black flex flex-col lg:flex-row items-start justify-between overflow-hidden">
      <section className="w-full min-h-[60vh] lg:min-h-0 lg:w-[48%] mt-[16vh] lg:mt-0 relative order-2 lg:order-1">
        <img
          src={communityImg}
          alt=""
          className="absolute w-[351px] lg:w-[451px]"
          style={{
            left: -50,
            top: -50,
            transform: "rotate(13deg)",
          }}
        />
        <img
          src={communityImg2}
          alt=""
          className="absolute w-[359px] customImg3"
          style={{
            transform: "rotate(-25deg)",
          }}
        />
      </section>
      <section className="w-full lg:w-[48%] lg:pt-[20vh] order-1 lg:order-2">
        <h4 className="text-6xl lg:text-8xl font-bold  text-white">
          Our Values
        </h4>

        <p className="max-w-[600px] text-white lg:text-[#777777] font-medium mt-10">
          Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer sed
          euismod pellentesque. Eget fermentum leo diam tortor vitae tellus
          lacus pellentesque sed. Fringilla ut blandit faucibus a. Vel vitae
          neque egestas risus fermentum porta. Purus mauris elementum erat mi
          non quam augue. Consectetur sed vivamus nulla tempor ultrices augue
          est. Varius ac sed viverra magna velit nisi. Tincidunt sollicitudin
          fermentum enim vel sem. Duis molestie id aliquam quisque dui lacus
          eget egestas. Consectetur sed vivamus nulla tempor ultrices augue est.
          Varius ac sed viverra magna velit nisi. Tincidunt sollicitudin
          fermentum enim vel sem. Duis molestie id aliquam quisque dui lacus
          eget egestas.
        </p>
      </section>
    </article>
  );
};

export default Values;
