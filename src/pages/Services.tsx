import ContactUs from "../components/Contact";
import Hero from "../components/Hero/ServicesHero";
import Industries from "../components/services/Industries";
import ServicesScroll from "../components/services/ServicesScroll";

const Services = () => {
  return (
    <article>
      <Hero />
      <ServicesScroll />
      <Industries />
      <ContactUs />
    </article>
  );
};

export default Services;
