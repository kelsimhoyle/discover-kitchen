import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const pages = ["home", "about", "services", "menu", "contact"];

const Links = styled.div`
  a {
    color: #FFFF;
    margin: .5rem 1rem;
    padding-bottom: .5rem;
    border-bottom: 2px solid #FFFF;
    font-size: ${props => props.theme.fontSizes.small};
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${props => props.theme.device.laptop} {

  }
`;

const NavLinks = () => {
  return (
    <>
      {pages.map(page => (
        <Link
          to={`/${page === "home" ? "" : page}`}
          key={page}
          className="navbar-item"
        >
          {page}
        </Link>
      ))}
    </>
  )
};

export default NavLinks;
