import { motion, useScroll } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 bg-[#2ECC71] text-black p-4 border-2 border-[#2ECC71] shadow-[0_0_30px_rgba(46,204,113,0.5)] hover:bg-[#27ae60] transition-all group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ 
          y: [0, -5, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      >
        <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
      ></motion.div>
    </motion.button>
  );
}
