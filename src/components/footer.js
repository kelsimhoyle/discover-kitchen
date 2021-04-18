import React from "react";
import K from "../images/K.png"
import NavLinks from "./navlinks";
import ContactItems from "../components/contactitems";

const Footer = () => {

    return (
        <>

            <footer className="footer">
                <div className="columns has-text-centered is-justify-content-space-between	">
                    <div className="column">
                        <img src={K} alt="Discover Kitchen" className="footer-img" />
                    </div>
                    <div className="column is-three-quarters">
                        <div className="columns">
                            <div className="column is-align-items-center is-one-quarter is-offset-one-quarter">
                                <h4 className="title is-size-5">Site Links</h4>
                                <div className="is-flex-direction-column">
                                    <NavLinks footer={true} />
                                </div>
                            </div>
                            <div className="column is-one-quarter">
                                <h4 className="title is-size-5">Let's Connect!</h4>
                                <ContactItems footer={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
