import { motion, useCycle } from "framer-motion";
import "../../styles/styles.css";
import lbj from "../../assets/lbj.png";
import { useState, useEffect } from "react";


const Motion = () => {
  const [x, setx] = useState([0, 100, 0]);
  const [y, sety] = useState(0)
  const [rotate, setrotate] = useState(0)

  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 90 },
    { scale: 1.50, rotate: 180 },
  )

  const handleClick = () => {
    
  }

  return (
    <div>
      <motion.div
        className="box"
        whileHover={{ scale: 0.01, transition: { ease: "easeOut", duration: 0.3 } }}
      />
      <button onClick={handleClick} className="g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded-full">pLEASE</button>
      <motion.div
        className="box"
        animate={{ rotate: [0, 180] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="box"
        animate={{ backgroundColor: ["#0af", "rgba(0,0,0,0)", "#fa0"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="box"
        whileTap={{ rotate: 90, scale: 0.75 }}
      />

      <motion.div
        className="box"
        animate={animate}
        onTap={cycle}
      />

      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="lbj-box"
        initial={{ x: -300 }}
        whileInView={{ x: 1800 }}
        transition={{ duration: 3, type: "spring", stiffness: 5, damping: 5 }}
        viewport={{ once: true }}
      >
        <img src="https://www.kindpng.com/picc/m/245-2450170_lebron-james-arms-in-the-air-lebron-arms.png" alt="lbj" />
      </motion.div>

      <motion.div
        className="boxx"
        initial={{ x: -300 }}
        whileInView={{ x: 1800 }}
        transition={{ duration: 4, type: "spring", stiffness: 2, damping: 5 }}
        viewport={{ once: true }}
      >
        <img src={lbj.src} alt="" />
      </motion.div>
    </div>
  )
}

export default Motion