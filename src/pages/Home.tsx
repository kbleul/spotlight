import { motion } from "framer-motion";

// import About from "../components/About";
import Hero from "../components/Hero";
// import Services from "../components/Services";
import Projects from "../components/Projects";
// import Approch from "../components/Approch";
import Carasole from "../components/Carasole";
// import Culture from "../components/culture";
// import Feeds from "../components/Feeds";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <article className="w-full overflow-hidden">
      <motion.div
        className="h-[60vh] lg:h-[85vh] bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>

      {/* <About />

      <Services /> */}

      {/* <Approch /> */}

      <Projects />

      <div className="hidden md:block w-full overflow-hidden">
        <Carasole title="Our Clients" />
      </div>
      {/* 
      <Culture /> */}

      <div className=" lg:hidden overflow-hidden">
        <Carasole title="Our Clients" />
      </div>

      <div className="">
        <Partners />
      </div>
    </article>
  );
};

export default Home;
