import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Img } from "gatsby-image";


const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "DiscoverKitchen.png" }) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid
            }
        }
      }
    }
  `)

  console.log(data)
  return (
    <>
  <Img fluid={data.file.childImageSharp.fluid} />
  </>
  )
}

export default HeaderImage;