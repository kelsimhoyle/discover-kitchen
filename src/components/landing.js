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
            <Img 
                fixed={data.file.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%" 
            />
            <div>
                <h1>Discover Kitchen</h1>
            </div>
            </StyledLanding>
        )}
    />

)

export default Landing;