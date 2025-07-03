import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import money from "../../assets/money.png";
import envelope from "../../assets/envelope.png";

const Dollar = ({ isPrizeVisible }) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="container">
      <AnimatePresence>
        {isPrizeVisible && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="z-100">
              <img
                className="block h-full w-full rounded-xl object-cover shadow-2xl mb-2"
                src={showMessage ? money.src : envelope.src}
                alt="Card"
              />
              { !showMessage && (
              <button
                type="button"
                class="mt-5 text-white hover:bg-emerald-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-emerald-800 focus:outline-none w-full shadow-2xl"
                onClick={() => setShowMessage(true)}
              >
                claim
              </button>
              )}
              { showMessage && (
                <span className="text-center max-w-[40rem] block bg-slate-50 p-5 rounded-xl mt-5 shadow-2xl text-sm">yay congrats baby 🥳 <br /> here's your prize: 2,500 bimbys big bucks — that's equivalent to ₱2,500. you can use this to buy your cariño top tomorrow, but it's up to you baby, just let me know when u wanna use it na</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dollar;
