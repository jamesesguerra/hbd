import React from 'react'
import "../styles/styles.css";
import { motion } from "framer-motion";

const Sample = () => {
  return (
    <div className="example-container">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>
  )
}

export default Sample