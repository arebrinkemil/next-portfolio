import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full flex justify-center">
      <motion.div
        ref={ref}
        className="flex flex-col items-center w-full mt-8 mb-12 px-8 xl:px-0 xl:max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full text-center shadow-pop-tl py-2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            Contact Me
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:earebrink@gmail.com"
              className="text-2xl hover:text-blue-500 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/arebrinkemil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-700 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emil-%C3%A5rebrink/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
