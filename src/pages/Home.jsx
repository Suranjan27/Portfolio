import { LuArrowRight, LuDownload, LuCircuitBoard } from 'react-icons/lu';

export default function Home({ isDark }) {
  
  // New smooth scroll function instead of useNavigate
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100; // -100px offset for the navbar
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 min-h-[80vh]">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="mb-6 flex flex-col items-center lg:items-start">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-50 mb-2 section-indicator">01 / HOME</span>
            <div className={`h-px w-12 transition-all duration-700 ${isDark ? 'bg-limeAccent' : 'bg-orangeAccent'}`}></div>
          </div>

          <div className={`inline-block mb-6 md:mb-8 px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase border animate-pulse backdrop-blur-md bg-white/5 border-white/10 ${isDark ? 'text-limeAccent' : 'text-orangeAccent'}`}>
            Electronics & Communication Engineer
          </div>
          
          <h1 className="text-5xl md:text-7xl xl:text-7xl font-black tracking-tighter mb-6 md:mb-8 leading-[1.1] lg:leading-[0.9]">
            SURANJAN <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-limeAccent to-orange-400">SENGUPTA</span>
          </h1>
          
          <p className="max-w-xl text-base md:text-xl font-medium mb-10 md:mb-12 text-slate-400">
            ECE fresher driven by curiosity, learning, and building smart solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={scrollToProjects}
              className={`w-full sm:w-auto px-10 py-4 font-black rounded-full shadow-2xl transition-all duration-300 uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-2 hover:scale-105 ${isDark ? 'bg-limeAccent text-deepTeal shadow-limeAccent/20 hover:shadow-limeAccent/40' : 'bg-orangeAccent text-white shadow-orangeAccent/20 hover:shadow-orangeAccent/40'}`}
            >
              View Projects <LuArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="YOUR_DRIVE_LINK" 
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto px-10 py-4 font-black rounded-full border transition-all duration-300 uppercase tracking-widest text-[10px] md:text-xs backdrop-blur-md bg-white/5 border-white/10 text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              Download CV <LuDownload className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group scale-[0.85] xs:scale-90 lg:scale-100 transition-transform duration-700 ease-out">
            <div className="relative p-3 rounded-[3rem] border border-white/10 glass-panel-dark transition-all duration-700 hover:scale-[1.03]">
               <div className="overflow-hidden rounded-[2.5rem] w-56 h-72 md:w-72 md:h-[24rem] bg-darkTeal/20">
                  {}
                  <img 
                    src="/avatar.jpg" 
                    alt="Suranjan Sengupta Avatar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Suranjan+Sengupta&background=233D4C&color=FD802E&size=512' }}
                  />
                  {/* ------------------------- */}
               </div>
               <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-orangeAccent rounded-2xl flex items-center justify-center shadow-2xl shadow-orangeAccent/40 animate-bounce transition-all duration-500">
                  <LuCircuitBoard className="text-white w-6 h-6" />
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}