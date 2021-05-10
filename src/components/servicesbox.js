import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ServicesBox = ({ title, image, alt, content }) => {
    return (


        <div className="column box m-3">
            <h4 className="title has-text-centered is-size-4">{title}</h4>
            <GatsbyImage
                image={getImage(image)}
                objectPosition="50% 50%"
                alt={title}
            />
            <div className="m-5"
                dangerouslySetInnerHTML={{
                    __html: content.childMarkdownRemark.html,
                }} />
        </div>

    )
}

export default ServicesBox;