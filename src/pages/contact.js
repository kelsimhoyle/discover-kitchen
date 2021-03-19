import React from "react";
import ContactForm from "../components/contactform";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";
import Layout from "../styles/layout";
import Title from "../styles/title";
import ContactItems from "../styles/contactitems"


const Contact = () => {
    return (
        <Layout>
            <div className="container m-3">
                <Title title="Contact" />
                <div className="columns is-4">
                    <div className="column is-three-quarters">
                        <ContactForm />
                    </div>
                    <div className="column container box m-2">
                        <h3>Let's Connect!</h3>
                        <div>
                            <a href="https://instagram.com/discoverkitchen" target="_blank" rel="noreferrer">
                                <div className="contact-item columns">
                                    <div className="column">
                                        <FaInstagram className="icon" />
                                    </div>
                                    <div className="column">
                                        <p>Follow My Culinary Adventures</p>
                                    </div>
                                </div>
                            </a>

                            <a href="/" target="_blank" rel="noreferrer">
                                <div className="contact-item columns">
                                    <div className="column">
                                        <MdMailOutline className="icon" />
                                    </div>
                                    <div className="cloumn">
                                        <p>E-Mail</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Contact;