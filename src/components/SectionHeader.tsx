import React from "react";
import { RevealText } from "./RevealText";
export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title?: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>

      <div className="max-sm:hidden">
        <RevealText title="Recent&nbsp;Projects" />
      </div>

      <h2 className="visible md:hidden font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>

      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
