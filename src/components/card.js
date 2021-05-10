import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const Card = ({ title, image, alt, content, sectionName }) => {
    return <>
        <div className={` column box m-3`}>
            <h3 className="has-text-weight-semibold	is-size-4 has-text-centered my-2">{title}</h3>
            <GatsbyImage
                image={getImage(image.localFiles[0])}
                objectFit="cover"
                alt={alt} />
            {content ? (
                <div className="m-6"  dangerouslySetInnerHTML={{
                    __html: content.childMarkdownRemark.html,
                  }} />

            ) : null}
        </div>
    </>;
};

export default Card;