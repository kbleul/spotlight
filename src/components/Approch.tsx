import approachTrace from "../assets/images/Approach.svg";
import stairImg from "../assets/images/stair.svg";

const Approch = () => {
  return (
    <article className="lg:h-screen px-[5%] py-10 pb-28 lg:py-20 bg-white flex flex-col items-start">
      <img
        src={approachTrace}
        alt=""
        className="w-full lg:w-1/2 max-w-[800px]"
      />

      <section className="flex items-start justify-start pl-6 w-full">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 pt-4 lg:pt-10 text-[#4F4F4F] font-medium md:font-semibold">
          <p className="max-w-[600px]">
            We collaborate to craft creative communications strategies and
            spot-lessly execute to create lastings connections in the hearts and
            minds of people.
          </p>
        </div>
        <img
          src={stairImg}
          alt=""
          className="hidden lg:block w-1/2 max-w-[450px]"
        />
      </section>
    </article>
  );
};

export default Approch;
