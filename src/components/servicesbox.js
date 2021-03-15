import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ServicesBox = ({ title, image, alt, blurb }) => {
    return (


        <div className="column box m-3">
            <h4 className="title has-text-centered is-size-4">{title}</h4>
            <GatsbyImage
                image={getImage(image)}
                objectPosition="50% 50%"
                alt={alt}
            />

            <p className="is-size-6 m-5"> {blurb} </p>
        </div>

    )
}

export default ServicesBox;