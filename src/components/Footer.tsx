import { CiLocationOn } from "react-icons/ci";
import logoWhite from "../assets/images/logo_white.svg";
import { MdOutlinePhone } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
  return (
    <article className="py-[10vh] bg-black flex flex-col lg:flex-row ">
      <section className="lg:pl-[7%] text-white w-full  flex lg:block flex-col items-center lg:w-1/2">
        <img
          src={logoWhite}
          className="w-full lg:w-auto  max-w-[200px] lg:max-w-none order-1"
        />

        <div className="w-full pl-[15%] lg:pl-0 flex items-center justify-start gap-4 mt-4 lg:mt-10 order-3 ">
          <div className="border border-[#777777] p-2 rounded-full">
            <CiLocationOn className="w-4 h-4" />
          </div>
          <div className="lg:text-lg flex flex-col gap-2 mt-4">
            <p>Bole; DH Geda Tower</p>
            <p>7th Floor; Office Suite 705</p>
          </div>
        </div>

        <div className="w-full pl-[15%] lg:pl-0 flex items-center justify-start gap-4 mt-8 order-2 ">
          <div className="border border-[#777777] p-2 rounded-full">
            <MdOutlinePhone className="w-4 h-4" />
          </div>
          <div className="lg:text-lg flex flex-col gap-2 ">
            <p>+2519000000</p>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-1/2 mt-[30vh] lg:mt-0 flex flex-col justify-between items-center lg:items-end lg:pr-[5%]">
        <button
          className="hidden lg:block border border-[#777777] p-2 rounded-full w-fit text-white"
          onClick={() => scrollTo(0, 0)}
        >
          <IoIosArrowRoundUp size="50" />
        </button>

        <div className="lg:pr-[10%]">
          <div className="flex justify-center lg:justify-end gap-6 text-white">
            <div className="border border-[#777777] p-2 lg:p-3 rounded-full">
              <FaFacebookF className="w-4 h-4" />
            </div>
            <div className="border border-[#777777] p-2 lg:p-3 rounded-full">
              <GrLinkedinOption className="w-4 h-4" />
            </div>
            <div className="border border-[#777777] p-2 lg:p-3 rounded-full">
              <FaInstagram className="w-4 h-4" />
            </div>

            <div className="border border-[#777777] p-2 lg:p-3 rounded-full">
              <FaXTwitter className="w-4 h-4" />
            </div>
          </div>
          <p className="text-[#777777]  lg:text-lg uppercase font-semibold mt-5 text-center lg:text-right">
            Spotlight communication ©2024
          </p>
        </div>
      </section>
    </article>
  );
};

export default Footer;
