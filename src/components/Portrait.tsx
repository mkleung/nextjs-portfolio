import React from "react";
import Image from "next/image";
import logo from "@/assets/images/mike.jpeg";

const Portrait = () => {
  return (
    <div>
      <div className="circle mb-5">
        <Image
          src={logo}
          className=""
          alt="Person peeking from behind laptop"
        />
      </div>
    </div>
  );
};

export default Portrait;
