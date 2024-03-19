import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

const Services = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    console.log("enter", data);
    setCurrentStepIndex(data);
  };

  return (
    <article className="h-[100vh] text-white bg-black py-20">
      <Scrollama onStepEnter={onStepEnter} offset={0.5}>
        <article className="h-[100vh] w-full bg-black border-2 text-3xl text-white">
          <Step data={0} key={0}>
            <div
              className={`h-full ${
                currentStepIndex === 0 ? "visible" : "hidden"
              }`}
            >
              Public Relations
            </div>
          </Step>
          <Step data={1} key={1}>
            <div
              className={`h-full ${
                currentStepIndex === 1 ? "visible" : "hidden"
              }`}
            >
              Marketing
            </div>
          </Step>
          <Step data={2} key={2}>
            <div
              className={`h-full ${
                currentStepIndex === 2 ? "visible" : "hidden"
              }`}
            >
              Advertising
            </div>
          </Step>
        </article>
      </Scrollama>
    </article>
  );
};

const ServiceCard = ({
  currentStepIndex,
  stepIndex,
}: {
  currentStepIndex: number;
  stepIndex: number;
}) => {
  return (
    <section className={"bg-black text-white h-full pb-20"}>
      I'm a Scrollama Step of index {stepIndex}
    </section>
  );
};

export default Services;
