import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import StyledLanding from "../styles/styledlanding";

const Landing = () => (
    <StaticQuery
        query={graphql`query HeadingQuery {
  file(relativePath: {eq: "charcuterieboard.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 1500, height: 800, layout: FIXED)
    }
  }
}
`}
        render={data => (
            <StyledLanding>
                <div className="image">
                <GatsbyImage
                    image={data.file.childImageSharp.gatsbyImageData}
                    objectFit="cover"
                    objectPosition="50% 50%" />
                </div>
                <div className="landing-text box">
                    <h1 className="title">Discover Kitchen</h1>
                    <p>Discover Kitchen is a Denver based personal chef and small businesses caterer. Providing meal solutions for customers to relieve the stress of planning. etc. etc...</p>
                </div>
            </StyledLanding>
        )}
    />

)

export default Landing;