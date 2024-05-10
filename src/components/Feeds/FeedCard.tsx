import avatar from "../../assets/images/avatar_placeholder.svg";
import placeholderimg from "../../assets/images/feed_placeholder.svg";
import { MdArrowOutward } from "react-icons/md";
import { truncateText } from "../../utils/func";
import parse from "html-react-parser";
import img6 from "../../assets/images/6.jpg";

const FeedCard = ({
  item,
  isFeed,
  handleClick,
  showArrow,
}: {
  item: any;
  isFeed?: boolean;
  handleClick: (item: any) => void;
  showArrow?: boolean;
}) => {
  return (
    <button
      type="button"
      className="bg-[#F5F5F5] rounded-lg  lg:max-w-[600px] pt-7"
      onClick={() =>
        showArrow && item.sub_title && item.content && handleClick(item)
      }
    >
      {isFeed && (
        <div className="flex justify-start items-center gap-2 px-6 ">
          <p className="border border-black rounded-full px-5 ">
            {item.category.name}
          </p>
          <img src={avatar} alt="" className="w-6 h-6 rounded-full" />
        </div>
      )}

      <div
        className={
          item.sub_title ? "px-8 text-left h-[10vh]" : "px-8 text-left h-[4vh]"
        }
      >
        <h4 className="text-2xl font-bold mt-2 hidden md:block">
          {truncateText(item.title, 55)}
        </h4>
        <h4 className="text-xl font-bold mt-2  md:hidden">
          {truncateText(item.title, 40)}
        </h4>

        {item.sub_title && (
          <p
            className="mt-2 font-medium text-sm lg:text-base  line-clamp-2"
            style={{
              wordBreak: "break-all",
            }}
          >
            {parse(item.sub_title)}
          </p>
        )}
      </div>

      <div className="flex justify-end px-4 py-2">
        {showArrow && item.sub_title && item.content ? (
          <MdArrowOutward size={35} />
        ) : (
          <div className="h-8" />
        )}
      </div>
      <div className="w-full h-auto rounded-t-[2rem] overflow-hidden ">
        <img src={item.cover.url} alt="" className="w-full object-cover" />
      </div>
    </button>
  );
};

export default FeedCard;
