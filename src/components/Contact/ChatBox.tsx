import { VscSend } from "react-icons/vsc";
import chatBotImg from "../../assets/images/chat_bot.svg";
import MessageCard from "./MessageCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const MESSAGES = [
  "Hi, what is your name ?",
  "Tell me your email address",
  "Tell me your phone address",
  "What is your message",
];
const ChatBox = () => {
  const [answers, setAnsewers] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [alertMsg, setAlertMsg] = useState<string | null>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [answers]);

  const handleSendMessage = async () => {
    try {
      const messageData = {
        name: answers[0],
        email: answers[1],
        phone: answers[2],
        message: answers[3],
      };

      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}contact-us`,
        messageData
      );

      if (response.status === 200) {
        setTimeout(() => {
          setAnsewers([]);
          setAnswer(null);
          setAlertMsg(null);
        }, 4000);
      }
    } catch (error) {
      // Handle error if needed
      setTimeout(() => {
        setAnsewers([]);
        setAnswer(null);
        setAlertMsg(null);
      }, 4000);
    }
  };

  const handleAddMessageWithKey = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && answer) {
      let isValid = true;
      if (answers.length === 1) {
        isValid = validateEmail(answer);

        !isValid && setAlertMsg("Please enter a valid email address");
      }

      if (answers.length === 2) {
        isValid = validatePhone(answer);

        !isValid && setAlertMsg("Please enter a valid phone number");
      }

      if (isValid) {
        setAlertMsg(null);

        setAnsewers((prev) => [...prev, answer]);
        setAnswer(null);

        if (answers.length === 3) {
          setAlertMsg(
            "Thank you for your message. We will get back to you soon."
          );

          handleSendMessage();
        }
      }
    }
  };

  const handleAddMessage = () => {
    if (answer) {
      let isValid = true;
      if (answers.length === 1) {
        isValid = validateEmail(answer);

        !isValid && setAlertMsg("Please enter a valid email address");
      }

      if (answers.length === 2) {
        isValid = validatePhone(answer);

        !isValid && setAlertMsg("Please enter a valid phone number");
      }

      if (isValid) {
        setAlertMsg(null);
        setAnsewers((prev) => [...prev, answer]);
        setAnswer(null);

        if (answers.length === 3) {
          setAlertMsg(
            "Thank you for your message. We will get back to you soon."
          );

          handleSendMessage();
        }
      }
    }
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  return (
    <article className="z-10 w-full lg:w-1/2 h-[60vh] lgh-[90vh]  md:px-4 lg:px-10  flex flex-col justify-end py-8 lg:py-16 overflow-hidden">
      <section
        ref={messagesContainerRef}
        className="chatscroll w-full pr-3 lg:pr-8 hover:pr-4 overflow-hidden hover:overflow-y-scroll"
      >
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
        {alertMsg && <MessageCard message={alertMsg} isBot={true} />}
      </section>

      <section className="w-full flex items-center justify-center gap-2 lg:gap-4 mt-8 z-10 ">
        <img
          src={chatBotImg}
          alt=""
          className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
        />
        <input
          type="text"
          value={answer ? answer : ""}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyPress={handleAddMessageWithKey}
          className="w-full bg-[#777777] text-white text-lg py-2 px-6 rounded-lg"
        />
        <button
          type="button"
          className="text-white rounded-full w-10 h-10 lg:w-16 lg:h-12 border border-gray-500 flex justify-center items-center "
          disabled={!answer || answers.length >= MESSAGES.length}
          onClick={handleAddMessage}
        >
          <VscSend className="w-28" />
        </button>
      </section>
    </article>
  );
};

export default ChatBox;
