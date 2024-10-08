import { useRouter } from "next/router";
import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.0, color: "#522222" },
  pressed: { scale: 0.99 },
};

const navigationRoutes = ["about", "projects"]; //home

export default function Header() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["#016fb9", "#E0DFDD"],
    "clamp"
  );

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="flex justify-between items-center w-full h-20 px-4 fixed nav z-30 "
    >
      {navigationRoutes.map((singleRoute) => {
        return (
          <NavigationLink
            key={singleRoute}
            href={`/${singleRoute}`}
            text={singleRoute}
            router={router}
          />
        );
      })}
    </motion.nav>
  );
}

function NavigationLink({ href, text, router, isFirstLoad }) {
  const isActive = router.asPath === (href === "/about" ? "/" : href);
  const { scrollYProgress } = useScroll();
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["#FF6F59", "#016fb9"],
    "clamp"
  );

  return (
    <div className="w-full flex flex-row justify-around text-3xl md:text-4xl font-bold font-poppins">
      <Link href={href === "/about" ? "/" : href} passHref>
        <motion.div
          style={{ color: isActive ? textColor : "#ffffff" }}
          initial={isFirstLoad ? "hidden" : "show"}
          animate="show"
          whileHover="hover"
          whileTap="pressed"
          variants={button}
        >
          {text.toUpperCase()}
        </motion.div>
      </Link>
    </div>
  );
}
