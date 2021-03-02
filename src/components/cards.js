import React from "react";
import Card from "./card";

const CardsComponent = ({ title, subtitle, items, url }) => {
    return (
        <>
            {/* // <div>
        //     <div className="title">
        //         <Title title={title} subtitle={subtitle ? subtitle : ""} />
        //     </div> */}

            <div className="section is-medium is-desktop">
            <h3 className="title">{ title }</h3>
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
            </div>
            {/* <MainBtn href={url ? url : (`/${title.toLowerCase()}`)}>View More</MainBtn>
        </div> */}
        </>

    )

};

export default CardsComponent;