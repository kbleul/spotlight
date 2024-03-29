import communityImg from "../assets/images/community.svg";
import communityImg2 from "../assets/images/culture.png";

const Values = () => {
  return (
    <article className="px-[5%] py-20 h-[103vh] bg-black flex items-start justify-between overflow-hidden">
      <section className="w-[48%] relative">
        <img
          src={communityImg}
          alt=""
          className="absolute w-[451px]"
          style={{
            left: -50,
            top: -50,
            transform: "rotate(13deg)",
          }}
        />
        <img
          src={communityImg2}
          alt=""
          className="absolute w-[359px]"
          style={{
            left: -50,
            top: 350,
            transform: "rotate(-25deg)",
          }}
        />
      </section>
      <section className="w-[48%] pt-[20vh]">
        <h4 className="text-8xl font-bold  text-white">Our Values</h4>

        <p className="max-w-[600px] text-[#777777] font-medium mt-10">
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
