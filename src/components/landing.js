import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import StyledLanding from "../styles/styledlanding";

const Landing = () => (
    <StaticQuery
        query={graphql`
        query HeadingQuery {
            file(relativePath: { eq: "charcuterieboard.jpg" }) {
            childImageSharp {
        fixed(width: 1500, height: 800) {
            ...GatsbyImageSharpFixed
          }
      }
   }
        }
      `}
        render={data => (
            <StyledLanding>
                <div className="image">
                <Img
                    fixed={data.file.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                />
                </div>
                <div className="landing-text box">
                    <h1>Discover Kitchen</h1>
                    <p>Discover Kitchen is a Denver based personal chef and small businesses catering......</p>
                </div>
            </StyledLanding>
        )}
    />

)

export default Landing;