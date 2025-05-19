import { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import messages from '~/data/2025/messages';


const Masonry = () => {
    const [showOverlays, setShowOverlays] = useState([]);

     useEffect(() => {
        setShowOverlays(new Array(messages.length).fill(false));
    }, [messages.length]);

    const toggleOverlay = (index) => {
        setShowOverlays(prev =>
            prev.map((val, i) => (i === index ? !val : val))
        );
    };

  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
            {messages.slice(0, 3).map((message, index) => (
                 <div
                    className="relative shadow-lg cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform"
                    onClick={() => toggleOverlay(index)}
                >
                    <img
                        className="w-full h-full object-cover block rounded-lg"
                        src={message.imageUrl}
                        alt="Card"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showOverlays[index] ? 0.85 : 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute inset-0 bg-black flex items-center justify-center text-white text-xl font-semibold pointer-events-none"
                    >
                        { showOverlays[index] && <p>{ message.message }</p>}
                    </motion.div>
                </div>
            ))}
        </div>


        <div class="grid gap-4">
           {messages.slice(3, 6).map((message, index) => (
                 <div
                    className="relative shadow-lg cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform"
                    onClick={() => toggleOverlay(index + 3)}
                >
                    <img
                        className="w-full h-full object-cover block rounded-lg"
                        src={message.imageUrl}
                        alt="Card"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showOverlays[index + 3] ? 0.85 : 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute inset-0 bg-black flex items-center justify-center text-white text-xl font-semibold pointer-events-none"
                    >
                        { showOverlays[index + 3] && <p>{ message.message }</p>}
                    </motion.div>
                </div>
            ))}
        </div>

        <div class="grid gap-4">
            {messages.slice(6, 9).map((message, index) => (
                 <div
                    className="relative shadow-lg cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform"
                    onClick={() => toggleOverlay(index + 6)}
                >
                    <img
                        className="w-full h-full object-cover block rounded-lg"
                        src={message.imageUrl}
                        alt="Card"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showOverlays[index + 6] ? 0.85 : 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute inset-0 bg-black flex items-center justify-center text-white text-xl font-semibold pointer-events-none"
                    >
                        { showOverlays[index + 6] && <p>{ message.message }</p>}
                    </motion.div>
                </div>
            ))}
        </div>
        
        <div class="grid gap-4">
            {messages.slice(9, 12).map((message, index) => (
                 <div
                    className="relative shadow-lg cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform"
                    onClick={() => toggleOverlay(index + 9)}
                >
                    <img
                        className="w-full h-full object-cover block rounded-lg"
                        src={message.imageUrl}
                        alt="Card"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showOverlays[index + 9] ? 0.85 : 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute inset-0 bg-black flex items-center justify-center text-white text-xl font-semibold pointer-events-none"
                    >
                        { showOverlays[index + 9] && <p>{ message.message }</p>}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Masonry