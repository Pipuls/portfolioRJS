import React from "react";
import "./portfolio.css";

// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const dataProjects = [
  {
    id: 1,
    image: "https://i.ibb.co/GPrHX86/fsj-portfolio.png",
    altimg: "Portfolio AP",
    title: "Personal Web Portfolio - Argentina Programa",
    github: "https://github.com",
    demo: "https://portfolioapger.web.app/",
  },
  {
    id: 2,
    image: "https://i.ibb.co/cxLRvh8/fsj-empmanagerpng.png",
    altimg: "Empleados Cards",
    title: "Employer List - Full Stack App",
    github: "https://github.com",
    demo: "https://empleadomanagerfend.firebaseapp.com/",
  },
  {
    id: 3,
    image: "https://i.ibb.co/ggcjWw0/2-About-me.png",
    altimg: "Lupe Arte Web",
    title: "Lupe Arte Web - Learning Web",
    github: "https://github.com",
    demo: "https://helpful-blancmange-d9ff7e.netlify.app/",
  },
  {
    id: 4,
    image: "https://i.ibb.co/YhTcdph/rymapp.png",
    altimg: "Rick y Morty App",
    title: "Rick y Morty App - React Js",
    github: "https://github.com",
    demo: "https://papaya-frangipane-2decf1.netlify.app",
  },
  {
    id: 5,
    image: "https://i.ibb.co/B2xTVLx/amazon-Clone.png",
    altimg: "Amazon Clone",
    title: "Amazon Product Detail Clone - React Js",
    github: "https://github.com",
    demo: "https://frolicking-moxie-8bb0c4.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>
      <Swiper
        className="container portfolio__container mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {dataProjects.map(({ id, image, altimg, title, github, demo }) => {
          return (
            <SwiperSlide className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={altimg} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
