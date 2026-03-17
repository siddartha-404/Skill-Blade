import { motion } from 'motion/react';
import { Check, Crown, Flame } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Choose Your <span className="text-[#D4AF37]">Blade</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Blader */}
          <motion.div
            className="relative bg-[#1a1a1a] border-2 border-[#2ECC71] p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 7-Day Free Trial Sticker */}
            <div className="absolute -top-3 -right-3 bg-[#2ECC71] text-black px-4 py-2 font-bold text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
              7-Day Free Trial
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-10 h-10 text-[#2ECC71]" />
              <h3 className="text-3xl font-bold text-white">Basic Blader</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">₹159</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#2ECC71] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Access to Tribe system</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#2ECC71] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Full Season access</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#2ECC71] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Stage 1 + 2 missions</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#2ECC71] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Arena duels participation</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#2ECC71] mt-1 flex-shrink-0" />
                <span className="text-gray-300">21-day cycle structure</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#2ECC71] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Leaderboard tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#2ECC71] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Community access (Discord)</span>
              </div>
            </div>

            <button className="w-full bg-[#2ECC71] text-black py-4 px-6 font-bold text-lg hover:bg-[#27ae60] transition-colors border-2 border-[#2ECC71] rounded-xl">
              Start Free Trial
            </button>
          </motion.div>

          {/* Founding Blader */}
          <motion.div
            className="relative bg-[#1a1a1a] border-4 border-[#D4AF37] p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Only 60 Available Sticker */}
            <div className="absolute -top-3 -right-3 bg-[#D4AF37] text-black px-4 py-2 font-bold text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
              Only 60 Available
            </div>

            {/* Gold glow */}
            <div className="absolute inset-0 bg-[#D4AF37] opacity-10 blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-10 h-10 text-[#D4AF37]" />
                <h3 className="text-3xl font-bold text-[#D4AF37]">Founding Blader</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-[#D4AF37]">₹499</span>
                  <span className="text-gray-400">Lifetime</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300 font-bold">Everything in Basic Blader</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-[#D4AF37]">Lifetime access</strong> - pay once, learn forever
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-[#D4AF37]">Founding Role</strong> in Discord
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Priority Founder Chat access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Early access to new features</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-[#D4AF37]">Society Network</strong> - founders, internships, projects
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Special Gold Rank Card</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Hall of Fame listing</span>
                </div>
              </div>

              <button className="w-full bg-[#D4AF37] text-black py-4 px-6 font-bold text-lg hover:bg-[#c9a332] transition-colors border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] rounded-xl">
                Claim Founding Blade
              </button>
            </div>
          </motion.div>
        </div>

        {/* FOMO Line */}
        <motion.p
          className="text-center text-[#D4AF37] font-bold text-xl mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ⚠ Only 60 founding blades will ever exist.
        </motion.p>
      </div>
    </section>
  );
}