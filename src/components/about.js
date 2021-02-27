import React from "react";
import Img from "gatsby-image";
import StyledAbout from "../styles/styledabout";

const AboutComponent = ({ text, button, image }) => {
    return (
        <StyledAbout className="about">
        
            <Img
                fluid={image.childImageSharp.fluid}
                alt="Discover Kitchen Portrait"
                // objectFit="cover"
                // objectPosition="50% 50%"
            />
            <div className="content">
            <div className="title">
                <h2>About Discover Kitchen</h2>
                </div>
                <p>{text}</p>
                {/* <MainBtn href={button.href}> {button.text} </MainBtn> */}
            </div>
        </StyledAbout>
    )
};

export default AboutComponent;