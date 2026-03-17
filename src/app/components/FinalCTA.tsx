import { motion } from 'motion/react';
import { Swords } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated background effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2ECC71]/5 to-transparent"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      ></motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#2ECC71] opacity-10 blur-[150px] rounded-full"></div>
      
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#D4AF37] opacity-10 blur-[120px] rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      ></motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your Skill Journey Starts{' '}
          <span className="text-[#2ECC71] relative inline-block">
            Today
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2ECC71]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </span>
        </motion.h2>

        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Season 1 begins{' '}
          <span className="text-[#D4AF37] font-bold relative inline-block">
            March 23
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.span>
          </span>
        </motion.p>

        <motion.p
          className="text-xl text-gray-400 mb-12 uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Enter the arena.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={() => window.open('https://forms.gle/ATshnKhxQw8DUq826', '_blank')}
            className="bg-[#2ECC71] text-black px-10 py-5 font-bold text-lg hover:bg-[#27ae60] transition-all relative group overflow-hidden rounded-xl cursor-pointer flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
            ></motion.div>
            
            <div className="flex items-center gap-2 relative z-10">
              <Swords className="w-6 h-6" />
              <span>Apply for Season 1</span>
            </div>

            <span className="relative z-10 text-xs font-semibold bg-black/10 px-2 py-0.5 rounded-full mt-1">
              + 7-Day Free Trial
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links Updated */}
        <motion.div
          className="flex gap-8 justify-center items-center flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://chat.whatsapp.com/GwVH3f76KP87iPf7hRcFwA?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-[#25D366] transition-colors group cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </motion.a>

          <motion.a
            href="https://discord.gg/tdQYgZEY8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-[#5865F2] transition-colors group cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/assets/discord.png" alt="Discord" className="w-5 h-5" />
            <span className="font-medium">Discord</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/master-z-3303b52b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-[#0A66C2] transition-colors group cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/assets/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}