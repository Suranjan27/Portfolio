import { useState } from 'react';

// Import Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Credentials from './pages/Credentials';
import Contact from './pages/Contact';

// Import Components
import FlowingRibbon from './components/FlowingRibbon';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    // The main wrapper keeps your dark/light theme background colors
    <div className={`min-h-screen flex flex-col transition-colors duration-700 cursor-default ${isDark ? 'bg-deepTeal text-slate-200' : 'bg-cream text-darkTeal'}`}>
      
      {/* Navigation & Backgrounds */}
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <ProgressBar isDark={isDark} />
      <FlowingRibbon isDark={isDark} />
      
      {/* All sections stacked on one page */}
      <main className="flex-grow flex flex-col pt-28 md:pt-40 pb-6 space-y-32 relative z-10">
        <div id="home"><Home isDark={isDark} /></div>
        <div id="projects"><Projects isDark={isDark} /></div>
        <div id="experience"><Experience isDark={isDark} /></div>
        <div id="skills"><Skills isDark={isDark} /></div>
        <div id="credentials"><Credentials isDark={isDark} /></div>
        <div id="contact"><Contact isDark={isDark} /></div>
      </main>
      
      <Footer isDark={isDark} />
    </div>
  );
}