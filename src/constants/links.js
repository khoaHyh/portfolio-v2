import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

// Each item is an object to have navigation links all in one place
const data = [
  {
    id: 1,
    text: "work",
    url: "/#projects",
  },
  //{
  //  id: 2,
  //  text: "about",
  //  url: "/#about",
  //},
  // {
  //   id: 4,
  //   text: "blog",
  //   url: "/blog/",
  // },
  {
    id: 2,
    text: "contact",
    url: "/#contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      {/* <Link to={link.url}>{link.text}</Link> */}
      <AnchorLink to={link.url} title={link.text} />
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

// Render links
// General styling that allows for a specific styling as well
// For us in a hamburger nav and regular top nav
export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
