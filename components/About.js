import { motion, useViewportScroll, useTransform } from "framer-motion";
import { aboutAnimation, arrowAnimation } from "../framer/variants";
import Image from "next/image";

export default function About({
  about: { aboutDesc, aboutPic, aboutPrefix, aboutTitle },
}) {
  const { scrollY } = useViewportScroll();
  const arrowDisplay = useTransform(scrollY, [0, 5], ["3rem", "0rem"]);

  return (
    <motion.section
      variants={aboutAnimation}
      initial="initialSection"
      animate="animateSection"
      id="about"
      className="pt-14"
    >
      <div className="container full-vh py-14 flex flex-col justify-evenly md:justify-center lg:flex-row-reverse lg:justify-evenly lg:items-center relative">
        {/* Image */}
        <motion.section
          className="w-5/6 max-w-xs self-center mb-8 rounded-lg overflow-visible relative"
          variants={aboutAnimation}
          initial="initialPic"
          animate="animatePic"
        >
          <Image
            src={aboutPic[0].thumbnails.large.url}
            alt="Carlos Gauci"
            layout="responsive"
            width="400"
            height="400"
            priority
            className="rounded-lg z-10"
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-full border-4 border-primary rounded-lg z-0"
            variants={aboutAnimation}
            initial="initialPicBG"
            animate="animatePicBG"
          ></motion.div>
        </motion.section>

        {/* Text/About section */}
        <section className="flex flex-col items-center md:mt-6 lg:mt-0 lg:mr-12 lg:items-start">
          <p className="text-sm text-primary font-bold mb-2 tracking-wider ">
            {aboutPrefix}
          </p>
          <h2 className="text-4xl lg:text-5xl mb-4 relative text-white">
            {aboutTitle}

            <div className="absolute w-full border-b-2 border-primary"></div>
          </h2>
          <p className="text-center lg:text-left md:max-w-md px-4 lg:px-0 text-white">
            {aboutDesc}
          </p>
        </section>

        {/* Scroll down arrow */}
        <motion.div
          className="hidden md:flex absolute bottom-0 left-2/4 w-12 h-12 mb-2 transform -translate-x-1/2 flex-col justify-center items-center overflow-hidden"
          style={{
            height: arrowDisplay,
          }}
          variants={arrowAnimation}
          initial="containerInitial"
          animate="containerAnimate"
        >
          <motion.span
            className="w-2 h-2 border-r border-b border-primary transform rotate-45"
            variants={arrowAnimation}
            initial="initial"
            animate="animate"
          ></motion.span>
          <span className="w-4 h-4 border-r-2 border-b-2 border-primary transform rotate-45"></span>
        </motion.div>
      </div>
    </motion.section>
  );
}
