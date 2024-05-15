import partner_img1 from "../assets/images/partners/1.svg";
import partner_img2 from "../assets/images/partners/2.svg";
import partner_img3 from "../assets/images/partners/3.svg";
import partner_img4 from "../assets/images/partners/4.png";

const Partners = () => {
  return (
    <article className="bg-white py-5 lg:py-20 ">
      <h4 className="text-[#4F4F4F]  font-bold text-xl text-center w-full">
        Our Agency Networks
      </h4>

      <section className="w-[96%] ml-[2%] lg:w-4/5 lg:ml-[10%] grid grid-cols-2 md:grid-cols-4  justify-center items-center gap-x-[5%] gap-y-12 lg:gap-[10%] mt-6">
        <a
          href="https://urbanfilmproductions.com/index.html"
          target="_blank"
          rel="noreferrer"
          className=" flex justify-center"
        >
          <img
            src={partner_img2}
            alt=""
            loading="lazy"
            className="max-w-[6rem] lg:max-w-[12rem] hover:opacity-70"
          />
        </a>
        <a
          href="https://www.dominoplc.com/"
          target="_blank"
          rel="noreferrer"
          className=" flex justify-center"
        >
          <img
            src={partner_img3}
            alt=""
            loading="lazy"
            className="max-w-[6rem] lg:max-w-[12rem] hover:opacity-70"
          />
        </a>
        <a
          href="https://unravelplc.com/"
          target="_blank"
          rel="noreferrer"
          className=" flex justify-center"
        >
          <img
            src={partner_img4}
            alt=""
            loading="lazy"
            className="max-w-[6rem] lg:max-w-[12rem] hover:opacity-70"
          />
        </a>
        <a
          href="https://www.meedorecords.com/"
          target="_blank"
          rel="noreferrer"
          className=" flex justify-center"
        >
          <img
            src={partner_img1}
            alt=""
            loading="lazy"
            className="max-w-[4rem] lg:max-w-[10rem] hover:opacity-70"
          />
        </a>
      </section>
    </article>
  );
};

export default Partners;
