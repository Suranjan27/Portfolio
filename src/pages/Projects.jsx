import { useState } from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { projects } from '../data';
import PageTransition from '../components/PageTransition';
import TiltCard from '../components/TiltCard';

export default function Projects({ isDark }) {
  const [activeTab, setActiveTab] = useState('All');
  
  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);
  const glass = isDark ? 'glass-panel-dark' : 'glass-panel-light';

  return (
    <PageTransition>
      <section className="flex-grow w-full max-w-6xl mx-auto px-6 py-4">
        <div className="mb-12">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-50 mb-2 section-indicator">02 / PROJECTS</span>
          <div className={`h-px w-12 ${isDark ? 'bg-limeAccent' : 'bg-orangeAccent'}`}></div>
        </div>

        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">PROJECTS</h2>
          <div className="h-px flex-grow bg-white/10"></div>
          <div className="flex gap-1 p-1 rounded-xl border border-white/5">
            {['All', 'Web', 'Hardware'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? (isDark ? 'bg-limeAccent text-deepTeal' : 'bg-orangeAccent text-white') : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <TiltCard 
              key={i} 
              delay={i * 0.15}
              petalColor1={isDark ? "bg-limeAccent/30" : "bg-orangeAccent/30"} 
              petalColor2={isDark ? "bg-teal-500/20" : "bg-yellow-500/20"}
            >
              <div className={`group/card relative rounded-[2.5rem] p-10 border transition-all h-full ${glass}`}>
                <div className="preserve-3d" style={{ transform: "translateZ(30px)" }}>
                  <span className={`text-[9px] font-black tracking-widest uppercase mb-4 block ${isDark ? 'text-limeAccent' : 'text-orangeAccent'}`}>{p.category}</span>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black">{p.title}</h3>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className={`p-2 rounded-xl transition-all ${isDark ? 'bg-white/10 text-limeAccent' : 'bg-orangeAccent/10 text-orangeAccent'}`}>
                        <LuExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="mb-8 max-w-sm text-sm opacity-70">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="px-3 py-1 text-[9px] font-black uppercase rounded-full border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}