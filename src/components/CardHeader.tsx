import React from "react";
import StarIcon from '@/assets/icons/star.svg';
import {twMerge } from "tailwind-merge"

export const CardHeader = ({ title, className} : {
    title: string;
    className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10 md:pb-3", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-8 text-emerald-300"></StarIcon>
        <h3 className="font-serif text-xl gradient-underline">{title}</h3>
      </div>
    </div>
  );
};
