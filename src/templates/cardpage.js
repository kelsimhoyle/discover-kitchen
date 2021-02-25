import React from "react";
import styled from "styled-components";
import CardsComponent from "../components/cards";

const Page = styled.div`
    width: 90vw;
    margin: auto;

    p {
        font-weight: bold;
        margin: 2rem;
    }
`

const CardPage = ({ pageContext }) => {
    const { title, subtitle, data, content } = pageContext;

    return (
        <Page>
            <CardsComponent
                title={title}
                subtitle={subtitle}
                items={data}
            />
            <p>{content}</p>
        </Page>
    )
};

export default CardPage;