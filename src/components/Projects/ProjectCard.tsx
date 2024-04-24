import { truncateText } from "../../utils/func";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <article className="bg-[#1e1e1e] rounded-lg overflow-x-hidden">
      <div className="flex justify-start gap-x-1 w-full scroll-tab-container">
        {project.services.map((item: any, index: number) => (
          <p
            key={item + "--project--" + index}
            className="mx-2  text-sm border border-white px-4 py-1 mt-6 mb-4 rounded-full "
            style={{ whiteSpace: "nowrap" }}
          >
            {item.name}
          </p>
        ))}
      </div>

      <h4 className="mx-4 mb-4 font-bold">{truncateText(project.title, 40)}</h4>

      <div
        className="bg-[#d9d9d9] h-[30vh] rounded-t-[2rem] overflow-hidden"
        // style={{
        //   backgroundImage: `url(${project.cover.url})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <img src={project.cover.url} alt="" className="w-full h-auto" />
      </div>
    </article>
  );
};

export default ProjectCard;
