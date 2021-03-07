import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


const HeaderImage = () => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "DiscoverKitchen.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)

  console.log(data)
  return <>
<GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
</>;
}

export default HeaderImage;