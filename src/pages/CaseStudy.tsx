import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Hero from "../components/Hero/CaseStudyHero";
import ProjectDetail from "../components/Projects/ProjectDetail";
import ProjectGallery from "../components/Projects/ProjectGallery";

const CaseStudy = () => {
  const { id } = useParams();

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
        <Intro intro={projectDetails.sub_title} />
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
      <h4 className="text-[#777777] text-xl font-bold mb-2">Intro</h4>
      <p className="font-bold">{intro}</p>
    </section>
  );
};

export default CaseStudy;
