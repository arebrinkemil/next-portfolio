import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center gap-8 items-center px-8 py-8 mt-8">
      <motion.div
        ref={ref}
        className={`lg:w-1/3 w-full rounded-lg ${
          isInView ? "shadow-pop-tl" : ""
        }`}
      >
        <Image
          className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          src="/houses.jpg"
          alt="Profile Picture"
          width={500}
          height={500}
          layout="responsive"
        />
      </motion.div>
      <div className="lg:w-2/3 w-full">
        <div className="text-base md:text-lg lg:text-xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            Hi, I'm Emil Årebrink, a 23-year-old aspiring web developer from
            Stenungsund on the west coast of Sweden. When I'm not coding, I like
            to spend time at sea, gaming, and listening to music.
          </p>
        </div>
      </div>
    </div>
  );
}
