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
            <>
                <StyledLanding>
                    <div className="image">
                        <Img
                            fixed={data.file.childImageSharp.fixed}
                            objectFit="cover"
                        // objectPosition="50% 50%"
                        />
                    </div>
                    <div className="landing-text">
                        <h1 className="is-size-2 has-text-weight-medium	">Discover Kitchen</h1>
                    </div>
                </StyledLanding>
                <div className="about-text section is-medium has-text-centered">
                    <p className="is-size-4">Discover Kitchen is a Denver based personal chef and small businesses caterer. Providing meal solutions for customers to relieve the stress of planning. etc. etc...</p>
                </div>
            </>
        )}
    />

)

export default Landing;