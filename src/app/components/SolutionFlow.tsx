import { motion } from 'motion/react';
import { Hammer, Swords, Crown, ArrowRight, Zap } from 'lucide-react';

const steps = [
  {
    icon: Hammer,
    title: 'Forge',
    subtitle: 'Training Academy',
    description: 'Practice tools and build projects.',
    features: ['AI Design Tools', 'Guided Projects', 'Skill Missions'],
    color: '#2ECC71',
  },
  {
    icon: Swords,
    title: 'Arena',
    subtitle: 'Weekly Battles',
    description: 'Weekly battles and design duels. Compete with other builders.',
    features: ['Speed Duels', 'Tournaments', 'Live Leaderboard'],
    color: '#D4AF37',
  },
  {
    icon: Crown,
    title: 'Society',
    subtitle: 'Elite Network',
    description: 'Top bladers get access to founders, projects, and opportunities.',
    features: ['Founders Network', 'Internships', 'Job Opportunities'],
    color: '#D4AF37',
  },
];

export function SolutionFlow() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#2ECC71]/5 via-[#D4AF37]/5 to-[#2ECC71]/5"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: 'linear'
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
          SkillBlade Turns Learning Into a{' '}
          <span className="text-[#2ECC71]">Competitive Sport</span>
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Zap className="w-6 h-6 text-[#D4AF37]" fill="#D4AF37" />
          <p className="text-xl md:text-2xl text-[#D4AF37] font-bold uppercase tracking-widest">
            Forge → Arena → Society
          </p>
          <Zap className="w-6 h-6 text-[#D4AF37]" fill="#D4AF37" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex items-center gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0 blur-2xl opacity-50"
                  style={{ backgroundColor: step.color }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: 'reverse',
                    delay: index * 0.5
                  }}
                ></motion.div>

                <div
                  className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 p-8 w-80 flex flex-col items-center justify-center text-center overflow-hidden rounded-md"
                  style={{ borderColor: step.color }}
                >
                  {/* Top corner accent */}
                  <div 
                    className="absolute top-0 left-0 w-16 h-16"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.color} 0%, transparent 100%)`,
                      opacity: 0.2
                    }}
                  ></div>

                  {/* Icon with animation */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon
                      className="w-16 h-16 mb-4"
                      style={{ color: step.color }}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: step.color }}>
                    {step.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{step.description}</p>

                  {/* Features list */}
                  <div className="space-y-2 w-full">
                    {step.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-xs"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ backgroundColor: step.color }}
                        ></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: step.color }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  ></motion.div>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="hidden lg:block"
                >
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: 'reverse' 
                    }}
                  >
                    <ArrowRight className="w-8 h-8 text-[#2ECC71]" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}