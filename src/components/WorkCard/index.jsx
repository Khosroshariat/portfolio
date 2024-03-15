import { useEffect, useState } from "react";
import "./style.css";
import TextWriting from "../TextWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeText from "../FadeText";

export default function TechCard({ item }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);
  const delay = 0;

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const opacityVariants = {
    hidden: { opacity: 0, mixBlendMode: "color-dodge" },
    visible: { opacity: 1, mixBlendMode: "normal" },
  };

  const lineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        type: "spring",
        stiffness: 20,
        duration: 2,
        delay: delay,
      },
    },
  };

  return (
    <div ref={ref} className="workCard">
      <div className="workCard--head">
        <h3>
          <TextWriting
            delay={delay}
            nocursor
            controls={controls}
            stagger={0.08}
            text={item.title}
          />
        </h3>
        <div className="flex space-x-8">
          <motion.a
            href={item.git}
            target="_blank"
            className="work--a"
            initial="hidden"
            animate={controls}
            variants={opacityVariants}
            transition={{ duration: 2, delay: 0.5 }}
            onAnimationComplete={() => handleComplete()}
          >
            <img src="/github.png" className="work--icon" alt="" />
          </motion.a>
          <motion.a
            href={item.web}
            target="_blank"
            className="work--a"
            initial="hidden"
            animate={controls}
            variants={opacityVariants}
            transition={{ duration: 2, delay: 0.5 }}
            onAnimationComplete={() => handleComplete()}
          >
            <img src="/Link.png" className="work--icon" alt="" />
          </motion.a>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={lineVariants}
        className="workCard--line"
      ></motion.div>

      <div className="workCard--body">
        <motion.span
          initial="hidden"
          animate={controls}
          variants={opacityVariants}
          transition={{ duration: 2, delay: 0.5 }}
          onAnimationComplete={() => handleComplete()}
        >
          <img src={item.img} alt="" />
        </motion.span>
        <h1>
          {item.tech}
        </h1>

        <p>
          <FadeText controls={controls} delay={delay}>
            {item.detail}
          </FadeText>
        </p>
        <div></div>

      </div>
    </div>
  );
}
