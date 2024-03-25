import storyImg from "../assets/images/story.svg";

const OurStory = () => {
  return (
    <article className="pl-[10%] pt-16 overflow-hidde bg-white flex items-start justify-between ">
      <section className="w-1/2">
        <h2 className="text-black text-7xl font-bold">Our Story</h2>
        <p className="text-[#777777] mt-6 font-semibold">
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

      <section className="w-1/2 flex justify-end">
        <img src={storyImg} alt="" />
      </section>
    </article>
  );
};

export default OurStory;
