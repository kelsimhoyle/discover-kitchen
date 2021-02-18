import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Card from "./card";
import Title from "./title";
import MainBtn from "../styles/mainbtn";
import CardContainer from "../styles/cardcontainer"

const CardsComponent = ({ title, subtitle, items, url }) => {
    return (

        <div className={title}>
        <Title title={title} subtitle={ subtitle ? subtitle : ""} />
        <CardContainer>
            { items.map(item => (
                <Card 
                    key={item.title}
                    title={item.title}
                    fixed={item.image.childImageSharp.fixed}
                    alt={item.alt}
                    blurb={item.blurb}
                />
            ))}
        </CardContainer>

        <MainBtn href={url ? url : (`/${title.toLowerCase()}`)}>View More</MainBtn>
        </div>
    )
    
};

export default CardsComponent;