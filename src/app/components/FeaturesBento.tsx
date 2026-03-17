import { motion } from 'motion/react';
import { Shield, Award, Calendar, Target, Trophy, BarChart3, MessageSquare, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';



const tribes = [
  { name: 'Red Raiders', color: '#ef4444', logo: '/assets/red-raiders.png' },
  { name: 'Blue Guardians', color: '#3b82f6', logo: '/assets/blue-guardians.png' },
  { name: 'Yellow Mavericks', color: '#eab308', logo: '/assets/yellow-mavericks.png' },
  { name: 'Green Greats', color: '#22c55e', logo: '/assets/green-greats.png' },
];

const bladeRanks = [
  { name: 'Blue Blade', color: '#3b82f6', bg: 'bg-blue-500' },
  { name: 'Jade Blade', color: '#22c55e', bg: 'bg-green-500' },
  { name: 'Amber Blade', color: '#f59e0b', bg: 'bg-amber-500' },
  { name: 'Purple Blade', color: '#a855f7', bg: 'bg-purple-500' },
];

const cycle = [
  { name: 'Missions', color: '#2ECC71', icon: Target },
  { name: 'Duels', color: '#D4AF37', icon: Trophy },
  { name: 'Tournaments', color: '#FFFFFF', icon: Sparkles },
];

export function FeaturesBento() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#1a1a1a] to-[#0F0F0F]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2ECC7108_1px,transparent_1px),linear-gradient(to_bottom,#2ECC7108_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <motion.div 
        className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#2ECC71] opacity-10 blur-[120px] rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Inside <span className="text-[#2ECC71]">SkillBlade</span> Season 1
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center mb-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A complete competitive learning system designed for champions
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tribe System - Large Feature Card */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#0F0F0F] border-2 border-[#2ECC71] p-8 relative overflow-hidden group rounded-xl shadow-[0_0_30px_rgba(46,204,113,0.1)] hover:shadow-[0_0_50px_rgba(46,204,113,0.3)] transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            {/* Animated background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"
            ></motion.div>

            <div className="relative z-10">
              <motion.div
                className="flex items-center gap-3 mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-[#2ECC71]/20 border-2 border-[#2ECC71] rounded-lg">
                  <Shield className="w-10 h-10 text-[#2ECC71]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Tribe System</h3>
                  <p className="text-[#2ECC71] text-sm font-semibold">4 LEGENDARY TRIBES</p>
                </div>
              </motion.div>
              
              <p className="text-gray-400 mb-6 text-base leading-relaxed">
                Join a tribe and compete together. Build your legacy with your team as you battle for the ultimate glory.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {tribes.map((tribe, idx) => (
                  <motion.div
                    key={tribe.name}
                    className="border-2 p-5 relative overflow-hidden group/tribe rounded-xl shadow-lg transition-all duration-300"
                    style={{ 
                      borderColor: tribe.color,
                      backgroundColor: `${tribe.color}15`
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      boxShadow: `0 10px 30px ${tribe.color}40`
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover/tribe:opacity-30 transition-opacity duration-300"
                      style={{ backgroundColor: tribe.color }}
                    ></motion.div>
                    
                    <motion.div 
                      className="w-16 h-16 mb-4 relative z-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden border-2 bg-[#0a0a0a]"
                      style={{ borderColor: `${tribe.color}40` }}
                      whileHover={{ scale: 1.15, borderColor: tribe.color, boxShadow: `0 0 20px ${tribe.color}60` }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback 
                        src={tribe.logo} 
                        alt={`${tribe.name} logo`}
                        className="w-full h-full object-contain mix-blend-screen scale-[2.2]"
                      />
                    </motion.div>
                    <p className="font-bold text-base relative z-10" style={{ color: tribe.color }}>
                      {tribe.name}
                    </p>
                    <p className="text-xs text-gray-500 relative z-10 mt-1">ACTIVE TRIBE</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom glow */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#2ECC71] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            ></motion.div>
          </motion.div>

          {/* Blade Rank System */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#0F0F0F] border-2 border-[#D4AF37] p-8 relative overflow-hidden group rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"
            ></motion.div>

            <div className="relative z-10">
              <motion.div
                className="flex items-center gap-3 mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-lg">
                  <Award className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Blade Rank System</h3>
                  <p className="text-[#D4AF37] text-xs font-semibold">PROGRESSION UNLOCKED</p>
                </div>
              </motion.div>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Climb the ranks by mastering challenges and proving your skills
              </p>
              
              <div className="flex gap-4 justify-center">
                {bladeRanks.map((rank, idx) => (
                  <motion.div 
                    key={rank.name}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -15, scale: 1.15 }}
                  >
                    <motion.div 
                      className={`w-16 h-20 ${rank.bg} mb-2 border-3 relative rounded-lg shadow-xl overflow-hidden`}
                      style={{ borderColor: rank.color }}
                      whileHover={{ 
                        boxShadow: `0 0 30px ${rank.color}80`,
                        borderWidth: '3px'
                      }}
                    >
                      {/* Blade icon effect */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: `linear-gradient(180deg, ${rank.color}60 0%, ${rank.color}20 100%)`
                        }}
                      >
                        <Award className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </motion.div>
                    <p className="text-xs font-bold text-center" style={{ color: rank.color }}>
                      {rank.name.split(' ')[0]}
                    </p>
                    <p className="text-[10px] text-gray-600 uppercase mt-1">RANK</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
            ></motion.div>
          </motion.div>

          {/* 21 Day Season Cycle */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#0F0F0F] border-2 border-white p-8 relative overflow-hidden group rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"
            ></motion.div>
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center gap-3 mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-white/10 border-2 border-white rounded-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">21 Day Season Cycle</h3>
                  <p className="text-gray-400 text-xs font-semibold">COMPLETE LEARNING PATH</p>
                </div>
              </motion.div>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Structured skill growth through three phases of competitive learning
              </p>
              
              <div className="flex gap-3">
                {cycle.map((phase, idx) => {
                  const Icon = phase.icon;
                  return (
                    <motion.div 
                      key={phase.name}
                      className="flex-1 border-2 p-3 md:p-5 relative overflow-hidden group/phase rounded-xl shadow-lg"
                      style={{ 
                        borderColor: phase.color,
                        backgroundColor: `${phase.color}20`
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -5,
                        boxShadow: `0 10px 30px ${phase.color}40`
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover/phase:opacity-30 transition-opacity duration-300"
                        style={{ backgroundColor: phase.color }}
                      ></motion.div>
                      
                      <Icon className="w-5 h-5 md:w-6 md:h-6 mb-2 relative z-10" style={{ color: phase.color }} />
                      <p className="font-bold text-xs md:text-sm relative z-10 break-words" style={{ color: phase.color }}>
                        {phase.name}
                      </p>
                      <p className="text-[9px] md:text-[10px] text-gray-600 relative z-10 mt-1 uppercase">Phase {idx + 1}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1 }}
            ></motion.div>
          </motion.div>

          {/* Missions System */}
          <motion.div
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-[#2ECC71] p-6 relative group overflow-hidden rounded-xl shadow-[0_0_20px_rgba(46,204,113,0.1)] hover:shadow-[0_0_40px_rgba(46,204,113,0.3)] transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, borderColor: '#D4AF37', scale: 1.02 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#2ECC71] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
            ></motion.div>
            
            <div className="p-3 bg-[#2ECC71]/20 border-2 border-[#2ECC71] rounded-lg w-fit mb-4">
              <Target className="w-10 h-10 text-[#2ECC71]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Missions System</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Complete challenges to earn points and unlock rewards.</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-1 flex-1 bg-[#2ECC71]/30 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#2ECC71] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                ></motion.div>
              </div>
              <span className="text-[#2ECC71] text-xs font-bold">75%</span>
            </div>
          </motion.div>

          {/* Arena Battles */}
          <motion.div
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-[#D4AF37] p-6 relative group overflow-hidden rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -8, borderColor: '#2ECC71', scale: 1.02 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
            ></motion.div>
            
            <div className="p-3 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-lg w-fit mb-4">
              <Trophy className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Arena Battles</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Speed design duels against other bladers.</p>
            <div className="mt-4 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">Live Battles Daily</div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-white p-6 relative group overflow-hidden rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -8, borderColor: '#2ECC71', scale: 1.02 }}
          >
            <motion.div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"
            ></motion.div>
            
            <div className="p-3 bg-white/10 border-2 border-white rounded-lg w-fit mb-4">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Leaderboard</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Track top builders every week and see your rank.</p>
            <div className="mt-4 text-white text-xs font-bold uppercase tracking-wider">Updated Weekly</div>
          </motion.div>

          {/* Community */}
          <motion.div
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 border-[#2ECC71] p-6 relative group overflow-hidden rounded-xl shadow-[0_0_20px_rgba(46,204,113,0.1)] hover:shadow-[0_0_40px_rgba(46,204,113,0.3)] transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -8, borderColor: '#D4AF37', scale: 1.02 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#2ECC71] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
            ></motion.div>
            
            <div className="p-3 bg-[#2ECC71]/20 border-2 border-[#2ECC71] rounded-lg w-fit mb-4">
              <MessageSquare className="w-10 h-10 text-[#2ECC71]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Collaborate and learn together on Discord.</p>
            <div className="mt-4 text-[#2ECC71] text-xs font-bold uppercase tracking-wider">Join 500+ Bladers</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}