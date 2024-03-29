import img1 from "../assets/images/story/1.svg";
import img2 from "../assets/images/story/2.svg";
import img3 from "../assets/images/story/3.svg";
import img4 from "../assets/images/story/4.svg";
import img5 from "../assets/images/story/5.png";
import img6 from "../assets/images/story/6.svg";
import img7 from "../assets/images/story/7.svg";
import img8 from "../assets/images/story/8.svg";
import img9 from "../assets/images/story/9.svg";
import img10 from "../assets/images/story/10.svg";
import img11 from "../assets/images/story/11.svg";
import img12 from "../assets/images/story/12.svg";

const CultureGallery = () => {
  const ImagesArr = [
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
  ];
  return (
    <article className="h-[112vh]  bg-black flex items-start justify-evenly">
      <section className="w-[22%] feeds_scroll flex flex-col h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
        {ImagesArr.map((image, index) => (
          <img
            className="w-full"
            key={index + "gallery-one"}
            src={image}
            alt=""
          />
        ))}
      </section>
      <section className="w-[22%] feeds_scroll flex flex-col h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
        {ImagesArr.slice(6, 11).map((image, index) => (
          <img
            className="w-full"
            key={index + "gallery-two"}
            src={image}
            alt=""
          />
        ))}
      </section>
      <section className="w-[22%] feeds_scroll flex flex-col h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
        {ImagesArr.reverse()
          .slice(0, 6)
          .map((image, index) => (
            <img
              className="w-full"
              key={index + "gallery-three"}
              src={image}
              alt=""
            />
          ))}
      </section>
      <section className="w-[22%] feeds_scroll flex flex-col h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
        {ImagesArr.reverse().map((image, index) => (
          <img
            className="w-full"
            key={index + "gallery-four"}
            src={image}
            alt=""
          />
        ))}
      </section>
    </article>
  );
};

export default CultureGallery;
