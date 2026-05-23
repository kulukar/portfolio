import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/heroSection";
import MarqueeSection from "@/components/sections/marqueeSection";
import SelectedWorks from "@/components/sections/selectedWorksSection";
import AboutSection from "@/components/sections/aboutSection";
import FooterSection from "@/components/sections/footerSection";
import FloatingScrollButton from "@/components/ui/floatingScrollButton";
import ArchiveSection from "@/components/sections/archiveSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <SelectedWorks />
      <ArchiveSection />
      <AboutSection />
      <FooterSection />
      <FloatingScrollButton />
    </main>
  );
}
