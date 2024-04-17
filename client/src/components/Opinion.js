import React from "react";
import { motion } from "framer-motion";
import crown from "../assets/crown.png";
import graphImg from "../assets/graph.png";

const Opinion = () => {
  return (
    <motion.div className="opinion_sec">
      <motion.div className="opinion">
        <motion.p>
          Let friends, family, co-workers (anonymously) rate your social skills
        </motion.p>
        <motion.h1>Ever wondered what other think of you?</motion.h1>
      </motion.div>
      <motion.div className="opinion_img">
        <motion.img src={crown} alt="crown" animate={{scale: [1.2,1,1.2], transition:{duration:2, repeat:Infinity}}} />
        <motion.div></motion.div>
        <motion.img src={crown} alt="crown" animate={{scale: [1.2,1,1.2], transition:{duration:2, repeat:Infinity}}} />
        <motion.div></motion.div>
        <motion.img src={crown} alt="crown" animate={{scale:[1.2,1,1.2], transition:{duration:2, repeat:Infinity}}} />
      </motion.div>
      <motion.div className="opinion_img" id="content">
        <motion.p> Answer Question on your social skills</motion.p>
        <motion.p>Let others anonymously answer the same questions about you</motion.p>
        <motion.p>Find out where you and other see the things the same way.</motion.p>
      </motion.div>
      <motion.div className="opinion_img" id="graph_sec">
        <motion.img src={graphImg}/>
      </motion.div>
    </motion.div>
  );
};

export default Opinion;
