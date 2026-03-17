import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Briefcase, Users, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const outcomes = [
  {
    icon: Sparkles,
    title: 'Build Real Skills',
    description: 'Learn tools like',
    bullets: ['Figma', 'Framer', 'AI design tools'],
    color: '#2ECC71',
  },
  {
    icon: Briefcase,
    title: 'Build Portfolio Fast',
    description: 'Instead of watching tutorials, you build real projects.',
    bullets: [],
    color: '#D4AF37',
  },
  {
    icon: Users,
    title: 'Join Elite Network',
    description: 'Meet',
    bullets: ['designers', 'builders', 'founders', 'inside the arena'],
    color: '#2ECC71',
  },
  {
    icon: TrendingUp,
    title: 'Unlock Opportunities',
    description: 'Top bladers gain:',
    bullets: ['recognition', 'internships', 'startup connections'],
    color: '#D4AF37',
  },
];

export function DreamOutcome() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#2ECC71]/5 via-transparent to-transparent"
        style={{ opacity }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Happens When You Become a{' '}
          <span className="text-[#2ECC71] relative">
            Blader
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2ECC71]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ scale }}
        >
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border-2 p-8 group hover:border-[#D4AF37] transition-all duration-500 overflow-hidden rounded-2xl"
              style={{ borderColor: outcome.color }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Animated glow effect */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                style={{ backgroundColor: outcome.color }}
                whileHover={{ scale: 1.5 }}
              ></motion.div>
              
              {/* Corner accent */}
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <outcome.icon 
                    className="w-12 h-12 mb-4" 
                    style={{ color: outcome.color }}
                    strokeWidth={1.5} 
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{outcome.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">{outcome.description}</p>
                
                {outcome.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {outcome.bullets.map((bullet, idx) => (
                      <motion.li 
                        key={idx}
                        className="text-sm flex items-center gap-2"
                        style={{ color: outcome.color }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: outcome.color }}></span>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom shine effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: outcome.color }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}