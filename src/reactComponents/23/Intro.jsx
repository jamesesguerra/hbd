import { motion } from "framer-motion";
import "../..//styles/styles.css";
import esguerra from "../../assets/ESGUERRA.png";
import { fireConfetti } from "~/helpers/confetti-service";

const Intro = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-3">ur <span onClick={fireConfetti} data-modal-target="clue-4" data-modal-toggle="clue-4">lebron</span> year</h2>
        <p>happy 23rd birthday mahal :) i'm really happy i get to add more stuff here. i can't believe i couldn't even put much here last year considering how we are now. i couldn't even call you baby yet😀 we've come a long way and it really feels like you've been my gf for forever</p>

        <br />

        <p>i feel really grateful na i got to spend another year with you. i know you haven't been feeling good about yourself these past few weeks and it's valid. i understand why you feel that way and the environment you're in almost every day doesn't help also. but i still stand by what i say na you're the smartest most amazing person to me. if you mean what you say na you look up to me the most, then you should also believe na i wouldn't ask just anyone to be my gf and wife. there's a reason why you're the only one who's made me fall in love like this, who's made me do stuff na i never even thought i'd do for any girl before.</p>

        <br />

        <p>from our first few times talking palang, i could already tell how smart you are. to me the position you're in right now is cos of unfortunate events but it doesn't mean you're not smart / not good at anything. the thought that you're not smart enough to pursue med / careers you really want never even crossed my mind cos i've thought really highly about you from the start palang. there's nothing i'd wish to change about you and if there's anything i could wish it's for you to see yourself through my eyes. i'm really soso proud you're my gf to the point where i'd wanna see my parents / relatives just to show off how lucky i am with you. i just always want you to remember that there's always someone who believes in you more than anything & anyone</p>

        <br />

        <p>i really wish i could do something about the parts of your life that make you sad. it pains me that i'm not in the position to do much right now, but i'll always be with you to go through every feeling together, both good and bad. i just want you to wait a bit more.
        </p>

        <br />
        <p>thank you baby for everything you do for me and for us. there's no one else i'd rather be in this with than you. i love you more each day and i'll love you forever mahal</p>
        {/* <motion.div
            className="boxx"
            initial={{ x: -300 }}
            whileInView={{ x: 1800 }}
            transition={{ duration: 2, type: "spring", stiffness: 0.5, damping: 5 }}
            viewport={{ once: true }}
        >
            <img src={esguerra.src} alt="" />
        </motion.div> */}
    </div>
  )
}

export default Intro