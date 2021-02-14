import React from "react";
import { Link } from "gatsby";
import StyledNavLinks from "../styles/navlinks";

const pages = ["home", "about", "services", "menu", "contact"]

const NavLinks = () => {
    return (
       <StyledNavLinks>
        {pages.map(page => (
            <Link to={`/${page == "home" ? "" : page}`} key={page}>{page}</Link>
        ))}
       </StyledNavLinks>
    )
};

export default NavLinks;
