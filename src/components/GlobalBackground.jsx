import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlobalBackground({ isDark }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const gridColor = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)';
  const gridStyle = {
    backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
      {/* Heavy blur to create a smooth ambient glassmorphism glow */}
      <div className="absolute inset-0 backdrop-blur-[100px] z-10"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 z-20 transition-colors duration-1000" style={gridStyle}></div>

      {/* Mouse Tracking Orb */}
      <motion.div
        animate={{ 
          x: mousePos.x - 200, 
          y: mousePos.y - 200,
          scale: isMouseDown ? 0.7 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 2 }}
        className={`absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 md:opacity-30 blur-[80px] transition-colors duration-500 ${
          isMouseDown 
            ? (isDark ? 'bg-limeAccent' : 'bg-orangeAccent') 
            : (isDark ? 'bg-orangeAccent' : 'bg-limeAccent')
        }`}
      />

      {/* Top Left Animated Orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-20 md:opacity-30 blur-[80px] transition-colors duration-1000 ${
          isDark ? 'bg-limeAccent' : 'bg-orangeAccent'
        }`}
      />
      
      {/* Bottom Right Animated Orb */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -80, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20 md:opacity-30 blur-[80px] transition-colors duration-1000 ${
          isDark ? 'bg-white/10' : 'bg-darkTeal'
        }`}
      />

      {/* Animated Vignette Shadow */}
      <motion.div 
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-30 pointer-events-none transition-colors duration-1000"
        style={{
          background: isDark 
            ? 'radial-gradient(circle at center, transparent 30%, rgba(0, 39, 43, 0.85) 100%)' 
            : 'radial-gradient(circle at center, transparent 30%, rgba(254, 250, 205, 0.85) 100%)'
        }}
      />
    </div>
  );
}