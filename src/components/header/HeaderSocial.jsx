import React from "react";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
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
        href="https://github.com/Pipuls"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/arqgerm%C3%A1nrico/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocial;
