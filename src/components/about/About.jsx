import React from "react";
import "./about.css";
import ME from "../../assets/loginbg.png";
import { FaAward, FaFolderOpen } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h4>Get to Know</h4>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about avatar" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years </small>
            </article>

            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Education</h5>
              <small>1+ years </small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
          <p>
          I am an urban architect, currently training in new technologies and 
          working on a professional change, oriented
            to Web development, with special interest in Front End. <br></br>
            My goal is to consolidate myself within the IT world. I am motivated 
            by progress and constant training. I like to contribute my knowledge 
            to find concrete solutions to real problems. <br></br>
            The initiative and innovation have always been part of my professional 
            career, so I try to develop my work based on communication, critical 
            thinking and teamwork. I Considered this a great value, to adapt myself 
            to the needs that  modern companies has, specialy in actual times dynamics. 
            .            
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
