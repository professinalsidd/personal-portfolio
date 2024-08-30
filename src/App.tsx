import AboutSection from "./pages/screens/About/About";
import CertificatesSection from "./pages/screens/Certificates/Certificates";
import ConnectWithMeSection from "./pages/screens/ConnectWithMe/ConnectWithMe";
import ContactSection from "./pages/screens/Contact/Contact";
import EducationSection from "./pages/screens/Education/Education";
import ExperienceSection from "./pages/screens/Experience/Experience";
import FooterSection from "./pages/screens/Footer/Footer";
import ProjectsSection from "./pages/screens/Projects/Projects";
import ResumeSection from "./pages/screens/Resume/Resume";
import SkillsSection from "./pages/screens/Skills/Skills";
import Navigation from "./routes/Navigation";

const App = () => {
  return (
    <div id="home">
      <Navigation />
      <div id="about-section">
        <AboutSection />
      </div>
      <div id="education-section">
        <EducationSection />
      </div>
      <div id="experience-section">
        <ExperienceSection />
      </div>
      <div id="certificates-section">
        <CertificatesSection />
      </div>
      <div id="skills-section">
        <SkillsSection />
      </div>
      <div id="projects-section">
        <ProjectsSection />
      </div>
      <div id="resume-section">
        <ResumeSection />
      </div>
      <div id="connect-section">
        <ConnectWithMeSection />
      </div>
      <div id="contact-section">
        <ContactSection />
      </div>
      <div id="footer-section">
        <FooterSection />
      </div>
    </div>
  );
};

export default App;
