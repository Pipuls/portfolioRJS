import React from "react";
import "./education.css";

// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const dataEducation = [
  {
    logo: "https://i.ibb.co/614sHpj/study-udemy.jpg",
    altlogo: "Institution Logo Udemy",
    name: "Udemy",
    coursedetail: "React Js Basics to advanced. JSX, States React Modules, Render methods, Components. From static to dynamic pages",
  },
  {
    logo: "https://i.ibb.co/614sHpj/study-udemy.jpg",
    altlogo: "Institution Logo Udemy",
    name: "Udemy",
    coursedetail:
      "Front End Basics. HTML5, CSS, JavaScript, BootStrap. ",
  },
  {
    logo: "https://i.ibb.co/grWr1v5/study-ap.jpg",
    altlogo: "Institution Argentina Programa",
    name: "Ministerio de Desarrollo Productivo",
    coursedetail:
      "Full Stack jr Web Development course. Front and Back end tools. Single page application, Dinamyc web, Object oriented programming, Database, Java tecnologies, Introduction to DevOps and Testing",
  },
  {
    logo: "https://i.ibb.co/grWr1v5/study-ap.jpg",
    altlogo: "Institution Argentina Programa",
    name: "Ministerio de Desarrollo Productivo",
    coursedetail:
      "Introduction to programming. Basic knowledge and first steps to IT world. Fundamentals, imperative programming and object oriented programming.",
  },
  {
    logo: "https://i.ibb.co/1d6W75C/study-unc.jpg",
    altlogo: "Facultad de Arquitectura Urbanismo y Diseño",
    name: "Master's degree in urban planning ",
    coursedetail:
      "First year of the postgraduate course completed. UNC - Architecture Urbanism and Design University",
  },
  {
    logo: "https://i.ibb.co/1d6W75C/study-unc.jpg",
    altlogo: "Facultad de Arquitectura Urbanismo y Diseño",
    name: "Architect",
    coursedetail:
      "Degree course completed. UNC - Architecture Urbanism and Design University",
  },
];


const Education = () => {
  return (
    <section id="education">
      <h4>Path to build</h4>
      <h2>My Education</h2>
<div className="education-card-full"></div>
      <Swiper
        className="container education__container"
        // install Swiper modules
        effect={"coverflow"}
        modules={[EffectCoverflow, Navigation, Pagination]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={
          {
            0:{
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500:{
              slidesPerView: 1,
              spaceBetween: 10,
            },
            900:{
              slidesPerView: 3,
              spaceBetween: 100,
            },

          }
        }
      >
        {dataEducation.map(({ logo, altlogo, name, coursedetail }, index) => {
          return (
            <SwiperSlide className="education">
              <div className="institution__logo">
                <img src={logo} alt={altlogo} />
              </div>
              <h4 className="institution__name">{name}</h4>
              <small className="course__review">{coursedetail}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Education;
