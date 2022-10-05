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
            Soy arquitecto urbanista, formandome en el desarrollo de nuevas
            tecnologías. Actualmente en proceso de cambio profesional, orientado
            al desarrollo Web, con especial interés en Front End, mi objetivo es
            consolidarme dentro del mundo IT. Me motiva el progreso y la
            capacitación constante. Me gusta aportar mis conocimientos para
            encontrar resoluciones concretas a problemas reales. La iniciativa e
            innovación siempre han formado parte de mi carrera profesional, por
            lo que, trato de desarrollar una metodología de trabajo basada en la
            comunicación, pensamiento critico y el trabajo en equipo. Considero
            ésto de gran valor, para adaptarme a las necesidades que las
            empresas modernas necesitan dadas las dinámicas cambiantes de los
            tiempos actuales.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
