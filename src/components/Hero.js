import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
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
          <h4>Software Engineer</h4>
          <AnchorLink to='/#contact' className="btn" title="contact me" />
          <SocialLinks />
        </div>
      </article>
    </div>
  </header>
}

export default Hero
