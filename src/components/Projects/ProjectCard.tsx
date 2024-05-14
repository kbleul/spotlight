import { truncateText } from "../../utils/func";
import { useNavigate } from "react-router-dom";
import { handleNavigateToCaseStudy } from "./ServicesProjects";

const ProjectCard = ({ project, isMid }: { project: any; isMid?: boolean }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="relative bg-[#1e1e1e] rounded-lg overflow-hidden text-left"
      onClick={() => {
        project.sub_title &&
          project.content &&
          handleNavigateToCaseStudy(project, navigate);
      }}
    >
      <div className="scroll_fade flex justify-start gap-x-1 w-full scroll-tab-container">
        {project.services.map((item: any, index: number) => (
          <p
            key={item + "--project--" + index}
            className={
              project.services.length === 1
                ? "mx-2 mb-8 text-sm border border-white px-4 py-1 mt-6 rounded-full"
                : "mx-2  text-sm border border-white px-4 py-1 mt-6 mb-4 rounded-full"
            }
            style={{ whiteSpace: "nowrap" }}
          >
            {item.name}
          </p>
        ))}
      </div>

      <h4 className="mx-4 mb-4 font-bold">{truncateText(project.title, 40)}</h4>

      <div
        className={` lg:block bg-[#d9d9d9] ${
          isMid ? "lg:h-[53vh] hidden" : "lg:h-[35vh]"
        } h-[30vh] lg:h-[35vh] w-full rounded-t-[2rem] overflow-hidden`}
        style={{
          backgroundImage: `url(${
            isMid ? project.square_thumbnail.url : project.cover.url
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div
        className={` bg-[#d9d9d9] ${
          isMid ? " lg:hidden lg:h-[53vh]" : " hidden lg:h-[35vh]"
        } h-[30vh] lg:h-[35vh] w-full rounded-t-[2rem] overflow-hidden`}
        style={{
          backgroundImage: `url(${
            isMid ? project.square_thumbnail.url : project.cover.url
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </button>
  );
};

export default ProjectCard;
