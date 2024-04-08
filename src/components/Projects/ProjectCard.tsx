import { truncateText } from "../../utils/func";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <article className="bg-[#1e1e1e] rounded-lg overflow-x-hidden">
      <div className="flex justify-start gap-x-1">
        {project.services.map((item: any, index: number) => (
          <p
            key={item + "--project--" + index}
            className="mx-4 text-sm border border-white px-4 py-1 mt-6 mb-4 rounded-full w-fit"
          >
            {item.name}
          </p>
        ))}
      </div>

      <h4 className="mx-4 mb-4 font-bold">{truncateText(project.title, 40)}</h4>

      <div className="bg-[#d9d9d9] h-[30vh] rounded-t-[2rem] overflow-hidden">
        <img src={project.cover.url} alt="" className="w-full h-[30vh]" />
      </div>
    </article>
  );
};

export default ProjectCard;
