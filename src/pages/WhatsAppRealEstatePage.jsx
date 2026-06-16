import HeroSection from '../components/whatsapp-real-estate/HeroSection/HeroSection';
import CampaignStudioSection from '../components/whatsapp-real-estate/CampaignStudioSection/CampaignStudioSection';
import BroadcastFeaturesSection from '../components/whatsapp-real-estate/BroadcastFeaturesSection/BroadcastFeaturesSection';
import AIAgentSection from '../components/whatsapp-real-estate/AIAgentSection/AIAgentSection';
import CRMDashboardSection from "../components/whatsapp-real-estate/CRMDashboardSection/CRMDashboardSection";
import HowItWorksSection from "../components/whatsapp-real-estate/HowItWorksSection/HowItWorksSection";
import FeaturesGridSection from "../components/whatsapp-real-estate/FeaturesGridSection/FeaturesGridSection";
import UseCasesSection from "../components/whatsapp-real-estate/UseCasesSection/UseCasesSection";
import FinalCTASection from "../components/whatsapp-real-estate/FinalCTASection/FinalCTASection";
import EvaluatingSection from "../components/whatsapp-real-estate/EvaluatingSection/EvaluatingSection";
import WhyChooseSection from "../components/whatsapp-real-estate/WhyChooseSection/WhyChooseSection";

const WhatsAppRealEstatePage = () => {
  return (
    <main className="wre-page">
      <HeroSection />
      <CampaignStudioSection />
      <BroadcastFeaturesSection />
      <AIAgentSection />
      <CRMDashboardSection />
      <HowItWorksSection />
      <FeaturesGridSection />
      <UseCasesSection />
      <FinalCTASection />
      <EvaluatingSection />
      <WhyChooseSection />

    </main>
  );
};

export default WhatsAppRealEstatePage;