import circlesImg from "../../assets/images/circles.svg";
import ChatBox from "./ChatBox";

const ContactUs = () => {
  return (
    <article className="h-[100vh] px-[5%] bg-black pt-20 relative overflow-hidden">
      <section className="flex ">
        <div className="w-1/2 z-10 text-[6rem] text-nowrap leading-[5rem]">
          <h4 className="text-white  font-extrabold">Want to Talk?</h4>
          <h4 className="text-white  font-extrabold mt-2">Get in touch.</h4>
        </div>

        <ChatBox />
      </section>

      <img
        src={circlesImg}
        className="max-w-[400px]"
        alt=""
        style={{
          position: "absolute",
          bottom: -40,
          left: -40,
        }}
      />
    </article>
  );
};

export default ContactUs;
