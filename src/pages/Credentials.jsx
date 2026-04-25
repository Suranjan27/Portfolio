import { LuGraduationCap, LuAward, LuCircleCheck } from 'react-icons/lu';
import { motion } from 'framer-motion';

export default function Credentials({ isDark }) {
  const glass = isDark ? 'glass-panel-dark' : 'glass-panel-light';
  const honors = [
    "Smart India Hackathon (SIH) Participant", 
    "JIS Celeb Top 25 (2025)", 
    "College Technical Lead Candidate"
  ];

  return (
    <section className="flex-grow w-full max-w-6xl mx-auto px-6 py-4">
      <div className="mb-12">
        <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-50 mb-2 section-indicator">05 / CREDENTIALS</span>
        <div className={`h-px w-12 ${isDark ? 'bg-limeAccent' : 'bg-orangeAccent'}`}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* EDUCATION CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className={`p-12 rounded-[3rem] border transition-all duration-500 ${glass} hover:scale-[1.02] flex flex-col relative overflow-hidden group ${isDark ? 'hover:shadow-[0_0_40px_-10px_rgba(243,112,30,0.2)] hover:border-limeAccent/30' : 'hover:shadow-2xl hover:border-orangeAccent/40'}`}
        >
          {/* Internal Bloom Effect - Lowered opacity for light mode so text stays readable */}
          <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[70px] opacity-0 transition-opacity duration-700 pointer-events-none ${isDark ? 'group-hover:opacity-30 bg-limeAccent' : 'group-hover:opacity-15 bg-orangeAccent'}`}></div>

          {/* Removed blurry drop-shadow in light mode for crisp visibility */}
          <LuGraduationCap className={`mb-8 w-10 h-10 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${isDark ? 'text-limeAccent drop-shadow-[0_0_12px_rgba(243,112,30,0.6)]' : 'text-orangeAccent'}`} />
          
          <h2 className="text-4xl font-black mb-8 relative z-10">Education</h2>
          
          <div className="space-y-6 relative z-10">
            <div>
              <h4 className="text-2xl font-black">B.Tech in ECE</h4>
              <p className="opacity-60 text-sm">Asansol Engineering College</p>
              <p className={`font-black mt-2 text-sm ${isDark ? 'text-limeAccent' : 'text-orangeAccent'}`}>
                2022 — 2026
              </p>
            </div>
          </div>

          <div className={`p-6 rounded-2xl border mt-auto relative z-10 transition-colors duration-500 ${isDark ? 'border-white/10 group-hover:bg-limeAccent/5 group-hover:border-limeAccent/20' : 'border-darkTeal/20 group-hover:bg-orangeAccent/10 group-hover:border-orangeAccent/30'}`}>
            <span className="font-bold uppercase tracking-widest text-[10px]">Current CGPA</span>
            <span className={`text-2xl font-black block mt-1 ${isDark ? 'text-limeAccent drop-shadow-[0_0_8px_rgba(243,112,30,0.4)]' : 'text-orangeAccent'}`}>
              6.75
            </span>
          </div>
        </motion.div>

        {/* HONORS CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
          className={`p-12 rounded-[3rem] border transition-all duration-500 ${glass} hover:scale-[1.02] relative overflow-hidden group ${isDark ? 'hover:shadow-[0_0_40px_-10px_rgba(243,112,30,0.2)] hover:border-limeAccent/30' : 'hover:shadow-2xl hover:border-orangeAccent/40'}`}
        >
          {/* Internal Bloom Effect */}
          <div className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-[70px] opacity-0 transition-opacity duration-700 pointer-events-none ${isDark ? 'group-hover:opacity-30 bg-limeAccent' : 'group-hover:opacity-15 bg-orangeAccent'}`}></div>

          <LuAward className={`mb-8 w-10 h-10 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${isDark ? 'text-limeAccent drop-shadow-[0_0_12px_rgba(243,112,30,0.6)]' : 'text-orangeAccent'}`} />
          
          <h2 className="text-4xl font-black mb-8 relative z-10">Honors</h2>
          
          <ul className="space-y-6 relative z-10">
            {honors.map((h, i) => (
              <li key={i} className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
                <LuCircleCheck className={`mt-1 w-5 h-5 flex-shrink-0 ${isDark ? 'text-limeAccent drop-shadow-[0_0_8px_rgba(243,112,30,0.5)]' : 'text-orangeAccent'}`} />
                <span className="font-bold text-lg">{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}