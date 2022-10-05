import React, { useRef } from 'react';
import "./contact.css";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
/* emailjs*/
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_udfxjvh', 'template_8nn64aj', form.current, 'YwssSY1nyQeOFhHBk')
      e.target.reset()
  };
  
  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__opiton">
            <BsMessenger className="contact__opiton-icon"/>
            <h3>Instagram Msg</h3>
            <h5>@germanico_83</h5>
            <a
              href="https://ig.me/germanico_83"
              target="_blank"
              rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__opiton">
            <IoLogoWhatsapp className="contact__opiton-icon" />
            <h3>WhatsApp Msg</h3>
            <h5>Germán Rico</h5>
            <a
              href="https://wa.me/+5493512407562"
              target="_blank"
              rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your full name" required/>
          <input type="email" name="email" placeholder="Enter your Email" required/>
          <textarea name="message" rows="10" placeholder="Enter your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message <BiMailSend/></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
