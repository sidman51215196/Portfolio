// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import IntroductionSection from './components/IntroductionSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <IntroductionSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;