import communityImg from "../assets/images/community.svg";
import communityImg2 from "../assets/images/culture.png";

const Communty = () => {
  return (
    <article className="px-[5%] lg:px-[10%] pb-20 lg:pb-0 lg:h-screen flex flex-col lg:flex-row items-center justify-between ">
      <section className="w-full lg:w-[60%] ">
        <h4 className="text-4xl lg:leading-[4rem] lg:text-6xl font-extrabold lg:font-bold mb-4 md:mb-0  text-black">
          This is
        </h4>
        <h4 className="text-4xl lg:leading-[4rem] lg:text-6xl font-extrabold lg:font-bold mb-4 md:mb-0  text-black  lg:block">
          No Ordinary Workplace,
        </h4>

        <h4 className="text-4xl lg:leading-[4rem] lg:text-6xl font-extrabold lg:font-bold  mb-4 md:mb-0 text-black  lg:block">
          It’s a Creative Playground
        </h4>

        <p className="max-w-[600px] text-[#4f4f4f] mt-10 text-lg lg:text-2xl">
          A daring tribe of visionary strategists, creatives, storytellers
          united by a bold desire to spark change through game-changing creative
          work. We're more than coworkers - we're a tight-knit creative family.
        </p>
      </section>
      <section className="w-full lg:w-[36%] relative flex justify-center  py-6 mt-20">
        <img
          src={communityImg}
          alt=""
          className=" w-[90%] ml-[2%] lg:w-[550px]"
        />
        <img
          src={communityImg2}
          alt=""
          className=" w-[140px] lg:w-[225px] customImg1"
          style={{
            transform: "rotate(-15deg)",
          }}
        />
        <img
          src={communityImg2}
          alt=""
          className=" w-[140px] lg:w-[200px] customImg2"
        />
      </section>
    </article>
  );
};

export default Communty;
