import Carasole from "../components/Carasole";
import CarasoleReverse from "../components/CarasoleReverse";
import Featured from "../components/Featured";
import ServicesProjects from "../components/Projects/ServicesProjects";
import Hero from "../components/Hero/WorksHero";
import ContactUs from "../components/Contact";

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

      <ContactUs />
    </article>
  );
};

export default Works;
