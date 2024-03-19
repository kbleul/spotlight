import { IoIosArrowRoundForward } from "react-icons/io";

const NavButtoms = () => {
  return (
    <article className="flex gap-7  text-[#777777] font-medium text-lg">
      <button>Home</button>
      <button>About</button>
      <button>Approch</button>
      <button>Culture</button>
      <button>Feed</button>
      <div className="expandButtonContainer ml-10">
        <button className="expandButton bg-black text-white py-2 font-normal flex gap-1 items-center px-4">
          <p>Contact</p>

          <IoIosArrowRoundForward className="expandButtonIcon" size={24} />
        </button>
      </div>
    </article>
  );
};

export default NavButtoms;
