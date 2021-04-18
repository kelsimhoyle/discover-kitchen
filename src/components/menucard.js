import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MenuCard = ({ title, image, alt }) => {
    const img = getImage(image)
    return (<>
        <div className={`is-one_third column box m-3 has-text-centered`}>
            <h3 className="has-text-weight-semibold	is-size-4 has-text-centered	">{title}</h3>
            <GatsbyImage
                image={img}
                objectPosition="50% 50%"
                alt={alt} />
        </div>
    </>);
};

export default MenuCard;