import communityImg from "../assets/images/community.svg";
import communityImg2 from "../assets/images/culture.png";

const Communty = () => {
  return (
    <article className="px-[5%] pb-28 lg:py-20 lg:h-[100vh] flex flex-col lg:flex-row items-start justify-between">
      <section className="w-full lg:w-[48%]">
        <h4 className="text-5xl lg:leading-[6.5rem] lg:text-7xl font-extrabold lg:font-bold mb-4 md:mb-0  text-black">
          This is
        </h4>
        <h4 className="text-5xl lg:leading-[6.5rem] lg:text-7xl font-extrabold lg:font-bold mb-4 md:mb-0  text-black  lg:block">
          No Ordinary Workplace
        </h4>

        <h4 className="text-5xl lg:leading-[6.5rem] lg:text-7xl font-extrabold lg:font-bold  mb-4 md:mb-0 text-black  lg:block">
          It’s a Creative Playground
        </h4>

        <p className="max-w-[600px] text-[#777777] font-medium mt-10">
          A daring tribe of visionary strategists, creatives, storytellers
          united by a bold desire to spark change through game-changing creative
          work. We're more than coworkers - we're a tight-knit creative family.
        </p>
      </section>
      <section className="w-full lg:w-[48%] relative flex justify-center py-6 mt-28 lg:mt-0">
        <img
          src={communityImg}
          alt=""
          className=" w-[90%] ml-[10%] lg:w-[450px]"
        />
        <img
          src={communityImg2}
          alt=""
          className=" w-[180px] lg:w-[225px] customImg1"
          style={{
            transform: "rotate(-15deg)",
          }}
        />
        <img
          src={communityImg2}
          alt=""
          className=" w-[180px] lg:w-[230px] customImg2"
        />
      </section>
    </article>
  );
};

export default Communty;
