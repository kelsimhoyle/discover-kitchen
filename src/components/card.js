import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const Card = ({ title, image, alt, blurb, sectionName }) => {
    return <>
        <div className={` column box m-3`}>
            <h3 className="has-text-weight-semibold	is-size-4 has-text-centered my-2">{title}</h3>
            <GatsbyImage
                image={getImage(image.localFiles[0])}
                objectFit="cover"
                alt={alt} />
            {blurb ? (
                <div className="m-6">
                    <p>{blurb}</p>
                </div>
            ) : null}
        </div>
    </>;
};

export default Card;