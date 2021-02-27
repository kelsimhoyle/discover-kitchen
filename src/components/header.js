import React, { useState } from "react";
import { Link } from "gatsby";
import NavLinks from "./navlinks";
import StyledHeader from "../styles/styledheader";
import DK from "../images/DiscoverKitchen.png";

const Header = () => {
    const [isActive, setisActive] = useState(false)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src={DK} alt="Discover Kitcehn" />
                </Link>
            </div>

            <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                onClick={() => setisActive(!isActive)}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>

            <div id="dk-nav" className={`navbar-menu ${isActive ? 'is-active' : '' }`}>
                <div className="navbar-end">
                    <NavLinks />
                </div>

            </div>
            </div>
        </nav>

    )
};

export default Header