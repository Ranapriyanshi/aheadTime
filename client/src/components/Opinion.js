import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import crown from "../assets/crown.png";
import graphImg from "../assets/graph.png";

const Opinion = () => {
  const ref = useRef(null);
  const view = useInView(ref);
  const controller = useAnimation();
  useEffect(() => {
    if (view) {
      controller.start("visible");
    }
  }, [view, controller]);

  const crowns = () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(
        <motion.img
          src={crown}
          alt="crown"
          variants={{
            hidden: { scale: 0 },
            visible: {
              scale: 1,
              transition: { duration: 2, type: "spring" },
            },
          }}
          animate={controller}
          initial="hidden"
          ref={ref}
        ></motion.img>
      );
      if (i !== 2) arr.push(<motion.div></motion.div>);
    }
    return arr;
  };

  return (
    <motion.div className="opinion_sec">
      <motion.div className="opinion">
        <motion.p>
          Let friends, family, co-workers (anonymously) rate your social skills
        </motion.p>
        <motion.h1>Ever wondered what other think of you?</motion.h1>
      </motion.div>
      <motion.div className="opinion_img">{crowns()}</motion.div>
      <motion.div className="opinion_img" id="content">
        <motion.p> Answer Question on your social skills</motion.p>
        <motion.p>
          Let others anonymously answer the same questions about you
        </motion.p>
        <motion.p>
          Find out where you and other see the things the same way.
        </motion.p>
      </motion.div>
      <motion.div className="opinion_img" id="graph_sec">
        <motion.img src={graphImg} />
      </motion.div>
    </motion.div>
  );
};

export default Opinion;
