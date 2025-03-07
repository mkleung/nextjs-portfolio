import React from "react";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";

const Phrase = ({text}:{text: string}) => {
  return (
    <>
      <div className={"px-5 flex gap-5 items-center"}>
        <p className="text-[5vw]">{text}</p>
        <StarIcon className="size-10 text-emerald-300"></StarIcon>
      </div>
    </>
  );
};

export default Phrase;
