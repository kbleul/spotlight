import { motion } from "framer-motion";

const MessageCard = ({
  message,
  isBot,
}: {
  message: string;
  isBot?: boolean;
}) => {
  return (
    <motion.div
      className={
        isBot
          ? "text-white relative mb-4 lg:mb-6 flex "
          : "text-white relative mb-4 lg:mb-6 flex justify-end pr-3 lg:pr-6"
      }
      initial={isBot ? { x: -600 } : { y: 200 }}
      animate={isBot ? { x: 0 } : { y: 0 }}
      transition={{ duration: isBot ? 1.2 : 0.4 }}
    >
      <div
        className={
          isBot
            ? "absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white"
            : "absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-200"
        }
      />
      <p
        style={{ wordBreak: "break-all" }}
        className={
          isBot
            ? "ml-4 lg:ml-8 px-4 md:px-8 py-3 md:py-4 rounded-3xl w-[86%] md:w-4/5 max-w-[400px]  bg-white text-sm md:text-base text-wrap  text-black font-medium"
            : "ml-4 lg:ml-8 px-4 md:px-8 py-3 md:py-4 rounded-3xl w-[86%] md:w-4/5 max-w-[400px] bg-gray-200 text-sm md:text-base text-wrap  text-black font-medium"
        }
      >
        {message}
      </p>
    </motion.div>
  );
};

export default MessageCard;
