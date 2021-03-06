import Nav from "./Nav";
import { motion } from "framer-motion";
import { navModalAnimation } from "../framer/variants";

export default function NavModal({
  setNavOpen,
  navItemSelected,
  setNavItemSelected,
}) {
  return (
    <motion.nav
      className="fixed top-0 right-0 left-0 h-full bg-gray-900 z-50 flex justify-center items-center"
      variants={navModalAnimation}
      initial="initialBG"
      animate="showBG"
      exit="exit"
    >
      <motion.div
        className="flex flex-col items-center  text-3xl"
        variants={navModalAnimation}
        initial="initialLinkContainer"
        animate="animateLinkContainer"
      >
        {/* Nav links */}
        <Nav
          mobile={true}
          setNavOpen={setNavOpen}
          navItemSelected={navItemSelected}
          setNavItemSelected={setNavItemSelected}
        />
      </motion.div>

      {/* Animated sides */}
      <motion.span
        className="absolute bottom-0 left-0 border-r-4 border-primary w-0 h-0"
        variants={navModalAnimation}
        initial="initial"
        animate="bottomLeft"
      ></motion.span>
      <motion.span
        className="absolute top-0 left-0 border-b-4 border-primary w-0 h-0"
        variants={navModalAnimation}
        initial="initial"
        animate="topLeft"
      ></motion.span>
      <motion.span
        className="absolute top-0 right-0 border-l-4 border-primary"
        variants={navModalAnimation}
        initial="initial"
        animate="topRight"
      ></motion.span>
      <motion.span
        className="absolute bottom-0 right-0 border-t-4 border-primary w-0 h-0"
        variants={navModalAnimation}
        initial="initial"
        animate="bottomRight"
      ></motion.span>

      {/* Close button */}
      <motion.div
        className="absolute h-4 w-4 top-5 right-6"
        onClick={() => setNavOpen(false)}
        variants={navModalAnimation}
        initial="initialBtn"
        animate="animateBtn"
      >
        <svg
          viewBox="0 -32 426.66667 426"
          fill="#ffffff"
          width="100%"
          height="100%"
        >
          <path d="m213.332031 181.667969c0 4.265625-1.277343 8.53125-3.625 11.730469l-106.667969 160c-3.839843 5.761718-10.238281 9.601562-17.707031 9.601562h-64c-11.730469 0-21.332031-9.601562-21.332031-21.332031 0-4.269531 1.28125-8.535157 3.625-11.734375l98.773438-148.265625-98.773438-148.269531c-2.34375-3.199219-3.625-7.464844-3.625-11.730469 0-11.734375 9.601562-21.335938 21.332031-21.335938h64c7.46875 0 13.867188 3.839844 17.707031 9.601563l106.667969 160c2.347657 3.199218 3.625 7.464844 3.625 11.734375zm0 0" />
          <path d="m426.667969 181.667969c0 4.265625-1.28125 8.53125-3.628907 11.730469l-106.664062 160c-3.839844 5.761718-10.242188 9.601562-17.707031 9.601562h-64c-11.734375 0-21.335938-9.601562-21.335938-21.332031 0-4.269531 1.28125-8.535157 3.628907-11.734375l98.773437-148.265625-98.773437-148.269531c-2.347657-3.199219-3.628907-7.464844-3.628907-11.730469 0-11.734375 9.601563-21.335938 21.335938-21.335938h64c7.464843 0 13.867187 3.839844 17.707031 9.601563l106.664062 160c2.347657 3.199218 3.628907 7.464844 3.628907 11.734375zm0 0" />
        </svg>
      </motion.div>
    </motion.nav>
  );
}
