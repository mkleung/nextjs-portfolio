import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import StarIcon from "@/assets/icons/star.svg";
import CloseIcon from "@/assets/images/close.svg";
import { useFormData } from "herotofu-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const constraintRef = useRef(null);

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (e: { target: { value: any } }) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(emailValue));
  };

  const { formState, getFormSubmitHandler } = useFormData(
    "https://public.herotofu.com/v1/ee330890-566d-11ee-844c-3ff971b55902"
  );

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      ref={constraintRef}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />

      <motion.div
        className=" relative  bg-gray-700 rounded-3xl z-10 max-w-xl w-full p-6 hover:cursor-grab  active:cursor-grabbing
         after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none"
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
            <h3 className="text-white font-serif text-xl gradient-underline">
              Contact Me
            </h3>
          </div>

          <form onSubmit={getFormSubmitHandler()}>
            {/* name  */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="subject"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm px-2 py-1 "
                required
              />
            </div>

            {/* email  */}
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
                name="email"
                placeholder="example@example.com"
                value={email}
                onChange={validateEmail}
                className={`mt-1 block w-full border rounded-lg shadow-sm px-2 py-1 
          ${isValid ? "border-gray-300" : "border-red-500"}`}
                required
              />
              {!isValid && (
                <span className="text-red-500 mt-1 mb-0">
                  Please enter a valid email
                </span>
              )}
            </div>

            {/* message  */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm px-2 py-1"
                required
                name="message"
                rows={4}
              />
            </div>

            <motion.button
              type="submit"
              className="mt-2 hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative px-5 py-1 transition-colors ease-in duration-200 bg-gray-700 dark:bg-gray-700 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-black ">
                Send Message
              </span>
            </motion.button>
          </form>
        </div>

        <motion.button
          className="text-white rounded-full absolute flex justify-center top-3 right-5"
          onClick={onClose}
          whileHover={{ rotate: 90 }} // Rotate 180 degrees on hover
          transition={{ duration: 0.5 }}
        >
          <CloseIcon />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ContactModal;
