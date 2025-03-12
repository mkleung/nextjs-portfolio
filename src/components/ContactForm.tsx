import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import StarIcon from "@/assets/icons/star.svg";
import { useFormData } from "herotofu-react";

interface ContactFormProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ContactForm: React.FC<ContactFormProps> = ({ open, setOpen }) => {
  const { formState, getFormSubmitHandler } = useFormData(
    "https://public.herotofu.com/v1/ee330890-566d-11ee-844c-3ff971b55902"
  );
  return (
    <>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <div className="inline-flex items-center gap-2">
            <StarIcon className="size-8 text-emerald-300"></StarIcon>
            <h3 className="text-white font-serif text-xl gradient-underline">
              Contact Form
            </h3>
          </div>
          <form onSubmit={getFormSubmitHandler()}>
            <div className="flex gap-5">
              {/* name  */}
              <div className="mb-4 flex-1">
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
                  className="focus:outline-none bg-gray-700 mt-1 block w-full border-2 gradient-border rounded-lg  px-2 py-1 text-white"
                  required
                />
              </div>

              {/* email  */}
              <div className="mb-4 flex-1">
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
                  className="focus:outline-none bg-gray-700 mt-1 block w-full border-2 gradient-border rounded-lg shadow-sm px-2 py-1 text-white"
                  required
                />
              </div>
            </div>

            {/* message  */}
            <div className="mb-4 ">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="focus:outline-none bg-gray-700 mt-1 block w-full border-2 gradient-border rounded-lg shadow-sm px-2 py-1 text-white"
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
      </DragCloseDrawer>
    </>
  );
};

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const DragCloseDrawer = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-999/70 backdrop-blur-md"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
