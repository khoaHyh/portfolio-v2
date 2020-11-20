import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaEye } from "react-icons/fa"

// For use in 'Featured Projects' and 'Projects Page'
const Project = ({ description, title, github, stack, demo, image, index }) => {
  // // console log unique props to check for errors
  // console.log({ title, demo, github, image })

  return <article className="project">
    {image && 

    <Image fluid={image.childImageSharp.fluid} 
      className="project-img" />
    }
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h3>{title || "default title"}</h3>
      <p className="project-description">
        {description}
      </p>
      <div className="project-stack">
        {stack.map((item) => {
          
          return <span key={item.id}>{item.title}</span>
        })}
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <FaEye className="project-icon" />
        </a>
      </div>
    </div>
  </article>
}

// typechecking
// used for when you aren't the one setting up the back-end api
Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
