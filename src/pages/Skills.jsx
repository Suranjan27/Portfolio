import { LuTerminal, LuGlobe, LuCpu, LuLayers } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { skillGroups } from '../data';

const iconMap = { globe: LuGlobe, cpu: LuCpu, layers: LuLayers, terminal: LuTerminal };

export default function Skills({ isDark }) {
  const glass = isDark ? 'glass-panel-dark' : 'glass-panel-light';

  return (
    <section className="flex-grow w-full max-w-6xl mx-auto px-6 py-4">
      <div className="mb-12">
        <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-50 mb-2 section-indicator">04 / SKILLS</span>
        <div className={`h-px w-12 ${isDark ? 'bg-limeAccent' : 'bg-orangeAccent'}`}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Terminal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">TECH STACK</h2>
          <p className="opacity-60 mb-6">Expertise across software and embedded systems.</p>
          
          <div className="p-8 rounded-[2rem] border font-mono text-[10px] bg-black/40 border-white/5 backdrop-blur-xl">
            <LuTerminal className={`mb-4 w-5 h-5 ${isDark ? 'text-limeAccent' : 'text-orangeAccent'}`} />
            <p className="text-slate-300">&gt; loading_profile: Suranjan</p>
            <p className="text-slate-300">&gt; status: open_to_internships</p>
            <p className="text-slate-300">&gt; location: Asansol, IN</p>
            <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className={`h-full w-[85%] ${isDark ? 'bg-limeAccent' : 'bg-orangeAccent'}`}></div>
            </div>
          </div>
        </motion.div>

        {/* Skill Groups */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((s, i) => {
            const IconComponent = iconMap[s.icon] || LuTerminal;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, type: "spring", bounce: 0.4 }}
                className={`p-8 rounded-[2rem] border transition-all ${glass} hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-limeAccent/10 text-limeAccent' : 'bg-orangeAccent/10 text-orangeAccent'}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="font-black uppercase tracking-widest text-[10px]">{s.cat}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map(it => (
                    <div key={it} className="px-4 py-2 rounded-xl text-[10px] font-bold border border-white/10">
                      {it}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}