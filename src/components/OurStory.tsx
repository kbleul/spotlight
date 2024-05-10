import storyImg from "../assets/images/Spotlighting.png";

const OurStory = () => {
  return (
    <article className="relative py-14 lg:py-[20vh] px-[3%] border-4 lg:px-[5%]  overflow-hidden bg-white flex flex-col lg:flex-row items-start justify-center ">
      {/* <section className="w-full h-[90vh]  lg:w-1/2">
        <h2 className="text-black text-5xl lg:text-6xl font-bold">
          Spotlighting
        </h2>
        <p className="max-w-[600px] text-[#777777] lg:text-2xl mt-6 font-semibold">
          A constant juggle of visionary thinking and collaboration on an
          unstoppable mission to produce industry defining creative genius - a
          seamless flow of brilliant minds united in creative kinship.
        </p>
      </section> */}
      <div className="w-full lg:w-3/5">
        <img src={storyImg} alt="" className="w-full  " />
      </div>
    </article>
  );
};

export default OurStory;
