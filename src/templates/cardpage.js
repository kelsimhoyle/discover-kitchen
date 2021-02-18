import React from "react";
import CardsComponent from "../components/cards";

const CardPage = ({ pageContext }) => {
    const { title, subtitle, data } = pageContext;

    return (
        <>
            <CardsComponent
                title={title}
                subtitle={subtitle}
                items={data}
            />
        </>
    )
};

export default CardPage;