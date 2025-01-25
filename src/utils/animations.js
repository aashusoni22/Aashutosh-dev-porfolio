export const fadeIn = (direction, delay = 0) => ({
  hidden: {
    y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: delay,
      stiffness: 100,
      damping: 20,
    },
  },
});

// Optimized stagger container
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Optimized scale animation
export const scaleIn = (delay = 0) => ({
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delay: delay,
      stiffness: 100,
      damping: 20,
    },
  },
});

// Optimized slide animation
export const slideIn = (
  direction,
  type = "spring",
  delay = 0,
  duration = 0.4
) => ({
  hidden: {
    x: direction === "left" ? "-50%" : direction === "right" ? "50%" : 0,
    y: direction === "up" ? "50%" : direction === "down" ? "-50%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

// Optimized text animation
export const textVariant = (delay = 0) => ({
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delay,
      stiffness: 100,
      damping: 20,
    },
  },
});

// Optimized zoom animation
export const zoomIn = (delay = 0) => ({
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration: 0.4,
      stiffness: 100,
      damping: 20,
    },
  },
});

// Optimized float animation
export const float = {
  hover: {
    y: -5,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// Optimized pulse animation
export const pulse = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
