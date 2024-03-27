import FeedCard from "./Feeds/FeedCard";

const NewsSection = () => {
  return (
    <article className="flex gap-10 pt-14 px-[2%] ">
      <section className="w-1/4">
        <FIlter />
      </section>
      <section className="w-1/2 flex flex-col gap-10 h-[80vh] overflow-y-scroll feeds_scroll items-center">
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
