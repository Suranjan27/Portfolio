import { useEffect, useRef, useState } from 'react';
import { LuSend, LuDownload } from 'react-icons/lu';
import { motion } from 'framer-motion';

// Notice we added { isDark } here so it knows which theme is active!
export default function Contact({ isDark }) {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);

  // We only need state for the toast message now!
  const [toastMessage, setToastMessage] = useState('');

  // --- Canvas Particle Logic ---
  useEffect(() => {
    // Only apply the dark gradient theme if dark mode is active
    if (isDark) {
      document.body.classList.add('contact-theme');
    } else {
      document.body.classList.remove('contact-theme');
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      setParticles(prev => [...prev, {
        x: e.clientX, y: e.clientY,
        vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 1, life: 1,
        color: Math.random() > 0.5 ? '243, 112, 30' : '75, 96, 127' // Your new Orange & Slate Blue
      }]);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setParticles(prev => prev.map(p => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, life: p.life - 0.015 })).filter(p => p.life > 0));
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.life * 0.4})`; ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      document.body.classList.remove('contact-theme');
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, isDark]);

  // --- WEB3FORMS SUBMIT LOGIC ---
  const onSubmit = async (event) => {
    event.preventDefault();
    setToastMessage("Sending message..."); 
    
    const formData = new FormData(event.target);
    formData.append("access_key", "86389d98-6217-4167-aa5c-36d96122c8d6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setToastMessage("Success! Your message has been sent.");
        event.target.reset(); 
      } else {
        setToastMessage("Error: Could not send message.");
      }
    } catch (error) {
      setToastMessage("Network error. Please try again.");
      console.error(error);
    }
    
    setTimeout(() => setToastMessage(''), 4000); 
  };

  // Dynamic styles for the input boxes based on theme
  const inputStyle = `w-full px-6 py-4 rounded-2xl border text-sm focus:outline-none transition-all resize-none ${
    isDark 
      ? 'bg-white/5 border-white/10 text-white focus:border-limeAccent placeholder:text-white/20' 
      : 'bg-black/5 border-darkTeal/20 text-darkTeal focus:border-limeAccent placeholder:text-darkTeal/50'
  }`;

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-10" />
      
      {/* Toast Notification */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-2xl bg-orangeAccent text-white font-black uppercase tracking-widest text-[10px] shadow-2xl pointer-events-none transition-all duration-500 ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {toastMessage}
      </div>

      <section className="flex-grow w-full max-w-4xl mx-auto px-6 py-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl mx-auto px-4 py-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.7, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className={`backdrop-blur-[25px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rounded-[3rem] p-10 md:p-14 flex flex-col gap-8 relative z-50 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'}`}
          >
            <div>
              <span className={`text-[10px] font-black tracking-[0.3em] uppercase opacity-50 block mb-1 ${isDark ? 'text-white' : 'text-darkTeal'}`}>06 / GET IN TOUCH</span>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-darkTeal'}`}>COMPOSE MAIL</h2>
            </div>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="text" name="name" required placeholder="Your Name" className={inputStyle} />
              <input type="email" name="email" required placeholder="Your Email" className={inputStyle} />
              <input type="text" name="subject" required placeholder="Enter Subject" className={inputStyle} />
              <textarea name="message" required rows="4" placeholder="Your Message" className={inputStyle}></textarea>
              
              <div className="flex flex-col gap-3">
                <button type="submit" className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl ${isDark ? 'bg-limeAccent text-deepTeal shadow-limeAccent/20' : 'bg-limeAccent text-white shadow-limeAccent/30'}`}>
                  Submit <LuSend className="w-4 h-4" />
                </button>
                <a href="YOUR_CV_LINK_HERE" target="_blank" rel="noreferrer" className={`w-full py-4 border rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-colors ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-darkTeal/20 text-darkTeal hover:bg-black/5'}`}>
                  <LuDownload className="w-4 h-4" /> Download My CV
                </a>
              </div>
            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
}