import React from "react";
import "./footer.css";
import SocialIcons from "../assets/SocialIcons";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        germanico
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <SocialIcons/>        
      </div>
      <div className="footer__copyright">
        <small>Germanico @ 2022. &copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
