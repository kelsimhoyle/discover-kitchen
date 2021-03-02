import React from "react";
import ContactForm from "../components/contactform";
import styled from "styled-components";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";

const ContactItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    
    .icon {
        font-size: 2rem;
    }

    .contact-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1rem;
        color: white;
    }
`

const Connect = styled.div`
    background: ${props => props.theme.colors.red};
    border-radius: .5rem;
    margin: 1rem;

    h3 {
        text-align: center;
        padding: .5rem;
    }
`

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media ${props => props.theme.device.laptop} {
        flex-direction: row;
    }

`

const Contact = () => {
    return (
        <>
            <h2>Contact</h2>
            <p>Let's get cookin'!</p>
            <Page>

                <ContactForm />
                <Connect>
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
                </Connect>
            </Page>
        </>
    )
};

export default Contact;