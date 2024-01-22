import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      type: "tween",
      duration: 2,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 5,
    },
  },
  tap: {
    scale: 1.1,
    rotate: 45,
  },
};

const Lesson3 = () => {
  return (
    <div>
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => console.log("Hover Start..")}
        onHoverEnd={() => console.log("Hover Ended..")}
        className="bg-indigo-500 rounded-lg size-64 flex flex-wrap justify-center items-center gap-5 p-5 "
      ></motion.div>
    </div>
  );
};

export default Lesson3;
