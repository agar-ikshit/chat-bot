import React from 'react';
import { motion } from 'framer-motion';
import './ads.css';

const Ads = () => {
  return (
    <motion.div 
      className="ads-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2 className='h2-ads'>Printer Ads</h2>
      <motion.div 
        className="ad"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h3>Printer 1</h3>
        <p>Ads</p>
      </motion.div>
      <motion.div 
        className="ad"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <h3>Printer 2</h3>
        <p>Ads</p>
      </motion.div>
     
    </motion.div>
  );
};

export default Ads;
