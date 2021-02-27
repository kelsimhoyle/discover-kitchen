import React from "react";

const Services = ({ title, image, alt, blurb }) => {
    return (
        <div className="columns">
            <div className="column is-one-third">
            {/* <Img
                    fluid={image.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={alt}
                /> */}
            </div>
            <div className="column">
                <h3>{title}</h3>
                {blurb ? (
                    <div>
                        <p>{blurb}</p>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Services;