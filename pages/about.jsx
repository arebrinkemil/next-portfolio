import { useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Page from "@/components/page";
import AnimatedH1 from "@/components/animatedh1";
import { Personal } from "@/components/personal";
import Skills from "@/components/skills";

export default function About() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["#016fb9", "#E0DFDD"],
    "clamp"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <motion.div
        style={{ backgroundColor }}
        className="min-h-screen flex items-center justify-center w-full px-4"
      >
        <AnimatedH1>WEB DEVELOPER</AnimatedH1>
      </motion.div>
      <Skills />
      <Personal />
    </Page>
  );
}
