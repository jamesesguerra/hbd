import { motion } from "framer-motion";
import "../..//styles/styles.css";
import esguerra from "../../assets/ESGUERRA.png";

const Intro = () => {

  return (
    <div>
        <h2 class="text-3xl font-bold mb-3">ur lebron year</h2>
        <p>happy 23rd birthday mahal :) i'm really happy i get to add more stuff here. i can't believe i couldn't even put much here last year considering how we are now. i couldn't even call you baby yet😀 we've come a long way and it really feels like you've been my gf for forever. </p>

        <br />

        <p>i'm</p>
        <motion.div
            className="boxx"
            initial={{ x: -300 }}
            whileInView={{ x: 1800 }}
            transition={{ duration: 2, type: "spring", stiffness: 0.5, damping: 5 }}
            viewport={{ once: true }}
        >
            <img src={esguerra.src} alt="" />
        </motion.div>
    </div>
  )
}

export default Intro