import React from "react";
import Btn from "../components/btn";
import Card from "./card";

const CardsComponent = ( { title, items, url }) => {

    return (
        <div className="section is-medium is-desktop">
            <h3 className="title">{title}</h3>
            <div className="columns">
                {items.map(item => (
                    
                    <Card
                        key={item.node.data.name}
                        title={item.node.data.name}
                        image={item.node.data.image}
                        alt={item.node.data.name}
                        blurb={item.node.data.content}
                        sectionName={title}
                    />
                ))}
            </div>
            <div className="has-text-centered">
                <Btn
                    to={url ? url : (`/${title.toLowerCase()}`)}
                >
                    View More
                </Btn>
            </div>
        </div>

    )

};

export default CardsComponent;