import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ServicesBox = ({ title, image, alt, blurb }) => {
    return (

        <div className="columns is-justify-content-center my-6">
            <div className="column is-two-thirds box">
                <h4 className="title has-text-centered">{title}</h4>
                <GatsbyImage
                    image={getImage(image)}
                    objectPosition="50% 50%"
                    alt={alt}
                />

                <p> {blurb} </p>
            </div>
        </div>

    )
}

export default ServicesBox;