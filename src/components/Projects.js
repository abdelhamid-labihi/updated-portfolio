import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { FaJava, FaPython, FaReact, FaDocker, FaAngular } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { BiLogoTypescript, BiLogoGoLang } from "react-icons/bi";
import { TbBrandCpp, TbBrandReactNative, TbGridPattern } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { 
  SiSpring, SiExpo, SiKeycloak, SiApachekafka, SiMysql,
  SiTailwindcss, SiJsonwebtokens, SiLangchain,

} from "react-icons/si";
import { MdOutlineSoupKitchen } from "react-icons/md";



export const Projects = () => {
  //"Typescript, Spring Boot, FastAPI, React, Plasmo, Gpt4o API, JWT"
  const projects = [
    {
      title: "Vectra AI",
      description: "Project designed to simplify and personalize the job search process, offering the following functionalities: Match Score, Resume Customization, Resume Enhancement with the help of AI.",
      imgUrl: projImg1,
      techS: [
        {name: "Py", icon: <FaPython size={30}/>},
        {name: "TS", icon: <BiLogoTypescript size={30}/>},
        {name: "React", icon: <FaReact size={30}/>},
        {name: "SB", icon: <SiSpring size={30}/>},
        {name: "Plasmo", icon: "Plasmo"},
        {name: "JWT", icon: <SiJsonwebtokens size={30}/>},
      ],
      link: "https://github.com/Vectra-Project",
    },
    {
      title: "JtPay",
      description: "A mobile money transfer application with a microservices architecture, secured using Keycloak. -Internship Project-",
      imgUrl: projImg2,
      techS: [
        {name: "Java", icon: <FaJava size={30}/>},
        {name: "TS", icon: <BiLogoTypescript size={30}/>},
        {name: "ReactNative", icon: <TbBrandReactNative size={30}/>},
        {name: "SB", icon: <SiSpring size={30}/>},
        {name: "KC", icon: <SiKeycloak size={30}/>},
        {name: "Docker", icon: <FaDocker size={30}/>},
      ],
    },
    {
      title: "Enset GPT",
      description: "An AI-powered chatbot, specially designed to answer questions and provide instant information about our school (ENSET-M)",
      imgUrl: projImg3,
      techS: [
        {name: "Py", icon: <FaPython size={30}/>},
        {name: "LangC", icon: <SiLangchain size={30}/>},
        {name: "BSoup", icon: <MdOutlineSoupKitchen size={30}/>},
        {name: "FT", icon: "Fine Tuning"},
      ],
      link: "https://github.com/Issaminu/EnsetGPT",
    },
    {
      title: "E-Banking App",
      description: "A bank account management web application that manages customers, accounts and passwords, and records transactions.",
      imgUrl: projImg4,
      techS: [
        {name: "Java", icon: <FaJava size={30}/>},
        {name: "TS", icon: <BiLogoTypescript size={30}/>},
        {name: "Angular", icon: <FaAngular size={30}/>},
        {name: "SB", icon: <SiSpring size={30}/>},
        {name: "JWT", icon: <SiJsonwebtokens size={30}/>},
      ],
      link: "https://github.com/abdelhamid-labihi/E-banking-app"
    },
  ];
  const inPrgProjects = [
    {
      title: "E-commerce website",
      description: "Electronic equipments online store.",
      imgUrl: projImg5,
      techS: [
        {name: "JS", icon: <AiOutlineJavaScript size={30}/>},
        {name: "React", icon: <FaReact size={30}/>},
        {name: "TCSS", icon: <SiTailwindcss size={30}/>},
        {name: "SB", icon: <SiSpring size={30}/>},
        {name: "KC", icon: <SiKeycloak size={30}/>},
      ],
    }
  ]
  const commingProjects = [
    {
      title: "Distributed VM",
      description: "A distributed virtual machine (VM) capable of executing programs written in a basic programming language. The VM will operate in a distributed system, where multiple nodes collaborate to run a program and reach a consensus on the final output.",
      imgUrl: projImg6,
      techS: [
        {name: "Go", icon: <BiLogoGoLang size={50}/>},
        {name: "DSystems", icon: "Distributed Systems"},
      ]
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on a diverse range of academic and non-academic projects, applying a variety of technologies 
                  across web and mobile development. My experience spans front-end and back-end development, delivering user-friendly 
                  interfaces, robust functionalities, and innovative solutions. These projects have honed my skills in creating scalable, 
                  efficient applications while adapting to different technical challenges.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Done</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">In progress</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">In plan</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            inPrgProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                            {
                              commingProjects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-img"></img>
    </section>
  )
}
