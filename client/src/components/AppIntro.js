import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import flower from "../assets/flower.png";
import leaf from "../assets/leaf.png";
import ghost2 from "../assets/ghost2.png";
import crown from "../assets/crown.png";
import lightElipse from "../assets/lightElipse.png";

const AppIntro = () => {
    const ref = useRef(null);
  const view = useInView(ref);
  const controller = useAnimation();
  useEffect(() => {
    if (view) {
      controller.start("visible");
    }
  }, [view, controller]);
  return (
    <motion.div className="appIntroSec">
      <motion.div className="elementSec">
        <motion.img
          id="flower1"
          src={flower}
          alt="flower"
          animate={{ rotate: [0, 360, 360, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.img
          id="leaf3"
          src={leaf}
          alt="leaf"
          animate={{ rotate: [0, 360, 360, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
      <motion.div className="intro">
        <motion.p>Build out of frustration</motion.p>
        <motion.h1>Meet the ahead app</motion.h1>
        <motion.div className="intro_sec">
          <motion.img
            src={lightElipse}
            alt="lightElipse"
            id="lightElipse3"
            variants={{
                hidden: { rotate: -75, x: 1000 ,y:100},
                visible: {
                  rotate: -15,
                  x: -130,
                  y:-50,
                  transition: { duration: 7, type: "spring" },
                },
              }}
              animate={controller}
              initial="hidden"
              ref={ref}
          />
          <motion.div className="intro_left">
            <motion.div className="intro_left_div1">
              <motion.div className="intro_left_div2">
                <img src={ghost2} alt="" />
                <img src={crown} alt=" " id="crownDiv" />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="intro_right">
            <motion.p>
              Apersonalised pocket coach that provide bite-sized , science
              driven tools to boost emotional intelligence.
              <br />
              <br />
              Think of it as a pocket cheerleader towards a better , more
              fulfilling future.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AppIntro;
