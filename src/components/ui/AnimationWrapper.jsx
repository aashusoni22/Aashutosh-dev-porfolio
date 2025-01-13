import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/animations";

// Wrapper component for fade-in animations
export const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Wrapper component for staggered animations
export const StaggerContainer = ({
  children,
  delayChildren = 0,
  staggerChildren = 0.1,
  className = "",
}) => {
  return (
    <motion.div
      variants={staggerContainer(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Intersection Observer Hook for triggering animations
export const useIntersectionObserver = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return [ref, inView];
};
