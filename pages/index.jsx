import { useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Page from "@/components/page";
import AnimatedH1 from "@/components/animatedh1";

export default function index() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["#9e9b94", "#522222"],
    "clamp"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <motion.div
        style={{ backgroundColor }}
        className="min-h-screen flex items-center w-full px-4"
      >
        <AnimatedH1>EMIL ÅREBRINK</AnimatedH1>
      </motion.div>
    </Page>
  );
}
