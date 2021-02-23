import React from "react";
import Img from "gatsby-image";
import CardStyle from "../styles/card";


const Card = ({ title, image, alt, blurb }) => {
    return (
        <CardStyle>
            <h3>{title}</h3>
            <Img
                fluid={image.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={alt}
            />
            { blurb ? (
                <div>
                    {blurb}
                </div>
            ) : null }
        </CardStyle>
    )
};

export default Card;