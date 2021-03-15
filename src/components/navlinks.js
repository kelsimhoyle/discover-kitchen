import React from "react";
import { Link } from "gatsby";

const pages = ["home", "about", "services", "menu", "contact"];

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
