import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} CH ARMAAN. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Top</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
