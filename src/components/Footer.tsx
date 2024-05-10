import { CiLocationOn } from "react-icons/ci";
import logoWhite from "../assets/images/logo_white.svg";
import { MdOutlinePhone } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
  return (
    <article className="py-[4vh] bg-black flex flex-col lg:flex-row ">
      <section className="lg:pl-[7%] text-white  flex lg:block flex-col items-center w-4/5 ml-[10%] lg:ml-0 lg:w-1/2 ">
        <img src={logoWhite} className="w-[150px] lg:max-w-none order-1" />

        <div className="w-full pl-[15%] lg:pl-0 flex items-center justify-start gap-4  lg:mt-2 order-3 ">
          <div className="border border-[#777777] p-2 rounded-full">
            <CiLocationOn className="w-4 h-4" />
          </div>
          <a
            href="https://maps.app.goo.gl/gHQef7Uxz4eEsWdGA"
            target="_blanck"
            className=" flex flex-col gap-2 mt-4"
          >
            <p>Bole, DH Geda Tower</p>
            <p>7th Floor; Office Suite 705</p>
          </a>
        </div>

        <div className="w-full pl-[15%] lg:pl-0 flex items-center justify-start gap-4 mt-4 order-2 ">
          <div className="border border-[#777777] p-2 rounded-full">
            <MdOutlinePhone className="w-4 h-4" />
          </div>
          <div className=" flex flex-col gap-2 ">
            <p>+251 92 917 5223</p>
            <p>+251 91 398 6445 </p>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-1/2 mt-[10vh] lg:mt-0 flex flex-col justify-between items-center lg:items-end lg:pr-[7%]">
        <button
          className="hidden lg:block border border-[#777777] p-2 rounded-full w-fit text-white mr-4"
          onClick={() => scrollTo(0, 0)}
        >
          <IoIosArrowRoundUp size="50" />
        </button>

        <div className="lg:pr-[4%]">
          <div className="flex justify-center lg:justify-end gap-6 text-white">
            <a
              href="http://www.facebook.com/spotlightethiopia"
              className="border border-[#777777] p-2 lg:p-3 rounded-full"
              target="_blank"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="http:/www.linkedin.com/company/spotlightethiopia"
              className="border border-[#777777] p-2 lg:p-3 rounded-full"
              target="_blank"
            >
              <GrLinkedinOption className="w-4 h-4" />
            </a>
            <a
              href="http://www.instagram.com/spotlightethiopia"
              className="border border-[#777777] p-2 lg:p-3 rounded-full"
              target="_blank"
            >
              <FaInstagram className="w-4 h-4" />
            </a>

            <a
              href="http://www.twitter.com/spotlightethiopia"
              className="border border-[#777777] p-2 lg:p-3 rounded-full"
              target="_blank"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>
          <p className="hidden lg:block text-[#777777] text-sm  px-2 lg:text-base uppercase font-semibold mt-5 text-center lg:text-right">
            Spotlight Communications and Marketing LTD © 2024
          </p>

          <p className=" lg:hidden text-[#777777] text-sm  px-2 lg:text-base uppercase font-semibold mt-5 text-center lg:text-right">
            Spotlight Communications and Marketing LTD
          </p>
          <p className=" lg:hidden text-[#777777] text-sm  px-2 lg:text-base uppercase font-semibold mt-5 text-center lg:text-right">
            © 2024
          </p>
        </div>
      </section>
    </article>
  );
};

export default Footer;
