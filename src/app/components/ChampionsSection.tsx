import { motion, useScroll, useTransform } from 'motion/react';
import { Crown, Zap } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const champions = [
  { 
    rank: 1, 
    name: 'ALPHA_9', 
    xp: 100,
    title: 'CHAMPION',
    color: '#D4AF37',
    metalGradient: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 25%, #FFF9C4 50%, #D4AF37 75%, #B8941F 100%)',
    glowColor: 'rgba(212, 175, 55, 0.9)',
  },
  { 
    rank: 2, 
    name: 'ALPHA_4', 
    xp: 97,
    title: 'VICE CHAMPION',
    color: '#C0C0C0',
    metalGradient: 'linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 25%, #F5F5F5 50%, #C0C0C0 75%, #A8A8A8 100%)',
    glowColor: 'rgba(192, 192, 192, 0.7)',
  },
  { 
    rank: 3, 
    name: 'ALPHA_7', 
    xp: 95,
    title: 'ELITE BLADER',
    color: '#CD7F32',
    metalGradient: 'linear-gradient(135deg, #E39C5A 0%, #CD7F32 25%, #F4A460 50%, #CD7F32 75%, #B5692A 100%)',
    glowColor: 'rgba(205, 127, 50, 0.7)',
  },
  { 
    rank: 4, 
    name: 'ALPHA_20', 
    xp: 90,
    title: 'MASTER BLADER',
    color: '#8B8B8B',
    metalGradient: 'linear-gradient(135deg, #A9A9A9 0%, #8B8B8B 25%, #BEBEBE 50%, #8B8B8B 75%, #6B6B6B 100%)',
    glowColor: 'rgba(139, 139, 139, 0.6)',
  },
];

// Volumetric God Rays Component
function VolumetricRays({ count = 16, color }: { count?: number; color: string }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 left-1/2"
          style={{
            width: '3px',
            height: '150%',
            background: `linear-gradient(to top, ${color}, transparent)`,
            transformOrigin: 'bottom center',
            transform: `rotate(${(i * 180 / count) - 90}deg) translateX(-50%)`,
            filter: 'blur(3px)',
            opacity: 0.3
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}
    </>
  );
}

export function ChampionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 px-4 overflow-hidden bg-black" style={{ position: 'relative' }}>
      {/* Cyan-to-Emerald Floor Glow with 3D Perspective */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[600px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0, 255, 200, 0.3) 0%, rgba(46, 204, 113, 0.2) 40%, transparent 70%)',
        }}
      />

      {/* Massive Emerald Atmospheric Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] md:w-[1400px] md:h-[1400px] pointer-events-none"
        style={{ y }}
      >
        <div 
          className="w-full h-full rounded-full blur-[180px]"
          style={{
            background: 'radial-gradient(circle, rgba(46, 204, 113, 0.2) 0%, rgba(46, 204, 113, 0.05) 50%, transparent 100%)'
          }}
        />
      </motion.div>

      {/* Champion Gold Glow */}
      <motion.div 
        className="absolute top-[30%] md:top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        <div 
          className="w-full h-full rounded-full blur-[140px]"
          style={{
            background: `radial-gradient(circle, ${champions[0].glowColor} 0%, transparent 70%)`
          }}
        />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        style={{ opacity }}
      >
        {/* Header - MASTER BLADERS */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block px-6 py-2 rounded-full border border-[#2ECC71] bg-[rgba(46,204,113,0.1)] backdrop-blur-md"
          >
            <span className="text-[#2ECC71] font-bold tracking-widest text-sm uppercase">
              Skill Blade — Season 0
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mb-6"
          >
            <h2 
              className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.03em] relative inline-block"
              style={{
                background: 'linear-gradient(180deg, #D4AF37 0%, #FFD700 30%, #FFFFFF 50%, #FFD700 70%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 100px rgba(212, 175, 55, 0.6)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em'
              }}
            >
              MASTER BLADERS
            </h2>
          </motion.div>

          <motion.p
            className="text-xs md:text-sm tracking-[0.25em] text-gray-500 uppercase font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hall of Champions
          </motion.p>

          <motion.div 
            className="h-[2px] w-64 mx-auto mt-8 relative"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, #00FFD4, #2ECC71, #00FFD4, transparent)',
                boxShadow: '0 0 20px rgba(46, 204, 113, 0.6)'
              }}
            />
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT - Triangle Podium Formation */}
        <div className="hidden md:block">
          <div className="relative" style={{ minHeight: '1000px' }}>
            
            {/* ALPHA_9 - CENTER CHAMPION - ELEVATED */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: '0px' }}
              initial={{ opacity: 0, scale: 0.7, y: 80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.6, type: 'spring', bounce: 0.3 }}
            >
              <PodiumShieldCard champion={champions[0]} isChampion={true} />
            </motion.div>

            {/* ALPHA_4 - LEFT SILVER */}
            <motion.div
              className="absolute"
              style={{ 
                left: '8%',
                top: '180px'
              }}
              initial={{ opacity: 0, x: -150, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <PodiumShieldCard champion={champions[1]} />
            </motion.div>

            {/* ALPHA_7 - RIGHT BRONZE */}
            <motion.div
              className="absolute"
              style={{ 
                right: '8%',
                top: '180px'
              }}
              initial={{ opacity: 0, x: 150, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <PodiumShieldCard champion={champions[2]} />
            </motion.div>

            {/* ALPHA_20 - ISOLATED RANK 4 SUB-HERO CARD (120px breathing room) */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ 
                bottom: '0px',
                width: '100%',
                maxWidth: '700px'
              }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              <SubHeroCard champion={champions[3]} />
            </motion.div>
          </div>
        </div>

        {/* MOBILE LAYOUT - Single Column Vertical Stack */}
        <div className="md:hidden flex flex-col gap-8 w-full">
          {champions.map((champion, idx) => (
            <motion.div
              key={champion.rank}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="w-full"
            >
              <PodiumShieldCard 
                champion={champion} 
                isChampion={champion.rank === 1}
                isMobile={true}
              />
            </motion.div>
          ))}
        </div>

        {/* Crown Footer */}
        <motion.div
          className="mt-20 md:mt-32 text-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              y: [0, -12, 0],
              rotateZ: [0, 6, 0, -6, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="relative">
              <Crown 
                className="w-14 h-14 md:w-20 md:h-20 mx-auto" 
                style={{ 
                  color: '#D4AF37',
                  filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 1))'
                }} 
              />
              <motion.div
                className="absolute inset-0 blur-2xl"
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity
                }}
              >
                <Crown className="w-14 h-14 md:w-20 md:h-20" style={{ color: '#D4AF37' }} />
              </motion.div>
            </div>
          </motion.div>

          <p 
            className="text-sm md:text-base tracking-[0.2em] uppercase font-black px-4"
            style={{
              background: 'linear-gradient(90deg, #D4AF37, #FFD700, #FFFFFF, #FFD700, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(212, 175, 55, 0.5)'
            }}
          >
            Founding Champions Of The Arena
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Podium Shield Card Component
function PodiumShieldCard({ 
  champion, 
  isChampion = false,
  isMobile = false
}: { 
  champion: typeof champions[0]; 
  isChampion?: boolean;
  isMobile?: boolean;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(champion.xp);
    }, 800);
    return () => clearTimeout(timer);
  }, [champion.xp]);

  const cardWidth = isMobile ? '100%' : isChampion ? 360 : 320;
  const cardHeight = isMobile ? 'auto' : isChampion ? 440 : 400;

  return (
    <motion.div
      className={`relative group ${isMobile ? 'w-full' : ''}`}
      style={{
        width: isMobile ? '100%' : `${cardWidth}px`,
        minHeight: isMobile ? '400px' : `${cardHeight}px`
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.4, type: 'spring' }
      }}
    >
      {/* Volumetric God Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <VolumetricRays count={12} color={champion.glowColor} />
      </div>

      {/* Outer Glow Aura */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-50 rounded-full"
        style={{
          background: champion.glowColor
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Shield Container */}
      <div 
        className="relative backdrop-blur-xl border p-8 md:p-10 rounded-3xl overflow-hidden"
        style={{
          borderColor: champion.color,
          borderWidth: '1px',
          boxShadow: `0 0 40px ${champion.glowColor}, inset 0 0 60px rgba(0,0,0,0.5)`,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.8) 100%)'
        }}
      >
        {/* Glass Blur Effect Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${champion.color}40, transparent 70%)`
          }}
        />

        {/* Neon Border Glow Animation */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            border: `2px solid ${champion.color}`,
            opacity: 0
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.95, 1.02, 0.95]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Rank Badge */}
          <motion.div 
            className={`${isChampion ? 'w-20 h-20 mb-6' : 'w-16 h-16 mb-5'} flex items-center justify-center relative`}
            style={{
              background: champion.metalGradient,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              boxShadow: `0 0 35px ${champion.glowColor}`,
            }}
            animate={{
              rotateY: [0, 360]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <span className={`${isChampion ? 'text-4xl' : 'text-3xl'} font-black text-black`}>
              {champion.rank}
            </span>
          </motion.div>

          {/* Title */}
          <p 
            className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-black opacity-70 mb-3"
            style={{ color: champion.color }}
          >
            {champion.title}
          </p>

          {/* Name */}
          <motion.h3 
            className={`${isChampion ? 'text-4xl md:text-5xl mb-8' : 'text-3xl md:text-4xl mb-6'} font-black tracking-tight`}
            style={{
              color: isChampion ? '#D4AF37' : champion.color,
              textShadow: `0 0 25px ${champion.glowColor}`,
              WebkitTextStroke: '0.5px rgba(0,0,0,0.6)',
            }}
            animate={{
              textShadow: [
                `0 0 25px ${champion.glowColor}`,
                `0 0 45px ${champion.glowColor}`,
                `0 0 25px ${champion.glowColor}`
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity
            }}
          >
            {champion.name}
          </motion.h3>

          {/* XP Display */}
          <div className="mb-6">
            <motion.div 
              className="flex items-baseline justify-center gap-2"
              animate={{
                scale: [1, 1.08, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity
              }}
            >
              <span 
                className={`${isChampion ? 'text-6xl' : 'text-5xl'} font-black`}
                style={{
                  background: champion.metalGradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: `drop-shadow(0 0 15px ${champion.glowColor})`
                }}
              >
                {champion.xp}
              </span>
              <span className="text-sm font-black opacity-60" style={{ color: champion.color }}>
                XP
              </span>
            </motion.div>
          </div>

          {/* Energy Power Bar */}
          <div className="w-full">
            <div 
              className="relative w-full h-3 overflow-hidden rounded-full"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: `1px solid rgba(${champion.color === '#D4AF37' ? '212, 175, 55' : champion.color === '#C0C0C0' ? '192, 192, 192' : champion.color === '#CD7F32' ? '205, 127, 50' : '139, 139, 139'}, 0.3)`,
                boxShadow: `inset 0 2px 8px rgba(0,0,0,0.8)`
              }}
            >
              <motion.div 
                className="absolute inset-0 h-full rounded-full"
                style={{
                  background: champion.metalGradient,
                  boxShadow: `0 0 25px ${champion.glowColor}`
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 2, ease: 'easeOut', delay: 0.6 }}
              />
              
              <motion.div
                className="absolute inset-0 h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${champion.color}, transparent)`,
                  width: '40%'
                }}
                animate={{
                  x: ['-100%', '350%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 1.5
                }}
              />
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
              <Zap className="w-3 h-3" style={{ color: champion.color }} />
              <p className="text-[9px] tracking-[0.25em] uppercase font-black opacity-50" style={{ color: champion.color }}>
                Power Core
              </p>
              <Zap className="w-3 h-3" style={{ color: champion.color }} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Sub-Hero Card for Rank 4 (Desktop Only)
function SubHeroCard({ champion }: { champion: typeof champions[0] }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(champion.xp);
    }, 800);
    return () => clearTimeout(timer);
  }, [champion.xp]);

  return (
    <motion.div
      className="relative group"
      whileHover={{ 
        y: -10,
        transition: { duration: 0.4, type: 'spring' }
      }}
    >
      {/* Glow Aura */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-40 rounded-full"
        style={{
          background: champion.glowColor
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div 
        className="relative backdrop-blur-xl border-2 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl overflow-hidden"
        style={{
          borderColor: champion.color,
          boxShadow: `0 0 50px ${champion.glowColor}, inset 0 0 80px rgba(0,0,0,0.6)`,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(30,30,30,0.9) 100%)'
        }}
      >
        {/* Glass Blur Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${champion.color}50, transparent 70%)`
          }}
        />

        {/* Rank Badge */}
        <motion.div 
          className="w-24 h-24 flex items-center justify-center flex-shrink-0 relative z-10"
          style={{
            background: champion.metalGradient,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            boxShadow: `0 0 40px ${champion.glowColor}`
          }}
          animate={{
            rotateY: [0, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <span className="text-5xl font-black text-black">{champion.rank}</span>
        </motion.div>

        {/* Info Section */}
        <div className="flex-1 relative z-10 text-center md:text-left">
          <p 
            className="text-[10px] tracking-[0.35em] uppercase font-black opacity-70 mb-2"
            style={{ color: champion.color }}
          >
            {champion.title}
          </p>
          <h3 
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
            style={{
              color: champion.color,
              textShadow: `0 0 25px ${champion.glowColor}`,
              WebkitTextStroke: '0.5px rgba(0,0,0,0.6)'
            }}
          >
            {champion.name}
          </h3>

          {/* Power Bar */}
          <div 
            className="relative w-full h-4 overflow-hidden rounded-full border"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderColor: `${champion.color}30`,
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            <motion.div 
              className="absolute inset-0 h-full rounded-full"
              style={{
                background: champion.metalGradient,
                boxShadow: `0 0 30px ${champion.glowColor}`
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.6 }}
            />
          </div>
        </div>

        {/* XP Display */}
        <div className="flex flex-col items-center flex-shrink-0 relative z-10">
          <motion.span 
            className="text-6xl md:text-7xl font-black"
            style={{
              background: champion.metalGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: `drop-shadow(0 0 15px ${champion.glowColor})`
            }}
            animate={{
              scale: [1, 1.08, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity
            }}
          >
            {champion.xp}
          </motion.span>
          <span className="text-sm font-black opacity-60 mt-1" style={{ color: champion.color }}>
            XP
          </span>
        </div>
      </div>
    </motion.div>
  );
}