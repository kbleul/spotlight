import { MdOutlineUnfoldMore } from "react-icons/md";
import FeedCard from "./Feeds/FeedCard";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type categoryType = {
  id: string;
  name: string;
  description: string | null;
};
const NewsSection = ({
  setIsFeednModalOpen,
}: {
  setIsFeednModalOpen: React.Dispatch<any>;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<categoryType>({
    id: "categoryType001",
    name: "Latest",
    description: null,
  });

  const { isPending, error, data } = useQuery({
    queryKey: [
      `latestBlogs${
        selectedCategory.id !== "categoryType001" && `-${selectedCategory.name}`
      }`,
      selectedCategory,
    ],
    queryFn: () =>
      fetch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}${
          selectedCategory.id !== "categoryType001"
            ? "blogs-by-category/" + selectedCategory.id
            : "latest-blogs"
        }`
      ).then((res) => res.json()),
  });

  //loading
  if (isPending)
    return (
      <article className="flex flex-col lg:flex-row gap-10 pt-14 px-[2%] h-screen">
        <section className="w-full lg:w-1/4 px-4 lg:px-0 flex lg:block justify-center">
          <FIlter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </section>
        <section className="w-full lg:w-1/2 flex flex-col gap-10 lg:h-[80vh] px-4 lg:px-0 overflow-y-scroll feeds_scroll items-center">
          Loading ...
        </section>
      </article>
    );

  if (error) return <></>;

  const latestBlogs: any[] = data.data.data;

  return (
    <article className="flex flex-col lg:flex-row gap-10 pt-14 px-[2%] ">
      <section className="w-full lg:w-1/4 px-4 lg:px-0 flex lg:block justify-center">
        <FIlter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>
      <section className="w-full lg:w-1/2 flex flex-col gap-10 lg:h-[80vh] px-4 lg:px-0 overflow-y-scroll feeds_scroll items-center">
        {latestBlogs.map((blog) => (
          <FeedCard
            key={blog.id}
            item={blog}
            isFeed
            handleClick={() => setIsFeednModalOpen(blog)}
            showArrow={true}
          />
        ))}
      </section>
      <section className="w-1/4" />
    </article>
  );
};

const FIlter = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: categoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<categoryType>>;
}) => {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [categories, setCategories] = useState<categoryType[]>([
    {
      id: "categoryType001",
      name: "Latest",
      description: null,
    },
  ]);

  const { isPending, error, data } = useQuery({
    queryKey: ["blogCategories"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}categories`).then(
        (res) => res.json()
      ),
  });

  useEffect(() => {
    data &&
      setCategories((prev) => {
        if (prev.find((item) => item.id === "categoryType001")) {
          return [
            selectedCategory.id !== "categoryType001" && {
              id: "categoryType001",
              name: "Latest",
              description: null,
            },
            ...data.data.filter(
              (item: categoryType) => item.id !== selectedCategory.id
            ),
          ];
        }

        return [...data.data];
      });
  }, [data]);
  //loading
  if (isPending || error) return <article className="w-full" />;

  const handleSelectCategory = (category: categoryType) => {
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
    <article className="bg-[#F5F5F5] w-full max-w-[550px] py-4 px-6 text-[#4f4f4f] rounded-xl">
      <h4 className="hidden lg:block font-bold text-2xl">Filter</h4>

      <p className="hidden lg:block pt-4 font-medium text-lg pb-4">By Type</p>

      <button
        className="flex justify-between items-center w-full"
        onClick={() => setShowCategories((prev) => !prev)}
      >
        <p className=" font-bold text-xl">{selectedCategory.name}</p>
        <p className="p-1 border rounded-full">
          <MdOutlineUnfoldMore size={24} />
        </p>
      </button>

      <div className="w-full flex flex-col ">
        {showCategories &&
          categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className="text-lg md:text-xl text-center border-b py-2 hover:border-b-gray-300"
              onClick={() => handleSelectCategory(category)}
            >
              {category.name}
            </button>
          ))}
      </div>
    </article>
  );
};

export default NewsSection;
