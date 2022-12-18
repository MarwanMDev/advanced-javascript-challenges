import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Motion from '../../animations/motion';

const MenuItem = ({ label, active, onClick }) => {
  return (
    <div
      className="text-lg font-bold cursor-pointer"
      onClick={onClick}
    >
      {label}
      <AnimatePresence>
        {active === label && (
          <Motion animation="underLine">
            <div className="bg-orange-400 h-1" />
          </Motion>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuItem;
