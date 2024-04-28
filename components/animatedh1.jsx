import { motion } from "framer-motion";

const AnimatedH1 = ({ children }) => {
  let animation;
  const color = "#9e9b94";
  const shadowColor = "#522222";
  const duration = 0.7;
  const letters = children.split("");

  if (children === "EMIL ÅREBRINK") {
    animation = (
      <motion.div
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
            <motion.span key={index} whileHover={{ color: "#ffffff" }}>
              {letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>
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
            <motion.span key={index} whileHover={{ color: "#ffffff" }}>
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
            <motion.span key={index} whileHover={{ color: "#ffffff" }}>
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
