import communityImg from "../assets/images/community.svg";
import communityImg2 from "../assets/images/culture.png";

const Communty = () => {
  return (
    <article className="px-[5%] py-20 lg:h-[100vh] flex flex-col lg:flex-row items-start justify-between">
      <section className="w-full lg:w-[48%]">
        <h4 className="text-5xl lg:text-7xl font-extrabold lg:font-bold  text-black">
          Community
        </h4>
        <h4 className="py-4 text-5xl lg:text-7xl font-extrabold lg:font-bold  text-black hidden lg:block">
          Sharing, caring,
        </h4>
        <h4 className="py-4 text-5xl lg:text-7xl font-extrabold lg:font-bold  text-black lg:hidden">
          Sharing,
        </h4>
        <h4 className="py-4 pt-2 text-5xl lg:text-7xl font-extrabold lg:font-bold  text-black lg:hidden">
          caring,
        </h4>
        <h4 className="text-5xl lg:text-7xl font-extrabold lg:font-bold  text-black">
          swearing
        </h4>

        <p className="max-w-[600px] text-[#777777] font-medium mt-10">
          Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer sed
          euismod pellentesque. Eget fermentum leo diam tortor vitae tellus
          lacus pellentesque sed. Fringilla ut blandit faucibus a. Vel vitae
          neque egestas risus fermentum porta. Purus mauris elementum erat mi
          non quam augue.
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
          className=" w-[180px] lg:w-[255px] customImg1"
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
