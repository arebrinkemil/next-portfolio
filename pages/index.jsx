import { useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Page from "@/components/page";
import AnimatedH1 from "@/components/animatedh1";
import { Personal } from "@/components/personal";
import { TypeAnimation } from "react-type-animation";
import { AboutMe } from "@/components/aboutme";
import { ContactMe } from "@/components/contactme";

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
    <Page>
      <motion.div
        style={{ backgroundColor }}
        className="min-h-screen flex items-center justify-center w-full px-4"
      >
        <AnimatedH1>WEB DEVELOPER</AnimatedH1>
      </motion.div>

      <div className="px-8">
        <h1 className="text-7xl lg:text-8xl font-bold text-left mt-8">
          HELLO!
        </h1>
        <div className="h-20 sm:h-16 md:h-24 lg:h-32 xl:h-32 mb-8">
          <h2 className="text-6xl lg:text-7xl font-semibold text-left mt-2">
            <TypeAnimation
              sequence={[
                "I'm Emil Årebrink",
                1000,
                "I'm a Web Developer",
                1000,
                "I'm from Sweden",
                1000,
                "I'm a Student",
                1000,
              ]}
              preRenderFirstString
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />{" "}
          </h2>
        </div>
      </div>

      <Personal />
      <AboutMe />
      <ContactMe />
    </Page>
  );
}
