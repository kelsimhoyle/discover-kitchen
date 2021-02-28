import React from "react";
import Img from "gatsby-image";
import CardStyle from "../styles/card";


const Card = ({ title, image, alt, blurb, sectionName }) => {
    return (
        <>
        <div className={`${ sectionName === 'Services' ? 'is-one-half' : 'is-one-quarter' } column box m-3`}>
                <Img
                    fluid={image.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={alt}
                />
                <h3>{title}</h3>
                {blurb ? (
                    <div>
                        <p>{blurb}</p>
                    </div>
                ) : null}
            </div>
            </>
    )
};

export default Card;