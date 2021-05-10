import React from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { useStaticQuery, graphql } from "gatsby";

const ContactItems = ({ footer }) => {

    // const icon = name => {
        const icons = {
            "E-mail": <MdMailOutline />,
            "Instagram": <FaInstagram />,
            "Facebook": <FaFacebook />
        }

    //     return icons[name] ?? null;
    // };

    const data = useStaticQuery(graphql`
        query Contact {
            allAirtable(filter: {table: {eq: "Site Data"}, data: {page: {in: "Contact"}}}) {
                edges {
                  node {
                    id
                    data {
                      name
                      content {
                        childMarkdownRemark {
                          rawMarkdownBody
                        }
                      }
                    }
                  }
                }
              }
            }
    `)


    return (

        <div>
            {data.allAirtable.edges.map(c => (
                <div className="m-2" key={c.node.id}>
                    <a
                        href={c.node.data.content.childMarkdownRemark.rawMarkdownBody}
                        target="_blank"
                        rel="noreferrer"
                        className={`button p-2 ${footer ? "is-ghost" : "is-fullwidth is-medium"}`}
                    >
                        <span className="icon is-medium">
                            {icons[c.node.data.name]}
                        </span>
                        <span>{c.node.data.name}</span>
                    </a>
                </div>
            ))}
        </div>

    )

};

export default ContactItems;