import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Lesson8 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref,{once:true});//Ekbar Trigger Hobe.

  return (
    <div className="border border-red-500 size-[600px] flex items-center justify-center">
      <motion.div
        className="bg-indigo-500 rounded-lg size-64 flex flex-col justify-center items-center gap-5 p-5 "
        ref={ref}
        animate={
          inView ? { opacity: 1, scale: 1.5 } : { opacity: 0, scale: 0.2 }
        }
      ></motion.div>
    </div>
  );
};

export default Lesson8;
