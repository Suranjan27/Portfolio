import { useState, useEffect } from 'react';

export default function ProgressBar({ isDark }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the user has scrolled as a percentage
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const maxScroll = documentHeight - windowHeight;
      const percentage = (scrollTop / maxScroll) * 100;
      
      setScrollPercentage(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 md:bottom-8 right-4 md:right-6 pointer-events-none z-40 hidden md:flex flex-col items-end gap-2">
      <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Progress</span>
      <div className={`w-32 h-1.5 rounded-full overflow-hidden backdrop-blur-md transition-colors duration-500 ${isDark ? 'bg-white/10' : 'bg-darkTeal/10'}`}>
        <div 
          className={`h-full transition-all duration-150 ease-out ${isDark ? 'bg-limeAccent shadow-[0_0_10px_#E0FF4F]' : 'bg-orangeAccent shadow-[0_0_10px_#FD802E]'}`}
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}