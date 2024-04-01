import img1 from "../assets/images/clients/alibaba.svg";
import img2 from "../assets/images/clients/bill.svg";
import img3 from "../assets/images/clients/mastercard.svg";
import img4 from "../assets/images/clients/safari.svg";

const CarasoleReverse = ({ title }: { title?: string }) => {
  return (
    <article className="carousel-container bg-black pb-20">
      {title && (
        <h4 className="mt-4 pb-12 font-bold text-2xl text-[#4F4F4F] text-center">
          {title}
        </h4>
      )}
      <section className="carouselReverse">
        <div className="carousel-track gap-x-6 md:gap-x-40">
          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />

          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />

          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />

          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />

          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />

          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />

          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />

          <img src={img1} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img2} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img3} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
          <img src={img4} alt="" className="w-[15%] h-16 md:h-20 md:w-1/4" />
        </div>
      </section>
    </article>
  );
};

export default CarasoleReverse;
