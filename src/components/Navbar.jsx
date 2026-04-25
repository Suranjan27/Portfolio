import { useState, useEffect } from 'react';
import { LuSun, LuMoon, LuMenu, LuX } from 'react-icons/lu';

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Credentials', id: 'credentials' },
  ];

  // Scroll Spy & Navbar Shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine which section is currently in view
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[60] pt-4 md:pt-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`flex items-center justify-between px-5 py-3 md:px-6 md:py-3 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 backdrop-blur-2xl ${isDark ? 'bg-black/30 border-white/10 shadow-black/50 text-white' : 'bg-white/40 border-white shadow-lg text-darkTeal'} ${isScrolled ? 'shadow-2xl' : ''}`}>
          
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-black transition-transform duration-300 group-hover:scale-110 shadow-xl ${isDark ? 'bg-limeAccent text-deepTeal shadow-limeAccent/40' : 'bg-orangeAccent text-white shadow-orangeAccent/40'}`}>S</div>
            <span className="font-black tracking-[0.2em] uppercase text-xs md:text-sm block group-hover:translate-x-1 transition-transform duration-300">Suranjan</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl ${activeSection === link.id ? (isDark ? 'text-limeAccent bg-limeAccent/10' : 'text-orangeAccent bg-orangeAccent/10') : (isDark ? 'text-slate-400 hover:text-white' : 'text-darkTeal/60 hover:text-darkTeal')}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="ml-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl shadow-xl hover:scale-105 active:scale-95 ${activeSection === 'contact' ? 'opacity-0 pointer-events-none' : (isDark ? 'bg-limeAccent text-deepTeal' : 'bg-orangeAccent text-white')}`}
              >
                Get in Touch
              </button>
            </div>
            
            <div className={`h-4 w-px mx-4 ${isDark ? 'bg-white/10' : 'bg-darkTeal/20'}`}></div>
            <button onClick={toggleTheme} className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${isDark ? 'hover:bg-white/5 text-limeAccent' : 'hover:bg-black/5 text-orangeAccent'}`}>
              {isDark ? <LuSun /> : <LuMoon />}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleTheme} className={`p-2 transition-transform active:scale-90 ${isDark ? 'text-limeAccent' : 'text-orangeAccent'}`}>
              {isDark ? <LuSun /> : <LuMoon />}
            </button>
            <button className="transition-all duration-300 active:scale-90 relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`absolute top-full left-4 right-4 mt-4 p-6 md:p-8 border rounded-[1.5rem] backdrop-blur-3xl shadow-2xl flex flex-col gap-6 md:hidden z-[55] ${isDark ? 'bg-deepTeal/95 border-white/10 text-white' : 'bg-white/95 border-darkTeal/10 text-darkTeal'}`}>
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-2xl font-black text-left uppercase tracking-tighter transition-all ${activeSection === link.id ? (isDark ? 'text-limeAccent' : 'text-orangeAccent') : ''}`}
            >
              {link.name}
            </button>
          ))}
          <div className={`h-px w-full ${isDark ? 'bg-white/10' : 'bg-darkTeal/10'}`}></div>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`py-4 rounded-2xl font-black uppercase tracking-widest text-xs ${isDark ? 'bg-limeAccent text-deepTeal' : 'bg-orangeAccent text-white'}`}
          >
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
}