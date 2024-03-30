import FeedImgList from "../components/FeedImgList";
import newsTrace from "../assets/images/news/News.svg";
import NewsSection from "../components/NewsSection";
import ContactUs from "../components/Contact";
import FeedModal from "../components/FeedModal";
import { useState } from "react";

const Feeds = () => {
  const [isFeedModalOpen, setIsFeednModalOpen] = useState(false);

  return (
    <article id="yourAppElement">
      <h2
        className="text-[#4F4F4F] text-[185px] font-extrabold text-center mb-10"
        onClick={() => setIsFeednModalOpen(true)}
      >
        Feed
      </h2>

      <FeedImgList />

      <div className="border-t border-b border-black px-[1%] pt-1 pb-2 mx-6 mt-10">
        <img src={newsTrace} alt="" />
      </div>

      <NewsSection />

      <div className="mt-10">
        <ContactUs />
      </div>

      <FeedModal
        isFeedModalOpen={isFeedModalOpen}
        setIsFeednModalOpen={setIsFeednModalOpen}
      />
    </article>
  );
};

export default Feeds;
