import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { MdOutlineCancel } from "react-icons/md";
import FeedCard from "./Feeds/FeedCard";
const FeedModal = ({
  isFeedModalOpen,
  setIsFeednModalOpen,
}: {
  isFeedModalOpen: boolean;
  setIsFeednModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Transition appear show={isFeedModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          onClose={() => setIsFeednModalOpen(true)}
        >
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

          <div className="fixed inset-0 overflow-y-auto w-full">
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
                  className="h-[96vh] transform overflow-hidden 
              rounded-2xl bg-[#fff] p-6 text-left align-middle shadow-xl z-[100] transition-all border-4 border-red-400"
                >
                  <MdOutlineCancel
                    onClick={() => {
                      setIsFeednModalOpen(false);
                    }}
                    className="absolute top-2 right-2 text-orange-color w-6 h-6"
                  />
                  <FeedCard />
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
