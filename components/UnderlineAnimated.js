import { motion } from "framer-motion";
import { navAnimation } from "../framer/variants";

export default function UnderlineAnimated() {
  return (
    <motion.div
      className="absolute w-0 border-b-2 border-primary"
      variants={navAnimation}
      initial="underlineInitial"
      animate="underlineAnimate"
      exit="exit"
    ></motion.div>
  );
}
