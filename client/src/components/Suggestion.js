import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ghost1 from "../assets/ghost1.png";

const Suggestion = () => {
  const ref = useRef(null);
  const view = useInView(ref);
  const controller = useAnimation();
  useEffect(() => {
    if (view) {
      controller.start("visible");
    }
  }, [view, controller]);
  const list = [
    {
        title: "How to get started with self-improvement",
        description:
            "Self-improvement is a journey. Here are some tips to get you started.",
        },
        {
        title: "How to set goals for self-improvement",
        description:
            "Setting goals is an important part of self-improvement. Here's how to do it.",
        },
        {
        title: "How to stay motivated during self-improvement",
        description:
            "Staying motivated is key to success. Here are some tips to help you stay on track.",
        },
        {
        title: "How to measure progress in self-improvement",
        description:
            "Tracking your progress is important. Here's how to measure your success.",
        },
  ]

  return (
    <motion.div className="suggestions">
      <motion.p>
        Wring with self-improvement and, how we are fixing it.
      </motion.p>
      <motion.div className="title">
        <motion.h1
          variants={{
            hidden: { rotate: 0, x: -200 },
            visible: {
              x: -100,
              transition: { duration: 2, type: "spring" },
            },
          }}
          animate={controller}
          initial="hidden"
          ref={ref}
        >
          Self Improvement.Ugh
        </motion.h1>
        <motion.img
          src={ghost1}
          variants={{
            hidden: { rotate: -75, x: 1000 },
            visible: {
              rotate: 15,
              x: -90,
              transition: { duration: 5, type: "spring" },
            },
          }}
          animate={controller}
          initial="hidden"
          ref={ref}
        />
      </motion.div>
      <motion.div className="lists">
        {list.map((item) => (
          <motion.div className="suggestionList">
            <motion.h4>{item.title}</motion.h4>
            <motion.p>{item.description}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Suggestion;
