import React from "react";
import Nav from "./nav";
import StyledHeader from "../styles/styledheader";
import DK from "../images/DiscoverKitchen.png";

const Header = () => {
    return (
        <StyledHeader>
        <img src={DK} alt="Discover Kitcehn" />
            <Nav />
        </StyledHeader>
    )
};

export default Header