import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import Services from "../components/Services";

const Home = () => {
  return (
    <article>
      <motion.div
        className="h-[90vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />

        <Hero />
      </motion.div>

      <About />

      <Services />
    </article>
  );
};

export default Home;
