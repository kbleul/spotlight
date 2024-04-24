import { motion } from "framer-motion";

import aboutImg from "../assets/images/about.svg";
import shineImg from "../assets/images/shine.svg";
import handsImg from "../assets/images/hands.png";
import strongerImg from "../assets/images/Stronger.svg";

import AboutHero from "../components/Hero/AboutHero";
import Employees from "../components/Employees";
import GuideUs from "../components/GuideUs";
import Leading from "../components/About/Leading";
import Connections from "../components/About/Connections";

const About = () => {
  return (
    <article>
      <motion.div
        className="lg:h-[90vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AboutHero />
      </motion.div>
      <div className="py-16 lg:py-48 bg-black  lg:h-[90vh]">
        <Leading
          img={aboutImg}
          title="Leading the"
          secondaryTitle="Change"
          textBody={`Driving marketing from tired, stale tactics into creatively strategic campaigns that shake up entire industries. No brand is too big or too small - our pioneering strategies can exponentially amplify any company's influence and dominance.`}
        />
      </div>

      <div className="pb-48 bg-black h-[100vh]">
        <Leading
          img={shineImg}
          title="Shining a Light"
          textBody={`At Spotlight, we craft brands and communications campaigns that transcend boundaries and connect with diverse audiences. Our process involves meticulous research, strategic planning, and nurtuting strong relationships to make it happen.At Spotlight, we craft brands and communications campaigns that transcend boundaries and connect with diverse audiences. Our process involves meticulous research, strategic planning, and nurtuting strong relationships to make it happen.`}
        />
      </div>

      <div className="pb-48 bg-black  h-[90vh]">
        <Connections
          img={handsImg}
          title="Setting the Stage"
          secondaryTitle="Human Level"
          textBody={`We never follow - we always lead. Our teams check egos at the door to create a playground of melding together perspectives, pushing creative boundaries through bold and fresh thinking is in our DNA. While our ideas are revolutionary, our process is swift and precise to bring game-changing campaigns to life. `}
        />
      </div>
      {/* 
      <div className="pb-20 lg:pb-0">
        <GuideUs />
      </div> */}
      {/* 
      <img
        src={strongerImg}
        alt=""
        className="mt-32 py-20 px-[2%] hidden lg:block"
      /> */}

      {/* <div className="mb-[5vh] hidden lg:block">
        <Employees />
      </div> */}
    </article>
  );
};

export default About;
