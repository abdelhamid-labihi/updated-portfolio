import { Col } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";


export const ProjectCard = ({ title, description, imgUrl, techS, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img  className= "prj-img" alt="project-img" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <hr/>
          <div className="tech-icons">
            <div className="icons">
              {techS && techS.length > 0 ? (
                techS.map((tech, index) => (
                  <span key={tech.name} className="tech-icon">{tech.icon}</span>
                ))
              ) : (
                <span></span>
              )}
            </div>

            {link && link.length > 0 ? (
              <a href={link} className="prj-link" target="_blank" rel="noopener noreferrer">
                Project Link <FaExternalLinkAlt/>
              </a>
              ) : (
                <span></span>
              )
            }
          </div>
        </div>
      </div>
    </Col>
  )
}
