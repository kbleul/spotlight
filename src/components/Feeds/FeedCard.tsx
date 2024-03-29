import avatar from "../../assets/images/avatar_placeholder.svg";
import placeholderimg from "../../assets/images/feed_placeholder.svg";
import { MdArrowOutward } from "react-icons/md";

const FeedCard = () => {
  return (
    <article className="bg-[#F5F5F5] rounded-lg max-w-[550px]">
      <div className="flex justify-start items-center gap-2 px-6 pt-7">
        <p className="border border-black rounded-full px-5 ">News</p>
        <img src={avatar} alt="" className="w-6 h-6 rounded-full" />
      </div>

      <div className="px-8">
        <h4 className="text-xl font-bold mt-2">
          Lorem ipsum dolor sit amet consectetur.
        </h4>
        <p className="mt-2 font-medium text-sm">
          Lorem ipsum dolor sit amet consectetur. Feugiat consequat enim urna
          mi. Lectus aliquet ut ut sollicitudin. Massa tellus lacinia tortor in
          orci. Sit amet netus nec donec gravida nam. Orci amet neque duis.
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
    </article>
  );
};

export default FeedCard;
