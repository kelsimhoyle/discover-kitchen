import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import MainBtn from "../styles/mainbtn";
import StyledAbout from "../styles/styledabout";

const AboutComponent = () => {
    return (
        <StaticQuery
            query={graphql`
        query PortraitQuery {
            file(relativePath: { eq: "portrait.jpg" }) {
            childImageSharp {
        fixed(width: 300, height: 400) {
            ...GatsbyImageSharpFixed
          }
      }
   }
        }
      `}
            render={data => (
                <StyledAbout className="about">
                        <Img
                            fixed={data.file.childImageSharp.fixed}
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
                        <div>
                        <h2>About Discover Kitchen</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius morbi enim nunc. Malesuada fames ac turpis egestas. Sagittis vitae et leo duis ut diam quam. A arcu cursus vitae congue mauris rhoncus aenean vel.</p>
                        <MainBtn>Schedule Consultation</MainBtn>
                        </div>
                </StyledAbout>
            )}
        />

    )
};

export default AboutComponent;