import React from "react";
import MenuCard from "./menucard"; 

const FeaturedMenu = ({ menu }) => {
    return (
        <>
            <div className="section is-medium is-desktop">
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
            </div>
            {/* <MainBtn href={url ? url : (`/${title.toLowerCase()}`)}>View More</MainBtn>
        </div> */}
        </>

    )

};

export default FeaturedMenu;