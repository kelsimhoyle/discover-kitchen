import React from "react";
import SEO from "../components/SEO/SEO";
import ContactForm from "../components/contactform";
import Layout from "../styles/layout";
import Title from "../styles/title";
import ContactItems from "../components/contactitems"


const Contact = () => {
    return (
        <Layout>
            <SEO title="Discover Kitchen - Contact" />
            <div className="container m-3">
                <Title title="Contact" />
                <div className="columns is-centered">
                    <div className="column is-half box m-2">
                        <ContactForm />
                    </div>
                    <div className="column is-one-quarter box m-2 has-text-centered">
                        <h3 className="title">Let's Connect!</h3>
                        <p className="m-3 is-size-5">
                            Keep up to date! Follow us and our culinary adventures.
                            </p>
                        <ContactItems />
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Contact;