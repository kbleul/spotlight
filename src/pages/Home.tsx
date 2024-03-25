import About from "../components/About";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Approch from "../components/Approch";
import Carasole from "../components/Carasole";
import Culture from "../components/culture";
import Feeds from "../components/Feeds";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <article>
      <motion.div
        className="h-[90vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>

      <About />

      <Services />

      <Approch />

      <Projects />

      <Carasole title="Latest Wins" />

      <Culture />

      <Feeds />

      <Partners />
    </article>
  );
};

export default Home;
