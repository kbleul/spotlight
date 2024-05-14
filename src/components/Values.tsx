import communityImg from "../assets/images/community.svg";
import communityImg2 from "../assets/images/culture.png";

const Values = () => {
  return (
    <article className="px-[5%] py-20 pb-0 lg:pb-20 lg:h-[93vh] bg-black flex flex-col lg:flex-row items-start justify-between overflow-hidden">
      <section className="w-full ml-[9%] min-h-[60vh] lg:min-h-0 lg:w-[48%] mt-[16vh] lg:mt-0 relative order-2 lg:order-1">
        <img
          src={communityImg}
          alt=""
          className="absolute w-[251px] lg:w-[500px]"
          style={{
            left: -50,
            top: -50,
            transform: "rotate(13deg)",
          }}
          loading="lazy"
        />
        <img
          src={communityImg2}
          alt=""
          className="absolute w-[300px]  kg:w-[400px] customImg3"
          style={{
            transform: "rotate(-25deg)",
          }}
          loading="lazy"
        />
      </section>
      <section className="w-full lg:w-[48%] lg:pt-[20vh] order-1 lg:order-2">
        <h4 className="text-4xl lg:text-6xl font-bold  text-white">
          We Don’t Stop
        </h4>

        <p className="max-w-[600px] text-white lg:text-[#4f4f4f] text-lg mt-10 lg:text-2xl">
          "Good enough" isn't in our vocabulary. Our fire rages with an
          insatiable hunger to learn, explore uncharted territories, and dig up
          fresh truths that'll blow minds. We never stop questioning, learning
          and evolving to perpetually push the creative envelope.
        </p>
      </section>
    </article>
  );
};

export default Values;
