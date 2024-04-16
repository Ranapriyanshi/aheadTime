import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const Description = () => {
  return (
    <motion.div className="descSec">
      <motion.div className="sections">
        <motion.h1>EQ beats IQ</motion.h1>
      </motion.div>
      <motion.div className="sections">
        <motion.p>
          People with high Emotional Intellegence(EQ) live more fulfilled lives.
          They tend to be happier and have healthier relationships.
        </motion.p>
      </motion.div>
      <motion.div className="sections">
        <motion.p>
          They are more successful in their persuits and are better equipped to
          handle life's challenges.According to studies, they earn $29k a year.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Description;
