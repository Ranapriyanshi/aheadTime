import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const Description2 = () => {
  return (
    <motion.div className="descSec">
      <motion.div className="sections">
        <motion.h1>Be the best you with EQ</motion.h1>
      </motion.div>
      <motion.div className="sections">
        <motion.p>
          Not having your own emotions under control might be holding you back
        </motion.p>
      </motion.div>
      <motion.div className="sections">
        <motion.p>
          Additionally not understanding those of others stops you from becomming the parent, friend you could be.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Description2;
