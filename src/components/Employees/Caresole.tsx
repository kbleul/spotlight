import { memo, useState } from "react";

import ImageCard from "./ImageCard";
import { CaraouselStateTypes } from "../../utils/data";

const Caresole = memo(
  ({
    teams,
    isReverse,
    scrollStatus,
  }: {
    teams: any[];
    isReverse?: boolean;
    scrollStatus: string;
  }) => {
    return (
      <article className="carousel-container ">
        <section
          className={
            scrollStatus === CaraouselStateTypes.Scroll
              ? `${
                  isReverse
                    ? "carouselEmployeeReverse carouselEmployees-paused"
                    : "carouselEmployees carouselEmployees-paused"
                }`
              : scrollStatus === CaraouselStateTypes.slowScroll
              ? `${
                  isReverse
                    ? "carouselEmployeeReverse--slow carouselEmployees-paused"
                    : "carouselEmployees--slow carouselEmployees-paused"
                }`
              : "flex carouselEmployees-paused "
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
          </div>
        </section>
      </article>
    );
  }
);

export default Caresole;
