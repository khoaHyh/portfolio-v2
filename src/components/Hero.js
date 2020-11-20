import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// import Image from "gatsby-image"
// import { graphql, useStaticQuery } from "gatsby"

// const query = graphql`
//   {
//     file(relativePath: {eq: "hero-img.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const Hero = () => {
  // const {
  //   file: {
  //     childImageSharp:{ fluid },
  //   },
  // } = useStaticQuery(query)

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <h1 className="hero-hi">Hi!</h1>
          <h1>I'm <strong>Khoa Huynh</strong></h1>
          <h4>Web Developer</h4>
          <Link to='/contact' className="btn">
            contact me
          </Link>
          <SocialLinks />
        </div>
      </article>
    </div>
  </header>
}

export default Hero
