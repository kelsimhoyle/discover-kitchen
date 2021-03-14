import React from "react";
import { graphql } from "gatsby";
import Layout from "../styles/layout";
import FeaturedMenu from "../components/featuredmenu";

const Menu = ({ data }) => {
    let menu = data.allAirtable.edges

    return (
        <Layout>
        <div className="container">
            <section className="hero">
                <div className="hero-body">
                    <h2 className="title">
                        Menu
                    </h2>
                    <p className="subtitle">
                        Specialties and Favorites
                    </p>
                </div>
            </section>

            <div className="container">
                <FeaturedMenu
                    menu={menu}
                />
            </div>
            <p>Full menu list coming soon.</p>
        </div>
        </Layout>
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