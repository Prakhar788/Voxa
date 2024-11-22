import React from 'react';
import { motion } from 'framer-motion';

const GlowingSubtitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0.6, 1, 0.6],
        y: 0,
        textShadow: [
          '0 0 5px rgba(255, 255, 255, 0.5)', 
          '0 0 10px rgba(255, 255, 255, 0.7)', 
          '0 0 5px rgba(255, 255, 255, 0.5)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="text-white text-2xl font-light tracking-wide opacity-70 "
    >
      
    </motion.div>
  );
};

export default GlowingSubtitle;