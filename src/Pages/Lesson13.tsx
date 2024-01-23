import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      type: "tween",
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    y: 200,
    transition: {
      duration: 0.5,
    },
  },
};

const Lesson13 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <AnimatePresence>
        <motion.button layout onClick={() => setVisible(!visible)}>
          Toggle
        </motion.button>
        {visible && (
          <motion.div
            variants={parent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-indigo-500 rounded-lg size-64 flex flex-wrap justify-center items-center gap-5 p-5 "
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson13;
