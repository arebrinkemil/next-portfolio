import { useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Page from "@/components/page";
import AnimatedH1 from "@/components/animatedh1";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import { ContactMe } from "@/components/contactme";

export default function PROJECTS() {
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
        className="min-h-screen flex items-center justify-end w-full px-4"
      >
        <AnimatedH1>PROJECTS</AnimatedH1>
      </motion.div>
      <Skills />
      <Portfolio />
      <ContactMe />
    </Page>
  );
}
