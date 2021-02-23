import React from "react";
import Card from "./card";
import Title from "./title";
import MainBtn from "../styles/mainbtn";
import CardContainer from "../styles/cardcontainer"

const CardsComponent = ({ title, subtitle, items, url }) => {
    return (

        <div className={`${title} card-comp`}>
        <Title title={title} subtitle={ subtitle ? subtitle : ""} />
        <CardContainer>
            { items.map(item => (
                <Card 
                    key={item.title}
                    title={item.title}
                    image={item.image}
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