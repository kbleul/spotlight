import circlesImg from "../../assets/images/circles.svg";
import ChatBox from "./ChatBox";

const ContactUs = () => {
  return (
    <article
      id="contact-us"
      className="px-[5%] bg-black pt-12 lg:pt-20 relative overflow-hidden"
    >
      <section className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 z-10 text-[3rem] md:text-[5rem] lg:text-[5rem] text-nowrap text-center lg:text-left leading-[3rem] md:leading-[5rem]">
          <h4 className="text-white leading-4 font-extrabold">
            Let's Connect!
          </h4>
          {/* <h4 className="text-white  font-extrabold mt-2">Get in touch.</h4> */}
        </div>

        <ChatBox />
      </section>

      <img
        src={circlesImg}
        className="bgCircles max-w-[350px] lg:max-w-[400px] block"
        alt=""
      />
    </article>
  );
};

export default ContactUs;
