import React from "react";
import K from "../images/K.png"
import { Link } from "gatsby";
import ContactItems from "../components/contactitems";

const links = {
    navigation: [
        "Home",
        "About",
        "Services",
        "Menu",
    ],
    more: [
        "FAQs",
        "Contact"
    ]
}

const Footer = () => {

    return (
        <>

            <footer className="footer">
                <div className="columns has-text-centered is-justify-content-space-between is-centered">
                    <div className="column is-one-fifth">
                        <img src={K} alt="Discover Kitchen" className="footer-img px-6" />
                    </div>
       
                            <div className="column is-flex-direction-column is-align-items-center is-one-fifth is-offset-one-fifth">
                                <h4 className="title is-size-5">Navigation</h4>
                                <ul>
                                    {links.navigation.map(link => (
                                        <li>
                                            <Link to={`${link === "Home" ? "/" : `/${link.toLowerCase()}`}`} className="p-3">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="column is-flex-direction-column is-align-items-center is-one-fifth">
                            <h4 className="title is-size-5">Learn More</h4>
                            <ul>
                                {links.more.map(link => (
                                    <li>
                                    <Link to={`/${link.toLowerCase()}`} className="p-3">
                                        {link}
                                    </Link>
                                </li>
                                ))}
                            </ul>

</div>
                            <div className="column is-one-fifth">
                                <h4 className="title is-size-5">Let's Connect!</h4>
                                <div className="is-flex-direction-column	">
                                    <ContactItems footer={true} />
                                </div>
                            </div>
                        </div>

            </footer>
        </>
    )
};

export default Footer;
