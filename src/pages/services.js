import React from "react";
import { graphql } from "gatsby";
import { GiCalendar } from "@react-icons/all-files/gi/GiCalendar";
import { GiPhone } from "@react-icons/all-files/gi/GiPhone";
import { GiCookingPot } from "@react-icons/all-files/gi/GiCookingPot";
import Seo from "../components/SEO/SEO";
import Btn from "../components/btn";
import Title from "../styles/title";
import ServicesBox from "../components/servicesbox";

const Services = ({ data }) => {
  const services = data.allAirtable.edges;

  return (
    <>
      <Seo title="Discover Kitchen - Services" />
      <div className="container">
        <Title title="Services" />
        <div className="columns m-2">
          {services.map(service => (
            <ServicesBox
              title={service.node.data.name}
              image={service.node.data.image.localFiles[0]}
              alt={service.node.data.name}
              blurb={service.node.data.content}
              key={service.node.id}
            />
          ))}
        </div>
        <div className="section is-medium has-text-centered	mx-6">
          <h4 className="title">Let's get cooking!</h4>
          <div className="columns">
            <div className="column box has-text-centered m-3">
              <GiPhone className="is-size-1" />
              <p className="m-2 is-size-5">First, we will do a discovery call to learn about your needs and how we can help you.</p>
            </div>
            <div className="column box has-text-centered m-3">
              <GiCalendar className="is-size-1" />
              <p className="m-2 is-size-5">We will schedule a time for services. Then we will send over a menu and contract for approval.</p>
            </div>
            <div className="column box has-text-centered m-3">
              <GiCookingPot className="is-size-1" />
              <p className="m-2 is-size-5">We do the ingredient shopping and come to your kitchen to complete the cooking!</p>
            </div>
          </div>

          <div className="has-text-centered">
            <Btn
              to="/contact"
            >
              Contact
                </Btn>
          </div>
        </div>


      </div>

    </>
  )
}

export const ServicesQuery = graphql`{
  allAirtable(filter: {table: {eq: "Site Data"}, data: {page: {in: "Services"}}}) {
    edges {
      node {
        id
        data {
          name
          content
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 700
                  placeholder: BLURRED
                  transformOptions: {fit: COVER, cropFocus: CENTER}
                )
              }
            }
          }
        }
      }
    }
  }
}`


export default Services;