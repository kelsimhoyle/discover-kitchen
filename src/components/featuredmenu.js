import React from "react";
import Btn from "../components/btn";
import MenuCard from "./menucard";

const FeaturedMenu = ({ menu, viewMore }) => {
    return (
        <>
            <h3 className="title">Featured Menu</h3>
            <div className="columns">
                {menu.map(item => (
                    <MenuCard
                        key={item.node.data.id}
                        title={item.node.data.item}
                        image={item.node.data.image.localFiles[0]}
                        description={item.node.data.description}
                        alt={item.node.data.item}
                    />
                ))}
            </div>

            {viewMore ? (
                <div className="has-text-centered">
                    <Btn
                        to="/menu"
                    >
                        View More
                    </Btn>
                </div>
            ) : null}

        </>

    )

};

export default FeaturedMenu;