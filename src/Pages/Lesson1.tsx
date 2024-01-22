import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const child = {
   hidden: { opacity: 0, scale: 0.1 },
   visible: { opacity: 1, scale: 1 },
 };
 
const Lesson1 = () => {
  return (
    <div>
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          type: "tween",
          duration: 2,
          delayChildren:0.5,
          staggerChildren:0.5
          //  repeat: Infinity,
          //  repeatType: "reverse"
        }}
        className="bg-indigo-500 rounded-lg size-64 flex flex-wrap justify-center items-center gap-5 p-5 "
      >
        <motion.div variants={child} className="bg-cyan-400 size-20 rounded-sm"></motion.div>
        <motion.div variants={child} className="bg-cyan-400 size-20 rounded-sm"></motion.div>
        <motion.div variants={child} className="bg-cyan-400 size-20 rounded-sm"></motion.div>
        <motion.div variants={child} className="bg-cyan-400 size-20 rounded-sm"></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson1;
