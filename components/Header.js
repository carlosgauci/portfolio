import Nav from "./Nav";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { headerAnimation } from "../framer/variants";

export default function Header({
  setNavOpen,
  navItemSelected,
  setNavItemSelected,
}) {
  const { scrollY } = useViewportScroll();
  const headerShadow = useTransform(
    scrollY,
    [0, 10],
    ["0 0 0 rgba(0, 0, 0, 0)", "0 -2px 7px rgba(0,0,0, 0.3)"]
  );

  return (
    <motion.header
      className="fixed top-0 left-0 w-full h-14 overflow-hidden z-50 bg-black transition-shadow ease-in-out duration-300"
      style={{ boxShadow: headerShadow }}
    >
      <div className="container h-full flex justify-between items-center">
        <motion.h1
          className="text-3xl text-white"
          variants={headerAnimation}
          initial="initialTitle"
          animate="animateTitle"
        >
          CG
        </motion.h1>

        {/* Nav toggle */}
        <motion.div
          onClick={() => setNavOpen(true)}
          className="w-8 h-8 md:hidden"
          variants={headerAnimation}
          initial="initialNav"
          animate="animateNav"
        >
          <svg viewBox="0 0 24 24" fill="#fff" width="100%" height="100%">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </motion.div>

        {/* Desktop nav */}
        <motion.nav
          className="hidden md:block"
          variants={headerAnimation}
          initial="initialNav"
          animate="animateNav"
        >
          <Nav
            mobile={false}
            navItemSelected={navItemSelected}
            setNavItemSelected={setNavItemSelected}
          />
        </motion.nav>
      </div>
    </motion.header>
  );
}
