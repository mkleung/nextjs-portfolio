import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import StarIcon from "@/assets/icons/star.svg";
import CloseIcon from "@/assets/images/close.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const constraintRef = useRef(null);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      ref={constraintRef}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />

      <motion.div
        className=" relative bg-gray-700 rounded-3xl z-10 max-w-xl w-full p-6 hover:cursor-grab"
        drag
        dragConstraints={constraintRef}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <div className="inline-flex items-center gap-2">
            <StarIcon className="size-8 text-emerald-300"></StarIcon>
            <h3 className="text-white font-serif text-xl gradient-underline">Contact Me</h3>
          </div>

          <form action="https://public.herotofu.com/v1/ee330890-566d-11ee-844c-3ff971b55902" method="post" accept-charset="UTF-8">
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                 name="Name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <button
              type="submit"
              className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300"
            >
              <span className="relative px-5 py-1 transition-colors ease-in duration-200 bg-gray-700 dark:bg-gray-700 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-black ">Send Message</span> 
            </button>
          </form>
        </div>

        <button
          className="text-white rounded-full absolute flex justify-center top-3 right-5"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
