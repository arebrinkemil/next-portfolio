import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const AnimatedH1 = ({ children }) => {
  let animation;
  const color = "#016fb9";
  const shadowColor = "#E0DFDD";
  const duration = 0.7;
  const letters = children.split("");
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (children === "EMIL ÅREBRINK") {
    animation = (
      <div className="flex md:flex-row flex-col-reverse">
        <motion.div
          className="md:w-2/3 w-full"
          initial={{
            textShadow: `0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}`,
            x: 0,
            y: 0,
          }}
          animate={{
            textShadow: `-1px -1px ${shadowColor}, -2px -2px ${shadowColor}, -3px -3px ${shadowColor}, -4px -4px ${shadowColor}, -5px -5px ${shadowColor}, -6px -6px ${shadowColor}, -7px -7px ${shadowColor}, -8px -8px ${shadowColor}`,
            x: 8,
            y: 8,
          }}
          exit={{
            textShadow: `0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}`,
            color: color,
            x: 0,
            y: 0,
          }}
          transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: duration }}
        >
          <h1
            style={{ color: color }}
            className="lg:text-9xl sm:text-8xl text-7xl font-semibold lg:font-bold font-poppins"
          >
            {letters.map((letter, index) => (
              <motion.span key={index} whileHover={{ color: "#E0DFDD" }}>
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        <motion.div
          ref={ref}
          className={`md:w-1/3 w-full rounded-lg  ${
            isInView ? "shadow-pop-tl-white" : ""
          }`}
          exit={{
            opacity: 0,
            scale: 0.8,
            transition: { duration: duration },
          }}
        >
          <Image
            className="md:w-full w-1/2 h-1/2 md:h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
            src="/PFbild.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            layout="responsive"
          />
        </motion.div>
      </div>
    );
  } else if (children === "WEB DEVELOPER") {
    animation = (
      <motion.div
        initial={{
          textShadow: `0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}`,
          x: 0,
          y: 0,
        }}
        animate={{
          textShadow: `0 -1px ${shadowColor}, 0 -2px ${shadowColor}, 0 -3px ${shadowColor}, 0 -4px ${shadowColor}, 0 -5px ${shadowColor}, 0 -6px ${shadowColor}, 0 -7px ${shadowColor}, 0 -8px ${shadowColor}`,
          y: 8,
        }}
        exit={{
          textShadow: `0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}`,
          color: color,
          x: 0,
          y: 0,
        }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: duration }}
      >
        <h1
          style={{ color: color }}
          className="lg:text-9xl sm:text-8xl text-7xl font-semibold lg:font-bold font-poppins"
        >
          {letters.map((letter, index) => (
            <motion.span key={index} whileHover={{ color: "#E0DFDD" }}>
              {letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>
    );
  } else if (children === "MESSAGE ME") {
    animation = (
      <motion.div
        initial={{
          textShadow: `0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}, 0px 0px ${shadowColor}`,
          x: 0,
          y: 0,
        }}
        animate={{
          textShadow: `1px -1px ${shadowColor}, 2px -2px ${shadowColor}, 3px -3px ${shadowColor}, 4px -4px ${shadowColor}, 5px -5px ${shadowColor}, 6px -6px ${shadowColor}, 7px -7px ${shadowColor}, 8px -8px ${shadowColor}`,
          x: -8,
          y: 8,
        }}
        exit={{
          textShadow: `0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}`,
          color: color,
          x: 0,
          y: 0,
        }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: duration }}
      >
        <h1
          style={{ color: color }}
          className="lg:text-9xl sm:text-8xl text-7xl font-semibold lg:font-bold font-poppins"
        >
          {letters.map((letter, index) => (
            <motion.span key={index} whileHover={{ color: "#E0DFDD" }}>
              {letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>
    );
  }

  return animation;
};

export default AnimatedH1;
