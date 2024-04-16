import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <motion.div className="navbar">
      <div className="navbar_left-logo">
        <motion.img src={logo} alt="logo" />
      </div>
      <motion.ul className="navbar_right">
        <li>Emotions
        </li>
        <li>Manifesto
        </li>
        <li>Self-Awareness test 
        </li>
        <li>Work With Us
        </li>
      </motion.ul>
      <div>
        <motion.button whileTap={{scale: 0.9}} className="download_btn">Download App</motion.button>
      </div>
    </motion.div>
  );
};

export default Navbar;
