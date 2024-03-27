import FeedImgList from "../components/FeedImgList";
import newsTrace from "../assets/images/news/News.svg";
import NewsSection from "../components/NewsSection";
import ContactUs from "../components/Contact";

const Feeds = () => {
  return (
    <article>
      <h2 className="text-[#4F4F4F] text-[185px] font-extrabold text-center mb-10">
        Feed
      </h2>

      <FeedImgList />

      <div className="border-t border-b border-black px-[1%] py-6 mx-6 mt-10">
        <img src={newsTrace} alt="" />
      </div>

      <NewsSection />

      <div className="mt-10">
        <ContactUs />
      </div>
    </article>
  );
};

export default Feeds;
