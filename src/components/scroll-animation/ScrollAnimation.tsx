import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useScrollAnimation = (
  threshold = 100,
  initialY = 500,
  animationDuration = 2,
  delay = 0.1
) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: animationDuration, delay: delay },
        });
      } else {
        controls.start({
          opacity: 0,
          y: initialY,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, threshold, initialY, animationDuration, delay]);

  return controls;
};
