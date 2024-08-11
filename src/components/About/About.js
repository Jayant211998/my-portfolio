import React from "react";
import "./about.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { styled } from "@mui/material";

const settings = {
  showArrows: true,
  autoPlay: true,
  showDots: false,
  infiniteLoop: true,
  showThumbs: true,
  showStatus: true,
  interval: 3000,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: false,
  emulateTouch: true,
  axis: "horizontal",
};
const About = () => {
  const carouselRef = React.useRef(null);

  const onClickNextHandler = () => {
    carouselRef.current.next();
  };

  const onClickPrevHandler = () => {
    carouselRef.current.prev();
  };
  const nextButton = (onClickNextHandler, label) => (
    <button
      onClick={onClickNextHandler}
      title={"Next"}
      className="carousal-button"
    >
      Next
    </button>
  );

  const prevButton = (onClickPrevHandler, label) => (
    <button
      onClick={onClickPrevHandler}
      title={"Prev"}
      className="carousal-button"
    >
      Prev
    </button>
  );

  return (
    <section id="about">
      <span className="title">Experience</span>
      <div className="details">
        <p>
          I have about two years of working experience in different technologies
          like React, Node, Postgresql, Python, Data Science, Machine Learning
          and ELK.
        </p>
        <br />
        <div className="experience">
          <div className="slider-container">
            <CustomCarousel
              {...settings}
              ref={carouselRef}
              renderArrowPrev={prevButton}
              renderArrowNext={nextButton}
            >
              <div className="companyWrapper">
                <div className="company">
                  <h2>SoftOps Technologies</h2>
                  <h3>Software Engineer </h3>
                  <p>(February 2024 - Present)</p>
                  <br />
                  <ul>
                    <li>
                      <p>MDC:</p>
                      <ul>
                        <li>
                          Created the entire login/signup flow for three types
                          of users.
                        </li>
                        <li>
                          Enhanced multiple pages to ensure mobile
                          responsiveness.
                        </li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      <p>Pet Hotel:</p>
                      <ul>
                        <li>
                          Developed the day care service flow and multiple room
                          flow.
                        </li>
                        <li>Integrated map functionality using Leaflet.</li>
                        <li>
                          Integrated CSV download option for downloading
                          reservation data.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="companyWrapper">
                <div className="company">
                  <h2>Tata Consultancy Service</h2>
                  <h3>Systems Engineer </h3>
                  <p>(August 2021 - January 2024)</p>
                  <br />
                  <ul>
                    <li>
                      I developed a Nodejs, Reactjs, and Postgres-based project
                      called Learning Module for creating employee courses. I
                      have developed Admin and Batches modules, handling course
                      and roles assignments for individuals and groups.
                    </li>
                    <br />
                    <li>
                      I am presently engaged in an IBM project, where my focus
                      involves assessing API endpoints across various
                      applications. This enables users to seamlessly engage with
                      APIs, granting them access to data from diverse
                      applications and create an interaction between different
                      usecases.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="companyWrapper">
                <div className="company">
                  <h2>Consultadd</h2>
                  <h3>Associate Software Developer Intern </h3>
                  <p>(January 2021 - May 2021)</p>
                  <br />
                  <br />
                  <br />
                  <ul>
                    <li>
                      Developed a dashboard using React for administration.
                    </li>
                    <li>
                      I have also worked on Elasticsearch, Logstash and Kibana.
                      In one of my assignments I have created an AWS cluster
                      with ELK.
                    </li>
                    <li>
                      I have also worked on postman to test the backend API's
                      and integrated them in React code.
                    </li>
                  </ul>
                </div>
              </div>
            </CustomCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const CustomCarousel = styled(Carousel)(({ theme }) => ({
  "& .button": {
    color: "white",
  },
  "& .control-arrow": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    opacity: 1,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
  },
  "& .control-arrow::before": {
    borderColor: theme.palette.primary.main,
  },
  "& .control-prev.control-arrow": {
    left: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  "& .control-next.control-arrow": {
    right: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  "& .carousel carousel-slider": {
    display: "flex",
  },
}));
