import { animate, motion, useCycle } from "framer-motion";

const Lesson7 = () => {
  // UseCycle() --> Amader Ke Toggle Er Moto Kaj Korar Opportunity Dey..

  const boxShadows = [
    { x: 0, y: 0, opacity: 1 },
    { x: -100, y: 100, opacity: 0.5 },
    { x: 100, y: -100, opacity: 0.25 },
    { x: -100, y: 100, opacity: 0 },
  ];
  const [animate, cycle] = useCycle(...boxShadows);

  return (
    <div className="border border-red-500 size-[600px] flex flex-col items-center justify-center">
      <motion.div
        //   animate={{ x: x }}
        animate={animate}
        onTap={() => cycle()}
        className="bg-indigo-500 rounded-lg size-64 flex flex-col justify-center items-center gap-5 p-5 "
      ></motion.div>
    </div>
  );
};

export default Lesson7;
