import { useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Page from "@/components/page";
import AnimatedH1 from "@/components/animatedh1";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";

export default function Index() {
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
    <Page className="flex flex-col">
      <motion.div
        style={{ backgroundColor }}
        className="min-h-screen flex flex-col items-center justify-center w-full px-4"
      >
        <AnimatedH1>EMIL ÅREBRINK</AnimatedH1>
        <div className="h-full w-full flex flex-col justify-end text-secondary">
          <h2 className="font-poppins text-6xl font-bold text-nowrap">
            WEB DEVELOPER
          </h2>
        </div>
      </motion.div>
      <Skills />
      <Portfolio />
    </Page>
  );
}
