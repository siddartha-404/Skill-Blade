import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    author: "Alpha 4",
    quote: "Skill Blade helped me a lot. Mainly competition between players and deadline timings gives us real world experience.",
    rating: 5.0
  },
  {
    author: "Alpha 7",
    quote: "Truly grateful for the opportunity. It pushed me to learn new things, stay consistent and improve myself to meet modern standards.",
    rating: 4.5
  },
  {
    author: "Alpha 19",
    quote: "Skill Blade helped me to understand landing page structure & improved my design thinking by practicing real challenges.",
    rating: 4.9
  },
  {
    author: "Sreemitha",
    quote: "Experience is just a single word for what I learned. Beyond everyone's thoughts. It's gonna change the education system.",
    rating: 5.0
  },
  {
    author: "Agent 2",
    quote: "The process of learning was superb. Learning in the form of doing tasks and competing using ai tools is really nice.",
    rating: 4.8
  },
  {
    author: "Techguy 4",
    quote: "It's simply superb. I learnt so many new things. I am feeling proud to experience Skill Blade.",
    rating: 5.0
  },
  {
    author: "Flash",
    quote: "It was good to participate. I gain more than I think I could get. Mainly time management.",
    rating: 4.9
  },
  {
    author: "Explorer",
    quote: "Skill Blade is different from others. It follows a different approach towards learning. Interesting and great to be a part of it.",
    rating: 5.0
  }
];

function PrecisionStar({ percent }: { percent: number }) {
  return (
    <div className="relative inline-block w-5 h-5">
      <Star className="w-5 h-5 text-gray-700 absolute inset-0" fill="currentColor" strokeWidth={0} />
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${percent * 100}%` }}
      >
        <Star className="w-5 h-5 text-[#2ECC71] absolute top-0 left-0" fill="currentColor" strokeWidth={0} />
      </div>
    </div>
  );
}

function RatingRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((starIndex) => {
          let percent = 0;
          if (rating >= starIndex) {
            percent = 1;
          } else if (rating > starIndex - 1) {
            percent = rating - (starIndex - 1);
          }
          return <PrecisionStar key={starIndex} percent={percent} />;
        })}
      </div>
      <div className="bg-[#D4AF37] text-black px-2 py-0.5 rounded-md text-xs font-bold shadow-[0_0_10px_rgba(212,175,55,0.4)]">
        {rating.toFixed(1)}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      // Calculate index based on scroll percentage for smoother tracking
      const scrollFraction = scrollLeft / (scrollWidth - clientWidth);
      const newIndex = Math.round(scrollFraction * (testimonials.length - 1));
      if (newIndex !== currentIndex) setCurrentIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const card = containerRef.current.querySelector('.snap-start');
      if (card) {
        const cardWidth = card.clientWidth + 24;
        containerRef.current.scrollTo({
          left: index * cardWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="relative py-12 md:py-24 px-4 overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonial <span className="text-[#2ECC71]">Arena</span>
          </motion.h2>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scrollTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="w-12 h-12 flex items-center justify-center border border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71] hover:text-black transition-all disabled:opacity-30 rounded-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollTo(currentIndex + 1)}
              disabled={currentIndex >= testimonials.length - 1}
              className="w-12 h-12 flex items-center justify-center border border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71] hover:text-black transition-all disabled:opacity-30 rounded-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container - Responsive widths */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-[#0F0F0F] border border-[#2ECC71]/30 p-6 md:p-8 relative group rounded-2xl"
            >
              <div className="absolute inset-0 bg-[#2ECC71] opacity-0 group-hover:opacity-5 blur-2xl transition-opacity rounded-2xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.author}</h3>
                    <span className="inline-block mt-1 text-[#D4AF37] text-[10px] font-bold tracking-tighter border border-[#D4AF37]/50 px-2 py-0.5 rounded-md bg-[#D4AF37]/10 uppercase">
                      Season 0 Elite
                    </span>
                  </div>
                  <Quote className="w-8 h-8 text-[#2ECC71] opacity-20" />
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 italic flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="mt-auto pt-6 border-t border-[#2ECC71]/10">
                  <RatingRow rating={testimonial.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- REFINED DOTS CHAIN (FIXED BLUR & RESPONSIVE) --- */}
        <div className="mt-8 flex justify-center py-4">
          <div className="flex items-center">
            {testimonials.map((_, idx) => (
              <div key={idx} className="flex items-center">
                {/* Progress Node */}
                <div className="relative flex items-center justify-center w-8 h-8">
                  {/* Outer Ring - Fixed Blur/Clarity issues */}
                  <motion.div
                    className="absolute rounded-full border-2"
                    initial={false}
                    animate={{
                      width: idx === currentIndex ? '32px' : '16px',
                      height: idx === currentIndex ? '32px' : '16px',
                      borderColor: idx <= currentIndex ? '#2ECC71' : 'rgba(46, 204, 113, 0.2)',
                      backgroundColor: idx === currentIndex ? 'rgba(46, 204, 113, 0.15)' : 'transparent',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                  
                  {/* Inner Solid Dot */}
                  <motion.div 
                    className="w-2 h-2 rounded-full relative z-10"
                    animate={{
                      backgroundColor: idx <= currentIndex ? '#2ECC71' : 'rgba(46, 204, 113, 0.3)',
                      scale: idx === currentIndex ? 1.4 : 1
                    }}
                  />
                </div>

                {/* Connecting Liquid Line */}
                {idx < testimonials.length - 1 && (
                  <div className="w-6 md:w-12 h-[2px] bg-gray-800/50 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-[#2ECC71]"
                      initial={false}
                      animate={{ 
                        x: idx < currentIndex ? '0%' : '-100%' 
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}