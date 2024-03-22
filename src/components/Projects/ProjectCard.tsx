import placeholder_img from "../../assets/images/cola_placeholder2.png";

const ProjectCard = () => {
  return (
    <article className="bg-[#1e1e1e] rounded-lg">
      <p className="mx-4 text-sm border border-white px-4 py-1 mt-6 mb-4 rounded-full w-fit">
        Marketing
      </p>
      <h4 className="mx-4 mb-4 font-bold">
        Lorem ipsum dolor sit amet con sectetur
      </h4>

      <div className="bg-[#d9d9d9] h-[28vh] rounded-t-[2rem] overflow-hidden">
        <img src={placeholder_img} alt="" className="w-full h-[28vh]" />
      </div>
    </article>
  );
};

export default ProjectCard;
