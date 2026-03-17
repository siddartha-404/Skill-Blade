import { motion } from 'motion/react';

export function CommunitySection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 via-[#5865F2]/10 to-[#0A66C2]/10"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: 'linear'
        }}
      ></motion.div>

      {/* Floating orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#25D366] opacity-10 blur-[100px] rounded-full"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      ></motion.div>

      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#5865F2] opacity-10 blur-[100px] rounded-full"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      ></motion.div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Join Builders Across{' '}
          <span className="text-[#2ECC71] relative">
            Campuses
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2ECC71]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Connect with designers, builders, and creators in our growing community
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <motion.a
            href="https://chat.whatsapp.com/GwVH3f76KP87iPf7hRcFwA?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-[#25D366] p-8 flex flex-col items-center justify-center relative overflow-hidden group rounded-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500"
            ></motion.div>

            <motion.div
              className="relative z-10"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-16 h-16 mb-4" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-4 relative z-10">Quick updates & announcements</p>

            <div className="bg-[#25D366]/20 border-2 border-[#25D366] px-6 py-2 font-bold text-[#25D366] relative z-10 group-hover:bg-[#25D366] group-hover:text-black transition-all rounded-sm">
              Join Group
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-[#25D366]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            ></motion.div>
          </motion.a>

          {/* Discord */}
          <motion.a
            href="https://discord.gg/tdQYgZEY8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-[#5865F2] p-8 flex flex-col items-center justify-center relative overflow-hidden group rounded-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#5865F2] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500"
            ></motion.div>

            <motion.div
              className="relative z-10"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/assets/discord.png" alt="Discord" className="w-16 h-16 mb-4" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Discord</h3>
            <p className="text-gray-400 text-sm mb-4 relative z-10">Main community hub & battles</p>

            <div className="bg-[#5865F2]/20 border-2 border-[#5865F2] px-6 py-2 font-bold text-[#5865F2] relative z-10 group-hover:bg-[#5865F2] group-hover:text-white transition-all rounded-sm">
              Join Server
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-[#5865F2]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            ></motion.div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/master-z-3303b52b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-[#0A66C2] p-8 flex flex-col items-center justify-center relative overflow-hidden group rounded-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#0A66C2] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500"
            ></motion.div>

            <motion.div
              className="relative z-10"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/assets/linkedin.png" alt="LinkedIn" className="w-16 h-16 mb-4" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">LinkedIn</h3>
            <p className="text-gray-400 text-sm mb-4 relative z-10">Professional network & updates</p>

            <div className="bg-[#0A66C2]/20 border-2 border-[#0A66C2] px-6 py-2 font-bold text-[#0A66C2] relative z-10 group-hover:bg-[#0A66C2] group-hover:text-white transition-all rounded-sm">
              Follow Us
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-[#0A66C2]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            ></motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}