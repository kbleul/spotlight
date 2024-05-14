import Carasole from "../components/Carasole";
import CarasoleReverse from "../components/CarasoleReverse";
import ServicesProjects from "../components/Projects/ServicesProjects";
import Hero from "../components/Hero/WorksHero";

const Works = () => {
  return (
    <article>
      <Hero />
      <ServicesProjects />

      <div className="bg-black pt-20 mt-[10vh] w-full overflow-hidden">
        <Carasole />
      </div>
      <div className="overflow-hidden">
        <CarasoleReverse />
      </div>
    </article>
  );
};

export default Works;
