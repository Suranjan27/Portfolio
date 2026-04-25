import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Notice we added a new 'delay' prop here to stagger the cards!
export default function TiltCard({ children, petalColor1, petalColor2, delay = 0 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const petalX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const petalY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      /* --- ENTRANCE "BLOOM" ANIMATION --- */
      initial={{ opacity: 0, scale: 0.7, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay, type: "spring", bounce: 0.4 }}
      /* ---------------------------------- */
      
      className="relative group w-full perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Blooming Petals */}
      <motion.div 
        style={{ x: petalX, y: petalY }} 
        className={`absolute w-40 h-40 -top-10 -left-10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 ${petalColor1}`} 
      />
      <motion.div 
        style={{ x: petalX, y: petalY }} 
        className={`absolute w-32 h-32 -bottom-5 -right-5 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 ${petalColor2}`} 
      />

      {/* 3D Content Container */}
      <motion.div 
        style={{ rotateX, rotateY }} 
        className="w-full [transform-style:preserve-3d] relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}