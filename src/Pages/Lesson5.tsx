import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: {
    x: [0, 200, -200, 0],
    y: [0, 200, -200, 0],
    rotate: [0, 200, -200, 0],
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 2,
      repeat: Infinity,
      opacity: {
        duration: 0.2,
      },
      rotate: {
        delay: 1,
        repeat: Infinity,
      },
    },
  },
};

const Lesson5 = () => {
  return (
    <div className="border border-red-500 size-[500px]">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        className="bg-indigo-500 rounded-lg size-64 flex flex-wrap justify-center items-center gap-5 p-5 "
      ></motion.div>
    </div>
  );
};

export default Lesson5;
