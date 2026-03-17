import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export function UrgencyBar() {
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 bg-[#D4AF37] text-black py-3 px-4 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center font-bold text-sm md:text-base">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        >
          <Zap className="w-4 h-4 md:w-5 md:h-5" fill="black" />
        </motion.div>
        <span>Season 1 Launch Offer - Only 60 Founding Blades Available | Claim 7-Day Free Trial</span>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        >
          <Zap className="w-4 h-4 md:w-5 md:h-5" fill="black" />
        </motion.div>
      </div>

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
        animate={{ 
          scaleX: [0, 1, 0],
          originX: [0, 0, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: 'easeInOut'
        }}
      ></motion.div>
    </motion.div>
  );
}
