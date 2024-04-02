import avatar from "../../assets/images/avatar_placeholder.svg";
import placeholderimg from "../../assets/images/feed_placeholder.svg";
import { MdArrowOutward } from "react-icons/md";
import { truncateText } from "../../utils/func";
import { useNavigate } from "react-router-dom";

const FeedCard = ({ item, isFeed }: { item: any; isFeed?: boolean }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="bg-[#F5F5F5] rounded-lg max-w-[550px] pt-7"
      onClick={() => navigate("/case-study/" + item.id, { state: { item } })}
    >
      {isFeed && (
        <div className="flex justify-start items-center gap-2 px-6 ">
          <p className="border border-black rounded-full px-5 ">News</p>
          <img src={avatar} alt="" className="w-6 h-6 rounded-full" />
        </div>
      )}

      <div className="px-8">
        <h4 className="text-xl font-bold mt-2">{item.title}</h4>
        <p
          className="mt-2 font-medium text-sm "
          style={{
            wordBreak: "break-all",
          }}
        >
          {truncateText(item.sub_title, 200)}
        </p>
      </div>

      <div className="flex justify-end px-4 py-2">
        <MdArrowOutward size={40} />
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
