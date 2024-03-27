import communityImg from "../assets/images/community.svg";
import communityImg2 from "../assets/images/culture.png";

const Communty = () => {
  return (
    <article className="px-[5%] py-20 h-[100vh] flex items-start justify-between">
      <section className="w-[48%]">
        <h4 className="text-8xl font-bold text-black">Community</h4>
        <h4 className="py-4 text-8xl font-bold text-black">Sharing, caring,</h4>
        <h4 className="text-8xl font-bold text-black">swearing</h4>

        <p className="max-w-[600px] text-[#777777] font-medium mt-10">
          Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer sed
          euismod pellentesque. Eget fermentum leo diam tortor vitae tellus
          lacus pellentesque sed. Fringilla ut blandit faucibus a. Vel vitae
          neque egestas risus fermentum porta. Purus mauris elementum erat mi
          non quam augue.
        </p>
      </section>
      <section className="w-[48%] relative">
        <img
          src={communityImg}
          alt=""
          className="w-[710px] h-[710px] mt-[13vh]"
        />
        <img
          src={communityImg2}
          alt=""
          className="absolute   w-[295px] h-[200px]"
          style={{
            left: 200,
            top: 20,
            transform: "rotate(-15deg)",
          }}
        />
        <img
          src={communityImg2}
          alt=""
          className="absolute   w-[255px] h-[160px]"
          style={{
            left: -200,
            bottom: 60,
          }}
        />
      </section>
    </article>
  );
};

export default Communty;
