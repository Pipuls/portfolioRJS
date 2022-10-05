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
    coursedetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores delectus eos officiis, non unde dolore harum inventore possimus atque minus sit, velit dolores ad et nobis dignissimos totam minima!",
  },
  {
    logo: "https://i.ibb.co/614sHpj/study-udemy.jpg",
    altlogo: "Institution Logo Udemy",
    name: "Udemy",
    coursedetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores delectus eos officiis, non unde dolore harum inventore possimus atque minus sit, velit dolores ad et nobis dignissimos totam minima!",
  },
  {
    logo: "https://i.ibb.co/grWr1v5/study-ap.jpg",
    altlogo: "Institution Logo Udemy",
    name: "Ministerio de Desarrollo Productivo",
    coursedetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores delectus eos officiis, non unde dolore harum inventore possimus atque minus sit, velit dolores ad et nobis dignissimos totam minima!",
  },
  {
    logo: "https://i.ibb.co/grWr1v5/study-ap.jpg",
    altlogo: "Institution Logo Udemy",
    name: "Ministerio de Desarrollo Productivo",
    coursedetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores delectus eos officiis, non unde dolore harum inventore possimus atque minus sit, velit dolores ad et nobis dignissimos totam minima!",
  },
  {
    logo: "https://i.ibb.co/1d6W75C/study-unc.jpg",
    altlogo: "Facultad de Arquitectura Urbanismo y Diseño",
    name: "Udemy",
    coursedetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores delectus eos officiis, non unde dolore harum inventore possimus atque minus sit, velit dolores ad et nobis dignissimos totam minima!",
  },
  {
    logo: "https://i.ibb.co/1d6W75C/study-unc.jpg",
    altlogo: "Facultad de Arquitectura Urbanismo y Diseño",
    name: "Udemy",
    coursedetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores delectus eos officiis, non unde dolore harum inventore possimus atque minus sit, velit dolores ad et nobis dignissimos totam minima!",
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
