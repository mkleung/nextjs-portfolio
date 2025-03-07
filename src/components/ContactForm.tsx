import { useFormData } from 'herotofu-react';
import { motion } from "framer-motion";

const ContactForm = () => {
  // TODO - update to the correct endpoint
  const { formState, getFormSubmitHandler } = useFormData('https://public.herotofu.com/v1/ee330890-566d-11ee-844c-3ff971b55902');

  return (
    <>
      <form onSubmit={getFormSubmitHandler()}>
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded-lg shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded-lg shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded-lg shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 ">
          {/* <button
            className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300"
            type="submit"
          >
               <span className="relative px-5 py-1 transition-colors ease-in duration-200 bg-gray-800 dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-black">
                Send me a message
              </span>
          </button> */}


          <motion.button
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-full gap-2 w-max border-gray-900"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                type="submit"
              >
                <span className="font-semibold">Contact Me</span>
              
              </motion.button> 

        </div>
      </form>
    </>
  );
};

export default ContactForm;