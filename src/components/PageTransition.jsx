import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="flex-grow pt-28 md:pt-40 pb-6 flex flex-col"
    >
      {children}
    </motion.main>
  );
}