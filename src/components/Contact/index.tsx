import { useState } from "react";
import circlesImg from "../../assets/images/circles.svg";
import axios from "axios";
// import ChatBox from "./ChatBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePhone = (phone: string) => {
  const re = /^\d{10}$/;
  return re.test(phone);
};

const ContactUs = () => {
  return (
    <article
      id="contact-us"
      className="px-2 md:px-[5%] bg-black pt-8 md:pt-12 lg:pt-20  relative overflow-hidden w-full"
    >
      <section className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 z-10 text-[2rem] md:text-[5rem] lg:text-[5rem] text-nowrap text-center lg:text-left leading-[3rem] md:leading-[5rem] ">
          <h4 className="text-white leading-4 font-extrabold ">
            Let's Connect!
          </h4>
          {/* <h4 className="text-white  font-extrabold mt-2">Get in touch.</h4> */}
        </div>

        {/* <ChatBox /> */}
      </section>

      <img
        src={circlesImg}
        className="hidden lg:block bgCircles max-w-[350px] lg:max-w-[600px] opacity-70 mt-8"
        alt=""
        loading="lazy"
      />

      <div className="flex justify-end">
        <ContactForm />
      </div>
      <ToastContainer />
    </article>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    email: string;
    message: string;
  }>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<{
    name: null | string;
    phone: null | string;
    email: null | string;
    message: null | string;
  }>({
    name: null,
    phone: null,
    email: null,
    message: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name.length < 3) {
      setError({ ...error, name: "Please enter a valid name" });
      return;
    }
    if (!validatePhone(formData.phone)) {
      setError({ ...error, phone: "Please enter a valid phone number" });
      return;
    }

    if (!validateEmail(formData.email)) {
      setError({ ...error, email: "Please enter a valid email address" });
      return;
    }

    if (formData.message.length === 0) {
      setError({ ...error, message: "Message is required" });
      return;
    }

    setIsLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}contact-us`,
        formData
      );

      toast.success("🗸 Message sent successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setError({
        name: null,
        phone: null,
        email: null,
        message: null,
      });

      setIsLoading(false);
    }
  };

  return (
    <article className="w-full lg:w-1/2 py-10 lg:py-10 max-w-[850px] pr-[4%]">
      <form
        className="flex flex-col gap-10"
        onSubmit={(e) => handleSendMessage(e)}
      >
        <section className="flex flex-col lg:flex-row justify-between gap-y-10">
          <div
            className={
              formData.name === ""
                ? "relative flex flex-col w-full lg:w-[47%] text-red-500 hover:text-transparent focus:text-transparent"
                : "text-transparent"
            }
          >
            <input
              className="bg-inherit border-b-2 border-b-slate-100 pt-4 pb-3 px-3 outline-none focus:border-b-2 focus:border-b-red-500 text-xl placeholder:text-white placeholder:font-medium text-white "
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setError({ ...error, name: null });
              }}
            />
            <p
              className="absolute text-2xl"
              style={{
                top: 16,
                left: 120,
              }}
            >
              *
            </p>

            {error.name && <p className="text-red-500">{error.name}</p>}
          </div>
          <div
            className={
              formData.phone === ""
                ? "relative flex flex-col w-full lg:w-[47%] text-red-500 hover:text-transparent focus:text-transparent"
                : "text-transparent"
            }
          >
            <input
              className="bg-inherit border-b-2 border-b-slate-100 pt-4 pb-3 px-3 outline-none focus:border-b-2 focus:border-b-red-500 text-xl placeholder:text-white placeholder:font-medium text-white"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                setError({ ...error, phone: null });
              }}
              onKeyDown={(e) => {
                const allowedKeys = [
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab",
                  "Enter",
                  "Home",
                  "End",
                ];
                if (
                  !allowedKeys.includes(e.key) &&
                  (e.key < "0" || e.key > "9") &&
                  !e.ctrlKey &&
                  !e.metaKey
                ) {
                  e.preventDefault();
                }
              }}
            />
            <p
              className="absolute text-2xl"
              style={{
                top: 16,
                left: 160,
              }}
            >
              *
            </p>
            {error.phone && <p className="text-red-500">{error.phone}</p>}
          </div>
        </section>

        <div
          className={
            formData.email === ""
              ? "relative flex flex-col w-full text-red-500 hover:text-transparent focus:text-transparent"
              : "text-transparent"
          }
        >
          <input
            className="w-full bg-inherit border-b-2 border-b-slate-100 pt-4 pb-3 px-3 outline-none focus:border-b-2 focus:border-b-red-500 text-xl placeholder:text-white placeholder:font-medium text-white"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setError({ ...error, email: null });
            }}
          />
          <p
            className="absolute text-2xl"
            style={{
              top: 16,
              left: 74,
            }}
          >
            *
          </p>
          {error.email && <p className="text-red-500">{error.email}</p>}
        </div>

        <div
          className={
            formData.message === ""
              ? "relative flex flex-col w-full text-red-500 hover:text-transparent focus:text-transparent"
              : "text-transparent"
          }
        >
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              setError({ ...error, message: null });
            }}
            className="w-full bg-inherit border-b-2 border-b-slate-100 pt-4 pb-1 px-3 outline-none focus:border-b-2 focus:border-b-red-500 text-xl placeholder:text-white placeholder:font-medium text-white"
          />
          <p
            className="absolute text-2xl"
            style={{
              top: 16,
              left: 107,
            }}
          >
            *
          </p>

          {error.message && <p className="text-red-500">{error.message}</p>}
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className={
              isLoading
                ? "bg-white text-black px-8 py-2 font-medium opacity-20"
                : "bg-white text-black px-8 py-2 font-medium hover:opacity-90"
            }
          >
            Submit
          </button>
        </div>
      </form>
    </article>
  );
};

export default ContactUs;
