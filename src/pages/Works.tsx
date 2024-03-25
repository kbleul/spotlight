import Carasole from "../components/Carasole";
import CarasoleReverse from "../components/CarasoleReverse";
import Featured from "../components/Featured";
import ServicesProjects from "../components/Projects/ServicesProjects";
import Hero from "../components/Hero/WorksHero";

const Works = () => {
  return (
    <article>
      <Hero />
      <Featured />
      <ServicesProjects />

      <div className="bg-black pt-20">
        <Carasole />
      </div>
      <CarasoleReverse />
    </article>
  );
};

export default Works;
