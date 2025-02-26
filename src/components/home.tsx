import HeroSection from "./HeroSection";
import ContactForm from "./ContactForm";
import BenefitsSection from "./BenefitsSection";
import CustomerFeedback from "./CustomerFeedback";
import ProcessFlow from "./ProcessFlow";
import ArchitectureProjects from "./ArchitectureProjects";
import InteriorProjects from "./InteriorProjects";
import ConstructionVisit from "./ConstructionVisit";
import VideoReview from "./VideoReview";
import RegisterSection from "./RegisterSection";
import WhyChooseBetaviet from "./WhyChooseBetaviet";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Contact Form */}
      <div className="relative">
        <HeroSection />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[400px]">
          <ContactForm />
        </div>
      </div>

      {/* Main Content in requested order */}
      <WhyChooseBetaviet />
      <CustomerFeedback />
      <ProcessFlow />
      <ArchitectureProjects />
      <InteriorProjects />
      <ConstructionVisit />
      <BenefitsSection />
      <VideoReview />
      <AboutUs />
      <RegisterSection />
    </div>
  );
}

export default Home;
