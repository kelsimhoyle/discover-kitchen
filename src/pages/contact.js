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
            <div className="container">
               <Title title="Contact" />
                <div className="columns is-4">
                    <div className="column is-three-quarters">
                    <ContactForm />
                    </div>
                    <div className="column container box">
                        <h3>Let's Connect!</h3>
                        <ContactItems>
                            <a href="https://instagram.com/discoverkitchen" target="_blank">
                                <div className="contact-item">
                                    <FaInstagram className="icon" />
                                    <p>Follow My Culinary Adventures</p>
                                </div>
                            </a>
                            <a href="/" target="_blank">
                                <div className="contact-item">
                                    <MdMailOutline className="icon" />

                                    <p>E-Mail</p>
                                </div>
                            </a>
                        </ContactItems>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Contact;