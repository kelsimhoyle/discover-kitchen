import React from "react";
import { Link } from "gatsby";

const pages = ["Home", "About", "Services", "Menu", "Contact"];

const NavLinks = ({ footer }) => {
  return (
    <>
      {pages.map(page => (
        <div className="m-2">
          <Link
            to={`/${page === "Home" ? "" : page.toLowerCase()}`}
            key={page}
            className={`${footer ? null : "navbar-item"}  p-2`}
          >
            {page}
          </Link>
        </div>
      ))}
    </>
  )
};

export default NavLinks;
