import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        image
        siteUrl
        title
        twitterUsername
      }
    }
  }
`

const SEO = () => {
  const { site } = useStaticQuery(query)
  const {
    description,
    title,
    siteUrl,
    image,
    type,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta name="title" property="og:title" content={title} />
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta name="author" content="@khoaHyh" />
      <meta name="image" property="og:image" content={image} />
      {/* twitter cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
