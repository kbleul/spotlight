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
          ? "text-white relative mb-6 flex "
          : "text-white relative mb-6 flex justify-end pr-6"
      }
      initial={isBot ? { x: -600 } : { y: 200 }}
      animate={isBot ? { x: 0 } : { y: 0 }}
      transition={{ duration: isBot ? 1.2 : 0.4 }}
    >
      <div
        className={
          isBot
            ? "absolute bottom-0 left-0 w-4 h-4 rounded-full bg-white"
            : "absolute bottom-0 right-0 w-4 h-4 rounded-full bg-gray-200"
        }
      />
      <p
        className={
          isBot
            ? "ml-8 px-8 py-4 rounded-3xl w-[350px] bg-white text-black font-medium"
            : "ml-8 px-8 py-4 rounded-3xl w-[350px] bg-gray-200 text-black font-medium"
        }
      >
        {message}
      </p>
    </motion.div>
  );
};

export default MessageCard;
