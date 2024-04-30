import { IoIosArrowRoundForward } from "react-icons/io";
import { scrollToContactSection, truncateText } from "../../utils/func";
import parse from "html-react-parser";

const ProjectDetail = ({ projectDetails }: { projectDetails: any }) => {
  return (
    <article className="bg-black text-white px-[3%] lg:px-[5%]">
      <h2 className="text-[#4F4F4F]  text-[60px] text-center lg:text-left md:text-[90px] lg:text-7xl py-6 stroke font-extrabold">
        Case Study
      </h2>

      <section className="flex flex-col lg:flex-row  ">
        <div className="pt-10 pb-20 w-full lg:w-1/2 grid grid-cols-2  h-fit items-stretch justify-start gap-10 px-5 lg:px-0">
          <ItemBox title="Client" content={projectDetails.client.name} />
          <ItemBox
            title="Industry"
            content={projectDetails.client.industry.name}
          />

          <ItemBox
            title="Service"
            content={projectDetails.services.flatMap((item: any) => item.name)}
          />
          {projectDetails.duration.duration_count !== "--" && (
            <ItemBox
              title="Duration"
              content={[
                projectDetails.duration.duration_count,
                projectDetails.duration.duration_type,
              ]}
              type="duration"
            />
          )}
        </div>
        <div className="w-full lg:w-1/2 pt-4 lg:pt-20 pb-20 min-h-[50vh] relative border-t lg:border-t-0  lg:border-l">
          <p className="px-[5%] lg:px-[10%] pb- text-2xl lg:text-[1.875rem] leading-[3.2rem]">
            {parse(projectDetails.sub_title)}
          </p>

          <div className="px-[5%] lg:px-[10%] expandButtonContainerFourth  w-full flex justify-start absolute bottom-16">
            <button
              type="button"
              className="expandButton bg-white px-3 text-sm text-black py-2 border border-black font-normal flex gap-4 items-center"
              onClick={() => scrollToContactSection()}
            >
              <p className="text-sm text-nowrap pl-3">Connect Now</p>
              <IoIosArrowRoundForward className="expandButtonIcon" size={33} />
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

const ItemBox = ({
  title,
  content,
  type,
}: {
  title: string;
  content: string | string[];
  type?: string;
}) => {
  const isArray = Array.isArray(content);
  isArray && type === "duration" && console.log(content[0]);
  return (
    <div className="flex flex-col items-start justify-start  ">
      <p className="text-[#777777] mb-2 ">{truncateText(title, 25)}</p>
      {isArray &&
        type !== "duration" &&
        content.map((item, index) => (
          <p
            key={"services-names" + index}
            className="font-bold text-xl lg:text-3xl"
          >
            {item}
          </p>
        ))}

      {isArray && type === "duration" && (
        <p className="font-bold text-4xl">
          <span className="pt-7">{content[0]}</span>
          <span className="text-base font-semibold ml-2 ">{content[1]}</span>
        </p>
      )}

      {!isArray && (
        <p className="font-bold text-xl lg:text-3xl">
          {truncateText(content, 25)}
        </p>
      )}
    </div>
  );
};

export default ProjectDetail;
