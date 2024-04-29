import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export function ComingSoonCard() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className={`bg-white rounded-lg p-4 text-text ${
        isInView ? "shadow-pop-tl" : ""
      }`}
    >
      <h2 className="text-lg md:text-xl font-bold mb-2 text-text">
        Many more to come...
      </h2>
    </motion.div>
  );
}
