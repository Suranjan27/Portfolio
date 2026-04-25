import { motion, useScroll, useTransform } from 'framer-motion';

// Stable FontAwesome icons for standard languages
import { 
  FaReact, FaJs, FaNodeJs, FaPython, FaGithub, FaHtml5, FaCss3Alt 
} from 'react-icons/fa';

// Simple Icons for specific framework brands
import { 
  SiTailwindcss, SiCplusplus, SiFramer, SiArduino, SiVite 
} from 'react-icons/si';

export default function FlowingRibbon({ isDark }) {
  const { scrollYProgress } = useScroll();

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scrollShift = useTransform(scrollYProgress, [0, 1], [0, -800]);

  // Safely mixed Tech Stack Icons
  const techStack = [
    FaReact, FaJs, SiTailwindcss, FaNodeJs, 
    FaPython, SiCplusplus, SiFramer, FaGithub, 
    FaHtml5, FaCss3Alt, SiArduino, SiVite
  ];

  const floatingIcons = [...techStack, ...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ y: yParallax, x: scrollShift }}
        className="absolute top-1/3 left-0 w-[400vw] md:w-[300vw] h-[60vh] -translate-y-1/2 opacity-50 md:opacity-60"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="w-full h-full flex items-center relative"
        >
          
          {/* --- THE GLOWING RIBBON SVG --- */}
          <svg viewBox="0 0 2000 200" className="w-full h-full overflow-visible absolute inset-0" preserveAspectRatio="none">
            <defs>
              <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isDark ? "#f3701e" : "#4b607f"} stopOpacity="0" />
                <stop offset="20%" stopColor={isDark ? "#f3701e" : "#4b607f"} stopOpacity="1" />
                <stop offset="80%" stopColor={isDark ? "#f3701e" : "#4b607f"} stopOpacity="1" />
                <stop offset="100%" stopColor={isDark ? "#f3701e" : "#4b607f"} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 C250,250 250,-50 500,100 C750,250 750,-50 1000,100 C1250,250 1250,-50 1500,100 C1750,250 1750,-50 2000,100"
              fill="none" stroke="url(#ribbonGrad)" strokeWidth="2" className="opacity-50"
            />
            <path
              d="M0,100 C250,200 250,0 500,100 C750,200 750,0 1000,100 C1250,200 1250,0 1500,100 C1750,200 1750,0 2000,100"
              fill="none" stroke={isDark ? "#f3701e" : "#4b607f"} strokeWidth="6"
              className={isDark ? "drop-shadow-[0_0_20px_rgba(243,112,30,0.6)]" : "drop-shadow-[0_0_20px_rgba(75,96,127,0.4)]"}
            />
          </svg>

          {/* --- THE FLOATING SKILL LOGOS --- */}
          <div className="w-full absolute flex items-center justify-around px-20">
            {floatingIcons.map((Icon, i) => {
              const size = i % 2 === 0 ? 'w-8 h-8 md:w-12 md:h-12' : 'w-6 h-6 md:w-8 md:h-8';
              const duration = 3 + (i % 4);
              const yOffset = i % 2 === 0 ? [-20, 20, -20] : [20, -20, 20];

              return (
                <motion.div
                  key={i}
                  animate={{ y: yOffset }}
                  transition={{ duration: duration, repeat: Infinity, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <Icon 
                    className={`${size} opacity-40 transition-all ${
                      isDark 
                        ? 'text-limeAccent drop-shadow-[0_0_15px_rgba(243,112,30,0.8)]' 
                        : 'text-orangeAccent drop-shadow-[0_0_15px_rgba(75,96,127,0.8)]'
                    }`} 
                  />
                </motion.div>
              )
            })}
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
}