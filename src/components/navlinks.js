import React from "react";
import { Link } from "gatsby";

const pages = ["Home", "About", "Services", "Menu", "Contact"];

const NavLinks = ({ footer }) => {
  return (
    <>
      {pages.map(page => (
        <div className="m-2" key={page}
        >
          <Link
            to={`/${page === "Home" ? "" : page.toLowerCase()}`}
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
