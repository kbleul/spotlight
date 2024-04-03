import avatar from "../../assets/images/avatar_placeholder.svg";
import placeholderimg from "../../assets/images/feed_placeholder.svg";
import { MdArrowOutward } from "react-icons/md";
import { truncateText } from "../../utils/func";

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
      className="bg-[#F5F5F5] rounded-lg max-w-[550px] pt-7"
      onClick={() => handleClick(item)}
    >
      {isFeed && (
        <div className="flex justify-start items-center gap-2 px-6 ">
          <p className="border border-black rounded-full px-5 ">
            {item.category.name}
          </p>
          <img src={avatar} alt="" className="w-6 h-6 rounded-full" />
        </div>
      )}

      <div className="px-8 text-left h-[10vh]">
        <h4 className="text-xl font-bold mt-2 hidden md:block">
          {truncateText(item.title, 55)}
        </h4>
        <h4 className="text-xl font-bold mt-2  md:hidden">
          {truncateText(item.title, 40)}
        </h4>
        <p
          className="mt-2 font-medium text-sm hidden md:block"
          style={{
            wordBreak: "break-all",
          }}
        >
          {truncateText(item.sub_title, 130)}
        </p>
        <p
          className="mt-2 font-medium text-sm  md:hidden"
          style={{
            wordBreak: "break-all",
          }}
        >
          {truncateText(item.sub_title, 65)}
        </p>
      </div>

      <div className="flex justify-end px-4 py-2">
        {showArrow ? <MdArrowOutward size={35} /> : <div className="h-8" />}
      </div>
      <div className="w-full max-h-[40vh] rounded-t-[2rem] overflow-hidden ">
        <img
          src={placeholderimg}
          alt=""
          className="w-full  max-h-[40vh] object-cover"
        />
      </div>
    </button>
  );
};

export default FeedCard;
