import React from "react";
import "./footer.css";
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

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
        <a
          href="https://www.instagram.com/germanico_83"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://twitter.com/ArqGermanRico"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/arqgerm%C3%A1nrico/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Pipuls"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>Germanico @ 2022. &copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
