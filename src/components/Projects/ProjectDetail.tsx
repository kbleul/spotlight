import { IoIosArrowRoundForward } from "react-icons/io";
import { scrollToContactSection, truncateText } from "../../utils/func";

const ProjectDetail = ({ projectDetails }: { projectDetails: any }) => {
  return (
    <article className="bg-black text-white px-[3%] lg:px-[5%]">
      <h2 className="text-[#4F4F4F] text-[75px] text-center lg:text-left md:text-[90px] lg:text-[115px] font-extrabold">
        Projects
      </h2>

      <section className="flex flex-col lg:flex-row  ">
        <div className="pt-10 pb-20 w-1/2 grid grid-cols-2  h-fit items-stretch justify-start gap-10">
          <ItemBox title="Client" content={projectDetails.client.name} />
          <ItemBox
            title="Industry"
            content={projectDetails.client.industry.name}
          />
          <ItemBox
            title="Duration"
            content={[
              projectDetails.duration.duration_count,
              projectDetails.duration.duration_type,
            ]}
            type="duration"
          />
          <ItemBox
            title="Service"
            content={projectDetails.services.flatMap((item: any) => item.name)}
          />
        </div>
        <div className="w-1/2 pt-10 pb-20 min-h-[50vh] relative border-l">
          <p className="px-[10%] pb-28 text-4xl font-semibold">
            {projectDetails.content}
          </p>

          <div
            className="expandButtonContainerThird w-full flex justify-end absolute bottom-16"
            style={{
              right: "10%",
            }}
          >
            <button
              type="button"
              className="expandButton bg-white px-4 text-black py-2 border border-black font-normal flex gap-4 items-center"
              onClick={() => scrollToContactSection()}
            >
              <p className="text-base text-nowrap">Reach Out</p>
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

  return (
    <div className="flex flex-col items-start justify-start  ">
      <p className="text-[#777777] mb-2 ">{truncateText(title, 25)}</p>
      {isArray &&
        type !== "duration" &&
        content.map((item, index) => (
          <p key={"services-names" + index} className="font-bold text-3xl">
            {truncateText(item, 25)}
          </p>
        ))}

      {isArray && type === "duration" && (
        <p className="font-bold text-4xl">
          <span className="pt-7">{content[0]}</span>
          <span className="text-base font-semibold ml-2 ">{content[1]}</span>
        </p>
      )}

      {!isArray && (
        <p className="font-bold text-3xl">{truncateText(content, 25)}</p>
      )}
    </div>
  );
};

export default ProjectDetail;
