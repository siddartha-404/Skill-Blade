import { motion, useScroll } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#2ECC71] via-[#D4AF37] to-[#2ECC71] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}
