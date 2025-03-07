import React from 'react'
import { Card } from "@/components/Card";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { motion } from "framer-motion";
import bookImage from "@/assets/images/deep.jpg";

const Reading = () => {
  return (
    <>
         {/* Book */}
         <Card className="h-full lg:h-[340px] md:col-span-2 lg:col-span-1">
              <CardHeader title="Reading" />
              <motion.div
                className="w-40 mx-auto mt-2 md:mt-0"
                style={{ overflow: "hidden" }}
              >
                <Image src={bookImage} alt="book cover"></Image>
              </motion.div>
            </Card>
    </>
  )
}

export default Reading