import storyImg from "../assets/images/culture.png";

const OurStory = () => {
  return (
    <article className="relative min-h-[90vh] px-[3%] lg:px-0 lg:pl-[10%] pt-16 overflow-hidden bg-white flex flex-col lg:flex-row items-start justify-between ">
      <section className="w-full h-[90vh]  lg:w-1/2">
        <h2 className="text-black text-7xl font-bold">Our Story</h2>
        <p className="max-w-[600px] text-[#777777] mt-6 font-semibold">
          Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer sed
          euismod pellentesque. Eget fermentum leo diam tortor vitae tellus
          lacus pellentesque sed. Fringilla ut blandit faucibus a. Vel vitae
          neque egestas risus fermentum porta. Purus mauris elementum erat mi
          non quam augue. Consectetur sed vivamus nulla tempor ultrices augue
          est. Varius ac sed viverra magna velit nisi. Tincidunt sollicitudin
          fermentum enim vel sem. Duis molestie id aliquam quisque dui lacus
          eget egestas.
        </p>
      </section>

      <img
        src={storyImg}
        alt=""
        className="max-w-[300px] lg:max-w-[600px] absolute"
        style={{ transform: "rotate(10deg)", bottom: 50, right: -50 }}
      />
    </article>
  );
};

export default OurStory;
