import { motion } from "framer-motion";
import "../..//styles/styles.css";
import lbj from "../../assets/lbj.png";

const Intro = () => {

  return (
    <div>
        <p>happy 23rd birthday mahal :) Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci hic mollitia consectetur officia, veniam rem qui reprehenderit vitae cupiditate voluptas corrupti quae cum atque magni natus sunt. Quis, tempore.
        Doloremque cupiditate unde minima rerum, ut consectetur molestias magnam corrupti fugit excepturi. Ducimus sint, pariatur recusandae at magni, accusamus quis eum nostrum unde, itaque id maiores? Tenetur itaque esse odit!
        Natus eius commodi asperiores, aperiam eos tempora ipsum itaque repudiandae amet a. Perspiciatis vitae aliquam velit dolorem, commodi totam, voluptatem praesentium at repellendus voluptate omnis nisi ipsa?
        Facilis accusamus ut necessitatibus tempore voluptatibus sit quis, temporibus veritatis rem, commodi obcaecati vero! Cumque voluptatem minima iure suscipit similique quos fugiat earum aperiam tempora in atque, sequi exercitationem quo.</p>
        <motion.div
            className="boxx"
            initial={{ x: -300 }}
            whileInView={{ x: 1800 }}
            transition={{ duration: 6, type: "spring", stiffness: 2, damping: 5 }}
            viewport={{ once: true }}
        >
            <img src={lbj.src} alt="" />
        </motion.div>
    </div>
  )
}

export default Intro