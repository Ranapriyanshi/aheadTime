import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import "../index.css";

const Navbar = () => {
  const navLinks = [
    { title: "Emotions" },
    { title: "Manifesto" },
    { title: "Self-Awareness test" },
    { title: "Work With Us" },
  ];
  return (
    <motion.div className="navbar">
      <motion.div className="navbar_left-logo">
        <motion.img
          src={logo}
          alt="logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1, x:0 }}
          transition={{ type: "spring", duration: 1 }}
        />
      </motion.div>
      <motion.ul
        className="navbar_right"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        {navLinks.map((link, index) => (
          <motion.li key={index}>{link.title}</motion.li>
        ))}
      </motion.ul>
      <div>
        <motion.button whileTap={{ scale: 0.9 }} className="download_btn">
          Download App
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Navbar;
