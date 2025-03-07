import React from "react";
import { Card } from "@/components/Card";
import Image from "next/image";
import mapImage from "@/assets/images/ottawa.png";
import smileMemoji from "@/assets/images/mike.webp";

const Map = () => {
  return (
    <>
      {/* map */}
      <Card className="h-full lg:h-[340px] p-0 relative md:col-span-2 lg:col-span-1">
        <Image
          src={mapImage}
          alt="map"
          className="h-full w-full object-cover object-left-top "
        ></Image>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full ">
          <Image
            src={smileMemoji}
            alt="map"
            className="size-20 rounded-full"
          ></Image>
        </div>
      </Card>
    </>
  );
};

export default Map;
