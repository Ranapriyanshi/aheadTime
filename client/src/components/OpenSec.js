import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const OpenSec = () => {
  const ref = useRef(null);
  const view = useInView(ref);
  const controller = useAnimation();
  useEffect(() => {
    if (view) {
      controller.start("visible");
    }
  }, [view, controller]);
  
  return (
    <motion.div
      className="openSec"
      variants={{
        hidden: { rotate: 0, z: -300 , scale: 0.5 },
        visible: {
          z: 0,
          scale: 0.9,
          transition: { duration: 2, type: "spring" },
        },
      }}
      animate={controller}
      initial="hidden"
      ref={ref}
    >
      <motion.p>We take privacy seriously</motion.p>
      <motion.h1>Before you get Started</motion.h1>
      <motion.p>
        "We won't share your answers with anyone and (won't tell you which
        friend said what about you)
      </motion.p>
      <motion.h5>With love, Team ahead</motion.h5>
    </motion.div>
  );
};

export default OpenSec;
