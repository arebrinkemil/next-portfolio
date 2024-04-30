import { Carousels } from "@/components/carousels";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export function Personal() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full justify-center gap-8 items-center px-8 mt-8 ">
      <div className="lg:w-2/3 w-full">
        <Carousels />
      </div>
      <motion.div
        ref={ref}
        className={`lg:w-1/3 w-full rounded-lg  ${
          isInView ? "shadow-pop-tl" : ""
        }`}
      >
        <Image
          className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          src="/PFBild.jpg"
          alt="Profile Picture"
          width={500}
          height={500}
          layout="responsive"
        />
      </motion.div>
    </div>
  );
}
