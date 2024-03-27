import { useState } from "react";
import avatarImg from "../../assets/images/avatar2.svg";
import avatarImg2 from "../../assets/images/avatar3.svg";
import avatarImg3 from "../../assets/images/culture/1.svg";

import ImageCard from "./ImageCard";

const Employees = [
  {
    id: "e001",
    name: "John Doe",
    title: "CEO",
    img: avatarImg,
  },
  {
    id: "e002",
    name: "John Doe",
    title: "CEO",
    img: avatarImg2,
  },
  {
    id: "e003",
    name: "John Doe",
    title: "CEO",
    img: avatarImg3,
  },
  {
    id: "e004",
    name: "John Doe",
    title: "CEO",
    img: avatarImg2,
  },
];

const CaraouselStateTypes = {
  Scroll: "Scroll",
  slowScroll: "slowScroll",
  Stopped: "Stopped",
};
const Caresole = ({ isReverse }: { isReverse?: boolean }) => {
  const [scrollStatus, setScrollStatus] = useState(CaraouselStateTypes.Scroll);

  return (
    <article
      className="carousel-container "
      onMouseEnter={() => {
        setScrollStatus(CaraouselStateTypes.slowScroll);

        setTimeout(() => {
          setScrollStatus(CaraouselStateTypes.Stopped);
        }, 1000);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setScrollStatus(CaraouselStateTypes.Scroll);
        }, 1000);
        setScrollStatus(CaraouselStateTypes.Scroll);
      }}
    >
      <section
        className={
          scrollStatus === CaraouselStateTypes.Scroll
            ? `${isReverse ? "carouselEmployeeReverse" : "carouselEmployees"}`
            : scrollStatus === CaraouselStateTypes.slowScroll
            ? `${
                isReverse
                  ? "carouselEmployeeReverse--slow"
                  : "carouselEmployees--slow"
              }`
            : "flex"
        }
      >
        <div className="carousel-track gap-x-6 md:gap-x-12">
          {Employees.map((employee) => (
            <ImageCard key={employee.id} employee={employee} />
          ))}
          {Employees.map((employee) => (
            <ImageCard key={employee.id} employee={employee} />
          ))}
          {Employees.map((employee) => (
            <ImageCard key={employee.id} employee={employee} />
          ))}
          {Employees.map((employee) => (
            <ImageCard key={employee.id} employee={employee} />
          ))}
          {Employees.map((employee) => (
            <ImageCard key={employee.id} employee={employee} />
          ))}
          {Employees.map((employee) => (
            <ImageCard key={employee.id} employee={employee} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Caresole;
