import { UrgencyBar } from './components/UrgencyBar';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { HeroSection } from './components/HeroSection';
import { DreamOutcome } from './components/DreamOutcome';
import { ProblemSection } from './components/ProblemSection';
import { SolutionFlow } from './components/SolutionFlow';
import { FeaturesBento } from './components/FeaturesBento';
import { PricingSection } from './components/PricingSection';
import { ProofSection } from './components/ProofSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CommunitySection } from './components/CommunitySection';
import { ChampionsSection } from './components/ChampionsSection';
import { FinalCTA } from './components/FinalCTA';
import { MasterFooter } from './components/MasterFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <UrgencyBar />
      <ScrollProgress />
      <ScrollToTop />
      <HeroSection />
      <DreamOutcome />
      <ProblemSection />
      <SolutionFlow />
      <FeaturesBento />
      <PricingSection />
      <ProofSection />
      <TestimonialsSection />
      <CommunitySection />
      <ChampionsSection />
      <FinalCTA />
      <MasterFooter />
    </div>
  );
}