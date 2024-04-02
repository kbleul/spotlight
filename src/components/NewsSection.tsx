import { MdOutlineUnfoldMore } from "react-icons/md";
import FeedCard from "./Feeds/FeedCard";

const NewsSection = () => {
  return (
    <article className="flex flex-col lg:flex-row gap-10 pt-14 px-[2%] ">
      <section className="w-full lg:w-1/4 px-4 lg:px-0 flex lg:block justify-center">
        <FIlter />
      </section>
      <section className="w-full lg:w-1/2 flex flex-col gap-10 lg:h-[80vh] px-4 lg:px-0 overflow-y-scroll feeds_scroll items-center">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </section>
      <section className="w-1/4" />
    </article>
  );
};

const FIlter = () => {
  return (
    <article className="bg-[#F5F5F5] w-full max-w-[550px] py-4 px-6 text-[#4f4f4f] rounded-xl">
      <h4 className="hidden lg:block font-bold text-2xl">Filter</h4>

      <p className="hidden lg:block pt-4 font-medium text-lg pb-4">By Topic</p>

      <section className="flex justify-between items-center ">
        <p className=" font-bold text-xl">Latest</p>
        <p className="p-1 border rounded-full">
          <MdOutlineUnfoldMore size={24} />
        </p>
      </section>
    </article>
  );
};

export default NewsSection;
