import React from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

const contact = [
    {
        name: "Instagram",
        href: "https://instagram.com/discoverkitchen",
        icon: <FaInstagram />
    },
    {
        name: "Facebook",
        href: "https://instagram.com/discoverkitchen",
        icon: <FaFacebook />
    },
    {
        name: "E-Mail",
        href: "https://instagram.com/discoverkitchen",
        icon: <MdMailOutline />
    }
]

const ContactItems = ({ footer }) => (
    <div>
        {contact.map(c => (
            <div className="m-2">
                <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`button is-medium p-2 ${footer ? "is-ghost" : "is-fullwidth"}`}
                >
                    <span className="icon is-medium">
                        {c.icon}
                    </span>
                    <span>{c.name}</span>
                </a>
            </div>
        ))}
    </div>

);

export default ContactItems;