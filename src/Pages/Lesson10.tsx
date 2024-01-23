import { motion, useDragControls } from "framer-motion";

const Lesson10 = () => {
  const controlls = useDragControls();

  return (
    <div className="border border-red-500 size-[600px] flex flex-col items-center justify-center">
      <motion.div
        onPointerDown={(e) => controlls.start(e)}
        className="bg-green-500 rounded-lg size-10 h-10 flex flex-col justify-center items-center gap-5 p-5 "
      ></motion.div>
      <motion.div
        drag
        dragControls={controlls}
        className="bg-indigo-500 rounded-lg size-64 flex flex-col justify-center items-center gap-5 p-5 "
      ></motion.div>
    </div>
  );
};

export default Lesson10;
