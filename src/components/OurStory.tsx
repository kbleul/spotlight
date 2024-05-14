import storyImg from "../assets/images/Spotlighting.png";

const OurStory = () => {
  return (
    <article className="relative py-14 lg:py-[20vh] px-[3%] border-4 lg:px-[5%]  overflow-hidden bg-white flex flex-col lg:flex-row items-start justify-center ">
      <div className="w-full lg:w-3/5">
        <img src={storyImg} alt="" className="w-full  " loading="lazy" />
      </div>
    </article>
  );
};

export default OurStory;
