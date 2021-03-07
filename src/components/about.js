import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import StyledAbout from "../styles/styledabout";

const AboutComponent = ({ text, button, image }) => {
    return (
        <StyledAbout className="about">
        
            <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                // objectFit="cover"
                // objectPosition="50% 50%"
                alt="Discover Kitchen Portrait" />
            <div className="content">
            <div className="title">
                <h2>About Discover Kitchen</h2>
                </div>
                <p>{text}</p>
                {/* <MainBtn href={button.href}> {button.text} </MainBtn> */}
            </div>
        </StyledAbout>
    );
};

export default AboutComponent;