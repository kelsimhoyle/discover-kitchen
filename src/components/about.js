import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import MainBtn from "../styles/mainbtn";
import StyledAbout from "../styles/styledabout";

const AboutComponent = ({ text, button, image }) => {
    return (
        <StyledAbout className="about">
            <Img
                fixed={image.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
            />
            <div>
                <h2>About Discover Kitchen</h2>
                <p>{text}</p>
                <MainBtn href={button.href}> {button.text} </MainBtn>
            </div>
        </StyledAbout>
    )
};

export default AboutComponent;