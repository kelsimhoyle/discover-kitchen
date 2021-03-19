import React from "react";
import { graphql } from "gatsby";
import Layout from "../styles/layout";
import SEO from "../components/SEO/SEO";
import Title from "../styles/title";
import Btn from "../components/btn";
import FeaturedMenu from "../components/featuredmenu";

const Menu = ({ data }) => {
    let menu = data.allAirtable.edges

    return (
        <Layout>
            <SEO title="Discover Kitchen - Menu" />
            <div className="container">
                <Title title="Menu" />
                <div className="section m-2">
                <FeaturedMenu
                    menu={menu}
                />
                </div>
                <div className="columns m-2">
                    <div className="column has-text-centered">
                        <Btn to="/services">View Services</Btn>
                    </div>
                    <div className="column has-text-centered">
                        <Btn to="/contact">Contact Us</Btn>
                    </div>
                </div>
                <div className="section is-medium has-text-centered	mx-6">
                    <p className="is-size-4">Full menu coming soon!</p>
                </div>


            </div>
        </Layout >
    )
}

export const MenuQuery = graphql`{
    allAirtable(filter: {data: {featured: {eq: true}}}) {
        edges {
        node {
            id
            data {
            available
            category
            featured
            item
            description
            image {
                localFiles {
                childImageSharp {
                    gatsbyImageData(                  
                        width: 500,
                        height: 500,
                        placeholder: BLURRED
                        )
                }
                }
            }
            }
        }
        }
    }
}
`

export default Menu;