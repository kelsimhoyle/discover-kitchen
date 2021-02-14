import React from "react";
import Card from "../components/card";
import CardContainer from "../styles/cardcontainer";
const CardPage = ({ pathContext }) => {
    const { title, subtitle, data } = pathContext;

    return (
        <>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <CardContainer>
                {data.map(({ title, alt, blurb, image }) => (
                    <Card
                        title={title}
                        fixed={image.childImageSharp.fixed}
                        alt={alt}
                        blurb={blurb}
                    />
                ))}
            </CardContainer>
        </>
    )
};

export default CardPage;