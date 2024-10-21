import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.PNG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ResumePDF from '../assets/img/Abdelhamid-LABIHI-Resume.pdf';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "FullStack Developer", "Competitive Programmer", "Problem Solver" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const scrollToConnect = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio!</span>
                <h1>{`Hi! I'm Abdelhamid`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                <p>
                  As a final-year software engineering student at <a href="https://enset-media.ac.ma" target="_blank" rel="noopener noreferrer">ENSET-M</a>, I have built a solid foundation in full-stack web and mobile development, primarily using <span className="important-message">{`{Spring, React, and React Native}`}</span>. With expertise across various programming languages and frameworks, I am well-prepared to take on complex software projects. My passion lies in creating high-performing, user-friendly applications that deliver both efficiency and a seamless user experience. <br/>
                  <div className="important-message">I am seeking a final study internship -PFE- opportunity to further enhance my skills and gain hands-on experience in the software development industry by January 2025.</div>
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <a href={ResumePDF} download="Abdelhamid-LABIHI-Resume.pdf" className="resume-button"><span>View My Resume</span></a>
                  <button onClick={scrollToConnect}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="himg-border-radius"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
