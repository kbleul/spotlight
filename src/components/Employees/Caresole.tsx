import { memo, useState } from "react";

import ImageCard from "./ImageCard";

const CaraouselStateTypes = {
  Scroll: "Scroll",
  slowScroll: "slowScroll",
  Stopped: "Stopped",
};
const Caresole = memo(
  ({ teams, isReverse }: { teams: any[]; isReverse?: boolean }) => {
    const [scrollStatus, setScrollStatus] = useState(
      CaraouselStateTypes.Scroll
    );

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
            {teams.map((employee) => (
              <ImageCard key={employee.id} employee={employee} />
            ))}
            {teams.map((employee) => (
              <ImageCard key={employee.id} employee={employee} />
            ))}
            {teams.map((employee) => (
              <ImageCard key={employee.id} employee={employee} />
            ))}
            {teams.map((employee) => (
              <ImageCard key={employee.id} employee={employee} />
            ))}
            {teams.map((employee) => (
              <ImageCard key={employee.id} employee={employee} />
            ))}
            {teams.map((employee) => (
              <ImageCard key={employee.id} employee={employee} />
            ))}
          </div>
        </section>
      </article>
    );
  }
);

export default Caresole;
