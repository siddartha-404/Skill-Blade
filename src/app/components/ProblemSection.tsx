import { motion } from 'motion/react';
import { BookOpen, Briefcase, Users } from 'lucide-react';

const problems = [
  {
    icon: BookOpen,
    number: '1',
    title: 'Too Much Theory',
    description: 'Students spend years studying but rarely build anything real.',
  },
  {
    icon: Briefcase,
    number: '2',
    title: 'No Experience',
    description: 'Companies want experience. But beginners never get a chance.',
  },
  {
    icon: Users,
    number: '3',
    title: 'No Community',
    description: 'Learning alone is slow. Competition accelerates growth.',
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Most Students Graduate With{' '}
          <span className="text-red-500 relative">
            No Skills
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-red-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-red-900/50 p-8 group overflow-hidden hover:border-red-500 transition-all duration-500 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Animated red glow effect */}
              <motion.div 
                className="absolute inset-0 bg-red-500 opacity-5 group-hover:opacity-20 blur-xl transition-all duration-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: 'reverse',
                  delay: index * 0.5
                }}
              ></motion.div>
              
              {/* Inner shadow glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(239,68,68,0.15)]"></div>
              
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-12 h-12 border-2 border-red-500 flex items-center justify-center rounded-xl">
                <span className="text-red-500 text-2xl font-bold">{problem.number}</span>
              </div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <problem.icon className="w-12 h-12 text-red-500 mb-4" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3 pr-12">{problem.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{problem.description}</p>
              </div>

              {/* Bottom glow line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}