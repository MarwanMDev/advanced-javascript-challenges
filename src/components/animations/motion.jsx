import React from 'react';
import { motion } from 'framer-motion';
import ANIMATIONS from './animations.config';

const Motion = ({ children, animation, className }) => {
  return (
    <motion.div className={className} {...ANIMATIONS[animation]}>
      {children}
    </motion.div>
  );
};

export default Motion;
