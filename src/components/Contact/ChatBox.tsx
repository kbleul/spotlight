import { VscSend } from "react-icons/vsc";
import chatBotImg from "../../assets/images/chat_bot.svg";
import MessageCard from "./MessageCard";
import { useState } from "react";

const MESSAGES = [
  "1 - Lorem ipsum dolor sit amet consectetur. Varius enim risus sagittis blandit tempor. Eu sed.",
  "2 - Lorem ipsum dolor sit amet consectetur. Varius enim risus sagittis blandit tempor. Eu sed.",
  "3 - Lorem ipsum dolor sit amet consectetur. Varius enim risus sagittis blandit tempor. Eu sed.",
  "4 - Lorem ipsum dolor sit amet consectetur. Varius enim risus sagittis blandit tempor. Eu sed.",
  "5 - Lorem ipsum dolor sit amet consectetur. Varius enim risus sagittis blandit tempor. Eu sed.",
];
const ChatBox = () => {
  const [answers, setAnsewers] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <article className="w-1/2 h-[90vh] px-10  flex flex-col justify-end py-16 overflow-hidden">
      {Array.from({ length: answers.length + 1 }).map((_, index) => (
        <div key={"message--" + index + "--chat"}>
          {MESSAGES[index] && (
            <MessageCard message={MESSAGES[index]} isBot={true} />
          )}
          {answers.length > 0 && answers[index] && (
            <MessageCard message={answers[index]} />
          )}
        </div>
      ))}

      <section className="flex items-center justify-center gap-4 mt-8 z-10">
        <img src={chatBotImg} alt="" className="w-16 h-16 rounded-full" />
        <input
          type="text"
          value={answer ? answer : ""}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full bg-[#777777] text-white text-lg py-4 px-6 rounded-lg"
        />
        <button
          type="button"
          className="text-white rounded-full w-16 h-12 border border-gray-500 flex justify-center items-center "
          disabled={!answer || answers.length >= MESSAGES.length}
          onClick={() => {
            if (answer) {
              setAnsewers((prev) => [...prev, answer]);
              setAnswer(null);
            }
          }}
        >
          <VscSend size={30} />
        </button>
      </section>
    </article>
  );
};

export default ChatBox;
