import { AnimatePresence, motion } from "framer-motion";

import "./style.css";

const Alert = () => {
  const translateVariants = {
    initial: { translateY: "100%", opacity: 0, translateX: "-50%" },
    animate: { translateY: "-40%", opacity: 1, translateX: "-50%" },
    exit: { translateY: "-100%", opacity: 0, translateX: "-50%" },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="alert"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1.5 }}
        variants={translateVariants}
      >
        <span className="flex items-center justify-center text-sky-700 gap-2">
          <img src="/email.png" width={30} />
          Message sent!
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
