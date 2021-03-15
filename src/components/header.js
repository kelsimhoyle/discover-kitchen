import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import NavLinks from "./navlinks";

const Header = () => {
    const [isActive, setisActive] = useState(false)

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                    <StaticImage
                        src="../images/DiscoverKitchen.png"
                        alt="Discover Kitchen"
                        placeholder="blurred"
                        layout="fixed"
                        width={175}
g                        objectFit="cover"
                    />
                    </Link>

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
                    </div>

                    <div id="dk-nav" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                        <div className="navbar-end" onClick={() => setisActive(false)}>
                            <NavLinks />
                        </div>

                    </div>
                </div>
            
        </nav>

    )
};

export default Header