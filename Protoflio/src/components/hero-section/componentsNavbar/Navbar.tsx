import React from "react";
import "./Navbar.scss";
import { motion } from "motion/react";
// import type { animate } from "motion";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="wrapper">
        <motion.h2
          initial={{ opacity: 0, scale: .5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 1, delay: 0.5 }
          }
        >My Portfolio</motion.h2>
        <div className="NavbarSocial">
          <a href="https://www.facebook.com/khald.blatt" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/khaledabosaeed" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/khaled.s.balata/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/YOUR-PROFILE" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div >
  );
}

export default Navbar;