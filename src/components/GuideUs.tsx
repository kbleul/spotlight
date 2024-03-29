import bulbImg from "../assets/images/light_small.svg";
import borderImg from "../assets/images/border1.svg";

const GuideUs = () => {
  return (
    <article className="pl-[3%] overflow-hidden text-black bg-white ">
      <img src={bulbImg} alt="" className="w-48" />

      <section className="px-[4%]">
        <h4 className="text-7xl font-extrabold">What Guides Us</h4>

        <p className="mt-4 text-[#777777] w-1/2 max-w-[600px] ml-[30%] font-bold">
          Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer sed
          euismod pellentesque. Eget fermentum leo diam tortor vitae tellus
          lacus pellentesque sed.
        </p>
      </section>

      <section className="flex justify-evenly w-[90%] mt-20">
        <div
          className="max-w-[600px] w-[46%] z-0 px-6 pt-6 pb-20 border-b border-black "
          style={{
            backgroundImage: `url(${borderImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="text-right text-3xl font-extrabold">Visionary</h4>
          <p className="mt-4 text-[#777777] font-bold ">
            Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
            sed euismod pellentesque. Eget fermentum leo diam tortor vitae
            tellus lacus pellentesque sed.
          </p>
        </div>
        <div
          className="max-w-[600px] w-[46%] z-0 px-6 pt-6 pb-20 border-b border-black "
          style={{
            backgroundImage: `url(${borderImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="text-right text-3xl font-extrabold">Precise</h4>
          <p className="mt-4 text-[#777777] font-bold">
            Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
            sed euismod pellentesque. Eget fermentum leo diam tortor vitae
            tellus lacus pellentesque sed.
          </p>
        </div>
      </section>
      <section className="flex justify-evenly ml-[5%] w-[90%] mt-20">
        <div
          className="max-w-[600px] w-[46%] z-0 px-6 pt-6 pb-20 border-b border-black "
          style={{
            backgroundImage: `url(${borderImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="text-right text-3xl font-extrabold">Agile</h4>
          <p className="mt-4 text-[#777777] font-bold">
            Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
            sed euismod pellentesque. Eget fermentum leo diam tortor vitae
            tellus lacus pellentesque sed.
          </p>
        </div>
        <div
          className="max-w-[600px] w-[46%] z-0 px-6 pt-6 pb-20 border-b border-black "
          style={{
            backgroundImage: `url(${borderImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="text-right text-3xl font-extrabold">Harmonious</h4>
          <p className="mt-4 text-[#777777] font-bold">
            Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
            sed euismod pellentesque. Eget fermentum leo diam tortor vitae
            tellus lacus pellentesque sed.
          </p>
        </div>
      </section>
    </article>
  );
};

export default GuideUs;
