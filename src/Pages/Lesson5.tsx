import { motion } from "framer-motion";

const parent = {
  hidden: { scale: 0.9,x:0 },
  visible: {
    x:200,
    scale: 1,
    transition: {
      ease: "easeInOut",
      type: "tween",
      duration: 2,
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
