import React from "react"
import Title from "../components/Title"
// import { graphql } from "gatsby"
// import Image from "gatsby-image"

const About = ({ 
  data: {
    about:{nodes},
  },
}) => {
//   const { title, stack, info, info2, info3, image} = nodes[0]
  const { title, stack, info, info2, info3 } = nodes[0]


  return  <section className="about-page">
    <div className="section-center about-center">
    {/* <Image fluid={image.childImageSharp.fluid} className="about-img" /> */}
    <article className="about-text">
        <Title title={title} />
        <p>{info}</p>
        <p>{info2}</p>
        <p>{info3}</p>
        <div className="about-stack">
        {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>
        })}
        </div>
    </article>
    </div>
  </section>
}

// export const query = graphql`
//   {
//     about:allStrapiAbout {
//       nodes {
//         stack {
//           id
//           title
//         }
//         title
//         info
//         info2
//         info3
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default About