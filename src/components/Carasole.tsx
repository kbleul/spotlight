import img1 from "../assets/images/carasol/1.png";
import img2 from "../assets/images/carasol/2.png";
import img3 from "../assets/images/carasol/3.jpeg";
import img4 from "../assets/images/carasol/4.png";
import img5 from "../assets/images/carasol/5.png";
import img6 from "../assets/images/carasol/6.png";
import img7 from "../assets/images/carasol/7.png";
import img8 from "../assets/images/carasol/8.png";
import img9 from "../assets/images/carasol/9.png";
import img10 from "../assets/images/carasol/10.png";
import img11 from "../assets/images/carasol/11.png";
import img12 from "../assets/images/carasol/12.png";
import img13 from "../assets/images/carasol/13.png";
import img14 from "../assets/images/carasol/14.png";
import img15 from "../assets/images/carasol/15.png";
import img16 from "../assets/images/carasol/16.jpg";
import img17 from "../assets/images/carasol/17.png";
import img18 from "../assets/images/carasol/18.png";
import img19 from "../assets/images/carasol/19.png";
import img20 from "../assets/images/carasol/20.jpg";
import img21 from "../assets/images/carasol/21.png";
import img22 from "../assets/images/carasol/22.png";
import img23 from "../assets/images/carasol/23.png";
import img24 from "../assets/images/carasol/24.png";
import img25 from "../assets/images/carasol/25.png";
import img26 from "../assets/images/carasol/26.png";
import img27 from "../assets/images/carasol/27.png";
import img28 from "../assets/images/carasol/28.png";
import img29 from "../assets/images/carasol/29.png";
import img30 from "../assets/images/carasol/30.png";
import img31 from "../assets/images/carasol/31.png";
import img32 from "../assets/images/carasol/32.png";
import img33 from "../assets/images/carasol/33.png";

const imagesArr = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
];

const Carasole = ({ title }: { title?: string }) => {
  return (
    <article className="carousel-container bg-black pt-0 pb-20 overflow-hidden">
      {title && (
        <h4 className="pt-4 pb-8 md:pb-12 font-bold text-2xl text-[#4F4F4F] text-center">
          {title}
        </h4>
      )}
      <section className="carousel">
        <div className="carousel-track gap-x-12 md:gap-x-40">
          {Array.from({ length: 33 }).map((_, index) => (
            <img
              key={index + "iimg" + index}
              src={imagesArr[index]}
              alt=""
              className=" w-[15%] h-16 md:h-20 md:w-1/4"
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Carasole;
