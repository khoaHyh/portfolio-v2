import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes:projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="Home Page" />
      <Hero />
      <Projects projects={projects} title="featured work"
        showLink />
      <About title="about" />
      <Contact title="Contact" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        demo
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`