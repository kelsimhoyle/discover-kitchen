import React from "react";
import { Link } from "gatsby";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import K from "../images/K.png"

const Footer = () => {

    return (
        <>

            <footer className="footer">
                <div className="columns has-text-centered">
                    <div className="column">
                        <img src={K} alt="Discover Kitchen" className="footer-img" />
                    </div>
                    <div className="column is-three-quarters">
                        <div className="columns">
                            <div className="column">
                                <h4>Site Links</h4>
                                <ul className="links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/menu">Menu</Link></li>
                                </ul>
                            </div>
                            <div className="column">
                                <h3>Let's Connect!</h3>
                                <a href="https://instagram.com/discoverkitchen" target="_blank" rel="noreferrer">
                                    <div className="contact-item">
                                        <FaInstagram className="icon" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
