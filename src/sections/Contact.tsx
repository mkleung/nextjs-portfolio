"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "@/components/ContactModal";
import ContactForm from "@/components/ContactForm";
import { DragCloseDrawerExample } from "@/components/DragCloseDrawer";

export const ContactSection = () => {

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative">
          <div className="flex flex-col gap-8  md:gap-16 items-center md:flex-row md:text-left w-full">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let me build a great website for you!
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your project to life? I can help you achieve your
                goals.
              </p>
            </div>

            <div className="ml-5">
              <DragCloseDrawerExample />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
