import { motion, useMotionValue, useTransform } from "framer-motion";

const Lesson11 = () => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-200, 200], [0.5, 1]);

  return (
    <div className="border border-red-500 size-[600px] flex flex-col items-center justify-center">
      <motion.div
        style={{ x, opacity }}
        drag
        dragConstraints={{left:0,right:0}}
        dragSnapToOrigin
        className="bg-indigo-500 rounded-lg size-64 flex flex-col justify-center items-center gap-5 p-5 "
      ></motion.div>
    </div>
  );
};

export default Lesson11;
