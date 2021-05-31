import React from "react";
import { Link } from "gatsby";

const pages = ["Services", "Menu", "Contact"];

const NavLinks = () => {
  return (
    <>
      
        <Link to="/" className="navbar-item">Home</Link>

        <div className="navbar-item has-dropdown is-hoverable">
          <Link to="/about" className="navbar-link" >About</Link>

          <div className="navbar-dropdown is-left">
            <Link to="/faq" className="navbar-item">FAQs</Link>
          </div>
        </div>

      {pages.map(page => (
        <p>
          <Link
            key={page}
            to={`/${page.toLowerCase()}`}
            className="navbar-item"
          >
            {page}
          </Link>
        </p>
      ))}
    </>
  )
};

export default NavLinks;
