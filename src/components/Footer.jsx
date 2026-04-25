import { LuGithub, LuLinkedin, LuTwitter } from 'react-icons/lu';

export default function Footer({ isDark }) {
  const glass = isDark ? 'glass-panel-dark' : 'glass-panel-light';
  
  return (
    <footer className={`w-full max-w-7xl mx-auto px-6 py-4 mt-6 border-t transition-all duration-700 ${isDark ? 'border-white/10' : 'border-darkTeal/10'}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
          <h3 className="text-sm font-black tracking-tighter uppercase mb-2">Let&apos;s build something.</h3>
          <p className="text-[10px] md:text-xs leading-relaxed opacity-60">
            This portfolio is a reflection of my journey as an engineer and creator.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {[
            { Icon: LuGithub, url: 'https://github.com/Suranjan27' },
            { Icon: LuLinkedin, url: 'https://www.linkedin.com/in/suranjan-sengupta-63985a221' },
            { Icon: LuTwitter, url: 'https://x.com/SuranjanSeng10' }
          ].map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noreferrer" 
               className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${glass} ${isDark ? 'text-white' : 'text-darkTeal'}`}>
              <social.Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="opacity-30 text-[8px] font-black uppercase tracking-[0.3em]">
          <span>© 2026 Suranjan Sengupta</span>
        </div>
      </div>
    </footer>
  );
}