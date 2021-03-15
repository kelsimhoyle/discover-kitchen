import React from "react";
import { Link } from "gatsby";
import Btn from "../components/btn";
import Card from "./card";

const CardsComponent = ({ title, subtitle, items, url }) => {
    return (
        <div className="section is-medium is-desktop">
            <h3 className="title">{title}</h3>
            <div className="columns">
                {items.map(item => (
                    <Card
                        key={item.title}
                        title={item.title}
                        image={item.image}
                        alt={item.alt}
                        blurb={item.blurb}
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