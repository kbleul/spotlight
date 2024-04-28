import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Hero from "../components/Hero/CaseStudyHero";
import ProjectDetail from "../components/Projects/ProjectDetail";
import ProjectGallery from "../components/Projects/ProjectGallery";
import parse from "html-react-parser";
const CaseStudy = () => {
  const { id } = useParams();
  console.log(id);
  const { isPending, error, data } = useQuery({
    queryKey: ["projectDetails" + id, id],
    queryFn: () =>
      fetch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}project-detail/${id}`
      ).then((res) => res.json()),
  });

  //loading
  if (isPending) return <article className="bg-white h-screen" />;

  if (error) return <></>;

  const projectDetails = data.data;
  return (
    <section className="pb-20">
      <Hero />
      <ProjectDetail projectDetails={projectDetails} />

      <div className="flex justify-center items-center w-full px-[3%] lg:px-[5%]">
        <Intro intro={projectDetails.content} />
      </div>

      <div className="flex justify-center items-center w-full px-[3%] lg:px-[5%]">
        <ProjectGallery galleries={projectDetails.galleries} />
      </div>
    </section>
  );
};

const Intro = ({ intro }: { intro: string }) => {
  return (
    <section className="bg-white py-10  max-w-[1000px]">
      {/* <h4 className="text-[#777777] text-xl lg:text-2xl font-bold mb-2">
        About
      </h4> */}
      <p className="font-semibold  lg:text-lg">{parse(intro)}</p>
    </section>
  );
};

export default CaseStudy;
