import React from "react"
import Title from "./Title"
import Project from "./Project"
import { FaGithub } from "react-icons/fa"

// import { Link } from "gatsby"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section id="projects" className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      <div className="project-more-container">
        <a
          href="https://github.com/khoaHyh?tab=repositories"
          className="project-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          View more projects
          <span>
            <FaGithub
              style={{
                marginLeft: "0.25rem",
                transform: "translateY(23%)",
                fontSize: "1.6rem",
              }}
            />
          </span>
        </a>
      </div>

      {/* {showLink && (
      <Link to='/projects' className="btn center-btn">
        more projects
      </Link>
    )} */}
    </section>
  )
}

export default Projects
