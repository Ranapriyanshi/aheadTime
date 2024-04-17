import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import appStore from "../assets/appStore.png";
import star from "../assets/star.png";
import mockup from "../assets/mockupMobile.png";
import mockup2 from "../assets/mockup2.png";
import ghost1 from "../assets/ghost1.png";
import ghost2 from "../assets/ghost2.png";
import ghost3 from "../assets/ghost3.png";
import mghost1 from "../assets/mghost1.png";
import mghost4 from "../assets/mghost4.png";
import mghost6 from "../assets/mghost6.png";
import leaf from "../assets/leaf.png";
import darkelipse from "../assets/darkelipse.png";
import evileyeelipse from "../assets/evileyeelipse.png";
import lightElipse from "../assets/lightElipse.png";

const MainSec = () => {
  const stars = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(<motion.img src={star}></motion.img>);
    }
    return arr;
  };

  return (
    <motion.div className="sec-background">
      <motion.img
        src={leaf}
        className="random-back"
        id="leaf1"
        animate={{ rotate: [0, 90, 0, -90] }}
      ></motion.img>
      <motion.img
        src={evileyeelipse}
        className="random-back"
        id="evileye"
      ></motion.img>
      <motion.img src={leaf} className="random-back" id="leaf2"></motion.img>
      <motion.img
        src={darkelipse}
        className="random-back"
        id="darkElipse1"
      ></motion.img>
      <motion.img
        src={darkelipse}
        className="random-back"
        id="lightElipse2"
        animate={{ transition: { duration: 2 }, scale: [1, 1.1, 1] }}
      ></motion.img>
      <motion.img
        src={lightElipse}
        className="random-back"
        id="darkElipse2"
        animate={{ transition: { duration: 2 }, scale: [1, 1.1, 1] }}
      ></motion.img>
      <motion.div className="mainSec_left">
        <motion.p>Ahead app</motion.p>
        <motion.h1>
          Master your life <br />
          by mastering emotions
        </motion.h1>
        <motion.div className="mainSec_left-icons">
          <motion.img src={appStore}></motion.img>
          <motion.div>
            {stars()}
            <motion.p>100+ AppStore Reviews</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="mainSec_right">
        <motion.div
          className="container"
          animate={{ rotate: [0, 250], transition: { duration: 2 } }}
        >
          <motion.img
            src={ghost1}
            className="floating-img"
            id="one"
          ></motion.img>
          <motion.img
            src={mghost4}
            className="floating-img"
            id="two"
          ></motion.img>
          <motion.img
            src={ghost2}
            className="floating-img"
            id="three"
          ></motion.img>
          <motion.img
            src={mghost1}
            className="floating-img"
            id="four"
          ></motion.img>
          <motion.img
            src={ghost3}
            className="floating-img"
            id="five"
          ></motion.img>
          <motion.img
            src={mghost6}
            className="floating-img"
            id="six"
          ></motion.img>
        </motion.div>
        <motion.div className="circles" id="circle-layer2"></motion.div>
        <motion.div className="circles" id="circle-img">
          <motion.img src={mockup}></motion.img>
        </motion.div>
        <motion.div className="circles" id="circle-img">
          <motion.img src={mockup2} id="popup"></motion.img>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MainSec;
