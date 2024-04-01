import bulbImg from "../assets/images/light_small.svg";
import borderImg from "../assets/images/border.svg";

const GuideUs = () => {
  return (
    <article className="px-[3%] lg:px-0 lg:pl-[3%] overflow-hidden text-black bg-white lg:py-4">
      <img src={bulbImg} alt="" className="w-48" />

      <section className="px-[4%]">
        <h4 className="text-4xl lg:text-7xl font-extrabold">What Guides Us</h4>

        <p className="mt-2 lg:mt-4 text-[#777777] w-full lg:w-1/2 max-w-[600px] lg:ml-[30%] font-semibold leading-5 lg:leading-none lg:font-bold">
          Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer sed
          euismod pellentesque. Eget fermentum leo diam tortor vitae tellus
          lacus pellentesque sed.
        </p>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center gap-y-5 lg:justify-evenly w-full lg:w-[90%] mt-4 lg:mt-20">
        <div className="max-w-[600px] w-[96%] lg:w-[46%] z-0 px-6 pt-6 pb-8 lg:pb-20 relative customBorder border">
          <div
            className="absolute hidden lg:block  w-[97%] border rounded-2xl"
            style={{
              bottom: 0,
              left: 9,
            }}
          />

          <h4 className="text-right text-3xl font-extrabold">Visionary</h4>
          <p className="mt-4 text-[#777777] text-sm lg:text-base font-bold ">
            Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
            sed euismod pellentesque. Eget fermentum leo diam tortor vitae
            tellus lacus pellentesque sed.
          </p>
        </div>
        <div className="max-w-[600px] w-[96%] lg:w-[46%] z-0 px-6 pt-6 pb-8 lg:pb-20 relative customBorder border">
          <h4 className="text-right text-3xl font-extrabold">Precise</h4>
          <p className="mt-4 text-[#777777] text-sm lg:text-base font-bold">
            Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
            sed euismod pellentesque. Eget fermentum leo diam tortor vitae
            tellus lacus pellentesque sed.
          </p>
          <div
            className="absolute hidden lg:block  w-[97%] border rounded-2xl"
            style={{
              bottom: 0,
              left: 9,
            }}
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-y-5 lg:justify-evenly lg:ml-[5%] lg:w-[90%] mt-4 lg:mt-20">
        <div className="max-w-[600px] w-[96%] lg:w-[46%] z-0 px-6 pt-6 pb-8 lg:pb-20 relative customBorder border">
          <h4 className="text-right text-3xl font-extrabold">Agile</h4>
          <p className="mt-4 text-[#777777] text-sm lg:text-base font-bold">
            Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
            sed euismod pellentesque. Eget fermentum leo diam tortor vitae
            tellus lacus pellentesque sed.
          </p>
          <div
            className="absolute hidden lg:block  w-[97%] border rounded-2xl"
            style={{
              bottom: 0,
              left: 9,
            }}
          />
        </div>
        <div className="max-w-[600px] w-[96%] lg:w-[46%] z-0 px-6 pt-6 pb-8 lg:pb-20 relative customBorder border">
          <h4 className="text-right text-3xl font-extrabold">Agile</h4>

          <p className="mt-4 text-[#777777] text-sm lg:text-base font-bold">
            Lorem ipsum dolor sit amet consectetur. Donec ac tincidunt integer
            sed euismod pellentesque. Eget fermentum leo diam tortor vitae
            tellus lacus pellentesque sed.
          </p>
          <div
            className="absolute hidden lg:block  w-[97%] border border-gray-300 rounded-2xl"
            style={{
              bottom: 0,
              left: 9,
            }}
          />
        </div>
      </section>
    </article>
  );
};

export default GuideUs;
