import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";

import { MdOutlineCancel } from "react-icons/md";
import avatar from "../assets/images/avatar_placeholder.svg";
import { FaPlayCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Player } from "video-react";

const FeedModal = ({
  isFeedModalOpen,
  setIsFeednModalOpen,
}: {
  isFeedModalOpen: any;
  setIsFeednModalOpen: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const blog = isFeedModalOpen;
  const [showVideo, setShowVideo] = useState(false);

  const handleClose = () => {
    const element = document.getElementById("feedsContainer");

    setIsFeednModalOpen(null);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView();
      }, 100);
    }
  };
  return (
    <>
      <Transition appear show={isFeedModalOpen ? true : false} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto w-full ">
            <div className="flex min-h-full items-center justify-center p-4 text-center w-full ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="h-[96vh] lg:w-1/3 lg:min-w-[500px] max-w-[600px] transform overflow-hidden hover:overflow-y-scroll focus:overflow-y-scroll 
              rounded-2xl bg-[#fff] text-left align-middle shadow-xl z-[100] transition-all pb-10  "
                  style={{
                    zIndex: 200,
                  }}
                >
                  <section className="flex justify-between items-center border px-4 lg:px-8 py-6 bg-[#f8f7f7] border-b">
                    <div className="flex justify-start items-center gap-2 ">
                      <p className="border border-black rounded-full px-5 ">
                        {blog.category.name}
                      </p>
                      <img
                        src={avatar}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                    <MdOutlineCancel
                      onClick={handleClose}
                      className="text-orange-color w-6 h-6"
                    />
                  </section>

                  <article className="px-4 lg:px-8 my-4">
                    <h4 className="text-xl lg:text-3xl font-semibold mt-2 ">
                      {blog.title}
                    </h4>

                    <p
                      className="mt-2 font-medium "
                      style={{
                        wordBreak: "break-all",
                      }}
                    >
                      {blog.sub_title}
                    </p>

                    <section className="w-full h-[30vh] rounded-2xl overflow-hidden mt-6 relative">
                      {showVideo ? (
                        <motion.div
                          className=" h-[100vh] w-full bg-black z-10 absolute top-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        >
                          <div className="absolute top-4 right-4 text-gray-300 z-10">
                            <button
                              type="button"
                              className=""
                              onClick={() => {
                                const rootElement =
                                  document.getElementById("root-body");
                                if (rootElement) {
                                  rootElement.style.overflowY = "scroll";
                                }
                                setShowVideo(false);
                              }}
                            >
                              <IoMdClose size={38} />
                            </button>
                          </div>

                          <Player
                            fluid={false}
                            height="100%"
                            autoPlay
                            controls={false}
                            stopOnUnmount
                          >
                            <source src={blog.video.url} />
                          </Player>
                        </motion.div>
                      ) : (
                        <>
                          <img
                            src={blog.cover.url}
                            alt=""
                            className="w-full h-full"
                          />

                          {blog.video && blog.video !== "" && (
                            <button
                              type="button"
                              className="absolute top-0 w-full h-full z-10 flex justify-center items-center bg-transparent text-white"
                            >
                              <FaPlayCircle
                                size={50}
                                className="hover:opacity-60"
                              />
                            </button>
                          )}
                        </>
                      )}
                    </section>

                    <section>
                      <p
                        className="mt-5 font-medium text-base px-2"
                        style={{
                          wordBreak: "break-all",
                        }}
                      >
                        {blog.content}
                        {blog.content}
                        {blog.content}
                        {blog.content}
                        {blog.content}
                        {blog.content}
                        {blog.content}
                      </p>
                    </section>
                  </article>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FeedModal;
