import FeedImgList from "../components/FeedImgList";
import newsTrace from "../assets/images/news/News.svg";
import NewsSection from "../components/NewsSection";
import FeedModal from "../components/FeedModal";
import { useState } from "react";

const Feeds = () => {
  const [isFeedModalOpen, setIsFeednModalOpen] = useState(false);

  return (
    <article id="yourAppElement">
      <h2 className="text-black lg:text-[#4F4F4F] text-7xl lg:text-[185px] font-extrabold text-center mb-10">
        Feed
      </h2>

      <FeedImgList />

      <div className="border-t border-b border-black px-[1%] lg:pt-1 lg:pb-2 lg:mx-6 mt-10">
        <img src={newsTrace} alt="" className="w-3/5 lg:w-auto" />
      </div>

      <NewsSection />

      <div className="mt-[10vh]">
        <FeedModal
          isFeedModalOpen={isFeedModalOpen}
          setIsFeednModalOpen={setIsFeednModalOpen}
        />
      </div>
    </article>
  );
};

export default Feeds;
