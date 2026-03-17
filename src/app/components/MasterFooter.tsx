import { Swords, Trophy, Users, Crown } from 'lucide-react';

export function MasterFooter() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t-2 border-[#2ECC71] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Status Banner */}
        <div className="bg-[#2ECC71] text-black px-6 py-4 mb-12 border-2 border-black">
          <p className="text-center font-bold text-lg">
            🔥 SEASON 1 ACTIVE - 7 DAY TRIAL OPEN 🔥
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Swords className="w-8 h-8 text-[#2ECC71]" />
              <h3 className="text-2xl font-bold text-white">SkillBlade</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The competitive learning arena for designers and builders.
            </p>
            <p className="text-[#D4AF37] text-sm font-bold">
              Season 1 begins March 19, 2026
            </p>
          </div>

          {/* Column 2: Hall of Fame */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-[#D4AF37]" />
              <h4 className="text-lg font-bold text-white">Hall of Fame</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Founding Bladers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Top Builders
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Season Champions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Tribe Leaders
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Arena Rankings */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-[#2ECC71]" />
              <h4 className="text-lg font-bold text-white">Arena Rankings</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ECC71] transition-colors text-sm">
                  Current Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ECC71] transition-colors text-sm">
                  Tribe Standings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ECC71] transition-colors text-sm">
                  Mission Stats
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ECC71] transition-colors text-sm">
                  Battle History
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Society Network */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-white" />
              <h4 className="text-lg font-bold text-white">Society Network</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Founder Directory
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Internship Board
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Project Showcase
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Community Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 SkillBlade. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-[#2ECC71] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2ECC71] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2ECC71] transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
