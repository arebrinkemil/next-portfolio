import { motion } from "framer-motion";

const AnimatedH1 = ({ children }) => {
  let animation;
  const color = "#9e9b94";

  if (children === "EMIL ÅREBRINK") {
    animation = (
      <motion.div
        initial={{
          textShadow:
            "0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555",
          x: 0,
          y: 0,
        }}
        animate={{
          textShadow:
            "-1px -1px #555555, -2px -2px #555555, -3px -3px #555555, -4px -4px #555555, -5px -5px #555555, -6px -6px #555555, -7px -7px #555555, -8px -8px #555555",
          x: 8,
          y: 8,
        }}
        exit={{
          textShadow: `0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}`,
          color: color,
          x: 0,
          y: 0,
        }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 style={{ color: color }} className="text-[16rem] font-bold">
          {children}
        </h1>
      </motion.div>
    );
  } else if (children === "ABOUT") {
    animation = (
      <motion.div
        initial={{
          textShadow:
            "0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555",
          x: 0,
          y: 0,
        }}
        animate={{
          textShadow:
            "0 -1px #555555, 0 -2px #555555, 0 -3px #555555, 0 -4px #555555, 0 -5px #555555, 0 -6px #555555, 0 -7px #555555, 0 -8px #555555",

          y: 8,
        }}
        exit={{
          textShadow: `0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}`,
          color: color,
          x: 0,
          y: 0,
        }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 style={{ color: color }} className="text-[16rem] font-bold">
          {children}
        </h1>
      </motion.div>
    );
  } else if (children === "CONTACT") {
    animation = (
      <motion.div
        initial={{
          textShadow:
            "0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555, 0px 0px #555555",
          x: 0,
          y: 0,
        }}
        animate={{
          textShadow:
            "1px -1px #555555, 2px -2px #555555, 3px -3px #555555, 4px -4px #555555, 5px -5px #555555, 6px -6px #555555, 7px -7px #555555, 8px -8px #555555",
          x: -8,
          y: 8,
        }}
        exit={{
          textShadow: `0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}, 0px 0px ${color}`,
          color: color,
          x: 0,
          y: 0,
        }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 style={{ color: color }} className="text-[16rem] font-bold">
          {children}
        </h1>
      </motion.div>
    );
  }

  return animation;
};

export default AnimatedH1;
