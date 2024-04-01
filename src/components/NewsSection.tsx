import FeedCard from "./Feeds/FeedCard";

const NewsSection = () => {
  return (
    <article className="flex flex-col lg:flex-row gap-10 pt-14 px-[2%] ">
      <section className="w-full lg:w-1/4">
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
      <section className="w-1/4"></section>
    </article>
  );
};

const FIlter = () => {
  return <article className="bg-[#F5F5F5] w-full h-52"></article>;
};

export default NewsSection;
