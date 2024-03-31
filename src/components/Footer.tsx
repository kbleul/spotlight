import { CiLocationOn } from "react-icons/ci";
import logoWhite from "../assets/images/logo_white.svg";
import { MdOutlinePhone } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
  return (
    <article className="py-[10vh] bg-black flex ">
      <section className="pl-[7%] text-white w-1/2">
        <img src={logoWhite} className="" />

        <div className="flex items-center justify-start gap-4 mt-10">
          <div className="border border-[#777777] p-2 rounded-full">
            <CiLocationOn size="28" />
          </div>
          <div className="text-lg flex flex-col gap-2 mt-4">
            <p>Bole; DH Geda Tower</p>
            <p>7th Floor; Office Suite 705</p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-4 mt-8">
          <div className="border border-[#777777] p-3 rounded-full">
            <MdOutlinePhone size="24" />
          </div>
          <div className="text-lg flex flex-col gap-2 ">
            <p>+2519000000</p>
          </div>
        </div>
      </section>
      <section className="w-1/2 flex flex-col justify-between items-end pr-[5%]">
        <button
          className="border border-[#777777] p-2 rounded-full w-fit text-white"
          onClick={() => scrollTo(0, 0)}
        >
          <IoIosArrowRoundUp size="50" />
        </button>

        <div className="pr-[10%]">
          <div className="flex justify-end gap-6 text-white">
            <div className="border border-[#777777] p-3 rounded-full">
              <FaFacebookF size="20" />
            </div>
            <div className="border border-[#777777] p-3 rounded-full">
              <GrLinkedinOption size="20" />
            </div>
            <div className="border border-[#777777] p-3 rounded-full">
              <FaInstagram size="20" />
            </div>

            <div className="border border-[#777777] p-3 rounded-full">
              <FaXTwitter size="20" />
            </div>
          </div>
          <p className="text-[#777777] text-xl capitalize font-semibold mt-5 text-right">
            Spotlight communication ©2024
          </p>
        </div>
      </section>
    </article>
  );
};

export default Footer;
