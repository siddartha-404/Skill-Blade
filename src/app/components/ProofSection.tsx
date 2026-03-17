import { motion } from 'motion/react';
import { MessageSquare, Image, TrendingUp, CheckCircle2 } from 'lucide-react';

export function ProofSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2ECC71]/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Early Bladers Are Already{' '}
          <span className="text-[#2ECC71] relative">
            Forging Skills
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2ECC71]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Discord Screenshots */}
          <motion.div
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-[#5865F2] p-6 aspect-square flex flex-col items-center justify-center relative overflow-hidden group rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, borderColor: '#D4AF37' }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#5865F2] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500"
            ></motion.div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquare className="w-16 h-16 text-[#5865F2] mb-4" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Discord Community</h3>
              <p className="text-gray-400 text-center text-sm mb-4">Active builders collaborating daily</p>
              
              <motion.div 
                className="bg-[#5865F2]/10 border-2 border-[#5865F2] px-6 py-3 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: '#5865F220' }}
              >
                <p className="text-[#5865F2] font-bold text-lg">150+ Members</p>
              </motion.div>

              <div className="mt-4 space-y-2 w-full">
                <motion.div 
                  className="flex items-center gap-2 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#5865F2]" />
                  <span>Daily design discussions</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#5865F2]" />
                  <span>Mission submissions</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-[#5865F2]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            ></motion.div>
          </motion.div>

          {/* LinkedIn Network Proof */}
          <motion.div
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-[#D4AF37] p-6 aspect-square flex flex-col items-center justify-center relative overflow-hidden group rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, borderColor: '#2ECC71' }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500"
            ></motion.div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image className="w-16 h-16 text-[#D4AF37] mb-4" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Real Projects</h3>
              <p className="text-gray-400 text-center text-sm mb-4">Portfolio-worthy work from students</p>
              
              <motion.div 
                className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] px-6 py-3 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: '#D4AF3720' }}
              >
                <p className="text-[#D4AF37] font-bold text-lg">200+ Projects</p>
              </motion.div>

              <div className="mt-4 space-y-2 w-full">
                <motion.div 
                  className="flex items-center gap-2 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Figma designs</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Framer websites</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            ></motion.div>
          </motion.div>

          {/* Student Proof */}
          <motion.div
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-[#2ECC71] p-6 aspect-square flex flex-col items-center justify-center relative overflow-hidden group rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, borderColor: '#D4AF37' }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#2ECC71] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500"
            ></motion.div>

            <div className="relative z-10 w-full">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <TrendingUp className="w-16 h-16 text-[#2ECC71] mb-4" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Leaderboard Preview</h3>
              <p className="text-gray-400 text-center text-sm mb-4">Top builders this season</p>
              
              <div className="space-y-2">
                <motion.div 
                  className="flex items-center justify-between bg-[#D4AF37]/20 border-2 border-[#D4AF37] px-3 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ x: 5, backgroundColor: '#D4AF3730' }}
                >
                  <span className="text-[#D4AF37] font-bold text-sm">🥇 Blader #1</span>
                  <span className="text-white text-sm font-bold">2,450 pts</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between bg-gray-500/20 border-2 border-gray-400 px-3 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 5, backgroundColor: '#9ca3af30' }}
                >
                  <span className="text-gray-300 font-bold text-sm">🥈 Blader #2</span>
                  <span className="text-white text-sm font-bold">2,180 pts</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between bg-amber-700/20 border-2 border-amber-600 px-3 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 5, backgroundColor: '#f59e0b30' }}
                >
                  <span className="text-amber-400 font-bold text-sm">🥉 Blader #3</span>
                  <span className="text-white text-sm font-bold">1,920 pts</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-[#2ECC71]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}