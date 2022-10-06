import React from "react";
import { Instagram, Github, Twitter, Linkedin } from "../data/Icons";
import "./socialicons.css";


const SocialIcons = () => {
  return (
    <div class="social-content">
      <div class="social-link">
        <a
          href="https://www.instagram.com/germanico_83"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          <Instagram />
        </a>
      </div>
      <div class="social-link">
        <a href="https://twitter.com/ArqGermanRico" class="link">
          <Twitter />
        </a>
      </div>

      <div class="social-link">
        <a
          href="https://github.com/Pipuls"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          <Github />
        </a>
      </div>

      <div class="social-link">
        <a
          href="https://www.linkedin.com/in/arqgerm%C3%A1nrico/"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
