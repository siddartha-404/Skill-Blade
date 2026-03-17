import { Swords } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Animated noise texture overlay */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      ></motion.div>
      
      {/* Glowing grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2ECC7108_1px,transparent_1px),linear-gradient(to_bottom,#2ECC7108_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Parallax emerald glow effect */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2ECC71] opacity-10 blur-[120px] rounded-full"
      ></motion.div>

      {/* Floating gold accent */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4AF37] opacity-5 blur-[100px] rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      ></motion.div>

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Stop Watching Tutorials.<br />
            <span className="text-[#2ECC71] relative inline-block">
              Start Forging Skills.
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2ECC71]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          SkillBlade is a competitive learning arena where students master AI design tools, build real projects, and prove their skill.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-[#D4AF37] mb-12 font-bold uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Learning is a sport. Enter the Arena.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Apply for Season 1 Button */}
          <motion.button
            onClick={() => window.open('https://forms.gle/ATshnKhxQw8DUq826', '_blank')}
            className="bg-[#2ECC71] text-black px-8 py-4 font-bold text-lg hover:bg-[#27ae60] transition-colors relative group overflow-hidden rounded-xl cursor-pointer flex items-center justify-center gap-2 min-w-[240px] h-[64px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <Swords className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Apply for Season 1</span>
          </motion.button>
          
          {/* Join WhatsApp Button */}
          <motion.button 
            onClick={() => window.open('https://chat.whatsapp.com/GwVH3f76KP87iPf7hRcFwA?mode=gi_t', '_blank')}
            className="bg-[#25D366] text-white px-8 py-4 font-bold text-lg hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 border-2 border-[#25D366] relative overflow-hidden group rounded-xl cursor-pointer min-w-[240px] h-[64px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Join WhatsApp</span>
          </motion.button>
          
          {/* Enter Discord Button */}
          <motion.button 
            onClick={() => window.open('https://discord.gg/tdQYgZEY8', '_blank')}
            className="bg-[#5865F2] text-white px-8 py-4 font-bold text-lg hover:bg-[#4752C4] transition-all flex items-center justify-center gap-2 border-2 border-[#5865F2] relative overflow-hidden group rounded-xl cursor-pointer min-w-[240px] h-[64px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <img src="/assets/discord.png" alt="Discord" className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Enter Discord</span>
          </motion.button>
        </motion.div>

        <motion.p
          className="text-gray-400 text-sm md:text-base flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="inline-block w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse"></span>
          Season 1 begins March 19 • 7 Day Trial
        </motion.p>
      </motion.div>
    </section>
  );
}