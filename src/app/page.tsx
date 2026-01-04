import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/ContactSection"; 
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <div id="home">
        <HeroSection />
      </div>

      <div id="about" className="scroll-mt-20"> 
        <AboutSection />
      </div>

      <div id="projects" className="scroll-mt-20">
        <ProjectsSection />
      </div>

      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
    </main>
  );
}