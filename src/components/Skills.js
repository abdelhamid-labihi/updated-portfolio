import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';

// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import { FaJava, FaPython, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCpp, TbBrandReactNative, TbGridPattern } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { 
  SiSpring, SiExpo, SiKeycloak, SiApachekafka, SiMysql,
  SiMongodb

} from "react-icons/si";


import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                In addition to my diverse programming language skills, I have built a solid foundation in algorithms and problem-solving, with a deep dive into full-stack web and mobile development. I also possess some knowledge in DevOps and AI technologies.
              </p>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} className="owl-carousel owl-theme skill-slider">
                {/* First Carousel Items */}
                <div className="item">
                  <FaJava size={100} />
                  {/* <h5>Java</h5> */}
                </div>
                <div className="item">
                  <AiOutlineJavaScript size={80}/>
                  {/* <h5>JS</h5> */}
                </div>
                <div className="item">
                  <BiLogoTypescript size={100}/>
                  {/* <h5>TS</h5> */}
                </div>
                <div className="item">
                  <TbBrandCpp size={100}/>
                  {/* <h5>C/C++</h5> */}
                </div>
                <div className="item">
                  <FaPython size={100}/>
                  {/* <h5>Python</h5> */}
                </div>
                {/* Add more items as needed */}
              </Carousel>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} className="owl-carousel owl-theme skill-slider">
                {/* Second Carousel Items */}
                <div className="item">
                  <FaReact size={100}/>
                  {/* <h5>React</h5> */}
                </div>
                <div className="item">
                  <SiSpring size={100}/>
                  {/* <h5>Spring Boot</h5> */}
                </div>
                <div className="item">
                  <TbBrandReactNative size={100}/>
                  <h6>React Native</h6>
                </div>
                <div className="item">
                  <SiExpo size={100}/>
                  {/* <h5>Expo</h5> */}
                </div>
                <div className="item">
                  <SiKeycloak size={100}/>
                  {/* <h5>Keycloak</h5> */}
                </div>
                <div className="item">
                  <FaDocker size={100}/>
                  {/* <h5>Docker</h5> */}
                </div>
                <div className="item">
                  <SiApachekafka size={100}/>
                  {/* <h5>Kafka</h5> */}
                </div>
                {/* Add more items as needed */}
              </Carousel>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} className="owl-carousel owl-theme skill-slider">
                {/* Second Carousel Items */}
                <div className="item">
                  <SiMysql size={100}/>
                  {/* <h5>MySql</h5> */}
                </div>
                <div className="item">
                  <BiLogoPostgresql size={100}/>
                  {/* <h5>Postges</h5> */}
                </div>
                <div className="item">
                  <SiMongodb size={100}/>
                  {/* <h5>MongoDB</h5> */}
                </div>
                <div className="item">
                  <FaGitAlt size={100}/>
                  {/* <h5>Git</h5> */}
                </div>
                <div className="item">
                  <TbGridPattern size={100}/>
                  <h6>Design Patterns</h6>
                </div>
                <div className="item">
                  <GrServices size={100}/>
                  <h6>Microservices</h6>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  )
}
