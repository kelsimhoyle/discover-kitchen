import React from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

const ContactItems = () => (
    <>
        <div>
            <div className="m-2">
                <a
                    href="https://instagram.com/discoverkitchen"
                    target="_blank"
                    rel="noreferrer"
                    className="button is-medium is-fullwidth p-2"
                >
                    <span className="icon is-medium">
                        <FaInstagram className="icon" />
                    </span>
                    <span>Instagram</span>
                </a>
            </div>
            <div className="m-2">
                <a
                    href="https://instagram.com/discoverkitchen"
                    target="_blank"
                    rel="noreferrer"
                    className="button is-medium is-fullwidth p-2"
                >
                    <span className="icon is-medium">
                        <FaFacebook className="icon" />
                    </span>
                    <span>Facebook</span>
                </a>
            </div>
            <div className="m-2">
                <a
                    href="https://instagram.com/discoverkitchen"
                    target="_blank"
                    rel="noreferrer"
                    className="button is-medium is-fullwidth p-2"
                >
                    <span className="icon is-medium">
                        <MdMailOutline className="icon" />
                    </span>
                    <span>E-Mail</span>
                </a>
            </div>
        </div>

    </>
)

export default ContactItems;