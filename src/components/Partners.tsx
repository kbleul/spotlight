import partner_img1 from "../assets/images/partners/1.svg";
import partner_img2 from "../assets/images/partners/2.svg";
import partner_img3 from "../assets/images/partners/3.svg";
import partner_img4 from "../assets/images/partners/4.png";

const Partners = () => {
  return (
    <article className="bg-black  pb-6">
      <h4 className="text-[#4F4F4F] pt-20 font-bold text-xl text-center w-full">
        Our Partners
      </h4>

      <section className="w-4/5 ml-[10%] flex  justify-center items-center gap-[10%] mt-6">
        <a
          href="https://urbanfilmproductions.com/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={partner_img2}
            alt=""
            className="max-w-[12rem] hover:opacity-70"
          />
        </a>
        <a href="https://www.dominoplc.com/" target="_blank" rel="noreferrer">
          <img
            src={partner_img3}
            alt=""
            className="max-w-[12rem] hover:opacity-70"
          />
        </a>
        <a href="https://unravelplc.com/" target="_blank" rel="noreferrer">
          <img
            src={partner_img4}
            alt=""
            className="max-w-[12rem] hover:opacity-70"
          />
        </a>
        <a
          href="https://www.meedorecords.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={partner_img1}
            alt=""
            className="max-w-[12rem] hover:opacity-70"
          />
        </a>
      </section>
    </article>
  );
};

export default Partners;
