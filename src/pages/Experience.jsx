import { LuBriefcase, LuExternalLink } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { experiences } from '../data'; 

export default function Experience({ isDark }) {
  const glass = isDark ? 'glass-panel-dark' : 'glass-panel-light';

  return (
    <section className="flex-grow w-full max-w-4xl mx-auto px-6 py-4">
      <div className="mb-12">
        <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-50 mb-2 section-indicator">03 / EXPERIENCE</span>
        <div className={`h-px w-12 ${isDark ? 'bg-limeAccent' : 'bg-orangeAccent'}`}></div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">EXPERIENCE</h2>
        <p className="opacity-60">My professional internships and industry involvement.</p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.2, type: "spring", bounce: 0.4 }}
            className={`p-10 rounded-[2.5rem] border flex flex-col md:flex-row gap-8 items-start transition-all ${glass} hover:scale-[1.01]`}
          >
            <div className={`p-4 rounded-2xl shadow-xl flex-shrink-0 ${isDark ? 'bg-limeAccent text-deepTeal' : 'bg-orangeAccent text-white'}`}>
              <LuBriefcase className="w-6 h-6" />
            </div>
            <div className="w-full">
              <span className={`text-[9px] font-black tracking-widest uppercase ${isDark ? 'text-limeAccent' : 'text-orangeAccent'}`}>
                {exp.date}
              </span>
              <div className="flex items-center justify-between mt-2 mb-1">
                <h4 className="text-2xl font-black">{exp.company}</h4>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer" className={`p-2 rounded-xl transition-all ${isDark ? 'bg-white/10 text-limeAccent' : 'bg-orangeAccent/10 text-orangeAccent'}`}>
                    <LuExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="font-bold text-xs opacity-60 mb-4">{exp.role}</p>
              <p className="text-sm opacity-70">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}