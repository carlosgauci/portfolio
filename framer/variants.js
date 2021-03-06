// Header
export const headerAnimation = {
  initialTitle: {
    x: -25,
    opacity: 0,
  },

  animateTitle: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.4 },
  },

  initialNav: {
    x: 25,
    opacity: 0,
  },

  animateNav: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.4 },
  },
};

// Nav
export const navAnimation = {
  underlineInitial: {
    width: "0%",
  },

  underlineAnimate: {
    width: "100%",
    transition: {
      duration: 0.2,
      delay: 0.05,
    },
  },
  exit: {
    width: "0%",
    transition: {
      duration: 0.2,
    },
  },
};

// Mobile nav
export const navModalAnimation = {
  // Animated borders
  initial: {
    width: 0,
    height: 0,
  },

  bottomLeft: {
    height: "100%",

    transition: {
      duration: 0.125,
      ease: "linear",
    },
  },

  topLeft: {
    width: "100%",

    transition: {
      duration: 0.125,
      delay: 0.125,
      ease: "linear",
    },
  },

  topRight: {
    height: "100%",

    transition: {
      duration: 0.125,
      delay: 0.25,
      ease: "linear",
    },
  },

  bottomRight: {
    width: "100%",

    transition: {
      duration: 0.125,
      delay: 0.375,
      ease: "linear",
    },
  },

  // BG
  initialBG: {
    backgroundColor: "rgba(17, 24, 39, 0)",
  },

  showBG: {
    backgroundColor: "rgba(17, 24, 39, 1)",
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },

  exit: {
    x: "100%",
    transition: {
      duration: 0.2,
    },
  },

  // Link container
  initialLinkContainer: {
    opacity: 0,
  },

  animateLinkContainer: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.25,
    },
  },

  // Close btn
  initialBtn: {
    opacity: 0,
  },
  animateBtn: {
    opacity: 1,
    transition: {
      delay: 0.6,
    },
  },
};

// About section
export const aboutAnimation = {
  // Whole section
  initialSection: {
    y: 25,
    opacity: 0,
  },

  animateSection: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", delay: 0.4, duration: 0.4 },
  },

  // Profile pic
  initialPic: {
    y: 0,
    x: 0,
  },

  animatePic: {
    y: 12,
    x: -12,

    transition: {
      delay: 0.4,
      duration: 0.4,
      ease: "linear",
    },
  },

  initialPicBG: {
    y: 0,
    x: 0,
    opacity: 0,
  },

  animatePicBG: {
    y: -24,
    x: 24,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
      ease: "linear",
    },
  },
};

// About section scroll arrow
export const arrowAnimation = {
  containerInitial: {
    opacity: 0,
  },

  containerAnimate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.25,
    },
  },

  initial: {
    opacity: 1,
    y: 5,
    rotate: 45,
  },

  animate: {
    opacity: 0,
    y: -10,

    transition: { repeat: Infinity, duration: 1.5 },
  },
};

// Skills section
export const skillAnimation = {
  // Skill icons container
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delay: 0.05 },
  },

  // Title
  initialTitle: {
    y: 25,
    opacity: 0,
  },

  animateTitle: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.25, delay: 0.1 },
  },
};

// Skill icons
export const skillIconAnimation = {
  hidden: {
    x: -10,
    opacity: 0,
    scale: 0.2,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

// Projects section
export const projectAnimation = {
  // Projects container
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delay: 0.05 },
  },

  // Title
  initialTitle: {
    y: 25,
    opacity: 0,
  },

  animateTitle: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.25, delay: 0.1 },
  },
};

// Project cards
export const projectCardAnimation = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.3 },
  },

  // Skill icons on project cards
  initial: {
    scale: 1,
    backgroundColor: "rgb(55, 65, 81)",
  },
  hover: {
    scale: 1.15,
    backgroundColor: "rgb(64, 76, 94)",
  },
};

// Contact section
export const contactAnimation = {
  // Icons

  // Left icon
  initialLeft: {
    x: 50,
    opacity: 0,
    border: "2px solid rgba(255, 156, 68, 0)",
  },

  animateLeft: {
    border: "2px solid rgba(255, 156, 68, 1)",

    x: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      delay: 0.1,

      border: {
        delay: 0.35,
        duration: 0.5,
      },
    },
  },

  // Center icon
  initialCenter: {
    border: "2px solid rgba(255, 156, 68, 0)",
  },

  animateCenter: {
    border: "2px solid rgba(255, 156, 68, 1)",

    transition: {
      border: {
        delay: 0.45,
        duration: 0.5,
      },
    },
  },

  // Right icon
  initialRight: {
    x: -50,
    opacity: 0,
    border: "2px solid rgba(255, 156, 68, 0)",
  },

  animateRight: {
    x: 0,
    opacity: 1,
    border: "2px solid rgba(255, 156, 68, 1)",

    transition: {
      duration: 0.35,
      delay: 0.1,

      border: {
        delay: 0.55,
        duration: 0.5,
      },
    },
  },
};

// Contact Form
export const contactFormAnimation = {
  initial: {
    opacity: 0,
    y: 25,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.35,
    },
  },
};
