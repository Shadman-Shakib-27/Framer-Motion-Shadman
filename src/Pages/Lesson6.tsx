import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Lesson6 = () => {
  // useAnimateControlls ()--> Kono Element Ke Onno Ekta Element Diye Trigger Korate Use Hoy..
  const controlls = useAnimationControls();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    controlls.start((i) => ({ x: 200, transition: { delay: i * 2 } }));
  }, []);

  //   const handleToggle = () => {
  //     setToggle(!toggle);
  //     if (toggle) {
  //       controlls.start({ x: 200 });
  //     } else {
  //       controlls.start({ x: -200 });
  //     }
  //   };

  return (
    <div
      onMouseEnter={() => controlls.stop()}
      onMouseLeave={() =>
        controlls.start(() => ({ x: 0}))
      }
      className="border border-red-500 size-[600px] flex flex-col items-center justify-center"
    >
      {/* <button
        onClick={handleToggle}
        className="bg-green-500 px-3 py-2 rounded-md mb-10 "
      >
        Forward
      </button> */}
      <motion.div
        animate={controlls}
        custom={1}
        className="bg-indigo-500 rounded-lg size-64 flex flex-col justify-center items-center gap-5 p-5 "
      ></motion.div>
      <motion.div
        animate={controlls}
        custom={2}
        className="bg-indigo-500 rounded-lg size-64 flex flex-col justify-center items-center gap-5 p-5 "
      ></motion.div>
      <motion.div
        animate={controlls}
        custom={3}
        className="bg-indigo-500 rounded-lg size-64 flex flex-col justify-center items-center gap-5 p-5 "
      ></motion.div>
    </div>
  );
};

export default Lesson6;
