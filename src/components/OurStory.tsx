import storyImg from "../assets/images/culture.png";

const OurStory = () => {
  return (
    <article className="relative lg:min-h-[90vh] px-[3%] lg:px-0 lg:pl-[10%] pt-16 overflow-hidden bg-white flex flex-col lg:flex-row items-start justify-between ">
      <section className="w-full h-[90vh]  lg:w-1/2">
        <h2 className="text-black text-6xl lg:text-7xl font-bold">
          Spotlighting
        </h2>
        <p className="max-w-[600px] text-[#777777] mt-6 font-semibold">
          A constant juggle of visionary thinking and collaboration on an
          unstoppable mission to produce industry defining creative genius - a
          seamless flow of brilliant minds united in creative kinship.
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
