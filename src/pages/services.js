import React from "react";
import { graphql } from "gatsby";
import Layout from "../styles/layout";
import ServicesBox from "../components/servicesbox";

const Services = ({ data }) => {
    const pageData = data.pagesJson;
    const services = pageData.data.childDataJson.items;

    return (
      <Layout>
        <div className="container">
            <section className="hero">
                <div className="hero-body">
                    <h2 className="title">
                        {pageData.title}
                    </h2>
                    <p className="subtitle">
                        {pageData.subtitle}
                    </p>
                </div>
            </section>

            {services.map(service => (
                <ServicesBox
                    title={service.title}
                    image={service.image}
                    alt={service.alt}
                    blurb={service.blurb}
                />
            ))}
        </div>
        </Layout>
    )
}

export const ServicesQuery = graphql`{

        pagesJson(title: {eq: "Services"}) {
          subtitle
          title
          data {
            childDataJson {
              id
              items {
                alt
                blurb
                title
                image {
                  childImageSharp {
                    id
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }

}`


export default Services;