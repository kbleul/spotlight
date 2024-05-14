import aboutImg from "../assets/images/About2.png";
import shineImg from "../assets/images/About3.png";
import handsImg from "../assets/images/About.png";

import Employees from "../components/Employees";
import Leading from "../components/About/Leading";
import Connections from "../components/About/Connections";

const About = () => {
  return (
    <article>
      <div className="py-16 lg:py-0 bg-black  lg:h-[80vh] flex justify-center">
        <Leading
          img={aboutImg}
          title="Leading the"
          secondaryTitle="Change"
          textBody={`Driving marketing from tired, stale tactics into creatively strategic campaigns that shake up entire industries. No brand is too big or too small - our pioneering strategies can exponentially amplify any company's influence and dominance.`}
        />
      </div>

      <div className="flex justify-center items-center bg-black  h-[90vh]">
        <Connections
          img={handsImg}
          title="Under the"
          secondaryTitle="Spotlight"
          textBody={` We don’t stop until we put our brands front-and-center. Through
          deep insights, creative strategy, and spotless execution, we
          showcase brands as must-see icons and thought leaders that inspire
          their action.`}
        />
      </div>

      <div className="pt-20 bg-black h-[100vh] flex justify-center items-center">
        <Leading
          img={shineImg}
          title="Setting the"
          secondaryTitle="Stage"
          textBody={`We never follow - we always lead. Our teams check egos at the door to create a playground of melding together perspectives, pushing creative boundaries through bold and fresh thinking is in our DNA. While our ideas are revolutionary, our process is swift and precise to bring game-changing campaigns to life. `}
        />
      </div>

      {/* 

       <div className="pb-48 bg-black  h-[90vh]">
        <Connections
          img={handsImg}
          title="Setting the Stage"
          secondaryTitle="Human Level"
          textBody={`We never follow - we always lead. Our teams check egos at the door to create a playground of melding together perspectives, pushing creative boundaries through bold and fresh thinking is in our DNA. While our ideas are revolutionary, our process is swift and precise to bring game-changing campaigns to life. `}
        />
      </div>

      
      <div className="pb-20 lg:pb-0">
        <GuideUs />
      </div> */}

      {/* <img
        src={strongerImg}
        alt=""
        className="mt-32 py-20 px-[2%] hidden lg:block"
      /> */}

      {/* <div className="mb-[5vh] hidden lg:block"> */}
      <Employees />
      {/* </div> */}
    </article>
  );
};

export default About;
