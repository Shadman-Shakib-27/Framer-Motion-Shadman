import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const Lesson9 = () => {
  const [scope, animate] = useAnimate(); //Scope Like As Ref

  useEffect(() => {
    // Array Of Array Ney Animate
   //  ref.current --> Required Element Er Access Dey.
    animate([
      [scope.current, { opacity: 1.5 }],
      [scope.current, { opacity: 1.25 }],
      [scope.current, { opacity: 0.5 }],
      [scope.current, { opacity: 0.25 }],
      [scope.current, { opacity: 1.5 }],
      [scope.current, { opacity: 0 }],
    ]);
  }, []);

  return (
    <div className="border border-red-500 size-[600px] flex items-center justify-center">
      <motion.div
        ref={scope}
        className="bg-indigo-500 rounded-lg size-64 flex flex-col justify-center items-center gap-5 p-5 "
      ></motion.div>
    </div>
  );
};

export default Lesson9;
