import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import "../index.css";
import ghost1 from "../assets/ghost3.png";

const Scenarios = () => {
  const slideRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: slideRef,
  });
  const ref = useRef(null);
  const view = useInView(ref);
  const controller = useAnimation();
  useEffect(() => {
    if (view) {
      controller.start("visible");
    }
  }, [view, controller]);

  const scroll = useTransform(scrollYProgress, [0, 1], ["-100%", "50%"]);
  const scenes = [
    {
      emoji: "😫",
      mainText: "You argue with a colleague",
      decription:
        "You get angry and defensive, instead of staying open and working towards the common ground.",
      backgorund: "tilecolor1",
    },
    {
      emoji: "🙄",
      mainText: "You got promotion at work",
      decription:
        "You question yourself and wonder when they will realise you are an unqualifies imposter , instead of trusting yourself ans your abilities.",
      backgorund: "tilecolor2",
    },
    {
      emoji: "😳",
      mainText: "You attend a class reunioun",
      decription:
        "You compare yourself with your peers achievements, instead of celebrating your own success and growth.",
      backgorund: "tilecolor3",
    },
    {
      emoji: "🫨",
      mainText: "Equable with your partner",
      decription:
        "Because of them doing that thing you always do that! Instead of being calm and addressing their concern.",
      backgorund: "speicaltilecolor",
    },
    {
      emoji: "😫",
      mainText: "You argue with a colleague",
      decription:
        "You get angry and defensive, instead of staying open and working towards the common ground.",
      backgorund: "tilecolor2",
    },
    {
      emoji: "😫",
      mainText: "You argue with a colleague",
      decription:
        "You get angry and defensive, instead of staying open and working towards the common ground.",
      backgorund: "tilecolor3",
    },
    {
      emoji: "🙄",
      mainText: "You got promotion at work",
      decription:
        "You question yourself and wonder when they will realise you are an unqualifies imposter , instead of trusting yourself ans your abilities.",
      backgorund: "tilecolor1",
    },
    {
      emoji: "😳",
      mainText: "You attend a class reunioun",
      decription:
        "You compare yourself with your peers achievements, instead of celebrating your own success and growth.",
      backgorund: "tilecolor2",
    },
  ];
  return (
    <motion.div className="scenarioSec">
      <motion.div className="title">
        <motion.h1>Does this sound familier...</motion.h1>
        <motion.img
          src={ghost1}
          variants={{
            hidden: { rotate: -75, x: 1000 },
            visible: {
              rotate: -15,
              x: 0,
              transition: { duration: 5, type: "spring" },
            },
          }}
          animate={controller}
          initial="hidden"
          ref={ref}
        />
      </motion.div>
      <motion.div className="scenarios" ref={slideRef} style={{ x: scroll }}>
        {scenes.map((scene) => (
          <motion.div className="scene" id={scene.backgorund}>
            <motion.h1>{scene.emoji}</motion.h1>
            <motion.h4>{scene.mainText}</motion.h4>
            <motion.p>{scene.decription}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Scenarios;
