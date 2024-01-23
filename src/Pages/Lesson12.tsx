import { motion, useScroll } from "framer-motion";

const Lesson12 = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="bg-green-500 h-2 w-full top-0 fixed"
    ></motion.div>
  );
};

export default Lesson12;
