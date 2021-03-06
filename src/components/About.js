import React from "react"
import Title from "../components/Title"
// import { graphql } from "gatsby"
// import Image from "gatsby-image"

const About = ({ title }) => {
  return  <section id="about" className="about-page">
    <Title title={title} />
    <div className="section-center about-center">
      <article className="about-text">
          <p>
            Hello! I'm a web developer based in Toronto, Ontario, Canada. 
            I enjoy solving problems and working to make difference for the future
            of humanity. My aim is to use my experiences in life and apply that to
            my work, in hopes that it will make a difference for the better.
          </p>
          <p className="hobby-list_header">Outside of work, I enjoy:</p>
          <ul className="hobby-list">
            <li>Practicing Jiu-jitsu and MMA</li>
            <li>Expressing myself through street dance culture</li>
            <li>Playing video games</li>
          </ul>
          <p>
            Below are some of the technologies I have been working with recently:
          </p>
          <div className="about-stack">
            <span>html & css</span>
            <span>javascript</span>
            <span>react.js</span>
            <span>postgresql</span>
            <span>node.js</span>
            <span>express.js</span>
          </div>
      </article>
    </div>
  </section>
}

// const About = ({ 
//   data: {
//     about:{ nodes },
//   },
// }) => {
//   const { title, stack, info, info2, info3, image} = nodes[0]


//   return  <section className="about-page">
//     <div className="section-center about-center">
//     <Image fluid={image.childImageSharp.fluid} className="about-img" />
//       <article className="about-text">
//           <Title title={title} />
//           <p>{info}</p>
//           <p>{info2}</p>
//           <p>{info3}</p>
//           <div className="about-stack">
//             {stack.map((item) => {
//               return <span key={item.id}>{item.title}</span>
//             })}
//           </div>
//       </article>
//     </div>
//   </section>
// }

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