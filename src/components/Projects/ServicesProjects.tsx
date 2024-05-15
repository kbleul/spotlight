import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { Suspense, lazy, useEffect, useState } from "react";

const FeedCard = lazy(() => import("../Feeds/FeedCard"));

type industryType = {
  id: string;
  name: string;
};

export const handleNavigateToCaseStudy = (item: any, navigate: any) => {
  window.scrollTo(0, 0);
  const rootElement = document.getElementById("root-body");
  if (rootElement) {
    rootElement.style.overflowY = "scroll";
  }
  navigate("/case-study/" + item.id, { state: { item } });
};

const ServicesProjects = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<industryType>({
    id: "categoryType001",
    name: "All",
  });

  const { isPending, error, data } = useQuery({
    queryKey: ["allProjects", selectedCategory],
    queryFn: () =>
      fetch(
        selectedCategory.id === "categoryType001"
          ? `${import.meta.env.VITE_REACT_APP_BACKEND_URL}projects`
          : `${
              import.meta.env.VITE_REACT_APP_BACKEND_URL
            }projects-by-industry/${selectedCategory.id}`
      ).then((res) => res.json()),
  });

  if (isPending) {
    return (
      <section>
        <MyHeader
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <p className="w-full my-10 text-center">Loading...</p>
      </section>
    );
  }
  if (error) return <></>;

  const projectsArr: any[] = data.data.data;

  return (
    <article className="px-[5%] bg-gradient-to-t from-white via-white to-[#fcfcfc]">
      <MyHeader
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <section className="grid grid-cols-1 lg:grid-cols-2  gap-x-10 gap-y-10 justify-around items-center mt-10">
        {projectsArr.length > 0 &&
          projectsArr.map(
            (_, i) =>
              projectsArr[i] && (
                <div
                  key={"ServicesProjects-" + i}
                  className=" flex justify-center"
                >
                  <Suspense fallback={<></>}>
                    <FeedCard
                      item={projectsArr[i]}
                      handleClick={() =>
                        handleNavigateToCaseStudy(projectsArr[i], navigate)
                      }
                      showArrow
                    />
                  </Suspense>
                </div>
              )
          )}
      </section>
    </article>
  );
};

const MyHeader = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: industryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<industryType>>;
}) => {
  return (
    <section className="flex justify-between items-center">
      <h2 className="text-[#e0e0e0]  lg:text-[#4F4F4F]  font-poppins text-[70px] lg:text-[120px]  w-full lg:text-left font-extrabold ">
        Projects
      </h2>
      <section className="hidden w-1/2 px-4 lg:px-0 md:flex lg:block justify-center">
        <Filter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>
    </section>
  );
};

const Filter = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: industryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<industryType>>;
}) => {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [industries, setCategories] = useState<industryType[]>([
    {
      id: "categoryType001",
      name: "All",
    },
  ]);

  const { isPending, error, data } = useQuery({
    queryKey: ["blogCategories"],
    queryFn: () =>
      fetch(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_URL
        }industries-where-has-projects`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    data &&
      setCategories((prev) => {
        if (prev.find((item) => item.id === "categoryType001")) {
          return [
            selectedCategory.id !== "categoryType001" && {
              id: "categoryType001",
              name: "All",
            },
            ...data.data.filter(
              (item: industryType) => item.id !== selectedCategory.id
            ),
          ];
        }

        return [...data.data];
      });
  }, [data]);
  //loading
  if (isPending || error) return <article className="w-full" />;

  const handleSelectCategory = (category: industryType) => {
    setSelectedCategory((prev) => {
      setCategories((prevC) => [
        ...prevC.filter((item) => item.id !== category.id),
        prev,
      ]);

      return category;
    });

    setShowCategories(false);
  };

  return (
    <article className=" w-full  max-w-[750px] py-4 px-6 text-[#4f4f4f] rounded-xl">
      <div className="flex justify-start items-center gap-4">
        <h4 className=" font-bold text-2xl">Filter</h4>
        <div className="w-2 h-2 rounded-full bg-[#777777]" />
        <p className=" pt-4 font-semibold text-[#777777] opacity-90 text-base pb-4">
          By Industry
        </p>
      </div>

      <section className="relative">
        <button
          className="flex justify-between items-center w-full px-8 py-2 rounded-full bg-[#F5F5F5] "
          onClick={() => setShowCategories((prev) => !prev)}
        >
          <p className=" font-bold text-lg">{selectedCategory.name}</p>
          <p className="p-1 border rounded-full">
            <MdOutlineUnfoldMore size={24} />
          </p>
        </button>

        <div
          className={
            showCategories
              ? "w-full flex flex-col bg-[#fff] border mt-1 absolute"
              : ""
          }
        >
          {showCategories &&
            industries.map((industry, index) => (
              <button
                type="button"
                key={industry.id + index}
                className="text-lg font-medium text-left px-10 border-b py-2 hover:border-b-gray-300"
                onClick={() => handleSelectCategory(industry)}
              >
                {industry.name}
              </button>
            ))}
        </div>
      </section>
    </article>
  );
};

export default ServicesProjects;
