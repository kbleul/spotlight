import { Suspense, lazy } from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";
import { TailSpin } from "react-loader-spinner";

const Hero = lazy(() => import("../components/Hero/CaseStudyHero"));
const ProjectDetail = lazy(
  () => import("../components/Projects/ProjectDetail")
);
const ProjectGallery = lazy(
  () => import("../components/Projects/ProjectGallery")
);

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
      <Suspense fallback={<HeroSuspense />}>
        <Hero />
      </Suspense>
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

const HeroSuspense = () => {
  return (
    <div className="bg-black h-[88vh] w-full flex justify-center items-center">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#fff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

const Intro = ({ intro }: { intro: string }) => {
  return (
    <section className="bg-white py-10  max-w-[1000px]">
      <p className="text-justify  lg:text-lg">{parse(intro)}</p>
    </section>
  );
};

export default CaseStudy;
