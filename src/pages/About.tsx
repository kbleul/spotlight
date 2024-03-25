import { motion } from "framer-motion";
import AboutHero from "../components/Hero/AboutHero";

const About = () => {
  return (
    <article>
      <motion.div
        className="h-[90vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AboutHero />
      </motion.div>
    </article>
  );
};

export default About;
