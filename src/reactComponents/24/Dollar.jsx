import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import money from "../../assets/money.png";

const Dollar = ({ isPrizeVisible }) => {
  return (
    <div className="container">
      <AnimatePresence>
        {isPrizeVisible && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="">
               <img
                className="w-full h-full object-cover block rounded-lg"
                src={money.src}
                alt="Card"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dollar;