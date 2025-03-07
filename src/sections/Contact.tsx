"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "@/components/ContactModal";
import ContactForm from "@/components/ContactForm";

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative">
          <div className="flex flex-col gap-8  md:gap-16 items-center md:flex-row md:text-left">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's build something better together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your project to life? I can help you achieve your
                goals.
              </p>
            </div>

            <div>
              <motion.button
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-full gap-2 w-max border-gray-900"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={openModal}
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </motion.button>

              <ContactModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="Contact Me"
              ></ContactModal>

              {/* <ContactForm /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
