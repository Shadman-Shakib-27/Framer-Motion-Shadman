import { motion } from "framer-motion";
import { useRef } from "react";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.6,
    scale: 1,
    transition: {
      ease: "easeInOut",
      type: "tween",
      duration: 0.5,
    },
  },
  hover: {
    opacity: 1,
  },
  tap: {
    scale: 1.1,
    boxShadow: "0px 10px 10px #000",
  },
  whileDrag: {
    scale: 1.1,
    boxShadow: "0px 10px 10px #000",
  },
};

const Lesson4 = () => {
  const parentRef = useRef(null);

  return (
    <div ref={parentRef} className="border border-red-500 size-[500px]">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => console.log("Hover Start..")}
        onHoverEnd={() => console.log("Hover Ended..")}
        drag
        // dragConstraints={{left:200,right:200 etc.}}
        dragConstraints={parentRef}
        dragElastic={0.7}
        dragSnapToOrigin={true}
        whileDrag="whileDrag"
        className="bg-indigo-500 rounded-lg size-64 flex flex-wrap justify-center items-center gap-5 p-5 "
      ></motion.div>
    </div>
  );
};

export default Lesson4;
